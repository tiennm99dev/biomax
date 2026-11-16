/**
 * The survey of the project: four questions put to every household, a tally
 * of the answers, their shares and the observations a report would draw from
 * them. Each answer is marked as a clean-farming practice or not, so the
 * observations point at what the area should change. No DOM here, so all of
 * it is tested in Node.
 */
import { formatNumber, tidy } from '#lib/core/number-format.js';

/**
 * @typedef {{ id: string, text: string, short: string, good: boolean | null }} Answer
 * @typedef {{ id: string, tab: string, text: string, answers: Answer[], advice: string }} Question
 * @typedef {Record<string, Record<string, number>>} Tally
 */

/** Above this share of risky answers, a question becomes a concern. */
export const CONCERN = 30;
export const MAX_COUNT = 99;

/** @type {Question[]} */
export const QUESTIONS = [
  {
    id: 'loai',
    tab: 'Loại phân',
    text: 'Gia đình thường dùng loại phân bón nào?',
    answers: [
      { id: 'hoa-hoc', text: 'Chỉ dùng phân hoá học', short: 'Hoá học', good: false },
      { id: 'huu-co', text: 'Chủ yếu phân hữu cơ', short: 'Hữu cơ', good: true },
      { id: 'vi-sinh', text: 'Có dùng phân vi sinh', short: 'Vi sinh', good: true },
      { id: 'ket-hop', text: 'Kết hợp hữu cơ và hoá học', short: 'Kết hợp', good: true },
    ],
    advice: 'Tăng phân hữu cơ ủ hoai, phân vi sinh để giảm phân hoá học và cải tạo đất.',
  },
  {
    id: 'luong',
    tab: 'Lượng bón',
    text: 'Gia đình căn cứ vào đâu để quyết định lượng phân bón?',
    answers: [
      {
        id: 'huong-dan',
        text: 'Theo hướng dẫn trên bao bì hoặc của cán bộ khuyến nông',
        short: 'Hướng dẫn',
        good: true,
      },
      { id: 'kinh-nghiem', text: 'Theo kinh nghiệm', short: 'Kinh nghiệm', good: null },
      { id: 'nhieu', text: 'Bón nhiều cho chắc', short: 'Bón nhiều', good: false },
    ],
    advice:
      'Phổ biến nguyên tắc bón đúng liều lượng theo nhu cầu của cây; mời cán bộ khuyến nông hướng dẫn cách tính lượng phân.',
  },
  {
    id: 'thu-hoach',
    tab: 'Thu hoạch',
    text: 'Gia đình ngừng bón phân đạm bao lâu trước khi thu hoạch rau?',
    answers: [
      { id: 'dung', text: 'Đúng thời gian khuyến cáo', short: 'Đúng hạn', good: true },
      { id: 'sat', text: 'Vẫn bón sát ngày thu hoạch', short: 'Bón sát', good: false },
      { id: 'khong-ro', text: 'Không để ý', short: 'Không rõ', good: false },
    ],
    advice: 'Nhắc người trồng ngừng bón đạm đủ lâu trước thu hoạch để rau không tích luỹ nitrate.',
  },
  {
    id: 'bao-bi',
    tab: 'Bao bì',
    text: 'Bao bì phân bón sau khi dùng được xử lí thế nào?',
    answers: [
      { id: 'thu-gom', text: 'Thu gom vào nơi quy định', short: 'Thu gom', good: true },
      { id: 'vut', text: 'Vứt ra ruộng, kênh mương', short: 'Vứt bỏ', good: false },
      { id: 'dot', text: 'Đốt tại chỗ', short: 'Đốt', good: false },
    ],
    advice: 'Đặt điểm thu gom bao bì phân bón, thuốc bảo vệ thực vật trên đồng ruộng.',
  },
];

/** Invented answers of 20 households, to try the tools before a real survey. @type {Tally} */
export const SAMPLE = {
  loai: { 'hoa-hoc': 9, 'huu-co': 2, 'vi-sinh': 1, 'ket-hop': 8 },
  luong: { 'huong-dan': 7, 'kinh-nghiem': 10, nhieu: 3 },
  'thu-hoach': { dung: 11, sat: 6, 'khong-ro': 3 },
  'bao-bi': { 'thu-gom': 6, vut: 10, dot: 4 },
};

/** @returns {Tally} */
export function emptyTally() {
  return Object.fromEntries(
    QUESTIONS.map((q) => [q.id, Object.fromEntries(q.answers.map((a) => [a.id, 0]))]),
  );
}

/** @returns {Tally} */
export const sampleTally = () => structuredClone(SAMPLE);

/** @param {string} id */
export const questionOf = (id) => QUESTIONS.find((q) => q.id === id) ?? QUESTIONS[0];

/** @param {Tally} tally @param {string} qid */
export function totalOf(tally, qid) {
  return Object.values(tally[qid] ?? {}).reduce((s, v) => s + v, 0);
}

/**
 * Each answer's share of a question, in percent with one decimal.
 * @param {Tally} tally @param {string} qid
 */
export function shares(tally, qid) {
  const total = totalOf(tally, qid);
  return questionOf(qid).answers.map((a) => ({
    ...a,
    count: tally[qid]?.[a.id] ?? 0,
    share: total === 0 ? 0 : tidy(((tally[qid]?.[a.id] ?? 0) / total) * 100, 1),
  }));
}

/**
 * The share of answers that go against clean farming, in percent.
 * @param {Tally} tally @param {string} qid
 */
export function riskyShare(tally, qid) {
  return tidy(
    shares(tally, qid)
      .filter((a) => a.good === false)
      .reduce((s, a) => s + a.share, 0),
    1,
  );
}

/**
 * The observations of the report, one per finding.
 * @param {Tally} tally
 * @returns {Array<{ tone: 'ok' | 'warn' | 'info', text: string }>}
 */
export function observations(tally) {
  const totals = QUESTIONS.map((q) => totalOf(tally, q.id));
  if (totals.every((t) => t === 0)) {
    return [{ tone: 'info', text: 'Chưa có phiếu nào. Hãy nhập số hộ chọn mỗi câu trả lời.' }];
  }
  /** @type {Array<{ tone: 'ok' | 'warn' | 'info', text: string }>} */
  const out = [];
  if (new Set(totals).size > 1) {
    out.push({
      tone: 'info',
      text: `Số phiếu ở các câu hỏi chưa bằng nhau (${totals.map((t) => formatNumber(t)).join(', ')}). Mỗi hộ trả lời mọi câu, nên hãy kiểm tra lại cách nhập.`,
    });
  }
  for (const q of QUESTIONS) {
    if (totalOf(tally, q.id) === 0) continue;
    const risky = riskyShare(tally, q.id);
    const top = [...shares(tally, q.id)].sort((a, b) => b.count - a.count)[0];
    const lead = `${q.tab}: nhiều nhất là "${top.text}" (${formatNumber(top.share)}%).`;
    const good = tidy(
      shares(tally, q.id)
        .filter((a) => a.good === true)
        .reduce((sum, a) => sum + a.share, 0),
      1,
    );
    if (risky > CONCERN) {
      out.push({
        tone: 'warn',
        text: `${lead} Có ${formatNumber(risky)}% câu trả lời chưa phù hợp với nông nghiệp sạch. Đề xuất: ${q.advice}`,
      });
    } else if (good >= 50) {
      out.push({
        tone: 'ok',
        text: `${lead} Phần lớn các hộ đã làm phù hợp với nông nghiệp sạch.`,
      });
    } else {
      out.push({
        tone: 'info',
        text: `${lead} Chỉ ${formatNumber(good)}% câu trả lời phù hợp rõ với nông nghiệp sạch, cần tìm hiểu thêm. Đề xuất: ${q.advice}`,
      });
    }
  }
  return out;
}
