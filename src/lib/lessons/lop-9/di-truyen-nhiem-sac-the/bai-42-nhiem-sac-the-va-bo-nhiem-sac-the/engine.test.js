import { describe, expect, it } from 'vitest';
import {
  SETS,
  bandsOf,
  centromereType,
  chromosomesOf,
  isPair,
  mismatchReason,
  setSummary,
  shuffledSet,
  slotsOf,
} from './engine.js';

describe('karyotype pairing', () => {
  it('counts 2n and n for every set', () => {
    expect(setSummary('nu')).toEqual({ diploid: 46, haploid: 23, autosomePairs: 22 });
    expect(setSummary('ruoi-duc')).toEqual({ diploid: 8, haploid: 4, autosomePairs: 3 });
    for (const s of SETS) {
      expect(chromosomesOf(s.id)).toHaveLength(setSummary(s.id).diploid);
    }
  });

  it('fills every slot with exactly two chromosomes', () => {
    const bad = SETS.flatMap((s) => {
      const all = chromosomesOf(s.id);
      return slotsOf(s.id)
        .filter((slot) => all.filter((c) => c.slot === slot).length !== 2)
        .map((slot) => `${s.id}:${slot}`);
    });
    expect(bad).toEqual([]);
  });

  it('pairs homologues and the male X with Y, nothing else', () => {
    const male = chromosomesOf('nam');
    const x = male.find((c) => c.pair === 'X');
    const y = male.find((c) => c.pair === 'Y');
    const [a, b] = male.filter((c) => c.pair === '21');
    if (!x || !y) throw new Error('missing sex chromosomes');
    expect(isPair(x, y)).toBe(true);
    expect(isPair(a, b)).toBe(true);
    expect(isPair(a, a)).toBe(false);
    expect(isPair(a, x)).toBe(false);
  });

  it('gives homologues the same bands and other kinds different ones', () => {
    expect(bandsOf('người', '7')).toEqual(bandsOf('người', '7'));
    expect(bandsOf('người', '7')).not.toEqual(bandsOf('người', '8'));
    const bands = bandsOf('người', '1');
    expect(bands.every(([a, b]) => a >= 0 && b <= 1 && a < b)).toBe(true);
  });

  it('classifies centromeres', () => {
    expect(centromereType(0.49)).toBe('giua');
    expect(centromereType(0.3)).toBe('lech');
    expect(centromereType(0.16)).toBe('mut');
  });

  it('explains every wrong pairing', () => {
    const all = chromosomesOf('nu');
    /** @type {string[]} */
    const wrong = [];
    for (const a of all) {
      for (const b of all) {
        if (a.slot !== b.slot && !mismatchReason(a, b).startsWith('Hai NST')) wrong.push(a.id);
      }
    }
    expect(wrong).toEqual([]);
    const one = all.find((c) => c.pair === '1');
    const tiny = all.find((c) => c.pair === '21');
    if (!one || !tiny) throw new Error('missing');
    expect(mismatchReason(one, tiny)).toContain('kích thước');
  });

  it('shuffles the same way for the same seed', () => {
    /** @param {number} seed */
    const ids = (seed) => shuffledSet('nam', seed).map((c) => c.id);
    expect(ids(7)).toEqual(ids(7));
    expect(ids(7)).not.toEqual(ids(8));
    expect([...ids(7)].sort()).toEqual(
      chromosomesOf('nam')
        .map((c) => c.id)
        .sort(),
    );
  });
});
