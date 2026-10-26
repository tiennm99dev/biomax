/** Gas-exchange organs of animal groups, as cards for the card sorter. */

/** @type {import('#lib/core/card-sorter.js').SortBin[]} */
export const ORGAN_BINS = [
  { id: 'be-mat', label: 'Bề mặt cơ thể' },
  { id: 'ong-khi', label: 'Hệ thống ống khí' },
  { id: 'mang', label: 'Mang' },
  { id: 'phoi', label: 'Phổi' },
];

/** @type {import('#lib/core/card-sorter.js').SortCard[]} */
export const ORGAN_CARDS = [
  {
    id: 'trung-bien-hinh',
    label: 'Trùng biến hình',
    bin: 'be-mat',
    why: 'Động vật đơn bào trao đổi khí trực tiếp qua bề mặt tế bào.',
  },
  {
    id: 'thuy-tuc',
    label: 'Thuỷ tức',
    bin: 'be-mat',
    why: 'Ruột khoang trao đổi khí qua bề mặt cơ thể.',
  },
  {
    id: 'giun-dat',
    label: 'Giun đất',
    bin: 'be-mat',
    why: 'Giun đất trao đổi khí qua bề mặt cơ thể (da luôn ẩm).',
  },
  {
    id: 'chau-chau',
    label: 'Châu chấu',
    bin: 'ong-khi',
    why: 'Côn trùng trao đổi khí bằng hệ thống ống khí, mở ra ngoài qua các lỗ thở.',
  },
  {
    id: 'ruoi',
    label: 'Ruồi',
    bin: 'ong-khi',
    why: 'Ruồi là côn trùng, trao đổi khí bằng hệ thống ống khí.',
  },
  {
    id: 'ca-chep',
    label: 'Cá chép',
    bin: 'mang',
    why: 'Cá sống dưới nước, lấy oxygen hoà tan trong nước qua mang.',
  },
  { id: 'tom', label: 'Tôm', bin: 'mang', why: 'Tôm sống dưới nước, trao đổi khí bằng mang.' },
  {
    id: 'trai',
    label: 'Trai sông',
    bin: 'mang',
    why: 'Trai sống dưới nước, trao đổi khí bằng mang.',
  },
  {
    id: 'than-lan',
    label: 'Thằn lằn',
    bin: 'phoi',
    why: 'Bò sát trao đổi khí bằng phổi.',
  },
  { id: 'chim', label: 'Chim bồ câu', bin: 'phoi', why: 'Chim trao đổi khí bằng phổi.' },
  { id: 'meo', label: 'Mèo', bin: 'phoi', why: 'Thú trao đổi khí bằng phổi.' },
  {
    id: 'ca-voi',
    label: 'Cá voi',
    bin: 'phoi',
    why: 'Cá voi là thú sống dưới nước, thở bằng phổi nên phải ngoi lên mặt nước để lấy không khí.',
  },
];
