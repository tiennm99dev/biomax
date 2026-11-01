import { describe, expect, it } from 'vitest';
import { rng } from '#lib/core/drill.js';
import {
  MEALS,
  POPULATION,
  breed,
  darkShare,
  expectedShare,
  firstGeneration,
  hunt,
  trendText,
} from './engine.js';

/**
 * Runs `gens` generations of predation and breeding.
 * @param {import('./engine.js').Bark} bark
 * @param {number} dark
 * @param {number} gens
 * @param {number} seed
 */
function run(bark, dark, gens, seed) {
  const rand = rng(seed);
  let moths = firstGeneration(dark, POPULATION, rand);
  let id = POPULATION;
  for (let g = 0; g < gens; g++) {
    const eaten = new Set(hunt(moths, bark, MEALS, rand));
    moths = breed(
      moths.filter((m) => !eaten.has(m.id)),
      POPULATION,
      rand,
      id,
    );
    id += POPULATION;
  }
  return darkShare(moths);
}

describe('the moth population', () => {
  it('starts with the asked share of dark moths, placed on the board', () => {
    const moths = firstGeneration(3, 30, rng(1));
    expect(moths).toHaveLength(30);
    expect(darkShare(moths)).toBeCloseTo(0.1);
    const off = moths.filter((m) => m.x < 0 || m.x > 100 || m.y < 0 || m.y > 100);
    expect(off).toEqual([]);
    expect(darkShare([])).toBe(0);
  });

  it('eats the asked number of distinct moths', () => {
    const moths = firstGeneration(10, 30, rng(2));
    const eaten = hunt(moths, 'sam', 15, rng(3));
    expect(new Set(eaten).size).toBe(15);
    expect(hunt(moths.slice(0, 4), 'sam', 15, rng(3))).toHaveLength(4);
  });

  it('breeds offspring only with the survivors’ colours', () => {
    const light = firstGeneration(0, 5, rng(4));
    expect(darkShare(breed(light, 30, rng(5), 100))).toBe(0);
    expect(breed([], 30, rng(5), 100)).toEqual([]);
  });

  it('makes dark moths common on dark bark and rare on light bark', () => {
    const onDark = [11, 12, 13, 14, 15].map((s) => run('sam', 3, 10, s));
    const onLight = [11, 12, 13, 14, 15].map((s) => run('sang', 27, 10, s));
    const avg = (/** @type {number[]} */ xs) => xs.reduce((a, b) => a + b, 0) / xs.length;
    expect(avg(onDark)).toBeGreaterThan(0.6);
    expect(avg(onLight)).toBeLessThan(0.4);
  });

  it('estimates the change without chance', () => {
    expect(expectedShare(0.1, 'sam', 0.5)).toBeGreaterThan(0.1);
    expect(expectedShare(0.9, 'sang', 0.5)).toBeLessThan(0.9);
    expect(expectedShare(0, 'sam', 0.5)).toBe(0);
  });

  it('describes the trend', () => {
    expect(trendText([0.1], 'sam')).toContain('10%');
    expect(trendText([0.1, 0.5], 'sam')).toContain('tăng từ 10% lên 50%');
    expect(trendText([0.6, 0.2], 'sang')).toContain('giảm từ 60% xuống 20%');
    expect(trendText([0.1, 1], 'sam')).toContain('màu sáng đã bị đào thải hết');
  });
});
