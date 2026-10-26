<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { formatFixed, formatNumber } from '#lib/core/number-format.js';
  import { button } from '#lib/core/ui.js';
  import { AIR_CO2, RANGES, curve, limiting, rate } from './engine.js';

  let light = $state(60);
  let co2 = $state(AIR_CO2);
  let temp = $state(30);
  let water = $state('du');
  /** @type {import('./engine.js').PlantType} */
  let plant = $state('ua-sang');
  /** @type {import('./engine.js').Factor} */
  let axis = $state('light');

  const cond = $derived({ light, co2, temp, water: water === 'du', plant });
  const now = $derived(rate(cond));
  const points = $derived(curve(cond, axis));
  const limit = $derived(limiting(cond));

  const W = 340;
  const H = 180;
  const L = 40;
  const R = 12;
  const T = 12;
  const B = 34;
  const AXIS_LABEL = {
    light: 'Cường độ ánh sáng (%)',
    co2: 'Nồng độ CO₂ (%)',
    temp: 'Nhiệt độ (°C)',
  };
  const TICKS = {
    light: [0, 25, 50, 75, 100],
    co2: [0, 0.1, 0.2, 0.3],
    temp: [0, 10, 20, 30, 40, 50],
  };

  /** @param {number} x */
  const sx = (x) => {
    const { min, max } = RANGES[axis];
    return L + ((x - min) / (max - min)) * (W - L - R);
  };
  /** @param {number} y */
  const sy = (y) => T + (1 - y / 100) * (H - T - B);

  const path = $derived(
    points
      .map(
        (p, i) =>
          `${i ? 'L' : 'M'} ${Math.round(sx(p.x) * 10) / 10} ${Math.round(sy(p.y) * 10) / 10}`,
      )
      .join(' '),
  );
  const current = $derived(axis === 'light' ? light : axis === 'co2' ? co2 : temp);

  /** @param {number} v */
  const co2Text = (v) => formatFixed(v, 2);

  function reset() {
    light = 60;
    co2 = AIR_CO2;
    temp = 30;
    water = 'du';
    plant = 'ua-sang';
  }
</script>

<div class="space-y-4">
  <div class="flex flex-wrap gap-3">
    <SegmentedControl
      label="Loại cây"
      options={[
        { value: 'ua-sang', label: 'Cây ưa sáng' },
        { value: 'ua-bong', label: 'Cây ưa bóng' },
      ]}
      bind:value={plant}
    />
    <SegmentedControl
      label="Nước"
      options={[
        { value: 'du', label: 'Đủ nước' },
        { value: 'thieu', label: 'Thiếu nước' },
      ]}
      bind:value={water}
    />
  </div>

  <div class="grid gap-3 sm:grid-cols-3">
    <SliderField
      label="Cường độ ánh sáng"
      bind:value={light}
      min={RANGES.light.min}
      max={RANGES.light.max}
      step={RANGES.light.step}
      unit="% nắng trưa"
    />
    <SliderField
      label="Nồng độ CO₂ trong không khí"
      bind:value={co2}
      min={RANGES.co2.min}
      max={RANGES.co2.max}
      step={RANGES.co2.step}
      unit="%"
      format={co2Text}
    />
    <SliderField
      label="Nhiệt độ"
      bind:value={temp}
      min={RANGES.temp.min}
      max={RANGES.temp.max}
      step={RANGES.temp.step}
      unit="°C"
    />
  </div>

  <div class="flex items-center gap-3">
    <div
      class="h-4 flex-1 overflow-hidden rounded-full bg-slate-200"
      role="meter"
      aria-label="Tốc độ quang hợp"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={now}
      aria-valuetext="{now}% tốc độ tối đa"
    >
      <div
        class="h-full rounded-full bg-emerald-500 motion-safe:transition-[width]"
        style="width: {now}%"
      ></div>
    </div>
    <span class="w-40 shrink-0 text-sm font-semibold text-emerald-800 tabular-nums"
      >Quang hợp: {now}% tối đa</span
    >
  </div>

  <SegmentedControl
    label="Vẽ đồ thị tốc độ quang hợp theo"
    options={[
      { value: 'light', label: 'Ánh sáng' },
      { value: 'co2', label: 'CO₂' },
      { value: 'temp', label: 'Nhiệt độ' },
    ]}
    bind:value={axis}
  />

  <svg
    viewBox="0 0 {W} {H}"
    class="block w-full"
    role="img"
    aria-label="Đồ thị tốc độ quang hợp theo {AXIS_LABEL[
      axis
    ].toLowerCase()}, các yếu tố khác giữ nguyên; điểm hiện tại {now}%"
  >
    {#each [0, 50, 100] as y (y)}
      <line x1={L} x2={W - R} y1={sy(y)} y2={sy(y)} stroke="#e2e8f0" />
      <text x={L - 6} y={sy(y) + 4} font-size="10" text-anchor="end" fill="#64748b">{y}%</text>
    {/each}
    {#if axis === 'temp'}
      <rect
        x={sx(25)}
        y={T}
        width={sx(35) - sx(25)}
        height={H - T - B}
        fill="#dcfce7"
        opacity="0.7"
      />
    {/if}
    {#if axis === 'co2'}
      <line x1={sx(0.2)} x2={sx(0.2)} y1={T} y2={H - B} stroke="#dc2626" stroke-dasharray="4 3" />
      <text x={sx(0.2) + 4} y={T + 10} font-size="9" fill="#b91c1c">ngộ độc</text>
    {/if}
    <line x1={L} x2={W - R} y1={H - B} y2={H - B} stroke="#334155" />
    <line x1={L} x2={L} y1={T} y2={H - B} stroke="#334155" />
    {#each TICKS[axis] as t (t)}
      <text x={sx(t)} y={H - B + 14} font-size="10" text-anchor="middle" fill="#64748b"
        >{formatNumber(t, 2)}</text
      >
    {/each}
    <text x={(L + W - R) / 2} y={H - 4} font-size="10" text-anchor="middle" fill="#334155"
      >{AXIS_LABEL[axis]}</text
    >
    <path d={path} fill="none" stroke="#16a34a" stroke-width="3" />
    <circle cx={sx(current)} cy={sy(now)} r="6" fill="#4f46e5" stroke="white" stroke-width="2" />
  </svg>

  <p
    class="min-h-12 rounded-xl px-4 py-3 text-sm {limit
      ? 'bg-amber-50 text-amber-950'
      : 'bg-emerald-50 font-semibold text-emerald-900'}"
    aria-live="polite"
  >
    {#if limit}
      {limit.text}
    {:else}
      Mọi yếu tố đều thuận lợi: cây quang hợp với tốc độ tối đa.
    {/if}
  </p>
  <p class="text-xs text-slate-600">
    Mô hình đơn giản để học tập; không khí bình thường chỉ chứa khoảng {co2Text(AIR_CO2)}% CO₂.
  </p>
  <button type="button" class={button.quiet} onclick={reset}>Về điều kiện ban đầu</button>
</div>
