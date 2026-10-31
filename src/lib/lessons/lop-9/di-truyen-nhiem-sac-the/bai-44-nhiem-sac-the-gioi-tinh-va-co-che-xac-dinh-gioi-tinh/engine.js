/**
 * Sex determination by the sex chromosomes: the gametes of each parent, one
 * random fertilization (which egg meets which sperm), and the running tally
 * of daughters and sons over many fertilizations, which tends to 1 : 1.
 */
import { fmt, formatFixed, formatNumber } from '#lib/core/number-format.js';

/** @typedef {'nguoi' | 'ga'} SystemId */
/** @typedef {'cai' | 'duc'} Sex */

/**
 * @typedef {{
 *   id: SystemId;
 *   label: string;
 *   female: [string, string];
 *   male: [string, string];
 *   names: Record<Sex, string>;
 *   parents: Record<Sex, string>;
 * }} SexSystem
 */

/** @type {SexSystem[]} */
export const SYSTEMS = [
  {
    id: 'nguoi',
    label: 'Người',
    female: ['X', 'X'],
    male: ['X', 'Y'],
    names: { cai: 'con gái', duc: 'con trai' },
    parents: { cai: 'mẹ', duc: 'bố' },
  },
  {
    id: 'ga',
    label: 'Gà',
    female: ['X', 'Y'],
    male: ['X', 'X'],
    names: { cai: 'gà mái', duc: 'gà trống' },
    parents: { cai: 'gà mái', duc: 'gà trống' },
  },
];

/** @param {string} id */
export function systemById(id) {
  return SYSTEMS.find((s) => s.id === id) ?? SYSTEMS[0];
}

/**
 * The kinds of gametes a parent makes, with their shares: a parent with two
 * equal sex chromosomes makes one kind, a parent with X and Y two kinds 1 : 1.
 * @param {[string, string]} pair
 * @returns {Array<{ chromosome: string, share: number }>}
 */
export function gameteKinds(pair) {
  return pair[0] === pair[1]
    ? [{ chromosome: pair[0], share: 1 }]
    : pair.map((chromosome) => ({ chromosome, share: 0.5 }));
}

/**
 * The sex of a zygote from its sex chromosomes.
 * @param {SexSystem} system
 * @param {string} egg
 * @param {string} sperm
 * @returns {Sex}
 */
export function sexOf(system, egg, sperm) {
  const pair = [egg, sperm].sort().join('');
  return pair === [...system.female].sort().join('') ? 'cai' : 'duc';
}

/**
 * One fertilization: a random egg from the mother meets a random sperm from
 * the father.
 * @param {SexSystem} system
 * @param {() => number} rand
 */
export function fertilize(system, rand) {
  const egg = system.female[rand() < 0.5 ? 0 : 1];
  const sperm = system.male[rand() < 0.5 ? 0 : 1];
  const zygote = [egg, sperm].sort().join('');
  return { egg, sperm, zygote, sex: sexOf(system, egg, sperm) };
}

/** @typedef {{ cai: number, duc: number }} Tally */

/**
 * Adds `times` fertilizations to a tally.
 * @param {SexSystem} system
 * @param {Tally} tally
 * @param {number} times
 * @param {() => number} rand
 */
export function run(system, tally, times, rand) {
  const next = { ...tally };
  /** @type {ReturnType<typeof fertilize> | null} */
  let last = null;
  for (let i = 0; i < times; i++) {
    last = fertilize(system, rand);
    next[last.sex] += 1;
  }
  return { tally: next, last };
}

/**
 * The share of males, from 0 to 1 (0 when empty).
 * @param {Tally} t
 */
export function maleShare(t) {
  const total = t.cai + t.duc;
  return total ? t.duc / total : 0;
}

/**
 * The ratio males : females written the book's way, as "1,04 : 1".
 * @param {Tally} t
 */
export function ratioText(t) {
  if (!t.cai) return t.duc ? 'chưa có con cái' : '—';
  return `${formatFixed(t.duc / t.cai, 2)} : 1`;
}

/**
 * What the tally shows so far.
 * @param {SexSystem} system
 * @param {Tally} t
 */
export function tallyText(system, t) {
  const total = t.cai + t.duc;
  if (!total) return 'Chưa có lần thụ tinh nào.';
  const pct = formatNumber(maleShare(t) * 100, 1);
  const gap = Math.abs(maleShare(t) - 0.5);
  const close =
    total < 50
      ? 'Số lần còn ít nên tỉ lệ có thể lệch xa 1 : 1.'
      : gap <= 0.03
        ? 'Tỉ lệ đực : cái đã rất gần 1 : 1.'
        : 'Thụ tinh thêm nhiều lần nữa để tỉ lệ tiến gần 1 : 1.';
  return `Sau ${fmt(total)} lần thụ tinh: ${fmt(t.duc)} ${system.names.duc} (${pct}%), ${fmt(t.cai)} ${system.names.cai}. ${close}`;
}
