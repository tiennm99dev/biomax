import { describe, expect, it } from 'vitest';
import {
  FOODS,
  GROUPS,
  STAGES,
  START_PLAN,
  advice,
  assess,
  energy,
  missingGroups,
  nutrientsAfter,
  shares,
  totals,
} from './engine.js';

describe('meal planner', () => {
  it('uses 4 kcal per gram of protein and carbohydrate and 9 per gram of lipid', () => {
    expect(energy({ protein: 20, lipid: 15, glucid: 80 })).toBe(535);
    expect(energy({ protein: 8, lipid: 9, glucid: 12 })).toBe(161);
  });

  it('adds up servings', () => {
    const t = totals({ 'banh-mi': 1 });
    expect(t.glucid).toBeCloseTo(42.08);
    expect(t.kcal).toBeCloseTo(199.36);
    expect(totals({}).kcal).toBe(0);
  });

  it('keeps the energy shares at 100%', () => {
    const s = shares({ com: 2, trung: 1, rau: 1 });
    expect(s.protein + s.lipid + s.glucid).toBeCloseTo(100);
  });

  it('flags a short starting plan and accepts a balanced day', () => {
    const start = assess(START_PLAN, 2200);
    expect(start.energy).toBe('thieu');
    expect(start.missing).toContain('rau-qua');
    const day = {
      com: 6,
      'banh-mi': 1,
      'thit-lon': 1,
      ca: 1,
      trung: 1,
      sua: 1,
      'dau-an': 3,
      rau: 2,
      chuoi: 1,
    };
    expect(assess(day, 2200).ok).toBe(true);
    expect(assess(day, 1600).energy).toBe('thua');
    expect(advice(day, 2200).at(-1)).toContain('hợp lí');
  });

  it('notices too much fat and missing groups', () => {
    const oily = { com: 2, 'dau-an': 6, rau: 1, trung: 1 };
    expect(assess(oily, 2200).unbalanced).toContain('lipid');
    expect(missingGroups({ com: 1 })).toEqual(['dam', 'beo', 'rau-qua']);
    expect(advice({}, 2200)[0]).toContain('thêm thức ăn');
  });

  it('gives every food a known group and positive serving', () => {
    for (const f of FOODS) {
      expect(Object.keys(GROUPS)).toContain(f.group);
      expect(f.grams).toBeGreaterThan(0);
    }
  });
});

describe('digestive path', () => {
  it('goes from mouth to anus with absorption mainly in the small intestine', () => {
    expect(STAGES[0].id).toBe('mieng');
    expect(STAGES.at(-1)?.id).toBe('hau-mon');
    expect(STAGES.find((s) => s.id === 'ruot-non')?.absorption).toContain('hầu hết');
  });

  it('turns nutrients into simple substances only from the small intestine on', () => {
    expect(nutrientsAfter(0)['Tinh bột']).toContain('maltose');
    expect(nutrientsAfter(2).Protein).toContain('chuỗi ngắn');
    expect(nutrientsAfter(2).Lipid).toContain('chưa');
    expect(nutrientsAfter(3)).toEqual({
      'Tinh bột': 'đường đơn (glucose)',
      Protein: 'amino acid',
      Lipid: 'acid béo và glycerol',
    });
  });
});
