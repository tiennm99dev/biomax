<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { intText } from '#lib/core/number-format.js';
  import DnaCodonTranslator from '#lib/domain/dna-codon-translator.svelte';
  import { GENES, TASKS, changeOf, geneStats, oneChange } from './engine.js';

  let geneId = $state(GENES[0].id);
  const gene = $derived(GENES.find((g) => g.id === geneId) ?? GENES[0]);
  let sequence = $state(GENES[0].seq);
  /** @type {string[]} */
  let done = $state([]);

  const before = $derived(geneStats(gene.seq));
  const after = $derived(geneStats(sequence));
  const change = $derived(changeOf(gene.seq, sequence));
  /** Edited by more than one change, so the checklist cannot count it. */
  const several = $derived(sequence !== gene.seq && !oneChange(gene.seq, sequence));

  /**
   * The translator keeps the sequence it mounts with as its starting gene,
   * so the new sequence is set before the keyed block remounts it.
   * @param {string | number} id
   */
  function chooseGene(id) {
    const g = GENES.find((x) => x.id === id) ?? GENES[0];
    sequence = g.seq;
    done = [];
  }

  /** @param {string} next */
  function edited(next) {
    const met = TASKS.filter((t) => !done.includes(t.id) && t.met(gene.seq, next));
    if (met.length) done = [...done, ...met.map((t) => t.id)];
  }

  /** @param {number} d */
  const signed = (d) => (d > 0 ? `+${d}` : intText(d));

  const note = $derived(
    change.effect === 'none'
      ? {
          tone: /** @type {const} */ ('info'),
          text: 'Chạm vào một nucleotide của mạch mã hoá rồi chọn thay thế, thêm hoặc mất một cặp nucleotide.',
        }
      : {
          tone: /** @type {'ok' | 'warn'} */ (change.effect === 'silent' ? 'ok' : 'warn'),
          text: `So với gene ban đầu: số cặp nucleotide ${signed(change.pairs)}, số liên kết hydrogen ${signed(change.hydrogen)}.`,
        },
  );
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Gene"
    bind:value={geneId}
    onchange={chooseGene}
    options={GENES.map((g) => ({ value: g.id, label: g.label }))}
  />
  <p class="text-sm text-slate-600">{gene.note}</p>

  {#key geneId}
    <DnaCodonTranslator
      bind:sequence
      editable
      template={false}
      onchange={edited}
      label="Trình soạn gene"
    />
  {/key}

  <dl class="grid grid-cols-2 gap-2 text-center text-sm">
    <div class="rounded-lg bg-slate-50 p-2">
      <dt class="text-xs text-slate-500">Số cặp nucleotide</dt>
      <dd class="font-bold">{before.pairs} → {after.pairs}</dd>
    </div>
    <div class="rounded-lg bg-slate-50 p-2">
      <dt class="text-xs text-slate-500">Số liên kết hydrogen</dt>
      <dd class="font-bold">{before.hydrogen} → {after.hydrogen}</dd>
    </div>
  </dl>

  <FeedbackNote tone={note.tone} text={note.text} />
  {#if several}
    <FeedbackNote
      tone="info"
      text="Đã có nhiều hơn một thay đổi. Khôi phục gene rồi thử lại bằng một thay đổi."
    />
  {/if}

  <div class="rounded-xl border border-slate-200 bg-white p-3">
    <p class="text-sm font-semibold text-slate-700">
      Thử tạo từng loại đột biến chỉ bằng một thay đổi (khôi phục gene sau mỗi lần):
    </p>
    <ul class="mt-2 grid gap-1 text-sm sm:grid-cols-2" aria-live="polite">
      {#each TASKS as t (t.id)}
        <li class={done.includes(t.id) ? 'font-semibold text-emerald-700' : 'text-slate-600'}>
          {done.includes(t.id) ? '✓' : '○'}
          {t.label}{done.includes(t.id) ? ' (đã làm được)' : ''}
        </li>
      {/each}
    </ul>
  </div>
</div>
