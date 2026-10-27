<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { FACTOR_BINS, FACTOR_CARDS } from './factors.js';

  const cards = shuffled(FACTOR_CARDS, 41);
</script>

<CardSorter
  {cards}
  bins={FACTOR_BINS}
  label="Xếp các nhân tố quanh một cây xanh vào nhóm nhân tố sinh thái"
  hintOnWrong
/>
