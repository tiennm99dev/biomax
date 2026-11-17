<script>
  import { draggable } from '#lib/actions/draggable.svelte.js';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import { PUZZLES, checkMap, orderOf } from './engine.js';

  const W = 340;
  const H = 140;
  const X0 = 24;
  const X1 = 316;
  const LINE_Y = 70;
  const COLORS = ['#dc2626', '#2563eb', '#16a34a', '#9333ea'];

  let puzzleId = $state(PUZZLES[0].id);
  const puzzle = $derived(PUZZLES.find((p) => p.id === puzzleId) ?? PUZZLES[0]);
  let cms = $state([...PUZZLES[0].start]);
  /** @type {SVGSVGElement | undefined} */
  let svgEl = $state();

  /** @param {number} cm */
  const toX = (cm) => X0 + ((X1 - X0) * cm) / puzzle.span;
  /** @param {number} x */
  const toCm = (x) =>
    Math.max(0, Math.min(puzzle.span, Math.round(((x - X0) / (X1 - X0)) * puzzle.span)));

  /** Scratch points the drag action moves; the map itself lives in `cms`. */
  let points = $state(PUZZLES[0].start.map(() => ({ x: 0, y: LINE_Y })));

  /** @param {string | number} id */
  function choose(id) {
    puzzleId = String(id);
    const p = PUZZLES.find((q) => q.id === id) ?? PUZZLES[0];
    cms = [...p.start];
    points = p.start.map(() => ({ x: 0, y: LINE_Y }));
  }

  /** @param {number} i @param {number} cm */
  function place(i, cm) {
    cms[i] = Math.max(0, Math.min(puzzle.span, cm));
  }

  /** @param {number} i */
  const dragFor = (i) => ({
    point: points[i],
    svg: () => svgEl ?? null,
    viewBox: { w: W, h: H },
    pad: 0,
    projector: (/** @type {{ x: number, y: number }} */ p) => ({ x: p.x, y: LINE_Y }),
    onChange: () => place(i, toCm(points[i].x)),
    onKeyMove: (
      /** @type {-1 | 0 | 1} */ dx,
      /** @type {-1 | 0 | 1} */ _dy,
      /** @type {boolean} */ big,
    ) => place(i, cms[i] + dx * (big ? 5 : 1)),
  });

  const at = $derived(Object.fromEntries(puzzle.genes.map((g, i) => [g, cms[i]])));
  const check = $derived(checkMap(at, puzzle.pairs));
  const order = $derived(orderOf(at));

  const note = $derived.by(() => {
    if (check.solved) {
      const o = order;
      const gaps = o.slice(1).map((g, k) => `${o[k]}–${g} ${at[g] - at[o[k]]} cM`);
      return {
        tone: /** @type {const} */ ('ok'),
        text: `Bản đồ đúng! Thứ tự gene: ${o.join(' – ')} (${gaps.join(', ')}). Khoảng cách giữa hai gene ngoài cùng bằng tổng các khoảng cách nhỏ.`,
      };
    }
    const wrong = check.rows.filter((r) => !r.ok).length;
    return {
      tone: /** @type {const} */ ('info'),
      text: `Còn ${wrong} cặp gene chưa đúng khoảng cách. Gợi ý: cặp có tần số hoán vị lớn nhất là hai gene nằm xa nhau nhất.`,
    };
  });
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Bài lập bản đồ"
    value={puzzleId}
    onchange={choose}
    options={PUZZLES.map((p, k) => ({ value: p.id, label: `Bài ${k + 1}` }))}
  />

  <div class="rounded-xl bg-slate-50 p-3">
    <p class="text-sm font-semibold text-slate-700">Tần số hoán vị đo được (1% = 1 cM)</p>
    <ul class="mt-1 grid grid-cols-2 gap-1 text-sm sm:grid-cols-3" aria-live="polite">
      {#each check.rows as r (r.a + r.b)}
        <li class={r.ok ? 'font-semibold text-emerald-700' : 'text-slate-700'}>
          {r.a}–{r.b}: {r.want}% · trên bản đồ {r.got} cM {r.ok ? '✓' : ''}
        </li>
      {/each}
    </ul>
  </div>

  <svg
    bind:this={svgEl}
    viewBox="0 0 {W} {H}"
    class="mx-auto block w-full max-w-xl touch-none select-none rounded-xl bg-white ring-1 ring-slate-200"
    role="group"
    aria-label="Nhiễm sắc thể từ 0 đến {puzzle.span} cM; kéo các gene hoặc dùng phím mũi tên"
  >
    <rect x={X0 - 8} y={LINE_Y - 10} width={X1 - X0 + 16} height="20" rx="10" fill="#fde68a" />
    {#each Array.from({ length: puzzle.span / 5 + 1 }, (_, k) => k * 5) as t (t)}
      <line x1={toX(t)} y1={LINE_Y + 12} x2={toX(t)} y2={LINE_Y + 18} stroke="#94a3b8" />
      <text x={toX(t)} y={LINE_Y + 32} text-anchor="middle" font-size="11" fill="#64748b">{t}</text>
    {/each}
    <text x={X1} y={H - 6} text-anchor="end" font-size="11" fill="#64748b">cM</text>
    {#each puzzle.genes as g, i (g)}
      <g
        class="drag-handle"
        role="slider"
        tabindex="0"
        aria-label="Gene {g}"
        aria-valuemin="0"
        aria-valuemax={puzzle.span}
        aria-valuenow={cms[i]}
        aria-valuetext="gene {g} ở vị trí {cms[i]} cM"
        style="cursor: grab; outline: none"
        use:draggable={dragFor(i)}
      >
        <line
          x1={toX(cms[i])}
          y1={LINE_Y - 10}
          x2={toX(cms[i])}
          y2={LINE_Y + 10}
          stroke={COLORS[i]}
          stroke-width="4"
        />
        <circle
          class="drag-knob"
          cx={toX(cms[i])}
          cy={LINE_Y - 30}
          r="13"
          fill={COLORS[i]}
          stroke="white"
          stroke-width="2"
        />
        <text
          x={toX(cms[i])}
          y={LINE_Y - 25}
          text-anchor="middle"
          font-size="14"
          font-weight="700"
          fill="white">{g}</text
        >
      </g>
    {/each}
  </svg>

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.quiet} onclick={() => choose(puzzleId)}>Làm lại</button>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>
