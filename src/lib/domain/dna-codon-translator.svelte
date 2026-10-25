<script>
  import { untrack } from 'svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import {
    AMINO_ACIDS,
    CODON_TABLE,
    EFFECT_LABELS,
    RNA_BASES,
    STOP,
    clean,
    compareProteins,
    complement,
    mutate,
    transcribe,
    translate,
  } from './codons.js';

  /**
   * A gene read base by base: the coding strand (mạch mã hoá, 5' → 3'), the
   * template strand (mạch khuôn) under it, the mRNA transcribed from it and
   * the amino acids the ribosome reads codon by codon, from the first AUG to
   * the first stop codon. With `editable`, tap a nucleotide (or Tab to it
   * and press Enter) to substitute, insert before it or delete it; the
   * readout names the mutation type against the starting sequence.
   *
   * - `sequence` (bindable): the coding strand, A/T/G/C, 5' → 3'.
   * - `editable`: allow point mutations and the reset button.
   * - `template`: show the template strand row.
   * - `table`: show the standard codon table, highlighting the selected codon.
   *
   * @type {{
   *   sequence?: string;
   *   editable?: boolean;
   *   template?: boolean;
   *   table?: boolean;
   *   label?: string;
   *   onchange?: (sequence: string) => void;
   * }}
   */
  let {
    sequence = $bindable('TACATGGAGAAATGGTAAGC'),
    editable = true,
    template = true,
    table = false,
    label = 'Phiên mã và dịch mã',
    onchange,
  } = $props();

  // The starting sequence is what mutations are compared against.
  const original = untrack(() => clean(sequence));
  const dna = $derived(clean(sequence));
  const mrna = $derived(transcribe(dna));
  const reading = $derived(translate(mrna));
  const effect = $derived(compareProteins(original, dna));
  /** @type {number | null} */
  let selected = $state(null);

  /**
   * Groups of bases for display: bases before the start codon one by one,
   * then codons of the reading frame, then the rest one by one.
   */
  const groups = $derived.by(() => {
    /** @type {Array<{ from: number, to: number, aa: string | null, inFrame: boolean }>} */
    const out = [];
    const start = reading.start;
    const end = start < 0 ? 0 : start + reading.codons.length * 3;
    for (let i = 0; i < (start < 0 ? dna.length : start); i++) {
      out.push({ from: i, to: i + 1, aa: null, inFrame: false });
    }
    for (const c of reading.codons) {
      out.push({ from: c.index, to: c.index + 3, aa: c.aa, inFrame: true });
    }
    for (let i = start < 0 ? dna.length : end; i < dna.length; i++) {
      out.push({ from: i, to: i + 1, aa: null, inFrame: false });
    }
    return out;
  });

  const selectedCodon = $derived.by(() => {
    if (selected === null) return null;
    const g = groups.find(
      (x) => x.inFrame && selected !== null && x.from <= selected && selected < x.to,
    );
    return g ? mrna.slice(g.from, g.to) : null;
  });

  const proteinText = $derived(
    reading.start < 0
      ? 'Không có bộ ba mở đầu AUG: ribosome không bắt đầu dịch mã.'
      : `${reading.protein.join(' – ') || '(trống)'}${reading.stopped ? '' : ' (chưa gặp mã kết thúc)'}`,
  );

  /** @param {string} next */
  function commit(next) {
    sequence = next;
    onchange?.(next);
  }

  /** @param {import('./codons.js').Mutation} m */
  function apply(m) {
    const next = mutate(dna, m);
    if (!next.length) return;
    commit(next);
    if (m.type === 'deletion') selected = Math.min(m.at, next.length - 1);
    else if (m.type === 'insertion') selected = m.at;
  }

  function reset() {
    commit(original);
    selected = null;
  }

  /** @param {string} aa */
  const aaTitle = (aa) => (aa === STOP ? 'Mã kết thúc' : (AMINO_ACIDS[aa]?.name ?? aa));
  /** @param {string} aa */
  const aaClass = (aa) =>
    aa === STOP
      ? 'bg-rose-600 text-white'
      : aa === 'Met'
        ? 'bg-emerald-600 text-white'
        : 'bg-amber-100 text-amber-900';

  /** @type {Record<string, string>} */
  const BASE_COLORS = {
    A: 'text-emerald-700',
    T: 'text-rose-700',
    U: 'text-rose-700',
    G: 'text-amber-700',
    C: 'text-sky-700',
  };
  const DNA_BASES = ['A', 'T', 'G', 'C'];
  const pill = `min-h-11 rounded-lg border border-slate-300 bg-white px-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 ${focusRing}`;
</script>

<figure class="space-y-4" aria-label={label}>
  <div class="overflow-x-auto pb-2">
    <div class="flex w-max flex-wrap gap-x-2 gap-y-3 font-mono text-lg sm:w-auto">
      <div class="flex flex-col justify-start gap-1 pr-1 text-xs leading-7 text-slate-500">
        <span>DNA mã hoá 5'</span>
        {#if template}<span>DNA khuôn 3'</span>{/if}
        <span>mRNA 5'</span>
        <span class="leading-6">Amino acid</span>
      </div>
      {#each groups as g (g.from)}
        <div
          class="flex flex-col items-center gap-1 rounded-lg px-1 {g.inFrame
            ? 'bg-slate-100'
            : 'opacity-60'}"
        >
          <div class="flex">
            {#each { length: g.to - g.from } as _, k (k)}
              {@const i = g.from + k}
              {#if editable}
                <button
                  type="button"
                  class="h-7 w-6 rounded font-bold {BASE_COLORS[dna[i]]} {selected === i
                    ? 'bg-indigo-200 ring-2 ring-indigo-500'
                    : 'hover:bg-white'} {focusRing}"
                  aria-label="Nucleotide {i + 1}: {dna[i]}"
                  aria-pressed={selected === i}
                  onclick={() => (selected = selected === i ? null : i)}>{dna[i]}</button
                >
              {:else}
                <span class="h-7 w-6 text-center leading-7 font-bold {BASE_COLORS[dna[i]]}"
                  >{dna[i]}</span
                >
              {/if}
            {/each}
          </div>
          {#if template}
            <div class="flex" aria-hidden="true">
              {#each { length: g.to - g.from } as _, k (k)}
                {@const b = complement(dna[g.from + k])}
                <span class="h-7 w-6 text-center leading-7 {BASE_COLORS[b]}">{b}</span>
              {/each}
            </div>
          {/if}
          <div class="flex" aria-hidden="true">
            {#each { length: g.to - g.from } as _, k (k)}
              {@const b = mrna[g.from + k]}
              <span class="h-7 w-6 text-center leading-7 {BASE_COLORS[b]}">{b}</span>
            {/each}
          </div>
          {#if g.aa}
            <span
              class="rounded-full px-2 font-sans text-sm leading-6 font-semibold {aaClass(g.aa)}"
              title={aaTitle(g.aa)}>{g.aa === STOP ? 'KT' : g.aa}</span
            >
          {:else}
            <span class="h-6"></span>
          {/if}
        </div>
      {/each}
    </div>
  </div>

  <dl class="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 rounded-xl bg-slate-50 p-4 text-sm">
    <dt class="text-slate-500">mRNA</dt>
    <dd class="font-mono break-all">5'-{mrna}-3'</dd>
    <dt class="text-slate-500">Chuỗi polypeptide</dt>
    <dd class="font-semibold" aria-live="polite">{proteinText}</dd>
    {#if editable}
      <dt class="text-slate-500">So với ban đầu</dt>
      <dd
        class={effect.effect === 'none' || effect.effect === 'silent'
          ? 'text-emerald-800'
          : 'font-semibold text-amber-800'}
        aria-live="polite"
      >
        {EFFECT_LABELS[effect.effect]}{effect.changedAt !== null && effect.effect !== 'start-loss'
          ? ` (từ amino acid thứ ${effect.changedAt + 1})`
          : ''}.
      </dd>
    {/if}
  </dl>

  {#if editable}
    <div class="space-y-3 rounded-xl border border-indigo-200 bg-indigo-50 p-4">
      {#if selected === null}
        <p class="text-sm text-indigo-900">
          Chạm vào một nucleotide của mạch mã hoá để tạo đột biến điểm.
        </p>
      {:else}
        {@const at = selected}
        <p class="text-sm font-semibold text-indigo-900">
          Nucleotide thứ {at + 1} ({dna[at]}){selectedCodon
            ? `, thuộc bộ ba mRNA ${selectedCodon}`
            : ''}:
        </p>
        <div class="flex flex-wrap items-center gap-2" role="group" aria-label="Thay thế">
          <span class="text-sm text-slate-600">Thay bằng</span>
          {#each DNA_BASES.filter((b) => b !== dna[at]) as b (b)}
            <button
              type="button"
              class={pill}
              aria-label="Thay nucleotide {at + 1} bằng {b}"
              onclick={() => apply({ type: 'substitution', at, base: b })}>{b}</button
            >
          {/each}
        </div>
        <div class="flex flex-wrap items-center gap-2" role="group" aria-label="Thêm">
          <span class="text-sm text-slate-600">Thêm trước nó</span>
          {#each DNA_BASES as b (b)}
            <button
              type="button"
              class={pill}
              aria-label="Thêm {b} trước nucleotide {at + 1}"
              onclick={() => apply({ type: 'insertion', at, base: b })}>+{b}</button
            >
          {/each}
          <button
            type="button"
            class={pill}
            disabled={dna.length <= 1}
            onclick={() => apply({ type: 'deletion', at })}>Mất nucleotide này</button
          >
        </div>
      {/if}
      <button type="button" class={button.quiet} onclick={reset}>Khôi phục trình tự ban đầu</button>
    </div>
  {/if}

  {#if table}
    <div class="overflow-x-auto">
      <table class="w-full min-w-[34rem] border-collapse text-center font-mono text-xs">
        <caption class="pb-2 text-left font-sans text-sm text-slate-600">
          Bảng mã di truyền (bộ ba trên mRNA)
        </caption>
        <thead>
          <tr>
            <th class="border border-slate-200 bg-slate-50 p-1 font-sans">1 \ 2</th>
            {#each RNA_BASES as second (second)}
              <th class="border border-slate-200 bg-slate-50 p-1">{second}</th>
            {/each}
          </tr>
        </thead>
        <tbody>
          {#each RNA_BASES as first (first)}
            <tr>
              <th class="border border-slate-200 bg-slate-50 p-1">{first}</th>
              {#each RNA_BASES as second (second)}
                <td class="border border-slate-200 p-1 align-top">
                  {#each RNA_BASES as third (third)}
                    {@const codon = `${first}${second}${third}`}
                    <div
                      class="rounded px-1 {codon === selectedCodon
                        ? 'bg-indigo-600 text-white'
                        : CODON_TABLE[codon] === STOP
                          ? 'text-rose-700'
                          : ''}"
                    >
                      {codon}
                      {CODON_TABLE[codon] === STOP ? 'KT' : CODON_TABLE[codon]}
                    </div>
                  {/each}
                </td>
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>
      <p class="pt-1 text-xs text-slate-500">
        KT: mã kết thúc (UAA, UAG, UGA). AUG mở đầu và mã hoá Met.
      </p>
    </div>
  {/if}
</figure>
