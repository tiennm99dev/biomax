/**
 * The energy pyramid (tháp năng lượng): energy stored at each trophic level
 * when every step up passes on a fixed share, the ecological efficiency
 * H = E(n+1) / E(n) · 100% (about 10% in nature). The rest of each level's
 * energy is lost to respiration (heat), excretion and parts that are shed
 * or left uneaten, so a chain cannot grow long.
 */

import { energyAlong } from '#lib/domain/food-web.js';

export const LEVEL_NAMES = [
  'Sinh vật sản xuất',
  'Sinh vật tiêu thụ bậc 1',
  'Sinh vật tiêu thụ bậc 2',
  'Sinh vật tiêu thụ bậc 3',
  'Sinh vật tiêu thụ bậc 4',
  'Sinh vật tiêu thụ bậc 5',
];

/**
 * Each trophic level of the pyramid, from the producers up: its energy,
 * the share of the producers' energy it holds and the energy it fails to
 * pass on to the next level (null for the top level).
 * @param {number} start energy of the producers
 * @param {number} percent ecological efficiency in percent
 * @param {number} levels number of trophic levels, 2..6
 */
export function pyramid(start, percent, levels) {
  const energy = energyAlong(levels, start, percent / 100);
  return energy.map((e, i) => ({
    level: i + 1,
    name: LEVEL_NAMES[i],
    energy: e,
    share: (e / start) * 100,
    lost: i < levels - 1 ? e - energy[i + 1] : null,
  }));
}

/**
 * Ecological efficiency between two levels, in percent.
 * @param {number} lower
 * @param {number} higher
 */
export function efficiency(lower, higher) {
  return (higher / lower) * 100;
}

/**
 * Bar width for an energy value: proportional on the linear scale, by
 * orders of magnitude (from `floor` up to `start`) on the log scale.
 * @param {number} energy
 * @param {number} start
 * @param {'linear' | 'log'} scale
 * @param {number} [floor] the energy drawn with zero width on the log scale
 * @returns {number} 0..1
 */
export function barShare(energy, start, scale, floor = 0.01) {
  if (scale === 'linear') return energy / start;
  if (energy <= floor) return 0;
  return Math.log10(energy / floor) / Math.log10(start / floor);
}
