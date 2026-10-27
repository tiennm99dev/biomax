import { describe, expect, it } from 'vitest';
import { COMMUNITIES, PAIRS, RELATIONS, ROUNDS, dominant, groupOf, richness } from './engine.js';

describe('relationships between species', () => {
  it('gives every kind two pairs and a group', () => {
    for (const r of RELATIONS) expect(PAIRS.filter((p) => p.bin === r.id)).toHaveLength(2);
    expect(groupOf('cong-sinh')).toBe('ho-tro');
    expect(groupOf('hoi-sinh')).toBe('ho-tro');
    expect(groupOf('ki-sinh')).toBe('doi-dich');
    expect(groupOf('an-thit')).toBe('doi-dich');
  });

  it('builds both sorting rounds from the same pairs', () => {
    for (const round of Object.values(ROUNDS)) {
      const bins = new Set(round.bins.map((b) => b.id));
      expect(round.cards).toHaveLength(PAIRS.length);
      for (const c of round.cards) expect(bins.has(c.bin)).toBe(true);
    }
  });
});

describe('community samples', () => {
  it('finds the dominant species and the richness', () => {
    expect(COMMUNITIES.map(dominant)).toEqual(['Lúa', 'Cây đước', 'Lim xanh']);
    expect(COMMUNITIES.map(richness)).toEqual([4, 6, 7]);
    for (const c of COMMUNITIES)
      expect(c.counts.some((x) => x.species === c.characteristic)).toBe(true);
  });
});
