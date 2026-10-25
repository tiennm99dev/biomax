/**
 * Population ecology (sinh thái học quần thể): size from births, deaths and
 * migration, density, exponential growth (đường cong chữ J, môi trường không
 * giới hạn) and logistic growth (đường cong chữ S, môi trường có sức chứa K),
 * and the shape of an age pyramid.
 */

/**
 * Size after one period: N + B − D + I − E (sinh sản, tử vong, nhập cư, xuất cư).
 * @param {number} n
 * @param {{ births?: number, deaths?: number, immigrants?: number, emigrants?: number }} change
 */
export function nextSize(n, change) {
  const { births = 0, deaths = 0, immigrants = 0, emigrants = 0 } = change;
  return n + births - deaths + immigrants - emigrants;
}

/**
 * Growth rate per period from birth and death rates (and optional
 * migration rates), all as fractions of the population: r = b − d + i − e.
 * @param {{ birth: number, death: number, immigration?: number, emigration?: number }} rates
 */
export function growthRate(rates) {
  return rates.birth - rates.death + (rates.immigration ?? 0) - (rates.emigration ?? 0);
}

/**
 * Density (mật độ): individuals per unit of area or volume.
 * @param {number} n
 * @param {number} space
 */
export function density(n, space) {
  if (space <= 0) throw new RangeError('area or volume must be positive');
  return n / space;
}

/**
 * Exponential growth in an unlimited environment: N(t) = N₀·e^(rt).
 * @param {number} n0
 * @param {number} r intrinsic growth rate per unit of time
 * @param {number} t
 */
export function exponential(n0, r, t) {
  return n0 * Math.exp(r * t);
}

/**
 * Logistic growth towards carrying capacity K:
 * N(t) = K / (1 + ((K − N₀) / N₀)·e^(−rt)).
 * @param {number} n0
 * @param {number} r
 * @param {number} k
 * @param {number} t
 */
export function logistic(n0, r, k, t) {
  if (n0 <= 0) return 0;
  return k / (1 + ((k - n0) / n0) * Math.exp(-r * t));
}

/**
 * Instantaneous growth (individuals per unit of time): rN for exponential
 * growth, rN(K − N)/K for logistic growth.
 * @param {number} n
 * @param {number} r
 * @param {number} [k] omit for exponential growth
 */
export function growthSpeed(n, r, k) {
  return k === undefined ? r * n : (r * n * (k - n)) / k;
}

/**
 * Time for an exponentially growing population to double: ln 2 / r.
 * @param {number} r
 */
export function doublingTime(r) {
  return r > 0 ? Math.LN2 / r : Infinity;
}

/**
 * When logistic growth is fastest: N = K/2, reached at t = ln((K − N₀)/N₀) / r
 * (0 if the population starts at or above K/2).
 * @param {number} n0
 * @param {number} r
 * @param {number} k
 */
export function inflection(n0, r, k) {
  const t = n0 >= k / 2 ? 0 : Math.log((k - n0) / n0) / r;
  return { t, n: k / 2 };
}

/**
 * Sample points of a growth curve from t = 0 to `until`, `steps` intervals.
 * @param {'exponential' | 'logistic'} model
 * @param {{ n0: number, r: number, k?: number, until: number, steps?: number }} opts
 * @returns {Array<{ t: number, n: number }>}
 */
export function curve(model, opts) {
  const { n0, r, k = Infinity, until, steps = 60 } = opts;
  return Array.from({ length: steps + 1 }, (_, i) => {
    const t = (until * i) / steps;
    return { t, n: model === 'exponential' ? exponential(n0, r, t) : logistic(n0, r, k, t) };
  });
}

/**
 * Discrete growth year by year, N(t+1) = N(t)·(1 + r), rounded to whole
 * individuals, as in textbook tables.
 * @param {number} n0
 * @param {number} r
 * @param {number} years
 */
export function yearly(n0, r, years) {
  /** @type {number[]} */
  const out = [n0];
  for (let i = 0; i < years; i++) out.push(Math.round(out[i] * (1 + r)));
  return out;
}

/** @typedef {'developing' | 'stable' | 'declining'} PyramidShape */

export const PYRAMID_LABELS = /** @type {Record<PyramidShape, string>} */ ({
  developing: 'Tháp phát triển (dạng phát triển)',
  stable: 'Tháp ổn định',
  declining: 'Tháp suy thoái',
});

/**
 * Shape of an age pyramid from the sizes of its three ecological age groups:
 * before, during and after reproduction. A broad base (pre-reproductive
 * group more than 10% larger than the reproductive group) is developing, a
 * base more than 10% smaller is declining, otherwise stable.
 * @param {{ pre: number, reproductive: number, post: number }} groups
 * @returns {PyramidShape}
 */
export function pyramidShape(groups) {
  if (groups.reproductive <= 0) return groups.pre > 0 ? 'developing' : 'declining';
  const q = groups.pre / groups.reproductive;
  if (q > 1.1) return 'developing';
  if (q < 0.9) return 'declining';
  return 'stable';
}

/**
 * Shares of the three age groups, in percent, summing to 100.
 * @param {{ pre: number, reproductive: number, post: number }} groups
 */
export function ageShares(groups) {
  const total = groups.pre + groups.reproductive + groups.post;
  if (total <= 0) return { pre: 0, reproductive: 0, post: 0 };
  return {
    pre: (groups.pre / total) * 100,
    reproductive: (groups.reproductive / total) * 100,
    post: (groups.post / total) * 100,
  };
}
