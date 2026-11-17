import { describe, expect, it } from 'vitest';
import { K, MAX, afterDisaster, explain, nextYear, trendOf } from './engine.js';

/** @param {number} n @param {number} years */
function run(n, years) {
  const out = [n];
  for (let i = 0; i < years; i++) out.push(nextYear(out[out.length - 1]));
  return out;
}

describe('density-dependent regulation', () => {
  it('stays at the carrying capacity', () => {
    expect(nextYear(K)).toBe(K);
  });

  it('returns to K from below and from above without overshoot', () => {
    const bad = [50, 300, 700, 1400, 1800, MAX].filter((n0) => {
      const path = run(n0, 30);
      const monotone = path.every((v, i) =>
        i === 0 ? true : n0 < K ? v >= path[i - 1] && v <= K : v <= path[i - 1] && v >= K,
      );
      return !monotone || trendOf(path[path.length - 1]) !== 'can-bang';
    });
    expect(bad).toEqual([]);
  });

  it('cuts the size by a share after a disaster', () => {
    expect(afterDisaster(1000, 0.7)).toBe(300);
    expect(afterDisaster(0, 0.7)).toBe(0);
  });

  it('explains each trend', () => {
    expect(trendOf(990)).toBe('can-bang');
    expect(explain(300)).toContain('tăng dần về K');
    expect(explain(1600)).toContain('giảm dần về K');
    expect(explain(0)).toContain('diệt vong');
  });
});
