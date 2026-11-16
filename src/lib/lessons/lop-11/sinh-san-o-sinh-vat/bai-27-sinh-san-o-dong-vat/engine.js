/**
 * A small steady-state model of the hypothalamus, pituitary and gonad axis
 * that controls sperm and egg production, with negative feedback.
 *
 * Levels are relative to normal (1). The hypothalamus releases GnRH in
 * proportion to its drive (lowered by long stress) and to how far the sex
 * hormone in the blood S is below twice normal: GnRH = drive * (2 − S),
 * never below 0. The pituitary answers with FSH and LH equal to GnRH. The
 * gonad, while present, makes sex hormone equal to LH. Hormone taken from
 * outside adds to S. Solving S_gonad = drive * (2 − S_gonad − S_outside)
 * gives the steady state; with no change every level is 1.
 */

/** @typedef {'nam' | 'nu'} Sex */
/** @typedef {'ngoai' | 'cat-bo' | 'cang-thang'} Change */

/** Long stress halves the hypothalamus drive. */
export const STRESS_DRIVE = 0.5;

/** @type {Record<Sex, number>} Sex hormone taken from outside, relative to normal. */
export const OUTSIDE_DOSE = { nam: 2, nu: 1.5 };

/** @type {Record<Sex, { gonad: string, hormone: string, cells: string, product: string }>} */
export const AXIS = {
  nam: {
    gonad: 'Tinh hoàn',
    hormone: 'Testosterone',
    cells: 'ống sinh tinh, tế bào kẽ',
    product: 'Sản sinh tinh trùng',
  },
  nu: {
    gonad: 'Buồng trứng',
    hormone: 'Progesterone, estrogen',
    cells: 'nang trứng, thể vàng',
    product: 'Trứng chín và rụng',
  },
};

/** @type {Record<Sex, Record<Change, string>>} */
export const CHANGE_NAMES = {
  nam: {
    ngoai: 'Dùng testosterone liều cao từ bên ngoài',
    'cat-bo': 'Cắt bỏ hai tinh hoàn',
    'cang-thang': 'Căng thẳng kéo dài',
  },
  nu: {
    ngoai: 'Uống thuốc tránh thai (progesterone, estrogen)',
    'cat-bo': 'Cắt bỏ hai buồng trứng',
    'cang-thang': 'Căng thẳng kéo dài',
  },
};

/** @type {Change[]} */
export const CHANGES = ['ngoai', 'cat-bo', 'cang-thang'];

/**
 * Steady-state levels for one sex under a set of changes.
 * @param {Sex} sex @param {Change[]} changes
 */
export function levels(sex, changes) {
  const drive = changes.includes('cang-thang') ? STRESS_DRIVE : 1;
  const outside = changes.includes('ngoai') ? OUTSIDE_DOSE[sex] : 0;
  const gonad = !changes.includes('cat-bo');
  const own = gonad ? Math.max(0, (drive * (2 - outside)) / (1 + drive)) : 0;
  const blood = own + outside;
  const gnrh = Math.max(0, drive * (2 - blood));
  const fsh = gnrh;
  const lh = gnrh;
  const product = gonad ? Math.min(fsh, sex === 'nam' ? own : lh) : 0;
  return { gnrh, fsh, lh, own, blood, product, gonad };
}

/**
 * A level in words.
 * @param {number} v
 */
export function word(v) {
  if (v < 0.05) return 'gần như không có';
  if (v < 0.75) return 'giảm';
  if (v > 1.25) return 'tăng';
  return 'bình thường';
}

/**
 * The explanation line for the current state.
 * @param {Sex} sex @param {Change[]} changes
 */
export function explain(sex, changes) {
  const l = levels(sex, changes);
  const h = sex === 'nam' ? 'testosterone' : 'progesterone và estrogen';
  const out = sex === 'nam' ? 'sản sinh tinh trùng' : 'trứng chín và rụng';
  if (changes.length === 0) {
    return `Bình thường: GnRH kích thích tuyến yên tiết FSH, LH; tuyến sinh dục tiết ${h}. Khi ${h} tăng cao, chúng ức chế vùng dưới đồi và tuyến yên (điều hoà ngược âm) nên các hormone giữ ổn định.`;
  }
  /** @type {string[]} */
  const parts = [];
  if (changes.includes('ngoai')) {
    parts.push(
      `${h[0].toUpperCase()}${h.slice(1)} từ bên ngoài làm nồng độ trong máu cao, ức chế ngược vùng dưới đồi và tuyến yên: GnRH, FSH, LH ${word(l.gnrh)}.`,
    );
  }
  if (changes.includes('cat-bo')) {
    parts.push(
      `Không còn ${AXIS[sex].gonad.toLowerCase()} nên không có ${sex === 'nam' ? 'tinh trùng' : 'trứng'}; thiếu ${h} của cơ thể, mất ức chế ngược nên GnRH, FSH, LH ${changes.includes('cang-thang') ? 'được tiết nhiều hơn, bù lại phần giảm do căng thẳng' : word(l.gnrh)}.`,
    );
  }
  if (changes.includes('cang-thang')) {
    parts.push('Căng thẳng kéo dài làm vùng dưới đồi giảm tiết GnRH, gây rối loạn hormone.');
  }
  parts.push(
    sex === 'nu' && changes.includes('ngoai') && l.gonad
      ? 'Kết quả: trứng không chín và không rụng, nên thuốc có tác dụng tránh thai.'
      : `Kết quả: ${out} ${word(l.product)}.`,
  );
  return parts.join(' ');
}
