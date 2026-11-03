<script>
  import DiagramHotspots from '#lib/domain/diagram-hotspots.svelte';
  import { ROOT_DIAGRAM } from './engine.js';
</script>

<DiagramHotspots diagram={ROOT_DIAGRAM} modes={['learn', 'name']} seed={5} />
