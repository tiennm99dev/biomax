<script>
  import { onDestroy, tick } from 'svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { frameLoop, reducedMotion } from '#lib/core/motion.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import {
    GROUPS,
    SAMPLES,
    TESTS,
    isComplete,
    judgeMystery,
    outcome,
    readResult,
    sampleOf,
    testOf,
    tubeState,
  } from './engine.js';

  /** Seconds a slow step takes on screen. */
  const SLOW_SECONDS = 2.4;
  const testOptions = TESTS.map((t) => ({ value: t.id, label: t.name }));

  let sampleId = $state('glucose');
  /** @type {string} */
  let testId = $state('benedict');
  let step = $state(0);
  let progress = $state(1);
  /** @type {string | null} */
  let stepWarning = $state(null);
  /** @type {Record<string, boolean>} */
  let done = $state({});
  /** @type {import('./engine.js').GroupId[]} */
  let picks = $state([]);
  /** @type {{ ok: boolean, text: string } | null} */
  let verdict = $state(null);

  /** @type {(() => void) | null} */
  let stopLoop = null;
  /** @type {HTMLOListElement | undefined} */
  let stepsBox = $state();
  /** @type {HTMLButtonElement | undefined} */
  let washButton = $state();

  const sample = $derived(sampleOf(sampleId));
  const test = $derived(testOf(testId));
  const tube = $derived(tubeState(testId, sampleId, step, progress));
  const complete = $derived(isComplete(testId, step, progress));
  const doneTests = $derived(TESTS.filter((t) => done[`${sampleId}:${t.id}`]).map((t) => t.id));

  function clearBench() {
    stopLoop?.();
    stopLoop = null;
    step = 0;
    progress = 1;
    stepWarning = null;
  }

  /** @param {string} id */
  function chooseSample(id) {
    sampleId = id;
    picks = [];
    verdict = null;
    clearBench();
  }

  function record() {
    done = { ...done, [`${sampleId}:${testId}`]: true };
    verdict = null;
  }

  // A step button locks once pressed, so hand focus on or a keyboard user loses their place.
  async function focusNextControl() {
    await tick();
    const next = stepsBox?.querySelector(/** @type {'button'} */ ('button:not(:disabled)'));
    (next ?? washButton)?.focus();
  }

  function washTube() {
    clearBench();
    focusNextControl();
  }

  function runSlowStep() {
    if (reducedMotion()) {
      progress = 1;
      record();
      return;
    }
    progress = 0;
    stopLoop = frameLoop((dt) => {
      progress = Math.min(1, progress + dt / SLOW_SECONDS);
      if (progress >= 1) {
        stopLoop?.();
        stopLoop = null;
        record();
      }
    });
  }

  /** @param {number} index */
  function press(index) {
    if (index !== step) {
      stepWarning = `Chưa đến bước này: trước hết em phải "${test.steps[step]}".`;
      return;
    }
    stepWarning = null;
    step += 1;
    focusNextControl();
    if (step < test.steps.length) return;
    if (test.slowLastStep) runSlowStep();
    else record();
  }

  /** @param {import('./engine.js').GroupId} id */
  function togglePick(id) {
    picks = picks.includes(id) ? picks.filter((g) => g !== id) : [...picks, id];
    verdict = null;
  }

  onDestroy(() => stopLoop?.());
</script>

<div class="space-y-4">
  <div class="space-y-1">
    <p class="text-sm font-semibold text-slate-700" id="mau-thu">Mẫu thử</p>
    <div class="grid grid-cols-3 gap-2 sm:grid-cols-5" role="group" aria-labelledby="mau-thu">
      {#each SAMPLES as s (s.id)}
        <button
          type="button"
          class="min-h-11 rounded-lg border-2 px-1 py-1 text-xs font-semibold {s.id === sampleId
            ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
            : s.mystery
              ? 'border-transparent bg-amber-100 text-amber-950'
              : 'border-transparent bg-slate-100 text-slate-800'} {focusRing}"
          aria-pressed={s.id === sampleId}
          onclick={() => chooseSample(s.id)}>{s.name}</button
        >
      {/each}
    </div>
  </div>

  <SegmentedControl
    label="Phép thử"
    options={testOptions}
    bind:value={testId}
    onchange={clearBench}
  />

  <div class="flex gap-4">
    <svg
      viewBox="0 0 80 190"
      class="h-48 w-20 shrink-0"
      role="img"
      aria-label="Ống nghiệm chứa {sample.name}: {tube.label}{tube.precipitate
        ? ', có kết tủa'
        : ''}"
    >
      <path d="M22 62 V160 a18 18 0 0 0 36 0 V62 Z" fill={tube.color} />
      {#if tube.precipitate}
        <path d="M22 158 V160 a18 18 0 0 0 36 0 V158 Z" fill="#7f1d1d" />
      {/if}
      <path d="M22 10 V160 a18 18 0 0 0 36 0 V10" fill="none" stroke="#475569" stroke-width="3" />
      <line x1="16" x2="64" y1="10" y2="10" stroke="#475569" stroke-width="3" />
    </svg>

    <div class="min-w-0 flex-1 space-y-2">
      <p class="text-sm text-slate-700">
        Phép thử <strong>{test.name}</strong> nhận biết {test.finds}. Làm theo thứ tự:
      </p>
      <ol class="space-y-2" bind:this={stepsBox}>
        {#each test.steps as label, i (label)}
          <li>
            <button
              type="button"
              class="w-full {i < step ? button.quiet : button.secondary}"
              disabled={i < step}
              onclick={() => press(i)}>{i + 1}. {label}</button
            >
          </li>
        {/each}
      </ol>
      {#if step > 0}
        <button type="button" class={button.quiet} bind:this={washButton} onclick={washTube}
          >Rửa ống, làm lại</button
        >
      {/if}
    </div>
  </div>

  {#if stepWarning}
    <FeedbackNote tone="warn" text={stepWarning} />
  {:else if complete}
    <FeedbackNote
      tone={outcome(testId, sampleId).positive ? 'ok' : 'info'}
      text={readResult(testId, sampleId)}
    />
  {:else}
    <p class="text-sm text-slate-600" aria-live="polite">
      {step === 0 ? 'Ống nghiệm chỉ có mẫu thử.' : `Trong ống: ${tube.label}.`}
    </p>
  {/if}

  <div class="overflow-x-auto">
    <table class="w-full border-collapse text-center text-xs">
      <caption class="pb-1 text-left text-sm font-semibold text-slate-700"
        >Phiếu kết quả (màu quan sát được)</caption
      >
      <thead>
        <tr class="bg-slate-100">
          <th scope="col" class="p-1 text-left">Mẫu</th>
          {#each TESTS as t (t.id)}
            <th scope="col" class="p-1">{t.name}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each SAMPLES as s (s.id)}
          <tr class="border-t border-slate-200 {s.id === sampleId ? 'bg-indigo-50' : ''}">
            <th scope="row" class="p-1 text-left font-semibold">{s.name}</th>
            {#each TESTS as t (t.id)}
              {@const seen = done[`${s.id}:${t.id}`] ? outcome(t.id, s.id) : null}
              <td class="p-1">
                {#if seen}
                  <span
                    class="mr-1 inline-block h-2.5 w-2.5 rounded-full border border-slate-400"
                    style="background-color: {seen.color}"
                  ></span>{seen.label}
                {:else}
                  <span class="text-slate-400" aria-label="chưa thử">·</span>
                {/if}
              </td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  {#if sample.mystery}
    <fieldset class="space-y-2 rounded-xl border border-amber-300 bg-amber-50 p-3">
      <legend class="px-1 text-sm font-semibold text-amber-950">
        {sample.name} chứa những nhóm chất nào?
      </legend>
      <div class="grid grid-cols-2 gap-2">
        {#each GROUPS as g (g.id)}
          <label class="flex min-h-11 cursor-pointer items-center gap-2 text-sm text-slate-800">
            <input
              type="checkbox"
              class="h-5 w-5 {focusRing}"
              checked={picks.includes(g.id)}
              onchange={() => togglePick(g.id)}
            />
            {g.name}
          </label>
        {/each}
      </div>
      <button
        type="button"
        class={button.primary}
        onclick={() => (verdict = judgeMystery(sampleId, picks, doneTests))}>Kết luận</button
      >
    </fieldset>
    {#if verdict}
      <FeedbackNote tone={verdict.ok ? 'ok' : 'warn'} text={verdict.text} />
    {/if}
  {/if}
</div>
