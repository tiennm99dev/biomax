<script>
  import { viewPoint, wrapYaw } from '#lib/geom-engine/solid.js';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import SliderField from '#lib/core/slider-field.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { ORGANELLES, isOnlyIn, partsOf, placesIn, quizOrder } from './engine.js';

  /** @typedef {import('./engine.js').CellType} CellType */

  const WIDTH = 360;
  const HEIGHT = 320;
  const CX = WIDTH / 2;
  const CY = HEIGHT / 2;
  const PITCH = 18;
  /** Half the edge of the plant cell's box, for the wall and the membrane just inside it. */
  const WALL = 112;
  const MEMBRANE = 104;
  /** Radius of the animal cell. */
  const RADIUS = 136;

  const TYPES = [
    { value: 'dong-vat', label: 'Động vật' },
    { value: 'thuc-vat', label: 'Thực vật' },
  ];
  const MODES = [
    { value: 'tim-hieu', label: 'Tìm hiểu' },
    { value: 'do', label: 'Tìm bào quan' },
  ];

  let type = $state(/** @type {CellType} */ ('dong-vat'));
  let mode = $state('tim-hieu');
  let yaw = $state(-20);
  let showDifferences = $state(false);
  /** @type {string | null} */
  let selected = $state(null);
  let quizSeed = $state(5);
  let found = $state(0);
  /** @type {{ tone: 'ok' | 'warn', text: string } | null} */
  let feedback = $state(null);

  const view = $derived({ yaw, pitch: PITCH });
  const parts = $derived(partsOf(type));
  const sprites = $derived(buildSprites(type, yaw));
  const order = $derived(quizOrder(type, quizSeed));
  const target = $derived(
    mode === 'do' && found < order.length ? ORGANELLES.find((o) => o.id === order[found]) : null,
  );
  const chosen = $derived(ORGANELLES.find((o) => o.id === selected) ?? null);
  const edges = $derived(type === 'thuc-vat' ? boxEdges() : []);

  /**
   * @param {number} half
   */
  function boxCorners(half) {
    const r = [-half, half];
    return r.flatMap((x) => r.flatMap((y) => r.map((z) => ({ x, y, z }))));
  }

  function boxEdges() {
    /** @type {Array<{ x1: number, y1: number, x2: number, y2: number, depth: number, wall: boolean }>} */
    const out = [];
    for (const [half, wall] of /** @type {Array<[number, boolean]>} */ ([
      [WALL, true],
      [MEMBRANE, false],
    ])) {
      const corners = boxCorners(half);
      for (let i = 0; i < corners.length; i++) {
        for (let j = i + 1; j < corners.length; j++) {
          const a = corners[i];
          const b = corners[j];
          const same = (a.x === b.x ? 1 : 0) + (a.y === b.y ? 1 : 0) + (a.z === b.z ? 1 : 0);
          if (same !== 2) continue;
          const p = viewPoint(a, view);
          const q = viewPoint(b, view);
          out.push({
            x1: CX + p.x,
            y1: CY + p.y,
            x2: CX + q.x,
            y2: CY + q.y,
            depth: (p.depth + q.depth) / 2,
            wall,
          });
        }
      }
    }
    return out;
  }

  /**
   * @param {CellType} cell
   * @param {number} turn
   */
  function buildSprites(cell, turn) {
    const v = { yaw: turn, pitch: PITCH };
    const list = partsOf(cell).flatMap((o) => {
      if (o.wraps) return [];
      return placesIn(o, cell).map((spot, copy) => {
        const p = viewPoint(spot, v);
        return {
          key: `${o.id}-${copy}`,
          id: o.id,
          kind: o.kind,
          within: o.within,
          x: CX + p.x,
          y: CY + p.y,
          depth: p.depth,
          turn: copy * 67 + turn * 0.6,
          big: cell === 'thuc-vat' && o.id === 'khong-bao',
        };
      });
    });
    const depthOf = new Map(list.map((s) => [s.id, s.depth]));
    return list
      .map((s) => ({ ...s, order: s.within ? (depthOf.get(s.within) ?? 0) + 0.5 : s.depth }))
      .sort((a, b) => a.order - b.order);
  }

  /** @param {number} depth */
  const fade = (depth) => 0.55 + (0.45 * (Math.max(-130, Math.min(130, depth)) + 130)) / 260;

  /** Whether a press just ended a turning drag rather than a tap. */
  let dragged = false;

  /**
   * Turns the cell while a pointer drags across the drawing. Vertical swipes
   * stay with the page, so a phone can still scroll past the widget.
   * @param {SVGSVGElement} node
   */
  function turnDrag(node) {
    /** @type {number | null} */
    let lastX = null;
    /** @param {PointerEvent} e */
    const down = (e) => {
      lastX = e.clientX;
      dragged = false;
    };
    /** @param {PointerEvent} e */
    const move = (e) => {
      if (lastX === null || Math.abs(e.clientX - lastX) < 3) return;
      const scale = WIDTH / node.getBoundingClientRect().width;
      yaw = Math.round(wrapYaw(yaw + (e.clientX - lastX) * scale));
      lastX = e.clientX;
      dragged = true;
    };
    const up = () => {
      lastX = null;
    };
    node.addEventListener('pointerdown', down);
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    window.addEventListener('pointercancel', up);
    return {
      destroy() {
        node.removeEventListener('pointerdown', down);
        window.removeEventListener('pointermove', move);
        window.removeEventListener('pointerup', up);
        window.removeEventListener('pointercancel', up);
      },
    };
  }

  /** @param {string} id */
  function pick(id) {
    if (dragged) {
      dragged = false;
      return;
    }
    const part = ORGANELLES.find((o) => o.id === id);
    if (!part) return;
    selected = id;
    if (mode !== 'do' || !target) return;
    if (id === target.id) {
      found += 1;
      feedback = { tone: 'ok', text: `Đúng, đó là ${part.name.toLowerCase()}. ${part.info}` };
    } else {
      feedback = {
        tone: 'warn',
        text: `Đây là ${part.name.toLowerCase()}: ${part.clue} Hãy tìm bào quan khác.`,
      };
    }
  }

  function resetQuiz() {
    found = 0;
    feedback = null;
    selected = null;
    quizSeed += 1;
  }

  /** @param {string} id */
  const dim = (id) => {
    const part = ORGANELLES.find((o) => o.id === id);
    return showDifferences && mode === 'tim-hieu' && part && !isOnlyIn(part, type);
  };
</script>

{#snippet shape(/** @type {string} */ kind, /** @type {boolean} */ big, /** @type {number} */ turn)}
  {#if kind === 'nhan'}
    <circle r="38" fill="url(#cell-nhan)" stroke="#6d28d9" stroke-width="2.5" />
    {#each [0, 60, 120, 180, 240, 300] as a (a)}
      <circle
        cx={38 * Math.cos((a * Math.PI) / 180)}
        cy={38 * Math.sin((a * Math.PI) / 180)}
        r="2"
        fill="#fff"
      />
    {/each}
  {:else if kind === 'nhan-con'}
    <circle r="13" fill="#5b21b6" />
  {:else if kind === 'ribosome'}
    {#each [[-10, -6], [4, -10], [12, 2], [-4, 6], [8, 12], [-14, 9]] as [cx, cy] (`${cx},${cy}`)}
      <circle {cx} {cy} r="3.5" fill="#1e3a8a" />
    {/each}
  {:else if kind === 'luoi-hat'}
    <g transform="rotate({turn * 0.5})">
      {#each [-12, 0, 12] as y (y)}
        <path
          d="M -32 {y} q 8 -8 16 0 t 16 0 t 16 0 t 16 0"
          fill="none"
          stroke="#2563eb"
          stroke-width="3.5"
        />
        {#each [-32, -16, 0, 16, 32] as x (x)}
          <circle cx={x} cy={y - 4} r="2" fill="#1e3a8a" />
        {/each}
      {/each}
    </g>
  {:else if kind === 'luoi-tron'}
    <g transform="rotate({turn * 0.5})">
      {#each [-11, 0, 11] as y (y)}
        <path
          d="M -30 {y} q 15 -14 30 0 t 30 0"
          fill="none"
          stroke="#0284c7"
          stroke-width="5"
          stroke-linecap="round"
        />
      {/each}
    </g>
  {:else if kind === 'golgi'}
    {#each [-12, -4, 4, 12] as y, i (y)}
      <path
        d="M {-26 + i * 2} {y} q {26 - i * 2} 8 {52 - i * 4} 0"
        fill="none"
        stroke="#ca8a04"
        stroke-width="5"
        stroke-linecap="round"
      />
    {/each}
    <circle cx="33" cy="-6" r="3.5" fill="#ca8a04" />
  {:else if kind === 'lysosome'}
    <circle r="13" fill="url(#cell-lysosome)" stroke="#b91c1c" stroke-width="2" />
    {#each [[-4, -3], [4, 1], [-1, 6]] as [cx, cy] (`${cx},${cy}`)}
      <circle {cx} {cy} r="1.8" fill="#991b1b" />
    {/each}
  {:else if kind === 'peroxisome'}
    <circle r="11" fill="#d9f99d" stroke="#4d7c0f" stroke-width="2" />
    <rect x="-4" y="-4" width="8" height="8" fill="#65a30d" transform="rotate(45)" />
  {:else if kind === 'khong-bao'}
    <circle
      r={big ? 68 : 15}
      fill="url(#cell-khong-bao)"
      stroke="#0369a1"
      stroke-width="2"
      opacity="0.85"
    />
  {:else if kind === 'ti-the'}
    <g transform="rotate({turn})">
      <rect
        x="-27"
        y="-13"
        width="54"
        height="26"
        rx="13"
        fill="#fed7aa"
        stroke="#c2410c"
        stroke-width="2.5"
      />
      <path
        d="M -19 0 l 6 -9 l 6 18 l 6 -18 l 6 18 l 6 -18 l 6 18 l 3 -9"
        fill="none"
        stroke="#c2410c"
        stroke-width="1.5"
      />
    </g>
  {:else if kind === 'luc-lap'}
    <g transform="rotate({turn})">
      <ellipse rx="29" ry="16" fill="#86efac" stroke="#15803d" stroke-width="2.5" />
      {#each [-13, 0, 13] as x (x)}
        {#each [-5, 0, 5] as y (y)}
          <rect x={x - 4} y={y - 1.5} width="8" height="3" fill="#166534" />
        {/each}
      {/each}
    </g>
  {:else if kind === 'trung-the'}
    <rect x="-14" y="-5" width="28" height="10" rx="2" fill="#64748b" />
    <rect x="-5" y="-14" width="10" height="28" rx="2" fill="#334155" />
  {:else if kind === 'khung'}
    <g transform="rotate({turn * 0.4})" stroke="#94a3b8" stroke-linecap="round" fill="none">
      <path d="M -34 -14 L 34 12 M -26 22 L 24 -22" stroke-width="2.5" />
      <path d="M -18 -26 L 10 28 M -36 6 L 36 -8" stroke-width="1.5" />
    </g>
  {/if}
{/snippet}

<div class="space-y-3">
  <div class="flex flex-wrap gap-3">
    <SegmentedControl
      label="Loại tế bào"
      options={TYPES}
      bind:value={type}
      onchange={() => {
        selected = null;
        found = 0;
        feedback = null;
      }}
    />
    <SegmentedControl label="Chế độ" options={MODES} bind:value={mode} onchange={resetQuiz} />
  </div>

  {#if target}
    <p class="rounded-xl bg-indigo-50 px-4 py-3 text-sm font-semibold text-indigo-950">
      Câu {found + 1}/{order.length}: bào quan nào đảm nhiệm vai trò sau?
      <span class="block font-normal"><LiveRichText text={target.clue} /></span>
    </p>
  {/if}

  <svg
    use:turnDrag
    viewBox="0 0 {WIDTH} {HEIGHT}"
    class="mx-auto block w-full max-w-md cursor-grab touch-pan-y rounded-xl bg-slate-50 select-none"
    role="img"
    aria-label="Mô hình ba chiều của tế bào {type === 'dong-vat'
      ? 'động vật'
      : 'thực vật'}, đang xoay {yaw} độ{chosen ? `, đang chọn ${chosen.name}` : ''}"
  >
    <defs>
      <radialGradient id="cell-than" cx="38%" cy="32%" r="75%">
        <stop offset="0%" stop-color="#fdf2f8" />
        <stop offset="100%" stop-color="#fbcfe8" />
      </radialGradient>
      <radialGradient id="cell-nhan" cx="35%" cy="30%" r="80%">
        <stop offset="0%" stop-color="#ede9fe" />
        <stop offset="100%" stop-color="#a78bfa" />
      </radialGradient>
      <radialGradient id="cell-lysosome" cx="35%" cy="30%" r="80%">
        <stop offset="0%" stop-color="#fee2e2" />
        <stop offset="100%" stop-color="#f87171" />
      </radialGradient>
      <radialGradient id="cell-khong-bao" cx="35%" cy="30%" r="80%">
        <stop offset="0%" stop-color="#f0f9ff" />
        <stop offset="100%" stop-color="#7dd3fc" />
      </radialGradient>
    </defs>

    {#if type === 'dong-vat'}
      <circle
        cx={CX}
        cy={CY}
        r={RADIUS}
        fill="url(#cell-than)"
        stroke={selected === 'mang-sinh-chat' ? '#4f46e5' : '#be185d'}
        stroke-width={selected === 'mang-sinh-chat' ? 6 : 3}
      />
    {:else}
      {#each edges.filter((e) => e.depth < 0) as e, i (i)}
        <line
          x1={e.x1}
          y1={e.y1}
          x2={e.x2}
          y2={e.y2}
          stroke={e.wall ? '#a16207' : '#be185d'}
          stroke-width={e.wall ? 4 : 2}
          opacity="0.45"
        />
      {/each}
    {/if}

    {#each sprites as s (s.key)}
      {@const dimmed = dim(s.id)}
      {@const active = selected === s.id}
      <g
        role="button"
        tabindex="-1"
        transform="translate({s.x} {s.y})"
        class="cursor-pointer"
        opacity={dimmed ? 0.18 : fade(s.depth)}
        onclick={() => pick(s.id)}
        onkeydown={(e) => {
          if (e.key === 'Enter') pick(s.id);
        }}
      >
        <circle r={s.big ? 68 : 22} fill="transparent" />
        {#if active}
          <circle
            r={s.big ? 74 : 30}
            fill="#c7d2fe"
            opacity="0.7"
            stroke="#4f46e5"
            stroke-width="2.5"
          />
        {/if}
        {@render shape(s.kind, s.big, s.turn)}
      </g>
    {/each}

    {#if type === 'thuc-vat'}
      {#each edges.filter((e) => e.depth >= 0) as e, i (i)}
        <line
          x1={e.x1}
          y1={e.y1}
          x2={e.x2}
          y2={e.y2}
          stroke={selected === (e.wall ? 'thanh-te-bao' : 'mang-sinh-chat')
            ? '#4f46e5'
            : e.wall
              ? '#a16207'
              : '#be185d'}
          stroke-width={e.wall ? 5 : 2.5}
          stroke-linecap="round"
        />
      {/each}
    {/if}
  </svg>

  <SliderField
    label="Xoay tế bào (hoặc kéo trên hình)"
    bind:value={yaw}
    min={-180}
    max={180}
    step={5}
    format={(v) => `${v}°`}
  />

  {#if mode === 'tim-hieu'}
    <label class="flex min-h-11 cursor-pointer items-center gap-2 text-sm text-slate-800">
      <input type="checkbox" class="h-5 w-5 {focusRing}" bind:checked={showDifferences} />
      Làm nổi bào quan chỉ có ở tế bào {type === 'dong-vat' ? 'động vật' : 'thực vật'}
    </label>
  {/if}

  {#if mode === 'do'}
    {#if feedback}
      <FeedbackNote tone={feedback.tone} text={feedback.text} />
    {/if}
    {#if target}
      <p class="text-sm text-slate-700">
        Chạm vào bào quan trên hình hoặc tên của nó bên dưới. Xoay tế bào nếu bào quan bị che.
      </p>
    {:else}
      <p class="text-sm font-semibold text-emerald-800" aria-live="polite">
        Hoàn thành: em đã tìm đúng {order.length} bộ phận của tế bào.
      </p>
    {/if}
  {:else}
    <div class="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700" aria-live="polite">
      {#if chosen}
        <p><strong>{chosen.name}</strong> ({chosen.membrane.toLowerCase()})</p>
        <p class="mt-1"><LiveRichText text={chosen.info} /></p>
        <p class="mt-1">
          Tế bào động vật: {chosen.animal.length ? 'có' : 'thường không có'}. Tế bào thực vật:
          {chosen.plant.length ? 'có' : 'thường không có'}.
        </p>
      {:else}
        Chạm vào một bộ phận trên hình hoặc tên của nó bên dưới để xem cấu tạo và chức năng.
      {/if}
    </div>
  {/if}

  <ul class="grid grid-cols-2 gap-1 text-sm sm:grid-cols-3">
    {#each parts as o (o.id)}
      <li>
        <button
          type="button"
          class="flex min-h-11 w-full items-center rounded-lg px-2 text-left {selected === o.id
            ? 'bg-indigo-100 font-semibold text-indigo-950'
            : 'bg-slate-100 text-slate-800 hover:bg-slate-200'} {focusRing}"
          aria-pressed={selected === o.id}
          onclick={() => {
            dragged = false;
            pick(o.id);
          }}>{o.name}</button
        >
      </li>
    {/each}
  </ul>

  {#if mode === 'do'}
    <button type="button" class={button.quiet} onclick={resetQuiz}>Làm lại</button>
  {/if}
</div>
