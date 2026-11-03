<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { GROUP_BINS, GROUP_CARDS } from './engine.js';

  const cards = shuffled(GROUP_CARDS, 3);
</script>

<CardSorter {cards} bins={GROUP_BINS} label="Xếp mỗi cây vào nhóm thực vật đúng" hintOnWrong />
