/**
 * Logic for the yogurt-making practical: the steps of the book's recipe
 * (for the ordering task) and a simplified model of the result from the
 * temperature of the milk when the starter yogurt goes in and the hours of
 * incubation in the insulated box.
 *
 * Lactic acid bacteria are killed when the milk is too hot (60 °C and
 * above), lose part of the starter just below that (above 55 °C), work best
 * when it starts warm (about 40-55 °C; the book cools the water to about
 * 50 °C) and slowly when it is cool. At the best start the
 * milk sets in about 10-14 hours; longer makes it too sour.
 */

/** The book's yogurt steps, in the right order. */
export const STEPS = [
  'Đun sôi 1 lít nước, để nguội đến khoảng 50 °C (đo bằng nhiệt kế).',
  'Cho sữa đặc vào cốc, thêm nước ấm cho đủ 1 lít, khuấy cho tan hết.',
  'Cho hai hộp sữa chua không đường (sữa chua giống) vào, khuấy đều.',
  'Rót vào các lọ thủy tinh, đậy nắp, đặt vào thùng xốp, đậy kín và ủ 10 đến 12 giờ.',
  'Lấy các lọ sữa chua ra, cho vào tủ lạnh.',
];

/** Starting order shown to the learner (indices into STEPS). */
export const START_ORDER = [2, 0, 4, 1, 3];

/**
 * Number of steps already in their right place.
 * @param {number[]} order indices into STEPS
 */
export function correctPlaces(order) {
  return order.filter((step, pos) => step === pos).length;
}

/**
 * How fast the bacteria ferment for a starting temperature: 0 when they are
 * killed, 1 at the best start.
 * @param {number} mixTemp °C of the milk when the starter is added
 */
export function rateAt(mixTemp) {
  if (mixTemp >= 60) return 0;
  if (mixTemp > 55) return 0.5;
  if (mixTemp >= 40) return 1;
  if (mixTemp >= 30) return 0.6;
  return 0.3;
}

/**
 * Why the milk sets more slowly than at the book temperature, or '' when
 * the start is right (or the starter was killed, which RESULT_TEXT explains).
 * @param {number} mixTemp °C of the milk when the starter is added
 */
export function startNote(mixTemp) {
  if (mixTemp >= 60) return '';
  if (mixTemp > 55)
    return 'Hỗn hợp hơi nóng (trên 55 °C) đã làm chết một phần vi khuẩn lactic, nên sữa đông chậm hơn.';
  if (mixTemp < 40)
    return 'Hỗn hợp còn nguội (dưới 40 °C) nên vi khuẩn lactic hoạt động chậm, sữa lâu đông.';
  return '';
}

/** Hours to set at the best rate. */
export const SET_HOURS = 10;

/**
 * @typedef {'chet' | 'long' | 'sanh' | 'dat' | 'qua-chua'} YogurtState
 */

/**
 * The result after incubating.
 * @param {number} mixTemp
 * @param {number} hours
 * @returns {{ state: YogurtState, progress: number }}
 */
export function yogurtOutcome(mixTemp, hours) {
  const rate = rateAt(mixTemp);
  if (rate === 0) return { state: 'chet', progress: 0 };
  const progress = (rate * hours) / SET_HOURS;
  if (progress < 0.5) return { state: 'long', progress };
  if (progress < 1) return { state: 'sanh', progress };
  if (progress <= 1.4 + 1e-9) return { state: 'dat', progress };
  return { state: 'qua-chua', progress };
}

/** What the learner sees for each result, and why. @type {Record<YogurtState, string>} */
export const RESULT_TEXT = {
  chet: 'Sữa không đông: hỗn hợp quá nóng (từ 60 °C trở lên) đã tiêu diệt vi khuẩn lactic trong sữa chua giống. Vì vậy không pha sữa chua giống bằng nước sôi.',
  long: 'Sữa vẫn còn lỏng: vi khuẩn lactic mới tạo ra ít acid lactic. Cần ủ thêm.',
  sanh: 'Sữa đã sánh lại nhưng chưa đông hẳn: vi khuẩn lactic đang biến đường thành acid lactic. Ủ thêm một thời gian nữa.',
  dat: 'Sữa chua đã đông mịn, có vị chua dịu: đạt. Cho ngay vào tủ lạnh để vi khuẩn lactic hoạt động chậm lại.',
  'qua-chua':
    'Ủ quá lâu: vi khuẩn lactic tạo ra quá nhiều acid lactic nên sữa chua rất chua và tách nước. Lẽ ra phải cho vào tủ lạnh sớm hơn.',
};
