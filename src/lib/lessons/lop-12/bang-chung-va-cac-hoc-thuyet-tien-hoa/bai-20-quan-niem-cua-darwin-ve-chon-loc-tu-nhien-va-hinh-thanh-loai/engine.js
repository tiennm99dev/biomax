/**
 * Darwin's natural selection on a finch population (chim sẻ Darwin). Beak
 * depth varies from bird to bird (biến dị cá thể) and is inherited; the
 * population is a share of birds in each 0,5 mm class. Each generation:
 *
 * 1. the struggle for existence (đấu tranh sinh tồn): a bird survives with a
 *    chance that is highest when its beak suits the seeds on the island;
 * 2. the survivors breed; offspring resemble their parents but vary a little
 *    (one class up or down), so variation never runs out.
 *
 * Without variation (every bird the same beak), selection has nothing to
 * choose from and the population does not change.
 */

import { formatNumber, tidy } from '#lib/core/number-format.js';

/** Beak-depth classes in millimetres, 6 to 14 by 0,5. */
export const DEPTHS = Array.from({ length: 17 }, (_, i) => 6 + i / 2);

/** @typedef {'nho' | 'vua' | 'to'} SeedKind */

/** Seeds on the island and the beak depth that cracks them best. */
export const SEEDS = /** @type {const} */ ({
  nho: { label: 'Hạt nhỏ, mềm', best: 7.5 },
  vua: { label: 'Hạt vừa', best: 10 },
  to: { label: 'Hạt to, cứng', best: 12.5 },
});

/** Highest chance that a bird lives to breed, for a perfectly suited beak. */
export const TOP_SURVIVAL = 0.5;
/** How fast survival falls as a beak differs from the best one, in mm. */
const WIDTH = 2;

/**
 * Survival chance of a bird with beak depth `depth` on seeds `seed`.
 * @param {number} depth
 * @param {SeedKind} seed
 */
export function survival(depth, seed) {
  const d = depth - SEEDS[seed].best;
  return TOP_SURVIVAL * Math.exp(-(d * d) / (2 * WIDTH * WIDTH));
}

/**
 * The starting population: a bell-shaped spread around 9 mm, or every bird
 * with the same 9 mm beak.
 * @param {boolean} varied
 * @returns {number[]} shares per class, adding up to 1
 */
export function startPopulation(varied) {
  if (!varied) return DEPTHS.map((d) => (d === 9 ? 1 : 0));
  const raw = DEPTHS.map((d) => Math.exp(-((d - 9) ** 2) / 2));
  return normalise(raw);
}

/** @param {number[]} values */
function normalise(values) {
  const total = values.reduce((a, b) => a + b, 0);
  return values.map((v) => tidy(v / total, 12));
}

/**
 * One generation. Returns the share of birds that survived and the
 * offspring population.
 * @param {number[]} pop
 * @param {SeedKind} seed
 * @param {boolean} varied whether offspring vary from their parents
 */
export function nextGeneration(pop, seed, varied) {
  const survivors = pop.map((f, i) => f * survival(DEPTHS[i], seed));
  const surviving = survivors.reduce((a, b) => a + b, 0);
  let young = normalise(survivors);
  if (varied) {
    const n = young.length;
    young = normalise(
      young.map((_, i) => {
        const left = young[Math.max(0, i - 1)];
        const right = young[Math.min(n - 1, i + 1)];
        return 0.2 * left + 0.6 * young[i] + 0.2 * right;
      }),
    );
  }
  return { surviving: tidy(surviving, 6), next: young };
}

/**
 * Mean beak depth of a population, in mm.
 * @param {number[]} pop
 */
export function meanDepth(pop) {
  return tidy(
    pop.reduce((sum, f, i) => sum + f * DEPTHS[i], 0),
    6,
  );
}

/**
 * Generations from the start, with the survivors of each step.
 * @param {SeedKind[]} seeds the seeds on the island in each generation
 * @param {boolean} varied
 */
export function history(seeds, varied) {
  const pops = [startPopulation(varied)];
  /** @type {number[]} */
  const surviving = [];
  for (const s of seeds) {
    const step = nextGeneration(pops[pops.length - 1], s, varied);
    pops.push(step.next);
    surviving.push(step.surviving);
  }
  return { pops, surviving };
}

/**
 * What the widget says about the latest generation.
 * @param {number[][]} pops
 * @param {number[]} surviving
 * @param {SeedKind} seed
 * @param {boolean} varied
 */
export function selectionNote(pops, surviving, seed, varied) {
  const n = pops.length - 1;
  const mean = meanDepth(pops[n]);
  const best = SEEDS[seed].best;
  const meanText = `độ dày mỏ trung bình ${formatNumber(mean, 2)} mm`;
  if (n === 0)
    return varied
      ? `Thế hệ 0: ${meanText}; các con chim có mỏ dày mỏng khác nhau (biến dị cá thể). Chọn loại hạt rồi bấm "Thế hệ tiếp".`
      : `Thế hệ 0: mọi con chim đều có mỏ dày 9 mm, không có biến dị. Bấm "Thế hệ tiếp" để xem chọn lọc tự nhiên có làm thay đổi quần thể không.`;
  const lived = `chỉ khoảng ${formatNumber(surviving[n - 1] * 100, 0)}% số chim non sống sót đến tuổi sinh sản (đấu tranh sinh tồn)`;
  if (!varied)
    return `Thế hệ ${n}: ${meanText}, không đổi dù ${lived}. Không có biến dị cá thể thì chọn lọc tự nhiên không có gì để chọn.`;
  const gap = Math.abs(mean - best);
  if (gap < 0.3)
    return `Thế hệ ${n}: ${meanText}, đã gần độ dày ${formatNumber(best)} mm phù hợp nhất với loại hạt này. Quần thể đã thích nghi; ${lived}, chủ yếu là những con có mỏ lệch xa mức phù hợp bị đào thải.`;
  return `Thế hệ ${n}: ${meanText}; ${lived}. Những con có mỏ gần ${formatNumber(best)} mm sống sót và sinh sản nhiều hơn nên tỉ lệ của chúng tăng dần qua các thế hệ.`;
}
