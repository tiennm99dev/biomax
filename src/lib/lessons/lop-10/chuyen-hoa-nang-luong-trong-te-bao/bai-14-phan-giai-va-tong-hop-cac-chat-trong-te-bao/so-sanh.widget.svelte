<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { AUTOTROPH_BINS, AUTOTROPH_CARDS } from './engine.js';

  const cards = shuffled(AUTOTROPH_CARDS, 14);
</script>

<CardSorter
  {cards}
  bins={AUTOTROPH_BINS}
  label="Xếp mỗi sinh vật vào cách tổng hợp chất hữu cơ của nó"
  hintOnWrong
/>
