/**
 * Pedigrees (phả hệ): people with sex, affected status and parents; the
 * generation layout drawn with the standard symbols; and which single-gene
 * inheritance modes can explain the affected people.
 *
 * Modes: autosomal dominant (AD), autosomal recessive (AR), X-linked dominant
 * (XD) and X-linked recessive (XR). Allele A is dominant over a; in a
 * dominant mode A causes the trait, in a recessive mode aa (or XaY) shows it.
 * Full penetrance and no new mutations are assumed, as in school problems.
 */

/** @typedef {'M' | 'F'} Sex */
/**
 * @typedef {{
 *   id: string;
 *   sex: Sex;
 *   affected: boolean;
 *   father?: string;
 *   mother?: string;
 * }} Person
 */
/** @typedef {{ people: Person[], couples?: Array<[string, string]> }} Pedigree */
/** @typedef {'AD' | 'AR' | 'XD' | 'XR'} Mode */

export const MODES = /** @type {const} */ (['AD', 'AR', 'XD', 'XR']);

export const MODE_LABELS = /** @type {Record<Mode, string>} */ ({
  AD: 'Gene trội trên nhiễm sắc thể thường',
  AR: 'Gene lặn trên nhiễm sắc thể thường',
  XD: 'Gene trội trên nhiễm sắc thể X',
  XR: 'Gene lặn trên nhiễm sắc thể X',
});

/** Candidate genotypes for a person of each sex under each mode. */
const GENOTYPES = {
  auto: ['AA', 'Aa', 'aa'],
  F: ['XAXA', 'XAXa', 'XaXa'],
  M: ['XAY', 'XaY'],
};

/**
 * Genotypes a person of this sex can have under a mode.
 * @param {Mode} mode
 * @param {Sex} sex
 */
export function candidateGenotypes(mode, sex) {
  return mode === 'AD' || mode === 'AR' ? GENOTYPES.auto : GENOTYPES[sex];
}

/**
 * Whether a genotype shows the trait under a mode.
 * @param {Mode} mode
 * @param {string} genotype
 */
export function showsTrait(mode, genotype) {
  switch (mode) {
    case 'AD':
      return genotype.includes('A');
    case 'AR':
      return genotype === 'aa';
    case 'XD':
      return genotype.includes('XA');
    case 'XR':
      return !genotype.includes('XA');
  }
}

/**
 * Splits a genotype into the two alleles it passes on: ['A', 'a'], ['XA', 'Y'].
 * @param {string} genotype
 */
function alleles(genotype) {
  return genotype.match(/X[Aa]|Y|[Aa]/g) ?? [];
}

/** @param {string[]} pair */
function join(pair) {
  const order = (/** @type {string} */ a) =>
    a === 'Y' ? 3 : a === 'XA' || a === 'A' ? 0 : a === 'Xa' || a === 'a' ? 1 : 2;
  return [...pair].sort((x, y) => order(x) - order(y)).join('');
}

/**
 * Whether a child genotype can come from these parents. A son gets his X
 * from his mother and Y from his father; a daughter gets one X from each.
 * @param {string} father
 * @param {string} mother
 * @param {string} child
 */
export function canInherit(father, mother, child) {
  for (const f of alleles(father)) {
    for (const m of alleles(mother)) if (join([f, m]) === child) return true;
  }
  return false;
}

/**
 * Checks the pedigree's own structure: unique ids, known parents of the
 * right sex, both parents or none.
 * @param {Pedigree} p
 * @returns {string[]} problems found (empty when valid)
 */
export function validate(p) {
  /** @type {string[]} */
  const problems = [];
  const byId = new Map(p.people.map((x) => [x.id, x]));
  if (byId.size !== p.people.length) problems.push('duplicate person id');
  for (const x of p.people) {
    if (!x.father !== !x.mother) problems.push(`${x.id} needs both parents or none`);
    if (x.father && byId.get(x.father)?.sex !== 'M') problems.push(`${x.id}: father is not a man`);
    if (x.mother && byId.get(x.mother)?.sex !== 'F')
      problems.push(`${x.id}: mother is not a woman`);
  }
  for (const [a, b] of p.couples ?? []) {
    if (!byId.has(a) || !byId.has(b)) problems.push(`couple ${a}–${b} names an unknown person`);
  }
  return problems;
}

/**
 * People ordered so that parents come before their children.
 * @param {Pedigree} p
 */
function topoOrder(p) {
  const byId = new Map(p.people.map((x) => [x.id, x]));
  /** @type {Person[]} */
  const out = [];
  const seen = new Set();
  /** @param {Person} x */
  const visit = (x) => {
    if (seen.has(x.id)) return;
    seen.add(x.id);
    for (const parent of [x.father, x.mother]) {
      const q = parent ? byId.get(parent) : undefined;
      if (q) visit(q);
    }
    out.push(x);
  };
  p.people.forEach(visit);
  return out;
}

/**
 * Searches for one genotype assignment consistent with every phenotype and
 * with Mendelian transmission. `fixed` pins some people's genotypes.
 * @param {Pedigree} p
 * @param {Mode} mode
 * @param {Record<string, string>} [fixed]
 * @returns {Record<string, string> | null}
 */
export function findAssignment(p, mode, fixed = {}) {
  const order = topoOrder(p);
  /** @type {Record<string, string>} */
  const g = {};
  /** @param {number} i @returns {boolean} */
  const step = (i) => {
    if (i === order.length) return true;
    const x = order[i];
    const options = fixed[x.id] ? [fixed[x.id]] : candidateGenotypes(mode, x.sex);
    for (const option of options) {
      if (!candidateGenotypes(mode, x.sex).includes(option)) continue;
      if (showsTrait(mode, option) !== x.affected) continue;
      if (x.father && x.mother && !canInherit(g[x.father], g[x.mother], option)) continue;
      g[x.id] = option;
      if (step(i + 1)) return true;
    }
    delete g[x.id];
    return false;
  };
  return step(0) ? { ...g } : null;
}

/**
 * Whether a mode can explain the pedigree.
 * @param {Pedigree} p
 * @param {Mode} mode
 */
export function isConsistent(p, mode) {
  return findAssignment(p, mode) !== null;
}

/**
 * Modes that can explain the pedigree, in the order of `MODES`.
 * @param {Pedigree} p
 * @returns {Mode[]}
 */
export function consistentModes(p) {
  return MODES.filter((m) => isConsistent(p, m));
}

/**
 * For each person, every genotype they can have in some assignment that
 * explains the whole pedigree under `mode` (empty when the mode cannot).
 * @param {Pedigree} p
 * @param {Mode} mode
 * @returns {Record<string, string[]>}
 */
export function possibleGenotypes(p, mode) {
  /** @type {Record<string, string[]>} */
  const out = {};
  const base = isConsistent(p, mode);
  for (const x of p.people) {
    out[x.id] = base
      ? candidateGenotypes(mode, x.sex).filter((gt) => findAssignment(p, mode, { [x.id]: gt }))
      : [];
  }
  return out;
}

/**
 * @typedef {{ father: string, mother: string, children: string[] }} Family
 */

/**
 * Nuclear families: a father, a mother and their children in input order.
 * @param {Pedigree} p
 * @returns {Family[]}
 */
export function families(p) {
  /** @type {Map<string, Family>} */
  const map = new Map();
  for (const x of p.people) {
    if (!x.father || !x.mother) continue;
    const key = `${x.father}+${x.mother}`;
    const f = map.get(key) ?? { father: x.father, mother: x.mother, children: [] };
    f.children.push(x.id);
    map.set(key, f);
  }
  return [...map.values()];
}

/**
 * Explains why a mode cannot fit: the first family (parents and one child)
 * that no genotypes can explain on its own, or null when the conflict only
 * shows across the whole pedigree (or there is none).
 * @param {Pedigree} p
 * @param {Mode} mode
 * @returns {{ father: string, mother: string, child: string } | null}
 */
export function conflict(p, mode) {
  const byId = new Map(p.people.map((x) => [x.id, x]));
  for (const f of families(p)) {
    for (const child of f.children) {
      const dad = byId.get(f.father);
      const mum = byId.get(f.mother);
      const kid = byId.get(child);
      if (!dad || !mum || !kid) continue;
      const trio = {
        people: [
          { ...dad, father: undefined, mother: undefined },
          { ...mum, father: undefined, mother: undefined },
          kid,
        ],
      };
      if (!isConsistent(trio, mode)) return { father: f.father, mother: f.mother, child };
    }
  }
  return null;
}

/**
 * Generation of every person, 0 for the oldest. A person with parents sits
 * one below them; one without parents sits beside their partner.
 * @param {Pedigree} p
 * @returns {Record<string, number>}
 */
export function generations(p) {
  /** @type {Record<string, number>} */
  const gen = {};
  for (const x of p.people) gen[x.id] = 0;
  const partners = couples(p);
  for (let pass = 0; pass < p.people.length + 1; pass++) {
    let changed = false;
    for (const x of p.people) {
      let g = gen[x.id];
      if (x.father && x.mother) g = Math.max(gen[x.father], gen[x.mother]) + 1;
      else {
        for (const [a, b] of partners) {
          if (a === x.id) g = Math.max(g, gen[b]);
          if (b === x.id) g = Math.max(g, gen[a]);
        }
      }
      if (g !== gen[x.id]) {
        gen[x.id] = g;
        changed = true;
      }
    }
    if (!changed) break;
  }
  return gen;
}

/**
 * Couples: the declared ones plus every pair of parents, father first.
 * @param {Pedigree} p
 * @returns {Array<[string, string]>}
 */
export function couples(p) {
  /** @type {Array<[string, string]>} */
  const out = [];
  const seen = new Set();
  /** @param {string} a @param {string} b */
  const add = (a, b) => {
    const key = [a, b].sort().join('+');
    if (seen.has(key)) return;
    seen.add(key);
    out.push([a, b]);
  };
  for (const [a, b] of p.couples ?? []) add(a, b);
  for (const f of families(p)) add(f.father, f.mother);
  return out;
}

/**
 * @typedef {{
 *   nodes: Array<{ id: string, gen: number, x: number, label: string }>;
 *   couples: Array<{ a: string, b: string, gen: number, x1: number, x2: number }>;
 *   sibships: Array<{ gen: number, from: number, children: number[] }>;
 *   width: number;
 *   depth: number;
 * }} PedigreeLayout
 */

/**
 * Places everyone on a grid: one row per generation, one column unit per
 * person, partners side by side and siblings in birth (input) order under
 * their parents. Each row is centred. Labels follow the textbook form
 * "II.3": generation in Roman numerals, then the position in the row.
 * @param {Pedigree} p
 * @returns {PedigreeLayout}
 */
export function layoutPedigree(p) {
  const gen = generations(p);
  const partners = couples(p);
  const fams = families(p);
  const depth = p.people.length ? Math.max(...Object.values(gen)) + 1 : 0;
  const placed = new Set();
  /** @type {string[][]} */
  const rows = Array.from({ length: depth }, () => []);
  /** @param {string} id */
  const partnersOf = (id) =>
    partners
      .flatMap(([a, b]) => (a === id ? [b] : b === id ? [a] : []))
      .filter((q) => gen[q] === gen[id]);
  /** @param {string} id */
  const place = (id) => {
    if (placed.has(id)) return;
    placed.add(id);
    rows[gen[id]].push(id);
    for (const q of partnersOf(id)) {
      if (!placed.has(q)) {
        placed.add(q);
        rows[gen[q]].push(q);
      }
    }
  };
  for (let g = 0; g < depth; g++) {
    if (g > 0) {
      // Children in the order of their parents in the row above.
      const above = rows[g - 1];
      const ordered = [...fams].sort(
        (f1, f2) =>
          Math.min(above.indexOf(f1.father), above.indexOf(f1.mother)) -
          Math.min(above.indexOf(f2.father), above.indexOf(f2.mother)),
      );
      for (const f of ordered) for (const c of f.children) if (gen[c] === g) place(c);
    }
    for (const x of p.people) if (gen[x.id] === g) place(x.id);
  }

  const width = Math.max(1, ...rows.map((r) => r.length));
  /** @type {Record<string, number>} */
  const xOf = {};
  const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];
  /** @type {PedigreeLayout['nodes']} */
  const nodes = [];
  rows.forEach((row, g) => {
    const offset = (width - row.length) / 2;
    row.forEach((id, i) => {
      xOf[id] = offset + i + 0.5;
      nodes.push({ id, gen: g, x: xOf[id], label: `${ROMAN[g] ?? g + 1}.${i + 1}` });
    });
  });
  const coupleLines = partners
    .filter(([a, b]) => gen[a] === gen[b])
    .map(([a, b]) => ({
      a,
      b,
      gen: gen[a],
      x1: Math.min(xOf[a], xOf[b]),
      x2: Math.max(xOf[a], xOf[b]),
    }));
  const sibships = fams.map((f) => ({
    gen: Math.max(gen[f.father], gen[f.mother]),
    from: (xOf[f.father] + xOf[f.mother]) / 2,
    children: f.children.map((c) => xOf[c]),
  }));
  return { nodes, couples: coupleLines, sibships, width, depth };
}
