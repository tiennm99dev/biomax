/**
 * The sums behind the surface-to-volume slider, for a cell taken as a sphere
 * with its diameter in micrometres, and the labelled model of a bacterium.
 */

/** Thickness in µm of the layer counted as lying next to the membrane. */
export const SHELL = 0.5;
/** Largest diameter in µm usual for a prokaryotic cell. */
export const PROKARYOTE_MAX = 5;
/** Smallest diameter in µm usual for a eukaryotic cell. */
export const EUKARYOTE_MIN = 10;

/**
 * Surface (µm²), volume (µm³) and their ratio (µm⁻¹) of a spherical cell.
 * @param {number} d diameter in µm
 */
export function sphere(d) {
  const surface = Math.PI * d * d;
  const volume = (Math.PI * d * d * d) / 6;
  return { surface, volume, ratio: surface / volume };
}

/**
 * The share of a spherical cell's volume within `SHELL` µm of its membrane,
 * from 0 to 1.
 * @param {number} d diameter in µm
 */
export function nearMembraneShare(d) {
  const radius = d / 2;
  if (radius <= SHELL) return 1;
  return 1 - ((radius - SHELL) / radius) ** 3;
}

/**
 * Which kind of cell a diameter usually belongs to.
 * @param {number} d diameter in µm
 * @returns {'nhan-so' | 'giua' | 'nhan-thuc'}
 */
export function sizeClass(d) {
  if (d <= PROKARYOTE_MAX) return 'nhan-so';
  return d < EUKARYOTE_MIN ? 'giua' : 'nhan-thuc';
}

/**
 * How many times the smaller of two spherical cells beats the larger on
 * surface-to-volume ratio.
 * @param {number} a diameter in µm
 * @param {number} b diameter in µm
 */
export function ratioAdvantage(a, b) {
  return Math.max(a, b) / Math.min(a, b);
}

/** @type {import('#lib/domain/diagrams.js').Shape[]} */
const PILI = [105, 140, 175, 210, 245, 280].map((x, i) => ({
  kind: 'line',
  x1: x,
  y1: 60,
  x2: x + (i % 2 ? 5 : -5),
  y2: 36,
  stroke: '#64748b',
  width: 2,
}));

/** @type {import('#lib/domain/diagrams.js').Shape[]} */
const RIBOSOMES = [
  [59, 158],
  [75, 176],
  [101, 180],
  [121, 168],
  [125, 112],
  [147, 100],
  [257, 178],
  [237, 96],
  [331, 112],
  [341, 140],
].map(([cx, cy]) => ({ kind: 'circle', cx, cy, r: 3.5, fill: '#1e3a8a' }));

/**
 * A straight line from a label marker to the layer it names, with a dot on
 * the layer so that the three close layers of the envelope stay apart.
 * @param {number} x
 * @param {number} y
 * @returns {import('#lib/domain/diagrams.js').Shape[]}
 */
const leader = (x, y) => [
  { kind: 'line', x1: x, y1: 250, x2: x, y2: y, stroke: '#0f172a', width: 1.5 },
  { kind: 'circle', cx: x, cy: y, r: 3, fill: '#0f172a' },
];

/**
 * A rod-shaped Gram-negative bacterium, which shows every part in the book's list.
 * @type {import('#lib/domain/diagrams.js').Diagram}
 */
export const BACTERIUM = {
  id: 'te-bao-vi-khuan',
  title: 'Mô hình tế bào vi khuẩn hình que, cắt dọc',
  width: 430,
  height: 270,
  shapes: [
    ...PILI,
    {
      kind: 'path',
      d: 'M 375 140 q 14 -24 28 0 t 28 0',
      fill: 'none',
      stroke: '#7c3aed',
      width: 3.5,
    },
    {
      kind: 'rect',
      x: 15,
      y: 60,
      w: 360,
      h: 160,
      rx: 80,
      fill: '#dbeafe',
      stroke: '#2563eb',
      width: 2.5,
    },
    {
      kind: 'rect',
      x: 25,
      y: 70,
      w: 340,
      h: 140,
      rx: 70,
      fill: '#bbf7d0',
      stroke: '#15803d',
      width: 5,
    },
    {
      kind: 'rect',
      x: 37,
      y: 82,
      w: 316,
      h: 116,
      rx: 58,
      fill: '#fef9c3',
      stroke: '#c2410c',
      width: 2.5,
    },
    ...RIBOSOMES,
    {
      kind: 'path',
      d: 'M 155 140 c 0 -36 34 -34 44 -18 c 10 -22 52 -14 42 12 c 18 14 -6 42 -28 28 c -16 18 -58 12 -58 -22 z',
      fill: 'none',
      stroke: '#be185d',
      width: 3,
    },
    {
      kind: 'path',
      d: 'M 171 140 c 6 -18 22 -8 30 -2 c 8 -14 28 -6 22 8 c -6 12 -22 2 -28 8 c -10 8 -28 0 -24 -14 z',
      fill: 'none',
      stroke: '#be185d',
      width: 2,
    },
    { kind: 'circle', cx: 305, cy: 164, r: 13, fill: 'none', stroke: '#db2777', width: 3 },
    { kind: 'line', x1: 305, y1: 151, x2: 305, y2: 134, stroke: '#0f172a', width: 1.5 },
    {
      kind: 'ellipse',
      cx: 87,
      cy: 122,
      rx: 26,
      ry: 15,
      fill: '#fcd34d',
      stroke: '#b45309',
      width: 2,
    },
    ...leader(135, 220),
    ...leader(195, 210),
    ...leader(255, 198),
  ],
  parts: [
    {
      id: 'long',
      name: 'Lông',
      info: 'Ngắn và nhiều hơn roi; giúp vi khuẩn bám vào bề mặt, tiếp hợp hoặc bám vào tế bào khác.',
      x: 193,
      y: 20,
    },
    {
      id: 'roi',
      name: 'Roi',
      info: 'Bó sợi protein dài, mỗi tế bào có một hoặc vài roi; giúp vi khuẩn di chuyển.',
      x: 408,
      y: 112,
    },
    {
      id: 'mang-ngoai',
      name: 'Màng ngoài',
      info: 'Chỉ có ở vi khuẩn Gram âm, chứa nhiều lipopolysaccharide; nằm ngoài thành tế bào, giúp bảo vệ tế bào.',
      x: 135,
      y: 252,
    },
    {
      id: 'thanh-te-bao',
      name: 'Thành tế bào',
      info: 'Cấu tạo từ peptidoglycan, dày khoảng 10 – 20 nm; giữ hình dạng và bảo vệ tế bào.',
      x: 195,
      y: 252,
    },
    {
      id: 'mang-te-bao',
      name: 'Màng tế bào',
      accept: ['màng sinh chất'],
      info: 'Lớp kép phospholipid kết hợp protein; trao đổi chất có chọn lọc và là nơi diễn ra nhiều quá trình chuyển hoá.',
      x: 255,
      y: 252,
    },
    {
      id: 'te-bao-chat',
      name: 'Tế bào chất',
      info: 'Bào tương dạng keo, không có bào quan có màng; nơi diễn ra phần lớn các phản ứng hoá sinh của tế bào.',
      x: 285,
      y: 104,
    },
    {
      id: 'ribosome',
      name: 'Ribosome',
      info: 'Hạt nhỏ không có màng, có rất nhiều trong tế bào chất; nơi tổng hợp protein.',
      x: 93,
      y: 168,
    },
    {
      id: 'hat-du-tru',
      name: 'Hạt dự trữ',
      info: 'Hạt chứa chất dự trữ như đường, lipid, nằm trong tế bào chất.',
      x: 87,
      y: 122,
    },
    {
      id: 'vung-nhan',
      name: 'Vùng nhân',
      info: 'Không có màng bao bọc, thường chứa một phân tử DNA dạng vòng, mạch kép mang thông tin di truyền.',
      x: 199,
      y: 142,
    },
    {
      id: 'plasmid',
      name: 'Plasmid',
      info: 'DNA vòng, mạch kép, kích thước nhỏ, nằm ngoài vùng nhân; thường mang gene như gene kháng kháng sinh.',
      x: 305,
      y: 124,
    },
  ],
};
