import { describe, expect, it } from 'vitest';
import {
  CROSSES,
  MENDEL_F2,
  classOf,
  geneChance,
  genotypesOf,
  productChance,
  ratioText,
  relativeTo,
  selfedHeterozygote,
  square,
} from './engine.js';

describe('dihybrid Punnett square', () => {
  it('gives 9 : 3 : 3 : 1 for F1 × F1', () => {
    const s = square('AaBb', 'AaBb');
    expect(s.eggs).toEqual(['AB', 'Ab', 'aB', 'ab']);
    expect(s.cells.flat()).toHaveLength(16);
    expect(s.counts).toEqual([9, 3, 3, 1]);
    expect(ratioText(s.counts)).toBe('9 : 3 : 3 : 1');
  });

  it('gives 1 : 1 : 1 : 1 for the test cross', () => {
    const s = square('AaBb', 'aabb');
    expect(s.sperms).toEqual(['ab']);
    expect(ratioText(s.counts)).toBe('1 : 1 : 1 : 1');
  });

  it('gives 3 : 3 : 1 : 1 for AaBb × Aabb', () => {
    expect(square('AaBb', 'Aabb').counts).toEqual([3, 3, 1, 1]);
  });

  it('sorts every preset cell into one class', () => {
    for (const c of CROSSES) {
      const s = square(c.mother, c.father);
      expect(s.counts.reduce((a, b) => a + b, 0)).toBe(s.total);
    }
  });

  it('reads phenotypes', () => {
    expect(classOf('AaBb')).toBe('AB');
    expect(classOf('aaBB')).toBe('aB');
    expect(classOf('Aabb')).toBe('Ab');
    expect(classOf('aabb')).toBe('ab');
  });
});

describe('Mendel data and general formulas', () => {
  it('is close to 9 : 3 : 3 : 1', () => {
    expect(relativeTo(MENDEL_F2)).toEqual([9.84, 3.16, 3.38, 1]);
  });

  it('counts for n heterozygous genes', () => {
    expect(selfedHeterozygote(2)).toEqual({ gametes: 4, combos: 16, genotypes: 9, phenotypes: 4 });
    expect(selfedHeterozygote(3)).toEqual({
      gametes: 8,
      combos: 64,
      genotypes: 27,
      phenotypes: 8,
    });
  });
});

describe('probability calculator', () => {
  it('counts one gene', () => {
    expect(geneChance('Aa', 'Aa', 'troi')).toBe(3);
    expect(geneChance('Aa', 'Aa', 'lan')).toBe(1);
    expect(geneChance('Aa', 'Aa', 'Aa')).toBe(2);
    expect(geneChance('Aa', 'aa', 'aa')).toBe(2);
    expect(geneChance('AA', 'aa', 'Aa')).toBe(4);
  });

  it('multiplies independent genes', () => {
    const het = (/** @type {string} */ l, /** @type {string} */ want) => ({
      mother: l + l.toLowerCase(),
      father: l + l.toLowerCase(),
      want,
    });
    expect(productChance([het('A', 'troi'), het('B', 'troi'), het('D', 'lan')])).toEqual([9, 64]);
    expect(productChance([het('A', 'AA'), het('B', 'lan')])).toEqual([1, 16]);
    expect(productChance([het('A', 'Aa'), { mother: 'BB', father: 'BB', want: 'lan' }])).toEqual([
      0, 1,
    ]);
    expect(genotypesOf('B')).toEqual(['BB', 'Bb', 'bb']);
  });
});
