<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import { button } from '#lib/core/ui.js';
  import GenerationChart from '../_shared/generation-chart.svelte';
  import { DEPTHS, SEEDS, history, meanDepth, selectionNote } from './engine.js';

  const MAX = 20;

  /** @type {import('./engine.js').SeedKind} */
  let seed = $state('to');
  let varied = $state(true);
  /** @type {import('./engine.js').SeedKind[]} */
  let steps = $state([]);

  const run = $derived(history(steps, varied));
  const pop = $derived(run.pops[run.pops.length - 1]);
  const before = $derived(run.pops.length > 1 ? run.pops[run.pops.length - 2] : null);
  const means = $derived(run.pops.map(meanDepth));
  const lastSeed = $derived(steps.length > 0 ? steps[steps.length - 1] : seed);
  const note = $derived(selectionNote(run.pops, run.surviving, lastSeed, varied));
  const tone = $derived(
    varied && steps.length > 0 && Math.abs(means[means.length - 1] - SEEDS[lastSeed].best) < 0.3
      ? /** @type {const} */ ('ok')
      : /** @type {const} */ ('info'),
  );

  /** @param {string | number} v */
  function setSeed(v) {
    seed = v === 'nho' ? 'nho' : v === 'vua' ? 'vua' : 'to';
  }

  /** @param {string | number} v */
  function setVaried(v) {
    varied = v === 'co';
    steps = [];
  }

  const W = 340;
  const L = 14;
  const R = 330;
  const TOP = 10;
  const BASE = 120;
  const barW = (R - L) / DEPTHS.length;
  const top = $derived(Math.max(0.3, ...pop, ...(before ?? [0])));
  /** @param {number} f */
  const barH = (f) => (f / top) * (BASE - TOP);
</script>

<div class="space-y-4">
  <div class="grid gap-3 sm:grid-cols-2">
    <SegmentedControl
      label="Thức ăn trên đảo"
      options={Object.entries(SEEDS).map(([value, s]) => ({ value, label: s.label }))}
      value={seed}
      onchange={setSeed}
    />
    <SegmentedControl
      label="Biến dị cá thể ở thế hệ 0"
      options={[
        { value: 'co', label: 'Có biến dị' },
        { value: 'khong', label: 'Không có biến dị' },
      ]}
      value={varied ? 'co' : 'khong'}
      onchange={setVaried}
    />
  </div>

  <div class="flex flex-wrap gap-2">
    <button
      type="button"
      class={button.primary}
      disabled={steps.length >= MAX}
      onclick={() => (steps = [...steps, seed])}>Thế hệ tiếp</button
    >
    <button
      type="button"
      class={button.secondary}
      disabled={steps.length >= MAX}
      onclick={() => (steps = [...steps, ...Array(Math.min(5, MAX - steps.length)).fill(seed)])}
      >Thêm 5 thế hệ</button
    >
    <button
      type="button"
      class={button.quiet}
      disabled={steps.length === 0}
      onclick={() => (steps = [])}>Về thế hệ 0</button
    >
  </div>

  <svg
    viewBox="0 0 {W} 158"
    class="mx-auto block w-full max-w-lg"
    role="img"
    aria-label="Tỉ lệ chim theo độ dày mỏ ở thế hệ {steps.length}: {DEPTHS.filter(
      (_, i) => pop[i] >= 0.05,
    )
      .map((d) => `${formatNumber(d)} mm ${formatNumber(pop[DEPTHS.indexOf(d)] * 100, 0)}%`)
      .join(', ')}."
  >
    <line x1={L} y1={BASE} x2={R} y2={BASE} stroke="#94a3b8" />
    {#each DEPTHS as d, i (d)}
      {@const x = L + i * barW}
      <rect
        x={x + 1}
        y={BASE - barH(pop[i])}
        width={barW - 2}
        height={barH(pop[i])}
        fill="#4f46e5"
        rx="1.5"
      />
      {#if before}
        <rect
          x={x + 1}
          y={BASE - barH(before[i])}
          width={barW - 2}
          height={barH(before[i])}
          fill="none"
          stroke="#f59e0b"
          stroke-width="1.5"
          stroke-dasharray="3 2"
        />
      {/if}
      {#if i % 2 === 0}
        <text x={x + barW / 2} y={BASE + 13} text-anchor="middle" font-size="10" fill="#334155"
          >{d}</text
        >
      {/if}
    {/each}
    <line
      x1={L + (SEEDS[seed].best - 6) * 2 * barW + barW / 2}
      y1={TOP}
      x2={L + (SEEDS[seed].best - 6) * 2 * barW + barW / 2}
      y2={BASE}
      stroke="#059669"
      stroke-width="1.5"
      stroke-dasharray="5 4"
    />
    <text x={(L + R) / 2} y="154" text-anchor="middle" font-size="11" fill="#334155"
      >Độ dày mỏ (mm); vạch xanh: mỏ phù hợp nhất</text
    >
  </svg>
  <p class="text-center text-sm text-slate-600" aria-hidden="true">
    Cột tím: thế hệ {steps.length}{before ? '; khung cam: thế hệ trước' : ''}.
  </p>

  <GenerationChart
    series={[{ name: 'Độ dày mỏ trung bình', values: means, color: '#4f46e5' }]}
    min={6}
    max={14}
    generations={Math.max(10, steps.length)}
    unit="mm"
    label="Độ dày mỏ trung bình qua các thế hệ: {means
      .map((m) => formatNumber(m, 1))
      .join('; ')} mm."
  />

  <FeedbackNote {tone} text={note} />
</div>
