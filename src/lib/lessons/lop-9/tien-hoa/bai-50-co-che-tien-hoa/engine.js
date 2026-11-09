/**
 * The evolutionary factors (nhân tố tiến hoá) of the modern theory acting on
 * one gene with two alleles, A (dominant, dark fur) and a (recessive, light
 * fur), in a population. Each generation:
 *
 * 1. mutation turns a share `u` of the A alleles into a;
 * 2. gene flow (di - nhập gene) replaces a share `m` of the gene pool with
 *    migrants that carry only a;
 * 3. mating forms the offspring: random mating (Hardy–Weinberg proportions)
 *    or self-fertilisation / inbreeding (giao phối không ngẫu nhiên), which
 *    halves the heterozygotes and keeps the allele frequencies;
 * 4. natural selection removes a share `s` of the aa individuals;
 * 5. chance (yếu tố ngẫu nhiên): in a small population of N individuals the
 *    next generation is a random sample, so frequencies drift.
 */

import { formatFixed } from '#lib/core/number-format.js';

/** @typedef {{ AA: number, Aa: number, aa: number }} Genotypes frequencies adding up to 1 */

/**
 * @typedef {object} Factors
 * @property {boolean} mutation
 * @property {boolean} flow
 * @property {boolean} inbreeding
 * @property {boolean} selection
 * @property {boolean} drift
 */

export const RATES = { mutation: 0.03, flow: 0.08, selection: 0.6, smallN: 20 };

/** @type {Array<{ key: keyof Factors, label: string }>} */
export const FACTORS = [
  { key: 'mutation', label: 'Đột biến (A → a)' },
  { key: 'flow', label: 'Di - nhập gene (cá thể aa nhập cư)' },
  { key: 'selection', label: 'Chọn lọc tự nhiên (đào thải aa)' },
  { key: 'drift', label: 'Yếu tố ngẫu nhiên (quần thể nhỏ, 20 cá thể)' },
  { key: 'inbreeding', label: 'Giao phối không ngẫu nhiên (tự thụ phấn)' },
];

/** @returns {Factors} */
export function noFactors() {
  return { mutation: false, flow: false, inbreeding: false, selection: false, drift: false };
}

/**
 * Frequency of allele A: p = AA + Aa/2.
 * @param {Genotypes} g
 */
export function alleleA(g) {
  return g.AA + g.Aa / 2;
}

/**
 * Allele frequencies from genotype counts: p(A) = (2·AA + Aa) / 2N.
 * @param {number} AA
 * @param {number} Aa
 * @param {number} aa
 */
export function allelesFromCounts(AA, Aa, aa) {
  const n = AA + Aa + aa;
  const p = (2 * AA + Aa) / (2 * n);
  return { p, q: 1 - p };
}

/**
 * Hardy–Weinberg proportions after random mating.
 * @param {number} p
 * @returns {Genotypes}
 */
export function randomMating(p) {
  const q = 1 - p;
  return { AA: p * p, Aa: 2 * p * q, aa: q * q };
}

/**
 * One generation of self-fertilisation: Aa gives ¼ AA, ½ Aa, ¼ aa.
 * @param {Genotypes} g
 * @returns {Genotypes}
 */
export function selfing(g) {
  return { AA: g.AA + g.Aa / 4, Aa: g.Aa / 2, aa: g.aa + g.Aa / 4 };
}

/**
 * Parents with allele frequency moved to `p`, keeping their excess of
 * homozygotes (inbreeding coefficient F = 1 − Aa / 2pq).
 * @param {Genotypes} g
 * @param {number} p
 * @returns {Genotypes}
 */
function withAllele(g, p) {
  const p0 = alleleA(g);
  const h0 = 2 * p0 * (1 - p0);
  const f = h0 > 1e-12 ? Math.min(1, Math.max(0, 1 - g.Aa / h0)) : 1;
  const q = 1 - p;
  return { AA: p * p + f * p * q, Aa: 2 * p * q * (1 - f), aa: q * q + f * p * q };
}

/**
 * Natural selection removes a share `s` of the aa individuals.
 * @param {Genotypes} g
 * @param {number} s
 * @returns {Genotypes}
 */
export function selectAgainstAa(g, s) {
  const aa = g.aa * (1 - s);
  const total = g.AA + g.Aa + aa;
  return { AA: g.AA / total, Aa: g.Aa / total, aa: aa / total };
}

/**
 * A random sample of n individuals from the genotype frequencies.
 * @param {Genotypes} g
 * @param {number} n
 * @param {() => number} rand
 * @returns {Genotypes}
 */
export function sample(g, n, rand) {
  let AA = 0;
  let Aa = 0;
  for (let i = 0; i < n; i++) {
    const r = rand();
    if (r < g.AA) AA++;
    else if (r < g.AA + g.Aa) Aa++;
  }
  return { AA: AA / n, Aa: Aa / n, aa: (n - AA - Aa) / n };
}

/**
 * One generation under the chosen factors.
 * @param {Genotypes} g
 * @param {Factors} f
 * @param {() => number} rand
 * @returns {Genotypes}
 */
export function step(g, f, rand) {
  let p = alleleA(g);
  if (f.mutation) p *= 1 - RATES.mutation;
  if (f.flow) p *= 1 - RATES.flow;
  let next = f.inbreeding ? selfing(withAllele(g, p)) : randomMating(p);
  if (f.selection) next = selectAgainstAa(next, RATES.selection);
  if (f.drift) next = sample(next, RATES.smallN, rand);
  return next;
}

/**
 * The population over `gens` generations, the start included.
 * @param {Genotypes} start
 * @param {Factors} f
 * @param {number} gens
 * @param {() => number} rand
 * @returns {Genotypes[]}
 */
export function simulate(start, f, gens, rand) {
  const out = [start];
  for (let i = 0; i < gens; i++) out.push(step(out[out.length - 1], f, rand));
  return out;
}

/**
 * What the run shows, in words.
 * @param {Genotypes[]} history
 * @param {Factors} f
 */
export function explain(history, f) {
  const first = history[0];
  const last = history[history.length - 1];
  const dp = alleleA(last) - alleleA(first);
  const dh = last.Aa - first.Aa;
  const n = (/** @type {number} */ v) => formatFixed(v, 2);
  const on = FACTORS.filter((x) => f[x.key]);
  if (!on.length)
    return `Không có nhân tố tiến hoá nào: tần số allele A giữ nguyên ${n(alleleA(last))} và tỉ lệ kiểu gene không đổi qua ${history.length - 1} thế hệ. Quần thể không tiến hoá.`;
  if (on.length === 1 && f.inbreeding)
    return `Tự thụ phấn: tần số allele A vẫn là ${n(alleleA(last))}, nhưng tỉ lệ dị hợp Aa giảm từ ${n(first.Aa)} xuống ${n(last.Aa)}, đồng hợp tăng. Giao phối không ngẫu nhiên làm đổi thành phần kiểu gene, không đổi tần số allele.`;
  const dir = Math.abs(dp) < 0.005 ? 'gần như không đổi' : dp > 0 ? 'tăng' : 'giảm';
  const extra = f.drift
    ? ' Với quần thể nhỏ, đường đồ thị lên xuống thất thường: mỗi lần chạy cho kết quả khác.'
    : '';
  const het = f.inbreeding && dh < 0 ? ' Dị hợp Aa giảm do tự thụ phấn.' : '';
  return `Sau ${history.length - 1} thế hệ, tần số allele A ${dir} (${n(alleleA(first))} → ${n(alleleA(last))}): cấu trúc di truyền của quần thể đã thay đổi.${het}${extra}`;
}
