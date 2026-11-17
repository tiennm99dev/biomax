<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { GROUPS, sortCards } from './engine.js';

  const cards = sortCards();
</script>

<CardSorter
  {cards}
  bins={GROUPS}
  label="Xếp các biện pháp vào nhóm biện pháp kiểm soát sinh học"
  hintOnWrong
/>
