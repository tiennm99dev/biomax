<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { BEHAVIOUR_BINS, BEHAVIOUR_CARDS } from './engine.js';

  const cards = shuffled(BEHAVIOUR_CARDS, 33);
</script>

<CardSorter
  {cards}
  bins={BEHAVIOUR_BINS}
  label="Xếp mỗi tập tính vào nhóm tập tính bẩm sinh hoặc tập tính học được"
  hintOnWrong
/>
