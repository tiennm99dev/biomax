<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatFixed, formatNumber } from '#lib/core/number-format.js';
  import { button } from '#lib/core/ui.js';
  import TraceChart from '#lib/domain/trace-chart.svelte';
  import {
    HARVEST,
    PH_HIGH,
    PH_LOW,
    PPM_HIGH,
    PPM_LOW,
    TANK,
    act,
    diagnose,
    freshBed,
    growthFactor,
    nextDay,
    phFactor,
    ppmFactor,
  } from './engine.js';

  /** @type {Array<{ id: import('./engine.js').Action, label: string }>} */
  const ACTIONS = [
    { id: 'nuoc', label: 'Thêm 2 lít nước' },
    { id: 'dinh-duong', label: 'Thêm dung dịch dinh dưỡng đậm đặc' },
    { id: 'ha-ph', label: 'Thêm dung dịch hạ pH' },
    { id: 'tang-ph', label: 'Thêm dung dịch tăng pH' },
  ];

  let bed = $state(freshBed());
  let lastAction = $state('');

  const status = $derived(diagnose(bed));
  const report = $derived(
    lastAction ? { tone: status.tone, text: `${lastAction} ${status.text}` } : status,
  );
  const done = $derived(bed.height >= HARVEST);
  const growth = $derived(growthFactor(bed));
  const leaf = $derived(growth >= 0.9 ? '#16a34a' : growth >= 0.5 ? '#84cc16' : '#ca8a04');
  const waterTop = $derived(150 - (bed.level / TANK) * 50);
  const plantTop = $derived(98 - Math.min(HARVEST + 5, bed.height) * 2.6);

  /** @param {import('./engine.js').Action} id @param {string} label */
  function apply(id, label) {
    bed = act(bed, id);
    lastAction = `Đã ${label.toLowerCase()}.`;
  }

  function toggleAir() {
    bed = act(bed, 'suc-khi');
    lastAction = bed.air ? 'Đã bật máy sục khí.' : 'Đã tắt máy sục khí.';
  }

  function advance() {
    bed = nextDay(bed);
    lastAction = '';
  }

  function restart() {
    bed = freshBed();
    lastAction = '';
  }

  /** @param {boolean} good */
  const mark = (good) => (good ? 'text-emerald-700' : 'text-amber-700');
</script>

<div class="space-y-3">
  <svg
    viewBox="0 0 340 160"
    class="block w-full rounded-xl bg-sky-50"
    role="img"
    aria-label="Hệ thuỷ canh ngày {bed.day}: cây cao {formatNumber(
      bed.height,
      1,
    )} cm, bể còn {formatNumber(bed.level)} lít dung dịch."
  >
    <!-- growing channel with one plant in a net cup -->
    <rect x="60" y="96" width="220" height="14" rx="4" fill="#e2e8f0" stroke="#94a3b8" />
    <rect x="160" y="90" width="20" height="14" fill="#f8fafc" stroke="#64748b" />
    <path
      d="M170 104 L162 118 M170 104 L170 122 M170 104 L178 118"
      stroke="#f5f5f4"
      stroke-width="2"
    />
    <line x1="170" y1="92" x2="170" y2={plantTop + 6} stroke="#15803d" stroke-width="3" />
    {#each [0, 1, 2] as i (i)}
      <ellipse
        cx={170 + (i - 1) * 14}
        cy={plantTop + 6 + i * 4}
        rx={6 + bed.height * 0.35}
        ry={4 + bed.height * 0.15}
        fill={leaf}
        opacity="0.9"
      />
    {/each}
    <!-- tank, pump and return pipe -->
    <rect x="40" y="100" width="70" height="52" rx="4" fill="#ffffff" stroke="#64748b" />
    <rect x="41" y={waterTop} width="68" height={151 - waterTop} fill="#7dd3fc" opacity="0.8" />
    <rect x="50" y="138" width="14" height="10" rx="2" fill="#475569" />
    <path d="M57 138 L57 80 L120 80 L120 96" fill="none" stroke="#475569" stroke-width="3" />
    <path
      d="M280 110 L290 110 L290 156 L110 156 L110 150"
      fill="none"
      stroke="#475569"
      stroke-width="3"
    />
    {#if bed.air}
      {#each [0, 1, 2] as i (i)}
        <circle cx={90 + i * 6} cy={142 - i * 9} r="2.5" fill="#ffffff" />
      {/each}
    {/if}
    <text x="40" y="94" font-size="11" fill="#334155">Bể chứa</text>
    <text x="200" y="124" font-size="11" fill="#334155">Máng trồng</text>
    <text x="230" y="20" font-size="12" font-weight="700" fill="#334155">Ngày {bed.day}</text>
  </svg>

  <dl class="grid grid-cols-2 gap-2 text-sm sm:grid-cols-4">
    <div class="rounded-lg bg-slate-50 p-2">
      <dt class="text-slate-600">pH</dt>
      <dd class="font-bold tabular-nums {mark(phFactor(bed.ph) === 1)}">
        {formatFixed(bed.ph, 1)}
      </dd>
    </div>
    <div class="rounded-lg bg-slate-50 p-2">
      <dt class="text-slate-600">Nồng độ</dt>
      <dd class="font-bold tabular-nums {mark(ppmFactor(bed.ppm) === 1)}">
        {formatNumber(Math.round(bed.ppm))} ppm
      </dd>
    </div>
    <div class="rounded-lg bg-slate-50 p-2">
      <dt class="text-slate-600">Dung dịch</dt>
      <dd class="font-bold tabular-nums text-slate-800">{formatNumber(bed.level)} lít</dd>
    </div>
    <div class="rounded-lg bg-slate-50 p-2">
      <dt class="text-slate-600">Tốc độ lớn</dt>
      <dd class="font-bold tabular-nums {mark(growth >= 0.9)}">
        {formatNumber(Math.round(growth * 100))}%
      </dd>
    </div>
  </dl>
  <p class="text-xs text-slate-600">
    Khoảng phù hợp cho rau ăn lá: pH {formatFixed(PH_LOW, 1)}–{formatFixed(PH_HIGH, 1)}, nồng độ
    {formatNumber(PPM_LOW)}–{formatNumber(PPM_HIGH)} ppm.
  </p>

  <FeedbackNote tone={report.tone} text={report.text} />

  <div class="grid gap-2 sm:grid-cols-2">
    {#each ACTIONS as a (a.id)}
      <button
        type="button"
        class={button.quiet}
        disabled={done}
        onclick={() => apply(a.id, a.label)}
      >
        {a.label}
      </button>
    {/each}
    <button
      type="button"
      class={button.quiet}
      aria-pressed={bed.air}
      disabled={done}
      onclick={toggleAir}
    >
      Máy sục khí: {bed.air ? 'đang bật' : 'đang tắt'}
    </button>
    <button type="button" class={button.primary} disabled={done} onclick={advance}>
      Sang ngày tiếp theo
    </button>
  </div>

  <TraceChart
    values={bed.heights}
    max={HARVEST + 5}
    minDays={28}
    level={HARVEST}
    levelLabel="Thu hoạch"
    unit="cm"
    label="Chiều cao cây theo ngày"
  />

  <button type="button" class={button.quiet} onclick={restart}>Trồng lứa mới</button>
  <p class="text-xs text-slate-600">
    Tốc độ thay đổi pH, nồng độ và tốc độ lớn của cây là mô hình minh hoạ.
  </p>
</div>
