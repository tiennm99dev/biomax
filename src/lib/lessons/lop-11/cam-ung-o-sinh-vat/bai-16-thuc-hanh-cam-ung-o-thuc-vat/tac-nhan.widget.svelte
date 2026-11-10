<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { AGENT_BINS, AGENT_CARDS } from './engine.js';

  const cards = shuffled(AGENT_CARDS, 16);
</script>

<CardSorter
  {cards}
  bins={AGENT_BINS}
  label="Xếp mỗi hiện tượng quan sát được theo tác nhân kích thích"
  hintOnWrong
/>
