import { describe, expect, it } from 'vitest';
import { POPULATION, herdShare, simulate, spreads } from '../_shared/epidemic.js';
import { FACTORS, ROUTES, conditions, idleFactors, outbreak, runVerdict } from './engine.js';

describe('the SIR model', () => {
  it('keeps everyone in S, I, R or vaccinated on every day', () => {
    const run = simulate({ beta: 0.6, days: 5, vaccinated: 0.3 });
    const bad = run.s
      .map((s, d) => s + run.i[d] + run.r[d] + run.vaccinated)
      .filter((sum) => Math.abs(sum - POPULATION) > 1e-6);
    expect(bad).toEqual([]);
  });

  it('peaks and burns out when R0 is above 1, fades when it is below', () => {
    const big = simulate({ beta: 0.6, days: 5 });
    expect(big.r0).toBe(3);
    expect(big.total).toBeGreaterThan(POPULATION * 0.9);
    expect(big.peakDay).toBeGreaterThan(0);
    const small = simulate({ beta: 0.1, days: 5 });
    expect(small.peakDay).toBe(0);
    expect(small.total).toBeLessThan(30);
  });

  it('works out the herd immunity share and whether an outbreak grows', () => {
    expect(herdShare(4)).toBe(0.75);
    expect(herdShare(0.8)).toBe(0);
    expect(spreads(3, 0.5)).toBe(true);
    expect(spreads(3, 0.7)).toBe(false);
  });
});

describe('the routes and their favourable conditions', () => {
  it('grows into an outbreak only on the respiratory route with no condition on', () => {
    const growing = ROUTES.filter((r) => outbreak(r.id, []).r0 > 1).map((r) => r.id);
    expect(growing).toEqual(['ho-hap']);
  });

  it('turns every route into an outbreak once its own conditions are on', () => {
    const all = FACTORS.map((f) => f.id);
    const still = ROUTES.filter((r) => outbreak(r.id, all).r0 <= 1).map((r) => r.id);
    expect(still).toEqual([]);
  });

  it('applies a condition only to the routes it acts on', () => {
    expect(conditions('ho-hap', ['kim-tiem'])).toEqual(conditions('ho-hap', []));
    expect(conditions('mau', ['kim-tiem']).beta).toBeCloseTo(0.144, 6);
    expect(idleFactors('mau', ['giao-mua', 'kim-tiem', 'y-te']).map((f) => f.id)).toEqual([
      'giao-mua',
    ]);
    expect(conditions('tieu-hoa', ['y-te']).days).toBeCloseTo(9.8, 6);
  });

  it('spreads a skin disease through close contact and poor hygiene, not through needles', () => {
    expect(outbreak('da', []).r0).toBeLessThan(1);
    expect(outbreak('da', ['dong-nguoi']).r0).toBeGreaterThan(1);
    expect(idleFactors('da', ['kim-tiem', 'an-song', 've-sinh']).map((f) => f.id)).toEqual([
      'an-song',
      'kim-tiem',
    ]);
  });

  it('writes the reproduction number to two decimals', () => {
    expect(runVerdict(simulate({ beta: 0.204, days: 5 })).text).toContain('1,02 người: dịch');
  });

  it('says whether the run is an outbreak', () => {
    expect(runVerdict(outbreak('mau', [])).tone).toBe('ok');
    expect(runVerdict(outbreak('ho-hap', ['dong-nguoi'])).text).toContain('Đỉnh dịch');
  });
});
