<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { MOTION_BINS, MOTION_CARDS } from './engine.js';

  const cards = shuffled(MOTION_CARDS, 15);
</script>

<CardSorter
  {cards}
  bins={MOTION_BINS}
  label="Xếp mỗi hiện tượng vào đúng hình thức cảm ứng"
  hintOnWrong
/>
