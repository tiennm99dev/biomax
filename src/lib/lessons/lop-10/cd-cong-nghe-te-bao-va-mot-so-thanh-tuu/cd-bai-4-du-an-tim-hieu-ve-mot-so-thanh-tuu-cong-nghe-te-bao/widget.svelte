<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing, textInput } from '#lib/core/ui.js';
  import {
    CRITERIA,
    FIRST_YEAR,
    LAST_YEAR,
    TASKS,
    TOPICS,
    addMilestone,
    removeMilestone,
    reportText,
    reviewTimeline,
    rubricNote,
    rubricTotal,
    timeline,
  } from './engine.js';

  /** @typedef {import('./engine.js').Milestone} Milestone */

  const steps = [
    { value: 'ke-hoach', label: '1. Kế hoạch' },
    { value: 'dong-thoi-gian', label: '2. Dòng thời gian' },
    { value: 'danh-gia', label: '3. Tự đánh giá' },
    { value: 'bao-cao', label: '4. Bản tổng hợp' },
  ];
  const topicOptions = TOPICS.map((t) => ({ value: t.id, label: t.name }));
  const filterOptions = [{ value: 'all', label: 'Tất cả' }, ...topicOptions];
  const smallInput = `min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm ${focusRing}`;

  /** @type {Record<string, string>} */
  const TOPIC_DOT = {
    'y-hoc': 'bg-rose-500',
    'nong-nghiep': 'bg-emerald-600',
    'nhan-ban': 'bg-indigo-600',
    'thuc-pham': 'bg-amber-500',
  };

  let step = $state('ke-hoach');
  let topicId = $state(TOPICS[0].id);
  let members = $state(TASKS.map(() => ''));
  let filter = $state('all');
  /** @type {Milestone[]} */
  let own = $state([]);
  let draft = $state({ year: '', name: '', topic: TOPICS[0].id, source: '' });
  /** @type {{ field: string, text: string } | null} */
  let error = $state(null);
  /** @type {Record<string, number>} */
  let chosen = $state({});
  let copied = $state('');

  const topic = $derived(TOPICS.find((t) => t.id === topicId) ?? TOPICS[0]);
  const rows = $derived(timeline(own, filter));
  const timelineNote = $derived(reviewTimeline(own, topicId));
  const rubric = $derived(rubricNote(chosen));
  const report = $derived(reportText({ topic: topicId, members, own, chosen }));

  function changeTopic() {
    draft.topic = topicId;
  }

  function add() {
    const out = addMilestone(own, draft);
    if (out.ok) {
      own = out.own;
      draft = { year: '', name: '', topic: draft.topic, source: '' };
      error = null;
      filter = 'all';
    } else {
      error = { field: out.field, text: out.text };
    }
  }

  /** @param {string} id */
  function remove(id) {
    own = removeMilestone(own, id);
  }

  /** @param {string} id */
  function nameOfTopic(id) {
    return (TOPICS.find((t) => t.id === id) ?? TOPICS[0]).name;
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(report);
      copied = 'Đã sao chép bản tổng hợp.';
    } catch {
      copied = 'Trình duyệt không cho phép sao chép tự động. Hãy chọn đoạn chữ và sao chép.';
    }
  }
</script>

<div class="space-y-3">
  <SegmentedControl label="Bước của dự án" options={steps} bind:value={step} />

  {#if step === 'ke-hoach'}
    <SegmentedControl
      label="Chủ đề của nhóm"
      options={topicOptions}
      bind:value={topicId}
      onchange={changeTopic}
    />
    <div class="rounded-xl bg-slate-50 p-3 text-sm text-slate-800">
      <p><strong>{topic.name}:</strong> {topic.examples}.</p>
      <p class="mt-2 font-semibold">Câu hỏi định hướng</p>
      <ul class="mt-1 list-disc space-y-1 pl-5">
        {#each topic.questions as q (q)}
          <li>{q}</li>
        {/each}
      </ul>
    </div>
    <fieldset class="space-y-2">
      <legend class="text-sm font-semibold text-slate-700">Bảng phân công</legend>
      {#each TASKS as task, i (task)}
        <label class="block text-sm text-slate-700">
          {task}
          <input
            type="text"
            class="mt-1 {smallInput}"
            placeholder="Tên thành viên"
            bind:value={members[i]}
          />
        </label>
      {/each}
    </fieldset>
  {:else if step === 'dong-thoi-gian'}
    <SegmentedControl label="Xem theo chủ đề" options={filterOptions} bind:value={filter} />

    <ol class="space-y-2 border-l-2 border-slate-300 pl-4" aria-label="Dòng thời gian thành tựu">
      {#each rows as m (m.id)}
        <li class="relative rounded-lg bg-white p-2 text-sm shadow-sm">
          <span
            class="absolute top-3.5 -left-[1.4rem] size-3 rounded-full {TOPIC_DOT[m.topic]}"
            aria-hidden="true"
          ></span>
          <div class="flex flex-wrap items-baseline justify-between gap-x-2">
            <span class="font-bold text-slate-900 tabular-nums">{m.year}</span>
            <span class="text-xs text-slate-600">
              {nameOfTopic(m.topic)}{m.own ? ', mốc của em' : ''}
            </span>
          </div>
          <p class="text-slate-800">{m.name}</p>
          {#if m.own}
            <p class="text-xs text-slate-600">Nguồn: {m.source}</p>
            <button
              type="button"
              class="mt-1 min-h-11 text-sm font-semibold text-rose-700 underline {focusRing}"
              aria-label="Xoá mốc {m.year}: {m.name}"
              onclick={() => remove(m.id)}>Xoá mốc</button
            >
          {/if}
        </li>
      {/each}
    </ol>

    <FeedbackNote tone={timelineNote.tone} text={timelineNote.text} />

    <form
      class="space-y-2 rounded-xl border border-slate-200 bg-white p-3"
      onsubmit={(e) => {
        e.preventDefault();
        add();
      }}
    >
      <p class="text-sm font-bold text-slate-900">Thêm một mốc em tìm được</p>
      <div class="grid gap-2 sm:grid-cols-[7rem_1fr]">
        <label class="block text-sm font-semibold text-slate-700">
          Năm
          <input
            type="text"
            inputmode="numeric"
            maxlength="4"
            class="mt-1 {textInput}"
            aria-invalid={error?.field === 'year'}
            bind:value={draft.year}
          />
        </label>
        <label class="block text-sm font-semibold text-slate-700">
          Chủ đề
          <select class="mt-1 {smallInput}" bind:value={draft.topic}>
            {#each TOPICS as t (t.id)}
              <option value={t.id}>{t.name}</option>
            {/each}
          </select>
        </label>
      </div>
      <label class="block text-sm font-semibold text-slate-700">
        Thành tựu
        <input
          type="text"
          class="mt-1 {smallInput}"
          aria-invalid={error?.field === 'name'}
          bind:value={draft.name}
        />
      </label>
      <label class="block text-sm font-semibold text-slate-700">
        Nguồn thông tin
        <input
          type="text"
          class="mt-1 {smallInput}"
          aria-invalid={error?.field === 'source'}
          bind:value={draft.source}
        />
      </label>
      <p class="text-xs text-slate-600">Năm trong khoảng {FIRST_YEAR} đến {LAST_YEAR}.</p>
      {#if error}
        <FeedbackNote tone="warn" text={error.text} />
      {/if}
      <button type="submit" class={button.primary}>Thêm vào dòng thời gian</button>
    </form>
  {:else if step === 'danh-gia'}
    {#each CRITERIA as c (c.id)}
      <fieldset class="rounded-xl border border-slate-200 bg-white p-3">
        <legend class="px-1 text-sm font-bold text-slate-900">{c.name}</legend>
        <div class="grid gap-1">
          {#each c.levels as level (level.points)}
            <label
              class="flex min-h-11 cursor-pointer items-center gap-3 rounded-lg px-2 py-1 text-sm text-slate-800 hover:bg-slate-50"
            >
              <input
                type="radio"
                class="size-5 shrink-0 {focusRing}"
                name={c.id}
                value={level.points}
                bind:group={chosen[c.id]}
              />
              <span class="min-w-0 flex-1">{level.text}</span>
              <span class="font-semibold text-slate-700 tabular-nums">
                {formatNumber(level.points)} đ
              </span>
            </label>
          {/each}
        </div>
      </fieldset>
    {/each}
    <p class="text-sm font-semibold text-slate-800 tabular-nums">
      Tổng hiện tại: {formatNumber(rubricTotal(chosen))}/10 điểm
    </p>
    <FeedbackNote tone={rubric.tone} text={rubric.text} />
  {:else}
    <p class="text-sm text-slate-700">
      Trang không lưu lại những gì em nhập. Hãy sao chép bản tổng hợp này vào tài liệu của nhóm
      trước khi rời trang.
    </p>
    <label class="block text-sm font-semibold text-slate-700">
      Bản tổng hợp dự án
      <textarea
        readonly
        rows="12"
        class="mt-1 w-full rounded-lg border border-slate-300 bg-slate-50 p-3 font-mono text-xs text-slate-800 {focusRing}"
        value={report}></textarea>
    </label>
    <button type="button" class={button.secondary} onclick={copy}>Sao chép</button>
    <p class="text-sm text-slate-600" aria-live="polite">{copied}</p>
  {/if}
</div>
