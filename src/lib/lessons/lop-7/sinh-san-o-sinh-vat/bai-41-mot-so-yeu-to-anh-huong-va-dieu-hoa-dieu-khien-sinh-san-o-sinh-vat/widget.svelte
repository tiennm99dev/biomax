<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import { MAX_EGGS, asFood, asOrganism, outcomeText, simulate } from './engine.js';

  let organism = $state('ga');
  let temperature = $state(21);
  let light = $state(11);
  let food = $state('du');

  const org = $derived(asOrganism(organism));
  const conditions = $derived({
    temperature,
    light,
    food: asFood(food),
  });
  const outcome = $derived(simulate(org, conditions));
  const text = $derived(outcomeText(org, conditions));

  /** Flowers drawn on the dragon fruit: one per 10 % of branches. */
  const flowers = $derived(Math.round(outcome.value / 10));

  /** @type {Array<{ id: import('./engine.js').Factor, label: string }>} */
  const FACTORS = [
    { id: 'nhiet-do', label: 'Nhiệt độ' },
    { id: 'anh-sang', label: 'Ánh sáng' },
    { id: 'dinh-duong', label: 'Dinh dưỡng' },
  ];

  /** Spots along the dragon fruit branches where flowers open. */
  const SPOTS = [
    [62, 70],
    [92, 50],
    [128, 44],
    [160, 54],
    [186, 74],
    [70, 104],
    [104, 86],
    [146, 84],
    [178, 106],
  ];
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Sinh vật"
    options={[
      { value: 'ga', label: 'Gà đẻ trứng' },
      { value: 'thanh-long', label: 'Thanh long ra hoa' },
    ]}
    bind:value={organism}
  />

  <svg
    viewBox="0 0 240 170"
    class="mx-auto block w-full max-w-md"
    role="img"
    aria-label={org === 'ga'
      ? `Gà mái và ${outcome.value} quả trứng đẻ trong một tuần`
      : `Trụ thanh long có ${outcome.value}% số cành ra hoa`}
  >
    <rect width="240" height="170" rx="12" fill={light >= 14 ? '#fefce8' : '#e2e8f0'} />
    <text x="12" y="20" font-size="11" fill="#334155"
      >{formatNumber(temperature)} °C · {formatNumber(light)} giờ chiếu sáng/ngày</text
    >
    {#if org === 'ga'}
      <g transform="translate(70 92)">
        <ellipse cx="0" cy="0" rx="40" ry="28" fill="#fff7ed" stroke="#9a3412" stroke-width="2" />
        <circle cx="34" cy="-30" r="15" fill="#fff7ed" stroke="#9a3412" stroke-width="2" />
        <path d="M 30 -46 q 4 -8 8 0 q 4 -8 8 0" fill="#ef4444" />
        <path d="M 48 -30 l 10 4 l -10 4 z" fill="#f59e0b" />
        <circle cx="38" cy="-33" r="2" fill="#1f2937" />
        <path d="M -40 -6 q -18 -18 -6 -30" fill="none" stroke="#9a3412" stroke-width="3" />
        <path d="M -8 28 v 14 M 8 28 v 14" stroke="#f59e0b" stroke-width="3" />
      </g>
      {#each Array.from({ length: MAX_EGGS }, (_, i) => i) as i (i)}
        <ellipse
          cx={140 + (i % 3) * 30}
          cy={i < 3 ? 104 : 138}
          rx="11"
          ry="14"
          fill={i < outcome.value ? '#fde68a' : 'none'}
          stroke={i < outcome.value ? '#b45309' : '#cbd5e1'}
          stroke-width="2"
          stroke-dasharray={i < outcome.value ? undefined : '3 3'}
        />
      {/each}
      <text x="170" y="74" text-anchor="middle" font-size="11" fill="#334155"
        >{outcome.value} quả/tuần</text
      >
    {:else}
      <rect x="114" y="100" width="12" height="66" fill="#a8a29e" />
      <path
        d="M 120 110 C 90 100 60 90 54 64 M 120 110 C 150 100 186 92 192 68 M 120 104 C 110 80 100 60 92 44 M 120 104 C 130 80 140 60 160 50 M 120 116 C 96 116 76 110 66 100 M 120 116 C 150 116 170 112 182 100"
        fill="none"
        stroke="#16a34a"
        stroke-width="9"
        stroke-linecap="round"
      />
      {#each SPOTS.slice(0, flowers) as [x, y], i (i)}
        <g transform="translate({x} {y})">
          {#each [0, 60, 120, 180, 240, 300] as a (a)}
            <ellipse
              cx="0"
              cy="-7"
              rx="3.5"
              ry="7"
              fill="#fefce8"
              stroke="#ca8a04"
              transform="rotate({a})"
            />
          {/each}
          <circle r="3" fill="#facc15" />
        </g>
      {/each}
      <text x="228" y="160" text-anchor="end" font-size="11" fill="#334155"
        >{outcome.value}% cành ra hoa</text
      >
    {/if}
  </svg>

  <div class="grid gap-3 sm:grid-cols-2">
    <SliderField label="Nhiệt độ" bind:value={temperature} min={5} max={40} unit="°C" />
    <SliderField
      label="Số giờ chiếu sáng mỗi ngày (kể cả thắp đèn)"
      bind:value={light}
      min={8}
      max={18}
      step={0.5}
      unit="giờ"
    />
  </div>
  <SegmentedControl
    label="Dinh dưỡng"
    options={[
      { value: 'thieu', label: 'Thiếu' },
      { value: 'du', label: 'Đủ, cân đối' },
      { value: 'thua', label: org === 'ga' ? 'Thừa (gà quá béo)' : 'Thừa đạm' },
    ]}
    bind:value={food}
  />

  <ul class="grid grid-cols-3 gap-2 text-center text-xs" aria-label="Mức thuận lợi của từng yếu tố">
    {#each FACTORS as f (f.id)}
      {@const v = outcome.factors[f.id]}
      <li
        class="rounded-lg px-2 py-2 font-semibold {outcome.limiting === f.id
          ? 'bg-amber-100 text-amber-900'
          : v >= 1
            ? 'bg-emerald-50 text-emerald-800'
            : 'bg-slate-100 text-slate-700'}"
      >
        {f.label}: {formatNumber(Math.round(v * 100))}%
      </li>
    {/each}
  </ul>

  <FeedbackNote tone={outcome.limiting === null ? 'ok' : 'warn'} {text} />
  <p class="text-xs text-slate-600">
    Mô hình minh hoạ xu hướng, các con số không phải số liệu đo thực tế. Mỗi ô ghi mức thuận lợi của
    một yếu tố (100% là thích hợp nhất).
  </p>
</div>
