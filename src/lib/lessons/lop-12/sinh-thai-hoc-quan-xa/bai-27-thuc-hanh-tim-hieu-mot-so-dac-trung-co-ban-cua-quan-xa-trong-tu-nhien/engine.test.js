import { describe, expect, it } from 'vitest';
import { SURVEYS, abundances, dominant, shannon, summarize } from './engine.js';

describe('community survey', () => {
  it('computes relative abundance in percent', () => {
    expect(abundances([36, 24, 15, 5])).toEqual([45, 30, 18.75, 6.25]);
    expect(abundances([0, 0])).toEqual([0, 0]);
  });

  it('finds the dominant species, including ties', () => {
    expect(dominant([12, 64, 20, 4])).toEqual([1]);
    expect(dominant([5, 5, 1])).toEqual([0, 1]);
    expect(dominant([0, 0])).toEqual([]);
  });

  it('gives the Shannon index', () => {
    expect(shannon([50, 50])).toBeCloseTo(Math.log(2), 9);
    expect(shannon([90, 10])).toBeCloseTo(0.325, 3);
    expect(shannon([7, 0])).toBe(0);
    expect(shannon([20, 20, 20, 20, 20])).toBeGreaterThan(shannon([80, 5, 5, 5, 5]));
  });

  it('summarizes a preset survey', () => {
    const s = summarize(SURVEYS['bai-co'].rows);
    expect(s.total).toBe(95);
    expect(s.species).toBe(6);
    expect(s.dominant).toEqual(['Cỏ gà']);
    expect(s.roles).toEqual(['san-xuat', 'tieu-thu', 'phan-giai']);
    expect(s.layers).toEqual(['Tầng cỏ']);
    expect(summarize(SURVEYS['vuon-cay'].rows).layers).toEqual([
      'Tầng cây gỗ',
      'Tầng cây bụi',
      'Tầng cỏ',
    ]);
  });
});
