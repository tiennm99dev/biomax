/**
 * Data for the endocrine system lesson: a body map with the main endocrine
 * glands as hotspots (each part's info names its hormones and their targets),
 * and the cards for sorting glands into endocrine, exocrine and mixed.
 */

const SKIN = { fill: '#fde7d7', stroke: '#c2410c', width: 2 };
const GLAND = { fill: '#a78bfa', stroke: '#5b21b6', width: 1.5 };
const ORGAN = { fill: '#fecaca', stroke: '#b91c1c', width: 1.5, opacity: 0.8 };

/** @type {import('#lib/domain/diagrams.js').Diagram} */
export const ENDOCRINE_MAP = {
  id: 'tuyen-noi-tiet',
  title: 'Các tuyến nội tiết chính ở người',
  width: 300,
  height: 440,
  shapes: [
    // body outline
    { kind: 'ellipse', cx: 150, cy: 62, rx: 42, ry: 50, ...SKIN },
    { kind: 'rect', x: 132, y: 106, w: 36, h: 30, rx: 6, ...SKIN },
    {
      kind: 'path',
      d: 'M 92 140 Q 150 128 208 140 L 214 318 Q 150 336 86 318 Z',
      ...SKIN,
    },
    { kind: 'path', d: 'M 92 146 L 56 290', stroke: '#c2410c', width: 18, fill: 'none' },
    { kind: 'path', d: 'M 208 146 L 244 290', stroke: '#c2410c', width: 18, fill: 'none' },
    {
      kind: 'path',
      d: 'M 118 326 L 112 432 M 182 326 L 188 432',
      stroke: '#c2410c',
      width: 24,
      fill: 'none',
    },
    // brain
    {
      kind: 'ellipse',
      cx: 150,
      cy: 52,
      rx: 32,
      ry: 30,
      fill: '#fbcfe8',
      stroke: '#be185d',
      width: 1,
    },
    // glands and nearby organs
    { kind: 'circle', cx: 140, cy: 74, r: 5, ...GLAND },
    { kind: 'circle', cx: 162, cy: 48, r: 4, ...GLAND },
    { kind: 'path', d: 'M 140 116 Q 150 132 160 116 Q 150 124 140 116 Z', ...GLAND },
    { kind: 'circle', cx: 140, cy: 122, r: 2.5, fill: '#f472b6', stroke: '#9d174d' },
    { kind: 'circle', cx: 160, cy: 122, r: 2.5, fill: '#f472b6', stroke: '#9d174d' },
    { kind: 'ellipse', cx: 150, cy: 170, rx: 14, ry: 16, ...GLAND },
    { kind: 'ellipse', cx: 118, cy: 272, rx: 10, ry: 16, ...ORGAN },
    { kind: 'ellipse', cx: 182, cy: 272, rx: 10, ry: 16, ...ORGAN },
    { kind: 'path', d: 'M 110 258 Q 118 248 126 258 Z', ...GLAND },
    { kind: 'path', d: 'M 174 258 Q 182 248 190 258 Z', ...GLAND },
    { kind: 'ellipse', cx: 160, cy: 240, rx: 26, ry: 7, rotate: -12, ...GLAND },
    { kind: 'ellipse', cx: 132, cy: 306, rx: 6, ry: 5, ...GLAND },
    { kind: 'ellipse', cx: 168, cy: 306, rx: 6, ry: 5, ...GLAND },
  ],
  parts: [
    {
      id: 'tuyen-yen',
      name: 'Tuyến yên',
      info: 'Nằm ở nền sọ. Tiết hormone tăng trưởng (GH) tác động lên xương, cơ giúp cơ thể lớn lên; tiết các hormone điều khiển hoạt động của tuyến giáp, tuyến trên thận, tuyến sinh dục. Là tuyến nội tiết quan trọng nhất.',
      x: 128,
      y: 82,
    },
    {
      id: 'tuyen-tung',
      name: 'Tuyến tùng',
      info: 'Nằm trong não. Tiết melatonin, điều hòa nhịp thức – ngủ theo ngày đêm.',
      x: 172,
      y: 40,
    },
    {
      id: 'tuyen-giap',
      name: 'Tuyến giáp',
      info: 'Nằm ở cổ, trước khí quản. Tiết thyroxine (có iodine) làm tăng trao đổi chất, chuyển hóa năng lượng ở hầu hết tế bào, ảnh hưởng đến sinh trưởng và phát triển; tiết calcitonin làm giảm calcium trong máu (đưa calcium vào xương).',
      x: 150,
      y: 136,
    },
    {
      id: 'tuyen-can-giap',
      name: 'Tuyến cận giáp',
      info: 'Bốn tuyến nhỏ nằm sát mặt sau tuyến giáp. Tiết PTH làm tăng calcium trong máu (tác động lên xương, thận), phối hợp với calcitonin giữ ổn định calcium máu.',
      x: 184,
      y: 116,
    },
    {
      id: 'tuyen-uc',
      name: 'Tuyến ức',
      accept: ['tuyến ức'],
      info: 'Nằm trong lồng ngực, sau xương ức; phát triển mạnh ở trẻ em. Tiết hormone giúp hình thành và phát triển tế bào lympho T, tham gia bảo vệ cơ thể.',
      x: 150,
      y: 172,
    },
    {
      id: 'tuyen-tuy',
      name: 'Tuyến tụy',
      info: 'Nằm sau dạ dày. Tiết insulin làm giảm đường huyết (gan, cơ nhận glucose và dự trữ glycogen) và glucagon làm tăng đường huyết (gan phân giải glycogen thành glucose). Tụy còn tiết dịch tụy vào ruột non.',
      x: 186,
      y: 230,
    },
    {
      id: 'tuyen-tren-than',
      name: 'Tuyến trên thận',
      accept: ['tuyến thượng thận', 'tuyen thuong than'],
      info: 'Hai tuyến nằm trên hai quả thận. Tiết adrenaline làm tim đập nhanh, tăng huyết áp, tăng đường huyết khi cơ thể căng thẳng, sợ hãi; tiết cortisol, aldosterone điều hòa đường huyết, muối và nước.',
      x: 110,
      y: 246,
    },
    {
      id: 'tuyen-sinh-duc',
      name: 'Tuyến sinh dục',
      accept: ['buồng trứng', 'tinh hoàn'],
      info: 'Buồng trứng (nữ) tiết estrogen, progesterone; tinh hoàn (nam) tiết testosterone. Các hormone này gây những biến đổi ở tuổi dậy thì và duy trì đặc điểm giới tính. Tuyến sinh dục còn tạo trứng hoặc tinh trùng.',
      x: 150,
      y: 300,
    },
  ],
};

export const GLAND_BINS = [
  { id: 'noi-tiet', label: 'Tuyến nội tiết' },
  { id: 'ngoai-tiet', label: 'Tuyến ngoại tiết' },
  { id: 'pha', label: 'Vừa nội tiết vừa ngoại tiết' },
];

export const GLAND_CARDS = [
  {
    id: 'giap',
    label: 'Tuyến giáp',
    bin: 'noi-tiet',
    why: 'Tuyến giáp tiết thyroxine thẳng vào máu, không qua ống dẫn.',
  },
  {
    id: 'yen',
    label: 'Tuyến yên',
    bin: 'noi-tiet',
    why: 'Tuyến yên tiết hormone vào máu, là tuyến nội tiết.',
  },
  {
    id: 'tren-than',
    label: 'Tuyến trên thận',
    bin: 'noi-tiet',
    why: 'Tuyến trên thận tiết adrenaline, cortisol vào máu.',
  },
  {
    id: 'nuoc-bot',
    label: 'Tuyến nước bọt',
    bin: 'ngoai-tiet',
    why: 'Nước bọt theo ống dẫn đổ vào khoang miệng: tuyến ngoại tiết.',
  },
  {
    id: 'mo-hoi',
    label: 'Tuyến mồ hôi',
    bin: 'ngoai-tiet',
    why: 'Mồ hôi theo ống dẫn ra bề mặt da: tuyến ngoại tiết.',
  },
  {
    id: 'le',
    label: 'Tuyến lệ',
    bin: 'ngoai-tiet',
    why: 'Nước mắt theo ống dẫn ra mắt: tuyến ngoại tiết.',
  },
  {
    id: 'tuy',
    label: 'Tuyến tụy',
    bin: 'pha',
    why: 'Tụy tiết dịch tụy theo ống dẫn vào ruột non (ngoại tiết) và tiết insulin, glucagon vào máu (nội tiết).',
  },
  {
    id: 'sinh-duc',
    label: 'Tuyến sinh dục',
    bin: 'pha',
    why: 'Tuyến sinh dục tiết hormone sinh dục vào máu (nội tiết) và tạo trứng, tinh trùng đưa ra theo ống dẫn (ngoại tiết).',
  },
];
