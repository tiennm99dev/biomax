<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import {
    FIELD_NAME,
    ROUNDS,
    deck,
    milestone,
    pick,
    rootsOf,
    rootsText,
    timeline,
  } from './engine.js';

  let mode = $state('xem');
  /** @type {'all' | 'li-thuyet' | 'ung-dung'} */
  let field = $state('all');
  let selectedId = $state('xoan-kep');

  const items = $derived(timeline(field));
  const selected = $derived(milestone(selectedId));
  const roots = $derived(rootsOf(selectedId));

  let roundIndex = $state(0);
  /** @type {string[]} */
  let placed = $state([]);
  let note = $state({
    tone: /** @type {'ok' | 'warn' | 'info'} */ ('info'),
    text: 'Chọn mốc xảy ra sớm nhất trong các thẻ dưới đây.',
  });

  const round = $derived(ROUNDS[roundIndex]);
  const cards = $derived(deck(round));
  const done = $derived(placed.length === round.ids.length);

  /** @param {string | number} v */
  function setField(v) {
    field = /** @type {'all' | 'li-thuyet' | 'ung-dung'} */ (v);
    if (!items.some((m) => m.id === selectedId)) selectedId = items[0].id;
  }

  /** @param {number} step */
  function move(step) {
    const i = items.findIndex((m) => m.id === selectedId);
    const next = items[Math.min(items.length - 1, Math.max(0, i + step))];
    selectedId = next.id;
  }

  /** @param {string} id */
  function choose(id) {
    const result = pick(round, placed, id);
    if (result.ok) placed = [...placed, id];
    const finished = placed.length === round.ids.length;
    note = {
      tone: result.ok ? 'ok' : 'warn',
      text: finished
        ? `${result.text} Hoàn thành vòng "${round.name}": các mốc nối tiếp nhau, thành tựu sau dựa trên thành tựu trước.`
        : result.text,
    };
  }

  /** @param {number} i */
  function startRound(i) {
    roundIndex = i;
    placed = [];
    note = { tone: 'info', text: 'Chọn mốc xảy ra sớm nhất trong các thẻ dưới đây.' };
  }

  /** @param {'li-thuyet' | 'ung-dung'} f */
  function fieldClass(f) {
    return f === 'li-thuyet' ? 'bg-sky-100 text-sky-900' : 'bg-amber-100 text-amber-900';
  }
</script>

<div class="space-y-3">
  <SegmentedControl
    label="Chế độ"
    hideLabel
    options={[
      { value: 'xem', label: 'Dòng thời gian' },
      { value: 'thu-thach', label: 'Thử thách' },
    ]}
    bind:value={mode}
  />

  {#if mode === 'xem'}
    <SegmentedControl
      label="Loại thành tựu"
      options={[
        { value: 'all', label: 'Tất cả' },
        { value: 'li-thuyet', label: 'Lí thuyết' },
        { value: 'ung-dung', label: 'Ứng dụng' },
      ]}
      value={field}
      onchange={setField}
    />

    <div class="grid gap-3 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
      <ol
        class="relative space-y-1 border-l-2 border-slate-200 pl-3"
        aria-label="Các mốc thành tựu"
      >
        {#each items as m (m.id)}
          {@const isRoot = roots.includes(m.id)}
          <li>
            <button
              type="button"
              aria-pressed={m.id === selectedId}
              class="flex min-h-11 w-full items-center gap-2 rounded-lg border px-2 py-1.5 text-left text-sm transition {focusRing} {m.id ===
              selectedId
                ? 'border-indigo-500 bg-indigo-50 text-indigo-900'
                : isRoot
                  ? 'border-emerald-400 bg-emerald-50 text-emerald-900'
                  : 'border-transparent bg-white text-slate-800 hover:bg-slate-50'}"
              onclick={() => (selectedId = m.id)}
            >
              <span class="w-11 shrink-0 font-bold tabular-nums">{m.year}</span>
              <span class="min-w-0 flex-1">{m.short}</span>
              {#if isRoot}<span class="sr-only">(là nền tảng của mốc đang chọn)</span>{/if}
            </button>
          </li>
        {/each}
      </ol>

      <div class="space-y-2 rounded-xl border border-slate-200 bg-white p-3" aria-live="polite">
        <p class="flex flex-wrap items-center gap-2">
          <span class="text-2xl font-bold tabular-nums text-indigo-700">{selected.year}</span>
          <span class="rounded-full px-2 py-0.5 text-xs font-semibold {fieldClass(selected.field)}">
            {FIELD_NAME[selected.field]}
          </span>
        </p>
        <p class="font-semibold text-slate-900">{selected.short}</p>
        <p class="text-sm text-slate-600">{selected.who}</p>
        <p class="text-sm text-slate-800">{selected.what}</p>
        <p class="rounded-lg bg-emerald-50 px-2 py-1 text-sm text-emerald-900">
          {rootsText(selected.id)}
        </p>
        <div class="flex gap-2">
          <button type="button" class={button.quiet} onclick={() => move(-1)}>← Mốc trước</button>
          <button type="button" class={button.quiet} onclick={() => move(1)}>Mốc sau →</button>
        </div>
      </div>
    </div>
    <p class="text-xs text-slate-600">
      Các mốc viền xanh lá là những thành tựu mà mốc đang chọn dựa vào, trực tiếp hoặc gián tiếp.
    </p>
  {:else}
    <div class="flex flex-wrap gap-2" role="group" aria-label="Chọn vòng">
      {#each ROUNDS as r, i (r.id)}
        <button
          type="button"
          aria-pressed={i === roundIndex}
          class="{i === roundIndex ? button.primary : button.quiet} text-sm"
          onclick={() => startRound(i)}
        >
          Vòng {i + 1}: {r.name}
        </button>
      {/each}
    </div>

    <ol class="space-y-1" aria-label="Các mốc đã xếp theo thời gian">
      {#each placed as id, i (id)}
        {@const m = milestone(id)}
        <li
          class="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-900"
        >
          <span class="font-bold">{i + 1}.</span>
          <span class="w-11 font-bold tabular-nums">{m.year}</span>
          <span>{m.short}</span>
        </li>
      {/each}
    </ol>

    {#if !done}
      <div class="grid gap-2" role="group" aria-label="Các thẻ chưa xếp">
        {#each cards.filter((m) => !placed.includes(m.id)) as m (m.id)}
          <button
            type="button"
            class="min-h-11 rounded-lg border border-slate-300 bg-white px-3 py-2 text-left text-sm font-medium text-slate-800 transition hover:bg-slate-50 {focusRing}"
            onclick={() => choose(m.id)}
          >
            {m.short}
          </button>
        {/each}
      </div>
    {/if}

    <FeedbackNote tone={note.tone} text={note.text} />

    {#if done}
      <div class="flex flex-wrap gap-2">
        {#if roundIndex < ROUNDS.length - 1}
          <button type="button" class={button.primary} onclick={() => startRound(roundIndex + 1)}>
            Sang vòng sau
          </button>
        {/if}
        <button type="button" class={button.quiet} onclick={() => startRound(roundIndex)}>
          Làm lại vòng này
        </button>
      </div>
    {/if}
  {/if}
</div>
