<script>
  import { onMount } from 'svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { frameLoop, reducedMotion } from '#lib/core/motion.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import Stepper from '#lib/core/stepper.svelte';
  import { button } from '#lib/core/ui.js';
  import {
    ATP_FULL,
    BAND,
    BOARD_H,
    BOARD_W,
    CHANNEL_HALF,
    CHANNEL_YS,
    MEMBRANE_X,
    PARTICLE_R,
    PUMP_Y,
    SUBSTANCES,
    counts,
    createSim,
    describe,
    stepSim,
    substanceOf,
  } from './engine.js';

  /** @typedef {import('./engine.js').SubstanceId} SubstanceId */

  const START = { outside: 30, inside: 6, channels: 2 };
  const FAST_FORWARD = 5;
  const options = SUBSTANCES.map((s) => ({ value: s.id, label: s.name }));

  /** @type {SubstanceId} */
  let substance = $state('o2');
  let outside = $state(START.outside);
  let inside = $state(START.inside);
  let channels = $state(START.channels);
  let pump = $state(false);
  let running = $state(false);
  let reduced = $state(false);
  let seed = 1;
  let sim = $state.raw(createSim({ substance: 'o2', ...START, seed }));

  const sub = $derived(substanceOf(substance));
  const now = $derived(counts(sim));
  const note = $derived(describe(sim, pump));
  const pumping = $derived(pump && sub.pumpable && sim.atp > 0);

  onMount(() => {
    reduced = reducedMotion();
  });

  $effect(() => {
    if (!running) return;
    return frameLoop((dt) => {
      sim = stepSim(sim, dt, pump);
    });
  });

  function rebuild() {
    seed += 1;
    sim = createSim({ substance, outside, inside, channels, atp: sim.atp, seed });
  }

  function changeSubstance() {
    if (!substanceOf(substance).pumpable) pump = false;
    rebuild();
  }

  function fastForward() {
    let next = sim;
    for (let t = 0; t < FAST_FORWARD; t += 0.05) next = stepSim(next, 0.05, pump);
    sim = next;
  }
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Chất cần vận chuyển"
    {options}
    bind:value={substance}
    onchange={changeSubstance}
  />

  <svg
    viewBox="0 0 {BOARD_W} {BOARD_H}"
    class="mx-auto block w-full max-w-lg rounded-xl"
    role="img"
    aria-label="Màng tế bào: ngoài tế bào có {now.outside} phân tử {sub.name}, trong tế bào có {now.inside} phân tử"
  >
    <rect x="0" y="0" width={MEMBRANE_X} height={BOARD_H} fill="#f0f9ff" />
    <rect x={MEMBRANE_X} y="0" width={MEMBRANE_X} height={BOARD_H} fill="#fff1f2" />
    <rect
      x={MEMBRANE_X - BAND}
      y="0"
      width={BAND * 2}
      height={BOARD_H}
      fill="#fde68a"
      stroke="#b45309"
    />
    {#each CHANNEL_YS.slice(0, sub.needsProtein ? channels : 0) as y (y)}
      <rect
        x={MEMBRANE_X - BAND - 3}
        y={y - CHANNEL_HALF}
        width={BAND * 2 + 6}
        height={CHANNEL_HALF * 2}
        rx="6"
        fill="#99f6e4"
        stroke="#0f766e"
        stroke-width="2"
      />
    {/each}
    {#if sub.pumpable}
      <rect
        x={MEMBRANE_X - BAND - 5}
        y={PUMP_Y - 14}
        width={BAND * 2 + 10}
        height="28"
        rx="6"
        fill={pumping ? '#c026d3' : '#e2e8f0'}
        stroke="#701a75"
        stroke-width="2"
      />
      <text
        x={MEMBRANE_X}
        y={PUMP_Y + 4}
        text-anchor="middle"
        font-size="11"
        font-weight="700"
        fill={pumping ? '#ffffff' : '#334155'}>Bơm</text
      >
    {/if}
    {#each sim.particles as p, i (i)}
      <circle cx={p.x} cy={p.y} r={PARTICLE_R} fill={sub.color} />
    {/each}
    <text
      x="8"
      y="16"
      font-size="12"
      font-weight="600"
      fill="#0c4a6e"
      paint-order="stroke"
      stroke="#ffffff"
      stroke-width="3">Ngoài tế bào: {now.outside}</text
    >
    <text
      x={BOARD_W - 8}
      y="16"
      text-anchor="end"
      font-size="12"
      font-weight="600"
      fill="#881337"
      paint-order="stroke"
      stroke="#ffffff"
      stroke-width="3">Trong tế bào: {now.inside}</text
    >
  </svg>

  <div class="flex flex-wrap gap-2">
    {#if !reduced}
      <button type="button" class={button.primary} onclick={() => (running = !running)}
        >{running ? 'Tạm dừng' : 'Chạy mô phỏng'}</button
      >
    {/if}
    <button type="button" class={button.secondary} onclick={fastForward}>Tua 5 giây</button>
    <button type="button" class={button.quiet} onclick={rebuild}>Đặt lại nồng độ</button>
  </div>

  <div class="grid gap-3 sm:grid-cols-2">
    <SliderField
      label="Lúc đầu, số phân tử ngoài tế bào"
      bind:value={outside}
      min={0}
      max={40}
      oninput={rebuild}
    />
    <SliderField
      label="Lúc đầu, số phân tử trong tế bào"
      bind:value={inside}
      min={0}
      max={40}
      oninput={rebuild}
    />
  </div>

  {#if sub.needsProtein}
    <Stepper
      label="Số protein vận chuyển trên màng"
      bind:value={channels}
      min={0}
      max={CHANNEL_YS.length}
      onchange={() => (sim = { ...sim, channels })}
    />
  {/if}

  {#if sub.pumpable}
    <div class="flex flex-wrap items-center gap-2">
      <button
        type="button"
        class={button.secondary}
        aria-pressed={pump}
        onclick={() => (pump = !pump)}>{pump ? 'Tắt bơm ATP' : 'Bật bơm ATP'}</button
      >
      <button type="button" class={button.quiet} onclick={() => (sim = { ...sim, atp: ATP_FULL })}
        >Nạp đầy ATP</button
      >
      <span class="text-sm font-semibold text-slate-700 tabular-nums">Còn {sim.atp} ATP</span>
    </div>
  {/if}

  <FeedbackNote tone={note.tone} text={note.text} />
</div>
