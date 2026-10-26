import { describe as group, expect, it } from 'vitest';
import { RESPIRATION, aperture, describe, flows, photosynthesis } from './engine.js';

/** @param {ReturnType<typeof flows>} f @param {string} gas */
const dirOf = (f, gas) => f.find((x) => x.gas === gas)?.dir;

group('stoma model', () => {
  it('opens with light and enough water, closes without water', () => {
    expect(aperture({ light: 0, water: true })).toBeCloseTo(0.1);
    expect(aperture({ light: 30, water: true })).toBeLessThan(aperture({ light: 60, water: true }));
    expect(aperture({ light: 100, water: true })).toBe(1);
    expect(aperture({ light: 100, water: false })).toBeLessThan(0.1);
  });

  it('only photosynthesises in light', () => {
    expect(photosynthesis({ light: 0, water: true })).toBe(0);
    expect(photosynthesis({ light: 80, water: true })).toBe(1);
    expect(photosynthesis({ light: 80, water: false })).toBeLessThan(RESPIRATION);
  });

  it('takes in carbon dioxide and gives out oxygen in bright light', () => {
    const f = flows({ light: 80, water: true });
    expect(dirOf(f, 'CO₂')).toBe('vao');
    expect(dirOf(f, 'O₂')).toBe('ra');
    expect(dirOf(f, 'Hơi nước')).toBe('ra');
  });

  it('takes in oxygen and gives out carbon dioxide in the dark', () => {
    const f = flows({ light: 0, water: true });
    expect(dirOf(f, 'O₂')).toBe('vao');
    expect(dirOf(f, 'CO₂')).toBe('ra');
    expect(describe({ light: 0, water: true })).toContain('hô hấp');
  });

  it('explains a closed stoma when water is short', () => {
    expect(describe({ light: 80, water: false })).toContain('khép');
    expect(describe({ light: 100, water: true })).toContain('mở rộng');
    expect(describe({ light: 10, water: true })).toContain('hé mở');
  });
});
