<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import {
    PRESETS,
    TRAITS,
    genotypePlain,
    genotypeTex,
    genotypesFor,
    isCrisscross,
    sexLinkedCross,
    sexOf,
    shareText,
    showsDominant,
    traitOf,
  } from './engine.js';

  let traitId = $state(TRAITS[0].id);
  const trait = $derived(traitOf(traitId));
  let mi = $state(1);
  let fi = $state(0);

  const mothers = $derived(genotypesFor(trait, 'F'));
  const fathers = $derived(genotypesFor(trait, 'M'));
  const mother = $derived(mothers[Math.min(mi, mothers.length - 1)]);
  const father = $derived(fathers[Math.min(fi, fathers.length - 1)]);
  const result = $derived(sexLinkedCross(trait, mother, father));
  const daughter = $derived(trait.species === 'người' ? 'con gái' : 'con cái');
  const son = $derived(trait.species === 'người' ? 'con trai' : 'con đực');

  /** @param {string | number} id */
  function chooseTrait(id) {
    traitId = String(id);
    const p = PRESETS[traitId][0];
    mi = p.mother;
    fi = p.father;
  }

  /** @param {string[]} g */
  const look = (g) => (showsDominant(g) ? trait.dom : trait.rec);

  const note = $derived.by(() => {
    const d = `${daughter}: ${shareText(trait, result.daughters)}`;
    const s = `${son}: ${shareText(trait, result.sons)}`;
    const base = `$${genotypeTex(mother)} \\times ${genotypeTex(father)}$ → ${d}; ${s}.`;
    if (isCrisscross(trait, mother, father)) {
      return {
        tone: /** @type {const} */ ('warn'),
        text: `${base} Di truyền chéo: tính trạng lặn của ${trait.system === 'XY' ? 'mẹ' : 'bố'} truyền sang tất cả ${trait.system === 'XY' ? son : daughter}, còn ${trait.system === 'XY' ? daughter : son} mang tính trạng của ${trait.system === 'XY' ? 'bố' : 'mẹ'}. Lai thuận và lai nghịch cho kết quả khác nhau.`,
      };
    }
    const unequal =
      result.daughters.rec * result.sons.total !== result.sons.rec * result.daughters.total;
    return {
      tone: unequal ? /** @type {const} */ ('warn') : /** @type {const} */ ('info'),
      text: unequal
        ? `${base} Tỉ lệ kiểu hình khác nhau giữa hai giới: dấu hiệu gene nằm trên NST ${trait.system === 'XY' ? 'X' : 'Z'}.`
        : `${base} Hai giới có cùng tỉ lệ kiểu hình ở phép lai này.`,
    };
  });

  const select = `min-h-11 rounded-lg border border-slate-300 bg-white px-2 font-mono text-base ${focusRing}`;
</script>

{#snippet geno(/** @type {string[]} */ g)}
  {#each g as tok, k (k)}{tok[0]}{#if tok.length === 2}<sup>{tok[1]}</sup>{/if}{/each}
{/snippet}

<div class="space-y-4">
  <SegmentedControl
    label="Tính trạng"
    value={traitId}
    onchange={chooseTrait}
    options={TRAITS.map((t) => ({ value: t.id, label: t.label }))}
  />
  <p class="text-sm text-slate-600">
    Gene nằm trên NST {trait.system === 'XY' ? 'X' : 'Z'}, không có allele tương ứng trên
    {trait.system === 'XY' ? 'Y' : 'W'}. Allele {trait.letter} ({trait.dom}) trội hoàn toàn so với
    {trait.letter.toLowerCase()} ({trait.rec}).
    {trait.system === 'ZW' ? 'Ở gà, con trống là ZZ, con mái là ZW.' : ''}
  </p>

  <div class="flex flex-wrap gap-2" role="group" aria-label="Phép lai mẫu">
    {#each PRESETS[traitId] as p (p.label)}
      <button
        type="button"
        class="{mi === p.mother && fi === p.father ? button.primary : button.quiet} px-3 text-sm"
        aria-pressed={mi === p.mother && fi === p.father}
        onclick={() => {
          mi = p.mother;
          fi = p.father;
        }}>{p.label}</button
      >
    {/each}
  </div>

  <div class="grid grid-cols-2 gap-3">
    <label class="flex flex-col gap-1 text-sm font-semibold text-slate-700">
      ♀ {trait.species === 'người' ? 'Mẹ' : trait.species === 'gà' ? 'Gà mái' : 'Ruồi cái'}
      <select class={select} bind:value={mi}>
        {#each mothers as g, k (k)}
          <option value={k}>{genotypePlain(g)} – {look(g)}</option>
        {/each}
      </select>
    </label>
    <label class="flex flex-col gap-1 text-sm font-semibold text-slate-700">
      ♂ {trait.species === 'người' ? 'Bố' : trait.species === 'gà' ? 'Gà trống' : 'Ruồi đực'}
      <select class={select} bind:value={fi}>
        {#each fathers as g, k (k)}
          <option value={k}>{genotypePlain(g)} – {look(g)}</option>
        {/each}
      </select>
    </label>
  </div>

  <div class="overflow-x-auto">
    <table class="mx-auto border-collapse text-center">
      <caption class="sr-only">Bảng lai: hàng là giao tử của mẹ, cột là giao tử của bố</caption>
      <thead>
        <tr>
          <th class="p-1 text-xs text-slate-500" scope="col">♀ \ ♂</th>
          {#each father as s, j (j)}
            <th class="p-1 font-mono text-sky-800" scope="col">{@render geno([s])}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each result.cells as row, i (i)}
          <tr>
            <th class="p-1 font-mono text-rose-800" scope="row">{@render geno([mother[i]])}</th>
            {#each row as g, j (j)}
              {@const female = sexOf(trait, g) === 'F'}
              <td class="p-1">
                <div
                  class="min-w-32 rounded-lg border-2 p-2 text-sm {showsDominant(g)
                    ? 'border-emerald-300 bg-emerald-50'
                    : 'border-rose-300 bg-rose-50'}"
                >
                  <p class="font-mono font-semibold">{@render geno(g)}</p>
                  <p class="text-xs text-slate-700">
                    {female ? '♀' : '♂'}
                    {look(g)}
                  </p>
                </div>
              </td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <FeedbackNote tone={note.tone} text={note.text} />
</div>
