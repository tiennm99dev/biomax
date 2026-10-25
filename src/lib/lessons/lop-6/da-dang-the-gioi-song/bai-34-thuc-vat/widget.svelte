<script>
  import { untrack } from 'svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button } from '#lib/core/ui.js';
  import {
    CHALLENGES,
    GROUPS,
    NO_FILTER,
    TRAITS,
    challengeFeedback,
    emptyReason,
    filterGroups,
    matches,
  } from './engine.js';

  /** @type {import('./engine.js').Filters} */
  let filters = $state({ ...NO_FILTER });
  let challenge = $state(0);
  /** @type {number[]} */
  let done = $state([]);

  const left = $derived(filterGroups(filters));
  const summary = $derived(
    left.length === 0
      ? emptyReason(filters)
      : left.length === GROUPS.length
        ? 'Chưa lọc: đang hiện cả 4 nhóm thực vật.'
        : `Còn ${left.length} nhóm: ${left.map((g) => g.name).join(', ')}.`,
  );
  const feedback = $derived(challengeFeedback(challenge, filters));

  $effect(() => {
    if (!feedback.done) return;
    untrack(() => {
      if (!done.includes(challenge)) done = [...done, challenge];
    });
  });

  function nextChallenge() {
    challenge = (challenge + 1) % CHALLENGES.length;
    filters = { ...NO_FILTER };
  }

  const OPTIONS = [
    { value: 'tat-ca', label: 'Tất cả' },
    { value: 'co', label: 'Có' },
    { value: 'khong', label: 'Không' },
  ];
</script>

<div class="space-y-4">
  <div class="grid gap-3 sm:grid-cols-3">
    {#each TRAITS as t (t.id)}
      <SegmentedControl label={t.name} options={OPTIONS} bind:value={filters[t.id]} />
    {/each}
  </div>

  <p class="rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-800" aria-live="polite">
    {summary}
  </p>

  <div class="grid gap-2 sm:grid-cols-2">
    {#each GROUPS as g (g.id)}
      {@const on = matches(g, filters)}
      <article
        class="rounded-xl border p-3 text-sm transition {on
          ? 'border-emerald-500 bg-emerald-50'
          : 'border-slate-200 bg-slate-50 opacity-50'}"
        aria-hidden={!on}
      >
        <h3 class="font-bold text-slate-900">{g.name}</h3>
        <p class="mt-1 flex flex-wrap gap-1">
          {#each TRAITS as t (t.id)}
            <span
              class="rounded-full px-2 py-0.5 text-xs font-semibold {g.traits[t.id]
                ? 'bg-emerald-200 text-emerald-900'
                : 'bg-slate-200 text-slate-700'}"
              >{g.traits[t.id] ? 'Có' : 'Không có'} {t.name.toLowerCase()}</span
            >
          {/each}
        </p>
        <p class="mt-1 text-slate-700"><strong>Cơ thể:</strong> {g.body}</p>
        <p class="text-slate-700"><strong>Sinh sản:</strong> {g.reproduce}</p>
        <p class="text-slate-700"><strong>Nơi sống:</strong> {g.lives}</p>
        <p class="text-slate-700"><strong>Ví dụ:</strong> {g.examples}.</p>
      </article>
    {/each}
  </div>

  <section class="space-y-2 rounded-xl border border-slate-200 p-4">
    <h3 class="font-bold text-slate-900">
      Thử thách {challenge + 1}/{CHALLENGES.length}: lọc bảng để chỉ còn nhóm của
      <span class="text-indigo-700">{CHALLENGES[challenge].plant.toLowerCase()}</span>
      (đã xong {done.length})
    </h3>
    <p
      class="min-h-12 rounded-xl px-4 py-3 text-sm {feedback.done
        ? 'bg-emerald-50 font-semibold text-emerald-900'
        : 'bg-amber-50 text-amber-900'}"
      aria-live="polite"
    >
      {feedback.text}
    </p>
    <div class="flex flex-wrap gap-2">
      <button type="button" class={button.quiet} onclick={() => (filters = { ...NO_FILTER })}
        >Bỏ lọc</button
      >
      <button type="button" class={button.secondary} onclick={nextChallenge}>Cây tiếp theo</button>
    </div>
  </section>
</div>
