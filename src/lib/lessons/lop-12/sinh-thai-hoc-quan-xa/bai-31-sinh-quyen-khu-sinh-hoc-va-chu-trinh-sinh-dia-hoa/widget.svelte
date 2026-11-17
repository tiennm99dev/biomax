<script>
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import SeriesChart from '../_shared/series-chart.svelte';
  import {
    FOREST,
    PRE_INDUSTRIAL,
    PROCESSES,
    START_PPM,
    TODAY_FOSSIL,
    YEARS,
    fluxes,
    simulate,
    verdict,
  } from './engine.js';

  /** @typedef {import('./engine.js').Forest} Forest */

  /** Store boxes of the diagram: x, y, width, height, two lines of label. */
  const STORES = [
    { id: 'air', x: 120, y: 6, w: 100, h: 40, lines: ['Khí quyển', 'CO₂'] },
    { id: 'plant', x: 30, y: 90, w: 80, h: 34, lines: ['Thực vật', '(sản xuất)'] },
    { id: 'animal', x: 125, y: 90, w: 80, h: 34, lines: ['Động vật', '(tiêu thụ)'] },
    { id: 'ocean', x: 245, y: 90, w: 88, h: 34, lines: ['Đại dương', 'CO₂ hoà tan'] },
    { id: 'dead', x: 30, y: 172, w: 110, h: 36, lines: ['Xác, chất thải', 'SV phân giải'] },
    { id: 'fossil', x: 190, y: 172, w: 143, h: 36, lines: ['Than đá, dầu mỏ,', 'khí đốt, đá vôi'] },
  ];

  /** Arrow paths of each process. */
  const ARROWS = /** @type {Record<string, string[]>} */ ({
    'quang-hop': ['M126 40 L54 88'],
    an: ['M110 107 L123 107'],
    xac: ['M60 124 L60 170', 'M155 124 L118 170'],
    'ho-hap': ['M92 88 L150 48', 'M185 88 L185 48'],
    'phan-giai': ['M38 172 C14 150 10 40 118 22'],
    'lang-dong': ['M140 190 L188 190'],
    dot: ['M232 172 L210 48'],
    'dai-duong': ['M222 30 L285 88', 'M300 88 L222 18'],
  });

  const COLORS = { chosen: '#dc2626', human: '#475569', nature: '#16a34a' };

  /**
   * @param {string} id
   * @returns {keyof typeof COLORS}
   */
  const tint = (id) => (id === process ? 'chosen' : id === 'dot' ? 'human' : 'nature');

  let fossil = $state(TODAY_FOSSIL);
  let forest = $state(/** @type {Forest} */ ('giu-nguyen'));
  let year = $state(0);
  let process = $state('quang-hop');

  const series = $derived(simulate(fossil, forest));
  const stopped = $derived(simulate(0, forest));
  const ppm = $derived(series[year]);
  const flow = $derived(fluxes(fossil, forest, ppm));
  const info = $derived(PROCESSES.find((p) => p.id === process) ?? PROCESSES[0]);
  const v = $derived(verdict(fossil, forest, series));

  /** @param {string} id */
  const width = (id) => (id === 'dot' ? 1.5 + fossil * 0.35 : id === 'quang-hop' ? 4 : 2.5);

  const text = $derived(
    `Đốt ${fossil} GtC/năm, ${FOREST[forest].label.toLowerCase()}: sau ${YEARS} năm $\\mathrm{CO_2}$ khoảng ${formatNumber(Math.round(v.end))} ppm${v.still} (mức tiền công nghiệp ${PRE_INDUSTRIAL} ppm). ${v.trend}`,
  );
</script>

<div class="space-y-4">
  <svg
    viewBox="0 0 340 214"
    class="mx-auto block w-full max-w-xl rounded-xl bg-sky-50"
    role="img"
    aria-label="Sơ đồ chu trình carbon, đang chọn quá trình {info.name}. Khí quyển năm thứ {year}: {formatNumber(
      Math.round(ppm),
    )} ppm CO₂; đốt nhiên liệu hoá thạch {fossil} GtC mỗi năm."
  >
    <defs>
      {#each Object.entries(COLORS) as [name, color] (name)}
        <marker
          id="carbon-head-{name}"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="5"
          markerHeight="5"
          orient="auto-start-reverse"
        >
          <path d="M0 0 L10 5 L0 10 z" fill={color} />
        </marker>
      {/each}
    </defs>
    {#each Object.entries(ARROWS) as [id, paths] (id)}
      {#each paths as d (d)}
        <path
          {d}
          fill="none"
          stroke={COLORS[tint(id)]}
          stroke-width={id === process ? width(id) + 1.5 : width(id)}
          stroke-dasharray={id === 'lang-dong' ? '4 3' : 'none'}
          marker-end="url(#carbon-head-{tint(id)})"
          opacity={id === process ? 1 : 0.65}
        />
      {/each}
    {/each}
    {#each STORES as s (s.id)}
      <rect
        x={s.x}
        y={s.y}
        width={s.w}
        height={s.h}
        rx="8"
        fill={s.id === 'air' ? '#e0e7ff' : s.id === 'fossil' ? '#e2e8f0' : '#ffffff'}
        stroke="#64748b"
      />
      <text
        x={s.x + s.w / 2}
        y={s.y + s.h / 2 - 3}
        text-anchor="middle"
        font-size="11"
        font-weight="600"
        fill="#0f172a">{s.lines[0]}</text
      >
      <text
        x={s.x + s.w / 2}
        y={s.y + s.h / 2 + 10}
        text-anchor="middle"
        font-size="10"
        fill="#334155"
        >{s.id === 'air' ? `${formatNumber(Math.round(ppm))} ppm CO₂` : s.lines[1]}</text
      >
    {/each}
    <text x="236" y="146" font-size="10" fill="#475569">Đốt: {fossil} GtC/năm</text>
  </svg>

  <SegmentedControl
    label="Quá trình trong chu trình"
    options={PROCESSES.map((p) => ({ value: p.id, label: p.name }))}
    bind:value={process}
  />
  <p class="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700" aria-live="polite">
    <strong>{info.name}:</strong>
    <LiveRichText text={info.text} />
  </p>

  <div class="grid gap-3 sm:grid-cols-2">
    <SliderField
      label="Đốt nhiên liệu hoá thạch"
      bind:value={fossil}
      min={0}
      max={20}
      unit="GtC/năm"
    />
    <SliderField label="Năm thứ" bind:value={year} min={0} max={YEARS} />
  </div>
  <SegmentedControl
    label="Rừng"
    options={Object.entries(FOREST).map(([value, f]) => ({ value, label: f.label }))}
    bind:value={forest}
  />

  <dl class="grid grid-cols-2 gap-2 text-sm sm:grid-cols-4">
    <div class="rounded-xl bg-slate-100 p-2">
      <dt class="text-slate-600">CO₂ năm thứ {year}</dt>
      <dd class="text-lg font-semibold tabular-nums">{formatNumber(Math.round(ppm))} ppm</dd>
    </div>
    <div class="rounded-xl bg-slate-100 p-2">
      <dt class="text-slate-600">Quang hợp</dt>
      <dd class="text-lg font-semibold tabular-nums">
        {formatNumber(Math.round(flow.photosynthesis))} GtC/năm
      </dd>
    </div>
    <div class="rounded-xl bg-slate-100 p-2">
      <dt class="text-slate-600">Đại dương hấp thụ</dt>
      <dd class="text-lg font-semibold tabular-nums">
        {formatNumber(Math.round(flow.oceanIn))} GtC/năm
      </dd>
    </div>
    <div class="rounded-xl bg-slate-100 p-2">
      <dt class="text-slate-600">Khí quyển tăng thêm</dt>
      <dd class="text-lg font-semibold tabular-nums">{formatNumber(flow.net, 1)} GtC/năm</dd>
    </div>
  </dl>

  <SeriesChart
    label="CO₂ khí quyển theo năm: kịch bản đã chọn từ {START_PPM} lên {formatNumber(
      Math.round(series[YEARS]),
    )} ppm; nếu ngừng đốt nhiên liệu hoá thạch: {formatNumber(Math.round(stopped[YEARS]))} ppm."
    unit="ppm"
    timeUnit="năm thứ"
    at={year}
    series={[
      { name: 'Kịch bản đã chọn', values: series, color: '#dc2626' },
      { name: 'Nếu ngừng đốt nhiên liệu', values: stopped, color: '#16a34a', dash: '6 4' },
    ]}
  />
  <p class="text-xs text-slate-600">
    Mô hình đơn giản hoá (1 ppm CO₂ ứng với khoảng 2,13 GtC), chỉ để thấy xu hướng, không phải dự
    báo.
  </p>

  <FeedbackNote tone={v.tone} {text} />
</div>
