<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { VISIBLE, mouldStage } from './engine.js';

  const uid = $props.id();
  let place = $state(/** @type {import('./engine.js').PlaceId} */ ('phong'));
  let moisture = $state(/** @type {import('./engine.js').MoistureId} */ ('am'));
  let days = $state(0);

  const stage = $derived(mouldStage(place, moisture, days));

  /** Fixed patch centres on the slice, in the order they appear. */
  const PATCHES = [
    [96, 84],
    [150, 120],
    [70, 140],
    [128, 64],
    [170, 80],
    [110, 150],
    [60, 100],
    [150, 160],
    [90, 118],
    [186, 130],
  ];
  const shown = $derived(
    stage.cover < VISIBLE ? 0 : Math.max(1, Math.round((stage.cover / 100) * PATCHES.length)),
  );
  const patchR = $derived(8 + 14 * (stage.cover / 100));
  const dark = $derived(stage.cover >= 40);
</script>

<div class="space-y-4">
  <div class="grid gap-3 sm:grid-cols-2">
    <SegmentedControl
      label="Nơi để bánh mì"
      options={[
        { value: 'phong', label: 'Trong phòng (25 - 30 °C)' },
        { value: 'tu-lanh', label: 'Tủ lạnh (4 °C)' },
      ]}
      bind:value={place}
    />
    <SegmentedControl
      label="Bánh mì"
      options={[
        { value: 'am', label: 'Nhỏ vài giọt nước cho ẩm' },
        { value: 'kho', label: 'Để khô' },
      ]}
      bind:value={moisture}
    />
  </div>
  <SliderField label="Số ngày để trong túi kín" bind:value={days} min={0} max={10} unit="ngày" />

  <div class="flex flex-wrap items-center gap-4">
    <svg
      viewBox="0 0 240 210"
      class="h-44 w-52 shrink-0"
      role="img"
      aria-label="Lát bánh mì sau {days} ngày, mốc phủ khoảng {stage.cover} phần trăm"
    >
      <path
        d="M 30 190 L 30 70 Q 30 24 80 26 Q 120 6 160 26 Q 210 24 210 70 L 210 190 Z"
        fill="#d97706"
      />
      <path
        d="M 40 182 L 40 72 Q 40 36 82 36 Q 120 18 158 36 Q 200 36 200 72 L 200 182 Z"
        fill="#fde68a"
      />
      <clipPath id="{uid}-banh"
        ><path
          d="M 40 182 L 40 72 Q 40 36 82 36 Q 120 18 158 36 Q 200 36 200 72 L 200 182 Z"
        /></clipPath
      >
      <g clip-path="url(#{uid}-banh)">
        {#each PATCHES.slice(0, shown) as [x, y], i (i)}
          <circle cx={x} cy={y} r={patchR} fill="#f8fafc" opacity="0.95" />
          {#if dark}
            {#each [-0.4, 0, 0.4] as f (f)}
              <circle
                cx={x + f * patchR}
                cy={y - f * patchR * 0.6}
                r={2 + patchR * 0.12}
                fill={i % 3 === 2 ? '#15803d' : '#1e293b'}
              />
            {/each}
          {/if}
        {/each}
      </g>
    </svg>
    <p class="text-3xl font-bold tabular-nums text-slate-800">{stage.cover}%</p>
  </div>

  <p
    class="min-h-12 rounded-xl px-4 py-3 text-sm {stage.cover >= VISIBLE
      ? 'bg-amber-50 text-amber-900'
      : 'bg-slate-100 text-slate-800'}"
    aria-live="polite"
  >
    Sau {days} ngày: mốc phủ khoảng {stage.cover}% lát bánh. {stage.text}
  </p>
  <p class="text-xs text-slate-600">
    Mô hình đơn giản để so sánh các điều kiện, không phải số liệu đo của một loài mốc cụ thể.
  </p>
</div>
