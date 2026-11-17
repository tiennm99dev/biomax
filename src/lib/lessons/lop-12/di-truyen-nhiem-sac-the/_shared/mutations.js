/**
 * Chromosome mutations as data: chromosomes written as gene blocks around a
 * centromere, the four structural changes (deletion, duplication, inversion,
 * translocation), the naming of numerical changes (aneuploidy and
 * polyploidy) from the count of each homologous pair, and a simplified human
 * karyotype with its best known abnormalities.
 */

/** Label of the centromere block. */
export const CEN = '•';

/** @typedef {'A' | 'B'} Home */
/** @typedef {{ id: string, label: string, home: Home }} Gene */
/** @typedef {'mat' | 'lap' | 'dao' | 'chuyen'} StructuralOp */

/**
 * A chromosome from a string such as 'ABC•DEFGH'.
 * @param {Home} home which chromosome the genes first belong to
 * @param {string} text gene letters with one '•' for the centromere
 * @returns {Gene[]}
 */
export function makeChromosome(home, text) {
  return [...text].map((label, i) => ({ id: `${home}${i}`, label, home }));
}

/** The two non-homologous chromosomes the structural widget starts from. */
export const START_A = 'ABC•DEFGH';
export const START_B = 'MN•OPQR';

let serial = 0;

/** @param {Gene} g */
export const isCen = (g) => g.label === CEN;

/** @param {Gene[]} chrom */
export const cenIndex = (chrom) => chrom.findIndex(isCen);

/** @param {Gene[]} chrom */
export const geneText = (chrom) => chrom.map((g) => g.label).join('');

export const OP_NAMES = /** @type {Record<StructuralOp, string>} */ ({
  mat: 'Mất đoạn',
  lap: 'Lặp đoạn',
  dao: 'Đảo đoạn',
  chuyen: 'Chuyển đoạn',
});

/**
 * Whether a segment i..j (inclusive) holds the centromere.
 * @param {Gene[]} chrom @param {number} i @param {number} j
 */
function holdsCen(chrom, i, j) {
  const c = cenIndex(chrom);
  return c >= i && c <= j;
}

/**
 * Applies a structural change to segment i..j of chromosome `a`; a
 * translocation swaps that segment, which must reach an end of `a`, with the
 * end of `b` on the same side (a reciprocal translocation).
 * @param {StructuralOp} op
 * @param {Gene[]} a
 * @param {Gene[]} b
 * @param {number} i first gene of the segment
 * @param {number} j last gene of the segment
 * @returns {{ a: Gene[], b: Gene[] } | { error: string }}
 */
export function applyOp(op, a, b, i, j) {
  const lo = Math.min(i, j);
  const hi = Math.max(i, j);
  if (lo < 0 || hi >= a.length) return { error: 'Đoạn đã chọn nằm ngoài nhiễm sắc thể.' };
  const seg = a.slice(lo, hi + 1);
  const before = a.slice(0, lo);
  const after = a.slice(hi + 1);
  switch (op) {
    case 'mat':
      if (holdsCen(a, lo, hi))
        return {
          error:
            'Đoạn chứa tâm động: nhiễm sắc thể mất tâm động không bám được vào thoi phân bào và bị tiêu biến. Hãy chọn một đoạn không chứa tâm động.',
        };
      return { a: [...before, ...after], b };
    case 'lap':
      if (holdsCen(a, lo, hi)) return { error: 'Hãy chọn đoạn lặp không chứa tâm động.' };
      if (a.length + seg.length > 14)
        return { error: 'Nhiễm sắc thể đã dài, hãy đặt lại trước khi lặp thêm.' };
      return {
        a: [...before, ...seg, ...seg.map((g) => ({ ...g, id: `${g.id}~${++serial}` })), ...after],
        b,
      };
    case 'dao':
      if (seg.length < 2) return { error: 'Đảo đoạn cần một đoạn dài ít nhất 2 gene.' };
      return { a: [...before, ...[...seg].reverse(), ...after], b };
    case 'chuyen': {
      if (holdsCen(a, lo, hi)) return { error: 'Đoạn chuyển không được chứa tâm động.' };
      const left = lo === 0;
      const right = hi === a.length - 1;
      if (!left && !right)
        return {
          error:
            'Trong mô hình này, hãy chọn một đoạn ở đầu mút (sát đầu trái hoặc đầu phải) để trao đổi với nhiễm sắc thể kia.',
        };
      const cb = cenIndex(b);
      if (left) {
        const bEnd = b.slice(0, Math.max(1, cb - 1));
        return { a: [...bEnd, ...after], b: [...seg, ...b.slice(bEnd.length)] };
      }
      const bEnd = b.slice(Math.min(b.length - 1, cb + 3));
      return {
        a: [...before, ...bEnd],
        b: [...b.slice(0, b.length - bEnd.length), ...seg],
      };
    }
  }
}

/**
 * What a structural change did to the genes of chromosome A: how many it now
 * holds, and whether some came from chromosome B.
 * @param {Gene[]} a
 */
export function tally(a) {
  const genes = a.filter((g) => !isCen(g));
  return {
    genes: genes.length,
    foreign: genes.filter((g) => g.home !== 'A').length,
  };
}

/* ---------- numerical changes ---------- */

/**
 * @typedef {{
 *   kind: 'binh-thuong' | 'lech-boi' | 'da-boi' | 'don-boi';
 *   name: string;
 *   notation: string;
 *   total: number;
 * }} CountVerdict
 */

/**
 * The most common count among the pairs; a tie goes to 2 when 2 is among
 * the tied counts, else to the larger count.
 * @param {number[]} counts
 */
function baseCount(counts) {
  /** @type {Map<number, number>} */
  const freq = new Map();
  for (const c of counts) freq.set(c, (freq.get(c) ?? 0) + 1);
  let best = -1;
  let bestN = -1;
  for (const [c, n] of freq) {
    if (n > bestN || (n === bestN && (c === 2 || (best !== 2 && c > best)))) {
      best = c;
      bestN = n;
    }
  }
  return best;
}

/** @param {number} k */
const setTex = (k) => (k === 1 ? 'n' : `${k}n`);

/**
 * Names the chromosome set from the number of chromosomes in each
 * homologous group, the way the book does: 2n, 2n + 1 (thể ba), 3n (tam
 * bội)… Signs are the typographic minus.
 * @param {number[]} counts chromosomes in each group, n groups
 * @returns {CountVerdict}
 */
export function classifyCounts(counts) {
  const total = counts.reduce((s, c) => s + c, 0);
  const most = baseCount(counts);
  // Empty groups are losses from a diploid set (thể không), never a "0n" set.
  const base = most === 0 && total > 0 ? 2 : most;
  const diffs = counts.map((c) => c - base).filter((d) => d !== 0);
  if (diffs.length === 0) {
    if (base === 2)
      return { kind: 'binh-thuong', name: 'Lưỡng bội bình thường', notation: '2n', total };
    if (base === 1) return { kind: 'don-boi', name: 'Thể đơn bội', notation: 'n', total };
    if (base === 0)
      return { kind: 'lech-boi', name: 'Không còn nhiễm sắc thể', notation: '0', total };
    const names = {
      3: 'Thể tam bội (đa bội lẻ)',
      4: 'Thể tứ bội (đa bội chẵn)',
      5: 'Thể ngũ bội (đa bội lẻ)',
      6: 'Thể lục bội (đa bội chẵn)',
    };
    return {
      kind: 'da-boi',
      name: names[/** @type {3 | 4 | 5 | 6} */ (base)] ?? `Thể đa bội ${base}n`,
      notation: setTex(base),
      total,
    };
  }
  const sorted = [...diffs].sort((x, y) => y - x);
  const notation = `${setTex(base)}${sorted.map((d) => (d > 0 ? ` + ${d}` : ` − ${-d}`)).join('')}`;
  let name = 'Thể lệch bội';
  if (base === 2) {
    const key = sorted.join(',');
    /** @type {Record<string, string>} */
    const NAMES = {
      '-1': 'Thể một',
      '-2': 'Thể không',
      1: 'Thể ba',
      2: 'Thể bốn',
      '-1,-1': 'Thể một kép',
      '1,1': 'Thể ba kép',
    };
    name = NAMES[key] ?? 'Thể lệch bội ở nhiều cặp';
  }
  return { kind: 'lech-boi', name, notation, total };
}

/* ---------- human karyotype ---------- */

/**
 * Relative length and centromere position (share of the length above the
 * centromere) of human chromosomes 1 to 22, X and Y, rounded from the
 * reference genome; good enough to draw a karyotype to scale.
 */
export const HUMAN = [
  [248, 0.5],
  [242, 0.39],
  [198, 0.47],
  [190, 0.27],
  [181, 0.27],
  [171, 0.35],
  [159, 0.37],
  [145, 0.31],
  [138, 0.33],
  [134, 0.3],
  [135, 0.39],
  [133, 0.27],
  [114, 0.15],
  [107, 0.15],
  [102, 0.17],
  [90, 0.4],
  [83, 0.3],
  [80, 0.22],
  [59, 0.45],
  [64, 0.43],
  [47, 0.25],
  [51, 0.25],
];
export const HUMAN_X = /** @type {[number, number]} */ ([156, 0.39]);
export const HUMAN_Y = /** @type {[number, number]} */ ([57, 0.2]);

/** @typedef {{ size: number, cen: number, tag?: string }} Chromo */
/** @typedef {{ label: string, items: Chromo[] }} Group */

/**
 * A human karyotype as 23 groups (1–22 and the sex chromosomes).
 * @param {{ sex?: string, extra?: number[], missing?: number[] }} [opts]
 *   sex: the sex chromosomes as letters ('XX', 'XY', 'X', 'XXY', 'XXX');
 *   extra / missing: autosome numbers with one chromosome more / fewer.
 * @returns {Group[]}
 */
export function humanKaryotype({ sex = 'XX', extra = [], missing = [] } = {}) {
  const max = HUMAN[0][0];
  /** @param {[number, number]} d */
  const chromo = ([len, cen]) => ({ size: len / max, cen });
  const groups = HUMAN.map((d, i) => {
    const no = i + 1;
    const count = 2 + extra.filter((x) => x === no).length - missing.filter((x) => x === no).length;
    return {
      label: String(no),
      items: Array.from({ length: count }, () => chromo(/** @type {[number, number]} */ (d))),
    };
  });
  groups.push({
    label: 'Giới tính',
    items: [...sex].map((s) => ({ ...chromo(s === 'X' ? HUMAN_X : HUMAN_Y), tag: s })),
  });
  return groups;
}

/**
 * A plant species with 2n = 8, four pairs of decreasing size, with `counts`
 * chromosomes in each group.
 * @param {number[]} counts
 * @returns {Group[]}
 */
export function plantKaryotype(counts) {
  const SIZES = [
    [1, 0.5],
    [0.82, 0.35],
    [0.64, 0.42],
    [0.46, 0.2],
  ];
  return counts.map((c, i) => ({
    label: String(i + 1),
    items: Array.from({ length: c }, () => ({ size: SIZES[i][0], cen: SIZES[i][1] })),
  }));
}

/**
 * Says the karyotype in words for screen readers, group by group, folding
 * the groups that hold the usual two chromosomes.
 * @param {Group[]} groups
 */
export function karyotypeWords(groups) {
  const total = groups.reduce((s, g) => s + g.items.length, 0);
  const odd = groups.filter((g) => g.items.length !== 2 || g.items.some((c) => c.tag));
  const parts = odd.map((g) =>
    g.items.some((c) => c.tag)
      ? `nhóm giới tính: ${g.items.map((c) => c.tag).join(', ') || 'không có'}`
      : `cặp ${g.label}: ${g.items.length} chiếc`,
  );
  const usual = groups.length - odd.length;
  return `Tổng ${total} nhiễm sắc thể. ${usual ? `${usual} nhóm có 2 chiếc` : ''}${parts.length ? `${usual ? '; ' : ''}${parts.join('; ')}` : ''}.`;
}
