<script module>
  export const title = 'Bảng Punnett';
</script>

<script>
  import PunnettSquare from './punnett-square.svelte';

  let mother = $state('AaBb');
  let father = $state('AaBb');
</script>

<PunnettSquare
  bind:mother
  bind:father
  traits={{ A: 'hạt vàng', a: 'hạt xanh', B: 'vỏ trơn', b: 'vỏ nhăn' }}
/>
<p class="font-mono text-sm text-slate-600">{mother} × {father}</p>
<PunnettSquare
  mother="XHXh"
  father="XHY"
  editable={false}
  traits={{ H: 'bình thường', h: 'máu khó đông' }}
  label="Bệnh máu khó đông, chỉ xem"
/>
<PunnettSquare
  mother="Aa"
  father="Aa"
  editable={false}
  dominance="incomplete"
  traits={{ A: 'hoa đỏ', Aa: 'hoa hồng', a: 'hoa trắng' }}
  label="Trội không hoàn toàn"
/>
