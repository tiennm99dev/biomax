<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { clamp } from '#lib/core/visuals/svg-math.js';
  import { formatFixed } from '#lib/core/number-format.js';
  import { bodyState } from './engine.js';

  const W = 300;
  const LOW = 32;
  const HIGH = 42;
  /** @param {number} t */
  const gx = (t) => 16 + ((clamp(t, LOW, HIGH) - LOW) / (HIGH - LOW)) * (W - 32);
  const TICKS = [32, 34, 36, 38, 40, 42];

  let outside = $state(25);
  let regulation = $state(/** @type {'on' | 'off'} */ ('on'));

  const result = $derived(bodyState(outside, regulation === 'on'));
  const bodyText = $derived(formatFixed(result.body, 1));
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Cơ chế tự điều chỉnh"
    options={[
      { value: 'on', label: 'Hoạt động bình thường' },
      { value: 'off', label: 'Bị rối loạn' },
    ]}
    bind:value={regulation}
  />
  <SliderField label="Nhiệt độ môi trường" bind:value={outside} min={0} max={45} unit="°C" />
  <svg
    viewBox="0 0 {W} 56"
    class="block w-full"
    role="img"
    aria-label="Thân nhiệt khoảng {bodyText} độ C trên thang từ {LOW} đến {HIGH} độ C"
  >
    <rect x={gx(LOW)} y="16" width={gx(HIGH) - gx(LOW)} height="12" rx="6" fill="#e2e8f0" />
    <rect x={gx(36.5)} y="16" width={gx(37.5) - gx(36.5)} height="12" fill="#86efac" />
    {#each TICKS as t (t)}
      <line x1={gx(t)} x2={gx(t)} y1="28" y2="34" stroke="#64748b" />
      <text x={gx(t)} y="46" font-size="10" text-anchor="middle" fill="#475569">{t}</text>
    {/each}
    <circle cx={gx(result.body)} cy="22" r="8" fill={result.danger ? '#dc2626' : '#4f46e5'} />
  </svg>
  <p class="text-sm font-semibold text-slate-800">
    Thân nhiệt (mô hình minh hoạ): khoảng {bodyText} °C. Vùng xanh là vùng thân nhiệt ổn định.
  </p>
  <FeedbackNote
    tone={regulation === 'on' ? 'ok' : result.danger ? 'warn' : 'info'}
    text={result.response}
  />
</div>
