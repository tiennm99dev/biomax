/**
 * Ecological limits (giới hạn sinh thái) of a species for two factors at
 * once, temperature and air humidity. For each factor the species lives
 * between a lower and an upper limit (the limits themselves are death
 * points), grows well inside the favourable range (khoảng thuận lợi) and is
 * held back in the tolerance range (khoảng chống chịu) between the two.
 *
 * Where the two limits cross, the rectangle of conditions in which both
 * factors stay inside their limits is the species' ecological niche
 * (ổ sinh thái) for these two factors. Because the factors act together
 * (quy luật tác động tổng hợp), the organism is only as well off as its
 * worst factor.
 *
 * The two species are made up for the lesson; their numbers are not
 * measurements of a real species.
 */

/** @typedef {{ lower: number, favLow: number, favHigh: number, upper: number }} Range */
/**
 * @typedef {{
 *   id: 'a' | 'b';
 *   name: string;
 *   color: string;
 *   temp: Range;
 *   humid: Range;
 * }} Species
 */
/** @typedef {'ngoai' | 'chong-chiu' | 'thuan-loi'} Zone */
/** @typedef {{ x0: number, x1: number, y0: number, y1: number }} Box */

/** @type {Species[]} */
export const SPECIES = [
  {
    id: 'a',
    name: 'Loài A',
    color: '#4f46e5',
    temp: { lower: 10, favLow: 20, favHigh: 30, upper: 38 },
    humid: { lower: 40, favLow: 60, favHigh: 85, upper: 95 },
  },
  {
    id: 'b',
    name: 'Loài B',
    color: '#0f766e',
    temp: { lower: 5, favLow: 12, favHigh: 22, upper: 30 },
    humid: { lower: 20, favLow: 35, favHigh: 60, upper: 80 },
  },
];

export const TEMP_SPAN = /** @type {const} */ ([0, 45]);
export const HUMID_SPAN = /** @type {const} */ ([0, 100]);

export const ZONE_RANK = /** @type {Record<Zone, number>} */ ({
  'thuan-loi': 0,
  'chong-chiu': 1,
  ngoai: 2,
});

export const ZONE_NAME = /** @type {Record<Zone, string>} */ ({
  'thuan-loi': 'khoảng thuận lợi',
  'chong-chiu': 'khoảng chống chịu',
  ngoai: 'ngoài giới hạn sinh thái',
});

/**
 * Where the value `v` of one factor falls. A limit itself is a death point.
 * @param {Range} range
 * @param {number} v
 * @returns {Zone}
 */
export function zoneOf(range, v) {
  if (v <= range.lower || v >= range.upper) return 'ngoai';
  if (v >= range.favLow && v <= range.favHigh) return 'thuan-loi';
  return 'chong-chiu';
}

/**
 * The state of a species under temperature `t` (°C) and humidity `h` (%):
 * each factor's zone, the overall zone (the worst one) and the factors that
 * set it, the limiting factors.
 * @param {Species} sp
 * @param {number} t
 * @param {number} h
 */
export function assess(sp, t, h) {
  const temp = zoneOf(sp.temp, t);
  const humid = zoneOf(sp.humid, h);
  const overall = ZONE_RANK[temp] >= ZONE_RANK[humid] ? temp : humid;
  /** @type {Array<'nhiệt độ' | 'độ ẩm'>} */
  const limiting = [];
  if (overall !== 'thuan-loi') {
    if (temp === overall) limiting.push('nhiệt độ');
    if (humid === overall) limiting.push('độ ẩm');
  }
  return { temp, humid, overall, limiting };
}

/**
 * The rectangle of conditions inside both limits: the niche for the two
 * factors. `fav` gives the rectangle of favourable conditions instead.
 * @param {Species} sp
 * @param {boolean} [fav]
 * @returns {Box}
 */
export function nicheBox(sp, fav = false) {
  return fav
    ? { x0: sp.temp.favLow, x1: sp.temp.favHigh, y0: sp.humid.favLow, y1: sp.humid.favHigh }
    : { x0: sp.temp.lower, x1: sp.temp.upper, y0: sp.humid.lower, y1: sp.humid.upper };
}

/**
 * The common part of two rectangles, or null when they do not overlap.
 * @param {Box} a
 * @param {Box} b
 * @returns {Box | null}
 */
export function overlap(a, b) {
  const box = {
    x0: Math.max(a.x0, b.x0),
    x1: Math.min(a.x1, b.x1),
    y0: Math.max(a.y0, b.y0),
    y1: Math.min(a.y1, b.y1),
  };
  return box.x0 < box.x1 && box.y0 < box.y1 ? box : null;
}

/**
 * One sentence on how the species fares, naming the limiting factors.
 * @param {Species} sp
 * @param {number} t
 * @param {number} h
 */
export function describe(sp, t, h) {
  const a = assess(sp, t, h);
  const where = `Nhiệt độ ${t} °C: ${ZONE_NAME[a.temp]}; độ ẩm ${h}%: ${ZONE_NAME[a.humid]}.`;
  const factors = a.limiting.join(' và ');
  if (a.overall === 'thuan-loi')
    return `${where} Cả hai nhân tố đều thuận lợi, điểm này nằm trong vùng thuận lợi: ${sp.name} sinh trưởng, phát triển tốt.`;
  if (a.overall === 'chong-chiu')
    return `${where} ${sp.name} vẫn sống được nhưng hoạt động sống bị ức chế, do ${factors} ở khoảng chống chịu.`;
  const other = a.limiting.length === 1 ? ', dù nhân tố còn lại vẫn trong giới hạn' : '';
  return `${where} Điểm này nằm ngoài ổ sinh thái: ${factors} vượt giới hạn sinh thái nên ${sp.name} không tồn tại được${other}.`;
}
