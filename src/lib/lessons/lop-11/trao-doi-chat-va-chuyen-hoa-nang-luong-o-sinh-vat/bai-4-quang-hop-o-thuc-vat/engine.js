/**
 * Two teaching models of photosynthesis, in relative units.
 *
 * The light curve: gross photosynthesis rises with light and levels off at a
 * ceiling set by the CO2 concentration and the temperature; respiration runs
 * regardless. The numbers were chosen to show the book's trends, not measured.
 *
 * The two phases: pools of ATP and NADPH, RuBP, 3-PGA and sugar, connected with
 * the true carbon counts of the Calvin cycle, so that taking away light or CO2
 * makes the pools move the way the classic experiments found.
 */

/** @typedef {'c3' | 'bong' | 'c4'} PlantId */

/**
 * `ceiling`: the highest rate; `slope`: the rate gained per percent of light at
 * low light; `dark`: respiration at 25 °C; `best`, `spread`: the temperature
 * curve; `co2Least`, `co2Scale`: the CO2 curve.
 * @typedef {object} Plant
 * @property {PlantId} id
 * @property {string} name
 * @property {number} ceiling
 * @property {number} slope
 * @property {number} dark
 * @property {number} best
 * @property {number} spread
 * @property {number} co2Least
 * @property {number} co2Scale
 */

/** @type {Plant[]} */
export const PLANTS = [
  {
    id: 'c3',
    name: 'Lúa (C3, ưa sáng)',
    ceiling: 25,
    slope: 1.5,
    dark: 3,
    best: 27,
    spread: 14,
    co2Least: 0.008,
    co2Scale: 0.02,
  },
  {
    id: 'bong',
    name: 'Cây ưa bóng',
    ceiling: 7.5,
    slope: 1.5,
    dark: 0.8,
    best: 25,
    spread: 12,
    co2Least: 0.008,
    co2Scale: 0.02,
  },
  {
    id: 'c4',
    name: 'Ngô (C4)',
    ceiling: 40,
    slope: 1.34,
    dark: 3,
    best: 33,
    spread: 13,
    co2Least: 0.001,
    co2Scale: 0.012,
  },
];

/** Light at which the curve counts as saturated: 95 % of its ceiling. */
const SATURATED_LOG = Math.log(20);
const CO2_HARM_FROM = 0.15;
const CO2_HARM_AT = 0.2;

export const AIR_CO2 = 0.04;

/**
 * The share of the ceiling the CO2 concentration (in percent) allows.
 * @param {Plant} p
 * @param {number} co2
 */
export function co2Factor(p, co2) {
  if (co2 <= p.co2Least) return 0;
  const rise = 1 - Math.exp(-(co2 - p.co2Least) / p.co2Scale);
  if (co2 <= CO2_HARM_FROM) return rise;
  const harm = Math.min(1, (co2 - CO2_HARM_FROM) / (CO2_HARM_AT - CO2_HARM_FROM));
  return rise * (1 - 0.4 * harm);
}

/**
 * The share of the ceiling the temperature (in °C) allows.
 * @param {Plant} p
 * @param {number} temp
 */
export const tempFactor = (p, temp) => Math.exp(-(((temp - p.best) / p.spread) ** 2));

/**
 * @typedef {{ co2: number, temp: number }} Air
 */

/**
 * @param {Plant} p
 * @param {Air} air
 */
export const ceilingNow = (p, air) => p.ceiling * co2Factor(p, air.co2) * tempFactor(p, air.temp);

/**
 * Respiration; grows by 70 % for every 10 °C.
 * @param {Plant} p
 * @param {number} temp
 */
export const respiration = (p, temp) => p.dark * 1.7 ** ((temp - 25) / 10);

/**
 * Gross photosynthesis at this light (percent of full sunlight).
 * @param {Plant} p
 * @param {Air} air
 * @param {number} light
 */
export function gross(p, air, light) {
  const top = ceilingNow(p, air);
  return top <= 0 ? 0 : top * (1 - Math.exp((-p.slope * light) / top));
}

/**
 * Net photosynthesis, the rate seen from outside the leaf.
 * @param {Plant} p
 * @param {Air} air
 * @param {number} light
 */
export const net = (p, air, light) => gross(p, air, light) - respiration(p, air.temp);

/**
 * The light compensation point, or null if the plant can never break even.
 * @param {Plant} p
 * @param {Air} air
 * @returns {number | null}
 */
export function compensationPoint(p, air) {
  const top = ceilingNow(p, air);
  const r = respiration(p, air.temp);
  if (top <= r) return null;
  return -(top / p.slope) * Math.log(1 - r / top);
}

/**
 * The light saturation point, or null without photosynthesis.
 * @param {Plant} p
 * @param {Air} air
 * @returns {number | null}
 */
export function saturationPoint(p, air) {
  const top = ceilingNow(p, air);
  return top <= 0 ? null : (top / p.slope) * SATURATED_LOG;
}

/**
 * The state of the leaf at this light, and what to say about it.
 * @param {Plant} p
 * @param {Air} air
 * @param {number} light
 * @returns {{ zone: 'never' | 'below' | 'at' | 'rising' | 'flat', tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function describeLeaf(p, air, light) {
  const lc = compensationPoint(p, air);
  const ls = saturationPoint(p, air);
  if (lc === null || ls === null) {
    return {
      zone: 'never',
      tone: 'warn',
      text: 'Ở điều kiện này quang hợp không bao giờ bù nổi hô hấp: cây tiêu hao chất hữu cơ dù nắng đến đâu. Thử đưa nhiệt độ hoặc nồng độ $\\mathrm{CO_2}$ về mức phù hợp.',
    };
  }
  if (Math.abs(light - lc) <= 1) {
    return {
      zone: 'at',
      tone: 'ok',
      text: 'Gần điểm bù ánh sáng: cường độ quang hợp bằng cường độ hô hấp, lá không tích luỹ được chất hữu cơ.',
    };
  }
  if (light < lc) {
    return {
      zone: 'below',
      tone: 'warn',
      text: 'Dưới điểm bù ánh sáng: hô hấp mạnh hơn quang hợp, lá tiêu hao chất hữu cơ. Lá thải $\\mathrm{CO_2}$ ra ngoài.',
    };
  }
  if (light >= ls) {
    return {
      zone: 'flat',
      tone: 'ok',
      text: 'Đã qua điểm bão hoà ánh sáng: tăng thêm ánh sáng, quang hợp gần như không tăng. Muốn tăng nữa phải đổi yếu tố khác, như nồng độ $\\mathrm{CO_2}$.',
    };
  }
  return {
    zone: 'rising',
    tone: 'info',
    text: 'Giữa điểm bù và điểm bão hoà: ánh sáng càng mạnh, quang hợp càng tăng. Lúc này ánh sáng đang là yếu tố giới hạn.',
  };
}

/** @typedef {{ light: boolean, co2: boolean, power: number, rubp: number, pga: number, sugar: number, oxygen: number }} Chloroplast */

/** @type {Chloroplast} */
export const START_CHLOROPLAST = {
  light: true,
  co2: true,
  power: 8,
  rubp: 6,
  pga: 4,
  sugar: 0,
  oxygen: 0,
};

const FULL_POWER = 10;
const CHARGE_RATE = 2;
const FIX_RATE = 0.15;
const REDUCE_RATE = 0.6;
const POWER_USE = 0.3;
const TICK = 0.05;

/**
 * The pools after `seconds`. One CO2 joins one RuBP to give two 3-PGA. For each
 * 3-PGA reduced, 1/6 of the product leaves as sugar and 5/6 regenerates RuBP,
 * which keeps the carbon count exact (5 C in RuBP, 3 C in 3-PGA).
 * @param {Chloroplast} c
 * @param {number} seconds
 * @returns {Chloroplast}
 */
export function advance(c, seconds) {
  let { power, rubp, pga, sugar, oxygen } = c;
  for (let left = seconds; left > 1e-9; left -= TICK) {
    const dt = Math.min(TICK, left);
    const charged = c.light ? CHARGE_RATE * (1 - power / FULL_POWER) * dt : 0;
    const fixed = c.co2 ? FIX_RATE * rubp * dt : 0;
    const reduced = REDUCE_RATE * pga * (power / FULL_POWER) * dt;
    power = Math.max(0, power + charged - POWER_USE * reduced);
    rubp = rubp - fixed + reduced / 2;
    pga = pga + 2 * fixed - reduced;
    sugar += reduced / 6;
    oxygen += charged;
  }
  return { ...c, power, rubp, pga, sugar, oxygen };
}

/**
 * The feedback sentence for the chloroplast's conditions.
 * @param {Chloroplast} c
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function describePhases(c) {
  if (c.light && c.co2) {
    return {
      tone: 'ok',
      text: 'Pha sáng tạo ATP, NADPH và thải $\\mathrm{O_2}$; chu trình Calvin dùng chúng để cố định $\\mathrm{CO_2}$ thành đường. Hai pha nối với nhau.',
    };
  }
  if (!c.light && c.co2) {
    return {
      tone: 'warn',
      text: 'Tắt ánh sáng: pha sáng dừng, ngừng thải $\\mathrm{O_2}$, ATP và NADPH cạn dần. RuBP vẫn nhận $\\mathrm{CO_2}$ nhưng 3-PGA không được khử: 3-PGA tích lại, RuBP giảm, đường ngừng tạo.',
    };
  }
  if (c.light && !c.co2) {
    return {
      tone: 'warn',
      text: 'Hết $\\mathrm{CO_2}$: không có gì để gắn vào RuBP. 3-PGA giảm, RuBP tích lại, ATP và NADPH không được dùng nên đầy lên; đường ngừng tạo.',
    };
  }
  return {
    tone: 'info',
    text: 'Không ánh sáng, không $\\mathrm{CO_2}$: cả hai pha đều dừng, các chất chỉ còn đổi chậm cho đến khi hết ATP.',
  };
}

/** Seconds of simulated time per second of real time. */
export const SPEED = 3;
/** How long the animation runs after a change, in simulated seconds. */
export const RUN_SECONDS = 45;

/** @type {import('#lib/core/card-sorter.js').SortBin[]} */
export const GROUP_BINS = [
  { id: 'c3', label: 'Thực vật C3' },
  { id: 'c4', label: 'Thực vật C4' },
  { id: 'cam', label: 'Thực vật CAM' },
];

/** @type {import('#lib/core/card-sorter.js').SortCard[]} */
export const GROUP_CARDS = [
  { id: 'lua', label: 'Lúa', bin: 'c3', why: 'Lúa chỉ có chu trình Calvin.' },
  { id: 'dau', label: 'Đậu', bin: 'c3', why: 'Đậu là cây C3.' },
  { id: 'khoai', label: 'Khoai', bin: 'c3', why: 'Khoai là cây C3.' },
  {
    id: 'ngo',
    label: 'Ngô',
    bin: 'c4',
    why: 'Ngô cố định CO₂ sơ bộ ở tế bào mô giậu.',
  },
  { id: 'mia', label: 'Mía', bin: 'c4', why: 'Mía là cây C4 ưa nóng, ưa sáng.' },
  { id: 'den', label: 'Rau dền', bin: 'c4', why: 'Rau dền là cây C4.' },
  { id: 'dua', label: 'Dứa', bin: 'cam', why: 'Dứa mở khí khổng ban đêm để tiết kiệm nước.' },
  {
    id: 'xuong-rong',
    label: 'Xương rồng',
    bin: 'cam',
    why: 'Xương rồng sống vùng khô hạn, là cây CAM.',
  },
  { id: 'thuoc-bong', label: 'Thuốc bỏng', bin: 'cam', why: 'Thuốc bỏng mọng nước là cây CAM.' },
];
