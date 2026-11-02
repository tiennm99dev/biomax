<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { ENZYME_BINS, FIELD_BINS, deck } from './engine.js';

  const options = [
    { value: 'enzyme', label: 'Ghép sản phẩm với enzyme' },
    { value: 'field', label: 'Xếp theo lĩnh vực' },
  ];

  let mode = $state('enzyme');

  const cards = $derived(shuffled(deck(mode === 'enzyme' ? 'enzyme' : 'field'), 9));
  const bins = $derived(mode === 'enzyme' ? ENZYME_BINS : FIELD_BINS);
</script>

<div class="space-y-3">
  <SegmentedControl label="Kiểu sắp xếp" {options} bind:value={mode} />
  {#key mode}
    <CardSorter
      {cards}
      {bins}
      label={mode === 'enzyme'
        ? 'Ghép mỗi sản phẩm với enzyme tạo nên nó'
        : 'Xếp mỗi ứng dụng enzyme vào đúng lĩnh vực'}
      hintOnWrong
    />
  {/key}
</div>
