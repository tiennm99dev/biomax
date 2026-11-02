<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { LEAFLET_BINS, LEAFLET_CARDS } from './engine.js';

  const cards = shuffled(LEAFLET_CARDS, 26);
</script>

<CardSorter {cards} bins={LEAFLET_BINS} label="Chọn nội dung cho tờ rơi" hintOnWrong />
