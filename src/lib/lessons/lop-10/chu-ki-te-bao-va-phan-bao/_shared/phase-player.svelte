<script>
  import { onMount } from 'svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { frameLoop, reducedMotion } from '#lib/core/motion.js';
  import { button, focusRing } from '#lib/core/ui.js';
  import CellScene from './cell-scene.svelte';
  import { frameAt, perCell } from './frames.js';

  /**
   * Plays cell division stage by stage: a slide from one stage to the next, a
   * "Tự chạy" button through to the end, or a jump straight to any stage. Under
   * the drawing it shows the chromosome counts of the stage. With reduced motion
   * the stages change without sliding.
   * @type {{
   *   frames: import('./frames.js').Frame[];
   *   width: number;
   *   height: number;
   *   label: string;
   * }}
   */
  let { frames, width, height, label } = $props();

  const STAGES_PER_SECOND = 0.45;

  let pos = $state(0);
  let target = $state(0);
  let running = $state(false);
  let reduced = $state(false);

  const frame = $derived(frameAt(frames, pos));
  const stage = $derived(Math.round(pos));
  const counts = $derived(frames[stage].counts);
  const inCell = $derived(perCell(counts));
  const atEnd = $derived(target >= frames.length - 1 && pos >= frames.length - 1);

  onMount(() => {
    reduced = reducedMotion();
  });

  $effect(() => {
    if (!running) return;
    /** @type {() => void} */
    const stop = frameLoop((dt) => {
      const step = dt * STAGES_PER_SECOND;
      const gap = target - pos;
      if (Math.abs(gap) <= step) {
        pos = target;
        running = false;
        stop();
      } else {
        pos += Math.sign(gap) * step;
      }
    });
    return stop;
  });

  /** @param {number} i */
  function go(i) {
    target = Math.max(0, Math.min(frames.length - 1, i));
    if (reduced) {
      pos = target;
      return;
    }
    running = true;
  }

  /** @param {number} i */
  function jump(i) {
    running = false;
    target = i;
    pos = i;
  }

  function toggleRun() {
    if (running) {
      running = false;
      target = stage;
      pos = stage;
      return;
    }
    if (reduced) {
      go(atEnd ? 0 : stage + 1);
      return;
    }
    if (atEnd) jump(0);
    go(frames.length - 1);
  }

  const pill = `min-h-11 rounded-lg border px-2 py-1 text-xs font-semibold ${focusRing}`;
</script>

<div class="space-y-3">
  <CellScene {frame} {width} {height} />

  <div class="flex flex-wrap gap-2">
    <button
      type="button"
      class={button.quiet}
      disabled={stage <= 0}
      onclick={() => {
        running = false;
        jump(stage);
        go(stage - 1);
      }}>Kì trước</button
    >
    <button
      type="button"
      class={button.primary}
      disabled={stage >= frames.length - 1}
      onclick={() => {
        running = false;
        jump(stage);
        go(stage + 1);
      }}>Kì tiếp</button
    >
    <button type="button" class={button.secondary} onclick={toggleRun}>
      {running ? 'Dừng' : atEnd ? 'Chạy lại' : 'Tự chạy'}
    </button>
  </div>

  <ol class="flex flex-wrap gap-1" aria-label={label}>
    {#each frames as f, i (f.id)}
      <li>
        <button
          type="button"
          aria-current={i === stage ? 'step' : undefined}
          class="{pill} {i === stage
            ? 'border-indigo-600 bg-indigo-600 text-white'
            : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'}"
          onclick={() => jump(i)}>{f.name}</button
        >
      </li>
    {/each}
  </ol>

  <dl class="grid grid-cols-2 gap-2 text-center text-sm sm:grid-cols-4">
    <div class="rounded-lg bg-slate-100 p-2">
      <dt class="text-xs text-slate-600">Số tế bào</dt>
      <dd class="font-bold text-slate-900">{counts.cells}</dd>
    </div>
    <div class="rounded-lg bg-slate-100 p-2">
      <dt class="text-xs text-slate-600">NST mỗi tế bào</dt>
      <dd class="font-bold text-slate-900">{counts.nst} {counts.state}</dd>
    </div>
    <div class="rounded-lg bg-slate-100 p-2">
      <dt class="text-xs text-slate-600">Nhiễm sắc tử mỗi tế bào</dt>
      <dd class="font-bold text-slate-900">{inCell.chromatids}</dd>
    </div>
    <div class="rounded-lg bg-slate-100 p-2">
      <dt class="text-xs text-slate-600">Tâm động mỗi tế bào</dt>
      <dd class="font-bold text-slate-900">{inCell.centromeres}</dd>
    </div>
  </dl>

  <FeedbackNote tone="info" text="{frames[stage].name}. {frames[stage].text}" />
</div>
