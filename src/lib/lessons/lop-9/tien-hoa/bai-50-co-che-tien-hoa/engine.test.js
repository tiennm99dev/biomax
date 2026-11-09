import { describe, expect, it } from 'vitest';
import { rng } from '#lib/core/drill.js';
import {
  alleleA,
  allelesFromCounts,
  explain,
  noFactors,
  randomMating,
  sample,
  selectAgainstAa,
  selfing,
  simulate,
  step,
} from './engine.js';

const start = randomMating(0.5);
/** @param {Partial<import('./engine.js').Factors>} on */
const only = (on) => ({ ...noFactors(), ...on });
const sum = (/** @type {import('./engine.js').Genotypes} */ g) => g.AA + g.Aa + g.aa;

describe('allele and genotype frequencies', () => {
  it('reads allele frequencies from counts', () => {
    expect(allelesFromCounts(36, 48, 16)).toEqual({ p: 0.6, q: 0.4 });
    expect(alleleA({ AA: 0.4, Aa: 0.4, aa: 0.2 })).toBeCloseTo(0.6);
  });

  it('gives Hardy–Weinberg proportions after random mating', () => {
    const g = randomMating(0.6);
    expect(g.AA).toBeCloseTo(0.36);
    expect(g.Aa).toBeCloseTo(0.48);
    expect(g.aa).toBeCloseTo(0.16);
  });

  it('halves the heterozygotes by selfing and keeps the allele frequency', () => {
    const g = selfing({ AA: 0, Aa: 1, aa: 0 });
    expect(g).toEqual({ AA: 0.25, Aa: 0.5, aa: 0.25 });
    expect(alleleA(selfing(start))).toBeCloseTo(0.5);
  });

  it('removes a share of aa by selection', () => {
    const g = selectAgainstAa({ AA: 0.25, Aa: 0.5, aa: 0.25 }, 1);
    expect(g.aa).toBe(0);
    expect(alleleA(g)).toBeCloseTo(2 / 3);
  });

  it('samples a small population', () => {
    const g = sample(start, 20, rng(3));
    expect(sum(g)).toBeCloseTo(1);
    expect([g.AA, g.Aa, g.aa].every((v) => (v * 20) % 1 < 1e-9)).toBe(true);
  });
});

describe('the evolutionary factors', () => {
  it('keeps the population unchanged with no factor', () => {
    const h = simulate(start, noFactors(), 30, rng(1));
    expect(alleleA(h[30])).toBeCloseTo(0.5);
    expect(h[30].Aa).toBeCloseTo(0.5);
  });

  it('lowers A by mutation and gene flow, raises it by selection against aa', () => {
    const p = (/** @type {Partial<import('./engine.js').Factors>} */ f) =>
      alleleA(simulate(start, only(f), 30, rng(1))[30]);
    expect(p({ mutation: true })).toBeLessThan(0.3);
    expect(p({ flow: true })).toBeLessThan(0.1);
    expect(p({ selection: true })).toBeGreaterThan(0.85);
  });

  it('changes only the genotypes under inbreeding', () => {
    const h = simulate(start, only({ inbreeding: true }), 5, rng(1));
    expect(alleleA(h[5])).toBeCloseTo(0.5);
    expect(h[5].Aa).toBeCloseTo(0.5 / 32);
  });

  it('keeps frequencies valid when factors combine', () => {
    const all = only({ mutation: true, flow: true, selection: true, inbreeding: true });
    const bad = [];
    let g = start;
    for (let i = 0; i < 40; i++) {
      g = step(g, all, rng(i));
      if (Math.abs(sum(g) - 1) > 1e-9 || Math.min(g.AA, g.Aa, g.aa) < -1e-12) bad.push(i);
    }
    expect(bad).toEqual([]);
  });

  it('makes small populations drift differently from run to run', () => {
    const ends = [1, 2, 3, 4, 5].map((s) =>
      alleleA(simulate(start, only({ drift: true }), 30, rng(s))[30]),
    );
    expect(new Set(ends.map((v) => v.toFixed(2))).size).toBeGreaterThan(1);
  });

  it('explains the run', () => {
    expect(explain(simulate(start, noFactors(), 30, rng(1)), noFactors())).toContain(
      'không tiến hoá',
    );
    const f = only({ inbreeding: true });
    expect(explain(simulate(start, f, 30, rng(1)), f)).toContain('không đổi tần số allele');
    const s = only({ selection: true });
    expect(explain(simulate(start, s, 30, rng(1)), s)).toContain('tăng');
  });
});
