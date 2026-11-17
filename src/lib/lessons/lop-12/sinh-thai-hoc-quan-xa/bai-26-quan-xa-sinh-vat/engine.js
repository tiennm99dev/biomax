/**
 * Two classic models of how species in a community limit each other
 * (Lotka–Volterra), solved step by step with fourth-order Runge–Kutta.
 *
 * Predator and prey (vật ăn thịt – con mồi): the prey grows logistically up
 * to its carrying capacity and is eaten in proportion to how often prey and
 * predators meet; predators breed on what they eat and die off without
 * food. The two sizes swing out of step, the predator peak after the prey
 * peak, and settle towards a balance: the predator keeps the prey below
 * what the environment could hold (khống chế sinh học). Without predators
 * the prey simply grows up to K.
 *
 * Competition (cạnh tranh): two species share part of their resources.
 * `overlap` (the competition coefficient α, the same both ways) says how
 * much one individual of the other species costs, 0 when their ecological
 * niches do not overlap at all and 1 when they use exactly the same
 * resources. With K1 > K2 the two coexist while α < K2 / K1; above that the
 * stronger species excludes the weaker (cạnh tranh loại trừ).
 */

/** @typedef {{ t: number[], a: number[], b: number[] }} Series */

/**
 * One Runge–Kutta step of the system dy/dt = f(y).
 * @param {(y: number[]) => number[]} f
 * @param {number[]} y
 * @param {number} h
 */
function rk4(f, y, h) {
  const k1 = f(y);
  const k2 = f(y.map((v, i) => v + (h / 2) * k1[i]));
  const k3 = f(y.map((v, i) => v + (h / 2) * k2[i]));
  const k4 = f(y.map((v, i) => v + h * k3[i]));
  return y.map((v, i) => Math.max(0, v + (h / 6) * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i])));
}

/**
 * Integrates from `start` over `until` time units and keeps one sample per unit.
 * @param {(y: number[]) => number[]} f
 * @param {[number, number]} start
 * @param {number} until
 * @returns {Series}
 */
function solve(f, start, until) {
  const STEPS = 20;
  /** @type {Series} */
  const out = { t: [0], a: [start[0]], b: [start[1]] };
  let y = [...start];
  for (let t = 1; t <= until; t++) {
    for (let s = 0; s < STEPS; s++) y = rk4(f, y, 1 / STEPS);
    out.t.push(t);
    out.a.push(y[0]);
    out.b.push(y[1]);
  }
  return out;
}

/** Predator–prey parameters: prey growth, prey K, attack rate, conversion, predator death. */
export const PREY = { r: 0.6, k: 1000, attack: 0.01, gain: 0.005, death: 0.5 };

/**
 * Sizes of prey (a) and predators (b) over time.
 * @param {number} prey0
 * @param {number} predators0
 * @param {number} until
 * @param {typeof PREY} [p]
 */
export function predatorPrey(prey0, predators0, until, p = PREY) {
  return solve(
    ([x, y]) => [p.r * x * (1 - x / p.k) - p.attack * x * y, p.gain * x * y - p.death * y],
    [prey0, predators0],
    until,
  );
}

/**
 * Where the predator–prey system settles: prey held at death / gain, and
 * the predators that this prey level can feed.
 * @param {typeof PREY} [p]
 */
export function predatorPreyBalance(p = PREY) {
  const prey = p.death / p.gain;
  return { prey, predators: (p.r * (1 - prey / p.k)) / p.attack };
}

/** Competition parameters: growth rates and carrying capacities of species 1 and 2. */
export const RIVALS = { r1: 0.5, r2: 0.5, k1: 500, k2: 380 };

/**
 * Sizes of species 1 (a) and species 2 (b) competing with coefficient `overlap`.
 * @param {number} overlap α in 0..1
 * @param {number} until
 * @param {[number, number]} [start]
 * @param {typeof RIVALS} [p]
 */
export function competition(overlap, until, start = [20, 20], p = RIVALS) {
  return solve(
    ([x, y]) => [
      (p.r1 * x * (p.k1 - x - overlap * y)) / p.k1,
      (p.r2 * y * (p.k2 - y - overlap * x)) / p.k2,
    ],
    start,
    until,
  );
}

/**
 * The outcome of competition with coefficient `overlap` (α < 1): both
 * species coexist at the stated sizes, or species 1 excludes species 2.
 * @param {number} overlap
 * @param {typeof RIVALS} [p]
 * @returns {{ kind: 'coexist', a: number, b: number } | { kind: 'exclude', a: number, b: 0 }}
 */
export function competitionOutcome(overlap, p = RIVALS) {
  if (overlap < p.k2 / p.k1) {
    const d = 1 - overlap * overlap;
    return {
      kind: 'coexist',
      a: (p.k1 - overlap * p.k2) / d,
      b: (p.k2 - overlap * p.k1) / d,
    };
  }
  return { kind: 'exclude', a: p.k1, b: 0 };
}

/**
 * Indices of the local peaks of a series (higher than both neighbours).
 * @param {number[]} values
 */
export function peaks(values) {
  /** @type {number[]} */
  const out = [];
  for (let i = 1; i < values.length - 1; i++) {
    if (values[i] > values[i - 1] && values[i] >= values[i + 1]) out.push(i);
  }
  return out;
}

/**
 * Whether a series rises, falls or stays level around sample `i`.
 * @param {number[]} values
 * @param {number} i
 * @returns {'tang' | 'giam' | 'on-dinh'}
 */
export function trendAt(values, i) {
  const lo = Math.max(0, i - 1);
  const hi = Math.min(values.length - 1, i + 1);
  const change = values[hi] - values[lo];
  const scale = Math.max(1, Math.abs(values[i]));
  if (Math.abs(change) < 0.01 * scale) return 'on-dinh';
  return change > 0 ? 'tang' : 'giam';
}

/**
 * The live reading of the predator–prey chart at sample `i`.
 * @param {Series} s
 * @param {number} i
 */
export function explainPredation(s, i) {
  const prey = trendAt(s.a, i);
  const pred = trendAt(s.b, i);
  if (s.b[0] === 0) {
    return 'Không có vật ăn thịt: con mồi chỉ bị giới hạn bởi nguồn sống, số lượng tăng theo đường cong chữ S tới sức chứa của môi trường.';
  }
  if (prey === 'on-dinh' && pred === 'on-dinh') {
    return 'Hai quần thể đã ở trạng thái cân bằng: vật ăn thịt khống chế số con mồi ở mức thấp hơn nhiều so với sức chứa của môi trường (khống chế sinh học).';
  }
  if (prey === 'tang' && pred !== 'tang') {
    return 'Vật ăn thịt ít, con mồi ít bị ăn nên số con mồi tăng; thức ăn dồi dào dần làm vật ăn thịt sắp tăng theo.';
  }
  if (prey === 'tang' && pred === 'tang') {
    return 'Con mồi nhiều, vật ăn thịt có nhiều thức ăn nên số lượng của chúng cũng tăng.';
  }
  if (prey !== 'tang' && pred === 'tang') {
    return 'Vật ăn thịt đông lên, ăn nhiều con mồi nên số con mồi giảm.';
  }
  return 'Con mồi đã giảm, vật ăn thịt thiếu thức ăn nên số lượng giảm theo; sau đó con mồi lại có cơ hội tăng.';
}
