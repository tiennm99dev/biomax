import { describe, expect, it } from 'vitest';
import { budget, explain, pointAt } from './engine.js';

/** @type {import('./engine.js').Weather} */
const DAY = { humidity: 60, light: true, soil: 'am' };

describe('plant water budget', () => {
  it('transpires faster in drier air', () => {
    expect(budget({ ...DAY, humidity: 30 }).transpiration).toBeGreaterThan(
      budget({ ...DAY, humidity: 90 }).transpiration,
    );
  });

  it('transpires little in the dark, when stomata close', () => {
    expect(budget({ ...DAY, light: false }).transpiration).toBeLessThan(
      budget(DAY).transpiration / 3,
    );
    expect(budget({ ...DAY, light: false }).sugar).toBe(0);
  });

  it('takes up as much water as it loses while the soil is moist', () => {
    const b = budget(DAY);
    expect(b.uptake).toBe(b.transpiration);
    expect(b.wilting).toBe(false);
    expect(b.aperture).toBe(1);
  });

  it('wilts and closes stomata in dry or waterlogged soil', () => {
    const dry = budget({ ...DAY, soil: 'kho' });
    expect(dry.wilting).toBe(true);
    expect(dry.aperture).toBeLessThan(1);
    expect(dry.uptake).toBeLessThan(budget(DAY).uptake);
    expect(budget({ ...DAY, soil: 'ngap' }).uptake).toBeLessThan(budget(DAY).uptake);
  });

  it('explains each case', () => {
    expect(explain({ ...DAY, soil: 'kho' })).toContain('héo');
    expect(explain({ ...DAY, soil: 'ngap' })).toContain('oxygen');
    expect(explain({ ...DAY, light: false })).toContain('khép');
    expect(explain({ ...DAY, humidity: 95 })).toContain('ẩm');
    expect(explain({ ...DAY, humidity: 30 })).toContain('khô');
  });
});

describe('pointAt', () => {
  const path = [
    { x: 0, y: 0 },
    { x: 10, y: 0 },
    { x: 10, y: 10 },
  ];
  it('walks along a polyline and wraps around', () => {
    expect(pointAt(path, 0)).toEqual({ x: 0, y: 0 });
    expect(pointAt(path, 0.25)).toEqual({ x: 5, y: 0 });
    expect(pointAt(path, 0.75)).toEqual({ x: 10, y: 5 });
    expect(pointAt(path, 1.25)).toEqual({ x: 5, y: 0 });
  });
});
