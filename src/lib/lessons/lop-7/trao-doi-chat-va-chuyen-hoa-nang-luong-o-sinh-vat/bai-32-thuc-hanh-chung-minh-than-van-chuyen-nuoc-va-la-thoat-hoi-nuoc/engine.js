/**
 * The book's two practicals on water in plants.
 *
 * 1. A celery stalk or a white flower stands in coloured water. Water rises
 *    through the xylem, pulled by transpiration at the leaves, so after some
 *    hours the leaves (petals) take the colour, and a cross-section of the
 *    stem shows dark coloured dots: the xylem vessels. Plain water shows
 *    nothing, which is why the water is coloured.
 * 2. Two potted plants of the same kind: pot A has every leaf picked off,
 *    pot B keeps its leaves. A clear plastic bag is tied over the shoot of
 *    each plant (not over the pot). In the light, bag B mists over with
 *    water vapour, bag A stays almost clear: leaves give off water vapour.
 *    Bagging the whole pot spoils the test, because moist soil evaporates.
 *
 * Rates are a simple model for teaching.
 */

/** @typedef {'mau' | 'trong'} Water */
/** @typedef {'thoang' | 'am-toi'} Place */
/** @typedef {'nang' | 'ram'} Light */
/** @typedef {'than-la' | 'ca-chau'} Cover */

/** Hours for coloured water to reach the leaf tips. */
export const RISE_HOURS = { thoang: 6, 'am-toi': 18 };

/**
 * How far up the shoot the coloured water has climbed (0 base, 1 leaf tips).
 * @param {Place} place @param {number} hours
 */
export const rise = (place, hours) => Math.min(1, Math.max(0, hours) / RISE_HOURS[place]);

/**
 * What the learner sees on the leaves (petals) and on a cross-section.
 * @param {Water} water @param {Place} place @param {number} hours
 */
export function stemResult(water, place, hours) {
  const h = rise(place, hours);
  if (water === 'trong')
    return {
      h,
      leaf: 'vẫn giữ màu tự nhiên',
      section: 'không phân biệt được mạch gỗ',
      text: 'Nước không màu vẫn được cây hút lên nhưng ta không nhìn thấy được, cũng không phân biệt được với nước sẵn có trong cây. Vì vậy thí nghiệm phải dùng nước pha màu.',
    };
  if (h < 0.05)
    return {
      h,
      leaf: 'chưa đổi màu',
      section: 'chưa thấy chấm màu',
      text: 'Mới cắm vào cốc, nước màu chưa kịp đi lên. Để cành ở nơi thoáng vài giờ rồi quan sát.',
    };
  const leaf =
    h >= 1
      ? 'nhuộm màu rõ, giống màu nước trong cốc'
      : h >= 0.7
        ? 'gân lá (mép cánh hoa) bắt đầu có màu'
        : 'chưa đổi màu, nước màu mới lên đến thân';
  const section = 'thấy rõ các chấm tròn nhuộm màu đậm: đó là mạch gỗ';
  if (h >= 1)
    return {
      h,
      leaf,
      section,
      text: 'Nước màu đã đi từ cốc qua mạch gỗ của thân lên tận lá (cánh hoa). Kết luận: thân vận chuyển nước lên lá nhờ mạch gỗ; lực kéo nước lên chủ yếu do lá thoát hơi nước.',
    };
  return {
    h,
    leaf,
    section,
    text:
      place === 'am-toi'
        ? 'Ở nơi tối, ẩm, lá thoát hơi nước yếu nên nước màu đi lên rất chậm. Chuyển cốc ra nơi thoáng, có ánh sáng thì màu lên nhanh hơn.'
        : 'Nước màu đang đi lên theo mạch gỗ của thân. Chờ thêm để thấy màu lên tới lá (cánh hoa).',
  };
}

/** Mist gained per minute in a bag. */
export const MIST_PER_MIN = {
  leaves: { nang: 0.02, ram: 0.008 },
  bare: 0.0008,
  soil: 0.012,
};

/**
 * How misted the bag over a plant is (0 clear, 1 thick droplets).
 * @param {{ leaves: boolean, light: Light, cover: Cover, minutes: number }} o
 */
export function mist({ leaves, light, cover, minutes }) {
  const rate =
    (leaves ? MIST_PER_MIN.leaves[light] : MIST_PER_MIN.bare) +
    (cover === 'ca-chau' ? MIST_PER_MIN.soil : 0);
  return Math.min(1, rate * Math.max(0, minutes));
}

/** @param {number} m mist level */
export function looks(m) {
  if (m < 0.15) return 'trong suốt, hầu như không thay đổi';
  if (m < 0.5) return 'hơi mờ, có lấm tấm hơi nước';
  if (m < 0.85) return 'mờ đục, đọng nhiều hơi nước';
  return 'mờ đục, đọng thành giọt nước';
}

/**
 * Both bags and what may be concluded.
 * @param {Light} light @param {Cover} cover @param {number} minutes
 */
export function leafResult(light, cover, minutes) {
  const a = mist({ leaves: false, light, cover, minutes });
  const b = mist({ leaves: true, light, cover, minutes });
  let text;
  if (minutes < 15)
    text =
      'Mới trùm túi, hai túi chưa khác nhau. Để hai chậu ngoài nơi có ánh sáng một thời gian rồi quan sát.';
  else if (cover === 'ca-chau')
    text =
      'Trùm cả chậu là sai: đất ẩm cũng bốc hơi nước, nên túi ở chậu A (không có lá) cũng mờ. Không thể kết luận hơi nước là do lá thoát ra. Chỉ trùm kín phần thân và lá.';
  else if (b - a < 0.2)
    text =
      'Túi ở chậu B mới hơi mờ. Ở nơi râm, khí khổng mở ít nên lá thoát hơi nước chậm; chờ thêm hoặc đưa ra chỗ nắng.';
  else
    text =
      'Túi trùm cây có lá (chậu B) mờ đục, đọng hơi nước; túi trùm cây đã ngắt hết lá (chậu A) hầu như không đổi. Kết luận: lá là cơ quan thoát hơi nước chủ yếu của cây.';
  return { a, b, text };
}
