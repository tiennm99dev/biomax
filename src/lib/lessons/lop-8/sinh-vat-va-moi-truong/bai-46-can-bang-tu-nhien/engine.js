/**
 * Snowshoe hare and lynx style predator–prey model for the natural-balance
 * lesson (thỏ – cáo). Rabbits grow logistically up to the carrying capacity
 * of the grassland and are eaten by foxes; foxes grow from the rabbits they
 * eat and die at a fixed rate. People may hunt either species, as a share of
 * the population taken each year.
 *
 *   dR/dt = a·R·(1 − R/K) − b·R·F − hR·R
 *   dF/dt = c·b·R·F − m·F − hF·F
 *
 * Without hunting the two populations swing out of phase (foxes peak after
 * rabbits) and the swings shrink towards the equilibrium R*, F*: the
 * biological control (khống chế sinh học) that keeps the community in
 * balance. A population that falls below one individual is extinct.
 */

export const PARAMS = /** @type {const} */ ({
  a: 1, // rabbit birth surplus per year
  K: 2000, // rabbits the grassland can feed
  b: 0.01, // share of rabbits one fox catches per year
  c: 0.1, // foxes raised per rabbit eaten
  m: 0.3, // fox death rate per year
});

export const YEARS = 60;

/**
 * Hunting given as the share of a population taken in a year (0–1), turned
 * into the steady removal rate that takes exactly that share in one year when
 * nothing else changes: h = −ln(1 − p). Taking everything is an infinite rate.
 * @param {number} share
 */
export function huntRate(share) {
  if (share >= 1) return Infinity;
  return share <= 0 ? 0 : -Math.log(1 - share);
}
const DT = 0.01;
const PER_SAMPLE = 25; // four samples per year

/**
 * Individuals removed per year at removal rate h; an infinite rate takes all
 * of them in the first step (and none once they are gone).
 * @param {number} h
 * @param {number} n
 */
const taken = (h, n) => (h === Infinity ? (n > 0 ? n / DT : 0) : h * n);

/**
 * The equilibrium the populations settle towards, or null when foxes cannot
 * persist at these hunting rates.
 * @param {number} huntFox share of foxes taken each year, 0–1
 * @param {number} huntRabbit share of rabbits taken each year, 0–1
 */
export function equilibrium(huntFox = 0, huntRabbit = 0) {
  const { a, K, b, c, m } = PARAMS;
  const r = (m + huntRate(huntFox)) / (c * b);
  const f = (a * (1 - r / K) - huntRate(huntRabbit)) / b;
  if (f <= 0) return null;
  return { rabbits: r, foxes: f };
}

/**
 * Simulate the two populations year by year.
 * @param {{ rabbits: number, foxes: number, huntFox?: number, huntRabbit?: number, years?: number }} opts
 * @returns {Array<{ t: number, rabbits: number, foxes: number }>} four samples per year
 */
export function simulate(opts) {
  const { a, K, b, c, m } = PARAMS;
  const { years = YEARS } = opts;
  const hF = huntRate(opts.huntFox ?? 0);
  const hR = huntRate(opts.huntRabbit ?? 0);
  let r = opts.rabbits;
  let f = opts.foxes;
  const out = [{ t: 0, rabbits: r, foxes: f }];
  const steps = Math.round(years / DT);
  for (let i = 1; i <= steps; i++) {
    const eaten = b * r * f;
    const dr = a * r * (1 - r / K) - eaten - taken(hR, r);
    const df = c * eaten - m * f - taken(hF, f);
    r = Math.max(0, r + dr * DT);
    f = Math.max(0, f + df * DT);
    if (r < 1) r = 0;
    if (f < 1) f = 0;
    if (i % PER_SAMPLE === 0) out.push({ t: i * DT, rabbits: r, foxes: f });
  }
  return out;
}

/** @typedef {'balanced' | 'swinging' | 'no-fox' | 'no-rabbit'} Outcome */

/**
 * How the community ends after the simulated years: both kept in balance
 * (small swings round the equilibrium), still swinging widely, foxes gone
 * (rabbits overrun the grass) or rabbits gone (and the foxes with them).
 * @param {Array<{ t: number, rabbits: number, foxes: number }>} run
 * @returns {Outcome}
 */
export function outcome(run) {
  const last = run[run.length - 1];
  if (last.rabbits === 0) return 'no-rabbit';
  if (last.foxes === 0) return 'no-fox';
  const tail = run.slice(-40); // the last ten years
  const rs = tail.map((p) => p.rabbits);
  const mean = rs.reduce((s, v) => s + v, 0) / rs.length;
  const spread = Math.max(...rs) - Math.min(...rs);
  return spread <= 0.2 * mean ? 'balanced' : 'swinging';
}

/** @typedef {Outcome | 'fox-starved' | 'both-hunted'} Verdict */

/**
 * The verdict the widget shows, which also says why foxes vanished: hunted
 * out themselves (their hunting alone is more than they can bear), or starved
 * because the rabbits were hunted too hard; and whether the rabbits left
 * behind overran the grassland or were kept low by hunting too.
 * @param {Array<{ t: number, rabbits: number, foxes: number }>} run
 * @param {number} huntFox share of foxes taken each year, 0–1
 * @returns {Verdict}
 */
export function verdict(run, huntFox = 0) {
  const result = outcome(run);
  if (result !== 'no-fox') return result;
  if (equilibrium(huntFox, 0) !== null) return 'fox-starved';
  return run[run.length - 1].rabbits >= PARAMS.K / 2 ? 'no-fox' : 'both-hunted';
}

/** @type {Record<Verdict, string>} */
export const OUTCOME_TEXT = {
  balanced:
    'Cân bằng: số thỏ và số cáo dao động rồi ổn định quanh một mức. Thỏ nhiều thì cáo có nhiều thức ăn, cáo tăng và ăn bớt thỏ; thỏ giảm thì cáo thiếu ăn, cáo giảm và thỏ lại tăng.',
  swinging:
    'Hai quần thể vẫn dao động mạnh nhưng cả hai cùng tồn tại; chúng đang dần trở về trạng thái cân bằng.',
  'no-fox':
    'Mất cân bằng: cáo bị săn bắt quá mức nên biến mất. Không còn kẻ thù khống chế, thỏ tăng mạnh, vượt xa mức cân bằng lúc còn cáo.',
  'both-hunted':
    'Mất cân bằng: cáo bị săn bắt quá mức nên biến mất; thỏ cũng bị săn bắt nhiều nên chỉ còn rất ít. Quần xã đồng cỏ mất cả kẻ thù lẫn con mồi.',
  'fox-starved':
    'Mất cân bằng: thỏ bị săn bắt quá nhiều nên cáo thiếu thức ăn và biến mất, dù riêng việc săn cáo không đủ làm cáo biến mất. Thỏ chỉ còn ở mức thấp do bị săn bắt.',
  'no-rabbit':
    'Mất cân bằng: thỏ bị săn bắt quá mức nên biến mất, cáo mất nguồn thức ăn và cũng chết dần.',
};

/**
 * The year of the highest point of a series within a time window, used to
 * show that foxes peak after rabbits.
 * @param {Array<{ t: number, rabbits: number, foxes: number }>} run
 * @param {'rabbits' | 'foxes'} key
 * @param {number} from
 * @param {number} to
 */
export function peakYear(run, key, from, to) {
  let best = run[0];
  for (const p of run) {
    if (p.t < from || p.t > to) continue;
    if (best.t < from || p[key] > best[key]) best = p;
  }
  return best.t;
}
