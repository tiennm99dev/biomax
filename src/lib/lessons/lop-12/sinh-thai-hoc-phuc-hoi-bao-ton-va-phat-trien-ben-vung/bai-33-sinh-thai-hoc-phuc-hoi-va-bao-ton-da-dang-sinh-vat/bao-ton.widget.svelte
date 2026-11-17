<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';

  const bins = [
    { id: 'tai-cho', label: 'Bảo tồn tại chỗ' },
    { id: 'chuyen-cho', label: 'Bảo tồn chuyển chỗ' },
  ];

  const cards = shuffled(
    [
      {
        id: 'vqg',
        label: 'Thành lập Vườn quốc gia Cúc Phương để bảo vệ rừng mưa nhiệt đới',
        bin: 'tai-cho',
        why: 'Các loài được bảo vệ ngay trong môi trường sống tự nhiên của chúng: bảo tồn tại chỗ.',
      },
      {
        id: 'ramsar',
        label: 'Bảo vệ vùng đất ngập nước Xuân Thuỷ, nơi chim di cư dừng chân',
        bin: 'tai-cho',
        why: 'Khu Ramsar bảo vệ cả hệ sinh thái đất ngập nước tại chỗ, nơi các loài chim sống và kiếm ăn.',
      },
      {
        id: 'du-tru',
        label: 'Khu dự trữ sinh quyển rừng ngập mặn Cần Giờ',
        bin: 'tai-cho',
        why: 'Khu dự trữ sinh quyển giữ nguyên hệ sinh thái ở nơi nó tồn tại: bảo tồn tại chỗ.',
      },
      {
        id: 'khu-bt',
        label: 'Khoanh vùng bảo vệ nơi sống của voọc mông trắng ở Vân Long',
        bin: 'tai-cho',
        why: 'Voọc được bảo vệ ngay trong sinh cảnh núi đá vôi, đầm nước tự nhiên của chúng.',
      },
      {
        id: 'cuu-ho',
        label: 'Nuôi gấu bị buôn bán trái phép tại trung tâm cứu hộ',
        bin: 'chuyen-cho',
        why: 'Gấu được đưa ra khỏi nơi sống tự nhiên tới trung tâm cứu hộ để chăm sóc: bảo tồn chuyển chỗ.',
      },
      {
        id: 'vuon-thu',
        label: 'Nuôi và cho sinh sản loài thú quý hiếm trong vườn thú',
        bin: 'chuyen-cho',
        why: 'Vườn thú giữ sinh vật bên ngoài môi trường sống tự nhiên: bảo tồn chuyển chỗ.',
      },
      {
        id: 'hat-giong',
        label: 'Lưu giữ hạt giống các giống lúa cổ trong ngân hàng hạt giống',
        bin: 'chuyen-cho',
        why: 'Ngân hàng hạt giống, ngân hàng gene lưu giữ nguồn gene ngoài tự nhiên: bảo tồn chuyển chỗ.',
      },
      {
        id: 'vuon-tv',
        label: 'Trồng các loài lan quý trong vườn thực vật',
        bin: 'chuyen-cho',
        why: 'Cây được đưa về trồng, chăm sóc ở vườn thực vật, ngoài nơi sống tự nhiên.',
      },
      {
        id: 'phoi',
        label: 'Bảo quản tinh trùng, phôi của loài nguy cấp trong nitrogen lỏng',
        bin: 'chuyen-cho',
        why: 'Lưu giữ vật liệu di truyền trong phòng thí nghiệm: bảo tồn chuyển chỗ.',
      },
    ],
    33,
  );
</script>

<CardSorter {cards} {bins} label="Phân loại các hình thức bảo tồn" hintOnWrong />
