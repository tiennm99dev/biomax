<script>
  import { focusRing } from '#lib/core/ui.js';
  import { PROCESSES, THINGS, isLiving, thingById } from './engine.js';

  let thingId = $state(THINGS[0].id);
  /** @type {string[]} */
  let checked = $state([]);

  const thing = $derived(thingById(thingId));
  const living = $derived(isLiving(thing));
  const allChecked = $derived(checked.length === PROCESSES.length);
  const shown = $derived(PROCESSES.filter((p) => checked.includes(p.id)));
  const missing = $derived(shown.filter((p) => !thing.shows.includes(p.id)));

  /** @param {string} id */
  function choose(id) {
    thingId = id;
    checked = [];
  }

  /** @param {string} id */
  function toggle(id) {
    checked = checked.includes(id) ? checked.filter((x) => x !== id) : [...checked, id];
  }

  const verdict = $derived.by(() => {
    if (checked.length === 0)
      return `Bấm vào từng quá trình sống để kiểm tra ${thing.name.toLowerCase()}.`;
    if (!allChecked) {
      const last = PROCESSES.find((p) => p.id === checked.at(-1));
      if (!last) return '';
      const ok = thing.shows.includes(last.id);
      return `${last.name} (${last.meaning}): ${thing.name.toLowerCase()} ${ok ? 'có' : 'không có'}. Đã kiểm tra ${checked.length}/${PROCESSES.length} quá trình.`;
    }
    if (living)
      return `${thing.name} thực hiện được cả ${PROCESSES.length} quá trình sống, nên là vật sống.`;
    return `${thing.name} không thực hiện được ${missing.length === PROCESSES.length ? 'quá trình sống nào' : 'đủ các quá trình sống'}, nên là vật không sống.${thing.looksLike ? ' ' + thing.looksLike : ''}`;
  });
</script>

<div class="space-y-4">
  <div class="flex flex-wrap gap-2" role="group" aria-label="Chọn vật để kiểm tra">
    {#each THINGS as t (t.id)}
      <button
        type="button"
        class="min-h-11 rounded-lg border px-3 text-sm font-semibold {thingId === t.id
          ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
          : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'} {focusRing}"
        aria-pressed={thingId === t.id}
        onclick={() => choose(t.id)}>{t.name}</button
      >
    {/each}
  </div>

  <ul class="grid gap-2 sm:grid-cols-2">
    {#each PROCESSES as p (p.id)}
      {@const done = checked.includes(p.id)}
      {@const has = thing.shows.includes(p.id)}
      <li>
        <button
          type="button"
          class="flex min-h-12 w-full items-center gap-3 rounded-xl border px-3 py-2 text-left text-sm {focusRing} {!done
            ? 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'
            : has
              ? 'border-emerald-400 bg-emerald-50 text-emerald-900'
              : 'border-rose-300 bg-rose-50 text-rose-900'}"
          aria-pressed={done}
          aria-label="{p.name}: {done ? (has ? 'có' : 'không có') : 'chưa kiểm tra'}"
          onclick={() => toggle(p.id)}
        >
          <span
            class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-bold"
            aria-hidden="true">{done ? (has ? '✓' : '✗') : '?'}</span
          >
          <span><strong>{p.name}</strong><br /><span class="text-xs">{p.meaning}</span></span>
        </button>
      </li>
    {/each}
  </ul>

  <p
    class="min-h-12 rounded-xl px-4 py-3 text-sm {allChecked
      ? living
        ? 'bg-emerald-50 font-semibold text-emerald-900'
        : 'bg-amber-50 font-semibold text-amber-900'
      : 'bg-slate-100 text-slate-700'}"
    aria-live="polite"
  >
    {verdict}
  </p>
</div>
