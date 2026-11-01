/**
 * A virtual light microscope: the slides drawn in micrometres, the field of
 * view of each objective, focus, and the judging of a photo.
 */

import { seeded } from '#lib/domain/diagrams.js';

/** @typedef {'vi-khuan' | 'vay-hanh' | 'niem-mac'} SpecimenId */

/** Field number of the 10× eyepiece, in µm: the field of view is this over the objective. */
export const FIELD_NUMBER = 18000;
export const EYEPIECE = 10;
export const OBJECTIVES = [10, 40, 100];
/** The objective a usable photo needs at least, as the book asks for. */
export const PHOTO_OBJECTIVE = 40;
/** How far the focus knob may be off and the image still counts as sharp. */
export const FOCUS_TOLERANCE = 2;
/** Left of this x (µm) the sample lies in a thick, overlapping layer. */
export const THIN_FROM = -100;

const WORLD_X = 1900;
const WORLD_Y = 1000;

/**
 * @typedef {{
 *   id: SpecimenId;
 *   name: string;
 *   stain: string;
 *   focus: number;
 *   seen: string;
 * }} Specimen
 */

/** @type {Specimen[]} */
export const SPECIMENS = [
  {
    id: 'vi-khuan',
    name: 'Vi khuẩn (nước dưa muối)',
    stain: 'Nhỏ xanh methylene',
    focus: 62,
    seen: 'Vi khuẩn rất nhỏ, có hình que, hình cầu, một ít hình xoắn. Không nhìn được cấu trúc bên trong.',
  },
  {
    id: 'vay-hanh',
    name: 'Biểu bì vảy hành',
    stain: 'Nhỏ xanh methylene',
    focus: 40,
    seen: 'Tế bào lớn, thuôn dài, xếp sát nhau, có thành tế bào dày; nhân bắt màu đậm.',
  },
  {
    id: 'niem-mac',
    name: 'Niêm mạc miệng',
    stain: 'Nhỏ xanh methylene',
    focus: 52,
    seen: 'Tế bào dẹt, hình dạng không đều, không có thành tế bào, nhân bắt màu đậm nằm giữa.',
  },
];

/**
 * @param {SpecimenId} id
 * @returns {Specimen}
 */
export function specimenOf(id) {
  const s = SPECIMENS.find((v) => v.id === id);
  if (!s) throw new Error(`unknown specimen ${id}`);
  return s;
}

/**
 * Diameter of the field of view in µm.
 * @param {number} objective
 */
export const fieldOfView = (objective) => FIELD_NUMBER / objective;

/**
 * Total magnification of the eyepiece and an objective.
 * @param {number} objective
 */
export const magnification = (objective) => EYEPIECE * objective;

/**
 * A round scale-bar length in µm for an objective.
 * @param {number} objective
 */
export const scaleBar = (objective) => (objective === 10 ? 500 : objective === 40 ? 100 : 50);

/**
 * The focus knob position that is sharp for a slide and objective.
 * @param {SpecimenId} id
 * @param {number} objective
 */
export function focusTarget(id, objective) {
  const shift = objective === 10 ? 0 : objective === 40 ? 4 : 6;
  return specimenOf(id).focus + shift;
}

/**
 * @param {SpecimenId} id
 * @param {number} objective
 * @param {number} focus
 */
export function isSharp(id, objective, focus) {
  return Math.abs(focus - focusTarget(id, objective)) <= FOCUS_TOLERANCE;
}

/**
 * How blurred the image is, in CSS pixels. The 100× objective is also blurred
 * without its drop of oil.
 * @param {SpecimenId} id
 * @param {number} objective
 * @param {number} focus
 * @param {boolean} oil
 */
export function blurOf(id, objective, focus, oil) {
  const off = Math.max(0, Math.abs(focus - focusTarget(id, objective)) - FOCUS_TOLERANCE);
  const needOil = objective === 100 && !oil ? 2.5 : 0;
  return Math.min(8, off * 0.35 + needOil);
}

/**
 * @typedef {(
 *   | { kind: 'te-bao-thuc-vat', x: number, y: number, w: number, h: number, nx: number, ny: number }
 *   | { kind: 'te-bao-niem-mac', x: number, y: number, d: string, nr: number }
 *   | { kind: 'que', x1: number, y1: number, x2: number, y2: number, x: number }
 *   | { kind: 'cau', x: number, y: number, r: number }
 *   | { kind: 'xoan', d: string, x: number, y: number }
 * )} Item
 */

/** @returns {Item[]} */
function onionCells() {
  const rand = seeded(11);
  /** @type {Item[]} */
  const out = [];
  const W = 300;
  const H = 80;
  /**
   * @param {number} dx
   * @param {number} dy
   * @param {number} fromX
   * @param {number} toX
   */
  const layer = (dx, dy, fromX, toX) => {
    for (let row = -13; row <= 13; row++) {
      for (let col = -7; col <= 7; col++) {
        const x = col * W + (row % 2 ? W / 2 : 0) + dx;
        if (x < fromX || x + W > toX) continue;
        const y = row * H + dy;
        out.push({
          kind: 'te-bao-thuc-vat',
          x,
          y,
          w: W,
          h: H,
          nx: x + 70 + rand() * 160,
          ny: y + 22 + rand() * 36,
        });
      }
    }
  };
  layer(0, 0, -Infinity, Infinity);
  layer(115, 37, -WORLD_X, THIN_FROM);
  return out;
}

/** @returns {Item[]} */
function cheekCells() {
  const rand = seeded(23);
  /** @type {Item[]} */
  const out = [];
  const place = (
    /** @type {number} */ fromX,
    /** @type {number} */ toX,
    /** @type {number} */ n,
  ) => {
    for (let i = 0; i < n; i++) {
      const x = fromX + rand() * (toX - fromX);
      const y = (rand() * 2 - 1) * WORLD_Y;
      const points = 8;
      const corners = [];
      for (let k = 0; k < points; k++) {
        const a = (k / points) * Math.PI * 2;
        const r = 24 + rand() * 14;
        corners.push(`${(x + r * Math.cos(a)).toFixed(1)} ${(y + r * Math.sin(a)).toFixed(1)}`);
      }
      out.push({
        kind: 'te-bao-niem-mac',
        x,
        y,
        d: `M ${corners.join(' L ')} Z`,
        nr: 5 + rand() * 2,
      });
    }
  };
  place(-WORLD_X, WORLD_X, 170);
  place(-WORLD_X, THIN_FROM, 130);
  return out;
}

/** @returns {Item[]} */
function bacteria() {
  const rand = seeded(37);
  /** @type {Item[]} */
  const out = [];
  const place = (
    /** @type {number} */ fromX,
    /** @type {number} */ toX,
    /** @type {number} */ n,
  ) => {
    for (let i = 0; i < n; i++) {
      const x = fromX + rand() * (toX - fromX);
      const y = (rand() * 2 - 1) * WORLD_Y;
      const a = rand() * Math.PI * 2;
      const c = Math.cos(a);
      const s = Math.sin(a);
      const pick = rand();
      if (pick < 0.65) {
        const half = 2 + rand();
        out.push({
          kind: 'que',
          x,
          x1: x - half * c,
          y1: y - half * s,
          x2: x + half * c,
          y2: y + half * s,
        });
      } else if (pick < 0.95) {
        out.push({ kind: 'cau', x, y, r: 0.9 });
      } else {
        const dx = 2 * c;
        const dy = 2 * s;
        const nx = -1.2 * s;
        const ny = 1.2 * c;
        const d = `M ${x - 2 * dx} ${y - 2 * dy} q ${dx / 2 + nx} ${dy / 2 + ny} ${dx} ${dy} t ${dx} ${dy} t ${dx} ${dy} t ${dx} ${dy}`;
        out.push({ kind: 'xoan', d, x, y });
      }
    }
  };
  place(-WORLD_X, WORLD_X, 3000);
  place(-WORLD_X, THIN_FROM, 1500);
  return out;
}

/** @type {Partial<Record<SpecimenId, Item[]>>} */
const worlds = {};

/**
 * Every shape of a slide, in µm, built once.
 * @param {SpecimenId} id
 * @returns {Item[]}
 */
export function slideItems(id) {
  worlds[id] ??= id === 'vi-khuan' ? bacteria() : id === 'vay-hanh' ? onionCells() : cheekCells();
  return worlds[id];
}

/**
 * The shapes that can show in a field of view centred at (x, 0). At the lowest
 * power, single bacteria are specks below a pixel, so only a share is drawn.
 * @param {SpecimenId} id
 * @param {number} x
 * @param {number} objective
 */
export function visibleItems(id, x, objective) {
  const half = fieldOfView(objective) / 2;
  const pad = id === 'vi-khuan' ? 6 : id === 'niem-mac' ? 40 : 300;
  const stride = id === 'vi-khuan' && objective === 10 ? 5 : 1;
  return slideItems(id).filter((item, i) => {
    if (i % stride) return false;
    const y = 'y' in item ? item.y : item.y1;
    const reach = item.kind === 'te-bao-thuc-vat' ? 100 : pad;
    return Math.abs(item.x - x) <= half + pad && Math.abs(y) <= half + reach;
  });
}

/**
 * Whether the field at x looks at the single layer you can see cells through.
 * @param {number} x
 */
export const isThin = (x) => x >= THIN_FROM;

/**
 * @typedef {{
 *   specimen: SpecimenId;
 *   objective: number;
 *   located: boolean;
 *   stained: boolean;
 *   x: number;
 *   focus: number;
 *   oil: boolean;
 * }} Scope
 */

/**
 * Judges a photo: every condition of a good slide and a correct use of the
 * microscope, reporting the first thing that is wrong.
 * @param {Scope} s
 * @returns {{ ok: boolean, text: string }}
 */
export function judgePhoto(s) {
  if (!s.stained) {
    return {
      ok: false,
      text: 'Ảnh quá nhạt: tiêu bản chưa nhuộm nên tế bào gần như trong suốt. Hãy nhỏ thuốc nhuộm trước.',
    };
  }
  if (!isThin(s.x)) {
    return {
      ok: false,
      text: 'Vùng này mẫu dày và chồng lên nhau nên khó quan sát. Hãy di chuyển lam kính tới vùng mỏng, chỉ có một lớp.',
    };
  }
  if (s.objective < PHOTO_OBJECTIVE) {
    return {
      ok: false,
      text: `Vật kính ${s.objective}× chỉ dùng để tìm vùng quan sát. Hãy chuyển sang vật kính ${PHOTO_OBJECTIVE}× để thấy rõ hơn.`,
    };
  }
  if (!s.located) {
    return {
      ok: false,
      text: 'Em chưa tìm vùng quan sát ở vật kính 10×. Hãy về 10×, lấy nét ở vùng mỏng rồi mới chuyển vật kính lớn hơn.',
    };
  }
  if (s.objective === 100 && !s.oil) {
    return { ok: false, text: 'Vật kính 100× cần một giọt dầu soi giữa vật kính và tiêu bản.' };
  }
  if (!isSharp(s.specimen, s.objective, s.focus)) {
    return { ok: false, text: 'Ảnh còn mờ. Hãy vặn ốc điều chỉnh để lấy nét rõ hơn.' };
  }
  return {
    ok: true,
    text: `Ảnh đạt ở độ phóng đại ${magnification(s.objective)}×. ${specimenOf(s.specimen).seen}`,
  };
}
