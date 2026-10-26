<script>
  import { draggable } from '#lib/actions/draggable.svelte.js';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import {
    ELBOW,
    MAX_BEND,
    SHOULDER,
    armAt,
    bendFromPoint,
    bulge,
    describeAction,
    muscleAction,
    muscleLengths,
  } from './engine.js';

  const W = 300;
  const H = 300;
  const REST = muscleLengths(70);

  let bend = $state(20);
  let last = $state(20);
  let lever = $state(false);
  /** @type {SVGSVGElement | undefined} */
  let svgEl = $state();

  const arm = $derived(armAt(bend));
  const len = $derived(muscleLengths(bend));
  const act = $derived(muscleAction(last, bend));
  const handPoint = $state({ x: armAt(20).hand.x, y: armAt(20).hand.y });

  /** @param {number} next */
  function setBend(next) {
    const b = Math.round(Math.min(MAX_BEND, Math.max(0, next)));
    if (b === bend) return;
    last = bend;
    bend = b;
    const h = armAt(b).hand;
    handPoint.x = h.x;
    handPoint.y = h.y;
  }

  /**
   * A lens-shaped muscle belly between two points.
   * @param {{x: number, y: number}} a @param {{x: number, y: number}} b @param {number} w
   */
  function belly(a, b, w) {
    const mx = (a.x + b.x) / 2;
    const my = (a.y + b.y) / 2;
    const l = Math.hypot(b.x - a.x, b.y - a.y) || 1;
    const nx = (-(b.y - a.y) / l) * w;
    const ny = ((b.x - a.x) / l) * w;
    return `M ${a.x} ${a.y} Q ${mx + nx} ${my + ny} ${b.x} ${b.y} Q ${mx - nx} ${my - ny} ${a.x} ${a.y} Z`;
  }

  /** @param {'co' | 'dan' | 'giu'} s */
  const stateText = (s) => (s === 'co' ? 'co' : s === 'dan' ? 'dãn' : 'đứng yên');
  /** @param {'co' | 'dan' | 'giu'} s */
  const fillOf = (s) => (s === 'co' ? '#dc2626' : '#fca5a5');

  const drag = {
    point: handPoint,
    svg: () => svgEl ?? null,
    viewBox: { w: W, h: H },
    pad: 10,
    keyStep: 8,
    keyShiftStep: 24,
    /** @param {{x: number, y: number}} p */
    projector: (p) => armAt(bendFromPoint(p)).hand,
    onChange: () => setBend(bendFromPoint(handPoint)),
  };
</script>

<div class="space-y-4">
  <div class="grid items-center gap-4 sm:grid-cols-2">
    <svg
      bind:this={svgEl}
      viewBox="0 0 {W} {H}"
      class="mx-auto block w-full max-w-sm touch-none select-none"
      role="group"
      aria-label="Mô hình cánh tay nhìn nghiêng, khuỷu tay gập {bend} độ"
    >
      <rect x="0" y="0" width={W} height={H} rx="14" fill="#fff7ed" />
      <!-- shoulder -->
      <circle cx={SHOULDER.x} cy={SHOULDER.y} r="16" fill="#e7e5e4" stroke="#78716c" />
      <!-- bones -->
      <line
        x1={SHOULDER.x}
        y1={SHOULDER.y}
        x2={ELBOW.x}
        y2={ELBOW.y}
        stroke="#d6d3d1"
        stroke-width="12"
        stroke-linecap="round"
      />
      <line
        x1={ELBOW.x}
        y1={ELBOW.y}
        x2={arm.hand.x}
        y2={arm.hand.y}
        stroke="#d6d3d1"
        stroke-width="10"
        stroke-linecap="round"
      />
      <text x={SHOULDER.x - 100} y={(SHOULDER.y + ELBOW.y) / 2 + 40} font-size="10" fill="#57534e"
        >xương</text
      >
      <text x={SHOULDER.x - 100} y={(SHOULDER.y + ELBOW.y) / 2 + 52} font-size="10" fill="#57534e"
        >cánh tay</text
      >
      <!-- muscles -->
      <path
        d={belly(arm.tricepsStart, arm.tricepsEnd, bulge(len.triceps, REST.triceps))}
        fill={fillOf(act.triceps)}
        fill-opacity="0.85"
        stroke="#7f1d1d"
        stroke-width="1.5"
      />
      <path
        d={belly(arm.bicepsStart, arm.bicepsEnd, -bulge(len.biceps, REST.biceps))}
        fill={fillOf(act.biceps)}
        fill-opacity="0.85"
        stroke="#7f1d1d"
        stroke-width="1.5"
      />
      <text x={SHOULDER.x + 26} y={SHOULDER.y + 40} font-size="11" font-weight="700" fill="#7f1d1d"
        >cơ hai đầu</text
      >
      <text
        x={SHOULDER.x - 24}
        y={SHOULDER.y + 40}
        font-size="11"
        font-weight="700"
        text-anchor="end"
        fill="#7f1d1d">cơ ba đầu</text
      >
      <!-- elbow joint -->
      <circle cx={ELBOW.x} cy={ELBOW.y} r="8" fill="#fef3c7" stroke="#92400e" stroke-width="2" />
      {#if lever}
        <g font-size="12" font-weight="700">
          <text x={ELBOW.x - 30} y={ELBOW.y + 22} fill="#92400e">O</text>
          <circle cx={arm.bicepsEnd.x} cy={arm.bicepsEnd.y} r="4" fill="#1d4ed8" />
          <text x={arm.bicepsEnd.x + 6} y={arm.bicepsEnd.y + 16} fill="#1d4ed8">A</text>
          <text x={arm.hand.x + 14} y={arm.hand.y + 16} fill="#047857">B</text>
          <line
            x1={arm.hand.x}
            y1={arm.hand.y + 10}
            x2={arm.hand.x}
            y2={arm.hand.y + 40}
            stroke="#047857"
            stroke-width="3"
            marker-end="url(#luc-p)"
          />
        </g>
        <defs>
          <marker
            id="luc-p"
            viewBox="0 0 10 10"
            refX="5"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto"
          >
            <path d="M 0 0 L 10 5 L 0 10 Z" fill="#047857" />
          </marker>
        </defs>
      {/if}
      <!-- hand (draggable) -->
      <g
        class="drag-handle"
        role="slider"
        tabindex="0"
        aria-label="Bàn tay: kéo để gập hoặc duỗi khuỷu tay"
        aria-valuemin="0"
        aria-valuemax={MAX_BEND}
        aria-valuenow={bend}
        aria-valuetext="gập {bend} độ"
        style="cursor: grab; outline: none"
        use:draggable={drag}
      >
        <circle
          class="drag-knob"
          cx={arm.hand.x}
          cy={arm.hand.y}
          r="12"
          fill="#fde7d4"
          stroke="#b45309"
          stroke-width="2.5"
        />
      </g>
    </svg>

    <div class="space-y-3">
      <SliderField
        label="Góc gập khuỷu tay"
        value={bend}
        min={0}
        max={MAX_BEND}
        step={5}
        unit="°"
        oninput={(v) => setBend(v)}
      />
      <div class="flex flex-wrap gap-2">
        <button type="button" class={button.secondary} onclick={() => setBend(bend + 30)}
          >Gập tay</button
        >
        <button type="button" class={button.secondary} onclick={() => setBend(bend - 30)}
          >Duỗi tay</button
        >
        <button
          type="button"
          class={button.quiet}
          aria-pressed={lever}
          onclick={() => (lever = !lever)}>{lever ? 'Ẩn đòn bẩy' : 'Xem đòn bẩy'}</button
        >
      </div>
      <dl class="grid grid-cols-2 gap-2 text-sm">
        <div class="rounded-lg bg-white px-3 py-2 ring-1 ring-slate-200">
          <dt class="text-slate-600">Cơ hai đầu</dt>
          <dd class="font-semibold text-rose-800">{stateText(act.biceps)}</dd>
        </div>
        <div class="rounded-lg bg-white px-3 py-2 ring-1 ring-slate-200">
          <dt class="text-slate-600">Cơ ba đầu</dt>
          <dd class="font-semibold text-rose-800">{stateText(act.triceps)}</dd>
        </div>
      </dl>
    </div>
  </div>

  <p class="min-h-12 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-950" aria-live="polite">
    {describeAction(act)}
  </p>
  {#if lever}
    <p class="rounded-xl bg-sky-50 px-4 py-3 text-sm text-sky-950">
      Cẳng tay là một đòn bẩy: điểm tựa O là khớp khuỷu, lực kéo của cơ hai đầu đặt ở A (chỗ gân cơ
      bám vào xương cẳng tay), vật nặng đặt ở B (bàn tay). Vì OA ngắn hơn nhiều so với OB, chỉ cần
      cơ co ngắn lại một chút là bàn tay đã di chuyển được một quãng dài.
    </p>
  {/if}
  <p class="text-xs text-slate-600">
    Màu đỏ đậm: cơ đang co (ngắn lại, phình to); màu đỏ nhạt: cơ dãn. Hình vẽ sơ lược.
  </p>
</div>
