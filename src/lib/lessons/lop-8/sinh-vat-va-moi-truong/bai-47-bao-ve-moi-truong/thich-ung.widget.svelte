<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { CLIMATE_BINS, CLIMATE_CARDS } from './engine.js';

  const cards = shuffled(CLIMATE_CARDS, 47);
</script>

<CardSorter
  {cards}
  bins={CLIMATE_BINS}
  label="Xếp mỗi việc làm vào nhóm thích ứng hoặc giảm nhẹ biến đổi khí hậu"
  hintOnWrong
/>
