<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { FORM_BINS, FORM_CARDS } from './engine.js';

  const cards = shuffled(FORM_CARDS, 8);
</script>

<CardSorter {cards} bins={FORM_BINS} label="Xếp mỗi thẻ vào đúng hình thức tiêu hoá" hintOnWrong />
