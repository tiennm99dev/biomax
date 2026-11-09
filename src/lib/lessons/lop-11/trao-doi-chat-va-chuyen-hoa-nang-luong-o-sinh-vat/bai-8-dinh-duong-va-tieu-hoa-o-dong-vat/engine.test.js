import { describe, expect, it } from 'vitest';
import {
  FORM_BINS,
  FORM_CARDS,
  HERB_NAMES,
  PARTS,
  mealEnergy,
  partById,
  progressNote,
} from './engine.js';

describe('digestive tract comparison', () => {
  it('describes every part for the carnivore and both herbivores', () => {
    const herbs = Object.keys(HERB_NAMES);
    const bad = PARTS.filter(
      (p) => !p.meat || !p.why || herbs.some((h) => !p.plant[/** @type {'tho'} */ (h)]),
    );
    expect(bad).toEqual([]);
  });

  it('finds parts by id and rejects unknown ones', () => {
    expect(partById('manh-trang').name).toBe('Manh tràng');
    expect(() => partById(/** @type {'rang'} */ ('gan'))).toThrow();
  });

  it('reports what is left to look at', () => {
    expect(progressNote(['rang']).text).toContain('dạ dày');
    expect(progressNote(PARTS.map((p) => p.id)).tone).toBe('ok');
  });
});

describe('meal energy', () => {
  it('uses 4,1 kcal/g for carbohydrate and protein, 9,3 kcal/g for lipid', () => {
    expect(mealEnergy({ carbohydrate: 50, protein: 20, lipid: 10 })).toBe(380);
    expect(mealEnergy({ lipid: 30 })).toBe(279);
    expect(mealEnergy({})).toBe(0);
  });
});

describe('forms of digestion', () => {
  it('puts every card in an existing bin', () => {
    const ids = FORM_BINS.map((b) => b.id);
    expect(FORM_CARDS.filter((c) => !ids.includes(c.bin))).toEqual([]);
  });
});
