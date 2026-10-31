<script module>
  export const title = 'Đậu Hà Lan';
</script>

<script>
  import Pea from './pea.svelte';

  /** @type {Array<{ label: string, props: import('svelte').ComponentProps<typeof Pea> }>} */
  const items = [
    { label: 'Hạt vàng, trơn', props: { kind: 'seed', color: 'vang', shape: 'tron' } },
    { label: 'Hạt xanh, nhăn', props: { kind: 'seed', color: 'xanh', shape: 'nhan' } },
    { label: 'Hoa tím', props: { kind: 'flower', color: 'tim' } },
    { label: 'Hoa trắng', props: { kind: 'flower', color: 'trang' } },
    { label: 'Thân cao', props: { kind: 'plant', tall: true } },
    { label: 'Thân thấp', props: { kind: 'plant', tall: false } },
  ];
</script>

<ul class="flex flex-wrap gap-4">
  {#each items as item (item.label)}
    <li class="flex flex-col items-center gap-1 text-sm text-slate-600">
      <Pea {...item.props} size={64} />
      {item.label}
    </li>
  {/each}
</ul>
