/**
 * A qualitative model of pickling vegetables, and a drawn microscope field of
 * yoghurt bacteria. The model compares lactic bacteria with spoilage bacteria
 * day by day; its numbers illustrate the trend and are not measurements. No DOM
 * here, so all of it is tested in Node.
 */
import { rng } from '#lib/core/drill.js';
import { clamp } from '#lib/core/visuals/svg-math.js';

/**
 * @typedef {{ salt: number, temp: number, pressed: boolean, sugar: boolean }} Brine
 * salt in percent, temperature in degrees Celsius
 * @typedef {{ day: number, acid: number, spoil: number, ph: number }} PickleDay
 * @typedef {'hong' | 'man' | 'chua-len-men' | 'hoi-chua' | 'dat' | 'qua-chua'} VerdictId
 */

/** The longest fermentation the widget follows, in days. */
export const MAX_DAYS = 7;
const ACID_PER_DAY = 0.55;
const SPOIL_PER_DAY = 0.6;
const START_PH = 6.5;
const PH_DROP = 3;
export const SPOILED_AT = 0.5;
const SOUR_FROM = 0.3;
const READY_FROM = 0.6;
const TOO_SOUR_FROM = 0.92;
const TOO_SALTY_FROM = 12;

/**
 * A tent-shaped response: 0 at or past lo and hi, 1 at opt.
 * @param {number} x @param {number} lo @param {number} opt @param {number} hi
 */
function tent(x, lo, opt, hi) {
  if (x <= lo || x >= hi) return 0;
  return x <= opt ? (x - lo) / (opt - lo) : (hi - x) / (hi - opt);
}

/**
 * How fast lactic bacteria work, from 0 to 1. They tolerate salt up to about
 * 6% with no loss, then slow down.
 * @param {Brine} brine
 */
export function lacticRate({ salt, temp, sugar }) {
  const bySalt = salt <= 6 ? 1 : clamp(1 - (salt - 6) / 9, 0.05, 1);
  return tent(temp, 5, 32, 48) * bySalt * (sugar ? 1 : 0.75);
}

/**
 * How fast spoilage bacteria work, from 0 to 1. Salt holds them back, and an
 * unpressed layer of vegetables gives them the air they need.
 * @param {Brine} brine
 */
export function spoilRate({ salt, temp, pressed }) {
  const bySalt = clamp(1 - salt / 6, 0, 1) + (pressed ? 0 : 0.6);
  return tent(temp, 5, 35, 50) * Math.min(bySalt, 1);
}

/**
 * The jar, day by day. Acid made so far also holds spoilage back.
 * @param {Brine} brine @returns {PickleDay[]}
 */
export function ferment(brine) {
  const lactic = lacticRate(brine);
  const spoiler = spoilRate(brine);
  /** @type {PickleDay[]} */
  const days = [{ day: 0, acid: 0, spoil: 0, ph: START_PH }];
  let acid = 0;
  let spoil = 0;
  for (let day = 1; day <= MAX_DAYS; day++) {
    spoil = Math.min(1, spoil + SPOIL_PER_DAY * spoiler * (1 - acid));
    acid = acid + ACID_PER_DAY * lactic * (1 - acid);
    days.push({ day, acid, spoil, ph: START_PH - PH_DROP * acid });
  }
  return days;
}

/**
 * What the jar looks like on one day.
 * @param {Brine} brine @param {PickleDay} state
 * @returns {VerdictId}
 */
export function verdictOf(brine, state) {
  if (state.spoil >= SPOILED_AT) return 'hong';
  if (state.acid < SOUR_FROM) return brine.salt >= TOO_SALTY_FROM ? 'man' : 'chua-len-men';
  if (state.acid < READY_FROM) return 'hoi-chua';
  return state.acid <= TOO_SOUR_FROM ? 'dat' : 'qua-chua';
}

/** @type {Record<VerdictId, { name: string, tone: 'ok' | 'warn' | 'info', text: string }>} */
export const VERDICTS = {
  hong: {
    name: 'Dưa hỏng',
    tone: 'warn',
    text: 'Có váng, mùi khó chịu, dưa nhũn. Vi sinh vật gây thối đã lấn át vi khuẩn lactic: muối quá ít hoặc dưa không được nén ngập trong nước.',
  },
  man: {
    name: 'Dưa rất mặn, không lên men',
    tone: 'warn',
    text: 'Nước muối quá đặc tạo áp suất thẩm thấu cao, kìm hãm cả vi khuẩn lactic. Dưa giữ màu xanh và mặn, không có vị chua.',
  },
  'chua-len-men': {
    name: 'Chưa chua',
    tone: 'info',
    text: 'Vi khuẩn lactic chưa tạo đủ lactic acid: thời gian còn ngắn hoặc nhiệt độ chưa thích hợp. Dưa còn màu xanh.',
  },
  'hoi-chua': {
    name: 'Hơi chua',
    tone: 'info',
    text: 'Lactic acid đang tăng, dưa bắt đầu chuyển màu và có vị chua nhẹ. Hãy đợi thêm.',
  },
  dat: {
    name: 'Dưa đạt',
    tone: 'ok',
    text: 'Dưa vàng, giòn, chua thơm đặc trưng. Lactic acid đã đủ để ức chế vi sinh vật gây thối.',
  },
  'qua-chua': {
    name: 'Dưa quá chua',
    tone: 'info',
    text: 'Dưa vẫn ăn được nhưng chua gắt và kém giòn. Nên dùng sớm hơn hoặc để ngăn mát để kéo dài thời gian dùng.',
  },
};

/** The recipe from the practice lesson, as the widget starts it. */
export const RECIPE = { salt: 5, temp: 28, pressed: true, sugar: true };

/**
 * @typedef {{ x: number, y: number, angle: number, length: number }} Rod
 * @typedef {{ id: string, name: string, times: number, scale: number, text: string }} Objective
 */

/** @type {Objective[]} */
export const OBJECTIVES = [
  {
    id: '10',
    name: '10×',
    times: 10,
    scale: 1,
    text: 'Vật kính 10×: vi khuẩn chỉ là những chấm rất nhỏ. Dùng để tìm vùng có nhiều vi khuẩn.',
  },
  {
    id: '40',
    name: '40×',
    times: 40,
    scale: 1.6,
    text: 'Vật kính 40×: bắt đầu thấy vi khuẩn dạng que.',
  },
  {
    id: '100',
    name: '100×',
    times: 100,
    scale: 2.6,
    text: 'Vật kính 100× (cần dầu soi kính): thấy rõ vi khuẩn lactic dạng que, đứng riêng lẻ hoặc thành chuỗi.',
  },
];

/**
 * Magnification of the image from eyepiece and objective.
 * @param {number} eyepiece @param {number} objective
 */
export const magnification = (eyepiece, objective) => eyepiece * objective;

/**
 * A microscope field of rods, single or in chains, around the centre (0, 0).
 * @param {number} seed
 * @returns {Rod[]}
 */
export function fieldOf(seed) {
  const rand = rng(seed);
  /** @type {Rod[]} */
  const rods = [];
  for (let i = 0; i < 40; i++) {
    const a = rand() * Math.PI * 2;
    const r = Math.sqrt(rand()) * 45;
    const x = Math.cos(a) * r;
    const y = Math.sin(a) * r;
    const angle = rand() * 180;
    const links = 1 + Math.floor(rand() * 4);
    const t = (angle * Math.PI) / 180;
    for (let k = 0; k < links; k++) {
      rods.push({
        x: x + Math.cos(t) * k * 3.4,
        y: y + Math.sin(t) * k * 3.4,
        angle,
        length: 3,
      });
    }
  }
  return rods;
}
