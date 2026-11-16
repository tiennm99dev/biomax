/**
 * The first-aid decision tree of the lesson. Each question looks at the
 * person who ate the suspect food; a yes or a no leads to the next question
 * or to what to do. Cases describe a person, so the widget can check each
 * answer against the description and explain a wrong turn. The steps follow
 * the usual first-aid advice for food poisoning; they never replace a doctor.
 * No DOM here, so it is tested in Node.
 */

/**
 * @typedef {'tinh' | 'nang' | 'an-mon' | 'nguy-co' | 'moi-an'} QuestionId
 * @typedef {{ id: QuestionId, text: string, yes: string, no: string, why: string }} Question
 * @typedef {{ id: string, title: string, tone: 'warn' | 'info' | 'ok', steps: string[] }} Action
 * @typedef {{ id: string, name: string, story: string, facts: Record<QuestionId, boolean> }} Case
 */

/** Done in every case of suspected food poisoning. */
export const ALWAYS = [
  'Giữ lại thức ăn còn thừa, vỏ bao bì và chất nôn để cơ sở y tế xét nghiệm tìm nguyên nhân.',
  'Nếu nhiều người cùng ăn bữa đó có triệu chứng, báo ngay cho trạm y tế hoặc cơ quan y tế gần nhất.',
];

/** @type {Question[]} */
export const QUESTIONS = [
  {
    id: 'tinh',
    text: 'Người bệnh có tỉnh táo, gọi hỏi trả lời được không?',
    yes: 'nang',
    no: 'hon-me',
    why: 'Người lơ mơ, hôn mê không tự bảo vệ được đường thở: chất nôn dễ trào vào phổi.',
  },
  {
    id: 'nang',
    text: 'Có dấu hiệu nặng không: khó thở, co giật, yếu cơ, sụp mí, khó nuốt, nôn hoặc đi ngoài ra máu, lả đi, da lạnh?',
    yes: 'cap-cuu',
    no: 'an-mon',
    why: 'Đây là các dấu hiệu đe doạ tính mạng (mất nước nặng, chất độc tác động lên thần kinh), cần cấp cứu ngay.',
  },
  {
    id: 'an-mon',
    text: 'Có nghi nuốt phải chất ăn mòn (axit, kiềm, chất tẩy rửa) hoặc xăng dầu không?',
    yes: 'khong-gay-non',
    no: 'nguy-co',
    why: 'Nôn ra, chất ăn mòn làm bỏng thực quản lần nữa; xăng dầu dễ bị hít vào phổi.',
  },
  {
    id: 'nguy-co',
    text: 'Người bệnh là trẻ nhỏ, người cao tuổi, phụ nữ có thai hoặc người có bệnh mạn tính?',
    yes: 'den-y-te',
    no: 'moi-an',
    why: 'Những người này mất nước nhanh, dễ biến chứng; không tự gây nôn cho trẻ nhỏ.',
  },
  {
    id: 'moi-an',
    text: 'Người bệnh vừa ăn phải thức ăn nghi gây ngộ độc (trong vài giờ) và chưa nôn được?',
    yes: 'gay-non',
    no: 'bu-nuoc',
    why: 'Gây nôn sớm giúp tống phần thức ăn còn trong dạ dày ra ngoài; khi đã nôn, tiêu chảy nhiều thì việc chính là bù nước.',
  },
];

/** @type {Action[]} */
export const ACTIONS = [
  {
    id: 'hon-me',
    title: 'Gọi cấp cứu 115, đặt nằm nghiêng an toàn',
    tone: 'warn',
    steps: [
      'Gọi cấp cứu 115 hoặc đưa ngay đến cơ sở y tế gần nhất.',
      'Đặt người bệnh nằm nghiêng an toàn, đầu hơi thấp để chất nôn chảy ra ngoài, không trào vào đường thở.',
      'Không gây nôn, không cho ăn uống gì; nới rộng quần áo, theo dõi nhịp thở trong khi chờ.',
    ],
  },
  {
    id: 'cap-cuu',
    title: 'Cấp cứu ngay',
    tone: 'warn',
    steps: [
      'Gọi cấp cứu 115 hoặc đưa ngay đến cơ sở y tế gần nhất.',
      'Không tự gây nôn khi người bệnh co giật hoặc khó thở; cho nằm nghiêng nếu đang nôn.',
      'Không tự dùng thuốc; mang theo thức ăn nghi gây ngộ độc.',
    ],
  },
  {
    id: 'khong-gay-non',
    title: 'Không gây nôn, đưa đến cơ sở y tế',
    tone: 'warn',
    steps: [
      'Tuyệt đối không gây nôn.',
      'Đưa ngay đến cơ sở y tế, mang theo chai, lọ hoặc nhãn của hoá chất.',
    ],
  },
  {
    id: 'den-y-te',
    title: 'Bù nước và đưa đến cơ sở y tế sớm',
    tone: 'info',
    steps: [
      'Cho uống dung dịch oresol pha đúng hướng dẫn trên gói, từng ngụm nhỏ.',
      'Không tự gây nôn cho trẻ nhỏ; đưa người bệnh đến cơ sở y tế để được khám và theo dõi.',
    ],
  },
  {
    id: 'gay-non',
    title: 'Gây nôn, rồi bù nước và theo dõi',
    tone: 'info',
    steps: [
      'Cho uống một cốc nước ấm rồi dùng ngón tay sạch hoặc tăm bông ngoáy họng để gây nôn; để người bệnh cúi đầu ra trước khi nôn.',
      'Sau khi nôn, cho uống oresol pha đúng hướng dẫn để bù nước và chất điện giải.',
      'Theo dõi; đến cơ sở y tế nếu triệu chứng không đỡ hoặc nặng lên.',
    ],
  },
  {
    id: 'bu-nuoc',
    title: 'Bù nước, nghỉ ngơi, theo dõi',
    tone: 'ok',
    steps: [
      'Cho uống oresol pha đúng hướng dẫn (không pha đặc hơn), uống từng ngụm nhỏ, nhiều lần.',
      'Nghỉ ngơi, ăn thức ăn lỏng, dễ tiêu khi đỡ nôn.',
      'Không tự ý uống thuốc cầm tiêu chảy hay kháng sinh: tiêu chảy giúp tống mầm bệnh, chất độc ra ngoài.',
      'Đến cơ sở y tế nếu sốt cao, đi ngoài ra máu, triệu chứng kéo dài hơn 2 – 3 ngày hoặc có dấu hiệu mất nước (khát nhiều, tiểu ít, mắt trũng).',
    ],
  },
];

/** @type {Case[]} */
export const CASES = [
  {
    id: 'lan',
    name: 'Chị Lan',
    story:
      'Chị Lan, 30 tuổi, ăn gỏi cá từ tối qua. Sáng nay chị đã nôn nhiều lần và đi ngoài phân lỏng 4 lần, hơi mệt nhưng tỉnh táo, nói chuyện bình thường.',
    facts: { tinh: true, nang: false, 'an-mon': false, 'nguy-co': false, 'moi-an': false },
  },
  {
    id: 'hung',
    name: 'Anh Hùng',
    story:
      'Anh Hùng, 25 tuổi, ăn nộm sứa ở quán lạ cách đây khoảng 1 giờ, thấy buồn nôn, đau bụng nhưng chưa nôn được. Anh tỉnh táo, không khó thở.',
    facts: { tinh: true, nang: false, 'an-mon': false, 'nguy-co': false, 'moi-an': true },
  },
  {
    id: 'ba-tu',
    name: 'Bà Tư',
    story:
      'Bà Tư, 75 tuổi, sau bữa trưa có món thịt để từ hôm trước, bị nôn và tiêu chảy nhiều lần. Bà vẫn tỉnh, trả lời được, không khó thở.',
    facts: { tinh: true, nang: false, 'an-mon': false, 'nguy-co': true, 'moi-an': false },
  },
  {
    id: 'minh',
    name: 'Ông Minh',
    story:
      'Ông Minh ăn pate đóng hộp phồng nắp. Hôm sau ông thấy nhìn mờ, sụp mí mắt, nói và nuốt khó, tay chân yếu nhưng vẫn tỉnh.',
    facts: { tinh: true, nang: true, 'an-mon': false, 'nguy-co': false, 'moi-an': false },
  },
  {
    id: 'be-na',
    name: 'Bé Na',
    story:
      'Bé Na, 4 tuổi, lỡ uống mấy ngụm nước tẩy rửa đựng trong chai nước ngọt. Bé khóc, đau rát miệng, vẫn tỉnh và thở bình thường.',
    facts: { tinh: true, nang: false, 'an-mon': true, 'nguy-co': true, 'moi-an': true },
  },
  {
    id: 'chu-ba',
    name: 'Chú Ba',
    story: 'Chú Ba ăn nấm hái trong rừng. Vài giờ sau chú nôn nhiều, rồi lơ mơ, gọi không trả lời.',
    facts: { tinh: false, nang: true, 'an-mon': false, 'nguy-co': false, 'moi-an': true },
  },
];

/** @param {string} id */
export const questionOf = (id) => QUESTIONS.find((q) => q.id === id) ?? null;
/** @param {string} id */
export const actionOf = (id) => ACTIONS.find((a) => a.id === id) ?? null;
/** @param {string} id */
export const caseOf = (id) => CASES.find((c) => c.id === id) ?? null;

export const START = 'tinh';

/**
 * The node after answering a question.
 * @param {string} nodeId @param {boolean} yes
 */
export function next(nodeId, yes) {
  const q = questionOf(nodeId);
  if (!q) return nodeId;
  return yes ? q.yes : q.no;
}

/**
 * Walks the tree with a case's facts and returns the path of question ids
 * and the action reached.
 * @param {Case} c
 */
export function walk(c) {
  /** @type {QuestionId[]} */
  const path = [];
  let node = START;
  let q = questionOf(node);
  while (q) {
    path.push(q.id);
    node = next(node, c.facts[q.id]);
    q = questionOf(node);
  }
  return { path, action: /** @type {Action} */ (actionOf(node)) };
}

/**
 * Checks an answer against the case. Without a case every answer is taken.
 * @param {Case | null} c @param {string} nodeId @param {boolean} yes
 * @returns {{ ok: boolean, text: string }}
 */
export function checkAnswer(c, nodeId, yes) {
  const q = questionOf(nodeId);
  if (!q) return { ok: false, text: 'Đã đến bước xử lí.' };
  if (!c) return { ok: true, text: q.why };
  if (c.facts[q.id] === yes) return { ok: true, text: q.why };
  return {
    ok: false,
    text: `Chưa khớp với tình huống của ${c.name}. Đọc lại mô tả và chú ý: ${q.why.charAt(0).toLowerCase()}${q.why.slice(1)}`,
  };
}
