import { describe, expect, it } from 'vitest';
import { BIOCAPACITY, DEFAULT_HABITS, earths, footprint, parts, suggestions } from './engine.js';

/** @typedef {import('./engine.js').Habits} Habits */

/** @type {Habits} */
const HEAVY = {
  diet: 'nhieu-thit',
  waste: true,
  ride: 'o-to',
  km: 40,
  kwh: 400,
  goods: 'nhieu',
};
/** @type {Habits} */
const LIGHT = { diet: 'it-thit', waste: false, ride: 'xe-dap', km: 5, kwh: 50, goods: 'it' };

describe('ecological footprint', () => {
  it('adds the parts of the default habits', () => {
    expect(parts(DEFAULT_HABITS)).toEqual({
      food: 1,
      transport: 0.05,
      energy: 0.33,
      goods: 0.4,
      shared: 0.6,
    });
    expect(footprint(DEFAULT_HABITS)).toBe(2.38);
    expect(earths(2.38)).toBe(1.6);
  });

  it('puts heavy habits far above, and light ones within, one Earth', () => {
    expect(footprint(HEAVY)).toBe(4.16);
    expect(earths(footprint(HEAVY))).toBe(2.8);
    expect(footprint(LIGHT)).toBeLessThan(BIOCAPACITY);
  });

  it('suggests the biggest saving first and only real savings', () => {
    const s = suggestions(HEAVY);
    expect(s.length).toBe(5);
    const bad = s.filter((x, i) => x.saving <= 0 || (i > 0 && x.saving > s[i - 1].saving));
    expect(bad).toEqual([]);
    expect(s[0].text).toContain('thịt đỏ');
    expect(s[1].text).toContain('xe buýt');
    expect(suggestions(LIGHT)).toEqual([]);
  });

  it('suggests walking for a short trip', () => {
    expect(suggestions({ ...LIGHT, ride: 'xe-may', km: 4 })[0].text).toContain('xe đạp');
  });
});
