<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { ORGAN_BINS, ORGAN_CARDS } from './organs.js';

  const cards = shuffled(ORGAN_CARDS, 28);
</script>

<CardSorter
  {cards}
  bins={ORGAN_BINS}
  label="Xếp mỗi loài động vật vào cơ quan trao đổi khí của nó"
  hintOnWrong
/>
