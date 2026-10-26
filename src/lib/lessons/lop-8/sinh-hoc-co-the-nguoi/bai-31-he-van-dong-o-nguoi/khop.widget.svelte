<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { JOINT_BINS, JOINT_CARDS } from './engine.js';

  const cards = shuffled(JOINT_CARDS, 31);
</script>

<CardSorter {cards} bins={JOINT_BINS} label="Xếp mỗi khớp vào đúng loại khớp" hintOnWrong />
