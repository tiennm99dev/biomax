<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { SUSTAIN_BINS, SUSTAIN_CARDS } from './engine.js';

  const cards = shuffled(SUSTAIN_CARDS, 11);
</script>

<CardSorter
  {cards}
  bins={SUSTAIN_BINS}
  label="Xếp các hoạt động hằng ngày theo ảnh hưởng đến phát triển bền vững"
  hintOnWrong
/>
