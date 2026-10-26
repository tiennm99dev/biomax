<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import { button } from '#lib/core/ui.js';
  import {
    AIR_CO2,
    AIR_O2,
    FRUIT_WATER,
    RANGES,
    advice,
    damage,
    durationText,
    rate,
    storageDays,
  } from './engine.js';

  /** @type {import('./engine.js').Produce} */
  let produce = $state('hat');
  let temp = $state(30);
  let water = $state(20);
  let o2 = $state(AIR_O2);
  let co2 = $state(0);

  const store = $derived({ produce, temp, water, o2, co2: co2 === 0 ? AIR_CO2 : co2 });
  const now = $derived(rate(store));
  const days = $derived(storageDays(store));
  const hurt = $derived(damage(store));
  const tip = $derived(advice(store));
  const roomDays = $derived(
    storageDays({ produce, temp: 30, water: 20, o2: AIR_O2, co2: AIR_CO2 }),
  );
  const maxDays = $derived(produce === 'hat' ? 900 : 120);

  /** @param {number} v */
  const co2Text = (v) => (v === 0 ? '0,03' : formatNumber(v, 1));

  const PRESETS = {
    hat: [
      { label: 'Kho thường', t: 30, w: 20, o: AIR_O2, c: 0 },
      { label: 'Phơi khô hạt', t: 30, w: 13, o: AIR_O2, c: 0 },
      { label: 'Khô và mát', t: 15, w: 13, o: AIR_O2, c: 0 },
    ],
    qua: [
      { label: 'Để ở phòng', t: 30, w: 20, o: AIR_O2, c: 0 },
      { label: 'Tủ lạnh', t: 5, w: 20, o: AIR_O2, c: 0 },
      { label: 'Kho lạnh giàu CO₂', t: 5, w: 20, o: 5, c: 5 },
    ],
  };

  /** @param {{ t: number, w: number, o: number, c: number }} p */
  function apply(p) {
    temp = p.t;
    water = p.w;
    o2 = p.o;
    co2 = p.c;
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Nông sản trong kho"
    options={[
      { value: 'hat', label: 'Hạt thóc' },
      { value: 'qua', label: 'Rau quả tươi' },
    ]}
    bind:value={produce}
  />

  <div class="flex flex-wrap gap-2" role="group" aria-label="Chọn nhanh một cách bảo quản">
    {#each PRESETS[produce] as p (p.label)}
      <button type="button" class={button.secondary} onclick={() => apply(p)}>{p.label}</button>
    {/each}
  </div>

  <div class="grid gap-3 sm:grid-cols-2">
    <SliderField
      label="Nhiệt độ kho"
      bind:value={temp}
      min={RANGES.temp.min}
      max={RANGES.temp.max}
      step={RANGES.temp.step}
      unit="°C"
    />
    {#if produce === 'hat'}
      <SliderField
        label="Độ ẩm của hạt (lượng nước trong hạt)"
        bind:value={water}
        min={RANGES.water.min}
        max={RANGES.water.max}
        step={RANGES.water.step}
        unit="%"
      />
    {:else}
      <p class="rounded-xl bg-sky-50 px-4 py-3 text-sm text-sky-900">
        Rau quả tươi chứa khoảng {FRUIT_WATER} % nước; không thể phơi khô mà rau quả vẫn tươi, nên chỉ
        điều chỉnh nhiệt độ và các khí trong kho.
      </p>
    {/if}
    <SliderField
      label="Nồng độ O₂ trong kho"
      bind:value={o2}
      min={RANGES.o2.min}
      max={RANGES.o2.max}
      step={RANGES.o2.step}
      unit="%"
    />
    <SliderField
      label="Nồng độ CO₂ trong kho"
      bind:value={co2}
      min={RANGES.co2.min}
      max={RANGES.co2.max}
      step={RANGES.co2.step}
      unit="%"
      format={co2Text}
    />
  </div>

  <div class="space-y-3 rounded-xl border border-slate-200 p-4">
    <div class="flex items-center gap-3">
      <span class="w-28 shrink-0 text-sm font-semibold text-rose-800">Tốc độ hô hấp</span>
      <div
        class="h-4 flex-1 overflow-hidden rounded-full bg-slate-200"
        role="meter"
        aria-label="Tốc độ hô hấp của nông sản"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={now}
        aria-valuetext="{formatNumber(now, 1)} % mức tối đa"
      >
        <div
          class="h-full rounded-full bg-rose-500 motion-safe:transition-[width]"
          style="width: {now}%"
        ></div>
      </div>
      <span class="w-16 shrink-0 text-right text-sm tabular-nums">{formatNumber(now, 1)} %</span>
    </div>
    <div class="flex items-center gap-3">
      <span class="w-28 shrink-0 text-sm font-semibold text-emerald-800">Thời gian giữ</span>
      <div
        class="h-4 flex-1 overflow-hidden rounded-full bg-slate-200"
        role="meter"
        aria-label="Thời gian bảo quản ước tính"
        aria-valuemin="0"
        aria-valuemax={maxDays}
        aria-valuenow={days}
        aria-valuetext={durationText(days)}
      >
        <div
          class="h-full rounded-full {hurt
            ? 'bg-amber-500'
            : 'bg-emerald-500'} motion-safe:transition-[width]"
          style="width: {Math.max(1, (100 * days) / maxDays)}%"
        ></div>
      </div>
      <span class="w-24 shrink-0 text-right text-sm tabular-nums">{durationText(days)}</span>
    </div>
    <p class="text-xs text-slate-600">
      So với để {produce === 'hat' ? 'hạt ẩm (20 %) trong kho thường' : 'ở nhiệt độ phòng'}
      ({durationText(roomDays)}), cách bảo quản này giữ được
      {days === roomDays
        ? 'bằng thời gian đó'
        : days > roomDays
          ? `lâu gấp khoảng ${formatNumber(days / roomDays, 1)} lần`
          : 'ngắn hơn'}.
    </p>
  </div>

  <p
    class="min-h-12 rounded-xl px-4 py-3 text-sm {hurt
      ? 'bg-red-50 text-red-900'
      : 'bg-amber-50 text-amber-950'}"
    aria-live="polite"
  >
    {tip}
  </p>
  <p class="text-xs text-slate-600">
    Mô hình đơn giản để học tập: hô hấp càng yếu thì nông sản càng ít bị phân giải chất hữu cơ và
    giữ được lâu; nhưng làm tế bào chết thì nông sản hỏng.
  </p>
</div>
