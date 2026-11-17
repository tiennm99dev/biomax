<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { SORT_BINS, sortCards } from './engine.js';
</script>

<CardSorter
  cards={sortCards()}
  bins={SORT_BINS}
  label="Xếp thành tựu vào nhóm lí thuyết hoặc ứng dụng"
  hintOnWrong
/>
