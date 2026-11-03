<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { ELEMENT_BINS, ELEMENT_CARDS } from './engine.js';

  const cards = shuffled(ELEMENT_CARDS, 17);
</script>

<CardSorter
  {cards}
  bins={ELEMENT_BINS}
  label="Xếp mỗi nguyên tố dinh dưỡng thiết yếu vào nhóm đa lượng hoặc vi lượng"
  hintOnWrong
/>
