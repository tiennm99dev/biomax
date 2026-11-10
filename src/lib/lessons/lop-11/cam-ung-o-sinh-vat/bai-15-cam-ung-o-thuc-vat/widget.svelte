<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { pointsAttr } from '#lib/utils/svg.js';
  import { DAYS, LIGHTS, TURNS, auxinSide, explain, organPoints, seedling } from './engine.js';

  /** @type {import('./engine.js').LightId} */
  let light = $state('phai');
  /** @type {import('./engine.js').Turn} */
  let turn = $state(0);
  let day = $state(3);

  const W = 300;
  const H = 230;
  const SX = 150;
  const SY = 118;

  const plant = $derived(seedling({ light, turn, day }));
  const stemPts = $derived(organPoints(plant.stem, SX, SY));
  const rootPts = $derived(organPoints(plant.root, SX, SY));
  const note = $derived(explain({ light, turn, day }));

  /**
   * Auxin dots beside the last part of an organ.
   * @param {Array<{ x: number, y: number, dir: number }>} pts
   * @param {'left' | 'right' | 'even'} side
   */
  function auxinDots(pts, side) {
    const sides = side === 'even' ? [-1, 1] : [side === 'left' ? -1 : 1];
    const tail = pts.slice(-6, -1);
    /** @type {Array<{ x: number, y: number }>} */
    const out = [];
    for (const p of tail) {
      const r = (p.dir * Math.PI) / 180;
      for (const k of sides)
        out.push({ x: p.x + k * 6 * Math.cos(r), y: p.y + k * 6 * Math.sin(r) });
    }
    return out;
  }

  const stemAux = $derived(auxinDots(stemPts, auxinSide(plant.stem, 'stem')));
  const rootAux = $derived(auxinDots(rootPts, auxinSide(plant.root, 'root')));
  const leaf = $derived(stemPts[stemPts.length - 1]);

  /** @param {string | number} v @returns {import('./engine.js').LightId} */
  const asLight = (v) => LIGHTS.find((l) => l.id === v)?.id ?? 'toi';
  /** @param {string | number} v @returns {import('./engine.js').Turn} */
  const asTurn = (v) => TURNS.find((t) => t === Number(v)) ?? 0;

  const lightName = $derived(LIGHTS.find((l) => l.id === light)?.name.toLowerCase() ?? '');
</script>

<div class="space-y-3">
  <div class="grid gap-3 sm:grid-cols-2">
    <SegmentedControl
      label="Nguồn sáng"
      value={light}
      options={LIGHTS.map((l) => ({ value: l.id, label: l.name }))}
      onchange={(v) => (light = asLight(v))}
    />
    <SegmentedControl
      label="Xoay hộp (theo chiều kim đồng hồ)"
      value={turn}
      options={TURNS.map((t) => ({ value: t, label: `${t}°` }))}
      onchange={(v) => (turn = asTurn(v))}
    />
  </div>
  <SliderField label="Số ngày" bind:value={day} min={0} max={DAYS} step={1} unit="ngày" />

  <svg
    viewBox="0 0 {W} {H}"
    class="mx-auto block w-full max-w-md rounded-xl {light === 'toi'
      ? 'bg-slate-700'
      : 'bg-sky-50'}"
    role="img"
    aria-label="Cây mầm trong hộp xoay {turn} độ, ánh sáng {lightName}, sau {day} ngày: thân uốn {plant
      .stem.bend} độ, rễ uốn {plant.root.bend} độ"
  >
    <rect
      x="40"
      y="12"
      width="220"
      height="210"
      rx="6"
      fill="none"
      stroke="#94a3b8"
      stroke-width="2"
    />
    {#if light === 'trai'}
      <circle cx="18" cy="100" r="11" fill="#facc15" />
      {#each [80, 100, 120] as y (y)}
        <line x1="32" y1={y} x2="52" y2={y} stroke="#eab308" stroke-width="2" />
      {/each}
    {:else if light === 'phai'}
      <circle cx="282" cy="100" r="11" fill="#facc15" />
      {#each [80, 100, 120] as y (y)}
        <line x1="248" y1={y} x2="268" y2={y} stroke="#eab308" stroke-width="2" />
      {/each}
    {:else if light === 'tren'}
      <circle cx="150" cy="6" r="6" fill="#facc15" />
    {/if}

    <g aria-hidden="true">
      <line x1="270" y1="160" x2="270" y2="205" stroke="#64748b" stroke-width="2" />
      <path d="M264 197 L270 207 L276 197" fill="none" stroke="#64748b" stroke-width="2" />
      <text
        x="276"
        y="220"
        text-anchor="end"
        font-size="10"
        fill={light === 'toi' ? '#e2e8f0' : '#475569'}>P</text
      >
    </g>

    <polyline
      points={pointsAttr(rootPts)}
      fill="none"
      stroke="#a16207"
      stroke-width="3"
      stroke-linecap="round"
    />
    <polyline
      points={pointsAttr(stemPts)}
      fill="none"
      stroke="#16a34a"
      stroke-width="4"
      stroke-linecap="round"
    />
    {#if day > 0}
      <ellipse
        cx={leaf.x}
        cy={leaf.y}
        rx="9"
        ry="5"
        fill="#22c55e"
        transform="rotate({leaf.dir + 90} {leaf.x} {leaf.y})"
      />
    {/if}
    {#each stemAux as p, i (i)}
      <circle cx={p.x} cy={p.y} r="2.2" fill="#db2777" />
    {/each}
    {#each rootAux as p, i (i)}
      <circle cx={p.x} cy={p.y} r="2.2" fill="#db2777" />
    {/each}
    <ellipse cx={SX} cy={SY} rx="10" ry="7" fill="#fbbf24" stroke="#b45309" />
  </svg>
  <p class="text-center text-xs text-slate-600">
    Chấm hồng: nơi auxin tập trung nhiều. Mũi tên P: chiều trọng lực.
  </p>

  <p class="text-sm tabular-nums" aria-live="polite">
    Ngày {day}: thân uốn {plant.stem.bend}°, rễ uốn {plant.root.bend}°.
  </p>
  <FeedbackNote tone={note.tone} text={note.text} />
</div>
