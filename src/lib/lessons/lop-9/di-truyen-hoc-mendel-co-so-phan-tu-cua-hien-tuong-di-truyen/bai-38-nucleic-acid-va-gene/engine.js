/**
 * A short DNA double helix built from one strand: the complementary strand by
 * A–T, G–C pairing, the counts that follow from it (A = T, G = C), hydrogen
 * bonds, length and helical turns, and the points of a flat drawing of the
 * helix (10 base pairs per turn).
 */
import { clean, complement, hydrogenBonds } from '#lib/domain/codons.js';

export const DNA_BASES = /** @type {const} */ (['A', 'T', 'G', 'C']);

/** Length of one base pair along the helix axis, in nm (34 Å per 10 pairs). */
export const RISE_NM = 0.34;
export const PAIRS_PER_TURN = 10;
export const MAX_PAIRS = 20;

/** @type {Record<string, string>} */
export const BASE_COLORS = {
  A: '#dc2626',
  T: '#d97706',
  G: '#059669',
  C: '#0284c7',
  U: '#7c3aed',
};

/** @type {Record<string, string>} */
export const BASE_NAMES = {
  A: 'adenine',
  T: 'thymine',
  G: 'guanine',
  C: 'cytosine',
  U: 'uracil',
};

/**
 * Keeps only A, T, G, C (upper-cased) and at most `MAX_PAIRS` bases.
 * @param {string} text
 */
export function sanitize(text) {
  return clean(text)
    .replace(/[^ATGC]/g, '')
    .slice(0, MAX_PAIRS);
}

/**
 * The partner of one DNA base.
 * @param {string} base
 */
export function partner(base) {
  return complement(base);
}

/**
 * Whether two bases pair in DNA.
 * @param {string} a @param {string} b
 */
export function pairs(a, b) {
  return partner(a) === b;
}

/**
 * Counts of the double-stranded molecule built on `strand`.
 * @param {string} strand strand 1, A/T/G/C
 */
export function stats(strand) {
  const s = sanitize(strand);
  const count = (/** @type {string} */ b) => [...s].filter((x) => x === b).length;
  const a = count('A') + count('T');
  const g = count('G') + count('C');
  const n = 2 * s.length;
  return {
    pairs: s.length,
    n,
    A: a,
    T: a,
    G: g,
    C: g,
    hBonds: hydrogenBonds(s),
    lengthNm: s.length * RISE_NM,
    turns: s.length / PAIRS_PER_TURN,
    percentA: n ? (a / n) * 100 : 0,
    percentG: n ? (g / n) * 100 : 0,
  };
}

/**
 * Vertical offsets of the two backbones at position `t` (in base pairs) for
 * a helix of amplitude `amp`: strand 1 at -amp·cos, strand 2 at +amp·cos;
 * `front` tells which strand is nearer the viewer.
 * @param {number} t @param {number} amp
 */
export function helixAt(t, amp) {
  const theta = (2 * Math.PI * t) / PAIRS_PER_TURN;
  const c = Math.cos(theta);
  return { y1: -amp * c, y2: amp * c, front: Math.sin(theta) >= 0 ? 1 : 2 };
}

/**
 * A random strand of `n` bases.
 * @param {() => number} rand @param {number} n
 */
export function randomStrand(rand, n) {
  return Array.from({ length: n }, () => DNA_BASES[Math.floor(rand() * 4)]).join('');
}
