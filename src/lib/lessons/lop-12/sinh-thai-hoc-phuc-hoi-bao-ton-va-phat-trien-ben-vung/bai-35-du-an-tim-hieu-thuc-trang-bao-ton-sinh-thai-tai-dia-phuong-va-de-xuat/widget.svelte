<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import {
    NOTE_FIELDS,
    SITES,
    SOLUTIONS,
    TOPICS,
    emptyNote,
    judge,
    missingFields,
    reportText,
  } from './engine.js';

  const steps = [
    { value: 'ban-do', label: '1. Bản đồ mẫu' },
    { value: 'ghi-chu', label: '2. Ghi chú khảo sát' },
    { value: 'bao-cao', label: '3. Báo cáo' },
  ];
  const fieldClass = `min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-normal ${focusRing}`;

  let step = $state('ban-do');
  let siteId = $state(SITES[0].id);
  /** @type {Record<string, string>} */
  let solved = $state({});
  /** @type {{ tone: 'ok' | 'warn' | 'info', text: string } | null} */
  let verdict = $state(null);
  let notes = $state([emptyNote()]);
  let copied = $state('');

  const site = $derived(SITES.find((s) => s.id === siteId) ?? SITES[0]);
  const solvedCount = $derived(Object.keys(solved).length);
  const report = $derived(reportText(notes));

  /** @param {string} id */
  function chooseSite(id) {
    siteId = id;
    verdict = null;
  }

  /** @param {string} solutionId */
  function propose(solutionId) {
    const out = judge(siteId, solutionId);
    if (out.grade === 'best') solved[siteId] = solutionId;
    verdict = {
      tone: out.grade === 'best' ? 'ok' : out.grade === 'also' ? 'info' : 'warn',
      text: out.text,
    };
  }

  /** @param {number} i */
  function noteStatus(i) {
    const left = missingFields(notes[i]);
    return left.length === 0
      ? { tone: /** @type {const} */ ('ok'), text: 'Đã đủ thông tin cho điểm khảo sát này.' }
      : { tone: /** @type {const} */ ('info'), text: `Còn thiếu: ${left.join(', ')}.` };
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(report);
      copied = 'Đã sao chép bản báo cáo.';
    } catch {
      copied = 'Trình duyệt không cho phép sao chép tự động. Hãy chọn đoạn chữ và sao chép.';
    }
  }
</script>

<div class="space-y-3">
  <SegmentedControl label="Bước của dự án" options={steps} bind:value={step} />

  {#if step === 'ban-do'}
    <p class="text-sm text-slate-700">
      Đây là một xã ven biển giả định để luyện tập. Chạm vào một địa điểm, đọc thực trạng rồi chọn
      giải pháp bảo tồn đánh vào nguyên nhân chính. Đã đề xuất đúng {solvedCount}/{SITES.length} địa điểm.
    </p>
    <div class="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-emerald-50">
      <svg
        viewBox="0 0 400 300"
        class="absolute inset-0 h-full w-full"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <path d="M0 0 L170 0 C140 60 120 100 0 120 Z" fill="#bbf7d0" />
        <path d="M230 0 L400 0 L400 110 C330 100 260 70 230 0 Z" fill="#fde68a" />
        <path
          d="M200 0 C190 70 230 110 180 160 C140 200 200 230 190 300"
          fill="none"
          stroke="#7dd3fc"
          stroke-width="16"
        />
        <ellipse cx="70" cy="215" rx="58" ry="34" fill="#a5f3fc" />
        <path d="M0 270 C120 250 260 262 400 240 L400 300 L0 300 Z" fill="#bae6fd" />
        <path d="M0 150 C110 140 250 170 400 140" fill="none" stroke="#cbd5e1" stroke-width="6" />
      </svg>
      {#each SITES as s, i (s.id)}
        <button
          type="button"
          class="absolute flex min-h-11 min-w-11 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-lg border-2 px-1 py-0.5 text-xs font-semibold shadow-sm {focusRing} {siteId ===
          s.id
            ? 'border-indigo-600 bg-indigo-600 text-white'
            : solved[s.id]
              ? 'border-emerald-600 bg-emerald-100 text-emerald-900'
              : 'border-slate-400 bg-white text-slate-900'}"
          style:left="{s.left}%"
          style:top="{s.top}%"
          aria-pressed={siteId === s.id}
          aria-label="{s.name}{solved[s.id] ? ', đã đề xuất đúng' : ''}"
          onclick={() => chooseSite(s.id)}
        >
          <span aria-hidden="true">{solved[s.id] ? '✓' : i + 1}</span>
          <span class="max-w-20 leading-tight" aria-hidden="true">{s.name}</span>
        </button>
      {/each}
    </div>

    <div class="rounded-xl bg-slate-50 p-3 text-sm text-slate-800" aria-live="polite">
      <p class="font-bold text-slate-900">{site.name}</p>
      <p>{site.problem}</p>
    </div>
    <ul class="grid gap-2" aria-label="Các giải pháp để chọn cho {site.name}">
      {#each SOLUTIONS as sol (sol.id)}
        <li>
          <button
            type="button"
            class="min-h-11 w-full rounded-lg border px-3 py-2 text-left text-sm font-medium {focusRing} {solved[
              siteId
            ] === sol.id
              ? 'border-emerald-600 bg-emerald-50 text-emerald-900'
              : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'}"
            onclick={() => propose(sol.id)}
          >
            {sol.name}
          </button>
        </li>
      {/each}
    </ul>
    {#if verdict}
      <FeedbackNote tone={verdict.tone} text={verdict.text} />
    {/if}
  {:else if step === 'ghi-chu'}
    <p class="text-sm text-slate-700">
      Ghi lại những điểm nhóm em thực sự đến khảo sát. Ghi chú chỉ nằm trên trang này, sẽ mất khi
      tải lại trang, nên hãy sao chép ở bước Báo cáo.
    </p>
    {#each notes as note, i (i)}
      {@const status = noteStatus(i)}
      <fieldset class="space-y-2 rounded-xl border border-slate-200 bg-white p-3">
        <legend class="px-1 text-sm font-bold text-slate-900">Điểm khảo sát {i + 1}</legend>
        <label class="block text-sm font-semibold text-slate-700">
          Tên địa điểm
          <input
            type="text"
            class="mt-1 {fieldClass}"
            placeholder="Ví dụ: rừng ngập mặn ven đê"
            bind:value={note.place}
          />
        </label>
        <label class="block text-sm font-semibold text-slate-700">
          Chủ đề
          <select class="mt-1 {fieldClass}" bind:value={note.topic}>
            {#each TOPICS as t (t)}
              <option value={t}>{t}</option>
            {/each}
          </select>
        </label>
        {#each NOTE_FIELDS as field (field.id)}
          <label class="block text-sm font-semibold text-slate-700">
            {field.name}
            <textarea
              class="mt-1 min-h-16 {fieldClass}"
              placeholder={field.hint}
              bind:value={note.fields[field.id]}></textarea>
          </label>
        {/each}
        <FeedbackNote tone={status.tone} text={status.text} />
      </fieldset>
    {/each}
    <button type="button" class={button.secondary} onclick={() => notes.push(emptyNote())}>
      Thêm một điểm khảo sát
    </button>
  {:else}
    <pre
      class="overflow-x-auto rounded-xl bg-slate-50 p-3 text-xs whitespace-pre-wrap text-slate-800">{report}</pre>
    <button type="button" class={button.secondary} onclick={copy}>Sao chép bản báo cáo</button>
    {#if copied}
      <p class="text-sm text-slate-700" aria-live="polite">{copied}</p>
    {/if}
  {/if}
</div>
