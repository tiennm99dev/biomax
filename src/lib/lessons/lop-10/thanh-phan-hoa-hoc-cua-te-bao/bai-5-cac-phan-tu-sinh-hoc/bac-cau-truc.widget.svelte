<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button } from '#lib/core/ui.js';
  import { LEVELS, foldedness, structureBeads, structureStatus } from './engine.js';

  const CHAIN_COLORS = ['#4f46e5', '#0d9488', '#ea580c', '#be185d'];

  let level = $state(3);
  let temperature = $state(37);
  let ph = $state(7);

  const fold = $derived(foldedness(temperature, ph));
  const beads = $derived(structureBeads(level, fold));
  const chains = $derived(
    [...new Set(beads.map((b) => b.chain))].map((id) => beads.filter((b) => b.chain === id)),
  );
  const status = $derived(structureStatus(level, fold));
  const info = $derived(LEVELS.find((l) => l.value === level) ?? LEVELS[0]);
  const options = LEVELS.map((l) => ({ value: l.value, label: l.label }));
</script>

<div class="space-y-3">
  <SegmentedControl label="Bậc cấu trúc của protein" {options} bind:value={level} />
  <p class="text-sm text-slate-700">{info.text}</p>

  <svg
    viewBox="0 0 320 170"
    class="block w-full rounded-xl bg-slate-50"
    role="img"
    aria-label="Protein {info.label}, giữ được {Math.round(fold * 100)}% cấu trúc không gian"
  >
    {#each chains as chain, c (c)}
      <polyline
        points={chain.map((b) => `${b.x},${b.y}`).join(' ')}
        fill="none"
        stroke={CHAIN_COLORS[c]}
        stroke-width="2.5"
        stroke-linejoin="round"
      />
      {#each chain as b, i (i)}
        <circle cx={b.x} cy={b.y} r="4.5" fill={CHAIN_COLORS[c]} stroke="#fff" stroke-width="1" />
      {/each}
    {/each}
  </svg>

  <div class="grid gap-3 sm:grid-cols-2">
    <SliderField label="Nhiệt độ" bind:value={temperature} min={20} max={100} unit="°C" />
    <SliderField label="Độ pH" bind:value={ph} min={1} max={13} />
  </div>

  <FeedbackNote tone={status.tone} text={status.text} />

  <button
    type="button"
    class={button.quiet}
    onclick={() => {
      temperature = 37;
      ph = 7;
    }}>Về điều kiện cơ thể (37 °C, pH 7)</button
  >
</div>
