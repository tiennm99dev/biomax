<script>
  import SegmentedControl from '#lib/core/segmented-control.svelte';
  import DiagramHotspots from '#lib/domain/diagram-hotspots.svelte';
  import { CELL_DIAGRAMS, CELL_TYPES } from './engine.js';

  /** @type {import('./engine.js').CellType} */
  let type = $state('dong-vat');
  /** @type {'learn' | 'name' | 'find'} */
  let mode = $state('learn');

  const NOTES = {
    'nhan-so':
      'Tế bào nhân sơ chưa có nhân hoàn chỉnh: vật chất di truyền nằm ở vùng nhân, không có màng bao bọc.',
    'dong-vat':
      'Tế bào động vật là tế bào nhân thực: nhân có màng bao bọc. Không có thành tế bào, không có lục lạp.',
    'thuc-vat':
      'Tế bào thực vật cũng là tế bào nhân thực, nhưng có thêm thành tế bào bằng cellulose, lục lạp và không bào lớn.',
  };
</script>

<div class="space-y-4">
  <SegmentedControl
    label="Loại tế bào"
    options={CELL_TYPES}
    bind:value={type}
    onchange={() => (mode = 'learn')}
  />
  <p class="text-sm text-slate-700" aria-live="polite">{NOTES[type]}</p>
  {#key type}
    <DiagramHotspots
      diagram={CELL_DIAGRAMS[type]}
      bind:mode
      seed={CELL_TYPES.findIndex((t) => t.value === type) + 2}
    />
  {/key}
</div>
