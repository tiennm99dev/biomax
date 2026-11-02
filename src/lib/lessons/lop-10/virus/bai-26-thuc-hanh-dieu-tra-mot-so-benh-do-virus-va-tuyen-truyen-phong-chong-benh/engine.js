/**
 * A survey builder: the disease topics, a bank of questions with some badly
 * written ones to catch, a review of the chosen form, and the tally with its
 * automatic reading. The sample answers are made up to try the tool. No DOM
 * here, so all of it is tested in Node.
 */
import { formatNumber, roundToTotal } from '#lib/core/number-format.js';

/**
 * @typedef {{ text: string, right?: boolean }} SurveyOption
 * @typedef {{
 *   id: string,
 *   name: string,
 *   subject: 'nguoi' | 'cay-trong',
 *   virus: string,
 *   carrier: string,
 *   symptoms: string[],
 *   routes: SurveyOption[],
 *   prevention: string[],
 * }} Topic
 * `right` marks a route that is true, and a false route the survey asks to find
 * misunderstandings.
 * @typedef {'chung' | 'hien-trang' | 'trieu-chung' | 'duong-lay' | 'phong-chong'} Group
 * @typedef {{
 *   id: string,
 *   group: Group,
 *   text: string,
 *   multiple: boolean,
 *   options: SurveyOption[],
 * }} Question
 * @typedef {{ id: string, text: string, why: string }} BadQuestion
 * @typedef {{ tone: 'ok' | 'warn' | 'info', text: string }} Note
 */

/** @type {Topic[]} */
export const TOPICS = [
  {
    id: 'cum',
    name: 'Cúm',
    subject: 'nguoi',
    virus: 'Virus cúm',
    carrier: 'Không có',
    symptoms: ['Sốt cao', 'Ho, đau họng', 'Đau nhức cơ thể', 'Sổ mũi, nghẹt mũi'],
    routes: [
      { text: 'Giọt dịch khi ho, hắt hơi', right: true },
      { text: 'Tay dính dịch tiết rồi đưa lên mũi, miệng', right: true },
      { text: 'Muỗi đốt', right: false },
    ],
    prevention: [
      'Tiêm vaccine cúm',
      'Đeo khẩu trang nơi đông người',
      'Rửa tay thường xuyên',
      'Tránh tiếp xúc gần với người bệnh',
    ],
  },
  {
    id: 'sot-xuat-huyet',
    name: 'Sốt xuất huyết',
    subject: 'nguoi',
    virus: 'Virus Dengue',
    carrier: 'Muỗi vằn',
    symptoms: ['Sốt cao đột ngột', 'Đau đầu, đau cơ', 'Chấm xuất huyết dưới da', 'Chảy máu cam'],
    routes: [
      { text: 'Muỗi vằn đốt người bệnh rồi đốt người lành', right: true },
      { text: 'Giọt dịch khi ho, hắt hơi', right: false },
      { text: 'Ăn chung, uống chung', right: false },
    ],
    prevention: [
      'Dọn dụng cụ chứa nước đọng',
      'Đậy kín bể, lu chứa nước',
      'Ngủ màn, dùng kem chống muỗi',
      'Phát quang bụi rậm',
    ],
  },
  {
    id: 'soi',
    name: 'Sởi',
    subject: 'nguoi',
    virus: 'Virus sởi',
    carrier: 'Không có',
    symptoms: ['Sốt', 'Ho, sổ mũi', 'Đỏ mắt', 'Phát ban trên da'],
    routes: [
      { text: 'Giọt dịch trong không khí khi người bệnh ho, hắt hơi', right: true },
      { text: 'Muỗi đốt', right: false },
      { text: 'Ăn thức ăn chưa nấu chín', right: false },
    ],
    prevention: [
      'Tiêm đủ mũi vaccine sởi',
      'Cách li người bệnh',
      'Đeo khẩu trang nơi đông người',
      'Giữ nhà cửa thông thoáng',
    ],
  },
  {
    id: 'xoan-vang-la',
    name: 'Xoăn vàng lá cà chua',
    subject: 'cay-trong',
    virus: 'Virus xoăn vàng lá cà chua',
    carrier: 'Bọ phấn trắng',
    symptoms: ['Lá xoăn, nhỏ lại', 'Mép lá vàng', 'Cây còi cọc', 'Ít hoa, ít quả'],
    routes: [
      { text: 'Bọ phấn chích hút cây bệnh rồi sang cây lành', right: true },
      { text: 'Theo nước mưa', right: false },
      { text: 'Qua phân bón hoá học', right: false },
    ],
    prevention: [
      'Trồng giống kháng bệnh',
      'Diệt bọ phấn, dùng lưới chắn côn trùng',
      'Nhổ bỏ, tiêu huỷ cây bệnh',
      'Làm sạch cỏ dại quanh ruộng',
    ],
  },
];

/** The groups a useful form must cover, with what each adds to the report. */
export const GROUPS = /** @type {Record<Group, string>} */ ({
  chung: 'thông tin chung về người trả lời',
  'hien-trang': 'tình hình mắc bệnh ở địa phương',
  'trieu-chung': 'hiểu biết về triệu chứng',
  'duong-lay': 'hiểu biết về đường lây',
  'phong-chong': 'các biện pháp phòng chống đang dùng',
});

/** @type {Group[]} */
const REQUIRED = ['hien-trang', 'trieu-chung', 'duong-lay', 'phong-chong'];

/**
 * The good questions for a topic.
 * @param {Topic} topic
 * @returns {Question[]}
 */
export function questionsFor(topic) {
  const plant = topic.subject === 'cay-trong';
  const name = topic.name.toLowerCase();
  return [
    {
      id: 'tuoi',
      group: 'chung',
      text: plant ? 'Bạn trồng cà chua được bao lâu?' : 'Bạn thuộc nhóm tuổi nào?',
      multiple: false,
      options: (plant
        ? ['Dưới 1 năm', 'Từ 1 đến 5 năm', 'Trên 5 năm']
        : ['Dưới 18 tuổi', 'Từ 18 đến 40 tuổi', 'Trên 40 tuổi']
      ).map((text) => ({ text })),
    },
    {
      id: 'da-mac',
      group: 'hien-trang',
      text: plant
        ? `Trong vụ vừa qua, ruộng nhà bạn có cây bị bệnh ${name} không?`
        : `Trong 12 tháng qua, gia đình bạn có ai mắc bệnh ${name} không?`,
      multiple: false,
      options: ['Có', 'Không', 'Không rõ'].map((text) => ({ text })),
    },
    {
      id: 'trieu-chung',
      group: 'trieu-chung',
      text: 'Bạn biết những triệu chứng nào của bệnh này? (Chọn nhiều ý.)',
      multiple: true,
      options: topic.symptoms.map((text) => ({ text })),
    },
    {
      id: 'duong-lay',
      group: 'duong-lay',
      text: 'Theo bạn, bệnh này lây theo đường nào? (Chọn nhiều ý.)',
      multiple: true,
      options: topic.routes,
    },
    {
      id: 'phong-chong',
      group: 'phong-chong',
      text: plant
        ? 'Nhà bạn đang làm những việc nào để phòng bệnh? (Chọn nhiều ý.)'
        : 'Gia đình bạn đang làm những việc nào để phòng bệnh? (Chọn nhiều ý.)',
      multiple: true,
      options: topic.prevention.map((text) => ({ text })),
    },
  ];
}

/** Badly written questions, each with what is wrong with it. @type {BadQuestion[]} */
export const BAD_QUESTIONS = [
  {
    id: 'ten-nguoi-benh',
    text: 'Hãy ghi họ tên và số điện thoại của người từng mắc bệnh.',
    why: 'Câu này xâm phạm thông tin riêng tư của người bệnh. Phiếu điều tra chỉ cần số liệu, không cần biết đó là ai.',
  },
  {
    id: 'dan-dat',
    text: 'Bạn có đồng ý rằng bệnh này rất đáng sợ, ai cũng phải lo lắng không?',
    why: 'Câu này dẫn dắt người trả lời theo ý người hỏi, nên kết quả không còn khách quan.',
  },
  {
    id: 'mo-ho',
    text: 'Bạn thấy bệnh này thế nào?',
    why: 'Câu này quá mơ hồ: mỗi người hiểu một kiểu và câu trả lời không thống kê được.',
  },
];

/**
 * Reviews a form: what it misses and which bad questions it holds.
 * @param {string[]} chosen ids of the chosen questions
 * @param {Question[]} questions the good questions of the topic
 * @returns {{ ready: boolean, missing: Group[], bad: BadQuestion[] }}
 */
export function reviewForm(chosen, questions) {
  const groups = new Set(questions.filter((q) => chosen.includes(q.id)).map((q) => q.group));
  const missing = REQUIRED.filter((g) => !groups.has(g));
  const bad = BAD_QUESTIONS.filter((q) => chosen.includes(q.id));
  return { ready: missing.length === 0 && bad.length === 0, missing, bad };
}

/**
 * The review as one line of feedback.
 * @param {ReturnType<typeof reviewForm>} review
 * @returns {Note}
 */
export function reviewNote(review) {
  if (review.bad.length > 0) return { tone: 'warn', text: review.bad[0].why };
  if (review.missing.length > 0) {
    const list = review.missing.map((g) => GROUPS[g]).join('; ');
    return { tone: 'info', text: `Phiếu chưa có câu hỏi về: ${list}.` };
  }
  return {
    tone: 'ok',
    text: 'Phiếu đã đủ các nội dung cần điều tra và không có câu hỏi xấu. Hãy chuyển sang nhập kết quả.',
  };
}

/**
 * A count as a percentage of the forms, in Vietnamese writing.
 * @param {number} count @param {number} forms
 */
export const percentText = (count, forms) =>
  forms > 0 ? `${formatNumber((count / forms) * 100, 1)}%` : '0%';

/**
 * A typed count as a whole number from 0 to `max`; anything unreadable is 0.
 * @param {string} text @param {number} max
 */
export function readCount(text, max) {
  const value = Math.trunc(Number(text));
  return Number.isFinite(value) ? Math.min(max, Math.max(0, value)) : 0;
}

/**
 * Whether the counts can come from this many forms. A single-choice question
 * must add up to the forms exactly; a multiple-choice one may go beyond.
 * @param {Question} question @param {number[]} counts @param {number} forms
 */
export function countsFit(question, counts, forms) {
  if (counts.some((c) => c > forms || c < 0)) return false;
  if (question.multiple) return true;
  return counts.reduce((s, c) => s + c, 0) === forms;
}

/**
 * The automatic reading of one question's result.
 * @param {Question} question @param {number[]} counts @param {number} forms
 * @returns {Note}
 */
export function readResult(question, counts, forms) {
  if (forms === 0) return { tone: 'info', text: 'Chưa có phiếu nào. Hãy nhập số phiếu thu được.' };
  if (counts.every((c) => c === 0)) {
    return { tone: 'info', text: 'Chưa có lượt chọn nào cho câu này.' };
  }
  if (!countsFit(question, counts, forms)) {
    const sum = counts.reduce((s, c) => s + c, 0);
    return {
      tone: 'warn',
      text: `Câu này chỉ chọn một ý, nên tổng số lượt chọn phải bằng số phiếu. Hiện tổng là ${sum}, còn số phiếu là ${forms}.`,
    };
  }
  const top = counts.indexOf(Math.max(...counts));
  const lead = `Nhiều nhất là "${question.options[top].text}": ${counts[top]}/${forms} phiếu, chiếm ${percentText(counts[top], forms)}.`;
  const wrong = question.options
    .map((o, i) => ({ o, count: counts[i] }))
    .filter(({ o, count }) => o.right === false && count > 0)
    .sort((a, b) => b.count - a.count)[0];
  if (wrong) {
    return {
      tone: 'info',
      text: `${lead} Có ${percentText(wrong.count, forms)} phiếu hiểu sai khi chọn đường lây "${wrong.o.text}", đây là điều tờ rơi cần đính chính.`,
    };
  }
  return { tone: 'ok', text: lead };
}

/**
 * Made-up answers from `forms` forms, to try the chart without a real survey.
 * @param {Question} question @param {number} forms
 * @returns {number[]}
 */
export function sampleCounts(question, forms) {
  if (!question.multiple) {
    return roundToTotal(
      [0.25, 0.6, 0.15].map((share) => share * forms),
      forms,
    );
  }
  return question.options.map((o, i) => {
    const share = o.right === false ? 0.2 : Math.max(0.3, 0.85 - i * 0.15);
    return Math.round(share * forms);
  });
}

export const LEAFLET_BINS = [
  { id: 'nen', label: 'Nên đưa vào tờ rơi' },
  { id: 'khong', label: 'Không nên đưa vào' },
];

export const LEAFLET_CARDS = [
  {
    id: 'ten-benh',
    label: 'Tên bệnh và virus gây bệnh',
    bin: 'nen',
    why: 'Người đọc cần biết tờ rơi nói về bệnh gì.',
  },
  {
    id: 'duong-lay',
    label: 'Đường lây và vật trung gian truyền bệnh',
    bin: 'nen',
    why: 'Biết đường lây mới biết cần chặn ở đâu.',
  },
  {
    id: 'trieu-chung',
    label: 'Các triệu chứng cần đi khám sớm',
    bin: 'nen',
    why: 'Giúp phát hiện bệnh sớm và điều trị kịp thời.',
  },
  {
    id: 'bien-phap',
    label: 'Các việc cụ thể mỗi gia đình làm được để phòng bệnh',
    bin: 'nen',
    why: 'Tờ rơi hữu ích khi người đọc biết ngay phải làm gì.',
  },
  {
    id: 'ten-nguoi',
    label: 'Họ tên những người trong xóm đang mắc bệnh',
    bin: 'khong',
    why: 'Đây là thông tin riêng tư và có thể gây kì thị người bệnh.',
  },
  {
    id: 'khang-sinh',
    label: 'Lời khuyên tự mua kháng sinh uống khi sốt',
    bin: 'khong',
    why: 'Kháng sinh không diệt được virus, lời khuyên này sai và có hại.',
  },
  {
    id: 'tin-don',
    label: 'Tin đồn trên mạng xã hội chưa được kiểm chứng',
    bin: 'khong',
    why: 'Chỉ dùng thông tin từ nguồn tin cậy như cơ quan y tế.',
  },
  {
    id: 'hinh-so',
    label: 'Lời lẽ doạ dẫm khiến mọi người hoảng sợ',
    bin: 'khong',
    why: 'Tuyên truyền cần chính xác và hướng dẫn cách làm, không gây hoảng loạn.',
  },
];
