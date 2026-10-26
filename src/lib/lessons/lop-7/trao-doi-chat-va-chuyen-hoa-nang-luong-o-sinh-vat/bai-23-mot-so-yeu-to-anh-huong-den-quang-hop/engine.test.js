import { describe, expect, it } from 'vitest';
import {
  AIR_CO2,
  co2Factor,
  curve,
  lightFactor,
  limiting,
  rate,
  tempFactor,
  waterFactor,
} from './engine.js';

/** @type {import('./engine.js').Conditions} */
const BEST = { light: 80, co2: 0.18, temp: 30, water: true, plant: 'ua-sang' };

describe('photosynthesis rate model', () => {
  it('reaches 100 % only when every factor is at its best', () => {
    expect(rate(BEST)).toBe(100);
    expect(limiting(BEST)).toBeNull();
  });

  it('rises with light to a limit, and shade plants saturate early', () => {
    expect(lightFactor(0, 'ua-sang')).toBe(0);
    expect(lightFactor(30, 'ua-sang')).toBeLessThan(lightFactor(60, 'ua-sang'));
    expect(lightFactor(70, 'ua-sang')).toBe(1);
    expect(lightFactor(100, 'ua-sang')).toBe(1);
    expect(lightFactor(25, 'ua-bong')).toBe(1);
    expect(lightFactor(25, 'ua-bong')).toBeGreaterThan(lightFactor(25, 'ua-sang'));
    expect(lightFactor(100, 'ua-bong')).toBeCloseTo(0.6);
  });

  it('rises with carbon dioxide and poisons the plant above about 0,2 %', () => {
    expect(co2Factor(0)).toBe(0);
    expect(co2Factor(AIR_CO2)).toBeGreaterThan(0);
    expect(co2Factor(AIR_CO2)).toBeLessThan(co2Factor(0.1));
    expect(co2Factor(0.2)).toBe(1);
    expect(co2Factor(0.25)).toBeLessThan(1);
    expect(co2Factor(0.3)).toBe(0);
  });

  it('works best at 25-35 °C and falls below 10 °C and above 40 °C', () => {
    expect(tempFactor(25)).toBe(1);
    expect(tempFactor(35)).toBe(1);
    expect(tempFactor(10)).toBeLessThanOrEqual(0.25);
    expect(tempFactor(40)).toBeLessThanOrEqual(0.5);
    expect(tempFactor(0)).toBe(0);
    expect(tempFactor(50)).toBe(0);
  });

  it('falls when water is short', () => {
    expect(waterFactor(false)).toBeLessThan(waterFactor(true));
    expect(rate({ ...BEST, water: false })).toBe(40);
    expect(limiting({ ...BEST, water: false })?.id).toBe('water');
  });

  it('names the factor that holds the rate back', () => {
    expect(limiting({ ...BEST, light: 10 })?.id).toBe('light');
    expect(limiting({ ...BEST, plant: 'ua-bong', light: 100 })?.text).toContain('ưa bóng');
    expect(limiting({ ...BEST, co2: AIR_CO2 })?.id).toBe('co2');
    expect(limiting({ ...BEST, co2: 0.26 })?.text).toContain('ngộ độc');
    expect(limiting({ ...BEST, temp: 42 })?.text).toContain('cao');
    expect(limiting({ ...BEST, temp: 8 })?.text).toContain('thấp');
  });

  it('draws a curve over the whole range of a factor', () => {
    const pts = curve(BEST, 'temp', 50);
    expect(pts).toHaveLength(51);
    expect(pts[0]).toEqual({ x: 0, y: 0 });
    expect(pts[30].y).toBe(100);
    expect(Math.max(...curve(BEST, 'co2').map((p) => p.y))).toBe(100);
  });
});
