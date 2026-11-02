<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { fmt, formatNumber } from '#lib/core/number-format.js';
  import { linear } from '#lib/core/visuals/svg-math.js';
  import { niceAxis } from '#lib/stats-engine/ticks.js';
  import {
    DAYS,
    MASK_EFFECT,
    POPULATION,
    STRENGTHS,
    VACCINE_EFFICACY,
    simulate,
    verdict,
  } from './engine.js';

  const W = 320;
  const H = 190;
  const LEFT = 42;
  const RIGHT = 10;
  const TOP = 12;
  const BOTTOM = 32;

  let r0 = $state(STRENGTHS[1].value);
  let vaccinePercent = $state(0);
  let maskPercent = $state(0);

  const x = linear(0, DAYS, LEFT, W - RIGHT).map;
  const untouched = $derived(simulate({ r0, vaccinated: 0, masked: 0 }));
  const outbreak = $derived(
    simulate({ r0, vaccinated: vaccinePercent / 100, masked: maskPercent / 100 }),
  );
  const axis = $derived(niceAxis(0, untouched.peak, 4));
  const y = $derived(linear(0, axis.max, H - BOTTOM, TOP).map);
  /** @param {import('./engine.js').Day[]} days */
  const pathOf = (days) =>
    days.map((d) => `${x(d.day).toFixed(1)},${y(d.infectious).toFixed(1)}`).join(' ');
  const note = $derived(verdict(outbreak, untouched));
  const dayTicks = [0, 60, 120, 180];
  const chartLabel = $derived(
    `Đồ thị số người đang mắc bệnh theo ngày. Đỉnh dịch ${fmt(Math.round(outbreak.peak))} người vào ngày ${outbreak.peakDay}; khi không phòng bệnh, đỉnh là ${fmt(Math.round(untouched.peak))} người vào ngày ${untouched.peakDay}.`,
  );
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Mức lây của virus khi chưa ai có miễn dịch"
    options={STRENGTHS}
    bind:value={r0}
  />

  <div class="rounded-2xl bg-slate-50 p-2">
    <svg
      viewBox="0 0 {W} {H}"
      class="mx-auto block w-full max-w-xl"
      role="img"
      aria-label={chartLabel}
    >
      {#each axis.ticks as v (v)}
        <line x1={LEFT} x2={W - RIGHT} y1={y(v)} y2={y(v)} stroke="#e2e8f0" />
        <text x={LEFT - 4} y={y(v) + 3.5} font-size="10" text-anchor="end" fill="#334155">
          {fmt(v)}
        </text>
      {/each}
      {#each dayTicks as d (d)}
        <text x={x(d)} y={H - BOTTOM + 13} font-size="10" text-anchor="middle" fill="#334155">
          {d}
        </text>
      {/each}
      <text x={(LEFT + W - RIGHT) / 2} y={H - 5} font-size="10" text-anchor="middle" fill="#334155">
        Ngày
      </text>
      <polyline
        points={pathOf(untouched.days)}
        fill="none"
        stroke="#94a3b8"
        stroke-width="2"
        stroke-dasharray="5 4"
      />
      <polyline points={pathOf(outbreak.days)} fill="none" stroke="#be123c" stroke-width="2.5" />
    </svg>
    <p class="mt-1 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-slate-700">
      <span><span class="font-bold text-rose-700">━━</span> Số người đang mắc bệnh</span>
      <span><span class="font-bold text-slate-400">╍╍</span> Khi không phòng bệnh</span>
    </p>
  </div>

  <div class="grid gap-3 sm:grid-cols-2">
    <SliderField
      label="Tỉ lệ tiêm vaccine"
      bind:value={vaccinePercent}
      min={0}
      max={100}
      step={5}
      unit="%"
    />
    <SliderField
      label="Tỉ lệ đeo khẩu trang"
      bind:value={maskPercent}
      min={0}
      max={100}
      step={5}
      unit="%"
    />
  </div>

  <dl class="grid grid-cols-3 gap-2 text-center text-sm">
    <div class="rounded-xl bg-slate-100 p-2">
      <dt class="text-slate-600">Mỗi ca lây cho</dt>
      <dd class="font-bold text-slate-900">{formatNumber(outbreak.re, 2)} người</dd>
    </div>
    <div class="rounded-xl bg-slate-100 p-2">
      <dt class="text-slate-600">Đỉnh dịch</dt>
      <dd class="font-bold text-slate-900">
        {fmt(Math.round(outbreak.peak))} người, ngày {outbreak.peakDay}
      </dd>
    </div>
    <div class="rounded-xl bg-slate-100 p-2">
      <dt class="text-slate-600">Tổng số ca sau {DAYS} ngày</dt>
      <dd class="font-bold text-slate-900">{fmt(Math.round(outbreak.total))}/{fmt(POPULATION)}</dd>
    </div>
  </dl>

  <FeedbackNote tone={note.tone} text={note.text} />
  <p class="text-sm text-slate-600">
    Mô phỏng định tính cho một cộng đồng {fmt(POPULATION)} người, với giả định vaccine bảo vệ
    {formatNumber(VACCINE_EFFICACY * 100)}% người được tiêm và nếu mọi người đều đeo khẩu trang thì
    khả năng lây giảm {formatNumber(MASK_EFFECT * 100)}%. Các con số chỉ để minh hoạ xu hướng.
  </p>
</div>
