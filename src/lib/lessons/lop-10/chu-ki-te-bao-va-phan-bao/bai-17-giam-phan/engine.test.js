import { describe, expect, it } from 'vitest';
import { rng } from '#lib/core/drill.js';
import {
  COMPARE_BINS,
  COMPARE_CARDS,
  HUMAN_N,
  allCombinations,
  combinationIndex,
  combinations,
  randomGamete,
} from './engine.js';

describe('counting gametes', () => {
  it('doubles the combinations with every pair of chromosomes', () => {
    expect([1, 2, 3, 4].map(combinations)).toEqual([2, 4, 8, 16]);
    expect(combinations(HUMAN_N)).toBe(8388608);
  });

  it('lists every combination exactly once, at its own index', () => {
    const list = allCombinations(4);
    expect(list).toHaveLength(16);
    expect(list.map(combinationIndex)).toEqual(list.map((_, i) => i));
  });

  it('draws gametes that reach every combination', () => {
    const rand = rng(7);
    const seen = new Set();
    for (let i = 0; i < 200; i++) seen.add(combinationIndex(randomGamete(3, rand)));
    expect(seen.size).toBe(8);
  });
});

describe('the comparison cards', () => {
  it('use only the listed bins and fill every one of them', () => {
    const bins = COMPARE_BINS.map((b) => b.id);
    expect(new Set(COMPARE_CARDS.map((c) => c.bin))).toEqual(new Set(bins));
  });
});
