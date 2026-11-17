/**
 * Two field methods for estimating the size of a population.
 *
 * Quadrats (phương pháp ô tiêu chuẩn), for plants and animals that hardly
 * move: count the individuals in a few squares of area a placed at random,
 * then N ≈ (A / a) · n̄, where A is the area surveyed and n̄ the mean count
 * per square.
 *
 * Mark and recapture (đánh dấu – bắt lại), for animals that move about: catch
 * M individuals, mark and release them; once they have mixed back, catch C
 * individuals, R of which carry a mark. Assuming the marked share of the
 * second catch equals their share of the population, R / C = M / N, so
 * N ≈ M · C / R (the Lincoln–Petersen estimate).
 */

import { int, rng } from '#lib/core/drill.js';

/** @typedef {{ x: number, y: number }} Spot positions in 0..1 */

/**
 * `k` distinct indices from 0..count−1, drawn without replacement.
 * @param {() => number} rand
 * @param {number} count
 * @param {number} k
 */
export function sampleIndices(rand, count, k) {
  const idx = Array.from({ length: count }, (_, i) => i);
  const take = Math.min(k, count);
  for (let i = 0; i < take; i++) {
    const j = i + Math.floor(rand() * (count - i));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return idx.slice(0, take);
}

/**
 * Random positions for `n` animals in a pond, away from the edge.
 * @param {() => number} rand
 * @param {number} n
 * @returns {Spot[]}
 */
export function scatter(rand, n) {
  return Array.from({ length: n }, () => ({ x: 0.04 + 0.92 * rand(), y: 0.06 + 0.88 * rand() }));
}

/**
 * A pond population of 150 to 350 fish for the mark-recapture game.
 * @param {number} seed
 */
export function makePond(seed) {
  const rand = rng(seed);
  const size = int(rand, 150, 350);
  return { rand, size, spots: scatter(rand, size) };
}

/**
 * Lincoln–Petersen estimate M·C/R, or null when no marked animal was caught.
 * @param {number} m marked and released in the first catch
 * @param {number} c caught in the second catch
 * @param {number} r marked among the second catch
 */
export function markRecapture(m, c, r) {
  return r > 0 ? (m * c) / r : null;
}

/**
 * Relative error of an estimate, in percent.
 * @param {number} estimate
 * @param {number} actual
 */
export function errorPercent(estimate, actual) {
  return (Math.abs(estimate - actual) / actual) * 100;
}

/**
 * First catch: M animals picked at random and marked.
 * @param {() => number} rand
 * @param {number} size
 * @param {number} m
 */
export function markFirst(rand, size, m) {
  return new Set(sampleIndices(rand, size, m));
}

/**
 * Second catch, after the marked animals have mixed back: C animals picked
 * at random, R of them marked, and the estimate M·C/R.
 * @param {() => number} rand
 * @param {number} size
 * @param {Set<number>} marked
 * @param {number} c
 */
export function recapture(rand, size, marked, c) {
  const caught = sampleIndices(rand, size, c);
  const r = caught.filter((i) => marked.has(i)).length;
  return { caught, r, estimate: markRecapture(marked.size, caught.length, r) };
}

/**
 * One full mark-recapture trial on a pond of `size` animals.
 * @param {() => number} rand
 * @param {number} size
 * @param {number} m
 * @param {number} c
 */
export function trial(rand, size, m, c) {
  const marked = markFirst(rand, size, m);
  return { marked, ...recapture(rand, size, marked, c) };
}

/** Side of the surveyed field in metres; the field is split into 1 m squares. */
export const FIELD_SIDE = 10;
export const FIELD_AREA = FIELD_SIDE * FIELD_SIDE;
export const QUADRAT_AREA = 1;

/**
 * A field of plants growing in a few clumps plus scattered ones, with each
 * plant's position in metres and the count in every 1 m square (row-major).
 * @param {number} seed
 */
export function makeField(seed) {
  const rand = rng(seed);
  /** @type {Spot[]} */
  const plants = [];
  const clumps = int(rand, 3, 5);
  for (let k = 0; k < clumps; k++) {
    const cx = 1.5 + 7 * rand();
    const cy = 1.5 + 7 * rand();
    const count = int(rand, 30, 60);
    for (let i = 0; i < count; i++) {
      const angle = 2 * Math.PI * rand();
      const dist = 1.8 * Math.sqrt(rand());
      const x = cx + dist * Math.cos(angle);
      const y = cy + dist * Math.sin(angle);
      if (x > 0 && x < FIELD_SIDE && y > 0 && y < FIELD_SIDE) plants.push({ x, y });
    }
  }
  const loose = int(rand, 40, 80);
  for (let i = 0; i < loose; i++) plants.push({ x: FIELD_SIDE * rand(), y: FIELD_SIDE * rand() });
  const counts = Array.from({ length: FIELD_AREA }, () => 0);
  for (const p of plants) counts[Math.floor(p.y) * FIELD_SIDE + Math.floor(p.x)] += 1;
  return { rand, plants, counts };
}

/**
 * The quadrat estimate from the squares sampled: mean count n̄,
 * N = (A / a) · n̄ and density N / A per m². Null with no square yet.
 * @param {number[]} counts
 * @param {number[]} chosen indices of the sampled squares
 */
export function quadratEstimate(counts, chosen) {
  if (chosen.length === 0) return null;
  const mean = chosen.reduce((s, i) => s + counts[i], 0) / chosen.length;
  const size = (FIELD_AREA / QUADRAT_AREA) * mean;
  return { mean, size, density: size / FIELD_AREA };
}
