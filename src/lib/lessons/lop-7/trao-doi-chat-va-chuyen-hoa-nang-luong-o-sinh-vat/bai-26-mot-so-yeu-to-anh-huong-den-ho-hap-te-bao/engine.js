/**
 * A simplified storehouse model: how temperature, water content, oxygen and
 * carbon dioxide set the respiration rate of stored produce, and how long the
 * produce keeps. It follows the book's statements:
 *
 * - temperature acts on the enzymes of respiration: the rate rises with
 *   temperature up to a best value (about 30-35 °C here), then falls sharply;
 * - water: the rate rises with the water content of the cells; grain is
 *   dried to about 13-16 % water before storage;
 * - oxygen is a raw material: in plants, below about 5 % the rate falls;
 * - carbon dioxide: about 0,03 % suits respiration, 3-5 % inhibits it.
 *
 * Respiration breaks down the organic matter of the produce, so the lower the
 * rate the longer it keeps; but stopping respiration altogether kills the
 * cells (frozen fruit, no oxygen at all, grain that is too wet and goes
 * mouldy), and the produce spoils. Numbers are for teaching only.
 */

/** @typedef {'hat' | 'qua'} Produce */
/** @typedef {{ produce: Produce, temp: number, water: number, o2: number, co2: number }} Store */

/** Oxygen and carbon dioxide of ordinary air, in %. */
export const AIR_O2 = 21;
export const AIR_CO2 = 0.03;

/** Range and step of each slider. */
export const RANGES = {
  temp: { min: -5, max: 45, step: 1 },
  water: { min: 10, max: 25, step: 1 },
  o2: { min: 0, max: 21, step: 1 },
  co2: { min: 0, max: 10, step: 0.5 },
};

/** Water content (%) of fresh fruit and vegetables, fixed in the model. */
export const FRUIT_WATER = 90;

/** Water content (%) above which stored grain goes mouldy. */
export const GRAIN_WET = 18;

/**
 * Fraction (0-1) of the best rate set by temperature: doubling every 10 °C
 * up to 35 °C, then falling to 0 at 50 °C.
 * @param {number} temp °C
 */
export function tempFactor(temp) {
  if (temp >= 50) return 0;
  if (temp <= 35) return 2 ** ((Math.max(temp, -5) - 35) / 10);
  return (50 - temp) / 15;
}

/**
 * Fraction set by the water content of the cells (%). Fresh fruit always
 * has plenty of water.
 * @param {Produce} produce @param {number} water
 */
export function waterFactor(produce, water) {
  if (produce === 'qua') return 1;
  const x = Math.min(1, Math.max(0, (water - 10) / 15));
  return Math.max(0.02, x * x);
}

/** Fraction set by oxygen (%): full from 5 % up, falling below it. @param {number} o2 */
export function o2Factor(o2) {
  if (o2 >= 5) return 1;
  return 0.1 + (0.9 * Math.max(0, o2)) / 5;
}

/**
 * Fraction set by carbon dioxide (%): about 0,03 % suits respiration, 3-5 %
 * inhibits it, more inhibits it further.
 * @param {number} co2
 */
export function co2Factor(co2) {
  const pts = [
    [0, 1],
    [0.5, 1],
    [3, 0.6],
    [5, 0.3],
    [10, 0.2],
  ];
  if (co2 >= 10) return 0.2;
  for (let i = 1; i < pts.length; i += 1) {
    const [x0, y0] = pts[i - 1];
    const [x1, y1] = pts[i];
    if (co2 <= x1) return y0 + ((y1 - y0) * (co2 - x0)) / (x1 - x0);
  }
  return 0.2;
}

/** Respiration rate in % of the best rate, rounded. @param {Store} s */
export function rate(s) {
  const r =
    tempFactor(s.temp) * waterFactor(s.produce, s.water) * o2Factor(s.o2) * co2Factor(s.co2);
  return Math.round(1000 * r) / 10;
}

/**
 * Conditions that kill the cells or let mould grow, so the produce spoils
 * fast whatever its respiration rate.
 * @param {Store} s
 * @returns {null | { id: 'dong-da' | 'thieu-o2' | 'am-moc' | 'nong', text: string }}
 */
export function damage(s) {
  if (s.produce === 'qua' && s.temp < 0)
    return {
      id: 'dong-da',
      text: 'Dưới 0 °C, nước trong tế bào rau quả đóng băng làm vỡ tế bào: hô hấp ngừng vì tế bào chết, rau quả bị úng, nhũn khi rã đông.',
    };
  if (s.o2 < 1)
    return {
      id: 'thieu-o2',
      text: 'Gần như không còn oxygen: tế bào không hô hấp bình thường được, nông sản bị ngạt, lên men, có mùi rượu rồi thối hỏng.',
    };
  if (s.produce === 'hat' && s.water > GRAIN_WET)
    return {
      id: 'am-moc',
      text: 'Hạt còn quá ẩm: hô hấp mạnh làm kho nóng và ẩm thêm, hạt dễ nảy mầm, bị mốc. Cần phơi hoặc sấy hạt khô đến khoảng 13-16 % nước.',
    };
  if (s.temp >= 40)
    return {
      id: 'nong',
      text:
        s.produce === 'qua'
          ? 'Kho quá nóng: rau quả nhanh mất nước, héo, chất lượng giảm nhanh.'
          : 'Kho quá nóng: hạt nóng lên, dễ mất sức nảy mầm và giảm chất lượng nhanh.',
    };
  return null;
}

/** Days the produce keeps at the best rate; storage time is this over the rate. */
const BASE_DAYS = { hat: 18, qua: 3.5 };

/** Days the produce keeps when it is damaged. */
const DAMAGED_DAYS = { hat: 10, qua: 2 };

/**
 * Estimated storage time in days.
 * @param {Store} s
 */
export function storageDays(s) {
  const r = rate(s) / 100;
  const days = BASE_DAYS[s.produce] / Math.max(r, 0.005);
  const cap = s.produce === 'hat' ? 900 : 120;
  const d = damage(s);
  return Math.round(Math.min(cap, d ? Math.min(days, DAMAGED_DAYS[s.produce]) : days));
}

/**
 * Storage time in words, in days below two months and in months above.
 * @param {number} days
 */
export function durationText(days) {
  if (days < 60) return `khoảng ${days} ngày`;
  return `khoảng ${Math.round(days / 30)} tháng`;
}

/**
 * The factor holding respiration lowest, or what to change next, as advice
 * for the learner.
 * @param {Store} s
 */
export function advice(s) {
  const d = damage(s);
  if (d) return d.text;
  const f = [
    { id: 'temp', v: tempFactor(s.temp) },
    { id: 'water', v: waterFactor(s.produce, s.water) },
    { id: 'o2', v: o2Factor(s.o2) },
    { id: 'co2', v: co2Factor(s.co2) },
  ];
  if (f.every((x) => x.v > 0.6))
    return s.produce === 'hat'
      ? 'Kho gần như điều kiện thường: hạt còn ẩm và ấm nên hô hấp mạnh, phân giải nhiều chất hữu cơ. Thử phơi khô hạt hoặc hạ nhiệt độ.'
      : 'Rau quả hô hấp mạnh ở nhiệt độ phòng nên nhanh héo, mất chất. Thử hạ nhiệt độ (bảo quản lạnh) hoặc tăng CO₂.';
  const best = f.reduce((a, b) => (b.v < a.v ? b : a));
  switch (best.id) {
    case 'temp':
      return 'Nhiệt độ thấp làm chậm hoạt động của enzyme nên hô hấp yếu: đây là cơ sở của bảo quản lạnh.';
    case 'water':
      return 'Hạt khô chứa ít nước nên hô hấp rất yếu: đây là cơ sở của bảo quản khô.';
    case 'o2':
      return 'Oxygen dưới khoảng 5 % nên hô hấp giảm; nhưng không được để hết hẳn oxygen.';
    default:
      return 'Nồng độ CO₂ cao (từ khoảng 3-5 %) ức chế hô hấp: đây là cơ sở của bảo quản trong kho kín giàu CO₂.';
  }
}
