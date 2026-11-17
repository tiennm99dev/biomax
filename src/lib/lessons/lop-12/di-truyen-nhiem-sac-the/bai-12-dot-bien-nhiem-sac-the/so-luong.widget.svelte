<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import Stepper from '#lib/core/stepper.svelte';
  import { button } from '#lib/core/ui.js';
  import Karyotype from '../_shared/karyotype.svelte';
  import { classifyCounts, plantKaryotype } from '../_shared/mutations.js';
  import { COUNT_PRESETS, countMeaning } from './engine.js';

  let counts = $state([2, 2, 2, 2]);

  const verdict = $derived(classifyCounts(counts));
  const groups = $derived(plantKaryotype(counts));
  const tone = $derived(
    /** @type {'ok' | 'warn' | 'info'} */ (
      verdict.kind === 'binh-thuong' ? 'ok' : verdict.kind === 'lech-boi' ? 'warn' : 'info'
    ),
  );
  const text = $derived(
    `${verdict.name}: $${verdict.notation.replaceAll('−', '-')}$, tế bào có ${verdict.total} nhiễm sắc thể (loài có $2n = 8$). ${countMeaning(verdict)}`,
  );

  /** @param {number[]} c */
  function use(c) {
    counts = [...c];
  }
</script>

<div class="space-y-4">
  <Karyotype {groups} columns={4} label="Bộ nhiễm sắc thể của tế bào cây" />

  <div class="grid grid-cols-1 gap-2 sm:grid-cols-2">
    {#each counts as _, i (i)}
      <Stepper
        label="Nhóm {i + 1}"
        bind:value={counts[i]}
        min={0}
        max={4}
        format={(v) => `${v} chiếc`}
      />
    {/each}
  </div>

  <div class="flex flex-wrap gap-2" role="group" aria-label="Bộ nhiễm sắc thể mẫu">
    {#each COUNT_PRESETS as p (p.id)}
      <button type="button" class={button.quiet} onclick={() => use(p.counts)}>{p.label}</button>
    {/each}
  </div>

  <FeedbackNote {tone} {text} />
</div>
