<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import { GROUPS, METHODS, check, method, pestDeck } from './engine.js';

  const deck = pestDeck();

  /** @type {Record<string, string>} pest id → matched method id */
  let matched = $state({});
  let current = $state(deck[0].id);
  let misses = $state(0);
  let note = $state({
    tone: /** @type {'ok' | 'warn' | 'info'} */ ('info'),
    text: 'Chọn một loài gây hại, rồi chọn biện pháp kiểm soát sinh học phù hợp nhất với nó.',
  });

  const done = $derived(Object.keys(matched).length === deck.length);
  const usedMethods = $derived(new Set(Object.values(matched)));

  /** @param {string} id */
  function choosePest(id) {
    if (matched[id]) return;
    current = id;
    const p = deck.find((x) => x.id === id);
    if (p) note = { tone: 'info', text: `${p.name}. ${p.harm}` };
  }

  /** @param {string} methodId */
  function chooseMethod(methodId) {
    const result = check(current, methodId);
    if (!result.ok) {
      misses += 1;
      note = { tone: 'warn', text: result.text };
      return;
    }
    matched = { ...matched, [current]: methodId };
    const next = deck.find((p) => !matched[p.id]);
    if (next) {
      current = next.id;
      note = { tone: 'ok', text: `${result.text} Tiếp theo: ${next.name}.` };
    } else {
      note = {
        tone: 'ok',
        text: `${result.text} Hoàn thành với ${misses} lần chọn sai. Mỗi biện pháp chỉ hợp với một số đối tượng: phải biết đặc điểm của sinh vật gây hại mới chọn đúng.`,
      };
    }
  }

  function restart() {
    matched = {};
    misses = 0;
    current = deck[0].id;
    note = {
      tone: 'info',
      text: 'Chọn một loài gây hại, rồi chọn biện pháp kiểm soát sinh học phù hợp nhất với nó.',
    };
  }

  /** @param {string} g */
  function groupClass(g) {
    if (g === 'thien-dich') return 'bg-emerald-100 text-emerald-900';
    if (g === 'che-pham') return 'bg-sky-100 text-sky-900';
    return 'bg-violet-100 text-violet-900';
  }
</script>

<div class="space-y-3">
  <div class="grid gap-3 md:grid-cols-2">
    <section class="space-y-1" aria-label="Loài gây hại">
      <h3 class="text-sm font-semibold text-slate-900">Loài gây hại</h3>
      <div class="grid gap-1" role="group" aria-label="Chọn loài gây hại">
        {#each deck as p (p.id)}
          {@const m = matched[p.id]}
          <button
            type="button"
            aria-pressed={p.id === current}
            disabled={Boolean(m)}
            class="min-h-11 rounded-lg border px-3 py-2 text-left text-sm transition {focusRing} {m
              ? 'border-emerald-300 bg-emerald-50 text-emerald-900'
              : p.id === current
                ? 'border-indigo-500 bg-indigo-50 font-semibold text-indigo-900'
                : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50'}"
            onclick={() => choosePest(p.id)}
          >
            {p.name}
            {#if m}
              <span class="block text-xs font-normal">→ {method(m).name}</span>
            {/if}
          </button>
        {/each}
      </div>
    </section>

    <section class="space-y-1" aria-label="Biện pháp kiểm soát sinh học">
      <h3 class="text-sm font-semibold text-slate-900">Biện pháp</h3>
      <div class="grid gap-1" role="group" aria-label="Chọn biện pháp">
        {#each METHODS as m (m.id)}
          <button
            type="button"
            disabled={done || usedMethods.has(m.id)}
            class="flex min-h-11 items-center justify-between gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-left text-sm text-slate-800 transition hover:bg-slate-50 disabled:opacity-50 {focusRing}"
            onclick={() => chooseMethod(m.id)}
          >
            <span>{m.name}</span>
            {#if usedMethods.has(m.id)}
              <span class="shrink-0 rounded-full px-2 py-0.5 text-xs {groupClass(m.group)}">
                {GROUPS.find((g) => g.id === m.group)?.label}
              </span>
            {/if}
          </button>
        {/each}
      </div>
    </section>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />

  {#if done}
    <button type="button" class={button.quiet} onclick={restart}>Chơi lại</button>
  {/if}
</div>
