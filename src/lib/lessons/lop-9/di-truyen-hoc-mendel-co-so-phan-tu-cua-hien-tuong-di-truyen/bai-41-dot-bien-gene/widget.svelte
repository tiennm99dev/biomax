<script>
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { fmt } from '#lib/core/number-format.js';
  import { focusRing } from '#lib/core/ui.js';
  import DnaCodonTranslator from '#lib/domain/dna-codon-translator.svelte';
  import { GENES, MISSIONS, changeText, geneStats, missionMet } from './engine.js';

  let geneId = $state(GENES[0].id);
  const gene = $derived(GENES.find((g) => g.id === geneId) ?? GENES[0]);
  let sequence = $state(GENES[0].seq);
  /** Missions completed on the current gene. @type {string[]} */
  let done = $state([]);
  /** @type {{ tone: 'ok' | 'warn' | 'info', text: string } | null} */
  let note = $state(null);
  /** Which mission's hint is open. @type {string | null} */
  let hintFor = $state(null);

  const before = $derived(geneStats(gene.seq));
  const after = $derived(geneStats(sequence));

  /**
   * The translator keeps the sequence it mounts with as its starting gene
   * (for its reset button and the protein comparison), so the new sequence
   * must be in place before the gene id remounts it.
   * @param {string | number} id
   */
  function chooseGene(id) {
    const g = GENES.find((x) => x.id === id) ?? GENES[0];
    sequence = g.seq;
    geneId = g.id;
    done = [];
    note = null;
    hintFor = null;
  }

  /** @param {string} next */
  function onEdit(next) {
    const met = MISSIONS.filter((m) => missionMet(m, gene.seq, next));
    const fresh = met.filter((m) => !done.includes(m.id));
    if (fresh.length) {
      done = [...done, ...fresh.map((m) => m.id)];
      note = {
        tone: 'ok',
        text: `Hoàn thành nhiệm vụ: ${fresh[0].label.toLowerCase()}. Bấm "Khôi phục trình tự ban đầu" rồi thử nhiệm vụ khác.`,
      };
    } else if (met.length) {
      note = { tone: 'info', text: 'Nhiệm vụ này em đã hoàn thành rồi.' };
    } else {
      note = null;
    }
  }

  const status = $derived(
    note ?? {
      tone: /** @type {const} */ ('info'),
      text: changeText(gene.seq, sequence),
    },
  );
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Chọn gene"
    options={GENES.map((g) => ({ value: g.id, label: g.label }))}
    value={geneId}
    onchange={chooseGene}
  />
  <p class="text-sm text-slate-600"><LiveRichText text={gene.note} /></p>

  {#key geneId}
    <DnaCodonTranslator
      bind:sequence
      editable
      template
      table
      label="Gene {gene.label}: tạo đột biến điểm"
      onchange={onEdit}
    />
  {/key}

  <table class="w-full max-w-md border-collapse text-sm">
    <caption class="pb-1 text-left font-semibold text-slate-700">Gene trước và sau đột biến</caption
    >
    <thead>
      <tr class="text-slate-500">
        <th class="py-1 text-left font-normal"></th>
        <th class="py-1 text-right font-normal">Ban đầu</th>
        <th class="py-1 text-right font-normal">Hiện tại</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-t border-slate-200">
        <th class="py-1 text-left font-normal">Số cặp nucleotide</th>
        <td class="py-1 text-right">{fmt(before.pairs)}</td>
        <td class="py-1 text-right font-semibold">{fmt(after.pairs)}</td>
      </tr>
      <tr class="border-t border-slate-200">
        <th class="py-1 text-left font-normal">Số liên kết hydrogen</th>
        <td class="py-1 text-right">{fmt(before.bonds)}</td>
        <td class="py-1 text-right font-semibold">{fmt(after.bonds)}</td>
      </tr>
    </tbody>
  </table>

  <FeedbackNote tone={status.tone} text={status.text} />

  <section class="space-y-2" aria-label="Nhiệm vụ">
    <h3 class="text-sm font-semibold text-slate-700">
      Nhiệm vụ ({done.length}/{MISSIONS.length}): mỗi nhiệm vụ chỉ dùng một đột biến điểm
    </h3>
    <ul class="space-y-2">
      {#each MISSIONS as m (m.id)}
        {@const ok = done.includes(m.id)}
        <li
          class="rounded-xl border p-3 text-sm {ok
            ? 'border-emerald-300 bg-emerald-50 text-emerald-900'
            : 'border-slate-200 bg-white text-slate-800'}"
        >
          <div class="flex flex-wrap items-center justify-between gap-2">
            <span>
              <span aria-hidden="true">{ok ? '✓' : '○'}</span>
              <span class="sr-only">{ok ? 'Đã xong:' : 'Chưa xong:'}</span>
              {m.label}
            </span>
            {#if !ok}
              <button
                type="button"
                class="min-h-11 rounded-lg px-3 text-sm font-semibold text-indigo-700 hover:bg-indigo-50 {focusRing}"
                aria-expanded={hintFor === m.id}
                onclick={() => (hintFor = hintFor === m.id ? null : m.id)}>Gợi ý</button
              >
            {/if}
          </div>
          {#if hintFor === m.id && !ok}
            <p class="mt-1 text-slate-600">{m.hint}</p>
          {/if}
        </li>
      {/each}
    </ul>
  </section>
</div>
