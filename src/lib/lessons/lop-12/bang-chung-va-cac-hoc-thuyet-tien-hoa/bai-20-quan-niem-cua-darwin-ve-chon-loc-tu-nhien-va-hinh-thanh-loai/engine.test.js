import { describe, expect, it } from 'vitest';
import {
  DEPTHS,
  SEEDS,
  history,
  meanDepth,
  nextGeneration,
  selectionNote,
  startPopulation,
  survival,
} from './engine.js';

/** @param {number[]} pop */
const total = (pop) => pop.reduce((a, b) => a + b, 0);

describe('the finch population', () => {
  it('starts as a spread around 9 mm or as identical birds', () => {
    const varied = startPopulation(true);
    expect(Math.abs(total(varied) - 1)).toBeLessThan(1e-9);
    expect(meanDepth(varied)).toBeCloseTo(9, 2);
    expect(startPopulation(false)[DEPTHS.indexOf(9)]).toBe(1);
  });

  it('gives the best survival to the beak that suits the seeds', () => {
    const bad = Object.entries(SEEDS).filter(
      ([id, s]) =>
        survival(s.best, /** @type {'nho' | 'vua' | 'to'} */ (id)) <=
        survival(s.best + 1, /** @type {'nho' | 'vua' | 'to'} */ (id)),
    );
    expect(bad).toEqual([]);
  });
});

describe('natural selection', () => {
  it('moves the mean beak towards the seeds, step by step', () => {
    const big = history(Array(20).fill('to'), true).pops.map(meanDepth);
    const small = history(Array(20).fill('nho'), true).pops.map(meanDepth);
    const notUp = big.slice(1).filter((m, i) => m <= big[i]);
    const notDown = small.slice(1).filter((m, i) => m >= small[i]);
    expect(notUp).toEqual([]);
    expect(notDown).toEqual([]);
    expect(big[20]).toBeGreaterThan(12);
    expect(small[20]).toBeLessThan(7.8);
  });

  it('keeps every population a whole', () => {
    const { pops } = history(['to', 'nho', 'vua', 'to'], true);
    expect(pops.filter((p) => Math.abs(total(p) - 1) > 1e-9)).toEqual([]);
  });

  it('cannot change a population without variation', () => {
    const { pops, surviving } = history(['to', 'to', 'to'], false);
    expect(pops.map(meanDepth)).toEqual([9, 9, 9, 9]);
    expect(surviving[0]).toBeLessThan(0.5);
    expect(selectionNote(pops, surviving, 'to', false)).toContain('không có gì để chọn');
  });

  it('kills most young birds in a poorly suited population', () => {
    expect(nextGeneration(startPopulation(true), 'to', true).surviving).toBeLessThan(0.2);
  });

  it('says when the population has adapted', () => {
    const { pops, surviving } = history(Array(20).fill('vua'), true);
    expect(selectionNote(pops, surviving, 'vua', true)).toContain('thích nghi');
  });
});
