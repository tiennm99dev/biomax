/**
 * Logic for the circulation practical: pulse counts turned into heart rates,
 * a group's rest and after-exercise record, the blood pressure reading of an
 * adult at rest, and a model of the frog heart experiments.
 */

/** Counting windows offered when taking a pulse, in seconds. */
export const WINDOWS = [15, 30, 60];

/** Usual resting heart rate of an adult, beats per minute. */
export const REST_LOW = 60;
export const REST_HIGH = 100;

/**
 * Heart rate in beats per minute from the beats counted in a window.
 * @param {number} count @param {number} seconds
 */
export const perMinute = (count, seconds) => (count * 60) / seconds;

/**
 * @typedef {object} Member
 * @property {string} name
 * @property {number | null} rest Beats counted at rest in the window.
 * @property {number | null} after Beats counted right after exercise in the window.
 */

/**
 * Sample counts in 15 s for a group of four, to replace with the group's own.
 * @type {Member[]}
 */
export const SAMPLE = [
  { name: 'Bạn 1', rest: 18, after: 30 },
  { name: 'Bạn 2', rest: 19, after: 33 },
  { name: 'Bạn 3', rest: 17, after: 27 },
  { name: 'Bạn 4', rest: 20, after: 31 },
];

/**
 * @typedef {object} Row
 * @property {string} name
 * @property {number} rest Beats per minute at rest.
 * @property {number} after Beats per minute right after exercise.
 * @property {number} rise after − rest.
 * @property {number} percent Rise as a percentage of the rest rate.
 */

/**
 * The rows with both counts filled in, as beats per minute.
 * @param {Member[]} members @param {number} seconds
 * @returns {Row[]}
 */
export function rowsOf(members, seconds) {
  /** @type {Row[]} */
  const rows = [];
  for (const m of members) {
    if (m.rest == null || m.after == null || m.rest <= 0 || m.after <= 0) continue;
    const rest = perMinute(m.rest, seconds);
    const after = perMinute(m.after, seconds);
    rows.push({
      name: m.name,
      rest,
      after,
      rise: after - rest,
      percent: ((after - rest) / rest) * 100,
    });
  }
  return rows;
}

/** @param {number[]} values */
export const mean = (values) =>
  values.length === 0 ? 0 : values.reduce((s, v) => s + v, 0) / values.length;

/**
 * What the group's record shows.
 * @param {Row[]} rows
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function judgeGroup(rows) {
  if (rows.length === 0) {
    return {
      tone: 'info',
      text: 'Nhập số nhịp đếm được của ít nhất một bạn, cả lúc nghỉ và sau vận động.',
    };
  }
  const fell = rows.filter((r) => r.after <= r.rest);
  if (fell.length > 0) {
    return {
      tone: 'warn',
      text: `${fell.map((r) => r.name).join(', ')}: nhịp tim sau vận động không cao hơn lúc nghỉ. Kiểm tra lại: phải đếm ngay sau khi dừng vận động, vì nhịp tim giảm dần khi nghỉ.`,
    };
  }
  const odd = rows.filter((r) => r.rest < REST_LOW || r.rest > REST_HIGH);
  if (odd.length > 0) {
    return {
      tone: 'info',
      text: `${odd.map((r) => r.name).join(', ')}: nhịp tim lúc nghỉ ngoài khoảng $60$ đến $100$ lần/phút. Hãy nghỉ thêm vài phút rồi đếm lại; người tập luyện thể thao thường có nhịp lúc nghỉ thấp.`,
    };
  }
  return {
    tone: 'ok',
    text: 'Sau vận động nhịp tim của mọi bạn đều tăng: cơ cần nhiều $\\mathrm{O_2}$ và thải nhiều $\\mathrm{CO_2}$, thần kinh giao cảm làm tim đập nhanh, mạnh hơn để đưa máu đến cơ.',
  };
}

/** @typedef {'thap' | 'binh-thuong' | 'cao' | 'sai'} PressureClass */

/**
 * Class of an adult's blood pressure at rest (mmHg).
 * Hypertension: systolic ≥ 140 or diastolic ≥ 90. Hypotension: systolic < 90
 * or diastolic < 60. A diastolic not below the systolic is a misreading.
 * @param {number} systolic @param {number} diastolic
 * @returns {PressureClass}
 */
export function classifyPressure(systolic, diastolic) {
  if (diastolic >= systolic) return 'sai';
  if (systolic >= 140 || diastolic >= 90) return 'cao';
  if (systolic < 90 || diastolic < 60) return 'thap';
  return 'binh-thuong';
}

/** @type {Record<PressureClass, { name: string, tone: 'ok' | 'warn' | 'info', text: string }>} */
export const PRESSURE_TEXT = {
  'binh-thuong': {
    name: 'Huyết áp bình thường',
    tone: 'ok',
    text: 'Huyết áp tối đa từ $90$ đến dưới $140$ mmHg và tối thiểu từ $60$ đến dưới $90$ mmHg.',
  },
  cao: {
    name: 'Cao huyết áp',
    tone: 'warn',
    text: 'Huyết áp tối đa từ $140$ mmHg trở lên hoặc tối thiểu từ $90$ mmHg trở lên. Nghỉ vài phút, đo lại; nếu nhiều lần vẫn cao thì cần đi khám.',
  },
  thap: {
    name: 'Huyết áp thấp',
    tone: 'warn',
    text: 'Huyết áp tối đa dưới $90$ mmHg hoặc tối thiểu dưới $60$ mmHg; người có thể mệt, chóng mặt.',
  },
  sai: {
    name: 'Số đo không hợp lí',
    tone: 'info',
    text: 'Huyết áp tối đa (tâm thu) luôn lớn hơn huyết áp tối thiểu (tâm trương). Đo lại sau khoảng $3$ phút.',
  },
};

/** @typedef {'binh-thuong' | 'that-chi' | 'kich-thich' | 'adrenaline'} FrogId */

/**
 * @typedef {object} FrogTest
 * @property {FrogId} id
 * @property {string} name
 * @property {number} event Second of the record at which the treatment starts.
 * @property {string} result
 */

/** Seconds shown on the record of one frog experiment. */
export const RECORD = 90;

/** Beats a minute of an intact frog heart in the model. */
export const FROG_RATE = 48;

/** Seconds the nerve is stimulated. */
export const STIMULUS = 5;

/** @type {FrogTest[]} */
export const FROG_TESTS = [
  {
    id: 'binh-thuong',
    name: 'Tim nguyên vẹn',
    event: RECORD,
    result:
      'Xoang tĩnh mạch và tâm thất đập cùng một nhịp: xung phát ra ở xoang tĩnh mạch rồi truyền xuống tâm nhĩ, tâm thất.',
  },
  {
    id: 'that-chi',
    name: 'Thắt chỉ',
    event: 20,
    result:
      'Sau khi thắt chỉ giữa xoang tĩnh mạch và tâm nhĩ, xoang tĩnh mạch vẫn đập theo nhịp cũ; tâm thất ngừng đập một lúc rồi tự đập lại với nhịp chậm hơn. Xung từ xoang không truyền xuống được, phần tim bên dưới tự phát xung yếu hơn: tim có tính tự động.',
  },
  {
    id: 'kich-thich',
    name: 'Kích thích dây thần kinh',
    event: 20,
    result:
      'Kích thích dây thần kinh (có sợi đối giao cảm) khoảng $5$ s: tim đập chậm lại rồi ngừng ở thì dãn; thôi kích thích, sau khoảng $1$ phút tim đập lại dần như cũ.',
  },
  {
    id: 'adrenaline',
    name: 'Adrenaline',
    event: 20,
    result:
      'Thay dung dịch sinh lí bằng dung dịch có adrenaline: tim rời đập nhanh hơn và co mạnh hơn.',
  },
];

/**
 * Rate of one part of the frog heart (beats a minute) at second t of the record.
 * @param {FrogId} id @param {'xoang' | 'that'} part @param {number} t
 */
export function frogRate(id, part, t) {
  const test = FROG_TESTS.find((f) => f.id === id) ?? FROG_TESTS[0];
  const s = t - test.event;
  if (s < 0) return FROG_RATE;
  if (id === 'that-chi') {
    if (part === 'xoang') return FROG_RATE;
    return s < 12 ? 0 : 24;
  }
  if (id === 'kich-thich') {
    if (s < STIMULUS) return s < 2 ? FROG_RATE / 2 : 0;
    if (s < STIMULUS + 5) return 0;
    return Math.min(FROG_RATE, 12 + ((s - STIMULUS - 5) / 50) * (FROG_RATE - 12));
  }
  if (id === 'adrenaline') {
    return FROG_RATE + Math.min(1, s / 15) * 24;
  }
  return FROG_RATE;
}

/**
 * Strength of a ventricular beat (1 for the intact heart).
 * @param {FrogId} id @param {number} t
 */
export function frogStrength(id, t) {
  const test = FROG_TESTS.find((f) => f.id === id) ?? FROG_TESTS[0];
  const s = t - test.event;
  if (s < 0) return 1;
  if (id === 'adrenaline') return 1 + Math.min(1, s / 15) * 0.6;
  if (id === 'that-chi') return 0.7;
  return 1;
}

/**
 * Times (s) of the beats of one part of the heart over the record, found by
 * integrating the rate.
 * @param {FrogId} id @param {'xoang' | 'that'} part
 */
export function beatTimes(id, part) {
  const dt = 0.02;
  /** @type {number[]} */
  const beats = [];
  let phase = 0.5;
  for (let t = 0; t < RECORD; t += dt) {
    const rate = frogRate(id, part, t);
    if (rate === 0) {
      phase = Math.min(phase, 0.5);
      continue;
    }
    phase += (rate / 60) * dt;
    if (phase >= 1) {
      phase -= 1;
      beats.push(t);
    }
  }
  return beats;
}

/**
 * Beats counted in [from, to) seconds.
 * @param {number[]} beats @param {number} from @param {number} to
 */
export const countBetween = (beats, from, to) => beats.filter((b) => b >= from && b < to).length;
