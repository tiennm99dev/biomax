<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import { NOW, PEOPLE, advice, lifeIndex, planText, scores } from './engine.js';

  let green = $state(NOW.green);
  let transit = $state(NOW.transit);
  let recycle = $state(NOW.recycle);

  const plan = $derived({ green, transit, recycle });
  const parts = $derived(scores(plan));
  const index = $derived(lifeIndex(plan));
  const note = $derived(advice(plan));

  /**
   * The 100 cells of the city map, each 1% of its land, in a fixed scattered
   * order so parks spread over the city as the share grows.
   */
  const ORDER = Array.from({ length: 100 }, (_, i) => (i * 37 + 11) % 100);
  /** @type {Record<number, number>} cell → rank in which it turns green */
  const RANK = Object.fromEntries(ORDER.map((cell, rank) => [cell, rank]));

  function reset() {
    green = NOW.green;
    transit = NOW.transit;
    recycle = NOW.recycle;
  }

  const CELL = 18;
</script>

<div class="space-y-4">
  <div class="grid gap-3 sm:grid-cols-3">
    <SliderField
      label="Cây xanh, mặt nước"
      bind:value={green}
      min={0}
      max={60}
      unit="% diện tích"
    />
    <SliderField
      label="Đi lại bằng giao thông công cộng"
      bind:value={transit}
      min={0}
      max={80}
      step={5}
      unit="% chuyến đi"
    />
    <SliderField
      label="Rác được phân loại, tái chế"
      bind:value={recycle}
      min={0}
      max={80}
      step={5}
      unit="%"
    />
  </div>

  <div class="grid gap-4 md:grid-cols-2">
    <svg
      viewBox="0 0 {CELL * 10} {CELL * 10}"
      class="mx-auto block w-full max-w-64 rounded-xl"
      role="img"
      aria-label="Bản đồ thành phố chia 100 ô, mỗi ô 1% diện tích; {green} ô là cây xanh, mặt nước."
    >
      {#each Array.from({ length: 100 }, (_, i) => i) as cell (cell)}
        {@const isGreen = RANK[cell] < green}
        <rect
          x={(cell % 10) * CELL + 1}
          y={Math.floor(cell / 10) * CELL + 1}
          width={CELL - 2}
          height={CELL - 2}
          rx="3"
          fill={isGreen ? (RANK[cell] % 5 === 0 ? '#38bdf8' : '#22c55e') : '#cbd5e1'}
        />
        {#if !isGreen}
          <rect
            x={(cell % 10) * CELL + 5}
            y={Math.floor(cell / 10) * CELL + 5}
            width={CELL - 10}
            height={CELL - 10}
            fill="#94a3b8"
          />
        {/if}
      {/each}
    </svg>

    <div class="space-y-2">
      <p class="text-sm text-slate-700" aria-live="polite">{planText(plan)}</p>
      <ul class="space-y-2" aria-label="Điểm thành phần">
        {#each parts as s (s.id)}
          <li class="text-sm text-slate-800">
            <div class="flex justify-between">
              <span>{s.label}</span><span class="font-semibold tabular-nums">{s.value}/100</span>
            </div>
            <div class="h-2.5 rounded-full bg-slate-200" aria-hidden="true">
              <div
                class="h-2.5 rounded-full {s.value >= 70
                  ? 'bg-emerald-500'
                  : s.value >= 40
                    ? 'bg-amber-500'
                    : 'bg-rose-500'}"
                style="width: {s.value}%"
              ></div>
            </div>
          </li>
        {/each}
      </ul>
      <p class="text-base font-bold text-slate-900" aria-live="polite">
        Chỉ số chất lượng sống: <span class="text-indigo-700">{index}/100</span>
      </p>
    </div>
  </div>

  <div class="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-700" aria-hidden="true">
    <span class="flex items-center gap-1"
      ><span class="inline-block h-3 w-3 rounded bg-green-500"></span>Cây xanh</span
    >
    <span class="flex items-center gap-1"
      ><span class="inline-block h-3 w-3 rounded bg-sky-400"></span>Mặt nước</span
    >
    <span class="flex items-center gap-1"
      ><span class="inline-block h-3 w-3 rounded bg-slate-400"></span>Nhà ở, công trình</span
    >
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />
  <p class="text-xs text-slate-600">
    Mô hình đơn giản cho thành phố rộng 50 km², {formatNumber(PEOPLE)} dân; các hệ số chỉ để minh hoạ
    xu hướng.
  </p>
  <button type="button" class={button.quiet} onclick={reset}>Về hiện trạng ban đầu</button>
</div>
