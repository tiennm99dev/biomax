<script>
  import PedigreeChart from '#lib/domain/pedigree-chart.svelte';

  /** A family with red–green colour blindness: affected men, carrier women. */
  /** @type {import('#lib/domain/pedigree.js').Pedigree} */
  let family = $state({
    people: [
      { id: 'i1', sex: 'M', affected: false },
      { id: 'i2', sex: 'F', affected: false },
      { id: 'ii1', sex: 'M', affected: true, father: 'i1', mother: 'i2' },
      { id: 'ii2', sex: 'F', affected: false, father: 'i1', mother: 'i2' },
      { id: 'ii3', sex: 'M', affected: false },
      { id: 'ii4', sex: 'M', affected: false, father: 'i1', mother: 'i2' },
      { id: 'iii1', sex: 'M', affected: true, father: 'ii3', mother: 'ii2' },
      { id: 'iii2', sex: 'F', affected: false, father: 'ii3', mother: 'ii2' },
      { id: 'iii3', sex: 'M', affected: false, father: 'ii3', mother: 'ii2' },
    ],
  });
</script>

<div class="space-y-2 rounded-xl border border-slate-200 bg-white p-3">
  <p class="text-sm font-semibold text-slate-700">Phả hệ một gia đình có người mù màu đỏ – lục</p>
  <p class="text-sm text-slate-600">
    Trong gia đình này chỉ nam giới mắc bệnh: allele gây bệnh từ người bà (I.2) truyền qua con gái
    (II.2), người mang gene nhưng không biểu hiện, sang cháu trai (III.1). Chạm vào từng người để
    xem kiểu gene có thể có; đánh dấu lại một người là mắc hoặc không mắc bệnh để thử một gia đình
    khác và xem kiểu di truyền nào còn phù hợp.
  </p>
  <PedigreeChart bind:pedigree={family} editable trait="bệnh mù màu" />
</div>
