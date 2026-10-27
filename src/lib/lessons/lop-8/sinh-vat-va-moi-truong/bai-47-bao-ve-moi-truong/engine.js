/**
 * Everyday green actions for the environment-protection lesson, each with a
 * rough estimate of the waste (kg) and CO₂ (kg) one person avoids in a week.
 * The estimates are round numbers taken from typical values, stated in
 * `basis` so the lesson can show where each comes from:
 * - a nylon bag weighs about 10 g, a 500 mL plastic bottle about 20 g;
 * - a motorbike emits about 0,05 kg CO₂ per km (about 2 L of petrol per
 *   100 km, 2,3 kg CO₂ per litre);
 * - a kWh of Vietnamese grid electricity comes with about 0,7 kg CO₂;
 * - a growing tree takes up about 20 kg CO₂ a year.
 */

/**
 * @typedef {{
 *   id: string;
 *   label: string;
 *   basis: string;
 *   waste: number;
 *   co2: number;
 * }} Action
 */

export const TREE_CO2_PER_YEAR = 20;
export const WEEKS_PER_YEAR = 52;

/** @type {Action[]} */
export const ACTIONS = [
  {
    id: 'tui-vai',
    label: 'Dùng túi vải thay túi nilon khi đi chợ, mua hàng',
    basis: 'Mỗi tuần bớt 7 túi nilon, mỗi túi khoảng 10 g.',
    waste: 0.07,
    co2: 0,
  },
  {
    id: 'binh-nuoc',
    label: 'Mang bình nước cá nhân thay mua nước đóng chai',
    basis: 'Mỗi tuần bớt 5 chai nhựa, mỗi chai khoảng 20 g.',
    waste: 0.1,
    co2: 0,
  },
  {
    id: 'phan-loai',
    label: 'Phân loại rác, ủ rác hữu cơ (vỏ rau, củ, quả) làm phân bón',
    basis: 'Mỗi tuần bớt khoảng 1 kg rác phải đem chôn lấp.',
    waste: 1,
    co2: 0,
  },
  {
    id: 'xe-dap',
    label: 'Đi bộ, đi xe đạp đến trường thay vì đi xe máy',
    basis: 'Mỗi tuần bớt 20 km xe máy, mỗi km thải khoảng 0,05 kg CO₂.',
    waste: 0,
    co2: 1,
  },
  {
    id: 'tat-dien',
    label: 'Tắt đèn, quạt, máy tính khi không dùng',
    basis: 'Mỗi tuần tiết kiệm khoảng 2 kWh điện, mỗi kWh ứng với khoảng 0,7 kg CO₂.',
    waste: 0,
    co2: 1.4,
  },
  {
    id: 'trong-cay',
    label: 'Trồng và chăm sóc một cây xanh',
    basis: 'Một cây đang lớn hấp thụ khoảng 20 kg CO₂ mỗi năm.',
    waste: 0,
    co2: TREE_CO2_PER_YEAR / WEEKS_PER_YEAR,
  },
];

/**
 * Total waste and CO₂ avoided by `people` doing the chosen actions for
 * `weeks` weeks.
 * @param {string[]} chosen action ids
 * @param {number} people
 * @param {number} weeks
 */
export function impact(chosen, people, weeks) {
  let waste = 0;
  let co2 = 0;
  for (const a of ACTIONS) {
    if (!chosen.includes(a.id)) continue;
    waste += a.waste;
    co2 += a.co2;
  }
  return { waste: waste * people * weeks, co2: co2 * people * weeks };
}

/**
 * How many growing trees would take up this much CO₂ in a year.
 * @param {number} co2 kg
 */
export const treeYears = (co2) => co2 / TREE_CO2_PER_YEAR;

/**
 * The chosen action that saves the most CO₂, or null when none saves any.
 * @param {string[]} chosen
 */
export function biggestCo2(chosen) {
  let best = /** @type {Action | null} */ (null);
  for (const a of ACTIONS) {
    if (chosen.includes(a.id) && a.co2 > 0 && (!best || a.co2 > best.co2)) best = a;
  }
  return best;
}

/** @type {import('#lib/core/card-sorter.js').SortBin[]} */
export const CLIMATE_BINS = [
  { id: 'thich-ung', label: 'Thích ứng: sống chung với khí hậu đã thay đổi' },
  { id: 'giam-nhe', label: 'Giảm nhẹ: bớt thải khí nhà kính' },
];

/** @type {import('#lib/core/card-sorter.js').SortCard[]} */
export const CLIMATE_CARDS = [
  {
    id: 'giong-man',
    label: 'Trồng giống lúa chịu mặn ở đồng bằng sông Cửu Long',
    bin: 'thich-ung',
    why: 'Giống chịu mặn giúp sản xuất được khi nước mặn đã xâm nhập sâu: thích ứng.',
  },
  {
    id: 'rung-ngap-man',
    label: 'Trồng rừng ngập mặn chắn sóng ven biển',
    bin: 'thich-ung',
    why: 'Rừng ngập mặn giảm sóng, chống xói lở khi nước biển dâng, bão mạnh: thích ứng (rừng còn hấp thụ thêm CO₂).',
  },
  {
    id: 'de-bien',
    label: 'Nâng cấp đê biển, xây nhà chống bão lũ',
    bin: 'thich-ung',
    why: 'Đê và nhà kiên cố bảo vệ người dân trước thời tiết cực đoan: thích ứng.',
  },
  {
    id: 'thoi-vu',
    label: 'Thay đổi lịch thời vụ để tránh mùa hạn hán',
    bin: 'thich-ung',
    why: 'Điều chỉnh thời vụ theo thời tiết mới: thích ứng.',
  },
  {
    id: 'mat-troi',
    label: 'Dùng điện mặt trời, điện gió thay điện than',
    bin: 'giam-nhe',
    why: 'Năng lượng tái tạo thải rất ít CO₂: giảm nhẹ.',
  },
  {
    id: 'xe-buyt',
    label: 'Đi xe buýt, xe đạp thay vì đi xe máy riêng',
    bin: 'giam-nhe',
    why: 'Bớt đốt xăng nên bớt thải CO₂: giảm nhẹ.',
  },
  {
    id: 'tat-den',
    label: 'Tắt đèn, quạt khi ra khỏi phòng',
    bin: 'giam-nhe',
    why: 'Tiết kiệm điện là bớt khí thải ở nhà máy điện: giảm nhẹ.',
  },
];
