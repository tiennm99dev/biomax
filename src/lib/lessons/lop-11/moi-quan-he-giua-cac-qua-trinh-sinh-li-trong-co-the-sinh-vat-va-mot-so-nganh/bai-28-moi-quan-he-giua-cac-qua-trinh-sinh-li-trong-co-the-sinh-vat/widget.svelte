<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import {
    BOX,
    NETWORKS,
    ORGANISM_NAMES,
    cascade,
    depth,
    hitText,
    linkPath,
    processOf,
    summary,
  } from './engine.js';

  /** @typedef {import('./engine.js').Organism} Organism */

  /** @type {Organism} */
  let organism = $state('thuc-vat');
  /** @type {string | null} */
  let stopped = $state(null);
  let shown = $state(1);

  const net = $derived(NETWORKS[organism]);
  const hits = $derived(stopped ? cascade(net, stopped) : []);
  const maxStep = $derived(depth(hits));
  const visible = $derived(hits.filter((h) => h.step <= shown));
  const stepOf = $derived(new Map(visible.map((h) => [h.id, h.step])));
  const hotLinks = $derived(new Set(visible.flatMap((h) => h.causes)));

  const organismOptions = /** @type {Organism[]} */ (Object.keys(ORGANISM_NAMES)).map((v) => ({
    value: v,
    label: ORGANISM_NAMES[v],
  }));

  /** @param {string} id */
  function toggle(id) {
    stopped = stopped === id ? null : id;
    shown = 1;
  }

  /** @param {KeyboardEvent} e @param {string} id */
  function onkey(e, id) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle(id);
    }
  }

  /** @param {string} id */
  function fill(id) {
    if (id === stopped) return '#fee2e2';
    const k = stepOf.get(id);
    if (k === undefined) return '#f8fafc';
    return k === 1 ? '#fed7aa' : k === 2 ? '#fde68a' : '#fef9c3';
  }

  /** @param {string} id */
  function stroke(id) {
    if (id === stopped) return '#b91c1c';
    return stepOf.has(id) ? '#c2410c' : '#64748b';
  }

  const note = $derived(
    stopped
      ? summary(net, stopped, shown)
      : 'Chạm vào một quá trình trong sơ đồ để làm nó ngừng hoạt động, rồi xem ảnh hưởng lan ra các quá trình khác.',
  );
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Cơ thể"
    options={organismOptions}
    bind:value={organism}
    onchange={() => {
      stopped = null;
      shown = 1;
    }}
  />

  <svg
    viewBox="0 -8 360 376"
    class="mx-auto block w-full max-w-md rounded-xl bg-white"
    role="group"
    aria-label="Sơ đồ mối quan hệ giữa các quá trình sinh lí ở {ORGANISM_NAMES[
      organism
    ].toLowerCase()}"
  >
    <defs>
      <marker
        id="mq-arrow"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
      </marker>
      <marker
        id="mq-arrow-hot"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#c2410c" />
      </marker>
    </defs>
    {#each net.links as l (l.from + l.to)}
      {@const hot = hotLinks.has(l)}
      <path
        d={linkPath(processOf(net, l.from), processOf(net, l.to))}
        fill="none"
        stroke={hot ? '#c2410c' : '#cbd5e1'}
        stroke-width={hot ? 2.5 : 1.2}
        marker-end={hot ? 'url(#mq-arrow-hot)' : 'url(#mq-arrow)'}
        aria-hidden="true"
      />
    {/each}
    {#each net.processes as p (p.id)}
      {@const k = stepOf.get(p.id)}
      <g
        role="button"
        tabindex="0"
        class="cursor-pointer outline-none {focusRing} [&:focus-visible>rect]:stroke-indigo-600 [&:focus-visible>rect]:stroke-[3]"
        aria-pressed={stopped === p.id}
        aria-label="{p.name}{stopped === p.id
          ? ', đang ngừng'
          : k !== undefined
            ? `, bị ảnh hưởng ở bước ${k}`
            : ''}"
        onclick={() => toggle(p.id)}
        onkeydown={(e) => onkey(e, p.id)}
      >
        <rect
          x={p.x - BOX.w / 2}
          y={p.y - BOX.h / 2}
          width={BOX.w}
          height={BOX.h}
          rx="10"
          fill={fill(p.id)}
          stroke={stroke(p.id)}
          stroke-width={stopped === p.id ? 2.5 : 1.5}
          stroke-dasharray={stopped === p.id ? '5 3' : undefined}
        />
        <text
          x={p.x}
          y={p.short[1] ? p.y - 3 : p.y + 4}
          text-anchor="middle"
          font-size="12"
          font-weight="600"
          fill="#0f172a">{p.short[0]}</text
        >
        {#if p.short[1]}
          <text x={p.x} y={p.y + 12} text-anchor="middle" font-size="11" fill="#334155"
            >{p.short[1]}</text
          >
        {/if}
        {#if stopped === p.id}
          <text
            x={p.x + BOX.w / 2 - 4}
            y={p.y - BOX.h / 2 - 3}
            text-anchor="end"
            font-size="11"
            font-weight="700"
            stroke="#fff"
            stroke-width="3"
            paint-order="stroke"
            fill="#b91c1c">ngừng</text
          >
        {:else if k !== undefined}
          <circle cx={p.x + BOX.w / 2 - 4} cy={p.y - BOX.h / 2 + 2} r="9" fill="#c2410c" />
          <text
            x={p.x + BOX.w / 2 - 4}
            y={p.y - BOX.h / 2 + 6}
            text-anchor="middle"
            font-size="11"
            font-weight="700"
            fill="#fff">{k}</text
          >
        {/if}
      </g>
    {/each}
  </svg>

  {#if stopped}
    <div class="flex flex-wrap gap-2">
      <button
        type="button"
        class={button.primary}
        disabled={shown >= maxStep}
        onclick={() => (shown = Math.min(shown + 1, maxStep))}>Bước tiếp</button
      >
      <button
        type="button"
        class={button.secondary}
        disabled={shown >= maxStep}
        onclick={() => (shown = maxStep)}>Xem cả chuỗi</button
      >
      <button
        type="button"
        class={button.quiet}
        onclick={() => toggle(/** @type {string} */ (stopped))}>Cho hoạt động lại</button
      >
    </div>
    <ol class="space-y-1 text-sm text-slate-700">
      {#each visible as h (h.id)}
        <li class="rounded-lg bg-orange-50 px-3 py-2">
          <span class="font-semibold text-orange-800">Bước {h.step}.</span>
          {hitText(net, h)}
        </li>
      {/each}
    </ol>
  {/if}

  <FeedbackNote tone={stopped ? (shown >= maxStep ? 'ok' : 'warn') : 'info'} text={note} />
</div>
