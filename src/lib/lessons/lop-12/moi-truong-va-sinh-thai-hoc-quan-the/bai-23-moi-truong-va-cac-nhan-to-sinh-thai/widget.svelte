<script>
  import { draggable } from '#lib/actions/draggable.svelte.js';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import {
    HUMID_SPAN,
    SPECIES,
    TEMP_SPAN,
    ZONE_NAME,
    assess,
    describe,
    nicheBox,
    overlap,
  } from './engine.js';

  const W = 360;
  const H = 330;
  const L = 58;
  const R = 344;
  const T = 30;
  const B = 262;
  const BAR = 10;

  /** @param {number} t */
  const xOf = (t) => L + ((t - TEMP_SPAN[0]) / (TEMP_SPAN[1] - TEMP_SPAN[0])) * (R - L);
  /** @param {number} h */
  const yOf = (h) => B - ((h - HUMID_SPAN[0]) / (HUMID_SPAN[1] - HUMID_SPAN[0])) * (B - T);
  /** @param {number} x */
  const tOf = (x) => TEMP_SPAN[0] + ((x - L) / (R - L)) * (TEMP_SPAN[1] - TEMP_SPAN[0]);
  /** @param {number} y */
  const hOf = (y) => HUMID_SPAN[0] + ((B - y) / (B - T)) * (HUMID_SPAN[1] - HUMID_SPAN[0]);

  let speciesId = $state(/** @type {string | number} */ ('a'));
  let view = $state(/** @type {string | number} */ ('one'));
  let temp = $state(25);
  let humid = $state(70);
  /** @type {SVGSVGElement | undefined} */
  let svgEl = $state();
  const handle = $state({ x: xOf(25), y: yOf(70) });

  const sp = $derived(SPECIES.find((s) => s.id === speciesId) ?? SPECIES[0]);
  const other = $derived(SPECIES.find((s) => s.id !== sp.id) ?? SPECIES[1]);
  const both = $derived(view === 'both');
  const fate = $derived(assess(sp, temp, humid));
  const shared = $derived(overlap(nicheBox(sp), nicheBox(other)));
  const otherState = $derived(assess(other, temp, humid));

  const message = $derived.by(() => {
    const own = describe(sp, temp, humid);
    if (!both) return own;
    const otherLives = otherState.overall !== 'ngoai';
    const ownLives = fate.overall !== 'ngoai';
    const tail =
      ownLives && otherLives
        ? `Điểm này nằm trong phần chung của hai ổ sinh thái: cả ${sp.name} và ${other.name} đều sống được ở đây.`
        : otherLives
          ? `${other.name} lại sống được ở đây (${ZONE_NAME[otherState.overall]}).`
          : ownLives
            ? `${other.name} không sống được ở đây.`
            : 'Cả hai loài đều không sống được ở đây.';
    return `${own} ${tail}`;
  });
  const tone = $derived(
    fate.overall === 'thuan-loi' ? 'ok' : fate.overall === 'chong-chiu' ? 'info' : 'warn',
  );

  /** @param {number} t @param {number} h */
  function setPoint(t, h) {
    temp = Math.min(TEMP_SPAN[1], Math.max(TEMP_SPAN[0], Math.round(t)));
    humid = Math.min(HUMID_SPAN[1], Math.max(HUMID_SPAN[0], Math.round(h)));
    handle.x = xOf(temp);
    handle.y = yOf(humid);
  }

  const drag = {
    point: handle,
    svg: () => svgEl ?? null,
    viewBox: { w: W, h: H },
    /** @param {{x: number, y: number}} p */
    projector: (p) => ({
      x: Math.min(R, Math.max(L, p.x)),
      y: Math.min(B, Math.max(T, p.y)),
    }),
    onChange: () => setPoint(tOf(handle.x), hOf(handle.y)),
    /** @param {-1 | 0 | 1} dx @param {-1 | 0 | 1} dy @param {boolean} big */
    onKeyMove: (dx, dy, big) => setPoint(temp + dx * (big ? 5 : 1), humid - dy * (big ? 5 : 1)),
  };

  /** @param {import('./engine.js').Box} b */
  const rect = (b) => ({
    x: xOf(b.x0),
    y: yOf(b.y1),
    width: xOf(b.x1) - xOf(b.x0),
    height: yOf(b.y0) - yOf(b.y1),
  });

  const SPECIES_OPTIONS = SPECIES.map((s) => ({ value: s.id, label: s.name }));
  const VIEW_OPTIONS = [
    { value: 'one', label: 'Một loài' },
    { value: 'both', label: 'So sánh hai loài' },
  ];
  const tempTicks = [0, 10, 20, 30, 40];
  const humidTicks = [0, 20, 40, 60, 80, 100];
</script>

<div class="space-y-4">
  <div class="flex flex-wrap gap-3">
    <SegmentedControl label="Loài" options={SPECIES_OPTIONS} bind:value={speciesId} />
    <SegmentedControl label="Hiển thị" options={VIEW_OPTIONS} bind:value={view} />
  </div>

  <svg
    bind:this={svgEl}
    viewBox="0 0 {W} {H}"
    class="mx-auto block w-full max-w-xl touch-none select-none"
    role="group"
    aria-label="Đồ thị giới hạn sinh thái của {sp.name} về nhiệt độ và độ ẩm; vùng chồng lên nhau là ổ sinh thái theo hai nhân tố"
  >
    <rect x="0" y="0" width={W} height={H} rx="12" fill="#f8fafc" />
    <rect x={L} y={T} width={R - L} height={B - T} fill="#fee2e2" />

    {#if both}
      {@const ob = rect(nicheBox(other))}
      <rect
        {...ob}
        fill={other.color}
        fill-opacity="0.12"
        stroke={other.color}
        stroke-width="2"
        stroke-dasharray="6 4"
      />
    {/if}
    <rect {...rect(nicheBox(sp))} fill="#fef3c7" stroke={sp.color} stroke-width="2" />
    <rect {...rect(nicheBox(sp, true))} fill="#bbf7d0" stroke="#15803d" stroke-width="1.5" />
    {#if both && shared}
      <rect
        {...rect(shared)}
        fill="none"
        stroke="#0f172a"
        stroke-width="2.5"
        stroke-dasharray="2 3"
      />
    {/if}

    <!-- one-factor limits projected on the axes -->
    <rect
      x={xOf(sp.temp.lower)}
      y={B + 6}
      width={xOf(sp.temp.upper) - xOf(sp.temp.lower)}
      height={BAR}
      fill="#fde68a"
    />
    <rect
      x={xOf(sp.temp.favLow)}
      y={B + 6}
      width={xOf(sp.temp.favHigh) - xOf(sp.temp.favLow)}
      height={BAR}
      fill="#4ade80"
    />
    <rect
      x={L - 6 - BAR}
      y={yOf(sp.humid.upper)}
      width={BAR}
      height={yOf(sp.humid.lower) - yOf(sp.humid.upper)}
      fill="#fde68a"
    />
    <rect
      x={L - 6 - BAR}
      y={yOf(sp.humid.favHigh)}
      width={BAR}
      height={yOf(sp.humid.favLow) - yOf(sp.humid.favHigh)}
      fill="#4ade80"
    />

    <line x1={L} y1={B} x2={R} y2={B} stroke="#475569" />
    <line x1={L} y1={T} x2={L} y2={B} stroke="#475569" />
    <g font-size="11" fill="#334155">
      {#each tempTicks as t (t)}
        <text x={xOf(t)} y={B + 30} text-anchor="middle">{t}</text>
      {/each}
      <text x={R} y={B + 46} text-anchor="end">Nhiệt độ (°C)</text>
      {#each humidTicks as h (h)}
        <text x={L - 20} y={yOf(h) + 4} text-anchor="end">{h}</text>
      {/each}
      <text x="8" y="16">Độ ẩm (%)</text>
    </g>
    <g font-size="10" font-weight="600">
      <text x={xOf(sp.temp.lower) + 4} y={yOf(sp.humid.upper) + 12} fill="#92400e"
        >ổ sinh thái {sp.name}</text
      >
      <text
        x={(xOf(sp.temp.favLow) + xOf(sp.temp.favHigh)) / 2}
        y={(yOf(sp.humid.favLow) + yOf(sp.humid.favHigh)) / 2 + 4}
        text-anchor="middle"
        fill="#166534">thuận lợi</text
      >
    </g>

    <line
      x1={handle.x}
      y1={handle.y}
      x2={handle.x}
      y2={B}
      stroke="#0f172a"
      stroke-dasharray="3 3"
    />
    <line
      x1={L}
      y1={handle.y}
      x2={handle.x}
      y2={handle.y}
      stroke="#0f172a"
      stroke-dasharray="3 3"
    />
    <g
      class="drag-handle"
      role="slider"
      tabindex="0"
      aria-label="Điều kiện môi trường: kéo, hoặc dùng mũi tên trái phải đổi nhiệt độ, lên xuống đổi độ ẩm"
      aria-valuemin={TEMP_SPAN[0]}
      aria-valuemax={TEMP_SPAN[1]}
      aria-valuenow={temp}
      aria-valuetext="{temp} độ C, độ ẩm {humid} phần trăm"
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

  <div class="grid gap-3 sm:grid-cols-2">
    <SliderField
      label="Nhiệt độ"
      value={temp}
      min={TEMP_SPAN[0]}
      max={TEMP_SPAN[1]}
      unit="°C"
      oninput={(v) => setPoint(v, humid)}
    />
    <SliderField
      label="Độ ẩm không khí"
      value={humid}
      min={HUMID_SPAN[0]}
      max={HUMID_SPAN[1]}
      unit="%"
      oninput={(v) => setPoint(temp, v)}
    />
  </div>

  <dl class="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 rounded-xl bg-slate-50 p-4 text-sm">
    <dt class="font-semibold">Giới hạn nhiệt độ</dt>
    <dd>
      {sp.temp.lower} – {sp.temp.upper} °C (thuận lợi {sp.temp.favLow} – {sp.temp.favHigh} °C)
    </dd>
    <dt class="font-semibold">Giới hạn độ ẩm</dt>
    <dd>
      {sp.humid.lower} – {sp.humid.upper}% (thuận lợi {sp.humid.favLow} – {sp.humid.favHigh}%)
    </dd>
    {#if both}
      <dt class="font-semibold">Phần chung hai ổ</dt>
      <dd>
        {#if shared}
          {shared.x0} – {shared.x1} °C và {shared.y0} – {shared.y1}%
        {:else}
          không có
        {/if}
      </dd>
    {/if}
  </dl>
  <FeedbackNote {tone} text={message} />
</div>
