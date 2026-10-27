/**
 * Ecological limits (giới hạn sinh thái) of a species for one factor,
 * here temperature. Between the lower and the upper limit the species can
 * live; inside the favourable range (khoảng thuận lợi) it grows best, with
 * the peak at the optimum (điểm cực thuận); between the favourable range
 * and a limit lies the tolerance range (khoảng chống chịu), where its
 * activity is held back. Beyond a limit it dies.
 *
 * The tilapia values are the ones the textbook draws for Vietnam: limits
 * 5 °C and 42 °C, favourable range 20-35 °C, optimum 30 °C. Fish A, B and C
 * are made-up species for the "which fish should we farm" activity.
 */

/**
 * @typedef {{
 *   id: string;
 *   name: string;
 *   lower: number;
 *   favLow: number;
 *   optimum: number;
 *   favHigh: number;
 *   upper: number;
 * }} Limits
 */

/** @typedef {'chet' | 'chong-chiu' | 'thuan-loi' | 'cuc-thuan'} Zone */

/** @type {Limits} */
export const TILAPIA = {
  id: 'ca-ro-phi',
  name: 'Cá rô phi ở Việt Nam',
  lower: 5,
  favLow: 20,
  optimum: 30,
  favHigh: 35,
  upper: 42,
};

/** @type {Limits[]} */
export const FARM_FISH = [
  { id: 'a', name: 'Loài cá A', lower: 10, favLow: 22, optimum: 28, favHigh: 32, upper: 40 },
  { id: 'b', name: 'Loài cá B', lower: 2, favLow: 12, optimum: 18, favHigh: 24, upper: 30 },
  { id: 'c', name: 'Loài cá C', lower: 5, favLow: 15, optimum: 25, favHigh: 33, upper: 38 },
];

export const ZONE_LABELS = /** @type {Record<Zone, string>} */ ({
  chet: 'Ngoài giới hạn sinh thái: sinh vật chết',
  'chong-chiu': 'Khoảng chống chịu: hoạt động sống bị ức chế',
  'thuan-loi': 'Khoảng thuận lợi: sinh vật sinh trưởng, phát triển tốt',
  'cuc-thuan': 'Điểm cực thuận: sinh vật phát triển tốt nhất',
});

/**
 * Where the value `t` falls for the species. The limits themselves are
 * the death points (điểm gây chết).
 * @param {Limits} s
 * @param {number} t
 * @returns {Zone}
 */
export function zoneOf(s, t) {
  if (t <= s.lower || t >= s.upper) return 'chet';
  if (t === s.optimum) return 'cuc-thuan';
  if (t >= s.favLow && t <= s.favHigh) return 'thuan-loi';
  return 'chong-chiu';
}

/**
 * Relative activity of the species at `t`, from 0 at a limit to 1 at the
 * optimum: a smooth hump used to draw the tolerance curve.
 * @param {Limits} s
 * @param {number} t
 */
export function activity(s, t) {
  if (t <= s.lower || t >= s.upper) return 0;
  const span = t < s.optimum ? s.optimum - s.lower : s.upper - s.optimum;
  const u = (t - s.optimum) / span;
  return Math.cos((u * Math.PI) / 2) ** 2;
}

/**
 * How a species fares in water whose temperature ranges over the year from
 * `min` to `max`: it dies if any day leaves its limits, grows well if every
 * day stays in its favourable range, and is held back otherwise.
 * @param {Limits} s
 * @param {number} min
 * @param {number} max
 * @returns {'chet' | 'chong-chiu' | 'thuan-loi'}
 */
export function verdict(s, min, max) {
  if (min <= s.lower || max >= s.upper) return 'chet';
  if (min >= s.favLow && max <= s.favHigh) return 'thuan-loi';
  return 'chong-chiu';
}

/** Width of the ecological limit: upper minus lower. @param {Limits} s */
export const width = (s) => s.upper - s.lower;
