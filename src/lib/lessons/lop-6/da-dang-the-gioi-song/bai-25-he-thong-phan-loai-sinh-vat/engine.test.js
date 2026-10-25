import { describe, expect, it } from 'vitest';
import {
  RANKS,
  SPECIES,
  compareSentence,
  sameGroup,
  sharedDepth,
  taxonLabel,
  validateSpecies,
} from './engine.js';

describe('taxonomy ladder', () => {
  it('has seven ranks from giới down to loài', () => {
    expect(RANKS.map((r) => r.id)).toEqual(['gioi', 'nganh', 'lop', 'bo', 'ho', 'chi', 'loai']);
  });

  it('has a consistent classification for every species', () => {
    expect(validateSpecies()).toEqual([]);
  });

  it('covers all five kingdoms', () => {
    const kingdoms = new Set(SPECIES.map((s) => s.lineage[0].la));
    expect([...kingdoms].sort()).toEqual(['Animalia', 'Fungi', 'Monera', 'Plantae', 'Protista']);
  });

  it('narrows the group at every lower rank', () => {
    const sizes = RANKS.map((_, d) => sameGroup('ho', d).length);
    expect(sizes).toEqual([5, 5, 5, 4, 3, 2, 1]);
  });

  it('finds the lowest shared rank', () => {
    expect(sharedDepth('ho', 'su-tu')).toBe(6);
    expect(sharedDepth('ho', 'meo-nha')).toBe(5);
    expect(sharedDepth('ho', 'gau-truc')).toBe(4);
    expect(sharedDepth('ho', 'nguoi')).toBe(3);
    expect(sharedDepth('lua', 'ngo')).toBe(5);
    expect(sharedDepth('lua', 'buoi')).toBe(2);
    expect(sharedDepth('ho', 'lua')).toBe(0);
    expect(sharedDepth('ho', 'ho')).toBe(7);
  });

  it('labels taxa the way the book writes them', () => {
    const tiger = SPECIES[0];
    expect(taxonLabel(2, tiger.lineage[2])).toBe('Lớp Thú (Mammalia)');
    expect(taxonLabel(5, tiger.lineage[5])).toBe('Chi Báo (Panthera)');
    expect(taxonLabel(6, tiger.lineage[6])).toBe('Loài Panthera tigris');
  });

  it('compares two species in words', () => {
    expect(compareSentence('ho', 'su-tu')).toContain('Chi Báo (Panthera)');
    expect(compareSentence('ho', 'e-coli')).toContain('vi khuẩn E. coli');
    expect(compareSentence('ho', 'e-coli')).toContain('hai giới khác nhau');
  });
});
