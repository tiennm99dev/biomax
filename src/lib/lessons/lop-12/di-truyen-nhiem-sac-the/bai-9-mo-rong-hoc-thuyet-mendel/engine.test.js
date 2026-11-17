import { describe, expect, it } from 'vitest';
import {
  MODES,
  PUZZLES,
  dominantCount,
  genotypeCount,
  modeOf,
  modeRatio,
  punnett,
  scaled,
  zygoteText,
} from './engine.js';

describe('interaction modes', () => {
  it('gives the textbook ratios', () => {
    const got = Object.fromEntries(MODES.map((m) => [m.id, modeRatio(m)]));
    expect(got).toEqual({
      'doc-lap': '9 : 3 : 3 : 1',
      'bo-sung-97': '9 : 7',
      'bo-sung-961': '9 : 6 : 1',
      'cong-gop-151': '15 : 1',
      'cong-gop-14641': '1 : 4 : 6 : 4 : 1',
      'troi-khong-hoan-toan': '1 : 2 : 1',
      'dong-troi': '1 : 1 : 1 : 1',
    });
  });

  it('classifies every cell into a listed phenotype', () => {
    const bad = MODES.flatMap((m) => {
      const ids = m.phenotypes.map((p) => p.id);
      return punnett(m)
        .cells.flat()
        .filter((c) => !ids.includes(c.phenotype))
        .map((c) => `${m.id}:${c.genotype}`);
    });
    expect(bad).toEqual([]);
  });

  it('writes genotypes dominant first', () => {
    expect(zygoteText(['a', 'B'], ['A', 'b'])).toBe('AaBb');
    expect(zygoteText(['Iᴼ'], ['Iᴬ'])).toBe('IᴬIᴼ');
    expect(punnett(modeOf('dong-troi')).cells[0][0].genotype).toBe('IᴬIᴮ');
    expect(dominantCount(['A', 'a', 'B', 'B'])).toBe(3);
  });
});

describe('puzzles and counts', () => {
  it('has data close to its mode ratio', () => {
    const off = PUZZLES.flatMap((p) => {
      const mode = modeOf(p.answer);
      const sq = punnett(mode);
      const want = sq.counts.filter((n) => n > 0);
      const got = scaled(
        p.counts.map(([, n]) => n),
        sq.total,
      );
      return got.some((g, i) => Math.abs(g - want[i]) > 0.6) ? [p.answer] : [];
    });
    expect(off).toEqual([]);
  });

  it('counts multi-allele genotypes', () => {
    expect(genotypeCount(3)).toBe(6);
    expect(genotypeCount(4)).toBe(10);
  });
});
