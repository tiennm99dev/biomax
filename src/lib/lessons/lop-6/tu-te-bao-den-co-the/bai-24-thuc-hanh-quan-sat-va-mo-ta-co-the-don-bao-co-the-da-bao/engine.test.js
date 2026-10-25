import { describe, expect, it } from 'vitest';
import {
  DROP,
  EYEPIECE,
  KINDS,
  LENSES,
  checkGuess,
  imagePx,
  photosynthetic,
  recordRows,
  shapeVisible,
} from './engine.js';

describe('pond-water microscope', () => {
  it('multiplies the eyepiece by the objective', () => {
    expect(LENSES.map((l) => l.mag)).toEqual([EYEPIECE * 10, EYEPIECE * 40]);
    expect(LENSES[1].fov).toBeLessThan(LENSES[0].fov);
  });

  it('shows the large protists at 10× but the small ones only at 40×', () => {
    expect(shapeVisible('trung-giay', 'vat-kinh-10', 300)).toBe(true);
    expect(shapeVisible('trung-bien-hinh', 'vat-kinh-10', 300)).toBe(true);
    expect(shapeVisible('trung-roi', 'vat-kinh-10', 300)).toBe(false);
    expect(shapeVisible('tao-luc', 'vat-kinh-10', 300)).toBe(false);
    for (const k of KINDS) expect(shapeVisible(k.id, 'vat-kinh-40', 300)).toBe(true);
  });

  it('scales the image with the field of view', () => {
    expect(imagePx(1800, 'vat-kinh-10', 300)).toBe(300);
    expect(imagePx(30, 'vat-kinh-40', 300)).toBe(30);
  });

  it('keeps every object inside the 10× field and apart from the others', () => {
    for (const d of DROP) expect(Math.hypot(d.x, d.y)).toBeLessThan(LENSES[0].fov / 2 - 100);
    for (let i = 0; i < DROP.length; i++)
      for (let j = i + 1; j < DROP.length; j++)
        expect(Math.hypot(DROP[i].x - DROP[j].x, DROP[i].y - DROP[j].y)).toBeGreaterThan(260);
  });

  it('checks names and builds the record table', () => {
    expect(checkGuess('a', 'trung-giay')).toBe(true);
    expect(checkGuess('a', 'trung-roi')).toBe(false);
    expect(checkGuess('zz', 'trung-roi')).toBe(false);
    expect(recordRows(['b', 'f']).map((k) => k.id)).toEqual(['trung-roi']);
    expect(photosynthetic()).toEqual(['trung-roi', 'tao-luc']);
  });
});
