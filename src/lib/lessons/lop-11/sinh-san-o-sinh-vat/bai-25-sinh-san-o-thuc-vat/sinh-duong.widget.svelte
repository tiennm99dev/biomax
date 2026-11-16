<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { ORGAN_BINS, ORGAN_CARDS } from './engine.js';

  const cards = shuffled(ORGAN_CARDS, 25);
</script>

<CardSorter
  {cards}
  bins={ORGAN_BINS}
  label="Xếp mỗi cách mọc cây mới theo bộ phận tạo ra cây con"
  hintOnWrong
/>
