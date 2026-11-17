<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import { formatNumber } from '#lib/core/number-format.js';
  import { button, focusRing } from '#lib/core/ui.js';
  import { MODES, PUZZLES, modeOf, modeRatio, punnett, scaled } from './engine.js';

  let modeId = $state('bo-sung-97');
  const mode = $derived(modeOf(modeId));
  const sq = $derived(punnett(mode));
  const colorOf = $derived(new Map(mode.phenotypes.map((p) => [p.id, p.color])));
  const nameOf = $derived(new Map(mode.phenotypes.map((p) => [p.id, p.name])));

  /** @type {string | null} */
  let picked = $state(null);
  const pickedCount = $derived(
    picked ? sq.cells.flat().filter((c) => c.phenotype === picked).length : 0,
  );

  /** @param {string} id */
  function chooseMode(id) {
    modeId = id;
    picked = null;
  }

  // "Which interaction?" game.
  let puzzleAt = $state(0);
  const puzzle = $derived(PUZZLES[puzzleAt]);
  /** @type {string | null} */
  let guess = $state(null);
  const puzzleTotal = $derived(puzzle.counts.reduce((s, [, n]) => s + n, 0));
  const parts = $derived(modeOf(puzzle.answer).group === 'gene' ? 16 : 4);
  const puzzleScaled = $derived(
    scaled(
      puzzle.counts.map(([, n]) => n),
      parts,
    ),
  );
  const GUESSES = MODES.filter((m) => m.id !== 'doc-lap' && m.id !== 'dong-troi');

  const verdict = $derived.by(() => {
    if (!guess) {
      return {
        tone: /** @type {const} */ ('info'),
        text: `Tổng ${formatNumber(puzzleTotal)} cây. Quy về ${parts} phần rồi chọn kiểu tác động phù hợp.`,
      };
    }
    const g = modeOf(guess);
    if (guess === puzzle.answer) {
      return {
        tone: /** @type {const} */ ('ok'),
        text: `Đúng: quy về ${parts} phần được ${puzzleScaled.map((x) => formatNumber(x, 1)).join(' : ')} ≈ ${modeRatio(g)}. ${g.how}`,
      };
    }
    return {
      tone: /** @type {const} */ ('warn'),
      text: `Chưa đúng: kiểu "${g.label}" cho tỉ lệ ${modeRatio(g)}, còn số liệu quy về ${parts} phần là ${puzzleScaled.map((x) => formatNumber(x, 1)).join(' : ')}.`,
    };
  });

  function nextPuzzle() {
    puzzleAt = (puzzleAt + 1) % PUZZLES.length;
    guess = null;
  }
</script>

<div class="space-y-4">
  <fieldset class="space-y-2">
    <legend class="text-sm font-semibold text-slate-700">Kiểu tác động của gene</legend>
    {#each [{ g: 'allele', t: 'Các allele của cùng một gene' }, { g: 'gene', t: 'Hai gene không allele' }] as grp (grp.g)}
      <p class="text-xs text-slate-500">{grp.t}</p>
      <div class="flex flex-wrap gap-2">
        {#each MODES.filter((m) => m.group === grp.g) as m (m.id)}
          <button
            type="button"
            class="{modeId === m.id ? button.primary : button.quiet} px-3 text-sm"
            aria-pressed={modeId === m.id}
            onclick={() => chooseMode(m.id)}>{m.label}</button
          >
        {/each}
      </div>
    {/each}
  </fieldset>

  <div class="rounded-xl bg-slate-50 p-3 text-sm text-slate-700">
    <p class="font-semibold">{mode.title}. P: {mode.cross}</p>
    <p class="mt-1"><LiveRichText text={mode.how} /></p>
  </div>

  <div class="overflow-x-auto pb-1">
    <table class="mx-auto border-collapse text-center">
      <caption class="sr-only">Bảng Punnett {mode.cross}, ô tô màu theo kiểu hình</caption>
      <thead>
        <tr>
          <th class="p-1 text-xs text-slate-500" scope="col">♀ \ ♂</th>
          {#each sq.cols as c, j (j)}
            <th class="min-w-14 p-1 font-mono text-sm text-sky-800" scope="col">{c}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each sq.cells as row, i (i)}
          <tr>
            <th class="p-1 font-mono text-sm text-rose-800" scope="row">{sq.rows[i]}</th>
            {#each row as cell, j (j)}
              <td class="p-0.5">
                <div
                  class="flex min-h-11 min-w-14 items-center justify-center rounded-lg border-2 px-1 font-mono text-sm font-semibold text-slate-900 {picked ===
                  cell.phenotype
                    ? 'border-slate-900'
                    : 'border-transparent'}"
                  style="background-color: {colorOf.get(cell.phenotype)}55"
                  title={nameOf.get(cell.phenotype)}
                >
                  {cell.genotype}
                </div>
              </td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <div class="space-y-2">
    <p class="text-sm font-semibold text-slate-700">
      Tỉ lệ kiểu hình: {modeRatio(mode)} (trên {sq.total} tổ hợp). Chạm vào một kiểu hình để đánh dấu
      các ô của nó.
    </p>
    <ul class="flex flex-wrap gap-2">
      {#each mode.phenotypes as p, k (p.id)}
        <li>
          <button
            type="button"
            class="flex min-h-11 items-center gap-2 rounded-lg border px-3 text-sm {picked === p.id
              ? 'border-slate-900 bg-white font-semibold'
              : 'border-slate-300 bg-white'} {focusRing}"
            aria-pressed={picked === p.id}
            onclick={() => (picked = picked === p.id ? null : p.id)}
          >
            <span
              class="inline-block size-4 rounded-sm ring-1 ring-slate-300"
              style="background-color: {p.color}"
              aria-hidden="true"
            ></span>
            {sq.counts[k]}
            {p.name}
          </button>
        </li>
      {/each}
    </ul>
    <p class="min-h-6 text-sm text-slate-600" aria-live="polite">
      {#if picked}
        {nameOf.get(picked)}: {pickedCount}/{sq.total} tổ hợp, gồm các kiểu gene
        {[
          ...new Set(
            sq.cells
              .flat()
              .filter((c) => c.phenotype === picked)
              .map((c) => c.genotype),
          ),
        ].join(', ')}.
      {/if}
    </p>
  </div>

  <div class="space-y-3 rounded-xl border border-indigo-200 bg-indigo-50 p-3">
    <p class="text-sm font-semibold text-indigo-950">
      Đoán kiểu tác động ({puzzleAt + 1}/{PUZZLES.length})
    </p>
    <p class="text-sm text-indigo-950"><LiveRichText text={puzzle.text} /></p>
    <ul class="flex flex-wrap gap-x-4 gap-y-1 text-sm font-semibold text-indigo-950 tabular-nums">
      {#each puzzle.counts as [name, n] (name)}
        <li>{n} {name}</li>
      {/each}
    </ul>
    <div class="flex flex-wrap gap-2" role="group" aria-label="Chọn kiểu tác động">
      {#each GUESSES as m (m.id)}
        <button
          type="button"
          class="{guess === m.id ? button.primary : button.secondary} px-3 text-sm"
          aria-pressed={guess === m.id}
          onclick={() => (guess = m.id)}>{m.label}</button
        >
      {/each}
    </div>
    <FeedbackNote tone={verdict.tone} text={verdict.text} />
    <button type="button" class={button.quiet} onclick={nextPuzzle}>Số liệu khác</button>
  </div>
</div>
