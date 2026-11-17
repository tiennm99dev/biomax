/**
 * The evolutionary factors of the modern synthesis acting on one gene with
 * two alleles, A (tần số p) and a (tần số q = 1 − p), over many generations:
 *
 * - đột biến: a share u of the A alleles mutates into a each generation;
 * - dòng gene (di – nhập gene): a share m of the gene pool comes from a
 *   neighbouring population with allele frequency `DONOR_P`;
 * - phiêu bạt di truyền: in a population of N individuals the next
 *   generation's 2N alleles are a random sample of the parents' alleles;
 * - giao phối không ngẫu nhiên: a share S of the individuals self-fertilise,
 *   the rest mate at random; allele frequencies stay, heterozygotes fall;
 * - chọn lọc tự nhiên: the recessive phenotype (aa) or the dominant one
 *   (AA, Aa) leaves a share s fewer offspring.
 */

import { rng } from '#lib/core/drill.js';
import { formatNumber, numTex, tidy } from '#lib/core/number-format.js';

/** @typedef {'dot-bien' | 'dong-gene' | 'phieu-bat' | 'giao-phoi' | 'chon-loc'} Factor */

export const FACTORS = /** @type {const} */ ([
  { id: 'dot-bien', name: 'Đột biến' },
  { id: 'dong-gene', name: 'Dòng gene' },
  { id: 'phieu-bat', name: 'Phiêu bạt di truyền' },
  { id: 'giao-phoi', name: 'Giao phối không ngẫu nhiên' },
  { id: 'chon-loc', name: 'Chọn lọc tự nhiên' },
]);

/** Allele A frequency of the population the migrants come from. */
export const DONOR_P = 0.1;
/** Generations the widget shows. */
export const GENERATIONS = 50;
/** Repeat populations run side by side under genetic drift. */
export const REPEATS = 6;

/**
 * One generation of mutation A → a at rate u.
 * @param {number} p @param {number} u
 */
export function mutate(p, u) {
  return p * (1 - u);
}

/**
 * One generation of gene flow: a share m of the alleles are migrants'.
 * @param {number} p @param {number} m @param {number} [donor]
 */
export function migrate(p, m, donor = DONOR_P) {
  return (1 - m) * p + m * donor;
}

/**
 * One generation of selection after random mating. `against` names the
 * phenotype that leaves a share s fewer offspring.
 * @param {number} p
 * @param {number} s
 * @param {'lan' | 'troi'} against
 */
export function select(p, s, against) {
  const q = 1 - p;
  if (against === 'lan') {
    const mean = 1 - s * q * q;
    return mean === 0 ? 0 : (p * p + p * q) / mean;
  }
  const dominant = 1 - q * q;
  const mean = (1 - s) * dominant + q * q;
  return mean === 0 ? 0 : ((1 - s) * (p * p + p * q)) / mean;
}

/**
 * One generation of genetic drift: 2N alleles drawn at random.
 * @param {number} p @param {number} n individuals @param {() => number} rand
 */
export function drift(p, n, rand) {
  let count = 0;
  for (let i = 0; i < 2 * n; i++) if (rand() < p) count++;
  return count / (2 * n);
}

/**
 * Heterozygote share after one generation of partial self-fertilisation:
 * a share S of the offspring come from selfing (Aa gives ½ Aa), the rest
 * from random mating (2pq).
 * @param {number} h current heterozygote share
 * @param {number} p
 * @param {number} selfing S, 0..1
 */
export function inbreed(h, p, selfing) {
  return selfing * (h / 2) + (1 - selfing) * 2 * p * (1 - p);
}

/**
 * Frequencies over the generations for one factor at strength `k`
 * (u, m, s or S as a share; N for drift).
 * @param {Factor} factor
 * @param {number} p0
 * @param {number} k
 * @param {{ against?: 'lan' | 'troi', seed?: number }} [opts]
 * @returns {Array<{ name: string, values: number[] }>}
 */
export function trajectories(factor, p0, k, opts = {}) {
  /** @param {(p: number, g: number) => number} step */
  const run = (step) => {
    const values = [p0];
    for (let g = 0; g < GENERATIONS; g++) values.push(tidy(step(values[g], g), 9));
    return values;
  };
  if (factor === 'dot-bien') return [{ name: 'Tần số allele A', values: run((p) => mutate(p, k)) }];
  if (factor === 'dong-gene')
    return [{ name: 'Tần số allele A', values: run((p) => migrate(p, k)) }];
  if (factor === 'chon-loc') {
    const against = opts.against ?? 'lan';
    const p = run((x) => select(x, k, against));
    return against === 'lan'
      ? [{ name: 'Tần số allele a (lặn)', values: p.map((x) => tidy(1 - x, 9)) }]
      : [{ name: 'Tần số allele A (trội)', values: p }];
  }
  if (factor === 'giao-phoi') {
    const het = [2 * p0 * (1 - p0)];
    for (let g = 0; g < GENERATIONS; g++) het.push(tidy(inbreed(het[g], p0, k), 9));
    return [
      { name: 'Tần số allele A', values: Array(GENERATIONS + 1).fill(p0) },
      { name: 'Tỉ lệ dị hợp Aa', values: het },
    ];
  }
  const rand = rng(opts.seed ?? 1);
  return Array.from({ length: REPEATS }, (_, i) => ({
    name: `Quần thể ${i + 1}`,
    values: run((p) => drift(p, k, rand)),
  }));
}

/** Strength control of each factor. */
export const STRENGTH = {
  'dot-bien': { label: 'Tần số đột biến A → a mỗi thế hệ', min: 0, max: 5, step: 0.5, unit: '%' },
  'dong-gene': {
    label: 'Tỉ lệ allele nhập cư mỗi thế hệ (m)',
    min: 0,
    max: 30,
    step: 1,
    unit: '%',
  },
  'phieu-bat': { label: 'Số cá thể của quần thể (N)', min: 10, max: 500, step: 10, unit: 'cá thể' },
  'giao-phoi': { label: 'Tỉ lệ cá thể tự thụ phấn', min: 0, max: 100, step: 10, unit: '%' },
  'chon-loc': { label: 'Áp lực chọn lọc (s)', min: 0, max: 100, step: 5, unit: '%' },
};

/** @param {number} v */
const f2 = (v) => formatNumber(v, 2);

/**
 * A frequency at the end of a run: one that rounds to 0 or 1 without
 * reaching it is "gần 0" or "gần 1", so a run that only nears loss does not
 * read as the allele being gone.
 * @param {number} v
 */
export function endText(v) {
  if (v > 0 && v < 0.005) return 'gần 0';
  if (v < 1 && v > 0.995) return 'gần 1';
  return f2(v);
}

/**
 * What the widget says about a run.
 * @param {Factor} factor
 * @param {Array<{ name: string, values: number[] }>} lines
 * @param {number} k strength as shown on the slider (percent, or N)
 * @param {'lan' | 'troi'} [against]
 */
export function factorNote(factor, lines, k, against = 'lan') {
  const first = lines[0].values[0];
  const last = lines[0].values[GENERATIONS];
  const span = `sau ${GENERATIONS} thế hệ`;
  if (factor === 'dot-bien')
    return k === 0
      ? 'Không có đột biến: tần số allele giữ nguyên.'
      : `Tần số A từ ${f2(first)} còn ${endText(last)} ${span}. Trong tự nhiên tần số đột biến của mỗi gene rất thấp (khoảng $10^{-6}$ đến $10^{-4}$), nên đột biến làm thay đổi tần số allele rất chậm; vai trò chính của nó là tạo allele mới, nguồn biến dị sơ cấp cho tiến hoá.`;
  if (factor === 'dong-gene')
    return k === 0
      ? 'Không có dòng gene: tần số allele giữ nguyên.'
      : `Tần số A từ ${f2(first)} tiến dần về ${f2(DONOR_P)}, tần số của quần thể cho (${span} là ${endText(last)}). Dòng gene làm tần số allele thay đổi không theo hướng xác định, nhanh hay chậm tuỳ tỉ lệ nhập cư và độ chênh lệch tần số allele giữa hai quần thể; nó làm giảm khác biệt vốn gene giữa các quần thể.`;
  if (factor === 'phieu-bat') {
    const fixed = lines.filter(
      (l) => l.values[GENERATIONS] === 0 || l.values[GENERATIONS] === 1,
    ).length;
    const ends = lines.map((l) => f2(l.values[GENERATIONS])).join('; ');
    return `Sáu quần thể cùng xuất phát từ $p = ${numTex(first, 2)}$ mà ${span} có tần số A là ${ends}: thay đổi ngẫu nhiên, vô hướng. ${fixed > 0 ? `${fixed} quần thể đã mất hẳn một allele. ` : ''}Quần thể càng nhỏ, phiêu bạt di truyền càng mạnh; bấm "Chạy lại" để xem kết quả khác.`;
  }
  if (factor === 'giao-phoi') {
    const het = lines[1].values;
    return `Tần số A vẫn là ${f2(first)}; tỉ lệ dị hợp giảm từ ${f2(het[0])} xuống ${endText(het[GENERATIONS])}. Giao phối không ngẫu nhiên không làm thay đổi tần số allele nhưng làm tăng đồng hợp, giảm dị hợp, làm giảm đa dạng di truyền.`;
  }
  if (k === 0) return 'Không có chọn lọc: tần số allele giữ nguyên.';
  return against === 'lan'
    ? `Đào thải kiểu hình lặn aa: tần số a từ ${f2(first)} giảm còn ${endText(last)} ${span}, ngày càng chậm vì allele a "ẩn" trong các cá thể Aa không bị chọn lọc phát hiện.`
    : `Đào thải kiểu hình trội (AA và Aa): tần số A từ ${f2(first)} giảm còn ${endText(last)} ${span}. Chọn lọc chống allele trội làm thay đổi tần số allele nhanh hơn nhiều so với chống allele lặn, vì allele trội biểu hiện ngay cả ở thể dị hợp.`;
}
