/**
 * Logic for the two virtual photosynthesis practicals of the book.
 *
 * 1. Starch: a potted plant is kept in the dark for two days (so its leaves
 *    use up the starch they had), part of a leaf is covered on both sides
 *    with black paper, the plant is lit for 4-6 hours, then the leaf is
 *    boiled in 90° alcohol to remove chlorophyll, rinsed, and dipped in
 *    iodine. Iodine turns starch blue-violet; without starch the leaf takes
 *    the yellow-brown colour of iodine.
 * 2. Oxygen: two test tubes full of water, each with a sprig of hornwort,
 *    stand upside down in cups of water; cup A in the dark, cup B in the
 *    light. After about 6 hours, a glowing splint relights in the gas of the
 *    lit tube.
 *
 * Amounts are a simple model for teaching: starch builds up over 4 hours of
 * light, oxygen fills about 1/8 of the tube per hour of light.
 */

/** @typedef {'xanh-tim' | 'xanh-tim-nhat' | 'vang-nau'} IodineColour */

/** Hours of light after which a lit leaf is full of new starch. */
export const STARCH_HOURS = 4;

/**
 * Starch level (0-1) in one part of the leaf.
 * @param {{ darkFirst: boolean, covered: boolean, hours: number }} p
 */
export function starchLevel({ darkFirst, covered, hours }) {
  const old = darkFirst ? 0 : 1;
  const made = covered ? 0 : Math.min(1, hours / STARCH_HOURS);
  return Math.max(old, made);
}

/**
 * Colour of a leaf part after iodine, from its starch level.
 * @param {number} level
 * @returns {IodineColour}
 */
export function iodineColour(level) {
  if (level >= 1) return 'xanh-tim';
  if (level >= 0.25) return 'xanh-tim-nhat';
  return 'vang-nau';
}

/** @type {Record<IodineColour, string>} */
export const COLOUR_NAME = {
  'xanh-tim': 'xanh tím đậm',
  'xanh-tim-nhat': 'xanh tím nhạt',
  'vang-nau': 'vàng nâu (màu của iodine)',
};

/**
 * @typedef {object} StarchSetup
 * @property {boolean} darkFirst kept in the dark for two days first
 * @property {number} hours hours of light with the paper on
 * @property {boolean} alcohol boiled in 90° alcohol before iodine
 */

/**
 * What the learner sees after iodine, and what may be concluded.
 * @param {StarchSetup} s
 */
export function starchResult(s) {
  const covered = iodineColour(starchLevel({ ...s, covered: true }));
  const open = iodineColour(starchLevel({ ...s, covered: false }));
  /** @type {'ok' | 'chua-de-toi' | 'chua-tay' | 'it-sang'} */
  let verdict = 'ok';
  if (!s.alcohol) verdict = 'chua-tay';
  else if (!s.darkFirst) verdict = 'chua-de-toi';
  else if (s.hours < STARCH_HOURS) verdict = 'it-sang';
  return { covered, open, verdict };
}

/** @type {Record<'ok' | 'chua-de-toi' | 'chua-tay' | 'it-sang', string>} */
export const STARCH_TEXT = {
  ok: 'Phần lá bị bịt giấy đen có màu vàng nâu: không có tinh bột. Phần lá được chiếu sáng có màu xanh tím: có tinh bột. Kết luận: lá chỉ tạo ra tinh bột khi được chiếu sáng, tức là khi quang hợp.',
  'chua-de-toi':
    'Cả lá đều có màu xanh tím vì lá còn tinh bột tạo ra từ trước. Không kết luận được tinh bột ở phần lá chiếu sáng là mới tạo ra. Phải để cây trong tối 2 ngày để lá dùng hết tinh bột cũ.',
  'chua-tay':
    'Lá vẫn còn màu xanh của diệp lục nên rất khó nhận ra màu của iodine. Cần đun cách thuỷ lá trong cồn 90° để tẩy diệp lục trước khi nhỏ iodine.',
  'it-sang':
    'Thời gian chiếu sáng còn quá ngắn: phần lá được chiếu sáng chưa có hoặc mới có ít tinh bột nên màu chưa rõ. Cần chiếu sáng khoảng 4 đến 6 giờ để kết quả rõ ràng.',
};

/** Fraction of the tube filled with gas per hour of light. */
export const GAS_PER_HOUR = 1 / 8;

/** Gas fraction needed for a glowing splint to relight. */
export const RELIGHT_AT = 0.5;

/**
 * Gas collected at the top of a tube, as a fraction of the tube (0-1).
 * @param {boolean} lit @param {number} hours
 */
export function gasFraction(lit, hours) {
  return lit ? Math.min(0.9, hours * GAS_PER_HOUR) : 0;
}

/**
 * What happens to a glowing splint put into the tube.
 * @param {number} gas fraction of the tube
 * @returns {'bung-chay' | 'tat'}
 */
export function splint(gas) {
  return gas >= RELIGHT_AT ? 'bung-chay' : 'tat';
}
