/**
 * The project board for a local human ecology survey. The group picks one
 * field, marks what it observed on a schematic map of the neighbourhood,
 * tallies the answers to the field's survey question, and gets the shares,
 * the observations a report would make and a plain-text summary. Nothing is
 * stored, so the summary is how the work is kept. No DOM here, so all of it
 * is tested in Node.
 */
import { formatNumber, tidy } from '#lib/core/number-format.js';

/**
 * @typedef {{ id: string, short: string, label: string, good: boolean }} Answer
 *   `short` names the answer under its bar in the chart.
 * @typedef {{ id: string, label: string, tone: 'tot' | 'xau' }} MarkKind
 * @typedef {{
 *   id: string, name: string, question: string, answers: Answer[], marks: MarkKind[],
 * }} Field
 * @typedef {{ id: string, name: string, x: number, y: number, w: number, h: number, fill: string }} Zone
 * @typedef {Record<string, number>} Tally answer id → people
 * @typedef {Record<string, Record<string, number>>} Marks zone id → mark kind id → count
 */

/** Fewer people than this make the shares unreliable. */
export const MIN_PEOPLE = 30;
export const MAX_PEOPLE = 200;

/** @type {Field[]} */
export const FIELDS = [
  {
    id: 'nong-nghiep',
    name: 'Nông nghiệp sinh thái',
    question: 'Gia đình bạn đang sản xuất nông nghiệp theo cách nào?',
    answers: [
      { id: 'ket-hop', short: 'Kết hợp', label: 'Mô hình kết hợp (VAC, lúa – cá...)', good: true },
      { id: 'huu-co', short: 'Hữu cơ', label: 'Hữu cơ, ít phân, thuốc hoá học', good: true },
      { id: 'hoa-hoc', short: 'Hoá học', label: 'Dùng nhiều phân, thuốc hoá học', good: false },
    ],
    marks: [
      { id: 'mo-hinh', label: 'Mô hình sinh thái', tone: 'tot' },
      { id: 'vo-thuoc', label: 'Vỏ chai thuốc vứt bừa', tone: 'xau' },
    ],
  },
  {
    id: 'do-thi',
    name: 'Khu dân cư xanh',
    question: 'Gia đình bạn có phân loại rác tại nguồn không?',
    answers: [
      { id: 'thuong-xuyen', short: 'Thường xuyên', label: 'Thường xuyên', good: true },
      { id: 'thinh-thoang', short: 'Đôi khi', label: 'Thỉnh thoảng', good: false },
      { id: 'khong', short: 'Không', label: 'Không', good: false },
    ],
    marks: [
      { id: 'cay-xanh', label: 'Cây xanh, vườn hoa', tone: 'tot' },
      { id: 'bai-rac', label: 'Điểm rác tự phát', tone: 'xau' },
    ],
  },
  {
    id: 'bao-ton',
    name: 'Bảo tồn, du lịch sinh thái',
    question: 'Bạn có biết loài sinh vật quý hiếm hoặc khu bảo tồn nào ở địa phương không?',
    answers: [
      { id: 'biet-ro', short: 'Biết rõ', label: 'Biết và kể được tên', good: true },
      { id: 'nghe-noi', short: 'Nghe nói', label: 'Có nghe nói', good: false },
      { id: 'khong-biet', short: 'Không biết', label: 'Không biết', good: false },
    ],
    marks: [
      { id: 'diem-xanh', label: 'Điểm có loài cần bảo vệ, cảnh quan đẹp', tone: 'tot' },
      { id: 'xam-hai', label: 'Điểm chặt phá, săn bắt, xả rác', tone: 'xau' },
    ],
  },
  {
    id: 'khi-hau',
    name: 'Ứng phó biến đổi khí hậu',
    question: 'Gia đình bạn làm việc nào sau đây thường xuyên nhất để giảm phát thải?',
    answers: [
      {
        id: 'tiet-kiem-dien',
        short: 'Tiết kiệm',
        label: 'Tiết kiệm điện, dùng năng lượng mặt trời',
        good: true,
      },
      { id: 'xe-dap', short: 'Đi xe đạp', label: 'Đi xe đạp, phương tiện công cộng', good: true },
      { id: 'chua-lam', short: 'Chưa làm', label: 'Chưa làm việc nào', good: false },
    ],
    marks: [
      { id: 'xanh', label: 'Pin mặt trời, trồng cây, biogas', tone: 'tot' },
      { id: 'dot', label: 'Đốt rác, đốt rơm rạ, khói bụi', tone: 'xau' },
    ],
  },
];

/**
 * The zones of a schematic neighbourhood map on a 300 × 200 board.
 * @type {Zone[]}
 */
export const ZONES = [
  { id: 'dan-cu', name: 'Khu dân cư', x: 8, y: 8, w: 120, h: 88, fill: '#fde68a' },
  { id: 'truong', name: 'Trường học', x: 136, y: 8, w: 76, h: 88, fill: '#bfdbfe' },
  { id: 'cho', name: 'Chợ', x: 220, y: 8, w: 72, h: 88, fill: '#fecaca' },
  { id: 'ruong', name: 'Đồng ruộng', x: 8, y: 104, w: 120, h: 88, fill: '#bbf7d0' },
  { id: 'song', name: 'Sông, kênh', x: 136, y: 104, w: 76, h: 88, fill: '#a5f3fc' },
  { id: 'doi', name: 'Đồi, rừng', x: 220, y: 104, w: 72, h: 88, fill: '#86efac' },
];

/** Spacing of the observation dots drawn in a zone. */
export const DOT_STEP = 13;

/**
 * Where the i-th dot of a zone sits, in rows under the zone's name, and
 * how many dots the zone can show.
 * @param {Zone} z @param {number} i
 */
export function dotSpot(z, i) {
  const perRow = Math.floor((z.w - 8) / DOT_STEP);
  return {
    cx: z.x + 10 + (i % perRow) * DOT_STEP,
    cy: z.y + 32 + Math.floor(i / perRow) * DOT_STEP,
  };
}

/** @param {Zone} z */
export function dotRoom(z) {
  return Math.floor((z.w - 8) / DOT_STEP) * (Math.floor((z.h - 38) / DOT_STEP) + 1);
}

/** @param {string} id */
export function fieldOf(id) {
  const f = FIELDS.find((x) => x.id === id);
  if (!f) throw new Error(`no field ${id}`);
  return f;
}

/** @param {string} id */
export function zoneOf(id) {
  const z = ZONES.find((x) => x.id === id);
  if (!z) throw new Error(`no zone ${id}`);
  return z;
}

/**
 * A tally with every answer of the field at zero.
 * @param {Field} field
 * @returns {Tally}
 */
export function emptyTally(field) {
  return Object.fromEntries(field.answers.map((a) => [a.id, 0]));
}

/** @returns {Marks} */
export function emptyMarks() {
  return Object.fromEntries(ZONES.map((z) => [z.id, {}]));
}

/**
 * The marks with one more of `kind` in `zone`.
 * @param {Marks} marks @param {string} zone @param {string} kind
 * @returns {Marks}
 */
export function addMark(marks, zone, kind) {
  const here = marks[zone] ?? {};
  return { ...marks, [zone]: { ...here, [kind]: (here[kind] ?? 0) + 1 } };
}

/**
 * The marks with one fewer of `kind` in `zone`, never below zero.
 * @param {Marks} marks @param {string} zone @param {string} kind
 * @returns {Marks}
 */
export function removeMark(marks, zone, kind) {
  const here = marks[zone] ?? {};
  return { ...marks, [zone]: { ...here, [kind]: Math.max(0, (here[kind] ?? 0) - 1) } };
}

/**
 * How many marks of a kind there are in all zones.
 * @param {Marks} marks @param {string} kind
 */
export function totalMarks(marks, kind) {
  return ZONES.reduce((sum, z) => sum + (marks[z.id]?.[kind] ?? 0), 0);
}

/**
 * The share of each answer, in percent with one decimal.
 * @param {Field} field @param {Tally} tally
 */
export function shares(field, tally) {
  const total = field.answers.reduce((s, a) => s + (tally[a.id] ?? 0), 0);
  return field.answers.map((a) => {
    const count = tally[a.id] ?? 0;
    const share = total > 0 ? tidy(Math.round((count / total) * 1000) / 10, 6) : 0;
    return { id: a.id, label: a.label, short: a.short, good: a.good, count, share };
  });
}

/**
 * The share of people whose answer shows a sustainable practice, in percent
 * with one decimal.
 * @param {Field} field @param {Tally} tally
 */
export function goodShare(field, tally) {
  const total = field.answers.reduce((s, a) => s + (tally[a.id] ?? 0), 0);
  if (total === 0) return 0;
  const good = field.answers.filter((a) => a.good).reduce((s, a) => s + (tally[a.id] ?? 0), 0);
  return tidy(Math.round((good / total) * 1000) / 10, 6);
}

/**
 * The observations for the report.
 * @param {Field} field @param {Tally} tally @param {Marks} marks
 * @returns {Array<{ tone: 'ok' | 'warn' | 'info', text: string }>}
 */
export function observations(field, tally, marks) {
  /** @type {Array<{ tone: 'ok' | 'warn' | 'info', text: string }>} */
  const notes = [];
  const total = field.answers.reduce((s, a) => s + (tally[a.id] ?? 0), 0);
  if (total === 0) {
    notes.push({ tone: 'info', text: 'Nhập số người chọn mỗi câu trả lời để vẽ biểu đồ.' });
  } else {
    if (total < MIN_PEOPLE) {
      notes.push({
        tone: 'warn',
        text: `Mới có ${total} người trả lời: nên hỏi ít nhất ${MIN_PEOPLE} người để tỉ lệ đáng tin cậy hơn.`,
      });
    }
    const good = goodShare(field, tally);
    notes.push({
      tone: good >= 50 ? 'ok' : 'warn',
      text:
        good >= 50
          ? `${formatNumber(good)}% số người trả lời đã có cách làm bền vững. Báo cáo nên nêu gương các cách làm này để nhân rộng.`
          : `Chỉ ${formatNumber(good)}% số người trả lời có cách làm bền vững. Đề xuất cần tập trung vào tuyên truyền và hỗ trợ người dân thay đổi.`,
    });
  }
  const bad = field.marks.filter((m) => m.tone === 'xau');
  const hot = ZONES.map((z) => ({
    zone: z,
    n: bad.reduce((s, m) => s + (marks[z.id]?.[m.id] ?? 0), 0),
  })).reduce((a, b) => (b.n > a.n ? b : a));
  if (hot.n > 0) {
    notes.push({
      tone: 'info',
      text: `Trên bản đồ, ${hot.zone.name.toLowerCase()} có nhiều điểm cần cải thiện nhất (${hot.n}). Đó là nơi nên ưu tiên giải pháp.`,
    });
  } else if (field.marks.every((m) => totalMarks(marks, m.id) === 0)) {
    notes.push({ tone: 'info', text: 'Chưa đánh dấu điểm nào trên bản đồ.' });
  }
  return notes;
}

/**
 * The plain-text summary for the report.
 * @param {Field} field @param {Tally} tally @param {Marks} marks
 */
export function reportText(field, tally, marks) {
  const total = field.answers.reduce((s, a) => s + (tally[a.id] ?? 0), 0);
  const lines = [
    `DỰ ÁN SINH THÁI NHÂN VĂN: ${field.name.toUpperCase()}`,
    '',
    `Câu hỏi khảo sát: ${field.question}`,
    `Số người trả lời: ${total}`,
  ];
  for (const r of shares(field, tally)) {
    lines.push(`- ${r.label}: ${r.count} người (${formatNumber(r.share)}%)`);
  }
  lines.push(
    `Tỉ lệ có cách làm bền vững: ${formatNumber(goodShare(field, tally))}%`,
    '',
    'Bản đồ quan sát:',
  );
  for (const z of ZONES) {
    const parts = field.marks
      .map((m) => ({ m, n: marks[z.id]?.[m.id] ?? 0 }))
      .filter((x) => x.n > 0)
      .map((x) => `${x.m.label.toLowerCase()} ${x.n}`);
    if (parts.length) lines.push(`- ${z.name}: ${parts.join('; ')}`);
  }
  if (field.marks.every((m) => totalMarks(marks, m.id) === 0))
    lines.push('- Chưa đánh dấu điểm nào');
  return lines.join('\n');
}
