<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import { button } from '#lib/core/ui.js';
  import {
    MATING,
    alleles,
    fromPercents,
    generationName,
    generationNote,
    generations,
    isBalanced,
    structureText,
  } from './engine.js';

  const MAX_GENERATIONS = 8;

  /** @type {import('./engine.js').Mating} */
  let mating = $state('random');
  let homPercent = $state(40);
  let hetPercent = $state(35);
  let count = $state(0);

  const start = $derived(fromPercents(homPercent, hetPercent));
  const list = $derived(generations(start, mating, count));
  const note = $derived(generationNote(list, mating));
  const tone = $derived(
    mating === 'random' && isBalanced(list[list.length - 1])
      ? /** @type {const} */ ('ok')
      : /** @type {const} */ ('info'),
  );

  /** @param {number} v */
  function setHom(v) {
    homPercent = v;
    if (hetPercent > 100 - v) hetPercent = 100 - v;
    count = 0;
  }

  /** @param {number} v */
  function setHet(v) {
    hetPercent = Math.min(v, 100 - homPercent);
    count = 0;
  }

  /** @param {string | number} v */
  function setMating(v) {
    mating = v === 'selfing' ? 'selfing' : 'random';
    count = 0;
  }

  const W = 340;
  const L = 34;
  const R = 286;
  const ROW = 26;
  const TOP = 8;
  const height = $derived(TOP + (count + 1) * ROW + 4);
  const COLORS = { AA: '#4f46e5', Aa: '#f59e0b', aa: '#94a3b8' };
  const LEGEND = [
    { name: 'AA', color: COLORS.AA },
    { name: 'Aa', color: COLORS.Aa },
    { name: 'aa', color: COLORS.aa },
  ];
  /** @param {number} f */
  const span = (f) => f * (R - L);
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Kiểu giao phối"
    options={[
      { value: 'random', label: MATING.random },
      { value: 'selfing', label: MATING.selfing },
    ]}
    value={mating}
    onchange={setMating}
  />

  <div class="grid gap-3 sm:grid-cols-2">
    <SliderField
      label="Tỉ lệ AA ở thế hệ P"
      value={homPercent}
      min={0}
      max={100}
      unit="%"
      oninput={setHom}
    />
    <SliderField
      label="Tỉ lệ Aa ở thế hệ P"
      bind:value={hetPercent}
      min={0}
      max={100}
      unit="%"
      oninput={setHet}
    />
  </div>
  <p class="text-sm text-slate-600">
    Thế hệ P: {structureText(start)} (tỉ lệ aa là phần còn lại).
  </p>

  <div class="flex flex-wrap gap-2">
    <button
      type="button"
      class={button.primary}
      disabled={count >= MAX_GENERATIONS}
      onclick={() => (count += 1)}>Thế hệ tiếp</button
    >
    <button type="button" class={button.quiet} disabled={count === 0} onclick={() => (count = 0)}
      >Về thế hệ P</button
    >
  </div>

  <div class="flex flex-wrap gap-4 text-sm text-slate-700" aria-hidden="true">
    {#each LEGEND as item (item.name)}
      <span class="inline-flex items-center gap-1"
        ><span class="inline-block h-3 w-5 rounded-sm" style="background:{item.color}"
        ></span>{item.name}</span
      >
    {/each}
    <span>Số bên phải: tần số allele A (<i>p</i>)</span>
  </div>

  <svg
    viewBox="0 0 {W} {height}"
    class="w-full max-w-lg"
    role="img"
    aria-label="Cấu trúc di truyền qua các thế hệ: {list
      .map((g, i) => `${generationName(i)} ${structureText(g, 3)}`)
      .join('; ')}."
  >
    {#each list as g, i (i)}
      {@const y = TOP + i * ROW}
      <text x={L - 6} y={y + 14} text-anchor="end" font-size="11" fill="#334155" font-weight="700"
        >{generationName(i)}</text
      >
      <rect x={L} {y} width={span(g.AA)} height={ROW - 8} fill={COLORS.AA} />
      <rect x={L + span(g.AA)} {y} width={span(g.Aa)} height={ROW - 8} fill={COLORS.Aa} />
      <rect x={L + span(g.AA + g.Aa)} {y} width={span(g.aa)} height={ROW - 8} fill={COLORS.aa} />
      {#if g.Aa >= 0.12}
        <text
          x={L + span(g.AA) + span(g.Aa) / 2}
          y={y + 13}
          text-anchor="middle"
          font-size="9.5"
          fill="#1e293b">{formatNumber(g.Aa, 3)}</text
        >
      {/if}
      <text x={R + 6} y={y + 14} font-size="10.5" fill="#4f46e5"
        >{formatNumber(alleles(g).p, 3)}</text
      >
    {/each}
  </svg>

  <FeedbackNote {tone} text={note} />
</div>
