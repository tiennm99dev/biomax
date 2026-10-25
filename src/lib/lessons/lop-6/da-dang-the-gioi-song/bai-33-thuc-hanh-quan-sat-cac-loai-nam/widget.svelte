<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import DiagramHotspots from '#lib/domain/diagram-hotspots.svelte';
  import { BREAD_MOULD, MUSHROOM } from './engine.js';

  let which = $state('nam-mu');
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Mẫu quan sát"
    options={[
      { value: 'nam-mu', label: 'Nấm mũ (nấm rơm, nấm sò)' },
      { value: 'moc-den', label: 'Mốc đen bánh mì' },
    ]}
    bind:value={which}
  />
  {#key which}
    <DiagramHotspots diagram={which === 'nam-mu' ? MUSHROOM : BREAD_MOULD} seed={33} />
  {/key}
</div>
