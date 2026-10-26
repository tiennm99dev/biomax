<script>
  import SliderField from '#lib/core/slider-field.svelte';
  import { fmt, formatNumber } from '#lib/core/number-format.js';
  import { ML_PER_KG, waterNeed } from './engine.js';

  let kg = $state(40);
  const ml = $derived(waterNeed(kg));
  const cups = $derived(Math.round(ml / 250));
</script>

<div class="space-y-3">
  <SliderField
    label="Khối lượng cơ thể của em"
    bind:value={kg}
    min={25}
    max={70}
    step={1}
    unit="kg"
  />
  <div class="flex flex-wrap gap-1" role="img" aria-label="Khoảng {cups} cốc 250 mL">
    {#each Array.from({ length: cups }, (_, i) => i) as i (i)}
      <svg viewBox="0 0 20 26" class="h-8 w-6" aria-hidden="true">
        <path d="M 2 2 L 18 2 L 16 24 L 4 24 Z" fill="#e0f2fe" stroke="#0369a1" />
        <path d="M 3.2 9 L 16.8 9 L 16 24 L 4 24 Z" fill="#38bdf8" />
      </svg>
    {/each}
  </div>
  <p class="rounded-xl bg-sky-50 px-4 py-3 text-sm text-sky-950" aria-live="polite">
    Nhu cầu nước mỗi ngày: {fmt(ML_PER_KG)} mL × {fmt(kg)} kg = {fmt(ml)} mL, tức khoảng
    {formatNumber(ml / 1000, 1)} lít, bằng khoảng {cups} cốc 250 mL. Lượng này gồm cả nước có trong thức
    ăn; trời nóng, vận động nhiều, sốt hay tiêu chảy thì cơ thể mất thêm nước nên cần bù thêm.
  </p>
</div>
