/**
 * The washing test of the project: the learner decides what stays the same in
 * a fair comparison, types the cleanliness scores of three repeats, and reads
 * the means, the gaps and a plain conclusion. No DOM here, so all of it is
 * tested in Node.
 */
import { formatNumber, tidy } from '#lib/core/number-format.js';

export const REPEATS = 3;
export const MAX_SCORE = 5;
/** A gap in mean score from this size counts as a clear difference. */
export const CLEAR_GAP = 1;

/** @type {Array<{ id: string, name: string, substance: string, enzyme: string }>} */
export const STAINS = [
  { id: 'trung', name: 'Lòng trắng trứng', substance: 'protein', enzyme: 'protease' },
  { id: 'com', name: 'Hồ cơm', substance: 'tinh bột', enzyme: 'amylase' },
  { id: 'dau', name: 'Dầu ăn', substance: 'lipid', enzyme: 'lipase' },
];

/** @type {Array<{ id: string, name: string }>} */
export const WASHES = [
  { id: 'co', name: 'Có enzyme' },
  { id: 'khong', name: 'Không có enzyme' },
];

/** The factors of the test; only the kind of washing liquid may differ. */
export const FACTORS = [
  { id: 'dung-dich', name: 'Dung dịch giặt (có hay không có enzyme)', change: true },
  { id: 'vai', name: 'Loại và kích thước mảnh vải', change: false },
  { id: 'vet-ban', name: 'Lượng vết bẩn trên mỗi mảnh vải', change: false },
  { id: 'nong-do', name: 'Nồng độ và thể tích dung dịch giặt', change: false },
  { id: 'nhiet-do', name: 'Nhiệt độ nước', change: false },
  { id: 'thoi-gian', name: 'Thời gian ngâm và cách giặt', change: false },
];

export const TASKS = [
  'Chuẩn bị vải và vết bẩn',
  'Làm thí nghiệm, ghi số liệu',
  'Xử lí số liệu, vẽ biểu đồ',
  'Trình bày, đề xuất ứng dụng',
];

/**
 * The verdict on the learner's plan for a fair test.
 * @param {Record<string, string | number>} plan factor id → 'giu' | 'doi' | ''
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function checkPlan(plan) {
  const answered = FACTORS.filter((f) => plan[f.id] === 'giu' || plan[f.id] === 'doi');
  const wrong = answered.filter((f) => (plan[f.id] === 'doi') !== f.change);
  if (wrong.length > 0) {
    const first = wrong[0];
    return {
      tone: 'warn',
      text: first.change
        ? 'Dung dịch giặt chính là yếu tố cần so sánh, nên phải khác nhau giữa hai nhóm.'
        : `"${first.name}" phải giữ nguyên ở mọi mẫu. Nếu không, ta không biết kết quả khác nhau là do enzyme hay do yếu tố này.`,
    };
  }
  if (answered.length < FACTORS.length) {
    return { tone: 'info', text: 'Hãy quyết định từng yếu tố: giữ nguyên hay thay đổi.' };
  }
  return {
    tone: 'ok',
    text: 'Thí nghiệm công bằng: chỉ dung dịch giặt thay đổi. Sự khác biệt về độ sạch có thể quy cho enzyme.',
  };
}

/**
 * A typed score, or null when it is empty or not a score from 0 to the maximum.
 * @param {string | number} text
 * @returns {number | null}
 */
export function readScore(text) {
  const clean = String(text).trim().replace(',', '.');
  if (clean === '') return null;
  const value = Number(clean);
  return Number.isFinite(value) && value >= 0 && value <= MAX_SCORE ? value : null;
}

/** @typedef {Record<string, string[]>} Scores key `stain/wash` → one text per repeat */

/**
 * @param {string} stain @param {string} wash
 */
export const scoreKey = (stain, wash) => `${stain}/${wash}`;

/** @returns {Scores} */
export function emptyScores() {
  /** @type {Scores} */
  const out = {};
  for (const s of STAINS) {
    for (const w of WASHES) out[scoreKey(s.id, w.id)] = Array(REPEATS).fill('');
  }
  return out;
}

/**
 * Example scores to show how the table reads; never real results.
 * @returns {Scores}
 */
export function sampleScores() {
  return {
    [scoreKey('trung', 'co')]: ['4', '5', '4'],
    [scoreKey('trung', 'khong')]: ['2', '2', '3'],
    [scoreKey('com', 'co')]: ['4', '4', '5'],
    [scoreKey('com', 'khong')]: ['3', '2', '3'],
    [scoreKey('dau', 'co')]: ['3', '3', '4'],
    [scoreKey('dau', 'khong')]: ['3', '2', '3'],
  };
}

/**
 * The mean of the scores, only once all the repeats hold a valid score.
 * @param {Array<string | number>} texts
 * @returns {number | null}
 */
export function meanScore(texts) {
  const values = texts.map(readScore);
  if (values.length === 0 || values.some((v) => v === null)) return null;
  const sum = /** @type {number[]} */ (values).reduce((a, b) => a + b, 0);
  return tidy(sum / values.length);
}

/**
 * Whether every box holds a score or is still empty; a false one needs fixing.
 * @param {Scores} scores
 */
export function allValid(scores) {
  return Object.values(scores)
    .flat()
    .every((t) => t.trim() === '' || readScore(t) !== null);
}

/**
 * One row of the result table per stain.
 * @param {Scores} scores
 */
export function resultRows(scores) {
  return STAINS.map((s) => {
    const withEnzyme = meanScore(scores[scoreKey(s.id, 'co')]);
    const without = meanScore(scores[scoreKey(s.id, 'khong')]);
    const gap = withEnzyme === null || without === null ? null : tidy(withEnzyme - without);
    return { stain: s, withEnzyme, without, gap };
  });
}

/**
 * The mean as the book writes it, or a dash while it is missing.
 * @param {number | null} value
 */
export const scoreText = (value) => (value === null ? '–' : formatNumber(value, 2));

/**
 * The conclusion of one stain.
 * @param {ReturnType<typeof resultRows>[number]} row
 */
export function rowConclusion(row) {
  const { stain, gap } = row;
  if (gap === null) return `${stain.name}: chưa đủ số liệu.`;
  if (gap >= CLEAR_GAP) {
    return `${stain.name}: bột giặt có enzyme sạch hơn rõ rệt (hơn ${scoreText(gap)} điểm), phù hợp với vai trò của ${stain.enzyme} phân giải ${stain.substance}.`;
  }
  if (gap <= -CLEAR_GAP) {
    return `${stain.name}: bột giặt không có enzyme lại sạch hơn. Hãy kiểm tra lại cách làm, hoặc xem bột giặt có chứa ${stain.enzyme} không.`;
  }
  return `${stain.name}: khác biệt không rõ (chênh ${scoreText(Math.abs(gap))} điểm). Bột giặt có thể không có ${stain.enzyme}, hoặc cần lặp lại thí nghiệm.`;
}

/**
 * The note about the whole table.
 * @param {Scores} scores
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function resultNote(scores) {
  if (!allValid(scores)) {
    return {
      tone: 'warn',
      text: `Mỗi ô là một số từ $0$ đến $${MAX_SCORE}$; hãy sửa ô chưa đúng.`,
    };
  }
  const rows = resultRows(scores);
  const ready = rows.filter((r) => r.gap !== null);
  if (ready.length === 0) {
    return {
      tone: 'info',
      text: `Nhập đủ điểm của ${REPEATS} lần lặp để xem trung bình của từng vết bẩn.`,
    };
  }
  return {
    tone: ready.length === rows.length ? 'ok' : 'info',
    text: rows.map(rowConclusion).join(' '),
  };
}

/**
 * A note on the learner's proposal: it must say which enzyme and for what.
 * @param {string} text
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function proposalNote(text) {
  const clean = text.trim().toLowerCase();
  if (clean === '') return { tone: 'info', text: 'Hãy nêu ứng dụng, tên enzyme và lợi ích.' };
  const names = [
    'enzyme',
    'protease',
    'amylase',
    'lipase',
    'cellulase',
    'pectinase',
    'bromelain',
    'papain',
  ];
  if (!names.some((n) => clean.includes(n))) {
    return { tone: 'warn', text: 'Đề xuất nên nói rõ dùng enzyme nào.' };
  }
  return {
    tone: 'ok',
    text: 'Đề xuất đã nêu enzyme. Hãy kiểm tra thêm: nhiệt độ, pH có phù hợp không, có an toàn và tốn kém không?',
  };
}

/**
 * The plain-text report to copy.
 * @param {{ members: string[], scores: Scores, proposal: string }} input
 */
export function reportText({ members, scores, proposal }) {
  const lines = ['DỰ ÁN: TÌM HIỂU VỀ ỨNG DỤNG ENZYME', '', 'Phân công:'];
  TASKS.forEach((task, i) => lines.push(`- ${task}: ${members[i]?.trim() || 'chưa phân công'}`));
  lines.push('', 'Kết quả (điểm trung bình độ sạch, thang 0-5):');
  for (const row of resultRows(scores)) {
    lines.push(
      `- ${row.stain.name}: có enzyme ${scoreText(row.withEnzyme)}, không có enzyme ${scoreText(row.without)}`,
    );
  }
  lines.push('', 'Nhận xét:');
  for (const row of resultRows(scores)) lines.push(`- ${rowConclusion(row)}`);
  lines.push('', `Đề xuất ứng dụng: ${proposal.trim() || 'chưa có'}`);
  return lines.join('\n');
}
