import { describe, expect, it } from 'vitest';
import {
  MAX_DAYS,
  OBJECTIVES,
  RECIPE,
  fieldOf,
  ferment,
  lacticRate,
  magnification,
  spoilRate,
  verdictOf,
} from './engine.js';

/**
 * The verdict for a brine on a day.
 * @param {Partial<import('./engine.js').Brine>} change @param {number} day
 */
const verdict = (change, day) => {
  const brine = { ...RECIPE, ...change };
  return verdictOf(brine, ferment(brine)[day]);
};

describe('the pickling model', () => {
  it('turns out well with the recipe after two or three days', () => {
    expect(verdict({}, 2)).toBe('dat');
    expect(verdict({}, 3)).toBe('dat');
  });

  it('starts as unfermented', () => {
    expect(verdict({}, 0)).toBe('chua-len-men');
  });

  it('spoils with no salt', () => {
    expect(verdict({ salt: 0 }, 3)).toBe('hong');
  });

  it('spoils when the vegetables are not pressed under the brine', () => {
    expect(verdict({ pressed: false }, 3)).toBe('hong');
  });

  it('stays salty and unfermented in very strong brine', () => {
    expect(verdict({ salt: 15 }, 7)).toBe('man');
  });

  it('ferments slowly in the cold', () => {
    expect(verdict({ temp: 10 }, 2)).toBe('chua-len-men');
    expect(lacticRate({ ...RECIPE, temp: 10 })).toBeLessThan(lacticRate(RECIPE));
  });

  it('makes less acid without sugar', () => {
    const last = (/** @type {boolean} */ sugar) => ferment({ ...RECIPE, sugar })[2].acid;
    expect(last(false)).toBeLessThan(last(true));
  });

  it('gets too sour if left a whole week', () => {
    expect(verdict({}, MAX_DAYS)).toBe('qua-chua');
  });

  it('lets pressing and salt hold spoilage back', () => {
    expect(spoilRate(RECIPE)).toBeLessThan(spoilRate({ ...RECIPE, pressed: false }));
    expect(spoilRate(RECIPE)).toBeLessThan(spoilRate({ ...RECIPE, salt: 1 }));
  });

  it('never makes pH rise or leave the range of the model', () => {
    const bad = [];
    for (const salt of [0, 5, 10, 15]) {
      for (const temp of [5, 28, 48]) {
        const days = ferment({ salt, temp, pressed: true, sugar: true });
        for (let i = 1; i < days.length; i++) {
          if (days[i].ph > days[i - 1].ph || days[i].ph < 3.5) bad.push(`${salt} ${temp} ${i}`);
        }
      }
    }
    expect(bad).toEqual([]);
  });
});

describe('the microscope', () => {
  it('multiplies eyepiece and objective', () => {
    expect(magnification(10, 40)).toBe(400);
    expect(OBJECTIVES.map((o) => magnification(10, o.times))).toEqual([100, 400, 1000]);
  });

  it('draws the same field for a seed, with rods in chains', () => {
    expect(fieldOf(3)).toEqual(fieldOf(3));
    expect(fieldOf(3).length).toBeGreaterThan(14);
  });
});
