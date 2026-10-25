<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { focusRing } from '#lib/core/ui.js';
  import { DISEASES, brokenSteps, chainVerdict, diseaseById } from './engine.js';

  let diseaseId = $state(/** @type {import('./engine.js').DiseaseId} */ ('sot-ret'));
  /** @type {string[]} */
  let chosen = $state([]);

  const d = $derived(diseaseById(diseaseId));
  const cut = $derived(brokenSteps(diseaseId, chosen));
  const firstCut = $derived(cut.length ? cut[0] : null);
  const verdict = $derived(chainVerdict(diseaseId, chosen));

  /** @param {string | number} v */
  function changeDisease(v) {
    diseaseId = /** @type {import('./engine.js').DiseaseId} */ (v);
    chosen = [];
  }

  /** @param {string} mid */
  function toggle(mid) {
    chosen = chosen.includes(mid) ? chosen.filter((x) => x !== mid) : [...chosen, mid];
  }

  /** Whether link i is still reached by the parasite. @param {number} i */
  const reached = (i) => firstCut === null || i <= firstCut;
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Bệnh"
    options={DISEASES.map((x) => ({ value: x.id, label: x.name }))}
    value={diseaseId}
    onchange={changeDisease}
  />

  <ol class="space-y-1" aria-label="Con đường lây bệnh {d.name.toLowerCase()}">
    {#each d.links as link, i (link)}
      <li>
        <div
          class="rounded-xl border px-3 py-2 text-sm {reached(i)
            ? 'border-amber-300 bg-amber-50 text-amber-950'
            : 'border-slate-200 bg-slate-50 text-slate-400 line-through'}"
        >
          <span class="font-bold">{i + 1}.</span>
          {link}
        </div>
        {#if i < d.links.length - 1}
          <div
            class="pl-6 text-sm font-semibold {cut.includes(i)
              ? 'text-emerald-700'
              : 'text-slate-500'}"
          >
            {cut.includes(i) ? '✂ đã cắt bước này' : '↓'}
          </div>
        {/if}
      </li>
    {/each}
  </ol>

  <fieldset class="space-y-2">
    <legend class="mb-1 text-sm font-semibold text-slate-700">Chọn các biện pháp phòng bệnh</legend>
    {#each d.measures as m (m.id)}
      <label
        class="flex min-h-11 cursor-pointer items-start gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-indigo-500"
      >
        <input
          type="checkbox"
          class="mt-1 h-4 w-4 {focusRing}"
          checked={chosen.includes(m.id)}
          onchange={() => toggle(m.id)}
        />
        <span>
          {m.text}
          {#if chosen.includes(m.id)}
            <span class="block text-xs {m.breaks === null ? 'text-rose-700' : 'text-emerald-700'}"
              >{m.why}</span
            >
          {/if}
        </span>
      </label>
    {/each}
  </fieldset>

  <p
    class="min-h-12 rounded-xl px-4 py-3 text-sm {cut.length
      ? 'bg-emerald-50 text-emerald-900'
      : 'bg-rose-50 text-rose-900'}"
    aria-live="polite"
  >
    {verdict}
  </p>
</div>
