<script>
  import { tick } from 'svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import { CHALLENGES, KIND_LABELS, LEVELS, judgeLevel } from './engine.js';

  const KIND_COLORS = /** @type {Record<string, string>} */ ({
    'chua-song': 'bg-slate-300',
    'to-chuc': 'bg-sky-400',
    'co-ban': 'bg-emerald-500',
  });

  // Fixed spots for the crowd drawings, so the picture never jumps.
  const SPOTS = [
    [62, 52],
    [108, 34],
    [150, 62],
    [196, 38],
    [240, 58],
    [84, 100],
    [130, 118],
    [176, 100],
    [222, 116],
    [262, 96],
  ];

  let index = $state(2);
  let mode = $state(/** @type {'explore' | 'find'} */ ('explore'));
  let round = $state(0);
  /** @type {HTMLButtonElement | undefined} */
  let checkButton = $state();
  let verdict = $state(/** @type {{ ok: boolean, text: string } | null} */ (null));

  const level = $derived(LEVELS[index]);
  const challenge = $derived(CHALLENGES[round] ?? null);
  const lower = $derived(index > 0 ? LEVELS[index - 1].name : null);
  const higher = $derived(index + 1 < LEVELS.length ? LEVELS[index + 1].name : null);

  function check() {
    if (challenge) verdict = judgeLevel(challenge.level, index);
  }

  async function next() {
    round += 1;
    verdict = null;
    await tick();
    checkButton?.focus();
  }

  function restart() {
    round = 0;
    index = 0;
    verdict = null;
  }
</script>

{#snippet person(/** @type {number} */ x, /** @type {number} */ y, /** @type {string} */ color)}
  <circle cx={x} cy={y - 10} r="5" fill={color} />
  <path d="M{x - 6} {y + 10} L{x} {y - 5} L{x + 6} {y + 10} Z" fill={color} />
{/snippet}

{#snippet tree(/** @type {number} */ x, /** @type {number} */ y)}
  <rect x={x - 2} {y} width="4" height="12" fill="#92400e" />
  <circle cx={x} cy={y - 6} r="10" fill="#16a34a" />
{/snippet}

{#snippet fish(/** @type {number} */ x, /** @type {number} */ y)}
  <ellipse cx={x} cy={y} rx="11" ry="6" fill="#0284c7" />
  <path d="M{x - 10} {y} l-8 -6 v12 Z" fill="#0284c7" />
{/snippet}

{#snippet cell(/** @type {number} */ x, /** @type {number} */ y, /** @type {number} */ r)}
  <circle cx={x} cy={y} {r} fill="#fef3c7" stroke="#b45309" stroke-width="2" />
  <circle cx={x} cy={y} r={r * 0.35} fill="#7c3aed" />
{/snippet}

<div class="space-y-4">
  <SegmentedControl
    label="Hoạt động"
    options={[
      { value: 'explore', label: 'Thu phóng' },
      { value: 'find', label: 'Tìm cấp độ' },
    ]}
    bind:value={mode}
    onchange={restart}
  />

  {#if mode === 'find'}
    {#if challenge}
      <div class="rounded-xl border border-indigo-200 bg-indigo-50 p-4">
        <p class="text-xs font-semibold text-indigo-700">
          Câu {round + 1} trên {CHALLENGES.length}
        </p>
        <p class="mt-1 text-indigo-950">{challenge.text}</p>
      </div>
    {:else}
      <FeedbackNote
        tone="ok"
        text="Hoàn thành: em đã tìm đúng mọi cấp độ. Cấp dưới luôn làm nền tảng để tạo nên cấp trên."
      />
      <button type="button" class={button.quiet} onclick={restart}>Làm lại</button>
    {/if}
  {/if}

  <svg
    viewBox="0 0 300 150"
    class="block w-full rounded-xl bg-slate-50"
    role="img"
    aria-label="Hình minh hoạ cấp {level.name}. Ví dụ: {level.example}"
  >
    {#if level.id === 'phan-tu'}
      <line x1="110" y1="75" x2="150" y2="50" stroke="#475569" stroke-width="5" />
      <line x1="150" y1="50" x2="190" y2="75" stroke="#475569" stroke-width="5" />
      <line x1="150" y1="50" x2="150" y2="105" stroke="#475569" stroke-width="5" />
      <circle cx="150" cy="50" r="20" fill="#ef4444" />
      <circle cx="110" cy="75" r="14" fill="#38bdf8" />
      <circle cx="190" cy="75" r="14" fill="#38bdf8" />
      <circle cx="150" cy="105" r="14" fill="#334155" />
    {:else if level.id === 'bao-quan'}
      <ellipse cx="150" cy="75" rx="95" ry="48" fill="#fecaca" stroke="#b91c1c" stroke-width="3" />
      <path
        d="M70 75 q15 -40 30 0 q15 40 30 0 q15 -40 30 0 q15 40 30 0 q15 -40 30 0"
        fill="none"
        stroke="#b91c1c"
        stroke-width="3"
      />
    {:else if level.id === 'te-bao'}
      {@render cell(150, 75, 62)}
      <ellipse cx="108" cy="52" rx="13" ry="7" fill="#fca5a5" stroke="#b91c1c" />
      <ellipse cx="195" cy="98" rx="13" ry="7" fill="#fca5a5" stroke="#b91c1c" />
      <circle cx="118" cy="104" r="4" fill="#475569" />
      <circle cx="186" cy="48" r="4" fill="#475569" />
    {:else if level.id === 'mo'}
      {#each [0, 1, 2] as row (row)}
        {#each [0, 1, 2, 3, 4, 5] as col (col)}
          {@render cell(55 + col * 38 + (row % 2) * 19, 37 + row * 38, 19)}
        {/each}
      {/each}
    {:else if level.id === 'co-quan'}
      <path
        d="M150 132 C70 85 70 22 118 22 C135 22 146 32 150 46 C154 32 165 22 182 22 C230 22 230 85 150 132 Z"
        fill="#ef4444"
        stroke="#991b1b"
        stroke-width="3"
      />
      <path
        d="M150 118 C100 85 95 45 120 38 M150 118 C200 85 205 45 180 38"
        fill="none"
        stroke="#fecaca"
        stroke-width="3"
      />
    {:else if level.id === 'he-co-quan'}
      <path
        d="M150 40 C60 30 60 125 150 115 C240 125 240 30 150 40"
        fill="none"
        stroke="#dc2626"
        stroke-width="5"
      />
      <path
        d="M150 88 C120 68 124 48 138 50 C145 50 149 56 150 60 C151 56 155 50 162 50 C176 48 180 68 150 88 Z"
        fill="#ef4444"
      />
      <circle cx="73" cy="78" r="12" fill="#fca5a5" />
      <circle cx="227" cy="78" r="12" fill="#fca5a5" />
    {:else if level.id === 'co-the'}
      <circle cx="150" cy="30" r="16" fill="#6366f1" />
      <rect x="134" y="50" width="32" height="50" rx="10" fill="#6366f1" />
      <rect x="112" y="52" width="16" height="42" rx="8" fill="#818cf8" />
      <rect x="172" y="52" width="16" height="42" rx="8" fill="#818cf8" />
      <rect x="136" y="98" width="12" height="42" rx="6" fill="#818cf8" />
      <rect x="152" y="98" width="12" height="42" rx="6" fill="#818cf8" />
    {:else if level.id === 'quan-the'}
      {#each SPOTS as [x, y], i (i)}
        {@render tree(x, y + 8)}
      {/each}
    {:else if level.id === 'quan-xa'}
      {#each SPOTS as [x, y], i (i)}
        {#if i % 3 === 0}
          {@render tree(x, y + 8)}
        {:else if i % 3 === 1}
          {@render fish(x, y + 8)}
        {:else}
          {@render person(x, y + 8, '#f59e0b')}
        {/if}
      {/each}
    {:else if level.id === 'he-sinh-thai'}
      <rect x="0" y="108" width="300" height="42" fill="#7dd3fc" />
      <circle cx="262" cy="30" r="17" fill="#facc15" />
      {@render tree(52, 86)}
      {@render tree(112, 78)}
      {@render tree(176, 88)}
      {@render person(222, 88, '#f59e0b')}
      {@render fish(80, 128)}
      {@render fish(190, 133)}
    {:else}
      <circle cx="150" cy="75" r="62" fill="#38bdf8" />
      <path
        d="M112 40 C135 30 150 45 138 62 C125 78 105 62 112 40 Z M160 70 C190 58 208 80 192 104 C178 124 152 100 160 70 Z M100 90 C112 88 124 100 118 116 C106 118 96 106 100 90 Z"
        fill="#22c55e"
      />
      <circle cx="150" cy="75" r="68" fill="none" stroke="#bae6fd" stroke-width="5" />
    {/if}
  </svg>

  <div class="flex gap-0.5" aria-hidden="true">
    {#each LEVELS as l, i (l.id)}
      <div
        class="h-2 flex-1 rounded-sm {KIND_COLORS[l.kind]} {i === index
          ? 'outline-2 outline-offset-1 outline-indigo-600'
          : ''}"
      ></div>
    {/each}
  </div>

  <SliderField
    label="Cấp độ tổ chức"
    bind:value={index}
    min={0}
    max={LEVELS.length - 1}
    format={(v) => LEVELS[v].name}
    oninput={() => (verdict = null)}
  />

  {#if mode === 'explore'}
    <div
      class="space-y-1 rounded-xl border border-slate-200 p-4 text-sm text-slate-800"
      aria-live="polite"
    >
      <p class="text-base font-bold text-slate-900">{level.name}</p>
      <p class="font-semibold text-slate-600">{KIND_LABELS[level.kind]}</p>
      <p><strong>Ví dụ:</strong> {level.example}</p>
      <p><strong>Cấu tạo:</strong> {level.made}</p>
      <p><strong>Đặc điểm:</strong> {level.trait}</p>
      <p class="text-slate-600">
        {#if lower}Cấp dưới: {lower}.{/if}
        {#if higher}Cấp trên: {higher}.{/if}
      </p>
    </div>
  {:else if challenge}
    <div class="flex flex-wrap gap-2">
      <button
        type="button"
        class={button.primary}
        disabled={verdict?.ok}
        bind:this={checkButton}
        onclick={check}
      >
        Kiểm tra
      </button>
      {#if verdict?.ok}
        <button type="button" class={button.secondary} onclick={next}>
          {round + 1 < CHALLENGES.length ? 'Câu tiếp theo' : 'Xem kết quả'}
        </button>
      {/if}
    </div>
    <FeedbackNote
      tone={verdict ? (verdict.ok ? 'ok' : 'warn') : 'info'}
      text={verdict?.text ?? 'Kéo thanh trượt đến cấp độ được mô tả rồi bấm "Kiểm tra".'}
    />
  {/if}
</div>
