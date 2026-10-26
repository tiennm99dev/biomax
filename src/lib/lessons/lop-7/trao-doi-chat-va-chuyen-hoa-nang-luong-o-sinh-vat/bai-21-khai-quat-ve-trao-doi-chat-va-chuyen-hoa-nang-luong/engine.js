/**
 * Data for the metabolism flow diagram: the arrows of matter and energy that
 * enter and leave a human body and a green plant, what each one carries and
 * what happens to it inside, plus the "find the arrow" questions.
 */

/** @typedef {'nguoi' | 'cay'} Organism */
/** @typedef {'vao' | 'ra'} Direction */
/** @typedef {'chat' | 'nang-luong'} FlowKind */

/**
 * @typedef {object} Flow
 * @property {string} id
 * @property {string} label short name drawn on the arrow
 * @property {Direction} dir
 * @property {FlowKind} kind
 * @property {string} via the organ or body part it passes through
 * @property {string} info what the body does with it
 */

/** @type {Record<Organism, { name: string, energy: string, flows: Flow[] }>} */
export const ORGANISMS = {
  nguoi: {
    name: 'Cơ thể người',
    energy:
      'Hoá năng trong chất dinh dưỡng được giải phóng trong tế bào, chuyển thành năng lượng cho cơ co (động năng), cho mọi hoạt động sống và nhiệt năng giữ ấm cơ thể.',
    flows: [
      {
        id: 'thuc-an',
        label: 'Thức ăn',
        dir: 'vao',
        kind: 'chat',
        via: 'miệng, ống tiêu hoá',
        info: 'Thức ăn được tiêu hoá thành chất dinh dưỡng, hấp thụ vào máu và đưa tới tế bào để xây dựng cơ thể và cung cấp năng lượng.',
      },
      {
        id: 'nuoc-vao',
        label: 'Nước',
        dir: 'vao',
        kind: 'chat',
        via: 'miệng, ống tiêu hoá',
        info: 'Nước được hấp thụ vào máu; nước là thành phần chủ yếu của tế bào và là môi trường cho các phản ứng trong cơ thể.',
      },
      {
        id: 'oxygen',
        label: 'Khí oxygen',
        dir: 'vao',
        kind: 'chat',
        via: 'mũi, phổi',
        info: 'Oxygen từ không khí vào phổi, theo máu đến tế bào, tham gia phân giải chất dinh dưỡng để giải phóng năng lượng.',
      },
      {
        id: 'carbon-dioxide',
        label: 'Khí carbon dioxide',
        dir: 'ra',
        kind: 'chat',
        via: 'phổi, mũi',
        info: 'Carbon dioxide sinh ra khi tế bào phân giải chất dinh dưỡng, theo máu về phổi rồi thải ra ngoài khi thở ra.',
      },
      {
        id: 'phan',
        label: 'Phân',
        dir: 'ra',
        kind: 'chat',
        via: 'ruột già, hậu môn',
        info: 'Phần thức ăn không được hấp thụ tạo thành phân và được thải ra ngoài.',
      },
      {
        id: 'nuoc-tieu',
        label: 'Nước tiểu',
        dir: 'ra',
        kind: 'chat',
        via: 'thận, bóng đái',
        info: 'Thận lọc máu, lấy các chất thải và nước thừa tạo thành nước tiểu.',
      },
      {
        id: 'mo-hoi',
        label: 'Mồ hôi',
        dir: 'ra',
        kind: 'chat',
        via: 'da',
        info: 'Da thải mồ hôi gồm nước và một số chất thải; mồ hôi bay hơi còn giúp hạ nhiệt cơ thể.',
      },
      {
        id: 'nhiet-nguoi',
        label: 'Nhiệt',
        dir: 'ra',
        kind: 'nang-luong',
        via: 'da, hơi thở',
        info: 'Một phần năng lượng giải phóng trong tế bào biến thành nhiệt năng, giữ ấm cơ thể; nhiệt thừa toả ra môi trường.',
      },
    ],
  },
  cay: {
    name: 'Cây xanh',
    energy:
      'Lá hấp thụ quang năng (năng lượng ánh sáng) và chuyển thành hoá năng tích luỹ trong chất hữu cơ; khi tế bào phân giải chất hữu cơ, hoá năng được giải phóng cho các hoạt động sống và một phần toả ra dưới dạng nhiệt.',
    flows: [
      {
        id: 'anh-sang',
        label: 'Ánh sáng',
        dir: 'vao',
        kind: 'nang-luong',
        via: 'lá',
        info: 'Diệp lục trong lá hấp thụ năng lượng ánh sáng (quang năng) để tổng hợp chất hữu cơ.',
      },
      {
        id: 'carbon-dioxide-vao',
        label: 'Khí carbon dioxide',
        dir: 'vao',
        kind: 'chat',
        via: 'lá (khí khổng)',
        info: 'Carbon dioxide trong không khí vào lá, cùng với nước làm nguyên liệu tổng hợp chất hữu cơ.',
      },
      {
        id: 'nuoc-muoi-khoang',
        label: 'Nước, muối khoáng',
        dir: 'vao',
        kind: 'chat',
        via: 'rễ',
        info: 'Rễ hút nước và muối khoáng từ đất; chúng được vận chuyển theo thân lên lá và đến mọi bộ phận của cây.',
      },
      {
        id: 'oxygen-ra',
        label: 'Khí oxygen',
        dir: 'ra',
        kind: 'chat',
        via: 'lá (khí khổng)',
        info: 'Oxygen là sản phẩm được tạo ra khi lá tổng hợp chất hữu cơ, được thải ra môi trường.',
      },
      {
        id: 'hoi-nuoc',
        label: 'Hơi nước',
        dir: 'ra',
        kind: 'chat',
        via: 'lá (khí khổng)',
        info: 'Phần lớn nước rễ hút vào được thoát ra ngoài qua lá dưới dạng hơi nước.',
      },
      {
        id: 'nhiet-cay',
        label: 'Nhiệt',
        dir: 'ra',
        kind: 'nang-luong',
        via: 'toàn cây',
        info: 'Khi tế bào phân giải chất hữu cơ để lấy năng lượng, một phần năng lượng toả ra dưới dạng nhiệt.',
      },
    ],
  },
};

/**
 * @param {Organism} organism
 * @param {Direction} dir
 * @returns {Flow[]}
 */
export function flowsOf(organism, dir) {
  return ORGANISMS[organism].flows.filter((f) => f.dir === dir);
}

/** @typedef {{ organism: Organism, prompt: string, answer: string }} FlowQuestion */

/** "Find the arrow" questions, in quiz order. @type {FlowQuestion[]} */
export const QUESTIONS = [
  { organism: 'nguoi', prompt: 'Chất khí cơ thể người lấy vào qua phổi.', answer: 'oxygen' },
  {
    organism: 'nguoi',
    prompt: 'Chất thải do thận tạo ra khi lọc máu.',
    answer: 'nuoc-tieu',
  },
  {
    organism: 'nguoi',
    prompt: 'Chất khí sinh ra khi tế bào phân giải chất dinh dưỡng.',
    answer: 'carbon-dioxide',
  },
  {
    organism: 'nguoi',
    prompt: 'Chất thải qua da, bay hơi giúp hạ nhiệt cơ thể.',
    answer: 'mo-hoi',
  },
  {
    organism: 'cay',
    prompt: 'Nguồn năng lượng mà lá cây hấp thụ.',
    answer: 'anh-sang',
  },
  {
    organism: 'cay',
    prompt: 'Chất khí cây thải ra khi tổng hợp chất hữu cơ.',
    answer: 'oxygen-ra',
  },
  { organism: 'cay', prompt: 'Những chất rễ cây hút từ đất.', answer: 'nuoc-muoi-khoang' },
];

/**
 * Feedback after the learner taps an arrow for a question.
 * @param {FlowQuestion} q
 * @param {string} flowId
 * @returns {{ ok: boolean, text: string }}
 */
export function answerFeedback(q, flowId) {
  const flows = ORGANISMS[q.organism].flows;
  const picked = flows.find((f) => f.id === flowId);
  const right = flows.find((f) => f.id === q.answer);
  if (!picked || !right) return { ok: false, text: 'Hãy chọn một mũi tên trên sơ đồ.' };
  if (picked.id === right.id) return { ok: true, text: `Đúng: ${right.label}. ${right.info}` };
  const sameDir = picked.dir === right.dir;
  return {
    ok: false,
    text: sameDir
      ? `Chưa đúng: "${picked.label}" đi qua ${picked.via}. Hãy đọc lại câu hỏi.`
      : `Chưa đúng: "${picked.label}" là mũi tên ${picked.dir === 'vao' ? 'đi vào' : 'đi ra'}, còn câu hỏi nói về chất ${right.dir === 'vao' ? 'được lấy vào' : 'được thải ra'}.`,
  };
}
