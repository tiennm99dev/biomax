<script>
  import DiagramHotspots from '#lib/domain/diagram-hotspots.svelte';
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import { ENVELOPED_DIAGRAM, PHAGE_DIAGRAM } from './engine.js';

  const options = [
    { value: 'vo-ngoai', label: 'Virus có vỏ ngoài' },
    { value: 'phage', label: 'Thực khuẩn thể (phage)' },
  ];

  let shown = $state('vo-ngoai');
  const diagram = $derived(shown === 'phage' ? PHAGE_DIAGRAM : ENVELOPED_DIAGRAM);
</script>

<div class="space-y-3">
  <SegmentedControl label="Loại virus" {options} bind:value={shown} />
  {#key shown}
    <DiagramHotspots {diagram} modes={['learn', 'name', 'find']} seed={24} />
  {/key}
</div>
