<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';

  /** @type {import('#lib/core/card-sorter.js').SortBin[]} */
  const BINS = [
    { id: 'tuong-dong', label: 'Cơ quan tương đồng' },
    { id: 'tuong-tu', label: 'Cơ quan tương tự' },
    { id: 'thoai-hoa', label: 'Cơ quan thoái hoá' },
  ];

  /** @type {import('#lib/core/card-sorter.js').SortCard[]} */
  const CARDS = [
    {
      id: 'chi-truoc',
      label: 'Tay người và vây ngực cá voi',
      bin: 'tuong-dong',
      why: 'Cùng gồm xương cánh tay, cẳng tay, cổ tay, bàn tay và ngón, thừa hưởng từ tổ tiên chung.',
    },
    {
      id: 'canh-doi-chim',
      label: 'Cánh dơi và cánh chim (bộ xương cánh)',
      bin: 'tuong-dong',
      why: 'Bộ xương cánh của dơi và chim đều là chi trước của động vật có xương sống, cùng nguồn gốc.',
    },
    {
      id: 'tuyen-noc',
      label: 'Tuyến nọc độc của rắn và tuyến nước bọt của thú',
      bin: 'tuong-dong',
      why: 'Tuyến nọc độc là tuyến nước bọt biến đổi: cùng nguồn gốc, khác chức năng.',
    },
    {
      id: 'canh-con-trung',
      label: 'Cánh côn trùng và cánh dơi',
      bin: 'tuong-tu',
      why: 'Cùng chức năng bay nhưng cánh côn trùng mọc ra từ lớp vỏ kitin ở mặt lưng, không có xương; khác nguồn gốc.',
    },
    {
      id: 'mang',
      label: 'Mang cá và mang tôm',
      bin: 'tuong-tu',
      why: 'Cùng chức năng hô hấp trong nước nhưng có nguồn gốc khác nhau: tiến hoá hội tụ.',
    },
    {
      id: 'chan-chui',
      label: 'Chân chuột chũi và chân dế chũi',
      bin: 'tuong-tu',
      why: 'Cùng hình dạng đào đất nhưng một bên là chi của thú, một bên là chân của côn trùng.',
    },
    {
      id: 'ruot-thua',
      label: 'Ruột thừa ở người',
      bin: 'thoai-hoa',
      why: 'Vết tích của manh tràng phát triển ở tổ tiên ăn thực vật, nay không còn chức năng tiêu hoá.',
    },
    {
      id: 'chi-sau-ca-voi',
      label: 'Xương chi sau của cá voi',
      bin: 'thoai-hoa',
      why: 'Vết tích chi sau của tổ tiên sống trên cạn, nay nằm trong cơ thể và không còn chức năng.',
    },
  ];

  const cards = shuffled(CARDS, 19);
</script>

<CardSorter
  {cards}
  bins={BINS}
  label="Xếp các cặp cơ quan vào nhóm cơ quan tương đồng, tương tự hoặc thoái hoá"
  hintOnWrong
/>
