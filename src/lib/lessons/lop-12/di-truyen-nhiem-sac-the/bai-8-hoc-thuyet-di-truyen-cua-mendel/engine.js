/**
 * Mendel's dihybrid cross of pea seeds: A (vàng) over a (xanh), B (trơn)
 * over b (nhăn), the two genes on different chromosome pairs. Builds the
 * Punnett square of a cross, sorts each zygote into one of the four seed
 * phenotypes and counts them.
 */
import { tidy } from '#lib/core/number-format.js';
import { cross, formatGenotype, ratio } from '#lib/domain/genetics.js';

/**
 * @typedef {{
 *   id: 'AB' | 'Ab' | 'aB' | 'ab';
 *   name: string;
 *   look: { color: 'vang' | 'xanh', shape: 'tron' | 'nhan' };
 * }} SeedClass
 */

/** @type {SeedClass[]} */
export const CLASSES = [
  { id: 'AB', name: 'vàng, trơn', look: { color: 'vang', shape: 'tron' } },
  { id: 'Ab', name: 'vàng, nhăn', look: { color: 'vang', shape: 'nhan' } },
  { id: 'aB', name: 'xanh, trơn', look: { color: 'xanh', shape: 'tron' } },
  { id: 'ab', name: 'xanh, nhăn', look: { color: 'xanh', shape: 'nhan' } },
];

export const CROSSES = [
  { id: 'f1', label: 'F₁ × F₁', mother: 'AaBb', father: 'AaBb' },
  { id: 'phan-tich', label: 'Lai phân tích F₁', mother: 'AaBb', father: 'aabb' },
  { id: 'mot-nua', label: 'AaBb × Aabb', mother: 'AaBb', father: 'Aabb' },
];

/**
 * The seed phenotype of a genotype such as "AaBb".
 * @param {string} genotype
 * @returns {SeedClass['id']}
 */
export function classOf(genotype) {
  const a = genotype.includes('A') ? 'A' : 'a';
  const b = genotype.includes('B') ? 'B' : 'b';
  return /** @type {SeedClass['id']} */ (a + b);
}

/** @param {string} id */
export function className(id) {
  return CLASSES.find((c) => c.id === id)?.name ?? id;
}

/**
 * The Punnett square of mother × father: gametes as text, each cell's
 * genotype and phenotype, and the phenotype counts in CLASSES order. Each
 * drawn cell counts once, so a square of merged gametes (4 × 2 for
 * AaBb × Aabb) counts 8 combinations.
 * @param {string} mother
 * @param {string} father
 */
export function square(mother, father) {
  const c = cross(mother, father);
  const eggs = c.eggs.map((e) => e.gamete.join(''));
  const sperms = c.sperms.map((s) => s.gamete.join(''));
  const least = Math.min(...c.cells.flat().map((cell) => cell.weight));
  const cells = c.cells.map((row) =>
    row.map((cell) => {
      const genotype = formatGenotype(cell.genotype);
      return { genotype, cls: classOf(genotype), weight: cell.weight / least };
    }),
  );
  const counts = CLASSES.map((k) =>
    cells.flat().reduce((sum, cell) => sum + (cell.cls === k.id ? cell.weight : 0), 0),
  );
  return { eggs, sperms, cells, counts, total: counts.reduce((a, b) => a + b, 0) };
}

/**
 * The phenotype ratio of non-empty classes, e.g. "9 : 3 : 3 : 1".
 * @param {number[]} counts
 */
export function ratioText(counts) {
  return ratio(counts.filter((n) => n > 0));
}

/**
 * Ratio of each count to the smallest one, for comparing real data with a
 * theoretical ratio.
 * @param {number[]} counts
 */
export function relativeTo(counts) {
  const least = Math.min(...counts);
  return counts.map((n) => tidy(n / least, 2));
}

/** Mendel's F₂ seed counts, in CLASSES order. */
export const MENDEL_F2 = [315, 101, 108, 32];

/**
 * Number of gamete types, genotypes and phenotypes (complete dominance)
 * from selfing an individual heterozygous for n independent genes.
 * @param {number} n
 */
export function selfedHeterozygote(n) {
  return { gametes: 2 ** n, combos: 4 ** n, genotypes: 3 ** n, phenotypes: 2 ** n };
}

/** Letters of the genes in the probability calculator. */
export const GENE_LETTERS = ['A', 'B', 'D'];

/**
 * The three genotypes of a gene: "AA", "Aa", "aa".
 * @param {string} letter upper-case letter
 */
export function genotypesOf(letter) {
  const l = letter.toLowerCase();
  return [letter + letter, letter + l, l + l];
}

/**
 * Chance, out of 4, that a child of mother × father (one gene) matches
 * `want`: 'troi' (shows the dominant trait), 'lan' (homozygous recessive)
 * or an exact genotype such as "Aa".
 * @param {string} mother
 * @param {string} father
 * @param {string} want
 */
export function geneChance(mother, father, want) {
  let hits = 0;
  for (const x of mother) {
    for (const y of father) {
      const child = x === x.toUpperCase() ? x + y : y + x;
      const dominant = child !== child.toLowerCase();
      const ok = want === 'troi' ? dominant : want === 'lan' ? !dominant : child === want;
      if (ok) hits++;
    }
  }
  return hits;
}

/**
 * Probability of a child matching every gene's wish, as a reduced fraction
 * [numerator, denominator]: the product of the genes' chances.
 * @param {Array<{ mother: string, father: string, want: string }>} genes
 * @returns {[number, number]}
 */
export function productChance(genes) {
  let n = 1;
  let d = 1;
  for (const g of genes) {
    n *= geneChance(g.mother, g.father, g.want);
    d *= 4;
  }
  if (n === 0) return [0, 1];
  let a = n;
  let b = d;
  while (b) [a, b] = [b, a % b];
  return [n / a, d / a];
}
