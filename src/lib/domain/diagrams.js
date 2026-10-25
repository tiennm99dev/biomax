/**
 * Labelled biology diagrams drawn as plain SVG shapes, with the named parts
 * a learner taps: hotspot positions, names (with accepted spellings) and a
 * one-line role. Pure data plus the helpers the hotspot component and its
 * tests use: validation, hit testing, answer checking and a seeded quiz order.
 */

/**
 * @typedef {{ fill?: string, stroke?: string, width?: number, dash?: string, opacity?: number }} Paint
 * @typedef {(
 *   | { kind: 'circle', cx: number, cy: number, r: number }
 *   | { kind: 'ellipse', cx: number, cy: number, rx: number, ry: number, rotate?: number }
 *   | { kind: 'rect', x: number, y: number, w: number, h: number, rx?: number }
 *   | { kind: 'path', d: string }
 *   | { kind: 'line', x1: number, y1: number, x2: number, y2: number }
 *   | { kind: 'text', x: number, y: number, text: string, size?: number }
 * ) & Paint} Shape
 * @typedef {{
 *   id: string;
 *   name: string;
 *   accept?: string[];
 *   info: string;
 *   x: number;
 *   y: number;
 * }} Part
 * @typedef {{
 *   id: string;
 *   title: string;
 *   width: number;
 *   height: number;
 *   shapes: Shape[];
 *   parts: Part[];
 * }} Diagram
 */

/** Smallest distance between two hotspot centres, so markers never overlap. */
export const MIN_HOTSPOT_GAP = 26;

/**
 * Wavy membrane strands of the rough endoplasmic reticulum.
 * @param {number} x0 @param {number} y0 @param {number} count @param {number} len
 */
function erStrands(x0, y0, count, len) {
  /** @type {Shape[]} */
  const out = [];
  for (let i = 0; i < count; i++) {
    const y = y0 + i * 18;
    const waves = Math.round(len / 20);
    let d = `M ${x0} ${y}`;
    for (let k = 0; k < waves; k++) d += ` q 5 ${k % 2 ? 6 : -6} 10 0 q 5 ${k % 2 ? -6 : 6} 10 0`;
    out.push({ kind: 'path', d, fill: 'none', stroke: '#2563eb', width: 3 });
    for (let k = 0; k <= waves; k += 1) {
      out.push({ kind: 'circle', cx: x0 + k * 20, cy: y - 5, r: 2.5, fill: '#1e3a8a' });
    }
  }
  return out;
}

/** @type {Diagram} */
const ANIMAL_CELL = {
  id: 'te-bao-dong-vat',
  title: 'Tế bào động vật',
  width: 420,
  height: 300,
  shapes: [
    {
      kind: 'ellipse',
      cx: 210,
      cy: 150,
      rx: 190,
      ry: 128,
      fill: '#fdf2f8',
      stroke: '#be185d',
      width: 4,
    },
    ...erStrands(70, 112, 5, 60),
    { kind: 'circle', cx: 200, cy: 150, r: 52, fill: '#ede9fe', stroke: '#6d28d9', width: 3 },
    { kind: 'circle', cx: 200, cy: 150, r: 46, fill: 'none', stroke: '#a78bfa', width: 1.5 },
    { kind: 'circle', cx: 212, cy: 142, r: 15, fill: '#7c3aed' },
    {
      kind: 'ellipse',
      cx: 320,
      cy: 100,
      rx: 36,
      ry: 17,
      fill: '#fed7aa',
      stroke: '#c2410c',
      width: 2,
    },
    {
      kind: 'path',
      d: 'M 292 100 l 7 -9 l 7 18 l 7 -18 l 7 18 l 7 -18 l 7 18 l 7 -18 l 6 9',
      fill: 'none',
      stroke: '#c2410c',
      width: 1.5,
    },
    {
      kind: 'ellipse',
      cx: 110,
      cy: 228,
      rx: 28,
      ry: 13,
      rotate: -20,
      fill: '#fed7aa',
      stroke: '#c2410c',
      width: 2,
    },
    ...[0, 1, 2, 3].map(
      (i) =>
        /** @type {Shape} */ ({
          kind: 'path',
          d: `M ${276 + i * 2} ${190 + i * 9} q 30 -11 ${58 - i * 4} 0`,
          fill: 'none',
          stroke: '#0f766e',
          width: 4,
        }),
    ),
    { kind: 'circle', cx: 344, cy: 186, r: 4, fill: '#0f766e' },
    { kind: 'circle', cx: 270, cy: 222, r: 4, fill: '#0f766e' },
    { kind: 'circle', cx: 150, cy: 65, r: 13, fill: '#fecaca', stroke: '#dc2626', width: 2 },
    { kind: 'circle', cx: 146, cy: 62, r: 2, fill: '#dc2626' },
    { kind: 'circle', cx: 154, cy: 68, r: 2, fill: '#dc2626' },
    { kind: 'rect', x: 252, y: 71, w: 26, h: 8, rx: 3, fill: '#64748b' },
    { kind: 'rect', x: 261, y: 62, w: 8, h: 26, rx: 3, fill: '#475569' },
    ...[
      [346, 158],
      [357, 168],
      [341, 174],
      [363, 152],
      [352, 182],
    ].map(([cx, cy]) => /** @type {Shape} */ ({ kind: 'circle', cx, cy, r: 3, fill: '#1e3a8a' })),
  ],
  parts: [
    {
      id: 'mang-sinh-chat',
      name: 'Màng sinh chất',
      accept: ['màng tế bào'],
      info: 'Bao bọc tế bào, ngăn cách với môi trường và kiểm soát các chất ra vào.',
      x: 210,
      y: 24,
    },
    {
      id: 'te-bao-chat',
      name: 'Tế bào chất',
      accept: ['chất tế bào'],
      info: 'Dịch keo chứa các bào quan, nơi diễn ra nhiều phản ứng của tế bào.',
      x: 250,
      y: 250,
    },
    {
      id: 'nhan',
      name: 'Nhân',
      accept: ['nhân tế bào'],
      info: 'Có màng kép bao bọc, chứa DNA; điều khiển mọi hoạt động sống của tế bào.',
      x: 176,
      y: 178,
    },
    {
      id: 'nhan-con',
      name: 'Nhân con',
      accept: ['hạch nhân'],
      info: 'Vùng đậm đặc trong nhân, nơi tổng hợp rRNA và lắp ráp tiểu phần ribosome.',
      x: 212,
      y: 142,
    },
    {
      id: 'ti-the',
      name: 'Ti thể',
      info: 'Có màng kép, màng trong gấp nếp; nơi hô hấp tế bào tạo ATP cho tế bào.',
      x: 320,
      y: 100,
    },
    {
      id: 'luoi-noi-chat-hat',
      name: 'Lưới nội chất hạt',
      accept: ['lưới nội chất'],
      info: 'Hệ thống ống và xoang dẹp có ribosome bám; tổng hợp protein để tiết ra ngoài hoặc làm màng.',
      x: 100,
      y: 148,
    },
    {
      id: 'bo-may-golgi',
      name: 'Bộ máy Golgi',
      accept: ['golgi', 'bộ máy gôngi'],
      info: 'Chồng túi dẹp; biến đổi, đóng gói và phân phối protein, lipid.',
      x: 306,
      y: 204,
    },
    {
      id: 'lysosome',
      name: 'Lysosome',
      accept: ['lizoxom', 'tiêu thể'],
      info: 'Túi chứa enzyme thuỷ phân; phân giải chất và bào quan già, hỏng.',
      x: 150,
      y: 65,
    },
    {
      id: 'trung-the',
      name: 'Trung thể',
      info: 'Gồm hai trung tử xếp vuông góc; tham gia hình thành thoi phân bào ở tế bào động vật.',
      x: 265,
      y: 75,
    },
    {
      id: 'ribosome',
      name: 'Ribosome',
      accept: ['riboxom'],
      info: 'Bào quan không có màng, nơi tổng hợp protein.',
      x: 352,
      y: 166,
    },
  ],
};

/** @param {number} cx @param {number} cy @returns {Shape[]} */
function chloroplast(cx, cy) {
  return [
    {
      kind: 'ellipse',
      cx,
      cy,
      rx: 25,
      ry: 12,
      fill: '#4ade80',
      stroke: '#166534',
      width: 2,
    },
    ...[-12, -4, 4, 12].map(
      (dx) =>
        /** @type {Shape} */ ({
          kind: 'rect',
          x: cx + dx - 3,
          y: cy - 6,
          w: 6,
          h: 12,
          rx: 2,
          fill: '#15803d',
        }),
    ),
  ];
}

/** @type {Diagram} */
const PLANT_CELL = {
  id: 'te-bao-thuc-vat',
  title: 'Tế bào thực vật',
  width: 420,
  height: 300,
  shapes: [
    {
      kind: 'rect',
      x: 15,
      y: 15,
      w: 390,
      h: 270,
      rx: 12,
      fill: '#dcfce7',
      stroke: '#15803d',
      width: 9,
    },
    {
      kind: 'rect',
      x: 28,
      y: 28,
      w: 364,
      h: 244,
      rx: 8,
      fill: '#f7fee7',
      stroke: '#65a30d',
      width: 2,
    },
    {
      kind: 'rect',
      x: 122,
      y: 70,
      w: 200,
      h: 150,
      rx: 42,
      fill: '#e0f2fe',
      stroke: '#0284c7',
      width: 2,
    },
    { kind: 'circle', cx: 70, cy: 92, r: 30, fill: '#ede9fe', stroke: '#6d28d9', width: 3 },
    { kind: 'circle', cx: 76, cy: 88, r: 9, fill: '#7c3aed' },
    ...chloroplast(360, 70),
    ...chloroplast(352, 242),
    ...chloroplast(72, 232),
    ...chloroplast(210, 252),
    {
      kind: 'ellipse',
      cx: 360,
      cy: 155,
      rx: 20,
      ry: 10,
      rotate: 70,
      fill: '#fed7aa',
      stroke: '#c2410c',
      width: 2,
    },
  ],
  parts: [
    {
      id: 'thanh-te-bao',
      name: 'Thành tế bào',
      info: 'Lớp cellulose cứng bên ngoài màng sinh chất, giữ hình dạng và bảo vệ tế bào thực vật.',
      x: 210,
      y: 16,
    },
    {
      id: 'mang-sinh-chat',
      name: 'Màng sinh chất',
      accept: ['màng tế bào'],
      info: 'Nằm sát mặt trong thành tế bào, kiểm soát các chất ra vào tế bào.',
      x: 300,
      y: 29,
    },
    {
      id: 'te-bao-chat',
      name: 'Tế bào chất',
      accept: ['chất tế bào'],
      info: 'Dịch keo chứa các bào quan, nằm giữa màng sinh chất và nhân.',
      x: 84,
      y: 160,
    },
    {
      id: 'khong-bao',
      name: 'Không bào trung tâm',
      accept: ['không bào'],
      info: 'Túi lớn chứa dịch tế bào; dự trữ nước, chất tan và giữ sức trương cho tế bào.',
      x: 222,
      y: 145,
    },
    {
      id: 'nhan',
      name: 'Nhân',
      accept: ['nhân tế bào'],
      info: 'Chứa DNA, điều khiển hoạt động sống của tế bào.',
      x: 62,
      y: 100,
    },
    {
      id: 'luc-lap',
      name: 'Lục lạp',
      info: 'Chứa diệp lục; nơi quang hợp, chuyển quang năng thành hoá năng.',
      x: 360,
      y: 70,
    },
    {
      id: 'ti-the',
      name: 'Ti thể',
      info: 'Nơi hô hấp tế bào tạo ATP.',
      x: 360,
      y: 155,
    },
  ],
};

// Two water molecules: H–O–H at about 104,5°, linked by one hydrogen bond.
const O1 = { x: 150, y: 128 };
const O2 = { x: 300, y: 205 };
/** @param {{ x: number, y: number }} o @param {number} deg */
const hAt = (o, deg) => ({
  x: Math.round(o.x + 58 * Math.cos((deg * Math.PI) / 180)),
  y: Math.round(o.y + 58 * Math.sin((deg * Math.PI) / 180)),
});
const H1A = hAt(O1, 142);
const H1B = hAt(O1, 38);
const H2A = hAt(O2, 69);
const H2B = hAt(O2, -35);

/** @param {{ x: number, y: number }} o @param {{ x: number, y: number }} h @returns {Shape} */
const bond = (o, h) => ({
  kind: 'line',
  x1: o.x,
  y1: o.y,
  x2: h.x,
  y2: h.y,
  stroke: '#475569',
  width: 8,
});
/** @param {{ x: number, y: number }} h @returns {Shape[]} */
const hydrogen = (h) => [
  { kind: 'circle', cx: h.x, cy: h.y, r: 20, fill: '#f1f5f9', stroke: '#64748b', width: 2 },
  { kind: 'text', x: h.x, y: h.y + 5, text: 'H', size: 15, fill: '#334155' },
];
/** @param {{ x: number, y: number }} o @returns {Shape[]} */
const oxygen = (o) => [
  { kind: 'circle', cx: o.x, cy: o.y, r: 33, fill: '#fca5a5', stroke: '#dc2626', width: 2 },
  { kind: 'text', x: o.x + 14, y: o.y + 20, text: 'O', size: 17, fill: '#7f1d1d' },
];

/** @type {Diagram} */
const WATER = {
  id: 'phan-tu-nuoc',
  title: 'Phân tử nước và liên kết hydrogen',
  width: 420,
  height: 300,
  shapes: [
    bond(O1, H1A),
    bond(O1, H1B),
    bond(O2, H2A),
    bond(O2, H2B),
    {
      kind: 'line',
      x1: H1B.x + 14,
      y1: H1B.y + 6,
      x2: O2.x - 30,
      y2: O2.y - 12,
      stroke: '#0284c7',
      width: 3,
      dash: '6 5',
    },
    ...oxygen(O1),
    ...oxygen(O2),
    ...hydrogen(H1A),
    ...hydrogen(H1B),
    ...hydrogen(H2A),
    ...hydrogen(H2B),
    { kind: 'text', x: O1.x + 34, y: O1.y - 36, text: 'δ−', size: 18, fill: '#b91c1c' },
    { kind: 'text', x: H1A.x - 34, y: H1A.y + 24, text: 'δ+', size: 18, fill: '#1d4ed8' },
    { kind: 'text', x: H1B.x + 4, y: H1B.y + 40, text: 'δ+', size: 18, fill: '#1d4ed8' },
  ],
  parts: [
    {
      id: 'nguyen-tu-oxygen',
      name: 'Nguyên tử oxygen',
      accept: ['oxygen', 'nguyên tử O', 'nguyên tử oxi', 'oxi'],
      info: 'Có độ âm điện lớn, hút cặp electron dùng chung về phía mình nên tích điện âm một phần.',
      x: O1.x - 6,
      y: O1.y - 4,
    },
    {
      id: 'nguyen-tu-hydrogen',
      name: 'Nguyên tử hydrogen',
      accept: ['hydrogen', 'nguyên tử H', 'nguyên tử hiđro', 'hiđro'],
      info: 'Mỗi phân tử nước có hai nguyên tử hydrogen liên kết với một nguyên tử oxygen.',
      x: H1A.x,
      y: H1A.y,
    },
    {
      id: 'lien-ket-cong-hoa-tri',
      name: 'Liên kết cộng hoá trị',
      accept: ['liên kết cộng hóa trị', 'liên kết cộng hoá trị phân cực'],
      info: 'Oxygen và hydrogen dùng chung một cặp electron; đây là liên kết bền bên trong phân tử.',
      x: Math.round((O1.x + H1A.x) / 2) - 2,
      y: Math.round((O1.y + H1A.y) / 2),
    },
    {
      id: 'lien-ket-hydrogen',
      name: 'Liên kết hydrogen',
      accept: ['liên kết hiđro'],
      info: 'Lực hút yếu giữa đầu δ+ (H) của phân tử này với đầu δ− (O) của phân tử bên cạnh.',
      x: Math.round((H1B.x + 14 + O2.x - 30) / 2),
      y: Math.round((H1B.y + 6 + O2.y - 12) / 2),
    },
    {
      id: 'dau-am',
      name: 'Đầu tích điện âm (δ−)',
      accept: ['đầu âm', 'δ−', 'cực âm'],
      info: 'Phía nguyên tử oxygen mang một phần điện tích âm, vì cặp electron lệch về oxygen.',
      x: O1.x + 60,
      y: O1.y - 46,
    },
    {
      id: 'dau-duong',
      name: 'Đầu tích điện dương (δ+)',
      accept: ['đầu dương', 'δ+', 'cực dương'],
      info: 'Phía hai nguyên tử hydrogen mang một phần điện tích dương. Nước là phân tử phân cực.',
      x: H1A.x - 58,
      y: H1A.y + 18,
    },
  ],
};

/** @type {Diagram} */
const HEART = {
  id: 'tim-nguoi',
  title: 'Sơ đồ cấu tạo tim người (nhìn từ phía trước)',
  width: 420,
  height: 310,
  shapes: [
    // Right heart (viewer's left) carries blood poor in oxygen, left heart blood rich in oxygen.
    { kind: 'path', d: 'M 135 20 V 92', fill: 'none', stroke: '#2563eb', width: 18 },
    { kind: 'path', d: 'M 285 20 V 92', fill: 'none', stroke: '#dc2626', width: 18 },
    { kind: 'path', d: 'M 84 232 H 30 V 60', fill: 'none', stroke: '#2563eb', width: 18 },
    { kind: 'path', d: 'M 336 232 H 390 V 60', fill: 'none', stroke: '#dc2626', width: 18 },
    {
      kind: 'rect',
      x: 80,
      y: 90,
      w: 110,
      h: 70,
      rx: 22,
      fill: '#bfdbfe',
      stroke: '#1e3a8a',
      width: 3,
    },
    {
      kind: 'path',
      d: 'M 80 170 H 190 V 250 Q 190 292 140 296 Q 80 292 80 250 Z',
      fill: '#93c5fd',
      stroke: '#1e3a8a',
      width: 3,
    },
    {
      kind: 'rect',
      x: 230,
      y: 90,
      w: 110,
      h: 70,
      rx: 22,
      fill: '#fecaca',
      stroke: '#7f1d1d',
      width: 3,
    },
    {
      kind: 'path',
      d: 'M 230 170 H 340 V 250 Q 340 292 280 296 Q 230 292 230 250 Z',
      fill: '#fca5a5',
      stroke: '#7f1d1d',
      width: 3,
    },
    {
      kind: 'rect',
      x: 194,
      y: 92,
      w: 32,
      h: 196,
      rx: 6,
      fill: '#e2e8f0',
      stroke: '#94a3b8',
      width: 1.5,
    },
    {
      kind: 'path',
      d: 'M 100 165 L 122 178 M 170 165 L 148 178',
      fill: 'none',
      stroke: '#0f172a',
      width: 3,
    },
    {
      kind: 'path',
      d: 'M 250 165 L 272 178 M 320 165 L 298 178',
      fill: 'none',
      stroke: '#0f172a',
      width: 3,
    },
  ],
  parts: [
    {
      id: 'tam-nhi-phai',
      name: 'Tâm nhĩ phải',
      info: 'Nhận máu nghèo oxygen từ tĩnh mạch chủ đi về từ khắp cơ thể.',
      x: 135,
      y: 125,
    },
    {
      id: 'tam-that-phai',
      name: 'Tâm thất phải',
      info: 'Co bóp đẩy máu vào động mạch phổi, lên phổi trao đổi khí (vòng tuần hoàn nhỏ).',
      x: 135,
      y: 238,
    },
    {
      id: 'tam-nhi-trai',
      name: 'Tâm nhĩ trái',
      info: 'Nhận máu giàu oxygen từ tĩnh mạch phổi đi về từ phổi.',
      x: 285,
      y: 125,
    },
    {
      id: 'tam-that-trai',
      name: 'Tâm thất trái',
      info: 'Thành dày nhất; co bóp đẩy máu vào động mạch chủ đi khắp cơ thể (vòng tuần hoàn lớn).',
      x: 285,
      y: 238,
    },
    {
      id: 'van-nhi-that',
      name: 'Van nhĩ – thất',
      accept: ['van tim', 'van nhĩ thất', 'van'],
      info: 'Chỉ cho máu đi một chiều từ tâm nhĩ xuống tâm thất.',
      x: 135,
      y: 170,
    },
    {
      id: 'vach-ngan',
      name: 'Vách ngăn tim',
      accept: ['vách ngăn', 'vách tim'],
      info: 'Ngăn tim trái với tim phải, nên máu giàu và nghèo oxygen không trộn lẫn.',
      x: 210,
      y: 200,
    },
    {
      id: 'tinh-mach-chu',
      name: 'Tĩnh mạch chủ',
      info: 'Đưa máu nghèo oxygen từ các cơ quan về tâm nhĩ phải.',
      x: 135,
      y: 45,
    },
    {
      id: 'tinh-mach-phoi',
      name: 'Tĩnh mạch phổi',
      info: 'Đưa máu giàu oxygen từ phổi về tâm nhĩ trái.',
      x: 285,
      y: 45,
    },
    {
      id: 'dong-mach-phoi',
      name: 'Động mạch phổi',
      info: 'Dẫn máu nghèo oxygen từ tâm thất phải lên phổi.',
      x: 30,
      y: 140,
    },
    {
      id: 'dong-mach-chu',
      name: 'Động mạch chủ',
      info: 'Động mạch lớn nhất, dẫn máu giàu oxygen từ tâm thất trái đi nuôi cơ thể.',
      x: 390,
      y: 140,
    },
  ],
};

/** Every built-in diagram, by id. */
export const DIAGRAMS = /** @type {Record<string, Diagram>} */ ({
  [ANIMAL_CELL.id]: ANIMAL_CELL,
  [PLANT_CELL.id]: PLANT_CELL,
  [WATER.id]: WATER,
  [HEART.id]: HEART,
});

/**
 * Checks a diagram: unique part ids, every hotspot inside the view box and
 * hotspots at least `MIN_HOTSPOT_GAP` apart.
 * @param {Diagram} d
 * @returns {string[]} problems found (empty when valid)
 */
export function validateDiagram(d) {
  /** @type {string[]} */
  const problems = [];
  const ids = new Set(d.parts.map((p) => p.id));
  if (ids.size !== d.parts.length) problems.push('duplicate part id');
  for (const p of d.parts) {
    if (p.x < 0 || p.x > d.width || p.y < 0 || p.y > d.height) problems.push(`${p.id} is outside`);
  }
  for (let i = 0; i < d.parts.length; i++) {
    for (let j = i + 1; j < d.parts.length; j++) {
      const a = d.parts[i];
      const b = d.parts[j];
      if (Math.hypot(a.x - b.x, a.y - b.y) < MIN_HOTSPOT_GAP) {
        problems.push(`${a.id} and ${b.id} overlap`);
      }
    }
  }
  return problems;
}

/**
 * The part whose hotspot is nearest to a point, if within `radius`.
 * @param {Diagram} d
 * @param {number} x
 * @param {number} y
 * @param {number} [radius]
 */
export function partAt(d, x, y, radius = 18) {
  let best = null;
  let bestDist = radius;
  for (const p of d.parts) {
    const dist = Math.hypot(p.x - x, p.y - y);
    if (dist <= bestDist) {
      best = p;
      bestDist = dist;
    }
  }
  return best;
}

/**
 * Lower case without diacritics, đ as d, single spaces, no final period,
 * for comparing typed names.
 * @param {string} s
 */
export function normalizeName(s) {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .replace(/[–—-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\.$/, '');
}

/**
 * Whether a typed or chosen name names the part (its name or an accepted spelling).
 * @param {Part} part
 * @param {string} answer
 */
export function isName(part, answer) {
  const a = normalizeName(answer);
  return [part.name, ...(part.accept ?? [])].some((n) => normalizeName(n) === a);
}

/**
 * A small seeded random generator (mulberry32), so quizzes are repeatable.
 * @param {number} seed
 */
export function seeded(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * A copy of `items` in a seeded random order.
 * @template T
 * @param {T[]} items
 * @param {number} seed
 * @returns {T[]}
 */
export function shuffled(items, seed) {
  const rand = seeded(seed);
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * Name choices for one part: its own name plus `count − 1` other part
 * names of the same diagram, in a seeded order.
 * @param {Diagram} d
 * @param {string} partId
 * @param {number} [count]
 * @param {number} [seed]
 */
export function nameChoices(d, partId, count = 4, seed = 1) {
  const part = d.parts.find((p) => p.id === partId);
  if (!part) return [];
  const others = shuffled(
    d.parts.filter((p) => p.id !== partId),
    seed,
  ).slice(0, Math.max(0, count - 1));
  return shuffled([part, ...others], seed + 1).map((p) => p.name);
}
