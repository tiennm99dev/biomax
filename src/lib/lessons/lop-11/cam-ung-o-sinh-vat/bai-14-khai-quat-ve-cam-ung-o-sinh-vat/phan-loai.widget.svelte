<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { KIND_BINS, KIND_CARDS } from './engine.js';

  const cards = shuffled(KIND_CARDS, 14);
</script>

<CardSorter {cards} bins={KIND_BINS} label="Xếp mỗi hiện tượng vào đúng nhóm" hintOnWrong />
