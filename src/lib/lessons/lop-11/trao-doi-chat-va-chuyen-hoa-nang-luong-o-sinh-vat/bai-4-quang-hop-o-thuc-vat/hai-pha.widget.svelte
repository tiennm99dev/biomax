<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { frameLoop, reducedMotion } from '#lib/core/motion.js';
  import { formatFixed } from '#lib/core/number-format.js';
  import { button } from '#lib/core/ui.js';
  import { RUN_SECONDS, SPEED, START_CHLOROPLAST, advance, describePhases } from './engine.js';

  let plast = $state(advance(START_CHLOROPLAST, 120));
  let left = $state(0);
  /** Pool levels when the conditions last changed, to show which way each moved. */
  let before = $state(advance(START_CHLOROPLAST, 120));

  const note = $derived(describePhases(plast));
  const running = $derived(left > 0);

  const POOLS = $derived([
    {
      id: 'power',
      name: 'ATP, NADPH',
      value: plast.power,
      was: before.power,
      max: 12,
      color: '#f59e0b',
    },
    { id: 'pga', name: '3-PGA', value: plast.pga, was: before.pga, max: 20, color: '#7c3aed' },
    { id: 'rubp', name: 'RuBP', value: plast.rubp, was: before.rubp, max: 12, color: '#0284c7' },
  ]);

  /** @param {number} value @param {number} was */
  function trend(value, was) {
    if (value > was + 0.2) return 'tăng';
    if (value < was - 0.2) return 'giảm';
    return 'ổn định';
  }

  $effect(() => {
    if (!running) return;
    return frameLoop((dt) => {
      const step = Math.min(dt * SPEED, left);
      plast = advance(plast, step);
      left -= step;
    });
  });

  /** @param {{ light?: boolean, co2?: boolean }} change */
  function setConditions(change) {
    before = { ...plast };
    plast = { ...plast, ...change };
    if (reducedMotion()) {
      plast = advance(plast, RUN_SECONDS);
      left = 0;
    } else {
      left = RUN_SECONDS;
    }
  }
</script>

<div class="space-y-3">
  <svg
    viewBox="0 0 360 200"
    class="w-full"
    role="img"
    aria-label="Lục lạp: pha sáng trên màng thylakoid nối với chu trình Calvin trong chất nền"
  >
    <ellipse cx="180" cy="104" rx="176" ry="88" fill="#dcfce7" stroke="#16a34a" stroke-width="2" />

    {#each [0, 1, 2, 3, 4] as i (i)}
      <rect
        x="48"
        y={68 + i * 15}
        width="72"
        height="11"
        rx="5"
        fill={plast.light ? '#16a34a' : '#64748b'}
      />
    {/each}
    <text x="84" y="60" text-anchor="middle" font-size="12" font-weight="600" fill="#14532d"
      >Pha sáng</text
    >

    <text x="30" y="24" font-size="12" fill={plast.light ? '#a16207' : '#64748b'}>
      {plast.light ? 'ánh sáng ↓' : 'tối'}
    </text>
    <text x="84" y="164" text-anchor="middle" font-size="12" fill="#0369a1">H₂O ↑</text>
    <text
      x="84"
      y="182"
      text-anchor="middle"
      font-size="12"
      fill={plast.light ? '#0f766e' : '#64748b'}
    >
      O₂ ↓ {plast.light ? 'đang thải' : 'dừng'}
    </text>

    <path
      d="M 126 90 L 200 90"
      fill="none"
      stroke={plast.power > 1 ? '#d97706' : '#cbd5e1'}
      stroke-width="4"
      marker-end="none"
    />
    <path d="M 200 90 l -8 -5 l 0 10 z" fill={plast.power > 1 ? '#d97706' : '#cbd5e1'} />
    <text x="162" y="82" text-anchor="middle" font-size="11" fill="#92400e">ATP, NADPH</text>
    <path
      d="M 200 124 L 126 124"
      fill="none"
      stroke="#94a3b8"
      stroke-width="2"
      stroke-dasharray="4 3"
    />
    <text x="162" y="138" text-anchor="middle" font-size="11" fill="#475569">ADP, NADP⁺</text>

    <circle cx="256" cy="106" r="44" fill="none" stroke="#2563eb" stroke-width="3" />
    <text x="256" y="102" text-anchor="middle" font-size="12" font-weight="600" fill="#1e3a8a"
      >Chu trình</text
    >
    <text x="256" y="116" text-anchor="middle" font-size="12" font-weight="600" fill="#1e3a8a"
      >Calvin</text
    >
    <text
      x="256"
      y="24"
      text-anchor="middle"
      font-size="12"
      fill={plast.co2 ? '#0369a1' : '#64748b'}
    >
      {plast.co2 ? 'CO₂ ↓' : 'hết CO₂'}
    </text>
    <text x="256" y="182" text-anchor="middle" font-size="12" fill="#854d0e">đường ↓</text>
  </svg>

  <div class="flex flex-wrap gap-2">
    <button
      type="button"
      class={button.secondary}
      aria-pressed={plast.light}
      onclick={() => setConditions({ light: !plast.light })}
    >
      {plast.light ? 'Đang có ánh sáng: bấm để tắt' : 'Trong tối: bấm để bật sáng'}
    </button>
    <button
      type="button"
      class={button.secondary}
      aria-pressed={plast.co2}
      onclick={() => setConditions({ co2: !plast.co2 })}
    >
      {plast.co2 ? 'Đang có CO₂: bấm để ngắt' : 'Hết CO₂: bấm để cấp lại'}
    </button>
  </div>

  <ul class="space-y-2 text-sm">
    {#each POOLS as pool (pool.id)}
      <li>
        <div class="mb-1 flex justify-between gap-3">
          <span class="font-semibold">{pool.name}</span>
          <span class="tabular-nums"
            >{formatFixed(pool.value, 1)} ({trend(pool.value, pool.was)})</span
          >
        </div>
        <div class="h-3 overflow-hidden rounded bg-slate-200">
          <div
            class="h-3 rounded"
            style="width: {Math.min(100, (pool.value / pool.max) * 100)}%; background: {pool.color}"
          ></div>
        </div>
      </li>
    {/each}
  </ul>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>
