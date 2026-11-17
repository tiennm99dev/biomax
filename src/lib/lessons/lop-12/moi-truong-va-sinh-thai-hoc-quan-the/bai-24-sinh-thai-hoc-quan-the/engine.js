/**
 * Self-regulation of population size (điều hoà số lượng cá thể): year by
 * year the population grows by r·N·(1 − N/K). Below the carrying capacity K
 * resources are plentiful, births exceed deaths and the size rises; above K
 * competition, disease and predators raise deaths and emigration, and the
 * size falls. Either way it returns towards K, the equilibrium.
 *
 * Events shift the size without regard to density (a forest fire, a flood)
 * or add individuals (release, immigration); the same density-dependent
 * feedback then brings the population back. With 0 < r ≤ 1 the return from
 * below is smooth; from above it is smooth while N ≤ K/r, which `MAX` keeps.
 */

export const K = 1000;
export const R = 0.4;
/** Largest size the widget allows, below K / R so a crowded population never drops under K in one year. */
export const MAX = 2000;
export const START = 1000;

/** @typedef {'tang' | 'giam' | 'can-bang'} Trend */

/**
 * Size next year, rounded to whole individuals and never below 0.
 * @param {number} n
 * @param {number} [r]
 * @param {number} [k]
 */
export function nextYear(n, r = R, k = K) {
  return Math.max(0, Math.round(n + r * n * (1 - n / k)));
}

/**
 * Where the population heads from size `n`: within 2% of K counts as balance.
 * @param {number} n
 * @param {number} [k]
 * @returns {Trend}
 */
export function trendOf(n, k = K) {
  if (Math.abs(n - k) <= 0.02 * k) return 'can-bang';
  return n < k ? 'tang' : 'giam';
}

/**
 * Size right after a forest fire that kills `share` of the population,
 * whatever its density.
 * @param {number} n
 * @param {number} share 0..1
 */
export function afterDisaster(n, share) {
  return Math.round(n * (1 - share));
}

/**
 * The live explanation for a population of size `n`.
 * @param {number} n
 * @param {number} [k]
 */
export function explain(n, k = K) {
  const t = trendOf(n, k);
  if (n === 0) return 'Quần thể đã bị diệt vong: không còn cá thể nào để sinh sản.';
  if (t === 'can-bang')
    return 'Số lượng xấp xỉ sức chứa K: mức sinh sản cân bằng với mức tử vong và xuất cư, quần thể ở trạng thái cân bằng.';
  if (t === 'tang')
    return 'Số lượng dưới sức chứa K: nguồn sống dồi dào, cạnh tranh giảm, mức sinh sản tăng và tử vong giảm, nhập cư có thể tăng, nên số lượng tăng dần về K.';
  return 'Số lượng vượt sức chứa K: thiếu thức ăn, nơi ở, cạnh tranh gay gắt, dịch bệnh và vật ăn thịt tăng, nên tử vong và xuất cư tăng, sinh sản giảm, số lượng giảm dần về K.';
}
