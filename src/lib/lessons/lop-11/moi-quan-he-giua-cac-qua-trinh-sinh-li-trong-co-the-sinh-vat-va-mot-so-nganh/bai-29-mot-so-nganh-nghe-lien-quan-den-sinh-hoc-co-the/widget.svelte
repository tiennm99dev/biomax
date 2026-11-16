<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { button, focusRing } from '#lib/core/ui.js';
  import { FIELDS, FIELD_ORDER, QUESTIONS, adviceText, scores, topFields } from './engine.js';

  /** @typedef {import('./engine.js').Field} Field */

  /** @type {Record<string, Field>} */
  let answers = $state({});

  const shown = QUESTIONS.map((q, i) => ({ ...q, choices: shuffled(q.choices, 29 + i * 7) }));
  const done = $derived(QUESTIONS.every((q) => answers[q.id]));
  const points = $derived(scores(answers));
  const top = $derived(done ? topFields(answers) : []);
  const uid = $props.id();
</script>

<div class="space-y-4">
  {#each shown as q, qi (q.id)}
    <fieldset class="min-w-0 rounded-xl bg-slate-50 p-3">
      <legend class="sr-only">Câu {qi + 1}. {q.prompt}</legend>
      <p class="mb-2 text-sm font-semibold text-slate-800" aria-hidden="true">
        Câu {qi + 1}. {q.prompt}
      </p>
      <div class="grid gap-2 sm:grid-cols-2">
        {#each q.choices as c (c.field)}
          <label
            class="flex min-h-11 cursor-pointer items-center gap-2 rounded-lg border bg-white px-3 py-2 text-sm has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-indigo-500 {answers[
              q.id
            ] === c.field
              ? 'border-indigo-600'
              : 'border-slate-200'}"
          >
            <input
              type="radio"
              class="h-4 w-4 shrink-0 accent-indigo-600"
              name="{uid}-{q.id}"
              value={c.field}
              checked={answers[q.id] === c.field}
              onchange={() => (answers = { ...answers, [q.id]: c.field })}
            />
            {c.text}
          </label>
        {/each}
      </div>
    </fieldset>
  {/each}

  <div class="space-y-1" aria-label="Điểm theo nhóm ngành" role="group">
    {#each FIELD_ORDER as f (f)}
      <div class="flex items-center gap-2 text-sm">
        <span class="w-36 shrink-0 text-slate-700 sm:w-48">{FIELDS[f].name}</span>
        <div class="h-3 flex-1 overflow-hidden rounded-full bg-slate-100" aria-hidden="true">
          <div
            class="h-full rounded-full {top.includes(f) ? 'bg-indigo-600' : 'bg-indigo-300'}"
            style="width: {(points[f] / QUESTIONS.length) * 100}%"
          ></div>
        </div>
        <span class="w-10 text-right tabular-nums">{points[f]}/{QUESTIONS.length}</span>
      </div>
    {/each}
  </div>

  <FeedbackNote tone={done ? 'ok' : 'info'} text={adviceText(answers)} />

  {#if done}
    {#each top as f (f)}
      <section class="rounded-xl border border-indigo-200 bg-indigo-50 p-3 text-sm text-slate-800">
        <h4 class="mb-1 font-semibold text-indigo-900">{FIELDS[f].name}</h4>
        <p><strong>Nghề tiêu biểu:</strong> {FIELDS[f].careers}.</p>
        <p><strong>Kiến thức sinh học cơ thể được ứng dụng:</strong> {FIELDS[f].knowledge}.</p>
        <p><strong>Nơi làm việc:</strong> {FIELDS[f].workplaces}.</p>
      </section>
    {/each}
    <button type="button" class="{button.quiet} {focusRing}" onclick={() => (answers = {})}
      >Làm lại</button
    >
  {/if}
</div>
