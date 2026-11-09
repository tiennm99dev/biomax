/**
 * Two virtual respiration experiments with germinating seeds.
 *
 * Heat: a flask of seeds warms as T = T0 + ΔT(1 − e^(−t/τ)), where ΔT grows
 * with the seeds' respiration and their mass, and an insulated flask keeps
 * heat ten times better than an open beaker. The rates are teaching values
 * chosen so 200 g of germinating seeds in a vacuum flask warm by about 7 °C
 * in a day, the size of change school experiments report.
 *
 * CO2: lime water under a bell jar clouds as the seeds' CO2 reaches it.
 */

/** @typedef {'nay-mam' | 'luoc' | 'kho'} SeedId */
/** @typedef {'phich' | 'coc'} FlaskId */

export const ROOM = 25;
export const RUN_HOURS = 24;

/** @type {Record<SeedId, { name: string, rate: number }>} Heat per gram, relative. */
export const SEEDS = {
  'nay-mam': { name: 'Hạt đang nảy mầm', rate: 1 },
  luoc: { name: 'Hạt nảy mầm đã luộc chín', rate: 0 },
  kho: { name: 'Hạt khô', rate: 0.02 },
};

/** @type {Record<FlaskId, { name: string, keep: number, tau: number }>} */
export const FLASKS = {
  phich: { name: 'Bình cách nhiệt (phích)', keep: 1, tau: 12 },
  coc: { name: 'Cốc thuỷ tinh hở', keep: 0.1, tau: 1.2 },
};

/** Final rise in °C per gram of germinating seeds in a vacuum flask. */
const RISE_PER_GRAM = 0.04;

/**
 * Temperature inside a flask after `hours`.
 * @param {SeedId} seed @param {FlaskId} flask @param {number} grams @param {number} hours
 */
export function temperature(seed, flask, grams, hours) {
  const f = FLASKS[flask];
  const rise = RISE_PER_GRAM * grams * SEEDS[seed].rate * f.keep;
  return ROOM + rise * (1 - Math.exp(-Math.max(0, hours) / f.tau));
}

/**
 * Readings every `step` hours from 0 to `hours`.
 * @param {SeedId} seed @param {FlaskId} flask @param {number} grams @param {number} hours @param {number} [step]
 */
export function trace(seed, flask, grams, hours, step = 1) {
  /** @type {number[]} */
  const out = [];
  for (let t = 0; t <= hours + 1e-9; t += step) out.push(temperature(seed, flask, grams, t));
  return out;
}

/**
 * @typedef {object} HeatSetup
 * @property {SeedId} test Seeds in flask A.
 * @property {SeedId} control Seeds in flask B.
 * @property {FlaskId} flask
 * @property {number} grams
 */

/**
 * @param {HeatSetup} s
 * @param {number} hours
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function describeHeat(s, hours) {
  if (s.test === s.control) {
    return {
      tone: 'warn',
      text: 'Hai bình giống hệt nhau thì không có gì để so sánh. Bình đối chứng chỉ khác bình thí nghiệm ở một điều: hạt đã chết.',
    };
  }
  if (s.test !== 'nay-mam') {
    return {
      tone: 'warn',
      text: 'Bình A cần hạt đang nảy mầm, vì đó là hạt hô hấp mạnh nhất.',
    };
  }
  if (hours === 0) {
    return {
      tone: 'info',
      text: 'Hai nhiệt kế cùng chỉ nhiệt độ phòng. Bấm chạy để theo dõi trong $24$ giờ.',
    };
  }
  const gap =
    temperature(s.test, s.flask, s.grams, hours) - temperature(s.control, s.flask, s.grams, hours);
  if (s.flask === 'coc') {
    return {
      tone: 'warn',
      text: 'Cốc hở để nhiệt thoát ra ngoài gần hết nên hai nhiệt kế gần như bằng nhau. Cần bình cách nhiệt để giữ nhiệt do hô hấp toả ra.',
    };
  }
  if (gap < 1) {
    return {
      tone: 'info',
      text: 'Nhiệt độ bình A đang nhích lên. Chờ thêm hoặc dùng nhiều hạt hơn để thấy rõ.',
    };
  }
  return {
    tone: 'ok',
    text: 'Bình hạt nảy mầm nóng hơn rõ rệt: hô hấp giải phóng năng lượng, một phần thành nhiệt. Hạt luộc chín đã chết, không hô hấp nên nhiệt độ không đổi.',
  };
}

/** @typedef {'nay-mam' | 'luoc' | 'trong'} JarId */

/** @type {Record<JarId, { name: string, rate: number }>} Cloudiness per minute, relative. */
export const JARS = {
  'nay-mam': { name: 'Đĩa hạt nảy mầm', rate: 1 },
  luoc: { name: 'Đĩa hạt luộc chín', rate: 0 },
  trong: { name: 'Không đặt gì', rate: 0 },
};

/** Cloudiness of the lime water from 0 (clear) to 1 (milky); air alone barely clouds it. */
export function cloudiness(/** @type {JarId} */ jar, /** @type {number} */ minutes) {
  const t = Math.max(0, minutes);
  const air = 0.03 * Math.min(1, t / 60);
  return Math.min(1, air + JARS[jar].rate * (1 - Math.exp(-t / 40)) * 0.9);
}

/**
 * @param {JarId} jar What sits in bell jar A.
 * @param {number} minutes
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function describeJar(jar, minutes) {
  if (minutes < 10) {
    return { tone: 'info', text: 'Hai cốc nước vôi trong còn trong. Kéo thanh thời gian để chờ.' };
  }
  if (jar !== 'nay-mam') {
    return {
      tone: 'warn',
      text: 'Chuông A không có hạt sống nên nước vôi vẫn trong như chuông B: không có hô hấp thì không có thêm $\\mathrm{CO_2}$.',
    };
  }
  if (minutes < 40) {
    return { tone: 'info', text: 'Mặt cốc nước vôi ở chuông A bắt đầu có váng mờ.' };
  }
  return {
    tone: 'ok',
    text: 'Chuông A: váng trắng đục trên mặt nước vôi, vì hạt nảy mầm hô hấp thải $\\mathrm{CO_2}$: $\\mathrm{CO_2 + Ca(OH)_2 \\to CaCO_3\\downarrow + H_2O}$. Chuông B gần như không đổi.',
  };
}
