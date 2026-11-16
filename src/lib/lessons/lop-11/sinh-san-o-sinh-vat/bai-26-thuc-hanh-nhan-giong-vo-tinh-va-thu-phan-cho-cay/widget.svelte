<script>
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import { tick } from 'svelte';
  import { PROCEDURES, PROC_IDS, deck, tryStep } from './engine.js';

  /** @typedef {import('./engine.js').ProcId} ProcId */

  /** @type {ProcId} */
  let id = $state('chiet');
  let round = $state(1);
  let done = $state(0);
  let mistakes = $state(0);
  /** @type {{ ok: boolean, text: string } | null} */
  let note = $state(null);

  const proc = $derived(PROCEDURES[id]);
  const cards = $derived(deck(id, 26 + round + PROC_IDS.indexOf(id) * 7));
  const left = $derived(cards.filter((i) => i >= done));
  const finished = $derived(done === proc.steps.length);

  const options = PROC_IDS.map((p) => ({ value: p, label: PROCEDURES[p].name }));

  function restart() {
    done = 0;
    mistakes = 0;
    note = null;
  }

  /** @type {HTMLDivElement | undefined} */
  let list = $state();
  /** @type {HTMLButtonElement | undefined} */
  let again = $state();

  /** @param {number} step */
  async function pick(step) {
    const r = tryStep(id, done, step);
    note = r;
    if (!r.ok) {
      mistakes += 1;
      return;
    }
    done += 1;
    await tick();
    (list?.querySelector('button') ?? again)?.focus();
  }
</script>

<div class="space-y-3">
  <SegmentedControl label="Quy trình" {options} bind:value={id} onchange={restart} />
  <p class="text-sm text-slate-700">{proc.goal}</p>

  <ol class="space-y-1" aria-label="Các bước đã sắp">
    {#each proc.steps.slice(0, done) as s, i (i)}
      <li class="flex gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-sm">
        <span class="font-bold text-emerald-800">{i + 1}.</span>
        <span><LiveRichText text={s.text} /></span>
      </li>
    {/each}
  </ol>

  {#if !finished}
    <p class="text-sm font-semibold">Chọn bước {done + 1}:</p>
    <div class="grid gap-2" bind:this={list}>
      {#each left as step (step)}
        <button
          type="button"
          class="{button.quiet} justify-start text-left text-sm font-normal"
          onclick={() => pick(step)}
        >
          <span><LiveRichText text={proc.steps[step].text} /></span>
        </button>
      {/each}
    </div>
  {/if}

  {#if note}
    <FeedbackNote tone={note.ok ? 'ok' : 'warn'} text={note.text} />
  {/if}
  {#if finished}
    <p class="text-sm" aria-live="polite">
      Hoàn thành {proc.steps.length} bước với {mistakes} lần chọn sai.
    </p>
  {/if}

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.quiet} onclick={restart} bind:this={again}>Làm lại</button>
    <button
      type="button"
      class={button.quiet}
      onclick={() => {
        round += 1;
        restart();
      }}>Xáo lại các bước</button
    >
  </div>
</div>
