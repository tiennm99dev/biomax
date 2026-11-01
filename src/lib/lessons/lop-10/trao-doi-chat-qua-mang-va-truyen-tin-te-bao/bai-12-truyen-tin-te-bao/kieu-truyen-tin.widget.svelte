<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { FORMS, FORM_CARDS } from './engine.js';

  const cards = shuffled(FORM_CARDS, 12);
</script>

<CardSorter {cards} bins={FORMS} label="Xếp mỗi tình huống vào hình thức truyền tin" hintOnWrong />
