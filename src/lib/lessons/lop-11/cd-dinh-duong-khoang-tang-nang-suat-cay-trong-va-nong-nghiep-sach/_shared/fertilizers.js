/**
 * The common single-nutrient fertilizers of the chapter and the share of
 * nutrient each carries, written the way Vietnamese bags label them: urea by
 * its nitrogen, super lân by P₂O₅ and kali clorua by K₂O.
 */
import { tidy } from '#lib/core/number-format.js';

/**
 * @typedef {'N' | 'P' | 'K'} Nutrient
 * @typedef {{ nutrient: Nutrient, name: string, label: string, share: number }} Fertilizer
 */

/** @type {Nutrient[]} */
export const NUTRIENTS = ['N', 'P', 'K'];

/** How each nutrient is counted on a bag. @type {Record<Nutrient, string>} */
export const NUTRIENT_FORM = { N: 'N', P: 'P₂O₅', K: 'K₂O' };

/** @type {Record<Nutrient, Fertilizer>} */
export const FERTILIZERS = {
  N: { nutrient: 'N', name: 'Phân đạm urea', label: 'Urea (46% N)', share: 0.46 },
  P: { nutrient: 'P', name: 'Phân super lân', label: 'Super lân (16% P₂O₅)', share: 0.16 },
  K: { nutrient: 'K', name: 'Phân kali clorua', label: 'Kali clorua (60% K₂O)', share: 0.6 },
};

/**
 * The mass of fertilizer that carries a given mass of nutrient.
 * @param {number} nutrientKg @param {Nutrient} nutrient
 */
export function fertilizerFor(nutrientKg, nutrient) {
  return tidy(nutrientKg / FERTILIZERS[nutrient].share);
}
