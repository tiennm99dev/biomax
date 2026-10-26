<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import StageControls from '../_shared/stage-controls.svelte';
  import {
    ANIMALS,
    ANIMAL_STAGE_COUNT,
    PLANT_STAGES,
    animalById,
    animalText,
    asPollinator,
    plantText,
  } from './engine.js';

  let tab = $state('thuc-vat');

  let stage = $state(0);
  let pollinator = $state('con-trung');
  const p = $derived(asPollinator(pollinator));

  let animalId = $state('ca-chep');
  let aStage = $state(0);
  const animal = $derived(animalById(animalId));

  /** Mirror a petal or sepal path across the flower's axis x = 120. */
  const LEFT_PETAL = 'M 104 170 C 56 164 30 108 46 80 C 70 94 98 136 110 166 Z';
  const RIGHT_PETAL = 'M 136 170 C 184 164 210 108 194 80 C 170 94 142 136 130 166 Z';
  const LEFT_SEPAL = 'M 98 178 C 82 178 70 168 66 156 C 80 160 92 166 102 172 Z';
  const RIGHT_SEPAL = 'M 142 178 C 158 178 170 168 174 156 C 160 160 148 166 138 172 Z';
  const fruit = $derived(stage === 4);
</script>

{#snippet sperm(/** @type {number} */ x, /** @type {number} */ y)}
  <g transform="translate({x} {y})">
    <ellipse cx="0" cy="0" rx="4" ry="3" fill="#2563eb" />
    <path d="M 4 0 q 5 -4 10 0 q 5 4 10 0" fill="none" stroke="#2563eb" stroke-width="1.5" />
  </g>
{/snippet}

<div class="space-y-4">
  <SegmentedControl
    label="Sinh sản hữu tính ở"
    options={[
      { value: 'thuc-vat', label: 'Thực vật có hoa' },
      { value: 'dong-vat', label: 'Động vật' },
    ]}
    bind:value={tab}
  />

  {#if tab === 'thuc-vat'}
    <SegmentedControl
      label="Hạt phấn được chuyển tới đầu nhụy nhờ"
      options={[
        { value: 'con-trung', label: 'Côn trùng' },
        { value: 'gio', label: 'Gió' },
      ]}
      bind:value={pollinator}
    />
    <svg
      viewBox="0 0 240 220"
      class="mx-auto block w-full max-w-md"
      role="img"
      aria-label="Hoa, bước {stage + 1}: {PLANT_STAGES[stage]}"
    >
      <rect width="240" height="220" rx="12" fill="#f0fdf4" />
      <line x1="120" y1="182" x2="120" y2="218" stroke="#15803d" stroke-width="6" />
      {#if !fruit}
        <path d={LEFT_PETAL} fill="#f9a8d4" stroke="#be185d" stroke-width="1.5" />
        <path d={RIGHT_PETAL} fill="#f9a8d4" stroke="#be185d" stroke-width="1.5" />
      {/if}
      <path d={LEFT_SEPAL} fill="#4ade80" stroke="#15803d" stroke-width="1.5" />
      <path d={RIGHT_SEPAL} fill="#4ade80" stroke="#15803d" stroke-width="1.5" />
      <ellipse
        cx="120"
        cy="178"
        rx="30"
        ry="7"
        fill="#86efac"
        stroke="#15803d"
        stroke-width="1.5"
      />
      {#if fruit}
        <ellipse
          cx="120"
          cy="146"
          rx="36"
          ry="33"
          fill="#fb923c"
          stroke="#c2410c"
          stroke-width="2"
        />
        <ellipse cx="108" cy="150" rx="7" ry="10" fill="#78350f" />
        <ellipse cx="132" cy="150" rx="7" ry="10" fill="#78350f" />
        <text x="120" y="104" text-anchor="middle" font-size="11" fill="#334155"
          >quả (từ bầu nhụy)</text
        >
        <line x1="136" y1="150" x2="164" y2="150" stroke="#334155" />
        <text x="168" y="154" font-size="11" fill="#334155">hạt (từ noãn)</text>
      {:else}
        <line x1="108" y1="172" x2="90" y2="106" stroke="#ca8a04" stroke-width="2.5" />
        <line x1="132" y1="172" x2="150" y2="106" stroke="#ca8a04" stroke-width="2.5" />
        <ellipse
          cx="89"
          cy="98"
          rx="6"
          ry="10"
          fill="#facc15"
          stroke="#a16207"
          stroke-width="1.5"
        />
        <ellipse
          cx="151"
          cy="98"
          rx="6"
          ry="10"
          fill="#facc15"
          stroke="#a16207"
          stroke-width="1.5"
        />
        <ellipse
          cx="120"
          cy="154"
          rx="18"
          ry="17"
          fill="#bbf7d0"
          stroke="#166534"
          stroke-width="1.5"
        />
        <circle
          cx="114"
          cy="156"
          r="4"
          fill={stage >= 3 ? '#a855f7' : '#fef9c3'}
          stroke="#a16207"
        />
        <circle cx="126" cy="156" r="4" fill="#fef9c3" stroke="#a16207" />
        <rect
          x="117"
          y="90"
          width="6"
          height="50"
          fill="#bbf7d0"
          stroke="#166534"
          stroke-width="1.5"
        />
        <ellipse
          cx="120"
          cy="88"
          rx="10"
          ry="5"
          fill="#86efac"
          stroke="#166534"
          stroke-width="1.5"
        />
        {#if stage >= 1}
          <circle cx="116" cy="84" r="2.5" fill="#eab308" />
          <circle cx="123" cy="83" r="2.5" fill="#eab308" />
        {/if}
        {#if stage === 2 || stage === 3}
          <path
            d="M 116 86 L 118 140 Q 118 150 114 152"
            fill="none"
            stroke="#ea580c"
            stroke-width="2"
            stroke-dasharray={stage === 2 ? '4 3' : undefined}
          />
          <text x="186" y="130" font-size="10" fill="#9a3412">ống phấn</text>
        {/if}
        {#if stage === 3}
          <text x="60" y="200" font-size="10" fill="#6b21a8">hợp tử trong noãn</text>
        {/if}
        {#if stage === 1}
          {#if p === 'con-trung'}
            <g transform="translate(176 62)">
              <ellipse cx="-6" cy="-10" rx="8" ry="5" fill="#e0f2fe" stroke="#64748b" />
              <ellipse cx="6" cy="-10" rx="8" ry="5" fill="#e0f2fe" stroke="#64748b" />
              <ellipse
                cx="0"
                cy="0"
                rx="14"
                ry="7"
                fill="#facc15"
                stroke="#854d0e"
                stroke-width="1.5"
              />
              <path d="M -3 -6 V 6 M 4 -6 V 6" stroke="#422006" stroke-width="2.5" />
              <circle cx="-15" cy="-1" r="4" fill="#422006" />
            </g>
            <path
              d="M 160 64 Q 140 60 128 78"
              fill="none"
              stroke="#94a3b8"
              stroke-dasharray="3 3"
            />
          {:else}
            {#each [50, 64, 78] as y (y)}
              <path d="M 8 {y} q 20 -6 40 0 t 40 0" fill="none" stroke="#38bdf8" stroke-width="2" />
            {/each}
            <circle cx="98" cy="72" r="2" fill="#eab308" />
            <circle cx="106" cy="78" r="2" fill="#eab308" />
          {/if}
        {/if}
      {/if}
    </svg>
    <StageControls bind:stage count={PLANT_STAGES.length} label="Bước" />
    <FeedbackNote tone={fruit ? 'ok' : 'info'} text={plantText(stage, p)} />
  {:else}
    <SegmentedControl
      label="Loài"
      options={ANIMALS.map((a) => ({ value: a.id, label: a.label }))}
      bind:value={animalId}
      onchange={() => (aStage = 0)}
    />
    <svg
      viewBox="0 0 240 160"
      class="mx-auto block w-full max-w-md"
      role="img"
      aria-label={animalText(animal, aStage)}
    >
      <rect
        width="240"
        height="160"
        rx="12"
        fill={aStage === 0
          ? '#f8fafc'
          : animal.fertilization === 'ngoai' && aStage < 3
            ? '#e0f2fe'
            : aStage === 3 && animal.birth === 'de-trung'
              ? '#fefce8'
              : '#fce7f3'}
      />
      {#if aStage === 0}
        <text x="60" y="26" text-anchor="middle" font-size="11" fill="#334155"
          >con đực: tinh trùng</text
        >
        <text x="180" y="26" text-anchor="middle" font-size="11" fill="#334155">con cái: trứng</text
        >
        {@render sperm(40, 70)}
        {@render sperm(52, 92)}
        {@render sperm(36, 112)}
        <circle cx="180" cy="90" r="26" fill="#fde68a" stroke="#b45309" stroke-width="2" />
        <circle cx="180" cy="90" r="7" fill="#b45309" />
      {:else if aStage === 1}
        <text x="120" y="22" text-anchor="middle" font-size="11" fill="#334155"
          >{animal.fertilization === 'ngoai'
            ? 'trong nước (thụ tinh ngoài)'
            : 'trong cơ thể con cái (thụ tinh trong)'}</text
        >
        <circle cx="140" cy="90" r="30" fill="#fde68a" stroke="#b45309" stroke-width="2" />
        <circle cx="140" cy="90" r="9" fill="#7c3aed" />
        {@render sperm(84, 90)}
        {@render sperm(60, 66)}
        <text x="140" y="140" text-anchor="middle" font-size="11" fill="#334155">hợp tử</text>
      {:else if aStage === 2}
        {#each [[-9, -9], [9, -9], [-9, 9], [9, 9], [0, -18], [0, 18], [-18, 0], [18, 0]] as [dx, dy], i (i)}
          <circle cx={120 + dx} cy={84 + dy} r="10" fill="#fde68a" stroke="#b45309" />
        {/each}
        <text x="120" y="140" text-anchor="middle" font-size="11" fill="#334155">phôi</text>
      {:else}
        {#if animal.birth === 'de-trung'}
          <ellipse
            cx="120"
            cy="82"
            rx="38"
            ry="48"
            fill="#fff7ed"
            stroke="#9a3412"
            stroke-width="2"
          />
        {:else}
          <path
            d="M 70 40 Q 120 10 170 40 Q 190 90 120 134 Q 50 90 70 40 Z"
            fill="#fbcfe8"
            stroke="#be185d"
            stroke-width="2"
          />
        {/if}
        <path d="M 104 90 q 0 -24 20 -20 q 16 4 10 22 q -8 12 -22 8 Z" fill="#fb7185" />
        <circle cx="122" cy="78" r="3" fill="#1f2937" />
        <text x="120" y="152" text-anchor="middle" font-size="11" fill="#334155"
          >{animal.birth === 'de-trung'
            ? `phôi phát triển trong trứng → ${animal.young}`
            : `phôi phát triển trong tử cung → ${animal.young}`}</text
        >
      {/if}
    </svg>
    <StageControls bind:stage={aStage} count={ANIMAL_STAGE_COUNT} label="Bước" />
    <FeedbackNote
      tone={aStage === ANIMAL_STAGE_COUNT - 1 ? 'ok' : 'info'}
      text={animalText(animal, aStage)}
    />
  {/if}
</div>
