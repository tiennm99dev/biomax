<script>
  import { formatNumber } from '#lib/core/number-format.js';
  import { linear } from '#lib/core/visuals/svg-math.js';
  import { niceAxis } from '#lib/stats-engine/ticks.js';

  /**
   * Several sizes over time on one chart, each with its own colour and
   * dash, a legend, and an optional vertical marker at sample `at` with a
   * dot on every line.
   * @type {{
   *   series: Array<{ name: string, values: number[], color: string, dash?: string }>;
   *   at?: number;
   *   unit: string;
   *   timeUnit: string;
   *   label: string;
   * }}
   */
  let { series, at, unit, timeUnit, label } = $props();

  const LEFT = 44;
  const RIGHT = 332;
  const TOP = 18;
  const BOTTOM = 150;

  const count = $derived(Math.max(1, ...series.map((s) => s.values.length)) - 1);
  const axis = $derived(niceAxis(0, Math.max(1, ...series.flatMap((s) => s.values)), 4));
  const x = $derived(linear(0, count, LEFT, RIGHT).map);
  const y = $derived(linear(0, axis.max, BOTTOM, TOP).map);
  /** @param {number[]} values */
  const pointsOf = (values) => values.map((v, i) => `${x(i)},${y(v)}`).join(' ');
</script>

<figure class="space-y-2">
  <svg
    viewBox="0 0 340 176"
    class="mx-auto block w-full max-w-xl rounded-xl bg-slate-50"
    role="img"
    aria-label={label}
  >
    {#each axis.ticks as v (v)}
      <line x1={LEFT} y1={y(v)} x2={RIGHT} y2={y(v)} stroke="#e2e8f0" />
      <text x={LEFT - 5} y={y(v) + 4} text-anchor="end" font-size="11" fill="#334155">
        {formatNumber(v)}
      </text>
    {/each}
    <line x1={LEFT} y1={BOTTOM} x2={RIGHT} y2={BOTTOM} stroke="#94a3b8" />
    <line x1={LEFT} y1={TOP} x2={LEFT} y2={BOTTOM} stroke="#94a3b8" />
    <text x={LEFT} y={BOTTOM + 16} text-anchor="middle" font-size="11" fill="#334155">0</text>
    <text x={RIGHT} y={BOTTOM + 16} text-anchor="end" font-size="11" fill="#334155">
      {timeUnit}
      {count}
    </text>
    <text x={4} y="11" font-size="11" fill="#334155">{unit}</text>
    {#if at !== undefined}
      <line
        x1={x(at)}
        y1={TOP}
        x2={x(at)}
        y2={BOTTOM}
        stroke="#64748b"
        stroke-width="1"
        stroke-dasharray="3 3"
      />
    {/if}
    {#each series as s (s.name)}
      <polyline
        points={pointsOf(s.values)}
        fill="none"
        stroke={s.color}
        stroke-width="2.5"
        stroke-dasharray={s.dash ?? 'none'}
        stroke-linejoin="round"
      />
      {#if at !== undefined && s.values[at] !== undefined}
        <circle cx={x(at)} cy={y(s.values[at])} r="4" fill={s.color} />
      {/if}
    {/each}
  </svg>
  <figcaption class="flex flex-wrap justify-center gap-4 text-sm text-slate-700">
    {#each series as s (s.name)}
      <span class="inline-flex items-center gap-2">
        <svg width="28" height="10" aria-hidden="true">
          <line
            x1="0"
            y1="5"
            x2="28"
            y2="5"
            stroke={s.color}
            stroke-width="3"
            stroke-dasharray={s.dash ?? 'none'}
          />
        </svg>
        {s.name}
      </span>
    {/each}
  </figcaption>
</figure>
