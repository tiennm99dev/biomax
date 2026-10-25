<script>
  import { button, focusRing } from '#lib/core/ui.js';
  import { formatNumber } from '#lib/units-engine/format.js';
  import { CLASS_LABELS, ELEMENTS, THRESHOLD, logPosition, score, share } from './engine.js';

  /** @type {Record<string, import('./engine.js').ElementClass>} */
  let placed = $state({});
  /** @type {string | null} */
  let selected = $state('O');
  /** @type {{ ok: boolean, text: string } | null} */
  let feedback = $state(null);

  const result = $derived(score(placed));
  const current = $derived(ELEMENTS.find((e) => e.symbol === selected) ?? null);
  const chon = share(['C', 'H', 'O', 'N']);
  const MAJOR = ['O', 'C', 'H', 'N'];
  const COLORS = /** @type {Record<string, string>} */ ({
    O: '#ef4444',
    C: '#334155',
    H: '#38bdf8',
    N: '#6366f1',
  });

  /** @param {number} p */
  const pct = (p) => (p >= 0.1 ? formatNumber(p, 1) : formatNumber(p, 6));

  /** @param {import('./engine.js').ElementClass} kind */
  function place(kind) {
    const e = current;
    if (!e) return;
    if (kind === e.kind) {
      placed = { ...placed, [e.symbol]: kind };
      feedback = {
        ok: true,
        text: `Đúng: ${e.name} chiếm khoảng ${pct(e.percent)}% khối lượng cơ thể, ${e.percent > THRESHOLD ? 'lớn' : 'nhỏ'} hơn 0,01%, nên là nguyên tố ${CLASS_LABELS[kind].toLowerCase()}.`,
      };
      const next = ELEMENTS.find((x) => !placed[x.symbol]);
      selected = next ? next.symbol : null;
    } else {
      feedback = {
        ok: false,
        text: `Chưa đúng. So sánh ${pct(e.percent)}% với ngưỡng 0,01% trên thước bên dưới.`,
      };
    }
  }

  function reset() {
    placed = {};
    feedback = null;
    selected = 'O';
  }

  // Logarithmic ruler from 0,000001% to 100% of body mass.
  const W = 360;
  const X0 = 16;
  const X1 = W - 16;
  /** @param {number} p */
  const rx = (p) => X0 + logPosition(p) * (X1 - X0);
  const DECADES = [1e-6, 1e-4, 1e-2, 1, 100];
  /** @param {number} v */
  const decadeLabel = (v) => (v >= 1 ? `${v}%` : `${formatNumber(v, 6)}%`);
</script>

<div class="space-y-4">
  <div class="space-y-1">
    <div
      class="flex h-8 overflow-hidden rounded-lg"
      role="img"
      aria-label="Tỉ lệ khối lượng: oxygen 65%, carbon 18,5%, hydrogen 9,5%, nitrogen 3,2%, các nguyên tố còn lại khoảng 3,8%"
    >
      {#each MAJOR as s (s)}
        {@const e = ELEMENTS.find((x) => x.symbol === s)}
        {#if e}
          <div
            class="flex items-center justify-center text-xs font-bold text-white"
            style="width: {e.percent}%; background-color: {COLORS[s]}"
          >
            {e.percent >= 10 ? `${s} ${pct(e.percent)}%` : s}
          </div>
        {/if}
      {/each}
      <div
        class="flex flex-1 items-center justify-center bg-amber-400 text-xs font-bold text-amber-950"
      >
        …
      </div>
    </div>
    <p class="text-xs text-slate-600">
      Khối lượng cơ thể người: C, H, O, N chiếm khoảng {formatNumber(chon, 1)}%; phần vàng là mọi
      nguyên tố còn lại.
    </p>
  </div>

  <ul class="grid grid-cols-4 gap-2 sm:grid-cols-8" aria-label="Các nguyên tố">
    {#each ELEMENTS as e (e.symbol)}
      {@const done = placed[e.symbol]}
      <li>
        <button
          type="button"
          class="flex min-h-14 w-full flex-col items-center justify-center rounded-lg border-2 px-1 {selected ===
          e.symbol
            ? 'border-indigo-600'
            : 'border-transparent'} {done === 'da-luong'
            ? 'bg-emerald-100 text-emerald-900'
            : done === 'vi-luong'
              ? 'bg-sky-100 text-sky-900'
              : 'bg-slate-100 text-slate-800'} {focusRing}"
          aria-pressed={selected === e.symbol}
          aria-label="{e.name}{done ? `, đã xếp vào nhóm ${CLASS_LABELS[done].toLowerCase()}` : ''}"
          onclick={() => {
            selected = e.symbol;
            feedback = null;
          }}
        >
          <span class="text-lg font-bold">{e.symbol}</span>
          <span class="text-[10px] leading-tight">{done ? CLASS_LABELS[done] : e.name}</span>
        </button>
      </li>
    {/each}
  </ul>

  {#if current}
    <div class="space-y-3 rounded-xl border border-indigo-200 bg-indigo-50 p-4">
      <p class="text-sm text-indigo-950">
        <strong>{current.name} ({current.symbol})</strong>: khoảng {pct(current.percent)}% khối
        lượng cơ thể. {current.role}
      </p>
      {#if !placed[current.symbol]}
        <div class="flex flex-wrap gap-2" role="group" aria-label="Xếp {current.name} vào nhóm">
          <button type="button" class={button.primary} onclick={() => place('da-luong')}
            >Đa lượng</button
          >
          <button type="button" class={button.secondary} onclick={() => place('vi-luong')}
            >Vi lượng</button
          >
        </div>
      {/if}
    </div>
  {/if}

  <p
    class="min-h-6 text-sm {feedback
      ? feedback.ok
        ? 'text-emerald-800'
        : 'font-semibold text-amber-800'
      : 'text-slate-600'}"
    aria-live="polite"
  >
    {#if result.done}
      Hoàn thành: em đã xếp đúng cả {ELEMENTS.length} nguyên tố.
    {:else if feedback}
      {feedback.text}
    {:else}
      Chọn một nguyên tố rồi xếp nó vào nhóm đa lượng hoặc vi lượng.
    {/if}
    <span class="sr-only">Đã xếp đúng {result.right.length} trên {ELEMENTS.length}.</span>
  </p>

  <svg
    viewBox="0 0 {W} 92"
    class="block w-full"
    role="img"
    aria-label="Thước logarit tỉ lệ khối lượng, ngưỡng 0,01% chia đa lượng và vi lượng"
  >
    <rect x={X0} y="30" width={rx(THRESHOLD) - X0} height="16" fill="#e0f2fe" />
    <rect x={rx(THRESHOLD)} y="30" width={X1 - rx(THRESHOLD)} height="16" fill="#dcfce7" />
    <text x={(X0 + rx(THRESHOLD)) / 2} y="42" font-size="10" text-anchor="middle" fill="#075985"
      >vi lượng</text
    >
    <text x={(rx(THRESHOLD) + X1) / 2} y="42" font-size="10" text-anchor="middle" fill="#166534"
      >đa lượng</text
    >
    <line
      x1={rx(THRESHOLD)}
      x2={rx(THRESHOLD)}
      y1="22"
      y2="54"
      stroke="#0f172a"
      stroke-width="2"
      stroke-dasharray="3 2"
    />
    {#each DECADES as v (v)}
      <line x1={rx(v)} x2={rx(v)} y1="46" y2="52" stroke="#64748b" />
      <text x={rx(v)} y="64" font-size="9" text-anchor="middle" fill="#64748b"
        >{decadeLabel(v)}</text
      >
    {/each}
    {#each ELEMENTS.filter((e) => placed[e.symbol] || e.symbol === selected) as e, i (e.symbol)}
      <circle
        cx={rx(e.percent)}
        cy="38"
        r="5"
        fill={e.symbol === selected ? '#4f46e5' : '#0f172a'}
      />
      <text
        x={rx(e.percent)}
        y={i % 2 ? 84 : 18}
        font-size="10"
        font-weight="700"
        text-anchor="middle"
        fill={e.symbol === selected ? '#4f46e5' : '#334155'}>{e.symbol}</text
      >
    {/each}
  </svg>

  <button type="button" class={button.quiet} onclick={reset}>Xếp lại từ đầu</button>
</div>
