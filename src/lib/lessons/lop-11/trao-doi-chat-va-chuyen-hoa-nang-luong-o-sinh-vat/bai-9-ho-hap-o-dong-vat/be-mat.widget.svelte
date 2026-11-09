<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { SURFACE_BINS, SURFACE_CARDS } from './engine.js';

  const cards = shuffled(SURFACE_CARDS, 9);
</script>

<CardSorter
  {cards}
  bins={SURFACE_BINS}
  label="Xếp mỗi loài vào đúng hình thức trao đổi khí"
  hintOnWrong
/>
