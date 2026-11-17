<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatFixed } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import Stepper from '#lib/core/stepper.svelte';
  import { button } from '#lib/core/ui.js';
  import SeriesChart from '../_shared/series-chart.svelte';
  import { BALANCED, DAYS, diagnose, simulate } from './engine.js';

  /** @typedef {import('./engine.js').Feeding} Feeding */

  const PLANT_X = [28, 300, 70, 260, 112, 222, 150, 190];
  const FISH_SPOTS = [
    [90, 58],
    [200, 76],
    [150, 46],
    [250, 54],
    [120, 92],
    [60, 100],
    [230, 104],
    [180, 112],
    [280, 86],
    [40, 70],
    [140, 70],
    [210, 40],
  ];
  const SNAIL_X = [50, 300, 175, 95, 255, 135];

  let plants = $state(BALANCED.plants);
  let fish = $state(BALANCED.fish);
  let snails = $state(BALANCED.snails);
  let light = $state(BALANCED.light);
  let gravel = $state(/** @type {'co' | 'khong'} */ ('co'));
  let feeding = $state(/** @type {Feeding} */ (BALANCED.feeding));
  let day = $state(DAYS);

  const design = $derived({ plants, fish, snails, light, microbes: gravel === 'co', feeding });
  const days = $derived(simulate(design));
  const now = $derived(days[day]);
  const result = $derived(diagnose(design, days));

  /** Water tint: clear blue turning green as algae grow. */
  const water = $derived(
    `hsl(${195 - now.algae * 7} ${60 - now.algae * 2}% ${88 - now.algae * 4}%)`,
  );

  const text = $derived(
    result.balanced
      ? `Sau ${DAYS} ngày bể vẫn cân bằng: cây quang hợp đủ oxygen cho cá và ốc, vi khuẩn trong cát sỏi chuyển hoá chất thải thành nitrate, cây hấp thụ nitrate, tảo không phát triển quá mức. Đây là một hệ sinh thái nhân tạo tự duy trì được.`
      : `Bể mất cân bằng. ${result.problems.join(' ')}`,
  );

  function reset() {
    ({ plants, fish, snails, light } = BALANCED);
    gravel = 'co';
    feeding = BALANCED.feeding;
    day = DAYS;
  }
</script>

<div class="space-y-4">
  <svg
    viewBox="0 0 340 160"
    class="mx-auto block w-full max-w-xl"
    role="img"
    aria-label="Bể cá ngày thứ {day}: {plants} bó rong, {now.fish} con cá còn sống, {snails} con ốc; oxygen {formatFixed(
      now.oxygen,
      1,
    )}, ammonia {formatFixed(now.ammonia, 1)}, tảo {formatFixed(now.algae, 1)} trên thang 10."
  >
    <rect
      x="6"
      y="12"
      width="328"
      height="142"
      rx="6"
      fill="none"
      stroke="#475569"
      stroke-width="3"
    />
    <rect x="8" y="24" width="324" height="128" fill={water} />
    <circle cx="300" cy="6" r={2 + light / 2} fill="#facc15" opacity={light / 14} />
    <rect x="8" y="136" width="324" height="16" fill={gravel === 'co' ? '#a16207' : '#cbd5e1'} />
    {#if gravel === 'co'}
      {#each [30, 80, 130, 180, 230, 280] as x (x)}
        <circle cx={x} cy="144" r="1.6" fill="#fef3c7" />
      {/each}
    {/if}
    {#each PLANT_X.slice(0, plants) as x (x)}
      <path
        d="M{x} 138 q -8 -30 0 -60 M{x} 138 q 10 -28 2 -52 M{x} 138 q -2 -20 -10 -40"
        fill="none"
        stroke="#15803d"
        stroke-width="3"
        stroke-linecap="round"
      />
    {/each}
    {#each FISH_SPOTS.slice(0, fish) as [x, y], i (i)}
      {@const alive = i < now.fish}
      <g
        transform="translate({x} {alive ? y : 30}) rotate({alive ? 0 : 180})"
        opacity={alive ? 1 : 0.5}
      >
        <ellipse cx="0" cy="0" rx="10" ry="5" fill={alive ? '#f97316' : '#94a3b8'} />
        <path d="M9 0 l 7 -5 v 10 z" fill={alive ? '#ea580c' : '#94a3b8'} />
        <circle cx="-5" cy="-1" r="1.2" fill="#0f172a" />
      </g>
    {/each}
    {#each SNAIL_X.slice(0, snails) as x (x)}
      <circle cx={x} cy="131" r="5" fill="#92400e" />
      <path d="M{x - 9} 136 h 14" stroke="#78350f" stroke-width="3" stroke-linecap="round" />
    {/each}
  </svg>

  <div class="grid gap-3 sm:grid-cols-3">
    <Stepper label="Bó rong (cây thuỷ sinh)" bind:value={plants} min={0} max={8} />
    <Stepper label="Cá" bind:value={fish} min={0} max={12} />
    <Stepper label="Ốc" bind:value={snails} min={0} max={6} />
  </div>
  <div class="grid gap-3 sm:grid-cols-2">
    <SliderField label="Chiếu sáng" bind:value={light} min={0} max={14} unit="giờ/ngày" />
    <SliderField label="Ngày thứ" bind:value={day} min={0} max={DAYS} />
  </div>
  <div class="flex flex-wrap gap-4">
    <SegmentedControl
      label="Lớp cát sỏi có vi khuẩn"
      options={[
        { value: 'co', label: 'Có' },
        { value: 'khong', label: 'Không' },
      ]}
      bind:value={gravel}
    />
    <SegmentedControl
      label="Cho cá ăn"
      options={[
        { value: 'it', label: 'Ít' },
        { value: 'vua', label: 'Vừa đủ' },
        { value: 'nhieu', label: 'Nhiều' },
      ]}
      bind:value={feeding}
    />
  </div>

  <SeriesChart
    label="Diễn biến trong {DAYS} ngày, đang xem ngày {day}: oxygen {formatFixed(
      now.oxygen,
      1,
    )}, ammonia {formatFixed(now.ammonia, 1)}, tảo {formatFixed(now.algae, 1)}."
    unit="Chỉ số"
    timeUnit="ngày"
    at={day}
    series={[
      { name: 'Oxygen hoà tan', values: days.map((d) => d.oxygen), color: '#2563eb' },
      { name: 'Ammonia (chất thải độc)', values: days.map((d) => d.ammonia), color: '#dc2626' },
      { name: 'Tảo', values: days.map((d) => d.algae), color: '#16a34a', dash: '6 4' },
    ]}
  />
  <p class="text-xs text-slate-600">
    Mô hình bể không có máy sục khí, máy lọc; các chỉ số trên thang 0 – 10 chỉ minh hoạ xu hướng.
    Ngày thứ {day}: còn {now.fish}/{fish} con cá.
  </p>

  <FeedbackNote tone={result.balanced ? 'ok' : 'warn'} {text} />
  <button type="button" class={button.quiet} onclick={reset}>Thiết kế cân bằng mẫu</button>
</div>
