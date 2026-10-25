/**
 * Mendelian crosses: genotypes, gametes, the Punnett square of a cross and
 * the genotype and phenotype ratios of the offspring.
 *
 * A genotype is written as in Vietnamese textbooks: one letter per allele,
 * upper case dominant, the two alleles of a gene side by side ("AaBb"). Genes
 * on the X chromosome are written with the chromosome: "XAXa" for a female,
 * "XAY" for a male. Genes are assumed to assort independently (phân li độc lập).
 */

/** @typedef {string[]} AllelePair two alleles of one gene, e.g. ['A', 'a'] or ['XA', 'Y'] */
/** @typedef {AllelePair[]} Genotype */
/** @typedef {'complete' | 'incomplete'} Dominance */

/**
 * Splits a genotype string into allele pairs, one per gene, in written order.
 * Autosomal alleles are single letters grouped by letter; sex-chromosome
 * alleles are "X" plus a letter ("XA", "Xa"), a bare "X" or "Y".
 * @param {string} text
 * @returns {Genotype}
 */
export function parseGenotype(text) {
  const s = text.replace(/[\s^]/g, '');
  const tokens = s.match(/X[A-WZa-z]?|Y|[A-WZa-z]/g) ?? [];
  if (tokens.join('') !== s) throw new Error(`"${text}" is not a genotype`);
  const sex = tokens.filter((t) => t.startsWith('X') || t === 'Y');
  const auto = tokens.filter((t) => !(t.startsWith('X') || t === 'Y'));
  /** @type {Map<string, string[]>} */
  const byGene = new Map();
  for (const a of auto) {
    const key = a.toLowerCase();
    const list = byGene.get(key) ?? [];
    list.push(a);
    byGene.set(key, list);
  }
  /** @type {Genotype} */
  const pairs = [];
  for (const [gene, alleles] of byGene) {
    if (alleles.length !== 2) throw new Error(`gene ${gene} needs two alleles in "${text}"`);
    pairs.push(sortPair(alleles));
  }
  if (sex.length) {
    if (sex.length !== 2) throw new Error(`"${text}" needs two sex chromosomes`);
    pairs.push(sortPair(sex));
  }
  return pairs;
}

/**
 * Orders the alleles of a pair as textbooks write them: dominant first
 * ("Aa", never "aA"), and X before Y.
 * @param {string[]} pair
 */
export function sortPair(pair) {
  return [...pair].sort((a, b) => rank(a) - rank(b) || (a < b ? -1 : a > b ? 1 : 0));
}

/** @param {string} allele */
function rank(allele) {
  if (allele === 'Y') return 3;
  const letter = allele.startsWith('X') ? allele.slice(1) : allele;
  if (!letter) return 1;
  return letter === letter.toUpperCase() ? 0 : 2;
}

/** @param {Genotype} g */
export function formatGenotype(g) {
  return g.map((p) => p.join('')).join('');
}

/**
 * Whether every gene of a genotype is homozygous (thuần chủng).
 * @param {Genotype | string} g
 */
export function isHomozygous(g) {
  const pairs = typeof g === 'string' ? parseGenotype(g) : g;
  return pairs.every(([a, b]) => a === b);
}

/**
 * The gametes a genotype makes, one allele of each gene, with equal
 * frequency; duplicates are merged and counted. "AaBb" makes AB, Ab, aB, ab;
 * "AABb" makes AB and Ab, each twice.
 * @param {Genotype | string} g
 * @returns {Array<{ gamete: string[], count: number }>}
 */
export function gametes(g) {
  const pairs = typeof g === 'string' ? parseGenotype(g) : g;
  /** @type {string[][]} */
  let combos = [[]];
  for (const pair of pairs) combos = combos.flatMap((c) => pair.map((a) => [...c, a]));
  /** @type {Map<string, { gamete: string[], count: number }>} */
  const merged = new Map();
  for (const c of combos) {
    const key = c.join('');
    const entry = merged.get(key);
    if (entry) entry.count++;
    else merged.set(key, { gamete: c, count: 1 });
  }
  return [...merged.values()];
}

/**
 * Joins one gamete from each parent into a zygote genotype.
 * @param {string[]} egg
 * @param {string[]} sperm
 * @returns {Genotype}
 */
export function fertilize(egg, sperm) {
  return egg.map((a, i) => sortPair([a, sperm[i]]));
}

/**
 * Phenotype of a genotype as one label per gene: the dominant or recessive
 * allele letter ("A-" / "aa" written as "A" / "a"), or, with incomplete
 * dominance, the full pair for heterozygotes. For the sex chromosomes the
 * label adds the sex: "♀ A", "♂ a".
 * @param {Genotype} g
 * @param {Dominance} [dominance]
 * @returns {string[]}
 */
export function phenotype(g, dominance = 'complete') {
  return g.map((pair) => {
    const sexLinked = pair.some((a) => a.startsWith('X') || a === 'Y');
    const letters = pair.filter((a) => a !== 'Y').map((a) => (a.startsWith('X') ? a.slice(1) : a));
    const sex = sexLinked ? (pair.includes('Y') ? '♂ ' : '♀ ') : '';
    if (!letters.length || letters.some((l) => l === '')) return sex.trim();
    const dominant = letters.find((l) => l === l.toUpperCase());
    if (!dominant) return sex + letters[0];
    if (dominance === 'incomplete' && letters.length === 2 && letters[0] !== letters[1]) {
      return sex + letters.join('');
    }
    return sex + dominant;
  });
}

/**
 * @typedef {{
 *   eggs: Array<{ gamete: string[], count: number }>;
 *   sperms: Array<{ gamete: string[], count: number }>;
 *   cells: Array<Array<{ genotype: Genotype, weight: number }>>;
 *   genotypes: Array<{ genotype: string, count: number }>;
 *   phenotypes: Array<{ phenotype: string[], count: number }>;
 *   total: number;
 * }} Cross
 */

/**
 * The cross mother × father (P), as a Punnett square: rows are the
 * mother's gametes, columns the father's, each cell the zygote. Counts are
 * whole numbers out of `total` combinations, in the textbook order
 * (dominant traits first).
 * @param {Genotype | string} mother
 * @param {Genotype | string} father
 * @param {{ dominance?: Dominance }} [opts]
 * @returns {Cross}
 */
export function cross(mother, father, opts = {}) {
  const m = typeof mother === 'string' ? parseGenotype(mother) : mother;
  const f = typeof father === 'string' ? parseGenotype(father) : father;
  if (m.length !== f.length) throw new Error('the parents differ in the number of genes');
  const eggs = gametes(m);
  const sperms = gametes(f);
  const cells = eggs.map((e) =>
    sperms.map((s) => ({ genotype: fertilize(e.gamete, s.gamete), weight: e.count * s.count })),
  );
  /** @type {Map<string, number>} */
  const gCount = new Map();
  /** @type {Map<string, { phenotype: string[], count: number }>} */
  const pCount = new Map();
  for (const row of cells) {
    for (const c of row) {
      const key = formatGenotype(c.genotype);
      gCount.set(key, (gCount.get(key) ?? 0) + c.weight);
      const ph = phenotype(c.genotype, opts.dominance);
      const pk = ph.join(' ');
      const entry = pCount.get(pk);
      if (entry) entry.count += c.weight;
      else pCount.set(pk, { phenotype: ph, count: c.weight });
    }
  }
  const total = [...gCount.values()].reduce((a, b) => a + b, 0);
  const genotypes = [...gCount]
    .map(([genotype, count]) => ({ genotype, count }))
    .sort((a, b) => compareLabels(a.genotype, b.genotype));
  const phenotypes = [...pCount.values()].sort((a, b) =>
    compareLabels(a.phenotype.join(''), b.phenotype.join('')),
  );
  return { eggs, sperms, cells, genotypes, phenotypes, total };
}

/**
 * Upper case before lower case, letter by letter, so AA < Aa < aa.
 * @param {string} a
 * @param {string} b
 */
function compareLabels(a, b) {
  const n = Math.max(a.length, b.length);
  for (let i = 0; i < n; i++) {
    const x = a[i] ?? '';
    const y = b[i] ?? '';
    if (x === y) continue;
    if (x.toLowerCase() === y.toLowerCase()) return x === x.toUpperCase() ? -1 : 1;
    return x < y ? -1 : 1;
  }
  return 0;
}

/** @param {number} a @param {number} b @returns {number} */
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

/**
 * Reduces counts to the smallest whole ratio and writes it with colons:
 * [4, 8, 4] → "1 : 2 : 1".
 * @param {number[]} counts
 */
export function ratio(counts) {
  const g = counts.reduce((a, b) => gcd(a, b), 0) || 1;
  return counts.map((c) => c / g).join(' : ');
}

/**
 * Probability (0-1) that one offspring of the cross has the given genotype
 * or phenotype label.
 * @param {Cross} c
 * @param {{ genotype?: string, phenotype?: string }} which
 */
export function probability(c, which) {
  if (which.genotype !== undefined) {
    const key = formatGenotype(parseGenotype(which.genotype));
    return (c.genotypes.find((g) => g.genotype === key)?.count ?? 0) / c.total;
  }
  const label = which.phenotype ?? '';
  return (c.phenotypes.find((p) => p.phenotype.join(' ') === label)?.count ?? 0) / c.total;
}
