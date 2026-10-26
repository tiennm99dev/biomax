<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { NERVE_BINS, NERVE_CARDS } from './engine.js';

  const cards = shuffled(NERVE_CARDS, 37);
</script>

<CardSorter
  {cards}
  bins={NERVE_BINS}
  label="Xếp mỗi bộ phận vào phần trung ương hoặc ngoại biên của hệ thần kinh"
  hintOnWrong
/>
