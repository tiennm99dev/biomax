<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import { linear } from '#lib/core/visuals/svg-math.js';
  import { button, focusRing } from '#lib/core/ui.js';
  import { MAX_DAYS, RECIPE, VERDICTS, ferment, verdictOf } from './engine.js';

  const W = 200;
  const H = 150;
  const x = linear(0, MAX_DAYS, 34, W - 8).map;
  const yPh = linear(3, 7, H - 22, 8).map;

  let salt = $state(RECIPE.salt);
  let temp = $state(RECIPE.temp);
  let day = $state(2);
  let pressed = $state(RECIPE.pressed);
  let sugar = $state(RECIPE.sugar);

  const brine = $derived({ salt, temp, pressed, sugar });
  const days = $derived(ferment(brine));
  const today = $derived(days[day]);
  const verdictId = $derived(verdictOf(brine, today));
  const verdict = $derived(VERDICTS[verdictId]);
  const curve = $derived(
    days.map((d) => `${x(d.day).toFixed(1)},${yPh(d.ph).toFixed(1)}`).join(' '),
  );
  const leafColor = $derived(
    verdictId === 'hong' ? '#78716c' : `hsl(${Math.round(110 - 60 * today.acid)} 60% 42%)`,
  );
  const liquidColor = $derived(verdictId === 'hong' ? '#d6d3d1' : '#fef9c3');
  const message = $derived(
    `${verdict.name}: sau ${day} ngày, pH khoảng ${formatNumber(today.ph, 1)}. ${verdict.text}`,
  );

  function useRecipe() {
    salt = RECIPE.salt;
    temp = RECIPE.temp;
    pressed = RECIPE.pressed;
    sugar = RECIPE.sugar;
    day = 2;
  }
</script>

<div class="space-y-3">
  <div class="grid grid-cols-2 gap-3 rounded-2xl bg-slate-50 p-3">
    <svg
      viewBox="0 0 120 150"
      class="block w-full"
      role="img"
      aria-label="Lọ dưa muối: {verdict.name}{pressed
        ? ', có vật nén'
        : ', không có vật nén, rau nổi lên'}"
    >
      <rect
        x="18"
        y="24"
        width="84"
        height="116"
        rx="10"
        fill="#fff"
        stroke="#475569"
        stroke-width="2"
      />
      <rect x="20" y="46" width="80" height="92" rx="8" fill={liquidColor} />
      {#each [0, 1, 2, 3, 4, 5, 6, 7] as i (i)}
        <ellipse
          cx={34 + (i % 4) * 18}
          cy={(pressed ? 112 : 54) + Math.floor(i / 4) * 18}
          rx="14"
          ry="6"
          fill={leafColor}
          transform="rotate({i * 23 - 40} {34 + (i % 4) * 18} {(pressed ? 112 : 54) +
            Math.floor(i / 4) * 18})"
        />
      {/each}
      {#if pressed}
        <rect x="26" y="90" width="68" height="10" rx="3" fill="#64748b" />
      {/if}
      {#if verdictId === 'hong'}
        <rect x="20" y="42" width="80" height="6" fill="#a8a29e" />
      {/if}
      <rect x="14" y="14" width="92" height="10" rx="3" fill="#94a3b8" />
    </svg>

    <svg viewBox="0 0 {W} {H}" class="block w-full" role="img" aria-label="Đồ thị pH theo ngày">
      {#each [3, 4, 5, 6, 7] as v (v)}
        <line x1={x(0)} x2={x(MAX_DAYS)} y1={yPh(v)} y2={yPh(v)} stroke="#e2e8f0" />
        <text x={x(0) - 5} y={yPh(v) + 4} font-size="10" text-anchor="end" fill="#334155">{v}</text>
      {/each}
      {#each [0, 2, 4, 6] as v (v)}
        <text x={x(v)} y={H - 8} font-size="10" text-anchor="middle" fill="#334155">{v}</text>
      {/each}
      <text x="2" y="16" font-size="10" fill="#334155">pH</text>
      <polyline points={curve} fill="none" stroke="#4338ca" stroke-width="2" />
      <circle cx={x(day)} cy={yPh(today.ph)} r="4" fill="#0f172a" />
    </svg>
  </div>

  <div class="grid gap-3 sm:grid-cols-3">
    <SliderField label="Nồng độ muối" bind:value={salt} min={0} max={15} step={0.5} unit="%" />
    <SliderField label="Nhiệt độ" bind:value={temp} min={5} max={50} unit="°C" />
    <SliderField label="Thời gian muối" bind:value={day} min={0} max={MAX_DAYS} unit="ngày" />
  </div>

  <div class="flex flex-wrap gap-4 text-sm font-semibold text-slate-700">
    <label class="flex min-h-11 items-center gap-2">
      <input type="checkbox" class="size-5 {focusRing}" bind:checked={pressed} />
      Nén rau, đổ nước muối ngập mặt rau
    </label>
    <label class="flex min-h-11 items-center gap-2">
      <input type="checkbox" class="size-5 {focusRing}" bind:checked={sugar} />
      Thêm một ít đường
    </label>
  </div>

  <FeedbackNote tone={verdict.tone} text={message} />
  <p class="text-sm text-slate-600">
    Mô phỏng định tính: giá trị pH chỉ để minh hoạ xu hướng, không phải số đo thật.
  </p>

  <button type="button" class={button.quiet} onclick={useRecipe}>Dùng công thức trong bài</button>
</div>
