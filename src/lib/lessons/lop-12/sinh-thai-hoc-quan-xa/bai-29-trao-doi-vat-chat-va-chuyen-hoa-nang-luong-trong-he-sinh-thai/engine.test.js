import { describe, expect, it } from 'vitest';
import { tidy } from '#lib/core/number-format.js';
import { barShare, efficiency, pyramid } from './engine.js';

describe('energy pyramid', () => {
  it('passes on the efficiency at every step', () => {
    const p = pyramid(1_200_000, 10, 4);
    expect(p.map((r) => tidy(r.energy))).toEqual([1_200_000, 120_000, 12_000, 1_200]);
    expect(tidy(p[3].share)).toBe(0.1);
    expect(tidy(p[0].lost ?? 0)).toBe(1_080_000);
    expect(p[3].lost).toBeNull();
    expect(p[2].name).toBe('Sinh vật tiêu thụ bậc 2');
  });

  it('computes ecological efficiency', () => {
    expect(efficiency(2_000_000, 180_000)).toBe(9);
    expect(efficiency(200_000, 15_000)).toBe(7.5);
  });

  it('scales the bars', () => {
    expect(barShare(10_000, 10_000, 'log')).toBe(1);
    expect(barShare(1_000, 10_000, 'linear')).toBe(0.1);
    expect(barShare(0.001, 10_000, 'log')).toBe(0);
    const widths = pyramid(10_000, 10, 6).map((r) => barShare(r.energy, 10_000, 'log'));
    expect(widths.every((w, i) => i === 0 || w < widths[i - 1])).toBe(true);
  });
});
