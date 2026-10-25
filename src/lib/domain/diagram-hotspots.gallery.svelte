<script module>
  export const title = 'Sơ đồ bấm gọi tên';
</script>

<script>
  import DiagramHotspots from './diagram-hotspots.svelte';

  /** @type {'learn' | 'name' | 'find'} */
  let mode = $state('learn');
  /** @type {string[]} */
  let found = $state([]);
</script>

<DiagramHotspots diagram="te-bao-dong-vat" bind:mode onsolved={(id) => (found = [...found, id])} />
<p class="text-sm text-slate-600">mode = {mode} · đã giải: {found.join(', ') || '—'}</p>
<DiagramHotspots diagram="te-bao-thuc-vat" mode="name" seed={3} />
<DiagramHotspots diagram="phan-tu-nuoc" modes={['learn', 'name']} />
<DiagramHotspots diagram="tim-nguoi" mode="find" modes={['find']} seed={5} />
