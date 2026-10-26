<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { CHANGE_BINS, CHANGE_CARDS } from './engine.js';

  const cards = shuffled(CHANGE_CARDS, 36);
</script>

<CardSorter
  {cards}
  bins={CHANGE_BINS}
  label="Xếp mỗi biến đổi vào nhóm thể hiện rõ nhất sự sinh trưởng hoặc sự phát triển"
  hintOnWrong
/>
