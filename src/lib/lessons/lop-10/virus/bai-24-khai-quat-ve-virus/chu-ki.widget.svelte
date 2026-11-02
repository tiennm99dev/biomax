<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { CYCLE_BINS, CYCLE_CARDS } from './engine.js';

  const cards = shuffled(CYCLE_CARDS, 24);
</script>

<CardSorter {cards} bins={CYCLE_BINS} label="Xếp đặc điểm vào hai chu kì" hintOnWrong />
