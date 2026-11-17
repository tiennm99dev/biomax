import { describe, expect, it } from 'vitest';
import { BALANCED, DAYS, diagnose, simulate } from './engine.js';

/** @param {Partial<import('./engine.js').Design>} change */
const run = (change) => {
  const design = { ...BALANCED, ...change };
  const days = simulate(design);
  return { days, end: days[DAYS], ...diagnose(design, days) };
};

describe('closed aquarium model', () => {
  it('keeps the balanced design stable for the whole month', () => {
    const tank = run({});
    expect(tank.days).toHaveLength(DAYS + 1);
    expect(tank.balanced).toBe(true);
    expect(tank.end.fish).toBe(BALANCED.fish);
  });

  it('does not call a fishless tank unbalanced', () => {
    expect(run({ fish: 0 }).balanced).toBe(true);
  });

  it('runs short of oxygen without plants or light', () => {
    for (const change of [{ plants: 0 }, { light: 2 }]) {
      const tank = run(change);
      expect(tank.end.fish).toBeLessThan(BALANCED.fish);
      expect(tank.problems.some((p) => p.includes('không đủ cây thuỷ sinh'))).toBe(true);
    }
  });

  it('poisons the fish with ammonia without nitrifying bacteria', () => {
    const tank = run({ microbes: false });
    expect(Math.max(...tank.days.map((d) => d.ammonia))).toBeGreaterThan(4);
    expect(tank.problems.some((p) => p.includes('vi khuẩn nitrate hoá'))).toBe(true);
  });

  it('chokes an overcrowded tank', () => {
    const tank = run({ fish: 10 });
    expect(tank.end.fish).toBeLessThan(10);
    expect(tank.balanced).toBe(false);
  });

  it('turns green with too much light, food or too few plants', () => {
    for (const change of [
      { plants: 0 },
      { feeding: /** @type {const} */ ('nhieu') },
      { plants: 1, light: 14 },
    ]) {
      expect(run(change).problems.some((p) => p.includes('Tảo phát triển mạnh'))).toBe(true);
    }
  });

  it('keeps every level between 0 and 10', () => {
    const bad = [];
    for (const fish of [0, 6, 12]) {
      for (const plants of [0, 4, 8]) {
        for (const d of simulate({ ...BALANCED, fish, plants, light: 14 })) {
          for (const v of [d.oxygen, d.ammonia, d.nitrate, d.algae]) {
            if (v < 0 || v > 10) bad.push({ fish, plants, day: d.day });
          }
        }
      }
    }
    expect(bad).toEqual([]);
  });
});
