<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { ROLE_BINS, ROLE_CARDS } from './engine.js';

  const cards = shuffled(ROLE_CARDS, 22);
</script>

<CardSorter {cards} bins={ROLE_BINS} label="Xếp các việc làm của vi sinh vật" hintOnWrong />
