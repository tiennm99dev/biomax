<script>
  import { onMount } from 'svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import { frameLoop, reducedMotion } from '#lib/core/motion.js';
  import { polar } from '#lib/core/visuals/svg-math.js';
  import { button } from '#lib/core/ui.js';
  import {
    ALL_MET,
    CHECKPOINTS,
    PHASES,
    advance,
    clusterSpots,
    phaseAt,
    startState,
    statusOf,
  } from './engine.js';

  /** @typedef {import('./engine.js').CheckpointId} CheckpointId */

  const RING = { x: 95, y: 110, r: 70 };
  const TURNS_PER_SECOND = 0.11;
  const TURNS_PER_SECOND_UNCONTROLLED = 0.3;

  let conditions = $state({ ...ALL_MET });
  let control = $state(true);
  let cycle = $state(startState());
  let running = $state(false);
  let reduced = $state(false);

  const note = $derived(statusOf(cycle, control, running));
  const dot = $derived(polar(RING.x, RING.y, RING.r, cycle.p * 360));
  const spots = $derived(clusterSpots(cycle.cells, 268, 110));
  const started = $derived(running || cycle.cycles > 0 || cycle.p > 0);

  onMount(() => {
    reduced = reducedMotion();
  });

  $effect(() => {
    if (!running) return;
    /** @type {() => void} */
    const stop = frameLoop((dt) => {
      cycle = advance(
        cycle,
        dt * (control ? TURNS_PER_SECOND : TURNS_PER_SECOND_UNCONTROLLED),
        conditions,
        control,
      );
      if (cycle.done || cycle.stopped) {
        running = false;
        stop();
      }
    });
    return stop;
  });

  /**
   * An arc of the ring between two fractions of a turn.
   * @param {number} from @param {number} to
   */
  function arc(from, to) {
    const a = polar(RING.x, RING.y, RING.r, from * 360);
    const b = polar(RING.x, RING.y, RING.r, to * 360);
    const large = to - from > 0.5 ? 1 : 0;
    return `M ${a.x} ${a.y} A ${RING.r} ${RING.r} 0 ${large} 1 ${b.x} ${b.y}`;
  }

  function play() {
    if (cycle.done) cycle = startState();
    if (reduced) {
      let s = advance(cycle, 0.01, conditions, control);
      while (!s.done && !s.stopped) s = advance(s, 0.01, conditions, control);
      cycle = s;
      return;
    }
    running = true;
  }

  function reset() {
    running = false;
    cycle = startState();
  }

  /** @param {CheckpointId} id */
  function toggle(id) {
    conditions[id] = !conditions[id];
    if (cycle.stopped === id && conditions[id]) play();
  }

  function toggleControl() {
    control = !control;
    reset();
  }
</script>

<div class="space-y-3">
  <svg
    viewBox="0 0 360 220"
    class="mx-auto block w-full max-w-lg rounded-xl bg-slate-50"
    role="img"
    aria-label="Vòng chu kì tế bào, tế bào đang ở pha {phaseAt(cycle.p)
      .id}, có {cycle.cells} tế bào"
  >
    {#each PHASES as ph (ph.id)}
      {@const mid = polar(RING.x, RING.y, RING.r, ((ph.from + ph.to) / 2) * 360)}
      <path d={arc(ph.from, ph.to)} fill="none" stroke={ph.color} stroke-width="28" />
      <text
        x={mid.x}
        y={mid.y + 5}
        text-anchor="middle"
        font-size="14"
        font-weight="700"
        fill="#0f172a">{ph.id}</text
      >
    {/each}
    <text
      x={RING.x}
      y={RING.y - 2}
      text-anchor="middle"
      font-size="12"
      font-weight="600"
      fill="#334155">Kì trung gian</text
    >
    <text x={RING.x} y={RING.y + 14} text-anchor="middle" font-size="11" fill="#475569"
      >G1, S, G2</text
    >
    {#each CHECKPOINTS as c (c.id)}
      {@const at = polar(RING.x, RING.y, RING.r + 21, c.at * 360)}
      <circle
        cx={at.x}
        cy={at.y}
        r="9"
        fill={conditions[c.id] ? '#059669' : '#dc2626'}
        stroke="#fff"
        stroke-width="1.5"
      />
      <text x={at.x} y={at.y + 4} text-anchor="middle" font-size="11" font-weight="700" fill="#fff"
        >{c.no}</text
      >
    {/each}
    <circle cx={dot.x} cy={dot.y} r="9" fill="#fff" stroke="#0f172a" stroke-width="3" />
    {#each spots as s, i (i)}
      <circle
        cx={s.x}
        cy={s.y}
        r="8"
        fill={control ? '#bbf7d0' : '#fecaca'}
        stroke={control ? '#047857' : '#b91c1c'}
        stroke-width="1.5"
      />
    {/each}
    <text x="268" y="214" text-anchor="middle" font-size="12" font-weight="600" fill="#334155"
      >{cycle.cells} tế bào</text
    >
  </svg>

  <ul class="grid gap-2 sm:grid-cols-3">
    {#each CHECKPOINTS as c (c.id)}
      <li>
        <button
          type="button"
          class="{conditions[c.id] ? button.secondary : button.quiet} w-full text-left text-sm"
          aria-pressed={conditions[c.id]}
          onclick={() => toggle(c.id)}
        >
          <span class="w-full">
            <span class="block font-bold">{c.no}. <LiveRichText text={c.name} /></span>
            <span class="block font-normal">{c.ask}: {conditions[c.id] ? 'đạt' : 'chưa đạt'}</span>
          </span>
        </button>
      </li>
    {/each}
  </ul>

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} onclick={play} disabled={running}>
      {cycle.done ? 'Chạy lại' : 'Chạy chu kì'}
    </button>
    <button type="button" class={button.quiet} onclick={reset} disabled={!started}>Làm lại</button>
    <button
      type="button"
      class={control ? button.quiet : button.secondary}
      aria-pressed={!control}
      onclick={toggleControl}
    >
      {control ? 'Làm hỏng hệ thống kiểm soát' : 'Sửa lại hệ thống kiểm soát'}
    </button>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>
