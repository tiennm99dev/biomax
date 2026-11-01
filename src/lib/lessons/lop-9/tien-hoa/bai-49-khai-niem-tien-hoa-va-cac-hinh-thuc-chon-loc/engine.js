/**
 * Natural selection on the peppered moth (bướm bạch dương, Biston betularia).
 * Moths are light or dark; the colour is heritable. Birds eat the moths they
 * see best: on light, lichen-covered bark the dark moths stand out, on
 * soot-darkened bark the light ones do. The survivors breed the next
 * generation, each offspring taking the colour of one survivor parent, so
 * the share of dark moths changes from generation to generation.
 */

/** @typedef {'sang' | 'toi'} MothColor */
/** @typedef {'sang' | 'sam'} Bark */
/** @typedef {{ id: number, color: MothColor, x: number, y: number, turn: number }} Moth */

/**
 * How easily a bird spots each moth colour on each bark (relative weights).
 * @type {Record<Bark, Record<MothColor, number>>}
 */
export const VISIBILITY = {
  sang: { sang: 1, toi: 4 },
  sam: { sang: 4, toi: 1 },
};

/** @type {Record<Bark, string>} */
export const BARK_LABELS = {
  sang: 'Thân cây sáng (phủ địa y)',
  sam: 'Thân cây sẫm (bám bụi than)',
};

/** Moths in each generation. */
export const POPULATION = 30;
/** Moths the birds eat in each generation. */
export const MEALS = 15;

/**
 * Moths at random places on the board (coordinates in per cent, kept off
 * the edges).
 * @param {MothColor[]} colors
 * @param {() => number} rand
 * @param {number} [firstId]
 * @returns {Moth[]}
 */
export function placeMoths(colors, rand, firstId = 0) {
  return colors.map((color, i) => ({
    id: firstId + i,
    color,
    x: 8 + rand() * 84,
    y: 10 + rand() * 80,
    turn: Math.round(rand() * 60 - 30),
  }));
}

/**
 * The first generation: `dark` dark moths among `total`.
 * @param {number} dark
 * @param {number} total
 * @param {() => number} rand
 */
export function firstGeneration(dark, total, rand) {
  /** @type {MothColor[]} */
  const colors = Array.from({ length: total }, (_, i) => (i < dark ? 'toi' : 'sang'));
  return placeMoths(colors, rand);
}

/**
 * The share of dark moths, from 0 to 1 (0 for an empty list).
 * @param {readonly { color: MothColor }[]} moths
 */
export function darkShare(moths) {
  if (!moths.length) return 0;
  return moths.filter((m) => m.color === 'toi').length / moths.length;
}

/**
 * Birds eat `k` moths, one at a time, each chosen with a chance in
 * proportion to how visible it is on this bark.
 * @param {readonly Moth[]} moths
 * @param {Bark} bark
 * @param {number} k
 * @param {() => number} rand
 * @returns {number[]} ids of the moths eaten
 */
export function hunt(moths, bark, k, rand) {
  const left = [...moths];
  /** @type {number[]} */
  const eaten = [];
  while (eaten.length < k && left.length) {
    const total = left.reduce((s, m) => s + VISIBILITY[bark][m.color], 0);
    let r = rand() * total;
    let i = 0;
    for (; i < left.length - 1; i++) {
      r -= VISIBILITY[bark][left[i].color];
      if (r < 0) break;
    }
    eaten.push(left[i].id);
    left.splice(i, 1);
  }
  return eaten;
}

/**
 * The next generation of `n` moths bred from the survivors: each offspring
 * has the colour of a survivor chosen at random (colour is inherited).
 * @param {readonly Moth[]} survivors
 * @param {number} n
 * @param {() => number} rand
 * @param {number} firstId
 * @returns {Moth[]}
 */
export function breed(survivors, n, rand, firstId) {
  if (!survivors.length) return [];
  /** @type {MothColor[]} */
  const colors = Array.from(
    { length: n },
    () => survivors[Math.floor(rand() * survivors.length)].color,
  );
  return placeMoths(colors, rand, firstId);
}

/**
 * The expected share of dark moths after one round of predation, if birds
 * eat a fraction `eaten` of the moths with the bark's visibility weights:
 * a simple estimate that ignores chance.
 * @param {number} p share of dark moths now
 * @param {Bark} bark
 * @param {number} eaten fraction eaten, 0 to 1
 */
export function expectedShare(p, bark, eaten) {
  const v = VISIBILITY[bark];
  const mean = p * v.toi + (1 - p) * v.sang;
  // Chance of being eaten is proportional to visibility, capped at 1.
  const dieDark = Math.min(1, (eaten * v.toi) / mean);
  const dieLight = Math.min(1, (eaten * v.sang) / mean);
  const dark = p * (1 - dieDark);
  const light = (1 - p) * (1 - dieLight);
  return dark + light === 0 ? p : dark / (dark + light);
}

/**
 * What the learner should notice after some generations.
 * @param {readonly number[]} history dark share per generation
 * @param {Bark} bark
 */
export function trendText(history, bark) {
  const first = history[0];
  const last = history[history.length - 1];
  const pct = (/** @type {number} */ v) => `${Math.round(v * 100)}%`;
  if (history.length < 2)
    return `Thế hệ đầu có ${pct(first)} bướm màu tối. Hãy làm chim: chạm vào những con bướm em thấy rõ nhất.`;
  if (last === 1)
    return `Sau ${history.length - 1} thế hệ, bướm màu sáng đã bị đào thải hết: cả quần thể là bướm màu tối${bark === 'sam' ? ', ngụy trang tốt trên thân cây sẫm' : ''}.`;
  if (last === 0)
    return `Sau ${history.length - 1} thế hệ, bướm màu tối đã bị đào thải hết: cả quần thể là bướm màu sáng${bark === 'sang' ? ', ngụy trang tốt trên thân cây sáng' : ''}.`;
  const change = last - first;
  if (Math.abs(change) < 0.05)
    return `Sau ${history.length - 1} thế hệ, tỉ lệ bướm màu tối gần như không đổi (${pct(last)}).`;
  const verb = change > 0 ? 'tăng từ' : 'giảm từ';
  const to = change > 0 ? 'lên' : 'xuống';
  return `Sau ${history.length - 1} thế hệ, tỉ lệ bướm màu tối ${verb} ${pct(first)} ${to} ${pct(last)}: con nào hợp màu thân cây thì ít bị chim ăn, sống sót và để lại nhiều con hơn.`;
}
