<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import { button } from '#lib/core/ui.js';
  import { COLOUR_NAME, STARCH_TEXT, gasFraction, splint, starchResult } from './engine.js';

  const uid = $props.id();
  let tab = $state('tinh-bot');

  // Experiment 1: starch
  let dark = $state('co');
  let hours = $state(5);
  let alcohol = $state('co');
  let dipped = $state(false);
  const setup = $derived({ darkFirst: dark === 'co', hours, alcohol: alcohol === 'co' });
  const result = $derived(starchResult(setup));

  /** @type {Record<import('./engine.js').IodineColour, string>} */
  const FILL = { 'xanh-tim': '#3b0764', 'xanh-tim-nhat': '#7c3aed', 'vang-nau': '#d97706' };
  const leafFill = (/** @type {import('./engine.js').IodineColour} */ c) =>
    !dipped ? (setup.alcohol ? '#f1f5f9' : '#22c55e') : setup.alcohol ? FILL[c] : '#166534';

  // Experiment 2: oxygen
  let cupA = $state('toi');
  let cupB = $state('sang');
  let hours2 = $state(6);
  let tested = $state(false);
  const gasA = $derived(gasFraction(cupA === 'sang', hours2));
  const gasB = $derived(gasFraction(cupB === 'sang', hours2));

  /** @param {number} gas */
  const splintText = (gas) =>
    splint(gas) === 'bung-chay'
      ? 'que đóm bùng cháy: khí trong ống là oxygen'
      : gas > 0
        ? 'que đóm tắt dần: chưa đủ khí oxygen'
        : 'que đóm tắt dần: không có khí oxygen';

  const options = [
    { value: 'co', label: 'Có' },
    { value: 'khong', label: 'Không' },
  ];
  const place = [
    { value: 'sang', label: 'Chỗ sáng' },
    { value: 'toi', label: 'Chỗ tối' },
  ];
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Thí nghiệm"
    options={[
      { value: 'tinh-bot', label: '1. Tinh bột' },
      { value: 'oxygen', label: '2. Khí oxygen' },
    ]}
    bind:value={tab}
  />

  {#if tab === 'tinh-bot'}
    <div class="grid gap-3 sm:grid-cols-2">
      <SegmentedControl
        label="Để chậu cây trong tối 2 ngày trước"
        {options}
        bind:value={dark}
        onchange={() => (dipped = false)}
      />
      <SegmentedControl
        label="Đun cách thuỷ lá trong cồn 90°"
        {options}
        bind:value={alcohol}
        onchange={() => (dipped = false)}
      />
    </div>
    <SliderField
      label="Chiếu sáng (lá bịt một phần bằng giấy đen)"
      bind:value={hours}
      min={0}
      max={8}
      unit="giờ"
      oninput={() => (dipped = false)}
    />

    <div class="flex items-center gap-4">
      <svg
        viewBox="0 0 200 140"
        class="h-36 w-52 shrink-0"
        role="img"
        aria-label={dipped
          ? `Lá sau khi nhỏ iodine: phần bị bịt màu ${COLOUR_NAME[result.covered]}, phần được chiếu sáng màu ${COLOUR_NAME[result.open]}`
          : 'Lá có một dải giữa được bịt giấy đen, chưa nhỏ iodine'}
      >
        <defs>
          <clipPath id="{uid}-la">
            <path d="M 20 70 Q 70 0 180 60 Q 80 140 20 70 Z" />
          </clipPath>
        </defs>
        <g clip-path="url(#{uid}-la)">
          <rect x="0" y="0" width="200" height="140" fill={leafFill(result.open)} />
          <rect x="80" y="0" width="44" height="140" fill={leafFill(result.covered)} />
        </g>
        <path
          d="M 20 70 Q 70 0 180 60 Q 80 140 20 70 Z"
          fill="none"
          stroke="#14532d"
          stroke-width="3"
        />
        <path d="M 4 74 L 20 70 L 176 62" stroke="#14532d" stroke-width="2" fill="none" />
        {#if !dipped}
          <rect x="80" y="18" width="44" height="100" fill="#0f172a" opacity="0.85" />
          <text x="102" y="72" font-size="10" text-anchor="middle" fill="white">giấy đen</text>
        {/if}
      </svg>
      <div class="space-y-2 text-sm text-slate-700">
        {#if dipped}
          <p><strong>Phần bị bịt:</strong> {COLOUR_NAME[result.covered]}</p>
          <p><strong>Phần được chiếu sáng:</strong> {COLOUR_NAME[result.open]}</p>
        {:else}
          <p>
            Bỏ giấy đen, {setup.alcohol ? 'tẩy diệp lục, rửa nước ấm' : 'không tẩy diệp lục'} rồi nhỏ
            iodine.
          </p>
        {/if}
        <button type="button" class={button.primary} onclick={() => (dipped = true)}
          >Nhỏ iodine</button
        >
      </div>
    </div>
    <p
      class="min-h-12 rounded-xl px-4 py-3 text-sm {dipped && result.verdict === 'ok'
        ? 'bg-emerald-50 font-semibold text-emerald-900'
        : 'bg-amber-50 text-amber-950'}"
      aria-live="polite"
    >
      {dipped
        ? STARCH_TEXT[result.verdict]
        : 'Chọn cách chuẩn bị, rồi bấm "Nhỏ iodine". Iodine gặp tinh bột chuyển màu xanh tím.'}
    </p>
  {:else}
    <div class="grid gap-3 sm:grid-cols-2">
      <SegmentedControl
        label="Cốc A đặt ở"
        options={place}
        bind:value={cupA}
        onchange={() => (tested = false)}
      />
      <SegmentedControl
        label="Cốc B đặt ở"
        options={place}
        bind:value={cupB}
        onchange={() => (tested = false)}
      />
    </div>
    <SliderField
      label="Thời gian để cốc"
      bind:value={hours2}
      min={0}
      max={8}
      unit="giờ"
      oninput={() => (tested = false)}
    />

    <div class="grid grid-cols-2 gap-3">
      {#each [{ name: 'A', where: cupA, gas: gasA }, { name: 'B', where: cupB, gas: gasB }] as cup (cup.name)}
        <figure class="space-y-1 text-center">
          <svg
            viewBox="0 0 120 150"
            class="mx-auto block w-full max-w-36"
            role="img"
            aria-label="Cốc {cup.name} ở {cup.where === 'sang'
              ? 'chỗ sáng'
              : 'chỗ tối'}: khí chiếm khoảng {formatNumber(Math.round(cup.gas * 100))}% ống nghiệm"
          >
            <rect
              width="120"
              height="150"
              rx="10"
              fill={cup.where === 'sang' ? '#fef9c3' : '#334155'}
            />
            {#if cup.where === 'sang'}
              <circle cx="104" cy="16" r="10" fill="#facc15" />
            {/if}
            <path
              d="M 18 60 v 76 q 0 8 8 8 h 68 q 8 0 8 -8 v -76"
              fill="#bae6fd"
              stroke="#0f172a"
              stroke-width="2"
            />
            <rect
              x="46"
              y="20"
              width="28"
              height="112"
              rx="4"
              fill="#7dd3fc"
              stroke="#0f172a"
              stroke-width="2"
            />
            <rect x="48" y="22" width="24" height={108 * cup.gas} fill="#ffffff" />
            <path
              d="M 60 128 q -6 -16 0 -30 q 6 -14 0 -30 M 60 110 l -8 -6 M 60 96 l 8 -6 M 60 82 l -8 -6"
              stroke="#15803d"
              stroke-width="3"
              fill="none"
            />
            {#if cup.gas > 0}
              {#each [0, 1, 2] as i (i)}
                <circle cx={56 + i * 4} cy={92 - i * 18} r="2.5" fill="white" stroke="#0369a1" />
              {/each}
            {/if}
          </svg>
          <figcaption class="text-sm text-slate-700">
            <span class="block font-semibold text-slate-800"
              >Cốc {cup.name}: {cup.where === 'sang' ? 'chỗ sáng' : 'chỗ tối'}</span
            >
            {#if tested}<span class="block text-xs">{splintText(cup.gas)}</span>{/if}
          </figcaption>
        </figure>
      {/each}
    </div>
    <button type="button" class={button.primary} onclick={() => (tested = true)}
      >Đưa que đóm còn tàn đỏ vào miệng ống</button
    >
    <p class="min-h-12 rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-800" aria-live="polite">
      {#if !tested}
        Phần màu trắng ở đỉnh ống (nếu có) là khí do cành rong đuôi chó thải ra, đẩy nước trong ống
        xuống.
      {:else if cupA !== cupB && hours2 >= 4}
        Chỉ ống ở chỗ sáng thu được nhiều khí làm que đóm bùng cháy trở lại: cây quang hợp khi có
        ánh sáng và thải ra khí oxygen.
      {:else if cupA === cupB}
        Hai cốc đặt cùng một chỗ nên không so sánh được. Thí nghiệm cần một cốc ở chỗ sáng, một cốc
        ở chỗ tối (cốc đối chứng).
      {:else}
        Thời gian còn ngắn nên lượng khí thu được chưa đủ làm que đóm bùng cháy. Sách để khoảng 6
        giờ.
      {/if}
    </p>
  {/if}
</div>
