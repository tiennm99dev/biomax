import { describe, expect, it } from 'vitest';
import { SUBSTANCES, describeStage, inUrine, placesAfter, substance } from './engine.js';

describe('urine formation model', () => {
  it('keeps blood cells and proteins in the blood', () => {
    for (const id of ['te-bao-mau', 'protein']) {
      expect(inUrine(id)).toEqual({ primary: false, final: false });
      expect(placesAfter(id, 1)).toEqual(['mao-mach']);
      expect(describeStage(id, 1)).toContain('không lọt');
    }
  });

  it('filters glucose and then takes all of it back', () => {
    expect(placesAfter('glucose', 1)).toEqual(['nang']);
    expect(placesAfter('glucose', 2)).toEqual(['mao-mach']);
    expect(inUrine('glucose')).toEqual({ primary: true, final: false });
    expect(describeStage('glucose', 3)).toContain('không có');
  });

  it('leaves part of the water, salts and urea in the final urine', () => {
    for (const id of ['nuoc', 'muoi', 'urea']) {
      expect(placesAfter(id, 2)).toEqual(['mao-mach', 'ong-than']);
      expect(placesAfter(id, 3)).toEqual(['mao-mach', 'be-than']);
      expect(inUrine(id).final).toBe(true);
    }
  });

  it('secretes creatinine and drugs into the tubule', () => {
    for (const id of ['creatinine', 'thuoc']) {
      expect(substance(id).secreted).toBe(true);
      expect(placesAfter(id, 3)).toEqual(['be-than']);
      expect(describeStage(id, 3)).toContain('Bài tiết tiếp');
    }
  });

  it('describes every stage of every substance', () => {
    for (const s of SUBSTANCES) {
      for (let k = 0; k <= 3; k++) expect(describeStage(s.id, k).length).toBeGreaterThan(10);
    }
    expect(() => substance('x')).toThrow();
  });
});
