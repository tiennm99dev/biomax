/**
 * A digital lab diary for the three tropism experiments of the practical:
 * phototropism of mung bean seedlings lit from one side, gravitropism of the
 * root of a maize seed taped upside down, and chemotropism of maize roots
 * towards fertiliser. Each day the learner measures how far the organ has
 * turned with a protractor and writes it into the diary.
 *
 * Directions are degrees clockwise from straight up, in screen space. The
 * bending angle is the angle between the organ's first direction and the
 * direction of its tip.
 */

/** @typedef {'huong-sang' | 'trong-luc' | 'huong-hoa'} ExperimentId */

/**
 * @typedef {object} Experiment
 * @property {ExperimentId} id
 * @property {string} name
 * @property {string} organ What is measured.
 * @property {string} setup One line on how the cup or roll was set up.
 * @property {number} ref First direction of the organ, degrees.
 * @property {1 | -1} sign 1 when the organ turns clockwise.
 * @property {number} days Days followed.
 * @property {number} sprout Day the organ appears.
 * @property {number} max Bending angle it tends to, degrees.
 * @property {number} tau Days for the bend to cover about 63 % of `max`.
 * @property {number} grow Length gained per day after sprouting, SVG units.
 * @property {{ x: number, y: number }} base Where the organ starts.
 * @property {string} conclusion What the diary shows.
 */

/** @type {Experiment[]} */
export const EXPERIMENTS = [
  {
    id: 'huong-sang',
    name: 'Hướng sáng',
    organ: 'thân cây đậu xanh',
    setup:
      'Cốc cát ẩm gieo đậu xanh, úp hộp giấy có lỗ ở bên phải: ánh sáng chỉ chiếu từ một phía.',
    ref: 0,
    sign: 1,
    days: 7,
    sprout: 2,
    max: 50,
    tau: 2,
    grow: 22,
    base: { x: 120, y: 205 },
    conclusion:
      'Thân cây đậu uốn ngày càng nhiều về phía lỗ sáng, còn cây ở cốc đối chứng (chiếu sáng đều) mọc thẳng: thân hướng sáng dương.',
  },
  {
    id: 'trong-luc',
    name: 'Hướng trọng lực',
    organ: 'rễ hạt ngô dán ngược',
    setup:
      'Hạt ngô dán trên giấy thấm, rốn hạt hướng lên trên, cuộn giấy đặt trong ống đong có khoảng 30 mL nước.',
    ref: 0,
    sign: 1,
    days: 5,
    sprout: 1,
    max: 175,
    tau: 1.2,
    grow: 22,
    base: { x: 130, y: 120 },
    conclusion:
      'Rễ mầm lúc đầu mọc ngược lên trên rồi uốn dần, quay hẳn xuống dưới: rễ hướng trọng lực dương, dù hạt được đặt theo chiều nào.',
  },
  {
    id: 'huong-hoa',
    name: 'Hướng hoá',
    organ: 'rễ cây ngô',
    setup:
      'Cốc cát ẩm, 3 đến 5 g phân NPK đặt ở góc bên phải, hạt ngô gieo sát thành cốc phía đối diện.',
    ref: 180,
    sign: -1,
    days: 10,
    sprout: 2,
    max: 45,
    tau: 3,
    grow: 14,
    base: { x: 80, y: 40 },
    conclusion: 'Rễ ngô uốn dần về phía góc có phân bón: rễ hướng hoá dương.',
  },
];

/** @param {ExperimentId} id */
export const experiment = (id) => EXPERIMENTS.find((e) => e.id === id) ?? EXPERIMENTS[0];

/** Small fixed day-to-day scatter, so the diary looks like real readings. */
const SCATTER = [0, 1, -1, 2, -2, 1, 0, -1, 2, 1, 0];

/**
 * Bending angle of the organ on `day`, whole degrees.
 * @param {Experiment} e @param {number} day
 */
export function trueAngle(e, day) {
  if (day <= e.sprout) return 0;
  const a = e.max * (1 - Math.exp(-(day - e.sprout) / e.tau));
  return Math.max(0, Math.min(180, Math.round(a + SCATTER[day % SCATTER.length])));
}

/** Organ length on `day`, SVG units. @param {Experiment} e @param {number} day */
export function organLength(e, day) {
  return day <= e.sprout ? 0 : Math.min(110, 18 + e.grow * (day - e.sprout));
}

/** Unit vector of a direction. @param {number} dir */
export function heading(dir) {
  const r = (dir * Math.PI) / 180;
  return { x: Math.sin(r), y: -Math.cos(r) };
}

/**
 * The organ drawn on `day`: it turns evenly over its first 60 % and runs
 * straight along the tip direction after `pivot`, where the protractor sits.
 * @param {Experiment} e @param {number} day
 */
export function organShape(e, day) {
  const angle = trueAngle(e, day);
  const length = organLength(e, day);
  const tipDir = e.ref + e.sign * angle;
  const n = 14;
  const bendPart = 0.6;
  const pts = [{ x: e.base.x, y: e.base.y }];
  let x = e.base.x;
  let y = e.base.y;
  for (let i = 1; i <= n; i++) {
    const dir = e.ref + ((tipDir - e.ref) * (i - 0.5)) / n;
    const h = heading(dir);
    x += ((length * bendPart) / n) * h.x;
    y += ((length * bendPart) / n) * h.y;
    pts.push({ x, y });
  }
  const pivot = { x, y };
  const h = heading(tipDir);
  const end = { x: x + length * (1 - bendPart) * h.x, y: y + length * (1 - bendPart) * h.y };
  pts.push(end);
  return { angle, length, tipDir, pivot, points: pts };
}

/** Readings within this many degrees count as right. */
export const TOLERANCE = 4;

/**
 * @param {number} truth @param {number} reading
 * @returns {{ tone: 'ok' | 'warn', text: string }}
 */
export function judgeReading(truth, reading) {
  const off = reading - truth;
  if (Math.abs(off) <= TOLERANCE) {
    return { tone: 'ok', text: `Đo đúng: góc uốn khoảng ${truth}°. Đã ghi vào nhật kí.` };
  }
  return {
    tone: 'warn',
    text: `Số đo ${reading}° ${off > 0 ? 'lớn' : 'nhỏ'} hơn góc thật khoảng ${Math.abs(off)}°. Xoay tia đo cho trùng với đoạn ngọn rồi ghi lại.`,
  };
}

/**
 * @typedef {{ day: number, reading: number, truth: number }} Entry
 */

/**
 * Adds or replaces the entry for a day, keeping the diary in day order.
 * @param {Entry[]} log @param {Entry} entry
 */
export function record(log, entry) {
  return [...log.filter((x) => x.day !== entry.day), entry].sort((a, b) => a.day - b.day);
}

/**
 * Feedback on the whole diary.
 * @param {Experiment} e @param {Entry[]} log
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function diaryNote(e, log) {
  const good = log.filter((x) => Math.abs(x.reading - x.truth) <= TOLERANCE);
  if (good.length < 4) {
    return {
      tone: 'info',
      text: `Nhật kí có ${good.length} số đo đúng. Hãy đo và ghi ít nhất 4 ngày khác nhau, trong đó có ngày cuối (ngày ${e.days}).`,
    };
  }
  const last = good[good.length - 1];
  const first = good[0];
  if (last.day < e.days) {
    return { tone: 'info', text: `Còn thiếu số đo ngày cuối (ngày ${e.days}).` };
  }
  return {
    tone: 'ok',
    text: `Góc uốn tăng từ ${first.reading}° (ngày ${first.day}) lên ${last.reading}° (ngày ${last.day}). ${e.conclusion}`,
  };
}

/** @type {import('#lib/core/card-sorter.js').SortBin[]} */
export const AGENT_BINS = [
  { id: 'sang', label: 'Ánh sáng' },
  { id: 'trong-luc', label: 'Trọng lực' },
  { id: 'hoa', label: 'Nước, hoá chất' },
  { id: 'co-hoc', label: 'Tiếp xúc, va chạm' },
];

/** @type {import('#lib/core/card-sorter.js').SortCard[]} */
export const AGENT_CARDS = [
  {
    id: 'huong-duong',
    label: 'Cây non trồng sát tường mọc nghiêng ra phía ngoài sáng',
    bin: 'sang',
    why: 'Thân hướng sáng dương: tác nhân là ánh sáng chiếu từ một phía.',
  },
  {
    id: 'bo-cong-anh',
    label: 'Hoa bồ công anh nở lúc sáng, cụp lại lúc chạng vạng',
    bin: 'sang',
    why: 'Quang ứng động: hoa nở, cụp theo ánh sáng ngày đêm (kích thích không định hướng).',
  },
  {
    id: 'cay-do',
    label: 'Cây bị gió quật nằm rạp, vài ngày sau ngọn lại vươn lên',
    bin: 'trong-luc',
    why: 'Thân hướng trọng lực âm: ngọn uốn lên ngược chiều trọng lực.',
  },
  {
    id: 're-cong',
    label: 'Rễ cây đậu gieo lộn ngược vẫn đâm xuống đất',
    bin: 'trong-luc',
    why: 'Rễ hướng trọng lực dương.',
  },
  {
    id: 're-cong-nuoc',
    label: 'Rễ cây gần ao mọc dài về phía bờ ao',
    bin: 'hoa',
    why: 'Rễ hướng nước dương, mọc về phía nguồn nước.',
  },
  {
    id: 're-phan',
    label: 'Rễ lúa mọc dày ở chỗ bón phân',
    bin: 'hoa',
    why: 'Rễ hướng hoá dương với chất khoáng.',
  },
  {
    id: 'muop',
    label: 'Tua cuốn cây mướp quấn quanh cọc',
    bin: 'co-hoc',
    why: 'Hướng tiếp xúc: cọc chạm vào tua cuốn từ một phía.',
  },
  {
    id: 'trinh-nu',
    label: 'Lá trinh nữ cụp lại khi bị chạm',
    bin: 'co-hoc',
    why: 'Ứng động không sinh trưởng với kích thích cơ học.',
  },
];
