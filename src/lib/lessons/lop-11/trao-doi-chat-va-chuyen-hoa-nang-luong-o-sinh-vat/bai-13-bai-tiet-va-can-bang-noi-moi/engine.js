/**
 * Two homeostasis models.
 *
 * Blood glucose (mmol/L), stepped once a minute. The liver's basal release
 * and the tissues' basal use cancel at 5 mmol/L. Above 5, insulin from the
 * pancreas's β cells moves glucose into cells and into liver glycogen;
 * below 5, glucagon from the α cells makes the liver break glycogen down
 * into glucose. A starchy meal adds glucose over 90 minutes; an hour of
 * exercise uses extra glucose. Above the kidney threshold of about
 * 10 mmol/L some glucose is lost in the urine.
 *
 * Water balance: the book's 180 L of glomerular filtrate a day, and how much
 * urine is left after ADH-controlled reabsorption in each situation.
 */

/** Normal fasting range of blood glucose, mmol/L. */
export const LOW = 3.9;
export const HIGH = 6.4;
/** The set point of the model. */
export const SET = 5;
/** Glucose level above which the kidney lets glucose into urine. */
export const KIDNEY = 10;
/** Minutes simulated. */
export const SPAN = 240;
/** Minute at which the meal or the exercise starts. */
export const START = 15;

const INSULIN_GAIN = 0.04;
const GLUCAGON_GAIN = 0.05;
const MEAL_TOTAL = 6;
const MEAL_MINUTES = 90;
const MEAL_PEAK = 30;
const EXERCISE_USE = 0.03;
const EXERCISE_MINUTES = 60;

/** @typedef {'khong' | 'bua-an' | 'van-dong'} EventId */

/** @type {Array<{ id: EventId, name: string }>} */
export const EVENTS = [
  { id: 'khong', name: 'Không làm gì' },
  { id: 'bua-an', name: 'Ăn bữa nhiều tinh bột' },
  { id: 'van-dong', name: 'Chạy bộ 1 giờ' },
];

/**
 * Glucose absorbed from the meal in minute `s` after it starts (mmol/L per minute).
 * A triangle rising to MEAL_PEAK then falling to MEAL_MINUTES, with area MEAL_TOTAL.
 * @param {number} s
 */
export function mealRate(s) {
  if (s < 0 || s >= MEAL_MINUTES) return 0;
  const h = (2 * MEAL_TOTAL) / MEAL_MINUTES;
  return s < MEAL_PEAK
    ? (h * s) / MEAL_PEAK
    : (h * (MEAL_MINUTES - s)) / (MEAL_MINUTES - MEAL_PEAK);
}

/**
 * @typedef {object} Setup
 * @property {number} start Glucose at minute 0, mmol/L.
 * @property {EventId} event
 * @property {boolean} insulin The β cells secrete insulin.
 * @property {boolean} glucagon The α cells secrete glucagon.
 */

/**
 * @typedef {object} Sample
 * @property {number} t Minute.
 * @property {number} g Glucose, mmol/L.
 * @property {number} ins Insulin signal (0 when none).
 * @property {number} glu Glucagon signal (0 when none).
 * @property {number} urine Glucose being lost in urine, mmol/L per minute.
 */

/**
 * Hormone signals for a glucose level.
 * @param {number} g @param {Setup} s
 */
export function hormones(g, s) {
  return {
    ins: s.insulin ? Math.max(0, g - SET) : 0,
    glu: s.glucagon ? Math.max(0, SET - g) : 0,
  };
}

/**
 * Glucose over SPAN minutes, one sample a minute.
 * @param {Setup} s
 * @returns {Sample[]}
 */
export function simulate(s) {
  /** @type {Sample[]} */
  const out = [];
  let g = s.start;
  for (let t = 0; t <= SPAN; t++) {
    const h = hormones(g, s);
    const urine = g > KIDNEY ? 0.01 * (g - KIDNEY) : 0;
    out.push({ t, g, ins: h.ins, glu: h.glu, urine });
    let dg = -INSULIN_GAIN * h.ins + GLUCAGON_GAIN * h.glu - urine;
    if (s.event === 'bua-an') dg += mealRate(t - START);
    if (s.event === 'van-dong' && t >= START && t < START + EXERCISE_MINUTES) dg -= EXERCISE_USE;
    g = Math.max(1, g + dg);
  }
  return out;
}

/**
 * What the run shows.
 * @param {Sample[]} run @param {Setup} s
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function judge(run, s) {
  const max = Math.max(...run.map((r) => r.g));
  const min = Math.min(...run.map((r) => r.g));
  const end = run[run.length - 1].g;
  if (run.some((r) => r.urine > 0) && !s.insulin) {
    return {
      tone: 'warn',
      text: 'Không có insulin: glucose không vào được tế bào và không chuyển thành glycogen, đường huyết cao kéo dài, vượt ngưỡng thận nên glucose bị thải theo nước tiểu. Đó là bệnh tiểu đường.',
    };
  }
  if (min < LOW && !s.glucagon) {
    return {
      tone: 'warn',
      text: 'Không có glucagon: gan không phân giải glycogen để bổ sung glucose, đường huyết ở dưới $3{,}9$ mmol/L mà không được nâng lên (hạ đường huyết), người mệt, run, có thể ngất.',
    };
  }
  if (max > HIGH && !s.insulin) {
    return {
      tone: 'warn',
      text: 'Không có insulin: đường huyết cao không tự giảm về khoảng bình thường.',
    };
  }
  if (end >= LOW && end <= HIGH) {
    return {
      tone: 'ok',
      text:
        max > HIGH || min < LOW
          ? 'Liên hệ ngược: đường huyết lệch khỏi khoảng bình thường thì tuyến tuỵ tiết hormone, gan và tế bào đáp ứng, đường huyết trở về $3{,}9$ đến $6{,}4$ mmol/L, tuyến tuỵ giảm tiết hormone.'
          : 'Đường huyết dao động trong khoảng $3{,}9$ đến $6{,}4$ mmol/L: insulin và glucagon giữ cân bằng động.',
    };
  }
  return {
    tone: 'info',
    text: 'Đường huyết chưa về khoảng bình thường. Xem đường đồ thị đến cuối thời gian theo dõi.',
  };
}

/** Glomerular filtrate a day, litres. */
export const FILTRATE = 180;

/** @typedef {'binh-thuong' | 'uong-nhieu' | 'an-man' | 'mo-hoi'} WaterId */

/**
 * @typedef {object} WaterCase
 * @property {WaterId} id
 * @property {string} name
 * @property {-1 | 0 | 1} pressure Change of blood osmotic pressure.
 * @property {number} urine Urine a day with ADH working, litres.
 */

/** @type {WaterCase[]} */
export const WATER = [
  { id: 'binh-thuong', name: 'Bình thường', pressure: 0, urine: 1.5 },
  { id: 'uong-nhieu', name: 'Uống nhiều nước', pressure: -1, urine: 3.5 },
  { id: 'an-man', name: 'Ăn mặn', pressure: 1, urine: 1 },
  { id: 'mo-hoi', name: 'Ra nhiều mồ hôi', pressure: 1, urine: 0.7 },
];

/** Urine a day when no ADH is secreted, litres. */
export const NO_ADH_URINE = 15;

/**
 * The kidney's answer to a water situation.
 * @param {WaterId} id @param {boolean} adh ADH can be secreted.
 */
export function kidney(id, adh) {
  const c = WATER.find((w) => w.id === id) ?? WATER[0];
  const urine = adh ? c.urine : NO_ADH_URINE;
  const level = !adh ? 'không có' : c.pressure > 0 ? 'nhiều' : c.pressure < 0 ? 'ít' : 'vừa';
  return {
    pressure: c.pressure > 0 ? 'tăng' : c.pressure < 0 ? 'giảm' : 'bình thường',
    adh: level,
    urine,
    reabsorbed: FILTRATE - urine,
    percent: ((FILTRATE - urine) / FILTRATE) * 100,
    thirst: c.pressure > 0 || !adh,
  };
}
