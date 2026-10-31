/**
 * Pedigree reasoning for the human genetics lesson: three family trees (an
 * autosomal recessive, an X-linked recessive and an autosomal dominant
 * trait), whether the trait is dominant or recessive, and checking the
 * genotypes a learner picks for each person against every genotype the
 * whole pedigree allows, with the reason each answer is forced.
 */
import {
  candidateGenotypes,
  consistentModes,
  layoutPedigree,
  possibleGenotypes,
} from '#lib/domain/pedigree.js';

/** @typedef {import('#lib/domain/pedigree.js').Pedigree} Pedigree */
/** @typedef {import('#lib/domain/pedigree.js').Person} Person */
/** @typedef {import('#lib/domain/pedigree.js').Mode} Mode */

/**
 * @typedef {{
 *   id: string;
 *   label: string;
 *   trait: string;
 *   mode: Mode;
 *   given: string;
 *   pedigree: Pedigree;
 * }} Scenario
 */

/** @type {Scenario[]} */
export const SCENARIOS = [
  {
    id: 'bach-tang',
    label: 'Bạch tạng',
    trait: 'bệnh bạch tạng',
    mode: 'AR',
    given: 'Gene gây bệnh bạch tạng nằm trên NST thường; allele A trội hoàn toàn so với a.',
    pedigree: {
      people: [
        { id: 'i1', sex: 'M', affected: false },
        { id: 'i2', sex: 'F', affected: false },
        { id: 'ii2', sex: 'M', affected: false, father: 'i1', mother: 'i2' },
        { id: 'ii1', sex: 'F', affected: true, father: 'i1', mother: 'i2' },
        { id: 'ii3', sex: 'M', affected: false },
        { id: 'iii1', sex: 'M', affected: false, father: 'ii3', mother: 'ii1' },
        { id: 'iii2', sex: 'F', affected: true, father: 'ii3', mother: 'ii1' },
      ],
      couples: [['ii3', 'ii1']],
    },
  },
  {
    id: 'mau-kho-dong',
    label: 'Máu khó đông',
    trait: 'bệnh máu khó đông',
    mode: 'XR',
    given: 'Gene gây bệnh máu khó đông nằm trên NST X, không có allele tương ứng trên Y.',
    pedigree: {
      people: [
        { id: 'i1', sex: 'M', affected: false },
        { id: 'i2', sex: 'F', affected: false },
        { id: 'ii1', sex: 'M', affected: true, father: 'i1', mother: 'i2' },
        { id: 'ii2', sex: 'F', affected: false, father: 'i1', mother: 'i2' },
        { id: 'ii3', sex: 'M', affected: false },
        { id: 'iii1', sex: 'M', affected: true, father: 'ii3', mother: 'ii2' },
        { id: 'iii2', sex: 'F', affected: false, father: 'ii3', mother: 'ii2' },
      ],
      couples: [['ii3', 'ii2']],
    },
  },
  {
    id: 'huntington',
    label: 'Huntington',
    trait: 'bệnh Huntington',
    mode: 'AD',
    given: 'Gene gây bệnh Huntington nằm trên NST thường; allele A trội hoàn toàn so với a.',
    pedigree: {
      people: [
        { id: 'i1', sex: 'M', affected: true },
        { id: 'i2', sex: 'F', affected: true },
        { id: 'ii1', sex: 'F', affected: false, father: 'i1', mother: 'i2' },
        { id: 'ii2', sex: 'M', affected: true, father: 'i1', mother: 'i2' },
        { id: 'ii3', sex: 'F', affected: false },
        { id: 'iii1', sex: 'F', affected: true, father: 'ii2', mother: 'ii3' },
        { id: 'iii2', sex: 'M', affected: false, father: 'ii2', mother: 'ii3' },
      ],
      couples: [['ii2', 'ii3']],
    },
  },
];

/** @param {string} id */
export function scenarioById(id) {
  return SCENARIOS.find((s) => s.id === id) ?? SCENARIOS[0];
}

/** @param {Mode} mode */
export const isRecessive = (mode) => mode === 'AR' || mode === 'XR';

/**
 * Whether the pedigree alone shows the trait is dominant or recessive:
 * 'lặn' when only recessive modes fit, 'trội' when only dominant ones do,
 * null when it cannot tell.
 * @param {Pedigree} p
 * @returns {'trội' | 'lặn' | null}
 */
export function dominance(p) {
  const fits = consistentModes(p);
  if (!fits.length) return null;
  if (fits.every(isRecessive)) return 'lặn';
  if (fits.every((m) => !isRecessive(m))) return 'trội';
  return null;
}

/**
 * The family that settles dominance: normal parents with an affected child
 * (recessive) or affected parents with a normal child (dominant).
 * @param {Pedigree} p
 * @returns {{ father: string, mother: string, child: string, kind: 'trội' | 'lặn' } | null}
 */
export function keyFamily(p) {
  const byId = new Map(p.people.map((x) => [x.id, x]));
  for (const x of p.people) {
    const f = x.father ? byId.get(x.father) : undefined;
    const m = x.mother ? byId.get(x.mother) : undefined;
    if (!f || !m || f.affected !== m.affected || x.affected === f.affected) continue;
    return { father: f.id, mother: m.id, child: x.id, kind: f.affected ? 'trội' : 'lặn' };
  }
  return null;
}

/**
 * Labels in the textbook form "II.3", keyed by person id.
 * @param {Pedigree} p
 * @returns {Record<string, string>}
 */
export function labels(p) {
  return Object.fromEntries(layoutPedigree(p).nodes.map((n) => [n.id, n.label]));
}

/**
 * People in reading order: generation by generation, left to right.
 * @param {Pedigree} p
 * @returns {Person[]}
 */
export function readingOrder(p) {
  const byId = new Map(p.people.map((x) => [x.id, x]));
  return layoutPedigree(p)
    .nodes.map((n) => byId.get(n.id))
    .filter((x) => x !== undefined);
}

/**
 * Splits a genotype into allele tokens for display: 'XAXa' → ['XA', 'Xa'].
 * @param {string} genotype
 */
export function alleleTokens(genotype) {
  return genotype.match(/X[Aa]|Y|[Aa]/g) ?? [];
}

/**
 * A genotype read aloud: 'XAXa' → 'X mang A, X mang a'.
 * @param {string} genotype
 */
export function genotypeSpeech(genotype) {
  return alleleTokens(genotype)
    .map((t) => (t.length === 2 ? `X mang ${t[1]}` : t))
    .join(genotype.startsWith('X') ? ', ' : ' ');
}

/**
 * A genotype as inline TeX, the book's way: 'XAXa' → '$X^AX^a$', 'Aa' → '$Aa$'.
 * @param {string} genotype
 */
export function genotypeTex(genotype) {
  return `$${alleleTokens(genotype)
    .map((t) => (t.length === 2 ? `X^${t[1]}` : t))
    .join('')}$`;
}

/**
 * The genotypes a learner can choose from for one person.
 * @param {Mode} mode
 * @param {Person} person
 */
export function choicesFor(mode, person) {
  return candidateGenotypes(mode, person.sex);
}

/**
 * Compares a learner's picks with the genotypes the pedigree allows.
 * @param {Pedigree} p
 * @param {Mode} mode
 * @param {Record<string, string[]>} picks genotypes ticked per person
 * @returns {{ right: string[], wrong: string[], missing: string[] }}
 */
export function check(p, mode, picks) {
  const truth = possibleGenotypes(p, mode);
  /** @type {string[]} */
  const right = [];
  /** @type {string[]} */
  const wrong = [];
  /** @type {string[]} */
  const missing = [];
  for (const x of p.people) {
    const chosen = picks[x.id] ?? [];
    if (!chosen.length) missing.push(x.id);
    else if (sameSet(chosen, truth[x.id])) right.push(x.id);
    else wrong.push(x.id);
  }
  return { right, wrong, missing };
}

/** @param {string[]} a @param {string[]} b */
function sameSet(a, b) {
  return a.length === b.length && a.every((x) => b.includes(x));
}

/**
 * Whether a genotype carries no dominant allele (aa, XaXa, XaY).
 * @param {string} genotype
 */
const onlyRecessive = (genotype) => !genotype.includes('A');

/**
 * Why a person's genotype is what it is: read from their own phenotype,
 * forced by a parent who can only pass on a, or by a child who needs an a
 * from them, or not settled by the pedigree.
 * @param {Pedigree} p
 * @param {Mode} mode
 * @param {string} id
 */
export function reasonFor(p, mode, id) {
  const byId = new Map(p.people.map((x) => [x.id, x]));
  const name = labels(p);
  const all = possibleGenotypes(p, mode);
  const x = byId.get(id);
  const options = all[id] ?? [];
  if (!x || !options.length) return '';
  if (options.length > 1) {
    return `${name[id]} có thể mang ${options.map(genotypeTex).join(' hoặc ')}: phả hệ chưa đủ dữ kiện để biết chắc.`;
  }
  const genotype = options[0];
  const xLinked = mode === 'XR' || mode === 'XD';
  const homozygous = onlyRecessive(genotype) || !genotype.includes('a');
  if (homozygous || (xLinked && x.sex === 'M')) {
    return `${name[id]} ${x.affected ? 'mắc bệnh' : 'bình thường'}, nên kiểu gene đọc ngay từ kiểu hình: ${genotypeTex(genotype)}.`;
  }
  // Heterozygous: find who forces the a allele.
  /** @param {Person | undefined} parent @param {Person} child */
  const givesX = (parent, child) =>
    !!parent && (!xLinked || child.sex === 'F' || parent.sex === 'F');
  const sure = (/** @type {string} */ q) => (all[q] ?? []).every(onlyRecessive);
  for (const q of [x.father, x.mother]) {
    const parent = q ? byId.get(q) : undefined;
    if (parent && givesX(parent, x) && sure(parent.id)) {
      return `${name[id]} nhận chắc chắn một allele a từ ${name[parent.id]} (${genotypeTex(all[parent.id][0])}), nên mang ${genotypeTex(genotype)}.`;
    }
  }
  for (const c of p.people) {
    if ((c.father === id || c.mother === id) && givesX(x, c) && sure(c.id)) {
      return `${name[id]} phải truyền một allele a cho con ${name[c.id]} (${genotypeTex(all[c.id][0])}), nên mang ${genotypeTex(genotype)}.`;
    }
  }
  return `${name[id]} chỉ có thể mang ${genotypeTex(genotype)}.`;
}
