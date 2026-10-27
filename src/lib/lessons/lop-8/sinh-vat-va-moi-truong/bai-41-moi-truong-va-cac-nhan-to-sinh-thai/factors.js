/**
 * Cards for sorting the factors around a green plant into abiotic (vô sinh)
 * and biotic (hữu sinh) ecological factors. People belong to the biotic
 * group, as the textbook counts them, but act on it the most.
 */

/** @type {import('#lib/core/card-sorter.js').SortBin[]} */
export const FACTOR_BINS = [
  { id: 'vo-sinh', label: 'Nhân tố vô sinh' },
  { id: 'huu-sinh', label: 'Nhân tố hữu sinh' },
];

/** @type {import('#lib/core/card-sorter.js').SortCard[]} */
export const FACTOR_CARDS = [
  {
    id: 'anh-sang',
    label: 'Ánh sáng mặt trời',
    bin: 'vo-sinh',
    why: 'Ánh sáng không phải sinh vật: là nhân tố vô sinh.',
  },
  {
    id: 'nhiet-do',
    label: 'Nhiệt độ không khí',
    bin: 'vo-sinh',
    why: 'Nhiệt độ là điều kiện vật lí của môi trường: nhân tố vô sinh.',
  },
  {
    id: 'nuoc',
    label: 'Nước trong đất',
    bin: 'vo-sinh',
    why: 'Nước, độ ẩm thuộc nhóm nhân tố vô sinh.',
  },
  {
    id: 'gio',
    label: 'Gió',
    bin: 'vo-sinh',
    why: 'Gió là nhân tố vô sinh (khí hậu).',
  },
  {
    id: 'dat',
    label: 'Đất và chất khoáng',
    bin: 'vo-sinh',
    why: 'Đất, chất khoáng là thành phần không sống của môi trường.',
  },
  {
    id: 'sau',
    label: 'Sâu ăn lá',
    bin: 'huu-sinh',
    why: 'Sâu là sinh vật: nhân tố hữu sinh.',
  },
  {
    id: 'ong',
    label: 'Ong hút mật, thụ phấn',
    bin: 'huu-sinh',
    why: 'Ong là sinh vật tác động tới cây: nhân tố hữu sinh.',
  },
  {
    id: 'co-dai',
    label: 'Cỏ dại mọc cạnh cây',
    bin: 'huu-sinh',
    why: 'Cỏ dại là sinh vật cạnh tranh ánh sáng, nước với cây: nhân tố hữu sinh.',
  },
  {
    id: 'nam',
    label: 'Nấm, vi khuẩn trong đất',
    bin: 'huu-sinh',
    why: 'Nấm, vi khuẩn là sinh vật: nhân tố hữu sinh.',
  },
  {
    id: 'con-nguoi',
    label: 'Con người tưới nước, bón phân',
    bin: 'huu-sinh',
    why: 'Con người là sinh vật nên thuộc nhân tố hữu sinh; đây là nhân tố tác động mạnh nhất tới môi trường và sinh vật.',
  },
];
