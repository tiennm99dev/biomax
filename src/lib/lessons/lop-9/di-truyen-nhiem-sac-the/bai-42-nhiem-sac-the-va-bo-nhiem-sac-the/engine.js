/**
 * Karyotype pairing: the chromosome sets of a human and a fruit fly drawn as
 * metaphase chromosomes (length, centromere position and a band pattern), a
 * seeded shuffle of the set, and the checks for whether two chromosomes form
 * a homologous pair. Lengths and centromere positions are simplified from
 * real karyotypes; homologous chromosomes share every feature.
 */
import { rng, shuffle } from '#lib/core/drill.js';

/**
 * @typedef {{ pair: string, length: number, arm: number }} ChromosomeKind
 * `length` is relative to the longest chromosome of the species, `arm` the
 * short arm as a share of the length (0,5 means a central centromere).
 */

/** Human chromosomes (simplified from their lengths in Mb and centromere index). */
/** @type {Array<[string, number, number]>} */
const HUMAN_DATA = [
  ['1', 248, 0.49],
  ['2', 242, 0.39],
  ['3', 198, 0.47],
  ['4', 190, 0.27],
  ['5', 181, 0.27],
  ['6', 171, 0.36],
  ['7', 159, 0.38],
  ['8', 145, 0.31],
  ['9', 138, 0.35],
  ['10', 134, 0.3],
  ['11', 135, 0.39],
  ['12', 133, 0.27],
  ['13', 114, 0.16],
  ['14', 107, 0.16],
  ['15', 102, 0.17],
  ['16', 90, 0.43],
  ['17', 83, 0.3],
  ['18', 80, 0.24],
  ['19', 59, 0.46],
  ['20', 64, 0.44],
  ['21', 47, 0.2],
  ['22', 51, 0.21],
  ['X', 156, 0.39],
  ['Y', 57, 0.2],
];

/** @type {ChromosomeKind[]} */
const HUMAN = HUMAN_DATA.map(([pair, mb, arm]) => ({ pair, length: mb / 248, arm }));

/** Fruit fly (Drosophila melanogaster) chromosomes, 2n = 8. */
/** @type {ChromosomeKind[]} */
const FLY = [
  { pair: 'X', length: 0.8, arm: 0.06 },
  { pair: '2', length: 1, arm: 0.48 },
  { pair: '3', length: 0.95, arm: 0.5 },
  { pair: '4', length: 0.12, arm: 0.5 },
  { pair: 'Y', length: 0.72, arm: 0.3 },
];

/**
 * @typedef {{
 *   id: string;
 *   label: string;
 *   species: string;
 *   kinds: ChromosomeKind[];
 *   autosomes: string[];
 *   sex: [string, string];
 * }} ChromosomeSet
 */

const HUMAN_AUTOSOMES = Array.from({ length: 22 }, (_, i) => String(i + 1));

/** @type {ChromosomeSet[]} */
export const SETS = [
  {
    id: 'ruoi-cai',
    label: 'Ruồi giấm cái',
    species: 'ruồi giấm',
    kinds: FLY,
    autosomes: ['2', '3', '4'],
    sex: ['X', 'X'],
  },
  {
    id: 'ruoi-duc',
    label: 'Ruồi giấm đực',
    species: 'ruồi giấm',
    kinds: FLY,
    autosomes: ['2', '3', '4'],
    sex: ['X', 'Y'],
  },
  {
    id: 'nu',
    label: 'Người nữ',
    species: 'người',
    kinds: HUMAN,
    autosomes: HUMAN_AUTOSOMES,
    sex: ['X', 'X'],
  },
  {
    id: 'nam',
    label: 'Người nam',
    species: 'người',
    kinds: HUMAN,
    autosomes: HUMAN_AUTOSOMES,
    sex: ['X', 'Y'],
  },
];

/** @param {string} id */
export function setById(id) {
  return SETS.find((s) => s.id === id) ?? SETS[0];
}

/**
 * @typedef {{
 *   id: string;
 *   pair: string;
 *   slot: string;
 *   length: number;
 *   arm: number;
 *   bands: Array<[number, number]>;
 * }} Chromosome
 * `bands` are dark bands as [start, end] shares of the length.
 */

/** The karyotype slot of a chromosome: its number, or 'XY' for the sex pair. @param {string} pair */
export function slotOf(pair) {
  return pair === 'X' || pair === 'Y' ? 'XY' : pair;
}

/** A small stable hash of a label, used to seed its band pattern. @param {string} s */
function hash(s) {
  let h = 2166136261;
  for (const ch of s) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
  return h >>> 0;
}

/**
 * The dark bands of one chromosome kind: the same for both homologues.
 * @param {string} species
 * @param {string} pair
 * @returns {Array<[number, number]>}
 */
export function bandsOf(species, pair) {
  const rand = rng(hash(`${species}:${pair}`));
  const count = 2 + Math.floor(rand() * 3);
  /** @type {Array<[number, number]>} */
  const out = [];
  for (let i = 0; i < count; i++) {
    const lo = (i + 0.15) / count;
    const start = lo + rand() * (0.55 / count);
    out.push([start, start + (0.2 + rand() * 0.2) / count]);
  }
  return out;
}

/**
 * Every chromosome of a set, in karyotype order (pairs 1, 2, … then the sex
 * pair).
 * @param {string} setId
 * @returns {Chromosome[]}
 */
export function chromosomesOf(setId) {
  const set = setById(setId);
  const labels = [...set.autosomes.flatMap((p) => [p, p]), ...set.sex];
  /** @type {Record<string, number>} */
  const seen = {};
  return labels.map((pair) => {
    const kind = set.kinds.find((k) => k.pair === pair);
    if (!kind) throw new Error(`no chromosome ${pair} in ${set.id}`);
    seen[pair] = (seen[pair] ?? 0) + 1;
    return {
      id: `${pair}-${seen[pair]}`,
      pair,
      slot: slotOf(pair),
      length: kind.length,
      arm: kind.arm,
      bands: bandsOf(set.species, pair),
    };
  });
}

/**
 * The set shuffled the same way for every visitor with the same seed.
 * @param {string} setId
 * @param {number} seed
 */
export function shuffledSet(setId, seed) {
  return shuffle(rng(seed), chromosomesOf(setId));
}

/** Karyotype slots of a set, in order. @param {string} setId */
export function slotsOf(setId) {
  return [...setById(setId).autosomes, 'XY'];
}

/** Numbers of a set: 2n, n, autosome pairs. @param {string} setId */
export function setSummary(setId) {
  const set = setById(setId);
  const diploid = set.autosomes.length * 2 + 2;
  return { diploid, haploid: diploid / 2, autosomePairs: set.autosomes.length };
}

/** @typedef {'giua' | 'lech' | 'mut'} CentromereType */

/** @type {Record<CentromereType, string>} */
export const CENTROMERE_LABEL = { giua: 'tâm giữa', lech: 'tâm lệch', mut: 'tâm mút' };

/** Centromere type from the short arm's share of the length. @param {number} arm */
export function centromereType(arm) {
  if (arm >= 0.42) return /** @type {CentromereType} */ ('giua');
  if (arm <= 0.22) return /** @type {CentromereType} */ ('mut');
  return /** @type {CentromereType} */ ('lech');
}

/**
 * Whether two different chromosomes go together in one karyotype slot: a
 * homologous pair, or X with Y as the sex pair of a male.
 * @param {Chromosome} a
 * @param {Chromosome} b
 */
export function isPair(a, b) {
  return a.id !== b.id && a.slot === b.slot;
}

/**
 * Why two chromosomes are not a pair, from what can be seen on them.
 * @param {Chromosome} a
 * @param {Chromosome} b
 */
export function mismatchReason(a, b) {
  /** @type {string[]} */
  const diffs = [];
  if (Math.abs(a.length - b.length) > 0.035) diffs.push('kích thước');
  if (centromereType(a.arm) !== centromereType(b.arm) || Math.abs(a.arm - b.arm) > 0.04) {
    diffs.push('vị trí tâm động');
  }
  if (!diffs.length) diffs.push('cách phân bố các băng (trình tự phân bố gene)');
  return `Hai NST này khác nhau về ${diffs.join(' và ')}, nên không phải một cặp tương đồng.`;
}

/**
 * The note shown once a slot is filled.
 * @param {string} slot
 * @param {string} setId
 */
export function pairNote(slot, setId) {
  const set = setById(setId);
  if (slot !== 'XY') return `Cặp số ${slot}: một chiếc từ bố, một chiếc từ mẹ.`;
  return set.sex[1] === 'Y'
    ? 'Cặp NST giới tính XY: X và Y khác nhau về hình dạng, kích thước; X từ mẹ, Y từ bố.'
    : 'Cặp NST giới tính XX: một chiếc X từ bố, một chiếc X từ mẹ.';
}
