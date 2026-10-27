import { describe, expect, it } from 'vitest';
import { SCENARIOS, density, forecast, shapeOf } from './engine.js';

describe('age pyramid scenarios', () => {
  it('gives one scenario of each shape', () => {
    expect(SCENARIOS.map(shapeOf)).toEqual(['developing', 'stable', 'declining']);
    for (const s of SCENARIOS) {
      const { pre, reproductive, post } = s.groups;
      expect(pre + reproductive + post).toBe(100);
    }
  });

  it('forecasts the size from the shape', () => {
    expect(forecast('developing')).toContain('tăng');
    expect(forecast('stable')).toContain('ổn định');
    expect(forecast('declining')).toContain('giảm');
  });

  it('computes the densities of the textbook table', () => {
    expect(density(11250, 15)).toBe(750);
    expect(density(3000, 750)).toBe(4);
    expect(density(120000, 60000)).toBe(2);
  });
});
