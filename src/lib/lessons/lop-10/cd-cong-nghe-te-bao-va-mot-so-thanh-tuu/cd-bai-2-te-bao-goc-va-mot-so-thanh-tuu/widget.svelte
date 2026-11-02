<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import {
    INDUCED,
    LEVEL_NAMES,
    QUESTIONS,
    ROOT,
    SKIN_CELL,
    cellOf,
    describe,
    judge,
    reachOf,
  } from './engine.js';

  const modes = [
    { value: 'hoc', label: 'Tìm hiểu' },
    { value: 'thu', label: 'Thử sức' },
  ];

  /** @type {Record<import('./engine.js').Level, string>} */
  const LEVEL_CLASS = {
    'toan-nang': 'bg-violet-100 text-violet-900',
    'van-nang': 'bg-indigo-100 text-indigo-900',
    'da-tiem-nang': 'bg-sky-100 text-sky-900',
    'don-nang': 'bg-teal-100 text-teal-900',
    'chuyen-hoa': 'bg-slate-100 text-slate-700',
  };

  let mode = $state('hoc');
  let selectedId = $state(ROOT);
  let induced = $state(false);
  let turn = $state(0);
  let score = $state(0);
  /** @type {{ ok: boolean, text: string } | null} */
  let answered = $state(null);

  const reach = $derived(reachOf(selectedId));
  const question = $derived(QUESTIONS[turn]);
  const quizDone = $derived(turn >= QUESTIONS.length);
  /** The tree only answers the question once it is answered. */
  const lit = $derived(mode === 'thu' && !answered ? [] : reach);
  const mark = $derived(mode === 'thu' && !answered ? null : selectedId);

  /** @param {string} id */
  function pick(id) {
    selectedId = id;
  }

  function induce() {
    induced = true;
    selectedId = INDUCED;
  }

  /** @param {boolean} said */
  function answer(said) {
    if (answered) return;
    const result = judge(question, said);
    answered = result;
    if (result.ok) score += 1;
    selectedId = question.from;
    if (question.from === INDUCED) induced = true;
  }

  function nextQuestion() {
    turn += 1;
    answered = null;
  }

  function restartQuiz() {
    turn = 0;
    score = 0;
    answered = null;
  }

  /** @param {string} id */
  function nodeClass(id) {
    if (mark === id) return 'border-indigo-700 bg-indigo-600 text-white';
    if (lit.includes(id)) return 'border-emerald-500 bg-emerald-50 text-emerald-900';
    return 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50';
  }

  /** @param {string} id */
  function nodeLabel(id) {
    const cell = cellOf(id);
    const state =
      mark === id ? ', đang chọn' : lit.includes(id) ? ', tế bào đang chọn tạo được' : '';
    return `${cell.name}, ${LEVEL_NAMES[cell.level]}${state}`;
  }
</script>

{#snippet node(/** @type {string} */ id)}
  {@const cell = cellOf(id)}
  <li>
    <button
      type="button"
      disabled={mode === 'thu'}
      aria-pressed={mark === id}
      aria-label={nodeLabel(id)}
      class="flex min-h-11 w-full flex-wrap items-center justify-between gap-x-2 rounded-lg border px-2 py-1.5 text-left text-sm font-medium transition {focusRing} {nodeClass(
        id,
      )}"
      onclick={() => pick(id)}
    >
      <span class="min-w-0">{cell.name}</span>
      {#if cell.level !== 'chuyen-hoa'}
        <span class="rounded-full px-2 py-0.5 text-xs font-semibold {LEVEL_CLASS[cell.level]}">
          {LEVEL_NAMES[cell.level]}
        </span>
      {/if}
    </button>
    {#if cell.children}
      <ul class="mt-1 ml-1.5 space-y-1 border-l-2 border-slate-200 pl-2 sm:ml-3 sm:pl-3">
        {#each cell.children as child (child)}
          {@render node(child)}
        {/each}
      </ul>
    {/if}
  </li>
{/snippet}

<div class="space-y-3">
  <SegmentedControl label="Chế độ" options={modes} bind:value={mode} />

  {#if mode === 'hoc'}
    <FeedbackNote tone="info" text="{cellOf(selectedId).name}: {describe(selectedId)}" />
    <div class="flex flex-wrap items-center gap-2">
      <button type="button" class={button.secondary} disabled={induced} onclick={induce}>
        Giải biệt hoá {cellOf(SKIN_CELL).name.toLowerCase()}
      </button>
      {#if induced}
        <button
          type="button"
          aria-pressed={mark === INDUCED}
          class="min-h-11 rounded-lg border px-3 py-2 text-sm font-semibold transition {focusRing} {nodeClass(
            INDUCED,
          )}"
          onclick={() => pick(INDUCED)}
        >
          {cellOf(INDUCED).name}
        </button>
      {/if}
    </div>
  {:else if quizDone}
    <FeedbackNote
      tone={score === QUESTIONS.length ? 'ok' : 'info'}
      text="Em trả lời đúng {score}/{QUESTIONS.length} câu. Càng ở gần gốc của cây, tế bào càng tạo được nhiều loại tế bào."
    />
    <button type="button" class={button.quiet} onclick={restartQuiz}>Làm lại</button>
  {:else}
    <p class="text-sm font-semibold text-slate-800" aria-live="polite">
      Câu {turn + 1}/{QUESTIONS.length}: {cellOf(question.from).name} có biệt hoá thành
      {cellOf(question.to).name.toLowerCase()} được không?
    </p>
    <div class="flex flex-wrap gap-2">
      <button
        type="button"
        class={button.primary}
        disabled={!!answered}
        onclick={() => answer(true)}
      >
        Được
      </button>
      <button
        type="button"
        class={button.quiet}
        disabled={!!answered}
        onclick={() => answer(false)}
      >
        Không
      </button>
      {#if answered}
        <button type="button" class={button.secondary} onclick={nextQuestion}>Câu tiếp theo</button>
      {/if}
    </div>
    {#if answered}
      <FeedbackNote tone={answered.ok ? 'ok' : 'warn'} text={answered.text} />
    {/if}
  {/if}

  <ul aria-label="Cây biệt hoá tế bào gốc" class="space-y-1">
    {@render node(ROOT)}
  </ul>
</div>
