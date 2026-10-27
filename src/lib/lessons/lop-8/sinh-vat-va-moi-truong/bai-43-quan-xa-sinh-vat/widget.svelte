<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { RELATIONS, ROUNDS } from './engine.js';

  /** @type {'nhom' | 'kieu'} */
  let round = $state('nhom');
  const current = $derived(ROUNDS[round]);
  const cards = $derived(shuffled(current.cards, round === 'nhom' ? 43 : 44));
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Vòng phân loại"
    options={[
      { value: 'nhom', label: 'Hỗ trợ / đối địch' },
      { value: 'kieu', label: 'Kiểu quan hệ' },
    ]}
    bind:value={round}
  />
  {#if round === 'nhom'}
    <p class="text-sm text-slate-700">
      Quan hệ hỗ trợ: không loài nào bị hại. Quan hệ đối địch: ít nhất một loài bị hại hoặc các loài
      kìm hãm nhau.
    </p>
  {:else}
    <ul class="grid gap-1 text-sm text-slate-700 sm:grid-cols-2">
      {#each RELATIONS as r (r.id)}
        <li><span class="font-semibold">{r.label}</span>: {r.note}</li>
      {/each}
    </ul>
  {/if}
  {#key round}
    <CardSorter {cards} bins={current.bins} label={current.label} hintOnWrong />
  {/key}
</div>
