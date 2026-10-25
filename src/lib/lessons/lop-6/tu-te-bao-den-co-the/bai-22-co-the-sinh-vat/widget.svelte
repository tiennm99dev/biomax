<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { ROUNDS } from './engine.js';

  let round = $state(/** @type {import('./engine.js').RoundId} */ ('song'));

  const NOTES = {
    song: 'Vật sống thực hiện được các quá trình sống: cảm ứng và vận động, sinh trưởng, sinh sản, hô hấp, bài tiết, dinh dưỡng. Vật không sống thì không.',
    'don-bao':
      'Cơ thể đơn bào chỉ gồm một tế bào; cơ thể đa bào gồm nhiều tế bào. Đừng chỉ dựa vào kích thước: cây rêu nhỏ vẫn là cơ thể đa bào.',
  };

  const current = $derived(ROUNDS[round]);
  const cards = $derived(shuffled(current.cards, round === 'song' ? 22 : 23));
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Vòng phân loại"
    options={[
      { value: 'song', label: 'Sống / không sống' },
      { value: 'don-bao', label: 'Đơn bào / đa bào' },
    ]}
    bind:value={round}
  />
  <p class="text-sm text-slate-700">{NOTES[round]}</p>
  {#key round}
    <CardSorter {cards} bins={current.bins} label={current.label} hintOnWrong />
  {/key}
</div>
