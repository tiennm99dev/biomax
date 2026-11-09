<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { ROUTE_BINS, ROUTE_CARDS } from './engine.js';

  const cards = shuffled(ROUTE_CARDS, 6);
</script>

<CardSorter {cards} bins={ROUTE_BINS} label="Xếp mỗi đặc điểm vào đúng con đường" hintOnWrong />
