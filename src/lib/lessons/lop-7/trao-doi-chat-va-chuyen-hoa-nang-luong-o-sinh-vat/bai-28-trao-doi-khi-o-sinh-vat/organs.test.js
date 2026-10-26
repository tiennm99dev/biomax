import { describe, expect, it } from 'vitest';
import { ORGAN_BINS, ORGAN_CARDS } from './organs.js';

describe('gas-exchange organ cards', () => {
  it('puts every card in a known bin and fills every bin', () => {
    const bins = new Set(ORGAN_BINS.map((b) => b.id));
    for (const c of ORGAN_CARDS) expect(bins.has(c.bin)).toBe(true);
    for (const b of bins) expect(ORGAN_CARDS.some((c) => c.bin === b)).toBe(true);
  });

  it('has unique card ids', () => {
    expect(new Set(ORGAN_CARDS.map((c) => c.id)).size).toBe(ORGAN_CARDS.length);
  });
});
