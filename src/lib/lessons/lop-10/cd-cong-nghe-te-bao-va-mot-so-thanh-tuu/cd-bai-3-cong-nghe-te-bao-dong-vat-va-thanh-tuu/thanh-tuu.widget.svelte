<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { ACHIEVEMENTS, BINS } from './engine.js';

  const cards = shuffled(ACHIEVEMENTS, 7);
</script>

<CardSorter {cards} bins={BINS} label="Xếp các thành tựu vào đúng nhóm" hintOnWrong />
