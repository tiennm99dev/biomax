<script>
  import { tick } from 'svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { FOREIGN, STRAINS, STUDY_STEPS, checkStrain, grows } from './engine.js';

  const options = FOREIGN.map((f) => ({ value: f.id, label: f.name }));

  let foreignId = $state(FOREIGN[0].id);
  let cultured = $state(false);
  /** @type {string | null} */
  let chosen = $state(null);
  /** @type {{ ok: boolean, text: string } | null} */
  let verdict = $state(null);
  let solved = $state(false);
  let stepsShown = $state(0);
  /** @type {HTMLDivElement | undefined} */
  let bench = $state();
  /** @type {HTMLButtonElement | undefined} */
  let stepButton = $state();
  /** @type {HTMLButtonElement | undefined} */
  let againButton = $state();
  /** @type {HTMLButtonElement | undefined} */
  let cultureButton = $state();

  const foreign = $derived(FOREIGN.find((f) => f.id === foreignId) ?? FOREIGN[0]);

  function reset() {
    cultured = false;
    chosen = null;
    verdict = null;
    solved = false;
    stepsShown = 0;
  }

  /** The restart button leaves after use, so focus goes to the culture button. */
  async function restart() {
    reset();
    await tick();
    cultureButton?.focus();
  }

  /** The culture button leaves after use, so focus goes to the first flask. */
  async function culture() {
    cultured = true;
    await tick();
    bench?.querySelector('button')?.focus();
  }

  /** @param {string} strain */
  async function pick(strain) {
    if (solved) return;
    chosen = strain;
    const out = checkStrain(foreignId, strain);
    verdict = out;
    if (out.ok) {
      solved = true;
      await tick();
      stepButton?.focus();
    }
  }

  /** The step button leaves after the last step, so focus goes to the restart button. */
  async function nextStep() {
    stepsShown += 1;
    await tick();
    (stepButton ?? againButton)?.focus();
  }
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Chất lạ cần nghiên cứu"
    {options}
    bind:value={foreignId}
    onchange={reset}
  />
  <p class="text-sm text-slate-800">
    Chất lạ: {foreign.short}, {foreign.harm}.
    {#if !cultured}
      Hãy cấy bốn chủng vào bốn bình môi trường có chất này là nguồn carbon duy nhất.
    {/if}
  </p>

  {#if !cultured}
    <button bind:this={cultureButton} type="button" class={button.primary} onclick={culture}
      >Cấy bốn chủng và nuôi</button
    >
  {:else}
    <div bind:this={bench} class="grid grid-cols-4 gap-2">
      {#each STRAINS as strain (strain)}
        {@const grown = grows(foreignId, strain)}
        <button
          type="button"
          class="flex min-h-11 flex-col items-center rounded-lg border-2 p-1 text-sm font-semibold text-slate-900 {focusRing} {chosen ===
          strain
            ? 'border-indigo-600 bg-indigo-50'
            : 'border-slate-200 bg-white hover:bg-slate-50'}"
          aria-pressed={chosen === strain}
          aria-label="Chủng {strain}: {grown ? 'dịch bị đục, có sinh khối' : 'dịch vẫn trong'}"
          onclick={() => pick(strain)}
        >
          <svg viewBox="0 0 40 56" class="h-14 w-10" aria-hidden="true">
            <path
              d="M15 4 H25 V20 L36 48 Q37 52 33 52 H7 Q3 52 4 48 L15 20 Z"
              fill="#f8fafc"
              stroke="#64748b"
              stroke-width="1.5"
            />
            <path
              d="M11 32 H29 L35 48 Q36 51 33 51 H7 Q4 51 5 48 Z"
              fill={grown ? '#ca8a04' : '#e0f2fe'}
            />
          </svg>
          {strain}
        </button>
      {/each}
    </div>
    <p class="text-xs text-slate-600">
      Bình đục là có vi sinh vật sinh trưởng. Các chủng A, B, C, D là giả định để luyện tập.
    </p>
  {/if}

  {#if verdict}
    <FeedbackNote tone={verdict.ok ? 'ok' : 'warn'} text={verdict.text} />
  {/if}

  {#if solved}
    <ol class="space-y-2" aria-live="polite">
      {#each STUDY_STEPS.slice(0, stepsShown) as step, i (step.name)}
        <li class="rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-800">
          <span class="font-bold text-slate-900">{i + 1}. {step.name}.</span>
          {step.text}
        </li>
      {/each}
    </ol>
    {#if stepsShown < STUDY_STEPS.length}
      <button bind:this={stepButton} type="button" class={button.primary} onclick={nextStep}>
        Bước tiếp: {STUDY_STEPS[stepsShown].name}
      </button>
    {:else}
      <button bind:this={againButton} type="button" class={button.quiet} onclick={restart}>
        Nghiên cứu lại từ đầu
      </button>
    {/if}
  {/if}
</div>
