/**
 * Logic for the leaf model: the learner puts things into a leaf; the three
 * that photosynthesis needs (water, carbon dioxide, light) fill the left side
 * of the word equation, anything else is turned away with a reason. Once all
 * three are in, the leaf makes glucose and gives off oxygen.
 */

/**
 * @typedef {object} Token
 * @property {string} id
 * @property {string} label
 * @property {boolean} needed whether photosynthesis uses it as an input
 * @property {string} why shown when it is put into the leaf
 */

/** Everything the learner can offer the leaf, in display order. @type {Token[]} */
export const TOKENS = [
  {
    id: 'nuoc',
    label: 'Nước',
    needed: true,
    why: 'Nước được rễ hút từ đất, theo mạch dẫn trong thân và gân lá đến tế bào lá.',
  },
  {
    id: 'oxygen',
    label: 'Khí oxygen',
    needed: false,
    why: 'Oxygen là sản phẩm của quang hợp, được lá thải ra, không phải nguyên liệu.',
  },
  {
    id: 'carbon-dioxide',
    label: 'Khí carbon dioxide',
    needed: true,
    why: 'Carbon dioxide trong không khí đi vào lá qua khí khổng ở lớp biểu bì lá.',
  },
  {
    id: 'glucose',
    label: 'Glucose',
    needed: false,
    why: 'Glucose là chất hữu cơ do lá tạo ra khi quang hợp, là sản phẩm chứ không phải nguyên liệu.',
  },
  {
    id: 'anh-sang',
    label: 'Ánh sáng',
    needed: true,
    why: 'Diệp lục trong lục lạp hấp thụ năng lượng ánh sáng; đây là điều kiện để quang hợp xảy ra.',
  },
  {
    id: 'bong-toi',
    label: 'Bóng tối',
    needed: false,
    why: 'Trong bóng tối, diệp lục không nhận được năng lượng ánh sáng nên lá không quang hợp.',
  },
];

/** Ids of the three inputs, in the order the equation names them. */
export const INPUTS = ['nuoc', 'carbon-dioxide', 'anh-sang'];

/**
 * Result of putting a token into the leaf.
 * @param {string[]} inLeaf ids already in the leaf
 * @param {string} id
 * @returns {{ inLeaf: string[], ok: boolean, text: string }}
 */
export function offer(inLeaf, id) {
  const t = TOKENS.find((x) => x.id === id);
  if (!t) return { inLeaf, ok: false, text: 'Không có thứ này.' };
  if (!t.needed) return { inLeaf, ok: false, text: `Chưa đúng: ${t.why}` };
  if (inLeaf.includes(id)) return { inLeaf, ok: true, text: `${t.label} đã có trong lá rồi.` };
  const next = [...inLeaf, id];
  const missing = INPUTS.length - next.length;
  return {
    inLeaf: next,
    ok: true,
    text: `Đúng: ${t.why}${missing > 0 ? ` Còn thiếu ${missing} thứ nữa.` : ' Đã đủ nguyên liệu và điều kiện: bấm "Quang hợp".'}`,
  };
}

/**
 * Which parts of the word equation are shown: one term per input already in
 * the leaf, and the products once the leaf has photosynthesised.
 * @param {string[]} inLeaf
 * @param {boolean} made
 */
export function equationParts(inLeaf, made) {
  return {
    nuoc: inLeaf.includes('nuoc'),
    carbonDioxide: inLeaf.includes('carbon-dioxide'),
    anhSang: inLeaf.includes('anh-sang'),
    products: made,
  };
}

/** @param {string[]} inLeaf */
export function ready(inLeaf) {
  return INPUTS.every((id) => inLeaf.includes(id));
}

/** @typedef {import('#lib/domain/diagrams.js').Diagram} Diagram */

/**
 * The leaf as the organ of photosynthesis: a whole leaf on the left and a
 * magnified piece of its blade on the right, for `diagram-hotspots`.
 * @type {Diagram}
 */
export const LEAF_DIAGRAM = {
  id: 'la-cay-quang-hop',
  title: 'Cấu tạo của lá phù hợp với chức năng quang hợp',
  width: 420,
  height: 260,
  shapes: [
    { kind: 'path', d: 'M 20 230 L 70 190', stroke: '#15803d', width: 6 },
    {
      kind: 'path',
      d: 'M 70 190 Q 40 60 190 20 Q 220 160 70 190 Z',
      fill: '#4ade80',
      stroke: '#166534',
      width: 3,
    },
    { kind: 'path', d: 'M 70 190 Q 120 110 186 26', fill: 'none', stroke: '#15803d', width: 3 },
    {
      kind: 'path',
      d: 'M 100 148 l -26 -30 M 128 108 l -30 -24 M 100 148 l 40 4 M 128 108 l 44 2',
      stroke: '#15803d',
      width: 2,
    },
    {
      kind: 'circle',
      cx: 165,
      cy: 110,
      r: 14,
      fill: 'none',
      stroke: '#0f172a',
      width: 2,
      dash: '4 3',
    },
    { kind: 'line', x1: 179, y1: 110, x2: 236, y2: 110, stroke: '#0f172a', width: 2, dash: '4 3' },
    {
      kind: 'rect',
      x: 236,
      y: 30,
      w: 172,
      h: 200,
      rx: 14,
      fill: '#ecfccb',
      stroke: '#0f172a',
      width: 2,
    },
    { kind: 'rect', x: 244, y: 38, w: 156, h: 14, rx: 4, fill: '#f0fdf4', stroke: '#65a30d' },
    { kind: 'rect', x: 244, y: 56, w: 34, h: 70, rx: 6, fill: '#bbf7d0', stroke: '#166534' },
    { kind: 'rect', x: 284, y: 56, w: 34, h: 70, rx: 6, fill: '#bbf7d0', stroke: '#166534' },
    { kind: 'rect', x: 324, y: 56, w: 34, h: 70, rx: 6, fill: '#bbf7d0', stroke: '#166534' },
    { kind: 'rect', x: 364, y: 56, w: 34, h: 70, rx: 6, fill: '#bbf7d0', stroke: '#166534' },
    { kind: 'ellipse', cx: 261, cy: 74, rx: 7, ry: 4, fill: '#15803d' },
    { kind: 'ellipse', cx: 261, cy: 104, rx: 7, ry: 4, fill: '#15803d' },
    { kind: 'ellipse', cx: 301, cy: 84, rx: 7, ry: 4, fill: '#15803d' },
    { kind: 'ellipse', cx: 341, cy: 74, rx: 7, ry: 4, fill: '#15803d' },
    { kind: 'ellipse', cx: 381, cy: 96, rx: 7, ry: 4, fill: '#15803d' },
    { kind: 'circle', cx: 300, cy: 160, r: 14, fill: '#fef9c3', stroke: '#a16207', width: 2 },
    { kind: 'ellipse', cx: 270, cy: 160, rx: 14, ry: 10, fill: '#d9f99d', stroke: '#65a30d' },
    { kind: 'ellipse', cx: 360, cy: 160, rx: 22, ry: 12, fill: '#d9f99d', stroke: '#65a30d' },
    { kind: 'rect', x: 244, y: 200, w: 156, h: 14, rx: 4, fill: '#f0fdf4', stroke: '#65a30d' },
    {
      kind: 'ellipse',
      cx: 352,
      cy: 207,
      rx: 10,
      ry: 5,
      fill: '#ffffff',
      stroke: '#166534',
      width: 2,
    },
    { kind: 'text', x: 322, y: 246, text: 'Một phần phiến lá phóng to', size: 11, fill: '#334155' },
  ],
  parts: [
    {
      id: 'phien-la',
      name: 'Phiến lá',
      accept: ['phiến'],
      info: 'Dạng bản dẹt, rộng, giúp lá nhận được nhiều ánh sáng.',
      x: 112,
      y: 72,
    },
    {
      id: 'gan-la',
      name: 'Gân lá',
      accept: ['gân'],
      info: 'Chứa mạch dẫn: đưa nước đến tế bào lá và đưa chất hữu cơ do lá tạo ra đi nuôi cây.',
      x: 150,
      y: 128,
    },
    {
      id: 'cuong-la',
      name: 'Cuống lá',
      accept: ['cuống'],
      info: 'Nối phiến lá với cành, thân; mạch dẫn đi qua cuống vào gân lá.',
      x: 40,
      y: 214,
    },
    {
      id: 'luc-lap',
      name: 'Lục lạp',
      accept: ['lục lạp chứa diệp lục'],
      info: 'Bào quan chứa diệp lục, hấp thụ năng lượng ánh sáng; là nơi diễn ra quang hợp. Tế bào thịt lá có rất nhiều lục lạp.',
      x: 301,
      y: 98,
    },
    {
      id: 'khi-khong',
      name: 'Khí khổng',
      accept: ['lỗ khí'],
      info: 'Lỗ nhỏ ở lớp biểu bì lá: khí carbon dioxide đi vào, khí oxygen và hơi nước đi ra.',
      x: 352,
      y: 190,
    },
    {
      id: 'bieu-bi',
      name: 'Biểu bì lá',
      accept: ['lớp biểu bì', 'biểu bì'],
      info: 'Lớp tế bào trong suốt bọc ngoài lá, cho ánh sáng đi qua vào tế bào thịt lá.',
      x: 270,
      y: 45,
    },
  ],
};
