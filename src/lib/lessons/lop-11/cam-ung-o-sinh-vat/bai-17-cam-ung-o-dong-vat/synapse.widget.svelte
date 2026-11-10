<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { SYNAPSE_STEPS, synapseAt } from './engine.js';

  let step = $state(0);
  let noCalcium = $state(false);
  let noEnzyme = $state(false);

  const view = $derived(synapseAt(step, { noCalcium, noEnzyme }));

  /** Positions of the full vesicles in the bouton. */
  const VESICLES = [
    { x: 130, y: 50 },
    { x: 170, y: 42 },
    { x: 210, y: 52 },
    { x: 150, y: 74 },
  ];
  /** Acetylcholine dots: the first ones float in the cleft. */
  const CLEFT = [
    { x: 120, y: 120 },
    { x: 145, y: 126 },
    { x: 170, y: 118 },
    { x: 195, y: 127 },
    { x: 220, y: 121 },
    { x: 132, y: 131 },
    { x: 182, y: 132 },
    { x: 208, y: 133 },
    { x: 158, y: 113 },
  ];
  const RECEPTORS = [125, 170, 215];
</script>

<div class="space-y-3">
  <div class="flex flex-wrap gap-4 text-sm">
    <label class="inline-flex min-h-11 items-center gap-2">
      <input type="checkbox" class="h-5 w-5 {focusRing}" bind:checked={noCalcium} />
      Thiếu Ca²⁺ quanh chuỳ synapse
    </label>
    <label class="inline-flex min-h-11 items-center gap-2">
      <input type="checkbox" class="h-5 w-5 {focusRing}" bind:checked={noEnzyme} />
      Ức chế acetylcholinesterase
    </label>
  </div>

  <svg
    viewBox="0 0 340 200"
    class="mx-auto block w-full max-w-lg rounded-xl bg-slate-50"
    role="img"
    aria-label="Synapse hoá học ở bước {step}"
  >
    <path
      d="M95 0 L95 70 Q95 105 130 105 L210 105 Q245 105 245 70 L245 0"
      fill="#e0e7ff"
      stroke="#4f46e5"
      stroke-width="2"
    />
    <text x="255" y="40" font-size="10" fill="#3730a3">chuỳ synapse</text>
    <text x="255" y="104" font-size="10" fill="#3730a3">màng trước</text>
    <text x="255" y="126" font-size="10" fill="#475569">khe synapse</text>
    <rect
      x="60"
      y="142"
      width="220"
      height="40"
      fill={view.post ? '#bbf7d0' : '#fce7f3'}
      stroke="#be185d"
      stroke-width="2"
    />
    <text x="285" y="160" font-size="10" fill="#9d174d">màng sau</text>
    {#if view.post}
      <text x="170" y="174" text-anchor="middle" font-size="10" fill="#166534"
        >điện thế hoạt động →</text
      >
    {/if}

    {#if view.spike}
      <text x="170" y="16" text-anchor="middle" font-size="11" fill="#7c3aed">↓ xung thần kinh</text
      >
    {/if}
    {#if view.calcium}
      {#each [125, 215] as cx (cx)}
        <text x={cx} y="92" text-anchor="middle" font-size="9" fill="#0369a1">Ca²⁺</text>
      {/each}
    {/if}

    {#each VESICLES.slice(0, view.vesicles) as v, i (i)}
      <circle cx={v.x} cy={v.y} r="11" fill="#fff" stroke="#6366f1" />
      {#each [-4, 0, 4] as d (d)}
        <circle cx={v.x + d} cy={v.y + (d === 0 ? -3 : 2)} r="1.8" fill="#f97316" />
      {/each}
    {/each}
    {#if view.vesicles < 4 && !view.recycled}
      <path d="M150 104 Q160 92 170 104" fill="none" stroke="#6366f1" />
      <path d="M190 104 Q200 92 210 104" fill="none" stroke="#6366f1" />
    {/if}

    {#each CLEFT.slice(0, view.cleft) as p, i (i)}
      <circle cx={p.x} cy={p.y} r="2.5" fill="#f97316" />
    {/each}
    {#each RECEPTORS as rx (rx)}
      <path
        d="M{rx - 7} 142 L{rx - 7} 134 L{rx + 7} 134 L{rx + 7} 142"
        fill="none"
        stroke="#be185d"
        stroke-width="2"
      />
      {#if view.bound}
        <circle cx={rx} cy="137" r="3" fill="#f97316" />
      {/if}
    {/each}
    {#if view.recycled}
      <text x="80" y="122" font-size="9" fill="#047857">acetate</text>
      <text x="230" y="95" font-size="9" fill="#047857">↑ choline</text>
    {/if}
  </svg>
  <p class="text-center text-xs text-slate-600">
    Chấm cam: acetylcholine. Ô nhỏ nhô lên trên màng sau: thụ thể.
  </p>

  <div class="flex flex-wrap items-center gap-2">
    <button
      type="button"
      class={button.quiet}
      onclick={() => (step = Math.max(0, step - 1))}
      disabled={step === 0}
    >
      Bước trước
    </button>
    <button
      type="button"
      class={button.primary}
      onclick={() => (step = Math.min(SYNAPSE_STEPS, step + 1))}
      disabled={step === SYNAPSE_STEPS}
    >
      Bước tiếp
    </button>
    <button type="button" class={button.quiet} onclick={() => (step = 0)}>Làm lại</button>
    <span class="text-sm text-slate-600">Bước {step}/{SYNAPSE_STEPS}</span>
  </div>
  <div aria-live="polite">
    <FeedbackNote tone={view.tone} text={view.text} />
  </div>
</div>
