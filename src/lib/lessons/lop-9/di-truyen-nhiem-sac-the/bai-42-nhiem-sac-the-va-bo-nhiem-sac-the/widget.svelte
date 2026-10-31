<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import {
    CENTROMERE_LABEL,
    SETS,
    centromereType,
    isPair,
    mismatchReason,
    pairNote,
    setById,
    setSummary,
    shuffledSet,
    slotsOf,
  } from './engine.js';

  let setId = $state(SETS[0].id);
  let seed = $state(42);
  let showNumbers = $state(false);
  /** @type {string[]} */
  let placed = $state([]);
  /** @type {string | null} */
  let selected = $state(null);
  /** @type {{ tone: 'ok' | 'warn' | 'info', text: string }} */
  let note = $state({
    tone: 'info',
    text: 'Chạm một NST, rồi chạm NST giống hệt nó (cùng kích thước, vị trí tâm động và cách phân bố các băng) để xếp thành một cặp tương đồng.',
  });

  const set = $derived(setById(setId));
  const human = $derived(set.species === 'người');
  const deck = $derived(shuffledSet(setId, seed));
  const slots = $derived(slotsOf(setId));
  const summary = $derived(setSummary(setId));
  const pool = $derived(deck.filter((c) => !placed.includes(c.id)));
  const pairsDone = $derived(placed.length / 2);
  const picked = $derived(deck.find((c) => c.id === selected) ?? null);

  /** Pixel height of a chromosome drawing. @param {number} length */
  const heightOf = (length) => Math.round((human ? 14 : 12) + (human ? 58 : 46) * length);

  /** @param {string | number} id */
  function chooseSet(id) {
    setId = String(id);
    restart();
  }

  function restart() {
    placed = [];
    selected = null;
    seed += 1;
    note = { tone: 'info', text: 'Bộ NST đã được xáo lại. Chạm một NST để bắt đầu.' };
  }

  /** @param {string} id */
  function tap(id) {
    const c = deck.find((x) => x.id === id);
    if (!c) return;
    if (!picked || picked.id === id) {
      selected = picked?.id === id ? null : id;
      if (selected) {
        note = {
          tone: 'info',
          text: `Đã chọn một NST ${CENTROMERE_LABEL[centromereType(c.arm)]}. Chạm NST cùng cặp với nó.`,
        };
      }
      return;
    }
    if (isPair(picked, c)) {
      placed = [...placed, picked.id, c.id];
      selected = null;
      const left = slots.length - placed.length / 2;
      note = {
        tone: 'ok',
        text: left
          ? `Đúng! ${pairNote(c.slot, setId)} Còn ${left} cặp.`
          : `Hoàn thành bộ NST của ${set.label.toLowerCase()}: ${summary.autosomePairs} cặp NST thường và 1 cặp NST giới tính, $2n = ${summary.diploid}$. Giao tử chỉ nhận một chiếc của mỗi cặp: $n = ${summary.haploid}$.`,
      };
    } else {
      note = { tone: 'warn', text: mismatchReason(picked, c) };
      selected = null;
    }
  }

  /** Accessible name of a chromosome button. @param {import('./engine.js').Chromosome} c */
  function nameOf(c) {
    const type = CENTROMERE_LABEL[centromereType(c.arm)];
    const size = c.length > 0.66 ? 'lớn' : c.length > 0.4 ? 'trung bình' : 'nhỏ';
    const num = showNumbers ? `, số ${c.pair}` : '';
    return `NST ${size}, ${type}, ${c.bands.length} băng đậm${num}`;
  }
</script>

{#snippet chromosome(/** @type {import('./engine.js').Chromosome} */ c)}
  {@const h = heightOf(c.length)}
  {@const cy = 4 + c.arm * h}
  <svg width="22" height={h + 8} viewBox="0 0 22 {h + 8}" aria-hidden="true">
    {#each [5, 12] as x (x)}
      <rect {x} y="4" width="5" height={h} rx="2.5" class="fill-indigo-200 stroke-indigo-700" />
      {#each c.bands as [a, b] (a)}
        <rect
          {x}
          y={4 + a * h}
          width="5"
          height={Math.max(1.5, (b - a) * h)}
          class="fill-indigo-800"
        />
      {/each}
    {/each}
    <ellipse cx="11" {cy} rx="7.5" ry="1.8" class="fill-white" />
    <circle cx="11" {cy} r="2.3" class="fill-rose-600" />
  </svg>
{/snippet}

<div class="space-y-4">
  <SegmentedControl
    label="Chọn bộ NST"
    options={SETS.map((s) => ({ value: s.id, label: s.label }))}
    value={setId}
    onchange={chooseSet}
  />

  <div class="flex flex-wrap items-center gap-3 text-sm">
    <label class="flex min-h-11 items-center gap-2">
      <input type="checkbox" class="h-5 w-5 {focusRing}" bind:checked={showNumbers} />
      Gợi ý: hiện số thứ tự của NST
    </label>
    <button type="button" class={button.quiet} onclick={restart}>Xáo lại và xếp từ đầu</button>
  </div>

  <section aria-label="Các NST chưa xếp" class="rounded-xl border border-slate-200 bg-slate-50 p-2">
    <h3 class="px-1 pb-1 text-sm font-semibold text-slate-700">
      NST ở kì giữa, chưa xếp ({pool.length})
    </h3>
    {#if pool.length}
      <ul class="flex flex-wrap items-end gap-1">
        {#each pool as c (c.id)}
          <li>
            <button
              type="button"
              class="flex min-h-11 min-w-11 flex-col items-center justify-end rounded-lg border-2 px-0.5 pt-1 {selected ===
              c.id
                ? 'border-amber-500 bg-amber-50'
                : 'border-transparent bg-white hover:border-indigo-300'} {focusRing}"
              aria-pressed={selected === c.id}
              aria-label={nameOf(c)}
              onclick={() => tap(c.id)}
            >
              {@render chromosome(c)}
              {#if showNumbers}<span class="text-xs text-slate-600" aria-hidden="true"
                  >{c.pair}</span
                >{/if}
            </button>
          </li>
        {/each}
      </ul>
    {:else}
      <p class="px-1 text-sm text-emerald-800">Đã xếp hết các NST.</p>
    {/if}
  </section>

  <FeedbackNote tone={note.tone} text={note.text} />

  <section aria-label="Bộ NST đã xếp theo cặp">
    <h3 class="pb-1 text-sm font-semibold text-slate-700">
      Bộ NST xếp theo cặp tương đồng: {pairsDone}/{slots.length} cặp — 2n = {summary.diploid}
    </h3>
    <ul class="grid grid-cols-4 gap-1 sm:grid-cols-8">
      {#each slots as slot (slot)}
        {@const members = deck.filter((c) => c.slot === slot && placed.includes(c.id))}
        <li
          class="flex min-h-16 flex-col items-center justify-end rounded-lg border p-1 {members.length
            ? 'border-emerald-300 bg-emerald-50'
            : 'border-dashed border-slate-300 bg-white'}"
        >
          <div class="flex items-end" aria-hidden="true">
            {#each members as c (c.id)}{@render chromosome(c)}{/each}
          </div>
          <span class="text-xs font-semibold text-slate-600">
            {slot === 'XY' ? set.sex.join('') : slot}
            <span class="sr-only">{members.length ? 'đã xếp' : 'còn trống'}</span>
          </span>
        </li>
      {/each}
    </ul>
  </section>
</div>
