<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import { cobaltColor, cobaltShares, describeCobalt } from './engine.js';

  let minutes = $state(0);
  let covered = $state(true);
  const shares = $derived(cobaltShares(minutes, covered));
  const note = $derived(describeCobalt(minutes, covered));
</script>

<div class="space-y-3">
  <svg
    viewBox="0 0 360 150"
    class="w-full rounded-xl bg-slate-50"
    role="img"
    aria-label="Lá kẹp hai mảnh giấy cobalt chloride ở mặt trên và mặt dưới"
  >
    <path d="M 40 75 Q 180 20 320 75 Q 180 130 40 75 Z" fill="#16a34a" />
    <rect
      x="130"
      y="28"
      width="100"
      height="34"
      rx="3"
      fill={cobaltColor(shares.upper)}
      stroke="#334155"
    />
    <rect
      x="130"
      y="88"
      width="100"
      height="34"
      rx="3"
      fill={cobaltColor(shares.lower)}
      stroke="#334155"
    />
    {#if covered}
      <rect
        x="120"
        y="20"
        width="120"
        height="50"
        rx="3"
        fill="#bae6fd"
        opacity="0.35"
        stroke="#0284c7"
      />
      <rect
        x="120"
        y="80"
        width="120"
        height="50"
        rx="3"
        fill="#bae6fd"
        opacity="0.35"
        stroke="#0284c7"
      />
    {/if}
    <text x="248" y="48" font-size="12" fill="#0f172a">mặt trên</text>
    <text x="248" y="108" font-size="12" fill="#0f172a">mặt dưới</text>
  </svg>

  <SliderField label="Thời gian" bind:value={minutes} min={0} max={30} step={1} unit="phút" />

  <button
    type="button"
    class={button.secondary}
    aria-pressed={covered}
    onclick={() => (covered = !covered)}
  >
    {covered ? 'Có lam kính kẹp ngoài: bấm để bỏ' : 'Không có lam kính: bấm để kẹp lại'}
  </button>

  <p class="text-sm">
    Mặt trên: {shares.upper >= 1 ? 'đã hồng' : shares.upper > 0 ? 'đang chuyển màu' : 'còn xanh'}.
    Mặt dưới: {shares.lower >= 1 ? 'đã hồng' : shares.lower > 0 ? 'đang chuyển màu' : 'còn xanh'}.
  </p>
  <FeedbackNote tone={note.tone} text={note.text} />
</div>
