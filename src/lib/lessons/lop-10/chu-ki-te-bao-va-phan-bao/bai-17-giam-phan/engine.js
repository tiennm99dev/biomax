/**
 * Counting the gametes meiosis can make, and the cards of the comparison with
 * mitosis. No DOM here, so all of it is tested in Node.
 */

/** Haploid chromosome number of humans, the largest case the widget shows. */
export const HUMAN_N = 23;

/** The largest number of pairs whose combinations are all drawn. */
export const MAX_DRAWN = 4;

/**
 * How many chromosome combinations gametes can have with `n` pairs of
 * homologous chromosomes, without crossing over: each pair sends either
 * homologue, independently of the others.
 * @param {number} n
 */
export const combinations = (n) => 2 ** n;

/**
 * Every combination as a list of 0 (blue homologue) and 1 (red homologue), one
 * per pair.
 * @param {number} n
 * @returns {number[][]}
 */
export function allCombinations(n) {
  return Array.from({ length: combinations(n) }, (_, value) =>
    Array.from({ length: n }, (_, pair) => (value >> pair) & 1),
  );
}

/**
 * The index in `allCombinations` of one gamete.
 * @param {number[]} combination
 */
export const combinationIndex = (combination) =>
  combination.reduce((sum, bit, pair) => sum + bit * 2 ** pair, 0);

/**
 * One random gamete: each pair sends its blue or red homologue.
 * @param {number} n @param {() => number} rand
 */
export const randomGamete = (n, rand) => Array.from({ length: n }, () => (rand() < 0.5 ? 0 : 1));

export const COMPARE_BINS = [
  { id: 'nguyen-phan', label: 'Nguyên phân' },
  { id: 'giam-phan', label: 'Giảm phân' },
  { id: 'ca-hai', label: 'Cả hai' },
];

export const COMPARE_CARDS = [
  {
    id: 'nhan-doi',
    label: 'DNA nhân đôi một lần ở kì trung gian trước phân bào',
    bin: 'ca-hai',
    why: 'Cả hai quá trình đều bắt đầu từ các NST đã nhân đôi thành NST kép.',
  },
  {
    id: 'thoi',
    label: 'Có hình thành thoi phân bào',
    bin: 'ca-hai',
    why: 'Thoi phân bào kéo NST về hai cực trong cả hai quá trình.',
  },
  {
    id: 'hai-lan',
    label: 'Gồm hai lần phân bào liên tiếp',
    bin: 'giam-phan',
    why: 'Giảm phân có giảm phân I và giảm phân II; nguyên phân chỉ có một lần phân bào.',
  },
  {
    id: 'bat-doi',
    label: 'NST kép bắt đôi theo cặp tương đồng ở kì đầu',
    bin: 'giam-phan',
    why: 'Bắt đôi và trao đổi chéo xảy ra ở kì đầu I của giảm phân.',
  },
  {
    id: 'hai-hang',
    label: 'NST kép xếp thành hai hàng ở mặt phẳng xích đạo',
    bin: 'giam-phan',
    why: 'Ở kì giữa I, các cặp tương đồng xếp thành hai hàng.',
  },
  {
    id: 'bon-con',
    label: 'Một tế bào tạo ra bốn tế bào con đơn bội',
    bin: 'giam-phan',
    why: 'Giảm phân tạo bốn tế bào con đơn bội.',
  },
  {
    id: 'hai-con',
    label: 'Một tế bào tạo ra hai tế bào con lưỡng bội',
    bin: 'nguyen-phan',
    why: 'Nguyên phân giữ nguyên bộ NST của tế bào mẹ.',
  },
  {
    id: 'giong-het',
    label: 'Các tế bào con giống hệt nhau về mặt di truyền',
    bin: 'nguyen-phan',
    why: 'Nhiễm sắc tử chị em giống nhau chia đều về hai tế bào con.',
  },
];
