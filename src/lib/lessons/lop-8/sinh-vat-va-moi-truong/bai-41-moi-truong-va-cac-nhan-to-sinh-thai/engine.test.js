import { describe, expect, it } from 'vitest';
import { FARM_FISH, TILAPIA, activity, verdict, width, zoneOf } from './engine.js';
import { FACTOR_CARDS } from './factors.js';

describe('ecological limits', () => {
  it('places temperatures in the zones of the tilapia', () => {
    expect(zoneOf(TILAPIA, 4)).toBe('chet');
    expect(zoneOf(TILAPIA, 5)).toBe('chet');
    expect(zoneOf(TILAPIA, 12)).toBe('chong-chiu');
    expect(zoneOf(TILAPIA, 20)).toBe('thuan-loi');
    expect(zoneOf(TILAPIA, 30)).toBe('cuc-thuan');
    expect(zoneOf(TILAPIA, 38)).toBe('chong-chiu');
    expect(zoneOf(TILAPIA, 42)).toBe('chet');
    expect(width(TILAPIA)).toBe(37);
  });

  it('draws a hump that peaks at the optimum', () => {
    expect(activity(TILAPIA, 30)).toBe(1);
    expect(activity(TILAPIA, 5)).toBe(0);
    expect(activity(TILAPIA, 45)).toBe(0);
    expect(activity(TILAPIA, 20)).toBeGreaterThan(activity(TILAPIA, 10));
    expect(activity(TILAPIA, 35)).toBeGreaterThan(activity(TILAPIA, 40));
  });

  it('keeps every species ordered and judges a yearly range', () => {
    for (const s of [TILAPIA, ...FARM_FISH]) {
      expect(s.lower).toBeLessThan(s.favLow);
      expect(s.favLow).toBeLessThanOrEqual(s.optimum);
      expect(s.optimum).toBeLessThanOrEqual(s.favHigh);
      expect(s.favHigh).toBeLessThan(s.upper);
    }
    const [a, b, c] = FARM_FISH;
    // Water from 16 to 31 °C over the year.
    expect(verdict(a, 16, 31)).toBe('chong-chiu');
    expect(verdict(b, 16, 31)).toBe('chet');
    expect(verdict(c, 16, 31)).toBe('thuan-loi');
  });

  it('sorts every factor card into a known bin', () => {
    expect(FACTOR_CARDS.length).toBeGreaterThanOrEqual(8);
    for (const card of FACTOR_CARDS) expect(['vo-sinh', 'huu-sinh']).toContain(card.bin);
  });
});
