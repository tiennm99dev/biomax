<script>
  import { onDestroy } from 'svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { frameLoop, reducedMotion } from '#lib/core/motion.js';
  import { button, focusRing } from '#lib/core/ui.js';
  import { SCENE, STAGES, VIRUSES, clueFor, isNext, mixedStages, sceneAt } from './engine.js';

  /** @typedef {import('./engine.js').VirusKind} VirusKind */

  /** Seconds one stage takes to play. */
  const STAGE_SECONDS = 2.4;

  const kindOptions = [
    { value: 'phage', label: VIRUSES.phage.name },
    { value: 'vo-ngoai', label: VIRUSES['vo-ngoai'].name },
  ];

  let kindValue = $state('phage');
  let seed = $state(24);
  let done = $state(0);
  /** The stage on the scene, or -1 before any stage is in place. */
  let stage = $state(-1);
  let progress = $state(0);
  let playingAll = $state(false);
  /** @type {string | null} */
  let wrongId = $state(null);
  let clue = $state('');

  /** @type {(() => void) | null} */
  let stopLoop = null;

  const kind = $derived(/** @type {VirusKind} */ (kindValue));
  const mixed = $derived(mixedStages(seed));
  const pool = $derived(mixed.filter((s) => STAGES.indexOf(s) >= done));
  const scene = $derived(stage < 0 ? sceneAt(kind, 0, 0) : sceneAt(kind, stage, progress));
  const finished = $derived(done === STAGES.length);
  const isPhage = $derived(kind === 'phage');
  const note = $derived.by(() => {
    if (clue) return { tone: /** @type {const} */ ('warn'), text: `Chưa đúng. ${clue}` };
    if (stage < 0) {
      return {
        tone: /** @type {const} */ ('info'),
        text: 'Virus đang ở bên ngoài tế bào. Theo em, giai đoạn nào diễn ra đầu tiên?',
      };
    }
    const current = STAGES[stage];
    return {
      tone: finished ? /** @type {const} */ ('ok') : /** @type {const} */ ('info'),
      text: `${current.name}: ${current.text[kind]}`,
    };
  });
  const sceneLabel = $derived(
    stage < 0
      ? `${VIRUSES[kind].name} ở ngoài ${VIRUSES[kind].host}`
      : `${VIRUSES[kind].name}, giai đoạn ${STAGES[stage].name}: ${STAGES[stage].text[kind]}`,
  );

  function stop() {
    stopLoop?.();
    stopLoop = null;
  }

  /**
   * Plays one stage on the scene. `then` runs when it ends.
   * @param {number} index
   * @param {() => void} [then]
   */
  function play(index, then) {
    stop();
    stage = index;
    if (reducedMotion()) {
      progress = 1;
      then?.();
      return;
    }
    progress = 0;
    stopLoop = frameLoop((dt) => {
      progress = Math.min(1, progress + dt / STAGE_SECONDS);
      if (progress >= 1) {
        stop();
        then?.();
      }
    });
  }

  /** @param {string} id */
  function pick(id) {
    if (isNext(done, id)) {
      wrongId = null;
      clue = '';
      done += 1;
      play(done - 1);
    } else {
      wrongId = id;
      clue = clueFor(done);
    }
  }

  /** @param {number} index */
  function playThrough(index) {
    playingAll = true;
    play(index, () => {
      if (index + 1 < STAGES.length) playThrough(index + 1);
      else playingAll = false;
    });
  }

  function replayAll() {
    if (reducedMotion()) {
      playingAll = false;
      play(0);
      return;
    }
    playThrough(0);
  }

  /** @param {number} index */
  function show(index) {
    playingAll = false;
    play(index);
  }

  function restart() {
    stop();
    playingAll = false;
    seed += 1;
    done = 0;
    stage = -1;
    progress = 0;
    wrongId = null;
    clue = '';
  }

  /** @param {string | number} value */
  function changeKind(value) {
    kindValue = String(value);
    clue = '';
    wrongId = null;
    if (stage >= 0) show(stage);
  }

  onDestroy(stop);
</script>

{#snippet genome(/** @type {number} */ x, /** @type {number} */ y)}
  <path
    d="M{x - 12} {y} q4 -8 8 0 t8 0 t8 0"
    fill="none"
    stroke="#be123c"
    stroke-width="2.5"
    stroke-linecap="round"
  />
{/snippet}

{#snippet hexagon(/** @type {number} */ x, /** @type {number} */ y, /** @type {number} */ r)}
  <polygon
    points="{x},{y - r} {x + r * 0.87},{y - r / 2} {x + r * 0.87},{y + r / 2} {x},{y + r} {x -
      r * 0.87},{y + r / 2} {x - r * 0.87},{y - r / 2}"
    fill="#e0e7ff"
    stroke="#4338ca"
    stroke-width="2"
  />
{/snippet}

{#snippet phage(
  /** @type {number} */ x,
  /** @type {number} */ y,
  /** @type {number} */ size,
  /** @type {boolean} */ filled,
)}
  <!-- The point (x, y) is the tip of the tail. -->
  <line
    x1={x}
    y1={y - size * 0.75}
    x2={x}
    y2={y - size * 0.1}
    stroke="#4338ca"
    stroke-width={size * 0.14}
  />
  <path
    d="M{x - size * 0.5} {y} L{x} {y - size * 0.2} L{x + size * 0.5} {y}"
    fill="none"
    stroke="#4338ca"
    stroke-width="1.5"
  />
  {@render hexagon(x, y - size * 1.1, size * 0.45)}
  {#if filled}
    <circle cx={x} cy={y - size * 1.1} r={size * 0.18} fill="#be123c" />
  {/if}
{/snippet}

{#snippet enveloped(/** @type {number} */ x, /** @type {number} */ y)}
  {#each [0, 45, 90, 135, 180, 225, 270, 315] as deg (deg)}
    <line
      x1={x + Math.cos((deg * Math.PI) / 180) * 15}
      y1={y + Math.sin((deg * Math.PI) / 180) * 15}
      x2={x + Math.cos((deg * Math.PI) / 180) * 20}
      y2={y + Math.sin((deg * Math.PI) / 180) * 20}
      stroke="#b45309"
      stroke-width="2.5"
    />
  {/each}
  <circle cx={x} cy={y} r="15" fill="#fef3c7" stroke="#b45309" stroke-width="2.5" />
  {@render hexagon(x, y, 9)}
  <circle cx={x} cy={y} r="3.5" fill="#be123c" />
{/snippet}

<div class="space-y-3">
  <SegmentedControl
    label="Loại virus"
    options={kindOptions}
    bind:value={kindValue}
    onchange={changeKind}
  />

  <div class="rounded-2xl bg-slate-50 p-2">
    <svg
      viewBox="0 0 {SCENE.width} {SCENE.height}"
      class="mx-auto block w-full max-w-lg"
      role="img"
      aria-label={sceneLabel}
    >
      {#if scene.burst}
        <path
          d="M30 200 V{SCENE.surface + 24} L62 {SCENE.surface + 8} M100 {SCENE.surface +
            2} H128 M196 {SCENE.surface} H222 M258 {SCENE.surface + 8} L290 {SCENE.surface +
            24} V200 H200 M170 200 H96 M64 200 H30"
          fill="none"
          stroke="#65a30d"
          stroke-width="3"
          stroke-dasharray="10 7"
        />
      {:else}
        <rect
          x="30"
          y={SCENE.surface}
          width="260"
          height="110"
          rx={isPhage ? 40 : 16}
          fill={isPhage ? '#ecfccb' : '#ffedd5'}
          stroke={isPhage ? '#65a30d' : '#ea580c'}
          stroke-width={isPhage ? 5 : 3}
        />
        <!-- Receptors along the surface -->
        {#each [100, 160, 220] as x (x)}
          <path
            d="M{x} {SCENE.surface} v-5 m-4 -3 l4 3 l4 -3"
            fill="none"
            stroke={isPhage ? '#65a30d' : '#ea580c'}
            stroke-width="2"
          />
        {/each}
      {/if}

      {#each scene.items as item, i (i)}
        <g opacity={item.opacity ?? 1}>
          {#if item.type === 'virion'}
            {#if isPhage}
              {@render phage(item.x, item.y, 26, true)}
            {:else}
              {@render enveloped(item.x, item.y)}
            {/if}
          {:else if item.type === 'shell'}
            {@render phage(item.x, item.y, 26, false)}
          {:else if item.type === 'capsid'}
            {@render hexagon(item.x, item.y, 14)}
            <circle cx={item.x} cy={item.y} r="5" fill="#be123c" />
          {:else if item.type === 'genome'}
            {@render genome(item.x, item.y)}
          {:else if item.type === 'protein'}
            <rect
              x={item.x - 5}
              y={item.y - 5}
              width="10"
              height="10"
              rx="2"
              fill="#a5b4fc"
              stroke="#4338ca"
            />
          {:else if isPhage}
            {@render phage(item.x, item.y + 10, 16, true)}
          {:else}
            {@render hexagon(item.x, item.y, 11)}
            <circle cx={item.x} cy={item.y} r="4" fill="#be123c" />
          {/if}
        </g>
      {/each}

      <text x="160" y="194" font-size="11" text-anchor="middle" fill="#334155">
        {scene.burst ? 'Tế bào bị phá vỡ' : VIRUSES[kind].host}
      </text>
    </svg>
  </div>

  <ol class="grid grid-cols-2 gap-2 sm:grid-cols-5" aria-label="Thứ tự các giai đoạn">
    {#each STAGES as s, i (s.id)}
      <li>
        {#if i < done}
          <button
            type="button"
            aria-pressed={stage === i}
            class="min-h-11 w-full rounded-xl border px-2 py-2 text-sm font-semibold transition {focusRing} {stage ===
            i
              ? 'border-indigo-600 bg-indigo-50 text-indigo-800'
              : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'}"
            onclick={() => show(i)}
          >
            {i + 1}. {s.name}
          </button>
        {:else}
          <span
            class="flex min-h-11 items-center justify-center rounded-xl border border-dashed border-slate-300 px-2 py-2 text-sm text-slate-500"
          >
            {i + 1}. ?
          </span>
        {/if}
      </li>
    {/each}
  </ol>

  {#if !finished}
    <div class="flex flex-wrap gap-2" role="group" aria-label="Chọn giai đoạn tiếp theo">
      {#each pool as s (s.id)}
        <button
          type="button"
          class="min-h-11 rounded-xl border px-4 py-2 text-sm font-semibold transition {focusRing} {wrongId ===
          s.id
            ? 'border-amber-500 bg-amber-50 text-amber-900'
            : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'}"
          onclick={() => pick(s.id)}
        >
          {s.name}
        </button>
      {/each}
    </div>
  {/if}

  <FeedbackNote tone={note.tone} text={note.text} />

  {#if finished}
    <div class="flex flex-wrap gap-2">
      <button type="button" class={button.primary} disabled={playingAll} onclick={replayAll}>
        Xem lại cả chu trình
      </button>
      <button type="button" class={button.quiet} onclick={restart}>Xếp lại</button>
    </div>
  {/if}
</div>
