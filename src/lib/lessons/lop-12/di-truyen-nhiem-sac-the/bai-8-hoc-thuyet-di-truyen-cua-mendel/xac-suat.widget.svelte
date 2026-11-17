<script>
  import LiveRichText from '#lib/components/live-rich-text.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { texFrac } from '#lib/core/fractions.js';
  import { focusRing } from '#lib/core/ui.js';
  import { GENE_LETTERS, geneChance, genotypesOf, productChance } from './engine.js';

  let count = $state(3);
  let genes = $state(
    GENE_LETTERS.map((l) => ({
      letter: l,
      mother: l + l.toLowerCase(),
      father: l + l.toLowerCase(),
      want: 'troi',
    })),
  );
  const used = $derived(genes.slice(0, count));

  /** @param {string} letter */
  const wants = (letter) => [
    { value: 'troi', label: `trội (${letter}-)` },
    { value: 'lan', label: `lặn (${letter.toLowerCase()}${letter.toLowerCase()})` },
    ...genotypesOf(letter).map((g) => ({ value: g, label: `đúng ${g}` })),
  ];

  /** @param {{ letter: string, want: string }} g */
  const wantTex = (g) =>
    g.want === 'troi'
      ? `${g.letter}\\text{-}`
      : g.want === 'lan'
        ? g.letter.toLowerCase().repeat(2)
        : g.want;

  const result = $derived(productChance(used));
  const parentTex = $derived(
    `${used.map((g) => g.mother).join('')} \\times ${used.map((g) => g.father).join('')}`,
  );
  const lines = $derived(
    used.map(
      (g) =>
        `$${g.mother} \\times ${g.father}$ cho $${wantTex(g)} = ${texFrac(geneChance(g.mother, g.father, g.want), 4)}$`,
    ),
  );
  const product = $derived(
    `$P(${used.map(wantTex).join('')}) = ${used
      .map((g) => texFrac(geneChance(g.mother, g.father, g.want), 4))
      .join(' \\cdot ')} = ${texFrac(result[0], result[1])}$`,
  );

  const select = `min-h-11 rounded-lg border border-slate-300 bg-white px-2 font-mono text-sm ${focusRing}`;
</script>

<div class="space-y-3 rounded-xl border border-slate-200 bg-white p-3">
  <p class="text-sm font-semibold text-slate-700">
    Tính xác suất bằng quy tắc nhân: các gene phân li độc lập
  </p>
  <SegmentedControl
    label="Số cặp gene"
    bind:value={count}
    options={[
      { value: 1, label: '1 cặp' },
      { value: 2, label: '2 cặp' },
      { value: 3, label: '3 cặp' },
    ]}
  />
  <div class="space-y-2">
    {#each used as g, i (g.letter)}
      <div class="flex flex-wrap items-center gap-2 text-sm">
        <span class="w-14 font-semibold text-slate-700">Gene {g.letter}</span>
        <select class={select} aria-label="Mẹ, gene {g.letter}" bind:value={genes[i].mother}>
          {#each genotypesOf(g.letter) as o (o)}<option value={o}>♀ {o}</option>{/each}
        </select>
        <span aria-hidden="true">×</span>
        <select class={select} aria-label="Bố, gene {g.letter}" bind:value={genes[i].father}>
          {#each genotypesOf(g.letter) as o (o)}<option value={o}>♂ {o}</option>{/each}
        </select>
        <span aria-hidden="true">→</span>
        <select
          class={select}
          aria-label="Đời con cần tính, gene {g.letter}"
          bind:value={genes[i].want}
        >
          {#each wants(g.letter) as o (o.value)}<option value={o.value}>{o.label}</option>{/each}
        </select>
      </div>
    {/each}
  </div>
  <div class="space-y-1 rounded-lg bg-slate-50 p-3 text-sm text-slate-800" aria-live="polite">
    <p><LiveRichText text={`Phép lai $${parentTex}$:`} /></p>
    <ul class="list-disc pl-5">
      {#each lines as l, i (i)}<li><LiveRichText text={l} /></li>{/each}
    </ul>
    <p class="font-semibold"><LiveRichText text={product} /></p>
  </div>
</div>
