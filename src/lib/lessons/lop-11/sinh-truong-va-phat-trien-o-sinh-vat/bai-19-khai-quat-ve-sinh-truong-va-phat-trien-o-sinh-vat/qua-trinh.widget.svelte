<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { PROCESS_BINS, PROCESS_CARDS } from './engine.js';

  const cards = shuffled(PROCESS_CARDS, 19);
</script>

<CardSorter
  {cards}
  bins={PROCESS_BINS}
  label="Xếp mỗi hiện tượng vào quá trình của sự phát triển mà nó thể hiện"
  hintOnWrong
/>
