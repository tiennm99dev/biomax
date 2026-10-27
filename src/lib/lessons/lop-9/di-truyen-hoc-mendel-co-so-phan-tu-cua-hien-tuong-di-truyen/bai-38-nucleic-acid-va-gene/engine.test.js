import { describe, expect, it } from 'vitest';
import { rng } from '#lib/core/drill.js';
import { MAX_PAIRS, helixAt, pairs, partner, randomStrand, sanitize, stats } from './engine.js';

describe('DNA double helix', () => {
  it('pairs A with T and G with C', () => {
    expect(partner('A')).toBe('T');
    expect(partner('T')).toBe('A');
    expect(partner('G')).toBe('C');
    expect(partner('C')).toBe('G');
    expect(pairs('A', 'T')).toBe(true);
    expect(pairs('A', 'G')).toBe(false);
  });

  it('cleans typed strands', () => {
    expect(sanitize("5'-atg cx-3'")).toBe('ATGC');
    expect(sanitize('A'.repeat(30))).toHaveLength(MAX_PAIRS);
  });

  it('counts a double strand', () => {
    // Strand 1 ATGCAA (3 A, 1 T) pairs with TACGTT: 4 A–T and 2 G–C pairs.
    const s = stats('ATGCAA');
    expect(s.pairs).toBe(6);
    expect(s.n).toBe(12);
    expect(s.A).toBe(4);
    expect(s.T).toBe(4);
    expect(s.G).toBe(2);
    expect(s.C).toBe(2);
    expect(s.A + s.T + s.G + s.C).toBe(s.n);
    expect(s.hBonds).toBe(2 * 4 + 3 * 2);
    expect(s.lengthNm).toBeCloseTo(2.04);
    expect(s.turns).toBeCloseTo(0.6);
    expect(s.percentA + s.percentG).toBeCloseTo(50);
  });

  it('handles an empty strand', () => {
    expect(stats('').n).toBe(0);
    expect(stats('').percentA).toBe(0);
  });

  it('draws one full turn every 10 pairs', () => {
    const a = helixAt(0, 30);
    const b = helixAt(10, 30);
    expect(a.y1).toBeCloseTo(-30);
    expect(a.y2).toBeCloseTo(30);
    expect(b.y1).toBeCloseTo(a.y1);
    expect(helixAt(5, 30).y1).toBeCloseTo(30);
  });

  it('makes random strands of DNA bases', () => {
    const s = randomStrand(rng(2), 12);
    expect(s).toMatch(/^[ATGC]{12}$/);
  });
});
