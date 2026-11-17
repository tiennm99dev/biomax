<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { MEASURES, SUCCESSIONS, stageText } from './engine.js';

  /** @typedef {import('./engine.js').Kind} Kind */

  const GROUND = 128;
  const LICHEN = [40, 95, 150, 210, 270, 315];
  const MOSS = [30, 80, 130, 185, 240, 300];
  const GRASS = [20, 50, 75, 115, 140, 175, 200, 235, 260, 290, 320];
  const SHRUBS = [60, 165, 250, 305];
  const SMALL_TREES = [35, 130, 220];
  const BIG_TREES = [90, 185, 280];

  let kind = $state(/** @type {Kind} */ ('nguyen-sinh'));
  let step = $state(0);

  const stages = $derived(SUCCESSIONS[kind].stages);
  const stage = $derived(stages[Math.min(step, stages.length - 1)]);
  const forms = $derived(new Set(stage.forms));
  const soilDepth = $derived(stage.soil * 2.6);

  function restart() {
    step = 0;
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Loại diễn thế"
    options={Object.entries(SUCCESSIONS).map(([value, s]) => ({ value, label: s.title }))}
    bind:value={kind}
    onchange={restart}
  />

  <svg
    viewBox="0 0 340 170"
    class="mx-auto block w-full max-w-xl rounded-xl"
    role="img"
    aria-label="{SUCCESSIONS[kind].title}, giai đoạn {step + 1}: {stage.name}"
  >
    <rect x="0" y="0" width="340" height="170" fill="#e0f2fe" />
    <rect x="0" y={GROUND} width="340" height={170 - GROUND} fill="#94a3b8" />
    {#if soilDepth > 0}
      <rect x="0" y={GROUND} width="340" height={soilDepth} fill="#92400e" />
    {/if}
    {#if forms.has('lichen')}
      {#each LICHEN as x (x)}
        <ellipse cx={x} cy={GROUND - 1} rx="9" ry="3" fill="#a3a35a" />
      {/each}
    {/if}
    {#if forms.has('moss')}
      {#each MOSS as x (x)}
        <ellipse cx={x} cy={GROUND - 2} rx="14" ry="4" fill="#4d7c0f" />
      {/each}
    {/if}
    {#if forms.has('grass')}
      {#each GRASS as x (x)}
        <path
          d="M{x - 4} {GROUND} l 2 -12 M{x} {GROUND} l 0 -15 M{x + 4} {GROUND} l -2 -11"
          stroke="#65a30d"
          stroke-width="2"
          stroke-linecap="round"
        />
      {/each}
    {/if}
    {#if forms.has('shrub')}
      {#each SHRUBS as x (x)}
        <circle cx={x} cy={GROUND - 12} r="13" fill="#3f6212" />
        <circle cx={x + 10} cy={GROUND - 8} r="9" fill="#4d7c0f" />
      {/each}
    {/if}
    {#if forms.has('smallTree')}
      {#each SMALL_TREES as x (x)}
        <rect x={x - 3} y={GROUND - 40} width="6" height="40" fill="#78350f" />
        <circle cx={x} cy={GROUND - 48} r="17" fill="#15803d" />
      {/each}
    {/if}
    {#if forms.has('bigTree')}
      {#each BIG_TREES as x (x)}
        <rect x={x - 5} y={GROUND - 80} width="10" height="80" fill="#713f12" />
        <ellipse cx={x} cy={GROUND - 92} rx="34" ry="24" fill="#166534" />
      {/each}
    {/if}
  </svg>

  <SliderField
    label="Tua thời gian"
    bind:value={step}
    min={0}
    max={stages.length - 1}
    format={(v) => `${v + 1}. ${stages[v]?.name ?? ''}`}
  />

  <dl class="grid gap-2 sm:grid-cols-2">
    {#each MEASURES as [key, label] (key)}
      <div class="text-sm">
        <dt class="mb-1 flex justify-between text-slate-700">
          <span>{label}</span>
          <span class="tabular-nums">{stage[key]}/10</span>
        </dt>
        <dd class="h-3 rounded-full bg-slate-200">
          <div
            class="h-3 rounded-full bg-emerald-600 transition-[width] motion-reduce:transition-none"
            style="width: {stage[key] * 10}%"
          ></div>
        </dd>
      </div>
    {/each}
  </dl>
  <p class="text-xs text-slate-600">Thang 0 – 10 chỉ để minh hoạ xu hướng biến đổi.</p>

  <FeedbackNote
    tone={kind === 'suy-thoai' && step > 0 ? 'warn' : 'info'}
    text={stageText(kind, Math.min(step, stages.length - 1))}
  />
</div>
