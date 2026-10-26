<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { COMPARE_BINS, COMPARE_CARDS } from './engine.js';

  const cards = shuffled(COMPARE_CARDS, 25);
</script>

<CardSorter
  {cards}
  bins={COMPARE_BINS}
  label="Xếp đặc điểm vào quang hợp, hô hấp tế bào hoặc cả hai"
  hintOnWrong
/>
