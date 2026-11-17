<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatFixed, formatNumber, numTex } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import Stepper from '#lib/core/stepper.svelte';
  import { button } from '#lib/core/ui.js';
  import { ROLE_NAMES, SURVEYS, summarize } from './engine.js';

  /** @typedef {keyof typeof SURVEYS} SurveyId */

  let survey = $state(/** @type {SurveyId} */ ('bai-co'));
  let rows = $state(SURVEYS['bai-co'].rows.map((r) => ({ ...r })));

  /** @param {string | number} id */
  function load(id) {
    rows = SURVEYS[/** @type {SurveyId} */ (id)].rows.map((r) => ({ ...r }));
  }

  const sum = $derived(summarize(rows));
  const missing = $derived(
    /** @type {Array<keyof typeof ROLE_NAMES>} */ (['san-xuat', 'tieu-thu', 'phan-giai']).filter(
      (role) => !sum.roles.includes(role),
    ),
  );

  const text = $derived.by(() => {
    if (sum.total === 0) return 'Chưa có cá thể nào được ghi nhận. Hãy nhập số cá thể đếm được.';
    const dom =
      sum.dominant.length === 1
        ? `Loài ưu thế: ${sum.dominant[0]}.`
        : `Các loài có số cá thể lớn nhất bằng nhau: ${sum.dominant.join(', ')}.`;
    const roles = missing.length
      ? ` Chưa ghi nhận ${missing.map((r) => ROLE_NAMES[r].toLowerCase()).join(', ')}: hãy tìm kĩ hơn (sinh vật phân giải thường ẩn trong đất, lá mục).`
      : ' Đã có đủ ba nhóm sinh vật sản xuất, tiêu thụ và phân giải.';
    return `Có ${sum.species} loài, ${formatNumber(sum.total)} cá thể. ${dom} Chỉ số Shannon $H' \\approx ${numTex(sum.shannon, 2)}$.${roles}`;
  });
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Quần xã khảo sát"
    options={Object.entries(SURVEYS).map(([value, s]) => ({ value, label: s.title }))}
    bind:value={survey}
    onchange={load}
  />

  <ul class="space-y-2">
    {#each rows as row, i (row.id)}
      <li
        class="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-xl border border-slate-200 bg-white px-3 py-2"
      >
        <Stepper label={row.name} bind:value={row.count} min={0} max={99} />
        <span class="text-sm text-slate-600">
          {ROLE_NAMES[row.role]}, {row.layer.toLowerCase()}
          <span class="ml-2 font-semibold tabular-nums text-indigo-700">
            {formatFixed(sum.abundance[i], 1)}%
          </span>
        </span>
      </li>
    {/each}
  </ul>

  <dl class="grid grid-cols-2 gap-2 text-sm sm:grid-cols-4">
    <div class="rounded-xl bg-slate-100 p-2">
      <dt class="text-slate-600">Số loài</dt>
      <dd class="text-lg font-semibold tabular-nums">{sum.species}</dd>
    </div>
    <div class="rounded-xl bg-slate-100 p-2">
      <dt class="text-slate-600">Tổng số cá thể</dt>
      <dd class="text-lg font-semibold tabular-nums">{formatNumber(sum.total)}</dd>
    </div>
    <div class="rounded-xl bg-slate-100 p-2">
      <dt class="text-slate-600">Số tầng thực vật</dt>
      <dd class="text-lg font-semibold tabular-nums">{sum.layers.length}</dd>
    </div>
    <div class="rounded-xl bg-slate-100 p-2">
      <dt class="text-slate-600">Chỉ số Shannon H′</dt>
      <dd class="text-lg font-semibold tabular-nums">{formatFixed(sum.shannon, 2)}</dd>
    </div>
  </dl>

  <FeedbackNote tone={missing.length || sum.total === 0 ? 'warn' : 'ok'} {text} />
  <button type="button" class={button.quiet} onclick={() => load(survey)}>Đặt lại số liệu</button>
</div>
