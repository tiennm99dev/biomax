<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { FROG_STAGES, chipOrder, labelFeedback, score } from './engine.js';

  const CHIPS = chipOrder(23);
  const N = FROG_STAGES.length;

  let frame = $state(0);
  /** @type {Record<number, string>} */
  let labels = $state({});
  /** @type {{ ok: boolean, text: string } | null} */
  let last = $state(null);

  const st = $derived(FROG_STAGES[frame]);
  const right = $derived(score(labels));
  const done = $derived(right === N);
  /** @param {string} id */
  const nameOf = (id) => FROG_STAGES.find((s) => s.id === id)?.name ?? '';

  /** @param {string} id */
  function choose(id) {
    const fb = labelFeedback(frame, id);
    last = fb;
    if (fb.ok) {
      labels = { ...labels, [frame]: id };
    }
  }

  /** @param {number} i */
  function go(i) {
    frame = Math.max(0, Math.min(N - 1, i));
    last = null;
  }
</script>

{#snippet creature(/** @type {import('./engine.js').FrogStage} */ s)}
  {#if s.id === 'trung'}
    {#each [[-18, -6], [-6, -12], [6, -6], [18, -10], [-12, 6], [0, 2], [12, 8], [-2, 14]] as [dx, dy] (`${dx},${dy}`)}
      <circle cx={dx} cy={dy} r="7" fill="#e0f2fe" stroke="#94a3b8" opacity="0.9" />
      <circle cx={dx} cy={dy} r="2.6" fill="#0f172a" />
    {/each}
  {:else if s.frog}
    <g>
      <path d="M -6 10 L -26 22 L -14 26" stroke="#3f6212" stroke-width="5" fill="none" />
      <path d="M 6 10 L 26 22 L 14 26" stroke="#3f6212" stroke-width="5" fill="none" />
      <line x1="-8" y1="-2" x2="-16" y2="12" stroke="#3f6212" stroke-width="3" />
      <line x1="8" y1="-2" x2="16" y2="12" stroke="#3f6212" stroke-width="3" />
      <ellipse cx="0" cy="2" rx="14" ry="16" fill="#65a30d" stroke="#3f6212" />
      <circle cx="-7" cy="-12" r="4" fill="#84cc16" stroke="#3f6212" />
      <circle cx="7" cy="-12" r="4" fill="#84cc16" stroke="#3f6212" />
      <circle cx="-7" cy="-12" r="1.6" fill="#000" />
      <circle cx="7" cy="-12" r="1.6" fill="#000" />
      {#if s.tail > 0}
        <path
          d="M 0 17 Q 2 {17 + 30 * s.tail} 0 {19 + 30 * s.tail}"
          stroke="#4d7c0f"
          stroke-width="4"
          fill="none"
        />
      {/if}
    </g>
  {:else}
    <g>
      <path
        d="M -10 0 Q -34 {-10 * s.tail} -{10 + 50 * s.tail} 0 Q -34 {10 * s.tail} -10 0"
        fill="#57534e"
        opacity="0.85"
      />
      {#if s.hind}
        <path d="M -12 6 L -20 16 L -14 20" stroke="#44403c" stroke-width="3" fill="none" />
      {/if}
      {#if s.fore}
        <line x1="6" y1="8" x2="10" y2="18" stroke="#44403c" stroke-width="2.5" />
      {/if}
      <ellipse cx="0" cy="0" rx="14" ry="11" fill="#44403c" />
      <circle cx="7" cy="-4" r="1.8" fill="#fafaf9" />
      {#if s.gills}
        {#each [-8, -4, 0] as y (y)}
          <line x1="2" y1={y} x2="-6" y2={y - 10} stroke="#dc2626" stroke-width="1.5" />
        {/each}
      {/if}
    </g>
  {/if}
{/snippet}

<div class="space-y-3">
  <svg
    viewBox="0 0 240 140"
    class="mx-auto block w-full max-w-md rounded-xl"
    role="img"
    aria-label="Khung {frame + 1} trên {N} của ảnh tua thời gian vòng đời ếch{labels[frame]
      ? `, đã gán nhãn ${nameOf(labels[frame])}`
      : ', chưa gán nhãn'}"
  >
    <rect width="240" height="140" fill={st.frog ? '#bbf7d0' : '#bae6fd'} />
    {#if st.frog}
      <rect y="100" width="240" height="40" fill="#7dd3fc" />
    {:else}
      <path d="M 30 140 Q 40 80 34 30" stroke="#16a34a" stroke-width="3" fill="none" />
      <path d="M 210 140 Q 200 90 214 50" stroke="#16a34a" stroke-width="3" fill="none" />
    {/if}
    <g transform="translate(130 70) scale({st.size * 1.6})">
      {@render creature(st)}
    </g>
    <text x="8" y="16" font-size="11" fill="#0f172a" font-weight="700">Khung {frame + 1}</text>
  </svg>

  <SliderField
    label="Khung hình (theo thời gian)"
    bind:value={frame}
    min={0}
    max={N - 1}
    step={1}
    format={(v) => `khung ${v + 1}`}
    oninput={() => (last = null)}
  />
  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.quiet} onclick={() => go(frame - 1)} disabled={frame === 0}>
      Khung trước
    </button>
    <button
      type="button"
      class={button.quiet}
      onclick={() => go(frame + 1)}
      disabled={frame === N - 1}
    >
      Khung sau
    </button>
  </div>

  <fieldset class="min-w-0">
    <legend class="mb-1 text-sm font-semibold text-slate-700">
      Gán nhãn cho khung {frame + 1}
    </legend>
    <div class="flex flex-wrap gap-2">
      {#each CHIPS as id (id)}
        <button
          type="button"
          class="min-h-11 rounded-lg border px-3 py-1 text-sm {focusRing} {labels[frame] === id
            ? 'border-emerald-500 bg-emerald-50 font-semibold'
            : 'border-slate-300 bg-white'}"
          aria-pressed={labels[frame] === id}
          onclick={() => choose(id)}
        >
          {nameOf(id)}
        </button>
      {/each}
    </div>
  </fieldset>

  <div aria-live="polite">
    {#if last}
      <FeedbackNote tone={last.ok ? 'ok' : 'warn'} text={last.text} />
    {/if}
    {#if done}
      <FeedbackNote
        tone="ok"
        text="Đã gán đúng cả {N} khung. Ếch phát triển qua biến thái hoàn toàn: nòng nọc sống dưới nước, thở bằng mang, có đuôi, khác hẳn ếch trưởng thành."
      />
    {/if}
  </div>

  <ol class="grid grid-cols-2 gap-1 text-sm sm:grid-cols-4">
    {#each FROG_STAGES as s, i (s.id)}
      <li>
        <button
          type="button"
          class="min-h-11 w-full rounded-lg border px-2 py-1 text-left {focusRing} {i === frame
            ? 'border-indigo-500'
            : 'border-slate-200'} {labels[i] ? 'bg-emerald-50' : 'bg-white'}"
          onclick={() => go(i)}
        >
          {i + 1}. {labels[i] ? nameOf(labels[i]) : '?'}
        </button>
      </li>
    {/each}
  </ol>
  <p class="text-sm text-slate-600">Đã gán đúng {right}/{N} khung.</p>
</div>
