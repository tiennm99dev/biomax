<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import { button } from '#lib/core/ui.js';
  import { leafResult, looks, stemResult } from './engine.js';

  let exp = $state('than');

  // experiment 1: coloured water in the stem
  let dye = $state('do');
  let specimen = $state('can-tay');
  /** @type {import('./engine.js').Place} */
  let place = $state('thoang');
  let hours = $state(0);
  let cut = $state(false);

  const DYE = { do: '#dc2626', xanh: '#2563eb', trong: '#bae6fd' };
  const dyeColor = $derived(DYE[/** @type {keyof typeof DYE} */ (dye)]);
  const s = $derived(stemResult(dye === 'trong' ? 'trong' : 'mau', place, hours));
  const coloured = $derived(dye !== 'trong');
  const tint = $derived(coloured ? Math.max(0, Math.min(1, (s.h - 0.7) / 0.3)) : 0);
  const topY = $derived(250 - s.h * 170);

  /**
   * Mixes two hex colours.
   * @param {string} a @param {string} b @param {number} t
   */
  function mix(a, b, t) {
    const pa = [1, 3, 5].map((i) => parseInt(a.slice(i, i + 2), 16));
    const pb = [1, 3, 5].map((i) => parseInt(b.slice(i, i + 2), 16));
    const c = pa.map((v, i) => Math.round(v + (pb[i] - v) * t));
    return `rgb(${c.join(', ')})`;
  }

  const leafFill = $derived(
    mix(specimen === 'can-tay' ? '#86efac' : '#ffffff', dyeColor, coloured ? tint * 0.75 : 0),
  );
  const dotFill = $derived(coloured && s.h > 0.02 ? dyeColor : '#d9f99d');

  // experiment 2: plastic bags over the shoots
  /** @type {import('./engine.js').Light} */
  let light = $state('nang');
  /** @type {import('./engine.js').Cover} */
  let cover = $state('than-la');
  let minutes = $state(0);
  const l = $derived(leafResult(light, cover, minutes));

  const POTS = [
    { id: 'A', x: 95, leaves: false, label: 'Chậu A: đã ngắt hết lá' },
    { id: 'B', x: 265, leaves: true, label: 'Chậu B: để nguyên lá' },
  ];
  const DROPS = [
    [-30, 60],
    [24, 48],
    [-14, 96],
    [34, 104],
    [-36, 128],
    [10, 140],
    [30, 74],
    [-22, 80],
  ];
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Thí nghiệm"
    options={[
      { value: 'than', label: '1. Thân vận chuyển nước' },
      { value: 'la', label: '2. Lá thoát hơi nước' },
    ]}
    bind:value={exp}
  />

  {#if exp === 'than'}
    <div class="grid gap-3 sm:grid-cols-2">
      <SegmentedControl
        label="Mẫu vật"
        options={[
          { value: 'can-tay', label: 'Cần tây' },
          { value: 'hoa-cuc', label: 'Hoa cúc trắng' },
        ]}
        bind:value={specimen}
      />
      <SegmentedControl
        label="Nước trong cốc"
        options={[
          { value: 'do', label: 'Pha màu đỏ' },
          { value: 'xanh', label: 'Pha màu xanh' },
          { value: 'trong', label: 'Không pha màu' },
        ]}
        bind:value={dye}
      />
    </div>
    <SegmentedControl
      label="Đặt cốc ở"
      options={[
        { value: 'thoang', label: 'Nơi thoáng, có ánh sáng' },
        { value: 'am-toi', label: 'Nơi tối, ẩm' },
      ]}
      bind:value={place}
    />
    <SliderField
      label="Thời gian để cành trong cốc"
      bind:value={hours}
      min={0}
      max={12}
      step={0.5}
      unit="giờ"
      format={(v) => formatNumber(v, 1)}
    />

    <svg
      viewBox="0 0 360 270"
      class="block w-full"
      role="img"
      aria-label="{specimen === 'can-tay'
        ? 'Cây cần tây'
        : 'Cành hoa cúc trắng'} cắm trong cốc nước {dye === 'trong'
        ? 'không pha màu'
        : 'pha màu'} sau {formatNumber(hours, 1)} giờ: {s.leaf}"
    >
      <!-- beaker -->
      <rect x="120" y="190" width="90" height="62" fill={dyeColor} opacity={coloured ? 0.7 : 0.5} />
      <path d="M 116 170 V 254 H 214 V 170" fill="none" stroke="#64748b" stroke-width="3" />
      <!-- stem and the coloured water rising in it -->
      <rect x="157" y="80" width="16" height="172" rx="5" fill="#bbf7d0" stroke="#15803d" />
      {#if coloured && s.h > 0}
        <rect x="161" y={topY} width="3" height={252 - topY} fill={dyeColor} opacity="0.8" />
        <rect x="166" y={topY} width="3" height={252 - topY} fill={dyeColor} opacity="0.8" />
      {/if}
      {#if specimen === 'can-tay'}
        {#each [-1, 1] as side (side)}
          <path
            d="M 165 84 Q {165 + side * 40} 50 {165 + side * 70} 46 Q {165 + side * 50} 78 165 92 Z"
            fill={leafFill}
            stroke="#15803d"
          />
          <path
            d="M 165 88 Q {165 + side * 36} 62 {165 + side * 66} 48"
            fill="none"
            stroke={coloured && tint > 0 ? dyeColor : '#15803d'}
            stroke-width="1.5"
          />
        {/each}
        <path d="M 165 82 Q 160 40 165 18 Q 176 44 165 82 Z" fill={leafFill} stroke="#15803d" />
      {:else}
        {#each Array.from({ length: 12 }, (_, i) => i * 30) as a (a)}
          <ellipse
            cx="165"
            cy="44"
            rx="10"
            ry="30"
            transform="rotate({a} 165 74)"
            fill={leafFill}
            stroke="#a8a29e"
          />
        {/each}
        <circle cx="165" cy="74" r="10" fill="#facc15" />
      {/if}

      <!-- cross-section through a magnifier -->
      {#if cut}
        <line x1="173" y1="210" x2="262" y2="150" stroke="#475569" stroke-dasharray="4 3" />
        <circle cx="300" cy="120" r="48" fill="#f8fafc" stroke="#334155" stroke-width="5" />
        <circle cx="300" cy="120" r="34" fill="#dcfce7" stroke="#15803d" />
        {#each Array.from({ length: 8 }, (_, i) => (i * Math.PI) / 4) as a (a)}
          <circle
            cx={300 + 22 * Math.cos(a)}
            cy={120 + 22 * Math.sin(a)}
            r="5"
            fill={dotFill}
            stroke="#3f6212"
          />
        {/each}
        <text x="300" y="186" font-size="10" text-anchor="middle" fill="#0f172a"
          >lát cắt ngang thân</text
        >
      {/if}
      <text x="165" y="266" font-size="11" text-anchor="middle" fill="#0f172a">cốc nước</text>
    </svg>

    <div class="flex flex-wrap gap-2">
      <button type="button" class={button.primary} onclick={() => (cut = true)}
        >Cắt ngang thân, soi kính lúp</button
      >
      <button type="button" class={button.quiet} onclick={() => (hours = 6)}>Để 6 giờ</button>
      <button
        type="button"
        class={button.quiet}
        onclick={() => {
          hours = 0;
          cut = false;
        }}>Làm lại</button
      >
    </div>

    <div
      class="min-h-16 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-950"
      aria-live="polite"
    >
      <p><strong>Lá (cánh hoa):</strong> {s.leaf}.</p>
      {#if cut}
        <p><strong>Lát cắt ngang thân:</strong> {s.section}.</p>
      {/if}
      <p class="mt-2">{s.text}</p>
    </div>
  {:else}
    <div class="grid gap-3 sm:grid-cols-2">
      <SegmentedControl
        label="Đặt hai chậu ở"
        options={[
          { value: 'nang', label: 'Chỗ có nắng' },
          { value: 'ram', label: 'Chỗ râm' },
        ]}
        bind:value={light}
      />
      <SegmentedControl
        label="Cách trùm túi nylon"
        options={[
          { value: 'than-la', label: 'Chỉ trùm thân, lá' },
          { value: 'ca-chau', label: 'Trùm cả chậu' },
        ]}
        bind:value={cover}
      />
    </div>
    <SliderField
      label="Thời gian để hai chậu"
      bind:value={minutes}
      min={0}
      max={120}
      step={5}
      unit="phút"
    />

    <svg
      viewBox="0 0 360 270"
      class="block w-full"
      role="img"
      aria-label="Hai chậu cây trùm túi nylon trong suốt sau {minutes} phút: túi chậu A {looks(
        l.a,
      )}, túi chậu B {looks(l.b)}"
    >
      <rect x="0" y="0" width="360" height="250" fill={light === 'nang' ? '#fef9c3' : '#e2e8f0'} />
      {#if light === 'nang'}
        <circle cx="330" cy="26" r="16" fill="#facc15" />
      {/if}
      {#each POTS as pot (pot.id)}
        {@const m = pot.leaves ? l.b : l.a}
        <!-- pot and soil -->
        <path
          d="M {pot.x - 40} 196 L {pot.x + 40} 196 L {pot.x + 30} 246 L {pot.x - 30} 246 Z"
          fill="#c2410c"
        />
        <rect x={pot.x - 40} y="192" width="80" height="8" fill="#78350f" />
        <!-- shoot -->
        <path
          d="M {pot.x} 194 V 70 M {pot.x} 150 L {pot.x - 20} 128 M {pot.x} 120 L {pot.x + 22} 98"
          stroke="#15803d"
          stroke-width="4"
          fill="none"
        />
        {#if pot.leaves}
          {#each [[-20, 128, -1], [22, 98, 1], [0, 70, 1], [0, 74, -1], [0, 150, 1]] as [dx, y, side], i (i)}
            <path
              d="M {pot.x + dx} {y} q {side * 14} -22 {side * 34} -10 q {side * -10} 20 {side *
                -34} 10 Z"
              fill="#4ade80"
              stroke="#15803d"
            />
          {/each}
        {:else}
          {#each [[-20, 128], [22, 98], [0, 70], [0, 150]] as [dx, y], i (i)}
            <circle cx={pot.x + dx} cy={y} r="2.5" fill="#65a30d" />
          {/each}
        {/if}
        <!-- clear plastic bag -->
        {@const bottom = cover === 'ca-chau' ? 248 : 186}
        {@const half = cover === 'ca-chau' ? 60 : 58}
        <path
          d="M {pot.x - 10} {bottom} Q {pot.x - half} {bottom - 20} {pot.x - half} 90 Q {pot.x -
            half} 36 {pot.x} 36 Q {pot.x + half} 36 {pot.x + half} 90 Q {pot.x + half} {bottom -
            20} {pot.x + 10} {bottom} Z"
          fill="#ffffff"
          fill-opacity={0.08 + 0.7 * m}
          stroke="#94a3b8"
          stroke-width="1.5"
        />
        {#each DROPS as [dx, dy], i (i)}
          <circle
            cx={pot.x + dx}
            cy={36 + dy}
            r="3"
            fill="#7dd3fc"
            opacity={Math.max(0, Math.min(1, (m - 0.5 - i * 0.05) * 3))}
          />
        {/each}
        <line
          x1={pot.x - 12}
          y1={bottom - 2}
          x2={pot.x + 12}
          y2={bottom - 2}
          stroke="#334155"
          stroke-width="3"
        />
        <text x={pot.x} y="264" font-size="11" font-weight="700" text-anchor="middle" fill="#0f172a"
          >{pot.label}</text
        >
      {/each}
    </svg>

    <div class="flex flex-wrap gap-2">
      <button type="button" class={button.quiet} onclick={() => (minutes = 60)}>Để 1 giờ</button>
      <button type="button" class={button.quiet} onclick={() => (minutes = 0)}>Làm lại</button>
    </div>

    <div
      class="min-h-16 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-950"
      aria-live="polite"
    >
      <p><strong>Túi ở chậu A:</strong> {looks(l.a)}.</p>
      <p><strong>Túi ở chậu B:</strong> {looks(l.b)}.</p>
      <p class="mt-2">{l.text}</p>
    </div>
  {/if}
</div>
