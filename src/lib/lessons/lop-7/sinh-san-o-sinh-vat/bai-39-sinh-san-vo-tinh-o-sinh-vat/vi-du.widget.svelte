<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { EXAMPLE_CARDS, FORM_BINS } from './engine.js';

  const cards = shuffled(EXAMPLE_CARDS, 39);
</script>

<CardSorter
  {cards}
  bins={FORM_BINS}
  label="Xếp mỗi ví dụ vào đúng hình thức sinh sản vô tính"
  hintOnWrong
/>
