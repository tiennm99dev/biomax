<script>
  import OrderInput from '#lib/core/order-input.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import { RESULT_TEXT, START_ORDER, STEPS, correctPlaces, yogurtOutcome } from './engine.js';

  const uid = $props.id();

  let order = $state([...START_ORDER]);
  let orderMessage = $state(
    'Dùng các nút mũi tên để đưa từng bước về đúng vị trí, rồi bấm "Kiểm tra".',
  );
  let ordered = $state(false);

  function checkOrder() {
    const ok = correctPlaces(order);
    ordered = ok === STEPS.length;
    orderMessage = ordered
      ? 'Đúng thứ tự cả 5 bước. Bây giờ hãy thử ủ sữa chua ở phần dưới.'
      : `Có ${ok}/${STEPS.length} bước đúng vị trí. Gợi ý: phải có nước ấm trước khi pha sữa đặc, và chỉ cho sữa chua giống vào khi hỗn hợp đã ấm vừa.`;
  }

  let mixTemp = $state(50);
  let hours = $state(6);
  const outcome = $derived(yogurtOutcome(mixTemp, hours));

  const FILL = {
    chet: '#f8fafc',
    long: '#f1f5f9',
    sanh: '#fef9c3',
    dat: '#fefce8',
    'qua-chua': '#fde68a',
  };
  const fillLevel = $derived(outcome.state === 'qua-chua' ? 0.72 : 0.82);
  const thick = $derived(Math.min(1, outcome.progress));
</script>

<div class="space-y-6">
  <section class="space-y-3">
    <h3 id="{uid}-order" class="font-bold text-slate-900">1. Sắp xếp các bước làm sữa chua</h3>
    <OrderInput
      items={STEPS}
      bind:value={order}
      labelledby="{uid}-order"
      onchange={() => (ordered = false)}
    />
    <button type="button" class={button.primary} onclick={checkOrder}>Kiểm tra</button>
    <p
      class="min-h-12 rounded-xl px-4 py-3 text-sm {ordered
        ? 'bg-emerald-50 font-semibold text-emerald-900'
        : 'bg-slate-100 text-slate-800'}"
      aria-live="polite"
    >
      {orderMessage}
    </p>
  </section>

  <section class="space-y-3">
    <h3 class="font-bold text-slate-900">2. Ủ sữa chua</h3>
    <div class="grid gap-3 sm:grid-cols-2">
      <SliderField
        label="Nhiệt độ hỗn hợp khi cho sữa chua giống"
        bind:value={mixTemp}
        min={20}
        max={100}
        unit="°C"
      />
      <SliderField
        label="Thời gian ủ trong thùng xốp"
        bind:value={hours}
        min={0}
        max={20}
        unit="giờ"
      />
    </div>

    <div class="flex items-center gap-4">
      <svg viewBox="0 0 120 140" class="h-36 w-28 shrink-0" role="img" aria-label="Lọ sữa chua">
        <rect x="30" y="6" width="60" height="14" rx="3" fill="#94a3b8" />
        <path
          d="M 26 22 h 68 v 100 q 0 12 -12 12 h -44 q -12 0 -12 -12 z"
          fill="#e0f2fe"
          stroke="#64748b"
          stroke-width="3"
        />
        <rect
          x="29"
          y={22 + 110 * (1 - fillLevel)}
          width="62"
          height={110 * fillLevel - 2}
          rx="8"
          fill={FILL[outcome.state]}
        />
        {#if outcome.state === 'qua-chua'}
          <rect x="29" y="112" width="62" height="18" rx="6" fill="#bae6fd" opacity="0.9" />
        {/if}
        {#each [0, 1, 2, 3, 4, 5] as i (i)}
          <circle
            cx={40 + (i % 3) * 20}
            cy={60 + Math.floor(i / 3) * 30}
            r={2 + 4 * thick}
            fill="#facc15"
            opacity={outcome.state === 'chet' ? 0 : 0.25 + 0.5 * thick}
          />
        {/each}
      </svg>
      <div class="text-sm text-slate-700">
        <p>
          <strong>Độ đông:</strong>
          {outcome.state === 'chet'
            ? 'không đông'
            : outcome.state === 'long'
              ? 'còn lỏng'
              : outcome.state === 'sanh'
                ? 'sánh, chưa đông hẳn'
                : outcome.state === 'dat'
                  ? 'đông mịn'
                  : 'đông, tách nước'}
        </p>
        <p>
          <strong>Vị:</strong>
          {outcome.state === 'chet' || outcome.state === 'long'
            ? 'ngọt, chưa chua'
            : outcome.state === 'qua-chua'
              ? 'rất chua'
              : 'chua dịu'}
        </p>
      </div>
    </div>

    <p
      class="min-h-12 rounded-xl px-4 py-3 text-sm {outcome.state === 'dat'
        ? 'bg-emerald-50 font-semibold text-emerald-900'
        : outcome.state === 'chet' || outcome.state === 'qua-chua'
          ? 'bg-rose-50 text-rose-900'
          : 'bg-amber-50 text-amber-900'}"
      aria-live="polite"
    >
      {RESULT_TEXT[outcome.state]}
    </p>
    <p class="text-xs text-slate-600">
      Mô hình đơn giản theo cách làm trong sách: hỗn hợp ban đầu khoảng 50 °C, ủ kín trong thùng xốp
      để giữ ấm.
    </p>
  </section>
</div>
