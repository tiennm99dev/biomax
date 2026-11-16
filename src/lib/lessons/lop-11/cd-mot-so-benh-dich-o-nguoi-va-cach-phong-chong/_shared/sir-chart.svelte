<script>
  import { formatNumber } from '#lib/core/number-format.js';
  import { linear } from '#lib/core/visuals/svg-math.js';
  import { POPULATION } from './epidemic.js';

  /**
   * The curves of one SIR run against the day: still susceptible (S, blue),
   * sick and infectious (I, red, thick) and recovered (R, green). An optional
   * `compare` run draws its I curve dashed in grey, so the learner sees how a
   * change moves the peak. `label` is the chart's accessible name.
   * @type {{
   *   run: import('./epidemic.js').Run;
   *   compare?: import('./epidemic.js').Run | null;
   *   compareLabel?: string;
   *   label: string;
   * }}
   */
  let { run, compare = null, compareLabel = '', label } = $props();

  const LEFT = 46;
  const RIGHT = 332;
  const TOP = 14;
  const BOTTOM = 160;
  const Y_TICKS = [0, 2500, 5000, 7500, 10000];

  const days = $derived(run.i.length - 1);
  const x = $derived(linear(0, days, LEFT, RIGHT).map);
  const y = linear(0, POPULATION, BOTTOM, TOP).map;
  const dayTicks = $derived(Array.from({ length: Math.floor(days / 30) + 1 }, (_, k) => k * 30));

  /** @param {number[]} values */
  const line = (values) => values.map((v, d) => `${x(d).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
</script>

<figure class="space-y-2">
  <svg
    viewBox="0 0 340 184"
    class="mx-auto block w-full max-w-xl rounded-xl bg-slate-50"
    role="img"
    aria-label={label}
  >
    {#each Y_TICKS as t (t)}
      <line x1={LEFT} x2={RIGHT} y1={y(t)} y2={y(t)} stroke="#e2e8f0" />
      <text x={LEFT - 4} y={y(t) + 4} text-anchor="end" font-size="10" fill="#475569">
        {formatNumber(t)}
      </text>
    {/each}
    {#each dayTicks as d (d)}
      <text x={x(d)} y={BOTTOM + 13} text-anchor="middle" font-size="10" fill="#475569">{d}</text>
    {/each}
    <text x={RIGHT} y={BOTTOM + 24} text-anchor="end" font-size="10" fill="#475569">ngày</text>
    <line x1={LEFT} y1={BOTTOM} x2={RIGHT} y2={BOTTOM} stroke="#94a3b8" />
    <line x1={LEFT} y1={TOP} x2={LEFT} y2={BOTTOM} stroke="#94a3b8" />

    {#if compare}
      <polyline
        points={line(compare.i)}
        fill="none"
        stroke="#64748b"
        stroke-width="2"
        stroke-dasharray="5 4"
      />
    {/if}
    <polyline points={line(run.s)} fill="none" stroke="#2563eb" stroke-width="1.5" />
    <polyline points={line(run.r)} fill="none" stroke="#059669" stroke-width="1.5" />
    <polyline points={line(run.i)} fill="none" stroke="#dc2626" stroke-width="3" />
  </svg>
  <figcaption class="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-slate-700">
    <span><span class="font-bold text-blue-600">—</span> S: còn có thể nhiễm</span>
    <span><span class="font-bold text-red-600">━</span> I: đang mắc bệnh</span>
    <span><span class="font-bold text-emerald-600">—</span> R: đã khỏi</span>
    {#if compare}
      <span><span class="font-bold text-slate-500">- -</span> {compareLabel}</span>
    {/if}
  </figcaption>
</figure>
