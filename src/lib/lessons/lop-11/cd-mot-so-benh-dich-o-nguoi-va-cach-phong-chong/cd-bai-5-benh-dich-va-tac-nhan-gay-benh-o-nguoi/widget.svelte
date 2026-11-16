<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import { AGENT_BINS, DISEASE_CARDS } from './engine.js';

  const cards = shuffled(DISEASE_CARDS, 5);
</script>

<CardSorter
  {cards}
  bins={AGENT_BINS}
  label="Xếp mỗi bệnh vào nhóm tác nhân gây bệnh: virus, vi khuẩn, nấm hoặc kí sinh trùng"
  hintOnWrong
/>
