import { describe, expect, it } from 'vitest';
import {
  SURFACE_BINS,
  SURFACE_CARDS,
  WATER_IN,
  cellOxygen,
  describeGill,
  describeTrachea,
  exchange,
  uptake,
} from './engine.js';

describe('gill lamella', () => {
  it('never lets same-direction blood pass half the O2', () => {
    const bad = [2, 4, 8, 12, 40].filter((n) => exchange('cung', n).bloodOut > WATER_IN / 2 + 1e-9);
    expect(bad).toEqual([]);
  });

  it('takes about 80 % with counter-current flow and more with longer lamellae', () => {
    expect(uptake('nguoc', 8)).toBeGreaterThanOrEqual(78);
    expect(uptake('nguoc', 8)).toBeLessThanOrEqual(84);
    expect(uptake('nguoc', 12)).toBeGreaterThan(uptake('nguoc', 6));
  });

  it('conserves O2: what the water loses the blood gains', () => {
    const bad = [3, 8, 12].flatMap((n) =>
      /** @type {const} */ (['nguoc', 'cung']).filter((f) => {
        const g = exchange(f, n);
        return Math.abs(WATER_IN - g.waterOut - g.bloodOut) > 1e-6;
      }),
    );
    expect(bad).toEqual([]);
  });

  it('keeps blood below the water it meets in counter-current flow', () => {
    const g = exchange('nguoc', 10);
    const bad = g.blood.filter((b, i) => b > (i === 0 ? WATER_IN : g.water[i - 1]));
    expect(bad).toEqual([]);
    expect(describeGill('nguoc', 10).tone).toBe('ok');
    expect(describeGill('cung', 10).tone).toBe('warn');
  });
});

describe('insect tracheae', () => {
  it('supplies most O2 with open spiracles and pumping', () => {
    expect(cellOxygen({ open: true, pump: true })).toBeGreaterThan(
      cellOxygen({ open: true, pump: false }),
    );
    expect(cellOxygen({ open: false, pump: true })).toBeLessThan(
      cellOxygen({ open: true, pump: false }),
    );
    expect(describeTrachea({ open: false, pump: false }).tone).toBe('warn');
  });

  it('puts every card in an existing bin', () => {
    const ids = SURFACE_BINS.map((b) => b.id);
    expect(SURFACE_CARDS.filter((c) => !ids.includes(c.bin))).toEqual([]);
  });
});
