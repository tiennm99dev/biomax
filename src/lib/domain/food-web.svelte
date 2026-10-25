<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import {
    ROLE_LABELS,
    cascade,
    chainText,
    eatersOf,
    foodChains,
    foodOf,
    levelRows,
    trophicLevels,
  } from './food-web.js';

  /**
   * A food web drawn bottom-up: producers on the bottom row, each consumer
   * in the row of its highest trophic level, arrows pointing from food to
   * eater (the direction energy flows). In "Xem" mode, tap a species (or
   * Tab to it and press Enter) to highlight what it eats and what eats it,
   * its trophic levels and the chains through it. In "Loại bỏ" mode, tap
   * species to remove them and watch which consumers lose all their food.
   * Decomposers are listed under the web: they break down the remains of
   * every level.
   *
   * - `web`: `{ species, links }` from `food-web.js`.
   * - `removable`: offer the remove mode.
   * - `chains`: list the food chains of the web.
   *
   * @type {{
   *   web: import('./food-web.js').FoodWeb;
   *   removable?: boolean;
   *   chains?: boolean;
   *   label?: string;
   * }}
   */
  let { web, removable = true, chains = true, label = 'Lưới thức ăn' } = $props();

  const NODE_W = 96;
  const NODE_H = 32;
  const COL = 112;
  const ROW = 86;
  const markerId = $props.id();

  const rows = $derived(
    levelRows(web).filter((r) => r.every((id) => byId.get(id)?.role !== 'decomposer')),
  );
  const decomposers = $derived(web.species.filter((s) => s.role === 'decomposer'));
  const byId = $derived(new Map(web.species.map((s) => [s.id, s])));
  const W = $derived(Math.max(3, ...rows.map((r) => r.length)) * COL);
  const H = $derived(Math.max(0, rows.length - 1) * ROW + NODE_H + 16);
  const pos = $derived(
    new Map(
      rows.flatMap((row, k) =>
        row.map((id, i) => [
          id,
          { x: (W / row.length) * (i + 0.5), y: H - 8 - NODE_H / 2 - k * ROW },
        ]),
      ),
    ),
  );
  const links = $derived(
    web.links.filter(([a, b]) => pos.has(a) && pos.has(b)).map(([a, b]) => ({ a, b })),
  );
  const allChains = $derived(foodChains(web));

  /** @type {'view' | 'remove'} */
  let mode = $state('view');
  /** @type {string | null} */
  let selected = $state(null);
  /** @type {string[]} */
  let removed = $state([]);
  const starved = $derived(cascade(web, removed));
  const lost = $derived(new Set([...removed, ...starved]));
  const food = $derived(selected ? new Set(foodOf(web, selected)) : new Set());
  const eaters = $derived(selected ? new Set(eatersOf(web, selected)) : new Set());
  const through = $derived(selected ? allChains.filter((c) => c.includes(selected ?? '')) : []);
  const survivingChains = $derived(allChains.filter((c) => c.every((id) => !lost.has(id))));

  /** @param {string} id */
  const name = (id) => byId.get(id)?.name ?? id;

  /** @param {string} id */
  function tap(id) {
    if (mode === 'view') {
      selected = selected === id ? null : id;
      return;
    }
    removed = removed.includes(id) ? removed.filter((r) => r !== id) : [...removed, id];
  }

  /** @param {KeyboardEvent} e @param {string} id */
  function onKey(e, id) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      tap(id);
    }
  }

  /** @param {string} id */
  function fill(id) {
    if (mode === 'remove') {
      if (removed.includes(id)) return '#e2e8f0';
      if (starved.includes(id)) return '#fecaca';
    } else if (selected) {
      if (id === selected) return '#4f46e5';
      if (food.has(id)) return '#bbf7d0';
      if (eaters.has(id)) return '#fde68a';
    }
    return byId.get(id)?.role === 'producer' ? '#dcfce7' : '#f1f5f9';
  }

  /** @param {{ a: string, b: string }} l */
  function linkColor(l) {
    if (mode === 'remove') return lost.has(l.a) || lost.has(l.b) ? '#e2e8f0' : '#64748b';
    if (!selected) return '#64748b';
    return l.a === selected || l.b === selected ? '#4f46e5' : '#cbd5e1';
  }

  /** @param {string} id */
  function describe(id) {
    const s = byId.get(id);
    if (!s) return id;
    const lv = trophicLevels(web, id);
    const lvText = lv.length ? `, bậc dinh dưỡng ${lv.join(', ')}` : '';
    const state = removed.includes(id)
      ? ', đã loại bỏ'
      : starved.includes(id)
        ? ', mất nguồn thức ăn'
        : '';
    return `${s.name}: ${ROLE_LABELS[s.role].toLowerCase()}${lvText}${state}`;
  }

  /** @param {{ a: string, b: string }} l */
  function arrow(l) {
    const p = pos.get(l.a);
    const q = pos.get(l.b);
    if (!p || !q) return { x1: 0, y1: 0, x2: 0, y2: 0 };
    return { x1: p.x, y1: p.y - NODE_H / 2, x2: q.x, y2: q.y + NODE_H / 2 + 2 };
  }
</script>

<figure class="space-y-4" aria-label={label}>
  {#if removable}
    <SegmentedControl
      label="Chế độ"
      options={[
        { value: 'view', label: 'Xem quan hệ' },
        { value: 'remove', label: 'Loại bỏ loài' },
      ]}
      bind:value={mode}
      onchange={() => (selected = null)}
    />
  {/if}

  <svg
    viewBox="0 0 {W} {H}"
    class="mx-auto block w-full"
    style="max-width: {W * 1.4}px"
    role="group"
    aria-label={label}
  >
    <defs>
      <marker
        id="{markerId}-head"
        viewBox="0 0 10 10"
        refX="9"
        refY="5"
        markerWidth="7"
        markerHeight="7"
        orient="auto-start-reverse"
      >
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" />
      </marker>
    </defs>
    {#each links as l (l.a + '>' + l.b)}
      {@const a = arrow(l)}
      <line {...a} stroke={linkColor(l)} stroke-width="2" marker-end="url(#{markerId}-head)" />
    {/each}
    {#each rows.flat() as id (id)}
      {@const p = pos.get(id)}
      {#if p}
        <g
          role="button"
          tabindex="0"
          aria-pressed={mode === 'view' ? selected === id : removed.includes(id)}
          aria-label={describe(id)}
          class="group cursor-pointer outline-none"
          onclick={() => tap(id)}
          onkeydown={(e) => onKey(e, id)}
        >
          <rect
            x={p.x - NODE_W / 2 - 4}
            y={p.y - NODE_H / 2 - 4}
            width={NODE_W + 8}
            height={NODE_H + 8}
            rx="12"
            fill="none"
            stroke="#6366f1"
            stroke-width="3"
            class="opacity-0 group-focus-visible:opacity-100"
          />
          <rect
            x={p.x - NODE_W / 2}
            y={p.y - NODE_H / 2}
            width={NODE_W}
            height={NODE_H}
            rx="9"
            fill={fill(id)}
            stroke={lost.has(id) && mode === 'remove' ? '#94a3b8' : '#334155'}
            stroke-width="1.5"
            stroke-dasharray={removed.includes(id) && mode === 'remove' ? '4 3' : undefined}
          />
          <text
            x={p.x}
            y={p.y + 5}
            font-size="14"
            text-anchor="middle"
            font-weight="600"
            fill={mode === 'view' && selected === id
              ? '#ffffff'
              : lost.has(id) && mode === 'remove'
                ? '#94a3b8'
                : '#0f172a'}
            text-decoration={removed.includes(id) && mode === 'remove' ? 'line-through' : undefined}
            >{name(id)}</text
          >
        </g>
      {/if}
    {/each}
  </svg>

  {#if decomposers.length}
    <p class="text-sm text-slate-600">
      <strong>{ROLE_LABELS.decomposer}:</strong>
      {decomposers.map((d) => d.name).join(', ')} — phân giải xác và chất thải của sinh vật ở mọi bậc
      dinh dưỡng thành chất vô cơ trả lại môi trường.
    </p>
  {/if}

  <div class="space-y-2 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700" aria-live="polite">
    {#if mode === 'view'}
      {#if selected}
        <p><strong>{describe(selected)}</strong>.</p>
        <p>
          <span class="rounded bg-green-200 px-1">Thức ăn</span>:
          {[...food].map(name).join(', ') || 'không (tự tổng hợp chất hữu cơ)'}.
          <span class="rounded bg-amber-200 px-1">Bị ăn bởi</span>:
          {[...eaters].map(name).join(', ') || 'không loài nào trong lưới'}.
        </p>
        <p>Có mặt trong {through.length} chuỗi thức ăn.</p>
      {:else}
        <p>Chạm vào một loài để xem nó ăn gì, bị loài nào ăn và đứng ở bậc dinh dưỡng nào.</p>
      {/if}
    {:else}
      {#if removed.length}
        <p>
          Đã loại bỏ: {removed.map(name).join(', ')}.
          {starved.length
            ? `Mất hết nguồn thức ăn: ${starved.map(name).join(', ')}.`
            : 'Các loài còn lại vẫn có nguồn thức ăn khác.'}
        </p>
        <p>Còn {survivingChains.length}/{allChains.length} chuỗi thức ăn.</p>
        <button type="button" class={button.quiet} onclick={() => (removed = [])}
          >Khôi phục lưới</button
        >
      {:else}
        <p>Chạm vào loài muốn loại bỏ khỏi lưới thức ăn.</p>
      {/if}
    {/if}
  </div>

  {#if chains}
    <details class="text-sm text-slate-700">
      <summary class="cursor-pointer font-semibold">Các chuỗi thức ăn ({allChains.length})</summary>
      <ol class="mt-2 list-decimal space-y-1 pl-6">
        {#each allChains as c, i (i)}
          <li
            class={mode === 'remove' && c.some((id) => lost.has(id))
              ? 'text-slate-400 line-through'
              : ''}
          >
            {chainText(web, c)}
          </li>
        {/each}
      </ol>
    </details>
  {/if}
</figure>
