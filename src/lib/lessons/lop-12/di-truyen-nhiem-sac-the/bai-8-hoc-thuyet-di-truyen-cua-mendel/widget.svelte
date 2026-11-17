<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import Pea from '#lib/domain/pea.svelte';
  import { CLASSES, CROSSES, className, ratioText, square } from './engine.js';

  let crossId = $state(CROSSES[0].id);
  const chosen = $derived(CROSSES.find((c) => c.id === crossId) ?? CROSSES[0]);
  const sq = $derived(square(chosen.mother, chosen.father));

  /** @type {import('./engine.js').SeedClass['id']} */
  let brush = $state('AB');
  /** Painted cells, keyed "row-col". @type {Record<string, string>} */
  let painted = $state({});
  /** @type {{ tone: 'ok' | 'warn' | 'info', text: string } | null} */
  let last = $state(null);

  const cellCount = $derived(sq.cells.flat().length);
  const doneCount = $derived(Object.keys(painted).length);
  const finished = $derived(doneCount === cellCount);

  /** Painted counts in CLASSES order, weighted like the square. */
  const tally = $derived(
    CLASSES.map((k) =>
      sq.cells.reduce(
        (sum, row, i) =>
          sum +
          row.reduce((s, cell, j) => s + (painted[`${i}-${j}`] === k.id ? cell.weight : 0), 0),
        0,
      ),
    ),
  );

  /** @param {string | number} id */
  function chooseCross(id) {
    crossId = String(id);
    painted = {};
    last = null;
  }

  /** @param {number} i @param {number} j */
  function paint(i, j) {
    const cell = sq.cells[i][j];
    const key = `${i}-${j}`;
    if (painted[key]) return;
    if (cell.cls === brush) {
      painted = { ...painted, [key]: brush };
      last = { tone: 'ok', text: `Đúng: $${cell.genotype}$ cho hạt ${className(brush)}.` };
    } else {
      last = {
        tone: 'warn',
        text: `Chưa đúng: $${cell.genotype}$ ${cell.genotype.includes('A') ? 'có allele trội $A$ (vàng)' : 'là $aa$ (xanh)'} và ${cell.genotype.includes('B') ? 'có allele trội $B$ (trơn)' : 'là $bb$ (nhăn)'}, nên là hạt ${className(cell.cls)}.`,
      };
    }
  }

  function paintAll() {
    /** @type {Record<string, string>} */
    const all = {};
    sq.cells.forEach((row, i) => row.forEach((cell, j) => (all[`${i}-${j}`] = cell.cls)));
    painted = all;
    last = null;
  }

  const note = $derived.by(() => {
    if (finished) {
      const parts = CLASSES.map((k, n) => [k, tally[n]]).filter(([, v]) => Number(v) > 0);
      const list = parts
        .map(([k, v]) => `${v} ${/** @type {{ name: string }} */ (k).name}`)
        .join(', ');
      const extra =
        crossId === 'f1'
          ? ' Đây chính là tích $(3 \\text{ vàng} : 1 \\text{ xanh}) \\times (3 \\text{ trơn} : 1 \\text{ nhăn})$: hai cặp tính trạng di truyền độc lập.'
          : crossId === 'phan-tich'
            ? ' F₁ cho $4$ loại giao tử với tỉ lệ ngang nhau, nên đời con có $4$ kiểu hình bằng nhau.'
            : ' Đây là tích $(3 \\text{ vàng} : 1 \\text{ xanh}) \\times (1 \\text{ trơn} : 1 \\text{ nhăn})$.';
      return {
        tone: /** @type {const} */ ('ok'),
        text: `Đủ ${sq.total} tổ hợp: ${list}. Tỉ lệ kiểu hình ${ratioText(tally)}.${extra}`,
      };
    }
    return (
      last ?? {
        tone: /** @type {const} */ ('info'),
        text: 'Chọn một loại hạt ở bảng màu, rồi chạm vào các ô của bảng Punnett có kiểu hình đó.',
      }
    );
  });
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Phép lai"
    value={crossId}
    onchange={chooseCross}
    options={CROSSES.map((c) => ({ value: c.id, label: c.label }))}
  />
  <p class="text-sm text-slate-600">
    Allele A (hạt vàng) trội hoàn toàn so với a (hạt xanh); allele B (hạt trơn) trội hoàn toàn so
    với b (hạt nhăn). P: ♀ <span class="font-mono font-semibold">{chosen.mother}</span> × ♂
    <span class="font-mono font-semibold">{chosen.father}</span>.
  </p>

  <div class="flex flex-wrap gap-2" role="group" aria-label="Bảng màu kiểu hình">
    {#each CLASSES as k, n (k.id)}
      <button
        type="button"
        class="{brush === k.id ? button.primary : button.quiet} px-3"
        aria-pressed={brush === k.id}
        onclick={() => (brush = k.id)}
      >
        <Pea kind="seed" {...k.look} size={24} />
        {k.name}
        <span class="tabular-nums">({tally[n]})</span>
      </button>
    {/each}
  </div>

  <div class="overflow-x-auto pb-1">
    <table class="mx-auto border-collapse text-center">
      <caption class="sr-only">Bảng Punnett: hàng là giao tử của mẹ, cột là giao tử của bố</caption>
      <thead>
        <tr>
          <th class="p-1 text-xs text-slate-500" scope="col">♀ \ ♂</th>
          {#each sq.sperms as s, j (j)}
            <th class="min-w-16 p-1 font-mono text-sm text-sky-800" scope="col">{s}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each sq.cells as row, i (i)}
          <tr>
            <th class="p-1 font-mono text-sm text-rose-800" scope="row">{sq.eggs[i]}</th>
            {#each row as cell, j (j)}
              {@const p = painted[`${i}-${j}`]}
              {@const look = CLASSES.find((k) => k.id === p)?.look}
              <td class="p-0.5">
                <button
                  type="button"
                  class="flex min-h-12 w-full min-w-16 flex-col items-center justify-center rounded-lg border px-1 font-mono text-sm font-semibold {p
                    ? 'border-emerald-400 bg-emerald-50'
                    : 'border-slate-300 bg-white hover:bg-slate-50'} {focusRing}"
                  aria-label="Ô {cell.genotype}{p ? `, đã tô: hạt ${className(p)}` : ''}"
                  onclick={() => paint(i, j)}
                >
                  {cell.genotype}
                  {#if look}<Pea kind="seed" {...look} size={20} />{/if}
                </button>
              </td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <div class="flex flex-wrap items-center gap-2">
    <span class="text-sm text-slate-600 tabular-nums">Đã tô {doneCount}/{cellCount} ô</span>
    <button type="button" class={button.quiet} onclick={paintAll} disabled={finished}
      >Tô hết giúp tôi</button
    >
    <button
      type="button"
      class={button.quiet}
      onclick={() => {
        painted = {};
        last = null;
      }}>Làm lại</button
    >
  </div>

  <div aria-live="polite">
    <FeedbackNote tone={note.tone} text={note.text} />
  </div>
</div>
