<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { button, focusRing } from '#lib/core/ui.js';
  import { ACTIONS, START, action, apply, tubeText } from './engine.js';

  const BENCH = shuffled(ACTIONS, 2024);

  let tube = $state(START);
  /** @type {{ id: string, tone: 'ok' | 'warn' | 'info' }[]} */
  let log = $state([]);
  let note = $state({
    tone: /** @type {'ok' | 'warn' | 'info'} */ ('info'),
    text: 'Ống có mẫu mô tươi. Chọn hoá chất hoặc thao tác đầu tiên.',
  });

  /** @param {string} id */
  function act(id) {
    const step = apply(tube, id);
    tube = step.tube;
    note = { tone: step.tone, text: step.text };
    log = [...log, { id, tone: step.tone }];
  }

  function restart() {
    tube = START;
    log = [];
    note = { tone: 'info', text: 'Ống có mẫu mô tươi. Chọn hoá chất hoặc thao tác đầu tiên.' };
  }

  /** Fixed spots inside the tube for the drawn molecules, as [x, y]. */
  const CELLS = [
    [70, 150],
    [108, 168],
    [82, 196],
    [116, 128],
  ];
  const PROTEIN = [
    [64, 132],
    [118, 150],
    [74, 178],
    [124, 196],
    [96, 212],
  ];
  const RNA = [
    [86, 124],
    [60, 160],
    [112, 184],
    [70, 214],
  ];
  const DEBRIS = [
    [66, 226],
    [96, 232],
    [122, 224],
  ];

  /** The y of the DNA: in the liquid, or floating in the alcohol on top. */
  const dnaY = $derived(tube.precipitated ? 82 : 150);
</script>

<div class="space-y-3">
  <div class="grid gap-3 sm:grid-cols-[180px_minmax(0,1fr)]">
    <figure class="space-y-1">
      <svg
        viewBox="0 0 190 260"
        class="mx-auto block w-40 sm:w-full"
        role="img"
        aria-label={tubeText(tube)}
      >
        <!-- tube -->
        <path
          d="M 45 20 V 220 q 0 30 50 30 q 50 0 50 -30 V 20"
          fill="#f8fafc"
          stroke="#64748b"
          stroke-width="3"
        />
        <!-- cell liquid -->
        <path
          d="M 47 110 V 220 q 0 28 48 28 q 48 0 48 -28 V 110 z"
          fill={tube.done ? '#e0f2fe' : '#fef3c7'}
        />
        {#if tube.precipitated && !tube.done}
          <rect x="47" y="56" width="96" height="54" fill="#dbeafe" />
          <text x="95" y="50" text-anchor="middle" font-size="11" fill="#1e3a8a">ethanol</text>
        {/if}

        {#if !tube.lysed}
          {#if tube.dna !== 'mat'}
            {#each CELLS as [x, y] (`${x}-${y}`)}
              <circle cx={x} cy={y} r="15" fill="#fde68a" stroke="#b45309" stroke-width="2" />
              <circle cx={x} cy={y} r="6" fill="#7c3aed" />
            {/each}
          {/if}
        {:else}
          {#if tube.protein && !tube.done}
            {#each PROTEIN as [x, y] (`${x}-${y}`)}
              <circle cx={x} cy={tube.precipitated ? y - 70 : y} r="5" fill="#f97316" />
            {/each}
          {/if}
          {#if tube.rna && !tube.done}
            {#each RNA as [x, y] (`${x}-${y}`)}
              <path
                d="M {x} {tube.precipitated ? y - 60 : y} q 4 -6 8 0 t 8 0"
                fill="none"
                stroke="#16a34a"
                stroke-width="2.5"
              />
            {/each}
          {/if}
          {#if tube.debris && !tube.done}
            {#each DEBRIS as [x, y] (`${x}-${y}`)}
              <path d="M {x - 8} {y} l 6 -5 l 8 3 l -4 6 z" fill="#a8a29e" />
            {/each}
          {/if}
          {#if tube.dna === 'nguyen' && !tube.done}
            <path
              d="M 56 {dnaY} q 10 -14 20 0 t 20 0 t 20 0 t 20 0"
              fill="none"
              stroke="#1d4ed8"
              stroke-width="3"
            />
            <path
              d="M 56 {dnaY + 12} q 10 -14 20 0 t 20 0 t 20 0 t 20 0"
              fill="none"
              stroke="#1d4ed8"
              stroke-width="3"
            />
          {:else if tube.dna === 'dut' && !tube.done}
            {#each [56, 92, 124] as x (x)}
              <path
                d="M {x} {dnaY} q 5 -8 10 0 t 10 0"
                fill="none"
                stroke="#1d4ed8"
                stroke-width="3"
              />
            {/each}
          {/if}
        {/if}

        {#if tube.done && tube.dna !== 'mat'}
          <ellipse cx="95" cy="236" rx="18" ry="6" fill="#ffffff" stroke="#94a3b8" />
          <text x="95" y="200" text-anchor="middle" font-size="11" fill="#0f172a">DNA</text>
        {/if}
      </svg>
      <figcaption class="text-center text-xs text-slate-600" aria-hidden="true">
        {tubeText(tube)}
      </figcaption>
    </figure>

    <div class="space-y-2">
      <p class="text-sm font-semibold text-slate-800">Bàn thí nghiệm: chọn bước tiếp theo</p>
      <div class="grid gap-2" role="group" aria-label="Hoá chất và thao tác">
        {#each BENCH as a (a.id)}
          <button
            type="button"
            disabled={tube.done}
            class="min-h-11 rounded-lg border border-slate-300 bg-white px-3 py-2 text-left text-sm font-medium text-slate-800 transition hover:bg-slate-50 disabled:opacity-50 {focusRing}"
            onclick={() => act(a.id)}
          >
            {a.text}
          </button>
        {/each}
      </div>
      <p class="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-600" aria-hidden="true">
        <span><span class="text-blue-700">∿</span> DNA</span>
        <span><span class="text-orange-500">●</span> protein</span>
        <span><span class="text-green-600">∿</span> RNA</span>
        <span><span class="text-stone-400">◆</span> mảnh vụn tế bào</span>
      </p>
    </div>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />

  {#if log.length > 0}
    <ol class="space-y-1 text-sm" aria-label="Các bước đã làm">
      {#each log as entry, i (i)}
        <li
          class="rounded-lg px-3 py-1.5 {entry.tone === 'ok'
            ? 'bg-emerald-50 text-emerald-900'
            : entry.tone === 'warn'
              ? 'bg-amber-50 text-amber-900'
              : 'bg-slate-50 text-slate-700'}"
        >
          <span class="font-semibold">{i + 1}. {action(entry.id).text}.</span>
          {action(entry.id).role}
        </li>
      {/each}
    </ol>
  {/if}

  <button type="button" class={button.quiet} onclick={restart}>Làm lại</button>
</div>
