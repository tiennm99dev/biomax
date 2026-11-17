<script>
  import { formatNumber } from '#lib/core/number-format.js';
  import { linear } from '#lib/core/visuals/svg-math.js';

  /**
   * A small chart of one or more quantities across generations (thế hệ 0 to
   * the last one). Series after the first are dashed so they differ by more
   * than colour.
   *
   * - `series`: `{ name, values, color }`, one value per generation.
   * - `min`, `max`: the value axis. `generations`: the axis length, at least
   *   the longest series.
   * - `unit`: the value axis title. `label`: what screen readers hear.
   * - `faded`: draw the series thin and pale (many repeat runs).
   * @type {{
   *   series: Array<{ name: string, values: number[], color: string }>;
   *   min: number;
   *   max: number;
   *   generations: number;
   *   unit: string;
   *   label: string;
   *   faded?: boolean;
   *   legend?: boolean;
   * }}
   */
  let { series, min, max, generations, unit, label, faded = false, legend = true } = $props();

  const LEFT = 40;
  const RIGHT = 332;
  const TOP = 20;
  const BOTTOM = 124;

  const x = $derived(linear(0, Math.max(1, generations), LEFT, RIGHT).map);
  const y = $derived(linear(min, max, BOTTOM, TOP).map);
  const mid = $derived((min + max) / 2);

  /** @param {number[]} values */
  const pointsOf = (values) => values.map((v, i) => `${x(i)},${y(v)}`).join(' ');
</script>

<svg
  viewBox="0 0 340 148"
  class="mx-auto block w-full max-w-lg rounded-xl bg-slate-50"
  role="img"
  aria-label={label}
>
  {#each [min, mid, max] as v (v)}
    <line x1={LEFT} y1={y(v)} x2={RIGHT} y2={y(v)} stroke="#e2e8f0" />
    <text x={LEFT - 5} y={y(v) + 4} text-anchor="end" font-size="11" fill="#334155"
      >{formatNumber(v, 2)}</text
    >
  {/each}
  <line x1={LEFT} y1={BOTTOM} x2={RIGHT} y2={BOTTOM} stroke="#94a3b8" />
  <line x1={LEFT} y1={TOP} x2={LEFT} y2={BOTTOM} stroke="#94a3b8" />
  <text x={LEFT} y={BOTTOM + 16} text-anchor="middle" font-size="11" fill="#334155">0</text>
  <text x={RIGHT} y={BOTTOM + 16} text-anchor="end" font-size="11" fill="#334155"
    >thế hệ {generations}</text
  >
  <text x={LEFT} y="12" font-size="11" fill="#334155">{unit}</text>
  {#each series as s, i (i)}
    <polyline
      points={pointsOf(s.values)}
      fill="none"
      stroke={s.color}
      stroke-width={faded ? 1.5 : 2.5}
      stroke-opacity={faded ? 0.8 : 1}
      stroke-dasharray={!faded && i > 0 ? '6 4' : undefined}
      stroke-linejoin="round"
    />
  {/each}
</svg>
{#if legend && !faded}
  <div class="flex flex-wrap justify-center gap-4 text-sm text-slate-700" aria-hidden="true">
    {#each series as s, i (i)}
      <span class="inline-flex items-center gap-1"
        ><svg width="22" height="8" viewBox="0 0 22 8"
          ><line
            x1="0"
            y1="4"
            x2="22"
            y2="4"
            stroke={s.color}
            stroke-width="2.5"
            stroke-dasharray={i > 0 ? '6 4' : undefined}
          /></svg
        >{s.name}</span
      >
    {/each}
  </div>
{/if}
