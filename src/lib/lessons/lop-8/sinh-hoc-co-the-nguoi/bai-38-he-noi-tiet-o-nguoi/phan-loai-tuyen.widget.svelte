<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { GLAND_BINS, GLAND_CARDS } from './engine.js';

  const cards = shuffled(GLAND_CARDS, 38);
</script>

<CardSorter
  {cards}
  bins={GLAND_BINS}
  label="Xếp mỗi tuyến vào nhóm tuyến nội tiết, ngoại tiết hoặc vừa nội tiết vừa ngoại tiết"
  hintOnWrong
/>
