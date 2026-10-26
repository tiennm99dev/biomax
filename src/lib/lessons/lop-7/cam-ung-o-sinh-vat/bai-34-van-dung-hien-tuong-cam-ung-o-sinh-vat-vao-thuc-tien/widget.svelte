<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { FIELD_NAME, judge, situationsOf } from './engine.js';

  let field = $state('tat-ca');
  let index = $state(0);
  /** @type {number[]} */
  let tried = $state([]);
  let solved = $state(false);
  let firstTry = $state(0);
  let done = $state(0);

  const list = $derived(
    situationsOf(/** @type {import('./engine.js').Field | 'tat-ca'} */ (field)),
  );
  const s = $derived(list[index] ?? null);
  const last = $derived(tried.length ? tried[tried.length - 1] : null);
  const verdict = $derived(s && last !== null ? judge(s, last) : null);

  function reset() {
    index = 0;
    tried = [];
    solved = false;
    firstTry = 0;
    done = 0;
  }

  /** @param {number} i */
  function pick(i) {
    if (!s || solved || tried.includes(i)) return;
    tried = [...tried, i];
    if (i === s.answer) {
      solved = true;
      done += 1;
      if (tried.length === 1) firstTry += 1;
    }
  }

  function next() {
    index += 1;
    tried = [];
    solved = false;
  }

  /** @param {number} i */
  function optionClass(i) {
    const base = `flex min-h-11 w-full items-center rounded-lg border-2 px-3 py-2 text-left text-sm font-semibold ${focusRing}`;
    if (solved && i === s?.answer)
      return `${base} border-emerald-500 bg-emerald-50 text-emerald-900`;
    if (tried.includes(i)) return `${base} border-amber-400 bg-amber-50 text-amber-900`;
    return `${base} border-slate-300 bg-white text-slate-800 hover:border-indigo-400`;
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Lĩnh vực"
    options={[
      { value: 'tat-ca', label: 'Tất cả' },
      { value: 'trong-trot', label: 'Trồng trọt' },
      { value: 'chan-nuoi', label: 'Chăn nuôi' },
      { value: 'hoc-tap', label: 'Học tập' },
    ]}
    bind:value={field}
    onchange={reset}
  />

  {#if s}
    <div class="rounded-2xl border border-slate-200 bg-white p-4">
      <p class="text-xs font-semibold tracking-wide text-indigo-700 uppercase">
        Tình huống {index + 1} / {list.length} · {FIELD_NAME[s.field]}
      </p>
      <p class="mt-1 font-semibold text-slate-900">{s.problem}</p>
      <p class="mt-2 text-sm text-slate-600">Chọn biện pháp phù hợp:</p>
      <div class="mt-2 space-y-2" role="group" aria-label="Các biện pháp">
        {#each s.options as opt, i (i)}
          <button
            type="button"
            class={optionClass(i)}
            aria-pressed={tried.includes(i)}
            disabled={solved && i !== s.answer}
            onclick={() => pick(i)}>{opt}</button
          >
        {/each}
      </div>
    </div>
    <FeedbackNote
      tone={verdict ? (verdict.ok ? 'ok' : 'warn') : 'info'}
      text={verdict
        ? verdict.text
        : 'Mỗi biện pháp đúng đều dựa trên một hiện tượng cảm ứng hoặc một tập tính của sinh vật.'}
    />
    {#if solved}
      <button type="button" class={button.primary} onclick={next}>
        {index + 1 < list.length ? 'Tình huống tiếp theo' : 'Xem kết quả'}
      </button>
    {/if}
  {:else}
    <FeedbackNote
      tone="ok"
      text="Hoàn thành {done} tình huống, đúng ngay lần đầu {firstTry} / {list.length}. Con người hiểu cảm ứng và tập tính của sinh vật để chọn biện pháp phù hợp trong trồng trọt, chăn nuôi và học tập."
    />
    <button type="button" class={button.secondary} onclick={reset}>Làm lại</button>
  {/if}
</div>
