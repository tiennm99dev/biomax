import { describe, expect, it } from 'vitest';
import { tidy } from '#lib/core/number-format.js';
import {
  PREVALENCES,
  alleles,
  carrierEstimate,
  fromCounts,
  fromPercents,
  generationName,
  generationNote,
  generations,
  hardyWeinberg,
  isBalanced,
  selfFor,
  selfOnce,
  structureText,
} from './engine.js';

describe('allele and genotype frequencies', () => {
  it('counts the fruit-fly example of the book', () => {
    const g = fromCounts({ AA: 80, Aa: 70, aa: 50 });
    expect(g).toEqual({ AA: 0.4, Aa: 0.35, aa: 0.25 });
    expect(alleles(g)).toEqual({ p: 0.575, q: 0.425 });
  });

  it('writes the structure with a decimal comma', () => {
    expect(structureText({ AA: 0.36, Aa: 0.48, aa: 0.16 })).toBe('0,36 AA : 0,48 Aa : 0,16 aa');
  });

  it('builds a starting structure from percents and never passes 100 %', () => {
    expect(fromPercents(30, 60)).toEqual({ AA: 0.3, Aa: 0.6, aa: 0.1 });
    expect(fromPercents(70, 50)).toEqual({ AA: 0.7, Aa: 0.3, aa: 0 });
  });

  it('names the generations', () => {
    expect([0, 1, 3].map(generationName)).toEqual(['P', 'F1', 'F3']);
  });
});

describe('random mating', () => {
  it('reaches p² : 2pq : q² after one generation and stays there', () => {
    const list = generations({ AA: 0.4, Aa: 0.35, aa: 0.25 }, 'random', 3);
    expect(isBalanced(list[0])).toBe(false);
    expect(list[1]).toEqual({ AA: 0.330625, Aa: 0.48875, aa: 0.180625 });
    expect(list[2]).toEqual(list[1]);
    expect(list.slice(1).every(isBalanced)).toBe(true);
  });

  it('recognises balanced structures', () => {
    expect(isBalanced({ AA: 0.64, Aa: 0.32, aa: 0.04 })).toBe(true);
    expect(isBalanced({ AA: 0.4, Aa: 0.4, aa: 0.2 })).toBe(false);
    expect(isBalanced({ AA: 0.5, Aa: 0, aa: 0.5 })).toBe(false);
    expect(hardyWeinberg(0.6)).toEqual({ AA: 0.36, Aa: 0.48, aa: 0.16 });
  });
});

describe('self-fertilisation', () => {
  it('halves the heterozygotes and keeps the allele frequencies', () => {
    const p0 = { AA: 0.4, Aa: 0.4, aa: 0.2 };
    const list = generations(p0, 'selfing', 5);
    const bad = list.filter((g, i) => alleles(g).p !== 0.6 || g.Aa !== tidy(0.4 / 2 ** i));
    expect(bad).toEqual([]);
    expect(list[2]).toEqual({ AA: 0.55, Aa: 0.1, aa: 0.35 });
  });

  it('matches the closed form after n generations', () => {
    const p0 = { AA: 0.2, Aa: 0.4, aa: 0.4 };
    let g = p0;
    const bad = [];
    for (let n = 1; n <= 6; n++) {
      g = selfOnce(g);
      const f = selfFor(p0, n);
      if (Math.abs(f.AA - g.AA) > 1e-9 || Math.abs(f.Aa - g.Aa) > 1e-9) bad.push(n);
    }
    expect(bad).toEqual([]);
    expect(selfFor(p0, 3)).toEqual({ AA: 0.375, Aa: 0.05, aa: 0.575 });
    expect(selfFor({ AA: 0, Aa: 1, aa: 0 }, 4).Aa).toBe(0.0625);
  });
});

describe('notes', () => {
  it('explains each mating', () => {
    const start = { AA: 0.4, Aa: 0.35, aa: 0.25 };
    expect(generationNote([start], 'random')).toContain('chưa cân bằng');
    expect(generationNote(generations(start, 'random', 1), 'random')).toContain('cân bằng');
    expect(generationNote(generations(start, 'selfing', 2), 'selfing')).toContain('\\tfrac{1}{4}');
    expect(
      generationNote(generations({ AA: 0.5, Aa: 0, aa: 0.5 }, 'selfing', 1), 'selfing'),
    ).toContain('dòng thuần');
  });
});

describe('carriers of a recessive disease', () => {
  it('counts the healthy carriers for each prevalence', () => {
    expect(PREVALENCES.map((n) => carrierEstimate(n).carriers)).toEqual([18, 38, 98, 198, 398]);
    expect(carrierEstimate(10000)).toEqual({
      q: 0.01,
      p: 0.99,
      carrierShare: 0.0198,
      carriers: 198,
      normal: 9801,
    });
  });
});
