<script>
  import { draggable } from '#lib/actions/draggable.svelte.js';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { TILAPIA, ZONE_LABELS, activity, zoneOf } from './engine.js';

  const s = TILAPIA;
  const W = 340;
  const H = 210;
  const T_MIN = 0;
  const T_MAX = 46;
  const LEFT = 24;
  const RIGHT = 324;
  const BASE = 160;
  const TOP = 30;

  /** @param {number} t */
  const xOf = (t) => LEFT + ((t - T_MIN) / (T_MAX - T_MIN)) * (RIGHT - LEFT);
  /** @param {number} x */
  const tOf = (x) => Math.round(T_MIN + ((x - LEFT) / (RIGHT - LEFT)) * (T_MAX - T_MIN));
  /** @param {number} t */
  const yOf = (t) => BASE - activity(s, t) * (BASE - TOP);

  let temp = $state(25);
  /** @type {SVGSVGElement | undefined} */
  let svgEl = $state();
  const handle = $state({ x: xOf(25), y: yOf(25) });

  const zone = $derived(zoneOf(s, temp));
  const curve = $derived.by(() => {
    const pts = [];
    for (let t = s.lower; t <= s.upper; t += 0.5) pts.push(`${xOf(t)},${yOf(t)}`);
    return `M ${pts.join(' L ')}`;
  });

  /** @param {number} t */
  function setTemp(t) {
    temp = Math.min(T_MAX, Math.max(T_MIN, Math.round(t)));
    handle.x = xOf(temp);
    handle.y = yOf(temp);
  }

  const drag = {
    point: handle,
    svg: () => svgEl ?? null,
    viewBox: { w: W, h: H },
    /** @param {{x: number, y: number}} p */
    projector: (p) => {
      const t = Math.min(T_MAX, Math.max(T_MIN, tOf(p.x)));
      return { x: xOf(t), y: yOf(t) };
    },
    onChange: () => setTemp(tOf(handle.x)),
    /** @param {-1 | 0 | 1} dx @param {-1 | 0 | 1} dy @param {boolean} big */
    onKeyMove: (dx, dy, big) => setTemp(temp + (dx || -dy) * (big ? 5 : 1)),
  };

  const advice = $derived(
    {
      chet:
        temp <= s.lower
          ? `Nước lạnh tới ${temp} °C, thấp hơn hoặc bằng giới hạn dưới ${s.lower} °C: cá rô phi chết.`
          : `Nước nóng tới ${temp} °C, cao hơn hoặc bằng giới hạn trên ${s.upper} °C: cá rô phi chết.`,
      'chong-chiu': `${temp} °C nằm trong giới hạn sinh thái nhưng ngoài khoảng thuận lợi (${s.favLow} – ${s.favHigh} °C): cá sống được nhưng ăn ít, lớn chậm.`,
      'thuan-loi': `${temp} °C nằm trong khoảng thuận lợi (${s.favLow} – ${s.favHigh} °C): cá sinh trưởng, phát triển tốt.`,
      'cuc-thuan': `${temp} °C là điểm cực thuận: cá rô phi phát triển tốt nhất.`,
    }[zone],
  );
  const tone = $derived(zone === 'chet' ? 'warn' : zone === 'chong-chiu' ? 'info' : 'ok');
</script>

<div class="space-y-4">
  <svg
    bind:this={svgEl}
    viewBox="0 0 {W} {H}"
    class="mx-auto block w-full max-w-xl touch-none select-none"
    role="group"
    aria-label="Đồ thị giới hạn sinh thái về nhiệt độ của cá rô phi ở Việt Nam"
  >
    <rect x="0" y="0" width={W} height={H} rx="12" fill="#f8fafc" />
    <!-- zones -->
    <rect
      x={LEFT}
      y={TOP - 14}
      width={xOf(s.lower) - LEFT}
      height={BASE - TOP + 14}
      fill="#fecaca"
    />
    <rect
      x={xOf(s.upper)}
      y={TOP - 14}
      width={RIGHT - xOf(s.upper)}
      height={BASE - TOP + 14}
      fill="#fecaca"
    />
    <rect
      x={xOf(s.lower)}
      y={TOP - 14}
      width={xOf(s.favLow) - xOf(s.lower)}
      height={BASE - TOP + 14}
      fill="#fef3c7"
    />
    <rect
      x={xOf(s.favHigh)}
      y={TOP - 14}
      width={xOf(s.upper) - xOf(s.favHigh)}
      height={BASE - TOP + 14}
      fill="#fef3c7"
    />
    <rect
      x={xOf(s.favLow)}
      y={TOP - 14}
      width={xOf(s.favHigh) - xOf(s.favLow)}
      height={BASE - TOP + 14}
      fill="#bbf7d0"
    />
    <g font-size="8" fill="#334155" text-anchor="middle">
      <text x={(LEFT + xOf(s.lower)) / 2} y={TOP - 4}>chết</text>
      <text x={(xOf(s.lower) + xOf(s.favLow)) / 2} y={TOP - 4}>chống chịu</text>
      <text x={(xOf(s.favLow) + xOf(s.favHigh)) / 2} y={TOP - 4}>thuận lợi</text>
      <text x={(xOf(s.favHigh) + xOf(s.upper)) / 2} y={TOP - 4}>chống chịu</text>
      <text x={(xOf(s.upper) + RIGHT) / 2} y={TOP - 4}>chết</text>
    </g>
    <!-- axis -->
    <line x1={LEFT} y1={BASE} x2={RIGHT} y2={BASE} stroke="#475569" />
    <g font-size="9" fill="#334155" text-anchor="middle">
      {#each [s.lower, s.favLow, s.optimum, s.favHigh, s.upper] as t (t)}
        <line x1={xOf(t)} y1={BASE} x2={xOf(t)} y2={BASE + 4} stroke="#475569" />
        <text x={xOf(t)} y={BASE + 14}>{t}</text>
      {/each}
      <text x={RIGHT} y={BASE + 28} text-anchor="end">nhiệt độ (°C)</text>
      <text x={xOf(s.lower)} y={BASE + 28}>giới hạn dưới</text>
      <text x={xOf(s.upper) - 6} y={BASE + 40}>giới hạn trên</text>
      <text x={xOf(s.optimum)} y={BASE + 40}>điểm cực thuận</text>
    </g>
    <line
      x1={xOf(s.optimum)}
      y1={TOP}
      x2={xOf(s.optimum)}
      y2={BASE}
      stroke="#15803d"
      stroke-dasharray="3 3"
    />
    <path d={curve} fill="none" stroke="#4f46e5" stroke-width="2.5" />
    <line x1={handle.x} y1={handle.y} x2={handle.x} y2={BASE} stroke="#0f172a" stroke-width="1" />
    <g
      class="drag-handle"
      role="slider"
      tabindex="0"
      aria-label="Nhiệt độ nước: kéo hoặc dùng phím mũi tên"
      aria-valuemin={T_MIN}
      aria-valuemax={T_MAX}
      aria-valuenow={temp}
      aria-valuetext="{temp} độ C"
      style="cursor: grab; outline: none"
      use:draggable={drag}
    >
      <circle
        class="drag-knob"
        cx={handle.x}
        cy={handle.y}
        r="9"
        fill="#fff"
        stroke="#0f172a"
        stroke-width="2.5"
      />
    </g>
  </svg>

  <SliderField
    label="Nhiệt độ nước"
    value={temp}
    min={T_MIN}
    max={T_MAX}
    unit="°C"
    oninput={setTemp}
  />
  <p class="text-center text-lg font-semibold">{ZONE_LABELS[zone]}</p>
  <FeedbackNote {tone} text={advice} />
</div>
