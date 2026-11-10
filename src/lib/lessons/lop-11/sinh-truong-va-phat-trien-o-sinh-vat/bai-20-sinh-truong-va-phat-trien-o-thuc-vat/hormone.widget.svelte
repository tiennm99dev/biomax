<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { HORMONE_BINS, HORMONE_CARDS } from './engine.js';

  const cards = shuffled(HORMONE_CARDS, 20);
</script>

<CardSorter
  {cards}
  bins={HORMONE_BINS}
  label="Xếp mỗi tác dụng hoặc ứng dụng vào hormone thực vật gây ra nó"
  hintOnWrong
/>
