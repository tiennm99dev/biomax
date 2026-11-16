<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import {
    MAX_ENZYMES,
    MAX_LACTOSE,
    MUTANT_LABELS,
    addLactose,
    explain,
    start,
    status,
    tick,
  } from './engine.js';

  /** @typedef {import('./engine.js').Mutant} Mutant */

  /** @type {Mutant} */
  let mutant = $state('none');
  let cell = $state(start());
  let time = $state(0);

  const st = $derived(status(cell));
  const lines = $derived(explain(cell));

  /** @param {string | number} m */
  function pick(m) {
    cell = start(/** @type {Mutant} */ (m));
    time = 0;
  }

  function feed() {
    cell = addLactose(cell);
  }

  function step() {
    cell = tick(cell);
    time += 1;
  }

  function reset() {
    cell = start(mutant);
    time = 0;
  }

  /** Parts of the DNA drawn left to right. */
  const PARTS = [
    { id: 'lacI', label: 'lacI', x: 8, w: 58, fill: '#e2e8f0' },
    { id: 'P', label: 'P', x: 104, w: 40, fill: '#fde68a' },
    { id: 'O', label: 'O', x: 146, w: 36, fill: '#fecaca' },
    { id: 'Z', label: 'Z', x: 184, w: 80, fill: '#bfdbfe' },
    { id: 'Y', label: 'Y', x: 266, w: 60, fill: '#bfdbfe' },
    { id: 'A', label: 'A', x: 328, w: 60, fill: '#bfdbfe' },
  ];

  /** A small hexagon (lactose) centred at x, y. @param {number} x @param {number} y */
  const hex = (x, y) =>
    Array.from({ length: 6 }, (_, k) => {
      const a = (Math.PI / 3) * k;
      return `${(x + 6 * Math.cos(a)).toFixed(1)},${(y + 6 * Math.sin(a)).toFixed(1)}`;
    }).join(' ');

  const repressor = $derived(st.onOperator ? { x: 164, y: 92 } : { x: 70, y: 62 });
  const summary = $derived(
    `${MUTANT_LABELS[cell.mutant]}. Trong tế bào có ${cell.lactose} phân tử lactose. Protein ức chế ${st.onOperator ? 'đang gắn vào vùng O' : 'không gắn vào vùng O'}. Gene Z, Y, A ${st.transcribing ? 'đang phiên mã' : 'không phiên mã'}. Mức enzyme ${cell.enzymes} trên ${MAX_ENZYMES}.`,
  );
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Chủng vi khuẩn E. coli"
    bind:value={mutant}
    onchange={pick}
    options={Object.entries(MUTANT_LABELS).map(([value, label]) => ({ value, label }))}
  />

  <figure class="rounded-xl border border-slate-200 bg-white p-2">
    <svg viewBox="0 0 396 200" class="h-auto w-full" role="img" aria-label={summary}>
      <!-- lactose in the cell -->
      <text x="200" y="14" font-size="12" text-anchor="middle" fill="#475569"
        >Lactose trong tế bào: {cell.lactose}</text
      >
      {#each Array.from({ length: cell.lactose }, (_, i) => i) as i (i)}
        <polygon points={hex(150 + i * 14, 28)} fill="#facc15" stroke="#a16207" />
      {/each}

      <!-- DNA -->
      <line x1="4" y1="124" x2="392" y2="124" stroke="#334155" stroke-width="2" />
      {#each PARTS as p (p.id)}
        {@const broken = p.id === cell.mutant}
        <rect
          x={p.x}
          y="112"
          width={p.w}
          height="24"
          rx="3"
          fill={p.fill}
          stroke={broken ? '#dc2626' : '#334155'}
          stroke-width={broken ? 2.5 : 1}
        />
        <text x={p.x + p.w / 2} y="128" font-size="12" font-weight="700" text-anchor="middle"
          >{p.label}{broken ? ' ✕' : ''}</text
        >
      {/each}
      <text x="246" y="106" font-size="12" text-anchor="middle" fill="#475569"
        >operon lac (P, O, Z, Y, A)</text
      >
      <line x1="104" y1="100" x2="104" y2="110" stroke="#94a3b8" />
      <line x1="388" y1="100" x2="388" y2="110" stroke="#94a3b8" />
      <line x1="104" y1="100" x2="388" y2="100" stroke="#94a3b8" />

      <!-- repressor -->
      <path
        d="M37 112 Q 52 90 {repressor.x - 18} {repressor.y + 4}"
        fill="none"
        stroke="#94a3b8"
        stroke-dasharray="3 3"
      />
      <g transform="translate({repressor.x} {repressor.y})">
        <path
          d={st.inducer && st.repressorWorks
            ? 'M-16 -10 L16 -10 L12 12 L-4 6 L-16 12 Z'
            : 'M-16 -10 L16 -10 L16 12 L6 12 L6 4 L-6 4 L-6 12 L-16 12 Z'}
          fill={st.repressorWorks ? '#dc2626' : '#cbd5e1'}
          stroke={st.repressorWorks ? '#7f1d1d' : '#64748b'}
          stroke-dasharray={st.repressorWorks ? 'none' : '3 2'}
        />
        {#if st.inducer && st.repressorWorks}
          <polygon points={hex(0, -16)} fill="#facc15" stroke="#a16207" />
        {/if}
      </g>
      <text x={repressor.x} y={repressor.y + 26} font-size="12" text-anchor="middle" fill="#7f1d1d"
        >protein ức chế</text
      >

      <!-- RNA polymerase -->
      {#if st.polymeraseBinds}
        <ellipse cx="124" cy="148" rx="22" ry="10" fill="#a78bfa" stroke="#5b21b6" />
        <text x="124" y="151" font-size="11" text-anchor="middle" fill="#ffffff">RNA pol</text>
      {:else}
        <ellipse
          cx="40"
          cy="166"
          rx="22"
          ry="10"
          fill="#ddd6fe"
          stroke="#5b21b6"
          stroke-dasharray="3 2"
        />
        <text x="40" y="169" font-size="11" text-anchor="middle" fill="#5b21b6">RNA pol</text>
      {/if}

      <!-- mRNA and enzymes -->
      {#if st.transcribing}
        <path
          d="M186 150 q 10 -6 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0"
          fill="none"
          stroke="#7c3aed"
          stroke-width="2"
        />
        <text x="290" y="166" font-size="12" text-anchor="middle" fill="#5b21b6"
          >mRNA của Z, Y, A</text
        >
      {/if}
      {#each Array.from({ length: cell.enzymes }, (_, i) => i) as i (i)}
        <circle cx={230 + i * 50} cy="186" r="8" fill="#059669" />
      {/each}
      {#if cell.enzymes}
        <text x="200" y="190" font-size="12" text-anchor="end" fill="#065f46">enzyme:</text>
      {/if}
    </svg>
  </figure>

  <div class="grid grid-cols-2 gap-2 text-center text-sm">
    <div
      class="rounded-lg p-2 {st.transcribing
        ? 'bg-emerald-50 text-emerald-900'
        : 'bg-slate-100 text-slate-700'}"
    >
      <div class="text-xs">Gene Z, Y, A</div>
      <div class="text-lg font-bold">{st.transcribing ? 'Đang phiên mã' : 'Không phiên mã'}</div>
    </div>
    <div class="rounded-lg bg-slate-50 p-2">
      <div class="text-xs text-slate-500">Thời gian</div>
      <div class="text-lg font-bold">{time} bước</div>
    </div>
  </div>

  <ul
    class="list-disc space-y-1 rounded-xl bg-slate-50 py-3 pr-3 pl-7 text-sm text-slate-700"
    aria-live="polite"
  >
    {#each lines as line (line)}
      <li>{line}</li>
    {/each}
  </ul>

  <div class="flex flex-wrap gap-2">
    <button
      type="button"
      class={button.secondary}
      disabled={cell.lactose >= MAX_LACTOSE}
      onclick={feed}>Thêm lactose</button
    >
    <button type="button" class={button.primary} onclick={step}>Thời gian trôi</button>
    <button type="button" class={button.quiet} onclick={reset}>Làm lại</button>
  </div>
</div>
