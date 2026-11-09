/**
 * The cardiac cycle and blood flow along the vessels.
 *
 * Cycle: at 75 beats a minute the book's 0,8 s is atrial systole 0,1 s,
 * ventricular systole 0,3 s and general diastole 0,4 s. At other rates the
 * model shortens the two systoles by (T / 0,8)^0,4 and gives the rest to
 * diastole, so a fast heart loses mostly diastole, as real hearts do.
 *
 * Vessels: approximate total cross-sections (cm²) and mean pressures (mmHg)
 * for an adult at rest. Blood velocity is cardiac output over total
 * cross-section, v = Q / S.
 */

export const REST_RATE = 75;
export const REST_CYCLE = 0.8;

/** @typedef {'nhi-co' | 'that-co' | 'dan-chung'} PhaseId */

/**
 * @typedef {object} Phase
 * @property {PhaseId} id
 * @property {string} name
 * @property {string} blood Where the blood goes.
 * @property {boolean} avOpen Atrioventricular valves open.
 * @property {boolean} slOpen Semilunar (arterial) valves open.
 * @property {string} signal What the conduction system is doing.
 */

/** @type {Phase[]} */
export const PHASES = [
  {
    id: 'nhi-co',
    name: 'Tâm nhĩ co',
    blood: 'Tâm nhĩ co đẩy máu xuống tâm thất.',
    avOpen: true,
    slOpen: false,
    signal: 'Nút xoang nhĩ phát xung, xung lan khắp hai tâm nhĩ.',
  },
  {
    id: 'that-co',
    name: 'Tâm thất co',
    blood: 'Tâm thất co đẩy máu vào động mạch phổi và động mạch chủ.',
    avOpen: false,
    slOpen: true,
    signal: 'Xung đến nút nhĩ thất, theo bó His và mạng Purkinje lan khắp hai tâm thất.',
  },
  {
    id: 'dan-chung',
    name: 'Dãn chung',
    blood: 'Máu từ tĩnh mạch về tâm nhĩ và chảy xuống tâm thất.',
    avOpen: true,
    slOpen: false,
    signal: 'Tim nghỉ, chờ xung tiếp theo từ nút xoang nhĩ.',
  },
];

/** Cycle length in seconds. @param {number} rate beats per minute */
export const cycleOf = (rate) => 60 / rate;

/** Heart rate in beats per minute. @param {number} cycle seconds */
export const rateOf = (cycle) => 60 / cycle;

/**
 * Duration in seconds of each phase at a given heart rate.
 * @param {number} rate
 * @returns {Record<PhaseId, number>}
 */
export function durations(rate) {
  const t = cycleOf(rate);
  const f = (t / REST_CYCLE) ** 0.4;
  const atria = 0.1 * f;
  const ventricles = 0.3 * f;
  return { 'nhi-co': atria, 'that-co': ventricles, 'dan-chung': t - atria - ventricles };
}

/**
 * The phase at time `t` seconds into the beating.
 * @param {number} t @param {number} rate
 */
export function phaseAt(t, rate) {
  const d = durations(rate);
  const cycle = cycleOf(rate);
  let x = ((t % cycle) + cycle) % cycle;
  for (const p of PHASES) {
    if (x < d[p.id]) return p;
    x -= d[p.id];
  }
  return PHASES[PHASES.length - 1];
}

/**
 * @typedef {object} Vessel
 * @property {string} id
 * @property {string} name
 * @property {number} area Total cross-section in cm².
 * @property {number} pressure Mean pressure in mmHg.
 */

/** @type {Vessel[]} In the order blood flows through them. */
export const VESSELS = [
  { id: 'dm-chu', name: 'Động mạch chủ', area: 2.5, pressure: 100 },
  { id: 'dm-nho', name: 'Động mạch nhỏ', area: 20, pressure: 90 },
  { id: 'tieu-dm', name: 'Tiểu động mạch', area: 40, pressure: 60 },
  { id: 'mao-mach', name: 'Mao mạch', area: 2500, pressure: 25 },
  { id: 'tieu-tm', name: 'Tiểu tĩnh mạch', area: 250, pressure: 12 },
  { id: 'tm-nho', name: 'Tĩnh mạch nhỏ', area: 80, pressure: 8 },
  { id: 'tm-chu', name: 'Tĩnh mạch chủ', area: 8, pressure: 2 },
];

/**
 * Mean velocity in mm/s for a cardiac output in L/min and a total cross-section in cm².
 * @param {number} output @param {number} area
 */
export function velocity(output, area) {
  const cm3PerSecond = (output * 1000) / 60;
  return (cm3PerSecond / area) * 10;
}

/**
 * Cardiac output in L/min from heart rate and stroke volume in mL.
 * @param {number} rate @param {number} stroke
 */
export const cardiacOutput = (rate, stroke) => (rate * stroke) / 1000;

/**
 * Feedback for a chosen vessel.
 * @param {string} id
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function describeVessel(id) {
  if (id === 'mao-mach') {
    return {
      tone: 'ok',
      text: 'Mao mạch có tổng tiết diện lớn nhất nên máu chảy chậm nhất, đủ thời gian trao đổi chất với tế bào qua thành mỏng.',
    };
  }
  if (id === 'dm-chu') {
    return {
      tone: 'info',
      text: 'Động mạch chủ gần tim: huyết áp cao nhất, tổng tiết diện nhỏ nên máu chảy nhanh nhất.',
    };
  }
  if (id === 'tm-chu') {
    return {
      tone: 'info',
      text: 'Tĩnh mạch chủ: huyết áp thấp nhất, gần bằng $0$; tổng tiết diện nhỏ lại nên máu chảy nhanh lên khi về tim.',
    };
  }
  return {
    tone: 'info',
    text: 'Huyết áp giảm dần trên đường máu đi vì ma sát với thành mạch và giữa các phân tử máu; vận tốc tỉ lệ nghịch với tổng tiết diện.',
  };
}
