import { describe, expect, it } from 'vitest';
import { gametes, offspring, outcome, phenotypeText, verdict, zygote } from './engine.js';

describe('offspring of an AaBb parent', () => {
  it('makes four gametes and orders alleles in a zygote', () => {
    expect(gametes('AaBb')).toEqual(['AB', 'Ab', 'aB', 'ab']);
    expect(zygote('ab', 'AB')).toBe('AaBb');
    expect(zygote('ab', 'ab')).toBe('aabb');
  });

  it('clones the parent in asexual reproduction', () => {
    const o = outcome('vo-tinh', 'on-dinh');
    expect(o.born).toHaveLength(16);
    expect(o.genotypes).toBe(1);
    expect(o.phenotypes).toBe(1);
  });

  it('gives 9 genotypes and 4 phenotypes in the 9:3:3:1 ratio from two AaBb parents', () => {
    const born = offspring('huu-tinh');
    expect(new Set(born).size).toBe(9);
    /** @type {Record<string, number>} */
    const counts = {};
    for (const g of born) counts[phenotypeText(g)] = (counts[phenotypeText(g)] ?? 0) + 1;
    expect(Object.values(counts).sort((a, b) => b - a)).toEqual([9, 3, 3, 1]);
  });

  it('lets only aa plants survive a new disease', () => {
    expect(outcome('vo-tinh', 'dich-benh').survivors).toBe(0);
    expect(outcome('huu-tinh', 'dich-benh').survivors).toBe(4);
    expect(verdict('dich-benh')).toContain('0/16');
  });

  it('needs a partner for sexual reproduction', () => {
    expect(outcome('huu-tinh', 'mot-ca-the').born).toEqual([]);
    expect(outcome('vo-tinh', 'mot-ca-the').survivors).toBe(16);
  });
});
