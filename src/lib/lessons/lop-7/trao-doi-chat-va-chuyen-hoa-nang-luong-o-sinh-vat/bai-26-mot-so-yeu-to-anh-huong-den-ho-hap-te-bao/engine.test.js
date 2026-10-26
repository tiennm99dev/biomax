import { describe, expect, it } from 'vitest';
import {
  AIR_CO2,
  AIR_O2,
  advice,
  co2Factor,
  damage,
  durationText,
  o2Factor,
  rate,
  storageDays,
  tempFactor,
  waterFactor,
} from './engine.js';

/** @type {import('./engine.js').Store} */
const GRAIN = { produce: 'hat', temp: 30, water: 14, o2: AIR_O2, co2: AIR_CO2 };
/** @type {import('./engine.js').Store} */
const FRUIT = { produce: 'qua', temp: 30, water: 14, o2: AIR_O2, co2: AIR_CO2 };

describe('storehouse respiration model', () => {
  it('respires fastest near 35 °C and slower when cold or too hot', () => {
    expect(tempFactor(35)).toBe(1);
    expect(tempFactor(5)).toBeCloseTo(0.125);
    expect(tempFactor(25)).toBeLessThan(tempFactor(35));
    expect(tempFactor(45)).toBeLessThan(tempFactor(35));
    expect(tempFactor(50)).toBe(0);
  });

  it('respires more when the cells hold more water', () => {
    expect(waterFactor('hat', 13)).toBeLessThan(waterFactor('hat', 16));
    expect(waterFactor('hat', 25)).toBe(1);
    expect(waterFactor('qua', 10)).toBe(1);
  });

  it('slows below 5 % oxygen and is inhibited by 3-5 % carbon dioxide', () => {
    expect(o2Factor(AIR_O2)).toBe(1);
    expect(o2Factor(5)).toBe(1);
    expect(o2Factor(2)).toBeLessThan(1);
    expect(co2Factor(AIR_CO2)).toBe(1);
    expect(co2Factor(3)).toBeLessThan(co2Factor(AIR_CO2));
    expect(co2Factor(5)).toBeLessThan(co2Factor(3));
    expect(co2Factor(10)).toBeCloseTo(0.2);
  });

  it('keeps dry grain about a year and fresh fruit a few days in a warm room', () => {
    expect(storageDays(GRAIN)).toBeGreaterThan(300);
    expect(storageDays(FRUIT)).toBe(5);
    expect(storageDays({ ...FRUIT, temp: 5 })).toBeGreaterThan(storageDays(FRUIT) * 4);
    expect(storageDays({ ...FRUIT, temp: 5, co2: 5 })).toBeGreaterThan(
      storageDays({ ...FRUIT, temp: 5 }),
    );
  });

  it('spoils produce when respiration is stopped or mould can grow', () => {
    expect(damage({ ...FRUIT, temp: -2 })?.id).toBe('dong-da');
    expect(damage({ ...GRAIN, temp: -2 })).toBeNull();
    expect(damage({ ...FRUIT, o2: 0 })?.id).toBe('thieu-o2');
    expect(damage({ ...GRAIN, water: 22 })?.id).toBe('am-moc');
    expect(storageDays({ ...FRUIT, temp: -2 })).toBeLessThanOrEqual(2);
    expect(storageDays({ ...GRAIN, water: 22 })).toBeLessThanOrEqual(10);
  });

  it('reports the rate and gives advice', () => {
    expect(rate({ ...FRUIT, temp: 35 })).toBe(100);
    expect(advice(FRUIT)).toContain('nhiệt độ phòng');
    expect(advice({ ...FRUIT, temp: 4 })).toContain('bảo quản lạnh');
    expect(advice({ ...GRAIN, water: 13 })).toContain('bảo quản khô');
    expect(advice({ ...FRUIT, co2: 8 })).toContain('CO₂');
    expect(durationText(5)).toBe('khoảng 5 ngày');
    expect(durationText(360)).toBe('khoảng 12 tháng');
  });
});
