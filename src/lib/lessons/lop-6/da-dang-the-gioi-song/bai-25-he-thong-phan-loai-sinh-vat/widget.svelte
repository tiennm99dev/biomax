<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { button, focusRing } from '#lib/core/ui.js';
  import {
    RANKS,
    SPECIES,
    compareSentence,
    sameGroup,
    sharedDepth,
    speciesById,
    taxonLabel,
  } from './engine.js';

  const uid = $props.id();
  const LAST = RANKS.length - 1;

  let mode = $state(/** @type {'walk' | 'compare'} */ ('walk'));
  let speciesId = $state('ho');
  let depth = $state(0);
  let otherId = $state('su-tu');

  const species = $derived(speciesById(speciesId));
  const other = $derived(speciesById(otherId));
  const group = $derived(sameGroup(speciesId, depth));
  const shared = $derived(sharedDepth(speciesId, otherId));

  const walkMessage = $derived.by(() => {
    const label = taxonLabel(depth, species.lineage[depth]);
    if (depth === LAST)
      return `${label}: đây là bậc phân loại thấp nhất, chỉ còn đúng một loài. Tên khoa học gồm tên chi (${species.lineage[5].la}) và tên loài, viết in nghiêng.`;
    const others = group.length - 1;
    return `${label}: trong ${SPECIES.length} sinh vật của bảng, ${others === 0 ? 'không còn sinh vật nào khác' : `còn ${others} sinh vật khác`} cùng nhóm này. Xuống bậc tiếp theo, nhóm sẽ hẹp hơn.`;
  });

  /** @param {string} id */
  function choose(id) {
    speciesId = id;
    depth = 0;
  }
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Chế độ"
    options={[
      { value: 'walk', label: 'Đi từ giới xuống loài' },
      { value: 'compare', label: 'So sánh hai loài' },
    ]}
    bind:value={mode}
  />

  {#if mode === 'walk'}
    <div class="flex flex-wrap gap-2" role="group" aria-label="Chọn một sinh vật">
      {#each SPECIES as s (s.id)}
        <button
          type="button"
          class="min-h-11 rounded-lg border px-3 text-sm font-semibold {speciesId === s.id
            ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
            : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'} {focusRing}"
          aria-pressed={speciesId === s.id}
          onclick={() => choose(s.id)}>{s.name}</button
        >
      {/each}
    </div>

    <ol class="space-y-1" aria-label="Các bậc phân loại của {species.name.toLowerCase()}">
      {#each RANKS as r, d (r.id)}
        {@const open = d <= depth}
        <li
          class="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm {d === depth
            ? 'border-indigo-500 bg-indigo-50 text-indigo-950'
            : open
              ? 'border-slate-200 bg-white text-slate-800'
              : 'border-dashed border-slate-300 bg-slate-50 text-slate-400'}"
          style="margin-left: {d * 0.6}rem"
        >
          <span class="w-20 shrink-0 font-semibold">{r.name}</span>
          {#if open}
            {@const t = species.lineage[d]}
            {#if d === LAST}
              <span class="italic">{t.la}</span>
            {:else}
              <span>{t.vi ? `${t.vi} (${t.la})` : t.la}</span>
            {/if}
          {:else}
            <span aria-hidden="true">?</span><span class="sr-only">chưa mở</span>
          {/if}
        </li>
      {/each}
    </ol>

    <div class="flex flex-wrap gap-2">
      <button
        type="button"
        class={button.quiet}
        disabled={depth === 0}
        onclick={() => (depth = Math.max(0, depth - 1))}>Lên một bậc</button
      >
      <button
        type="button"
        class={button.primary}
        disabled={depth === LAST}
        onclick={() => (depth = Math.min(LAST, depth + 1))}>Xuống một bậc</button
      >
    </div>

    <div>
      <p class="mb-1 text-sm font-semibold text-slate-700">Cùng nhóm ở bậc này:</p>
      <ul class="flex flex-wrap gap-2">
        {#each group as g (g.id)}
          <li
            class="rounded-full px-3 py-1 text-sm {g.id === speciesId
              ? 'bg-indigo-600 text-white'
              : 'bg-emerald-100 text-emerald-900'}"
          >
            {g.name}
          </li>
        {/each}
      </ul>
    </div>

    <p class="min-h-12 rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-800" aria-live="polite">
      {walkMessage}
    </p>
  {:else}
    <div class="grid gap-3 sm:grid-cols-2">
      <label class="text-sm font-semibold text-slate-700" for="{uid}-a">
        Sinh vật thứ nhất
        <select
          id="{uid}-a"
          class="mt-1 block min-h-11 w-full rounded-lg border border-slate-300 bg-white px-2 {focusRing}"
          bind:value={speciesId}
        >
          {#each SPECIES as s (s.id)}<option value={s.id}>{s.name}</option>{/each}
        </select>
      </label>
      <label class="text-sm font-semibold text-slate-700" for="{uid}-b">
        Sinh vật thứ hai
        <select
          id="{uid}-b"
          class="mt-1 block min-h-11 w-full rounded-lg border border-slate-300 bg-white px-2 {focusRing}"
          bind:value={otherId}
        >
          {#each SPECIES as s (s.id)}<option value={s.id}>{s.name}</option>{/each}
        </select>
      </label>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full min-w-[20rem] text-left text-sm">
        <thead>
          <tr class="text-slate-600">
            <th scope="col" class="py-1 pr-2">Bậc</th>
            <th scope="col" class="py-1 pr-2">{species.name}</th>
            <th scope="col" class="py-1">{other.name}</th>
          </tr>
        </thead>
        <tbody>
          {#each RANKS as r, d (r.id)}
            {@const same = d < shared}
            <tr class={same ? 'bg-emerald-50 text-emerald-950' : 'text-slate-700'}>
              <th scope="row" class="py-1 pr-2 font-semibold"
                >{r.name}<span class="sr-only">{same ? ', chung' : ', khác'}</span></th
              >
              <td class="py-1 pr-2 {d === LAST ? 'italic' : ''}">{species.lineage[d].la}</td>
              <td class="py-1 {d === LAST ? 'italic' : ''}">{other.lineage[d].la}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
    <p class="text-xs text-slate-600">Các hàng tô xanh là bậc phân loại hai sinh vật cùng chung.</p>

    <p class="min-h-12 rounded-xl bg-slate-100 px-4 py-3 text-sm text-slate-800" aria-live="polite">
      {compareSentence(speciesId, otherId)}
    </p>
  {/if}
</div>
