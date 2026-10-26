/**
 * Teaching models for the nervous system and the eye.
 *
 * Eye: a reduced eye with a fixed distance L from the lens to the retina
 * (màng lưới). Optical powers are in diopters (D), distances in metres.
 * An object at distance d sends light with vergence V = 1/d; the eye focuses
 * it on the retina when its power is P = 1/L + V. The lens (thể thủy tinh)
 * can bulge to add up to `ACCOMMODATION` diopters to its relaxed power.
 *
 * - Normal eye: relaxed power 1/L (sees far objects sharply), near point
 *   1/4 m = 25 cm.
 * - Short-sighted eye (cận thị): 2 D too strong when relaxed, so far objects
 *   focus in front of the retina; its far point is 50 cm. A diverging lens
 *   of -2 D corrects it.
 * - Long-sighted eye (viễn thị): 2 D too weak when relaxed, so near objects
 *   focus behind the retina; its near point is 50 cm. A converging lens of
 *   +2 D corrects it.
 *
 * Glasses are treated as a thin lens touching the eye: powers add.
 */

/** Lens-to-retina distance of the reduced eye, in metres. */
export const EYE_LENGTH = 0.017;
/** Most extra power the lens can add by bulging, in diopters. */
export const ACCOMMODATION = 4;

/** @typedef {'binh-thuong' | 'can-thi' | 'vien-thi'} EyeType */

/** @type {Record<EyeType, { name: string, error: number, glasses: number, glassesName: string }>} */
export const EYES = {
  'binh-thuong': { name: 'Mắt bình thường', error: 0, glasses: 0, glassesName: '' },
  'can-thi': { name: 'Mắt cận thị', error: 2, glasses: -2, glassesName: 'kính phân kì' },
  'vien-thi': { name: 'Mắt viễn thị', error: -2, glasses: 2, glassesName: 'kính hội tụ' },
};

/** How close to the retina (in D of focusing error) still counts as sharp. */
const SHARP = 0.1;

/**
 * What the eye does when it looks at an object `cm` centimetres away.
 * @param {EyeType} type
 * @param {number} cm object distance in centimetres
 * @param {boolean} [withGlasses]
 */
export function look(type, cm, withGlasses = false) {
  const eye = EYES[type];
  const relaxed = 1 / EYE_LENGTH + eye.error;
  const vergence = 100 / cm - (withGlasses ? eye.glasses : 0);
  const needed = 1 / EYE_LENGTH + vergence;
  const power = Math.min(relaxed + ACCOMMODATION, Math.max(relaxed, needed));
  // Positive: too much power, the image forms in front of the retina.
  const error = power - needed;
  const imageDistance = 1 / (power - vergence);
  /** @type {'ro' | 'truoc' | 'sau'} */
  const image = Math.abs(error) < SHARP ? 'ro' : error > 0 ? 'truoc' : 'sau';
  return {
    image,
    error: Math.round(error * 100) / 100,
    /** How far the image is from the retina, in millimetres (+ behind). */
    shiftMm: Math.round((imageDistance - EYE_LENGTH) * 10000) / 10,
    /** Share of the lens's bulging range in use, from 0 (flat) to 1. */
    bulge: Math.round(((power - relaxed) / ACCOMMODATION) * 100) / 100,
  };
}

/**
 * Nearest and farthest distances (cm) the eye sees sharply, `null` for
 * infinitely far.
 * @param {EyeType} type
 * @param {boolean} [withGlasses]
 */
export function clearRange(type, withGlasses = false) {
  const eye = EYES[type];
  const shift = eye.error + (withGlasses ? eye.glasses : 0);
  // Object vergence the eye can focus: from shift to shift + ACCOMMODATION.
  const far = shift <= 0 ? null : Math.round(100 / shift);
  const near = Math.round(100 / (shift + ACCOMMODATION));
  return { near, far };
}

/**
 * A sentence about what the learner sees.
 * @param {EyeType} type
 * @param {number} cm
 * @param {boolean} [withGlasses]
 */
export function describeLook(type, cm, withGlasses = false) {
  const r = look(type, cm, withGlasses);
  const lens =
    r.bulge > 0.95
      ? 'Thể thủy tinh đã phồng hết mức.'
      : r.bulge > 0.05
        ? 'Thể thủy tinh phồng lên để nhìn rõ vật.'
        : 'Thể thủy tinh dẹt nhất (không phải điều tiết).';
  if (r.image === 'ro') return `Ảnh hiện rõ trên màng lưới: nhìn rõ vật. ${lens}`;
  if (r.image === 'truoc') {
    const why =
      type === 'can-thi' && !withGlasses
        ? 'Mắt cận thị không nhìn rõ vật ở xa. Cần đeo kính phân kì.'
        : 'Vật ở quá xa so với khả năng của mắt.';
    return `Ảnh hiện ở trước màng lưới: nhìn mờ. ${why}`;
  }
  const why =
    type === 'vien-thi' && !withGlasses
      ? 'Mắt viễn thị không nhìn rõ vật ở gần. Cần đeo kính hội tụ.'
      : 'Vật ở quá gần mắt, thể thủy tinh không phồng thêm được nữa.';
  return `Ảnh hiện ở sau màng lưới: nhìn mờ. ${lens} ${why}`;
}

/** Parts of the nervous system, for the sorting activity. */
export const NERVE_BINS = [
  { id: 'trung-uong', label: 'Bộ phận trung ương' },
  { id: 'ngoai-bien', label: 'Bộ phận ngoại biên' },
];

export const NERVE_CARDS = [
  {
    id: 'nao',
    label: 'Não',
    bin: 'trung-uong',
    why: 'Não nằm trong hộp sọ, thuộc bộ phận trung ương.',
  },
  {
    id: 'tuy-song',
    label: 'Tủy sống',
    bin: 'trung-uong',
    why: 'Tủy sống nằm trong ống xương sống, thuộc bộ phận trung ương.',
  },
  {
    id: 'tieu-nao',
    label: 'Tiểu não',
    bin: 'trung-uong',
    why: 'Tiểu não là một phần của não, thuộc bộ phận trung ương.',
  },
  {
    id: 'day-than-kinh',
    label: 'Dây thần kinh',
    bin: 'ngoai-bien',
    why: 'Dây thần kinh nối trung ương với các cơ quan, thuộc bộ phận ngoại biên.',
  },
  {
    id: 'hach',
    label: 'Hạch thần kinh',
    bin: 'ngoai-bien',
    why: 'Hạch thần kinh nằm ngoài não và tủy sống, thuộc bộ phận ngoại biên.',
  },
  {
    id: 'day-tuy',
    label: 'Dây thần kinh tủy',
    bin: 'ngoai-bien',
    why: 'Dây thần kinh tủy đi ra từ tủy sống tới các cơ quan, thuộc bộ phận ngoại biên.',
  },
];
