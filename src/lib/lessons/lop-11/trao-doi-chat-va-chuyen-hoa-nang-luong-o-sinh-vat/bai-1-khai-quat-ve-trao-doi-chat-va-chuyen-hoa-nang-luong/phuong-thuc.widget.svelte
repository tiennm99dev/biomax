<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { MODE_BINS, MODE_CARDS } from './engine.js';

  const cards = shuffled(MODE_CARDS, 11);
</script>

<CardSorter {cards} bins={MODE_BINS} label="Xếp mỗi sinh vật vào đúng phương thức" hintOnWrong />
