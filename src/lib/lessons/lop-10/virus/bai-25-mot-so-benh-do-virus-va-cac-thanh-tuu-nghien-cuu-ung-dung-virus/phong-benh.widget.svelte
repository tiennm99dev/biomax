<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { PREVENTION_BINS, PREVENTION_CARDS } from './engine.js';

  const cards = shuffled(PREVENTION_CARDS, 25);
</script>

<CardSorter
  {cards}
  bins={PREVENTION_BINS}
  label="Xếp các biện pháp phòng bệnh theo từng bệnh"
  hintOnWrong
/>
