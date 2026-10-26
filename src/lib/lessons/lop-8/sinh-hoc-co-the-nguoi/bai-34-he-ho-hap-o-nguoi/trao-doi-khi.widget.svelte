<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { SITES, bloodAt, describeExchange, diffusion } from './engine.js';

  /** @type {import('./engine.js').Site} */
  let site = $state('phoi');
  let along = $state(10);

  const x = $derived(along / 100);
  const blood = $derived(bloodAt(site, x));
  const around = $derived(SITES[site].around);
  const flows = $derived(diffusion(site, x));
  const place = $derived(SITES[site].place);
  const rich = $derived(blood.o2 >= 70);

  // Marker position along the capillary drawing (x from 30 to 270).
  const mx = $derived(30 + 240 * x);

  const COLOR = { 'O₂': '#dc2626', 'CO₂': '#475569' };
  /** @param {number} amount */
  const width = (amount) => Math.max(2, Math.min(12, amount / 5));
</script>

<div class="space-y-4">
  <div class="grid gap-3 sm:grid-cols-2">
    <SegmentedControl
      label="Nơi trao đổi khí"
      options={[
        { value: 'phoi', label: 'Ở phổi' },
        { value: 'te-bao', label: 'Ở tế bào' },
      ]}
      bind:value={site}
    />
    <SliderField
      label="Máu đã đi dọc mao mạch"
      bind:value={along}
      min={0}
      max={100}
      step={5}
      unit="%"
    />
  </div>

  <svg
    viewBox="0 0 300 200"
    class="mx-auto block w-full max-w-md"
    role="img"
    aria-label="{place} phía trên, mao mạch phía dưới. {flows
      .map((f) =>
        f.into === null
          ? `${f.gas} không khuếch tán`
          : `${f.gas} khuếch tán vào ${f.into === 'mau' ? 'máu' : place.toLowerCase()}`,
      )
      .join(', ')}"
  >
    <rect
      x="10"
      y="10"
      width="280"
      height="70"
      rx="12"
      fill={site === 'phoi' ? '#e0f2fe' : '#fef3c7'}
    />
    <text x="20" y="28" font-size="12" font-weight="700" fill="#0f172a">{place}</text>
    <text x="20" y="46" font-size="10" fill="#334155">O₂: {around.o2} · CO₂: {around.co2}</text>
    <line
      x1="10"
      y1="90"
      x2="290"
      y2="90"
      stroke="#94a3b8"
      stroke-width="2"
      stroke-dasharray="5 3"
    />
    <rect
      x="10"
      y="100"
      width="280"
      height="60"
      rx="30"
      fill={rich ? '#fecaca' : '#e9d5ff'}
      stroke={rich ? '#dc2626' : '#7f1d1d'}
      stroke-width="2"
    />
    <text x="20" y="182" font-size="10" fill="#334155"
      >Mao mạch: máu chảy → (O₂: {blood.o2} · CO₂: {blood.co2})</text
    >
    <line x1={mx} y1="100" x2={mx} y2="160" stroke="#0f172a" stroke-width="1.5" />
    <circle
      cx={mx}
      cy="130"
      r="9"
      fill={rich ? '#ef4444' : '#7f1d1d'}
      stroke="#ffffff"
      stroke-width="2"
    />
    {#each flows as f, k (f.gas)}
      {#if f.into}
        {@const ax = mx + (k === 0 ? -18 : 18)}
        {@const down = f.into === 'mau'}
        <g stroke={COLOR[f.gas]} fill={COLOR[f.gas]}>
          <line
            x1={ax}
            y1={down ? 52 : 118}
            x2={ax}
            y2={down ? 112 : 58}
            stroke-width={width(f.amount)}
            stroke-linecap="round"
          />
          <path
            d={down
              ? `M ${ax - 8} 108 L ${ax + 8} 108 L ${ax} 120 Z`
              : `M ${ax - 8} 62 L ${ax + 8} 62 L ${ax} 50 Z`}
            stroke="none"
          />
          <text
            x={ax + (k === 0 ? -6 : 6)}
            y="72"
            font-size="11"
            font-weight="700"
            stroke="none"
            text-anchor={k === 0 ? 'end' : 'start'}>{f.gas}</text
          >
        </g>
      {/if}
    {/each}
  </svg>

  <p class="rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-950" aria-live="polite">
    {describeExchange(site, x)}
  </p>
  <p class="text-xs text-slate-600">
    Số chỉ nồng độ tương đối của khí. Mũi tên càng đậm, khí khuếch tán càng mạnh (chênh lệch nồng độ
    càng lớn).
  </p>
</div>
