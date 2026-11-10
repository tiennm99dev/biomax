<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { LEARNING_BINS, LEARNING_CARDS } from './engine.js';

  const cards = shuffled(LEARNING_CARDS, 18);
</script>

<CardSorter
  {cards}
  bins={LEARNING_BINS}
  label="Xếp mỗi ví dụ vào đúng hình thức học tập"
  hintOnWrong
/>
