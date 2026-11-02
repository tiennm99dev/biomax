<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import {
    NOTE_FIELDS,
    SITES,
    TECHS,
    efficiencyNote,
    emptyNote,
    missingFields,
    placeTech,
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
  let placed = $state({});
  /** @type {{ tone: 'ok' | 'warn' | 'info', text: string } | null} */
  let verdict = $state(null);
  let notes = $state([emptyNote()]);
  let before = $state('');
  let after = $state('');
  let copied = $state('');

  const site = $derived(SITES.find((s) => s.id === siteId) ?? SITES[0]);
  const solvedCount = $derived(SITES.filter((s) => placed[s.id] === s.best).length);
  const calc = $derived(efficiencyNote(before, after));
  const report = $derived(reportText(notes));

  /** @param {string} id */
  function chooseSite(id) {
    siteId = id;
    verdict = null;
  }

  /** @param {string} techId */
  function place(techId) {
    const out = placeTech(siteId, techId);
    if (out.grade === 'best') placed[siteId] = techId;
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
      Đây là một địa phương giả định để luyện tập. Chạm vào một địa điểm, rồi chọn công nghệ phù hợp
      nhất. Đã xử lí xong {solvedCount}/{SITES.length} địa điểm.
    </p>
    <div class="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-emerald-50">
      <svg
        viewBox="0 0 400 300"
        class="absolute inset-0 h-full w-full"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <path
          d="M250 0 C230 80 300 120 260 180 C230 230 280 260 270 300"
          fill="none"
          stroke="#7dd3fc"
          stroke-width="20"
        />
        <path d="M0 120 C120 110 240 150 400 118" fill="none" stroke="#cbd5e1" stroke-width="8" />
        <path d="M120 0 C130 90 110 200 130 300" fill="none" stroke="#cbd5e1" stroke-width="8" />
      </svg>
      {#each SITES as s, i (s.id)}
        <button
          type="button"
          class="absolute flex min-h-11 min-w-11 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-lg border-2 px-1 py-0.5 text-xs font-semibold shadow-sm {focusRing} {siteId ===
          s.id
            ? 'border-indigo-600 bg-indigo-600 text-white'
            : placed[s.id]
              ? 'border-emerald-600 bg-emerald-100 text-emerald-900'
              : 'border-slate-400 bg-white text-slate-900'}"
          style:left="{s.left}%"
          style:top="{s.top}%"
          aria-pressed={siteId === s.id}
          aria-label="{s.name}{placed[s.id] ? ', đã xử lí xong' : ''}"
          onclick={() => chooseSite(s.id)}
        >
          <span aria-hidden="true">{placed[s.id] ? '✓' : i + 1}</span>
          <span class="max-w-20 leading-tight" aria-hidden="true">{s.name}</span>
        </button>
      {/each}
    </div>

    <div class="rounded-xl bg-slate-50 p-3 text-sm text-slate-800" aria-live="polite">
      <p class="font-bold text-slate-900">{site.name}</p>
      <p>{site.problem}</p>
    </div>
    <ul class="grid gap-2" aria-label="Các công nghệ để chọn cho {site.name}">
      {#each TECHS as tech (tech.id)}
        <li>
          <button
            type="button"
            class="min-h-11 w-full rounded-lg border px-3 py-2 text-left text-sm font-medium {focusRing} {placed[
              siteId
            ] === tech.id
              ? 'border-emerald-600 bg-emerald-50 text-emerald-900'
              : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'}"
            onclick={() => place(tech.id)}
          >
            {tech.name}
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
            placeholder="Ví dụ: hầm biogas của một trại lợn"
            bind:value={note.place}
          />
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

    <fieldset class="rounded-xl border border-slate-200 bg-white p-3">
      <legend class="px-1 text-sm font-bold text-slate-900">Tính hiệu suất xử lí</legend>
      <div class="grid grid-cols-2 gap-2">
        <label class="block text-sm font-semibold text-slate-700">
          Trước xử lí
          <input type="text" inputmode="decimal" class="mt-1 {fieldClass}" bind:value={before} />
        </label>
        <label class="block text-sm font-semibold text-slate-700">
          Sau xử lí
          <input type="text" inputmode="decimal" class="mt-1 {fieldClass}" bind:value={after} />
        </label>
      </div>
      <div class="mt-2">
        <FeedbackNote tone={calc.tone} text={calc.text} />
      </div>
    </fieldset>
  {:else}
    <pre
      class="overflow-x-auto rounded-xl bg-slate-50 p-3 text-xs whitespace-pre-wrap text-slate-800">{report}</pre>
    <button type="button" class={button.secondary} onclick={copy}>Sao chép bản báo cáo</button>
    {#if copied}
      <p class="text-sm text-slate-700" aria-live="polite">{copied}</p>
    {/if}
  {/if}
</div>
