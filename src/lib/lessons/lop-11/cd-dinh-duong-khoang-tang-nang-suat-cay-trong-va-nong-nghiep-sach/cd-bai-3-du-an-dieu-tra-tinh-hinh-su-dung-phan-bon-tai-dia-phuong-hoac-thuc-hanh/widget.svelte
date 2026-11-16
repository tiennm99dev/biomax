<script>
  import { formatNumber } from '#lib/core/number-format.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import Stepper from '#lib/core/stepper.svelte';
  import { button } from '#lib/core/ui.js';
  import BarChart from '#lib/core/visuals/bar-chart.svelte';
  import {
    MAX_COUNT,
    QUESTIONS,
    emptyTally,
    observations,
    questionOf,
    sampleTally,
    shares,
    totalOf,
  } from './engine.js';

  const tabs = QUESTIONS.map((q) => ({ value: q.id, label: q.tab }));
  /** @type {Record<string, string>} */
  const TONE = { true: '#059669', false: '#dc2626', null: '#64748b' };

  let qid = $state(QUESTIONS[0].id);
  let tally = $state(emptyTally());
  let usingSample = $state(false);

  const question = $derived(questionOf(qid));
  const rows = $derived(shares(tally, qid));
  const total = $derived(totalOf(tally, qid));
  const chart = $derived(
    rows.map((a) => ({ label: a.short, value: a.share, color: TONE[String(a.good)] })),
  );
  const notes = $derived(observations(tally));

  function useSample() {
    tally = sampleTally();
    usingSample = true;
  }

  function clear() {
    tally = emptyTally();
    usingSample = false;
  }
</script>

<div class="space-y-3">
  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.secondary} onclick={useSample}>Dùng số liệu mẫu</button>
    <button type="button" class={button.quiet} onclick={clear}>Xoá số liệu</button>
  </div>
  {#if usingSample}
    <p class="text-xs text-slate-600">
      Số liệu mẫu của 20 hộ là số liệu tự đặt để luyện cách xử lí; hãy thay bằng kết quả điều tra
      thật của nhóm.
    </p>
  {/if}

  <SegmentedControl label="Câu hỏi trong phiếu khảo sát" options={tabs} bind:value={qid} />
  <p class="text-sm font-semibold text-slate-800">{question.text}</p>

  <ul class="space-y-2" aria-label="Số hộ chọn mỗi câu trả lời">
    {#each question.answers as answer (answer.id)}
      <li class="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-slate-50 p-2">
        <span class="min-w-0 flex-1 text-sm text-slate-800">{answer.text}</span>
        <Stepper
          label="Số hộ chọn: {answer.text}"
          bind:value={tally[qid][answer.id]}
          min={0}
          max={MAX_COUNT}
          format={(v) => `${formatNumber(v)} hộ`}
        />
      </li>
    {/each}
  </ul>

  <p class="text-sm text-slate-700">
    Tổng số phiếu của câu này: <strong>{formatNumber(total)}</strong>
  </p>

  {#if total > 0}
    <BarChart
      data={chart}
      max={100}
      unit="Tỉ lệ (%)"
      title="Tỉ lệ các câu trả lời: {question.tab}"
      height={260}
    />
    <p class="text-xs text-slate-600">
      Cột xanh: phù hợp với nông nghiệp sạch; cột đỏ: chưa phù hợp; cột xám: cần tìm hiểu thêm.
    </p>
  {/if}

  <section aria-label="Nhận xét tự động cho báo cáo" class="space-y-2">
    <h4 class="text-sm font-bold text-slate-800">Nhận xét cho báo cáo</h4>
    <ul class="space-y-2">
      {#each notes as note, i (i)}
        <li
          class="rounded-xl px-4 py-3 text-sm font-semibold {note.tone === 'ok'
            ? 'bg-emerald-50 text-emerald-800'
            : note.tone === 'warn'
              ? 'bg-amber-50 text-amber-900'
              : 'bg-slate-100 text-slate-700'}"
        >
          {note.text}
        </li>
      {/each}
    </ul>
  </section>
</div>
