/**
 * Flowering by photoperiod, in the simple model of the grade 11 book: what
 * counts is the longest unbroken dark period. A short-day plant flowers when
 * it is longer than the critical night, a long-day plant when it is shorter,
 * a day-neutral plant whatever the day length. A flash of red light in the
 * middle of the night turns phytochrome Pr into Pfr and splits the night in
 * two; far-red light right after it turns Pfr back into Pr, so the flash no
 * longer counts.
 */

import { formatNumber } from '#lib/core/number-format.js';

/** @typedef {'ngay-ngan' | 'ngay-dai' | 'trung-tinh'} PlantId */
/** @typedef {'khong' | 'do' | 'do-do-xa'} FlashId */

/** Critical night length, in hours, used for both photoperiod groups. */
export const CRITICAL_NIGHT = 12;

/**
 * @typedef {object} Plant
 * @property {PlantId} id
 * @property {string} group The photoperiod group.
 * @property {string} name The example plant.
 * @property {string} others Other plants of the group.
 */

/** @type {Plant[]} */
export const PLANTS = [
  {
    id: 'ngay-ngan',
    group: 'Cây ngày ngắn',
    name: 'hoa cúc',
    others: 'lúa, đậu tương, mía, cà phê, thược dược',
  },
  {
    id: 'ngay-dai',
    group: 'Cây ngày dài',
    name: 'thanh long',
    others: 'lúa mì, hành, cà rốt, củ cải đường, rau diếp',
  },
  {
    id: 'trung-tinh',
    group: 'Cây trung tính',
    name: 'cà chua',
    others: 'ngô, lạc, hướng dương, dưa chuột',
  },
];

/** @type {Array<{ id: FlashId, label: string }>} */
export const FLASHES = [
  { id: 'khong', label: 'Không chiếu' },
  { id: 'do', label: 'Chớp đỏ' },
  { id: 'do-do-xa', label: 'Đỏ rồi đỏ xa' },
];

/** @param {PlantId} id */
export const plant = (id) => PLANTS.find((p) => p.id === id) ?? PLANTS[0];

/**
 * The longest unbroken dark period, in hours. A red flash falls in the
 * middle of the night and halves it; red then far-red cancels out.
 * @param {number} dayHours @param {FlashId} flash
 */
export function longestDark(dayHours, flash) {
  const night = 24 - dayHours;
  return flash === 'do' ? night / 2 : night;
}

/**
 * The phytochrome form left at the end of the flash (or of the day if
 * there is no flash).
 * @param {FlashId} flash
 * @returns {'Pfr' | 'Pr'}
 */
export function flashForm(flash) {
  return flash === 'do' ? 'Pfr' : flash === 'do-do-xa' ? 'Pr' : 'Pfr';
}

/**
 * Whether the plant flowers. Exactly the critical night is the threshold,
 * and neither photoperiod group is induced there.
 * @param {PlantId} id @param {number} dayHours @param {FlashId} flash
 */
export function flowers(id, dayHours, flash) {
  if (id === 'trung-tinh') return true;
  const dark = longestDark(dayHours, flash);
  return id === 'ngay-ngan' ? dark > CRITICAL_NIGHT : dark < CRITICAL_NIGHT;
}

/** @param {number} h */
export const hoursText = (h) => `${formatNumber(h)} giờ`;

/**
 * The feedback line for one setting.
 * @param {PlantId} id @param {number} dayHours @param {FlashId} flash
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function verdict(id, dayHours, flash) {
  const p = plant(id);
  const night = 24 - dayHours;
  const dark = longestDark(dayHours, flash);
  const yes = flowers(id, dayHours, flash);
  const head = `${p.group} (${p.name}), ngày ${hoursText(dayHours)}, đêm ${hoursText(night)}`;
  let why;
  if (id === 'trung-tinh') {
    why =
      'Cây trung tính ra hoa không phụ thuộc độ dài ngày, chỉ cần đủ tuổi (cà chua ra hoa khi có khoảng 14 lá).';
  } else if (flash === 'do') {
    why = `Chớp đỏ giữa đêm chuyển Pr thành Pfr và chia đêm thành hai nửa, mỗi nửa chỉ ${hoursText(dark)}: cây "cảm nhận" như đêm ngắn.`;
  } else if (dark === CRITICAL_NIGHT) {
    why = `Đêm dài đúng bằng đêm tới hạn ${CRITICAL_NIGHT} giờ: ngưỡng, cả cây ngày ngắn lẫn cây ngày dài đều chưa được kích thích ra hoa.`;
  } else {
    const flashNote =
      flash === 'do-do-xa'
        ? 'Đỏ xa ngay sau chớp đỏ chuyển Pfr trở lại Pr, như chưa hề chiếu sáng: đêm vẫn liền một khối. '
        : '';
    why = `${flashNote}Đêm liên tục ${hoursText(dark)} ${dark > CRITICAL_NIGHT ? 'dài hơn' : 'ngắn hơn'} đêm tới hạn ${CRITICAL_NIGHT} giờ.`;
  }
  const result = yes ? 'Cây ra hoa.' : 'Cây không ra hoa, chỉ ra thêm lá.';
  return { tone: yes ? 'ok' : 'warn', text: `${head}: ${result} ${why}` };
}

/** @type {import('#lib/core/card-sorter.js').SortBin[]} */
export const HORMONE_BINS = [
  { id: 'auxin', label: 'Auxin' },
  { id: 'gibberellin', label: 'Gibberellin' },
  { id: 'cytokinin', label: 'Cytokinin' },
  { id: 'aba', label: 'Abscisic acid' },
  { id: 'ethylene', label: 'Ethylene' },
];

/** @type {import('#lib/core/card-sorter.js').SortCard[]} */
export const HORMONE_CARDS = [
  {
    id: 'giam-canh',
    label: 'Nhúng gốc cành giâm cho nhanh ra rễ',
    bin: 'auxin',
    why: 'Auxin kích thích hình thành rễ phụ ở cành giâm, cành chiết.',
  },
  {
    id: 'uu-the-ngon',
    label: 'Chồi ngọn ức chế chồi bên (ưu thế ngọn)',
    bin: 'auxin',
    why: 'Auxin tổng hợp ở chồi ngọn, vận chuyển xuống ức chế chồi bên.',
  },
  {
    id: 'nay-mam',
    label: 'Phá trạng thái ngủ, kích thích hạt, củ nảy mầm',
    bin: 'gibberellin',
    why: 'Gibberellin kích thích nảy mầm của hạt, củ.',
  },
  {
    id: 'than-dai',
    label: 'Làm lóng thân dài ra, tăng chiều cao cây lấy sợi',
    bin: 'gibberellin',
    why: 'Gibberellin kích thích kéo dài lóng thân.',
  },
  {
    id: 'nuoi-cay',
    label: 'Kích thích mô sẹo tạo chồi trong nuôi cấy mô',
    bin: 'cytokinin',
    why: 'Cytokinin kích thích phân chia tế bào, hình thành chồi.',
  },
  {
    id: 'chong-gia',
    label: 'Làm chậm sự già hoá, giữ lá, rau tươi lâu',
    bin: 'cytokinin',
    why: 'Cytokinin làm chậm quá trình già hoá của tế bào.',
  },
  {
    id: 'khi-khong',
    label: 'Đóng khí khổng khi cây thiếu nước',
    bin: 'aba',
    why: 'Abscisic acid tăng khi cây bị hạn, làm khí khổng đóng lại, giảm thoát hơi nước.',
  },
  {
    id: 'ngu-hat',
    label: 'Duy trì trạng thái ngủ của hạt, chồi',
    bin: 'aba',
    why: 'Abscisic acid ức chế nảy mầm, gây ngủ của hạt và chồi.',
  },
  {
    id: 'chin-qua',
    label: 'Thúc chuối, xoài chín nhanh và đều',
    bin: 'ethylene',
    why: 'Ethylene thúc đẩy quả chín.',
  },
  {
    id: 'rung-la',
    label: 'Gây rụng lá, hoa, quả',
    bin: 'ethylene',
    why: 'Ethylene kích thích sự rụng lá, hoa, quả.',
  },
];
