<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { SOURCE_BINS, SOURCE_CARDS } from './engine.js';

  const cards = shuffled(SOURCE_CARDS, 5);
</script>

<CardSorter {cards} bins={SOURCE_BINS} label="Xếp mỗi enzyme vào đúng nguồn thu" hintOnWrong />
