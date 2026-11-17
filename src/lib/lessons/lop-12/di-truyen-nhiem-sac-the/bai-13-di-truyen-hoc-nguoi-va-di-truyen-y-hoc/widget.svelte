<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import PedigreeChart from '#lib/domain/pedigree-chart.svelte';
  import { MODES, MODE_LABELS } from '#lib/domain/pedigree.js';
  import { FAMILIES, clues, judge } from './engine.js';

  let familyId = $state(FAMILIES[0].id);
  const family = $derived(FAMILIES.find((f) => f.id === familyId) ?? FAMILIES[0]);
  /** @type {import('#lib/domain/pedigree.js').Pedigree} */
  let pedigree = $state(structuredClone(FAMILIES[0].pedigree));
  /** @type {import('#lib/domain/pedigree.js').Mode | null} */
  let guess = $state(null);
  let showClues = $state(false);
  let full = $state(false);

  /** @param {string | number} id */
  function choose(id) {
    const f = FAMILIES.find((x) => x.id === id);
    if (!f) return;
    pedigree = structuredClone(f.pedigree);
    guess = null;
    showClues = false;
    full = false;
  }

  /** @param {string} s */
  const lower = (s) => s.charAt(0).toLowerCase() + s.slice(1);

  const clueList = $derived(clues(pedigree));
  const verdict = $derived(guess ? judge(pedigree, guess) : null);

  const note = $derived.by(() => {
    if (!guess || !verdict)
      return {
        tone: /** @type {const} */ ('info'),
        text: 'Quan sát phả hệ, rồi chọn một giả thuyết về gene gây bệnh để kiểm tra.',
      };
    const name = lower(MODE_LABELS[guess]);
    if (!verdict.fits)
      return {
        tone: /** @type {const} */ ('warn'),
        text: `Loại giả thuyết ${name}: ${verdict.reason}. Hãy thử giả thuyết khác.`,
      };
    if (verdict.others.length === 0)
      return {
        tone: /** @type {const} */ ('ok'),
        text: `Đúng: chỉ giả thuyết ${name} phù hợp với cả phả hệ.`,
      };
    const both = [guess, ...verdict.others];
    const xHint =
      both.includes('XR') && both.includes('AR')
        ? ' Bệnh chỉ gặp ở nam và truyền qua người mẹ mang gene gợi ý gene lặn trên X.'
        : '';
    return {
      tone: /** @type {const} */ ('ok'),
      text: `Giả thuyết ${name} phù hợp, nhưng ${verdict.others
        .map((m) => lower(MODE_LABELS[m]))
        .join(
          ', ',
        )} cũng phù hợp. Một phả hệ ít người chưa đủ để kết luận.${xHint} Cần nghiên cứu thêm nhiều phả hệ để khẳng định.`,
    };
  });
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Chọn gia đình"
    options={FAMILIES.map((f) => ({ value: f.id, label: f.label }))}
    bind:value={familyId}
    onchange={choose}
  />
  <p class="text-sm text-slate-700">{family.story}</p>

  <PedigreeChart bind:pedigree analysis={full} trait={family.trait} label="Phả hệ {family.trait}" />

  <div class="space-y-2">
    <p class="text-sm font-semibold text-slate-700">Bệnh do gene nào quy định?</p>
    <div class="flex flex-wrap gap-2" role="group" aria-label="Giả thuyết về gene gây bệnh">
      {#each MODES as m (m)}
        <button
          type="button"
          class={guess === m ? button.primary : button.quiet}
          aria-pressed={guess === m}
          onclick={() => (guess = m)}>{MODE_LABELS[m]}</button
        >
      {/each}
    </div>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />

  <div class="flex flex-wrap gap-2">
    <button
      type="button"
      class={button.secondary}
      aria-expanded={showClues}
      onclick={() => (showClues = !showClues)}>{showClues ? 'Ẩn manh mối' : 'Xem manh mối'}</button
    >
    <button
      type="button"
      class={button.secondary}
      aria-pressed={full}
      onclick={() => (full = !full)}>{full ? 'Ẩn phân tích đầy đủ' : 'Xem phân tích đầy đủ'}</button
    >
  </div>

  {#if showClues}
    <ul class="list-disc space-y-1 pl-5 text-sm text-slate-700" aria-live="polite">
      {#each clueList as c (c)}
        <li>{c}</li>
      {:else}
        <li>
          Không có cặp bố mẹ nào cho manh mối trội, lặn rõ ràng; hãy thử loại từng giả thuyết.
        </li>
      {/each}
    </ul>
  {/if}
</div>
