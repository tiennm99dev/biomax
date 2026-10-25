import { describe, expect, it } from 'vitest';
import {
  cross,
  formatGenotype,
  gametes,
  isHomozygous,
  parseGenotype,
  phenotype,
  probability,
  ratio,
} from './genetics.js';

/** @param {ReturnType<typeof cross>} c */
const genotypeRatio = (c) => ratio(c.genotypes.map((g) => g.count));
/** @param {ReturnType<typeof cross>} c */
const phenotypeRatio = (c) => ratio(c.phenotypes.map((p) => p.count));

describe('genotypes', () => {
  it('groups alleles by gene and writes the dominant allele first', () => {
    expect(parseGenotype('aA')).toEqual([['A', 'a']]);
    expect(parseGenotype('AaBb')).toEqual([
      ['A', 'a'],
      ['B', 'b'],
    ]);
    expect(formatGenotype(parseGenotype('bBaA'))).toBe('BbAa');
  });

  it('reads sex chromosomes with and without a gene', () => {
    expect(parseGenotype('XaXA')).toEqual([['XA', 'Xa']]);
    expect(parseGenotype('XAY')).toEqual([['XA', 'Y']]);
    expect(parseGenotype('YX')).toEqual([['X', 'Y']]);
    expect(parseGenotype('AaXBY')).toEqual([
      ['A', 'a'],
      ['XB', 'Y'],
    ]);
  });

  it('rejects malformed genotypes', () => {
    expect(() => parseGenotype('Aab')).toThrow();
    expect(() => parseGenotype('A1')).toThrow();
    expect(() => parseGenotype('XAXaY')).toThrow();
  });

  it('tells homozygous from heterozygous', () => {
    expect(isHomozygous('AAbb')).toBe(true);
    expect(isHomozygous('AaBB')).toBe(false);
  });
});

describe('gametes', () => {
  it('makes one allele of each gene in equal shares', () => {
    expect(gametes('Aa').map((g) => g.gamete.join(''))).toEqual(['A', 'a']);
    expect(gametes('AaBb').map((g) => g.gamete.join(''))).toEqual(['AB', 'Ab', 'aB', 'ab']);
    expect(gametes('AaBbDd')).toHaveLength(8);
  });

  it('merges identical gametes of homozygous genes', () => {
    expect(gametes('AABb')).toEqual([
      { gamete: ['A', 'B'], count: 2 },
      { gamete: ['A', 'b'], count: 2 },
    ]);
  });
});

describe('phenotypes', () => {
  it('shows the dominant trait for a heterozygote', () => {
    expect(phenotype(parseGenotype('Aa'))).toEqual(['A']);
    expect(phenotype(parseGenotype('aa'))).toEqual(['a']);
    expect(phenotype(parseGenotype('Aa'), 'incomplete')).toEqual(['Aa']);
  });

  it('adds the sex for X-linked genes', () => {
    expect(phenotype(parseGenotype('XAXa'))).toEqual(['♀ A']);
    expect(phenotype(parseGenotype('XaY'))).toEqual(['♂ a']);
  });
});

describe('Mendel crosses', () => {
  it('gives 1 : 2 : 1 and 3 : 1 for a monohybrid cross Aa × Aa', () => {
    const c = cross('Aa', 'Aa');
    expect(c.total).toBe(4);
    expect(c.genotypes).toEqual([
      { genotype: 'AA', count: 1 },
      { genotype: 'Aa', count: 2 },
      { genotype: 'aa', count: 1 },
    ]);
    expect(phenotypeRatio(c)).toBe('3 : 1');
    expect(probability(c, { phenotype: 'a' })).toBe(0.25);
  });

  it('gives 1 : 1 for a test cross Aa × aa', () => {
    const c = cross('Aa', 'aa');
    expect(genotypeRatio(c)).toBe('1 : 1');
    expect(phenotypeRatio(c)).toBe('1 : 1');
  });

  it('gives 1 : 2 : 1 phenotypes with incomplete dominance', () => {
    expect(phenotypeRatio(cross('Aa', 'Aa', { dominance: 'incomplete' }))).toBe('1 : 2 : 1');
  });

  it('gives 9 : 3 : 3 : 1 for a dihybrid cross AaBb × AaBb', () => {
    const c = cross('AaBb', 'AaBb');
    expect(c.cells).toHaveLength(4);
    expect(c.cells[0]).toHaveLength(4);
    expect(c.total).toBe(16);
    expect(c.genotypes).toHaveLength(9);
    expect(c.phenotypes.map((p) => [p.phenotype.join(''), p.count])).toEqual([
      ['AB', 9],
      ['Ab', 3],
      ['aB', 3],
      ['ab', 1],
    ]);
    expect(probability(c, { genotype: 'AaBb' })).toBe(4 / 16);
    expect(probability(c, { genotype: 'aabb' })).toBe(1 / 16);
  });

  it('gives 1 : 1 : 1 : 1 for AaBb × aabb', () => {
    expect(phenotypeRatio(cross('AaBb', 'aabb'))).toBe('1 : 1 : 1 : 1');
  });

  it('weights merged gametes of homozygous parents', () => {
    const c = cross('AABB', 'aabb');
    expect(c.genotypes).toEqual([{ genotype: 'AaBb', count: 16 }]);
    expect(ratio([16])).toBe('1');
  });

  it('follows X-linked recessive inheritance, as for haemophilia', () => {
    const c = cross('XHXh', 'XHY');
    expect(c.genotypes).toEqual([
      { genotype: 'XHXH', count: 1 },
      { genotype: 'XHXh', count: 1 },
      { genotype: 'XHY', count: 1 },
      { genotype: 'XhY', count: 1 },
    ]);
    expect(probability(c, { phenotype: '♂ h' })).toBe(0.25);
    expect(probability(c, { phenotype: '♀ h' })).toBe(0);
  });

  it('rejects parents with different genes', () => {
    expect(() => cross('Aa', 'AaBb')).toThrow();
  });
});

describe('ratio', () => {
  it('reduces to whole numbers', () => {
    expect(ratio([4, 8, 4])).toBe('1 : 2 : 1');
    expect(ratio([9, 3, 3, 1])).toBe('9 : 3 : 3 : 1');
  });
});
