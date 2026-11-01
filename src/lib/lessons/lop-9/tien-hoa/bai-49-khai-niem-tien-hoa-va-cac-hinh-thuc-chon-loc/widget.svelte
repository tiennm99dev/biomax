<script>
  import { tick } from 'svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import LineChart from '#lib/core/visuals/line-chart.svelte';
  import { rng } from '#lib/core/drill.js';
  import { button } from '#lib/core/ui.js';
  import {
    BARK_LABELS,
    MEALS,
    POPULATION,
    breed,
    darkShare,
    firstGeneration,
    hunt,
    trendText,
  } from './engine.js';

  const W = 300;
  const H = 200;
  const START_DARK = 3;
  const SHOWN = 20;

  let seed = 49;
  let rand = rng(seed);
  let nextId = POPULATION;

  /** @type {import('./engine.js').Bark} */
  let bark = $state('sam');
  let moths = $state(firstGeneration(START_DARK, POPULATION, rand));
  /** @type {number[]} */
  let eaten = $state([]);
  let history = $state([START_DARK / POPULATION]);
  let message = $state('');
  /** @type {SVGSVGElement | undefined} */
  let board = $state();

  const left = $derived(MEALS - eaten.length);
  const alive = $derived(moths.filter((m) => !eaten.includes(m.id)));
  const done = $derived(left === 0);
  const darkNow = $derived(moths.filter((m) => m.color === 'toi').length);

  // Lichen spots and bark streaks, fixed for every visitor.
  const texture = (() => {
    const r = rng(7);
    return {
      spots: Array.from({ length: 26 }, () => ({ x: r() * W, y: r() * H, rx: 6 + r() * 14 })),
      streaks: Array.from({ length: 14 }, () => ({ x: r() * W, w: 2 + r() * 5 })),
    };
  })();

  const pct = (/** @type {number} */ v) => `${Math.round(v * 100)}%`;
  const colorName = (/** @type {string} */ c) => (c === 'toi' ? 'màu tối' : 'màu sáng');

  /** @param {number} id */
  function catchMoth(id) {
    if (done || eaten.includes(id)) return;
    const moth = moths.find((m) => m.id === id);
    eaten = [...eaten, id];
    message = `Chim bắt được một con bướm ${colorName(moth?.color ?? '')}. Còn ${MEALS - eaten.length} lượt bắt.`;
  }

  /** @param {KeyboardEvent} e @param {number} id */
  async function onKey(e, id) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    e.preventDefault();
    // The caught moth leaves the board; keep keyboard focus on the next one.
    const order = alive.map((m) => m.id);
    const at = order.indexOf(id);
    catchMoth(id);
    const nextMoth = order[at + 1] ?? order[at - 1];
    await tick();
    const target = done ? null : board?.querySelector(`[data-moth="${nextMoth}"]`);
    if (target instanceof SVGElement) target.focus();
  }

  function autoHunt() {
    if (done) return;
    eaten = [...eaten, ...hunt(alive, bark, left, rand)];
    message = '';
  }

  function nextGeneration() {
    if (!done) autoHunt();
    const survivors = moths.filter((m) => !eaten.includes(m.id));
    moths = breed(survivors, POPULATION, rand, nextId);
    nextId += POPULATION;
    eaten = [];
    history = [...history, darkShare(moths)];
    message = '';
  }

  function runFive() {
    for (let i = 0; i < 5; i++) nextGeneration();
  }

  function reset() {
    seed += 1;
    rand = rng(seed);
    moths = firstGeneration(START_DARK, POPULATION, rand);
    nextId = POPULATION;
    eaten = [];
    history = [START_DARK / POPULATION];
    message = '';
  }

  /** @param {string | number} value */
  function chooseBark(value) {
    bark = value === 'sang' ? 'sang' : 'sam';
    message = `Môi trường đổi: ${BARK_LABELS[bark].toLowerCase()}. Quần thể bướm vẫn giữ nguyên, hãy xem chọn lọc tự nhiên tác động thế nào.`;
  }

  const shown = $derived(history.slice(-SHOWN));
  const firstShown = $derived(history.length - shown.length);
  const series = $derived([
    { name: 'Bướm màu tối', values: shown.map((p) => Math.round(p * 100)) },
  ]);
  const labels = $derived(shown.map((_, i) => String(firstShown + i)));

  const feedback = $derived(
    message ||
      (done
        ? `Chim đã ăn ${MEALS} con. Còn sống ${alive.length} con, trong đó ${alive.filter((m) => m.color === 'toi').length} con màu tối. Bấm "Sinh sản" để những con sống sót sinh ra thế hệ sau.`
        : trendText(history, bark)),
  );
  const tone = $derived(history.length > 1 && !message ? 'ok' : 'info');
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Môi trường sống"
    options={[
      { value: 'sang', label: BARK_LABELS.sang },
      { value: 'sam', label: BARK_LABELS.sam },
    ]}
    value={bark}
    onchange={chooseBark}
  />

  <p class="text-sm text-slate-700">
    Thế hệ <strong>{history.length - 1}</strong>: {darkNow}/{POPULATION} bướm màu tối ({pct(
      darkNow / POPULATION,
    )}). Lượt bắt còn lại: <strong>{left}</strong>.
  </p>

  <svg
    bind:this={board}
    viewBox="0 0 {W} {H}"
    class="block h-auto w-full touch-manipulation rounded-xl select-none"
    role="group"
    aria-label="Thân cây với {alive.length} con bướm đang đậu. Chạm hoặc nhấn Enter vào một con để chim bắt nó."
  >
    <rect width={W} height={H} fill={bark === 'sang' ? '#d6d3d1' : '#3f3a36'} />
    {#each texture.streaks as s, i (i)}
      <rect
        x={s.x}
        y="0"
        width={s.w}
        height={H}
        fill={bark === 'sang' ? '#c4bfbb' : '#2f2b28'}
        opacity="0.7"
      />
    {/each}
    {#if bark === 'sang'}
      {#each texture.spots as s, i (i)}
        <ellipse cx={s.x} cy={s.y} rx={s.rx} ry={s.rx * 0.6} fill="#ecebe8" opacity="0.8" />
      {/each}
    {/if}
    {#each moths as m (m.id)}
      {#if !eaten.includes(m.id)}
        <g
          class="drag-handle cursor-pointer outline-none"
          role="button"
          tabindex="0"
          data-moth={m.id}
          aria-label="Bướm {colorName(m.color)}"
          transform="translate({(m.x / 100) * W} {(m.y / 100) * H}) rotate({m.turn})"
          onclick={() => catchMoth(m.id)}
          onkeydown={(e) => onKey(e, m.id)}
        >
          <ellipse
            class="drag-knob"
            cx="-6"
            cy="0"
            rx="7"
            ry="5"
            fill={m.color === 'toi' ? '#1c1917' : '#efedea'}
            stroke={m.color === 'toi' ? '#292524' : '#a8a29e'}
            stroke-width="0.6"
          />
          <ellipse
            cx="6"
            cy="0"
            rx="7"
            ry="5"
            fill={m.color === 'toi' ? '#1c1917' : '#efedea'}
            stroke={m.color === 'toi' ? '#292524' : '#a8a29e'}
            stroke-width="0.6"
          />
          <rect x="-1" y="-5" width="2" height="10" rx="1" fill="#57534e" />
        </g>
      {/if}
    {/each}
  </svg>

  <div class="flex flex-wrap gap-2">
    {#if done}
      <button type="button" class={button.primary} onclick={nextGeneration}>
        Sinh sản: sang thế hệ sau
      </button>
    {:else}
      <button type="button" class={button.secondary} onclick={autoHunt}>
        Để chim tự săn {left} con
      </button>
    {/if}
    <button type="button" class={button.secondary} onclick={runFive}>Chạy nhanh 5 thế hệ</button>
    <button type="button" class={button.quiet} onclick={reset}>Làm lại</button>
  </div>

  <FeedbackNote {tone} text={feedback} />

  {#if history.length > 1}
    <LineChart
      {labels}
      {series}
      min={0}
      max={100}
      unit="% bướm màu tối"
      title="Tỉ lệ bướm màu tối qua các thế hệ"
      showValues={shown.length <= 8}
    />
  {/if}
</div>
