import { describe, expect, it } from 'vitest';
import {
  FACTOR_BINS,
  FACTOR_CARDS,
  MAX_EGGS,
  MAX_FLOWERING,
  asFood,
  asOrganism,
  fruitLight,
  fruitTemperature,
  henLight,
  henTemperature,
  outcomeText,
  simulate,
} from './engine.js';

describe('hen laying model', () => {
  it('lays most at mild temperature, long days and enough food', () => {
    const best = simulate('ga', { temperature: 21, light: 16, food: 'du' });
    expect(best.value).toBe(MAX_EGGS);
    expect(best.limiting).toBeNull();
    expect(outcomeText('ga', { temperature: 21, light: 16, food: 'du' })).toContain(
      'đều thích hợp',
    );
  });

  it('lays fewer eggs on short days, in heat and on poor food', () => {
    expect(henLight(8)).toBeCloseTo(0.2);
    expect(henLight(12)).toBeCloseTo(0.6);
    expect(henTemperature(5)).toBeCloseTo(0.35);
    expect(henTemperature(35)).toBeCloseTo(0.23);
    const short = simulate('ga', { temperature: 21, light: 10, food: 'du' });
    expect(short.limiting).toBe('anh-sang');
    expect(short.value).toBe(2);
    const hot = simulate('ga', { temperature: 34, light: 16, food: 'du' });
    expect(hot.limiting).toBe('nhiet-do');
    expect(outcomeText('ga', { temperature: 34, light: 16, food: 'du' })).toContain('quá cao');
    expect(simulate('ga', { temperature: 21, light: 16, food: 'thieu' }).value).toBe(3);
  });
});

describe('dragon fruit flowering model', () => {
  it('does not flower on winter days of 12 hours or less', () => {
    expect(fruitLight(11)).toBe(0);
    expect(fruitLight(12)).toBe(0);
    expect(simulate('thanh-long', { temperature: 24, light: 11, food: 'du' }).value).toBe(0);
    expect(outcomeText('thanh-long', { temperature: 24, light: 11, food: 'du' })).toContain(
      'ngày dài',
    );
  });

  it('flowers fully with lamps lengthening the day', () => {
    const lit = simulate('thanh-long', { temperature: 24, light: 16, food: 'du' });
    expect(lit.value).toBe(MAX_FLOWERING);
    expect(fruitLight(14)).toBeCloseTo(0.5);
    expect(fruitTemperature(12)).toBe(0);
    expect(fruitTemperature(16)).toBeCloseTo(0.5);
    expect(simulate('thanh-long', { temperature: 24, light: 16, food: 'thua' }).limiting).toBe(
      'dinh-duong',
    );
  });
});

describe('factor cards', () => {
  it('uses only known bins', () => {
    const bins = new Set(FACTOR_BINS.map((b) => b.id));
    for (const c of FACTOR_CARDS) expect(bins.has(c.bin)).toBe(true);
    expect(new Set(FACTOR_CARDS.map((c) => c.id)).size).toBe(FACTOR_CARDS.length);
  });
});

describe('control values', () => {
  it('reads the segmented control values with safe defaults', () => {
    expect(asOrganism('thanh-long')).toBe('thanh-long');
    expect(asOrganism('x')).toBe('ga');
    expect(asFood('thieu')).toBe('thieu');
    expect(asFood('thua')).toBe('thua');
    expect(asFood('x')).toBe('du');
  });
});
