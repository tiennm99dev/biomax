/**
 * A side view of the right arm (the person faces right): the upper arm hangs
 * straight down from the shoulder, the forearm turns about the elbow joint.
 * The elbow angle is how far the forearm is bent from the straight arm, from
 * 0° (arm straight) to MAX_BEND.
 *
 * The biceps runs along the front of the upper arm and pulls on the forearm
 * just below the elbow; the triceps runs along the back and pulls on the
 * point of the elbow. A muscle that gets shorter is contracting (co), one
 * that gets longer is relaxing (dãn): when the arm bends the biceps contracts
 * and the triceps relaxes, and the other way round when it straightens.
 *
 * Coordinates are SVG units in a 300 × 300 view box.
 */

export const SHOULDER = { x: 110, y: 40 };
export const ELBOW = { x: 110, y: 180 };
export const FOREARM = 110;
export const MAX_BEND = 140;

/** @typedef {{ x: number, y: number }} Pt */

/** @param {number} deg */
const rad = (deg) => (deg * Math.PI) / 180;

/**
 * Unit vector along the forearm, from the elbow towards the hand.
 * @param {number} bend
 */
export function forearmDir(bend) {
  return { x: Math.sin(rad(bend)), y: Math.cos(rad(bend)) };
}

/**
 * Keeps an angle inside the range the elbow can bend.
 * @param {number} bend
 */
export function clampBend(bend) {
  return Math.min(MAX_BEND, Math.max(0, bend));
}

/**
 * The points of the arm at one elbow angle.
 * @param {number} bend
 */
export function armAt(bend) {
  const b = clampBend(bend);
  const d = forearmDir(b);
  // Normal pointing to the back of the forearm (the triceps side).
  const n = { x: -d.y, y: d.x };
  const hand = { x: ELBOW.x + FOREARM * d.x, y: ELBOW.y + FOREARM * d.y };
  const bicepsEnd = { x: ELBOW.x + 22 * d.x - 7 * n.x, y: ELBOW.y + 22 * d.y - 7 * n.y };
  const tricepsEnd = { x: ELBOW.x + 9 * n.x - 12 * d.x, y: ELBOW.y + 9 * n.y - 12 * d.y };
  const bicepsStart = { x: SHOULDER.x + 9, y: SHOULDER.y + 14 };
  const tricepsStart = { x: SHOULDER.x - 10, y: SHOULDER.y + 16 };
  return { bend: b, hand, bicepsStart, bicepsEnd, tricepsStart, tricepsEnd };
}

/** @param {Pt} a @param {Pt} b */
const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

/**
 * Lengths of the two muscles at one elbow angle.
 * @param {number} bend
 */
export function muscleLengths(bend) {
  const a = armAt(bend);
  return {
    biceps: dist(a.bicepsStart, a.bicepsEnd),
    triceps: dist(a.tricepsStart, a.tricepsEnd),
  };
}

/**
 * The elbow angle of the hand nearest to a point (for dragging the hand).
 * @param {Pt} p
 */
export function bendFromPoint(p) {
  const dx = p.x - ELBOW.x;
  const dy = p.y - ELBOW.y;
  let deg = (Math.atan2(dx, dy) * 180) / Math.PI;
  if (deg < -20) deg += 360;
  return Math.round(clampBend(deg));
}

/**
 * What each muscle does when the elbow angle goes from `from` to `to`.
 * @param {number} from
 * @param {number} to
 * @returns {{ move: 'gap' | 'duoi' | 'dung', biceps: 'co' | 'dan' | 'giu', triceps: 'co' | 'dan' | 'giu' }}
 */
export function muscleAction(from, to) {
  const a = muscleLengths(from);
  const b = muscleLengths(to);
  if (Math.abs(to - from) < 0.5) return { move: 'dung', biceps: 'giu', triceps: 'giu' };
  return {
    move: to > from ? 'gap' : 'duoi',
    biceps: b.biceps < a.biceps ? 'co' : 'dan',
    triceps: b.triceps < a.triceps ? 'co' : 'dan',
  };
}

/**
 * A feedback sentence for the last movement.
 * @param {ReturnType<typeof muscleAction>} act
 */
export function describeAction(act) {
  if (act.move === 'dung')
    return 'Kéo bàn tay hoặc thanh trượt để gập hay duỗi cẳng tay, rồi quan sát hai cơ.';
  if (act.move === 'gap')
    return 'Gập tay: cơ hai đầu co (ngắn lại, phình to) kéo xương cẳng tay lên; cơ ba đầu dãn ra.';
  return 'Duỗi tay: cơ ba đầu co (ngắn lại) kéo cẳng tay duỗi thẳng ra; cơ hai đầu dãn ra.';
}

/**
 * Thickness of the drawn muscle belly: a shorter muscle bulges more.
 * @param {number} length
 * @param {number} rest the length of the same muscle with the arm half bent
 */
export function bulge(length, rest) {
  return Math.round(Math.max(6, Math.min(26, 14 * (rest / length) ** 3)) * 10) / 10;
}

/** @type {import('#lib/domain/diagrams.js').Diagram} */
export const SKELETON = {
  id: 'bo-xuong-nguoi',
  title: 'Bộ xương người (nhìn từ phía trước)',
  width: 300,
  height: 480,
  shapes: [
    {
      kind: 'ellipse',
      cx: 150,
      cy: 42,
      rx: 26,
      ry: 30,
      fill: '#f5f5f4',
      stroke: '#78716c',
      width: 2,
    },
    { kind: 'path', d: 'M 132 62 Q 150 84 168 62', fill: 'none', stroke: '#78716c', width: 3 },
    { kind: 'line', x1: 150, y1: 76, x2: 150, y2: 262, stroke: '#a8a29e', width: 10, dash: '7 3' },
    {
      kind: 'path',
      d: 'M 150 94 L 100 100 M 150 94 L 200 100',
      fill: 'none',
      stroke: '#a8a29e',
      width: 7,
    },
    {
      kind: 'rect',
      x: 144,
      y: 104,
      w: 12,
      h: 56,
      rx: 4,
      fill: '#e7e5e4',
      stroke: '#78716c',
      width: 1.5,
    },
    {
      kind: 'path',
      d: 'M 144 110 Q 112 112 110 132 M 144 124 Q 110 126 108 146 M 144 138 Q 112 142 110 162 M 144 152 Q 116 158 116 176 M 156 110 Q 188 112 190 132 M 156 124 Q 190 126 192 146 M 156 138 Q 188 142 190 162 M 156 152 Q 184 158 184 176',
      fill: 'none',
      stroke: '#a8a29e',
      width: 4,
    },
    {
      kind: 'path',
      d: 'M 100 100 L 82 196 M 200 100 L 218 196',
      fill: 'none',
      stroke: '#a8a29e',
      width: 8,
    },
    {
      kind: 'path',
      d: 'M 80 198 L 62 286 M 86 200 L 72 288 M 220 198 L 238 286 M 214 200 L 228 288',
      fill: 'none',
      stroke: '#a8a29e',
      width: 5,
    },
    {
      kind: 'path',
      d: 'M 60 292 L 54 318 M 66 294 L 64 322 M 72 292 L 74 320 M 240 292 L 246 318 M 234 294 L 236 322 M 228 292 L 226 320',
      fill: 'none',
      stroke: '#a8a29e',
      width: 3,
    },
    {
      kind: 'path',
      d: 'M 112 254 Q 150 236 188 254 Q 186 292 150 298 Q 114 292 112 254 Z',
      fill: '#e7e5e4',
      stroke: '#78716c',
      width: 2,
    },
    {
      kind: 'path',
      d: 'M 126 294 L 128 380 M 174 294 L 172 380',
      fill: 'none',
      stroke: '#a8a29e',
      width: 9,
    },
    { kind: 'circle', cx: 128, cy: 388, r: 6, fill: '#e7e5e4', stroke: '#78716c', width: 2 },
    { kind: 'circle', cx: 172, cy: 388, r: 6, fill: '#e7e5e4', stroke: '#78716c', width: 2 },
    {
      kind: 'path',
      d: 'M 128 396 L 130 462 M 138 398 L 138 460 M 172 396 L 170 462 M 162 398 L 162 460',
      fill: 'none',
      stroke: '#a8a29e',
      width: 6,
    },
    {
      kind: 'path',
      d: 'M 130 466 L 112 474 M 170 466 L 188 474',
      fill: 'none',
      stroke: '#a8a29e',
      width: 6,
    },
  ],
  parts: [
    {
      id: 'xuong-so',
      name: 'Xương sọ',
      accept: ['hộp sọ'],
      info: 'Các xương sọ khớp bất động với nhau tạo thành hộp sọ bảo vệ não.',
      x: 150,
      y: 36,
    },
    {
      id: 'xuong-don',
      name: 'Xương đòn',
      info: 'Nối xương ức với xương bả vai, giúp tay cử động linh hoạt.',
      x: 182,
      y: 96,
    },
    {
      id: 'xuong-uc',
      name: 'Xương ức',
      info: 'Xương dẹt ở giữa ngực, cùng xương sườn và cột sống tạo lồng ngực.',
      x: 150,
      y: 132,
    },
    {
      id: 'xuong-suon',
      name: 'Xương sườn',
      info: 'Các xương sườn tạo thành lồng ngực, bảo vệ tim và phổi.',
      x: 188,
      y: 150,
    },
    {
      id: 'cot-song',
      name: 'Cột sống',
      accept: ['xương sống'],
      info: 'Gồm nhiều đốt sống khớp bán động với nhau, nâng đỡ cơ thể và bảo vệ tủy sống.',
      x: 150,
      y: 214,
    },
    {
      id: 'xuong-canh-tay',
      name: 'Xương cánh tay',
      info: 'Xương dài nối từ vai đến khuỷu tay, là nơi bám của cơ hai đầu và cơ ba đầu.',
      x: 90,
      y: 150,
    },
    {
      id: 'khop-khuyu',
      name: 'Khớp khuỷu tay',
      info: 'Khớp động nối xương cánh tay với xương cẳng tay, cho phép gập và duỗi tay.',
      x: 216,
      y: 198,
    },
    {
      id: 'xuong-cang-tay',
      name: 'Xương cẳng tay',
      accept: ['xương trụ và xương quay', 'xương quay và xương trụ'],
      info: 'Gồm xương trụ và xương quay, giúp cẳng tay và bàn tay cử động khéo léo.',
      x: 70,
      y: 244,
    },
    {
      id: 'xuong-ban-tay',
      name: 'Xương bàn tay',
      info: 'Gồm nhiều xương nhỏ ở cổ tay, bàn tay và ngón tay, giúp cầm nắm.',
      x: 64,
      y: 306,
    },
    {
      id: 'xuong-chau',
      name: 'Xương chậu',
      info: 'Nâng đỡ các cơ quan trong khoang bụng và nối thân với hai chân.',
      x: 150,
      y: 270,
    },
    {
      id: 'xuong-dui',
      name: 'Xương đùi',
      info: 'Xương dài và chắc nhất cơ thể, chịu sức nặng của cơ thể khi đứng, đi.',
      x: 127,
      y: 336,
    },
    {
      id: 'xuong-banh-che',
      name: 'Xương bánh chè',
      info: 'Xương nhỏ ở phía trước khớp gối, bảo vệ khớp gối.',
      x: 172,
      y: 388,
    },
    {
      id: 'xuong-cang-chan',
      name: 'Xương cẳng chân',
      accept: ['xương chày và xương mác'],
      info: 'Gồm xương chày và xương mác, nối khớp gối với cổ chân.',
      x: 134,
      y: 432,
    },
  ],
};

/** Joints to sort by how much they move. */
/** @type {import('#lib/core/card-sorter.js').SortBin[]} */
export const JOINT_BINS = [
  { id: 'dong', label: 'Khớp động' },
  { id: 'ban-dong', label: 'Khớp bán động' },
  { id: 'bat-dong', label: 'Khớp bất động' },
];

/** @type {import('#lib/core/card-sorter.js').SortCard[]} */
export const JOINT_CARDS = [
  {
    id: 'khuyu',
    label: 'Khớp khuỷu tay',
    bin: 'dong',
    why: 'Khớp khuỷu tay cử động dễ dàng (gập, duỗi), là khớp động.',
  },
  { id: 'goi', label: 'Khớp gối', bin: 'dong', why: 'Khớp gối cử động linh hoạt, là khớp động.' },
  {
    id: 'vai',
    label: 'Khớp vai',
    bin: 'dong',
    why: 'Khớp vai cho tay xoay nhiều hướng, là khớp động.',
  },
  {
    id: 'dot-song',
    label: 'Khớp giữa các đốt sống',
    bin: 'ban-dong',
    why: 'Các đốt sống chỉ cử động hạn chế với nhau, là khớp bán động.',
  },
  {
    id: 'hang',
    label: 'Khớp háng',
    bin: 'dong',
    why: 'Khớp háng giúp chân cử động linh hoạt, là khớp động.',
  },
  {
    id: 'so',
    label: 'Khớp giữa các xương sọ',
    bin: 'bat-dong',
    why: 'Các xương sọ gắn chặt với nhau, không cử động được: khớp bất động.',
  },
];
