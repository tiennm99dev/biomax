import { describe, expect, it } from 'vitest';
import {
  LEVELS,
  STAGES,
  compaction,
  fibreBp,
  helixLength,
  histones,
  loopPaths,
  wavePath,
} from './engine.js';

describe('packing levels', () => {
  it('grows wider at every level', () => {
    const nm = LEVELS.map((l) => l.nm);
    expect(nm).toEqual([2, 10, 30, 300, 700, 1400]);
  });

  it('sends every stage to an existing level', () => {
    expect(STAGES.every((s) => s.level >= 0 && s.level < LEVELS.length)).toBe(true);
  });
});

describe('nucleosome fibre', () => {
  it('counts cores and linkers', () => {
    expect(fibreBp(20, 50)).toBe(3870);
    expect(fibreBp(10, 40)).toBe(1820);
    expect(fibreBp(1, 50)).toBe(146);
    expect(fibreBp(0, 50)).toBe(0);
  });

  it('counts histones and length', () => {
    expect(histones(25)).toBe(200);
    expect(helixLength(3870)).toBeCloseTo(1315.8, 6);
  });

  it('measures compaction', () => {
    expect(compaction(60000, 4)).toBe(15000);
    expect(compaction(50000, 5)).toBe(10000);
  });
});

describe('drawing paths', () => {
  it('draws waves and loops', () => {
    expect(wavePath(0, 30, 10, 5, 10).startsWith('M 0.0 10.0')).toBe(true);
    expect(loopPaths(0, 120, 50, 4, 20)).toHaveLength(4);
  });
});
