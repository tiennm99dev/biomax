/**
 * Evidence of evolution: the forelimb skeletons of six mammals and birds
 * (cơ quan tương đồng), drawn from a few lengths and angles per species so
 * the same five bone groups appear in every limb, and the radioactive
 * dating of fossils by half-life.
 */

import { tidy } from '#lib/core/number-format.js';

/** @typedef {'canh-tay' | 'cang-tay' | 'co-tay' | 'ban-tay' | 'ngon'} BoneGroup */

/** The five bone groups of a forelimb, shoulder to fingertip. */
export const BONE_GROUPS = /** @type {const} */ ([
  { id: 'canh-tay', name: 'Xương cánh tay', color: '#4f46e5' },
  { id: 'cang-tay', name: 'Xương cẳng tay (quay, trụ)', color: '#059669' },
  { id: 'co-tay', name: 'Xương cổ tay', color: '#d97706' },
  { id: 'ban-tay', name: 'Xương bàn tay', color: '#e11d48' },
  { id: 'ngon', name: 'Xương ngón tay', color: '#0284c7' },
]);

/**
 * @typedef {object} Digit
 * @property {number} angle degrees away from straight down (negative: to the left)
 * @property {number} meta length of the metacarpal (xương bàn)
 * @property {number[]} phalanges lengths of the finger bones (đốt ngón), may be empty
 */

/**
 * @typedef {object} Limb
 * @property {string} id
 * @property {string} name
 * @property {string} use what the limb does
 * @property {number} humerus
 * @property {number} forearm
 * @property {number} gap distance between radius and ulna
 * @property {number} carpals
 * @property {Digit[]} digits
 * @property {Record<BoneGroup, string>} changes how each bone group is shaped here
 */

/** @type {Limb[]} */
export const LIMBS = [
  {
    id: 'nguoi',
    name: 'Người',
    use: 'cầm nắm',
    humerus: 30,
    forearm: 26,
    gap: 4,
    carpals: 4,
    digits: [
      { angle: -38, meta: 8, phalanges: [5, 4] },
      { angle: -12, meta: 12, phalanges: [6, 4, 3] },
      { angle: -2, meta: 12, phalanges: [7, 5, 3] },
      { angle: 8, meta: 11, phalanges: [6, 5, 3] },
      { angle: 18, meta: 10, phalanges: [5, 3, 2] },
    ],
    changes: {
      'canh-tay': 'dài, cử động linh hoạt ở khớp vai',
      'cang-tay': 'xương quay xoay quanh xương trụ, giúp lật bàn tay',
      'co-tay': 'nhiều xương nhỏ, khớp cổ tay linh hoạt',
      'ban-tay': 'năm xương bàn, xương ngón cái tách xa các ngón khác',
      ngon: 'năm ngón, ngón cái đối diện các ngón còn lại để cầm nắm',
    },
  },
  {
    id: 'meo',
    name: 'Mèo',
    use: 'đi, chạy, vồ mồi',
    humerus: 22,
    forearm: 22,
    gap: 3,
    carpals: 4,
    digits: [
      { angle: -26, meta: 4, phalanges: [2, 2] },
      { angle: -10, meta: 8, phalanges: [3, 2, 2] },
      { angle: 0, meta: 9, phalanges: [3, 2, 2] },
      { angle: 10, meta: 9, phalanges: [3, 2, 2] },
      { angle: 20, meta: 8, phalanges: [3, 2, 2] },
    ],
    changes: {
      'canh-tay': 'ngắn, khoẻ, nằm sát thân',
      'cang-tay': 'dài, đỡ thân khi đi',
      'co-tay': 'nâng lên khỏi mặt đất khi đi',
      'ban-tay': 'ngắn, dựng đứng: mèo đi bằng ngón',
      ngon: 'năm ngón ngắn, có vuốt co duỗi được',
    },
  },
  {
    id: 'ca-voi',
    name: 'Cá voi',
    use: 'bơi',
    humerus: 10,
    forearm: 10,
    gap: 6,
    carpals: 5,
    digits: [
      { angle: -14, meta: 6, phalanges: [3, 3] },
      { angle: -6, meta: 7, phalanges: [4, 4, 4, 4, 3, 3] },
      { angle: 0, meta: 7, phalanges: [4, 4, 4, 4, 4, 3, 3] },
      { angle: 6, meta: 7, phalanges: [4, 4, 4, 3, 3] },
      { angle: 12, meta: 6, phalanges: [3, 3, 3] },
    ],
    changes: {
      'canh-tay': 'rất ngắn và dày',
      'cang-tay': 'ngắn, dẹt, không xoay được',
      'co-tay': 'dẹt, gắn chặt với nhau',
      'ban-tay': 'ngắn, nằm trong vây',
      ngon: 'nhiều đốt hơn, bọc trong da thành vây bơi',
    },
  },
  {
    id: 'doi',
    name: 'Dơi',
    use: 'bay',
    humerus: 18,
    forearm: 30,
    gap: 2,
    carpals: 3,
    digits: [
      { angle: -50, meta: 3, phalanges: [3, 2] },
      { angle: -22, meta: 28, phalanges: [14, 8] },
      { angle: -2, meta: 26, phalanges: [18, 10, 4] },
      { angle: 22, meta: 24, phalanges: [14, 8, 3] },
      { angle: 44, meta: 22, phalanges: [12, 7, 3] },
    ],
    changes: {
      'canh-tay': 'ngắn, khoẻ để vỗ cánh',
      'cang-tay': 'rất dài, xương trụ tiêu giảm',
      'co-tay': 'ít xương, gọn',
      'ban-tay': 'rất dài, căng màng da làm cánh',
      ngon: 'bốn ngón rất dài căng màng cánh, ngón cái ngắn có vuốt',
    },
  },
  {
    id: 'chim',
    name: 'Chim',
    use: 'bay',
    humerus: 26,
    forearm: 28,
    gap: 3,
    carpals: 2,
    digits: [
      { angle: -16, meta: 4, phalanges: [4] },
      { angle: 0, meta: 16, phalanges: [6, 4] },
      { angle: 8, meta: 14, phalanges: [3] },
    ],
    changes: {
      'canh-tay': 'dài, rỗng và nhẹ',
      'cang-tay': 'dài, nơi gắn lông cánh',
      'co-tay': 'chỉ còn hai xương',
      'ban-tay': 'các xương bàn gắn liền thành một khối',
      ngon: 'chỉ còn ba ngón tiêu giảm',
    },
  },
  {
    id: 'ngua',
    name: 'Ngựa',
    use: 'chạy',
    humerus: 24,
    forearm: 30,
    gap: 1.5,
    carpals: 4,
    digits: [
      { angle: -5, meta: 14, phalanges: [] },
      { angle: 0, meta: 28, phalanges: [7, 5, 4] },
      { angle: 5, meta: 14, phalanges: [] },
    ],
    changes: {
      'canh-tay': 'ngắn, khoẻ, nằm sát thân',
      'cang-tay': 'dài, xương trụ gắn vào xương quay',
      'co-tay': 'nằm ở "đầu gối" chân trước',
      'ban-tay': 'một xương bàn rất dài, hai xương bàn hai bên chỉ còn dấu vết',
      ngon: 'chỉ còn một ngón, đầu ngón có móng guốc',
    },
  },
];

/**
 * @typedef {object} Bone a piece of the drawing, in limb units
 * @property {BoneGroup} group
 * @property {'line' | 'dot'} shape
 * @property {number} x1
 * @property {number} y1
 * @property {number} x2
 * @property {number} y2
 * @property {number} w thickness, or the radius of a dot
 */

/**
 * The bones of a limb hanging down from the shoulder at (0, 0).
 * @param {Limb} limb
 * @returns {Bone[]}
 */
export function limbBones(limb) {
  /** @type {Bone[]} */
  const bones = [];
  const elbow = limb.humerus;
  bones.push({ group: 'canh-tay', shape: 'line', x1: 0, y1: 0, x2: 0, y2: elbow - 1, w: 3.2 });
  const wrist = elbow + limb.forearm;
  for (const side of [-1, 1]) {
    const x = (side * limb.gap) / 2;
    bones.push({
      group: 'cang-tay',
      shape: 'line',
      x1: x,
      y1: elbow + 1,
      x2: x,
      y2: wrist - 1,
      w: 2,
    });
  }
  const spread = Math.max(limb.gap, 3) + 2;
  const carpalY = wrist + 2;
  for (let i = 0; i < limb.carpals; i++) {
    const t = limb.carpals === 1 ? 0 : i / (limb.carpals - 1) - 0.5;
    bones.push({
      group: 'co-tay',
      shape: 'dot',
      x1: t * spread,
      y1: carpalY,
      x2: t * spread,
      y2: carpalY,
      w: 1.6,
    });
  }
  const base = carpalY + 2.5;
  const n = limb.digits.length;
  limb.digits.forEach((d, i) => {
    const rad = (d.angle * Math.PI) / 180;
    const dx = Math.sin(rad);
    const dy = Math.cos(rad);
    const x0 = n === 1 ? 0 : (i / (n - 1) - 0.5) * spread;
    let x = x0;
    let y = base;
    const x2 = x + dx * d.meta;
    const y2 = y + dy * d.meta;
    bones.push({ group: 'ban-tay', shape: 'line', x1: x, y1: y, x2, y2, w: 1.6 });
    x = x2;
    y = y2;
    for (const len of d.phalanges) {
      const sx = x + dx * 0.8;
      const sy = y + dy * 0.8;
      const ex = x + dx * len;
      const ey = y + dy * len;
      bones.push({ group: 'ngon', shape: 'line', x1: sx, y1: sy, x2: ex, y2: ey, w: 1.3 });
      x = ex;
      y = ey;
    }
  });
  return bones.map((b) => ({
    ...b,
    x1: tidy(b.x1, 4),
    y1: tidy(b.y1, 4),
    x2: tidy(b.x2, 4),
    y2: tidy(b.y2, 4),
  }));
}

/**
 * Scales and moves bones to fill a `width` × `height` box with a margin,
 * keeping the proportions.
 * @param {Bone[]} bones
 * @param {number} width
 * @param {number} height
 * @param {number} [pad]
 * @returns {Bone[]}
 */
export function fitBones(bones, width, height, pad = 8) {
  const xs = bones.flatMap((b) => [b.x1 - b.w, b.x2 + b.w, b.x1 + b.w, b.x2 - b.w]);
  const ys = bones.flatMap((b) => [b.y1 - b.w, b.y2 + b.w, b.y1 + b.w, b.y2 - b.w]);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const k = Math.min((width - 2 * pad) / (maxX - minX), (height - 2 * pad) / (maxY - minY));
  const ox = (width - k * (maxX - minX)) / 2 - k * minX;
  const oy = (height - k * (maxY - minY)) / 2 - k * minY;
  return bones.map((b) => ({
    ...b,
    x1: tidy(ox + k * b.x1, 3),
    y1: tidy(oy + k * b.y1, 3),
    x2: tidy(ox + k * b.x2, 3),
    y2: tidy(oy + k * b.y2, 3),
    w: tidy(Math.max(1.2, Math.min(4, b.w * k * 0.9)), 3),
  }));
}

/**
 * Which bone groups a limb has (every forelimb here has all five).
 * @param {Limb} limb
 * @returns {BoneGroup[]}
 */
export function groupsOf(limb) {
  const seen = new Set(limbBones(limb).map((b) => b.group));
  return BONE_GROUPS.map((g) => g.id).filter((id) => seen.has(id));
}

/** @param {string} id */
export function groupName(id) {
  return BONE_GROUPS.find((g) => g.id === id)?.name ?? '';
}

/**
 * What the widget says about the chosen group and limb.
 * @param {BoneGroup | 'all'} group
 * @param {Limb} limb
 */
export function limbNote(group, limb) {
  const uses = `${limb.name}: chi trước dùng để ${limb.use}.`;
  if (group === 'all')
    return `${uses} Chi trước của cả sáu loài đều gồm xương cánh tay, xương cẳng tay, xương cổ tay, xương bàn tay và xương ngón tay, xếp theo cùng một thứ tự: chúng là cơ quan tương đồng, bằng chứng cho thấy các loài có chung nguồn gốc.`;
  return `${groupName(group)} của ${limb.name.toLowerCase()}: ${limb.changes[group]}. ${uses} Loài nào cũng có ${groupName(group).toLowerCase()} ở cùng vị trí; hình dạng khác nhau vì chi thích nghi với chức năng khác nhau (tiến hoá phân li).`;
}

/**
 * Share of a radioactive isotope left after `years`, with half-life `half`.
 * @param {number} years
 * @param {number} half
 */
export function remaining(years, half) {
  return tidy(0.5 ** (years / half));
}

/**
 * Age of a sample from the share of the isotope left: t = T·log₂(1/share).
 * @param {number} share 0 < share ≤ 1
 * @param {number} half
 */
export function ageFrom(share, half) {
  if (!(share > 0 && share <= 1)) throw new RangeError('share must be in (0, 1]');
  return tidy(half * Math.log2(1 / share), 6);
}

/** Half-life of carbon-14, in years. */
export const C14_HALF_LIFE = 5730;
