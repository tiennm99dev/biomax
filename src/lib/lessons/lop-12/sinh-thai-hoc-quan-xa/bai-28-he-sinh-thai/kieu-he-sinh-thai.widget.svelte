<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';

  const bins = [
    { id: 'tren-can', label: 'Tự nhiên trên cạn' },
    { id: 'duoi-nuoc', label: 'Tự nhiên dưới nước' },
    { id: 'nhan-tao', label: 'Nhân tạo' },
  ];

  const cards = shuffled(
    [
      {
        id: 'rung-mua',
        label: 'Rừng mưa nhiệt đới Cúc Phương',
        bin: 'tren-can',
        why: 'Hình thành tự nhiên, trên cạn: hệ sinh thái rừng mưa nhiệt đới.',
      },
      {
        id: 'sa-mac',
        label: 'Hoang mạc, sa mạc',
        bin: 'tren-can',
        why: 'Hệ sinh thái tự nhiên trên cạn, khô hạn, ít loài.',
      },
      {
        id: 'dong-reu',
        label: 'Đồng rêu hàn đới',
        bin: 'tren-can',
        why: 'Hệ sinh thái tự nhiên trên cạn ở vùng lạnh gần cực.',
      },
      {
        id: 'ran-san-ho',
        label: 'Rạn san hô',
        bin: 'duoi-nuoc',
        why: 'Hệ sinh thái tự nhiên dưới nước mặn, rất đa dạng.',
      },
      {
        id: 'ngap-man',
        label: 'Rừng ngập mặn Cần Giờ',
        bin: 'duoi-nuoc',
        why: 'Rừng ngập mặn ven biển được xếp vào nhóm hệ sinh thái dưới nước (nước mặn ven bờ).',
      },
      {
        id: 'song-suoi',
        label: 'Sông, suối',
        bin: 'duoi-nuoc',
        why: 'Hệ sinh thái tự nhiên nước ngọt (nước chảy).',
      },
      {
        id: 'ruong-lua',
        label: 'Ruộng lúa',
        bin: 'nhan-tao',
        why: 'Con người tạo ra và duy trì bằng giống, phân bón, nước tưới: nhân tạo.',
      },
      {
        id: 'ao-tom',
        label: 'Ao nuôi tôm',
        bin: 'nhan-tao',
        why: 'Do con người xây dựng, bổ sung thức ăn, quản lí: nhân tạo.',
      },
      {
        id: 'rung-keo',
        label: 'Rừng keo trồng',
        bin: 'nhan-tao',
        why: 'Rừng trồng một loài do con người tạo ra: hệ sinh thái nhân tạo.',
      },
      {
        id: 'thanh-pho',
        label: 'Thành phố',
        bin: 'nhan-tao',
        why: 'Hệ sinh thái đô thị do con người xây dựng, phụ thuộc vật chất, năng lượng từ bên ngoài.',
      },
    ],
    28,
  );
</script>

<CardSorter {cards} {bins} hintOnWrong label="Xếp mỗi hệ sinh thái vào đúng kiểu" />
