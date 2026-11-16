import { describe, expect, it } from 'vitest';
import { CROPS, SOILS, STAGES, doseVerdict, planFor, seasonNutrient } from './engine.js';

describe('the fertilizer calculator', () => {
  it('works out rice on alluvial soil by the formula', () => {
    const rice = CROPS[0];
    const alluvial = SOILS[0];
    expect(seasonNutrient(rice, alluvial, 'N')).toBe(100);
    expect(seasonNutrient(rice, alluvial, 'K')).toBe(50);
    const basal = planFor('lua', 'phu-sa', 'lot');
    expect(basal.find((r) => r.nutrient === 'N')?.now).toBe(30);
    expect(basal.find((r) => r.nutrient === 'N')?.mass).toBeCloseTo(65.22, 2);
  });

  it('splits every nutrient fully over the three dressings', () => {
    const bad = [];
    for (const n of ['N', 'P', 'K']) {
      const total = STAGES.reduce((s, st) => s + st.share[/** @type {'N'} */ (n)], 0);
      if (Math.abs(total - 1) > 1e-9) bad.push(n);
    }
    expect(bad).toEqual([]);
  });

  it('puts all the phosphorus in the basal dressing', () => {
    const late = planFor('ngo', 'bac-mau', 'thuc-2').find((r) => r.nutrient === 'P');
    expect(late?.now).toBe(0);
  });

  it('needs more fertilizer on poor or acid soil than on alluvial soil', () => {
    const bad = CROPS.filter((c) =>
      ['N', 'P', 'K'].some((n) => {
        const k = /** @type {'N'} */ (n);
        const rich = seasonNutrient(c, SOILS[0], k);
        return seasonNutrient(c, SOILS[1], k) <= rich || seasonNutrient(c, SOILS[2], k) <= rich;
      }),
    );
    expect(bad).toEqual([]);
  });
});

describe('the dose verdict', () => {
  it('accepts a dose near the right one and flags too little or too much', () => {
    expect(doseVerdict(100, 100).tone).toBe('ok');
    expect(doseVerdict(115, 100).tone).toBe('ok');
    expect(doseVerdict(70, 100).text).toContain('Thiếu');
    expect(doseVerdict(150, 100).text).toContain('Thừa');
    expect(doseVerdict(20, 0).tone).toBe('warn');
  });
});
