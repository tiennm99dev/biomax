<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { CROPS, SOILS, STAGES, cropOf, doseVerdict, planFor, soilOf, stageOf } from './engine.js';

  const cropOptions = CROPS.map((c) => ({ value: c.id, label: c.name }));
  const soilOptions = SOILS.map((s) => ({ value: s.id, label: s.name }));
  const stageOptions = STAGES.map((s) => ({ value: s.id, label: s.name }));
  /** @type {Record<string, string>} */
  const COLOR = { N: '#2563eb', P: '#d97706', K: '#7c3aed' };
  const MAX_UREA = 400;

  let cropId = $state(CROPS[0].id);
  let soilId = $state(SOILS[0].id);
  let stageId = $state(STAGES[0].id);
  let urea = $state(0);

  const rows = $derived(planFor(cropId, soilId, stageId));
  const rightUrea = $derived(rows[0].mass);
  const verdict = $derived(
    urea === 0 && rightUrea > 0
      ? {
          tone: /** @type {'info'} */ ('info'),
          text: 'Kéo thanh trượt để chọn lượng urea em định bón cho $1$ ha ở lần bón này, rồi đối chiếu với bảng tính.',
        }
      : doseVerdict(urea, rightUrea),
  );
  const biggest = $derived(Math.max(1, ...rows.map((r) => r.mass)));
  const late = $derived(stageId === 'thuc-2' ? cropOf(cropId).late : '');

  /** @param {number} v */
  const kg = (v) => `${formatNumber(v, 1)} kg`;
</script>

<div class="space-y-3">
  <SegmentedControl label="Cây trồng" options={cropOptions} bind:value={cropId} />
  <SegmentedControl label="Loại đất" options={soilOptions} bind:value={soilId} />
  <SegmentedControl label="Lần bón" options={stageOptions} bind:value={stageId} />

  <p class="rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
    {stageOf(stageId).why}
    {soilOf(soilId).note}
  </p>

  <div class="overflow-x-auto">
    <table class="w-full min-w-80 text-left text-sm">
      <caption class="pb-1 text-left text-xs text-slate-600">
        Tính cho 1 ha. Lượng cả vụ = (nhu cầu − đất cung cấp) : hệ số sử dụng.
      </caption>
      <thead class="text-slate-600">
        <tr>
          <th scope="col" class="py-1 pr-2">Chất</th>
          <th scope="col" class="py-1 pr-2">Nhu cầu</th>
          <th scope="col" class="py-1 pr-2">Đất có</th>
          <th scope="col" class="py-1 pr-2">Hệ số</th>
          <th scope="col" class="py-1 pr-2">Cả vụ</th>
          <th scope="col" class="py-1">Lần này</th>
        </tr>
      </thead>
      <tbody class="tabular-nums text-slate-800">
        {#each rows as row (row.nutrient)}
          <tr class="border-t border-slate-200">
            <th scope="row" class="py-1 pr-2 font-semibold" style:color={COLOR[row.nutrient]}>
              {row.form}
            </th>
            <td class="py-1 pr-2">{kg(row.need)}</td>
            <td class="py-1 pr-2">{kg(row.supply)}</td>
            <td class="py-1 pr-2">{formatNumber(row.efficiency)}</td>
            <td class="py-1 pr-2">{kg(row.season)}</td>
            <td class="py-1">{kg(row.now)}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <ul class="space-y-2" aria-label="Lượng phân cần bón cho 1 ha ở lần bón này">
    {#each rows as row (row.nutrient)}
      <li class="text-sm">
        <div class="flex justify-between gap-2 font-semibold text-slate-800">
          <span>{row.fertilizer.label}</span>
          <span class="tabular-nums">{formatNumber(Math.round(row.mass))} kg</span>
        </div>
        <div class="mt-1 h-3 rounded bg-slate-200" aria-hidden="true">
          <div
            class="h-3 rounded"
            style:background-color={COLOR[row.nutrient]}
            style:width="{(row.mass / biggest) * 100}%"
          ></div>
        </div>
      </li>
    {/each}
  </ul>

  {#if late}
    <FeedbackNote tone="info" text={late} />
  {/if}

  <div class="space-y-2 rounded-xl border border-slate-200 p-3">
    <SliderField
      label="Lượng urea em định bón cho 1 ha"
      bind:value={urea}
      min={0}
      max={MAX_UREA}
      step={5}
      unit="kg"
    />
    <FeedbackNote tone={verdict.tone} text={verdict.text} />
  </div>
  <p class="text-xs text-slate-600">
    Nhu cầu, lượng đất cung cấp và hệ số sử dụng là số liệu minh hoạ; ngoài đồng ruộng cần theo
    hướng dẫn của cán bộ khuyến nông và kết quả phân tích đất.
  </p>
</div>
