<script>
  import { draggable } from '#lib/actions/draggable.svelte.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import { atomsOf, explain, pulls, start } from './engine.js';

  const W = 360;
  const H = 260;

  /** @type {'none' | 'salt' | 'oil'} */
  let solute = $state('none');
  /** @type {import('./engine.js').Molecule[]} */
  let molecules = $state(start('none'));
  let selected = $state('w1');
  /** @type {SVGSVGElement | undefined} */
  let svgEl = $state();

  const lines = $derived(pulls(molecules));
  const text = $derived(explain(molecules, solute));
  const current = $derived(molecules.find((m) => m.id === selected));

  /** @param {string | number} v */
  function choose(v) {
    solute = /** @type {'none' | 'salt' | 'oil'} */ (v);
    molecules = start(solute);
    selected = 'w1';
  }

  /** @param {number} deg */
  function turn(deg) {
    const m = molecules.find((x) => x.id === selected);
    if (m && m.kind !== 'na' && m.kind !== 'cl') m.angle = (m.angle + deg + 360) % 360;
  }

  /** @param {KeyboardEvent} e @param {string} id */
  function onKey(e, id) {
    selected = id;
    if (e.key === 'r' || e.key === 'R') {
      e.preventDefault();
      turn(e.key === 'R' ? -30 : 30);
    }
  }

  /** @param {import('./engine.js').Molecule} m */
  const dragFor = (m) => ({
    point: m,
    svg: () => svgEl ?? null,
    viewBox: { w: W, h: H },
    pad: 24,
    keyStep: 6,
    keyShiftStep: 20,
  });

  /** @param {import('./engine.js').Molecule} m */
  function nameOf(m) {
    if (m.kind === 'na') return 'Ion Na⁺';
    if (m.kind === 'cl') return 'Ion Cl⁻';
    if (m.kind === 'oil') return 'Phân tử dầu ăn';
    return `Phân tử nước ${m.id.slice(1)}`;
  }

  const FILL = { O: '#ef4444', H: '#f8fafc', Na: '#a855f7', Cl: '#22c55e', C: '#facc15' };
  const SIGN = { O: 'δ−', H: 'δ+', Na: '+', Cl: '−', C: '' };
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Cho thêm vào nước"
    options={[
      { value: 'none', label: 'Chỉ có nước' },
      { value: 'salt', label: 'Muối ăn' },
      { value: 'oil', label: 'Dầu ăn' },
    ]}
    value={solute}
    onchange={choose}
  />

  <svg
    bind:this={svgEl}
    viewBox="0 0 {W} {H}"
    class="block w-full touch-none select-none"
    role="group"
    aria-label="Mô hình phân tử nước: kéo hoặc dùng phím mũi tên để di chuyển, phím R để xoay phân tử"
  >
    <rect x="0" y="0" width={W} height={H} rx="14" fill="#eff6ff" />
    {#each lines as l (l.a + l.b)}
      <line
        x1={l.x1}
        y1={l.y1}
        x2={l.x2}
        y2={l.y2}
        stroke={l.kind === 'hydrogen' ? '#0284c7' : '#7c3aed'}
        stroke-width="3"
        stroke-dasharray="5 4"
      />
    {/each}
    {#each molecules as m (m.id)}
      {@const atoms = atomsOf(m)}
      <g
        class="drag-handle"
        role="button"
        tabindex="0"
        aria-label="{nameOf(m)}{selected === m.id ? ', đang chọn' : ''}"
        aria-pressed={selected === m.id}
        style="cursor:grab; outline:none"
        use:draggable={dragFor(m)}
        onpointerdown={() => (selected = m.id)}
        onfocus={() => (selected = m.id)}
        onkeydown={(e) => onKey(e, m.id)}
      >
        {#if m.kind === 'water'}
          {#each atoms.slice(1) as h, i (i)}
            <line x1={m.x} y1={m.y} x2={h.x} y2={h.y} stroke="#475569" stroke-width="5" />
          {/each}
        {/if}
        {#each atoms as a, i (i)}
          <circle
            class={i === 0 ? 'drag-knob' : undefined}
            cx={a.x}
            cy={a.y}
            r={a.r}
            fill={FILL[/** @type {'O' | 'H' | 'Na' | 'Cl' | 'C'} */ (a.el)]}
            stroke={selected === m.id ? '#1e3a8a' : '#64748b'}
            stroke-width={selected === m.id ? 2.5 : 1.5}
          />
          <text
            x={a.x}
            y={a.y + 3.5}
            font-size={a.el === 'H' ? 8 : 10}
            font-weight="700"
            text-anchor="middle"
            fill="#0f172a"
            style="pointer-events:none">{a.el}</text
          >
          {#if SIGN[/** @type {'O' | 'H' | 'Na' | 'Cl' | 'C'} */ (a.el)]}
            <text
              x={a.x + a.r * 0.7}
              y={a.y - a.r * 0.8}
              font-size="9"
              fill={a.charge < 0 ? '#b91c1c' : '#1d4ed8'}
              style="pointer-events:none"
              >{SIGN[/** @type {'O' | 'H' | 'Na' | 'Cl' | 'C'} */ (a.el)]}</text
            >
          {/if}
        {/each}
      </g>
    {/each}
  </svg>

  <div class="flex flex-wrap items-center gap-2">
    <span class="text-sm text-slate-700"
      >Đang chọn: <strong>{current ? nameOf(current) : ''}</strong></span
    >
    <button
      type="button"
      class={button.quiet}
      onclick={() => turn(-30)}
      disabled={current?.kind === 'na' || current?.kind === 'cl'}>Xoay trái 30°</button
    >
    <button
      type="button"
      class={button.quiet}
      onclick={() => turn(30)}
      disabled={current?.kind === 'na' || current?.kind === 'cl'}>Xoay phải 30°</button
    >
    <button type="button" class={button.quiet} onclick={() => choose(solute)}>Làm lại</button>
  </div>

  <p class="min-h-12 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-950" aria-live="polite">
    {text}
  </p>
  <p class="text-xs text-slate-600">
    Đường nét đứt xanh: liên kết hydrogen giữa hai phân tử nước. Đường nét đứt tím: lực hút giữa
    phân tử nước và ion.
  </p>
</div>
