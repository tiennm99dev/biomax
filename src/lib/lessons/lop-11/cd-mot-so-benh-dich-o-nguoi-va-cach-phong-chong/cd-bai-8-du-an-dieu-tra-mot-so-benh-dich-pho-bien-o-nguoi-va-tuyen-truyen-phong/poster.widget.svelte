<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import { DISEASES, MEASURES, diseaseOf, measureOf, posterCheck } from './engine.js';

  const diseaseOptions = DISEASES.map((d) => ({ value: d.id, label: d.name }));

  let diseaseId = $state(/** @type {string} */ (DISEASES[0].id));
  /** @type {string[]} */
  let chosen = $state([]);

  const disease = $derived(diseaseOf(diseaseId));
  const check = $derived(posterCheck(diseaseId, chosen));

  /** @param {string} id */
  function toggle(id) {
    chosen = chosen.includes(id) ? chosen.filter((x) => x !== id) : [...chosen, id];
  }
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Bệnh cần tuyên truyền"
    options={diseaseOptions}
    bind:value={diseaseId}
    onchange={() => (chosen = [])}
  />

  <fieldset>
    <legend class="mb-1 text-sm font-semibold text-slate-700">
      Chọn các biện pháp đưa lên áp phích
    </legend>
    <ul class="space-y-1">
      {#each MEASURES as m (m.id)}
        <li>
          <label
            class="flex min-h-11 cursor-pointer items-center gap-3 rounded-lg px-2 py-1 text-sm text-slate-800 hover:bg-slate-50"
          >
            <input
              type="checkbox"
              class="h-5 w-5 shrink-0 {focusRing}"
              checked={chosen.includes(m.id)}
              onchange={() => toggle(m.id)}
            />
            {m.text}
          </label>
        </li>
      {/each}
    </ul>
  </fieldset>

  <figure
    class="space-y-2 rounded-2xl border-4 p-4 {check.tone === 'ok'
      ? 'border-emerald-500 bg-emerald-50'
      : 'border-amber-400 bg-amber-50'}"
    aria-label="Bản xem trước áp phích"
  >
    <p class="text-center text-lg font-extrabold uppercase text-slate-900">
      Phòng bệnh {disease.name}
    </p>
    <p class="text-center text-sm font-semibold italic text-slate-700">"{disease.slogan}"</p>
    <p class="text-xs text-slate-600">Bệnh lây qua {disease.route}.</p>
    {#if chosen.length}
      <ul class="list-disc space-y-1 pl-5 text-sm text-slate-900">
        {#each chosen as id (id)}
          <li>{measureOf(id).text}</li>
        {/each}
      </ul>
    {:else}
      <p class="text-sm text-slate-600">Chưa có biện pháp nào trên áp phích.</p>
    {/if}
  </figure>

  <FeedbackNote tone={check.tone} text={check.text} />
</div>
