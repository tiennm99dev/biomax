<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import Stepper from '#lib/core/stepper.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import {
    BAD_QUESTIONS,
    TOPICS,
    percentText,
    questionsFor,
    readResult,
    reviewForm,
    reviewNote,
    sampleCounts,
  } from './engine.js';

  /** The most forms the tool tallies. */
  const MAX_FORMS = 200;

  const stepOptions = [
    { value: 'lap-phieu', label: '1. Lập phiếu' },
    { value: 'ket-qua', label: '2. Nhập kết quả, xem biểu đồ' },
  ];
  const topicOptions = TOPICS.map((t) => ({ value: t.id, label: t.name }));

  let step = $state('lap-phieu');
  let topicId = $state(TOPICS[0].id);
  /** @type {string[]} */
  let chosen = $state(['da-mac']);
  let forms = $state(40);
  /** @type {Record<string, number[]>} */
  let tally = $state({});
  /** @type {string | null} */
  let openId = $state(null);

  const topic = $derived(TOPICS.find((t) => t.id === topicId) ?? TOPICS[0]);
  const questions = $derived(questionsFor(topic));
  /** The bank in a fixed mixed order, so bad questions do not stand apart. */
  const bank = $derived([
    questions[1],
    BAD_QUESTIONS[0],
    questions[3],
    questions[0],
    BAD_QUESTIONS[2],
    questions[2],
    BAD_QUESTIONS[1],
    questions[4],
  ]);
  const review = $derived(reviewForm(chosen, questions));
  const note = $derived(reviewNote(review));
  const asked = $derived(questions.filter((q) => chosen.includes(q.id)));
  const current = $derived(asked.find((q) => q.id === openId) ?? asked[0] ?? null);
  const counts = $derived(current ? (tally[current.id] ?? current.options.map(() => 0)) : []);
  const reading = $derived(
    current
      ? readResult(current, counts, forms)
      : { tone: /** @type {const} */ ('info'), text: 'Phiếu chưa có câu hỏi nào.' },
  );
  const axisTop = $derived(Math.max(1, forms));
  const questionOptions = $derived(asked.map((q, i) => ({ value: q.id, label: `Câu ${i + 1}` })));

  /** @param {string} id */
  function toggle(id) {
    chosen = chosen.includes(id) ? chosen.filter((x) => x !== id) : [...chosen, id];
  }

  function changeTopic() {
    tally = {};
    openId = null;
  }

  /** @param {number} index @param {number} value */
  function setCount(index, value) {
    if (!current) return;
    const next = [...counts];
    next[index] = value;
    tally = { ...tally, [current.id]: next };
  }

  /** @param {number} value */
  function setForms(value) {
    forms = value;
    tally = Object.fromEntries(
      Object.entries(tally).map(([id, list]) => [id, list.map((c) => Math.min(c, value))]),
    );
  }

  function fillSample() {
    tally = Object.fromEntries(asked.map((q) => [q.id, sampleCounts(q, forms)]));
  }

  function clearTally() {
    tally = {};
  }
</script>

<div class="space-y-3">
  <SegmentedControl label="Bước" options={stepOptions} bind:value={step} />
  <SegmentedControl
    label="Bệnh cần điều tra"
    options={topicOptions}
    bind:value={topicId}
    onchange={changeTopic}
  />

  <p class="rounded-xl bg-slate-50 px-4 py-2 text-sm text-slate-700">
    <strong>{topic.name}</strong>: tác nhân là {topic.virus.toLowerCase()}; vật trung gian: {topic.carrier.toLowerCase()}.
  </p>

  {#if step === 'lap-phieu'}
    <fieldset class="space-y-2">
      <legend class="text-sm font-semibold text-slate-700">
        Chọn các câu hỏi đưa vào phiếu điều tra
      </legend>
      {#each bank as q (q.id)}
        <label
          class="flex min-h-11 cursor-pointer items-start gap-3 rounded-xl border px-3 py-2 text-sm transition {chosen.includes(
            q.id,
          )
            ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
            : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'}"
        >
          <input
            type="checkbox"
            class="mt-0.5 size-5 shrink-0 {focusRing}"
            checked={chosen.includes(q.id)}
            onchange={() => toggle(q.id)}
          />
          <span>{q.text}</span>
        </label>
      {/each}
    </fieldset>

    <FeedbackNote tone={note.tone} text={note.text} />

    {#if asked.length > 0}
      <div class="rounded-2xl border border-slate-200 bg-white p-4 text-sm">
        <p class="font-bold text-slate-900">Phiếu điều tra bệnh {topic.name.toLowerCase()}</p>
        <ol class="mt-2 list-decimal space-y-2 pl-5 text-slate-800">
          {#each asked as q (q.id)}
            <li>
              {q.text}
              <ul class="mt-1 space-y-0.5 text-slate-600">
                {#each q.options as o (o.text)}
                  <li>{q.multiple ? '☐' : '○'} {o.text}</li>
                {/each}
              </ul>
            </li>
          {/each}
        </ol>
      </div>
    {/if}
  {:else if current === null}
    <FeedbackNote
      tone="info"
      text="Phiếu chưa có câu hỏi nào. Hãy quay lại bước 1 để chọn câu hỏi."
    />
  {:else}
    <div class="flex flex-wrap items-end gap-3">
      <Stepper
        label="Số phiếu thu được"
        bind:value={forms}
        min={0}
        max={MAX_FORMS}
        onchange={setForms}
      />
      <button type="button" class={button.quiet} onclick={fillSample}>Điền số liệu mẫu</button>
      <button type="button" class={button.quiet} onclick={clearTally}>Xoá số liệu</button>
    </div>
    <p class="text-sm text-slate-600">
      Số liệu mẫu do công cụ giả định để thử biểu đồ; khi làm thật, hãy nhập số liệu em đã điều tra.
    </p>

    {#if asked.length > 1}
      <SegmentedControl
        label="Câu hỏi"
        options={questionOptions}
        value={current.id}
        onchange={(value) => (openId = String(value))}
      />
    {/if}

    <p class="text-sm font-semibold text-slate-800">{current.text}</p>
    <ul class="space-y-3" aria-label="Kết quả của câu hỏi">
      {#each current.options as o, i (o.text)}
        <li class="rounded-xl bg-slate-50 p-3">
          <Stepper
            label={o.text}
            value={counts[i]}
            min={0}
            max={forms}
            onchange={(v) => setCount(i, v)}
          />
          <div class="mt-2 flex items-center gap-2">
            <div class="h-4 min-w-0 flex-1 rounded bg-slate-200" aria-hidden="true">
              <div
                class="h-4 rounded {o.right === false ? 'bg-amber-500' : 'bg-indigo-600'}"
                style:width="{(counts[i] / axisTop) * 100}%"
              ></div>
            </div>
            <span class="w-14 shrink-0 text-right text-sm font-semibold text-slate-800">
              {percentText(counts[i], forms)}
            </span>
          </div>
        </li>
      {/each}
    </ul>

    <FeedbackNote tone={reading.tone} text={reading.text} />
  {/if}
</div>
