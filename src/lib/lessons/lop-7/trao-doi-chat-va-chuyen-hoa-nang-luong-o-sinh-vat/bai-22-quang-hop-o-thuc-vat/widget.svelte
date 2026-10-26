<script>
  import { button, focusRing } from '#lib/core/ui.js';
  import { TOKENS, equationParts, offer, ready } from './engine.js';

  const uid = $props.id();
  /** @type {string[]} */
  let inLeaf = $state([]);
  let made = $state(false);
  let dragOver = $state(false);
  /** @type {{ ok: boolean, text: string } | null} */
  let feedback = $state(null);

  const eq = $derived(equationParts(inLeaf, made));
  const canMake = $derived(ready(inLeaf) && !made);

  /** @param {string} id */
  function put(id) {
    if (made) return;
    const r = offer(inLeaf, id);
    inLeaf = r.inLeaf;
    feedback = { ok: r.ok, text: r.text };
  }

  function photosynthesise() {
    made = true;
    feedback = {
      ok: true,
      text: 'Lá đã quang hợp: năng lượng ánh sáng được diệp lục hấp thụ và chuyển thành hoá năng tích luỹ trong glucose; khí oxygen thoát ra ngoài qua khí khổng. Glucose có thể chuyển thành tinh bột hoặc theo mạch dẫn đi nuôi cây.',
    };
  }

  function reset() {
    inLeaf = [];
    made = false;
    feedback = null;
  }

  /** @param {DragEvent} e @param {string} id */
  function dragStart(e, id) {
    e.dataTransfer?.setData('text/plain', id);
  }

  /** @param {DragEvent} e */
  function drop(e) {
    e.preventDefault();
    dragOver = false;
    const id = e.dataTransfer?.getData('text/plain');
    if (id) put(id);
  }

  const has = (/** @type {string} */ id) => inLeaf.includes(id);
  const term = 'rounded px-1.5 py-0.5 font-semibold';
  const blank = 'rounded border border-dashed border-slate-400 px-3 py-0.5 text-slate-400';
</script>

<div class="space-y-4">
  <p class="text-sm text-slate-700">
    Bấm (hoặc kéo) từng thứ vào lá. Chỉ những gì quang hợp cần mới được nhận.
  </p>
  <ul class="flex flex-wrap gap-2" aria-label="Những thứ có thể đưa vào lá">
    {#each TOKENS as t (t.id)}
      <li>
        <button
          type="button"
          draggable={!made}
          ondragstart={(e) => dragStart(e, t.id)}
          class="min-h-11 rounded-full border-2 px-3 py-1 text-sm font-semibold {focusRing} {has(
            t.id,
          )
            ? 'border-emerald-500 bg-emerald-100 text-emerald-900'
            : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'}"
          aria-label="Đưa {t.label.toLowerCase()} vào lá{has(t.id) ? ', đã có trong lá' : ''}"
          disabled={made}
          onclick={() => put(t.id)}
        >
          {t.label}
        </button>
      </li>
    {/each}
  </ul>

  <div
    class="rounded-2xl border-2 p-1 {dragOver ? 'border-indigo-500' : 'border-transparent'}"
    role="region"
    aria-label="Lá cây, nơi thả các thứ vào"
    ondragover={(e) => {
      e.preventDefault();
      dragOver = true;
    }}
    ondragleave={() => (dragOver = false)}
    ondrop={drop}
  >
    <svg
      viewBox="0 0 360 220"
      class="block w-full"
      role="img"
      aria-label="Mô hình lá: {has('anh-sang') ? 'đang được chiếu sáng' : 'chưa có ánh sáng'}, {has(
        'nuoc',
      )
        ? 'có nước'
        : 'chưa có nước'}, {has('carbon-dioxide')
        ? 'có carbon dioxide'
        : 'chưa có carbon dioxide'}{made ? ', đã tạo glucose và thải oxygen' : ''}"
    >
      <rect width="360" height="220" fill={has('anh-sang') ? '#fefce8' : '#e2e8f0'} />
      {#if has('anh-sang')}
        <circle cx="330" cy="28" r="18" fill="#facc15" />
        {#each [0, 1, 2] as i (i)}
          <line
            x1={310 - i * 22}
            y1={40 + i * 6}
            x2={250 - i * 30}
            y2={80 + i * 10}
            stroke="#eab308"
            stroke-width="3"
            stroke-dasharray="6 4"
          />
        {/each}
      {/if}
      <!-- leaf blade and veins -->
      <path
        d="M 30 120 Q 120 30 300 110 Q 140 200 30 120 Z"
        fill={has('anh-sang') ? '#4ade80' : '#86a98f'}
        stroke="#166534"
        stroke-width="3"
      />
      <path d="M 0 124 L 30 120 L 290 112" stroke="#15803d" stroke-width="4" fill="none" />
      {#each [80, 140, 200, 250] as x (x)}
        <path d="M {x} 118 l 26 -26 M {x} 118 l 24 22" stroke="#15803d" stroke-width="2" />
      {/each}
      <!-- chloroplasts -->
      {#each [[110, 96], [170, 88], [220, 96], [150, 140], [200, 136]] as [cx, cy] (cx * 1000 + cy)}
        <ellipse {cx} {cy} rx="9" ry="5" fill="#166534" opacity={has('anh-sang') ? 0.9 : 0.5} />
      {/each}
      <text x="176" y="76" font-size="10" text-anchor="middle" fill="#14532d">lục lạp</text>
      <!-- stomata on the underside -->
      {#each [130, 230] as x (x)}
        <ellipse cx={x} cy="160" rx="8" ry="4" fill="#fef3c7" stroke="#166534" />
      {/each}
      <text x="180" y="176" font-size="10" text-anchor="middle" fill="#14532d">khí khổng</text>
      <text x="6" y="140" font-size="10" fill="#14532d">cuống lá</text>

      {#if has('nuoc')}
        <path
          d="M 0 112 L 60 110"
          stroke="#0284c7"
          stroke-width="4"
          marker-end="url(#{uid}-mui-ten)"
        />
        <text x="4" y="104" font-size="11" font-weight="700" fill="#0369a1">nước</text>
      {/if}
      {#if has('carbon-dioxide')}
        <path
          d="M 130 214 L 130 168"
          stroke="#475569"
          stroke-width="3"
          marker-end="url(#{uid}-mui-ten)"
        />
        <text x="138" y="206" font-size="11" font-weight="700" fill="#334155">CO₂</text>
      {/if}
      {#if made}
        <path
          d="M 230 166 L 230 212"
          stroke="#dc2626"
          stroke-width="3"
          marker-end="url(#{uid}-mui-ten)"
        />
        <text x="238" y="206" font-size="11" font-weight="700" fill="#b91c1c">O₂</text>
        {#each [[100, 120], [160, 116], [210, 118]] as [x, y] (x)}
          <rect x={x - 7} y={y - 7} width="14" height="14" rx="3" fill="#f8fafc" stroke="#a16207" />
        {/each}
        <text x="96" y="52" font-size="11" font-weight="700" fill="#a16207">glucose</text>
      {/if}
      <defs>
        <marker
          id="{uid}-mui-ten"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="5"
          markerHeight="5"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#334155" />
        </marker>
      </defs>
    </svg>
  </div>

  <p
    class="flex flex-wrap items-center gap-x-1.5 gap-y-2 rounded-xl bg-slate-50 px-3 py-3 text-sm"
    aria-label="Phương trình chữ của quang hợp"
  >
    {#if eq.nuoc}<span class="{term} bg-sky-100 text-sky-900">Nước</span>{:else}<span class={blank}
        >?</span
      >{/if}
    <span>+</span>
    {#if eq.carbonDioxide}<span class="{term} bg-slate-200 text-slate-900">Carbon dioxide</span
      >{:else}<span class={blank}>?</span>{/if}
    <span class="inline-flex flex-col items-center px-1 text-xs leading-tight">
      <span class={eq.anhSang ? 'font-semibold text-amber-700' : 'text-slate-400'}
        >{eq.anhSang ? 'Ánh sáng' : '?'}</span
      >
      <span aria-hidden="true" class="text-base">⟶</span>
      <span class="text-emerald-800">Diệp lục</span>
    </span>
    {#if eq.products}
      <span class="{term} bg-amber-100 text-amber-900">Glucose</span>
      <span>+</span>
      <span class="{term} bg-rose-100 text-rose-900">Oxygen</span>
    {:else}
      <span class={blank}>?</span><span>+</span><span class={blank}>?</span>
    {/if}
  </p>

  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.primary} disabled={!canMake} onclick={photosynthesise}
      >Quang hợp</button
    >
    <button type="button" class={button.quiet} onclick={reset}>Làm lại</button>
  </div>

  <p
    class="min-h-12 text-sm {feedback
      ? feedback.ok
        ? 'text-emerald-800'
        : 'font-semibold text-amber-800'
      : 'text-slate-600'}"
    aria-live="polite"
  >
    {feedback ? feedback.text : 'Lá đang chờ nguyên liệu và điều kiện để quang hợp.'}
  </p>
</div>
