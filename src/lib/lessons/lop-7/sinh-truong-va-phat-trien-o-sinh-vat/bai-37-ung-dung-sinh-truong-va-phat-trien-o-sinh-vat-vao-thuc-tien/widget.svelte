<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button } from '#lib/core/ui.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import { linear } from '#lib/core/visuals/svg-math.js';
  import { MODELS, bestSettings, evaluate, growthCurve, verdict } from './engine.js';

  let id = $state('ca');
  let temperature = $state(15);
  /** @type {Record<string, string>} */
  let levels = $state({ 'thuc-an': 'thieu' });

  const mid = $derived(/** @type {import('./engine.js').ModelId} */ (id));
  const model = $derived(MODELS[mid]);
  const settings = $derived({ temperature, levels });
  const result = $derived(verdict(mid, settings));
  const score = $derived(evaluate(mid, settings).score);

  /** Start each organism with a few poor conditions to fix. @param {string | number} next */
  function choose(next) {
    const m = /** @type {import('./engine.js').ModelId} */ (next);
    const s = bestSettings(m);
    if (m === 'ca') {
      temperature = 15;
      s.levels['thuc-an'] = 'thieu';
    } else {
      s.levels['anh-sang'] = 'thieu';
      s.levels.nuoc = 'ung';
    }
    levels = s.levels;
  }

  function best() {
    const s = bestSettings(mid);
    temperature = s.temperature;
    levels = s.levels;
  }

  const W = 480;
  const H = 230;
  const L = 48;
  const R = 14;
  const T = 16;
  const B = 34;
  const x = $derived(linear(0, model.days, L, W - R).map);
  const y = $derived(linear(0, model.full, H - B, T).map);
  /** @param {Array<[number, number]>} pts */
  const line = (pts) => pts.map(([d, v]) => `${x(d)},${y(v)}`).join(' ');
  const bestLine = $derived(line(growthCurve(model, 1)));
  const nowLine = $derived(line(growthCurve(model, score)));
  const ticks = $derived([0, 0.5, 1].map((f) => f * model.full));
  const endText = $derived(`${formatNumber(Math.round(result.end))} ${model.unit}`);
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Đối tượng nuôi trồng"
    options={[
      { value: 'ca', label: 'Nuôi cá rô phi' },
      { value: 'cay', label: 'Trồng rau cải' },
    ]}
    bind:value={id}
    onchange={choose}
  />

  <div class="grid gap-3 sm:grid-cols-2">
    {#if id === 'ca'}
      <SliderField label="Nhiệt độ nước" bind:value={temperature} min={0} max={45} unit="°C" />
    {/if}
    {#each model.factors as f (f.id)}
      <SegmentedControl
        label={f.name}
        options={f.levels.map((l) => ({ value: l.value, label: l.label }))}
        bind:value={levels[f.id]}
      />
    {/each}
  </div>

  <div class="rounded-2xl border border-slate-200 bg-white p-2">
    <svg
      viewBox="0 0 {W} {H}"
      class="block w-full"
      role="img"
      aria-label="Đường cong sinh trưởng của {model.name.toLowerCase()} trong {model.days} ngày: đạt {endText}, bằng khoảng {result.percent}% so với điều kiện tốt nhất"
    >
      {#each ticks as v (v)}
        <line x1={L} y1={y(v)} x2={W - R} y2={y(v)} stroke="#e2e8f0" />
        <text x={L - 6} y={y(v) + 4} font-size="11" text-anchor="end" fill="#475569"
          >{formatNumber(v)}</text
        >
      {/each}
      <line x1={L} y1={H - B} x2={W - R} y2={H - B} stroke="#94a3b8" />
      <text x={L} y={H - 10} font-size="11" fill="#475569">0</text>
      <text x={W - R} y={H - 10} font-size="11" text-anchor="end" fill="#475569"
        >{model.days} ngày</text
      >
      <text x={L + 4} y={T - 4} font-size="11" fill="#475569">{model.measure} ({model.unit})</text>
      <polyline
        points={bestLine}
        fill="none"
        stroke="#94a3b8"
        stroke-width="2.5"
        stroke-dasharray="6 4"
      />
      <polyline
        points={nowLine}
        fill="none"
        stroke={result.ok ? '#059669' : '#d97706'}
        stroke-width="3.5"
      />
      {#if result.percent > 0}
        <circle
          cx={x(model.days)}
          cy={y(result.end)}
          r="5"
          fill={result.ok ? '#059669' : '#d97706'}
        />
      {:else}
        <text
          x={(L + W - R) / 2}
          y={H / 2}
          font-size="16"
          font-weight="700"
          text-anchor="middle"
          fill="#b91c1c">Cá chết</text
        >
      {/if}
    </svg>
    <p class="flex flex-wrap gap-x-4 px-2 text-xs text-slate-600">
      <span><span class="font-bold text-slate-400">- - -</span> Điều kiện tốt nhất</span>
      <span
        ><span class="font-bold {result.ok ? 'text-emerald-600' : 'text-amber-600'}">——</span> Điều
        kiện em chọn: {endText}</span
      >
    </p>
  </div>

  <FeedbackNote tone={result.ok ? 'ok' : 'warn'} text={result.text} />
  <button type="button" class={button.quiet} onclick={best}>Đặt mọi nhân tố ở mức thích hợp</button>
</div>
