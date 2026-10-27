<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { METHOD_BINS, METHOD_CARDS } from './engine.js';

  const cards = shuffled(METHOD_CARDS, 40);
</script>

<CardSorter
  {cards}
  bins={METHOD_BINS}
  label="Xếp mỗi biện pháp tránh thai vào nguyên tắc mà nó dựa vào"
  hintOnWrong
/>
