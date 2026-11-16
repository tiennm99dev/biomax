import { describe as group, expect, it } from 'vitest';
import {
  BOOK_SETUP,
  STEPS,
  VISIBLE,
  describe,
  describeWind,
  extract,
  firstWrong,
} from './engine.js';

group('step order', () => {
  it('accepts the book order', () => {
    expect(firstWrong(STEPS.map((_, i) => i))).toBe(-1);
  });

  it('points at the first misplaced step', () => {
    expect(firstWrong([0, 1, 3, 2, 4, 5])).toBe(2);
    expect(firstWrong([1, 0, 2, 3, 4, 5])).toBe(0);
  });

  it('puts detergent before pineapple juice and ethanol after both', () => {
    const ids = STEPS.map((s) => s.id);
    expect(ids.indexOf('xa-phong')).toBeLessThan(ids.indexOf('dua'));
    expect(ids.indexOf('dua')).toBeLessThan(ids.indexOf('con'));
  });
});

group('virtual extraction', () => {
  it('gives clean white threads when every step follows the book', () => {
    const r = extract(BOOK_SETUP);
    expect(r).toMatchObject({ look: 'soi', layer: true, clean: true });
    expect(describe(BOOK_SETUP).tone).toBe('ok');
    expect(describeWind(r, true).tone).toBe('ok');
  });

  it('gives almost nothing without detergent', () => {
    const s = { ...BOOK_SETUP, detergent: false };
    expect(extract(s).look).toBe('khong');
    expect(describe(s).tone).toBe('warn');
  });

  it('treats boiled pineapple juice like none at all', () => {
    const boiled = extract({ ...BOOK_SETUP, juice: 'dun-soi' });
    const none = extract({ ...BOOK_SETUP, juice: 'khong' });
    expect(boiled).toEqual(none);
    expect(boiled.look).toBe('von');
  });

  it('needs far more banana than liver', () => {
    expect(extract({ ...BOOK_SETUP, sample: 'chuoi-it' }).amount).toBeLessThan(VISIBLE);
    const banana = extract({ ...BOOK_SETUP, sample: 'chuoi' });
    expect(banana.look).toBe('soi');
    expect(banana.amount).toBeLessThan(extract(BOOK_SETUP).amount);
    expect(describe({ ...BOOK_SETUP, sample: 'chuoi' }).tone).toBe('ok');
  });

  it('precipitates less with warm ethanol and spreads it when shaken', () => {
    expect(extract({ ...BOOK_SETUP, cold: false }).amount).toBeLessThan(extract(BOOK_SETUP).amount);
    const shaken = extract({ ...BOOK_SETUP, gentle: false });
    expect(shaken.look).toBe('lo-lung');
    expect(describeWind(shaken, true).tone).toBe('warn');
  });

  it('breaks the threads when stirred hard', () => {
    expect(describeWind(extract(BOOK_SETUP), false).tone).toBe('warn');
  });
});
