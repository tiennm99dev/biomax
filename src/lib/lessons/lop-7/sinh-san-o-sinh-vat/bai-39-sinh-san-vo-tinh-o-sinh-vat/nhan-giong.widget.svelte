<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { METHOD_BINS, METHOD_CARDS } from './engine.js';

  const cards = shuffled(METHOD_CARDS, 7);
</script>

<CardSorter
  {cards}
  bins={METHOD_BINS}
  label="Xếp mỗi cách làm vào đúng phương pháp nhân giống vô tính ở thực vật"
  hintOnWrong
/>
