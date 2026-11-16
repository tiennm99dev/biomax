<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import SirChart from '../_shared/sir-chart.svelte';
  import {
    DISEASES,
    MAX_COVERAGE,
    MEASURES,
    coverageNeeded,
    diseaseOf,
    effectiveR,
    idleMeasures,
    prevented,
    preventionVerdict,
    unchecked,
  } from './engine.js';

  const diseaseOptions = DISEASES.map((d) => ({ value: d.id, label: d.name }));

  let diseaseId = $state(/** @type {string} */ (DISEASES[0].id));
  /** @type {string[]} */
  let on = $state([]);
  let coverage = $state(0);

  const disease = $derived(diseaseOf(diseaseId));
  const base = $derived(unchecked(diseaseId));
  const run = $derived(prevented(diseaseId, on, coverage));
  const r = $derived(effectiveR(diseaseId, on, coverage));
  const verdict = $derived(preventionVerdict(run, base, r));
  const idle = $derived(idleMeasures(diseaseId, on));
  const working = $derived(MEASURES.filter((m) => on.includes(m.id) && !idle.includes(m)));
  const needed = $derived(coverageNeeded(diseaseId, on));

  /** @param {string} id */
  function toggle(id) {
    on = on.includes(id) ? on.filter((x) => x !== id) : [...on, id];
  }
</script>

<div class="space-y-3">
  <SegmentedControl label="Bệnh dịch" options={diseaseOptions} bind:value={diseaseId} />
  <p class="rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
    Bệnh {disease.name.toLowerCase()} lây qua {disease.routeName}. Khi không có biện pháp nào, mỗi
    người bệnh lây cho trung bình {formatNumber(base.r0, 2)} người.
  </p>

  <fieldset>
    <legend class="mb-1 text-sm font-semibold text-slate-700">Bật các biện pháp phòng, chống</legend
    >
    <div class="flex flex-wrap gap-2">
      {#each MEASURES as m (m.id)}
        <button
          type="button"
          class="{on.includes(m.id) ? button.primary : button.secondary} text-left"
          aria-pressed={on.includes(m.id)}
          onclick={() => toggle(m.id)}
        >
          {m.name}
        </button>
      {/each}
    </div>
  </fieldset>

  <div class="space-y-2 rounded-xl border border-slate-200 p-3">
    {#if disease.vaccine}
      <SliderField
        label="Tỉ lệ người đã tiêm vắc-xin"
        bind:value={coverage}
        min={0}
        max={MAX_COVERAGE}
        step={10}
        unit="%"
      />
      <p class="text-xs text-slate-600">
        {disease.vaccine}
        {needed > 0
          ? `Với các biện pháp đang bật, cần tiêm cho ít nhất ${needed}% cộng đồng để dịch không bùng phát.`
          : 'Các biện pháp đang bật đã đủ chặn dịch; tiêm vắc-xin bảo vệ thêm cho từng người.'}
      </p>
    {:else}
      <p class="text-sm text-slate-700">
        Sốt xuất huyết chưa có vắc-xin trong chương trình tiêm chủng mở rộng ở nước ta: biện pháp
        chính là diệt muỗi, bọ gậy và tránh muỗi đốt.
      </p>
    {/if}
  </div>

  <SirChart
    {run}
    compare={base}
    compareLabel="I khi không phòng, chống"
    label="Diễn biến dịch {disease.name.toLowerCase()} với các biện pháp đã chọn: đỉnh {formatNumber(
      run.peak,
    )} người cùng mắc, tổng {formatNumber(
      run.total,
    )} người mắc; khi không phòng, chống: đỉnh {formatNumber(base.peak)}, tổng {formatNumber(
      base.total,
    )}."
  />

  <FeedbackNote tone={verdict.tone} text={verdict.text} />

  {#if working.length}
    <ul class="space-y-1 text-sm text-slate-700" aria-label="Tác dụng của các biện pháp đang bật">
      {#each working as m (m.id)}
        <li><strong>{m.name}:</strong> {m.why}</li>
      {/each}
    </ul>
  {/if}
  {#if idle.length}
    <FeedbackNote
      tone="warn"
      text="Không có tác dụng với bệnh {disease.name.toLowerCase()}: {idle
        .map((m) => m.name.toLowerCase())
        .join('; ')}. Biện pháp phải cắt đúng con đường lây của bệnh."
    />
  {/if}
  <p class="text-xs text-slate-600">
    Mô hình SIR với số liệu minh hoạ cho một cộng đồng 10 nghìn người.
  </p>
</div>
