<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import { focusRing } from '#lib/core/ui.js';
  import { ERAS, TREES, commonAncestor, layoutTree, pathTo, tipsOf, treeNote } from './engine.js';

  const LEFT = 12;
  const RIGHT = 226;
  const TOP = 30;
  const ROW = 24;
  const W = 360;

  let treeId = $state('xuong-song');
  /** @type {string[]} */
  let chosen = $state([]);

  const tree = $derived(TREES.find((t) => t.id === treeId) ?? TREES[0]);
  const placed = $derived(layoutTree(tree, { left: LEFT, right: RIGHT, top: TOP, row: ROW }));
  const tips = $derived(tipsOf(tree.root));
  const height = $derived(TOP + tips.length * ROW + 12);
  const ancestor = $derived(
    chosen.length === 2 ? commonAncestor(tree.root, chosen[0], chosen[1]) : null,
  );
  const lit = $derived(
    new Set(
      ancestor
        ? chosen.flatMap((id) =>
            pathTo(ancestor, id)
              .slice(1)
              .map((n) => n.id),
          )
        : chosen,
    ),
  );
  const note = $derived(treeNote(tree, chosen));

  /** @param {number} t */
  const xOf = (t) => LEFT + ((tree.span - t) / tree.span) * (RIGHT - LEFT);

  const bands = $derived(
    ERAS.filter((e) => e.to < tree.span).map((e) => ({
      ...e,
      x1: xOf(Math.min(e.from, tree.span)),
      x2: xOf(e.to),
    })),
  );

  /** @param {string | number} v */
  function setTree(v) {
    treeId = String(v);
    chosen = [];
  }

  /** @param {string} id */
  function toggle(id) {
    if (chosen.includes(id)) chosen = chosen.filter((c) => c !== id);
    else chosen = [...chosen, id].slice(-2);
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Thang thời gian"
    options={TREES.map((t) => ({
      value: t.id,
      label: `${t.label} (${formatNumber(t.span)} triệu năm)`,
    }))}
    value={treeId}
    onchange={setTree}
  />

  <svg
    viewBox="0 0 {W} {height}"
    class="mx-auto block w-full max-w-xl"
    role="img"
    aria-label="Cây phát sinh chủng loại: {tree.label}, trục thời gian từ {formatNumber(
      tree.span,
    )} triệu năm trước đến nay."
  >
    {#each bands as e (e.id)}
      <rect x={e.x1} y="0" width={e.x2 - e.x1} height={height - 12} fill={e.color} />
      <text x={(e.x1 + e.x2) / 2} y="11" text-anchor="middle" font-size="9.5" fill="#334155"
        >{e.x2 - e.x1 > 60 ? e.name : e.name.replace('Đại ', '')}</text
      >
    {/each}
    {#each tree.ticks as t (t)}
      <line
        x1={xOf(t)}
        y1="16"
        x2={xOf(t)}
        y2={height - 12}
        stroke="#cbd5e1"
        stroke-dasharray="2 3"
      />
      <text x={xOf(t)} y={height - 1} text-anchor="middle" font-size="10" fill="#334155"
        >{formatNumber(t)}</text
      >
    {/each}

    {#each placed as p (p.node.id)}
      {@const on = lit.has(p.node.id)}
      {@const color = on ? '#e11d48' : '#475569'}
      {#if p.node.children}
        {@const ys = placed.filter((c) => p.node.children?.includes(c.node)).map((c) => c.y)}
        <line x1={p.px} y1={p.y} x2={p.x} y2={p.y} stroke={color} stroke-width={on ? 2.5 : 1.5} />
        <line
          x1={p.x}
          y1={Math.min(...ys)}
          x2={p.x}
          y2={Math.max(...ys)}
          stroke="#475569"
          stroke-width="1.5"
        />
        {#if ancestor}
          {#each placed.filter((c) => p.node.children?.includes(c.node) && lit.has(c.node.id)) as c (c.node.id)}
            <line x1={p.x} y1={p.y} x2={p.x} y2={c.y} stroke="#e11d48" stroke-width="2.5" />
          {/each}
        {/if}
      {:else}
        <line x1={p.px} y1={p.y} x2={p.x} y2={p.y} stroke={color} stroke-width={on ? 2.5 : 1.5} />
        <line
          x1={p.x}
          y1={p.y}
          x2={p.endX}
          y2={p.y}
          stroke={on ? '#e11d48' : (p.node.end ?? 0) > 0 ? '#94a3b8' : '#4f46e5'}
          stroke-width="5"
          stroke-linecap="round"
        />
        <text
          x={(p.endX ?? RIGHT) + 6}
          y={p.y + 4}
          font-size="11"
          font-weight={chosen.includes(p.node.id) ? 700 : 400}
          fill={chosen.includes(p.node.id) ? '#be123c' : '#1e293b'}>{p.node.name}</text
        >
      {/if}
    {/each}
    {#if ancestor}
      {@const a = placed.find((p) => p.node === ancestor)}
      {#if a}
        <circle cx={a.x} cy={a.y} r="5" fill="#e11d48" stroke="white" stroke-width="1.5" />
      {/if}
    {/if}
  </svg>
  <p class="text-center text-sm text-slate-600" aria-hidden="true">
    Trục ngang: triệu năm trước. Vạch xám: loài đã tuyệt chủng (†).
  </p>

  <div class="flex flex-wrap gap-2" role="group" aria-label="Chọn loài để so sánh">
    {#each tips as t (t.id)}
      <button
        type="button"
        class="min-h-11 rounded-full border px-3 py-1 text-sm font-semibold {chosen.includes(t.id)
          ? 'border-rose-500 bg-rose-50 text-rose-800'
          : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'} {focusRing}"
        aria-pressed={chosen.includes(t.id)}
        onclick={() => toggle(t.id)}>{t.name}</button
      >
    {/each}
  </div>

  <FeedbackNote tone={ancestor ? 'ok' : 'info'} text={note} />
</div>
