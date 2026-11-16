<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import {
    ALWAYS,
    CASES,
    START,
    actionOf,
    caseOf,
    checkAnswer,
    next,
    questionOf,
  } from './engine.js';

  const FREE = 'tu-do';
  const caseOptions = [
    ...CASES.map((c) => ({ value: c.id, label: c.name })),
    { value: FREE, label: 'Tự khám phá' },
  ];

  let caseId = $state(/** @type {string} */ (CASES[0].id));
  let node = $state(START);
  /** @type {Array<{ id: string, text: string, yes: boolean }>} */
  let path = $state([]);
  /** @type {{ tone: 'ok' | 'warn' | 'info', text: string } | null} */
  let note = $state(null);

  const current = $derived(caseOf(caseId));
  const question = $derived(questionOf(node));
  const action = $derived(actionOf(node));

  function restart() {
    node = START;
    path = [];
    note = null;
  }

  /** @param {boolean} yes */
  function answer(yes) {
    if (!question) return;
    const r = checkAnswer(current, node, yes);
    if (!r.ok) {
      note = { tone: 'warn', text: r.text };
      return;
    }
    path = [...path, { id: question.id, text: question.text, yes }];
    note = { tone: 'info', text: r.text };
    node = next(node, yes);
  }
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Tình huống"
    options={caseOptions}
    bind:value={caseId}
    onchange={restart}
  />
  {#if current}
    <p class="rounded-xl bg-slate-50 p-3 text-sm text-slate-800">{current.story}</p>
  {:else}
    <p class="rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
      Tự trả lời các câu hỏi để xem mỗi nhánh của cây quyết định dẫn tới cách xử lí nào.
    </p>
  {/if}

  {#if path.length}
    <ol class="space-y-1 text-sm text-slate-700" aria-label="Các câu đã trả lời">
      {#each path as step, k (step.id)}
        <li class="rounded-lg border border-slate-200 px-2 py-1">
          <span class="font-semibold">{k + 1}.</span>
          {step.text}
          <strong class={step.yes ? 'text-indigo-700' : 'text-slate-900'}>
            → {step.yes ? 'Có' : 'Không'}</strong
          >
        </li>
      {/each}
    </ol>
  {/if}

  {#if question}
    <div class="space-y-2 rounded-xl border-2 border-indigo-200 p-3">
      <p class="text-sm font-semibold text-slate-900" aria-live="polite">
        Câu {path.length + 1}: {question.text}
      </p>
      <div class="flex flex-wrap gap-2">
        <button type="button" class={button.primary} onclick={() => answer(true)}>Có</button>
        <button type="button" class={button.secondary} onclick={() => answer(false)}>Không</button>
      </div>
    </div>
  {:else if action}
    <section
      class="space-y-2 rounded-xl border-2 p-3 {action.tone === 'warn'
        ? 'border-rose-300 bg-rose-50'
        : action.tone === 'ok'
          ? 'border-emerald-300 bg-emerald-50'
          : 'border-sky-300 bg-sky-50'}"
      aria-live="polite"
      aria-label="Cách xử lí"
    >
      <h4 class="font-bold text-slate-900">{action.title}</h4>
      <ol class="list-decimal space-y-1 pl-5 text-sm text-slate-800">
        {#each action.steps as s (s)}
          <li>{s}</li>
        {/each}
      </ol>
      <p class="text-sm font-semibold text-slate-800">Trong mọi trường hợp:</p>
      <ul class="list-disc space-y-1 pl-5 text-sm text-slate-800">
        {#each ALWAYS as s (s)}
          <li>{s}</li>
        {/each}
      </ul>
    </section>
  {/if}

  {#if note}
    <FeedbackNote tone={note.tone} text={note.text} />
  {/if}
  <button type="button" class={button.quiet} onclick={restart}>Làm lại từ đầu</button>
  <p class="text-xs text-slate-600">
    Sơ cứu chỉ giúp hạn chế tác hại trước khi có nhân viên y tế; khi nghi ngờ, hãy gọi 115 hoặc đến
    cơ sở y tế.
  </p>
</div>
