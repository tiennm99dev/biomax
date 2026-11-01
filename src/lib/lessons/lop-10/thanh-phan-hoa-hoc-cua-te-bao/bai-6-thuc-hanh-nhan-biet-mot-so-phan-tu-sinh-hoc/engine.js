/**
 * A small virtual bench for the food tests: which sample holds what, the
 * steps of each test, and the colour a test tube shows at every step.
 */

/** @typedef {'benedict' | 'lugol' | 'nhu-tuong' | 'biuret'} TestId */
/** @typedef {'duong-khu' | 'tinh-bot' | 'lipid' | 'protein'} GroupId */

/** Molecule groups in the order of the conclusion sheet, with their test. */
export const GROUPS = /** @type {Array<{ id: GroupId, name: string, test: TestId }>} */ ([
  { id: 'duong-khu', name: 'Đường khử', test: 'benedict' },
  { id: 'tinh-bot', name: 'Tinh bột', test: 'lugol' },
  { id: 'lipid', name: 'Lipid', test: 'nhu-tuong' },
  { id: 'protein', name: 'Protein', test: 'biuret' },
]);

/**
 * @typedef {{
 *   id: TestId;
 *   name: string;
 *   finds: string;
 *   steps: string[];
 *   slowLastStep: boolean;
 * }} FoodTest
 */

/** @type {FoodTest[]} */
export const TESTS = [
  {
    id: 'benedict',
    name: 'Benedict',
    finds: 'đường khử',
    steps: ['Thêm thuốc thử Benedict', 'Đun cách thuỷ'],
    slowLastStep: true,
  },
  {
    id: 'lugol',
    name: 'Lugol',
    finds: 'tinh bột',
    steps: ['Nhỏ vài giọt Lugol'],
    slowLastStep: false,
  },
  {
    id: 'nhu-tuong',
    name: 'Nhũ tương',
    finds: 'lipid',
    steps: ['Lắc mẫu với cồn', 'Rót sang ống nước'],
    slowLastStep: false,
  },
  {
    id: 'biuret',
    name: 'Biuret',
    finds: 'protein',
    steps: ['Thêm NaOH loãng', 'Thêm CuSO₄ 1%', 'Chờ vài phút'],
    slowLastStep: true,
  },
];

/**
 * @typedef {{
 *   id: string;
 *   name: string;
 *   color: string;
 *   sugar: number;
 *   groups: GroupId[];
 *   mystery?: boolean;
 *   note?: string;
 * }} Sample
 */

const CLEAR = '#e0f2fe';

/**
 * `sugar` is how much reducing sugar the sample holds, from 0 to 1; the rest
 * of what it holds is in `groups`.
 * @type {Sample[]}
 */
export const SAMPLES = [
  {
    id: 'nuoc',
    name: 'Nước cất',
    color: CLEAR,
    sugar: 0,
    groups: [],
    note: 'Nước cất là mẫu đối chứng: mọi phép thử đều cho kết quả âm tính.',
  },
  { id: 'glucose', name: 'Glucose', color: CLEAR, sugar: 1, groups: ['duong-khu'] },
  {
    id: 'sucrose',
    name: 'Đường mía',
    color: CLEAR,
    sugar: 0,
    groups: [],
    note: 'Đường mía (sucrose) ngọt nhưng không phải đường khử, nên phép thử Benedict âm tính.',
  },
  { id: 'ho', name: 'Hồ tinh bột', color: '#f1f5f9', sugar: 0, groups: ['tinh-bot'] },
  { id: 'dau', name: 'Dầu ăn', color: '#fde68a', sugar: 0, groups: ['lipid'] },
  { id: 'albumin', name: 'Albumin', color: CLEAR, sugar: 0, groups: ['protein'] },
  {
    id: 'sua',
    name: 'Sữa tươi',
    color: '#f8fafc',
    sugar: 0.75,
    groups: ['duong-khu', 'lipid', 'protein'],
    note: 'Sữa chứa đường lactose, chất béo và protein nên dương tính với ba phép thử.',
  },
  {
    id: 'bi-an-a',
    name: 'Bí ẩn A',
    color: '#f1f5f9',
    sugar: 1,
    groups: ['duong-khu', 'tinh-bot'],
    mystery: true,
  },
  {
    id: 'bi-an-b',
    name: 'Bí ẩn B',
    color: '#f1f5f9',
    sugar: 0,
    groups: ['lipid', 'protein'],
    mystery: true,
  },
  { id: 'bi-an-c', name: 'Bí ẩn C', color: CLEAR, sugar: 0, groups: ['protein'], mystery: true },
];

/** Colours of the Benedict test as the reducing sugar reacts. */
export const BENEDICT_STAGES = [
  { label: 'xanh lam', color: '#3b82f6' },
  { label: 'xanh lục', color: '#22c55e' },
  { label: 'vàng', color: '#facc15' },
  { label: 'cam', color: '#f97316' },
  { label: 'đỏ gạch', color: '#b91c1c' },
];

const LUGOL_NEGATIVE = { label: 'vàng nâu', color: '#b45309' };
const LUGOL_POSITIVE = { label: 'xanh tím', color: '#312e81' };
const BIURET_NEGATIVE = { label: 'xanh lam', color: '#60a5fa' };
const BIURET_POSITIVE = { label: 'xanh tím', color: '#7c3aed' };
const EMULSION_NEGATIVE = { label: 'trong suốt', color: CLEAR };
const EMULSION_POSITIVE = { label: 'trắng sữa', color: '#f8fafc' };

/** @param {string} id */
export function testOf(id) {
  return TESTS.find((t) => t.id === id) ?? TESTS[0];
}

/** @param {string} id */
export function sampleOf(id) {
  return SAMPLES.find((s) => s.id === id) ?? SAMPLES[0];
}

/**
 * The colour stage a Benedict tube has reached.
 * @param {number} sugar reducing sugar in the sample, 0 to 1
 * @param {number} progress how far the heating has gone, 0 to 1
 */
export function benedictStage(sugar, progress) {
  return Math.round(sugar * progress * (BENEDICT_STAGES.length - 1));
}

/**
 * The final result of a test on a sample.
 * @param {string} testId
 * @param {string} sampleId
 * @returns {{ positive: boolean, label: string, color: string, precipitate: boolean }}
 */
export function outcome(testId, sampleId) {
  const sample = sampleOf(sampleId);
  if (testId === 'benedict') {
    const stage = benedictStage(sample.sugar, 1);
    return {
      ...BENEDICT_STAGES[stage],
      positive: stage > 0,
      precipitate: stage >= 3,
    };
  }
  const has = (/** @type {GroupId} */ group) => sample.groups.includes(group);
  if (testId === 'lugol') {
    const positive = has('tinh-bot');
    return { ...(positive ? LUGOL_POSITIVE : LUGOL_NEGATIVE), positive, precipitate: false };
  }
  if (testId === 'nhu-tuong') {
    const positive = has('lipid');
    return { ...(positive ? EMULSION_POSITIVE : EMULSION_NEGATIVE), positive, precipitate: false };
  }
  const positive = has('protein');
  return { ...(positive ? BIURET_POSITIVE : BIURET_NEGATIVE), positive, precipitate: false };
}

/**
 * What the tube looks like after `step` steps of a test.
 * @param {string} testId
 * @param {string} sampleId
 * @param {number} step steps done so far
 * @param {number} [progress] how far a slow last step has gone, 0 to 1
 * @returns {{ color: string, precipitate: boolean, label: string }}
 */
export function tubeState(testId, sampleId, step, progress = 1) {
  const sample = sampleOf(sampleId);
  const test = testOf(testId);
  if (step <= 0) return { color: sample.color, precipitate: false, label: 'mẫu thử' };

  const result = outcome(testId, sampleId);
  if (testId === 'benedict') {
    const stage = step === 1 ? 0 : benedictStage(sample.sugar, progress);
    return { ...BENEDICT_STAGES[stage], precipitate: stage >= 3 };
  }
  if (testId === 'nhu-tuong') {
    if (step === 1) {
      const color = sample.id === 'sua' ? sample.color : CLEAR;
      return { color, precipitate: false, label: 'mẫu trong cồn' };
    }
    return { color: result.color, precipitate: false, label: result.label };
  }
  if (testId === 'biuret') {
    if (step === 1) return { color: sample.color, precipitate: false, label: 'mẫu và NaOH' };
    const last = step >= test.steps.length && progress >= 0.5;
    return last
      ? { color: result.color, precipitate: false, label: result.label }
      : { ...BIURET_NEGATIVE, precipitate: false };
  }
  return { color: result.color, precipitate: false, label: result.label };
}

/**
 * Whether a test has finished, its slow last step included.
 * @param {string} testId
 * @param {number} step
 * @param {number} progress
 */
export function isComplete(testId, step, progress) {
  const test = testOf(testId);
  if (step < test.steps.length) return false;
  return !test.slowLastStep || progress >= 1;
}

/**
 * The sentence that reads a finished test.
 * @param {string} testId
 * @param {string} sampleId
 */
export function readResult(testId, sampleId) {
  const test = testOf(testId);
  const sample = sampleOf(sampleId);
  const result = outcome(testId, sampleId);
  const seen = result.precipitate ? `Màu ${result.label}, có kết tủa` : `Dung dịch ${result.label}`;
  if (sample.mystery) return `${seen}. Em hãy ghi kết quả này vào phiếu.`;
  const verdict = result.positive ? 'có' : 'không có';
  const note = sample.note ? ` ${sample.note}` : '';
  return `${seen}: mẫu ${verdict} ${test.finds}.${note}`;
}

/**
 * Judges a conclusion about a mystery sample.
 * @param {string} sampleId
 * @param {GroupId[]} picks groups the learner says the sample holds
 * @param {string[]} doneTests tests already run on the sample
 * @returns {{ ok: boolean, text: string }}
 */
export function judgeMystery(sampleId, picks, doneTests) {
  const missing = TESTS.filter((t) => !doneTests.includes(t.id));
  if (missing.length > 0) {
    return { ok: false, text: `Em còn thiếu phép thử: ${missing.map((t) => t.name).join(', ')}.` };
  }
  const sample = sampleOf(sampleId);
  const wrong = GROUPS.filter((g) => picks.includes(g.id) !== sample.groups.includes(g.id));
  if (wrong.length > 0) {
    return { ok: false, text: `Chưa đúng. Xem lại cột ${testOf(wrong[0].test).name} trên phiếu.` };
  }
  const names = GROUPS.filter((g) => sample.groups.includes(g.id)).map((g) => g.name.toLowerCase());
  return { ok: true, text: `Đúng: ${sample.name} chứa ${names.join(' và ')}.` };
}
