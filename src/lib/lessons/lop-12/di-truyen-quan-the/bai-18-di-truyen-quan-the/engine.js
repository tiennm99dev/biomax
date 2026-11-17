/**
 * Population genetics of one gene with two alleles A and a: allele and
 * genotype frequencies, the genetic structure (cấu trúc di truyền)
 * x AA : y Aa : z aa, random mating (ngẫu phối, Hardy–Weinberg) and
 * self-fertilisation (tự thụ phấn), which halves the heterozygotes each
 * generation and keeps the allele frequencies.
 */

import { formatNumber, numTex, tidy } from '#lib/core/number-format.js';

/** @typedef {{ AA: number, Aa: number, aa: number }} Structure genotype frequencies adding up to 1 */
/** @typedef {'random' | 'selfing'} Mating */

export const MATING = /** @type {const} */ ({
  random: 'Ngẫu phối',
  selfing: 'Tự thụ phấn',
});

/**
 * Genotype frequencies from counts of individuals.
 * @param {{ AA: number, Aa: number, aa: number }} counts
 * @returns {Structure}
 */
export function fromCounts(counts) {
  const n = counts.AA + counts.Aa + counts.aa;
  if (n <= 0) throw new RangeError('a population needs at least one individual');
  return { AA: counts.AA / n, Aa: counts.Aa / n, aa: counts.aa / n };
}

/**
 * Allele frequencies: p = x + y/2, q = z + y/2.
 * @param {Structure} g
 */
export function alleles(g) {
  return { p: tidy(g.AA + g.Aa / 2), q: tidy(g.aa + g.Aa / 2) };
}

/**
 * Hardy–Weinberg structure p² AA : 2pq Aa : q² aa.
 * @param {number} p
 * @returns {Structure}
 */
export function hardyWeinberg(p) {
  const q = 1 - p;
  return { AA: tidy(p * p), Aa: tidy(2 * p * q), aa: tidy(q * q) };
}

/**
 * One generation of self-fertilisation: Aa gives ¼ AA : ½ Aa : ¼ aa,
 * homozygotes breed true.
 * @param {Structure} g
 * @returns {Structure}
 */
export function selfOnce(g) {
  return { AA: tidy(g.AA + g.Aa / 4), Aa: tidy(g.Aa / 2), aa: tidy(g.aa + g.Aa / 4) };
}

/**
 * Structure after n generations of self-fertilisation, in closed form:
 * Aa = y/2ⁿ, AA = x + (y − y/2ⁿ)/2, aa = z + (y − y/2ⁿ)/2.
 * @param {Structure} g
 * @param {number} n
 * @returns {Structure}
 */
export function selfFor(g, n) {
  const h = g.Aa / 2 ** n;
  const gain = (g.Aa - h) / 2;
  return { AA: tidy(g.AA + gain), Aa: tidy(h), aa: tidy(g.aa + gain) };
}

/**
 * The next generation under the chosen mating.
 * @param {Structure} g
 * @param {Mating} mating
 */
export function nextGeneration(g, mating) {
  return mating === 'random' ? hardyWeinberg(alleles(g).p) : selfOnce(g);
}

/**
 * The parents and `n` generations after them.
 * @param {Structure} g
 * @param {Mating} mating
 * @param {number} n
 */
export function generations(g, mating, n) {
  const list = [g];
  for (let i = 0; i < n; i++) list.push(nextGeneration(list[i], mating));
  return list;
}

/**
 * Hardy–Weinberg equilibrium check: x·z = (y/2)², i.e. the structure equals
 * p² : 2pq : q².
 * @param {Structure} g
 */
export function isBalanced(g) {
  return Math.abs(g.AA * g.aa - (g.Aa / 2) ** 2) < 1e-9;
}

/**
 * The structure written the book's way: "0,36 AA : 0,48 Aa : 0,16 aa".
 * @param {Structure} g
 * @param {number} [places]
 */
export function structureText(g, places = 6) {
  return `${formatNumber(g.AA, places)} AA : ${formatNumber(g.Aa, places)} Aa : ${formatNumber(g.aa, places)} aa`;
}

/** Labels of the generations: P, F1, F2, … */
/** @param {number} i */
export function generationName(i) {
  return i === 0 ? 'P' : `F${i}`;
}

/**
 * Starting structure from two whole percents (AA and Aa), aa taking the rest.
 * Aa is cut down so the three never add past 100 %.
 * @param {number} aaPercent share of AA, 0..100
 * @param {number} hetPercent share of Aa, 0..100
 * @returns {Structure}
 */
export function fromPercents(aaPercent, hetPercent) {
  const x = Math.max(0, Math.min(100, Math.round(aaPercent)));
  const y = Math.max(0, Math.min(100 - x, Math.round(hetPercent)));
  return { AA: x / 100, Aa: y / 100, aa: tidy((100 - x - y) / 100) };
}

/**
 * What the widget says about the latest generation.
 * @param {Structure[]} list parents first
 * @param {Mating} mating
 */
export function generationNote(list, mating) {
  const last = list[list.length - 1];
  const name = generationName(list.length - 1);
  const { p, q } = alleles(last);
  const freq = `$p = ${numTex(p, 4)}$, $q = ${numTex(q, 4)}$`;
  const here = `${name}: ${structureText(last)}; ${freq}.`;
  if (mating === 'random') {
    if (list.length === 1)
      return isBalanced(last)
        ? `${here} Quần thể đã ở trạng thái cân bằng Hardy–Weinberg.`
        : `${here} Quần thể chưa cân bằng. Bấm "Thế hệ tiếp" để cho ngẫu phối một thế hệ.`;
    return `${here} Sau ${list.length === 2 ? 'một' : 'mỗi'} thế hệ ngẫu phối, cấu trúc là $p^2$ AA : $2pq$ Aa : $q^2$ aa: quần thể cân bằng và giữ nguyên qua các thế hệ sau.`;
  }
  if (list.length === 1) return `${here} Bấm "Thế hệ tiếp" để cho tự thụ phấn.`;
  if (last.Aa === 0)
    return `${here} Không còn cá thể dị hợp: quần thể chỉ gồm các dòng thuần AA và aa; tần số allele vẫn như thế hệ P.`;
  return `${here} Tỉ lệ Aa giảm một nửa sau mỗi thế hệ (còn $\\tfrac{1}{${2 ** (list.length - 1)}}$ so với P), đồng hợp tăng; tần số allele không đổi.`;
}

/** Prevalences of a recessive disease, one sick person (aa) in `n` people. */
export const PREVALENCES = [100, 400, 2500, 10000, 40000];

/**
 * A balanced population with one aa person in `n`: q = √(1/n), p = 1 − q,
 * and how many of the `n` people are AA, Aa (healthy carriers) and aa.
 * @param {number} n
 */
export function carrierEstimate(n) {
  const q = tidy(Math.sqrt(1 / n));
  const p = tidy(1 - q);
  const carriers = tidy(2 * p * q * n);
  return { q, p, carrierShare: tidy(2 * p * q), carriers, normal: tidy(n - carriers - 1) };
}
