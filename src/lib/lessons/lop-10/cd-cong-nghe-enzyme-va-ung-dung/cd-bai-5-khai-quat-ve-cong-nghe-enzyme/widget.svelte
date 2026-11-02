<script>
  import { tick } from 'svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import { linear } from '#lib/core/visuals/svg-math.js';
  import { pointsAttr } from '#lib/utils/svg.js';
  import {
    ENZYMES,
    MAX_PH,
    MAX_TEMP,
    MIN_PH,
    MIN_TEMP,
    activity,
    curve,
    percentText,
    ruins,
    verdict,
  } from './engine.js';

  const W = 320;
  const H = 150;
  const LEFT = 36;
  const RIGHT = 10;
  const TOP = 12;
  const BOTTOM = 34;
  const SHARES = [0, 0.5, 1];
  const TEMP_TICKS = [0, 20, 40, 60, 80, 100];
  const PH_TICKS = [0, 2, 4, 6, 8, 10, 12, 14];
  const toY = linear(0, 1, H - BOTTOM, TOP).map;
  const tempX = linear(MIN_TEMP, MAX_TEMP, LEFT, W - RIGHT).map;
  const phX = linear(MIN_PH, MAX_PH, LEFT, W - RIGHT).map;
  const options = ENZYMES.map((e) => ({ value: e.id, label: e.name }));

  let enzymeId = $state(ENZYMES[0].id);
  let temp = $state(25);
  let ph = $state(7);
  let ruined = $state(false);
  /** @type {HTMLDivElement | undefined} */
  let sliders = $state();

  const enzyme = $derived(ENZYMES.find((e) => e.id === enzymeId) ?? ENZYMES[0]);
  const value = $derived(activity(enzyme, temp, ph, ruined));
  const note = $derived(verdict(enzyme, temp, ph, ruined));
  const charts = $derived([
    {
      id: 'temp',
      title: `Hoạt tính theo nhiệt độ (pH ${formatNumber(ph, 1)})`,
      unit: '°C',
      ticks: TEMP_TICKS,
      toX: tempX,
      at: temp,
      points: ruined ? [] : curve(enzyme, 'temp', ph).map((p) => ({ x: tempX(p.x), y: toY(p.y) })),
    },
    {
      id: 'ph',
      title: `Hoạt tính theo pH (${formatNumber(temp)} °C)`,
      unit: 'pH',
      ticks: PH_TICKS,
      toX: phX,
      at: ph,
      points: ruined ? [] : curve(enzyme, 'ph', temp).map((p) => ({ x: phX(p.x), y: toY(p.y) })),
    },
  ]);

  function settle() {
    if (ruins(enzyme, temp, ph)) ruined = true;
  }

  function changeEnzyme() {
    ruined = false;
    settle();
  }

  // The button goes away with the ruined state, so focus moves to the sliders.
  async function freshEnzyme() {
    ruined = false;
    temp = Math.min(temp, enzyme.ruinTemp - 1);
    ph = Math.min(Math.max(ph, enzyme.minPh), enzyme.maxPh);
    await tick();
    sliders?.querySelector('input')?.focus();
  }
</script>

<div class="space-y-3">
  <SegmentedControl label="Chọn enzyme" {options} bind:value={enzymeId} onchange={changeEnzyme} />
  <p class="text-sm text-slate-700">
    {enzyme.name} lấy từ {enzyme.from}. Nhiệt độ tối ưu khoảng {formatNumber(enzyme.bestTemp)} °C, pH
    tối ưu khoảng {formatNumber(enzyme.bestPh, 1)}.
  </p>

  <div class="grid gap-3 sm:grid-cols-2" bind:this={sliders}>
    <SliderField
      label="Nhiệt độ"
      bind:value={temp}
      min={MIN_TEMP}
      max={MAX_TEMP}
      unit="°C"
      oninput={settle}
    />
    <SliderField
      label="pH"
      bind:value={ph}
      min={MIN_PH}
      max={MAX_PH}
      step={0.1}
      format={(v) => formatNumber(v, 1)}
      oninput={settle}
    />
  </div>

  <div class="rounded-xl bg-slate-50 p-3">
    <div class="flex items-baseline justify-between gap-3 text-sm font-semibold text-slate-800">
      <span>Hoạt tính so với mức cao nhất</span>
      <span class="tabular-nums">{percentText(value)}</span>
    </div>
    <div class="mt-1 h-3 rounded bg-slate-200" aria-hidden="true">
      <div
        class="h-3 rounded {ruined ? 'bg-rose-500' : 'bg-emerald-600'}"
        style:width="{value * 100}%"
      ></div>
    </div>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />

  {#if ruined}
    <button type="button" class={button.primary} onclick={freshEnzyme}>Thay enzyme mới</button>
  {/if}

  <div class="grid gap-3 sm:grid-cols-2">
    {#each charts as chart (chart.id)}
      <figure class="min-w-0">
        <figcaption class="mb-1 text-sm font-semibold text-slate-700">{chart.title}</figcaption>
        <svg
          viewBox="0 0 {W} {H}"
          class="block w-full rounded-xl border border-slate-200 bg-white"
          role="img"
          aria-label="{chart.title}: tại vị trí đang chọn, hoạt tính bằng {percentText(value)}."
        >
          {#each SHARES as share (share)}
            <line
              x1={LEFT}
              x2={W - RIGHT}
              y1={toY(share)}
              y2={toY(share)}
              stroke="#e2e8f0"
              stroke-width="1"
            />
            <text x={LEFT - 5} y={toY(share) + 4} text-anchor="end" font-size="11" fill="#475569">
              {percentText(share)}
            </text>
          {/each}
          {#each chart.ticks as tick (tick)}
            <text
              x={chart.toX(tick)}
              y={H - BOTTOM + 15}
              text-anchor="middle"
              font-size="11"
              fill="#475569"
            >
              {formatNumber(tick)}
            </text>
          {/each}
          <text x={W - RIGHT} y={H - 4} text-anchor="end" font-size="11" fill="#475569">
            {chart.unit}
          </text>
          {#if chart.points.length > 0}
            <polyline
              points={pointsAttr(chart.points)}
              fill="none"
              stroke="#4f46e5"
              stroke-width="2.5"
              stroke-linejoin="round"
            />
          {:else}
            <text
              x={(LEFT + W - RIGHT) / 2}
              y={toY(0.5)}
              text-anchor="middle"
              font-size="12"
              font-weight="700"
              fill="#be123c"
            >
              Enzyme đã biến tính
            </text>
          {/if}
          <line
            x1={chart.toX(chart.at)}
            x2={chart.toX(chart.at)}
            y1={TOP}
            y2={H - BOTTOM}
            stroke="#94a3b8"
            stroke-dasharray="4 3"
          />
          <circle
            cx={chart.toX(chart.at)}
            cy={toY(value)}
            r="6"
            fill={ruined ? '#e11d48' : '#059669'}
            stroke="#ffffff"
            stroke-width="2"
          />
        </svg>
      </figure>
    {/each}
  </div>

  <p class="text-xs text-slate-600">
    Mô hình minh hoạ: đường cong thật còn phụ thuộc nguồn enzyme, cơ chất và thời gian phản ứng.
  </p>
</div>
