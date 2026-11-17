<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import { button } from '#lib/core/ui.js';
  import { LEVELS, STAGES, loopPaths, wavePath } from './engine.js';

  const W = 320;
  const H = 170;
  const Y = 85;

  let level = $state(0);
  let region = $state('nguyen');
  /** @type {string | null} */
  let stage = $state(null);

  const info = $derived(LEVELS[level]);
  /** Share of the widest level on a log scale, for the size bar. */
  const barShare = $derived(Math.log10(info.nm) / Math.log10(LEVELS[LEVELS.length - 1].nm));

  /** @param {number} v */
  function zoom(v) {
    level = v;
    stage = null;
  }

  /** @param {string} id */
  function goStage(id) {
    const s = STAGES.find((x) => x.id === id);
    if (!s) return;
    stage = id;
    level = s.level;
    if (s.level === 1) region = 'nguyen';
  }

  const stageInfo = $derived(STAGES.find((s) => s.id === stage) ?? null);

  // Nucleosomes of the 10 nm fibre: spaced out (euchromatin) or packed (heterochromatin).
  const beads = $derived.by(() => {
    const gap = region === 'nguyen' ? 46 : 26;
    const out = [];
    for (let x = 30; x <= W - 30; x += gap) out.push(x);
    return out;
  });

  const note = $derived.by(() => {
    if (stageInfo) return { tone: /** @type {const} */ ('ok'), text: stageInfo.text };
    if (level === 1) {
      return region === 'nguyen'
        ? {
            tone: /** @type {const} */ ('ok'),
            text: 'Vùng nguyên nhiễm sắc: các nucleosome nằm xa nhau, enzyme RNA polymerase bám được vào DNA, nên gene ở đây thường đang hoạt động.',
          }
        : {
            tone: /** @type {const} */ ('warn'),
            text: 'Vùng dị nhiễm sắc: các nucleosome xếp sát nhau, enzyme khó tiếp cận DNA, nên vùng này không chứa gene hoặc chứa gene bất hoạt (ví dụ tâm động, đầu mút).',
          };
    }
    return {
      tone: /** @type {const} */ ('info'),
      text: `Mức ${level + 1}/${LEVELS.length}: ${info.name}, đường kính khoảng ${formatNumber(info.nm)} nm. ${info.made}`,
    };
  });
</script>

<div class="space-y-4">
  <SliderField
    label="Thu phóng"
    bind:value={level}
    min={0}
    max={LEVELS.length - 1}
    format={(v) => LEVELS[v].name}
    oninput={zoom}
  />

  <svg
    viewBox="0 0 {W} {H}"
    class="mx-auto block w-full max-w-lg rounded-xl bg-slate-50"
    role="img"
    aria-label="{info.name}, đường kính khoảng {formatNumber(info.nm)} nanomet"
  >
    {#if info.id === 'dna'}
      <path d={wavePath(20, W - 20, Y, 26, 90)} fill="none" stroke="#2563eb" stroke-width="4" />
      <path
        d={wavePath(20, W - 20, Y, 26, 90, Math.PI)}
        fill="none"
        stroke="#db2777"
        stroke-width="4"
      />
      {#each Array.from({ length: 30 }, (_, i) => 26 + i * 9.5) as x (x)}
        {@const dy = 26 * Math.sin(((x - 20) / 90) * 2 * Math.PI)}
        <line
          x1={x}
          y1={Y + dy}
          x2={x}
          y2={Y - dy}
          stroke="#94a3b8"
          stroke-width="2"
          opacity="0.8"
        />
      {/each}
      <text x={W / 2} y={H - 10} text-anchor="middle" font-size="12" fill="#334155"
        >Hai mạch xoắn kép, các cặp base ở giữa</text
      >
    {:else if info.id === 'co-ban'}
      <path d={wavePath(10, W - 10, Y, 3, 40)} fill="none" stroke="#2563eb" stroke-width="2.5" />
      {#each beads as x (x)}
        <ellipse cx={x} cy={Y} rx="11" ry="15" fill="#f59e0b" stroke="#b45309" stroke-width="2" />
        <path
          d="M {x - 11} {Y - 6} Q {x} {Y + 10} {x + 11} {Y - 6} M {x - 11} {Y + 4} Q {x} {Y +
            20} {x + 11} {Y + 4}"
          fill="none"
          stroke="#2563eb"
          stroke-width="2"
        />
      {/each}
      {#if region === 'nguyen'}
        <g aria-hidden="true">
          <rect x={beads[1] + 13} y={Y - 34} width="20" height="16" rx="5" fill="#10b981" />
          <text x={beads[1] + 23} y={Y - 22} text-anchor="middle" font-size="10" fill="white"
            >RNA</text
          >
        </g>
      {/if}
      <text x={W / 2} y={H - 10} text-anchor="middle" font-size="12" fill="#334155"
        >{region === 'nguyen'
          ? 'Nucleosome (vàng) nối nhau bằng DNA nối'
          : 'Nucleosome xếp sát: vùng dị nhiễm sắc'}</text
      >
    {:else if info.id === 'nhiem-sac'}
      {#each Array.from({ length: 22 }, (_, i) => i) as i (i)}
        {@const x = 26 + i * 12.6}
        <circle
          cx={x}
          cy={Y + 18 * Math.sin(i * 1.3)}
          r="10"
          fill="#f59e0b"
          stroke="#b45309"
          stroke-width="1.5"
        />
      {/each}
      <text x={W / 2} y={H - 10} text-anchor="middle" font-size="12" fill="#334155"
        >Sợi cơ bản xoắn lại, nucleosome xếp sát nhau</text
      >
    {:else if info.id === 'xep-cuon'}
      <line x1="20" y1={Y} x2={W - 20} y2={Y} stroke="#64748b" stroke-width="6" />
      {#each loopPaths(24, W - 24, Y, 12, 58) as d (d)}
        <path {d} fill="none" stroke="#d97706" stroke-width="5" />
      {/each}
      <text x={W / 2} y={H - 6} text-anchor="middle" font-size="12" fill="#334155"
        >Các vòng sợi nhiễm sắc gắn vào khung protein (xám)</text
      >
    {:else if info.id === 'chromatid'}
      <path
        d={wavePath(30, W - 30, Y, 24, 22)}
        fill="none"
        stroke="#d97706"
        stroke-width="16"
        stroke-linecap="round"
      />
      <text x={W / 2} y={H - 10} text-anchor="middle" font-size="12" fill="#334155"
        >Một chromatid: vùng xếp cuộn xoắn tiếp</text
      >
    {:else}
      <g>
        <path
          d="M 70 30 Q 160 85 250 30"
          fill="none"
          stroke="#d97706"
          stroke-width="22"
          stroke-linecap="round"
        />
        <path
          d="M 70 140 Q 160 85 250 140"
          fill="none"
          stroke="#ea580c"
          stroke-width="22"
          stroke-linecap="round"
        />
        <circle cx="160" cy="85" r="9" fill="#7c3aed" />
        {#each [[70, 30], [250, 30], [70, 140], [250, 140]] as [x, y] ([x, y].join())}
          <circle cx={x} cy={y} r="8" fill="#0ea5e9" />
        {/each}
        <text x="182" y="90" font-size="12" fill="#5b21b6">tâm động</text>
        <text x="20" y="22" font-size="12" fill="#0369a1">đầu mút</text>
        <text x="200" y="166" font-size="12" fill="#9a3412">2 chromatid</text>
      </g>
    {/if}
  </svg>

  <div>
    <p class="mb-1 text-xs text-slate-600">
      Đường kính (thang logarit): {formatNumber(info.nm)} nm
    </p>
    <div class="h-3 w-full rounded-full bg-slate-200">
      <div
        class="h-3 rounded-full bg-amber-500 transition-all"
        style="width: {Math.max(4, barShare * 100)}%"
      ></div>
    </div>
  </div>

  {#if level === 1}
    <SegmentedControl
      label="Vùng chất nhiễm sắc"
      bind:value={region}
      options={[
        { value: 'nguyen', label: 'Nguyên nhiễm sắc' },
        { value: 'di', label: 'Dị nhiễm sắc' },
      ]}
    />
  {/if}

  <div class="space-y-1">
    <p class="text-sm font-semibold text-slate-700">NST ở dạng nào trong mỗi kì?</p>
    <div class="flex flex-wrap gap-2" role="group" aria-label="Chọn kì của chu kì tế bào">
      {#each STAGES as s (s.id)}
        <button
          type="button"
          class={stage === s.id ? button.primary : button.quiet}
          aria-pressed={stage === s.id}
          onclick={() => goStage(s.id)}>{s.label}</button
        >
      {/each}
    </div>
  </div>

  <dl class="grid gap-2 text-sm sm:grid-cols-2">
    <div class="rounded-lg bg-white p-2 ring-1 ring-slate-200">
      <dt class="text-xs text-slate-500">Cấu tạo</dt>
      <dd>{info.made}</dd>
    </div>
    <div class="rounded-lg bg-white p-2 ring-1 ring-slate-200">
      <dt class="text-xs text-slate-500">Gặp khi nào</dt>
      <dd>{info.when}</dd>
    </div>
  </dl>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>
