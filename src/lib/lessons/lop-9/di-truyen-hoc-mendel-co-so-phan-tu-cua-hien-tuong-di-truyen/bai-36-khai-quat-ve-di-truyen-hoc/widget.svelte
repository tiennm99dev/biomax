<script>
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { texText } from '#lib/core/tex-text.js';
  import { button, focusRing } from '#lib/core/ui.js';
  import Pea from '../_shared/pea.svelte';
  import { QUESTIONS, TERMS, isRight, score, termName } from './engine.js';

  let mode = $state('cards');

  // Flip cards.
  /** @type {Record<string, boolean>} */
  let flipped = $state({});
  const flippedCount = $derived(TERMS.filter((t) => flipped[t.id]).length);

  /** @param {string} id */
  function flip(id) {
    flipped = { ...flipped, [id]: !flipped[id] };
  }

  /** @param {boolean} on */
  function flipAll(on) {
    flipped = Object.fromEntries(TERMS.map((t) => [t.id, on]));
  }

  /** Plain text of a rich string, for aria-labels: "$F_1$" reads as "F1". */
  const plain = (/** @type {string} */ s) => s.replace(/\$([^$]*)\$/g, (_, t) => texText(t));

  // Self-check.
  let qi = $state(0);
  /** @type {Record<string, string>} first answer per question */
  let first = $state({});
  /** @type {string | null} */
  let picked = $state(null);
  const q = $derived(QUESTIONS[qi]);
  const solved = $derived(picked !== null && isRight(q, picked));
  const finished = $derived(Object.keys(first).length === QUESTIONS.length);

  /** @param {string} id */
  function answer(id) {
    if (solved) return;
    picked = id;
    if (!(q.id in first)) first = { ...first, [q.id]: id };
  }

  function next() {
    qi = (qi + 1) % QUESTIONS.length;
    picked = null;
  }

  function restart() {
    first = {};
    qi = 0;
    picked = null;
  }

  const feedback = $derived.by(() => {
    if (picked === null) {
      return { tone: /** @type {const} */ ('info'), text: 'Ví dụ trên minh hoạ thuật ngữ nào?' };
    }
    if (solved) return { tone: /** @type {const} */ ('ok'), text: `Đúng. ${q.why}` };
    return {
      tone: /** @type {const} */ ('warn'),
      text: `Chưa đúng: "${termName(picked)}" không phải. Lật lại thẻ "${termName(picked)}" ở chế độ Lật thẻ nếu cần, rồi thử lại.`,
    };
  });
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Chế độ"
    bind:value={mode}
    options={[
      { value: 'cards', label: 'Lật thẻ' },
      { value: 'quiz', label: 'Tự kiểm tra' },
    ]}
  />

  {#if mode === 'cards'}
    <p class="text-sm text-slate-600">
      Chạm vào một thẻ (hoặc Tab tới thẻ rồi nhấn Enter) để lật xem định nghĩa và ví dụ trên cây đậu
      Hà Lan.
    </p>
    <ul class="grid grid-cols-2 gap-3 sm:grid-cols-3" aria-label="Thẻ thuật ngữ di truyền học">
      {#each TERMS as t (t.id)}
        {@const open = !!flipped[t.id]}
        <li class="[perspective:900px]">
          <button
            type="button"
            class="grid h-full w-full rounded-xl text-left transition-transform duration-500 [transform-style:preserve-3d] motion-reduce:transition-none {open
              ? '[transform:rotateY(180deg)]'
              : ''} {focusRing}"
            aria-pressed={open}
            aria-label={open
              ? `${t.term}. ${plain(t.definition)} Ví dụ: ${plain(t.example)}`
              : `Thẻ ${t.term}, chạm để lật`}
            onclick={() => flip(t.id)}
          >
            <span
              class="flex min-h-32 flex-col items-center justify-center gap-2 rounded-xl border-2 border-indigo-200 bg-indigo-50 p-3 [grid-area:1/1] [backface-visibility:hidden]"
              aria-hidden="true"
            >
              <span class="flex gap-1">
                {#each t.pictures as p, i (i)}
                  <Pea {...p} size={30} />
                {/each}
              </span>
              <span class="text-center font-bold text-indigo-900">{t.term}</span>
            </span>
            <span
              class="flex min-h-32 flex-col gap-1 rounded-xl border-2 border-emerald-300 bg-emerald-50 p-3 text-xs leading-snug text-slate-800 [grid-area:1/1] [transform:rotateY(180deg)] [backface-visibility:hidden]"
              aria-hidden="true"
            >
              <span class="font-bold text-emerald-900">{t.term}</span>
              <span><LiveRichText text={t.definition} /></span>
              <span class="text-emerald-900"><em>Ví dụ:</em> <LiveRichText text={t.example} /></span
              >
            </span>
          </button>
        </li>
      {/each}
    </ul>
    <div class="flex flex-wrap items-center gap-2">
      <button type="button" class={button.secondary} onclick={() => flipAll(true)}
        >Lật tất cả</button
      >
      <button type="button" class={button.quiet} onclick={() => flipAll(false)}>Úp tất cả</button>
      <p class="text-sm text-slate-600" aria-live="polite">
        Đã lật {flippedCount}/{TERMS.length} thẻ.
      </p>
    </div>
  {:else}
    <div class="space-y-3 rounded-xl border border-indigo-200 bg-indigo-50 p-4">
      <p class="text-xs font-semibold text-indigo-700">Câu {qi + 1}/{QUESTIONS.length}</p>
      <div class="flex items-center gap-3">
        <span class="flex gap-1">
          {#each q.pictures as p, i (i)}
            <Pea {...p} size={40} />
          {/each}
        </span>
        <p class="text-indigo-950"><LiveRichText text={q.example} /></p>
      </div>
      <div class="grid grid-cols-2 gap-2" role="group" aria-label="Chọn thuật ngữ">
        {#each q.options as o (o)}
          <button
            type="button"
            class="min-h-11 rounded-lg border-2 px-3 py-2 text-sm font-semibold {picked === o
              ? isRight(q, o)
                ? 'border-emerald-600 bg-emerald-100 text-emerald-900'
                : 'border-amber-500 bg-amber-50 text-amber-900'
              : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'} {focusRing}"
            aria-pressed={picked === o}
            onclick={() => answer(o)}>{termName(o)}</button
          >
        {/each}
      </div>
    </div>
    <FeedbackNote tone={feedback.tone} text={feedback.text} />
    <div class="flex flex-wrap items-center gap-2">
      <button type="button" class={button.primary} onclick={next} disabled={!solved}
        >Câu tiếp theo</button
      >
      <button type="button" class={button.quiet} onclick={restart}>Làm lại</button>
      <p class="text-sm text-slate-600" aria-live="polite">
        Đúng ngay lần đầu: {score(first)}/{Object.keys(first).length}{finished
          ? ` (đã làm cả ${QUESTIONS.length} câu)`
          : ''}.
      </p>
    </div>
  {/if}
</div>
