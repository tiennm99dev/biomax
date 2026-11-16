/**
 * Point mutations in a gene and how substitutions arise. The first part
 * measures an edited coding strand against the starting one (base pairs,
 * hydrogen bonds, effect on the protein) and checks the widget's tasks; the
 * second lists, replication by replication, how a rare base form or the base
 * analogue 5-BU turns one base pair into another.
 */
import { clean, compareProteins, hydrogenBonds } from '#lib/domain/codons.js';

/** Starting genes, coding strand 5' → 3'. */
export const GENES = [
  {
    id: 'mau',
    label: 'Gene mẫu',
    seq: 'ATGTTTCAAGGATGGTCATAG',
    note: 'Gene ngắn mã hoá chuỗi Met – Phe – Gln – Gly – Trp – Ser, kết thúc bằng TAG.',
  },
  {
    id: 'globin',
    label: 'Đầu gene β-globin',
    seq: 'ATGGTGCACCTGACTCCTGAGGAGAAG',
    note: 'Chín bộ ba đầu của gene β-globin người (HbA). Ở người bệnh hồng cầu hình liềm (HbS), bộ ba GAG thứ bảy (tính cả ATG) thành GTG: Glu → Val.',
  },
];

/**
 * Base pairs and hydrogen bonds of a gene, from its coding strand.
 * @param {string} seq
 */
export function geneStats(seq) {
  return { pairs: clean(seq).length, hydrogen: hydrogenBonds(seq) };
}

/**
 * Change from `before` to `after`: base pairs, hydrogen bonds and the effect
 * on the protein.
 * @param {string} before @param {string} after
 */
export function changeOf(before, after) {
  const a = geneStats(before);
  const b = geneStats(after);
  return {
    pairs: b.pairs - a.pairs,
    hydrogen: b.hydrogen - a.hydrogen,
    ...compareProteins(before, after),
  };
}

/**
 * Tasks for the editor. Each is met by a single change from the starting gene.
 * @type {Array<{ id: string, label: string, met: (before: string, after: string) => boolean }>}
 */
export const TASKS = [
  {
    id: 'silent',
    label: 'Đột biến đồng nghĩa',
    met: (x, y) => changeOf(x, y).effect === 'silent',
  },
  {
    id: 'missense',
    label: 'Đột biến sai nghĩa',
    met: (x, y) => changeOf(x, y).effect === 'missense',
  },
  {
    id: 'nonsense',
    label: 'Đột biến vô nghĩa',
    met: (x, y) => changeOf(x, y).effect === 'nonsense',
  },
  {
    id: 'frameshift',
    label: 'Đột biến dịch khung',
    met: (x, y) => changeOf(x, y).effect === 'frameshift',
  },
  {
    id: 'plus-one',
    label: 'Số liên kết hydrogen tăng 1',
    met: (x, y) => {
      const c = changeOf(x, y);
      return c.pairs === 0 && c.hydrogen === 1;
    },
  },
];

/**
 * @typedef {{ pair: [string, string], text: string }} PairStep
 * @typedef {{ id: string, label: string, steps: PairStep[], result: string }} Pathway
 */

/**
 * How a substitution arises across replications. Each step is the pair on
 * the mutating lineage; the first is the starting pair.
 * @type {Pathway[]}
 */
export const PATHWAYS = [
  {
    id: '5bu',
    label: '5-BU',
    steps: [
      { pair: ['A', 'T'], text: 'Cặp ban đầu A – T.' },
      {
        pair: ['A', '5-BU'],
        text: 'Lần tái bản 1: 5-bromouracil (5-BU) có cấu trúc giống T, được lắp vào mạch mới đối diện A.',
      },
      {
        pair: ['G', '5-BU'],
        text: 'Lần tái bản 2: 5-BU trên mạch khuôn chuyển sang dạng hiếm, bắt cặp với G.',
      },
      {
        pair: ['G', 'C'],
        text: 'Lần tái bản 3: G trên mạch khuôn bắt cặp với C. Cặp A – T đã được thay bằng cặp G – C.',
      },
    ],
    result: 'A – T → G – C sau 3 lần tái bản',
  },
  {
    id: 'rare-t',
    label: 'T dạng hiếm (T*)',
    steps: [
      { pair: ['A', 'T'], text: 'Cặp ban đầu A – T.' },
      {
        pair: ['A', 'T*'],
        text: 'Thymine chuyển sang dạng hiếm T*, vị trí liên kết hydrogen thay đổi.',
      },
      { pair: ['G', 'T*'], text: 'Lần tái bản 1: T* trên mạch khuôn bắt cặp nhầm với G.' },
      {
        pair: ['G', 'C'],
        text: 'Lần tái bản 2: G trên mạch khuôn bắt cặp với C. Cặp A – T đã được thay bằng cặp G – C.',
      },
    ],
    result: 'A – T → G – C sau 2 lần tái bản',
  },
  {
    id: 'rare-g',
    label: 'G dạng hiếm (G*)',
    steps: [
      { pair: ['G', 'C'], text: 'Cặp ban đầu G – C.' },
      {
        pair: ['G*', 'C'],
        text: 'Guanine chuyển sang dạng hiếm G*, vị trí liên kết hydrogen thay đổi.',
      },
      { pair: ['G*', 'T'], text: 'Lần tái bản 1: G* trên mạch khuôn bắt cặp nhầm với T.' },
      {
        pair: ['A', 'T'],
        text: 'Lần tái bản 2: T trên mạch khuôn bắt cặp với A. Cặp G – C đã được thay bằng cặp A – T.',
      },
    ],
    result: 'G – C → A – T sau 2 lần tái bản',
  },
];

/**
 * Hydrogen bonds of a normal pair (A – T: 2, G – C: 3).
 * @param {[string, string]} pair
 */
export function pairBonds(pair) {
  return pair.includes('G') || pair.includes('C') ? 3 : 2;
}
