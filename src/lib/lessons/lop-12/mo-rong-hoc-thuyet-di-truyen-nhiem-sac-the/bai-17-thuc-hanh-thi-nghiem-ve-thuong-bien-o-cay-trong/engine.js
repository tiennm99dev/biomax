/**
 * A virtual version of the practical: water spinach (rau muống) cuttings
 * planted in a control plot and a test plot that differ in one factor, then
 * measured. Figures are illustrative, drawn from seeded random numbers.
 */

import { rng } from '#lib/core/drill.js';
import { readNumber } from '#lib/core/decimal.js';
import { tidy } from '#lib/core/number-format.js';

/**
 * @typedef {{
 *   id: string;
 *   label: string;
 *   control: string;
 *   test: string;
 *   height: number;
 *   mass: number;
 * }} Factor
 * `height` and `mass` scale the test plot's growth against the control plot.
 */

/** @type {Factor[]} */
export const FACTORS = [
  {
    id: 'nuoc',
    label: 'Chế độ tưới nước',
    control: 'tưới mỗi ngày một lần',
    test: 'tưới mỗi tuần một lần',
    height: 0.6,
    mass: 0.5,
  },
  {
    id: 'phan',
    label: 'Phân bón',
    control: 'bón thúc phân NPK',
    test: 'không bón thúc',
    height: 0.75,
    mass: 0.65,
  },
  {
    id: 'anh-sang',
    label: 'Ánh sáng',
    control: 'đủ ánh sáng',
    test: 'che bớt khoảng 70% ánh sáng',
    height: 1.15,
    mass: 0.7,
  },
];

/** Plants measured in each plot. */
export const PLANTS = 10;

/** Height of a cutting above the soil when planted, in cm. */
const START = 10;
/** Control growth per week, in cm. */
const GROWTH = 9;

/** @param {string} id */
export function factorOf(id) {
  const f = FACTORS.find((x) => x.id === id);
  if (!f) throw new Error(`unknown factor ${id}`);
  return f;
}

/**
 * @typedef {{ heights: number[], mean: number, mass: number }} Plot
 */

/**
 * Measures both plots after a number of weeks.
 * @param {Factor} factor
 * @param {'cung-khom' | 'khac-giong'} source cuttings from one clump, or the
 *   test plot planted with another, more vigorous variety
 * @param {number} weeks 1 to 4
 * @param {number} seed
 * @returns {{ control: Plot, test: Plot, heightRatio: number, massRatio: number }}
 */
export function measure(factor, source, weeks, seed) {
  const rand = rng(seed * 31 + weeks);
  const variety = source === 'khac-giong' ? 1.3 : 1;
  /**
   * @param {number} heightScale
   * @param {number} massScale
   * @returns {Plot}
   */
  const plot = (heightScale, massScale) => {
    const target = START + GROWTH * weeks * heightScale;
    const heights = Array.from({ length: PLANTS }, () =>
      Math.max(START, Math.round(target + (rand() * 6 - 3))),
    );
    const mean = tidy(heights.reduce((s, h) => s + h, 0) / PLANTS, 1);
    const mass = tidy(0.8 * weeks * massScale * (0.95 + rand() * 0.1), 1);
    return { heights, mean, mass };
  };
  const control = plot(1, 1);
  const test = plot(factor.height * variety, factor.mass * variety);
  return {
    control,
    test,
    heightRatio: percentOf(test.mean, control.mean),
    massRatio: percentOf(test.mass, control.mass),
  };
}

/**
 * The test value as a percentage of the control value, to one decimal.
 * @param {number} test
 * @param {number} control
 */
export function percentOf(test, control) {
  return tidy(Math.round((test / control) * 1000) / 10, 1);
}

/**
 * Reads a percentage typed by the learner ("65,4", "65.4 %"); null when it is
 * not a number.
 * @param {string} text
 */
export function readPercent(text) {
  return readNumber(text.replace(/%\s*$/, '').trim());
}

/**
 * Whether a typed percentage matches the expected one to within half a unit.
 * @param {string} text
 * @param {number} expected
 */
export function percentRight(text, expected) {
  const v = readPercent(text);
  return v !== null && Math.abs(v - expected) <= 0.5;
}
