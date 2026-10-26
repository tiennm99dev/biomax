<script>
  import DiagramHotspots from '#lib/domain/diagram-hotspots.svelte';
  import { LEAF_DIAGRAM } from './engine.js';
</script>

<DiagramHotspots diagram={LEAF_DIAGRAM} modes={['learn', 'name']} seed={22} />
