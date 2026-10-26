<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { reducedMotion } from '#lib/core/motion.js';
  import { formatFixed } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { INDICES, levelOf, regulate, response } from './engine.js';

  const STEPS = 8;

  /** @type {import('./engine.js').IndexId} */
  let id = $state('duong-huyet');
  let value = $state(INDICES['duong-huyet'].setPoint);
  let impaired = $state(false);
  /** @type {number[]} */
  let history = $state([INDICES['duong-huyet'].setPoint]);
  let running = $state(false);

  const x = $derived(INDICES[id]);
  const level = $derived(levelOf(id, value));
  const text = $derived(response(id, value, impaired));
  const show = (/** @type {number} */ v) => `${formatFixed(v, x.digits)} ${x.unit}`;

  /** @param {string | number} next */
  function switchIndex(next) {
    id = next === 'than-nhiet' ? 'than-nhiet' : 'duong-huyet';
    running = false;
    value = INDICES[id].setPoint;
    history = [value];
  }

  /** @param {number} v */
  function setValue(v) {
    running = false;
    value = Math.round(v * 10) / 10;
    history = [value];
  }

  function stepOnce() {
    const next = regulate(id, value, impaired);
    value = next;
    history = [...history, next];
  }

  function respond() {
    history = [value];
    if (reducedMotion()) {
      for (let k = 0; k < STEPS; k++) stepOnce();
      return;
    }
    running = true;
  }

  $effect(() => {
    if (!running) return;
    const timer = setInterval(() => {
      if (history.length > STEPS) {
        running = false;
        return;
      }
      stepOnce();
    }, 600);
    return () => clearInterval(timer);
  });

  // Chart: 300 × 140, value axis from x.min to x.max.
  /** @param {number} v */
  const yOf = (v) => 120 - ((v - x.min) / (x.max - x.min)) * 105;
  /** @param {number} k */
  const xOf = (k) => 34 + k * (256 / STEPS);
  const path = $derived(history.map((v, k) => `${k ? 'L' : 'M'} ${xOf(k)} ${yOf(v)}`).join(' '));
  const tone = $derived(level === 'binh-thuong' ? 'ok' : impaired ? 'warn' : 'info');
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Chỉ số sinh lí"
    options={[
      { value: 'duong-huyet', label: 'Đường huyết' },
      { value: 'than-nhiet', label: 'Thân nhiệt' },
    ]}
    value={id}
    onchange={switchIndex}
  />

  <div class="grid gap-4 sm:grid-cols-2">
    <div class="space-y-3">
      <p class="text-sm font-semibold text-slate-700">Một tình huống xảy ra:</p>
      <div class="flex flex-wrap gap-2">
        {#each x.events as e (e.id)}
          <button type="button" class="{button.quiet} text-sm" onclick={() => setValue(e.value)}
            >{e.label}</button
          >
        {/each}
      </div>
      <SliderField
        label="Hoặc tự đặt giá trị"
        {value}
        min={x.min}
        max={x.max}
        step={x.step}
        unit={x.unit}
        format={(v) => formatFixed(v, x.digits)}
        oninput={setValue}
      />
      <label class="flex min-h-11 items-center gap-2 text-sm">
        <input
          type="checkbox"
          class="h-5 w-5 accent-rose-600 {focusRing}"
          bind:checked={impaired}
          onchange={() => setValue(value)}
        />
        Cơ chế điều hòa bị rối loạn: {x.impaired.toLowerCase()}
      </label>
      <button
        type="button"
        class={button.primary}
        disabled={running || level === 'binh-thuong'}
        onclick={respond}>Theo dõi cơ thể phản hồi</button
      >
    </div>

    <svg
      viewBox="0 0 300 140"
      class="block w-full"
      role="img"
      aria-label="Đồ thị {x.name.toLowerCase()} theo thời gian. Ngưỡng bình thường từ {show(
        x.low,
      )} đến {show(x.high)}. Giá trị hiện tại {show(value)}."
    >
      <rect x="0" y="0" width="300" height="140" rx="12" fill="#f8fafc" />
      <rect
        x="34"
        y={yOf(x.high)}
        width="256"
        height={yOf(x.low) - yOf(x.high)}
        fill="#bbf7d0"
        opacity="0.7"
      />
      <line x1="34" y1="120" x2="290" y2="120" stroke="#94a3b8" />
      <line x1="34" y1="15" x2="34" y2="120" stroke="#94a3b8" />
      <g font-size="9" fill="#334155" text-anchor="end">
        <text x="30" y={yOf(x.high) + 3}>{formatFixed(x.high, x.digits)}</text>
        <text x="30" y={yOf(x.low) + 3}>{formatFixed(x.low, x.digits)}</text>
        <text x="4" y="12" text-anchor="start">{x.unit}</text>
      </g>
      <text x="288" y="134" font-size="9" fill="#334155" text-anchor="end">thời gian →</text>
      <text x="40" y={yOf(x.high) - 4} font-size="9" fill="#166534">ngưỡng bình thường</text>
      <path d={path} stroke="#4f46e5" stroke-width="2.5" fill="none" />
      {#each history as v, k (k)}
        <circle cx={xOf(k)} cy={yOf(v)} r="3.5" fill="#4f46e5" />
      {/each}
    </svg>
  </div>

  <p class="text-center text-2xl font-bold tabular-nums">
    {show(value)}
    <span
      class="ml-2 align-middle text-sm font-semibold {level === 'binh-thuong'
        ? 'text-emerald-700'
        : 'text-rose-700'}"
      >{level === 'binh-thuong'
        ? 'bình thường'
        : level === 'cao'
          ? 'cao hơn ngưỡng'
          : 'thấp hơn ngưỡng'}</span
    >
  </p>
  <FeedbackNote {tone} {text} />
  <p class="text-xs text-slate-600">
    Mô hình đơn giản hóa để minh họa. Ngưỡng bình thường của người trưởng thành: đường huyết lúc đói
    3,9 – 6,4 mmol/L; thân nhiệt khoảng 36,5 – 37,5 °C.
  </p>
</div>
