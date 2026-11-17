import { describe, expect, it } from 'vitest';
import {
  PRIMULA,
  RICE,
  bestAt,
  normRange,
  seenColors,
  seenRange,
  varietyOf,
  yieldText,
} from './engine.js';

describe('rice reaction norms', () => {
  it('gives each variety its range', () => {
    expect(RICE.map((v) => normRange(v))).toEqual([
      { min: 4, max: 9.5 },
      { min: 5, max: 6.5 },
      { min: 3, max: 7.5 },
    ]);
  });

  it('rises with better conditions for every variety', () => {
    const bad = RICE.filter((v) => v.values.some((y, i) => i > 0 && y <= v.values[i - 1]));
    expect(bad).toEqual([]);
  });

  it('picks the narrow variety only under the worst conditions', () => {
    expect([0, 1, 2, 3, 4].map((l) => bestAt(l).id)).toEqual(['B', 'A', 'A', 'A', 'A']);
  });

  it('tracks the yields seen so far', () => {
    expect(seenRange(varietyOf('A'), [])).toBeNull();
    expect(seenRange(varietyOf('A'), [2, 0])).toEqual({ min: 4, max: 7 });
    expect(yieldText(9.5)).toBe('9,5 tấn/ha');
  });
});

describe('primula flower colour', () => {
  it('turns AA white at 35 degrees and keeps aa white', () => {
    expect(seenColors(PRIMULA[0], [0, 1])).toEqual(['đỏ', 'trắng']);
    expect(seenColors(PRIMULA[1], [1, 0])).toEqual(['trắng']);
  });
});
