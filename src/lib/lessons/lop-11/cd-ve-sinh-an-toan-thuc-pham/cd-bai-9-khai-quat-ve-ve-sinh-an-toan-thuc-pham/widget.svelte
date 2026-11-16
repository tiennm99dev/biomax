<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import {
    AGENTS,
    ITEMS,
    ZONES,
    classify,
    inspect,
    itemOf,
    progress,
    tallyByAgent,
  } from './engine.js';

  /** @type {string[]} */
  let found = $state([]);
  /** @type {string[]} */
  let checkedSafe = $state([]);
  /** @type {string | null} */
  let selected = $state(null);
  /** @type {{ tone: 'ok' | 'warn' | 'info', text: string } | null} */
  let note = $state(null);
  let slips = $state(0);
  let asking = $state(false);

  const score = $derived(progress(found, slips));
  const tally = $derived(tallyByAgent(found));
  const current = $derived(selected ? itemOf(selected) : null);

  /** @param {string} id */
  function tap(id) {
    selected = id;
    const item = itemOf(id);
    if (found.includes(id) && item) {
      note = classify(id, /** @type {string} */ (item.agent));
      asking = false;
      return;
    }
    const r = inspect(id);
    note = r;
    asking = r.needsAgent;
    if (!r.needsAgent && !checkedSafe.includes(id)) {
      checkedSafe = [...checkedSafe, id];
      slips += 1;
      note = { tone: 'warn', text: `${r.text} Vật này không phải vi phạm, hãy tìm tiếp.` };
    }
  }

  /** @param {string} agentId */
  function name(agentId) {
    if (!selected) return;
    const r = classify(selected, agentId);
    note = r;
    if (r.ok) {
      found = [...found, selected];
      asking = false;
    } else {
      slips += 1;
    }
  }

  function reset() {
    found = [];
    checkedSafe = [];
    selected = null;
    note = null;
    slips = 0;
    asking = false;
  }

  /** @param {string} id */
  function look(id) {
    if (found.includes(id)) return 'border-emerald-500 bg-emerald-50';
    if (checkedSafe.includes(id)) return 'border-sky-300 bg-sky-50';
    if (selected === id) return 'border-indigo-500 bg-indigo-50';
    return 'border-slate-200 bg-white hover:border-indigo-300';
  }
</script>

<div class="space-y-3">
  <p class="text-sm text-slate-700">
    Bếp ăn dưới đây có cả việc làm đúng và vi phạm. Chạm vào từng thứ để kiểm tra; khi tìm thấy vi
    phạm, chọn nhóm tác nhân làm thực phẩm mất an toàn.
  </p>

  <div class="grid gap-2 rounded-2xl bg-amber-100/60 p-2 sm:grid-cols-2">
    {#each ZONES as z (z.id)}
      <section class="rounded-xl bg-white/70 p-2" aria-label={z.name}>
        <h4 class="mb-1 text-xs font-bold uppercase tracking-wide text-amber-900">{z.name}</h4>
        <ul class="space-y-1">
          {#each ITEMS.filter((i) => i.zone === z.id) as item (item.id)}
            <li>
              <button
                type="button"
                class="flex min-h-11 w-full items-start gap-2 rounded-lg border-2 px-2 py-1.5 text-left text-sm text-slate-800 {look(
                  item.id,
                )} {focusRing}"
                aria-pressed={selected === item.id}
                aria-label="{item.label}{found.includes(item.id)
                  ? ' (đã tìm thấy vi phạm)'
                  : checkedSafe.includes(item.id)
                    ? ' (việc làm đúng)'
                    : ''}"
                onclick={() => tap(item.id)}
              >
                <span class="text-xl leading-none" aria-hidden="true">{item.icon}</span>
                <span class="min-w-0 flex-1">{item.label}</span>
                {#if found.includes(item.id)}
                  <span class="font-bold text-emerald-700" aria-hidden="true">✓</span>
                {/if}
              </button>
            </li>
          {/each}
        </ul>
      </section>
    {/each}
  </div>

  {#if current}
    <div class="space-y-2 rounded-xl border border-slate-200 p-3">
      <p class="text-sm font-semibold text-slate-800">{current.label}</p>
      {#if asking}
        <div class="flex flex-wrap gap-2" role="group" aria-label="Nhóm tác nhân">
          {#each AGENTS as a (a.id)}
            <button type="button" class={button.secondary} onclick={() => name(a.id)}>
              Tác nhân {a.name.toLowerCase()}
            </button>
          {/each}
        </div>
      {/if}
      {#if note}
        <FeedbackNote tone={note.tone} text={note.text} />
      {/if}
    </div>
  {/if}

  <FeedbackNote tone={score.tone} text={score.text} />
  <ul
    class="grid gap-1 text-sm text-slate-700 sm:grid-cols-3"
    aria-label="Vi phạm theo nhóm tác nhân"
  >
    {#each tally as a (a.id)}
      <li class="rounded-lg bg-slate-50 px-2 py-1">
        <strong>{a.name}:</strong>
        {a.found}/{a.total}
      </li>
    {/each}
  </ul>
  <button type="button" class={button.quiet} onclick={reset}>Chơi lại</button>
</div>
