/**
 * A model of how temperature and pH set the activity of an enzyme. The optima
 * are the usual ones for each enzyme; the shapes around them are teaching
 * values: activity doubles every 10 °C up to the optimum, falls quickly above
 * it and stops for good once the enzyme is denatured. Cold only slows it down.
 * Also the enzyme sources to sort. No DOM here, so all of it is tested in Node.
 */
import { formatNumber } from '#lib/core/number-format.js';

/**
 * @typedef {{
 *   id: string,
 *   name: string,
 *   from: string,
 *   bestTemp: number,
 *   ruinTemp: number,
 *   bestPh: number,
 *   minPh: number,
 *   maxPh: number,
 * }} Enzyme
 */

/** @type {Enzyme[]} */
export const ENZYMES = [
  {
    id: 'amylase',
    name: 'Amylase nước bọt',
    from: 'tuyến nước bọt của người',
    bestTemp: 37,
    ruinTemp: 65,
    bestPh: 6.8,
    minPh: 3,
    maxPh: 11,
  },
  {
    id: 'pepsin',
    name: 'Pepsin',
    from: 'dạ dày',
    bestTemp: 37,
    ruinTemp: 65,
    bestPh: 2,
    minPh: 0,
    maxPh: 7,
  },
  {
    id: 'papain',
    name: 'Papain',
    from: 'nhựa đu đủ xanh',
    bestTemp: 65,
    ruinTemp: 85,
    bestPh: 6.5,
    minPh: 2.5,
    maxPh: 12,
  },
  {
    id: 'taq',
    name: 'Taq polymerase',
    from: 'vi khuẩn suối nước nóng Thermus aquaticus',
    bestTemp: 72,
    ruinTemp: 99,
    bestPh: 8.5,
    minPh: 4,
    maxPh: 11,
  },
];

export const MIN_TEMP = 0;
export const MAX_TEMP = 100;
export const MIN_PH = 0;
export const MAX_PH = 14;
/** Counted as the best conditions from this share of the top activity. */
export const NEAR_BEST = 0.95;
const WARMTH_BASE = 2;
const PH_WIDTH = 1.5;

/**
 * The share of the top activity allowed by temperature alone.
 * @param {Enzyme} enzyme @param {number} temp
 */
export function tempFactor(enzyme, temp) {
  if (temp >= enzyme.ruinTemp) return 0;
  if (temp <= enzyme.bestTemp) return WARMTH_BASE ** ((temp - enzyme.bestTemp) / 10);
  return 1 - ((temp - enzyme.bestTemp) / (enzyme.ruinTemp - enzyme.bestTemp)) ** 2;
}

/**
 * The share of the top activity allowed by pH alone.
 * @param {Enzyme} enzyme @param {number} ph
 */
export function phFactor(enzyme, ph) {
  if (ph < enzyme.minPh || ph > enzyme.maxPh) return 0;
  return Math.exp(-(((ph - enzyme.bestPh) / PH_WIDTH) ** 2));
}

/**
 * Whether these conditions denature the enzyme.
 * @param {Enzyme} enzyme @param {number} temp @param {number} ph
 */
export const ruins = (enzyme, temp, ph) =>
  temp >= enzyme.ruinTemp || ph < enzyme.minPh || ph > enzyme.maxPh;

/**
 * Activity in these conditions, from 0 to 1. A denatured enzyme stays at 0
 * whatever the conditions become.
 * @param {Enzyme} enzyme @param {number} temp @param {number} ph @param {boolean} [ruined]
 */
export function activity(enzyme, temp, ph, ruined = false) {
  if (ruined || ruins(enzyme, temp, ph)) return 0;
  return tempFactor(enzyme, temp) * phFactor(enzyme, ph);
}

/**
 * Activity as a whole percentage, as the widget shows it.
 * @param {number} value a share from 0 to 1
 */
export const percentText = (value) => `${formatNumber(Math.round(value * 100))}%`;

/**
 * The live explanation of the current state of the tube.
 * @param {Enzyme} enzyme @param {number} temp @param {number} ph @param {boolean} ruined
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function verdict(enzyme, temp, ph, ruined) {
  if (ruined) {
    return {
      tone: 'warn',
      text: `${enzyme.name} đã biến tính: cấu trúc không gian và trung tâm hoạt động bị phá huỷ. Đưa về điều kiện tối ưu cũng không phục hồi được, hãy thay enzyme mới.`,
    };
  }
  const value = activity(enzyme, temp, ph);
  if (value >= NEAR_BEST) {
    return {
      tone: 'ok',
      text: `Gần tối ưu: ${enzyme.name} đạt ${percentText(value)} hoạt tính cao nhất. Trong sản xuất, người ta giữ điều kiện quanh mức này.`,
    };
  }
  if (phFactor(enzyme, ph) < 0.5) {
    return {
      tone: 'info',
      text: `pH lệch xa mức tối ưu của ${enzyme.name}, trung tâm hoạt động khó khớp với cơ chất, nên hoạt tính chỉ còn ${percentText(value)}.`,
    };
  }
  if (temp < enzyme.bestTemp) {
    return {
      tone: 'info',
      text: `Nhiệt độ thấp làm phản ứng chậm: hoạt tính ${percentText(value)}. Enzyme chưa hỏng, tăng nhiệt độ thì hoạt tính lại tăng.`,
    };
  }
  return {
    tone: 'info',
    text: `Hoạt tính ${percentText(value)}. Trên nhiệt độ tối ưu, cấu trúc enzyme bắt đầu bị phá vỡ, nên hoạt tính giảm nhanh.`,
  };
}

/**
 * The curve points of activity as `x` runs over its range, with the other
 * condition held; `x` is temperature or pH by `axis`.
 * @param {Enzyme} enzyme @param {'temp' | 'ph'} axis @param {number} other @param {number} [count]
 * @returns {Array<{ x: number, y: number }>}
 */
export function curve(enzyme, axis, other, count = 101) {
  const lo = axis === 'temp' ? MIN_TEMP : MIN_PH;
  const hi = axis === 'temp' ? MAX_TEMP : MAX_PH;
  return Array.from({ length: count }, (_, i) => {
    const x = lo + ((hi - lo) * i) / (count - 1);
    return { x, y: axis === 'temp' ? activity(enzyme, x, other) : activity(enzyme, other, x) };
  });
}

/** @type {import('#lib/core/card-sorter.js').SortBin[]} */
export const SOURCE_BINS = [
  { id: 'thuc-vat', label: 'Thực vật' },
  { id: 'dong-vat', label: 'Động vật' },
  { id: 'vi-sinh-vat', label: 'Vi sinh vật' },
];

/** @type {import('#lib/core/card-sorter.js').SortCard[]} */
export const SOURCE_CARDS = [
  {
    id: 'bromelain',
    label: 'Bromelain từ quả và thân dứa',
    bin: 'thuc-vat',
    why: 'Dứa là cây trồng, nên đây là nguồn thực vật.',
  },
  {
    id: 'papain',
    label: 'Papain từ nhựa đu đủ xanh',
    bin: 'thuc-vat',
    why: 'Đu đủ là cây trồng, nhựa quả xanh giàu papain.',
  },
  {
    id: 'mach-nha',
    label: 'Amylase từ hạt đại mạch nảy mầm',
    bin: 'thuc-vat',
    why: 'Hạt nảy mầm tạo nhiều amylase để phân giải tinh bột dự trữ.',
  },
  {
    id: 'pepsin',
    label: 'Pepsin từ dạ dày lợn',
    bin: 'dong-vat',
    why: 'Dạ dày là cơ quan của động vật.',
  },
  {
    id: 'trypsin',
    label: 'Trypsin từ tuyến tuỵ',
    bin: 'dong-vat',
    why: 'Tuyến tuỵ của động vật tiết trypsin để tiêu hoá protein.',
  },
  {
    id: 'renin',
    label: 'Renin từ dạ dày bê',
    bin: 'dong-vat',
    why: 'Dạ dày bê tiết renin làm đông sữa, được dùng làm phô mai.',
  },
  {
    id: 'nam-moc',
    label: 'Amylase từ nấm mốc Aspergillus',
    bin: 'vi-sinh-vat',
    why: 'Nấm mốc là vi sinh vật, nuôi được trên môi trường có tinh bột.',
  },
  {
    id: 'bacillus',
    label: 'Protease từ vi khuẩn Bacillus',
    bin: 'vi-sinh-vat',
    why: 'Vi khuẩn sinh sản nhanh, tiết protease ra môi trường nuôi cấy.',
  },
  {
    id: 'taq',
    label: 'Taq polymerase từ vi khuẩn suối nước nóng',
    bin: 'vi-sinh-vat',
    why: 'Thermus aquaticus là vi khuẩn sống ở suối nước nóng.',
  },
];
