<script>
  import { frameLoop, reducedMotion } from '#lib/core/motion.js';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SliderField from '#lib/core/slider-field.svelte';
  import {
    NOTHING_SEEN,
    START_WEATHER,
    describeBudget,
    updateSeen,
    waterBudget,
  } from './engine.js';

  let light = $state(START_WEATHER.light);
  let air = $state(START_WEATHER.air);
  let soil = $state(START_WEATHER.soil);
  let seen = $state(NOTHING_SEEN);
  let upOffset = $state(0);
  let downOffset = $state(0);

  const weather = $derived({ light, air, soil });
  const budget = $derived(waterBudget(weather));
  const note = $derived(describeBudget(weather));
  const droop = $derived(budget.wilted ? 26 : budget.stress * 30);
  const goals = $derived([
    { done: seen.dry, text: 'Làm cây héo vì đất khô, nắng gắt, không khí khô.' },
    { done: seen.humid, text: 'Tăng độ ẩm không khí để thoát hơi nước chậm lại.' },
    { done: seen.flooded, text: 'Làm đất úng và xem vì sao cây vẫn héo.' },
  ]);

  $effect(() => {
    if (reducedMotion()) return;
    return frameLoop((dt) => {
      upOffset += dt * 40 * budget.xylem;
      downOffset += dt * 40 * budget.phloem;
    });
  });

  function record() {
    seen = updateSeen(seen, weather);
  }

  /** The leaves, as [x, y, side]. */
  const LEAVES = [
    [180, 60, -1],
    [180, 60, 1],
    [180, 95, -1],
    [180, 95, 1],
  ];
  const stomaGap = $derived(1 + budget.opening * 9);
</script>

<div class="space-y-3">
  <svg
    viewBox="0 0 360 300"
    class="w-full rounded-xl bg-sky-50"
    role="img"
    aria-label="Cây với dòng mạch gỗ đi lên, dòng mạch rây từ lá đi xuống và khí khổng trên lá"
  >
    <circle cx="36" cy="34" r="20" fill="#facc15" opacity={0.2 + (0.8 * light) / 100} />
    <rect
      x="0"
      y="210"
      width="360"
      height="90"
      fill="#a16207"
      opacity={0.25 + (0.55 * soil) / 100}
    />
    {#if budget.waterlogged}
      <rect x="0" y="202" width="360" height="12" fill="#60a5fa" opacity="0.7" />
    {/if}

    <rect x="172" y="50" width="16" height="160" rx="4" fill="#a3a380" />
    {#each LEAVES as [x, y, side], i (i)}
      <ellipse
        cx={x + side * 44}
        cy={y}
        rx="42"
        ry="12"
        fill={budget.wilted ? '#a3a33a' : '#16a34a'}
        transform="rotate({side * droop} {x} {y})"
      />
    {/each}

    <path d="M 176 210 L 176 60" class="line" stroke="#2563eb" stroke-dashoffset={upOffset} />
    <path d="M 184 60 L 184 210" class="line" stroke="#ea580c" stroke-dashoffset={-downOffset} />

    <g fill="none" stroke="#713f12" stroke-width="3" stroke-linecap="round">
      <path d="M 180 210 L 150 250 L 118 262" />
      <path d="M 180 210 L 180 280" />
      <path d="M 180 210 L 214 248 L 248 266" />
    </g>
    <path d="M 118 262 L 170 225" class="line thin" stroke="#2563eb" stroke-dashoffset={upOffset} />
    <path d="M 248 266 L 190 225" class="line thin" stroke="#2563eb" stroke-dashoffset={upOffset} />

    <text x="124" y="150" text-anchor="end" font-size="12" fill="#1d4ed8">mạch gỗ ↑</text>
    <text x="196" y="150" font-size="12" fill="#c2410c">mạch rây ↓↑</text>
    <text x="14" y="288" font-size="12" fill="#1c1917">rễ hút nước, ion khoáng</text>

    <g transform="translate(290 70)">
      <circle r="44" fill="#ecfccb" stroke="#65a30d" />
      <ellipse cx={-stomaGap - 8} cy="0" rx="9" ry="24" fill="#22c55e" />
      <ellipse cx={stomaGap + 8} cy="0" rx="9" ry="24" fill="#22c55e" />
      <text x="0" y="-48" text-anchor="middle" font-size="11" fill="#3f6212">khí khổng</text>
    </g>
    {#each [0, 1, 2] as i (i)}
      <circle
        cx={290 + (i - 1) * 8}
        cy={40 - ((upOffset * 0.6 + i * 9) % 26)}
        r={1 + budget.transpired * 2.5}
        fill="#38bdf8"
        opacity={Math.min(1, budget.transpired * 1.6)}
      />
    {/each}
  </svg>

  <SliderField
    label="Cường độ ánh sáng"
    bind:value={light}
    min={0}
    max={100}
    step={5}
    unit="%"
    oninput={record}
  />
  <SliderField
    label="Độ ẩm không khí"
    bind:value={air}
    min={30}
    max={100}
    step={5}
    unit="%"
    oninput={record}
  />
  <SliderField
    label="Độ ẩm đất"
    bind:value={soil}
    min={0}
    max={100}
    step={5}
    unit="%"
    oninput={record}
  />

  <dl class="grid grid-cols-3 gap-2 text-center text-sm">
    <div class="rounded-lg bg-slate-50 p-2">
      <dt class="text-slate-600">Độ mở khí khổng</dt>
      <dd class="font-semibold">{formatNumber(budget.opening * 100, 0)}%</dd>
    </div>
    <div class="rounded-lg bg-slate-50 p-2">
      <dt class="text-slate-600">Thoát hơi nước</dt>
      <dd class="font-semibold">{formatNumber(budget.transpired, 2)}</dd>
    </div>
    <div class="rounded-lg bg-slate-50 p-2">
      <dt class="text-slate-600">Dòng mạch gỗ</dt>
      <dd class="font-semibold">{formatNumber(budget.xylem, 2)}</dd>
    </div>
  </dl>

  <FeedbackNote tone={note.tone} text={note.text} />

  <ul class="space-y-1 text-sm">
    {#each goals as goal (goal.text)}
      <li class={goal.done ? 'font-semibold text-emerald-800' : 'text-slate-700'}>
        {goal.done ? '✓' : '○'}
        {goal.text}
      </li>
    {/each}
  </ul>
</div>

<style>
  .line {
    fill: none;
    stroke-width: 4;
    stroke-dasharray: 8 6;
  }
  .thin {
    stroke-width: 2;
  }
</style>
