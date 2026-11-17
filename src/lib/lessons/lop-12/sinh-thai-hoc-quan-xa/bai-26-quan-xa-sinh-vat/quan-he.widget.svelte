<script>
  import CardSorter from '#lib/core/card-sorter.svelte';
  import { shuffled } from '#lib/core/card-sorter.js';

  const bins = [
    { id: 'cong-sinh', label: 'Cộng sinh' },
    { id: 'hop-tac', label: 'Hợp tác' },
    { id: 'hoi-sinh', label: 'Hội sinh' },
    { id: 'canh-tranh', label: 'Cạnh tranh' },
    { id: 'ki-sinh', label: 'Kí sinh – vật chủ' },
    { id: 'uc-che', label: 'Ức chế – cảm nhiễm' },
    { id: 'an-sinh-vat', label: 'Sinh vật ăn sinh vật' },
  ];

  const cards = shuffled(
    [
      {
        id: 'dia-y',
        label: 'Nấm và vi khuẩn lam (hoặc tảo) trong địa y',
        bin: 'cong-sinh',
        why: 'Hai loài gắn bó chặt chẽ, cùng có lợi và không thể tách rời: cộng sinh.',
      },
      {
        id: 'not-san',
        label: 'Vi khuẩn Rhizobium trong nốt sần rễ cây họ Đậu',
        bin: 'cong-sinh',
        why: 'Vi khuẩn cố định nitrogen cho cây, cây cung cấp chất hữu cơ; cả hai bắt buộc gắn bó: cộng sinh.',
      },
      {
        id: 'sao-trau',
        label: 'Chim sáo bắt chấy rận trên lưng trâu',
        bin: 'hop-tac',
        why: 'Cả hai cùng có lợi nhưng không bắt buộc phải sống cùng nhau: hợp tác.',
      },
      {
        id: 'phong-lan',
        label: 'Phong lan bám trên thân cây gỗ',
        bin: 'hoi-sinh',
        why: 'Phong lan có nơi sống, cây gỗ không được lợi cũng không bị hại: hội sinh.',
      },
      {
        id: 'ca-ep',
        label: 'Cá ép bám vào cá mập để di chuyển xa',
        bin: 'hoi-sinh',
        why: 'Cá ép có lợi, cá mập không bị ảnh hưởng: hội sinh.',
      },
      {
        id: 'lua-co',
        label: 'Lúa và cỏ dại trên cùng một ruộng',
        bin: 'canh-tranh',
        why: 'Hai loài tranh giành ánh sáng, nước, muối khoáng; cả hai đều bị hại: cạnh tranh.',
      },
      {
        id: 'to-hong',
        label: 'Dây tơ hồng sống trên tán cây',
        bin: 'ki-sinh',
        why: 'Tơ hồng hút chất dinh dưỡng của cây chủ để sống, cây chủ bị hại dần: kí sinh.',
      },
      {
        id: 'tao-giap',
        label: 'Tảo giáp nở hoa làm chết cá, tôm',
        bin: 'uc-che',
        why: 'Tảo giáp không ăn cá mà tiết chất độc vào môi trường, gây hại cho loài khác: ức chế – cảm nhiễm.',
      },
      {
        id: 'toi',
        label: 'Cây tỏi tiết chất ức chế vi sinh vật xung quanh',
        bin: 'uc-che',
        why: 'Tỏi có lợi hoặc không bị ảnh hưởng, các vi sinh vật bị hại do chất tiết: ức chế – cảm nhiễm.',
      },
      {
        id: 'ho-huou',
        label: 'Hổ săn bắt hươu',
        bin: 'an-sinh-vat',
        why: 'Hổ dùng hươu làm thức ăn: sinh vật ăn sinh vật (vật ăn thịt – con mồi).',
      },
      {
        id: 'nap-am',
        label: 'Cây nắp ấm bắt ruồi',
        bin: 'an-sinh-vat',
        why: 'Cây nắp ấm dùng ruồi làm nguồn dinh dưỡng: sinh vật ăn sinh vật.',
      },
    ],
    26,
  );
</script>

<CardSorter {cards} {bins} hintOnWrong label="Xếp mỗi ví dụ vào đúng kiểu quan hệ giữa các loài" />
