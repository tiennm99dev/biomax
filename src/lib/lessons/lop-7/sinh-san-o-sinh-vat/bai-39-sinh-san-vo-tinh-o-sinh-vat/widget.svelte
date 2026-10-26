<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import StageControls from '../_shared/stage-controls.svelte';
  import { FORMS, formById, stageText } from './engine.js';

  let formId = $state('phan-doi');
  let stage = $state(0);
  const form = $derived(formById(formId));
  const last = $derived(stage === form.stages.length - 1);

  /** Euglena-like cells for each stage of binary fission. */
  const FISSION = [
    [{ cx: 120, rx: 34, nuclei: [120] }],
    [{ cx: 120, rx: 46, nuclei: [104, 136] }],
    [
      { cx: 98, rx: 27, nuclei: [96] },
      { cx: 142, rx: 27, nuclei: [144] },
    ],
    [
      { cx: 72, rx: 32, nuclei: [72] },
      { cx: 168, rx: 32, nuclei: [168] },
    ],
  ];

  /** Leaf notches of the kalanchoe leaf where plantlets grow. */
  const NOTCHES = [62, 92, 122, 152, 182];
</script>

{#snippet hydra(/** @type {number} */ x, /** @type {number} */ y, /** @type {number} */ s)}
  <g transform="translate({x} {y}) scale({s})">
    <path
      d="M -12 0 Q -14 -40 -10 -80 L 10 -80 Q 14 -40 12 0 Z"
      fill="#a3e635"
      stroke="#4d7c0f"
      stroke-width="2"
    />
    {#each [-28, -12, 12, 28] as dx (dx)}
      <path
        d="M {dx / 3} -80 Q {dx} -100 {dx * 1.3} -112"
        fill="none"
        stroke="#4d7c0f"
        stroke-width="2.5"
        stroke-linecap="round"
      />
    {/each}
  </g>
{/snippet}

{#snippet bee(/** @type {number} */ x, /** @type {number} */ y, /** @type {number} */ s)}
  <g transform="translate({x} {y}) scale({s})">
    <ellipse cx="-6" cy="-20" rx="12" ry="8" fill="#e0f2fe" stroke="#64748b" />
    <ellipse cx="8" cy="-20" rx="12" ry="8" fill="#e0f2fe" stroke="#64748b" />
    <ellipse cx="0" cy="0" rx="24" ry="12" fill="#facc15" stroke="#854d0e" stroke-width="2" />
    <path d="M -6 -11 V 11 M 6 -11 V 11" stroke="#422006" stroke-width="4" />
    <circle cx="-26" cy="-2" r="7" fill="#422006" />
  </g>
{/snippet}

<div class="space-y-4">
  <SegmentedControl
    label="Hình thức sinh sản vô tính"
    options={FORMS.map((f) => ({ value: f.id, label: f.label }))}
    bind:value={formId}
    onchange={() => (stage = 0)}
  />

  <svg
    viewBox="0 0 240 180"
    class="mx-auto block w-full max-w-md"
    role="img"
    aria-label="{form.label} ở {form.organism.toLowerCase()}, bước {stage + 1}: {form.stages[
      stage
    ]}"
  >
    <rect width="240" height="180" rx="12" fill={formId === 'sinh-duong' ? '#f0fdf4' : '#f0f9ff'} />

    {#if formId === 'phan-doi'}
      {#each FISSION[stage] as c, i (i)}
        <g class="motion-safe:transition-all motion-safe:duration-500">
          <path
            d="M {c.cx - c.rx} 90 q -18 -14 -30 -4"
            fill="none"
            stroke="#15803d"
            stroke-width="2"
          />
          <ellipse
            cx={c.cx}
            cy="90"
            rx={c.rx}
            ry="20"
            fill="#bbf7d0"
            stroke="#15803d"
            stroke-width="2"
          />
          {#each c.nuclei as n (n)}
            <circle cx={n} cy="90" r="7" fill="#7c3aed" />
          {/each}
          <circle cx={c.cx - c.rx + 10} cy="84" r="3" fill="#dc2626" />
        </g>
      {/each}
      {#if stage === 3}
        <text x="120" y="150" text-anchor="middle" font-size="12" fill="#334155"
          >2 trùng roi con giống nhau</text
        >
      {/if}
    {:else if formId === 'nay-choi'}
      <rect x="0" y="156" width="240" height="24" fill="#a8a29e" />
      {@render hydra(100, 158, 1)}
      {#if stage === 1}
        <circle cx="114" cy="112" r="6" fill="#a3e635" stroke="#4d7c0f" stroke-width="2" />
      {:else if stage === 2}
        <g transform="translate(112 112) rotate(60)">{@render hydra(0, 0, 0.45)}</g>
      {:else if stage === 3}
        {@render hydra(180, 158, 0.5)}
        <text x="180" y="96" text-anchor="middle" font-size="11" fill="#334155">thuỷ tức con</text>
      {/if}
    {:else if formId === 'phan-manh'}
      {#if stage === 0}
        <rect
          x="50"
          y="76"
          width="140"
          height="28"
          rx="14"
          fill="#fda4af"
          stroke="#be123c"
          stroke-width="2"
        />
        <circle cx="62" cy="85" r="3" fill="#1f2937" />
        <circle cx="62" cy="95" r="3" fill="#1f2937" />
      {:else if stage < 3}
        <rect
          x="34"
          y="76"
          width="74"
          height="28"
          rx="8"
          fill="#fda4af"
          stroke="#be123c"
          stroke-width="2"
        />
        <circle cx="46" cy="85" r="3" fill="#1f2937" />
        <circle cx="46" cy="95" r="3" fill="#1f2937" />
        <rect
          x="132"
          y="76"
          width="74"
          height="28"
          rx="8"
          fill="#fda4af"
          stroke="#be123c"
          stroke-width="2"
        />
        {#if stage === 2}
          <rect
            x="108"
            y="78"
            width="16"
            height="24"
            rx="8"
            fill="#fecdd3"
            stroke="#be123c"
            stroke-dasharray="3 3"
          />
          <rect
            x="206"
            y="78"
            width="16"
            height="24"
            rx="8"
            fill="#fecdd3"
            stroke="#be123c"
            stroke-dasharray="3 3"
          />
          <text x="120" y="140" text-anchor="middle" font-size="11" fill="#334155"
            >phần nhạt: phần cơ thể đang tái tạo</text
          >
        {/if}
      {:else}
        {#each [50, 110] as y (y)}
          <rect
            x="70"
            {y}
            width="100"
            height="24"
            rx="12"
            fill="#fda4af"
            stroke="#be123c"
            stroke-width="2"
          />
          <circle cx="81" cy={y + 8} r="2.5" fill="#1f2937" />
          <circle cx="81" cy={y + 16} r="2.5" fill="#1f2937" />
        {/each}
      {/if}
    {:else if formId === 'trinh-san'}
      {#if stage === 0}
        {@render bee(90, 80, 1.3)}
        <ellipse
          cx="170"
          cy="110"
          rx="6"
          ry="10"
          fill="#fefce8"
          stroke="#a16207"
          stroke-width="2"
        />
        <text x="90" y="130" text-anchor="middle" font-size="11" fill="#334155">ong chúa</text>
        <text x="170" y="138" text-anchor="middle" font-size="11" fill="#334155">trứng</text>
      {:else if stage === 1}
        <ellipse
          cx="120"
          cy="86"
          rx="12"
          ry="20"
          fill="#fefce8"
          stroke="#a16207"
          stroke-width="2"
        />
        <text x="120" y="134" text-anchor="middle" font-size="11" fill="#334155"
          >trứng không được thụ tinh</text
        >
      {:else if stage === 2}
        <path
          d="M 96 100 q 24 -44 48 0"
          fill="none"
          stroke="#fef3c7"
          stroke-width="18"
          stroke-linecap="round"
        />
        <path
          d="M 96 100 q 24 -44 48 0"
          fill="none"
          stroke="#d97706"
          stroke-width="1.5"
          stroke-dasharray="2 5"
        />
        <text x="120" y="134" text-anchor="middle" font-size="11" fill="#334155">ấu trùng</text>
      {:else}
        {@render bee(120, 86, 1.2)}
        <text x="120" y="130" text-anchor="middle" font-size="11" fill="#334155">ong đực</text>
      {/if}
    {:else}
      <rect x="0" y="130" width="240" height="50" fill="#a16207" />
      <path
        d="M 40 128 Q 120 96 200 128 Q 120 144 40 128 Z"
        fill="#4ade80"
        stroke="#15803d"
        stroke-width="2"
        opacity={stage === 3 ? 0.45 : 1}
      />
      {#if stage >= 1}
        {#each NOTCHES as x (x)}
          {@const y = 126 - Math.sin(((x - 40) / 160) * Math.PI) * 14}
          {#if stage === 1}
            <circle cx={x} cy={y - 3} r="3.5" fill="#166534" />
          {:else}
            {@const h = stage === 2 ? 10 : 24}
            <path d="M {x} {y} V {y - h}" stroke="#166534" stroke-width="2" />
            <ellipse cx={x - 5} cy={y - h} rx="5" ry="3" fill="#22c55e" />
            <ellipse cx={x + 5} cy={y - h} rx="5" ry="3" fill="#22c55e" />
            <path
              d="M {x} {y} l -3 {stage === 2 ? 10 : 18} M {x} {y} l 3 {stage === 2 ? 10 : 18}"
              stroke="#78350f"
              stroke-width="1.5"
            />
          {/if}
        {/each}
      {/if}
      <text x="120" y="40" text-anchor="middle" font-size="11" fill="#334155"
        >{stage === 3 ? 'các cây lá bỏng con' : 'lá bỏng trên đất ẩm'}</text
      >
    {/if}
  </svg>

  <StageControls bind:stage count={form.stages.length} label="Bước" />
  <FeedbackNote tone={last ? 'ok' : 'info'} text={stageText(form, stage)} />
</div>
