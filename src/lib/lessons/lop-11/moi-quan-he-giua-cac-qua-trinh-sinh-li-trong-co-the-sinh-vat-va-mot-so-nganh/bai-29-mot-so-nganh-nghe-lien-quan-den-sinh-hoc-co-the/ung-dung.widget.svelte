<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { APPLICATION_BINS, APPLICATION_CARDS } from './engine.js';

  const cards = shuffled(APPLICATION_CARDS, 29);
</script>

<CardSorter
  {cards}
  bins={APPLICATION_BINS}
  label="Xếp mỗi ứng dụng của sinh học cơ thể vào đúng lĩnh vực"
  hintOnWrong
/>
