<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { NERVE_BINS, NERVE_CARDS } from './engine.js';

  const cards = shuffled(NERVE_CARDS, 17);
</script>

<CardSorter {cards} bins={NERVE_BINS} label="Xếp mỗi loài vào đúng dạng hệ thần kinh" hintOnWrong />
