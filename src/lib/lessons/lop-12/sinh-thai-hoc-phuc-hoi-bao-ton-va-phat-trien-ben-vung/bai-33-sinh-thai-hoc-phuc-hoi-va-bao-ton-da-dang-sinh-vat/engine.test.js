import { describe, expect, it } from 'vitest';
import { NATURAL, START, YEARS, planNotes, settings, speciesByYear, summary } from './engine.js';

/** @typedef {import('./engine.js').MeasureId} MeasureId */
/** @type {MeasureId[]} */
const BEST = ['trong-cay', 'dong-chay', 'cai-tao', 'tha-giong', 'bao-ve'];

describe('mangrove restoration model', () => {
  it('starts every plan from the same count and runs year by year', () => {
    expect(speciesByYear([])).toHaveLength(YEARS + 1);
    expect(speciesByYear(BEST)[0]).toBe(START);
    expect(speciesByYear(['bao-ve'])[0]).toBe(START);
  });

  it('keeps degrading when nothing is done', () => {
    const s = speciesByYear([]);
    expect(s[YEARS]).toBeLessThan(START);
  });

  it('brings the full plan close to, but not above, a natural mangrove', () => {
    const end = speciesByYear(BEST)[YEARS];
    expect(end).toBeGreaterThan(45);
    expect(settings(BEST).ceiling).toBeLessThanOrEqual(NATURAL);
  });

  it('needs the tide back for planting to pay off', () => {
    const plantOnly = speciesByYear(['trong-cay', 'bao-ve'])[YEARS];
    const withFlow = speciesByYear(['trong-cay', 'dong-chay', 'bao-ve'])[YEARS];
    expect(withFlow - plantOnly).toBeGreaterThan(10);
  });

  it('lowers the outcome with an alien tree or without protection', () => {
    const best = speciesByYear(BEST)[YEARS];
    /** @type {MeasureId[]} */
    const alien = [...BEST, 'ngoai-lai'];
    expect(speciesByYear(alien)[YEARS]).toBeLessThan(best);
    expect(speciesByYear(BEST.filter((m) => m !== 'bao-ve'))[YEARS]).toBeLessThan(best);
  });

  it('never rises or falls the wrong way over the years', () => {
    const plans = /** @type {MeasureId[][]} */ ([[], BEST, ['trong-cay'], ['ngoai-lai']]);
    const bad = [];
    for (const plan of plans) {
      const s = speciesByYear(plan);
      const up = s[YEARS] >= START;
      for (let t = 1; t <= YEARS; t++) {
        if (up ? s[t] < s[t - 1] : s[t] > s[t - 1]) bad.push(`${plan.join('+')} ${t}`);
      }
    }
    expect(bad).toEqual([]);
  });

  it('explains what is wrong with a plan', () => {
    expect(planNotes([])[0].tone).toBe('warn');
    expect(planNotes(['trong-cay', 'bao-ve'])[0].text).toContain('ngập triều');
    expect(planNotes(BEST)).toEqual([expect.objectContaining({ tone: 'ok' })]);
    expect(planNotes(['tha-giong', 'bao-ve'])[0].text).toContain('nơi sống');
    expect(summary(BEST)).toContain('tăng');
    expect(summary([])).toContain('giảm');
  });
});
