/**
 * A simple teaching model of plant tropisms for the seedling drawings of this
 * chapter: how far a shoot bends towards light, how far a root bends towards
 * water and how far a tendril winds round a support, day by day.
 *
 * The book's practicals see a clear result after about 3 to 5 days, so the
 * model reaches its full bend after `FULL_DAYS` days. Angles are in degrees
 * from the vertical; a positive angle bends to the right.
 */

import { clamp } from '#lib/core/visuals/svg-math.js';

/** Days after which a tropism shows its full bend. */
export const FULL_DAYS = 4;

/** Largest bend of a shoot towards a side light, in degrees. */
export const MAX_SHOOT_BEND = 55;

/** Largest bend of a root towards a water source, in degrees. */
export const MAX_ROOT_BEND = 45;

/**
 * Where light reaches the shoot from: a side opening on the left or right, an
 * opening on top, or a pot that is turned often so every side gets light.
 * @typedef {'trai' | 'phai' | 'tren' | 'xoay'} LightFrom
 */

/** @typedef {'trai' | 'phai' | 'khong'} WaterSide */

/** @param {number} days */
function progress(days) {
  return clamp(days / FULL_DAYS, 0, 1);
}

/**
 * Bend of the shoot after `days` days with light from `light`.
 * @param {LightFrom} light @param {number} days
 */
export function shootBend(light, days) {
  const side = light === 'trai' ? -1 : light === 'phai' ? 1 : 0;
  return side * MAX_SHOOT_BEND * progress(days);
}

/**
 * Shoot length as a fraction of its full length: a young seedling keeps
 * growing during the practical.
 * @param {number} days
 */
export function shootLength(days) {
  return clamp(0.4 + 0.15 * days, 0.4, 1);
}

/**
 * Bend of the main root after `days` days with water seeping in from one side
 * (or watered evenly, `'khong'`).
 * @param {WaterSide} water @param {number} days
 */
export function rootBend(water, days) {
  const side = water === 'trai' ? -1 : water === 'phai' ? 1 : 0;
  return side * MAX_ROOT_BEND * progress(days);
}

/**
 * Turns a tendril has wound round a support after `days` days; none without a
 * support.
 * @param {boolean} support @param {number} days
 */
export function tendrilTurns(support, days) {
  return support ? 3 * progress(days) : 0;
}

/**
 * Where a curved organ of length `len`, starting at (x0, y0) and growing
 * straight up (`dir` −1) or down (`dir` 1), ends when it bends by `bend`
 * degrees along a circular arc. Returns its tip, the control point of the
 * matching quadratic Bézier and the SVG path.
 * @param {number} x0 @param {number} y0 @param {number} len
 * @param {number} bend @param {-1 | 1} dir
 */
export function bentOrgan(x0, y0, len, bend, dir) {
  const half = (Math.abs(bend) * Math.PI) / 360;
  const sign = Math.sign(bend);
  // Chord of an arc of length `len` turning by 2·half.
  const chord = half === 0 ? len : (len * Math.sin(half)) / half;
  const tip = { x: x0 + sign * chord * Math.sin(half), y: y0 + dir * chord * Math.cos(half) };
  // The tangents at both ends meet at chord / (2 cos half) from the base.
  const reach = chord / (2 * Math.cos(half));
  const control = { x: x0, y: y0 + dir * reach };
  const r = (/** @type {number} */ v) => Math.round(v * 10) / 10;
  const path = `M ${r(x0)} ${r(y0)} Q ${r(control.x)} ${r(control.y)} ${r(tip.x)} ${r(tip.y)}`;
  return { tip, control, path };
}
