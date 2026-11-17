/**
 * Correns' reciprocal crosses on the four-o'clock plant (Mirabilis jalapa):
 * leaf colour carried by chloroplast genes follows the mother, while a
 * nuclear gene (green A dominant over white a) gives the same F1 both ways.
 */

import { rng } from '#lib/core/drill.js';

/** @typedef {'xanh' | 'trang' | 'kham'} Leaf */
/** @typedef {'ngoai-nhan' | 'trong-nhan'} Model */
/** @typedef {'me' | 'bo' | 'giong-nhau'} Verdict */

/** @type {Array<{ id: Leaf, label: string, short: string }>} */
export const LEAVES = [
  { id: 'xanh', label: 'Cành lá xanh', short: 'xanh' },
  { id: 'trang', label: 'Cành lá trắng', short: 'trắng' },
  { id: 'kham', label: 'Cành lá khảm', short: 'khảm' },
];

/** @type {Array<{ id: Verdict, label: string }>} */
export const VERDICTS = [
  { id: 'me', label: 'Khác nhau: kiểu hình đời con theo cây mẹ' },
  { id: 'bo', label: 'Khác nhau: kiểu hình đời con theo cây bố' },
  { id: 'giong-nhau', label: 'Giống nhau ở lai thuận và lai nghịch' },
];

/** @param {Leaf} id */
export function leafLabel(id) {
  return LEAVES.find((l) => l.id === id)?.short ?? id;
}

/** Plastids an egg cell carries in the picture. */
export const EGG_PLASTIDS = 8;

/**
 * The chloroplasts in an egg cell from a flower on a branch of the given
 * colour: all green, all white (no chlorophyll), or a mix from a mosaic
 * branch. Pollen gives the zygote its nucleus only, no plastids.
 * @param {Leaf} leaf
 * @returns {Array<'g' | 'w'>}
 */
export function eggPlastids(leaf) {
  if (leaf === 'xanh') return Array(EGG_PLASTIDS).fill('g');
  if (leaf === 'trang') return Array(EGG_PLASTIDS).fill('w');
  return Array.from({ length: EGG_PLASTIDS }, (_, i) => (i % 2 === 0 ? 'g' : 'w'));
}

/**
 * One seedling from a mosaic mother: the egg gets 4 plastids drawn at random
 * from a mixed cell, then each of a few divisions doubles them and a daughter
 * cell keeps 4 of the 8 at random. Plastids that end up all green or all
 * white give a green or white plant; a mix gives a mosaic plant.
 * @param {() => number} rand
 * @returns {Leaf}
 */
export function mosaicSeedling(rand) {
  let cell = Array.from({ length: 4 }, () => rand() < 0.5);
  for (let round = 0; round < 3; round++) {
    const pool = cell.flatMap((p) => [p, p]);
    const kept = [];
    for (let k = 0; k < 4; k++) {
      const at = Math.floor(rand() * pool.length);
      kept.push(pool[at]);
      pool.splice(at, 1);
    }
    cell = kept;
  }
  const green = cell.filter(Boolean).length;
  return green === 4 ? 'xanh' : green === 0 ? 'trang' : 'kham';
}

/**
 * The seedlings of a cross ♀ mother × ♂ father.
 * @param {Model} model
 * @param {Leaf} mother
 * @param {Leaf} father
 * @param {number} seed
 * @param {number} [count]
 * @returns {Leaf[]}
 */
export function offspring(model, mother, father, seed, count = 12) {
  if (model === 'trong-nhan') {
    // Green AA or white aa: the F1 is Aa whichever way round, unless both are white.
    const leaf = mother === 'xanh' || father === 'xanh' ? 'xanh' : 'trang';
    return Array(count).fill(leaf);
  }
  if (mother !== 'kham') return Array(count).fill(mother);
  const rand = rng(seed);
  return Array.from({ length: count }, () => mosaicSeedling(rand));
}

/**
 * How many seedlings of each leaf colour, in the order of LEAVES, leaving out
 * the colours that do not occur.
 * @param {Leaf[]} plants
 */
export function tally(plants) {
  return LEAVES.map((l) => ({
    id: l.id,
    short: l.short,
    n: plants.filter((p) => p === l.id).length,
  })).filter((t) => t.n > 0);
}

/**
 * What the reciprocal pair ♀A × ♂B and ♀B × ♂A shows.
 * @param {Model} model
 * @param {Leaf} a
 * @param {Leaf} b
 * @returns {Verdict | null} null when a and b are the same, so there is nothing to compare
 */
export function verdictOf(model, a, b) {
  if (a === b) return null;
  return model === 'ngoai-nhan' ? 'me' : 'giong-nhau';
}
