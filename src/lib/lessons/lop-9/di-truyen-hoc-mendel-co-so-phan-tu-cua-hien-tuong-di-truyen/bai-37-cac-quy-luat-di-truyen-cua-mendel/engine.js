/**
 * Mendel's crosses on pea seeds: gene A (A yellow, a green) and gene B
 * (B smooth, b wrinkled), complete dominance. Exact ratios come from the
 * domain Punnett square; this module adds what the widget needs on top:
 * random offspring (so learners see real counts scatter around 3 : 1 and
 * 9 : 3 : 3 : 1), the phenotype names, and the test-cross verdict.
 */
import {
  cross,
  fertilize,
  formatGenotype,
  gametes,
  parseGenotype,
  phenotype,
} from '#lib/domain/genetics.js';

export const ONE_GENE = ['AA', 'Aa', 'aa'];
export const TWO_GENES = ['AABB', 'AABb', 'AAbb', 'AaBB', 'AaBb', 'Aabb', 'aaBB', 'aaBb', 'aabb'];

/** Trait names for the Punnett square. */
export const TRAITS = { A: 'vàng', a: 'xanh', B: 'trơn', b: 'nhăn' };

/**
 * Seed look of a genotype: colour from gene A, shape from gene B (smooth when
 * the genotype has no B gene).
 * @param {string} genotype
 * @returns {{ color: 'vang' | 'xanh', shape: 'tron' | 'nhan' }}
 */
export function seedLook(genotype) {
  const ph = phenotype(parseGenotype(genotype));
  const g = parseGenotype(genotype);
  /** @type {'vang' | 'xanh'} */
  let color = 'vang';
  /** @type {'tron' | 'nhan'} */
  let shape = 'tron';
  g.forEach((pair, i) => {
    const gene = pair[0].toLowerCase();
    if (gene === 'a') color = ph[i] === 'A' ? 'vang' : 'xanh';
    if (gene === 'b') shape = ph[i] === 'B' ? 'tron' : 'nhan';
  });
  return { color, shape };
}

/**
 * Phenotype name of a genotype: "hạt vàng" or "hạt vàng, trơn".
 * @param {string} genotype
 */
export function phenotypeName(genotype) {
  const labels = phenotype(parseGenotype(genotype));
  return `hạt ${labels.map((l) => TRAITS[/** @type {keyof typeof TRAITS} */ (l)]).join(', ')}`;
}

/**
 * Exact phenotype classes of a cross with their probabilities, dominant first.
 * @param {string} mother @param {string} father
 * @returns {Array<{ name: string, look: ReturnType<typeof seedLook>, count: number, p: number }>}
 */
export function expected(mother, father) {
  const c = cross(mother, father);
  return c.phenotypes.map((ph) => {
    const genotype = ph.phenotype.map((l) => l + l).join('');
    return {
      name: phenotypeName(genotype),
      look: seedLook(genotype),
      count: ph.count,
      p: ph.count / c.total,
    };
  });
}

/**
 * One random offspring of mother × father: each parent gives one of its
 * gametes with equal chance.
 * @param {string} mother @param {string} father @param {() => number} rand
 */
export function offspring(mother, father, rand) {
  /** @param {string} g */
  const pickGamete = (g) => {
    const list = gametes(g).flatMap((x) => Array(x.count).fill(x.gamete));
    return list[Math.floor(rand() * list.length)];
  };
  return formatGenotype(fertilize(pickGamete(mother), pickGamete(father)));
}

/**
 * Counts of each phenotype among `n` random offspring, in the order of
 * `expected` (classes that do not occur keep a count of 0).
 * @param {string} mother @param {string} father @param {number} n @param {() => number} rand
 * @returns {number[]}
 */
export function sample(mother, father, n, rand) {
  const names = expected(mother, father).map((e) => e.name);
  const counts = names.map(() => 0);
  for (let i = 0; i < n; i++)
    counts[names.indexOf(phenotypeName(offspring(mother, father, rand)))]++;
  return counts;
}

/**
 * Observed counts written on the scale of the theoretical ratio, rounded to
 * one decimal: the counts are rescaled to the same number of parts as the
 * theory, so 301 : 99 against 3 : 1 reads 3,0 : 1,0 and 216 : 72 : 94 : 18
 * against 9 : 3 : 3 : 1 reads 8,6 : 2,9 : 3,8 : 0,7. Dividing by the
 * smallest count instead would blow up the noise of a small class.
 * @param {number[]} counts observed counts
 * @param {number[]} theory theoretical ratio, same order
 */
export function observedRatio(counts, theory) {
  const total = counts.reduce((a, b) => a + b, 0);
  const parts = theory.reduce((a, b) => a + b, 0);
  if (!total || !parts) return counts.map(() => 0);
  return counts.map((c) => Math.round(((c * parts) / total) * 10) / 10);
}

/**
 * Verdict of a test cross with a green (aa) plant: any green offspring means
 * the yellow parent carried a, so it was Aa; all yellow points to AA.
 * @param {string[]} children offspring genotypes
 * @returns {'AA' | 'Aa'}
 */
export function testCrossVerdict(children) {
  return children.some((g) => seedLook(g).color === 'xanh') ? 'Aa' : 'AA';
}
