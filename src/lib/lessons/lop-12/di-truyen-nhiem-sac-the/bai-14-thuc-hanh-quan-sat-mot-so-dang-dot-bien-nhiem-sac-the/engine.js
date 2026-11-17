/**
 * The "name the mutation" game of the practical: each round shows a human
 * karyotype, a plant karyotype or a chromosome before and after a structural
 * change, and the learner names the kind of mutation.
 */

import { int, pick, rng, shuffle } from '#lib/core/drill.js';
import {
  START_A,
  START_B,
  applyOp,
  humanKaryotype,
  makeChromosome,
  plantKaryotype,
} from '../_shared/mutations.js';

/** @typedef {'binh-thuong' | 'mat' | 'lap' | 'dao' | 'chuyen' | 'lech-boi' | 'da-boi'} Answer */

export const ANSWERS = /** @type {Array<{ id: Answer, label: string }>} */ ([
  { id: 'binh-thuong', label: 'Bình thường' },
  { id: 'mat', label: 'Mất đoạn' },
  { id: 'lap', label: 'Lặp đoạn' },
  { id: 'dao', label: 'Đảo đoạn' },
  { id: 'chuyen', label: 'Chuyển đoạn' },
  { id: 'lech-boi', label: 'Lệch bội' },
  { id: 'da-boi', label: 'Đa bội' },
]);

/**
 * @typedef {(
 *   | { type: 'karyotype', groups: import('../_shared/mutations.js').Group[], columns: number }
 *   | { type: 'strips', strips: Array<{ label: string, genes: import('../_shared/mutations.js').Gene[] }> }
 * )} View
 */

/**
 * @typedef {{
 *   title: string;
 *   view: View;
 *   answer: Answer;
 *   hint: string;
 *   reveal: string;
 * }} Round
 */

const HUMAN_HINT =
  'Đếm số NST trong từng cặp, kể cả cặp NST giới tính, rồi so với bộ NST bình thường $2n = 46$.';

/** @type {Array<{ sex: string, extra?: number[], answer: Answer, reveal: string }>} */
const HUMAN_CASES = [
  {
    sex: 'XX',
    answer: 'binh-thuong',
    reveal: 'Bộ NST bình thường của nữ: $46$, XX; mỗi cặp có đủ 2 chiếc.',
  },
  {
    sex: 'XY',
    answer: 'binh-thuong',
    reveal: 'Bộ NST bình thường của nam: $46$, XY; mỗi cặp có đủ 2 chiếc.',
  },
  {
    sex: 'XY',
    extra: [21],
    answer: 'lech-boi',
    reveal: 'Cặp số 21 có 3 chiếc: thể ba ($2n + 1 = 47$), hội chứng Down.',
  },
  {
    sex: 'XX',
    extra: [21],
    answer: 'lech-boi',
    reveal: 'Cặp số 21 có 3 chiếc: thể ba ($2n + 1 = 47$), hội chứng Down.',
  },
  {
    sex: 'XY',
    extra: [18],
    answer: 'lech-boi',
    reveal: 'Cặp số 18 có 3 chiếc: thể ba ($2n + 1 = 47$), hội chứng Edwards.',
  },
  {
    sex: 'XX',
    extra: [13],
    answer: 'lech-boi',
    reveal: 'Cặp số 13 có 3 chiếc: thể ba ($2n + 1 = 47$), hội chứng Patau.',
  },
  {
    sex: 'X',
    answer: 'lech-boi',
    reveal: 'Chỉ có một NST X (XO): thể một ($2n - 1 = 45$), hội chứng Turner.',
  },
  {
    sex: 'XXY',
    answer: 'lech-boi',
    reveal: 'Cặp NST giới tính là XXY: thể ba ($2n + 1 = 47$), hội chứng Klinefelter.',
  },
  {
    sex: 'XXX',
    answer: 'lech-boi',
    reveal: 'Có ba NST X (XXX): thể ba ($2n + 1 = 47$), hội chứng ba X.',
  },
];

/** @param {{ sex: string, extra?: number[], answer: Answer, reveal: string }} c @returns {Round} */
function humanRound(c) {
  return {
    title: 'Bộ NST đồ của một người, xếp theo cặp từ 1 đến 22 và nhóm NST giới tính.',
    view: { type: 'karyotype', groups: humanKaryotype({ sex: c.sex, extra: c.extra }), columns: 8 },
    answer: c.answer,
    hint: HUMAN_HINT,
    reveal: c.reveal,
  };
}

/** @param {() => number} rand @returns {Round} */
function plantRound(rand) {
  const kind = pick(rand, ['2n', '3n', '4n', '2n+1', '2n-1']);
  const g = int(rand, 0, 3);
  /** @type {Record<string, number[]>} */
  const COUNTS = {
    '2n': [2, 2, 2, 2],
    '3n': [3, 3, 3, 3],
    '4n': [4, 4, 4, 4],
    '2n+1': [2, 2, 2, 2].map((c, i) => (i === g ? 3 : c)),
    '2n-1': [2, 2, 2, 2].map((c, i) => (i === g ? 1 : c)),
  };
  const counts = COUNTS[kind];
  /** @type {Record<string, [Answer, string]>} */
  const verdict = {
    '2n': ['binh-thuong', 'Mỗi nhóm có 2 NST: bộ lưỡng bội bình thường $2n = 8$.'],
    '3n': ['da-boi', 'Mọi nhóm đều có 3 NST: thể tam bội $3n = 12$ (đa bội lẻ).'],
    '4n': ['da-boi', 'Mọi nhóm đều có 4 NST: thể tứ bội $4n = 16$ (đa bội chẵn).'],
    '2n+1': ['lech-boi', `Chỉ nhóm ${g + 1} có 3 NST: thể ba $2n + 1 = 9$.`],
    '2n-1': ['lech-boi', `Chỉ nhóm ${g + 1} còn 1 NST: thể một $2n - 1 = 7$.`],
  };
  const [answer, reveal] = verdict[kind];
  return {
    title:
      'Tiêu bản tế bào rễ của một loài cây có bộ NST $2n = 8$, các NST xếp theo nhóm tương đồng.',
    view: { type: 'karyotype', groups: plantKaryotype(counts), columns: 4 },
    answer,
    hint: 'Đếm số NST trong mỗi nhóm: chỉ một vài nhóm thay đổi hay tất cả các nhóm cùng tăng?',
    reveal,
  };
}

/**
 * A chromosome before and after a structural change of a random segment.
 * @param {() => number} rand
 * @param {'mat' | 'lap' | 'dao' | 'chuyen'} op
 * @returns {Round}
 */
export function structuralRound(rand, op) {
  const a = makeChromosome('A', START_A);
  const b = makeChromosome('B', START_B);
  // Segments on the long arm D…H (indices 4–8), away from the centromere at 3.
  let lo;
  let hi;
  if (op === 'chuyen') {
    lo = int(rand, 6, 8);
    hi = 8;
  } else if (op === 'dao') {
    lo = int(rand, 4, 6);
    hi = int(rand, lo + 2, 8);
  } else {
    lo = int(rand, 4, 7);
    hi = int(rand, lo, Math.min(8, lo + 1));
  }
  const out = applyOp(op, a, b, lo, hi);
  if ('error' in out) throw new Error(out.error);
  /** @type {Record<string, string>} */
  const REVEAL = {
    mat: 'Một đoạn NST bị mất, số gene giảm: mất đoạn.',
    lap: 'Một đoạn NST xuất hiện hai lần, số gene tăng: lặp đoạn.',
    dao: 'Số gene giữ nguyên nhưng một đoạn có trật tự gene ngược lại: đảo đoạn.',
    chuyen: 'Hai NST không tương đồng đổi đoạn cho nhau: chuyển đoạn tương hỗ.',
  };
  const strips =
    op === 'chuyen'
      ? [
          { label: 'NST thứ nhất, bình thường', genes: a },
          { label: 'NST thứ hai, bình thường', genes: b },
          { label: 'NST thứ nhất, trên tiêu bản đột biến', genes: out.a },
          { label: 'NST thứ hai, trên tiêu bản đột biến', genes: out.b },
        ]
      : [
          { label: 'NST bình thường', genes: a },
          { label: 'NST trên tiêu bản đột biến', genes: out.a },
        ];
  return {
    title: 'Trình tự gene trên NST ở tiêu bản bình thường và tiêu bản đột biến (• là tâm động).',
    view: { type: 'strips', strips },
    answer: op,
    hint: 'So sánh số gene, trật tự gene và nguồn gốc các gene (màu) giữa hai tiêu bản.',
    reveal: REVEAL[op],
  };
}

export const ROUND_COUNT = 8;

/**
 * Eight rounds: three human karyotypes, two plant karyotypes and three
 * structural changes of different kinds, in a seeded order.
 * @param {number} seed
 * @returns {Round[]}
 */
export function buildGame(seed) {
  const rand = rng(seed);
  const humans = shuffle(rand, HUMAN_CASES).slice(0, 3).map(humanRound);
  const plants = [plantRound(rand), plantRound(rand)];
  const ops = shuffle(rand, /** @type {const} */ (['mat', 'lap', 'dao', 'chuyen'])).slice(0, 3);
  const structural = ops.map((op) => structuralRound(rand, op));
  return shuffle(rand, [...humans, ...plants, ...structural]);
}

/**
 * Label of an answer.
 * @param {Answer} id
 */
export function answerLabel(id) {
  return ANSWERS.find((a) => a.id === id)?.label ?? id;
}
