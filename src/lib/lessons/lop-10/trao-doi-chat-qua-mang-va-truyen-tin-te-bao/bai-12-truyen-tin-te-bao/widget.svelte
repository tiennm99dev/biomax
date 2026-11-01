<script>
  import { onMount } from 'svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { frameLoop, reducedMotion } from '#lib/core/motion.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import {
    NO_BLOCKS,
    SCENARIOS,
    STAGES,
    outcome,
    pointAt,
    reachOf,
    scenarioOf,
    stageAt,
    stopPoint,
    stoppedStage,
  } from './engine.js';

  /** @typedef {import('./engine.js').StageId} StageId */

  const NODES_PER_SECOND = 1.1;
  const options = SCENARIOS.map((s) => ({ value: s.id, label: s.name }));

  let scenarioId = $state('gan');
  /** @type {import('./engine.js').Blocks} */
  let blocks = $state({ ...NO_BLOCKS });
  let progress = $state(0);
  let phase = $state(/** @type {'idle' | 'running' | 'done'} */ ('idle'));
  let reduced = $state(false);

  const scenario = $derived(scenarioOf(scenarioId));
  const nodes = $derived(scenario.nodes);
  const reach = $derived(reachOf(nodes, blocks));
  const dot = $derived(pointAt(nodes, progress));
  const route = $derived(nodes.map((n) => `${n.x},${n.y}`).join(' '));
  const stage = $derived(stageAt(nodes, progress));
  const stopped = $derived(stoppedStage(blocks));
  /** @type {{ tone: 'ok' | 'warn' | 'info', text: string }} */
  const note = $derived(
    phase === 'done'
      ? outcome(scenario, blocks)
      : phase === 'running'
        ? { tone: 'info', text: 'Tín hiệu đang đi dọc con đường truyền tin.' }
        : { tone: 'info', text: `${scenario.signal} Bấm phát tín hiệu để theo dõi.` },
  );

  onMount(() => {
    reduced = reducedMotion();
  });

  $effect(() => {
    if (phase !== 'running') return;
    const end = stopPoint(nodes, blocks);
    /** @type {() => void} */
    const stop = frameLoop((dt) => {
      progress = Math.min(end, progress + dt * NODES_PER_SECOND);
      if (progress >= end) {
        phase = 'done';
        stop();
      }
    });
    return stop;
  });

  function fire() {
    if (reduced) {
      progress = stopPoint(nodes, blocks);
      phase = 'done';
      return;
    }
    progress = 0;
    phase = 'running';
  }

  function clearRun() {
    progress = 0;
    phase = 'idle';
  }

  /** @param {StageId} id */
  function toggle(id) {
    blocks[id] = !blocks[id];
    clearRun();
  }

  function changeScenario() {
    blocks = { ...NO_BLOCKS };
    clearRun();
  }

  /** @param {StageId} id */
  function stageClass(id) {
    if (phase === 'done' && stopped === id) return 'border-amber-600 bg-amber-100 text-amber-950';
    const order = STAGES.findIndex((s) => s.id === id);
    const now = STAGES.findIndex((s) => s.id === stage);
    if (phase !== 'idle' && now >= order) {
      return 'border-emerald-700 bg-emerald-100 text-emerald-950';
    }
    return 'border-slate-300 bg-white text-slate-700';
  }
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Tín hiệu và tế bào đích"
    {options}
    bind:value={scenarioId}
    onchange={changeScenario}
  />

  <svg
    viewBox="0 0 360 240"
    class="mx-auto block w-full max-w-lg rounded-xl bg-sky-50"
    role="img"
    aria-label="{scenario.name}. {scenario.receptor}. Tín hiệu {phase === 'idle'
      ? 'chưa phát'
      : `đã đi qua ${Math.floor(progress)} trên ${nodes.length - 1} chặng`}"
  >
    <text x="110" y="24" font-size="12" font-weight="600" fill="#0c4a6e">Ngoài tế bào</text>
    <rect
      x="8"
      y="58"
      width="344"
      height="176"
      rx="22"
      fill="#fff1f2"
      stroke="#b45309"
      stroke-width="5"
    />
    {#if scenario.hasNucleus}
      <circle cx="205" cy="185" r="42" fill="#e0e7ff" stroke="#3730a3" stroke-width="2" />
    {/if}
    <polyline
      points={route}
      fill="none"
      stroke="#94a3b8"
      stroke-width="2.5"
      stroke-dasharray="5 5"
    />
    {#each nodes as node, i (i)}
      {@const lit = phase !== 'idle' && progress >= i}
      {@const blocked = i === reach + 1 && stopped !== null}
      <circle
        cx={node.x}
        cy={node.y}
        r="10"
        fill={blocked ? '#fecaca' : lit ? '#6ee7b7' : '#ffffff'}
        stroke={blocked ? '#b91c1c' : lit ? '#047857' : '#475569'}
        stroke-width="2"
      />
      {#if blocked}
        <path
          d="M {node.x - 5} {node.y - 5} l 10 10 m 0 -10 l -10 10"
          stroke="#b91c1c"
          stroke-width="2.5"
        />
      {/if}
      <text
        x={node.x}
        y={node.y + 23}
        text-anchor="middle"
        font-size="10.5"
        font-weight="600"
        fill="#1e293b">{node.name}</text
      >
    {/each}
    {#if phase !== 'idle'}
      <circle cx={dot.x} cy={dot.y} r="6" fill="#dc2626" />
    {/if}
  </svg>

  <ol class="grid grid-cols-3 gap-2 text-center text-xs font-semibold sm:text-sm">
    {#each STAGES as s (s.id)}
      <li class="flex items-center justify-center rounded-lg border px-1 py-2 {stageClass(s.id)}">
        {s.name}
      </li>
    {/each}
  </ol>

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} onclick={fire}>Phát tín hiệu</button>
    {#each STAGES as s (s.id)}
      <button
        type="button"
        class={blocks[s.id] ? button.secondary : button.quiet}
        aria-pressed={blocks[s.id]}
        onclick={() => toggle(s.id)}
        >{blocks[s.id] ? `Bỏ chặn: ${s.name.toLowerCase()}` : scenario.blockLabels[s.id]}</button
      >
    {/each}
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>
