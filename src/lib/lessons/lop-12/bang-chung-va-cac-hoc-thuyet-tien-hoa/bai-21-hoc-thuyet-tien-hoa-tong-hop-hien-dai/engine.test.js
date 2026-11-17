import { describe, expect, it } from 'vitest';
import { rng } from '#lib/core/drill.js';
import {
  DONOR_P,
  GENERATIONS,
  REPEATS,
  drift,
  endText,
  factorNote,
  inbreed,
  migrate,
  mutate,
  select,
  trajectories,
} from './engine.js';

describe('single steps', () => {
  it('mutates and migrates', () => {
    expect(mutate(0.5, 0.02)).toBeCloseTo(0.49, 12);
    expect(migrate(0.6, 0.1, 0.2)).toBeCloseTo(0.56, 12);
  });

  it('selects against the recessive phenotype', () => {
    // p = 0,5; aa all removed: p' = 0,5 / 0,75 = 2/3
    expect(select(0.5, 1, 'lan')).toBeCloseTo(2 / 3, 12);
    expect(select(0.5, 0, 'lan')).toBe(0.5);
  });

  it('selects against the dominant phenotype much faster', () => {
    expect(select(0.5, 1, 'troi')).toBe(0);
    const a = trajectories('chon-loc', 0.5, 0.3, { against: 'troi' })[0].values;
    const q = trajectories('chon-loc', 0.5, 0.3, { against: 'lan' })[0].values;
    // both lines show the allele selected against
    expect(a[10]).toBeLessThan(q[10]);
    expect(a[GENERATIONS]).toBeLessThan(0.01);
    expect(q[GENERATIONS]).toBeGreaterThan(0.03);
  });

  it('halves heterozygotes under full selfing and keeps them under random mating', () => {
    expect(inbreed(0.5, 0.5, 1)).toBe(0.25);
    expect(inbreed(0.2, 0.5, 0)).toBe(0.5);
  });

  it('draws allele frequencies by chance', () => {
    const rand = rng(7);
    const values = Array.from({ length: 50 }, () => drift(0.5, 10, rand));
    expect(values.every((v) => v >= 0 && v <= 1 && Number.isInteger(v * 20))).toBe(true);
    expect(new Set(values).size).toBeGreaterThan(3);
  });
});

describe('runs over the generations', () => {
  it('moves towards the donor population under gene flow', () => {
    const v = trajectories('dong-gene', 0.8, 0.2)[0].values;
    expect(v).toHaveLength(GENERATIONS + 1);
    expect(Math.abs(v[GENERATIONS] - DONOR_P)).toBeLessThan(1e-3);
  });

  it('keeps allele frequencies but loses heterozygotes under selfing', () => {
    const [p, het] = trajectories('giao-phoi', 0.3, 1);
    expect(new Set(p.values).size).toBe(1);
    expect(het.values[0]).toBe(0.42);
    expect(het.values[3]).toBeCloseTo(0.0525, 9);
  });

  it('gives repeatable drift lines for a seed', () => {
    const a = trajectories('phieu-bat', 0.5, 10, { seed: 3 });
    const b = trajectories('phieu-bat', 0.5, 10, { seed: 3 });
    expect(a).toHaveLength(REPEATS);
    expect(a).toEqual(b);
    expect(factorNote('phieu-bat', a, 10)).toContain('vô hướng');
  });

  it('notes the slow change by mutation', () => {
    const lines = trajectories('dot-bien', 0.5, 0.02);
    expect(lines[0].values[GENERATIONS]).toBeCloseTo(0.5 * 0.98 ** GENERATIONS, 6);
    expect(factorNote('dot-bien', lines, 2)).toContain('rất chậm');
    expect(factorNote('dot-bien', lines, 0)).toContain('giữ nguyên');
  });
});

describe('end frequencies in the notes', () => {
  it('writes a frequency that only nears 0 or 1 as gần 0 or gần 1', () => {
    expect(endText(0)).toBe('0');
    expect(endText(0.001)).toBe('gần 0');
    expect(endText(0.999)).toBe('gần 1');
    expect(endText(1)).toBe('1');
    expect(endText(0.25)).toBe('0,25');
  });

  it('does not call a dominant allele lost while selection only shrinks it', () => {
    const lines = trajectories('chon-loc', 0.5, 0.3, { against: 'troi' });
    expect(lines[0].values[GENERATIONS]).toBeGreaterThan(0);
    expect(factorNote('chon-loc', lines, 30, 'troi')).toContain('giảm còn gần 0');
  });
});
