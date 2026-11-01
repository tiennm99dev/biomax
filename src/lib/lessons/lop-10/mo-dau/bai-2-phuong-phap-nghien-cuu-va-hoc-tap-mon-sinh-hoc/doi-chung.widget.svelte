<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import { focusRing } from '#lib/core/ui.js';
  import { FACTORS, SAMPLE_CONTROL, SAMPLE_TREATED, compareLots, judgeDesign } from './engine.js';

  /** @type {string[]} */
  let differing = $state(['anh-sang']);

  const verdict = $derived(judgeDesign(differing));
  const lots = compareLots(SAMPLE_CONTROL, SAMPLE_TREATED);

  /** @param {string} id */
  function toggle(id) {
    differing = differing.includes(id) ? differing.filter((x) => x !== id) : [...differing, id];
  }
</script>

<div class="space-y-3">
  <p class="text-sm text-slate-700">
    Em muốn biết muối có làm cây sinh trưởng chậm đi không. Với mỗi yếu tố, hãy chọn hai lô cây
    giống hay khác nhau.
  </p>
  <ul class="space-y-2">
    {#each FACTORS as f (f.id)}
      {@const differs = differing.includes(f.id)}
      <li class="flex items-center justify-between gap-2 rounded-lg border border-slate-200 p-2">
        <span class="text-sm font-semibold text-slate-800">{f.name}</span>
        <button
          type="button"
          class="min-h-11 shrink-0 rounded-lg border px-3 text-sm font-semibold {differs
            ? 'border-amber-500 bg-amber-50 text-amber-900'
            : 'border-slate-300 bg-white text-slate-700'} {focusRing}"
          aria-pressed={differs}
          aria-label="{f.name}: hai lô khác nhau"
          onclick={() => toggle(f.id)}
        >
          {differs ? 'Hai lô khác nhau' : 'Hai lô giống nhau'}
        </button>
      </li>
    {/each}
  </ul>
  <FeedbackNote tone={verdict.tone} text={verdict.text} />
  {#if verdict.fair}
    <p class="rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-800">
      Số liệu giả định: lô đối chứng cao trung bình {formatNumber(lots.control)} cm, lô thí nghiệm {formatNumber(
        lots.treated,
      )} cm, thấp hơn {formatNumber(lots.dropPercent)}%. Kết quả này ủng hộ giả thuyết.
    </p>
  {/if}
</div>
