import { describe, expect, it } from 'vitest';
import { HIGH, KIDNEY, LOW, judge, kidney, mealRate, simulate } from './engine.js';

/** @param {import('./engine.js').Sample[]} run */
const peak = (run) => Math.max(...run.map((r) => r.g));
/** @param {import('./engine.js').Sample[]} run */
const trough = (run) => Math.min(...run.map((r) => r.g));

const healthy = { insulin: true, glucagon: true };

describe('blood glucose model', () => {
  it('absorbs the whole meal', () => {
    let sum = 0;
    for (let s = 0; s < 100; s++) sum += mealRate(s);
    expect(sum).toBeCloseTo(6, 1);
  });

  it('brings glucose back into range after a meal when insulin works', () => {
    const s = { start: 5, event: /** @type {const} */ ('bua-an'), ...healthy };
    const run = simulate(s);
    expect(peak(run)).toBeGreaterThan(HIGH);
    expect(peak(run)).toBeLessThan(8);
    expect(run[run.length - 1].g).toBeLessThan(HIGH);
    expect(judge(run, s).tone).toBe('ok');
  });

  it('leaves glucose high and in the urine without insulin', () => {
    const s = { start: 5, event: /** @type {const} */ ('bua-an'), insulin: false, glucagon: true };
    const run = simulate(s);
    expect(peak(run)).toBeGreaterThan(KIDNEY);
    expect(run.some((r) => r.urine > 0)).toBe(true);
    expect(judge(run, s).tone).toBe('warn');
  });

  it('keeps glucose above the low limit during exercise only with glucagon', () => {
    const ok = simulate({ start: 5, event: 'van-dong', ...healthy });
    const without = {
      start: 5,
      event: /** @type {const} */ ('van-dong'),
      insulin: true,
      glucagon: false,
    };
    expect(trough(ok)).toBeGreaterThan(LOW);
    expect(trough(simulate(without))).toBeLessThan(LOW);
    expect(judge(simulate(without), without).tone).toBe('warn');
  });

  it('raises a low start with glucagon and lowers a high start with insulin', () => {
    const low = simulate({ start: 2.5, event: 'khong', ...healthy });
    const high = simulate({ start: 12, event: 'khong', ...healthy });
    expect(low[60].g).toBeGreaterThan(LOW);
    expect(high[60].g).toBeLessThan(HIGH);
  });
});

describe('water balance', () => {
  it('makes less urine when blood osmotic pressure rises', () => {
    expect(kidney('an-man', true).urine).toBeLessThan(kidney('binh-thuong', true).urine);
    expect(kidney('uong-nhieu', true).urine).toBeGreaterThan(kidney('binh-thuong', true).urine);
    expect(kidney('mo-hoi', true)).toMatchObject({ pressure: 'tăng', adh: 'nhiều', thirst: true });
  });

  it('reabsorbs about 99 percent of the filtrate normally', () => {
    const k = kidney('binh-thuong', true);
    expect(k.reabsorbed).toBeCloseTo(178.5);
    expect(k.percent).toBeCloseTo(99.17, 1);
    expect(kidney('binh-thuong', false).urine).toBeGreaterThan(10);
    expect(kidney('uong-nhieu', false)).toMatchObject({ pressure: 'tăng', thirst: true });
  });
});
