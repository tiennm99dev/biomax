/**
 * Virtual microscope for the protist practical: drops of water taken from
 * different places, what lives in each, how the objects swim, and the rules
 * for naming one: the 40× objective, a sharp focus and (for fast swimmers)
 * a few cotton fibres to slow them down. Sizes and positions are in µm.
 */
import { int, rng } from '#lib/core/drill.js';
import { wrap } from '../_shared/motion.js';

/** @typedef {'trung-roi' | 'trung-giay' | 'trung-bien-hinh' | 'tao-luc' | 'tao-silic' | 'bot-khi' | 'manh-vun'} KindId */
/** @typedef {'vang-ao' | 'bun-day' | 'binh-rom' | 'nuoc-soi'} SourceId */
/** @typedef {'vat-kinh-10' | 'vat-kinh-40'} LensId */
/**
 * @typedef {{
 *   id: KindId;
 *   name: string;
 *   size: number;
 *   speed: number;
 *   protist: boolean;
 *   look: string;
 * }} Kind
 * @typedef {{ id: string, kind: KindId, x: number, y: number, vx: number, vy: number }} Specimen
 */

/** @type {Kind[]} */
export const KINDS = [
  {
    id: 'trung-roi',
    name: 'Trùng roi xanh',
    size: 50,
    speed: 120,
    protist: true,
    look: 'hình thoi màu xanh lục, có điểm mắt đỏ, bơi bằng roi ở đầu',
  },
  {
    id: 'trung-giay',
    name: 'Trùng giày',
    size: 220,
    speed: 300,
    protist: true,
    look: 'hình đế giày trong suốt, phủ lông bơi, bơi nhanh',
  },
  {
    id: 'trung-bien-hinh',
    name: 'Trùng biến hình',
    size: 300,
    speed: 6,
    protist: true,
    look: 'khối nhầy không có hình dạng cố định, thò chân giả, bò rất chậm',
  },
  {
    id: 'tao-luc',
    name: 'Tảo lục đơn bào',
    size: 22,
    speed: 3,
    protist: true,
    look: 'hình cầu nhỏ có lục lạp lớn màu xanh, trôi nổi',
  },
  {
    id: 'tao-silic',
    name: 'Tảo silic',
    size: 60,
    speed: 12,
    protist: true,
    look: 'hình thuyền có vỏ cứng với các vân ngang, màu vàng nâu, trượt chậm',
  },
  {
    id: 'bot-khi',
    name: 'Bọt khí',
    size: 90,
    speed: 0,
    protist: false,
    look: 'hình tròn đều, viền đen dày, ở giữa sáng; không có cấu tạo tế bào',
  },
  {
    id: 'manh-vun',
    name: 'Mảnh vụn',
    size: 120,
    speed: 2,
    protist: false,
    look: 'méo mó, sẫm màu, không có nhân, không tự di chuyển',
  },
];

/** @param {KindId} id */
export const kindById = (id) => KINDS.find((k) => k.id === id) ?? KINDS[0];

/**
 * Where the water comes from, and how many of each kind one drop holds.
 * @type {Array<{ id: SourceId, name: string, counts: Partial<Record<KindId, number>>, note: string }>}
 */
export const SOURCES = [
  {
    id: 'vang-ao',
    name: 'Váng xanh trên mặt ao',
    counts: { 'trung-roi': 4, 'tao-luc': 4, 'tao-silic': 2, 'trung-giay': 1, 'bot-khi': 1 },
    note: 'Váng xanh trên mặt ao giàu ánh sáng: nhiều trùng roi xanh và tảo, những sinh vật có lục lạp quang hợp được.',
  },
  {
    id: 'bun-day',
    name: 'Nước sát lớp bùn đáy ao',
    counts: {
      'trung-bien-hinh': 2,
      'trung-giay': 2,
      'tao-silic': 1,
      'manh-vun': 3,
      'trung-roi': 1,
    },
    note: 'Gần lớp bùn đáy có nhiều vụn hữu cơ: nơi sống của trùng biến hình và trùng giày.',
  },
  {
    id: 'binh-rom',
    name: 'Nước ngâm rơm khô 5 đến 7 ngày',
    counts: { 'trung-giay': 5, 'manh-vun': 2, 'bot-khi': 1 },
    note: 'Rơm ngâm nước nhiều ngày có nhiều vi khuẩn: thức ăn của trùng giày, nên trùng giày sinh sản rất nhiều. Đây là cách nuôi cấy trùng giày để quan sát.',
  },
  {
    id: 'nuoc-soi',
    name: 'Nước đun sôi để nguội',
    counts: { 'bot-khi': 2 },
    note: 'Nước đã đun sôi không có nguyên sinh vật sống: chỉ thấy bọt khí. Mẫu này dùng để so sánh (mẫu đối chứng).',
  },
];

/** @param {SourceId} id */
export const sourceById = (id) => SOURCES.find((s) => s.id === id) ?? SOURCES[0];

/** Half the side of the square the drop is wrapped in (µm). */
export const DROP_HALF = 850;

/**
 * The objects in one drop from a source: the same for every visitor.
 * @param {SourceId} sourceId
 * @returns {Specimen[]}
 */
export function makeDrop(sourceId) {
  const index = SOURCES.findIndex((s) => s.id === sourceId);
  const rand = rng(31 + index * 101);
  const src = sourceById(sourceId);
  /** @type {Specimen[]} */
  const out = [];
  for (const k of KINDS) {
    const n = src.counts[k.id] ?? 0;
    for (let i = 0; i < n; i++) {
      const a = (int(rand, 0, 359) * Math.PI) / 180;
      const dist = int(rand, 60, 720);
      const dir = (int(rand, 0, 359) * Math.PI) / 180;
      out.push({
        id: `${k.id}-${i}`,
        kind: k.id,
        x: Math.round(dist * Math.cos(a)),
        y: Math.round(dist * Math.sin(a)),
        vx: k.speed * Math.cos(dir),
        vy: k.speed * Math.sin(dir),
      });
    }
  }
  return out;
}

/** How much a few cotton fibres slow every swimmer. */
export const COTTON_SLOW = 0.1;

/**
 * Positions after `dt` seconds, wrapped into the drop.
 * @param {Specimen[]} drop @param {number} dt @param {boolean} cotton
 * @returns {Specimen[]}
 */
export function stepDrop(drop, dt, cotton) {
  const f = cotton ? COTTON_SLOW : 1;
  return drop.map((s) => ({
    ...s,
    x: wrap(s.x + s.vx * f * dt, -DROP_HALF, DROP_HALF),
    y: wrap(s.y + s.vy * f * dt, -DROP_HALF, DROP_HALF),
  }));
}

/** Eyepiece magnification. */
export const EYEPIECE = 10;

/** Objectives: total magnification and width of the field of view (µm). */
export const LENSES = [
  { id: /** @type {LensId} */ ('vat-kinh-10'), label: 'Vật kính 10×', mag: 100, fov: 1800 },
  { id: /** @type {LensId} */ ('vat-kinh-40'), label: 'Vật kính 40×', mag: 400, fov: 450 },
];

/** @param {LensId} id */
export const lensById = (id) => LENSES.find((l) => l.id === id) ?? LENSES[0];

/** Focus knob position at which the image is sharp, and the slack allowed. */
export const SHARP_AT = 6;
export const SHARP_SLACK = 1;

/**
 * Blur radius (px) of the image for a focus knob position from 0 to 10.
 * @param {number} focus
 */
export function blurAt(focus) {
  return Math.round(Math.abs(focus - SHARP_AT) * 1.5 * 10) / 10;
}

/** Fastest an object may swim (µm/s) and still be watched long enough to name. */
export const MAX_WATCH_SPEED = 60;

/**
 * Whether the learner can name a specimen now, and why not.
 * @param {{ kind: KindId, lens: LensId, focus: number, cotton: boolean }} s
 * @returns {{ ok: boolean, reason: string }}
 */
export function canName({ kind, lens, focus, cotton }) {
  if (lens !== 'vat-kinh-40')
    return {
      ok: false,
      reason:
        'Ở vật kính 10× chỉ thấy hình rất nhỏ. Chuyển sang vật kính 40× để nhìn rõ rồi mới gọi tên.',
    };
  if (Math.abs(focus - SHARP_AT) > SHARP_SLACK)
    return {
      ok: false,
      reason: 'Ảnh còn mờ. Vặn ốc vi cấp (thanh "Điều chỉnh nét") cho ảnh rõ nét.',
    };
  const speed = kindById(kind).speed * (cotton ? COTTON_SLOW : 1);
  if (speed > MAX_WATCH_SPEED)
    return {
      ok: false,
      reason:
        'Nó bơi nhanh quá, vừa thấy đã ra khỏi trường nhìn. Thêm vài sợi bông vào giọt nước để cản bớt rồi quan sát lại.',
    };
  return { ok: true, reason: '' };
}

/**
 * Feedback after the learner names a specimen.
 * @param {KindId} real @param {KindId} guess
 */
export function nameFeedback(real, guess) {
  const k = kindById(real);
  if (real === guess)
    return k.protist
      ? `Đúng: ${k.name.toLowerCase()} (${k.look}). Đã ghi vào bảng đếm.`
      : `Đúng: đây là ${k.name.toLowerCase()}, không phải sinh vật (${k.look}). Không tính vào số nguyên sinh vật.`;
  const g = kindById(guess);
  return `Chưa đúng. ${g.name} có đặc điểm: ${g.look}. Hãy nhìn kĩ hình dạng, màu sắc và cách di chuyển của đối tượng này.`;
}

/**
 * The counting table: per protist kind present in the drop, how many were
 * named and how many there are.
 * @param {Specimen[]} drop @param {string[]} named ids named correctly
 */
export function tally(drop, named) {
  return KINDS.filter((k) => k.protist)
    .map((k) => ({
      kind: k,
      found: drop.filter((s) => s.kind === k.id && named.includes(s.id)).length,
      total: drop.filter((s) => s.kind === k.id).length,
    }))
    .filter((row) => row.total > 0);
}

/**
 * Number of protists (living things) in a drop.
 * @param {Specimen[]} drop
 */
export const protistCount = (drop) => drop.filter((s) => kindById(s.kind).protist).length;
