/**
 * Extensions of Mendel's laws: how the F₂ (or a cross of heterozygotes)
 * changes when the alleles of one gene interact (incomplete dominance,
 * codominance) or when two non-allelic genes act on one trait (complementary
 * and additive interaction). Each mode maps a genotype to a phenotype; the
 * Punnett square and its ratio follow.
 */
import { tidy } from '#lib/core/number-format.js';
import { ratio } from '#lib/domain/genetics.js';

/**
 * @typedef {{ id: string, name: string, color: string }} Phenotype
 * @typedef {{
 *   id: string;
 *   label: string;
 *   group: 'allele' | 'gene';
 *   title: string;
 *   cross: string;
 *   gametes: string[];
 *   fatherGametes?: string[];
 *   phenotypes: Phenotype[];
 *   classify: (alleles: string[]) => string;
 *   how: string;
 * }} Mode
 */

const TWO = ['AB', 'Ab', 'aB', 'ab'];

/** @param {string} a */
const isUpper = (a) => a === a.toUpperCase();

/**
 * Number of dominant (upper-case) alleles among the letters of a zygote.
 * @param {string[]} alleles
 */
export function dominantCount(alleles) {
  return alleles.filter((a) => /^[A-Z]$/.test(a)).length;
}

/** @param {string[]} alleles @param {string} letter */
const has = (alleles, letter) => alleles.includes(letter);

/** @type {Mode[]} */
export const MODES = [
  {
    id: 'doc-lap',
    label: 'Không tương tác',
    group: 'gene',
    title: 'Hai gene quy định hai tính trạng khác nhau (đậu Hà Lan: màu và hình dạng hạt)',
    cross: 'AaBb × AaBb',
    gametes: TWO,
    phenotypes: [
      { id: 'AB', name: 'vàng, trơn', color: '#eab308' },
      { id: 'Ab', name: 'vàng, nhăn', color: '#f97316' },
      { id: 'aB', name: 'xanh, trơn', color: '#22c55e' },
      { id: 'ab', name: 'xanh, nhăn', color: '#15803d' },
    ],
    classify: (g) => (has(g, 'A') ? 'A' : 'a') + (has(g, 'B') ? 'B' : 'b'),
    how: 'Mỗi gene quy định một tính trạng, trội hoàn toàn, phân li độc lập: tỉ lệ $9 : 3 : 3 : 1$ (để so sánh).',
  },
  {
    id: 'bo-sung-97',
    label: 'Bổ sung 9 : 7',
    group: 'gene',
    title: 'Màu hoa đậu thơm',
    cross: 'AaBb × AaBb',
    gametes: TWO,
    phenotypes: [
      { id: 'do', name: 'hoa đỏ', color: '#dc2626' },
      { id: 'trang', name: 'hoa trắng', color: '#cbd5e1' },
    ],
    classify: (g) => (has(g, 'A') && has(g, 'B') ? 'do' : 'trang'),
    how: 'Tiền chất (trắng) → enzyme A → chất trung gian (trắng) → enzyme B → sắc tố đỏ. Chỉ khi có cả allele trội $A$ và $B$ (đủ hai enzyme) hoa mới đỏ.',
  },
  {
    id: 'bo-sung-961',
    label: 'Bổ sung 9 : 6 : 1',
    group: 'gene',
    title: 'Hình dạng quả bí ngô',
    cross: 'AaBb × AaBb',
    gametes: TWO,
    phenotypes: [
      { id: 'det', name: 'quả dẹt', color: '#f59e0b' },
      { id: 'tron', name: 'quả tròn', color: '#fb923c' },
      { id: 'dai', name: 'quả dài', color: '#fde68a' },
    ],
    classify: (g) => {
      const a = has(g, 'A');
      const b = has(g, 'B');
      return a && b ? 'det' : a || b ? 'tron' : 'dai';
    },
    how: 'Có cả $A$ và $B$: quả dẹt; chỉ có một trong hai loại allele trội: quả tròn; không có allele trội nào ($aabb$): quả dài.',
  },
  {
    id: 'cong-gop-151',
    label: 'Cộng gộp 15 : 1',
    group: 'gene',
    title: 'Màu hạt lúa mì (chỉ phân biệt có màu và không màu)',
    cross: 'AaBb × AaBb',
    gametes: TWO,
    phenotypes: [
      { id: 'do', name: 'hạt đỏ', color: '#b91c1c' },
      { id: 'trang', name: 'hạt trắng', color: '#f1f5f9' },
    ],
    classify: (g) => (dominantCount(g) > 0 ? 'do' : 'trang'),
    how: 'Mỗi allele trội ($A$ hoặc $B$) đều tổng hợp được sắc tố đỏ; chỉ $aabb$ không có sắc tố. Gộp mọi mức đỏ lại: $15$ đỏ $: 1$ trắng.',
  },
  {
    id: 'cong-gop-14641',
    label: 'Cộng gộp 1 : 4 : 6 : 4 : 1',
    group: 'gene',
    title: 'Màu hạt lúa mì (phân biệt theo độ đậm)',
    cross: 'AaBb × AaBb',
    gametes: TWO,
    phenotypes: [
      { id: '4', name: 'đỏ thẫm (4 allele trội)', color: '#7f1d1d' },
      { id: '3', name: 'đỏ (3 allele trội)', color: '#b91c1c' },
      { id: '2', name: 'đỏ nhạt (2 allele trội)', color: '#ef4444' },
      { id: '1', name: 'hồng (1 allele trội)', color: '#fca5a5' },
      { id: '0', name: 'trắng (0 allele trội)', color: '#f1f5f9' },
    ],
    classify: (g) => String(dominantCount(g)),
    how: 'Mỗi allele trội góp một phần như nhau vào lượng sắc tố: càng nhiều allele trội, hạt càng đỏ.',
  },
  {
    id: 'troi-khong-hoan-toan',
    label: 'Trội không hoàn toàn',
    group: 'allele',
    title: 'Màu hoa phấn',
    cross: 'Aa × Aa',
    gametes: ['A', 'a'],
    phenotypes: [
      { id: 'AA', name: 'hoa đỏ', color: '#dc2626' },
      { id: 'Aa', name: 'hoa hồng', color: '#f9a8d4' },
      { id: 'aa', name: 'hoa trắng', color: '#f1f5f9' },
    ],
    classify: (g) => ['aa', 'Aa', 'AA'][dominantCount(g)],
    how: 'Allele $A$ chỉ trội một phần so với $a$: thể dị hợp $Aa$ có kiểu hình trung gian (hồng), nên tỉ lệ kiểu hình trùng tỉ lệ kiểu gene $1 : 2 : 1$.',
  },
  {
    id: 'dong-troi',
    label: 'Đồng trội (nhóm máu ABO)',
    group: 'allele',
    title: 'Nhóm máu ABO ở người',
    cross: 'IᴬIᴼ × IᴮIᴼ',
    gametes: ['Iᴬ', 'Iᴼ'],
    fatherGametes: ['Iᴮ', 'Iᴼ'],
    phenotypes: [
      { id: 'A', name: 'nhóm máu A', color: '#3b82f6' },
      { id: 'B', name: 'nhóm máu B', color: '#f59e0b' },
      { id: 'AB', name: 'nhóm máu AB', color: '#8b5cf6' },
      { id: 'O', name: 'nhóm máu O', color: '#94a3b8' },
    ],
    classify: (g) => {
      const a = g.includes('Iᴬ');
      const b = g.includes('Iᴮ');
      return a && b ? 'AB' : a ? 'A' : b ? 'B' : 'O';
    },
    how: 'Gene có ba allele $I^A$, $I^B$, $I^O$. $I^A$ và $I^B$ đồng trội (thể $I^AI^B$ có cả hai kháng nguyên, nhóm máu AB); cả hai trội hoàn toàn so với $I^O$.',
  },
];

/** @param {string} id */
export function modeOf(id) {
  return MODES.find((m) => m.id === id) ?? MODES[0];
}

/**
 * Splits a gamete into its alleles: "Ab" → ['A', 'b'], "Iᴬ" → ['Iᴬ'].
 * @param {string} gamete
 */
export function allelesOf(gamete) {
  return gamete.startsWith('I') ? [gamete] : gamete.split('');
}

/**
 * Writes a zygote's genotype the textbook way: dominant allele first,
 * gene by gene ("AaBb", "IᴬIᴼ").
 * @param {string[]} egg
 * @param {string[]} sperm
 */
export function zygoteText(egg, sperm) {
  if (egg[0].startsWith('I')) {
    const order = ['Iᴬ', 'Iᴮ', 'Iᴼ'];
    return [egg[0], sperm[0]].sort((x, y) => order.indexOf(x) - order.indexOf(y)).join('');
  }
  return egg.map((a, i) => (isUpper(a) ? a + sperm[i] : sperm[i] + a)).join('');
}

/**
 * The Punnett square of a mode's cross: rows the mother's gametes, columns
 * the father's (the same unless `fatherGametes` is set), each cell with its genotype and phenotype id, and the
 * phenotype counts in the mode's order.
 * @param {Mode} mode
 */
export function punnett(mode) {
  const rowsG = mode.gametes;
  const colsG = mode.fatherGametes ?? mode.gametes;
  const cells = rowsG.map((r) =>
    colsG.map((c) => {
      const egg = allelesOf(r);
      const sperm = allelesOf(c);
      return { genotype: zygoteText(egg, sperm), phenotype: mode.classify([...egg, ...sperm]) };
    }),
  );
  const counts = mode.phenotypes.map(
    (p) => cells.flat().filter((cell) => cell.phenotype === p.id).length,
  );
  return { rows: rowsG, cols: colsG, cells, counts, total: cells.flat().length };
}

/**
 * The phenotype ratio of a mode, e.g. "9 : 7".
 * @param {Mode} mode
 */
export function modeRatio(mode) {
  return ratio(punnett(mode).counts.filter((n) => n > 0));
}

/**
 * Real F₂ counts for the "which interaction?" game, each with the mode that
 * explains it.
 * @type {Array<{ text: string, counts: Array<[string, number]>, answer: string }>}
 */
export const PUZZLES = [
  {
    text: 'Lai hai giống đậu thơm hoa trắng thuần chủng, $F_1$ toàn hoa đỏ; $F_2$:',
    counts: [
      ['hoa đỏ', 272],
      ['hoa trắng', 208],
    ],
    answer: 'bo-sung-97',
  },
  {
    text: 'Lai hai giống bí quả tròn thuần chủng, $F_1$ toàn quả dẹt; $F_2$:',
    counts: [
      ['quả dẹt', 182],
      ['quả tròn', 118],
      ['quả dài', 20],
    ],
    answer: 'bo-sung-961',
  },
  {
    text: 'Lai lúa mì hạt đỏ thẫm với hạt trắng, $F_1$ hạt đỏ nhạt; $F_2$:',
    counts: [
      ['đỏ thẫm', 21],
      ['đỏ', 79],
      ['đỏ nhạt', 122],
      ['hồng', 78],
      ['trắng', 20],
    ],
    answer: 'cong-gop-14641',
  },
  {
    text: 'Lai cây hoa phấn đỏ với cây hoa trắng, $F_1$ toàn hoa hồng; $F_2$:',
    counts: [
      ['hoa đỏ', 52],
      ['hoa hồng', 101],
      ['hoa trắng', 49],
    ],
    answer: 'troi-khong-hoan-toan',
  },
  {
    text: 'Lai hai giống lúa mì hạt đỏ và hạt trắng, $F_1$ hạt đỏ; $F_2$ (chỉ phân biệt có màu và không màu):',
    counts: [
      ['hạt đỏ', 451],
      ['hạt trắng', 29],
    ],
    answer: 'cong-gop-151',
  },
];

/**
 * Counts scaled so they add up to `parts` (16 for a two-gene F₂), to one
 * decimal place: compares real data with a ratio.
 * @param {number[]} counts
 * @param {number} parts
 */
export function scaled(counts, parts) {
  const total = counts.reduce((a, b) => a + b, 0);
  return counts.map((n) => tidy((n / total) * parts, 1));
}

/**
 * Number of genotypes of a gene with k alleles in a diploid population.
 * @param {number} k
 */
export function genotypeCount(k) {
  return (k * (k + 1)) / 2;
}
