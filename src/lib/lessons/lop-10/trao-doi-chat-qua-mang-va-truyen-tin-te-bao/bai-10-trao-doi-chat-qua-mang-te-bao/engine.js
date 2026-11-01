/**
 * A membrane between the outside and the inside of a cell: particles wander
 * in two chambers and cross only where the substance can cross, a pump spends
 * ATP to carry K⁺ inwards, and the membrane shapes of endocytosis and
 * exocytosis. No DOM here, so all of it is tested in Node.
 */

import { seeded } from '#lib/domain/diagrams.js';

export const BOARD_W = 360;
export const BOARD_H = 220;
export const MEMBRANE_X = BOARD_W / 2;
/** Half the membrane's thickness on the board. */
export const BAND = 10;
export const PARTICLE_R = 4;
export const PUMP_Y = 110;
/** Where the transport proteins sit, in the order they are added. */
export const CHANNEL_YS = [65, 155, 25, 195];
export const CHANNEL_HALF = 16;
export const ATP_FULL = 90;

const SPEED = 120;
const WANDER = 5;
const PUMP_RATE = 3;
const PUMP_REACH = 80;
const SMOOTH_TIME = 3;
/** The smoothed difference must drop this low to call the sides balanced. */
const BALANCED_WITHIN = 3;
/** And must rise this high to call a side richer again, so noise does not flip the text. */
const GRADIENT_FROM = 9;

/**
 * @typedef {'o2' | 'glucose' | 'k'} SubstanceId
 * @typedef {{
 *   id: SubstanceId;
 *   name: string;
 *   needsProtein: boolean;
 *   pumpable: boolean;
 *   crossChance: number;
 *   route: string;
 *   color: string;
 * }} Substance
 */

/** @type {Substance[]} */
export const SUBSTANCES = [
  {
    id: 'o2',
    name: 'O₂',
    needsProtein: false,
    pumpable: false,
    crossChance: 0.7,
    route: 'Khuếch tán đơn giản qua lớp kép phospholipid',
    color: '#0284c7',
  },
  {
    id: 'glucose',
    name: 'Glucose',
    needsProtein: true,
    pumpable: false,
    crossChance: 1,
    route: 'Khuếch tán tăng cường qua protein mang',
    color: '#d97706',
  },
  {
    id: 'k',
    name: 'Ion K⁺',
    needsProtein: true,
    pumpable: true,
    crossChance: 1,
    route: 'Khuếch tán tăng cường qua protein kênh',
    color: '#7c3aed',
  },
];

/**
 * @param {SubstanceId} id
 * @returns {Substance}
 */
export function substanceOf(id) {
  const s = SUBSTANCES.find((v) => v.id === id);
  if (!s) throw new Error(`unknown substance ${id}`);
  return s;
}

/**
 * @typedef {{ x: number, y: number, a: number }} Particle
 * @typedef {{
 *   substance: SubstanceId;
 *   channels: number;
 *   particles: Particle[];
 *   atp: number;
 *   pumpClock: number;
 *   diff: number;
 *   trend: -1 | 0 | 1;
 *   rand: () => number;
 * }} Sim
 */

/**
 * @param {number} diff Outside count minus inside count, smoothed.
 * @param {-1 | 0 | 1} trend The previous reading.
 * @returns {-1 | 0 | 1}
 */
function nextTrend(diff, trend) {
  if (Math.abs(diff) <= BALANCED_WITHIN) return 0;
  if (Math.abs(diff) >= GRADIENT_FROM) return diff > 0 ? 1 : -1;
  return trend;
}

/**
 * How many particles lie on each side of the membrane.
 * @param {Pick<Sim, 'particles'>} sim
 */
export function counts(sim) {
  const outside = sim.particles.filter((p) => p.x < MEMBRANE_X).length;
  return { outside, inside: sim.particles.length - outside };
}

/**
 * @param {{
 *   substance: SubstanceId;
 *   outside: number;
 *   inside: number;
 *   channels: number;
 *   atp?: number;
 *   seed?: number;
 * }} setup
 * @returns {Sim}
 */
export function createSim({ substance, outside, inside, channels, atp = ATP_FULL, seed = 1 }) {
  const rand = seeded(seed);
  /** @param {number} from @param {number} to @returns {Particle} */
  const place = (from, to) => ({
    x: from + rand() * (to - from),
    y: PARTICLE_R + rand() * (BOARD_H - 2 * PARTICLE_R),
    a: rand() * Math.PI * 2,
  });
  const left = MEMBRANE_X - BAND - PARTICLE_R;
  const right = MEMBRANE_X + BAND + PARTICLE_R;
  const particles = [
    ...Array.from({ length: outside }, () => place(PARTICLE_R, left)),
    ...Array.from({ length: inside }, () => place(right, BOARD_W - PARTICLE_R)),
  ];
  const diff = outside - inside;
  return {
    substance,
    channels,
    particles,
    atp,
    pumpClock: 0,
    diff,
    trend: nextTrend(diff, diff > 0 ? 1 : diff < 0 ? -1 : 0),
    rand,
  };
}

/**
 * Whether a particle meeting the membrane at height y finds a way through.
 * @param {Substance} sub
 * @param {number} channels
 * @param {number} y
 */
export function hasWayAt(sub, channels, y) {
  if (!sub.needsProtein) return true;
  return CHANNEL_YS.slice(0, channels).some((c) => Math.abs(y - c) <= CHANNEL_HALF);
}

/**
 * One time step: every particle moves and bounces or crosses, then the pump
 * carries K⁺ inwards while it has ATP and an ion within reach.
 * @param {Sim} sim
 * @param {number} dt Seconds.
 * @param {boolean} pumpOn
 * @returns {Sim}
 */
export function stepSim(sim, dt, pumpOn) {
  const sub = substanceOf(sim.substance);
  const { rand } = sim;
  const leftEdge = MEMBRANE_X - BAND - PARTICLE_R;
  const rightEdge = MEMBRANE_X + BAND + PARTICLE_R;
  const particles = sim.particles.map((p) => {
    let a = p.a + (rand() - 0.5) * WANDER * dt;
    let x = p.x + Math.cos(a) * SPEED * dt;
    let y = p.y + Math.sin(a) * SPEED * dt;
    if (y < PARTICLE_R || y > BOARD_H - PARTICLE_R) {
      y = Math.min(BOARD_H - PARTICLE_R, Math.max(PARTICLE_R, y));
      a = -a;
    }
    if (x < PARTICLE_R || x > BOARD_W - PARTICLE_R) {
      x = Math.min(BOARD_W - PARTICLE_R, Math.max(PARTICLE_R, x));
      a = Math.PI - a;
    }
    const fromLeft = p.x <= leftEdge && x > leftEdge;
    const fromRight = p.x >= rightEdge && x < rightEdge;
    if (fromLeft || fromRight) {
      if (hasWayAt(sub, sim.channels, y) && rand() < sub.crossChance) {
        x = fromLeft ? rightEdge : leftEdge;
      } else {
        x = fromLeft ? leftEdge : rightEdge;
        a = Math.PI - a;
      }
    }
    return { x, y, a };
  });

  let { atp, pumpClock } = sim;
  if (pumpOn && sub.pumpable && atp > 0) {
    pumpClock += dt;
    while (pumpClock >= 1 / PUMP_RATE && atp > 0) {
      const ion = nearestToPump(particles);
      if (ion < 0) {
        pumpClock = 0;
        break;
      }
      particles[ion] = { ...particles[ion], x: rightEdge, y: PUMP_Y };
      atp -= 1;
      pumpClock -= 1 / PUMP_RATE;
    }
  }

  const { outside, inside } = counts({ particles });
  const diff = sim.diff + (outside - inside - sim.diff) * (1 - Math.exp(-dt / SMOOTH_TIME));
  return { ...sim, particles, atp, pumpClock, diff, trend: nextTrend(diff, sim.trend) };
}

/**
 * The outside particle closest to the pump within its reach, or -1.
 * @param {Particle[]} particles
 */
function nearestToPump(particles) {
  let best = -1;
  let bestDist = PUMP_REACH;
  particles.forEach((p, i) => {
    if (p.x >= MEMBRANE_X) return;
    const d = Math.hypot(p.x - MEMBRANE_X, p.y - PUMP_Y);
    if (d < bestDist) {
      best = i;
      bestDist = d;
    }
  });
  return best;
}

/**
 * The live sentence under the simulation. It holds no counts, so it changes
 * only when the situation does and screen readers are not flooded.
 * @param {Sim} sim
 * @param {boolean} pumpOn
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function describe(sim, pumpOn) {
  const sub = substanceOf(sim.substance);
  if (sim.particles.length === 0) {
    return {
      tone: 'info',
      text: `Chưa có ${sub.name} ở cả hai bên. Hãy kéo thanh để đặt số hạt ở mỗi bên.`,
    };
  }
  if (pumpOn && sub.pumpable) {
    if (sim.atp <= 0) {
      return {
        tone: 'warn',
        text: 'Hết ATP nên bơm ngừng hoạt động. Nếu còn protein kênh, K⁺ lại khuếch tán từ nơi nồng độ cao sang nơi nồng độ thấp.',
      };
    }
    return {
      tone: 'ok',
      text: 'Vận chuyển chủ động: bơm tiêu tốn ATP để đưa K⁺ vào tế bào, kể cả khi trong tế bào đã nhiều K⁺ hơn bên ngoài.',
    };
  }
  if (sub.needsProtein && sim.channels === 0) {
    return {
      tone: 'warn',
      text: `${sub.name} không tự đi qua được lớp kép phospholipid. Không có protein vận chuyển thì nồng độ hai bên không đổi.`,
    };
  }
  if (sim.trend === 0) {
    return {
      tone: 'ok',
      text: `Hai bên đã gần cân bằng. Các hạt vẫn qua lại nhưng số đi vào gần bằng số đi ra. Con đường: ${sub.route.toLowerCase()}.`,
    };
  }
  const way = sim.trend > 0 ? 'từ ngoài vào trong tế bào' : 'từ trong tế bào ra ngoài';
  return {
    tone: 'info',
    text: `${sub.route}: chất đi nhiều hơn theo chiều ${way}, xuôi chiều nồng độ, không tốn ATP.`,
  };
}

/**
 * @typedef {'thuc-bao' | 'am-bao' | 'xuat-bao'} BulkId
 * @typedef {{
 *   id: BulkId;
 *   name: string;
 *   cargo: 'bacterium' | 'droplets';
 *   belly: number;
 *   inward: boolean;
 *   steps: string[];
 * }} BulkMode
 */

/** @type {BulkMode[]} */
export const BULK_MODES = [
  {
    id: 'thuc-bao',
    name: 'Thực bào',
    cargo: 'bacterium',
    belly: 50,
    inward: true,
    steps: [
      'Bên ngoài tế bào có một vi khuẩn. Thụ thể trên màng nhận ra nó.',
      'Màng biến dạng, bao lấy vi khuẩn.',
      'Hai mép màng tiến sát nhau, gần khép kín.',
      'Màng khép lại, tạo túi đưa vi khuẩn vào tế bào chất. Túi này sau đó có thể dung hợp với lysosome để phân giải vi khuẩn.',
    ],
  },
  {
    id: 'am-bao',
    name: 'Ẩm bào',
    cargo: 'droplets',
    belly: 28,
    inward: true,
    steps: [
      'Bên ngoài tế bào có dịch chứa các chất tan.',
      'Màng lõm vào, giữ lại một ít dịch.',
      'Chỗ lõm sâu dần, miệng lõm hẹp lại.',
      'Màng khép lại, tạo túi nhỏ đưa dịch và chất tan vào tế bào chất.',
    ],
  },
  {
    id: 'xuat-bao',
    name: 'Xuất bào',
    cargo: 'droplets',
    belly: 34,
    inward: false,
    steps: [
      'Trong tế bào chất có một túi chứa chất cần tiết, ví dụ protein từ bộ máy Golgi.',
      'Túi di chuyển đến sát màng sinh chất và dung hợp với màng.',
      'Chỗ dung hợp mở rộng về phía ngoài, chất trong túi được giải phóng.',
      'Chất đã ra ngoài tế bào, màng túi trở thành một phần của màng sinh chất.',
    ],
  },
];

export const MEMBRANE_Y = 90;
export const BULK_W = 360;
export const BULK_H = 230;
/** Number of drawn steps of each process. */
export const BULK_STEPS = 4;

/**
 * @param {BulkId} id
 * @returns {BulkMode}
 */
export function bulkOf(id) {
  const m = BULK_MODES.find((v) => v.id === id);
  if (!m) throw new Error(`unknown process ${id}`);
  return m;
}

/**
 * The membrane line for a pit of the given neck, belly and depth.
 * @param {number} neck
 * @param {number} belly
 * @param {number} depth
 */
function pitPath(neck, belly, depth) {
  const c = BULK_W / 2;
  const y = MEMBRANE_Y;
  return [
    `M 0 ${y}`,
    `L ${c - neck - 14} ${y}`,
    `Q ${c - neck} ${y} ${c - neck} ${y + 10}`,
    `C ${c - belly} ${y + depth * 0.4} ${c - belly} ${y + depth} ${c} ${y + depth}`,
    `C ${c + belly} ${y + depth} ${c + belly} ${y + depth * 0.4} ${c + neck} ${y + 10}`,
    `Q ${c + neck} ${y} ${c + neck + 14} ${y}`,
    `L ${BULK_W} ${y}`,
  ].join(' ');
}

/**
 * What to draw at one step: the membrane, a closed vesicle when there is one,
 * and how far down the cargo sits. Endocytosis runs from flat to vesicle;
 * exocytosis is the same picture run backwards.
 * @param {BulkId} id
 * @param {number} step 0 to BULK_STEPS - 1.
 * @returns {{ path: string, vesicle: { cy: number, r: number } | null, cargoY: number }}
 */
export function bulkShape(id, step) {
  const { belly, inward } = bulkOf(id);
  const stage = inward ? step : BULK_STEPS - 1 - step;
  const flat = `M 0 ${MEMBRANE_Y} L ${BULK_W} ${MEMBRANE_Y}`;
  if (stage === 0) return { path: flat, vesicle: null, cargoY: 45 };
  if (stage === 1) {
    return { path: pitPath(belly, belly, 45), vesicle: null, cargoY: MEMBRANE_Y + 8 };
  }
  if (stage === 2) {
    return { path: pitPath(9, belly, 88), vesicle: null, cargoY: MEMBRANE_Y + 42 };
  }
  return { path: flat, vesicle: { cy: 170, r: belly * 0.86 }, cargoY: 170 };
}

/** @type {import('#lib/domain/diagrams.js').Shape[]} */
const LIPIDS = [];
for (let x = 12; x <= 348; x += 16) {
  LIPIDS.push(
    { kind: 'line', x1: x, y1: 88, x2: x, y2: 118, stroke: '#a16207', width: 2 },
    { kind: 'line', x1: x, y1: 122, x2: x, y2: 152, stroke: '#a16207', width: 2 },
    { kind: 'circle', cx: x, cy: 84, r: 6, fill: '#fbbf24', stroke: '#92400e', width: 1 },
    { kind: 'circle', cx: x, cy: 156, r: 6, fill: '#fbbf24', stroke: '#92400e', width: 1 },
  );
}

/**
 * The fluid mosaic membrane, drawn with its outer face up.
 * @type {import('#lib/domain/diagrams.js').Diagram}
 */
export const MEMBRANE = {
  id: 'mang-kham-dong',
  title: 'Mô hình khảm động của màng sinh chất',
  width: 360,
  height: 230,
  shapes: [
    { kind: 'rect', x: 0, y: 0, w: 360, h: 78, fill: '#f0f9ff' },
    { kind: 'rect', x: 0, y: 162, w: 360, h: 68, fill: '#fff1f2' },
    { kind: 'text', x: 48, y: 18, text: 'Ngoài tế bào', size: 12 },
    { kind: 'text', x: 44, y: 222, text: 'Tế bào chất', size: 12 },
    ...LIPIDS,
    { kind: 'path', d: 'M 130 66 q -8 -12 0 -22 q 8 -10 0 -22', stroke: '#be185d', width: 3 },
    { kind: 'circle', cx: 130, cy: 44, r: 4, fill: '#ec4899' },
    { kind: 'circle', cx: 130, cy: 22, r: 4, fill: '#ec4899' },
    {
      kind: 'ellipse',
      cx: 130,
      cy: 120,
      rx: 24,
      ry: 54,
      fill: '#5eead4',
      stroke: '#0f766e',
      width: 2,
    },
    {
      kind: 'ellipse',
      cx: 262,
      cy: 170,
      rx: 26,
      ry: 13,
      fill: '#c4b5fd',
      stroke: '#5b21b6',
      width: 2,
    },
    {
      kind: 'ellipse',
      cx: 204,
      cy: 104,
      rx: 5,
      ry: 15,
      fill: '#fb923c',
      stroke: '#9a3412',
      width: 1,
    },
  ],
  parts: [
    {
      id: 'phospholipid',
      name: 'Lớp kép phospholipid',
      info: 'Đầu ưa nước quay ra hai phía, đuôi kị nước quay vào nhau. Các chất nhỏ không phân cực đi qua được lớp này.',
      x: 60,
      y: 120,
    },
    {
      id: 'protein-xuyen',
      name: 'Protein xuyên màng',
      info: 'Xuyên qua lớp kép, có thể làm kênh, protein mang hoặc bơm để vận chuyển các chất.',
      x: 130,
      y: 120,
    },
    {
      id: 'protein-bam',
      name: 'Protein bám màng',
      info: 'Nằm ở bề mặt màng, tham gia các hoạt động như xúc tác và neo giữ khung xương tế bào.',
      x: 262,
      y: 170,
    },
    {
      id: 'cholesterol',
      name: 'Cholesterol',
      accept: ['colesterol'],
      info: 'Xen trong lớp kép ở tế bào động vật, giúp điều chỉnh độ linh hoạt của màng.',
      x: 204,
      y: 76,
    },
    {
      id: 'carbohydrate',
      name: 'Chuỗi carbohydrate',
      accept: ['carbohydrate', 'glycoprotein'],
      info: 'Gắn với protein tạo glycoprotein ở mặt ngoài màng, giúp các tế bào nhận biết nhau và tiếp nhận thông tin.',
      x: 152,
      y: 30,
    },
  ],
};
