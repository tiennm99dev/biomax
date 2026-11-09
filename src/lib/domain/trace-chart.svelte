<script>
  import { formatNumber } from '#lib/core/number-format.js';
  import { linear } from '#lib/core/visuals/svg-math.js';

  /**
   * A small day-by-day line that grows as a simulation runs, with a dashed
   * reference level. The day axis starts at `minDays` and widens when needed.
   * @type {{
   *   values: number[];
   *   max: number;
   *   min?: number;
   *   minDays?: number;
   *   level: number;
   *   levelLabel: string;
   *   unit: string;
   *   label: string;
   * }}
   */
  let { values, max, min = 0, minDays = 14, level, levelLabel, unit, label } = $props();

  const LEFT = 40;
  const RIGHT = 332;
  const TOP = 22;
  const BOTTOM = 104;

  const days = $derived(Math.max(minDays, values.length - 1));
  const x = $derived(linear(0, days, LEFT, RIGHT).map);
  const y = $derived(linear(min, max, BOTTOM, TOP).map);
  const points = $derived(values.map((v, i) => `${x(i)},${y(v)}`).join(' '));
  const last = $derived(values[values.length - 1]);
</script>

<svg
  viewBox="0 0 340 128"
  class="mx-auto block w-full max-w-lg rounded-xl bg-slate-50"
  role="img"
  aria-label={label}
>
  <line x1={LEFT} y1={BOTTOM} x2={RIGHT} y2={BOTTOM} stroke="#94a3b8" />
  <line x1={LEFT} y1={TOP} x2={LEFT} y2={BOTTOM} stroke="#94a3b8" />
  <line
    x1={LEFT}
    y1={y(level)}
    x2={RIGHT}
    y2={y(level)}
    stroke="#b45309"
    stroke-width="1.5"
    stroke-dasharray="5 4"
  />
  <text x={RIGHT} y={y(level) - 4} text-anchor="end" font-size="12" fill="#92400e">
    {levelLabel}
  </text>
  <text x={LEFT - 5} y={TOP + 4} text-anchor="end" font-size="12" fill="#334155">
    {formatNumber(max)}
  </text>
  <text x={LEFT - 5} y={BOTTOM + 4} text-anchor="end" font-size="12" fill="#334155">
    {formatNumber(min)}
  </text>
  <text x={LEFT} y={BOTTOM + 16} text-anchor="middle" font-size="12" fill="#334155">0</text>
  <text x={RIGHT} y={BOTTOM + 16} text-anchor="end" font-size="12" fill="#334155">
    ngày {days}
  </text>
  <text x={LEFT} y="13" font-size="12" fill="#334155">{unit}</text>
  <polyline {points} fill="none" stroke="#4f46e5" stroke-width="2.5" stroke-linejoin="round" />
  <circle cx={x(values.length - 1)} cy={y(last)} r="4" fill="#4f46e5" />
</svg>
