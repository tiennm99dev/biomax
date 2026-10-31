/**
 * Two genes of the fruit fly, body colour (B grey, b black) and wing length
 * (V long, v vestigial), crossed in two ways side by side: as if they lay on
 * different chromosome pairs (independent assortment) and as they really lie,
 * on one chromosome (complete linkage, as in Morgan's test cross). A parent
 * is written as its two chromosomes, each carrying one allele of each gene,
 * such as ['BV', 'bv'].
 */
import { gcd } from '#lib/numtheory-engine/index.js';

/** @typedef {'doc-lap' | 'lien-ket'} Mode */
/** @typedef {[string, string]} Parent */
/** @typedef {{ gamete: string, share: number }} Gamete */

/** @type {Record<Mode, string>} */
export const MODE_LABEL = {
  'doc-lap': 'Hai gene trên hai cặp NST khác nhau (phân li độc lập)',
  'lien-ket': 'Hai gene trên cùng một NST (di truyền liên kết)',
};

export const PHENOTYPES = [
  'thân xám, cánh dài',
  'thân xám, cánh cụt',
  'thân đen, cánh dài',
  'thân đen, cánh cụt',
];

/**
 * @typedef {{
 *   id: string;
 *   label: string;
 *   mother: Parent;
 *   father: Parent;
 *   note: string;
 * }} Cross
 */

/** @type {Cross[]} */
export const CROSSES = [
  {
    id: 'phan-tich',
    label: 'Lai phân tích ruồi đực F1',
    mother: ['bv', 'bv'],
    father: ['BV', 'bv'],
    note: 'Ruồi đực F1 thân xám, cánh dài lai với ruồi cái thân đen, cánh cụt, như thí nghiệm của Morgan.',
  },
  {
    id: 'f1-f1',
    label: 'F1 × F1',
    mother: ['BV', 'bv'],
    father: ['BV', 'bv'],
    note: 'Cho các ruồi F1 giao phối với nhau, giả sử các gene liên kết hoàn toàn ở cả hai giới.',
  },
];

/**
 * The gametes of a parent with their shares, in a fixed order (dominant
 * alleles first).
 * @param {Parent} parent
 * @param {Mode} mode
 * @returns {Gamete[]}
 */
export function gametesOf(parent, mode) {
  /** @type {Map<string, number>} */
  const shares = new Map();
  const add = (/** @type {string} */ g, /** @type {number} */ s) =>
    shares.set(g, (shares.get(g) ?? 0) + s);
  if (mode === 'lien-ket') {
    for (const chromosome of parent) add(chromosome, 0.5);
  } else {
    for (const b of [parent[0][0], parent[1][0]]) {
      for (const v of [parent[0][1], parent[1][1]]) add(b + v, 0.25);
    }
  }
  return [...shares]
    .map(([gamete, share]) => ({ gamete, share }))
    .sort((a, b) => order(a.gamete) - order(b.gamete));
}

/** Sort key: BV, Bv, bV, bv. @param {string} g */
function order(g) {
  return (g[0] === 'B' ? 0 : 2) + (g[1] === 'V' ? 0 : 1);
}

/**
 * The phenotype of a fly from its two chromosomes (index into PHENOTYPES).
 * @param {string} egg
 * @param {string} sperm
 */
export function phenotypeIndex(egg, sperm) {
  const grey = egg[0] === 'B' || sperm[0] === 'B';
  const long = egg[1] === 'V' || sperm[1] === 'V';
  return (grey ? 0 : 2) + (long ? 0 : 1);
}

/**
 * A genotype written for each mode: "BbVv" for genes on two pairs, "BV/bv"
 * (the two chromosomes) for linked genes.
 * @param {string} egg
 * @param {string} sperm
 * @param {Mode} mode
 */
export function genotypeText(egg, sperm, mode) {
  const [a, b] = [egg, sperm].sort((x, y) => order(x) - order(y));
  if (mode === 'lien-ket') return `${a}/${b}`;
  const pair = (/** @type {string} */ x, /** @type {string} */ y) => (x < y ? x + y : y + x);
  return pair(a[0], b[0]) + pair(a[1], b[1]);
}

/**
 * The whole cross: gametes of both parents, the Punnett square and the
 * phenotype ratio in whole numbers.
 * @param {Cross} cross
 * @param {Mode} mode
 */
export function crossResult(cross, mode) {
  const eggs = gametesOf(cross.mother, mode);
  const sperms = gametesOf(cross.father, mode);
  const cells = eggs.map((e) =>
    sperms.map((s) => ({
      genotype: genotypeText(e.gamete, s.gamete, mode),
      phenotype: phenotypeIndex(e.gamete, s.gamete),
      share: e.share * s.share,
    })),
  );
  const shares = PHENOTYPES.map(() => 0);
  for (const row of cells) for (const c of row) shares[c.phenotype] += c.share;
  const counts = shares.map((s) => Math.round(s * 16));
  const g = counts.filter((c) => c > 0).reduce((x, y) => gcd(x, y));
  const ratio = counts.map((c) => c / g);
  const present = PHENOTYPES.map((name, i) => ({ name, count: ratio[i], index: i })).filter(
    (p) => p.count > 0,
  );
  return {
    eggs,
    sperms,
    cells,
    phenotypes: present,
    ratio: present.map((p) => p.count).join(' : '),
  };
}

/** Ratios learners may predict for the cross. */
export const PREDICTIONS = ['1 : 1 : 1 : 1', '9 : 3 : 3 : 1', '3 : 1', '1 : 1'];

/**
 * Feedback on a predicted ratio of the linked cross.
 * @param {Cross} cross
 * @param {string} guess
 */
export function predictionFeedback(cross, guess) {
  const real = crossResult(cross, 'lien-ket').ratio;
  const free = crossResult(cross, 'doc-lap').ratio;
  if (guess === real) {
    return {
      ok: true,
      text: `Đúng: ${real}. Hai gene cùng nằm trên một NST nên đi cùng nhau vào giao tử; chỉ có ${crossResult(cross, 'lien-ket').phenotypes.length} kiểu hình.`,
    };
  }
  if (guess === free) {
    return {
      ok: false,
      text: `${free} là kết quả khi hai gene phân li độc lập. Morgan không thu được tỉ lệ này: hãy xem bảng bên phải.`,
    };
  }
  return {
    ok: false,
    text: 'Chưa đúng. Đếm số loại giao tử của ruồi F1 khi hai gene nằm trên cùng một NST.',
  };
}
