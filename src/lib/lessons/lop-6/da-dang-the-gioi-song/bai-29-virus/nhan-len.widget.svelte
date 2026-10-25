<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import { CYCLE, PLACES, RELEASED, cycleMessage, virusCount } from './engine.js';

  const W = 340;
  const H = 220;
  const CX = 180;
  const CY = 118;
  const R = 82;

  let place = $state(/** @type {import('./engine.js').PlaceId} */ ('te-bao'));
  let step = $state(0);

  const living = $derived(PLACES.find((p) => p.id === place)?.living ?? false);
  const count = $derived(virusCount(place, step));
  const last = $derived(living ? CYCLE.length : 0);

  /** Positions of the new viruses inside the cell, then scattered outside. */
  const INSIDE = Array.from({ length: RELEASED }, (_, i) => {
    const a = (i / RELEASED) * 2 * Math.PI;
    const r = i % 2 ? 30 : 56;
    return { x: CX + r * Math.cos(a), y: CY + r * Math.sin(a) };
  });
  const OUTSIDE = Array.from({ length: RELEASED }, (_, i) => {
    const a = (i / RELEASED) * 2 * Math.PI + 0.2;
    const r = i % 2 ? 98 : 110;
    return { x: CX + r * Math.cos(a), y: CY + r * 0.85 * Math.sin(a) };
  });

  /** @param {number} x @param {number} y @param {number} s */
  const hexagon = (x, y, s) =>
    Array.from({ length: 6 }, (_, k) => {
      const a = (Math.PI / 3) * k;
      return `${Math.round((x + s * Math.cos(a)) * 10) / 10},${Math.round((y + s * Math.sin(a)) * 10) / 10}`;
    }).join(' ');

  /** @param {string | number} v */
  function changePlace(v) {
    place = /** @type {import('./engine.js').PlaceId} */ (v);
    step = 0;
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Virus rơi vào đâu?"
    options={PLACES.map((p) => ({ value: p.id, label: p.name }))}
    value={place}
    onchange={changePlace}
  />

  <svg
    viewBox="0 0 {W} {H}"
    class="w-full max-w-xl rounded-xl border border-slate-200 bg-white"
    role="img"
    aria-label="{cycleMessage(place, step)} Số virus: {count}."
  >
    {#if place === 'te-bao'}
      <ellipse
        cx={CX}
        cy={CY}
        rx={R}
        ry={R * 0.85}
        fill="#fef3c7"
        stroke="#d97706"
        stroke-width="3"
        stroke-dasharray={step === 5 ? '10 12' : 'none'}
      />
      <circle cx={CX + 20} cy={CY + 10} r="18" fill="#fde68a" stroke="#b45309" />
      <text x="8" y={H - 10} font-size="11" fill="#92400e">Tế bào vật chủ</text>

      {#if step === 0}
        <polygon points={hexagon(60, 40, 12)} fill="#0891b2" />
        <circle cx="60" cy="40" r="4" fill="#7c3aed" />
      {:else if step === 1}
        <polygon points={hexagon(CX - 40, CY - 74, 12)} fill="#0891b2" />
        <circle cx={CX - 40} cy={CY - 74} r="4" fill="#7c3aed" />
      {:else if step === 2}
        <polygon
          points={hexagon(CX - 40, CY - 74, 12)}
          fill="none"
          stroke="#0891b2"
          stroke-width="2"
        />
        <path
          d="M {CX - 40} {CY - 60} q 8 10 0 20 q -8 10 0 20"
          fill="none"
          stroke="#7c3aed"
          stroke-width="3"
        />
      {:else if step === 3}
        {#each INSIDE.slice(0, 6) as p, i (i)}
          <path
            d="M {p.x - 8} {p.y} q 4 -6 8 0 t 8 0"
            fill="none"
            stroke="#7c3aed"
            stroke-width="2.5"
          />
        {/each}
        {#each INSIDE.slice(6) as p, i (i)}
          <polygon points={hexagon(p.x, p.y, 5)} fill="none" stroke="#0891b2" stroke-width="2" />
        {/each}
      {:else}
        {#each step === 4 ? INSIDE : OUTSIDE as p, i (i)}
          <polygon points={hexagon(p.x, p.y, 9)} fill="#0891b2" />
          <circle cx={p.x} cy={p.y} r="3" fill="#7c3aed" />
        {/each}
      {/if}
    {:else}
      {#if place === 'mat-ban'}
        <rect x="30" y="140" width="280" height="22" rx="4" fill="#d6d3d1" stroke="#78716c" />
        <rect x="50" y="162" width="14" height="50" fill="#a8a29e" />
        <rect x="276" y="162" width="14" height="50" fill="#a8a29e" />
        <polygon points={hexagon(170, 128, 12)} fill="#0891b2" />
        <circle cx="170" cy="128" r="4" fill="#7c3aed" />
      {:else}
        <path
          d="M 120 40 L 132 200 h 76 L 220 40 Z"
          fill="#e0f2fe"
          stroke="#64748b"
          stroke-width="3"
        />
        <path d="M 124 80 L 216 80" stroke="#7dd3fc" stroke-width="2" />
        <polygon points={hexagon(170, 140, 12)} fill="#0891b2" />
        <circle cx="170" cy="140" r="4" fill="#7c3aed" />
      {/if}
    {/if}
    <text x={W - 10} y="20" font-size="12" text-anchor="end" fill="#0f172a">Số virus: {count}</text>
  </svg>

  <div class="flex flex-wrap gap-2">
    <button
      type="button"
      class={button.quiet}
      disabled={step === 0}
      onclick={() => (step = Math.max(0, step - 1))}>Bước trước</button
    >
    <button
      type="button"
      class={button.primary}
      disabled={step >= last}
      onclick={() => (step = Math.min(last, step + 1))}>Bước tiếp</button
    >
    <button type="button" class={button.quiet} disabled={step === 0} onclick={() => (step = 0)}
      >Làm lại</button
    >
  </div>

  <p
    class="min-h-12 rounded-xl px-4 py-3 text-sm {living
      ? 'bg-slate-100 text-slate-800'
      : 'bg-amber-50 text-amber-900'}"
    aria-live="polite"
  >
    {cycleMessage(place, step)}
    {living && step === last
      ? `Từ một virus, tế bào đã bị phá hủy và giải phóng ${RELEASED} virus mới (thực tế có thể tới hàng trăm).`
      : ''}
  </p>
</div>
