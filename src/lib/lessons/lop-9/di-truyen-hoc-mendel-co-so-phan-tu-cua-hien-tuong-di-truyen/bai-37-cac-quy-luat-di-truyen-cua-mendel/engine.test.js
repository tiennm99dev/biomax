import { describe, expect, it } from 'vitest';
import { rng } from '#lib/core/drill.js';
import {
  ONE_GENE,
  TWO_GENES,
  expected,
  observedRatio,
  offspring,
  phenotypeName,
  sample,
  seedLook,
  testCrossVerdict,
} from './engine.js';

describe('pea crosses', () => {
  it('names phenotypes and seed looks', () => {
    expect(phenotypeName('Aa')).toBe('hạt vàng');
    expect(phenotypeName('aaBb')).toBe('hạt xanh, trơn');
    expect(seedLook('Aabb')).toEqual({ color: 'vang', shape: 'nhan' });
    expect(seedLook('aa')).toEqual({ color: 'xanh', shape: 'tron' });
  });

  it('gives 3 : 1 for Aa × Aa and 1 : 1 for Aa × aa', () => {
    const f2 = expected('Aa', 'Aa');
    expect(f2.map((e) => [e.name, e.count])).toEqual([
      ['hạt vàng', 3],
      ['hạt xanh', 1],
    ]);
    expect(expected('Aa', 'aa').map((e) => e.p)).toEqual([0.5, 0.5]);
    expect(expected('AA', 'aa').map((e) => e.p)).toEqual([1]);
  });

  it('gives 9 : 3 : 3 : 1 for AaBb × AaBb', () => {
    const f2 = expected('AaBb', 'AaBb');
    expect(f2.map((e) => e.name)).toEqual([
      'hạt vàng, trơn',
      'hạt vàng, nhăn',
      'hạt xanh, trơn',
      'hạt xanh, nhăn',
    ]);
    expect(f2.map((e) => e.count)).toEqual([9, 3, 3, 1]);
    expect(expected('AaBb', 'aabb').map((e) => e.p)).toEqual([0.25, 0.25, 0.25, 0.25]);
  });

  it('offers every genotype of one and two genes', () => {
    expect(ONE_GENE).toHaveLength(3);
    expect(TWO_GENES).toHaveLength(9);
    for (const g of TWO_GENES) expect(() => expected(g, 'aabb')).not.toThrow();
  });

  it('samples offspring near the expected ratio', () => {
    const counts = sample('Aa', 'Aa', 4000, rng(7));
    expect(counts[0] + counts[1]).toBe(4000);
    expect(counts[0] / 4000).toBeGreaterThan(0.72);
    expect(counts[0] / 4000).toBeLessThan(0.78);
    expect(sample('AA', 'aa', 50, rng(1))).toEqual([50]);
  });

  it('produces only possible offspring', () => {
    const r = rng(3);
    for (let i = 0; i < 50; i++) expect(['Aa', 'aa']).toContain(offspring('Aa', 'aa', r));
  });

  it('writes observed ratios to the smallest class', () => {
    expect(observedRatio([301, 99])).toEqual([3, 1]);
    expect(observedRatio([315, 108, 101, 32])).toEqual([9.8, 3.4, 3.2, 1]);
    expect(observedRatio([0, 0])).toEqual([0, 0]);
  });

  it('reads a test cross', () => {
    expect(testCrossVerdict(['Aa', 'Aa', 'Aa'])).toBe('AA');
    expect(testCrossVerdict(['Aa', 'aa'])).toBe('Aa');
  });
});
