<script>
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import {
    FULL_WORLD,
    NOTHING_SEEN,
    ORGANISMS,
    STAGES,
    STATUS_TEXT,
    describeWorld,
    stageStatus,
    updateSeen,
  } from './engine.js';

  /** @type {import('./engine.js').OrganismId} */
  let organismId = $state('cay-xanh');
  let world = $state({ ...FULL_WORLD });
  /** @type {import('./engine.js').StageId} */
  let stageId = $state('tong-hop');
  /** @type {string[]} */
  let visited = $state(['tong-hop']);
  let seen = $state(NOTHING_SEEN);

  const organism = $derived(ORGANISMS.find((o) => o.id === organismId) ?? ORGANISMS[0]);
  const status = $derived(stageStatus(organismId, world));
  const stage = $derived(STAGES.find((s) => s.id === stageId) ?? STAGES[0]);
  const note = $derived(describeWorld(organismId, world));
  const goals = $derived([
    { done: seen.allStages, text: 'Mở đủ ba giai đoạn của một sinh vật.' },
    { done: seen.dark, text: 'Tắt ánh sáng và xem cây xanh còn làm được gì.' },
    { done: seen.noPlants, text: 'Bỏ cây xanh và xem con thỏ ra sao.' },
    { done: seen.chemo, text: 'Xem vi khuẩn nitrate hoá khi không có ánh sáng hoặc cây xanh.' },
  ]);

  /** @type {Record<import('./engine.js').StageStatus, string>} */
  const BOX = {
    on: 'border-emerald-500 bg-emerald-50 text-emerald-900',
    store: 'border-amber-500 bg-amber-50 text-amber-900',
    off: 'border-slate-300 bg-slate-100 text-slate-500',
  };

  function record() {
    seen = updateSeen(seen, organismId, world, visited.length);
  }

  /** @param {string | number} next */
  function chooseOrganism(next) {
    organismId = next === 'vi-khuan' ? 'vi-khuan' : next === 'tho' ? 'tho' : 'cay-xanh';
    visited = [stageId];
    record();
  }

  /** @param {import('./engine.js').StageId} id */
  function openStage(id) {
    stageId = id;
    if (!visited.includes(id)) visited = [...visited, id];
    record();
  }

  function toggleLight() {
    world.light = !world.light;
    record();
  }

  function togglePlants() {
    world.plants = !world.plants;
    record();
  }
</script>

<div class="space-y-3">
  <svg viewBox="0 0 360 150" class="w-full" aria-hidden="true">
    <rect x="0" y="0" width="360" height="150" rx="10" fill={world.light ? '#f0f9ff' : '#334155'} />
    <circle cx="36" cy="34" r="20" fill={world.light ? '#facc15' : '#64748b'} />
    {#if world.light}
      <path d="M 60 40 L 118 74" class="flow" stroke="#ca8a04" />
    {/if}
    <rect x="0" y="118" width="360" height="32" fill="#a16207" opacity="0.35" />
    {#if world.plants}
      <g>
        <rect x="136" y="72" width="6" height="48" fill="#854d0e" />
        <ellipse cx="139" cy="62" rx="26" ry="20" fill={world.light ? '#16a34a' : '#4d7c0f'} />
      </g>
      <path d="M 170 88 L 222 88" class="flow" stroke="#16a34a" />
    {:else}
      <text x="139" y="108" text-anchor="middle" font-size="11" fill="#b91c1c">không còn cây</text>
    {/if}
    <g>
      <ellipse cx="256" cy="100" rx="24" ry="15" fill="#d6d3d1" stroke="#78716c" />
      <circle cx="281" cy="88" r="9" fill="#d6d3d1" stroke="#78716c" />
      <ellipse cx="280" cy="72" rx="3" ry="10" fill="#d6d3d1" stroke="#78716c" />
      <ellipse cx="288" cy="73" rx="3" ry="10" fill="#d6d3d1" stroke="#78716c" />
    </g>
    <g fill="#7e22ce">
      <circle cx="50" cy="132" r="3" /><circle cx="60" cy="136" r="3" /><circle
        cx="70"
        cy="130"
        r="3"
      /><circle cx="80" cy="137" r="3" />
    </g>
    <text x="96" y="139" font-size="11" fill={world.light ? '#3b0764' : '#f3e8ff'}
      >vi khuẩn trong đất</text
    >
    <path d="M 318 90 q 8 -10 0 -20 q -8 -10 0 -20" fill="none" stroke="#dc2626" stroke-width="2" />
    <text
      x="318"
      y="42"
      text-anchor="middle"
      font-size="11"
      fill={world.light ? '#991b1b' : '#fecaca'}>nhiệt</text
    >
  </svg>

  <SegmentedControl
    label="Theo dõi năng lượng ở"
    value={organismId}
    onchange={chooseOrganism}
    options={ORGANISMS.map((o) => ({ value: o.id, label: o.name }))}
  />

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.secondary} aria-pressed={world.light} onclick={toggleLight}>
      {world.light ? 'Đang có ánh sáng: bấm để tắt' : 'Không có ánh sáng: bấm để bật'}
    </button>
    <button
      type="button"
      class={button.secondary}
      aria-pressed={world.plants}
      onclick={togglePlants}
    >
      {world.plants ? 'Có cây xanh: bấm để bỏ' : 'Không có cây xanh: bấm để trồng lại'}
    </button>
  </div>

  <p class="text-sm">
    <span class="font-semibold">{organism.name}</span> ({organism.mode.toLowerCase()}). Nguồn năng
    lượng: {organism.source}.
  </p>

  <ol class="grid gap-2 sm:grid-cols-3">
    {#each STAGES as item, i (item.id)}
      <li>
        <button
          type="button"
          class="min-h-11 w-full rounded-lg border-2 px-3 py-2 text-left text-sm {BOX[
            status[item.id]
          ]} {item.id === stageId ? 'ring-2 ring-indigo-500' : ''} {focusRing}"
          aria-current={item.id === stageId ? 'step' : undefined}
          onclick={() => openStage(item.id)}
        >
          <span class="block font-semibold">{i + 1}. {item.name}</span>
          <span class="block text-xs">{STATUS_TEXT[status[item.id]]}</span>
        </button>
      </li>
    {/each}
  </ol>

  <div class="rounded-xl bg-slate-50 p-4 text-sm text-slate-800">
    <p class="font-semibold">{stage.name}: {stage.form}</p>
    <p class="mt-1"><LiveRichText text={organism.detail[stageId]} /></p>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />

  <ul class="space-y-1 text-sm">
    {#each goals as goal (goal.text)}
      <li class={goal.done ? 'font-semibold text-emerald-800' : 'text-slate-700'}>
        {goal.done ? '✓' : '○'}
        {goal.text}
      </li>
    {/each}
  </ul>
</div>

<style>
  .flow {
    fill: none;
    stroke-width: 3;
    stroke-dasharray: 6 5;
  }
  @media (prefers-reduced-motion: no-preference) {
    .flow {
      animation: run 1s linear infinite;
    }
  }
  @keyframes run {
    to {
      stroke-dashoffset: -11;
    }
  }
</style>
