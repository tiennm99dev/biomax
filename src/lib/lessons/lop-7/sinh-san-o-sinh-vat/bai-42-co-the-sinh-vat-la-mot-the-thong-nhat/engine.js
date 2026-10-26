/**
 * The network of life processes for the lesson "Cơ thể sinh vật là một thể
 * thống nhất": the four processes and the environment as nodes, the links
 * between them with an example each, and what happens to the others when one
 * process stops.
 */

/** @typedef {'moi-truong' | 'trao-doi-chat' | 'cam-ung' | 'sinh-truong' | 'sinh-san'} NodeId */

/**
 * @typedef {{ id: NodeId, label: string, x: number, y: number, tone: string }} Node
 * @typedef {{ a: NodeId, b: NodeId, text: string }} Link
 */

/** Node centres in the 300 × 260 drawing. */
/** @type {Node[]} */
export const NODES = [
  { id: 'moi-truong', label: 'Môi trường', x: 56, y: 40, tone: 'sky' },
  { id: 'cam-ung', label: 'Cảm ứng', x: 230, y: 40, tone: 'violet' },
  {
    id: 'trao-doi-chat',
    label: 'Trao đổi chất và chuyển hoá năng lượng',
    x: 150,
    y: 128,
    tone: 'emerald',
  },
  { id: 'sinh-truong', label: 'Sinh trưởng và phát triển', x: 62, y: 218, tone: 'amber' },
  { id: 'sinh-san', label: 'Sinh sản', x: 238, y: 218, tone: 'rose' },
];

/** @type {Link[]} */
export const LINKS = [
  {
    a: 'moi-truong',
    b: 'trao-doi-chat',
    text: 'Cơ thể lấy từ môi trường khí oxygen, nước, chất dinh dưỡng, chất khoáng (cây còn lấy khí carbon dioxide, ánh sáng để quang hợp) và thải ra môi trường khí carbon dioxide, chất thải.',
  },
  {
    a: 'moi-truong',
    b: 'cam-ung',
    text: 'Môi trường luôn thay đổi, tạo ra các kích thích (ánh sáng, nhiệt độ, nước, va chạm, âm thanh); cơ thể tiếp nhận và phản ứng lại để thích nghi.',
  },
  {
    a: 'trao-doi-chat',
    b: 'cam-ung',
    text: 'Trao đổi chất cung cấp năng lượng cho các phản ứng cảm ứng (mèo chạy, vồ mồi). Ngược lại, cảm ứng giúp sinh vật tìm được thức ăn, nước, ánh sáng cho trao đổi chất (ngọn cây hướng về phía ánh sáng để lá quang hợp).',
  },
  {
    a: 'trao-doi-chat',
    b: 'sinh-truong',
    text: 'Trao đổi chất cung cấp vật chất và năng lượng để tế bào phân chia, lớn lên, giúp cơ thể sinh trưởng, phát triển (cây đậu dùng chất hữu cơ do quang hợp tạo ra để lớn lên). Cơ thể lớn hơn thì trao đổi chất nhiều hơn.',
  },
  {
    a: 'trao-doi-chat',
    b: 'sinh-san',
    text: 'Trao đổi chất cung cấp vật chất và năng lượng để tạo giao tử, ra hoa, tạo quả, hạt, nuôi phôi. Cá thể mới do sinh sản tạo ra lại tiếp tục trao đổi chất.',
  },
  {
    a: 'cam-ung',
    b: 'sinh-truong',
    text: 'Cảm ứng giúp cơ thể sinh trưởng theo hướng có lợi: ngọn cây mọc về phía ánh sáng, rễ mọc về phía nguồn nước và chất dinh dưỡng.',
  },
  {
    a: 'cam-ung',
    b: 'sinh-san',
    text: 'Cảm ứng tham gia vào sinh sản: nhiều cây ra hoa khi gặp ánh sáng, nhiệt độ thích hợp; chim xây tổ, ấp trứng là tập tính sinh sản của động vật.',
  },
  {
    a: 'sinh-truong',
    b: 'sinh-san',
    text: 'Cơ thể phải sinh trưởng, phát triển đến giai đoạn trưởng thành mới sinh sản được (cây đậu đủ lớn mới ra hoa, gà con lớn thành gà mái mới đẻ trứng). Sinh sản tạo ra cá thể mới, cá thể mới lại sinh trưởng, phát triển.',
  },
];

/** @param {string} id */
export function nodeById(id) {
  return NODES.find((n) => n.id === id) ?? null;
}

/**
 * Links touching one node, each with the node at the other end.
 * @param {NodeId} id
 * @returns {Array<{ other: Node, text: string }>}
 */
export function linksOf(id) {
  return LINKS.filter((l) => l.a === id || l.b === id).map((l) => ({
    other: /** @type {Node} */ (nodeById(l.a === id ? l.b : l.a)),
    text: l.text,
  }));
}

/** What breaks when one node stops working, and which other processes it drags down. */
/** @type {Record<NodeId, { text: string, affects: NodeId[] }>} */
export const STOP = {
  'moi-truong': {
    text: 'Cơ thể bị tách khỏi môi trường: không lấy được khí oxygen, nước, chất dinh dưỡng, không thải được chất thải nên trao đổi chất ngừng, kéo theo mọi hoạt động sống khác ngừng. Sinh vật sẽ chết.',
    affects: ['trao-doi-chat', 'cam-ung', 'sinh-truong', 'sinh-san'],
  },
  'trao-doi-chat': {
    text: 'Không còn vật chất và năng lượng: tế bào không phân chia, cơ thể không lớn, không sinh sản, không phản ứng được với kích thích. Sinh vật sẽ chết.',
    affects: ['cam-ung', 'sinh-truong', 'sinh-san'],
  },
  'cam-ung': {
    text: 'Cơ thể không phản ứng được với thay đổi của môi trường: khó tìm thức ăn, nước, ánh sáng, khó tránh kẻ thù, nên trao đổi chất, sinh trưởng và sinh sản đều bị ảnh hưởng.',
    affects: ['trao-doi-chat', 'sinh-truong', 'sinh-san'],
  },
  'sinh-truong': {
    text: 'Cơ thể không lớn lên, không đạt tới giai đoạn trưởng thành nên không sinh sản được.',
    affects: ['sinh-san'],
  },
  'sinh-san': {
    text: 'Cá thể vẫn sống, nhưng không tạo ra thế hệ mới; khi các cá thể già và chết đi, loài không được duy trì.',
    affects: [],
  },
};

/**
 * Whether a link is drawn highlighted for the selected node.
 * @param {Link} link @param {NodeId | null} selected
 */
export function isLit(link, selected) {
  return selected !== null && (link.a === selected || link.b === selected);
}

/**
 * The live sentence for the selected node and the "what if it stops" switch.
 * @param {NodeId | null} selected @param {boolean} stopped
 */
export function networkText(selected, stopped) {
  if (selected === null)
    return 'Bấm vào một ô để xem nó liên hệ với các hoạt động sống khác ra sao.';
  const node = /** @type {Node} */ (nodeById(selected));
  if (stopped) return `Giả sử "${node.label}" ngừng lại: ${STOP[selected].text}`;
  return `"${node.label}" liên hệ với ${linksOf(selected).length} ô khác (các đường được tô đậm). Đọc từng mối quan hệ bên dưới.`;
}
