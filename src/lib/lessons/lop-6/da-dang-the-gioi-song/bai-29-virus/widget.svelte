<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { SHAPES, helixUnits, icosaEdges } from './engine.js';

  const W = 340;
  const H = 220;
  const PITCH = 0.35;

  let shapeId = $state(/** @type {import('./engine.js').ShapeId} */ ('khoi'));
  let angle = $state(20);

  const shape = $derived(SHAPES.find((s) => s.id === shapeId) ?? SHAPES[0]);
  const yaw = $derived((angle * Math.PI) / 180);

  const ROD = { x0: 50, x1: 290, cy: 110, radius: 34, perTurn: 8, pitch: 44 };
  const units = $derived(helixUnits(yaw, ROD));
  const back = $derived(units.filter((u) => u.z < 0));
  const front = $derived(units.filter((u) => u.z >= 0));
  const rna = $derived.by(() => {
    let d = '';
    for (let x = ROD.x0; x <= ROD.x1; x += 4) {
      const a = ((x - ROD.x0) / ROD.pitch) * 2 * Math.PI + yaw;
      d += `${x === ROD.x0 ? 'M' : ' L'} ${x} ${Math.round((ROD.cy - 14 * Math.cos(a)) * 10) / 10}`;
    }
    return d;
  });

  const cube = $derived(icosaEdges(yaw, PITCH, { cx: W / 2, cy: H / 2, scale: 52 }));
  const head = $derived(icosaEdges(yaw, PITCH, { cx: W / 2, cy: 62, scale: 26, stretch: 1.3 }));

  /**
   * Turns the model while a pointer drags across it; the slider below does
   * the same by keyboard.
   * @param {SVGSVGElement} node
   */
  function spin(node) {
    /** @type {number | null} */
    let lastX = null;
    /** @param {PointerEvent} e */
    const down = (e) => {
      lastX = e.clientX;
      node.setPointerCapture(e.pointerId);
    };
    /** @param {PointerEvent} e */
    const move = (e) => {
      if (lastX === null) return;
      angle = (((angle + (e.clientX - lastX) * 0.8) % 360) + 360) % 360;
      lastX = e.clientX;
    };
    const up = () => {
      lastX = null;
    };
    node.addEventListener('pointerdown', down);
    node.addEventListener('pointermove', move);
    node.addEventListener('pointerup', up);
    node.addEventListener('pointercancel', up);
    return {
      destroy() {
        node.removeEventListener('pointerdown', down);
        node.removeEventListener('pointermove', move);
        node.removeEventListener('pointerup', up);
        node.removeEventListener('pointercancel', up);
      },
    };
  }

  const fmtDeg = (/** @type {number} */ v) => `${Math.round(v)}°`;
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Hình dạng virus"
    options={SHAPES.map((s) => ({ value: s.id, label: s.name }))}
    bind:value={shapeId}
  />

  <svg
    viewBox="0 0 {W} {H}"
    class="w-full max-w-xl cursor-grab touch-none rounded-xl border border-slate-200 bg-slate-950"
    role="img"
    aria-label="Mô hình virus {shape.name.toLowerCase()}, đang xoay {fmtDeg(angle)}. {shape.parts}"
    use:spin
  >
    {#if shapeId === 'khoi'}
      <circle cx={W / 2} cy={H / 2} r="78" fill="#0e7490" opacity="0.25" />
      {#each cube.filter((e) => !e.front) as e, i (i)}
        <line
          x1={e.x1}
          y1={e.y1}
          x2={e.x2}
          y2={e.y2}
          stroke="#67e8f9"
          stroke-width="1.5"
          opacity="0.35"
          stroke-dasharray="4 3"
        />
      {/each}
      <circle cx={W / 2} cy={H / 2} r="30" fill="#7c3aed" opacity="0.55" />
      <path
        d="M {W / 2 - 22} {H / 2} q 8 -16 16 0 t 16 0 t 16 0"
        fill="none"
        stroke="#f5d0fe"
        stroke-width="3"
      />
      {#each cube.filter((e) => e.front) as e, i (i)}
        <line
          x1={e.x1}
          y1={e.y1}
          x2={e.x2}
          y2={e.y2}
          stroke="#a5f3fc"
          stroke-width="3"
          stroke-linecap="round"
        />
      {/each}
      <text x="12" y="22" font-size="12" fill="#a5f3fc">Vỏ protein (khối 20 mặt)</text>
      <text x="12" y={H - 12} font-size="12" fill="#f5d0fe">Lõi: vật chất di truyền</text>
    {:else if shapeId === 'xoan'}
      {#each back as u, i (i)}
        <circle cx={u.x} cy={u.y} r="8" fill="#0e7490" opacity="0.5" />
      {/each}
      <path d={rna} fill="none" stroke="#f5d0fe" stroke-width="3" />
      {#each front as u, i (i)}
        <circle cx={u.x} cy={u.y} r="8" fill="#22d3ee" stroke="#0e7490" stroke-width="1.5" />
      {/each}
      <text x="12" y="22" font-size="12" fill="#a5f3fc">Vỏ protein: các đơn vị xếp xoắn</text>
      <text x="12" y={H - 12} font-size="12" fill="#f5d0fe">Lõi: vật chất di truyền (sợi xoắn)</text
      >
    {:else}
      {#each head.filter((e) => !e.front) as e, i (i)}
        <line
          x1={e.x1}
          y1={e.y1}
          x2={e.x2}
          y2={e.y2}
          stroke="#67e8f9"
          stroke-width="1.2"
          opacity="0.35"
        />
      {/each}
      <ellipse cx={W / 2} cy="62" rx="14" ry="20" fill="#7c3aed" opacity="0.55" />
      {#each head.filter((e) => e.front) as e, i (i)}
        <line
          x1={e.x1}
          y1={e.y1}
          x2={e.x2}
          y2={e.y2}
          stroke="#a5f3fc"
          stroke-width="2.5"
          stroke-linecap="round"
        />
      {/each}
      <rect x={W / 2 - 9} y="110" width="18" height="62" rx="3" fill="#0891b2" />
      {#each [0, 1, 2, 3, 4, 5, 6, 7] as k (k)}
        <line
          x1={W / 2 - 9}
          x2={W / 2 + 9}
          y1={114 + k * 7.5}
          y2={116 + k * 7.5 + 3 * Math.sin(yaw + k)}
          stroke="#cffafe"
          stroke-width="1.5"
        />
      {/each}
      <rect x={W / 2 - 18} y="170" width="36" height="6" rx="2" fill="#a5f3fc" />
      {#each [-1, 1] as side (side)}
        {#each [14, 28, 40] as dx (dx)}
          <path
            d="M {W / 2 + side * 14} 175 l {side * dx} 18 l {side * 6} 20"
            fill="none"
            stroke="#a5f3fc"
            stroke-width="2"
          />
        {/each}
      {/each}
      <text x="12" y="22" font-size="12" fill="#a5f3fc">Đầu: dạng khối</text>
      <text x="12" y="40" font-size="12" fill="#f5d0fe">chứa vật chất di truyền</text>
      <text x={W - 12} y="140" font-size="12" fill="#a5f3fc" text-anchor="end">Đuôi: dạng xoắn</text
      >
      <text x={W - 12} y={H - 12} font-size="12" fill="#a5f3fc" text-anchor="end">Sợi đuôi</text>
    {/if}
  </svg>

  <SliderField label="Xoay mô hình" bind:value={angle} min={0} max={359} format={fmtDeg} />

  <div class="rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-800" aria-live="polite">
    <p><strong>{shape.name}.</strong> {shape.parts}</p>
    <p class="mt-1"><strong>Ví dụ:</strong> {shape.examples}</p>
  </div>
</div>
