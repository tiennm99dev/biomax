/**
 * Virtual lab numbers for the water practical. They are teaching values chosen
 * to show the book's trends: a branch with its leaves loses water fastest, one
 * without leaves far less, and a control under an oil film almost none.
 */

/** @typedef {'la' | 'khong-la' | 'doi-chung'} SetupId */
/** @typedef {'nang' | 'ram' | 'am'} PlaceId */

/** @type {Array<{ id: SetupId, name: string, rate: number }>} Grams lost per 10 minutes, in the sun. */
export const SETUPS = [
  { id: 'la', name: 'Cành còn nguyên lá', rate: 1.2 },
  { id: 'khong-la', name: 'Cành đã ngắt hết lá', rate: 0.15 },
  { id: 'doi-chung', name: 'Ống đối chứng (không cây, có lớp dầu)', rate: 0.005 },
];

/** @type {Array<{ id: PlaceId, name: string, factor: number }>} */
export const PLACES = [
  { id: 'nang', name: 'Nắng, có gió nhẹ', factor: 1 },
  { id: 'ram', name: 'Trong bóng râm', factor: 0.4 },
  { id: 'am', name: 'Trùm túi nylon kín', factor: 0.1 },
];

export const START_MASS = 120;
export const STEP_MINUTES = 10;
export const END_MINUTES = 60;

/**
 * A small repeatable wobble of the balance reading, within ±0,02 g.
 * @param {number} seed
 */
function wobble(seed) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return (x - Math.floor(x) - 0.5) * 0.04;
}

/**
 * What the balance reads for one setup, in grams to two decimals.
 * @param {SetupId} setupId
 * @param {PlaceId} placeId
 * @param {number} minutes
 */
export function reading(setupId, placeId, minutes) {
  if (minutes === 0) return START_MASS;
  const setup = SETUPS.find((s) => s.id === setupId) ?? SETUPS[0];
  const place = PLACES.find((p) => p.id === placeId) ?? PLACES[0];
  const lost = (setup.rate * place.factor * minutes) / STEP_MINUTES;
  const seed = minutes + SETUPS.indexOf(setup) * 7 + PLACES.indexOf(place) * 13;
  const mass = START_MASS - Math.max(0, lost + wobble(seed));
  return Math.round(mass * 100) / 100;
}

/**
 * Water lost so far, in grams.
 * @param {number} mass
 */
export const waterLost = (mass) => Math.round((START_MASS - mass) * 100) / 100;

/**
 * Average rate, in grams per hour, between the start and this reading.
 * @param {number} mass
 * @param {number} minutes
 */
export const ratePerHour = (mass, minutes) =>
  minutes === 0 ? 0 : Math.round((waterLost(mass) / minutes) * 60 * 100) / 100;

/**
 * Reading of the whole run so far, one row per weighing.
 * @param {PlaceId} placeId
 * @param {number} minutes
 */
export function runTable(placeId, minutes) {
  const rows = [];
  for (let t = 0; t <= minutes; t += STEP_MINUTES) {
    rows.push({ minutes: t, masses: SETUPS.map((s) => reading(s.id, placeId, t)) });
  }
  return rows;
}

/**
 * Colour of cobalt chloride paper from dry blue (0) to moist pink (1).
 * @param {number} share
 */
export function cobaltColor(share) {
  const s = Math.max(0, Math.min(1, share));
  const mix = (/** @type {number} */ a, /** @type {number} */ b) => Math.round(a + (b - a) * s);
  return `rgb(${mix(37, 244)}, ${mix(99, 114)}, ${mix(235, 182)})`;
}

const UNDER_MINUTES = 10;
const UPPER_MINUTES = 25;
const OPEN_AIR_MINUTES = 6;

/**
 * How pink each paper has turned. Without the glass slides, moist room air
 * reaches both papers at once and the comparison says nothing.
 * @param {number} minutes
 * @param {boolean} covered
 */
export function cobaltShares(minutes, covered) {
  if (!covered) {
    const s = Math.min(1, minutes / OPEN_AIR_MINUTES);
    return { upper: s, lower: s };
  }
  return {
    upper: Math.min(1, minutes / UPPER_MINUTES),
    lower: Math.min(1, minutes / UNDER_MINUTES),
  };
}

/**
 * @param {number} minutes
 * @param {boolean} covered
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function describeCobalt(minutes, covered) {
  if (!covered) {
    return {
      tone: 'warn',
      text: 'Không kẹp lam kính, hơi ẩm trong không khí làm cả hai mảnh giấy đổi màu như nhau: không kết luận được gì về lá.',
    };
  }
  const { upper, lower } = cobaltShares(minutes, covered);
  if (minutes === 0) return { tone: 'info', text: 'Giấy cobalt chloride khô có màu xanh.' };
  if (lower >= 1 && upper >= 1) {
    return {
      tone: 'ok',
      text: 'Cả hai mảnh đã hồng: lá thoát hơi nước ở cả hai mặt. Mặt dưới đổi màu trước vì có nhiều khí khổng hơn.',
    };
  }
  if (lower > upper) {
    return {
      tone: 'ok',
      text: 'Mảnh ở mặt dưới hồng nhanh hơn: mặt dưới lá có nhiều khí khổng hơn mặt trên.',
    };
  }
  return { tone: 'info', text: 'Tiếp tục theo dõi thời gian đổi màu của hai mảnh giấy.' };
}

/** @typedef {'khong' | 'vua' | 'qua-nhieu'} Water */
/** @typedef {'khong' | 'vua' | 'qua-nhieu'} Feed */

/**
 * How a potted plant looks after a while under this care. `height` and
 * `green` go from 0 to 1, `wilt` is 0 when upright.
 * @param {Water} water
 * @param {Feed} feed
 * @returns {{ height: number, green: number, wilt: number, tone: 'ok' | 'warn', text: string }}
 */
export function plantState(water, feed) {
  if (water === 'khong') {
    return {
      height: 0.35,
      green: 0.15,
      wilt: 1,
      tone: 'warn',
      text: 'Không được tưới: cây héo, lá vàng nâu. Thiếu nước thì khoáng trong đất cũng không tan để rễ hút được, nên có bón phân cũng vô ích.',
    };
  }
  if (water === 'qua-nhieu') {
    return {
      height: 0.5,
      green: 0.35,
      wilt: 0.6,
      tone: 'warn',
      text: 'Tưới quá nhiều: đất úng, rễ thiếu $\\mathrm{O_2}$ nên hút nước kém trong khi lá vẫn thoát hơi nước. Lá vàng, rụng sớm, cây hơi héo.',
    };
  }
  if (feed === 'khong') {
    return {
      height: 0.55,
      green: 0.5,
      wilt: 0,
      tone: 'warn',
      text: 'Đủ nước nhưng thiếu khoáng: cây không héo nhưng thấp, lá nhạt màu vì thiếu nguyên liệu tạo protein và diệp lục.',
    };
  }
  if (feed === 'qua-nhieu') {
    return {
      height: 0.6,
      green: 0.6,
      wilt: 0.4,
      tone: 'warn',
      text: 'Bón quá liều: nồng độ chất tan trong đất quá cao làm rễ khó hút nước, cây có thể bị "cháy" lá, ngộ độc, đồng thời gây ô nhiễm đất và nước.',
    };
  }
  return {
    height: 1,
    green: 1,
    wilt: 0,
    tone: 'ok',
    text: 'Tưới vừa phải và bón đủ phân: cây xanh tốt, sinh trưởng tốt nhất. Đây là chậu cần có khi so sánh với các chậu khác.',
  };
}
