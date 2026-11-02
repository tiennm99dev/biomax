<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { SPECIMENS, fieldOf, judge, shapeOf, strokesOf, tallyOf } from './engine.js';

  /** @typedef {import('./engine.js').SpecimenId} SpecimenId */

  const specimenOptions = /** @type {{ value: SpecimenId, label: string }[]} */ (
    Object.entries(SPECIMENS).map(([value, s]) => ({ value, label: s.name }))
  );

  /** @type {SpecimenId} */
  let specimen = $state('nguyen-phan');
  let seed = $state(1);
  /** @type {number | null} */
  let selected = $state(null);
  /** @type {boolean[]} */
  let solved = $state([]);
  let tries = $state(0);
  /** @type {{ tone: 'ok' | 'warn' | 'info', text: string } | null} */
  let feedback = $state(null);

  const field = $derived(fieldOf(specimen, seed));
  const stages = $derived(SPECIMENS[specimen].stages);
  const solvedCount = $derived(solved.filter(Boolean).length);
  const finished = $derived(solvedCount === field.length);
  const note = $derived(
    feedback ??
      (selected === null
        ? {
            tone: /** @type {const} */ ('info'),
            text: `Chạm vào một ${SPECIMENS[specimen].cellName} trong vi trường, rồi chọn kì của nó.`,
          }
        : {
            tone: /** @type {const} */ ('info'),
            text: `Tế bào số ${selected + 1}: tế bào này đang ở kì nào?`,
          }),
  );

  function restart() {
    selected = null;
    solved = [];
    tries = 0;
    feedback = null;
  }

  function nextField() {
    seed += 1;
    restart();
  }

  /** @param {number} i */
  function choose(i) {
    if (solved[i]) return;
    selected = i;
    feedback = null;
  }

  /** @param {string} id */
  function answer(id) {
    if (selected === null) return;
    const result = judge(specimen, field[selected].stage, id);
    tries += 1;
    feedback = { tone: result.ok ? 'ok' : 'warn', text: result.text };
    if (result.ok) {
      const next = [...solved];
      next[selected] = true;
      solved = next;
      selected = null;
    }
  }
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Tiêu bản"
    options={specimenOptions}
    bind:value={specimen}
    onchange={restart}
  />

  <ul class="grid grid-cols-3 gap-1 rounded-2xl bg-rose-100 p-2 sm:grid-cols-4">
    {#each field as cell, i (cell.seed)}
      {@const shape = shapeOf(specimen, cell.stage)}
      <li>
        <button
          type="button"
          class="relative block w-full rounded-lg {focusRing} {selected === i
            ? 'ring-2 ring-indigo-600'
            : ''}"
          aria-label="Tế bào số {i + 1}{solved[i]
            ? `: ${stages.find((s) => s.id === cell.stage)?.name}`
            : ''}"
          aria-pressed={selected === i}
          disabled={solved[i]}
          onclick={() => choose(i)}
        >
          <svg viewBox="-50 -50 100 100" class="block w-full" aria-hidden="true">
            <g transform="rotate({cell.tilt})">
              {#if shape.kind === 'brick'}
                <rect
                  x={-shape.rx}
                  y={-shape.ry}
                  width={shape.rx * 2}
                  height={shape.ry * 2}
                  rx="3"
                  fill="#fdf2f8"
                  stroke="#9d174d"
                  stroke-width="1.8"
                />
                {#if cell.stage === 'cuoi'}
                  <line
                    x1="0"
                    y1={-shape.ry}
                    x2="0"
                    y2={shape.ry}
                    stroke="#9d174d"
                    stroke-width="1.5"
                  />
                {/if}
                {#if cell.stage === 'trung-gian'}
                  <circle r="14" fill="#f9a8d4" stroke="#831843" stroke-width="1" />
                  <circle cx="4" cy="-3" r="4" fill="#831843" />
                {/if}
              {:else if shape.pinch}
                <ellipse
                  cx={-shape.rx * 0.52}
                  rx={shape.rx * 0.56}
                  ry={shape.ry * 0.8}
                  fill="#fdf2f8"
                  stroke="#9d174d"
                  stroke-width="1.5"
                />
                <ellipse
                  cx={shape.rx * 0.52}
                  rx={shape.rx * 0.56}
                  ry={shape.ry * 0.8}
                  fill="#fdf2f8"
                  stroke="#9d174d"
                  stroke-width="1.5"
                />
              {:else}
                <circle r={shape.rx} fill="#fdf2f8" stroke="#9d174d" stroke-width="1.5" />
              {/if}
              {#each strokesOf(cell.stage, cell.seed) as s, k (k)}
                <path
                  d={s.d}
                  fill="none"
                  stroke="#831843"
                  stroke-width={s.w}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              {/each}
            </g>
          </svg>
          {#if solved[i]}
            <span
              class="absolute inset-x-0 bottom-0 rounded-b-lg bg-emerald-700 px-1 text-[11px] font-semibold text-white"
            >
              {stages.find((s) => s.id === cell.stage)?.name}
            </span>
          {/if}
        </button>
      </li>
    {/each}
  </ul>

  <div class="flex flex-wrap gap-2" role="group" aria-label="Chọn kì của tế bào đang chọn">
    {#each stages as s (s.id)}
      <button
        type="button"
        class={button.quiet}
        disabled={selected === null}
        onclick={() => answer(s.id)}>{s.name}</button
      >
    {/each}
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />

  <p class="text-sm font-semibold text-slate-700">
    Đã nhận diện {solvedCount}/{field.length} tế bào sau {tries} lần trả lời.
    <span class="font-normal text-slate-600">Tế bào được vẽ mô phỏng, không phải ảnh chụp.</span>
  </p>

  {#if finished}
    <div class="rounded-xl bg-slate-50 p-3 text-sm">
      <p class="mb-2 font-semibold text-slate-800">Thống kê vi trường này</p>
      <ul class="mb-2 grid grid-cols-2 gap-1 sm:grid-cols-4">
        {#each tallyOf(specimen) as s (s.id)}
          <li class="rounded bg-white px-2 py-1">{s.name}: <strong>{s.count}</strong></li>
        {/each}
      </ul>
      <p class="text-slate-700">
        {specimen === 'nguyen-phan'
          ? 'Kì kéo dài càng lâu, càng dễ gặp nhiều tế bào ở kì đó: phần lớn thời gian của chu kì là kì trung gian, còn kì sau là ngắn nhất.'
          : 'Tế bào ở giảm phân II nhỏ hơn hẳn giảm phân I, vì tế bào đã chia đôi sau giảm phân I.'}
      </p>
    </div>
  {/if}

  <button type="button" class={button.secondary} onclick={nextField}>Đổi vi trường khác</button>
</div>
