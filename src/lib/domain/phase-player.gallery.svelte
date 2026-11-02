<script module>
  export const title = 'Các kì phân bào';
</script>

<script>
  import { mitosisFrames } from './frames.js';
  import PhasePlayer from './phase-player.svelte';

  const frames = mitosisFrames(false);
</script>

<PhasePlayer {frames} width={360} height={260} label="Các kì của nguyên phân" />
