<script>
  import FeedbackNote from '#lib/core/feedback-note.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import {
    CROSSES,
    MODE_LABEL,
    PHENOTYPES,
    PREDICTIONS,
    crossResult,
    genotypeText,
    predictionFeedback,
  } from './engine.js';

  let crossId = $state(CROSSES[0].id);
  /** @type {string | null} */
  let guess = $state(null);
  let revealed = $state(false);

  const cross = $derived(CROSSES.find((c) => c.id === crossId) ?? CROSSES[0]);
  const feedback = $derived(guess ? predictionFeedback(cross, guess) : null);
  const modes = /** @type {const} */ (['doc-lap', 'lien-ket']);

  const TINTS = ['bg-amber-100', 'bg-lime-100', 'bg-sky-100', 'bg-slate-200'];
  const DOTS = ['bg-amber-400', 'bg-lime-500', 'bg-sky-500', 'bg-slate-500'];

  /** @param {string | number} id */
  function chooseCross(id) {
    crossId = String(id);
    guess = null;
    revealed = false;
  }

  /** @param {string} g */
  function predict(g) {
    guess = g;
    if (predictionFeedback(cross, g).ok) revealed = true;
  }
</script>

{#snippet genotype(/** @type {string} */ text, /** @type {boolean} */ linked)}
  {#if linked}
    {@const [top, bottom] = text.split('/')}
    <span class="inline-flex flex-col items-center leading-tight" aria-hidden="true">
      <span>{top}</span>
      <span class="border-t border-current px-0.5">{bottom}</span>
    </span>
    <span class="sr-only">{top} trên {bottom}</span>
  {:else}
    {text}
  {/if}
{/snippet}

{#snippet chromosomes(
  /** @type {import('./engine.js').Parent} */ parent,
  /** @type {boolean} */ linked,
)}
  <!-- The parent's chromosomes: one pair carrying both genes, or two pairs with one gene each. -->
  <svg viewBox="0 0 120 70" class="h-20 w-36 shrink-0" aria-hidden="true">
    {#if linked}
      {#each parent as chrom, i (i)}
        {@const x = 45 + i * 30}
        <rect
          x={x - 5}
          y="6"
          width="10"
          height="58"
          rx="5"
          class="fill-indigo-100 stroke-indigo-600"
        />
        <text
          {x}
          y="24"
          text-anchor="middle"
          font-size="12"
          font-weight="700"
          class="fill-slate-900">{chrom[0]}</text
        >
        <text
          {x}
          y="52"
          text-anchor="middle"
          font-size="12"
          font-weight="700"
          class="fill-slate-900">{chrom[1]}</text
        >
      {/each}
    {:else}
      {#each [0, 1] as gene (gene)}
        {#each parent as chrom, i (i)}
          {@const x = 18 + gene * 60 + i * 24}
          <rect
            x={x - 5}
            y={gene ? 20 : 8}
            width="10"
            height={gene ? 36 : 54}
            rx="5"
            class="fill-indigo-100 stroke-indigo-600"
          />
          <text
            {x}
            y={gene ? 42 : 38}
            text-anchor="middle"
            font-size="12"
            font-weight="700"
            class="fill-slate-900">{chrom[gene]}</text
          >
        {/each}
      {/each}
    {/if}
  </svg>
{/snippet}

<div class="space-y-4">
  <SegmentedControl
    label="Phép lai"
    options={CROSSES.map((c) => ({ value: c.id, label: c.label }))}
    value={crossId}
    onchange={chooseCross}
  />
  <p class="text-sm text-slate-600">
    {cross.note} Quy ước: B thân xám, b thân đen; V cánh dài, v cánh cụt.
  </p>

  <fieldset class="rounded-xl border border-indigo-200 p-3">
    <legend class="px-1 text-sm font-semibold text-indigo-800">
      Dự đoán: nếu hai gene nằm trên cùng một NST, tỉ lệ kiểu hình ở đời con là
    </legend>
    <div class="flex flex-wrap gap-2">
      {#each PREDICTIONS as p (p)}
        <button
          type="button"
          class="min-h-11 rounded-lg border px-3 text-sm font-semibold {guess === p
            ? feedback?.ok
              ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
              : 'border-amber-500 bg-amber-50 text-amber-900'
            : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'} {focusRing}"
          aria-pressed={guess === p}
          onclick={() => predict(p)}>{p}</button
        >
      {/each}
      {#if !revealed}
        <button type="button" class={button.quiet} onclick={() => (revealed = true)}
          >Xem kết quả</button
        >
      {/if}
    </div>
    {#if feedback}
      <div class="mt-2">
        <FeedbackNote tone={feedback.ok ? 'ok' : 'warn'} text={feedback.text} />
      </div>
    {/if}
  </fieldset>

  <div class="grid gap-4 lg:grid-cols-2">
    {#each modes as mode (mode)}
      {@const linked = mode === 'lien-ket'}
      {@const r = crossResult(cross, mode)}
      <section
        class="rounded-xl border border-slate-200 bg-white p-3"
        aria-label={MODE_LABEL[mode]}
      >
        <h3 class="text-sm font-semibold text-slate-800">{MODE_LABEL[mode]}</h3>
        {#if linked && !revealed}
          <p class="mt-2 rounded-lg bg-slate-100 p-3 text-sm text-slate-600">
            Chọn một dự đoán ở trên (hoặc bấm "Xem kết quả") để mở bảng này.
          </p>
        {:else}
          <div class="mt-2 flex items-center gap-2 text-sm text-slate-700">
            {@render chromosomes(cross.father, linked)}
            <p>
              ♂ {@render genotype(genotypeText(cross.father[0], cross.father[1], mode), linked)} cho
              <strong>{r.sperms.length}</strong>
              loại giao tử: {r.sperms.map((s) => s.gamete).join(', ')}.
            </p>
          </div>
          <div class="mt-2 overflow-x-auto">
            <table class="w-full border-collapse text-center text-xs">
              <caption class="sr-only"
                >Bảng Punnett, hàng là giao tử cái, cột là giao tử đực</caption
              >
              <thead>
                <tr>
                  <th class="p-1 text-slate-500"
                    ><span aria-hidden="true">♀ \ ♂</span><span class="sr-only"
                      >Giao tử cái, giao tử đực</span
                    ></th
                  >
                  {#each r.sperms as s (s.gamete)}
                    <th class="p-1 font-bold text-slate-800">{s.gamete}</th>
                  {/each}
                </tr>
              </thead>
              <tbody>
                {#each r.eggs as e, i (e.gamete)}
                  <tr>
                    <th class="p-1 font-bold text-slate-800">{e.gamete}</th>
                    {#each r.cells[i] as c, j (j)}
                      <td
                        class="border border-white p-1.5 font-semibold text-slate-900 {TINTS[
                          c.phenotype
                        ]}"
                      >
                        {@render genotype(c.genotype, linked)}
                        <span class="sr-only">, {PHENOTYPES[c.phenotype]}</span>
                      </td>
                    {/each}
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
          <ul class="mt-2 space-y-1 text-sm">
            {#each r.phenotypes as p (p.index)}
              <li class="flex items-center gap-2">
                <span class="h-3 w-3 rounded-full {DOTS[p.index]}" aria-hidden="true"></span>
                {p.count}
                {p.name}
              </li>
            {/each}
          </ul>
          <p class="mt-1 text-sm font-semibold text-indigo-800">
            Tỉ lệ kiểu hình: {r.ratio} ({r.phenotypes.length} kiểu hình)
          </p>
        {/if}
      </section>
    {/each}
  </div>
</div>
