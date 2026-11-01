<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import {
    BULK_H,
    BULK_MODES,
    BULK_STEPS,
    BULK_W,
    MEMBRANE_Y,
    bulkOf,
    bulkShape,
  } from './engine.js';

  /** @typedef {import('./engine.js').BulkId} BulkId */

  const options = BULK_MODES.map((m) => ({ value: m.id, label: m.name }));
  const CENTRE = BULK_W / 2;
  const DROPLETS = [
    [-14, -8],
    [10, -11],
    [-3, 3],
    [15, 7],
    [-16, 9],
    [3, 14],
  ];

  /** @type {BulkId} */
  let mode = $state('thuc-bao');
  let step = $state(0);

  const bulk = $derived(bulkOf(mode));
  const shape = $derived(bulkShape(mode, step));
  const finished = $derived(step === BULK_STEPS - 1);
  const text = $derived(
    finished ? `${bulk.steps[step]} Cả quá trình tiêu tốn ATP.` : bulk.steps[step],
  );

  function next() {
    step = finished ? 0 : step + 1;
  }
</script>

<div class="space-y-3">
  <SegmentedControl label="Quá trình" {options} bind:value={mode} onchange={() => (step = 0)} />

  <svg
    viewBox="0 0 {BULK_W} {BULK_H}"
    class="mx-auto block w-full max-w-md rounded-xl"
    role="img"
    aria-label="{bulk.name}, bước {step + 1} trên {BULK_STEPS}"
  >
    <rect x="0" y="0" width={BULK_W} height={BULK_H} fill="#fff1f2" />
    <path d="{shape.path} L {BULK_W} 0 L 0 0 Z" fill="#f0f9ff" stroke="none" />
    <path d={shape.path} fill="none" stroke="#b45309" stroke-width="6" stroke-linecap="round" />
    {#if shape.vesicle}
      <circle
        cx={CENTRE}
        cy={shape.vesicle.cy}
        r={shape.vesicle.r}
        fill="#f0f9ff"
        stroke="#b45309"
        stroke-width="5"
      />
    {/if}
    {#if bulk.cargo === 'bacterium'}
      <rect
        x={CENTRE - 30}
        y={shape.cargoY - 15}
        width="60"
        height="30"
        rx="15"
        fill="#16a34a"
        stroke="#14532d"
        stroke-width="2"
      />
    {:else}
      {#each DROPLETS as [dx, dy], i (i)}
        <circle cx={CENTRE + dx} cy={shape.cargoY + dy} r="4" fill="#7c3aed" />
      {/each}
    {/if}
    <text x="8" y={MEMBRANE_Y - 14} font-size="12" font-weight="600" fill="#0c4a6e"
      >Ngoài tế bào</text
    >
    <text x="8" y={MEMBRANE_Y + 24} font-size="12" font-weight="600" fill="#881337"
      >Tế bào chất</text
    >
  </svg>

  <div class="flex flex-wrap items-center gap-2">
    <button type="button" class={button.primary} onclick={next}
      >{finished ? 'Xem lại từ đầu' : 'Bước tiếp theo'}</button
    >
    <span class="text-sm font-semibold text-slate-700">Bước {step + 1}/{BULK_STEPS}</span>
  </div>
  <FeedbackNote tone={finished ? 'ok' : 'info'} {text} />
</div>
