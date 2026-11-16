<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import { POPULATION } from '../_shared/epidemic.js';
  import SirChart from '../_shared/sir-chart.svelte';
  import { FACTORS, ROUTES, idleFactors, outbreak, routeOf, runVerdict } from './engine.js';

  const routeOptions = ROUTES.map((r) => ({ value: r.id, label: r.name }));

  let routeId = $state(/** @type {string} */ (ROUTES[0].id));
  /** @type {string[]} */
  let on = $state([]);

  const route = $derived(routeOf(routeId));
  const run = $derived(outbreak(routeId, on));
  const base = $derived(on.length ? outbreak(routeId, []) : null);
  const verdict = $derived(runVerdict(run));
  const idle = $derived(idleFactors(routeId, on));
  const active = $derived(FACTORS.filter((f) => on.includes(f.id) && !idle.includes(f)));

  /** @param {string} id */
  function toggle(id) {
    on = on.includes(id) ? on.filter((x) => x !== id) : [...on, id];
  }
</script>

<div class="space-y-3">
  <SegmentedControl label="Con đường lây truyền" options={routeOptions} bind:value={routeId} />
  <p class="rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
    <strong>Ví dụ: bệnh {route.example}.</strong>
    {route.how}
  </p>

  <fieldset class="space-y-2">
    <legend class="mb-1 text-sm font-semibold text-slate-700">
      Bật các yếu tố thuận lợi cho dịch
    </legend>
    <div class="flex flex-wrap gap-2">
      {#each FACTORS as f (f.id)}
        <button
          type="button"
          class="{on.includes(f.id) ? button.primary : button.secondary} text-left"
          aria-pressed={on.includes(f.id)}
          onclick={() => toggle(f.id)}
        >
          {f.name}
        </button>
      {/each}
    </div>
  </fieldset>

  <SirChart
    {run}
    compare={base}
    compareLabel="I khi không có yếu tố thuận lợi"
    label="Diễn biến dịch trong {run.i.length - 1} ngày ở cộng đồng {formatNumber(
      POPULATION,
    )} người: đỉnh {formatNumber(
      run.peak,
    )} người mắc cùng lúc vào ngày {run.peakDay}, tổng {formatNumber(run.total)} người mắc."
  />

  <dl class="grid grid-cols-2 gap-2 text-sm sm:grid-cols-4">
    <div class="rounded-lg bg-slate-50 p-2">
      <dt class="text-xs text-slate-600">Một người bệnh lây cho</dt>
      <dd class="font-bold tabular-nums">{formatNumber(run.r0, 1)} người</dd>
    </div>
    <div class="rounded-lg bg-slate-50 p-2">
      <dt class="text-xs text-slate-600">Cùng mắc lúc đỉnh</dt>
      <dd class="font-bold tabular-nums">{formatNumber(run.peak)} người</dd>
    </div>
    <div class="rounded-lg bg-slate-50 p-2">
      <dt class="text-xs text-slate-600">Ngày đỉnh dịch</dt>
      <dd class="font-bold tabular-nums">{run.peakDay}</dd>
    </div>
    <div class="rounded-lg bg-slate-50 p-2">
      <dt class="text-xs text-slate-600">Tổng số người mắc</dt>
      <dd class="font-bold tabular-nums">{formatNumber(run.total)}</dd>
    </div>
  </dl>

  <FeedbackNote tone={verdict.tone} text={verdict.text} />

  {#if active.length}
    <ul
      class="space-y-1 text-sm text-slate-700"
      aria-label="Vì sao các yếu tố làm dịch lan nhanh hơn"
    >
      {#each active as f (f.id)}
        <li><strong>{f.name}:</strong> {f.why}</li>
      {/each}
    </ul>
  {/if}
  {#if idle.length}
    <FeedbackNote
      tone="info"
      text="Yếu tố không ảnh hưởng đến đường lây này: {idle
        .map((f) => f.name.toLowerCase())
        .join('; ')}. Mỗi yếu tố chỉ thúc đẩy những bệnh có con đường lây phù hợp."
    />
  {/if}
  <p class="text-xs text-slate-600">
    Mô hình SIR với số liệu minh hoạ: S là người còn có thể nhiễm, I là người đang mắc và lây bệnh,
    R là người đã khỏi.
  </p>
</div>
