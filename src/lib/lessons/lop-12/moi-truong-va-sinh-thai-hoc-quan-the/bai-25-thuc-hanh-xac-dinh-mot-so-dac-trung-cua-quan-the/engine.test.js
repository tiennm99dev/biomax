import { describe, expect, it } from 'vitest';
import { rng } from '#lib/core/drill.js';
import {
  FIELD_AREA,
  errorPercent,
  makeField,
  makePond,
  markRecapture,
  quadratEstimate,
  sampleIndices,
  trial,
} from './engine.js';

const SEEDS = [1, 2, 3, 7, 19, 42, 99, 123];

describe('mark and recapture', () => {
  it('computes M·C/R and refuses R = 0', () => {
    expect(markRecapture(50, 40, 10)).toBe(200);
    expect(markRecapture(60, 50, 12)).toBe(250);
    expect(markRecapture(50, 40, 0)).toBeNull();
    expect(errorPercent(220, 200)).toBeCloseTo(10, 9);
  });

  it('draws distinct indices in range', () => {
    const rand = rng(5);
    const bad = [0, 1, 10, 100].filter((k) => {
      const s = sampleIndices(rand, 100, k);
      return s.length !== k || new Set(s).size !== k || s.some((i) => i < 0 || i >= 100);
    });
    expect(bad).toEqual([]);
  });

  it('builds ponds of 150 to 350 fish', () => {
    const bad = SEEDS.map(makePond).filter(
      (p) => p.size < 150 || p.size > 350 || p.spots.length !== p.size,
    );
    expect(bad).toEqual([]);
  });

  it('lands near the true size on average', () => {
    const bad = SEEDS.filter((seed) => {
      const pond = makePond(seed);
      /** @type {number[]} */
      const ests = [];
      for (let i = 0; i < 40; i++) {
        const t = trial(pond.rand, pond.size, 80, 80);
        if (t.r !== t.caught.filter((j) => t.marked.has(j)).length) return true;
        if (t.estimate !== null) ests.push(t.estimate);
      }
      const mean = ests.reduce((s, v) => s + v, 0) / ests.length;
      return errorPercent(mean, pond.size) > 20;
    });
    expect(bad).toEqual([]);
  });
});

describe('quadrats', () => {
  it('counts every plant in exactly one square', () => {
    const bad = SEEDS.map(makeField).filter(
      (f) =>
        f.counts.length !== FIELD_AREA ||
        f.counts.reduce((s, v) => s + v, 0) !== f.plants.length ||
        f.plants.length < 100,
    );
    expect(bad).toEqual([]);
  });

  it('estimates N = (A/a)·mean and gives the exact size when every square is counted', () => {
    const counts = Array.from({ length: FIELD_AREA }, (_, i) => i % 5);
    expect(quadratEstimate(counts, [])).toBeNull();
    expect(quadratEstimate(counts, [1, 2, 3])).toEqual({ mean: 2, size: 200, density: 2 });
    const field = makeField(7);
    const all = quadratEstimate(
      field.counts,
      field.counts.map((_, i) => i),
    );
    expect(all?.size).toBeCloseTo(field.plants.length, 9);
  });
});
