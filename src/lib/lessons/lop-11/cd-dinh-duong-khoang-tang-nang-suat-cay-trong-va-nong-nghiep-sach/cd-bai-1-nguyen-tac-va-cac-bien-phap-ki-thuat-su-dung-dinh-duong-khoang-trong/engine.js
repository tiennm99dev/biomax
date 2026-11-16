/**
 * A fertilizer calculator for one hectare. The amount of a nutrient to apply
 * in a season is (what the crop takes up − what the soil supplies) divided by
 * how much of the applied nutrient the crop actually uses; that amount is then
 * split over the basal dressing and two top dressings, with all the
 * phosphorus at the start and more potassium later, and turned into kilograms
 * of urea, super lân and kali clorua. The crop and soil figures are teaching
 * values of a realistic size, not a recommendation for a real field.
 */
import { formatNumber, tidy } from '#lib/core/number-format.js';
import { FERTILIZERS, NUTRIENTS, NUTRIENT_FORM, fertilizerFor } from '../_shared/fertilizers.js';

/**
 * @typedef {import('../_shared/fertilizers.js').Nutrient} Nutrient
 * @typedef {{ id: string, name: string, need: Record<Nutrient, number>, late: string }} Crop
 * @typedef {{ id: string, name: string, supply: Record<Nutrient, number>, factor: number, note: string }} Soil
 * @typedef {{ id: string, name: string, share: Record<Nutrient, number>, why: string }} Stage
 */

/** What the crop takes up from one hectare in a season, in kg. @type {Crop[]} */
export const CROPS = [
  {
    id: 'lua',
    name: 'Lúa',
    need: { N: 90, P: 36, K: 75 },
    late: 'Lần bón thúc thứ hai cho lúa là lúc đón đòng: cây cần nhiều kali để hạt chắc.',
  },
  {
    id: 'ngo',
    name: 'Ngô',
    need: { N: 120, P: 45, K: 90 },
    late: 'Lần bón thúc thứ hai cho ngô là trước khi trổ cờ: cây cần nhiều kali để bắp to, hạt chắc.',
  },
  {
    id: 'rau',
    name: 'Rau cải',
    need: { N: 70, P: 24, K: 60 },
    late: 'Rau ăn lá dễ tích luỹ nitrate: phải ngừng bón đạm ít nhất $2$ tuần trước khi thu hoạch.',
  },
];

/** What the soil supplies to the crop in a season, in kg per hectare. @type {Soil[]} */
export const SOILS = [
  {
    id: 'phu-sa',
    name: 'Đất phù sa',
    supply: { N: 40, P: 20, K: 45 },
    factor: 1,
    note: 'Đất phù sa giàu dinh dưỡng nên cần bón ít hơn.',
  },
  {
    id: 'bac-mau',
    name: 'Đất bạc màu',
    supply: { N: 15, P: 8, K: 15 },
    factor: 1,
    note: 'Đất bạc màu nghèo dinh dưỡng: nên bón thêm phân hữu cơ để cải tạo đất.',
  },
  {
    id: 'chua',
    name: 'Đất chua',
    supply: { N: 25, P: 6, K: 30 },
    factor: 0.8,
    note: 'Đất chua làm cây dùng phân kém hiệu quả (phosphorus bị giữ chặt trong đất): nên bón vôi để nâng pH trước khi bón phân.',
  },
];

/** The share of the season's nutrient each dressing gets. @type {Stage[]} */
export const STAGES = [
  {
    id: 'lot',
    name: 'Bón lót',
    share: { N: 0.3, P: 1, K: 0.3 },
    why: 'Bón lót trước khi gieo trồng: bón toàn bộ phân lân (lân chậm tan, cần cho rễ phát triển) và một phần đạm, kali.',
  },
  {
    id: 'thuc-1',
    name: 'Bón thúc lần 1',
    share: { N: 0.4, P: 0, K: 0.2 },
    why: 'Giai đoạn cây con, đẻ nhánh, ra lá: cây cần nhiều đạm nhất.',
  },
  {
    id: 'thuc-2',
    name: 'Bón thúc lần 2',
    share: { N: 0.3, P: 0, K: 0.5 },
    why: 'Giai đoạn sau: cây cần thêm kali cho hoa, quả, hạt và củ.',
  },
];

/** The share of an applied nutrient the crop uses on good soil. @type {Record<Nutrient, number>} */
export const EFFICIENCY = { N: 0.5, P: 0.3, K: 0.6 };

/** Within this share of the right amount a dose counts as right. */
export const CLOSE = 0.2;

/** @param {string} id */
export const cropOf = (id) => CROPS.find((c) => c.id === id) ?? CROPS[0];
/** @param {string} id */
export const soilOf = (id) => SOILS.find((s) => s.id === id) ?? SOILS[0];
/** @param {string} id */
export const stageOf = (id) => STAGES.find((s) => s.id === id) ?? STAGES[0];

/**
 * The kilograms of a nutrient to apply in the whole season:
 * (need − soil supply) / efficiency, never below 0.
 * @param {Crop} crop @param {Soil} soil @param {Nutrient} n
 */
export function seasonNutrient(crop, soil, n) {
  const gap = Math.max(0, crop.need[n] - soil.supply[n]);
  return tidy(gap / (EFFICIENCY[n] * soil.factor));
}

/**
 * Every figure of the calculation for one dressing, nutrient by nutrient.
 * @param {string} cropId @param {string} soilId @param {string} stageId
 */
export function planFor(cropId, soilId, stageId) {
  const crop = cropOf(cropId);
  const soil = soilOf(soilId);
  const stage = stageOf(stageId);
  return NUTRIENTS.map((n) => {
    const season = seasonNutrient(crop, soil, n);
    const now = tidy(season * stage.share[n]);
    return {
      nutrient: n,
      form: NUTRIENT_FORM[n],
      fertilizer: FERTILIZERS[n],
      need: crop.need[n],
      supply: soil.supply[n],
      efficiency: tidy(EFFICIENCY[n] * soil.factor),
      season,
      share: stage.share[n],
      now,
      mass: fertilizerFor(now, n),
    };
  });
}

/**
 * The verdict on the urea the learner chose for a dressing.
 * @param {number} chosen kg of urea @param {number} right kg of urea
 * @returns {{ tone: 'ok' | 'warn', text: string }}
 */
export function doseVerdict(chosen, right) {
  const kg = (/** @type {number} */ v) => `${formatNumber(Math.round(v))} kg`;
  if (right === 0) {
    return chosen === 0
      ? { tone: 'ok', text: 'Đúng: lần bón này không cần đạm.' }
      : {
          tone: 'warn',
          text: `Lần bón này không cần đạm. Bón ${kg(chosen)} urea là lãng phí và làm đạm dư thừa ngấm xuống nước ngầm.`,
        };
  }
  const ratio = chosen / right;
  if (ratio < 1 - CLOSE) {
    return {
      tone: 'warn',
      text: `Thiếu đạm: cần khoảng ${kg(right)} urea. Cây thiếu nitrogen còi cọc, lá già vàng và rụng sớm.`,
    };
  }
  if (ratio > 1 + CLOSE) {
    return {
      tone: 'warn',
      text: `Thừa đạm: chỉ cần khoảng ${kg(right)} urea. Bón thừa gây lãng phí, cây dễ bị sâu bệnh, đổ ngã, tích luỹ nitrate trong nông sản và gây ô nhiễm đất, nước.`,
    };
  }
  return {
    tone: 'ok',
    text: `Vừa đủ: khoảng ${kg(right)} urea cho một hecta ở lần bón này. Đây là bón đúng liều lượng.`,
  };
}
