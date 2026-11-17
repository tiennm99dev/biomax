/**
 * Human genetics: three family pedigrees to analyse, the clues a pedigree
 * gives about dominance, and the risk figures of genetic counselling for a
 * recessive disease on an autosome or on the X chromosome.
 */

import { conflict, consistentModes, layoutPedigree } from '#lib/domain/pedigree.js';

/** @typedef {import('#lib/domain/pedigree.js').Pedigree} Pedigree */
/** @typedef {import('#lib/domain/pedigree.js').Mode} Mode */

/**
 * @typedef {{
 *   id: string;
 *   label: string;
 *   trait: string;
 *   truth: Mode;
 *   story: string;
 *   pedigree: Pedigree;
 * }} Family
 */

/** @type {Family[]} */
export const FAMILIES = [
  {
    id: 'bach-tang',
    label: 'Bạch tạng',
    trait: 'bệnh bạch tạng',
    truth: 'AR',
    story:
      'Bệnh bạch tạng: da, tóc trắng do thiếu sắc tố melanin. Bố mẹ đều có da bình thường nhưng sinh con gái bị bệnh.',
    pedigree: {
      people: [
        { id: 'i1', sex: 'M', affected: false },
        { id: 'i2', sex: 'F', affected: false },
        { id: 'ii1', sex: 'M', affected: false, father: 'i1', mother: 'i2' },
        { id: 'ii2', sex: 'F', affected: true, father: 'i1', mother: 'i2' },
        { id: 'ii3', sex: 'M', affected: false, father: 'i1', mother: 'i2' },
        { id: 'ii4', sex: 'M', affected: false },
        { id: 'iii1', sex: 'F', affected: false, father: 'ii4', mother: 'ii2' },
        { id: 'iii2', sex: 'M', affected: false, father: 'ii4', mother: 'ii2' },
      ],
    },
  },
  {
    id: 'ngon-ngan',
    label: 'Tật ngón tay ngắn',
    trait: 'tật ngón tay ngắn',
    truth: 'AD',
    story:
      'Tật ngón tay ngắn: các đốt ngón tay ngắn hơn bình thường. Bố và mẹ cùng mắc tật nhưng có một con gái bình thường.',
    pedigree: {
      people: [
        { id: 'i1', sex: 'M', affected: true },
        { id: 'i2', sex: 'F', affected: true },
        { id: 'ii1', sex: 'F', affected: false, father: 'i1', mother: 'i2' },
        { id: 'ii2', sex: 'M', affected: true, father: 'i1', mother: 'i2' },
        { id: 'ii3', sex: 'F', affected: true, father: 'i1', mother: 'i2' },
        { id: 'ii4', sex: 'F', affected: false },
        { id: 'iii1', sex: 'F', affected: false, father: 'ii2', mother: 'ii4' },
        { id: 'iii2', sex: 'M', affected: true, father: 'ii2', mother: 'ii4' },
      ],
    },
  },
  {
    id: 'mau-kho-dong',
    label: 'Máu khó đông',
    trait: 'bệnh máu khó đông',
    truth: 'XR',
    story:
      'Bệnh máu khó đông: máu chảy lâu không đông. Chỉ con trai mắc bệnh; con gái bình thường nhưng lại sinh cháu trai bị bệnh.',
    pedigree: {
      people: [
        { id: 'i1', sex: 'M', affected: false },
        { id: 'i2', sex: 'F', affected: false },
        { id: 'ii1', sex: 'M', affected: true, father: 'i1', mother: 'i2' },
        { id: 'ii2', sex: 'F', affected: false, father: 'i1', mother: 'i2' },
        { id: 'ii3', sex: 'M', affected: false, father: 'i1', mother: 'i2' },
        { id: 'ii4', sex: 'M', affected: false },
        { id: 'iii1', sex: 'M', affected: true, father: 'ii4', mother: 'ii2' },
        { id: 'iii2', sex: 'F', affected: false, father: 'ii4', mother: 'ii2' },
        { id: 'iii3', sex: 'M', affected: false, father: 'ii4', mother: 'ii2' },
      ],
    },
  },
];

/**
 * The labels the pedigree chart prints ('II.3'), by person id.
 * @param {Pedigree} p
 */
export function labeller(p) {
  const map = new Map(layoutPedigree(p).nodes.map((n) => [n.id, n.label]));
  return (/** @type {string} */ id) => map.get(id) ?? id;
}

/**
 * The dominance clues of a pedigree: a child with the trait from two parents
 * without it (the allele is recessive), and a child without the trait from
 * two parents with it (the allele is dominant).
 * @param {Pedigree} p
 */
export function clues(p) {
  const byId = new Map(p.people.map((x) => [x.id, x]));
  const personLabel = labeller(p);
  /** @type {string[]} */
  const out = [];
  for (const kid of p.people) {
    if (!kid.father || !kid.mother) continue;
    const dad = byId.get(kid.father);
    const mum = byId.get(kid.mother);
    if (!dad || !mum) continue;
    const who = `${personLabel(dad.id)} × ${personLabel(mum.id)} → ${personLabel(kid.id)}`;
    if (!dad.affected && !mum.affected && kid.affected)
      out.push(`${who}: bố mẹ bình thường sinh con mắc bệnh, allele gây bệnh là allele lặn.`);
    if (dad.affected && mum.affected && !kid.affected)
      out.push(`${who}: bố mẹ cùng mắc sinh con bình thường, allele gây bệnh là allele trội.`);
    if (!dad.affected && kid.affected && kid.sex === 'F' && !mum.affected)
      out.push(`${who}: con gái mắc bệnh lặn mà bố bình thường, nên gene không nằm trên X.`);
  }
  return out;
}

/**
 * The verdict on a learner's hypothesis about a pedigree.
 * @param {Pedigree} p
 * @param {Mode} mode
 * @returns {{ fits: boolean, others: Mode[], reason: string }}
 */
export function judge(p, mode) {
  const fits = consistentModes(p);
  if (fits.includes(mode))
    return { fits: true, others: fits.filter((m) => m !== mode), reason: '' };
  const c = conflict(p, mode);
  const personLabel = labeller(p);
  const reason = c
    ? `${personLabel(c.child)} không thể là con của ${personLabel(c.father)} và ${personLabel(c.mother)} theo giả thuyết này`
    : 'không gán được kiểu gene cho mọi người trong phả hệ';
  return { fits: false, others: fits, reason };
}

/* ---------- genetic counselling ---------- */

/** @typedef {'AR' | 'XR'} RiskMode */

export const MOTHERS = /** @type {Record<RiskMode, Array<{ g: string, label: string }>>} */ ({
  AR: [
    { g: 'AA', label: 'Không mang allele bệnh' },
    { g: 'Aa', label: 'Mang allele bệnh' },
    { g: 'aa', label: 'Mắc bệnh' },
  ],
  XR: [
    { g: 'XAXA', label: 'Không mang allele bệnh' },
    { g: 'XAXa', label: 'Mang allele bệnh' },
    { g: 'XaXa', label: 'Mắc bệnh' },
  ],
});

export const FATHERS = /** @type {Record<RiskMode, Array<{ g: string, label: string }>>} */ ({
  AR: MOTHERS.AR,
  XR: [
    { g: 'XAY', label: 'Bình thường' },
    { g: 'XaY', label: 'Mắc bệnh' },
  ],
});

/** @param {string} g */
const badHalves = (g) => (g.match(/a/g) ?? []).length;

/**
 * Chance, in quarters, that a child of these parents has the disease: for
 * all children, sons and daughters.
 * @param {RiskMode} mode
 * @param {string} mother genotype such as 'Aa' or 'XAXa'
 * @param {string} father genotype such as 'Aa' or 'XaY'
 * @returns {{ child: number, son: number, daughter: number }} each out of 4
 */
export function risk(mode, mother, father) {
  const hm = badHalves(mother);
  const hf = badHalves(father);
  if (mode === 'AR') {
    const q = hm * hf;
    return { child: q, son: q, daughter: q };
  }
  // X-linked: a son takes his X from the mother; a daughter is affected only
  // when the father's X carries the allele too.
  const son = hm * 2;
  const daughter = hm * hf * 2;
  return { child: (son + daughter) / 2, son, daughter };
}

/**
 * A chance out of 4 written as the book's fraction or a whole: '1/4', '0', '1'.
 * @param {number} q
 */
export function quarterText(q) {
  if (q === 0) return '$0$';
  if (q === 4) return '$1$';
  if (q === 2) return '$\\dfrac{1}{2}$';
  return `$\\dfrac{${q}}{4}$`;
}
