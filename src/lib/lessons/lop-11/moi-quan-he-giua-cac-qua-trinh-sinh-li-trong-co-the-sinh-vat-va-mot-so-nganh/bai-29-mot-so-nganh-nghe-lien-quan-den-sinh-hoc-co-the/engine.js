/**
 * The four groups of occupations the lesson presents, an interest quiz that
 * scores a learner's answers against them, and the cards of the sorting
 * activity (an application of body biology and the field that uses it).
 */

/** @typedef {'y-duoc' | 'thuy-san' | 'nong-nghiep' | 'lam-nghiep'} Field */
/**
 * @typedef {{
 *   name: string,
 *   careers: string,
 *   knowledge: string,
 *   workplaces: string,
 * }} FieldInfo
 */
/** @typedef {{ text: string, field: Field }} Choice */
/** @typedef {{ id: string, prompt: string, choices: Choice[] }} Question */

/** @type {Field[]} */
export const FIELD_ORDER = ['y-duoc', 'thuy-san', 'nong-nghiep', 'lam-nghiep'];

/** @type {Record<Field, FieldInfo>} */
export const FIELDS = {
  'y-duoc': {
    name: 'Y học, dược học',
    careers: 'bác sĩ, bác sĩ pháp y, bác sĩ y học thể thao, dược sĩ, kĩ thuật viên y học',
    knowledge:
      'giải phẫu, sinh lí người, sinh lí bệnh: cơ sở để chẩn đoán, điều trị bệnh, bào chế thuốc, vaccine và nâng cao sức khoẻ',
    workplaces: 'bệnh viện, phòng khám, phòng xét nghiệm, nhà thuốc, công ti dược, viện nghiên cứu',
  },
  'thuy-san': {
    name: 'Nuôi trồng thuỷ sản',
    careers: 'kĩ sư nuôi trồng thuỷ sản, nghiên cứu viên, kĩ thuật viên thuỷ sản',
    knowledge:
      'sinh sản, sinh trưởng, dinh dưỡng, hô hấp của tôm, cá: cải tạo giống, cho đẻ nhân tạo, cải thiện điều kiện nuôi, kiểm soát dịch bệnh',
    workplaces:
      'trại giống, ao, đầm, lồng bè nuôi, viện nghiên cứu thuỷ sản, doanh nghiệp thức ăn thuỷ sản',
  },
  'nong-nghiep': {
    name: 'Trồng trọt, chăn nuôi, thú y',
    careers: 'kĩ sư trồng trọt, kĩ sư chăn nuôi, bác sĩ thú y, kĩ sư công nghệ sinh học',
    knowledge:
      'dinh dưỡng, quang hợp, sinh trưởng, sinh sản của cây trồng, vật nuôi: chọn giống, nhân giống, chăm sóc, phòng trị bệnh để tăng năng suất, chất lượng',
    workplaces:
      'trang trại, nhà kính, trung tâm giống, phòng khám thú y, phòng nuôi cấy mô, doanh nghiệp nông nghiệp',
  },
  'lam-nghiep': {
    name: 'Lâm nghiệp',
    careers: 'kĩ sư lâm nghiệp, nghiên cứu viên, kĩ thuật viên lâm nghiệp, kiểm lâm',
    knowledge:
      'đặc điểm sinh học của cây rừng và động vật hoang dã: chọn loài cây trồng rừng, cây xanh đô thị, biện pháp sinh học bảo vệ rừng và động vật quý hiếm',
    workplaces:
      'vườn quốc gia, khu bảo tồn, vườn ươm, công ti lâm nghiệp, viện nghiên cứu lâm nghiệp',
  },
};

/** @type {Question[]} */
export const QUESTIONS = [
  {
    id: 'ranh',
    prompt: 'Lúc rảnh, em thích làm gì nhất?',
    choices: [
      { text: 'Đọc về cơ thể người, cách phòng và chữa bệnh', field: 'y-duoc' },
      { text: 'Nuôi cá cảnh, tìm hiểu tôm, cá ở sông, biển', field: 'thuy-san' },
      { text: 'Trồng rau, hoa hoặc chăm sóc vật nuôi trong nhà', field: 'nong-nghiep' },
      { text: 'Đi dã ngoại trong rừng, quan sát cây và chim thú hoang dã', field: 'lam-nghiep' },
    ],
  },
  {
    id: 'chu-de',
    prompt: 'Chủ đề nào của Sinh học cơ thể làm em hứng thú nhất?',
    choices: [
      { text: 'Tuần hoàn, miễn dịch, bài tiết ở người', field: 'y-duoc' },
      { text: 'Hô hấp bằng mang, sinh sản của cá', field: 'thuy-san' },
      {
        text: 'Dinh dưỡng khoáng, quang hợp ở cây trồng; sinh trưởng của vật nuôi',
        field: 'nong-nghiep',
      },
      {
        text: 'Thoát hơi nước, sinh trưởng của cây gỗ; tập tính của động vật hoang dã',
        field: 'lam-nghiep',
      },
    ],
  },
  {
    id: 'noi-lam',
    prompt: 'Em muốn làm việc ở đâu?',
    choices: [
      { text: 'Bệnh viện, phòng xét nghiệm, nhà thuốc', field: 'y-duoc' },
      { text: 'Trại giống, đầm nuôi ven biển, lồng bè', field: 'thuy-san' },
      { text: 'Trang trại, nhà kính, phòng khám thú y', field: 'nong-nghiep' },
      { text: 'Vườn quốc gia, khu bảo tồn, vườn ươm cây rừng', field: 'lam-nghiep' },
    ],
  },
  {
    id: 'van-de',
    prompt: 'Em muốn góp phần giải quyết vấn đề nào?',
    choices: [
      { text: 'Bệnh tật, sức khoẻ cộng đồng', field: 'y-duoc' },
      { text: 'Dịch bệnh trên tôm, cá; nguồn thực phẩm từ biển', field: 'thuy-san' },
      { text: 'An ninh lương thực; dịch bệnh trên gia súc, gia cầm', field: 'nong-nghiep' },
      { text: 'Mất rừng, suy giảm đa dạng sinh học', field: 'lam-nghiep' },
    ],
  },
  {
    id: 'viec',
    prompt: 'Công việc nào em muốn thử nhất?',
    choices: [
      { text: 'Đo huyết áp, đọc kết quả xét nghiệm máu', field: 'y-duoc' },
      { text: 'Tiêm hormone cho cá bố mẹ đẻ, theo dõi trứng nở', field: 'thuy-san' },
      { text: 'Nhân giống hoa lan bằng nuôi cấy mô', field: 'nong-nghiep' },
      { text: 'Ươm cây giống trồng rừng ngập mặn', field: 'lam-nghiep' },
    ],
  },
];

/**
 * The points each field gets from the answers given so far (question id →
 * chosen field).
 * @param {Record<string, Field>} answers
 * @returns {Record<Field, number>}
 */
export function scores(answers) {
  /** @type {Record<Field, number>} */
  const s = { 'y-duoc': 0, 'thuy-san': 0, 'nong-nghiep': 0, 'lam-nghiep': 0 };
  for (const q of QUESTIONS) {
    const f = answers[q.id];
    if (f) s[f] += 1;
  }
  return s;
}

/**
 * The fields with the most points (several on a tie), empty before any
 * answer.
 * @param {Record<string, Field>} answers
 * @returns {Field[]}
 */
export function topFields(answers) {
  const s = scores(answers);
  const best = Math.max(...FIELD_ORDER.map((f) => s[f]));
  return best === 0 ? [] : FIELD_ORDER.filter((f) => s[f] === best);
}

/**
 * The advice line after the quiz.
 * @param {Record<string, Field>} answers
 */
export function adviceText(answers) {
  const done = QUESTIONS.filter((q) => answers[q.id]).length;
  if (done < QUESTIONS.length) {
    return `Em đã trả lời ${done}/${QUESTIONS.length} câu. Trả lời hết để xem gợi ý.`;
  }
  const top = topFields(answers).map((f) => FIELDS[f].name.toLowerCase());
  const s = scores(answers);
  const best = s[topFields(answers)[0]];
  const which = top.length === 1 ? `nhóm ngành ${top[0]}` : `các nhóm ngành ${top.join('; ')}`;
  return `Sở thích của em gần nhất với ${which} (${best}/${QUESTIONS.length} câu). Đây chỉ là gợi ý từ sở thích: hãy kết hợp với năng lực học tập, sức khoẻ, điều kiện gia đình và nhu cầu xã hội trước khi chọn ngành.`;
}

/** @type {import('#lib/core/card-sorter.js').SortBin[]} */
export const APPLICATION_BINS = FIELD_ORDER.map((f) => ({ id: f, label: FIELDS[f].name }));

/** @type {import('#lib/core/card-sorter.js').SortCard[]} */
export const APPLICATION_CARDS = [
  {
    id: 'xet-nghiem',
    label: 'Chẩn đoán bệnh dựa vào xét nghiệm máu, đo huyết áp, nhịp tim',
    bin: 'y-duoc',
    why: 'Dựa vào chỉ số sinh lí của người để chẩn đoán bệnh: việc của ngành y.',
  },
  {
    id: 'phap-y',
    label: 'Xác định nguyên nhân tử vong qua dấu hiệu tổn thương, nhiễm độc trên cơ thể',
    bin: 'y-duoc',
    why: 'Đó là công việc của bác sĩ pháp y, thuộc ngành y.',
  },
  {
    id: 'vaccine',
    label: 'Nghiên cứu, sản xuất vaccine và thuốc chữa bệnh cho người',
    bin: 'y-duoc',
    why: 'Bào chế thuốc, vaccine dựa trên hiểu biết về sinh lí và miễn dịch của người: ngành dược.',
  },
  {
    id: 'ca-de',
    label: 'Tiêm hormone kích thích cá bố mẹ đẻ trứng hàng loạt',
    bin: 'thuy-san',
    why: 'Sinh sản nhân tạo ở cá dựa trên hiểu biết về điều hoà sinh sản bằng hormone: ngành thuỷ sản.',
  },
  {
    id: 'ao-tom',
    label: 'Điều chỉnh nhiệt độ, lượng oxygen hoà tan trong ao nuôi tôm',
    bin: 'thuy-san',
    why: 'Cải thiện điều kiện nuôi theo nhu cầu hô hấp, sinh trưởng của tôm: ngành thuỷ sản.',
  },
  {
    id: 'lan',
    label: 'Nhân giống hoa lan sạch bệnh bằng nuôi cấy mô',
    bin: 'nong-nghiep',
    why: 'Nuôi cấy mô dựa trên tính toàn năng của tế bào thực vật, ứng dụng trong trồng trọt.',
  },
  {
    id: 'tho-tinh-bo',
    label: 'Thụ tinh nhân tạo cho bò bằng tinh trùng của bò đực giống tốt',
    bin: 'nong-nghiep',
    why: 'Ứng dụng hiểu biết về sinh sản của vật nuôi trong chăn nuôi.',
  },
  {
    id: 'vaccine-ga',
    label: 'Tiêm vaccine phòng cúm cho đàn gà',
    bin: 'nong-nghiep',
    why: 'Phòng bệnh cho vật nuôi là việc của ngành thú y.',
  },
  {
    id: 'rung-phong-ho',
    label: 'Chọn loài cây chịu mặn để trồng rừng phòng hộ ven biển',
    bin: 'lam-nghiep',
    why: 'Chọn loài cây trồng rừng theo đặc điểm sinh học của cây: ngành lâm nghiệp.',
  },
  {
    id: 'thien-dich',
    label: 'Thả thiên địch để diệt sâu hại rừng thông',
    bin: 'lam-nghiep',
    why: 'Biện pháp sinh học bảo vệ rừng: ngành lâm nghiệp.',
  },
  {
    id: 'bao-ton',
    label: 'Cứu hộ, nhân nuôi động vật hoang dã quý hiếm',
    bin: 'lam-nghiep',
    why: 'Bảo vệ động vật rừng quý hiếm là nhiệm vụ của ngành lâm nghiệp.',
  },
];
