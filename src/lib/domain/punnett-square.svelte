<script>
  import { focusRing, textInput } from '#lib/core/ui.js';
  import { colorAt } from '#lib/core/visuals/svg-math.js';
  import { formatNumber } from '#lib/units-engine/format.js';
  import { cross, formatGenotype, parseGenotype, phenotype, ratio } from './genetics.js';

  /**
   * The Punnett square of a cross P: ♀ mother × ♂ father. Rows are the
   * mother's gametes, columns the father's; each cell is an F1 zygote,
   * tinted by its phenotype. Tap a cell (or Tab to it and press Enter) to
   * highlight every cell with the same genotype and read its probability.
   * Below the square: the genotype and phenotype ratios.
   *
   * - `mother`, `father` (bindable): genotypes such as "AaBb" or "XAXa" × "XaY".
   * - `editable`: show text fields to type the parents' genotypes.
   * - `dominance`: 'complete' (trội hoàn toàn) or 'incomplete' (trội không hoàn toàn).
   * - `traits`: names for phenotype labels, e.g. `{ A: 'hạt vàng', a: 'hạt xanh' }`.
   *   With sex-linked genes the key is the label without the sex sign.
   *
   * @type {{
   *   mother?: string;
   *   father?: string;
   *   editable?: boolean;
   *   dominance?: import('./genetics.js').Dominance;
   *   traits?: Record<string, string>;
   *   label?: string;
   *   onchange?: (parents: { mother: string, father: string }) => void;
   * }}
   */
  let {
    mother = $bindable('Aa'),
    father = $bindable('Aa'),
    editable = true,
    dominance = 'complete',
    traits = {},
    label = 'Bảng Punnett',
    onchange,
  } = $props();

  /** @type {[number, number] | null} */
  let picked = $state(null);

  const result = $derived.by(() => {
    try {
      const m = parseGenotype(mother);
      const f = parseGenotype(father);
      if (m.length > 3) return { error: 'Bảng chỉ vẽ tối đa 3 cặp gene.' };
      return { cross: cross(m, f, { dominance }) };
    } catch {
      return {
        error:
          'Kiểu gene chưa hợp lệ: mỗi gene viết đủ hai allele (Aa, BB, XAXa, XaY) và hai bên có cùng các gene.',
      };
    }
  });
  const c = $derived(result.cross);

  /** @param {string[]} ph */
  const phenotypeName = (ph) =>
    ph
      .map((p) => {
        const sex = p.startsWith('♀') || p.startsWith('♂') ? p.slice(0, 2) : '';
        const key = p.slice(sex.length);
        return `${sex}${traits[key] ?? key}`;
      })
      .join(', ');

  const phenotypeKeys = $derived(c ? c.phenotypes.map((p) => p.phenotype.join(' ')) : []);
  /** @param {import('./genetics.js').Genotype} g */
  const tint = (g) => colorAt(phenotypeKeys.indexOf(phenotype(g, dominance).join(' ')));

  const pickedGenotype = $derived(
    c && picked && c.cells[picked[0]]?.[picked[1]]
      ? formatGenotype(c.cells[picked[0]][picked[1]].genotype)
      : null,
  );
  const pickedInfo = $derived.by(() => {
    if (!c || !picked || !pickedGenotype) return null;
    const cell = c.cells[picked[0]][picked[1]];
    const g = c.genotypes.find((x) => x.genotype === pickedGenotype);
    const ph = phenotype(cell.genotype, dominance);
    const p = c.phenotypes.find((x) => x.phenotype.join(' ') === ph.join(' '));
    return {
      genotype: pickedGenotype,
      gCount: g?.count ?? 0,
      phenotype: phenotypeName(ph),
      pCount: p?.count ?? 0,
    };
  });

  /** @param {string} which @param {string} value */
  function setParent(which, value) {
    if (which === 'mother') mother = value;
    else father = value;
    picked = null;
    onchange?.({ mother, father });
  }

  /** @param {number} n */
  const pct = (n) => (c ? formatNumber((n / c.total) * 100, 2) : '');
</script>

<figure class="space-y-4" aria-label={label}>
  {#if editable}
    <div class="grid gap-3 sm:grid-cols-2">
      <label class="space-y-1 text-sm font-semibold text-slate-700">
        <span>♀ Mẹ (P)</span>
        <input
          class={textInput}
          value={mother}
          autocomplete="off"
          spellcheck="false"
          oninput={(e) => setParent('mother', e.currentTarget.value)}
        />
      </label>
      <label class="space-y-1 text-sm font-semibold text-slate-700">
        <span>♂ Bố (P)</span>
        <input
          class={textInput}
          value={father}
          autocomplete="off"
          spellcheck="false"
          oninput={(e) => setParent('father', e.currentTarget.value)}
        />
      </label>
    </div>
  {/if}

  {#if result.error || !c}
    <p class="rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-900" role="alert">
      {result.error}
    </p>
  {:else}
    <p class="text-sm text-slate-700">
      P: ♀ <strong>{formatGenotype(parseGenotype(mother))}</strong> × ♂
      <strong>{formatGenotype(parseGenotype(father))}</strong> — mỗi bên cho
      {c.eggs.length} và {c.sperms.length} loại giao tử.
    </p>
    <div class="overflow-x-auto pb-1">
      <table class="mx-auto border-collapse text-center">
        <caption class="sr-only">
          Bảng Punnett: hàng là giao tử của mẹ, cột là giao tử của bố
        </caption>
        <thead>
          <tr>
            <th class="p-1 text-xs text-slate-500" scope="col">♀ \ ♂</th>
            {#each c.sperms as s, j (j)}
              <th class="min-w-14 p-1 font-mono text-sm text-sky-800" scope="col">
                {s.gamete.join('')}
                {#if s.count > 1}<span class="text-xs text-slate-400">×{s.count}</span>{/if}
              </th>
            {/each}
          </tr>
        </thead>
        <tbody>
          {#each c.cells as row, i (i)}
            <tr>
              <th class="p-1 font-mono text-sm text-rose-800" scope="row">
                {c.eggs[i].gamete.join('')}
                {#if c.eggs[i].count > 1}<span class="text-xs text-slate-400"
                    >×{c.eggs[i].count}</span
                  >{/if}
              </th>
              {#each row as cell, j (j)}
                {@const g = formatGenotype(cell.genotype)}
                {@const same = pickedGenotype === g}
                <td class="p-0.5">
                  <button
                    type="button"
                    class="min-h-11 w-full min-w-14 rounded-lg border-2 px-1 font-mono text-sm font-semibold text-slate-900 {same
                      ? 'border-slate-900'
                      : 'border-transparent'} {focusRing}"
                    style="background-color: {tint(cell.genotype)}33"
                    aria-pressed={same}
                    aria-label="Ô {g}"
                    onclick={() => (picked = same ? null : [i, j])}>{g}</button
                  >
                </td>
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>
    </div>

    <p class="min-h-6 text-sm text-slate-700" aria-live="polite">
      {#if pickedInfo}
        Kiểu gene <strong class="font-mono">{pickedInfo.genotype}</strong>:
        {pickedInfo.gCount}/{c.total} tổ hợp ({pct(pickedInfo.gCount)}%). Kiểu hình
        <strong>{pickedInfo.phenotype}</strong>: {pickedInfo.pCount}/{c.total} ({pct(
          pickedInfo.pCount,
        )}%).
      {:else}
        Chạm vào một ô để xem xác suất của kiểu gene và kiểu hình đó.
      {/if}
    </p>

    <div class="grid gap-3 text-sm sm:grid-cols-2">
      <div class="rounded-xl bg-slate-50 p-3">
        <p class="font-semibold text-slate-700">
          Tỉ lệ kiểu gene: {ratio(c.genotypes.map((g) => g.count))}
        </p>
        <ul class="mt-1 flex flex-wrap gap-x-3 font-mono text-slate-700">
          {#each c.genotypes as g (g.genotype)}
            <li>{g.count} {g.genotype}</li>
          {/each}
        </ul>
      </div>
      <div class="rounded-xl bg-slate-50 p-3">
        <p class="font-semibold text-slate-700">
          Tỉ lệ kiểu hình: {ratio(c.phenotypes.map((p) => p.count))}
        </p>
        <ul class="mt-1 space-y-0.5 text-slate-700">
          {#each c.phenotypes as p, k (p.phenotype.join(' '))}
            <li class="flex items-center gap-2">
              <span
                class="inline-block size-3 rounded-sm"
                style="background-color: {colorAt(k)}"
                aria-hidden="true"
              ></span>
              {p.count}
              {phenotypeName(p.phenotype)}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  {/if}
</figure>
