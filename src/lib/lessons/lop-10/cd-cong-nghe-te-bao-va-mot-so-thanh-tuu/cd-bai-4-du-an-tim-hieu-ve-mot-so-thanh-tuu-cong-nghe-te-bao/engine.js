/**
 * The digital project frame: topics and tasks, a timeline of cell technology
 * that learners extend with their own sourced milestones, the self-assessment
 * and a plain text report to copy out. Nothing is stored, so the report is how
 * a learner keeps the work. No DOM here, so all of it is tested in Node.
 */
import { formatNumber, tidy } from '#lib/core/number-format.js';

/**
 * @typedef {{ id: string, name: string, examples: string, questions: string[] }} Topic
 * @typedef {{ id: string, year: number, name: string, topic: string, source?: string, own?: boolean }} Milestone
 * @typedef {{ year: string, name: string, topic: string, source: string }} Draft
 * @typedef {{ id: string, name: string, levels: { points: number, text: string }[], improve: string }} Criterion
 */

/** @type {Topic[]} */
export const TOPICS = [
  {
    id: 'y-hoc',
    name: 'Y học',
    examples: 'Liệu pháp tế bào gốc, liệu pháp gene',
    questions: [
      'Liệu pháp này chữa bệnh gì, và đang ở giai đoạn nào: đã dùng hay còn thử nghiệm?',
      'Quy trình gồm những bước nào? Tế bào được lấy từ đâu?',
      'Ưu điểm, rủi ro và vấn đề đạo đức của liệu pháp là gì?',
    ],
  },
  {
    id: 'nong-nghiep',
    name: 'Nông nghiệp',
    examples: 'Nhân nhanh giống cây, khôi phục giống quý, tạo giống mới',
    questions: [
      'Giống cây nào đang được nhân giống, và nó có giá trị gì?',
      'Quy trình thực hiện ra sao, cơ sở khoa học là gì?',
      'Chi phí, tính khả thi ở địa phương em thế nào?',
    ],
  },
  {
    id: 'nhan-ban',
    name: 'Nhân bản động vật',
    examples: 'Cừu Dolly, lợn Ỉ, bảo tồn loài quý hiếm',
    questions: [
      'Mục đích của việc nhân bản là gì? Con vật nào cho nhân, cho trứng, mang thai hộ?',
      'Tỉ lệ thành công là bao nhiêu? Con vật nhân bản có khoẻ mạnh không?',
      'Quan điểm của em về nhân bản vô tính người là gì?',
    ],
  },
  {
    id: 'thuc-pham',
    name: 'Thực phẩm nhân tạo',
    examples: 'Thịt nuôi cấy từ tế bào',
    questions: [
      'Thịt nhân tạo được sản xuất theo quy trình nào?',
      'So với chăn nuôi, nó có lợi và hạn chế gì về môi trường, chi phí, an toàn?',
      'Người tiêu dùng có sẵn sàng dùng không? Em có thể khảo sát thử.',
    ],
  },
];

/** The tasks of a group, one person each. */
export const TASKS = [
  'Nhóm trưởng, theo dõi tiến độ',
  'Thu thập thông tin',
  'Xử lí thông tin, làm bảng và biểu đồ',
  'Làm sản phẩm',
  'Trình bày trước lớp',
];

/** @type {Milestone[]} */
export const MILESTONES = [
  {
    id: 'haberlandt',
    year: 1902,
    name: 'Haberlandt nêu ý tưởng nuôi cấy tế bào thực vật tách rời',
    topic: 'nong-nghiep',
  },
  {
    id: 'skoog',
    year: 1957,
    name: 'Skoog và Miller chỉ ra tỉ lệ auxin và cytokinin định hướng tạo rễ, chồi',
    topic: 'nong-nghiep',
  },
  {
    id: 'steward',
    year: 1958,
    name: 'Steward tái sinh cây cà rốt từ các tế bào nuôi cấy',
    topic: 'nong-nghiep',
  },
  {
    id: 'evans',
    year: 1981,
    name: 'Tách được tế bào gốc phôi chuột và nuôi trong phòng thí nghiệm',
    topic: 'y-hoc',
  },
  {
    id: 'dolly',
    year: 1996,
    name: 'Cừu Dolly ra đời ở Scotland nhờ chuyển nhân tế bào tuyến vú',
    topic: 'nhan-ban',
  },
  {
    id: 'thomson',
    year: 1998,
    name: 'Tách được tế bào gốc phôi người và nuôi trong phòng thí nghiệm',
    topic: 'y-hoc',
  },
  {
    id: 'yamanaka',
    year: 2006,
    name: 'Nhóm của Yamanaka tạo được tế bào gốc cảm ứng từ tế bào chuột',
    topic: 'y-hoc',
  },
  {
    id: 'burger',
    year: 2013,
    name: 'Chiếc burger đầu tiên từ thịt bò nuôi cấy được nếm thử ở London',
    topic: 'thuc-pham',
  },
  {
    id: 'car-t',
    year: 2017,
    name: 'Liệu pháp CAR-T đầu tiên được cấp phép ở Mỹ, điều trị ung thư máu',
    topic: 'y-hoc',
  },
  {
    id: 'lon-i',
    year: 2021,
    name: 'Viện Chăn nuôi (Việt Nam) nhân bản vô tính được lợn Ỉ',
    topic: 'nhan-ban',
  },
];

/** Bounds of a year a learner can enter. */
export const FIRST_YEAR = 1800;
export const LAST_YEAR = 2100;

/**
 * The year typed by a learner, or null when it is not a usable year.
 * @param {string} text
 * @returns {number | null}
 */
export function readYear(text) {
  const t = text.trim();
  if (!/^\d{4}$/.test(t)) return null;
  const year = Number(t);
  return year >= FIRST_YEAR && year <= LAST_YEAR ? year : null;
}

/**
 * Adds a learner's milestone, or says what is wrong with it.
 * @param {Milestone[]} own @param {Draft} draft
 * @returns {{ ok: true, own: Milestone[] } | { ok: false, field: keyof Draft, text: string }}
 */
export function addMilestone(own, draft) {
  const year = readYear(draft.year);
  if (year === null) {
    return {
      ok: false,
      field: 'year',
      text: `Năm cần có 4 chữ số, từ ${FIRST_YEAR} đến ${LAST_YEAR}.`,
    };
  }
  const name = draft.name.trim();
  if (name.length < 5) return { ok: false, field: 'name', text: 'Hãy viết rõ thành tựu là gì.' };
  const source = draft.source.trim();
  if (source.length < 3) {
    return {
      ok: false,
      field: 'source',
      text: 'Hãy ghi nguồn (tên trang, báo, sách) để bạn đọc kiểm tra được.',
    };
  }
  const clash = own.some((m) => m.year === year && m.name.toLowerCase() === name.toLowerCase());
  if (clash) return { ok: false, field: 'name', text: 'Mốc này đã có trên dòng thời gian.' };
  const id = `rieng-${own.reduce((top, m) => Math.max(top, Number(m.id.slice(6))), 0) + 1}`;
  return { ok: true, own: [...own, { id, year, name, topic: draft.topic, source, own: true }] };
}

/**
 * Removes a learner's milestone.
 * @param {Milestone[]} own @param {string} id
 * @returns {Milestone[]}
 */
export function removeMilestone(own, id) {
  return own.filter((m) => m.id !== id);
}

/**
 * The timeline of a topic ('all' for every topic), oldest first; among the
 * same year, the given milestones come before the learner's.
 * @param {Milestone[]} own @param {string} topic
 * @returns {Milestone[]}
 */
export function timeline(own, topic) {
  return [...MILESTONES, ...own]
    .filter((m) => topic === 'all' || m.topic === topic)
    .sort((a, b) => a.year - b.year);
}

/**
 * How far the learner's own timeline work is.
 * @param {Milestone[]} own @param {string} topic
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function reviewTimeline(own, topic) {
  const name = (TOPICS.find((t) => t.id === topic) ?? TOPICS[0]).name;
  const onTopic = own.filter((m) => m.topic === topic).length;
  if (own.length === 0) {
    return {
      tone: 'info',
      text: `Dòng thời gian mới có các mốc gợi ý. Hãy tìm và thêm ít nhất 3 mốc về "${name}".`,
    };
  }
  if (onTopic < 3) {
    return {
      tone: 'warn',
      text: `Đã có ${onTopic} mốc của em về "${name}", cần ít nhất 3 mốc. Ưu tiên thành tựu ở Việt Nam và các mốc mới.`,
    };
  }
  return {
    tone: 'ok',
    text: `Tốt: ${onTopic} mốc về "${name}", tất cả đều có nguồn. Hãy nhờ nhóm bạn kiểm tra lại nguồn.`,
  };
}

/** @type {Criterion[]} */
export const CRITERIA = [
  {
    id: 'noi-dung',
    name: 'Nội dung',
    levels: [
      { points: 4, text: 'Đầy đủ, chính xác' },
      { points: 3, text: 'Đầy đủ, có chỗ chưa chính xác' },
      { points: 1.5, text: 'Thiếu nội dung, chưa chính xác' },
    ],
    improve:
      'Đối chiếu lại với các câu hỏi của chủ đề: cơ sở khoa học, quy trình, ưu điểm, hạn chế, kết luận.',
  },
  {
    id: 'trinh-bay',
    name: 'Trình bày sản phẩm',
    levels: [
      { points: 2, text: 'Bố cục rõ, có hình minh hoạ, sáng tạo' },
      { points: 1.5, text: 'Rõ ràng, ít sáng tạo' },
      { points: 1, text: 'Bố cục chưa hợp lí, thiếu minh hoạ' },
    ],
    improve: 'Sắp xếp lại bố cục, chỉ để ý chính trên trang chiếu, thêm sơ đồ quy trình.',
  },
  {
    id: 'tac-phong',
    name: 'Tác phong khi báo cáo',
    levels: [
      { points: 2, text: 'Lưu loát, tự tin, giao tiếp tốt' },
      { points: 1.5, text: 'Lưu loát, ít giao tiếp' },
      { points: 1, text: 'Ngập ngừng, thiếu tự tin' },
    ],
    improve: 'Tập nói trước nhóm, nhìn vào người nghe và chuẩn bị trả lời câu hỏi phản biện.',
  },
  {
    id: 'thai-do',
    name: 'Thái độ, hợp tác',
    levels: [
      { points: 2, text: 'Nộp đúng hạn, hợp tác tốt' },
      { points: 1.5, text: 'Nộp đúng hạn, hợp tác chưa tốt' },
      { points: 1, text: 'Nộp muộn, thiếu hợp tác' },
    ],
    improve: 'Làm lại bảng phân công có hạn cụ thể, cập nhật tiến độ hằng tuần.',
  },
];

/**
 * The total of the chosen points.
 * @param {Record<string, number>} chosen
 * @returns {number}
 */
export function rubricTotal(chosen) {
  return tidy(CRITERIA.reduce((sum, c) => sum + (chosen[c.id] ?? 0), 0));
}

/**
 * The reading of a self-assessment.
 * @param {Record<string, number>} chosen
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function rubricNote(chosen) {
  const missing = CRITERIA.filter((c) => chosen[c.id] === undefined);
  if (missing.length > 0) {
    return { tone: 'info', text: `Còn ${missing.length} tiêu chí chưa chấm.` };
  }
  const total = formatNumber(rubricTotal(chosen));
  /** The criterion furthest below its top mark, the first of a tie. */
  const weakest = CRITERIA.reduce((worst, c) => {
    const gap = (/** @type {Criterion} */ x) => x.levels[0].points - chosen[x.id];
    return gap(c) > gap(worst) ? c : worst;
  });
  const gap = weakest.levels[0].points - chosen[weakest.id];
  if (gap === 0)
    return { tone: 'ok', text: `Tổng ${total}/10 điểm: đạt mức tốt nhất ở mọi tiêu chí.` };
  return {
    tone: gap > 1 ? 'warn' : 'ok',
    text: `Tổng ${total}/10 điểm. Nên cải thiện trước tiêu chí "${weakest.name}": ${weakest.improve}`,
  };
}

/**
 * The project as plain text to copy into a document or a message.
 * @param {{ topic: string, members: string[], own: Milestone[], chosen: Record<string, number> }} project
 */
export function reportText({ topic, members, own, chosen }) {
  const t = TOPICS.find((x) => x.id === topic) ?? TOPICS[0];
  const lines = [`Dự án: Tìm hiểu về một số thành tựu công nghệ tế bào`, `Chủ đề: ${t.name}`, ''];
  lines.push('Phân công:');
  TASKS.forEach((task, i) => lines.push(`- ${task}: ${members[i]?.trim() || '(chưa phân công)'}`));
  lines.push('', 'Mốc thành tựu của nhóm:');
  if (own.length === 0) lines.push('- (chưa có mốc)');
  for (const m of [...own].sort((a, b) => a.year - b.year)) {
    lines.push(`- ${m.year}: ${m.name} (nguồn: ${m.source})`);
  }
  const graded = CRITERIA.filter((c) => chosen[c.id] !== undefined);
  if (graded.length > 0) {
    lines.push('', 'Tự đánh giá:');
    for (const c of graded) lines.push(`- ${c.name}: ${formatNumber(chosen[c.id])} điểm`);
    if (graded.length === CRITERIA.length) {
      lines.push(`- Tổng: ${formatNumber(rubricTotal(chosen))}/10 điểm`);
    }
  }
  return lines.join('\n');
}
