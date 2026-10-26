/**
 * The book's practical on plant respiration: bell jar A holds a dish of
 * germinating seeds next to a beaker of limewater; bell jar B holds only a
 * beaker of limewater (the control). After about an hour, the limewater in
 * jar A has a thick film and is very cloudy, because the seeds respire
 * strongly and release carbon dioxide, which turns limewater cloudy (a
 * precipitate forms). Jar B, with only the little carbon dioxide of the air,
 * shows almost no film.
 *
 * The learner may also put dry seeds or boiled (dead) seeds in jar A, to see
 * why germinating seeds are used. Amounts are a simple model for teaching.
 */

/** @typedef {'nay-mam' | 'kho' | 'luoc' | 'trong'} JarContent */

/** Cloudiness gained per minute from the carbon dioxide of the air in a jar. */
export const AIR_PER_MIN = 0.0012;

/** Cloudiness gained per minute from what the jar holds. */
export const SEED_PER_MIN = {
  'nay-mam': 0.015,
  kho: 0.0008,
  luoc: 0,
  trong: 0,
};

/** Names of what jar A may hold. */
export const CONTENT_NAME = {
  'nay-mam': 'hạt đang nảy mầm',
  kho: 'hạt khô',
  luoc: 'hạt đã luộc chín',
  trong: 'không có hạt',
};

/** Minutes the book waits before opening the jars. */
export const WAIT_MIN = 60;

/**
 * Cloudiness of the limewater (0 clear, 1 thick film and very cloudy).
 * @param {JarContent} content @param {number} minutes
 */
export function cloudiness(content, minutes) {
  const t = Math.max(0, minutes);
  return Math.min(1, (AIR_PER_MIN + SEED_PER_MIN[content]) * t);
}

/**
 * What the learner sees on the limewater.
 * @param {number} c cloudiness
 */
export function looks(c) {
  if (c < 0.15) return 'trong, hầu như không có váng (hoặc chỉ một lớp váng rất mỏng)';
  if (c < 0.4) return 'có lớp váng mỏng, hơi đục';
  if (c < 0.75) return 'có váng trắng, đục rõ';
  return 'có lớp váng dày và nhiều vẩn đục';
}

/**
 * Comparison of jar A with the control jar B, and what may be concluded.
 * @param {JarContent} content what jar A holds @param {number} minutes
 */
export function verdict(content, minutes) {
  const a = cloudiness(content, minutes);
  const b = cloudiness('trong', minutes);
  if (minutes < 30)
    return {
      a,
      b,
      text: 'Mới qua ít thời gian, nước vôi trong ở hai chuông chưa khác nhau rõ. Chờ khoảng 1 giờ rồi mở chuông quan sát.',
    };
  if (content === 'nay-mam')
    return {
      a,
      b,
      text: 'Nước vôi trong ở chuông A đục và có váng dày hơn hẳn chuông B: hạt đang nảy mầm hô hấp mạnh, thải ra nhiều khí carbon dioxide làm nước vôi trong vẩn đục. Kết luận: hô hấp ở hạt nảy mầm tạo ra khí carbon dioxide.',
    };
  if (content === 'kho')
    return {
      a,
      b,
      text: 'Hạt khô chứa ít nước nên hô hấp rất yếu: nước vôi trong ở chuông A chỉ hơi đục hơn chuông B một chút, khó thấy. Vì vậy thí nghiệm dùng hạt đang nảy mầm, hô hấp mạnh, để kết quả rõ ràng.',
    };
  if (content === 'luoc')
    return {
      a,
      b,
      text: 'Hạt đã luộc chín là hạt chết, không hô hấp: nước vôi trong ở chuông A giống hệt chuông B. Điều này cho thấy khí carbon dioxide ở thí nghiệm chính là do hạt sống hô hấp thải ra.',
    };
  return {
    a,
    b,
    text: 'Hai chuông đều không có hạt nên giống nhau: chỉ có chút khí carbon dioxide sẵn có trong không khí, nước vôi trong hầu như không đục.',
  };
}
