/**
 * Grade-6 cell diagrams (prokaryote, animal and plant cell) for the hotspot
 * component, and the structure table the comparison widget quizzes.
 */

/** @typedef {import('#lib/domain/diagrams.js').Diagram} Diagram */
/** @typedef {'nhan-so' | 'dong-vat' | 'thuc-vat'} CellType */

export const CELL_TYPES = /** @type {Array<{ value: CellType, label: string }>} */ ([
  { value: 'nhan-so', label: 'Nhân sơ (vi khuẩn)' },
  { value: 'dong-vat', label: 'Động vật' },
  { value: 'thuc-vat', label: 'Thực vật' },
]);

const MEMBRANE =
  'Bao bọc tế bào chất, bảo vệ tế bào và điều khiển sự trao đổi chất giữa tế bào với môi trường.';
const CYTOPLASM =
  'Chất keo lỏng nằm giữa màng tế bào và nhân (hoặc vùng nhân), chứa các bào quan; là nơi diễn ra hầu hết các hoạt động sống của tế bào.';

/** @type {Diagram} */
const PROKARYOTE = {
  id: 'te-bao-nhan-so',
  title: 'Tế bào nhân sơ (vi khuẩn)',
  width: 420,
  height: 300,
  shapes: [
    {
      kind: 'rect',
      x: 50,
      y: 86,
      w: 310,
      h: 128,
      rx: 64,
      fill: '#dcfce7',
      stroke: '#15803d',
      width: 8,
    },
    {
      kind: 'rect',
      x: 64,
      y: 100,
      w: 282,
      h: 100,
      rx: 50,
      fill: '#f0fdf4',
      stroke: '#16a34a',
      width: 2,
    },
    {
      kind: 'path',
      d: 'M 170 150 q 10 -30 30 -10 t 30 0 t 25 10 q -10 25 -35 12 t -30 8 q -25 0 -20 -20',
      stroke: '#7c3aed',
      width: 3,
    },
    { kind: 'circle', cx: 110, cy: 130, r: 3, fill: '#0f172a' },
    { kind: 'circle', cx: 130, cy: 175, r: 3, fill: '#0f172a' },
    { kind: 'circle', cx: 280, cy: 125, r: 3, fill: '#0f172a' },
    { kind: 'circle', cx: 300, cy: 160, r: 3, fill: '#0f172a' },
    { kind: 'circle', cx: 260, cy: 185, r: 3, fill: '#0f172a' },
    {
      kind: 'path',
      d: 'M 360 150 q 12 -18 24 0 t 24 0',
      stroke: '#15803d',
      width: 3,
    },
  ],
  parts: [
    {
      id: 'thanh-te-bao',
      name: 'Thành tế bào',
      info: 'Lớp vỏ bao bên ngoài màng tế bào, giữ hình dạng và bảo vệ tế bào vi khuẩn.',
      x: 150,
      y: 86,
    },
    { id: 'mang-te-bao', name: 'Màng tế bào', info: MEMBRANE, x: 270, y: 100 },
    { id: 'te-bao-chat', name: 'Tế bào chất', info: CYTOPLASM, x: 115, y: 155 },
    {
      id: 'vung-nhan',
      name: 'Vùng nhân',
      accept: ['vung nhan'],
      info: 'Chứa vật chất di truyền nhưng không có màng bao bọc; điều khiển mọi hoạt động sống của tế bào nhân sơ.',
      x: 212,
      y: 150,
    },
    { id: 'roi', name: 'Roi', info: 'Giúp vi khuẩn di chuyển.', x: 396, y: 150 },
  ],
};

/** @type {Diagram} */
const ANIMAL = {
  id: 'te-bao-dong-vat-6',
  title: 'Tế bào động vật',
  width: 420,
  height: 300,
  shapes: [
    {
      kind: 'ellipse',
      cx: 210,
      cy: 150,
      rx: 185,
      ry: 122,
      fill: '#fdf2f8',
      stroke: '#be185d',
      width: 4,
    },
    { kind: 'circle', cx: 195, cy: 150, r: 46, fill: '#ede9fe', stroke: '#6d28d9', width: 3 },
    { kind: 'circle', cx: 205, cy: 142, r: 13, fill: '#7c3aed' },
    {
      kind: 'ellipse',
      cx: 320,
      cy: 112,
      rx: 26,
      ry: 12,
      rotate: 25,
      fill: '#fed7aa',
      stroke: '#c2410c',
      width: 2,
    },
    {
      kind: 'ellipse',
      cx: 110,
      cy: 205,
      rx: 24,
      ry: 11,
      rotate: -20,
      fill: '#fed7aa',
      stroke: '#c2410c',
      width: 2,
    },
    {
      kind: 'ellipse',
      cx: 300,
      cy: 215,
      rx: 22,
      ry: 10,
      rotate: 10,
      fill: '#fed7aa',
      stroke: '#c2410c',
      width: 2,
    },
    { kind: 'circle', cx: 120, cy: 100, r: 9, fill: '#fce7f3', stroke: '#db2777', width: 1.5 },
  ],
  parts: [
    { id: 'mang-te-bao', name: 'Màng tế bào', info: MEMBRANE, x: 210, y: 28 },
    { id: 'te-bao-chat', name: 'Tế bào chất', info: CYTOPLASM, x: 270, y: 160 },
    {
      id: 'nhan',
      name: 'Nhân',
      accept: ['nhan te bao'],
      info: 'Có màng nhân bao bọc, chứa vật chất di truyền, điều khiển mọi hoạt động sống của tế bào.',
      x: 180,
      y: 165,
    },
    {
      id: 'ti-the',
      name: 'Ti thể',
      info: 'Bào quan có màng bao bọc, là nơi tạo ra năng lượng cho các hoạt động của tế bào.',
      x: 320,
      y: 112,
    },
  ],
};

/** @type {Diagram} */
const PLANT = {
  id: 'te-bao-thuc-vat-6',
  title: 'Tế bào thực vật',
  width: 420,
  height: 300,
  shapes: [
    {
      kind: 'rect',
      x: 30,
      y: 20,
      w: 360,
      h: 260,
      rx: 14,
      fill: '#ecfccb',
      stroke: '#3f6212',
      width: 10,
    },
    {
      kind: 'rect',
      x: 48,
      y: 38,
      w: 324,
      h: 224,
      rx: 10,
      fill: '#f7fee7',
      stroke: '#65a30d',
      width: 2,
    },
    {
      kind: 'rect',
      x: 150,
      y: 70,
      w: 196,
      h: 160,
      rx: 40,
      fill: '#e0f2fe',
      stroke: '#0284c7',
      width: 2,
    },
    { kind: 'circle', cx: 98, cy: 150, r: 30, fill: '#ede9fe', stroke: '#6d28d9', width: 3 },
    { kind: 'circle', cx: 104, cy: 144, r: 9, fill: '#7c3aed' },
    {
      kind: 'ellipse',
      cx: 300,
      cy: 250,
      rx: 18,
      ry: 9,
      fill: '#22c55e',
      stroke: '#15803d',
      width: 1.5,
    },
    {
      kind: 'ellipse',
      cx: 110,
      cy: 62,
      rx: 18,
      ry: 9,
      rotate: 15,
      fill: '#22c55e',
      stroke: '#15803d',
      width: 1.5,
    },
    {
      kind: 'ellipse',
      cx: 358,
      cy: 150,
      rx: 9,
      ry: 18,
      fill: '#22c55e',
      stroke: '#15803d',
      width: 1.5,
    },
    {
      kind: 'ellipse',
      cx: 200,
      cy: 250,
      rx: 18,
      ry: 9,
      rotate: -10,
      fill: '#22c55e',
      stroke: '#15803d',
      width: 1.5,
    },
  ],
  parts: [
    {
      id: 'thanh-te-bao',
      name: 'Thành tế bào',
      info: 'Cấu tạo chủ yếu từ cellulose, bao bên ngoài màng tế bào, giúp tế bào có hình dạng nhất định và bảo vệ tế bào.',
      x: 210,
      y: 20,
    },
    { id: 'mang-te-bao', name: 'Màng tế bào', info: MEMBRANE, x: 48, y: 230 },
    { id: 'te-bao-chat', name: 'Tế bào chất', info: CYTOPLASM, x: 115, y: 210 },
    {
      id: 'nhan',
      name: 'Nhân',
      accept: ['nhan te bao'],
      info: 'Có màng nhân bao bọc, chứa vật chất di truyền, điều khiển mọi hoạt động sống của tế bào.',
      x: 92,
      y: 158,
    },
    {
      id: 'khong-bao',
      name: 'Không bào',
      accept: ['khong bao trung tam'],
      info: 'Túi lớn chứa dịch tế bào, dự trữ nước và các chất, giúp tế bào luôn căng.',
      x: 248,
      y: 150,
    },
    {
      id: 'luc-lap',
      name: 'Lục lạp',
      info: 'Bào quan chứa diệp lục, là nơi diễn ra quá trình quang hợp, giúp cây tự tổng hợp chất hữu cơ.',
      x: 300,
      y: 250,
    },
  ],
};

/** The diagram of each cell type. */
export const CELL_DIAGRAMS = /** @type {Record<CellType, Diagram>} */ ({
  'nhan-so': PROKARYOTE,
  'dong-vat': ANIMAL,
  'thuc-vat': PLANT,
});

/**
 * @typedef {{ id: string, name: string, has: Record<CellType, boolean> }} Feature
 */

/**
 * Which cell types have each structure (grade-6 scope).
 * @type {Feature[]}
 */
export const FEATURES = [
  { id: 'mang', name: 'Màng tế bào', has: { 'nhan-so': true, 'dong-vat': true, 'thuc-vat': true } },
  { id: 'chat', name: 'Tế bào chất', has: { 'nhan-so': true, 'dong-vat': true, 'thuc-vat': true } },
  {
    id: 'nhan',
    name: 'Nhân có màng nhân',
    has: { 'nhan-so': false, 'dong-vat': true, 'thuc-vat': true },
  },
  {
    id: 'vung-nhan',
    name: 'Vùng nhân (không có màng)',
    has: { 'nhan-so': true, 'dong-vat': false, 'thuc-vat': false },
  },
  {
    id: 'bao-quan',
    name: 'Bào quan có màng (ti thể...)',
    has: { 'nhan-so': false, 'dong-vat': true, 'thuc-vat': true },
  },
  {
    id: 'thanh',
    name: 'Thành tế bào',
    has: { 'nhan-so': true, 'dong-vat': false, 'thuc-vat': true },
  },
  {
    id: 'luc-lap',
    name: 'Lục lạp',
    has: { 'nhan-so': false, 'dong-vat': false, 'thuc-vat': true },
  },
  {
    id: 'khong-bao',
    name: 'Không bào lớn',
    has: { 'nhan-so': false, 'dong-vat': false, 'thuc-vat': true },
  },
];

/** Key of one table cell. @param {string} feature @param {CellType} type */
export const cellKey = (feature, type) => `${feature}:${type}`;

/**
 * Scores a filled-in table: `ticked` holds the keys the learner marked "có".
 * @param {Set<string> | string[]} ticked
 */
export function scoreTable(ticked) {
  const set = new Set(ticked);
  /** @type {string[]} */
  const wrong = [];
  let total = 0;
  for (const f of FEATURES) {
    for (const { value } of CELL_TYPES) {
      total++;
      const key = cellKey(f.id, value);
      if (set.has(key) !== f.has[value]) wrong.push(key);
    }
  }
  return { wrong, right: total - wrong.length, total, done: wrong.length === 0 };
}
