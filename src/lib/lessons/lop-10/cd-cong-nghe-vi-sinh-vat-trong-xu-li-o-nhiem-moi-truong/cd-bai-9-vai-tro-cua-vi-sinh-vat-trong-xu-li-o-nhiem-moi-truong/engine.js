/**
 * A polluted pond, stepped one day at a time. Organic matter is broken down by
 * microbes that use oxygen and multiply on it, so it leaves the water as CO₂
 * and H₂O. A heavy metal is not broken down: it only moves from the water into
 * the biomass and the sludge, until someone collects them. The rates are
 * teaching values, not measurements. No DOM here, so all of it is tested in Node.
 */
import { formatNumber, tidy } from '#lib/core/number-format.js';

/** The share of the first load, in %, taken as the allowed level in this model. */
export const LIMIT = 30;
export const DOSE_MAX = 5;
export const DAY_MAX = 60;
/** Below this much dissolved oxygen, in mg/L, aerobic microbes slow down. */
export const LOW_OXYGEN = 2;
export const OXYGEN_MAX = 8;

const NATURAL_MICROBES = 0.12;
const BREAKDOWN_RATE = 6;
const HALF_SPEED_LEVEL = 20;
const OXYGEN_USED = 0.25;
const AIR_IN = { on: 3, off: 0.4 };
const GROWTH = 0.03;
const DIE_OFF = 0.03;
const HOLD_PER_MICROBE = 25;
const BIND_SHARE = 0.3;

/**
 * @typedef {'huu-co' | 'kim-loai'} Pollutant
 * @typedef {{
 *   pollutant: Pollutant,
 *   day: number,
 *   level: number,
 *   held: number,
 *   removed: number,
 *   microbes: number,
 *   doses: number,
 *   oxygen: number,
 *   air: boolean,
 *   history: number[],
 * }} Pond
 */

/** @type {Array<{ value: Pollutant, label: string }>} */
export const POLLUTANTS = [
  { value: 'huu-co', label: 'Chất hữu cơ' },
  { value: 'kim-loai', label: 'Kim loại nặng' },
];

/**
 * A pond that has just taken the full load of one pollutant.
 * @param {Pollutant} pollutant
 * @returns {Pond}
 */
export function fresh(pollutant) {
  return {
    pollutant,
    day: 0,
    level: 100,
    held: 0,
    removed: 0,
    microbes: NATURAL_MICROBES,
    doses: 0,
    oxygen: 4,
    air: false,
    history: [100],
  };
}

/**
 * @param {Pond} pond
 * @returns {Pond} the pond with one more dose, or unchanged at the dose limit
 */
export function addDose(pond) {
  if (pond.doses >= DOSE_MAX) return pond;
  return { ...pond, doses: pond.doses + 1, microbes: tidy(pond.microbes + 1) };
}

/**
 * @param {Pond} pond
 * @param {boolean} air
 * @returns {Pond}
 */
export function setAir(pond, air) {
  return { ...pond, air };
}

/**
 * How fast aerobic breakdown runs at this oxygen level, from 0,25 to 1. Some
 * breakdown goes on without oxygen, but far more slowly.
 * @param {number} oxygen
 */
export function oxygenFactor(oxygen) {
  return oxygen >= LOW_OXYGEN ? 1 : 0.25 + (0.75 * oxygen) / LOW_OXYGEN;
}

/** @param {Pond} pond @returns {Pond} */
function organicDay(pond) {
  const rate =
    (BREAKDOWN_RATE * pond.microbes * pond.level * oxygenFactor(pond.oxygen)) /
    (pond.level + HALF_SPEED_LEVEL);
  const used = Math.min(rate, pond.level);
  const oxygen = pond.oxygen - OXYGEN_USED * used + (pond.air ? AIR_IN.on : AIR_IN.off);
  return {
    ...pond,
    level: tidy(pond.level - used),
    oxygen: tidy(Math.max(0, Math.min(OXYGEN_MAX, oxygen))),
    microbes: tidy(
      Math.max(NATURAL_MICROBES, pond.microbes + GROWTH * used - DIE_OFF * pond.microbes),
    ),
  };
}

/** @param {Pond} pond @returns {Pond} */
function metalDay(pond) {
  const room = Math.max(0, HOLD_PER_MICROBE * pond.microbes - pond.held);
  const bound = Math.min(BIND_SHARE * pond.level, room);
  return { ...pond, level: tidy(pond.level - bound), held: tidy(pond.held + bound) };
}

/**
 * One day later, or the same pond once the last day is reached.
 * @param {Pond} pond
 * @returns {Pond}
 */
export function advance(pond) {
  if (pond.day >= DAY_MAX) return pond;
  const next = pond.pollutant === 'huu-co' ? organicDay(pond) : metalDay(pond);
  return { ...next, day: pond.day + 1, history: [...pond.history, next.level] };
}

/**
 * Collect the biomass and the sludge, and with them the metal they hold. The
 * microbes go too, so the pond is back to its natural few.
 * @param {Pond} pond
 * @returns {Pond}
 */
export function harvest(pond) {
  if (pond.held <= 0) return pond;
  return {
    ...pond,
    removed: tidy(pond.removed + pond.held),
    held: 0,
    microbes: NATURAL_MICROBES,
    doses: 0,
  };
}

/**
 * Evenly scattered spots in a box, the same for every visitor.
 * @param {number} count
 * @param {{ x: number, y: number, w: number, h: number }} box
 * @param {number} seed
 * @returns {Array<{ x: number, y: number }>}
 */
export function scatter(count, box, seed) {
  return Array.from({ length: count }, (_, i) => ({
    x: box.x + box.w * ((seed + (i + 1) * 0.618034) % 1),
    y: box.y + box.h * ((seed * 2 + (i + 1) * 0.754878) % 1),
  }));
}

/**
 * The verdict on the pond right now.
 * @param {Pond} pond
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function note(pond) {
  return pond.pollutant === 'huu-co' ? organicNote(pond) : metalNote(pond);
}

/** @param {Pond} pond @returns {{ tone: 'ok' | 'warn' | 'info', text: string }} */
function organicNote(pond) {
  const left = formatNumber(pond.level, 1);
  if (pond.level <= LIMIT) {
    return {
      tone: 'ok',
      text: `Sau ${pond.day} ngày, chất hữu cơ còn ${left}%, đã đạt mức cho phép. Phần mất đi đã được vi sinh vật phân giải thành CO₂, H₂O và sinh khối của chúng.`,
    };
  }
  if (pond.day === 0 && pond.doses === 0) {
    return {
      tone: 'info',
      text: 'Hồ vừa nhận nước thải giàu chất hữu cơ. Hãy thử cho thời gian trôi, rồi thêm vi sinh vật và bật sục khí để so sánh.',
    };
  }
  if (pond.oxygen < LOW_OXYGEN) {
    return {
      tone: 'warn',
      text: 'Thiếu oxygen: càng nhiều vi sinh vật hiếu khí càng dùng nhiều oxygen, nên chúng hoạt động yếu đi và chất hữu cơ giảm chậm lại. Hãy bật sục khí.',
    };
  }
  if (pond.doses === 0) {
    return {
      tone: 'warn',
      text: `Sau ${pond.day} ngày, chất hữu cơ vẫn còn ${left}%: vi sinh vật tự nhiên trong hồ quá ít, nên phân giải rất chậm. Hãy thêm vi sinh vật.`,
    };
  }
  return {
    tone: 'info',
    text: `Chất hữu cơ còn ${left}%. Vi sinh vật vừa phân giải vừa sinh sản, nên càng về sau tốc độ phân giải càng lớn. Hãy cho thời gian trôi tiếp.`,
  };
}

/** @param {Pond} pond @returns {{ tone: 'ok' | 'warn' | 'info', text: string }} */
function metalNote(pond) {
  const left = formatNumber(pond.level, 1);
  const held = formatNumber(pond.held, 1);
  if (pond.level <= LIMIT && pond.held > 0) {
    return {
      tone: 'info',
      text: `Ion kim loại trong nước chỉ còn ${left}%, nhưng kim loại không hề mất đi: ${held}% đang nằm trong sinh khối và bùn đáy. Hãy thu chúng ra khỏi hồ.`,
    };
  }
  if (pond.level <= LIMIT) {
    return {
      tone: 'ok',
      text: `Đạt mức cho phép: nước chỉ còn ${left}% ion kim loại, phần đã thu ra khỏi hồ là ${formatNumber(pond.removed, 1)}%. Sinh khối và bùn thu được phải xử lí riêng.`,
    };
  }
  if (pond.day === 0 && pond.doses === 0) {
    return {
      tone: 'info',
      text: 'Hồ vừa nhận nước thải chứa ion kim loại nặng. Hãy thêm vi sinh vật, cho thời gian trôi và xem kim loại đi về đâu.',
    };
  }
  if (pond.doses === 0) {
    return {
      tone: 'warn',
      text: `Ion kim loại vẫn còn ${left}% trong nước: vi sinh vật tự nhiên quá ít nên giữ được rất ít. Hãy thêm vi sinh vật.`,
    };
  }
  if (HOLD_PER_MICROBE * pond.microbes - pond.held < 0.5) {
    return {
      tone: 'warn',
      text: `Lượng vi sinh vật này đã giữ hết sức (${held}%), mà kim loại không làm chúng sinh sản thêm. Hãy thêm vi sinh vật, hoặc thu sinh khối rồi thêm lượng mới.`,
    };
  }
  return {
    tone: 'info',
    text: `Ion kim loại đang chuyển từ nước vào sinh khối và bùn: còn ${left}% trong nước, ${held}% đã bị giữ lại. Tổng lượng kim loại không đổi.`,
  };
}
