/**
 * Logic for the mitochondrion model of cell respiration, and the cards that
 * compare respiration with photosynthesis.
 *
 * The model counts glucose in "parts": each minute an activity needs some
 * parts broken down; each part broken down uses oxygen and gives carbon
 * dioxide, water and energy (ATP and heat). Without oxygen the
 * mitochondrion cannot break glucose down. Counts are for teaching only.
 */

/** @typedef {'nghi' | 'di-bo' | 'chay'} Activity */

/** @type {Record<Activity, { label: string, demand: number }>} */
export const ACTIVITIES = {
  nghi: { label: 'Nghỉ ngơi', demand: 1 },
  'di-bo': { label: 'Đi bộ', demand: 2 },
  chay: { label: 'Chạy', demand: 4 },
};

/** Glucose parts one meal brings to the cell. */
export const MEAL = 6;

/**
 * @typedef {object} CellState
 * @property {number} glucose parts waiting in the cell
 * @property {number} oxygen parts of oxygen used so far
 * @property {number} co2 parts of carbon dioxide given off
 * @property {number} water parts of water made
 * @property {number} atp parts of energy stored in ATP
 * @property {number} heat parts of energy given off as heat
 */

/** @returns {CellState} */
export const emptyCell = () => ({ glucose: 0, oxygen: 0, co2: 0, water: 0, atp: 0, heat: 0 });

/** @param {CellState} s @returns {CellState} */
export const eat = (s) => ({ ...s, glucose: s.glucose + MEAL });

/**
 * One minute of an activity.
 * @param {CellState} s
 * @param {Activity} activity
 * @param {boolean} hasOxygen
 * @returns {{ state: CellState, broken: number, text: string }}
 */
export function minute(s, activity, hasOxygen) {
  const { label, demand } = ACTIVITIES[activity];
  if (!hasOxygen)
    return {
      state: s,
      broken: 0,
      text: 'Không có oxygen: ti thể không phân giải được glucose, tế bào không có năng lượng cho hoạt động.',
    };
  const n = Math.min(demand, s.glucose);
  if (n === 0)
    return {
      state: s,
      broken: 0,
      text: 'Hết glucose: tế bào không còn chất hữu cơ để phân giải. Cần ăn để máu mang thêm glucose đến tế bào.',
    };
  const state = {
    glucose: s.glucose - n,
    oxygen: s.oxygen + n,
    co2: s.co2 + n,
    water: s.water + n,
    atp: s.atp + n,
    heat: s.heat + n,
  };
  const short = n < demand ? ' Không đủ glucose cho hoạt động này: cơ thể sẽ mệt.' : '';
  return {
    state,
    broken: n,
    text: `${label} một phút: ti thể phân giải ${n} phần glucose, dùng ${n} phần oxygen, thải ${n} phần carbon dioxide và nước, giải phóng năng lượng (ATP và nhiệt).${short}`,
  };
}

/** @typedef {'quang-hop' | 'ho-hap' | 'ca-hai'} CompareBin */

/** Bins of the comparison sorter. */
export const COMPARE_BINS = [
  { id: 'quang-hop', label: 'Quang hợp' },
  { id: 'ho-hap', label: 'Hô hấp tế bào' },
  { id: 'ca-hai', label: 'Cả hai quá trình' },
];

/** Cards of the comparison sorter. @type {import('#lib/core/card-sorter.js').SortCard[]} */
export const COMPARE_CARDS = [
  {
    id: 'luc-lap',
    label: 'Diễn ra ở lục lạp',
    bin: 'quang-hop',
    why: 'Lục lạp chứa diệp lục, là nơi diễn ra quang hợp.',
  },
  {
    id: 'ti-the',
    label: 'Diễn ra ở ti thể',
    bin: 'ho-hap',
    why: 'Ti thể là nơi diễn ra hô hấp tế bào.',
  },
  {
    id: 'anh-sang',
    label: 'Cần ánh sáng',
    bin: 'quang-hop',
    why: 'Quang hợp cần năng lượng ánh sáng; hô hấp diễn ra cả ngày lẫn đêm.',
  },
  {
    id: 'lay-co2',
    label: 'Lấy vào khí carbon dioxide, thải khí oxygen',
    bin: 'quang-hop',
    why: 'Carbon dioxide là nguyên liệu, oxygen là sản phẩm của quang hợp.',
  },
  {
    id: 'lay-o2',
    label: 'Lấy vào khí oxygen, thải khí carbon dioxide',
    bin: 'ho-hap',
    why: 'Hô hấp tế bào dùng oxygen để phân giải glucose và thải carbon dioxide.',
  },
  {
    id: 'tong-hop',
    label: 'Tổng hợp chất hữu cơ, tích luỹ năng lượng',
    bin: 'quang-hop',
    why: 'Quang hợp tạo glucose từ nước và carbon dioxide, tích luỹ năng lượng ánh sáng thành hoá năng.',
  },
  {
    id: 'phan-giai',
    label: 'Phân giải chất hữu cơ, giải phóng năng lượng',
    bin: 'ho-hap',
    why: 'Hô hấp tế bào phân giải glucose, giải phóng năng lượng (ATP và nhiệt).',
  },
  {
    id: 'moi-te-bao',
    label: 'Diễn ra ở mọi tế bào sống của động vật và thực vật',
    bin: 'ho-hap',
    why: 'Mọi tế bào sống đều hô hấp; chỉ tế bào có lục lạp mới quang hợp.',
  },
  {
    id: 'trao-doi-chat',
    label: 'Là quá trình trao đổi chất gắn với chuyển hoá năng lượng',
    bin: 'ca-hai',
    why: 'Cả hai quá trình đều biến đổi chất và chuyển hoá năng lượng.',
  },
  {
    id: 'te-bao-la',
    label: 'Diễn ra trong tế bào lá cây vào ban ngày',
    bin: 'ca-hai',
    why: 'Ban ngày, tế bào lá vừa quang hợp vừa hô hấp.',
  },
];
