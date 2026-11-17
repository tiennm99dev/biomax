<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { GROUP_NAMES, PARTS, grouped, judge } from './engine.js';

  /** @type {string[]} */
  let chosen = $state([]);
  const has = $derived(new Set(chosen));
  const groups = $derived(grouped(chosen));
  const verdict = $derived(judge(chosen));

  /** @param {string} id */
  function toggle(id) {
    chosen = has.has(id) ? chosen.filter((c) => c !== id) : [...chosen, id];
  }

  const GROUP_COLORS = {
    'vo-sinh': 'border-sky-300 bg-sky-50 text-sky-900',
    'san-xuat': 'border-emerald-300 bg-emerald-50 text-emerald-900',
    'tieu-thu': 'border-amber-300 bg-amber-50 text-amber-900',
    'phan-giai': 'border-violet-300 bg-violet-50 text-violet-900',
  };

  const groupKeys = /** @type {Array<keyof typeof GROUP_NAMES>} */ (Object.keys(GROUP_NAMES));
  const ariaText = $derived(
    chosen.length
      ? `Bể cá có: ${PARTS.filter((p) => has.has(p.id))
          .map((p) => p.name)
          .join(', ')}`
      : 'Bể cá trống',
  );
</script>

<div class="space-y-4">
  <svg viewBox="0 0 340 200" class="mx-auto block w-full max-w-lg" role="img" aria-label={ariaText}>
    {#if has.has('anh-sang')}
      <circle cx="300" cy="22" r="14" fill="#facc15" />
      {#each [0, 1, 2] as k (k)}
        <line
          x1={280 - k * 30}
          y1={34 + k * 4}
          x2={240 - k * 40}
          y2={80}
          stroke="#fde047"
          stroke-width="3"
          stroke-dasharray="6 5"
        />
      {/each}
    {/if}
    <rect
      x="30"
      y="50"
      width="280"
      height="140"
      rx="8"
      fill="#f8fafc"
      stroke="#475569"
      stroke-width="3"
    />
    {#if has.has('nuoc')}
      <rect x="32" y="62" width="276" height="126" rx="6" fill="#bfdbfe" />
    {/if}
    {#if has.has('mun')}
      <rect x="32" y="170" width="276" height="18" rx="4" fill="#92400e" opacity="0.75" />
    {/if}
    {#if has.has('khoang')}
      {#each [50, 90, 140, 200, 250, 290] as x (x)}
        <rect {x} y={160} width="5" height="5" fill="#64748b" />
      {/each}
    {/if}
    {#if has.has('khi')}
      {#each [[70, 120], [76, 100], [230, 130], [236, 108], [160, 90]] as [x, y] (`${x}-${y}`)}
        <circle cx={x} cy={y} r="4" fill="white" stroke="#60a5fa" />
      {/each}
    {/if}
    {#if has.has('rong')}
      {#each [60, 110, 260] as x (x)}
        <path
          d="M{x} 172 C {x - 10} 140, {x + 10} 120, {x} 92"
          fill="none"
          stroke="#15803d"
          stroke-width="5"
          stroke-linecap="round"
        />
      {/each}
    {/if}
    {#if has.has('tao')}
      {#each [[100, 75], [130, 82], [180, 72], [205, 86], [150, 70], [280, 80]] as [x, y] (`${x}-${y}`)}
        <circle cx={x} cy={y} r="3" fill="#4ade80" />
      {/each}
    {/if}
    {#if has.has('oc')}
      <circle cx="200" cy="162" r="9" fill="#b45309" />
      <circle cx="200" cy="162" r="4" fill="#fcd34d" />
    {/if}
    {#if has.has('ca')}
      {#each [[150, 120], [215, 105]] as [x, y] (`${x}-${y}`)}
        <ellipse cx={x} cy={y} rx="16" ry="8" fill="#f97316" />
        <path d="M{x + 14} {y} l 12 -8 v 16 z" fill="#fb923c" />
        <circle cx={x - 9} cy={y - 2} r="1.8" fill="#0f172a" />
      {/each}
    {/if}
    {#if has.has('vi-khuan')}
      {#each [70, 120, 170, 230, 280] as x (x)}
        <rect {x} y={176} width="9" height="4" rx="2" fill="#a855f7" />
      {/each}
    {/if}
  </svg>

  <fieldset>
    <legend class="mb-2 text-sm font-semibold text-slate-700">
      Bấm để thêm hoặc bớt thành phần trong bể
    </legend>
    <div class="flex flex-wrap gap-2">
      {#each PARTS as p (p.id)}
        <button
          type="button"
          aria-pressed={has.has(p.id)}
          onclick={() => toggle(p.id)}
          class="min-h-11 rounded-lg border-2 px-3 py-1 text-sm font-semibold transition {has.has(
            p.id,
          )
            ? GROUP_COLORS[p.group]
            : 'border-dashed border-slate-300 bg-white text-slate-600'} {focusRing}"
        >
          {has.has(p.id) ? '✓ ' : '+ '}{p.name}
        </button>
      {/each}
    </div>
  </fieldset>

  <div class="grid gap-2 sm:grid-cols-2">
    {#each groupKeys as key (key)}
      <div class="rounded-xl border p-2 text-sm {GROUP_COLORS[key]}">
        <p class="font-semibold">
          {GROUP_NAMES[key]}{key === 'vo-sinh' ? ' (sinh cảnh)' : ''}
        </p>
        <p>
          {groups[key].length ? groups[key].map((p) => p.name).join(', ') : 'chưa có'}
        </p>
      </div>
    {/each}
  </div>

  <FeedbackNote
    tone={verdict.level === 'ok' ? 'ok' : verdict.level === 'partial' ? 'info' : 'warn'}
    text={verdict.text}
  />
  <div class="flex flex-wrap gap-2">
    <button type="button" class={button.secondary} onclick={() => (chosen = PARTS.map((p) => p.id))}
      >Thêm tất cả</button
    >
    <button type="button" class={button.quiet} onclick={() => (chosen = [])}>Làm trống bể</button>
  </div>
</div>
