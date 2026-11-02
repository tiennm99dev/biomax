/**
 * A model of amylase from germinated grain acting on starch. Its numbers are
 * teaching values chosen to show the book's trends: grain amylase works best
 * around 60 °C and a slightly acid pH, is destroyed by boiling, and only slows
 * down in the cold.
 */

/** @typedef {{ temp: number, ph: number, amount: number }} TubeConditions */
/** @typedef {TubeConditions & { id: number, name: string }} Tube */

export const BEST_TEMP = 60;
export const DESTROY_TEMP = 80;
export const BEST_PH = 6;
export const MAX_MINUTES = 15;
const WARMTH_BASE = 1.6;
const PH_WIDTH = 2.5;
const STARCH_SPEED = 0.9;

/** @type {Tube[]} */
export const BOOK_TUBES = [
  { id: 1, name: 'Nước cất, nhiệt độ phòng', temp: 25, ph: 6, amount: 100 },
  { id: 2, name: 'Nước vôi trong', temp: 25, ph: 10, amount: 100 },
  { id: 3, name: 'Đun sôi $10$ phút', temp: 100, ph: 6, amount: 100 },
  { id: 4, name: 'Trong nước đá', temp: 0, ph: 6, amount: 100 },
];

/**
 * @param {number} temp
 */
export function tempFactor(temp) {
  if (temp >= DESTROY_TEMP) return 0;
  if (temp <= BEST_TEMP) return WARMTH_BASE ** ((temp - BEST_TEMP) / 10);
  return 1 - ((temp - BEST_TEMP) / (DESTROY_TEMP - BEST_TEMP)) ** 2;
}

/**
 * @param {number} ph
 */
export const phFactor = (ph) => Math.exp(-(((ph - BEST_PH) / PH_WIDTH) ** 2));

/**
 * The speed of the enzyme while it stays in these conditions, from 0 to 1.
 * @param {TubeConditions} c
 */
export const tubeRate = (c) => tempFactor(c.temp) * phFactor(c.ph) * (c.amount / 100);

/**
 * Share of the starch left in a tube, from 1 down to 0.
 * @param {TubeConditions} c
 * @param {number} minutes
 */
export const starchLeft = (c, minutes) => Math.exp(-STARCH_SPEED * tubeRate(c) * minutes);

/** @typedef {{ id: string, name: string, color: string }} IodineColor */

/** @type {IodineColor[]} Colours from no starch to plenty of it. */
export const IODINE_COLORS = [
  { id: 'vang', name: 'vàng nâu (không còn tinh bột)', color: '#d97706' },
  { id: 'nau-do', name: 'nâu đỏ (còn ít tinh bột)', color: '#9a3412' },
  { id: 'tim', name: 'xanh tím (còn khá nhiều tinh bột)', color: '#6d28d9' },
  { id: 'xanh-den', name: 'xanh đen (còn nhiều tinh bột)', color: '#1e1b4b' },
];

/**
 * The colour iodine gives with this share of starch.
 * @param {number} left
 * @returns {IodineColor}
 */
export function iodineColor(left) {
  if (left <= 0.1) return IODINE_COLORS[0];
  if (left <= 0.3) return IODINE_COLORS[1];
  if (left <= 0.6) return IODINE_COLORS[2];
  return IODINE_COLORS[3];
}

/**
 * What the learner sees in the selected tube.
 * @param {TubeConditions} c
 * @param {number} minutes
 * @param {boolean} iodine
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function describeTube(c, minutes, iodine) {
  if (!iodine) {
    return {
      tone: 'info',
      text: 'Dung dịch tinh bột trông đục như nhau ở mọi ống. Phải nhỏ iodine mới biết còn tinh bột hay không.',
    };
  }
  if (c.amount === 0) {
    return {
      tone: 'info',
      text: 'Ống đối chứng không có enzyme nên tinh bột còn nguyên, màu xanh đen không đổi.',
    };
  }
  if (c.temp >= DESTROY_TEMP) {
    return {
      tone: 'warn',
      text: 'Đun sôi làm amylase biến tính nên tinh bột còn nguyên, dù để bao lâu cũng vẫn xanh đen.',
    };
  }
  if (phFactor(c.ph) < 0.3) {
    return {
      tone: 'warn',
      text: 'Môi trường lệch nhiều so với pH thích hợp làm enzyme hoạt động rất yếu, tinh bột còn lại nhiều.',
    };
  }
  if (c.temp <= 10) {
    return {
      tone: 'info',
      text: 'Lạnh làm enzyme hoạt động chậm chứ chưa hỏng; ấm lên thì enzyme hoạt động trở lại.',
    };
  }
  if (iodineColor(starchLeft(c, minutes)).id === 'vang') {
    return {
      tone: 'ok',
      text: 'Màu vàng nâu là màu của chính iodine: tinh bột đã bị amylase thuỷ phân hết thành đường.',
    };
  }
  return {
    tone: 'info',
    text: 'Tinh bột đang bị thuỷ phân dần. Màu sẽ đổi khi còn ít tinh bột hơn.',
  };
}

/**
 * What the learner has seen in the tube rack.
 * @typedef {{ compared: boolean, fast: boolean, diluted: boolean }} Seen
 */

/** @type {Seen} */
export const NOTHING_SEEN = { compared: false, fast: false, diluted: false };

/**
 * @param {Seen} seen
 * @param {TubeConditions[]} tubes
 * @param {number} minutes
 * @param {boolean} iodine
 * @returns {Seen}
 */
export function updateSeen(seen, tubes, minutes, iodine) {
  if (!iodine) return seen;
  const colors = tubes.map((t) => iodineColor(starchLeft(t, minutes)).id);
  return {
    compared: seen.compared || (minutes >= MAX_MINUTES && new Set(colors).size >= 3),
    fast: seen.fast || (minutes > 0 && minutes <= 5 && colors.includes('vang')),
    diluted:
      seen.diluted ||
      (minutes > 0 &&
        tubes.some(
          (t, i) => t.amount > 0 && t.amount < 100 && t.temp < DESTROY_TEMP && colors[i] !== 'vang',
        )),
  };
}

/** Width of a full-grown dent on the plate, in mm. */
const DENT_MAX = 28;
const DENT_MINUTES = 12;
/** A drop from ice water takes a while to warm up on the plate. */
const COLD_START = 0.85;

/**
 * The enzyme's speed on a starch plate at room temperature, after its tube's
 * treatment: heat that destroyed it stays, but cold wears off.
 * @param {TubeConditions} c
 */
export function plateRate(c) {
  if (c.temp >= DESTROY_TEMP) return 0;
  const start = c.temp <= 10 ? COLD_START : 1;
  return start * phFactor(c.ph) * (c.amount / 100);
}

/**
 * Width of the dent at a time, in mm.
 * @param {TubeConditions} c
 * @param {number} minutes
 */
export const dentWidth = (c, minutes) =>
  DENT_MAX * (1 - Math.exp((-plateRate(c) * minutes) / DENT_MINUTES));

/**
 * The tube whose dent is widest at the end of the wait.
 * @param {Tube[]} tubes
 * @returns {Tube}
 */
export const widestDent = (tubes) =>
  tubes.reduce((a, b) => (dentWidth(b, MAX_MINUTES) > dentWidth(a, MAX_MINUTES) ? b : a));
