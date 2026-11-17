/**
 * Reaction norms: the phenotypes one genotype gives across environments.
 * A quantitative trait (rice yield, illustrative figures for three
 * homozygous varieties under five farming conditions) and a qualitative one
 * (Primula sinensis flower colour at 20 °C and 35 °C).
 */

import { formatFixed } from '#lib/core/number-format.js';

/**
 * @typedef {{ id: string, label: string, values: number[] }} RiceVariety
 * @typedef {{ id: string, colors: string[] }} PrimulaGenotype
 */

/** Farming conditions, worst to best. */
export const CONDITIONS = ['Rất kém', 'Kém', 'Trung bình', 'Tốt', 'Rất tốt'];

/**
 * Yield in tấn/ha of each variety under each condition (illustrative).
 * @type {RiceVariety[]}
 */
export const RICE = [
  { id: 'A', label: 'Giống A', values: [4, 5.6, 7, 8.5, 9.5] },
  { id: 'B', label: 'Giống B', values: [5, 5.4, 5.8, 6.2, 6.5] },
  { id: 'C', label: 'Giống C', values: [3, 4.5, 6, 7, 7.5] },
];

/** Growing temperatures for the primula. */
export const TEMPERATURES = [20, 35];

/** @type {PrimulaGenotype[]} */
export const PRIMULA = [
  { id: 'AA', colors: ['đỏ', 'trắng'] },
  { id: 'aa', colors: ['trắng', 'trắng'] },
];

/** @param {string} id */
export function varietyOf(id) {
  const v = RICE.find((r) => r.id === id);
  if (!v) throw new Error(`unknown variety ${id}`);
  return v;
}

/** @param {number} t */
export function yieldText(t) {
  return `${formatFixed(t, 1)} tấn/ha`;
}

/**
 * The reaction norm of a variety: lowest and highest yield over all conditions.
 * @param {RiceVariety} v
 */
export function normRange(v) {
  return { min: Math.min(...v.values), max: Math.max(...v.values) };
}

/**
 * The variety with the highest yield under one condition.
 * @param {number} level index into CONDITIONS
 */
export function bestAt(level) {
  return RICE.reduce((best, v) => (v.values[level] > best.values[level] ? v : best));
}

/**
 * The lowest and highest yields seen so far in the conditions tried.
 * @param {RiceVariety} v
 * @param {Iterable<number>} levels condition indices tried
 * @returns {{ min: number, max: number } | null}
 */
export function seenRange(v, levels) {
  const seen = [...levels].map((l) => v.values[l]);
  return seen.length ? { min: Math.min(...seen), max: Math.max(...seen) } : null;
}

/**
 * The distinct flower colours a primula genotype has shown at the given temperatures.
 * @param {PrimulaGenotype} g
 * @param {Iterable<number>} temps indices into TEMPERATURES
 */
export function seenColors(g, temps) {
  return [...new Set([...temps].sort().map((t) => g.colors[t]))];
}
