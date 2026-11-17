<script>
  import { tick } from 'svelte';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button } from '#lib/core/ui.js';
  import ChromosomeStrip from '../_shared/chromosome-strip.svelte';
  import Karyotype from '../_shared/karyotype.svelte';
  import { ANSWERS, ROUND_COUNT, answerLabel, buildGame } from './engine.js';

  let seed = $state(14);
  const rounds = $derived(buildGame(seed));
  let index = $state(0);
  /** 'ask' → first try, 'retry' → after one miss, 'done' → settled */
  let phase = $state(/** @type {'ask' | 'retry' | 'done'} */ ('ask'));
  /** @type {import('./engine.js').Answer | null} */
  let chosen = $state(null);
  let score = $state(0);
  let finished = $state(false);
  /** @type {HTMLButtonElement | undefined} */
  let nextButton = $state();

  const round = $derived(rounds[index]);

  /** @param {import('./engine.js').Answer} id */
  async function answer(id) {
    if (phase === 'done' || (phase === 'retry' && id === chosen)) return;
    chosen = id;
    if (id === round.answer) {
      if (phase === 'ask') score += 1;
      phase = 'done';
    } else if (phase === 'ask') {
      phase = 'retry';
      return;
    } else {
      phase = 'done';
    }
    await tick();
    nextButton?.focus();
  }

  function next() {
    if (index + 1 >= ROUND_COUNT) {
      finished = true;
      return;
    }
    index += 1;
    phase = 'ask';
    chosen = null;
  }

  function restart() {
    seed += 1;
    index = 0;
    phase = 'ask';
    chosen = null;
    score = 0;
    finished = false;
  }

  const note = $derived.by(() => {
    if (phase === 'ask')
      return {
        tone: /** @type {const} */ ('info'),
        text: 'Quan sát tiêu bản rồi chọn dạng đột biến.',
      };
    if (phase === 'retry')
      return {
        tone: /** @type {const} */ ('warn'),
        text: `Chưa đúng, đây không phải ${answerLabel(chosen ?? 'binh-thuong').toLowerCase()}. Gợi ý: ${round.hint} Thử lại lần nữa.`,
      };
    if (chosen === round.answer)
      return { tone: /** @type {const} */ ('ok'), text: `Đúng: ${round.reveal}` };
    return {
      tone: /** @type {const} */ ('warn'),
      text: `Đáp án: ${answerLabel(round.answer)}. ${round.reveal}`,
    };
  });
</script>

<div class="space-y-4">
  {#if finished}
    <div class="space-y-3 rounded-xl bg-slate-50 p-4 text-center" aria-live="polite">
      <p class="text-lg font-semibold text-slate-800">
        Em nhận dạng đúng ngay lần đầu {score}/{ROUND_COUNT} tiêu bản.
      </p>
      <p class="text-sm text-slate-600">
        {score === ROUND_COUNT
          ? 'Xuất sắc! Em đã phân biệt tốt các dạng đột biến.'
          : 'Hãy xem lại cách đếm NST từng cặp và so sánh trình tự gene, rồi chơi ván mới.'}
      </p>
      <button type="button" class={button.primary} onclick={restart}>Chơi ván mới</button>
    </div>
  {:else}
    <div class="flex items-center justify-between text-sm text-slate-600">
      <span>Tiêu bản {index + 1}/{ROUND_COUNT}</span>
      <span>Đúng lần đầu: {score}</span>
    </div>
    <p class="text-sm font-semibold text-slate-700"><LiveRichText text={round.title} /></p>

    {#if round.view.type === 'karyotype'}
      <Karyotype
        groups={round.view.groups}
        columns={round.view.columns}
        label="Tiêu bản cần nhận dạng"
      />
    {:else}
      <div class="space-y-3 rounded-xl bg-slate-50 p-3">
        {#each round.view.strips as s (s.label)}
          <ChromosomeStrip genes={s.genes} label={s.label} />
        {/each}
      </div>
    {/if}

    <div class="grid grid-cols-2 gap-2 sm:grid-cols-4" role="group" aria-label="Dạng đột biến">
      {#each ANSWERS as a (a.id)}
        {@const right = phase === 'done' && a.id === round.answer}
        {@const wrong = phase !== 'ask' && a.id === chosen && a.id !== round.answer}
        <button
          type="button"
          class="{right ? `${button.primary} disabled:opacity-100` : button.quiet} {wrong
            ? 'line-through'
            : ''}"
          disabled={phase === 'done'}
          aria-pressed={a.id === chosen}
          onclick={() => answer(a.id)}>{a.label}</button
        >
      {/each}
    </div>

    <FeedbackNote tone={note.tone} text={note.text} />

    {#if phase === 'done'}
      <button type="button" class={button.secondary} bind:this={nextButton} onclick={next}>
        {index + 1 >= ROUND_COUNT ? 'Xem kết quả' : 'Tiêu bản tiếp theo'}
      </button>
    {/if}
  {/if}
</div>
