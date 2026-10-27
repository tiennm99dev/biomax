<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { rng } from '#lib/core/drill.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import { button, focusRing, textInput } from '#lib/core/ui.js';
  import {
    BASE_COLORS,
    BASE_NAMES,
    DNA_BASES,
    MAX_PAIRS,
    helixAt,
    pairs,
    partner,
    randomStrand,
    sanitize,
    stats,
  } from './engine.js';

  let mode = $state('build');
  let seed = $state(5);

  // Build mode: the learner writes strand 1, strand 2 follows.
  let strand = $state('ATGCGTACCATTGAC');
  const info = $derived(stats(strand));

  /** @param {string} b */
  function add(b) {
    strand = sanitize(strand + b);
  }

  // Pairing mode: the learner writes strand 2 base by base.
  let target = $state('TACGGATC');
  /** @type {string[]} */
  let built = $state([]);
  /** @type {{ tone: 'ok' | 'warn' | 'info', text: string }} */
  let pairNote = $state({
    tone: 'info',
    text: 'Chọn nucleotide bổ sung cho vị trí đang sáng trên mạch 1.',
  });
  const pairDone = $derived(built.length === target.length);

  /** @param {string} b */
  function place(b) {
    if (pairDone) return;
    const want = target[built.length];
    if (pairs(want, b)) {
      built = [...built, b];
      pairNote =
        built.length === target.length
          ? {
              tone: 'ok',
              text: `Hoàn thành: mạch 2 là ${built.join('')}. Mỗi A ghép với T bằng $2$ liên kết hydrogen, mỗi G ghép với C bằng $3$ liên kết hydrogen: tổng ${stats(target).hBonds} liên kết hydrogen.`,
            }
          : {
              tone: 'ok',
              text: `Đúng: ${want} – ${b} (${want === 'A' || want === 'T' ? '2' : '3'} liên kết hydrogen).`,
            };
    } else {
      pairNote = {
        tone: 'warn',
        text: `Chưa đúng: ${BASE_NAMES[want]} (${want}) chỉ ghép cặp với ${BASE_NAMES[partner(want)]} (${partner(want)}), không ghép với ${b}.`,
      };
    }
  }

  function newTarget() {
    seed += 1;
    target = randomStrand(rng(seed), 8);
    built = [];
    pairNote = { tone: 'info', text: 'Chọn nucleotide bổ sung cho vị trí đang sáng trên mạch 1.' };
  }

  // Drawing.
  const top = $derived(mode === 'build' ? strand : target);
  const bottom = $derived(
    mode === 'build' ? [...strand].map(partner) : [...target].map((_, i) => built[i] ?? ''),
  );
  const W = 360;
  const MID = 92;
  const AMP = 34;
  const n = $derived(Math.max(top.length, 1));
  const dx = $derived(Math.min(26, (W - 40) / n));
  const x0 = $derived((W - dx * (n - 1)) / 2);
  /** @param {number} i */
  const xAt = (i) => x0 + i * dx;

  /** Backbone path of strand 1 or 2, sampled every quarter pair. */
  const backbone = $derived.by(() => {
    /** @param {1 | 2} which */
    const path = (which) => {
      const pts = [];
      for (let t = -0.5; t <= n - 0.5 + 1e-9; t += 0.25) {
        const h = helixAt(t, AMP);
        pts.push(`${(x0 + t * dx).toFixed(1)} ${(MID + (which === 1 ? h.y1 : h.y2)).toFixed(1)}`);
      }
      return `M ${pts.join(' L ')}`;
    };
    return { s1: path(1), s2: path(2) };
  });

  const bases = DNA_BASES;
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Chế độ"
    bind:value={mode}
    options={[
      { value: 'build', label: 'Tạo phân tử DNA' },
      { value: 'pair', label: 'Tự ghép cặp' },
    ]}
  />

  {#if mode === 'build'}
    <label class="block text-sm font-semibold text-slate-700">
      Mạch 1 (5' → 3'), tối đa {MAX_PAIRS} nucleotide
      <input
        class="{textInput} mt-1 font-mono tracking-widest uppercase"
        value={strand}
        oninput={(e) => {
          strand = sanitize(e.currentTarget.value);
          e.currentTarget.value = strand;
        }}
        autocomplete="off"
        spellcheck="false"
      />
    </label>
    <div class="flex flex-wrap gap-2" role="group" aria-label="Thêm nucleotide vào mạch 1">
      {#each bases as b (b)}
        <button
          type="button"
          class="min-h-11 min-w-11 rounded-lg font-mono text-lg font-bold text-white {focusRing}"
          style="background-color: {BASE_COLORS[b]}"
          aria-label="Thêm {BASE_NAMES[b]} ({b})"
          disabled={strand.length >= MAX_PAIRS}
          onclick={() => add(b)}>{b}</button
        >
      {/each}
      <button
        type="button"
        class={button.quiet}
        onclick={() => (strand = strand.slice(0, -1))}
        disabled={!strand.length}
        aria-label="Xoá nucleotide cuối">⌫</button
      >
      <button
        type="button"
        class={button.quiet}
        onclick={() => {
          seed += 1;
          strand = randomStrand(rng(seed), 15);
        }}>Ngẫu nhiên</button
      >
    </div>
  {:else}
    <div class="flex flex-wrap gap-2" role="group" aria-label="Chọn nucleotide cho mạch 2">
      {#each bases as b (b)}
        <button
          type="button"
          class="min-h-11 min-w-11 rounded-lg font-mono text-lg font-bold text-white disabled:opacity-40 {focusRing}"
          style="background-color: {BASE_COLORS[b]}"
          aria-label="Ghép {BASE_NAMES[b]} ({b})"
          disabled={pairDone}
          onclick={() => place(b)}>{b}</button
        >
      {/each}
      <button
        type="button"
        class={button.quiet}
        disabled={!built.length}
        onclick={() => {
          built = built.slice(0, -1);
          pairNote = {
            tone: 'info',
            text: 'Đã gỡ nucleotide cuối. Chọn nucleotide bổ sung cho vị trí đang sáng trên mạch 1.',
          };
        }}>Gỡ nucleotide cuối</button
      >
      <button type="button" class={button.quiet} onclick={newTarget}>Đoạn khác</button>
    </div>
  {/if}

  <svg
    viewBox="0 0 {W} 184"
    class="block w-full"
    role="img"
    aria-label="Chuỗi xoắn kép: mạch 1 {top || 'trống'}, mạch 2 {bottom.join('') || 'trống'}"
  >
    <text x="6" y="20" font-size="10" fill="#334155">5'</text>
    <text x={W - 16} y="20" font-size="10" fill="#334155">3'</text>
    <text x="6" y="176" font-size="10" fill="#334155">3'</text>
    <text x={W - 16} y="176" font-size="10" fill="#334155">5'</text>
    {#if top.length}
      <path d={backbone.s2} fill="none" stroke="#94a3b8" stroke-width="4" stroke-linecap="round" />
      {#each [...top] as b, i (i)}
        {@const h = helixAt(i, AMP)}
        {@const p = bottom[i]}
        {@const ymid = MID + (h.y1 + h.y2) / 2}
        <line
          x1={xAt(i)}
          x2={xAt(i)}
          y1={MID + h.y1}
          y2={ymid}
          stroke={BASE_COLORS[b]}
          stroke-width="5"
        />
        {#if p}
          <line
            x1={xAt(i)}
            x2={xAt(i)}
            y1={ymid}
            y2={MID + h.y2}
            stroke={BASE_COLORS[p]}
            stroke-width="5"
          />
        {/if}
      {/each}
      <path d={backbone.s1} fill="none" stroke="#1e3a8a" stroke-width="4" stroke-linecap="round" />
      {#each [...top] as b, i (i)}
        {@const p = bottom[i]}
        {@const current = mode === 'pair' && i === built.length}
        {#if current}
          <rect
            x={xAt(i) - dx / 2 + 1}
            y="4"
            width={dx - 2}
            height="176"
            rx="4"
            fill="#6366f1"
            opacity="0.12"
          />
        {/if}
        <text
          x={xAt(i)}
          y="22"
          font-size={dx < 18 ? 11 : 14}
          font-weight="700"
          font-family="monospace"
          text-anchor="middle"
          fill={BASE_COLORS[b]}>{b}</text
        >
        <text
          x={xAt(i)}
          y="170"
          font-size={dx < 18 ? 11 : 14}
          font-weight="700"
          font-family="monospace"
          text-anchor="middle"
          fill={p ? BASE_COLORS[p] : '#94a3b8'}>{p || '?'}</text
        >
      {/each}
    {:else}
      <text x={W / 2} y={MID} text-anchor="middle" font-size="12" fill="#64748b"
        >Thêm nucleotide để dựng phân tử DNA</text
      >
    {/if}
  </svg>
  <p class="text-xs text-slate-600">
    Mạch xanh đậm là mạch 1, mạch xám là mạch 2. Cứ 10 cặp nucleotide, chuỗi xoắn quay đủ một vòng.
  </p>

  {#if mode === 'build'}
    <dl class="grid grid-cols-2 gap-2 text-sm sm:grid-cols-3" aria-live="polite">
      <div class="rounded-lg bg-slate-100 p-2">
        <dt class="text-slate-600">Số cặp nucleotide</dt>
        <dd class="font-semibold">{info.pairs}</dd>
      </div>
      <div class="rounded-lg bg-slate-100 p-2">
        <dt class="text-slate-600">Tổng số nucleotide N</dt>
        <dd class="font-semibold">{info.n}</dd>
      </div>
      <div class="rounded-lg bg-slate-100 p-2">
        <dt class="text-slate-600">A = T</dt>
        <dd class="font-semibold">{info.A} ({formatNumber(info.percentA, 1)}%)</dd>
      </div>
      <div class="rounded-lg bg-slate-100 p-2">
        <dt class="text-slate-600">G = C</dt>
        <dd class="font-semibold">{info.G} ({formatNumber(info.percentG, 1)}%)</dd>
      </div>
      <div class="rounded-lg bg-slate-100 p-2">
        <dt class="text-slate-600">Liên kết hydrogen</dt>
        <dd class="font-semibold">2 · {info.A} + 3 · {info.G} = {info.hBonds}</dd>
      </div>
      <div class="rounded-lg bg-slate-100 p-2">
        <dt class="text-slate-600">Chiều dài</dt>
        <dd class="font-semibold">
          {formatNumber(info.lengthNm, 2)} nm ({formatNumber(info.turns, 1)} vòng xoắn)
        </dd>
      </div>
    </dl>
    <FeedbackNote
      tone="info"
      text={info.pairs
        ? `Theo nguyên tắc bổ sung: số A bằng số T, số G bằng số C, nên A + G = T + C = ${info.A + info.G} = N/2.`
        : 'Hãy nhập mạch 1 để xem mạch 2 được tạo theo nguyên tắc bổ sung.'}
    />
  {:else}
    <FeedbackNote tone={pairNote.tone} text={pairNote.text} />
  {/if}
</div>
