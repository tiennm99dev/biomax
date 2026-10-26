<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import { formatNumber } from '#lib/core/number-format.js';
  import { linear } from '#lib/core/visuals/svg-math.js';
  import StageDrawing from './stage-drawing.svelte';
  import { ORGANISMS, describe } from './engine.js';

  let id = $state('ech');
  let age = $state(0);

  const org = $derived(ORGANISMS[/** @type {import('./engine.js').OrganismId} */ (id)]);
  const now = $derived(describe(org, age));
  const maxSize = $derived(Math.max(...org.points.map((p) => p[1])));

  const W = 480;
  const H = 190;
  const L = 44;
  const R = 12;
  const T = 14;
  const B = 34;
  const x = $derived(linear(0, org.maxAge, L, W - R).map);
  const y = $derived(linear(0, maxSize * 1.1, H - B, T).map);
  const curve = $derived(org.points.map(([a, s]) => `${x(a)},${y(s)}`).join(' '));
  const bands = $derived(
    org.stages.map((s, i) => ({
      x0: x(s.from),
      x1: x(org.stages[i + 1]?.from ?? org.maxAge),
      i,
    })),
  );

  /** @param {number} i */
  function jump(i) {
    age = org.stages[i].from;
  }

  function reset() {
    age = 0;
  }

  const sizeText = $derived(`${formatNumber(now.size, 1)} ${org.sizeUnit}`);
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Sinh vật"
    options={[
      { value: 'ech', label: 'Ếch' },
      { value: 'buom', label: 'Bướm' },
      { value: 'dau', label: 'Cây đậu' },
    ]}
    bind:value={id}
    onchange={reset}
  />

  <SliderField label="Tuổi" bind:value={age} min={0} max={org.maxAge} unit="ngày" />

  <div class="grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
    <div class="rounded-2xl border border-slate-200 bg-sky-50 p-2">
      <svg
        viewBox="-90 -70 180 140"
        class="mx-auto block w-full max-w-xs"
        role="img"
        aria-label="{org.name}, giai đoạn {now.stage.name}"
      >
        <StageDrawing stage={now.stage.key} />
      </svg>
      <p class="text-center text-sm font-bold text-slate-900">{now.stage.name}</p>
    </div>
    <dl class="space-y-2 text-sm">
      <div class="rounded-xl bg-white p-3 ring-1 ring-slate-200">
        <dt class="font-semibold text-slate-500">{org.measure}</dt>
        <dd class="text-lg font-bold text-indigo-700 tabular-nums">{sizeText}</dd>
      </div>
      <div class="rounded-xl bg-emerald-50 p-3">
        <dt class="font-semibold text-emerald-800">Sinh trưởng</dt>
        <dd class="text-emerald-900">{now.growth}</dd>
      </div>
      <div class="rounded-xl bg-violet-50 p-3">
        <dt class="font-semibold text-violet-800">Phát triển</dt>
        <dd class="text-violet-900">{now.development}</dd>
      </div>
    </dl>
  </div>

  <div class="rounded-2xl border border-slate-200 bg-white p-2">
    <svg
      viewBox="0 0 {W} {H}"
      class="block w-full"
      role="img"
      aria-label="Đồ thị {org.measure.toLowerCase()} của {org.name.toLowerCase()} theo tuổi, đang ở ngày {age}: {sizeText}"
    >
      {#each bands as b (b.i)}
        <rect
          x={b.x0}
          y={T}
          width={b.x1 - b.x0}
          height={H - B - T}
          fill={b.i % 2 ? '#f5f3ff' : '#f8fafc'}
        />
        <text x={(b.x0 + b.x1) / 2} y={T + 12} font-size="11" text-anchor="middle" fill="#6d28d9"
          >{b.i + 1}</text
        >
      {/each}
      <line x1={L} y1={H - B} x2={W - R} y2={H - B} stroke="#94a3b8" />
      <line x1={L} y1={T} x2={L} y2={H - B} stroke="#94a3b8" />
      <text x={L - 6} y={y(maxSize)} font-size="11" text-anchor="end" fill="#475569"
        >{formatNumber(maxSize)}</text
      >
      <text x={L - 6} y={H - B} font-size="11" text-anchor="end" fill="#475569">0</text>
      <text x={W - R} y={H - 6} font-size="11" text-anchor="end" fill="#475569"
        >tuổi (ngày) {org.maxAge}</text
      >
      <text x={L} y={H - 6} font-size="11" fill="#475569">0</text>
      <text x={L + 4} y={T - 2} font-size="11" fill="#475569">{org.sizeUnit}</text>
      <polyline
        points={curve}
        fill="none"
        stroke="#059669"
        stroke-width="3"
        stroke-linejoin="round"
      />
      <line
        x1={x(age)}
        y1={T}
        x2={x(age)}
        y2={H - B}
        stroke="#4f46e5"
        stroke-width="2"
        stroke-dasharray="4 3"
      />
      <circle cx={x(age)} cy={y(now.size)} r="6" fill="#4f46e5" stroke="#fff" stroke-width="2" />
    </svg>
    <p class="px-2 text-xs text-slate-500">
      Các dải màu đánh số là các giai đoạn trong vòng đời. Số liệu minh hoạ, gần đúng.
    </p>
  </div>

  <div class="flex flex-wrap gap-2" role="group" aria-label="Chuyển nhanh tới một giai đoạn">
    {#each org.stages as s, i (s.key)}
      <button
        type="button"
        class="min-h-11 rounded-lg border-2 px-3 py-1 text-sm font-semibold {focusRing} {i ===
        now.index
          ? 'border-violet-500 bg-violet-50 text-violet-900'
          : 'border-slate-300 bg-white text-slate-700 hover:border-violet-400'}"
        aria-pressed={i === now.index}
        onclick={() => jump(i)}>{i + 1}. {s.name}</button
      >
    {/each}
  </div>

  <FeedbackNote
    tone="info"
    text="Ngày {age}, {now.stage.name.toLowerCase()}: {now.trend === 'tang'
      ? 'cơ thể đang lớn lên (sinh trưởng)'
      : 'cơ thể không lớn thêm'}; {now.index === 0
      ? 'đây là giai đoạn đầu của vòng đời.'
      : `so với giai đoạn đầu, cơ thể đã có thêm những biến đổi về hình thái (phát triển).`}"
  />
</div>
