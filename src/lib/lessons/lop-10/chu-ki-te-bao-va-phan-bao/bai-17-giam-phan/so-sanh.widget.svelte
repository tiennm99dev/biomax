<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { COMPARE_BINS, COMPARE_CARDS } from './engine.js';

  const cards = shuffled(COMPARE_CARDS, 17);
</script>

<CardSorter
  {cards}
  bins={COMPARE_BINS}
  label="Xếp mỗi đặc điểm vào nguyên phân, giảm phân hay cả hai"
  hintOnWrong
/>
