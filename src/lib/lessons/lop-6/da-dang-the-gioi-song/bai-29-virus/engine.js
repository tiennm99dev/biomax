/**
 * Logic for the "Virus" lesson: the three virus shapes of the book (dạng
 * xoắn, dạng khối, dạng hỗn hợp) drawn as rotatable 3D wireframes (an
 * icosahedral capsid, a helical rod of protein units, a phage with a head and
 * a tail), and the steps by which a virus multiplies, which happen only
 * inside a living host cell.
 */

const PHI = (1 + Math.sqrt(5)) / 2;

/** @typedef {[number, number, number]} Vec3 */

/**
 * The 12 vertices of a regular icosahedron, the shape of many capsids.
 * @type {Vec3[]}
 */
export const ICOSA_VERTICES = [
  [0, 1, PHI],
  [0, -1, PHI],
  [0, 1, -PHI],
  [0, -1, -PHI],
  [1, PHI, 0],
  [-1, PHI, 0],
  [1, -PHI, 0],
  [-1, -PHI, 0],
  [PHI, 0, 1],
  [-PHI, 0, 1],
  [PHI, 0, -1],
  [-PHI, 0, -1],
];

/**
 * The 30 edges: pairs of vertices at the edge length 2.
 * @type {Array<[number, number]>}
 */
export const ICOSA_EDGES = (() => {
  /** @type {Array<[number, number]>} */
  const edges = [];
  for (let i = 0; i < ICOSA_VERTICES.length; i++) {
    for (let j = i + 1; j < ICOSA_VERTICES.length; j++) {
      const [a, b] = [ICOSA_VERTICES[i], ICOSA_VERTICES[j]];
      const d = Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
      if (Math.abs(d - 2) < 1e-9) edges.push([i, j]);
    }
  }
  return edges;
})();

/**
 * Rotates a point by `yaw` about the vertical axis, then by `pitch` about
 * the horizontal axis (radians).
 * @param {Vec3} p
 * @param {number} yaw
 * @param {number} pitch
 * @returns {Vec3}
 */
export function rotate([x, y, z], yaw, pitch) {
  const x1 = x * Math.cos(yaw) + z * Math.sin(yaw);
  const z1 = -x * Math.sin(yaw) + z * Math.cos(yaw);
  const y2 = y * Math.cos(pitch) - z1 * Math.sin(pitch);
  const z2 = y * Math.sin(pitch) + z1 * Math.cos(pitch);
  return [x1, y2, z2];
}

/**
 * The icosahedron's edges projected onto the screen (orthographic), each
 * flagged as at the front or the back so the back can be drawn fainter.
 * @param {number} yaw
 * @param {number} pitch
 * @param {{ cx: number, cy: number, scale: number, stretch?: number }} view
 *   `stretch` lengthens the shape vertically (a phage head is elongated)
 */
export function icosaEdges(yaw, pitch, view) {
  const pts = ICOSA_VERTICES.map((v) =>
    rotate([v[0], v[1] * (view.stretch ?? 1), v[2]], yaw, pitch),
  );
  return ICOSA_EDGES.map(([i, j]) => {
    const a = pts[i];
    const b = pts[j];
    return {
      x1: view.cx + a[0] * view.scale,
      y1: view.cy - a[1] * view.scale,
      x2: view.cx + b[0] * view.scale,
      y2: view.cy - b[1] * view.scale,
      front: a[2] + b[2] > 0,
    };
  });
}

/**
 * Protein units of a helical capsid (like tobacco mosaic virus): units on a
 * helix around a horizontal rod, turned by `spin` about the rod's axis.
 * Returns screen positions and depth (z > 0 is at the front).
 * @param {number} spin radians
 * @param {{ x0: number, x1: number, cy: number, radius: number, perTurn: number, pitch: number }} rod
 */
export function helixUnits(spin, rod) {
  /** @type {Array<{ x: number, y: number, z: number }>} */
  const units = [];
  const step = rod.pitch / rod.perTurn;
  for (let x = rod.x0, k = 0; x <= rod.x1 + 1e-9; x += step, k++) {
    const angle = (2 * Math.PI * k) / rod.perTurn + spin;
    units.push({ x, y: rod.cy - rod.radius * Math.cos(angle), z: Math.sin(angle) });
  }
  return units;
}

/** @typedef {'xoan' | 'khoi' | 'hon-hop'} ShapeId */

/**
 * The three virus shapes of the book.
 * @type {Array<{ id: ShapeId, name: string, parts: string, examples: string }>}
 */
export const SHAPES = [
  {
    id: 'xoan',
    name: 'Dạng xoắn',
    parts:
      'Vỏ protein gồm nhiều đơn vị protein xếp xoắn quanh lõi vật chất di truyền, tạo thành hình que.',
    examples: 'Virus khảm thuốc lá, virus dại.',
  },
  {
    id: 'khoi',
    name: 'Dạng khối',
    parts:
      'Vỏ protein ghép thành khối nhiều mặt (20 mặt tam giác) bao bọc lõi vật chất di truyền bên trong.',
    examples: 'Virus bại liệt, virus adeno; virus thủy đậu có thêm vỏ ngoài.',
  },
  {
    id: 'hon-hop',
    name: 'Dạng hỗn hợp',
    parts:
      'Đầu dạng khối chứa vật chất di truyền, gắn với đuôi dạng xoắn và các sợi đuôi để bám vào tế bào vật chủ.',
    examples: 'Thực khuẩn thể (phage), loại virus kí sinh trong vi khuẩn.',
  },
];

/** @typedef {'te-bao' | 'mat-ban' | 'coc-nuoc'} PlaceId */

/** Where a virus particle may land. @type {Array<{ id: PlaceId, name: string, living: boolean }>} */
export const PLACES = [
  { id: 'te-bao', name: 'Tế bào vật chủ còn sống', living: true },
  { id: 'mat-ban', name: 'Mặt bàn, tay nắm cửa', living: false },
  { id: 'coc-nuoc', name: 'Cốc nước', living: false },
];

/** The steps by which a virus multiplies inside a host cell. */
export const CYCLE = [
  {
    name: 'Bám',
    text: 'Virus bám lên bề mặt tế bào vật chủ phù hợp.',
  },
  {
    name: 'Xâm nhập',
    text: 'Virus đưa vật chất di truyền vào bên trong tế bào.',
  },
  {
    name: 'Tổng hợp',
    text: 'Vật chất di truyền của virus "điều khiển" tế bào, bắt tế bào dùng nguyên liệu và năng lượng của mình để tạo ra vật chất di truyền và vỏ protein của virus.',
  },
  {
    name: 'Lắp ráp',
    text: 'Vật chất di truyền và vỏ protein lắp ráp thành nhiều virus mới.',
  },
  {
    name: 'Giải phóng',
    text: 'Tế bào bị phá vỡ, các virus mới thoát ra ngoài và tiếp tục xâm nhập các tế bào khác.',
  },
];

/** Number of new virus particles one infected cell releases in the model. */
export const RELEASED = 12;

/**
 * Number of virus particles visible after reaching step `step` (0 = before
 * the first step) at a place. Outside a living cell the virus never
 * multiplies.
 * @param {PlaceId} place
 * @param {number} step
 */
export function virusCount(place, step) {
  const p = PLACES.find((x) => x.id === place);
  if (!p?.living) return 1;
  return step >= 4 ? RELEASED : 1;
}

/**
 * The message shown for a place and a step.
 * @param {PlaceId} place
 * @param {number} step
 */
export function cycleMessage(place, step) {
  const p = PLACES.find((x) => x.id === place);
  if (!p) return '';
  if (!p.living)
    return `${p.name}: virus không có cấu tạo tế bào, không tự lấy chất dinh dưỡng và không tự tạo năng lượng, nên ở đây nó không nhân lên được. Nó chỉ chờ cơ hội gặp tế bào vật chủ.`;
  if (step === 0) return 'Virus đang ở gần tế bào vật chủ. Bấm "Bước tiếp" để xem nó nhân lên.';
  const s = CYCLE[step - 1];
  return `Bước ${step}/${CYCLE.length}. ${s.name}: ${s.text}`;
}
