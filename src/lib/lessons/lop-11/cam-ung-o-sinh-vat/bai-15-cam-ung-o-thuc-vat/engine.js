/**
 * A seedling on moist cotton in a clear box, used to show phototropism and
 * gravitropism. Directions are degrees measured clockwise from straight up
 * (0 up, 90 right, 180 down, −90 left), in screen space.
 *
 * The stem grows towards the light (positive phototropism) and, in the dark
 * or with light from above, straight up (negative gravitropism). The root
 * grows down (positive gravitropism) and leans a little away from side light
 * (negative phototropism). Each organ turns from its starting direction
 * towards its target, reaching 1 − e^(−day/2) of the turn by a given day.
 */

/** @typedef {'toi' | 'tren' | 'trai' | 'phai'} LightId */
/** @typedef {0 | 90 | 180} Turn */

/** @type {Array<{ id: LightId, name: string }>} */
export const LIGHTS = [
  { id: 'toi', name: 'Tối' },
  { id: 'tren', name: 'Trên' },
  { id: 'trai', name: 'Trái' },
  { id: 'phai', name: 'Phải' },
];

/** @type {Turn[]} */
export const TURNS = [0, 90, 180];

/** Days followed. */
export const DAYS = 6;

/** How far a stem lit from one side leans towards the light. */
const STEM_LEAN = 60;
/** How far a root lit from one side leans away from the light. */
const ROOT_LEAN = 15;

/** Wraps an angle into (−180, 180]. @param {number} a */
export function wrapAngle(a) {
  let x = ((a % 360) + 360) % 360;
  if (x > 180) x -= 360;
  return x;
}

/** @param {LightId} light */
export function stemTarget(light) {
  return light === 'trai' ? -STEM_LEAN : light === 'phai' ? STEM_LEAN : 0;
}

/** @param {LightId} light */
export function rootTarget(light) {
  return light === 'trai' ? 180 - ROOT_LEAN : light === 'phai' ? 180 + ROOT_LEAN : 180;
}

/** Share of the turn done by `day`. @param {number} day */
export const progress = (day) => 1 - Math.exp(-day / 2);

/**
 * The turn needed from `start` to `target`, in (−180, 180]; a half turn goes
 * clockwise.
 * @param {number} start @param {number} target
 */
export function turnNeeded(start, target) {
  return wrapAngle(target - start);
}

/**
 * @typedef {object} Organ
 * @property {number} start Direction at the seed, degrees.
 * @property {number} tip Direction of the tip now, degrees.
 * @property {number} bend Angle bent so far, whole degrees.
 * @property {number} left Turn still to come, degrees (+ clockwise).
 * @property {number} length Length drawn, SVG units.
 */

/**
 * @param {number} start @param {number} target @param {number} day @param {number} length
 * @returns {Organ}
 */
function organ(start, target, day, length) {
  const need = turnNeeded(start, target);
  const done = need * progress(day);
  return {
    start,
    tip: start + done,
    bend: Math.round(Math.abs(done)),
    left: need - done,
    length,
  };
}

/**
 * The seedling `day` days after the box was set up.
 * @param {{ light: LightId, turn: Turn, day: number }} s
 */
export function seedling({ light, turn, day }) {
  return {
    stem: organ(turn, stemTarget(light), day, 30 + 12 * day),
    root: organ(turn + 180, rootTarget(light), day, 25 + 10 * day),
  };
}

/**
 * Points along an organ from the seed at (x, y), its direction changing
 * evenly from the start to the tip.
 * @param {Organ} o @param {number} x @param {number} y @param {number} [n]
 * @returns {Array<{ x: number, y: number, dir: number }>}
 */
export function organPoints(o, x, y, n = 16) {
  const out = [{ x, y, dir: o.start }];
  const ds = o.length / n;
  let px = x;
  let py = y;
  for (let i = 1; i <= n; i++) {
    const dir = o.start + ((o.tip - o.start) * (i - 0.5)) / n;
    const r = (dir * Math.PI) / 180;
    px += ds * Math.sin(r);
    py -= ds * Math.cos(r);
    out.push({ x: px, y: py, dir: o.start + ((o.tip - o.start) * i) / n });
  }
  return out;
}

/**
 * Which side of an organ holds more auxin, seen along its direction of growth:
 * 'left', 'right' or 'even'. A stem bends away from its auxin-rich side (those
 * cells elongate faster); a root bends towards it (high auxin slows root cells).
 * @param {Organ} o @param {'stem' | 'root'} kind
 * @returns {'left' | 'right' | 'even'}
 */
export function auxinSide(o, kind) {
  if (Math.abs(o.left) < 3) return 'even';
  const clockwise = o.left > 0;
  if (kind === 'stem') return clockwise ? 'left' : 'right';
  return clockwise ? 'right' : 'left';
}

/**
 * What the learner should notice.
 * @param {{ light: LightId, turn: Turn, day: number }} s
 * @returns {{ tone: 'ok' | 'info', text: string }}
 */
export function explain(s) {
  const { stem, root } = seedling(s);
  if (s.day === 0) {
    return {
      tone: 'info',
      text: 'Ngày 0: cây vừa được đặt vào hộp. Kéo thanh "Số ngày" để theo dõi thân và rễ sinh trưởng.',
    };
  }
  /** @type {string[]} */
  const parts = [];
  const side = s.light === 'trai' || s.light === 'phai';
  if (side) {
    parts.push(
      `Ánh sáng chiếu từ bên ${s.light === 'trai' ? 'trái' : 'phải'}: auxin tập trung ở phía khuất sáng của ngọn, tế bào phía đó dãn dài nhanh hơn nên thân cong về phía ánh sáng (hướng sáng dương).`,
    );
  } else if (s.turn !== 0 && stem.bend > 0) {
    parts.push(
      `${s.light === 'toi' ? 'Trong tối' : 'Ánh sáng từ trên'}, thân cong lên trên, ngược chiều trọng lực (hướng trọng lực âm): auxin dồn về mặt dưới của thân, kích thích tế bào mặt dưới dãn dài nhanh hơn.`,
    );
  } else {
    parts.push('Thân mọc thẳng lên: ánh sáng và trọng lực không làm thân lệch hướng.');
  }
  if (s.turn !== 0 && root.bend > 0) {
    parts.push(
      'Rễ cong xuống dưới (hướng trọng lực dương): auxin dồn về mặt dưới của rễ, ở nồng độ cao auxin ức chế tế bào rễ dãn dài nên mặt trên dài nhanh hơn.',
    );
  } else {
    parts.push('Rễ mọc xuống dưới theo chiều trọng lực.');
  }
  if (side) parts.push('Rễ hơi lệch tránh xa nguồn sáng (hướng sáng âm).');
  parts.push(`Sau ${s.day} ngày, thân đã uốn ${stem.bend}°, rễ đã uốn ${root.bend}°.`);
  return { tone: stem.bend + root.bend > 0 ? 'ok' : 'info', text: parts.join(' ') };
}

/** @type {import('#lib/core/card-sorter.js').SortBin[]} */
export const MOTION_BINS = [
  { id: 'huong', label: 'Hướng động' },
  { id: 'ung-st', label: 'Ứng động sinh trưởng' },
  { id: 'ung-kst', label: 'Ứng động không sinh trưởng' },
];

/** @type {import('#lib/core/card-sorter.js').SortCard[]} */
export const MOTION_CARDS = [
  {
    id: 'ngon-sang',
    label: 'Ngọn cây cạnh cửa sổ cong về phía ánh sáng',
    bin: 'huong',
    why: 'Ánh sáng chiếu từ một hướng xác định: hướng sáng.',
  },
  {
    id: 're-phan',
    label: 'Rễ mọc về phía có phân bón',
    bin: 'huong',
    why: 'Nguồn chất khoáng ở một phía: hướng hoá dương.',
  },
  {
    id: 'tua-cuon',
    label: 'Tua cuốn của cây mướp quấn quanh giàn',
    bin: 'huong',
    why: 'Giá thể tiếp xúc với tua cuốn từ một phía: hướng tiếp xúc.',
  },
  {
    id: 'bo-cong-anh',
    label: 'Hoa bồ công anh nở khi có ánh sáng, cụp lúc chạng vạng',
    bin: 'ung-st',
    why: 'Ánh sáng thay đổi theo chu kì ngày đêm, không có hướng; do sinh trưởng không đều hai mặt cánh hoa.',
  },
  {
    id: 'choi-bang',
    label: 'Chồi cây bàng ngủ vào mùa đông, nảy vào mùa xuân',
    bin: 'ung-st',
    why: 'Nhiệt độ, ánh sáng thay đổi theo mùa, không có hướng; liên quan đến sinh trưởng.',
  },
  {
    id: 'trinh-nu',
    label: 'Lá trinh nữ cụp lại khi bị chạm',
    bin: 'ung-kst',
    why: 'Do tế bào thể gối thay đổi sức trương nước, vận động thuận nghịch, không liên quan đến sinh trưởng.',
  },
  {
    id: 'bat-ruoi',
    label: 'Lá cây bắt ruồi khép lại khi côn trùng chạm lông cảm giác',
    bin: 'ung-kst',
    why: 'Kích thích lan truyền làm lá khép nhanh, không do sinh trưởng.',
  },
];
