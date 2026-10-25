import { describe, expect, it } from 'vitest';
import { EYEPIECE, LENSES, blurAt, lensById, observe, totalMagnification } from './engine.js';

describe('virtual microscope', () => {
  it('multiplies eyepiece and objective', () => {
    expect(totalMagnification(EYEPIECE, 10)).toBe(100);
    expect(totalMagnification(EYEPIECE, 40)).toBe(400);
    expect(lensById('vat-kinh-40').mag).toBe(400);
  });

  it('narrows the field of view as magnification grows', () => {
    for (let i = 1; i < LENSES.length; i++) {
      expect(LENSES[i].mag).toBeGreaterThan(LENSES[i - 1].mag);
      expect(LENSES[i].fov).toBeLessThan(LENSES[i - 1].fov);
      expect(LENSES[i].depth).toBeLessThanOrEqual(LENSES[i - 1].depth);
    }
  });

  it('is sharp only near the focus position', () => {
    const lens = lensById('vat-kinh-40');
    expect(blurAt(lens, 68)).toBe(0);
    expect(blurAt(lens, 69)).toBe(0);
    expect(blurAt(lens, 66)).toBeGreaterThan(0);
    expect(blurAt(lens, 0)).toBe(12);
  });

  it('needs only the fine focus when switching from 10× to 40×', () => {
    const a = lensById('vat-kinh-10');
    const b = lensById('vat-kinh-40');
    expect(Math.abs(a.focus - b.focus)).toBeLessThanOrEqual(5);
  });

  it('shows onion cells clearly under the microscope, not under the magnifier', () => {
    expect(observe('vay-hanh', 'kinh-lup', 47).verdict).toBe('too-small');
    expect(observe('vay-hanh', 'vat-kinh-10', 63).verdict).toBe('clear');
    expect(observe('vay-hanh', 'vat-kinh-40', 68).seen).toContain('thành tế bào');
    expect(observe('vay-hanh', 'vat-kinh-40', 50).verdict).toBe('blurred');
  });

  it('shows fish eggs under the magnifier and only part of one at 40×', () => {
    const lup = observe('trung-ca', 'kinh-lup', 47);
    expect(lup.verdict).toBe('clear');
    expect(lup.seen).not.toContain('thành tế bào');
    expect(observe('trung-ca', 'vat-kinh-40', 68).verdict).toBe('too-big');
  });
});
