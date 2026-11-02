<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import { pointsAttr } from '#lib/utils/svg.js';
  import {
    ENZYMES,
    FACTORS,
    NOTHING_SEEN,
    activity,
    activityCurve,
    describeActivity,
    destroys,
    updateSeen,
  } from './engine.js';

  const W = 340;
  const H = 180;
  const LEFT = 36;
  const RIGHT = 12;
  const TOP = 12;
  const BOTTOM = 34;

  let enzymeId = $state('amylase');
  /** @type {import('./engine.js').FactorId} */
  let factor = $state('temp');
  let temp = $state(25);
  let ph = $state(7);
  let substrate = $state(50);
  let enzymeAmount = $state(50);
  let ruined = $state(false);
  let seen = $state(NOTHING_SEEN);

  const enzyme = $derived(ENZYMES.find((e) => e.id === enzymeId) ?? ENZYMES[0]);
  const conditions = $derived({ temp, ph, substrate, enzyme: enzymeAmount });
  const spec = $derived(FACTORS[factor]);
  const rate = $derived(ruined ? 0 : activity(conditions, enzyme.bestPh));
  const note = $derived(describeActivity(conditions, enzyme, ruined));

  /** @param {number} x */
  const sx = (x) => LEFT + ((x - spec.min) / (spec.max - spec.min)) * (W - LEFT - RIGHT);
  /** @param {number} y */
  const sy = (y) => H - BOTTOM - (y / 100) * (H - TOP - BOTTOM);

  const curve = $derived(
    pointsAttr(
      activityCurve(factor, conditions, enzyme.bestPh, ruined).map((p) => ({
        x: sx(p.x),
        y: sy(p.y),
      })),
    ),
  );

  const goals = $derived([
    { done: seen.best, text: 'Tìm nhiệt độ và pH thích hợp nhất.' },
    { done: seen.ruined, text: 'Làm enzyme biến tính bằng nhiệt độ cao hoặc pH quá lệch.' },
    { done: seen.rewarmed, text: 'Làm lạnh enzyme rồi ủ ấm lại: hoạt tính trở về.' },
    { done: seen.level, text: 'Tăng nồng độ cơ chất lên rất cao: hoạt tính chững lại.' },
    { done: seen.acid, text: 'Đổi sang pepsin và tìm môi trường nó hoạt động được.' },
  ]);

  const value = $derived(
    factor === 'temp'
      ? temp
      : factor === 'ph'
        ? ph
        : factor === 'substrate'
          ? substrate
          : enzymeAmount,
  );

  /** @param {number} v */
  function setValue(v) {
    if (factor === 'temp') temp = v;
    else if (factor === 'ph') ph = v;
    else if (factor === 'substrate') substrate = v;
    else enzymeAmount = v;
    settle();
  }

  function settle() {
    if (destroys(conditions, enzyme.bestPh)) ruined = true;
    seen = updateSeen(seen, conditions, enzyme, ruined);
  }

  function newTube() {
    ruined = false;
    temp = 25;
    ph = enzyme.startPh;
    settle();
  }

  /** @param {string | number} id */
  function chooseEnzyme(id) {
    const next = ENZYMES.find((e) => e.id === id) ?? ENZYMES[0];
    enzymeId = next.id;
    ruined = false;
    temp = 25;
    ph = next.startPh;
    settle();
  }
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Enzyme"
    value={enzymeId}
    onchange={chooseEnzyme}
    options={ENZYMES.map((e) => ({ value: e.id, label: e.name }))}
  />
  <SegmentedControl
    label="Đổi yếu tố nào?"
    bind:value={factor}
    options={[
      { value: 'temp', label: 'Nhiệt độ' },
      { value: 'ph', label: 'pH' },
      { value: 'substrate', label: 'Cơ chất' },
      { value: 'enzyme', label: 'Enzyme' },
    ]}
  />

  <svg
    viewBox="0 0 {W} {H}"
    class="mx-auto block w-full max-w-lg rounded-xl bg-slate-50"
    role="img"
    aria-label="Đồ thị hoạt tính enzyme theo {spec.label.toLowerCase()}. Hoạt tính hiện tại {formatNumber(
      rate,
      0,
    )} phần trăm."
  >
    <line x1={LEFT} y1={TOP} x2={LEFT} y2={H - BOTTOM} stroke="#64748b" stroke-width="1.5" />
    <line
      x1={LEFT}
      y1={H - BOTTOM}
      x2={W - RIGHT}
      y2={H - BOTTOM}
      stroke="#64748b"
      stroke-width="1.5"
    />
    <text
      x="12"
      y={(H - BOTTOM + TOP) / 2}
      font-size="11"
      fill="#475569"
      text-anchor="middle"
      transform="rotate(-90 12 {(H - BOTTOM + TOP) / 2})">Hoạt tính (%)</text
    >
    <text x={(LEFT + W - RIGHT) / 2} y={H - 6} font-size="11" fill="#475569" text-anchor="middle"
      >{spec.label}{spec.unit ? ` (${spec.unit})` : ''}</text
    >
    <text x={LEFT - 4} y={sy(100) + 4} font-size="10" fill="#475569" text-anchor="end">100</text>
    <text x={LEFT - 4} y={sy(0) + 4} font-size="10" fill="#475569" text-anchor="end">0</text>
    <text x={LEFT} y={H - BOTTOM + 12} font-size="10" fill="#475569" text-anchor="middle"
      >{spec.min}</text
    >
    <text x={W - RIGHT} y={H - BOTTOM + 12} font-size="10" fill="#475569" text-anchor="end"
      >{spec.max}</text
    >
    <polyline points={curve} fill="none" stroke={ruined ? '#94a3b8' : '#4338ca'} stroke-width="3" />
    <line
      x1={sx(value)}
      y1={TOP}
      x2={sx(value)}
      y2={H - BOTTOM}
      stroke="#94a3b8"
      stroke-dasharray="3 3"
    />
    <circle
      cx={sx(value)}
      cy={sy(rate)}
      r="7"
      fill={ruined ? '#94a3b8' : '#f59e0b'}
      stroke="#1e293b"
      stroke-width="1.5"
    />
  </svg>

  <SliderField
    label={spec.label}
    {value}
    min={spec.min}
    max={spec.max}
    step={spec.step}
    unit={spec.unit}
    format={(v) => formatNumber(v, 1)}
    oninput={setValue}
  />

  <p class="text-sm text-slate-700">
    Hoạt tính: <strong>{formatNumber(rate, 0)}%</strong>. Nhiệt độ {temp} °C, pH {formatNumber(
      ph,
      1,
    )}, cơ chất {substrate}%, enzyme {enzymeAmount}%.
  </p>

  <FeedbackNote tone={note.tone} text={note.text} />

  <button type="button" class={button.quiet} onclick={newTube}>Lấy ống enzyme mới</button>

  <ul class="space-y-1 text-sm">
    {#each goals as goal (goal.text)}
      <li class={goal.done ? 'font-semibold text-emerald-800' : 'text-slate-700'}>
        {goal.done ? '✓' : '○'}
        {goal.text}
      </li>
    {/each}
  </ul>
</div>
