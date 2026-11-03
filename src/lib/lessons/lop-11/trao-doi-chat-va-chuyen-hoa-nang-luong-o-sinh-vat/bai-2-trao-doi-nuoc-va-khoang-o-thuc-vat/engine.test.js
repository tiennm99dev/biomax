import { describe, expect, it } from 'vitest';
import { validateDiagram } from '#lib/domain/diagrams.js';
import {
  ELEMENT_CARDS,
  NOTHING_SEEN,
  ROOT_DIAGRAM,
  START_WEATHER,
  describeBudget,
  lightOpening,
  rootSupply,
  updateSeen,
  waterBudget,
} from './engine.js';

describe('water budget', () => {
  it('starts balanced and with the stomata open in the light', () => {
    const b = waterBudget(START_WEATHER);
    expect(b.stress).toBe(0);
    expect(b.opening).toBeCloseTo(lightOpening(60));
    expect(describeBudget(START_WEATHER).tone).toBe('ok');
  });

  it('transpires more in stronger light and in drier air', () => {
    const base = waterBudget(START_WEATHER).transpired;
    expect(waterBudget({ ...START_WEATHER, light: 20 }).transpired).toBeLessThan(base);
    expect(waterBudget({ ...START_WEATHER, air: 90 }).transpired).toBeLessThan(base);
  });

  it('closes the stomata and wilts in dry soil', () => {
    const b = waterBudget({ light: 100, air: 30, soil: 10 });
    expect(b.opening).toBeLessThan(lightOpening(100));
    expect(b.wilted).toBe(true);
  });

  it('starves the roots in waterlogged soil', () => {
    expect(rootSupply(100)).toBeLessThan(rootSupply(70));
    const b = waterBudget({ light: 100, air: 40, soil: 100 });
    expect(b.waterlogged).toBe(true);
    expect(b.stress).toBeGreaterThan(0);
    expect(describeBudget({ light: 100, air: 40, soil: 100 }).text).toContain('úng');
  });

  it('never pulls more water up than the roots supply', () => {
    const over = [];
    for (const soil of [0, 20, 50, 80, 90, 100]) {
      for (const air of [30, 60, 100]) {
        const b = waterBudget({ light: 100, air, soil });
        if (b.xylem > rootSupply(soil) + 1e-9) over.push([soil, air]);
      }
    }
    expect(over).toEqual([]);
  });
});

describe('goals', () => {
  it('marks each situation once it was reached', () => {
    const dry = updateSeen(NOTHING_SEEN, { light: 100, air: 30, soil: 10 });
    expect(dry).toMatchObject({ dry: true, flooded: false });
    const flooded = updateSeen(NOTHING_SEEN, { light: 100, air: 40, soil: 100 });
    expect(flooded).toMatchObject({ dry: false, flooded: true });
    expect(updateSeen(NOTHING_SEEN, { light: 60, air: 95, soil: 60 }).humid).toBe(true);
  });
});

describe('reference data', () => {
  it('sorts the 17 essential elements into 9 macro and 8 micro', () => {
    expect(ELEMENT_CARDS).toHaveLength(17);
    expect(ELEMENT_CARDS.filter((c) => c.bin === 'da')).toHaveLength(9);
    expect(ELEMENT_CARDS.filter((c) => c.bin === 'vi')).toHaveLength(8);
  });

  it('draws a valid root diagram', () => {
    expect(validateDiagram(ROOT_DIAGRAM)).toEqual([]);
  });
});
