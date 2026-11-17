import { describe, expect, it } from 'vitest';
import {
  MORGAN,
  PUZZLES,
  checkMap,
  frequencyFrom,
  gametesOf,
  middleGene,
  orderOf,
} from './engine.js';

describe('gametes of a double heterozygote', () => {
  it('splits parental and recombinant gametes', () => {
    expect(gametesOf('cis', 20).map((g) => g.percent)).toEqual([40, 10, 10, 40]);
    expect(gametesOf('trans', 30).map((g) => g.percent)).toEqual([15, 35, 35, 15]);
    expect(gametesOf('cis', 0).map((g) => g.percent)).toEqual([50, 0, 0, 50]);
  });

  it('marks recombinant gametes', () => {
    expect(
      gametesOf('cis', 20)
        .filter((g) => g.recombinant)
        .map((g) => g.gamete),
    ).toEqual(['Ab', 'aB']);
    expect(
      gametesOf('trans', 20)
        .filter((g) => g.recombinant)
        .map((g) => g.gamete),
    ).toEqual(['AB', 'ab']);
  });
});

describe('recombination frequency', () => {
  it('reads Morgan and test-cross data', () => {
    const rec = MORGAN.filter((m) => m.recombinant).reduce((s, m) => s + m.percent, 0);
    expect(rec).toBe(17);
    expect(frequencyFrom(180, 1000)).toBe(18);
    expect(frequencyFrom(150, 1000)).toBe(15);
  });
});

describe('genetic maps', () => {
  it('has a solution for every puzzle that the start does not meet', () => {
    const solutions = {
      'ba-gene': { A: 0, B: 12, C: 20 },
      'gene-giua': { E: 0, D: 5, F: 20 },
      'bon-gene': { P: 0, Q: 7, R: 17, S: 20 },
    };
    for (const p of PUZZLES) {
      expect(
        checkMap(solutions[/** @type {keyof typeof solutions} */ (p.id)], p.pairs).solved,
      ).toBe(true);
      const start = Object.fromEntries(p.genes.map((g, i) => [g, p.start[i]]));
      expect(checkMap(start, p.pairs).solved).toBe(false);
      expect(Math.max(...Object.values(start))).toBeLessThanOrEqual(p.span);
    }
  });

  it('accepts a mirrored map and reads the order', () => {
    expect(checkMap({ A: 25, B: 13, C: 5 }, PUZZLES[0].pairs).solved).toBe(true);
    expect(orderOf({ A: 25, B: 13, C: 5 })).toEqual(['C', 'B', 'A']);
  });

  it('finds the middle gene', () => {
    expect(middleGene(PUZZLES[0].pairs)).toBe('B');
    expect(middleGene(PUZZLES[1].pairs)).toBe('D');
  });
});
