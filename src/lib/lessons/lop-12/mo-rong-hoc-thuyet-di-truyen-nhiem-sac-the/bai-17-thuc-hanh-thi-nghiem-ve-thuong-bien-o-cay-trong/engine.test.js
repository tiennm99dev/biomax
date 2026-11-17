import { describe, expect, it } from 'vitest';
import {
  FACTORS,
  PLANTS,
  factorOf,
  measure,
  percentOf,
  percentRight,
  readPercent,
} from './engine.js';

describe('virtual plots', () => {
  it('measures ten plants a plot with the mean of what it shows', () => {
    const r = measure(factorOf('nuoc'), 'cung-khom', 3, 1);
    expect(r.control.heights).toHaveLength(PLANTS);
    const mean = r.control.heights.reduce((s, h) => s + h, 0) / PLANTS;
    expect(Math.abs(mean - r.control.mean)).toBeLessThan(0.051);
    expect(r.heightRatio).toBe(percentOf(r.test.mean, r.control.mean));
  });

  it('shows the effect of each factor with cuttings of one clump', () => {
    const off = FACTORS.flatMap((f) => {
      const r = measure(f, 'cung-khom', 4, 7);
      const want = ((10 + 36 * f.height) / 46) * 100;
      return Math.abs(r.heightRatio - want) > 8 ? [f.id] : [];
    });
    expect(off).toEqual([]);
    expect(measure(factorOf('nuoc'), 'cung-khom', 3, 2).massRatio).toBeLessThan(60);
  });

  it('confounds the result when the test plot is another variety', () => {
    const same = measure(factorOf('phan'), 'cung-khom', 4, 3);
    const mixed = measure(factorOf('phan'), 'khac-giong', 4, 3);
    expect(mixed.heightRatio).toBeGreaterThan(same.heightRatio + 10);
  });

  it('grows taller each week', () => {
    const means = [1, 2, 3, 4].map(
      (w) => measure(factorOf('anh-sang'), 'cung-khom', w, 5).control.mean,
    );
    expect(means.every((m, i) => i === 0 || m > means[i - 1])).toBe(true);
  });
});

describe('percent answers', () => {
  it('reads commas, dots and a percent sign', () => {
    expect(readPercent('65,4 %')).toBe(65.4);
    expect(readPercent('65.4%')).toBe(65.4);
    expect(readPercent('abc')).toBeNull();
    expect(percentRight('65', 65.4)).toBe(true);
    expect(percentRight('66', 65.4)).toBe(false);
    expect(percentOf(26, 40)).toBe(65);
  });
});
