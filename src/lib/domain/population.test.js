import { describe, expect, it } from 'vitest';
import {
  ageShares,
  curve,
  density,
  doublingTime,
  exponential,
  growthRate,
  growthSpeed,
  inflection,
  logistic,
  nextSize,
  pyramidShape,
  yearly,
} from './population.js';

describe('population size and density', () => {
  it('adds births and immigrants, subtracts deaths and emigrants', () => {
    expect(nextSize(1000, { births: 120, deaths: 80, immigrants: 15, emigrants: 5 })).toBe(1050);
    expect(nextSize(500, {})).toBe(500);
  });

  it('computes the growth rate from per-capita rates', () => {
    expect(growthRate({ birth: 0.12, death: 0.08 })).toBeCloseTo(0.04);
    expect(
      growthRate({ birth: 0.1, death: 0.05, immigration: 0.02, emigration: 0.03 }),
    ).toBeCloseTo(0.04);
  });

  it('computes density per unit of space', () => {
    expect(density(360, 2)).toBe(180);
    expect(() => density(10, 0)).toThrow(RangeError);
  });
});

describe('growth curves', () => {
  it('grows exponentially and doubles every ln 2 / r', () => {
    expect(exponential(100, 0.5, 0)).toBe(100);
    const t2 = doublingTime(0.5);
    expect(exponential(100, 0.5, t2)).toBeCloseTo(200);
    expect(doublingTime(0)).toBe(Infinity);
  });

  it('levels off at the carrying capacity', () => {
    expect(logistic(10, 1, 1000, 0)).toBeCloseTo(10);
    expect(logistic(10, 1, 1000, 50)).toBeCloseTo(1000);
    expect(logistic(2000, 1, 1000, 30)).toBeCloseTo(1000);
    expect(logistic(0, 1, 1000, 5)).toBe(0);
  });

  it('grows fastest at half the carrying capacity', () => {
    const { t, n } = inflection(10, 0.8, 1000);
    expect(n).toBe(500);
    expect(logistic(10, 0.8, 1000, t)).toBeCloseTo(500);
    expect(growthSpeed(500, 0.8, 1000)).toBeGreaterThan(growthSpeed(400, 0.8, 1000));
    expect(growthSpeed(500, 0.8, 1000)).toBeGreaterThan(growthSpeed(600, 0.8, 1000));
    expect(inflection(600, 0.8, 1000).t).toBe(0);
  });

  it('matches rN without a carrying capacity', () => {
    expect(growthSpeed(200, 0.1)).toBeCloseTo(20);
    expect(growthSpeed(1000, 0.1, 1000)).toBe(0);
  });

  it('samples a curve at even times', () => {
    const pts = curve('logistic', { n0: 10, r: 1, k: 100, until: 10, steps: 5 });
    expect(pts.map((p) => p.t)).toEqual([0, 2, 4, 6, 8, 10]);
    for (let i = 1; i < pts.length; i++) expect(pts[i].n).toBeGreaterThan(pts[i - 1].n);
    expect(pts[5].n).toBeLessThan(100);
  });

  it('steps year by year with rounding', () => {
    expect(yearly(1000, 0.1, 3)).toEqual([1000, 1100, 1210, 1331]);
  });
});

describe('age pyramids', () => {
  it('classifies the three textbook shapes', () => {
    expect(pyramidShape({ pre: 50, reproductive: 35, post: 15 })).toBe('developing');
    expect(pyramidShape({ pre: 35, reproductive: 35, post: 30 })).toBe('stable');
    expect(pyramidShape({ pre: 20, reproductive: 45, post: 35 })).toBe('declining');
    expect(pyramidShape({ pre: 5, reproductive: 0, post: 1 })).toBe('developing');
  });

  it('gives shares that add up to 100', () => {
    const s = ageShares({ pre: 2, reproductive: 1, post: 1 });
    expect(s).toEqual({ pre: 50, reproductive: 25, post: 25 });
    expect(ageShares({ pre: 0, reproductive: 0, post: 0 })).toEqual({
      pre: 0,
      reproductive: 0,
      post: 0,
    });
  });
});
