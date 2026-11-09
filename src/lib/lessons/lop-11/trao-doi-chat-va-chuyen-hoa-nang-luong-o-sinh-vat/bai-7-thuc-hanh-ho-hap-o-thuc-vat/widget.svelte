<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { frameLoop, reducedMotion } from '#lib/core/motion.js';
  import { formatFixed, formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { linear } from '#lib/core/visuals/svg-math.js';
  import { button } from '#lib/core/ui.js';
  import { FLASKS, ROOM, RUN_HOURS, SEEDS, describeHeat, temperature, trace } from './engine.js';

  /** @type {import('./engine.js').SeedId} */
  let test = $state('nay-mam');
  /** @type {import('./engine.js').SeedId} */
  let control = $state('luoc');
  /** @type {import('./engine.js').FlaskId} */
  let flask = $state('phich');
  let grams = $state(200);
  let hours = $state(0);
  let playing = $state(false);

  const setup = $derived({ test, control, flask, grams });
  const tA = $derived(temperature(test, flask, grams, hours));
  const tB = $derived(temperature(control, flask, grams, hours));
  const note = $derived(describeHeat(setup, hours));

  const TOP_T = 35;
  const LEFT = 36;
  const RIGHT = 330;
  const TOP = 14;
  const BOTTOM = 120;
  const x = linear(0, RUN_HOURS, LEFT, RIGHT).map;
  const y = linear(ROOM, TOP_T, BOTTOM, TOP).map;

  /** @param {number[]} values */
  const line = (values) => values.map((v, i) => `${x(i * 0.5)},${y(v)}`).join(' ');
  const lineA = $derived(line(trace(test, flask, grams, hours, 0.5)));
  const lineB = $derived(line(trace(control, flask, grams, hours, 0.5)));

  const SEED_OPTIONS = Object.entries(SEEDS).map(([value, s]) => ({ value, label: s.name }));

  /** @param {string | number} v @returns {import('./engine.js').SeedId} */
  const asSeed = (v) => (v === 'luoc' ? 'luoc' : v === 'kho' ? 'kho' : 'nay-mam');

  $effect(() => {
    if (!playing) return;
    return frameLoop((dt) => {
      hours = Math.min(RUN_HOURS, hours + dt * 4);
      if (hours >= RUN_HOURS) playing = false;
    });
  });

  function start() {
    if (reducedMotion()) {
      hours = RUN_HOURS;
      return;
    }
    if (hours >= RUN_HOURS) hours = 0;
    playing = true;
  }

  function reset() {
    playing = false;
    hours = 0;
  }

  /** Height of the mercury column for a thermometer drawn from y=150 up to y=40. @param {number} t */
  const column = (t) => 20 + ((Math.min(TOP_T, t) - ROOM) / (TOP_T - ROOM)) * 90;
</script>

<div class="space-y-3">
  <div class="grid gap-3 sm:grid-cols-[180px_1fr]">
    <svg
      viewBox="0 0 180 170"
      class="mx-auto h-48 w-auto"
      role="img"
      aria-label="Bình A {formatFixed(tA, 1)} độ C, bình B {formatFixed(tB, 1)} độ C"
    >
      {#each [{ id: 'A', cx: 45, t: tA, seed: test }, { id: 'B', cx: 135, t: tB, seed: control }] as b (b.id)}
        <rect
          x={b.cx - 32}
          y="60"
          width="64"
          height="96"
          rx="10"
          fill={flask === 'phich' ? '#e2e8f0' : '#f8fafc'}
          stroke="#475569"
          stroke-width={flask === 'phich' ? 4 : 1.5}
        />
        <ellipse
          cx={b.cx}
          cy="138"
          rx="24"
          ry="12"
          fill={b.seed === 'nay-mam' ? '#ca8a04' : b.seed === 'luoc' ? '#a8a29e' : '#d6d3d1'}
        />
        <rect x={b.cx - 4} y="20" width="8" height="134" rx="4" fill="#ffffff" stroke="#64748b" />
        <rect x={b.cx - 2} y={150 - column(b.t)} width="4" height={column(b.t)} fill="#dc2626" />
        <circle cx={b.cx} cy="152" r="6" fill="#dc2626" />
        <text x={b.cx} y="12" text-anchor="middle" font-size="12" font-weight="600" fill="#0f172a"
          >{b.id}: {formatFixed(b.t, 1)} °C</text
        >
      {/each}
    </svg>

    <div class="space-y-3">
      <SegmentedControl
        label="Bình A (thí nghiệm) chứa"
        value={test}
        options={SEED_OPTIONS}
        onchange={(v) => {
          test = asSeed(v);
          reset();
        }}
      />
      <SegmentedControl
        label="Bình B (đối chứng) chứa"
        value={control}
        options={SEED_OPTIONS}
        onchange={(v) => {
          control = asSeed(v);
          reset();
        }}
      />
      <SegmentedControl
        label="Loại bình"
        value={flask}
        options={[
          { value: 'phich', label: FLASKS.phich.name },
          { value: 'coc', label: FLASKS.coc.name },
        ]}
        onchange={(v) => {
          flask = v === 'coc' ? 'coc' : 'phich';
          reset();
        }}
      />
      <SliderField
        label="Khối lượng hạt mỗi bình"
        bind:value={grams}
        min={50}
        max={250}
        step={50}
        unit="g"
        oninput={reset}
      />
    </div>
  </div>

  <svg
    viewBox="0 0 340 140"
    class="mx-auto block w-full max-w-lg rounded-xl bg-slate-50"
    role="img"
    aria-label="Đồ thị nhiệt độ hai bình theo thời gian, sau {formatNumber(hours, 0)} giờ"
  >
    <line x1={LEFT} y1={BOTTOM} x2={RIGHT} y2={BOTTOM} stroke="#94a3b8" />
    <line x1={LEFT} y1={TOP} x2={LEFT} y2={BOTTOM} stroke="#94a3b8" />
    {#each [25, 30, 35] as t (t)}
      <text x={LEFT - 5} y={y(t) + 4} text-anchor="end" font-size="11" fill="#334155">{t}</text>
    {/each}
    <text x={LEFT} y={BOTTOM + 14} text-anchor="middle" font-size="11" fill="#334155">0</text>
    <text x={RIGHT} y={BOTTOM + 14} text-anchor="end" font-size="11" fill="#334155">24 giờ</text>
    <text x={LEFT + 4} y="10" font-size="11" fill="#334155">°C</text>
    <polyline points={lineA} fill="none" stroke="#dc2626" stroke-width="2.5" />
    <polyline
      points={lineB}
      fill="none"
      stroke="#2563eb"
      stroke-width="2.5"
      stroke-dasharray="5 3"
    />
    <text x={RIGHT} y={TOP + 10} text-anchor="end" font-size="11" fill="#dc2626">A</text>
    <text x={RIGHT} y={TOP + 24} text-anchor="end" font-size="11" fill="#2563eb">B (nét đứt)</text>
  </svg>

  <div class="flex flex-wrap items-center gap-2">
    <button type="button" class={button.primary} onclick={start} disabled={playing}>
      {playing ? 'Đang theo dõi…' : 'Theo dõi 24 giờ'}
    </button>
    <button type="button" class={button.quiet} onclick={reset}>Làm lại</button>
    <span class="text-sm tabular-nums" aria-live="polite">
      Sau {formatNumber(hours, 0)} giờ: A {formatFixed(tA, 1)} °C, B {formatFixed(tB, 1)} °C, chênh {formatFixed(
        tA - tB,
        1,
      )} °C.
    </span>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>
