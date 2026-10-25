<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { STAGES } from './engine.js';

  /** @type {import('./engine.js').CellKind} */
  let kind = $state('dong-vat');
  let stage = $state(0);

  const current = $derived(STAGES[stage]);
  const W = 320;
  const H = 170;
  const cx = W / 2;
  const cy = H / 2;

  /**
   * Cells drawn at each stage: centre x, half width, half height and nuclei x.
   * @type {Array<Array<{ x: number, rx: number, ry: number, nuclei: number[] }>>}
   */
  const CELLS = [
    [{ x: cx, rx: 34, ry: 30, nuclei: [cx] }],
    [{ x: cx, rx: 66, ry: 56, nuclei: [cx] }],
    [{ x: cx, rx: 66, ry: 56, nuclei: [cx - 28, cx + 28] }],
    [],
    [
      { x: cx - 56, rx: 34, ry: 30, nuclei: [cx - 56] },
      { x: cx + 56, rx: 34, ry: 30, nuclei: [cx + 56] },
    ],
  ];
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Loại tế bào"
    options={[
      { value: 'dong-vat', label: 'Tế bào động vật' },
      { value: 'thuc-vat', label: 'Tế bào thực vật' },
    ]}
    bind:value={kind}
  />

  <svg
    viewBox="0 0 {W} {H}"
    class="mx-auto block w-full max-w-md rounded-xl border border-slate-200 bg-slate-50"
    role="img"
    aria-label="{current.title}: {current.text[kind]}"
  >
    {#if stage === 3}
      {#if kind === 'dong-vat'}
        <path
          d="M {cx} {cy - 30} C {cx - 20} {cy - 62} {cx - 96} {cy - 56} {cx - 96} {cy} C {cx -
            96} {cy + 56} {cx - 20} {cy + 62} {cx} {cy + 30} C {cx + 20} {cy + 62} {cx + 96} {cy +
            56} {cx + 96} {cy} C {cx + 96} {cy - 56} {cx + 20} {cy - 62} {cx} {cy - 30} Z"
          fill="#fce7f3"
          stroke="#be185d"
          stroke-width="3"
        />
      {:else}
        <rect
          x={cx - 92}
          y={cy - 56}
          width="184"
          height="112"
          rx="6"
          fill="#f7fee7"
          stroke="#3f6212"
          stroke-width="6"
        />
        <line x1={cx} x2={cx} y1={cy - 56} y2={cy + 56} stroke="#3f6212" stroke-width="5" />
      {/if}
      <circle cx={cx - 46} {cy} r="11" fill="#7c3aed" />
      <circle cx={cx + 46} {cy} r="11" fill="#7c3aed" />
    {:else}
      {#each CELLS[stage] as c, i (i)}
        {#if kind === 'dong-vat'}
          <ellipse
            cx={c.x}
            {cy}
            rx={c.rx}
            ry={c.ry}
            fill="#fce7f3"
            stroke="#be185d"
            stroke-width="3"
          />
        {:else}
          <rect
            x={c.x - c.rx}
            y={cy - c.ry}
            width={c.rx * 2}
            height={c.ry * 2}
            rx="6"
            fill="#f7fee7"
            stroke="#3f6212"
            stroke-width="6"
          />
          {#if c.nuclei.length === 1}
            <rect
              x={c.x - c.rx * 0.2}
              y={cy - c.ry * 0.6}
              width={c.rx * 0.9}
              height={c.ry * 1.2}
              rx="8"
              fill="#e0f2fe"
              stroke="#0284c7"
            />
          {/if}
        {/if}
        {#each c.nuclei as nx (nx)}
          <circle
            cx={nx - (kind === 'thuc-vat' && c.nuclei.length === 1 ? c.rx * 0.5 : 0)}
            {cy}
            r="11"
            fill="#7c3aed"
          />
        {/each}
      {/each}
    {/if}
  </svg>

  <ol class="flex flex-wrap gap-1" aria-label="Các giai đoạn">
    {#each STAGES as s, i (s.id)}
      <li>
        <button
          type="button"
          class="min-h-11 rounded-lg px-3 text-sm font-semibold {i === stage
            ? 'bg-indigo-600 text-white'
            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'} {focusRing}"
          aria-current={i === stage ? 'step' : undefined}
          onclick={() => (stage = i)}>{i + 1}. {s.title}</button
        >
      </li>
    {/each}
  </ol>

  <p class="min-h-12 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700" aria-live="polite">
    <strong>{current.title}.</strong>
    {current.text[kind]}
  </p>

  <div class="flex gap-2">
    <button
      type="button"
      class={button.quiet}
      disabled={stage === 0}
      onclick={() => (stage = Math.max(0, stage - 1))}>← Trước</button
    >
    <button
      type="button"
      class={button.primary}
      onclick={() => (stage = stage === STAGES.length - 1 ? 0 : stage + 1)}
      >{stage === STAGES.length - 1 ? 'Xem lại từ đầu' : 'Tiếp →'}</button
    >
  </div>
</div>
