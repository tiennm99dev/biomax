import { describe, expect, it } from 'vitest';
import {
  FROG_RATE,
  SAMPLE,
  beatTimes,
  classifyPressure,
  countBetween,
  frogRate,
  judgeGroup,
  mean,
  perMinute,
  rowsOf,
} from './engine.js';

describe('heart rate record', () => {
  it('turns a count in a window into beats per minute', () => {
    expect(perMinute(18, 15)).toBe(72);
    expect(perMinute(40, 30)).toBe(80);
    expect(perMinute(75, 60)).toBe(75);
  });

  it('keeps only members with both counts and finds the rise', () => {
    const rows = rowsOf([...SAMPLE, { name: 'Bạn 5', rest: 20, after: null }], 15);
    expect(rows.map((r) => r.name)).toEqual(['Bạn 1', 'Bạn 2', 'Bạn 3', 'Bạn 4']);
    expect(rows[0]).toMatchObject({ rest: 72, after: 120, rise: 48 });
    expect(rows[0].percent).toBeCloseTo(66.67, 1);
    expect(mean(rows.map((r) => r.rest))).toBe(74);
    expect(judgeGroup(rows).tone).toBe('ok');
  });

  it('flags a rate that did not rise after exercise', () => {
    const rows = rowsOf([{ name: 'Bạn 1', rest: 20, after: 19 }], 15);
    expect(judgeGroup(rows).tone).toBe('warn');
    expect(judgeGroup([]).tone).toBe('info');
  });
});

describe('blood pressure', () => {
  it('classifies an adult reading at rest', () => {
    const cases = /** @type {Array<[number, number, string]>} */ ([
      [118, 76, 'binh-thuong'],
      [135, 75, 'binh-thuong'],
      [140, 80, 'cao'],
      [130, 92, 'cao'],
      [85, 55, 'thap'],
      [100, 58, 'thap'],
      [80, 90, 'sai'],
    ]);
    const bad = cases.filter(([s, d, k]) => classifyPressure(s, d) !== k);
    expect(bad).toEqual([]);
  });
});

describe('frog heart', () => {
  it('beats at one rate in both parts when intact', () => {
    const s = beatTimes('binh-thuong', 'xoang');
    const v = beatTimes('binh-thuong', 'that');
    expect(countBetween(s, 0, 60)).toBe(FROG_RATE);
    expect(v).toEqual(s);
  });

  it('keeps the sinus going and slows the ventricle after the ligature', () => {
    const s = beatTimes('that-chi', 'xoang');
    const v = beatTimes('that-chi', 'that');
    expect(countBetween(s, 30, 90)).toBe(FROG_RATE);
    expect(countBetween(v, 21, 31)).toBe(0);
    expect(countBetween(v, 40, 90)).toBeLessThan(countBetween(s, 40, 90));
    expect(countBetween(v, 40, 90)).toBeGreaterThan(0);
  });

  it('stops the heart under nerve stimulation and lets it recover', () => {
    expect(frogRate('kich-thich', 'that', 24)).toBe(0);
    const v = beatTimes('kich-thich', 'that');
    expect(countBetween(v, 23, 30)).toBe(0);
    expect(frogRate('kich-thich', 'that', 89)).toBe(FROG_RATE);
  });

  it('speeds the heart up with adrenaline', () => {
    const v = beatTimes('adrenaline', 'that');
    expect(countBetween(v, 60, 90)).toBeGreaterThan(countBetween(v, 0, 20) * 1.5);
  });
});
