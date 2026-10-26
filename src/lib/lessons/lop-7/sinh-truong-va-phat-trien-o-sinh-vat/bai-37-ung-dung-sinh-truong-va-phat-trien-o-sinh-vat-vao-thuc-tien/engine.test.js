import { describe, expect, it } from 'vitest';
import {
  MODELS,
  bestSettings,
  evaluate,
  growthCurve,
  sizeOn,
  tilapiaTemperature,
  verdict,
} from './engine.js';

describe('tilapia temperature', () => {
  it('follows the textbook limits', () => {
    expect(tilapiaTemperature(5).zone).toBe('chet');
    expect(tilapiaTemperature(43).zone).toBe('chet');
    expect(tilapiaTemperature(23).zone).toBe('tot');
    expect(tilapiaTemperature(37).zone).toBe('tot');
    expect(tilapiaTemperature(15).zone).toBe('kem');
    expect(tilapiaTemperature(40).zone).toBe('kem');
  });

  it('scores lower further from the best range', () => {
    expect(tilapiaTemperature(10).score).toBeLessThan(tilapiaTemperature(20).score);
    expect(tilapiaTemperature(41).score).toBeLessThan(tilapiaTemperature(38).score);
    expect(tilapiaTemperature(5.6).score).toBeCloseTo(0.15);
  });
});

describe('growth', () => {
  it('reaches most of the full size under the best conditions', () => {
    for (const id of /** @type {const} */ (['ca', 'cay'])) {
      const m = MODELS[id];
      expect(evaluate(id, bestSettings(id)).score).toBe(1);
      expect(sizeOn(m, 1, m.days)).toBeGreaterThan(0.95 * m.full);
      expect(sizeOn(m, 1, 0)).toBeCloseTo(m.start);
    }
  });

  it('grows less when a factor is wrong and names it', () => {
    const s = bestSettings('cay');
    s.levels.nuoc = 'thieu';
    const e = evaluate('cay', s);
    expect(e.score).toBe(0.25);
    expect(e.limiting.map((f) => f.name)).toEqual(['Nước']);
    const v = verdict('cay', s);
    expect(v.ok).toBe(false);
    expect(v.percent).toBeLessThan(50);
    expect(v.text).toContain('nước');
  });

  it('stops a fish that dies', () => {
    const s = { ...bestSettings('ca'), temperature: 44 };
    expect(evaluate('ca', s).dead).toBe(true);
    expect(verdict('ca', s).text).toContain('cá chết');
    expect(growthCurve(MODELS.ca, 0).every(([, v]) => v === MODELS.ca.start)).toBe(true);
  });

  it('samples the curve from day 0 to the last day', () => {
    const c = growthCurve(MODELS.cay, 1);
    expect(c[0][0]).toBe(0);
    expect(c[c.length - 1][0]).toBe(60);
    for (let i = 1; i < c.length; i++) expect(c[i][1]).toBeGreaterThan(c[i - 1][1]);
  });
});
