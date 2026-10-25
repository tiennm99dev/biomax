/**
 * Cell sizes and magnification for the zoom widget: which cells the eye can
 * make out at a given magnification, and which instrument gives it.
 */

import { formatNumber } from '#lib/units-engine/format.js';

/** @typedef {'rod' | 'round' | 'disc' | 'flat' | 'box' | 'egg'} CellShape */
/**
 * @typedef {{
 *   id: string;
 *   name: string;
 *   size: number;
 *   shape: CellShape;
 *   note: string;
 * }} CellSample
 */

/** Smallest detail the naked eye separates: about 0,1 mm = 100 µm. */
export const EYE_LIMIT_UM = 100;

/**
 * In this model the shape of a cell is seen clearly once its image is about
 * 2 mm = 2000 µm across; between 0,1 mm and 2 mm it is only a speck. With
 * this threshold a cheek cell needs the microscope (2,4 mm at 40×, 1,2 mm at
 * the strongest magnifying glass), as the lesson text says.
 */
export const CLEAR_UM = 2000;

/** Magnifications the slider offers (times). */
export const STOPS = [1, 3, 5, 10, 20, 40, 100, 400, 1000];

/**
 * Typical sizes (µm, the longest dimension) of the cells the lesson compares.
 * @type {CellSample[]}
 */
export const CELLS = [
  {
    id: 'vi-khuan',
    name: 'Vi khuẩn E. coli',
    size: 2,
    shape: 'rod',
    note: 'Hình que (hình trụ), dài khoảng 2 µm.',
  },
  {
    id: 'nam-men',
    name: 'Tế bào nấm men',
    size: 6,
    shape: 'round',
    note: 'Hình bầu dục, khoảng 6 µm × 5 µm.',
  },
  {
    id: 'hong-cau',
    name: 'Hồng cầu người',
    size: 7.5,
    shape: 'disc',
    note: 'Hình đĩa lõm hai mặt, đường kính khoảng 7–8 µm.',
  },
  {
    id: 'niem-mac',
    name: 'Tế bào niêm mạc miệng',
    size: 60,
    shape: 'flat',
    note: 'Dẹt, nhiều cạnh, rộng khoảng 50–60 µm.',
  },
  {
    id: 'vay-hanh',
    name: 'Tế bào biểu bì vảy hành',
    size: 300,
    shape: 'box',
    note: 'Hình gần chữ nhật, dài khoảng 200–400 µm.',
  },
  {
    id: 'trung-ca',
    name: 'Tế bào trứng cá',
    size: 1000,
    shape: 'egg',
    note: 'Hình cầu, đường kính khoảng 1 mm: mắt thường thấy được, kính lúp thấy rõ hình dạng.',
  },
];

/**
 * Size (µm) of the smallest thing visible at magnification `mag`.
 * @param {number} mag
 */
export function smallestVisible(mag) {
  return EYE_LIMIT_UM / mag;
}

/**
 * Whether a cell of `size` µm can be made out at magnification `mag`.
 * @param {number} size
 * @param {number} mag
 */
export function isVisible(size, mag) {
  return size * mag >= EYE_LIMIT_UM;
}

/**
 * What the eye makes of a cell of `size` µm at magnification `mag`:
 * nothing, a speck, or its clear shape.
 * @param {number} size
 * @param {number} mag
 * @returns {'hidden' | 'dot' | 'clear'}
 */
export function viewState(size, mag) {
  const image = size * mag;
  if (image >= CLEAR_UM) return 'clear';
  if (image >= EYE_LIMIT_UM) return 'dot';
  return 'hidden';
}

/**
 * Smallest slider stop at which the shape of a cell of `size` µm is clear,
 * or null when even the largest stop is not enough.
 * @param {number} size
 */
export function firstClearStop(size) {
  return STOPS.find((m) => viewState(size, m) === 'clear') ?? null;
}

/**
 * Instrument that gives magnification `mag`: the naked eye (1×), a
 * magnifying glass (3× to 20×) or a light microscope (40× and more), the
 * ranges the lesson text gives.
 * @param {number} mag
 */
export function toolFor(mag) {
  if (mag <= 1) return 'Mắt thường';
  if (mag <= 20) return 'Kính lúp';
  return 'Kính hiển vi quang học';
}

/**
 * Smallest slider stop at which a cell of `size` µm becomes visible, or
 * null when even the largest stop is not enough.
 * @param {number} size
 */
export function firstVisibleStop(size) {
  return STOPS.find((m) => isVisible(size, m)) ?? null;
}

/**
 * A length in µm written with the most readable unit (µm, mm or cm).
 * @param {number} um
 */
export function formatLength(um) {
  if (um < 1000) return `${formatNumber(um, 2)} µm`;
  if (um < 10000) return `${formatNumber(um / 1000, 2)} mm`;
  return `${formatNumber(um / 10000, 2)} cm`;
}

/**
 * How many cells of `size` µm fit side by side along `length` µm.
 * @param {number} length
 * @param {number} size
 */
export function countAlong(length, size) {
  return Math.floor(length / size + 1e-9);
}

/**
 * Position 0-1 of a size on a logarithmic axis from `min` to `max` µm.
 * @param {number} um
 * @param {number} [min]
 * @param {number} [max]
 */
export function logPosition(um, min = 1, max = 10000) {
  const v = Math.min(max, Math.max(min, um));
  return (Math.log10(v) - Math.log10(min)) / (Math.log10(max) - Math.log10(min));
}
