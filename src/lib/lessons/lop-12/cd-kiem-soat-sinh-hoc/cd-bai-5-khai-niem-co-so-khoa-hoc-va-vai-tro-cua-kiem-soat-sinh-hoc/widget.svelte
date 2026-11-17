<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import { linear } from '#lib/core/visuals/svg-math.js';
  import { DAYS, RATES, THRESHOLD, daysAbove, densityText, simulate, verdict } from './engine.js';

  let release = $state(5);
  let releaseDay = $state(10);
  let spray = $state(false);
  let sprayDay = $state(60);
  let day = $state(DAYS);

  const plan = $derived({ release, releaseDay, spray, sprayDay });
  const run = $derived(simulate(plan));
  const note = $derived(verdict(plan, run));
  const above = $derived(daysAbove(run.pest));

  const W = 360;
  const H = 210;
  const LEFT = 40;
  const RIGHT = 350;
  const TOP = 16;
  const BOTTOM = 178;
  const x = linear(0, DAYS, LEFT, RIGHT).map;
  const y = linear(0, RATES.K + 10, BOTTOM, TOP).map;

  /** @param {number[]} values */
  function line(values) {
    return values.map((v, i) => `${x(i)},${y(v)}`).join(' ');
  }

  const ticks = [0, 30, 60, 90, 120];
</script>

<div class="space-y-3">
  <div class="grid gap-3 sm:grid-cols-2">
    <SliderField label="Số thiên địch thả" bind:value={release} min={0} max={20} unit="con/m²" />
    <SliderField label="Ngày thả thiên địch" bind:value={releaseDay} min={0} max={60} />
  </div>
  <div class="flex flex-wrap items-center gap-3">
    <label
      class="flex min-h-11 cursor-pointer items-center gap-2 text-sm font-semibold text-slate-800"
    >
      <input type="checkbox" class="h-5 w-5 rounded {focusRing}" bind:checked={spray} />
      Phun thuốc trừ sâu hoá học
    </label>
    {#if spray}
      <div class="min-w-48 flex-1">
        <SliderField label="Ngày phun thuốc" bind:value={sprayDay} min={1} max={100} />
      </div>
    {/if}
  </div>

  <svg
    viewBox="0 0 {W} {H}"
    class="mx-auto block w-full max-w-xl rounded-xl bg-slate-50"
    role="img"
    aria-label="Mật độ sâu hại và thiên địch theo ngày. Ngày {day}: sâu hại {densityText(
      run.pest[day],
    )}, thiên địch {densityText(run.enemy[day])}. Ngưỡng gây hại {THRESHOLD} con trên mét vuông."
  >
    <line x1={LEFT} y1={BOTTOM} x2={RIGHT} y2={BOTTOM} stroke="#94a3b8" />
    <line x1={LEFT} y1={TOP} x2={LEFT} y2={BOTTOM} stroke="#94a3b8" />
    {#each [0, 50, 100] as v (v)}
      <text x={LEFT - 5} y={y(v) + 4} text-anchor="end" font-size="11" fill="#334155">{v}</text>
    {/each}
    {#each ticks as t (t)}
      <text x={x(t)} y={BOTTOM + 14} text-anchor="middle" font-size="11" fill="#334155">{t}</text>
    {/each}
    <text x={RIGHT} y={H - 2} text-anchor="end" font-size="11" fill="#475569">ngày</text>
    <text x={LEFT + 4} y={TOP - 4} font-size="11" fill="#475569">con/m²</text>
    <line
      x1={LEFT}
      y1={y(THRESHOLD)}
      x2={RIGHT}
      y2={y(THRESHOLD)}
      stroke="#b45309"
      stroke-width="1.5"
      stroke-dasharray="5 4"
    />
    {#if release > 0}
      <line
        x1={x(releaseDay)}
        y1={TOP}
        x2={x(releaseDay)}
        y2={BOTTOM}
        stroke="#16a34a"
        stroke-dasharray="2 3"
      />
    {/if}
    {#if spray}
      <line
        x1={x(sprayDay)}
        y1={TOP}
        x2={x(sprayDay)}
        y2={BOTTOM}
        stroke="#7c3aed"
        stroke-dasharray="2 3"
      />
    {/if}
    <polyline points={line(run.pest)} fill="none" stroke="#dc2626" stroke-width="2.5" />
    <polyline points={line(run.enemy)} fill="none" stroke="#16a34a" stroke-width="2.5" />
    <line x1={x(day)} y1={TOP} x2={x(day)} y2={BOTTOM} stroke="#334155" stroke-width="1" />
    <circle cx={x(day)} cy={y(run.pest[day])} r="4" fill="#dc2626" />
    <circle cx={x(day)} cy={y(run.enemy[day])} r="4" fill="#16a34a" />
  </svg>

  <div class="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-700" aria-hidden="true">
    <span class="flex items-center gap-1"
      ><span class="inline-block h-1 w-5 rounded bg-red-600"></span>Sâu hại</span
    >
    <span class="flex items-center gap-1"
      ><span class="inline-block h-1 w-5 rounded bg-green-600"></span>Thiên địch</span
    >
    <span class="flex items-center gap-1"
      ><span class="inline-block h-0.5 w-5 border-t-2 border-dashed border-amber-700"></span>Ngưỡng
      gây hại ({THRESHOLD} con/m²)</span
    >
    <span class="flex items-center gap-1"
      ><span class="inline-block h-0.5 w-5 border-t-2 border-dashed border-green-600"></span>Ngày
      thả</span
    >
    {#if spray}
      <span class="flex items-center gap-1"
        ><span class="inline-block h-0.5 w-5 border-t-2 border-dashed border-violet-600"></span>Ngày
        phun</span
      >
    {/if}
  </div>

  <SliderField label="Xem ngày" bind:value={day} min={0} max={DAYS} />
  <p class="text-sm text-slate-800" aria-live="polite">
    Ngày {day}: sâu hại <strong>{densityText(run.pest[day])}</strong>, thiên địch
    <strong>{densityText(run.enemy[day])}</strong>. Cả vụ có {above} ngày sâu vượt ngưỡng gây hại.
  </p>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>
