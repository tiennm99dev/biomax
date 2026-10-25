/**
 * Virtual microscope for the practical: specimens with their real cell
 * sizes, the lenses (a magnifying glass and a light microscope with a 10×
 * eyepiece), field of view and focus, and what the learner can see.
 */

/** @typedef {'vay-hanh' | 'trung-ca'} SpecimenId */
/** @typedef {'kinh-lup' | 'vat-kinh-10' | 'vat-kinh-40'} LensId */
/**
 * @typedef {{
 *   id: LensId;
 *   label: string;
 *   mag: number;
 *   fov: number;
 *   focus: number;
 *   depth: number;
 * }} Lens
 */

/** Eyepiece magnification of the school microscope. */
export const EYEPIECE = 10;

/**
 * Lenses: total magnification, diameter of the field of view (µm), focus
 * position where the image is sharp, and how far from it the image stays
 * sharp (smaller for stronger lenses).
 * @type {Lens[]}
 */
export const LENSES = [
  { id: 'kinh-lup', label: 'Kính lúp', mag: 10, fov: 8000, focus: 47, depth: 4 },
  {
    id: 'vat-kinh-10',
    label: 'Kính hiển vi, vật kính 10×',
    mag: 100,
    fov: 1800,
    focus: 63,
    depth: 2,
  },
  {
    id: 'vat-kinh-40',
    label: 'Kính hiển vi, vật kính 40×',
    mag: 400,
    fov: 450,
    focus: 68,
    depth: 1,
  },
];

/**
 * Specimens: cell length and width (µm) and the parts visible once the
 * cells are large and sharp enough.
 * @type {Array<{ id: SpecimenId, label: string, length: number, width: number, parts: string[] }>}
 */
export const SPECIMENS = [
  {
    id: 'vay-hanh',
    label: 'Biểu bì vảy hành',
    length: 280,
    width: 70,
    parts: ['thành tế bào', 'tế bào chất', 'nhân'],
  },
  {
    id: 'trung-ca',
    label: 'Trứng cá',
    length: 1000,
    width: 1000,
    parts: ['màng tế bào', 'tế bào chất', 'nhân'],
  },
];

/** Image size (px on screen) below which a cell's parts cannot be made out. */
export const DETAIL_PX = 30;

/** @param {LensId} id */
export const lensById = (id) => LENSES.find((l) => l.id === id) ?? LENSES[0];

/** @param {SpecimenId} id */
export const specimenById = (id) => SPECIMENS.find((s) => s.id === id) ?? SPECIMENS[0];

/**
 * Total magnification of a microscope: eyepiece times objective.
 * @param {number} eyepiece
 * @param {number} objective
 */
export function totalMagnification(eyepiece, objective) {
  return eyepiece * objective;
}

/**
 * Blur radius (px) of the image at focus position `focus`: zero within the
 * lens's depth of focus, growing outside it.
 * @param {Lens} lens
 * @param {number} focus
 */
export function blurAt(lens, focus) {
  const off = Math.abs(focus - lens.focus) - lens.depth;
  return off <= 0 ? 0 : Math.min(12, 0.8 + off * 0.6);
}

/**
 * What the learner sees of a specimen through a lens at a focus position,
 * drawn in a circle `viewPx` wide.
 * @param {SpecimenId} specimenId
 * @param {LensId} lensId
 * @param {number} focus
 * @param {number} [viewPx]
 */
export function observe(specimenId, lensId, focus, viewPx = 300) {
  const lens = lensById(lensId);
  const sp = specimenById(specimenId);
  const scale = viewPx / lens.fov;
  const cellPx = sp.length * scale;
  const sharp = blurAt(lens, focus) === 0;
  const tooBig = sp.width > lens.fov;
  const detailed = sharp && cellPx >= DETAIL_PX;
  /** @type {'blurred' | 'too-small' | 'too-big' | 'clear'} */
  let verdict = 'clear';
  if (!sharp) verdict = 'blurred';
  else if (tooBig) verdict = 'too-big';
  else if (!detailed) verdict = 'too-small';
  return {
    scale,
    cellPx,
    sharp,
    verdict,
    seen: verdict === 'clear' || verdict === 'too-big' ? sp.parts : [],
    across: lens.fov / sp.length,
  };
}
