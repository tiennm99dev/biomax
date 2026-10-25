/**
 * Virtual microscope over a drop of pond water: what lies in the drop, how
 * big it looks with the 10× and the 40× objective, and the learner's record
 * of what each object is. Sizes are typical real sizes in micromet.
 */

/** @typedef {'trung-roi' | 'trung-giay' | 'trung-bien-hinh' | 'tao-luc' | 'manh-vun'} KindId */
/** @typedef {'vat-kinh-10' | 'vat-kinh-40'} LensId */
/**
 * @typedef {{
 *   id: KindId;
 *   name: string;
 *   size: number;
 *   shape: string;
 *   moves: string;
 *   chloroplast: boolean;
 *   living: boolean;
 * }} Kind
 * @typedef {{ id: string, kind: KindId, x: number, y: number, angle: number }} Specimen
 */

/** Eyepiece magnification. */
export const EYEPIECE = 10;

/**
 * Objectives with total magnification and the width of the field of view
 * drawn on screen (µm).
 * @type {Array<{ id: LensId, label: string, mag: number, fov: number }>}
 */
export const LENSES = [
  { id: 'vat-kinh-10', label: 'Vật kính 10×', mag: 100, fov: 1800 },
  { id: 'vat-kinh-40', label: 'Vật kính 40×', mag: 400, fov: 300 },
];

/** @type {Kind[]} */
export const KINDS = [
  {
    id: 'trung-roi',
    name: 'Trùng roi xanh',
    size: 50,
    shape: 'hình thoi, đầu tù, đuôi nhọn; có một điểm mắt màu đỏ ở đầu',
    moves: 'bơi bằng một roi dài ở đầu, vừa tiến vừa xoay mình',
    chloroplast: true,
    living: true,
  },
  {
    id: 'trung-giay',
    name: 'Trùng giày',
    size: 220,
    shape: 'giống chiếc đế giày, có rãnh miệng ở một bên',
    moves: 'bơi nhanh nhờ rất nhiều lông bơi phủ khắp cơ thể',
    chloroplast: false,
    living: true,
  },
  {
    id: 'trung-bien-hinh',
    name: 'Trùng biến hình',
    size: 300,
    shape: 'không cố định, luôn thay đổi',
    moves: 'bò chậm bằng chân giả do tế bào chất dồn về một phía tạo thành',
    chloroplast: false,
    living: true,
  },
  {
    id: 'tao-luc',
    name: 'Tảo lục đơn bào',
    size: 20,
    shape: 'hình cầu hoặc hình bầu dục, có một lục lạp lớn màu xanh',
    moves: 'trôi nổi trong nước hoặc bơi chậm',
    chloroplast: true,
    living: true,
  },
  {
    id: 'manh-vun',
    name: 'Mảnh vụn (không phải sinh vật)',
    size: 120,
    shape: 'méo mó, sẫm màu, không có màng, tế bào chất và nhân',
    moves: 'không tự di chuyển, chỉ trôi theo dòng nước',
    chloroplast: false,
    living: false,
  },
];

/**
 * Objects in the drop, positions in µm from the centre of the slide.
 * @type {Specimen[]}
 */
export const DROP = [
  { id: 'a', kind: 'trung-giay', x: -480, y: -300, angle: 20 },
  { id: 'b', kind: 'trung-roi', x: 360, y: -420, angle: -35 },
  { id: 'c', kind: 'trung-bien-hinh', x: 300, y: 260, angle: 0 },
  { id: 'd', kind: 'tao-luc', x: -150, y: 120, angle: 0 },
  { id: 'e', kind: 'manh-vun', x: -420, y: 420, angle: 40 },
  { id: 'f', kind: 'trung-roi', x: 60, y: -120, angle: 60 },
  { id: 'g', kind: 'tao-luc', x: 600, y: -60, angle: 0 },
];

/** Smallest image size (px) at which an object's shape can be made out. */
export const SHAPE_PX = 20;

/** @param {KindId} id */
export const kindById = (id) => KINDS.find((k) => k.id === id) ?? KINDS[0];

/** @param {LensId} id */
export const lensById = (id) => LENSES.find((l) => l.id === id) ?? LENSES[0];

/**
 * Size of an object's image on a screen field `viewPx` wide.
 * @param {number} sizeUm @param {LensId} lensId @param {number} viewPx
 */
export function imagePx(sizeUm, lensId, viewPx) {
  return (sizeUm * viewPx) / lensById(lensId).fov;
}

/**
 * Whether the shape of an object can be made out at this objective.
 * @param {KindId} kind @param {LensId} lensId @param {number} viewPx
 */
export function shapeVisible(kind, lensId, viewPx) {
  return imagePx(kindById(kind).size, lensId, viewPx) >= SHAPE_PX;
}

/**
 * Checks a name the learner gave to one object of the drop.
 * @param {string} specimenId @param {KindId} guess
 */
export function checkGuess(specimenId, guess) {
  const s = DROP.find((d) => d.id === specimenId);
  return s ? s.kind === guess : false;
}

/**
 * The record table: one row per kind of living thing found, from the
 * identified objects.
 * @param {string[]} identified ids of objects named correctly
 */
export function recordRows(identified) {
  const kinds = new Set(DROP.filter((d) => identified.includes(d.id)).map((d) => kindById(d.kind)));
  return KINDS.filter((k) => k.living && kinds.has(k));
}

/** Kinds that can photosynthesise: those with chloroplasts. */
export const photosynthetic = () => KINDS.filter((k) => k.chloroplast).map((k) => k.id);
