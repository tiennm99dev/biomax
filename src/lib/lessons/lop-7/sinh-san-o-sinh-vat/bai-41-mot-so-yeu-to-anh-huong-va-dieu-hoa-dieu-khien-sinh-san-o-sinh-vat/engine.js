/**
 * A teaching model of how temperature, light and food change reproduction:
 * eggs laid by a hen in a week, and the share of dragon fruit (thanh long)
 * branches that flower. Each factor gives a multiplier from 0 to 1; the
 * smallest one is the limiting factor named in the feedback. The numbers are
 * illustrative, not measured data.
 */

import { formatNumber } from '#lib/core/number-format.js';

/** @typedef {'thieu' | 'du' | 'thua'} Food */
/** @typedef {'ga' | 'thanh-long'} Organism */
/** @typedef {'nhiet-do' | 'anh-sang' | 'dinh-duong'} Factor */

/**
 * @param {string} v
 * @returns {Organism}
 */
export function asOrganism(v) {
  return v === 'thanh-long' ? 'thanh-long' : 'ga';
}

/**
 * @param {string} v
 * @returns {Food}
 */
export function asFood(v) {
  return v === 'thieu' || v === 'thua' ? v : 'du';
}

/** @param {number} v */
const unit = (v) => Math.max(0, Math.min(1, v));

/** Most eggs a well-kept laying hen gives in a week in this model. */
export const MAX_EGGS = 6;

/** Highest share of flowering branches in this model, in percent. */
export const MAX_FLOWERING = 90;

/**
 * Temperature multiplier for laying: best from 18 °C to 24 °C.
 * @param {number} t °C
 */
export function henTemperature(t) {
  if (t < 18) return unit(1 - (18 - t) * 0.05);
  if (t > 24) return unit(1 - (t - 24) * 0.07);
  return 1;
}

/**
 * Light multiplier for laying: hens need about 16 hours of light a day.
 * @param {number} hours
 */
export function henLight(hours) {
  if (hours >= 16) return 1;
  return unit(0.2 + ((hours - 8) / 8) * 0.8);
}

/**
 * Temperature multiplier for dragon fruit flowering: best from 20 °C to
 * 32 °C, none at 12 °C or below.
 * @param {number} t °C
 */
export function fruitTemperature(t) {
  if (t < 20) return unit((t - 12) / 8);
  if (t > 32) return unit(1 - (t - 32) * 0.12);
  return 1;
}

/**
 * Light multiplier for dragon fruit flowering: a long-day plant that does not
 * flower with 12 hours of light or fewer, and flowers fully from 16 hours.
 * @param {number} hours
 */
export function fruitLight(hours) {
  return unit((hours - 12) / 4);
}

/** @type {Record<Organism, Record<Food, number>>} */
const FOOD = {
  ga: { thieu: 0.5, du: 1, thua: 0.8 },
  'thanh-long': { thieu: 0.5, du: 1, thua: 0.7 },
};

/**
 * @typedef {{ temperature: number, light: number, food: Food }} Conditions
 * @typedef {{
 *   factors: Record<Factor, number>;
 *   value: number;
 *   limiting: Factor | null;
 * }} Outcome
 */

/**
 * Multipliers, result (eggs per week, or percent of branches flowering) and
 * the limiting factor, null when every factor is at its best.
 * @param {Organism} organism @param {Conditions} c
 * @returns {Outcome}
 */
export function simulate(organism, c) {
  /** @type {Record<Factor, number>} */
  const factors =
    organism === 'ga'
      ? {
          'nhiet-do': henTemperature(c.temperature),
          'anh-sang': henLight(c.light),
          'dinh-duong': FOOD.ga[c.food],
        }
      : {
          'nhiet-do': fruitTemperature(c.temperature),
          'anh-sang': fruitLight(c.light),
          'dinh-duong': FOOD['thanh-long'][c.food],
        };
  const product = factors['nhiet-do'] * factors['anh-sang'] * factors['dinh-duong'];
  const value =
    organism === 'ga' ? Math.round(MAX_EGGS * product) : Math.round(MAX_FLOWERING * product);
  /** @type {Factor | null} */
  let limiting = null;
  let min = 1;
  for (const f of /** @type {Factor[]} */ (['anh-sang', 'nhiet-do', 'dinh-duong'])) {
    if (factors[f] < min - 1e-9) {
      min = factors[f];
      limiting = f;
    }
  }
  return { factors, value, limiting };
}

/**
 * Why one factor holds reproduction back, for the live feedback.
 * @param {Organism} organism @param {Conditions} c @param {Factor} f
 */
function reason(organism, c, f) {
  const t = formatNumber(c.temperature);
  const h = formatNumber(c.light);
  if (f === 'nhiet-do') {
    const best = organism === 'ga' ? '18 °C đến 24 °C' : '20 °C đến 32 °C';
    return `nhiệt độ ${t} °C ${c.temperature < 20 ? 'quá thấp' : 'quá cao'} (thích hợp khoảng ${best})`;
  }
  if (f === 'anh-sang')
    return organism === 'ga'
      ? `chỉ có ${h} giờ chiếu sáng mỗi ngày, gà cần khoảng 16 giờ để đẻ đều`
      : `chỉ có ${h} giờ chiếu sáng mỗi ngày; thanh long cần ngày dài (trên 12 giờ chiếu sáng) mới ra hoa`;
  if (c.food === 'thieu') return 'thiếu dinh dưỡng';
  return organism === 'ga'
    ? 'cho ăn quá thừa, gà béo, đẻ kém'
    : 'bón thừa phân đạm, cây ra nhiều cành lá, ít hoa';
}

/**
 * The live sentence under the simulation.
 * @param {Organism} organism @param {Conditions} c
 */
export function outcomeText(organism, c) {
  const o = simulate(organism, c);
  const head =
    organism === 'ga'
      ? `Gà mái đẻ khoảng ${o.value} quả trứng mỗi tuần.`
      : `Khoảng ${o.value}% số cành thanh long ra hoa.`;
  if (o.limiting === null)
    return `${head} Nhiệt độ, ánh sáng và dinh dưỡng đều thích hợp nên ${organism === 'ga' ? 'gà đẻ nhiều nhất' : 'cây ra hoa nhiều nhất'}.`;
  return `${head} Yếu tố hạn chế nhiều nhất: ${reason(organism, c, o.limiting)}.`;
}

/** @type {import('#lib/core/card-sorter.js').SortBin[]} */
export const FACTOR_BINS = [
  { id: 'ben-trong', label: 'Yếu tố bên trong' },
  { id: 'ben-ngoai', label: 'Yếu tố bên ngoài' },
];

/** @type {import('#lib/core/card-sorter.js').SortCard[]} */
export const FACTOR_CARDS = [
  {
    id: 'di-truyen',
    label: 'Đặc điểm di truyền của loài (số con mỗi lứa)',
    bin: 'ben-trong',
    why: 'Mỗi loài có đặc điểm sinh sản riêng do di truyền: yếu tố bên trong.',
  },
  {
    id: 'hormone',
    label: 'Hormone sinh sản (FSH, LH) do tuyến yên tiết ra',
    bin: 'ben-trong',
    why: 'Hormone do chính cơ thể tiết ra: yếu tố bên trong.',
  },
  {
    id: 'tuoi',
    label: 'Tuổi của con vật (đã đến tuổi trưởng thành sinh dục chưa)',
    bin: 'ben-trong',
    why: 'Tuổi là đặc điểm của chính cơ thể: yếu tố bên trong.',
  },
  {
    id: 'nhiet-do',
    label: 'Nhiệt độ quá thấp làm hoa lúa thụ phấn kém, nhiều hạt lép',
    bin: 'ben-ngoai',
    why: 'Nhiệt độ là yếu tố của môi trường: yếu tố bên ngoài.',
  },
  {
    id: 'anh-sang',
    label: 'Thắp đèn ban đêm cho thanh long ra hoa trái vụ',
    bin: 'ben-ngoai',
    why: 'Ánh sáng là yếu tố của môi trường: yếu tố bên ngoài.',
  },
  {
    id: 'dinh-duong',
    label: 'Thức ăn đủ chất giúp gà đẻ nhiều trứng',
    bin: 'ben-ngoai',
    why: 'Thức ăn (dinh dưỡng) lấy từ môi trường: yếu tố bên ngoài.',
  },
  {
    id: 'do-am',
    label: 'Độ ẩm không khí quá cao khi cây đang ra hoa',
    bin: 'ben-ngoai',
    why: 'Độ ẩm là yếu tố của môi trường: yếu tố bên ngoài.',
  },
];
