import { describe, expect, it } from 'vitest';
import {
  DAYS,
  RATES,
  THRESHOLD,
  balance,
  daysAbove,
  densityText,
  peakFrom,
  simulate,
  step,
  verdict,
} from './engine.js';

const NONE = { release: 0, releaseDay: 10, spray: false, sprayDay: 60 };

describe('the pest and natural enemy model', () => {
  it('lets the pest grow to the carrying capacity without enemies', () => {
    const run = simulate(NONE);
    expect(run.pest).toHaveLength(DAYS + 1);
    expect(run.pest[DAYS]).toBeCloseTo(RATES.K, 0);
    expect(run.enemy.every((e) => e === 0)).toBe(true);
    expect(daysAbove(run.pest)).toBeGreaterThan(100);
  });

  it('settles at the balance where neither density changes', () => {
    const { pest, enemy } = balance();
    const { r, K, a, b, m, q } = RATES;
    expect(pest).toBeCloseTo((m + q * enemy) / (a * b), 6);
    expect(enemy).toBeCloseTo((r * (1 - pest / K)) / a, 6);
    expect(pest).toBeLessThan(THRESHOLD);
    const [p, e] = step(pest, enemy);
    expect(p).toBeCloseTo(pest, 9);
    expect(e).toBeCloseTo(enemy, 9);
  });

  it('keeps the pest under the threshold after an early release', () => {
    const plan = { ...NONE, release: 5 };
    const run = simulate(plan);
    expect(daysAbove(run.pest)).toBe(0);
    expect(run.pest[DAYS]).toBeGreaterThan(0);
    expect(verdict(plan, run).tone).toBe('ok');
    expect(verdict(plan, run).text).toContain('khống chế sinh học');
  });

  it('lets the pest pass the threshold when enemies come late', () => {
    const plan = { ...NONE, release: 5, releaseDay: 30 };
    const run = simulate(plan);
    expect(daysAbove(run.pest)).toBeGreaterThan(0);
    expect(verdict(plan, run).text).toContain('vẫn có ngày vượt ngưỡng');
  });

  it('shows the pest bouncing back after a spray that kills the enemies too', () => {
    const plan = { release: 5, releaseDay: 10, spray: true, sprayDay: 60 };
    const run = simulate(plan);
    expect(run.pest[60]).toBeLessThan(run.pest[59]);
    expect(peakFrom(run.pest, 61)).toBeGreaterThan(THRESHOLD);
    expect(verdict(plan, run).text).toContain('bùng phát trở lại');
    const alone = { ...NONE, spray: true, sprayDay: 50 };
    expect(verdict(alone, simulate(alone)).text).toContain('lại phải phun thuốc');
  });

  it('writes densities with a decimal comma', () => {
    expect(densityText(13.64)).toBe('14 con/m²');
    expect(densityText(2.46)).toBe('2,5 con/m²');
  });
});
