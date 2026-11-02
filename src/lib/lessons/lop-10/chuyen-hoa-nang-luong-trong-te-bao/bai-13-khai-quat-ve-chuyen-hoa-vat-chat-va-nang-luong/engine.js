/**
 * The models behind the enzyme widgets. Numbers are teaching values, not lab
 * measurements: an activity from 0 to 100 that rises and falls with the
 * temperature, the pH and the amounts of enzyme and substrate, and an energy
 * profile whose peak an enzyme lowers.
 */

/** @typedef {'temp' | 'ph' | 'substrate' | 'enzyme'} FactorId */
/** @typedef {{ temp: number, ph: number, substrate: number, enzyme: number }} Conditions */
/** @typedef {{ id: string, name: string, bestPh: number }} Enzyme */

/** @type {Enzyme[]} */
export const ENZYMES = [
  { id: 'amylase', name: 'Amylase nước bọt', bestPh: 7 },
  { id: 'pepsin', name: 'Pepsin dạ dày', bestPh: 2 },
];

export const BEST_TEMP = 37;
/** At or above this temperature the enzyme loses its shape for good. */
export const DENATURE_TEMP = 60;
/** This far from the best pH the enzyme loses its shape for good. */
export const DENATURE_PH_GAP = 3.5;

/** @type {Record<FactorId, { label: string, min: number, max: number, step: number, unit: string }>} */
export const FACTORS = {
  temp: { label: 'Nhiệt độ', min: 0, max: 80, step: 1, unit: '°C' },
  ph: { label: 'Độ pH', min: 1, max: 12, step: 0.5, unit: '' },
  substrate: { label: 'Nồng độ cơ chất', min: 0, max: 100, step: 5, unit: '%' },
  enzyme: { label: 'Nồng độ enzyme', min: 0, max: 100, step: 5, unit: '%' },
};

/**
 * @param {number} temp
 */
export function tempFactor(temp) {
  if (temp >= DENATURE_TEMP) return 0;
  if (temp <= BEST_TEMP) return 2 ** ((temp - BEST_TEMP) / 10);
  return 1 - ((temp - BEST_TEMP) / (DENATURE_TEMP - BEST_TEMP)) ** 2;
}

/**
 * @param {number} ph
 * @param {number} bestPh
 */
export function phFactor(ph, bestPh) {
  const gap = Math.abs(ph - bestPh);
  return gap >= DENATURE_PH_GAP ? 0 : Math.exp(-((gap / 1.3) ** 2));
}

/**
 * Whichever is scarcer limits the rate, so raising either one alone levels
 * off. Equals 1 when both are at 100.
 * @param {number} substrate
 * @param {number} enzyme
 */
export function amountFactor(substrate, enzyme) {
  const sum = substrate + enzyme;
  return sum === 0 ? 0 : (2 * substrate * enzyme) / sum / 100;
}

/**
 * Conditions that destroy the enzyme's shape.
 * @param {Conditions} c
 * @param {number} bestPh
 */
export function destroys(c, bestPh) {
  return c.temp >= DENATURE_TEMP || Math.abs(c.ph - bestPh) >= DENATURE_PH_GAP;
}

/**
 * Activity from 0 to 100.
 * @param {Conditions} c
 * @param {number} bestPh
 */
export function activity(c, bestPh) {
  return 100 * tempFactor(c.temp) * phFactor(c.ph, bestPh) * amountFactor(c.substrate, c.enzyme);
}

/**
 * Activity along one factor with the others held, as chart points.
 * @param {FactorId} factor
 * @param {Conditions} c
 * @param {number} bestPh
 * @param {boolean} ruined An enzyme already destroyed stays at 0.
 * @param {number} [count]
 * @returns {Array<{ x: number, y: number }>}
 */
export function activityCurve(factor, c, bestPh, ruined, count = 81) {
  const { min, max } = FACTORS[factor];
  return Array.from({ length: count }, (_, i) => {
    const x = min + ((max - min) * i) / (count - 1);
    return { x, y: ruined ? 0 : activity({ ...c, [factor]: x }, bestPh) };
  });
}

/**
 * What the learner has done in the activity widget.
 * @typedef {{ best: boolean, ruined: boolean, cold: boolean, rewarmed: boolean, level: boolean, acid: boolean }} Seen
 */

/** @type {Seen} */
export const NOTHING_SEEN = {
  best: false,
  ruined: false,
  cold: false,
  rewarmed: false,
  level: false,
  acid: false,
};

/**
 * @param {Seen} seen
 * @param {Conditions} c
 * @param {Enzyme} enzyme
 * @param {boolean} ruined
 * @returns {Seen}
 */
export function updateSeen(seen, c, enzyme, ruined) {
  const nearBest = Math.abs(c.ph - enzyme.bestPh) <= 0.5;
  const cold = seen.cold || (!ruined && c.temp <= 5);
  return {
    best: seen.best || (!ruined && Math.abs(c.temp - BEST_TEMP) <= 2 && nearBest),
    ruined: seen.ruined || ruined,
    cold,
    rewarmed: seen.rewarmed || (seen.cold && !ruined && c.temp >= 30),
    level: seen.level || (!ruined && c.substrate >= 90),
    acid: seen.acid || (!ruined && enzyme.id === 'pepsin' && c.ph <= 3),
  };
}

/**
 * The live sentence under the activity chart.
 * @param {Conditions} c
 * @param {Enzyme} enzyme
 * @param {boolean} ruined
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function describeActivity(c, enzyme, ruined) {
  if (ruined) {
    return {
      tone: 'warn',
      text: 'Enzyme đã biến tính: cấu hình không gian bị phá huỷ, trung tâm hoạt động không còn khớp với cơ chất. Đưa điều kiện về như cũ cũng không cứu được, hãy lấy ống enzyme mới.',
    };
  }
  if (c.substrate === 0) {
    return { tone: 'info', text: 'Không có cơ chất nên không có phản ứng nào để xúc tác.' };
  }
  if (c.enzyme === 0) {
    return {
      tone: 'info',
      text: 'Không có enzyme nên phản ứng diễn ra quá chậm, coi như không đáng kể.',
    };
  }
  if (c.temp <= 15) {
    return {
      tone: 'info',
      text: 'Nhiệt độ thấp: hoạt tính rất yếu nhưng enzyme chưa hỏng. Hãy thử làm ấm lại xem sao.',
    };
  }
  if (Math.abs(c.ph - enzyme.bestPh) > 1.5) {
    return {
      tone: 'info',
      text: `Độ pH lệch xa khoảng thích hợp của ${enzyme.name.toLowerCase()} nên hoạt tính giảm mạnh.`,
    };
  }
  if (c.temp > BEST_TEMP + 8) {
    return {
      tone: 'warn',
      text: 'Nhiệt độ đã vượt mức thích hợp, hoạt tính giảm nhanh. Nóng thêm nữa enzyme sẽ biến tính.',
    };
  }
  if (Math.abs(c.temp - BEST_TEMP) <= 2 && Math.abs(c.ph - enzyme.bestPh) <= 0.5) {
    return {
      tone: 'ok',
      text: 'Nhiệt độ và pH đều ở mức thích hợp: enzyme hoạt động mạnh nhất với lượng cơ chất và enzyme này.',
    };
  }
  return {
    tone: 'info',
    text: 'Enzyme đang hoạt động. Kéo thanh trượt để tìm điều kiện thích hợp nhất.',
  };
}

/** Energy levels of the example reaction, in relative units. */
export const PROFILE = { reactant: 60, product: 30, plain: 60, withEnzyme: 25, top: 130 };

/**
 * Height of the energy profile at a progress x from 0 to 1: it climbs from
 * the substrate to a peak at the middle, then falls to the product.
 * @param {number} x
 * @param {number} barrier The activation energy.
 */
export function energyAt(x, barrier) {
  const peak = PROFILE.reactant + barrier;
  if (x <= 0.5) return PROFILE.reactant + (barrier * (1 - Math.cos(2 * Math.PI * x))) / 2;
  return PROFILE.product + ((peak - PROFILE.product) * (1 - Math.cos(2 * Math.PI * x))) / 2;
}

/**
 * Where a substrate molecule given this much energy stands: up the slope when
 * the energy is short of the barrier, past it at the product otherwise.
 * @param {number} given
 * @param {number} barrier
 * @returns {{ x: number, crossed: boolean }}
 */
export function ballOn(given, barrier) {
  if (given >= barrier) return { x: 1, crossed: true };
  return { x: Math.acos(1 - (2 * Math.max(0, given)) / barrier) / (2 * Math.PI), crossed: false };
}

/**
 * Steps of one catalytic cycle. Only a substrate that fits the active site
 * gets past the first.
 */
export const CYCLE_STEPS = [
  'Enzyme và cơ chất còn ở riêng. Trung tâm hoạt động của enzyme đang trống.',
  'Giai đoạn 1: cơ chất liên kết đặc hiệu vào trung tâm hoạt động, tạo phức hợp enzyme – cơ chất. Cả hai đều đổi cấu hình một chút để khớp chặt hơn.',
  'Giai đoạn 2: enzyme xúc tác, cơ chất biến đổi thành sản phẩm.',
  'Giai đoạn 3: sản phẩm tách khỏi enzyme, enzyme trở lại hình dạng ban đầu, không bị biến đổi và sẵn sàng cho lượt mới.',
];

export const NO_FIT =
  'Protein không khớp với trung tâm hoạt động của amylase nên không tạo được phức hợp: enzyme có tính đặc hiệu. Muốn phân giải protein phải có protease.';

/**
 * @param {number} step
 * @returns {{ step: number, finished: boolean }} The step after this one;
 *   the cycle starts over after the last step and counts one turn.
 */
export function nextStep(step) {
  return step >= CYCLE_STEPS.length - 1
    ? { step: 0, finished: true }
    : { step: step + 1, finished: false };
}

const P_X = [212, 262, 312];
const BOND_MID = [237, 287];

/** @type {import('#lib/domain/diagrams.js').Diagram} */
export const ATP_DIAGRAM = {
  id: 'phan-tu-atp',
  title: 'Cấu tạo của phân tử ATP',
  width: 380,
  height: 220,
  shapes: [
    { kind: 'line', x1: 78, y1: 66, x2: 110, y2: 110, stroke: '#475569', width: 4 },
    { kind: 'line', x1: 150, y1: 130, x2: 212, y2: 130, stroke: '#475569', width: 4 },
    ...BOND_MID.map(
      (x) =>
        /** @type {import('#lib/domain/diagrams.js').Shape} */ ({
          kind: 'path',
          d: `M ${x - 8} 130 q 4 -7 8 0 t 8 0`,
          fill: 'none',
          stroke: '#dc2626',
          width: 4,
        }),
    ),
    {
      kind: 'rect',
      x: 26,
      y: 26,
      w: 92,
      h: 44,
      rx: 10,
      fill: '#bfdbfe',
      stroke: '#1d4ed8',
      width: 2,
    },
    { kind: 'text', x: 72, y: 54, text: 'Adenine', size: 15, fill: '#1e3a8a' },
    {
      kind: 'path',
      d: 'M 130 98 L 158 118 L 148 152 L 112 152 L 102 118 Z',
      fill: '#bbf7d0',
      stroke: '#15803d',
      width: 2,
    },
    { kind: 'text', x: 130, y: 134, text: 'Ribose', size: 12, fill: '#14532d' },
    ...P_X.flatMap(
      (x) =>
        /** @type {import('#lib/domain/diagrams.js').Shape[]} */ ([
          { kind: 'circle', cx: x, cy: 130, r: 17, fill: '#fde68a', stroke: '#b45309', width: 2 },
          { kind: 'text', x, y: 135, text: 'P', size: 15, fill: '#78350f' },
        ]),
    ),
  ],
  parts: [
    {
      id: 'adenine',
      name: 'Adenine',
      accept: ['base adenine', 'gốc adenine'],
      info: 'Một loại base nitrogen, gắn với đường ribose.',
      x: 72,
      y: 16,
    },
    {
      id: 'ribose',
      name: 'Đường ribose',
      accept: ['ribose'],
      info: 'Đường 5 carbon, nối adenine với chuỗi ba gốc phosphate.',
      x: 130,
      y: 172,
    },
    {
      id: 'phosphate',
      name: 'Ba gốc phosphate',
      accept: ['gốc phosphate', 'nhóm phosphate', 'phosphate'],
      info: 'Ba gốc mang điện tích âm, nằm sát nhau nên đẩy nhau; đó là lí do liên kết giữa chúng dễ bị phá vỡ.',
      x: 212,
      y: 172,
    },
    {
      id: 'cao-nang',
      name: 'Liên kết cao năng',
      accept: ['liên kết phosphate cao năng'],
      info: 'Hai liên kết giữa các gốc phosphate dễ bị phá vỡ và giải phóng nhiều năng lượng. Mất gốc phosphate ngoài cùng, ATP thành ADP.',
      x: 287,
      y: 92,
    },
  ],
};
