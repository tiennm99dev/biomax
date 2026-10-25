<script module>
  export const title = 'Sơ đồ phả hệ';
</script>

<script>
  import PedigreeChart from './pedigree-chart.svelte';

  /** @type {import('./pedigree.js').Pedigree} */
  let family = $state({
    people: [
      { id: 'i1', sex: 'M', affected: false },
      { id: 'i2', sex: 'F', affected: false },
      { id: 'i3', sex: 'M', affected: true },
      { id: 'i4', sex: 'F', affected: false },
      { id: 'ii1', sex: 'M', affected: false, father: 'i1', mother: 'i2' },
      { id: 'ii2', sex: 'F', affected: true, father: 'i1', mother: 'i2' },
      { id: 'ii3', sex: 'F', affected: false, father: 'i3', mother: 'i4' },
      { id: 'ii4', sex: 'M', affected: false },
      { id: 'iii1', sex: 'M', affected: true, father: 'ii4', mother: 'ii3' },
      { id: 'iii2', sex: 'F', affected: false, father: 'ii4', mother: 'ii3' },
    ],
  });
  const affected = $derived(family.people.filter((p) => p.affected).length);
</script>

<PedigreeChart bind:pedigree={family} editable trait="bệnh bạch tạng" />
<p class="text-sm text-slate-600 tabular-nums">{affected} người mắc bệnh</p>
<PedigreeChart
  pedigree={{
    people: [
      { id: 'f', sex: 'M', affected: false },
      { id: 'm', sex: 'F', affected: false },
      { id: 's1', sex: 'M', affected: true, father: 'f', mother: 'm' },
      { id: 'd1', sex: 'F', affected: false, father: 'f', mother: 'm' },
      { id: 's2', sex: 'M', affected: false, father: 'f', mother: 'm' },
    ],
  }}
  analysis={false}
  trait="bệnh máu khó đông"
  label="Phả hệ hai thế hệ, không phân tích"
/>
