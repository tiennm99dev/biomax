<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { FACTOR_BINS, FACTOR_CARDS } from './engine.js';

  const cards = shuffled(FACTOR_CARDS, 41);
</script>

<CardSorter
  {cards}
  bins={FACTOR_BINS}
  label="Xếp mỗi yếu tố ảnh hưởng đến sinh sản vào nhóm yếu tố bên trong hoặc bên ngoài"
  hintOnWrong
/>
