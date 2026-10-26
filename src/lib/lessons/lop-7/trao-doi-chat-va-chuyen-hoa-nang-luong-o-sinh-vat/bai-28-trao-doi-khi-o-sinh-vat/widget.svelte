<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import { aperture, describe, flows } from './engine.js';

  let light = $state(80);
  let water = $state('du');

  const leaf = $derived({ light, water: water === 'du' });
  const a = $derived(aperture(leaf));
  const f = $derived(flows(leaf));
  const text = $derived(describe(leaf));

  const CX = 120;
  const CY = 110;
  const RX = 64;
  const RY = 90;
  const PY = 58;
  const g = $derived(3 + 22 * a);

  const left = $derived(
    `M ${CX} ${CY - RY} A ${RX} ${RY} 0 0 0 ${CX} ${CY + RY} L ${CX} ${CY + PY} A ${g} ${PY} 0 0 1 ${CX} ${CY - PY} Z`,
  );
  const right = $derived(
    `M ${CX} ${CY - RY} A ${RX} ${RY} 0 0 1 ${CX} ${CY + RY} L ${CX} ${CY + PY} A ${g} ${PY} 0 0 0 ${CX} ${CY - PY} Z`,
  );
  const cellFill = $derived(leaf.water ? '#86efac' : '#bbf7d0');

  const TIMES = [
    { label: 'Ban đêm', v: 0 },
    { label: 'Sáng sớm', v: 15 },
    { label: 'Buổi sáng', v: 45 },
    { label: 'Buổi trưa', v: 100 },
    { label: 'Chiều tối', v: 10 },
  ];

  const COLOR = { 'CO₂': '#475569', 'O₂': '#dc2626', 'Hơi nước': '#0284c7' };
  /** @param {number} x */
  const pct = (x) => Math.round(Math.min(1, x) * 100);
</script>

<div class="space-y-4">
  <div class="flex flex-wrap gap-2" role="group" aria-label="Chọn thời điểm trong ngày">
    {#each TIMES as t (t.label)}
      <button type="button" class={button.secondary} onclick={() => (light = t.v)}>{t.label}</button
      >
    {/each}
  </div>
  <div class="grid gap-3 sm:grid-cols-2">
    <SliderField label="Cường độ ánh sáng" bind:value={light} min={0} max={100} step={5} unit="%" />
    <SegmentedControl
      label="Nước trong cây"
      options={[
        { value: 'du', label: 'Đủ nước' },
        { value: 'thieu', label: 'Thiếu nước' },
      ]}
      bind:value={water}
    />
  </div>

  <div class="grid items-center gap-4 sm:grid-cols-2">
    <svg
      viewBox="0 0 240 220"
      class="mx-auto block w-full max-w-xs"
      role="img"
      aria-label="Khí khổng nhìn từ bề mặt lá: hai tế bào hạt đậu, khe khí khổng mở {pct(a)}%"
    >
      <rect x="0" y="0" width="240" height="220" rx="14" fill="#f0fdf4" />
      <path d={left} fill={cellFill} stroke="#15803d" stroke-width="2" />
      <path d={right} fill={cellFill} stroke="#15803d" stroke-width="2" />
      <ellipse cx={CX} cy={CY} rx={g} ry={PY} fill="#14532d" fill-opacity="0.85" />
      <ellipse cx={CX} cy={CY} rx={g} ry={PY} fill="none" stroke="#166534" stroke-width="5" />
      {#each [-40, -14, 14, 40] as dy (dy)}
        <circle cx={CX - g - 14} cy={CY + dy} r="5" fill="#15803d" />
        <circle cx={CX + g + 14} cy={CY + dy} r="5" fill="#15803d" />
      {/each}
      <text x={CX} y="214" font-size="11" text-anchor="middle" fill="#14532d"
        >khe khí khổng mở {pct(a)}%</text
      >
      <text x="196" y="40" font-size="10" fill="#14532d">tế bào</text>
      <text x="196" y="52" font-size="10" fill="#14532d">hạt đậu</text>
    </svg>

    <div class="space-y-2" aria-label="Các khí đi qua khí khổng">
      {#each ['vao', 'ra'] as dir (dir)}
        <p class="text-sm font-semibold text-slate-700">
          {dir === 'vao' ? 'Từ không khí vào lá' : 'Từ lá ra ngoài'}
        </p>
        {#each f.filter((x) => x.dir === dir) as x (x.gas)}
          <div class="flex items-center gap-2">
            <span class="w-20 shrink-0 text-sm font-semibold" style="color: {COLOR[x.gas]}"
              >{x.gas}</span
            >
            <div class="h-3 flex-1 overflow-hidden rounded-full bg-slate-100">
              <div
                class="h-full rounded-full motion-safe:transition-[width]"
                style="width: {Math.max(4, pct(x.amount))}%; background: {COLOR[x.gas]}"
              ></div>
            </div>
            <span aria-hidden="true">{dir === 'vao' ? '⟶ lá' : 'lá ⟶'}</span>
          </div>
        {:else}
          <p class="text-sm text-slate-500">Không có khí nào đáng kể.</p>
        {/each}
      {/each}
    </div>
  </div>

  <p class="min-h-12 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-950" aria-live="polite">
    {text}
  </p>
  <p class="text-xs text-slate-600">
    Mô hình đơn giản để học tập: các khí đi qua khí khổng theo cơ chế khuếch tán, từ nơi có nồng độ
    cao sang nơi có nồng độ thấp.
  </p>
</div>
