<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import PhasePlayer from '../_shared/phase-player.svelte';
  import { mitosisFrames } from '../_shared/frames.js';

  const options = [
    { value: 'animal', label: 'Tế bào động vật' },
    { value: 'plant', label: 'Tế bào thực vật' },
  ];
  let kind = $state('animal');
  const frames = $derived(mitosisFrames(kind === 'plant'));
</script>

<div class="space-y-3">
  <SegmentedControl label="Loại tế bào" {options} bind:value={kind} />
  <PhasePlayer {frames} width={320} height={200} label="Các kì của nguyên phân" />
</div>
