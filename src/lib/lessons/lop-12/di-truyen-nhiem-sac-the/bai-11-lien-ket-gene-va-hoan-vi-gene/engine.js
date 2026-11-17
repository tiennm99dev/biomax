/**
 * Linked genes: gametes of a double heterozygote with a given recombination
 * frequency, the frequency read back from a test cross, and genetic maps
 * built from pairwise recombination frequencies (1% = 1 cM).
 */
import { tidy } from '#lib/core/number-format.js';

/**
 * Gametes of a double heterozygote, as percentages in the order AB, Ab, aB,
 * ab. In the coupling phase (AB/ab) AB and ab are parental; in the repulsion
 * phase (Ab/aB) Ab and aB are.
 * @param {'cis' | 'trans'} phase
 * @param {number} f recombination frequency in % (0 to 50)
 */
export function gametesOf(phase, f) {
  const parental = (100 - f) / 2;
  const recombinant = f / 2;
  const cis = phase === 'cis';
  return [
    { gamete: 'AB', percent: cis ? parental : recombinant, recombinant: !cis },
    { gamete: 'Ab', percent: cis ? recombinant : parental, recombinant: cis },
    { gamete: 'aB', percent: cis ? recombinant : parental, recombinant: cis },
    { gamete: 'ab', percent: cis ? parental : recombinant, recombinant: !cis },
  ];
}

/**
 * Recombination frequency, in %, from the recombinant offspring of a test
 * cross.
 * @param {number} recombinant
 * @param {number} total
 */
export function frequencyFrom(recombinant, total) {
  return tidy((recombinant / total) * 100, 2);
}

/** Morgan's test cross of F₁ females: grey long, black vestigial, grey vestigial, black long. */
export const MORGAN = [
  { name: 'thân xám, cánh dài', percent: 41.5, recombinant: false },
  { name: 'thân đen, cánh cụt', percent: 41.5, recombinant: false },
  { name: 'thân xám, cánh cụt', percent: 8.5, recombinant: true },
  { name: 'thân đen, cánh dài', percent: 8.5, recombinant: true },
];

/**
 * @typedef {{
 *   id: string;
 *   genes: string[];
 *   pairs: Array<[string, string, number]>;
 *   span: number;
 *   start: number[];
 * }} MapPuzzle
 */

/** @type {MapPuzzle[]} */
export const PUZZLES = [
  {
    id: 'ba-gene',
    genes: ['A', 'B', 'C'],
    pairs: [
      ['A', 'B', 12],
      ['B', 'C', 8],
      ['A', 'C', 20],
    ],
    span: 30,
    start: [6, 26, 16],
  },
  {
    id: 'gene-giua',
    genes: ['D', 'E', 'F'],
    pairs: [
      ['D', 'E', 5],
      ['D', 'F', 15],
      ['E', 'F', 20],
    ],
    span: 30,
    start: [4, 14, 24],
  },
  {
    id: 'bon-gene',
    genes: ['P', 'Q', 'R', 'S'],
    pairs: [
      ['P', 'Q', 7],
      ['Q', 'R', 10],
      ['P', 'R', 17],
      ['R', 'S', 3],
      ['Q', 'S', 13],
      ['P', 'S', 20],
    ],
    span: 30,
    start: [25, 3, 10, 18],
  },
];

/**
 * Compares the distances on a drawn map with the recombination frequencies.
 * @param {Record<string, number>} at gene → position in cM
 * @param {Array<[string, string, number]>} pairs
 */
export function checkMap(at, pairs) {
  const rows = pairs.map(([a, b, want]) => {
    const got = Math.abs(at[a] - at[b]);
    return { a, b, want, got, ok: got === want };
  });
  return { rows, solved: rows.every((r) => r.ok) };
}

/**
 * Genes in their order along the chromosome.
 * @param {Record<string, number>} at
 */
export function orderOf(at) {
  return Object.keys(at).sort((x, y) => at[x] - at[y]);
}

/**
 * The gene lying between the other two, from three pairwise distances: the
 * pair with the largest distance are the outer genes.
 * @param {Array<[string, string, number]>} pairs exactly three pairs
 */
export function middleGene(pairs) {
  const far = [...pairs].sort((x, y) => y[2] - x[2])[0];
  const genes = new Set(pairs.flatMap(([a, b]) => [a, b]));
  return [...genes].find((g) => g !== far[0] && g !== far[1]) ?? '';
}
