<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { ORGAN_CARDS, SYSTEM_BINS } from './engine.js';

  const cards = shuffled(ORGAN_CARDS, 30);
</script>

<CardSorter {cards} bins={SYSTEM_BINS} label="Xếp mỗi cơ quan vào hệ cơ quan của nó" hintOnWrong />
