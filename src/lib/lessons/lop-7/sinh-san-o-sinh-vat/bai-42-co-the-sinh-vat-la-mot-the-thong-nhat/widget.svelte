<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { LINKS, NODES, STOP, isLit, linksOf, networkText, nodeById } from './engine.js';

  let selected = $state(/** @type {import('./engine.js').NodeId | null} */ (null));
  let stopped = $state(false);

  /** @type {import('./engine.js').NodeId[]} */
  const affected = $derived(stopped && selected !== null ? STOP[selected].affects : []);
  const text = $derived(networkText(selected, stopped));

  /** @type {Record<string, string>} */
  const TONES = {
    sky: 'border-sky-500 bg-sky-50 text-sky-900',
    violet: 'border-violet-500 bg-violet-50 text-violet-900',
    emerald: 'border-emerald-600 bg-emerald-50 text-emerald-900',
    amber: 'border-amber-500 bg-amber-50 text-amber-900',
    rose: 'border-rose-500 bg-rose-50 text-rose-900',
  };

  /** @param {import('./engine.js').NodeId} id */
  function pick(id) {
    selected = selected === id ? null : id;
    stopped = false;
  }

  /** @param {import('./engine.js').NodeId} id */
  function nodeClass(id) {
    const n = /** @type {import('./engine.js').Node} */ (nodeById(id));
    if (stopped && (id === selected || affected.includes(id)))
      return 'border-slate-400 bg-slate-200 text-slate-500 line-through';
    return `${TONES[n.tone]} ${selected === id ? 'ring-2 ring-indigo-500' : ''}`;
  }
</script>

<div class="space-y-4">
  <div class="relative mx-auto w-full max-w-md">
    <svg viewBox="0 0 300 260" class="block w-full" aria-hidden="true">
      <rect width="300" height="260" rx="12" fill="#f8fafc" />
      {#each LINKS as l, i (i)}
        {@const a = nodeById(l.a)}
        {@const b = nodeById(l.b)}
        {#if a && b}
          <line
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke={isLit(l, selected) ? (stopped ? '#94a3b8' : '#4f46e5') : '#cbd5e1'}
            stroke-width={isLit(l, selected) ? 4 : 2}
            stroke-dasharray={stopped && isLit(l, selected) ? '6 5' : undefined}
          />
        {/if}
      {/each}
    </svg>
    {#each NODES as n (n.id)}
      <button
        type="button"
        class="absolute flex min-h-11 w-[34%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border-2 px-1 py-1 text-center text-xs leading-tight font-semibold shadow-sm {nodeClass(
          n.id,
        )} {focusRing}"
        style="left: {(n.x / 300) * 100}%; top: {(n.y / 260) * 100}%"
        aria-pressed={selected === n.id}
        onclick={() => pick(n.id)}>{n.label}</button
      >
    {/each}
  </div>

  {#if selected}
    <div class="flex flex-wrap gap-2">
      <button
        type="button"
        class={stopped ? button.primary : button.secondary}
        aria-pressed={stopped}
        onclick={() => (stopped = !stopped)}
        >{stopped ? 'Cho hoạt động trở lại' : 'Giả sử ô này ngừng hoạt động'}</button
      >
      <button
        type="button"
        class={button.quiet}
        onclick={() => {
          selected = null;
          stopped = false;
        }}>Bỏ chọn</button
      >
    </div>
  {/if}

  <FeedbackNote tone={stopped ? 'warn' : selected ? 'ok' : 'info'} {text} />

  {#if selected && !stopped}
    <ul class="space-y-2 text-sm text-slate-700">
      {#each linksOf(selected) as r (r.other.id)}
        <li class="rounded-lg border border-slate-200 bg-white px-3 py-2">
          <span class="font-semibold text-slate-900">Với "{r.other.label}":</span>
          {r.text}
        </li>
      {/each}
    </ul>
  {/if}
</div>
