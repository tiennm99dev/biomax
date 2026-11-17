<script>
  import { karyotypeWords } from './mutations.js';

  /**
   * A karyotype (bộ nhiễm sắc thể) drawn to scale: one cell per homologous
   * group, each chromosome a rounded bar with its centromere as a violet
   * dot, numbered under the cell. Sex chromosomes carry their letter.
   * Screen readers hear the count of every group that differs from two.
   * @type {{
   *   groups: import('./mutations.js').Group[];
   *   columns?: number;
   *   label?: string;
   * }}
   */
  let { groups, columns = 8, label = 'Bộ nhiễm sắc thể' } = $props();

  const CELL_W = 44;
  const CELL_H = 86;
  const BAR_MAX = 58;
  const rows = $derived(Math.ceil(groups.length / columns));
  const W = $derived(columns * CELL_W);
  const H = $derived(rows * CELL_H);

  /** @param {number} k */
  const cellX = (k) => (k % columns) * CELL_W;
  /** @param {number} k */
  const cellY = (k) => Math.floor(k / columns) * CELL_H;
</script>

<svg
  viewBox="0 0 {W} {H}"
  class="mx-auto block w-full max-w-xl rounded-xl bg-slate-50"
  role="img"
  aria-label="{label}. {karyotypeWords(groups)}"
>
  {#each groups as g, k (g.label)}
    {@const n = g.items.length}
    {@const gap = n > 3 ? 8 : 10}
    {@const x0 = cellX(k) + CELL_W / 2 - ((n - 1) * gap) / 2}
    {@const yBase = cellY(k) + 8 + BAR_MAX}
    {#each g.items as c, i (i)}
      {@const h = Math.max(10, c.size * BAR_MAX)}
      {@const x = x0 + i * gap}
      {@const top = yBase - h}
      <rect
        x={x - 3}
        y={top}
        width="6"
        height={h}
        rx="3"
        fill={c.tag === 'Y' ? '#0284c7' : c.tag === 'X' ? '#db2777' : '#d97706'}
      />
      <circle cx={x} cy={top + h * c.cen} r="3.2" fill="#6d28d9" />
      {#if c.tag}
        <text {x} y={top - 3} text-anchor="middle" font-size="9" font-weight="700" fill="#334155"
          >{c.tag}</text
        >
      {/if}
    {/each}
    {#if n === 0}
      <text
        x={cellX(k) + CELL_W / 2}
        y={yBase - 20}
        text-anchor="middle"
        font-size="10"
        fill="#94a3b8">trống</text
      >
    {/if}
    <line
      x1={cellX(k) + 6}
      x2={cellX(k) + CELL_W - 6}
      y1={yBase + 4}
      y2={yBase + 4}
      stroke="#cbd5e1"
    />
    <text
      x={cellX(k) + CELL_W / 2}
      y={yBase + 17}
      text-anchor="middle"
      font-size={g.label.length > 3 ? 9 : 11}
      fill="#475569">{g.label}</text
    >
  {/each}
</svg>
