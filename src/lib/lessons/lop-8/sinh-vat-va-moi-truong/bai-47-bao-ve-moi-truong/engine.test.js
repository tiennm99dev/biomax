import { describe, expect, it } from 'vitest';
import { ACTIONS, biggestCo2, impact, treeYears } from './engine.js';

describe('green action estimates', () => {
  it('matches the stated basis of each action', () => {
    const byId = Object.fromEntries(ACTIONS.map((a) => [a.id, a]));
    expect(byId['tui-vai'].waste).toBeCloseTo(7 * 0.01, 10);
    expect(byId['binh-nuoc'].waste).toBeCloseTo(5 * 0.02, 10);
    expect(byId['xe-dap'].co2).toBeCloseTo(20 * 0.05, 10);
    expect(byId['tat-dien'].co2).toBeCloseTo(2 * 0.7, 10);
    expect(byId['trong-cay'].co2 * 52).toBeCloseTo(20, 10);
  });

  it('scales with people and time', () => {
    expect(impact([], 40, 52)).toEqual({ waste: 0, co2: 0 });
    const one = impact(['phan-loai', 'xe-dap'], 1, 1);
    expect(one.waste).toBeCloseTo(1, 10);
    expect(one.co2).toBeCloseTo(1, 10);
    const cls = impact(['xe-dap'], 40, 52);
    expect(cls.co2).toBeCloseTo(2080, 6);
    expect(treeYears(cls.co2)).toBeCloseTo(104, 6);
  });

  it('names the action that saves the most CO2', () => {
    expect(biggestCo2(['tui-vai'])).toBeNull();
    expect(biggestCo2(['xe-dap', 'tat-dien'])?.id).toBe('tat-dien');
  });
});

describe('climate cards', () => {
  it('puts every card in a known bin', async () => {
    const { CLIMATE_BINS, CLIMATE_CARDS } = await import('./engine.js');
    const bins = new Set(CLIMATE_BINS.map((b) => b.id));
    expect(CLIMATE_CARDS.every((c) => bins.has(c.bin))).toBe(true);
    expect(new Set(CLIMATE_CARDS.map((c) => c.id)).size).toBe(CLIMATE_CARDS.length);
  });
});
