<script>
  import { focusRing } from '#lib/core/ui.js';
  import { isCen } from './mutations.js';

  /**
   * One chromosome drawn as a row of gene blocks with a pinched centromere
   * (•). Genes of chromosome A are amber, genes of chromosome B sky blue, so
   * a translocated segment shows its origin. With `onpick` every gene is a
   * button (Tab, Enter or Space) and the blocks from `from` to `to` are
   * marked as the selected segment.
   * @type {{
   *   genes: import('./mutations.js').Gene[];
   *   label: string;
   *   from?: number | null;
   *   to?: number | null;
   *   onpick?: (index: number) => void;
   * }}
   */
  let { genes, label, from = null, to = null, onpick } = $props();

  const lo = $derived(from === null ? -1 : Math.min(from, to ?? from));
  const hi = $derived(from === null ? -1 : Math.max(from, to ?? from));

  /** @param {import('./mutations.js').Gene} g @param {number} i */
  function tone(g, i) {
    const picked = i >= lo && i <= hi;
    const base = g.home === 'A' ? 'bg-amber-200 text-amber-950' : 'bg-sky-200 text-sky-950';
    return `${base} ${picked ? 'ring-4 ring-indigo-600 ring-inset' : ''}`;
  }
  /** @param {number} i */
  const shape = (i) =>
    `${i === 0 ? 'rounded-l-full' : ''} ${i === genes.length - 1 ? 'rounded-r-full' : ''}`;
</script>

<div class="space-y-1">
  <p class="text-xs font-semibold text-slate-600">{label}</p>
  <div
    class="flex w-full items-center"
    role={onpick ? 'group' : 'img'}
    aria-label="{label}: {genes.map((g) => (isCen(g) ? 'tâm động' : g.label)).join(', ')}"
  >
    {#each genes as g, i (g.id)}
      {#if isCen(g)}
        <span
          class="mx-0.5 h-5 w-3 shrink-0 rounded-full bg-violet-600"
          title="Tâm động"
          aria-hidden="true"
        ></span>
      {:else if onpick}
        <button
          type="button"
          class="flex h-11 min-w-0 flex-1 items-center justify-center border-y border-r border-white text-sm font-bold {tone(
            g,
            i,
          )} {shape(i)} {focusRing}"
          aria-pressed={i >= lo && i <= hi}
          aria-label="Gene {g.label}{g.home === 'B' ? ', từ nhiễm sắc thể kia' : ''}"
          onclick={() => onpick(i)}>{g.label}</button
        >
      {:else}
        <span
          class="flex h-9 min-w-0 flex-1 items-center justify-center border-y border-r border-white text-sm font-bold {tone(
            g,
            i,
          )} {shape(i)}"
          aria-hidden="true">{g.label}</span
        >
      {/if}
    {/each}
  </div>
</div>
