<script>
  import { tick } from 'svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { button, focusRing } from '#lib/core/ui.js';
  import { CASES, FIELDS, judgeCase } from './engine.js';

  const queue = shuffled(CASES, 10);
  // Grid cells around the centre of the map, in reading order of a 3 by 3 grid.
  const CELLS = [
    { col: 1, row: 1 },
    { col: 2, row: 1 },
    { col: 3, row: 1 },
    { col: 1, row: 3 },
    { col: 2, row: 3 },
    { col: 3, row: 3 },
  ];

  let mode = $state(/** @type {'map' | 'cases'} */ ('map'));
  let fieldId = $state(FIELDS[0].id);
  let jobName = $state(FIELDS[0].jobs[0].name);
  let caseIndex = $state(0);
  let right = $state(0);
  let firstTry = $state(0);
  let triedThis = $state(false);
  let verdict = $state(/** @type {{ ok: boolean, text: string } | null} */ (null));
  /** @type {HTMLButtonElement | undefined} */
  let nextButton = $state();
  /** @type {HTMLDivElement | undefined} */
  let mapBox = $state();

  const field = $derived(FIELDS.find((f) => f.id === fieldId) ?? FIELDS[0]);
  const job = $derived(field.jobs.find((j) => j.name === jobName) ?? field.jobs[0]);
  const current = $derived(CASES.length > caseIndex ? queue[caseIndex] : null);
  const solved = $derived(verdict?.ok === true);

  /** @param {string} id */
  async function tap(id) {
    if (mode === 'map') {
      fieldId = id;
      jobName = (FIELDS.find((f) => f.id === id) ?? FIELDS[0]).jobs[0].name;
      return;
    }
    if (!current || solved) return;
    verdict = judgeCase(current, id);
    if (verdict.ok) {
      right += 1;
      if (!triedThis) firstTry += 1;
      fieldId = id;
      await tick();
      nextButton?.focus();
    }
    triedThis = true;
  }

  async function next() {
    caseIndex += 1;
    verdict = null;
    triedThis = false;
    await tick();
    mapBox?.querySelector(/** @type {'button'} */ ('button:not(:disabled)'))?.focus();
  }

  async function restart() {
    caseIndex = 0;
    right = 0;
    firstTry = 0;
    verdict = null;
    triedThis = false;
    await tick();
    mapBox?.querySelector(/** @type {'button'} */ ('button:not(:disabled)'))?.focus();
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Cách dùng bản đồ"
    options={[
      { value: 'map', label: 'Xem ngành nghề' },
      { value: 'cases', label: 'Xếp công việc' },
    ]}
    bind:value={mode}
  />

  {#if mode === 'cases'}
    {#if current}
      <div class="rounded-xl border border-indigo-200 bg-indigo-50 p-4">
        <p class="text-xs font-semibold text-indigo-700">
          Tình huống {caseIndex + 1} trên {CASES.length}
        </p>
        <p class="mt-1 text-indigo-950">{current.text}</p>
      </div>
    {:else}
      <FeedbackNote
        tone="ok"
        text={`Hoàn thành: em đã xếp đúng ${right} tình huống, trong đó ${firstTry} tình huống đúng ngay lần đầu. Sinh học có mặt ở rất nhiều nghề khác nhau.`}
      />
      <button type="button" class={button.quiet} onclick={restart}>Làm lại</button>
    {/if}
  {/if}

  <div class="relative grid grid-cols-3 gap-2 [grid-auto-rows:1fr]" bind:this={mapBox}>
    <svg
      class="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 90 90"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {#each CELLS as c, i (i)}
        <line
          x1="45"
          y1="45"
          x2={c.col * 30 - 15}
          y2={c.row * 30 - 15}
          stroke={mode === 'map' && FIELDS[i].id === fieldId ? '#4f46e5' : '#cbd5e1'}
          stroke-width="1"
          vector-effect="non-scaling-stroke"
        />
      {/each}
    </svg>
    <div
      class="relative col-start-2 row-start-2 flex min-h-16 items-center justify-center rounded-full bg-indigo-600 px-2 text-center text-sm font-bold text-white"
    >
      Sinh học
    </div>
    {#each FIELDS as f, i (f.id)}
      <button
        type="button"
        class="relative flex min-h-16 items-center justify-center rounded-xl border-2 px-1 py-2 text-center text-sm font-semibold {mode ===
          'map' && f.id === fieldId
          ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
          : 'border-slate-200 bg-white text-slate-800 hover:border-indigo-300'} {focusRing}"
        style="grid-column: {CELLS[i].col}; grid-row: {CELLS[i].row}"
        aria-pressed={mode === 'map' ? f.id === fieldId : undefined}
        disabled={mode === 'cases' && (!current || solved)}
        onclick={() => tap(f.id)}
      >
        {f.name}
      </button>
    {/each}
  </div>

  {#if mode === 'map'}
    <div class="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-4" aria-live="polite">
      <h4 class="font-bold text-slate-900">{field.name}</h4>
      <p class="text-sm text-slate-700"><strong>Lĩnh vực ứng dụng:</strong> {field.use}</p>
      <p class="text-sm text-slate-700"><strong>Thành tựu:</strong> {field.achievement}</p>
      <div class="flex flex-wrap gap-2" role="group" aria-label="Các nghề của {field.name}">
        {#each field.jobs as j (j.name)}
          <button
            type="button"
            class="min-h-11 rounded-lg border px-3 py-1 text-sm font-semibold {j.name === job.name
              ? 'border-indigo-600 bg-indigo-600 text-white'
              : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'} {focusRing}"
            aria-pressed={j.name === job.name}
            onclick={() => (jobName = j.name)}
          >
            {j.name}
          </button>
        {/each}
      </div>
      <p class="text-sm text-slate-800"><strong>{job.name}:</strong> {job.work}</p>
    </div>
  {:else if current}
    <FeedbackNote
      tone={verdict ? (verdict.ok ? 'ok' : 'warn') : 'info'}
      text={verdict ? verdict.text : 'Chọn trên bản đồ lĩnh vực của công việc này.'}
    />
    {#if solved}
      <button type="button" class={button.primary} bind:this={nextButton} onclick={next}>
        {caseIndex + 1 < CASES.length ? 'Tình huống tiếp theo' : 'Xem kết quả'}
      </button>
    {/if}
  {/if}
</div>
