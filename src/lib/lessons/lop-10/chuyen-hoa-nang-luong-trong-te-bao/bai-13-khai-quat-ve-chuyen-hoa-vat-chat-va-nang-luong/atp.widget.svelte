<script>
  import DiagramHotspots from '#lib/domain/diagram-hotspots.svelte';
  import { ATP_DIAGRAM } from './engine.js';
</script>

<DiagramHotspots diagram={ATP_DIAGRAM} modes={['learn', 'name']} seed={13} />
