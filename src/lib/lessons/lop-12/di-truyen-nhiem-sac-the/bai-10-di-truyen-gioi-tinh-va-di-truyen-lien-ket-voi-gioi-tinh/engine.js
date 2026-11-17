/**
 * Sex-linked crosses for one gene on the X (or Z) chromosome, with no allele
 * on the Y (or W). In the XY system females are XX and males XY; in the ZW
 * system of birds males are ZZ and females ZW. A chromosome is written as a
 * token: "XM", "Xm", "Y", "ZB", "W".
 */

/**
 * @typedef {{
 *   id: string;
 *   label: string;
 *   system: 'XY' | 'ZW';
 *   letter: string;
 *   dom: string;
 *   rec: string;
 *   species: string;
 * }} Trait
 */

/** @type {Trait[]} */
export const TRAITS = [
  {
    id: 'mu-mau',
    label: 'Mù màu (người)',
    system: 'XY',
    letter: 'M',
    dom: 'nhìn màu bình thường',
    rec: 'mù màu đỏ – lục',
    species: 'người',
  },
  {
    id: 'mau-kho-dong',
    label: 'Máu khó đông (người)',
    system: 'XY',
    letter: 'H',
    dom: 'máu đông bình thường',
    rec: 'máu khó đông',
    species: 'người',
  },
  {
    id: 'mat-ruoi',
    label: 'Mắt trắng (ruồi giấm)',
    system: 'XY',
    letter: 'W',
    dom: 'mắt đỏ',
    rec: 'mắt trắng',
    species: 'ruồi giấm',
  },
  {
    id: 'long-ga',
    label: 'Lông vằn (gà)',
    system: 'ZW',
    letter: 'B',
    dom: 'lông vằn',
    rec: 'lông không vằn',
    species: 'gà',
  },
];

/** @param {string} id */
export function traitOf(id) {
  return TRAITS.find((t) => t.id === id) ?? TRAITS[0];
}

/** @param {Trait} t */
const homo = (t) => (t.system === 'XY' ? 'X' : 'Z');
/** @param {Trait} t */
const hetero = (t) => (t.system === 'XY' ? 'Y' : 'W');

/**
 * The genotypes of each sex, as chromosome tokens, dominant allele first.
 * @param {Trait} t
 * @param {'F' | 'M'} sex
 * @returns {string[][]}
 */
export function genotypesFor(t, sex) {
  const big = homo(t) + t.letter;
  const small = homo(t) + t.letter.toLowerCase();
  const twoAlike = (t.system === 'XY') === (sex === 'F');
  return twoAlike
    ? [
        [big, big],
        [big, small],
        [small, small],
      ]
    : [
        [big, hetero(t)],
        [small, hetero(t)],
      ];
}

/**
 * Sex of an individual from its chromosomes.
 * @param {Trait} t
 * @param {string[]} g
 * @returns {'F' | 'M'}
 */
export function sexOf(t, g) {
  const het = g.includes(hetero(t));
  return t.system === 'XY' ? (het ? 'M' : 'F') : het ? 'F' : 'M';
}

/**
 * Whether an individual shows the dominant trait.
 * @param {string[]} g
 */
export function showsDominant(g) {
  return g.some((tok) => tok.length === 2 && tok[1] === tok[1].toUpperCase());
}

/** @param {string} tok */
const rank = (tok) => (tok.length === 1 ? 2 : tok[1] === tok[1].toUpperCase() ? 0 : 1);

/**
 * Orders a zygote's chromosomes: dominant allele, recessive allele, then Y or W.
 * @param {string[]} g
 */
export function ordered(g) {
  return [...g].sort((a, b) => rank(a) - rank(b));
}

/**
 * TeX for a genotype: ["XM", "Xm"] → "X^MX^m", ["ZB", "W"] → "Z^BW".
 * @param {string[]} g
 */
export function genotypeTex(g) {
  return g.map((tok) => (tok.length === 2 ? `${tok[0]}^${tok[1]}` : tok)).join('');
}

/**
 * The cross ♀ mother × ♂ father: the 2 × 2 square of gametes and, for each
 * sex of child, the share showing each trait.
 * @param {Trait} t
 * @param {string[]} mother
 * @param {string[]} father
 */
export function sexLinkedCross(t, mother, father) {
  const cells = mother.map((e) => father.map((s) => ordered([e, s])));
  const flat = cells.flat();
  /** @param {'F' | 'M'} sex */
  const part = (sex) => {
    const kids = flat.filter((g) => sexOf(t, g) === sex);
    const dom = kids.filter(showsDominant).length;
    return { total: kids.length, dom, rec: kids.length - dom };
  };
  return { cells, daughters: part('F'), sons: part('M') };
}

/**
 * Plain-language summary of one sex of children, e.g. "con gái: 100% mắt đỏ".
 * @param {Trait} t
 * @param {{ total: number, dom: number, rec: number }} p
 */
export function shareText(t, p) {
  if (!p.total) return '';
  if (p.rec === 0) return `100% ${t.dom}`;
  if (p.dom === 0) return `100% ${t.rec}`;
  return `${(p.dom / p.total) * 100}% ${t.dom}, ${(p.rec / p.total) * 100}% ${t.rec}`;
}

/**
 * Crisscross inheritance: a recessive homogametic parent with a dominant
 * heterogametic one gives every child of the heterogametic sex the
 * recessive trait and every child of the homogametic sex the dominant one.
 * @param {Trait} t
 * @param {string[]} mother
 * @param {string[]} father
 */
export function isCrisscross(t, mother, father) {
  const [homoParent, heteroParent] = t.system === 'XY' ? [mother, father] : [father, mother];
  return !showsDominant(homoParent) && showsDominant(heteroParent);
}

/**
 * Ready-made crosses per trait.
 * @type {Record<string, Array<{ label: string, mother: number, father: number }>>}
 */
export const PRESETS = {
  'mu-mau': [
    { label: 'Mẹ mang gene × bố bình thường', mother: 1, father: 0 },
    { label: 'Mẹ bình thường × bố mù màu', mother: 0, father: 1 },
  ],
  'mau-kho-dong': [
    { label: 'Mẹ mang gene × bố bình thường', mother: 1, father: 0 },
    { label: 'Mẹ mang gene × bố bị bệnh', mother: 1, father: 1 },
  ],
  'mat-ruoi': [
    { label: 'Lai thuận: ♀ đỏ × ♂ trắng', mother: 0, father: 1 },
    { label: 'Lai nghịch: ♀ trắng × ♂ đỏ', mother: 2, father: 0 },
    { label: 'F₁ lai thuận × nhau', mother: 1, father: 0 },
  ],
  'long-ga': [
    { label: '♂ không vằn × ♀ vằn (phân biệt trống mái)', mother: 0, father: 2 },
    { label: '♂ vằn × ♀ không vằn', mother: 1, father: 0 },
  ],
};

/** Superscript letters for genotypes written in plain text (select options). */
const SUP = /** @type {Record<string, string>} */ ({
  M: 'ᴹ',
  m: 'ᵐ',
  H: 'ᴴ',
  h: 'ʰ',
  W: 'ᵂ',
  w: 'ʷ',
  B: 'ᴮ',
  b: 'ᵇ',
});

/**
 * Plain text for a genotype with superscript alleles: ["XM", "Xm"] → "XᴹXᵐ".
 * @param {string[]} g
 */
export function genotypePlain(g) {
  return g.map((tok) => (tok.length === 2 ? tok[0] + (SUP[tok[1]] ?? tok[1]) : tok)).join('');
}
