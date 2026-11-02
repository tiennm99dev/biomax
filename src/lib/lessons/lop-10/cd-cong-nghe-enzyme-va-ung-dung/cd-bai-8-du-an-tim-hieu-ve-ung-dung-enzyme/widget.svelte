<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import {
    FACTORS,
    MAX_SCORE,
    REPEATS,
    STAINS,
    TASKS,
    WASHES,
    checkPlan,
    emptyScores,
    proposalNote,
    readScore,
    reportText,
    resultNote,
    resultRows,
    sampleScores,
    scoreKey,
    scoreText,
  } from './engine.js';

  const steps = [
    { value: 'ke-hoach', label: '1. Phân công' },
    { value: 'bo-tri', label: '2. Bố trí' },
    { value: 'ket-qua', label: '3. Kết quả' },
    { value: 'bao-cao', label: '4. Đề xuất' },
  ];
  const choices = [
    { value: 'giu', label: 'Giữ nguyên' },
    { value: 'doi', label: 'Thay đổi' },
  ];
  const smallInput = `min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm ${focusRing}`;

  let step = $state('ke-hoach');
  let members = $state(TASKS.map(() => ''));
  /** @type {Record<string, string | number>} */
  let plan = $state(Object.fromEntries(FACTORS.map((f) => [f.id, ''])));
  let scores = $state(emptyScores());
  let usingSample = $state(false);
  let proposal = $state('');
  let copied = $state('');

  const planNote = $derived(checkPlan(plan));
  const rows = $derived(resultRows(scores));
  const note = $derived(resultNote(scores));
  const idea = $derived(proposalNote(proposal));
  const report = $derived(reportText({ members, scores, proposal }));

  function fillSample() {
    scores = sampleScores();
    usingSample = true;
  }

  function clearScores() {
    scores = emptyScores();
    usingSample = false;
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
    <div class="rounded-xl bg-slate-50 p-3 text-sm text-slate-800">
      <p class="font-semibold">Câu hỏi của dự án</p>
      <p class="mt-1">
        Bột giặt có enzyme có giặt sạch hơn bột giặt không có enzyme không, và với loại vết bẩn nào?
      </p>
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
  {:else if step === 'bo-tri'}
    <p class="text-sm text-slate-700">
      Một thí nghiệm công bằng chỉ thay đổi một yếu tố. Với từng yếu tố, em giữ nguyên hay thay đổi?
    </p>
    <ul class="space-y-2">
      {#each FACTORS as factor (factor.id)}
        <li class="rounded-xl border border-slate-200 bg-white p-3">
          <SegmentedControl label={factor.name} options={choices} bind:value={plan[factor.id]} />
        </li>
      {/each}
    </ul>
    <FeedbackNote tone={planNote.tone} text={planNote.text} />
  {:else if step === 'ket-qua'}
    <p class="text-sm text-slate-700">
      Chấm độ sạch của mỗi mảnh vải từ 0 (không sạch hơn) đến {MAX_SCORE} (sạch hoàn toàn). Mỗi nhóm giặt
      {REPEATS} mảnh.
    </p>
    <div class="flex flex-wrap gap-2">
      <button type="button" class={button.quiet} onclick={fillSample}>Điền số liệu mẫu</button>
      <button type="button" class={button.quiet} onclick={clearScores}>Xoá số liệu</button>
    </div>
    {#if usingSample}
      <p class="text-xs font-semibold text-amber-900">
        Đây là số liệu mẫu để xem cách đọc bảng, không phải kết quả thí nghiệm thật. Hãy thay bằng
        số liệu của nhóm em.
      </p>
    {/if}

    {#each STAINS as stain (stain.id)}
      <fieldset class="rounded-xl border border-slate-200 bg-white p-3">
        <legend class="px-1 text-sm font-bold text-slate-900">
          {stain.name} ({stain.substance})
        </legend>
        {#each WASHES as wash (wash.id)}
          <div class="mt-2">
            <p class="text-sm font-semibold text-slate-700">{wash.name}</p>
            <div class="mt-1 grid grid-cols-3 gap-2">
              {#each scores[scoreKey(stain.id, wash.id)] as _, i (i)}
                {@const text = scores[scoreKey(stain.id, wash.id)][i]}
                <input
                  type="text"
                  inputmode="decimal"
                  class="{smallInput} text-center tabular-nums {text.trim() !== '' &&
                  readScore(text) === null
                    ? 'border-rose-500'
                    : ''}"
                  aria-label="{stain.name}, {wash.name}, lần {i + 1}"
                  placeholder="Lần {i + 1}"
                  bind:value={scores[scoreKey(stain.id, wash.id)][i]}
                />
              {/each}
            </div>
          </div>
        {/each}
      </fieldset>
    {/each}

    <div class="overflow-x-auto">
      <table class="w-full min-w-72 text-left text-sm">
        <caption class="mb-1 text-left font-semibold text-slate-800">
          Bảng so sánh: điểm trung bình độ sạch
        </caption>
        <thead>
          <tr class="border-b border-slate-300 text-slate-700">
            <th scope="col" class="py-1 pr-2">Vết bẩn</th>
            <th scope="col" class="py-1 pr-2">Có enzyme</th>
            <th scope="col" class="py-1 pr-2">Không có enzyme</th>
            <th scope="col" class="py-1">Chênh lệch</th>
          </tr>
        </thead>
        <tbody>
          {#each rows as row (row.stain.id)}
            <tr class="border-b border-slate-100 tabular-nums text-slate-800">
              <th scope="row" class="py-1 pr-2 font-medium">{row.stain.name}</th>
              <td class="py-1 pr-2">{scoreText(row.withEnzyme)}</td>
              <td class="py-1 pr-2">{scoreText(row.without)}</td>
              <td class="py-1">{scoreText(row.gap)}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>

    <FeedbackNote tone={note.tone} text={note.text} />

    <figure class="rounded-xl bg-slate-50 p-3">
      <figcaption class="text-sm font-semibold text-slate-800">
        Biểu đồ điểm trung bình độ sạch (tối đa {MAX_SCORE} điểm)
      </figcaption>
      {#each rows as row (row.stain.id)}
        <p class="mt-3 text-sm font-medium text-slate-800">{row.stain.name}</p>
        {#each [{ name: 'Có enzyme', value: row.withEnzyme, color: 'bg-emerald-600' }, { name: 'Không có enzyme', value: row.without, color: 'bg-slate-400' }] as bar (bar.name)}
          <div class="mt-1 flex items-center gap-2 text-xs text-slate-700">
            <span class="w-28 shrink-0">{bar.name}</span>
            <span class="h-3 min-w-0 flex-1 rounded bg-slate-200" aria-hidden="true">
              <span
                class="block h-3 rounded {bar.color}"
                style:width="{((bar.value ?? 0) / MAX_SCORE) * 100}%"
              ></span>
            </span>
            <span class="w-9 shrink-0 text-right font-semibold tabular-nums"
              >{scoreText(bar.value)}</span
            >
          </div>
        {/each}
      {/each}
    </figure>
  {:else}
    <label class="block text-sm font-semibold text-slate-700">
      Đề xuất một ứng dụng đơn giản của enzyme
      <textarea
        class="mt-1 min-h-24 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-normal {focusRing}"
        placeholder="Ví dụ: ngâm áo dính vết sữa với bột giặt có protease trong nước ấm khoảng 30 °C."
        bind:value={proposal}></textarea>
    </label>
    <FeedbackNote tone={idea.tone} text={idea.text} />
    <pre
      class="overflow-x-auto rounded-xl bg-slate-50 p-3 text-xs whitespace-pre-wrap text-slate-800">{report}</pre>
    <button type="button" class={button.secondary} onclick={copy}>Sao chép bản tổng hợp</button>
    {#if copied}
      <p class="text-sm text-slate-700" aria-live="polite">{copied}</p>
    {/if}
  {/if}
</div>
