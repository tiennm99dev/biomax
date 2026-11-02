import { describe, expect, it } from 'vitest';
import {
  BEST_TEMP,
  BOOK_TUBES,
  MAX_MINUTES,
  NOTHING_SEEN,
  dentWidth,
  describeTube,
  iodineColor,
  starchLeft,
  tempFactor,
  tubeRate,
  updateSeen,
  widestDent,
} from './engine.js';

const [ROOM, LIME, BOILED, ICE] = BOOK_TUBES;

/** @param {import('./engine.js').TubeConditions} tube */
const colorAtEnd = (tube) => iodineColor(starchLeft(tube, MAX_MINUTES)).id;

describe('amylase in a tube', () => {
  it('peaks at its best temperature and dies when boiled', () => {
    expect(tempFactor(BEST_TEMP)).toBe(1);
    expect(tempFactor(25)).toBeLessThan(1);
    expect(tempFactor(70)).toBeLessThan(1);
    expect(tempFactor(100)).toBe(0);
  });

  it('gives the book tubes four trends after the full wait', () => {
    expect(colorAtEnd(ROOM)).toBe('vang');
    expect(colorAtEnd(ICE)).toBe('tim');
    expect(colorAtEnd(LIME)).toBe('xanh-den');
    expect(colorAtEnd(BOILED)).toBe('xanh-den');
  });

  it('keeps all the starch without enzyme or after boiling', () => {
    expect(starchLeft({ temp: 25, ph: 6, amount: 0 }, MAX_MINUTES)).toBe(1);
    expect(starchLeft(BOILED, MAX_MINUTES)).toBe(1);
    expect(tubeRate(BOILED)).toBe(0);
  });

  it('slows down with less enzyme', () => {
    expect(starchLeft({ ...ROOM, amount: 50 }, MAX_MINUTES)).toBeGreaterThan(
      starchLeft(ROOM, MAX_MINUTES),
    );
  });

  it('shows starch colours in order from plenty to none', () => {
    expect([1, 0.5, 0.2, 0].map((s) => iodineColor(s).id)).toEqual([
      'xanh-den',
      'tim',
      'nau-do',
      'vang',
    ]);
  });
});

describe('dents on the starch plate', () => {
  it('measures about 20 mm from the room temperature tube', () => {
    expect(dentWidth(ROOM, MAX_MINUTES)).toBeCloseTo(20, 0);
  });

  it('lets a cold drop recover but never a boiled one', () => {
    expect(dentWidth(BOILED, MAX_MINUTES)).toBe(0);
    expect(dentWidth(ICE, MAX_MINUTES)).toBeGreaterThan(dentWidth(LIME, MAX_MINUTES) * 3);
    expect(dentWidth(ICE, MAX_MINUTES)).toBeLessThan(dentWidth(ROOM, MAX_MINUTES));
  });

  it('finds the room temperature tube as the widest', () => {
    expect(widestDent(BOOK_TUBES).id).toBe(ROOM.id);
  });

  it('grows from nothing', () => {
    expect(dentWidth(ROOM, 0)).toBe(0);
    expect(dentWidth(ROOM, 5)).toBeLessThan(dentWidth(ROOM, 10));
  });
});

describe('reading the tube rack', () => {
  it('says nothing can be told before the iodine', () => {
    expect(describeTube(ROOM, MAX_MINUTES, false).tone).toBe('info');
    expect(updateSeen(NOTHING_SEEN, BOOK_TUBES, MAX_MINUTES, false)).toEqual(NOTHING_SEEN);
  });

  it('warns about the boiled tube and confirms a finished one', () => {
    expect(describeTube(BOILED, MAX_MINUTES, true).tone).toBe('warn');
    expect(describeTube(ROOM, MAX_MINUTES, true).tone).toBe('ok');
  });

  it('records the comparison and a fast warm tube', () => {
    const seen = updateSeen(NOTHING_SEEN, BOOK_TUBES, MAX_MINUTES, true);
    expect(seen.compared).toBe(true);
    const warm = [{ temp: BEST_TEMP, ph: 6, amount: 100 }];
    expect(updateSeen(NOTHING_SEEN, warm, 5, true).fast).toBe(true);
    expect(updateSeen(NOTHING_SEEN, [{ ...ROOM, amount: 25 }], 15, true).diluted).toBe(true);
  });
});
