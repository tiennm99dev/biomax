/**
 * A simplified model of how light, carbon dioxide, temperature and water set
 * the rate of photosynthesis, following the book's statements:
 *
 * - light: the rate rises with light intensity up to a limit; shade plants
 *   reach their limit in weak light and are harmed by strong light;
 * - carbon dioxide: the rate rises with its concentration up to a limit;
 *   about 0,2 % and above poisons the plant;
 * - temperature: best at about 25-35 °C; above 40 °C or below 10 °C the
 *   rate falls sharply or stops;
 * - water: lacking water, stomata close and the rate falls.
 *
 * Each factor gives a fraction from 0 to 1; the rate (in % of the best rate)
 * is their product. Numbers are for teaching, not for a particular species.
 */

/** @typedef {'ua-sang' | 'ua-bong'} PlantType */
/** @typedef {'light' | 'co2' | 'temp'} Factor */
/** @typedef {{ light: number, co2: number, temp: number, water: boolean, plant: PlantType }} Conditions */

/** CO₂ share of ordinary air, in %. */
export const AIR_CO2 = 0.04;

/** Rising part of a curve, flattening as it reaches 1. @param {number} x 0..1 */
const ease = (x) => 1 - (1 - Math.min(1, Math.max(0, x))) ** 2;

/**
 * @param {number} light % of full sunlight, 0-100
 * @param {PlantType} plant
 */
export function lightFactor(light, plant) {
  if (plant === 'ua-sang') return ease(light / 70);
  if (light <= 50) return ease(light / 25);
  return 1 - (0.4 * Math.min(50, light - 50)) / 50;
}

/** @param {number} co2 % of the air, 0-0,3 */
export function co2Factor(co2) {
  if (co2 <= 0.01) return 0;
  if (co2 <= 0.15) return ease((co2 - 0.01) / 0.14);
  if (co2 <= 0.2) return 1;
  if (co2 >= 0.3 - 1e-9) return 0;
  return 1 - (co2 - 0.2) / 0.1;
}

/** @param {number} temp °C */
export function tempFactor(temp) {
  if (temp <= 5 || temp >= 45) return 0;
  if (temp < 25) return (temp - 5) / 20;
  if (temp <= 35) return 1;
  return (45 - temp) / 10;
}

/** @param {boolean} water */
export const waterFactor = (water) => (water ? 1 : 0.4);

/**
 * Rate of photosynthesis in % of the best rate, rounded to a whole number.
 * @param {Conditions} c
 */
export function rate(c) {
  const r =
    lightFactor(c.light, c.plant) * co2Factor(c.co2) * tempFactor(c.temp) * waterFactor(c.water);
  return Math.round(100 * r);
}

/** Range and step of each slider factor. */
export const RANGES = {
  light: { min: 0, max: 100, step: 5 },
  co2: { min: 0, max: 0.3, step: 0.01 },
  temp: { min: 0, max: 50, step: 1 },
};

/**
 * Points of the curve rate(factor) with the other conditions kept.
 * @param {Conditions} c
 * @param {Factor} factor
 * @param {number} [n] number of intervals
 * @returns {Array<{ x: number, y: number }>}
 */
export function curve(c, factor, n = 60) {
  const { min, max } = RANGES[factor];
  return Array.from({ length: n + 1 }, (_, i) => {
    const x = min + ((max - min) * i) / n;
    return { x, y: rate({ ...c, [factor]: x }) };
  });
}

/**
 * The factor that holds the rate back most, with a reason a learner can act
 * on, or null when every factor is at its best.
 * @param {Conditions} c
 * @returns {{ id: Factor | 'water', text: string } | null}
 */
export function limiting(c) {
  const l = lightFactor(c.light, c.plant);
  const f = [
    { id: /** @type {const} */ ('light'), v: l },
    { id: /** @type {const} */ ('co2'), v: co2Factor(c.co2) },
    { id: /** @type {const} */ ('temp'), v: tempFactor(c.temp) },
    { id: /** @type {const} */ ('water'), v: waterFactor(c.water) },
  ];
  const worst = f.reduce((a, b) => (b.v < a.v ? b : a));
  if (worst.v >= 0.999) return null;
  switch (worst.id) {
    case 'light':
      if (c.plant === 'ua-bong' && c.light > 50)
        return {
          id: 'light',
          text: 'Ánh sáng quá mạnh với cây ưa bóng làm lá bị tổn thương, quang hợp giảm. Cây ưa bóng cần được che bớt nắng.',
        };
      return {
        id: 'light',
        text: 'Ánh sáng còn yếu: diệp lục nhận được ít năng lượng ánh sáng. Tăng cường độ ánh sáng thì quang hợp tăng (đến một giới hạn).',
      };
    case 'co2':
      if (c.co2 > 0.2)
        return {
          id: 'co2',
          text: 'Nồng độ carbon dioxide quá cao (trên khoảng 0,2%) gây ngộ độc, cây có thể chết, quang hợp giảm mạnh hoặc ngừng.',
        };
      return {
        id: 'co2',
        text: 'Thiếu carbon dioxide, nguyên liệu của quang hợp. Tăng nồng độ carbon dioxide thì quang hợp tăng (đến một giới hạn).',
      };
    case 'temp':
      return c.temp > 35
        ? {
            id: 'temp',
            text: 'Nhiệt độ quá cao: trên khoảng 40 °C, quang hợp giảm mạnh hoặc ngừng hẳn.',
          }
        : {
            id: 'temp',
            text: 'Nhiệt độ thấp: dưới khoảng 10 °C, quang hợp giảm mạnh hoặc ngừng hẳn. Hầu hết cây quang hợp tốt nhất ở 25 °C đến 35 °C.',
          };
    default:
      return {
        id: 'water',
        text: 'Thiếu nước: khí khổng đóng lại để giữ nước, khí carbon dioxide khó vào lá nên quang hợp giảm.',
      };
  }
}
