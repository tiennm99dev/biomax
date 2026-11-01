import { describe, expect, it } from 'vitest';
import { validateDiagram } from '#lib/domain/diagrams.js';
import { BACTERIUM, nearMembraneShare, ratioAdvantage, sizeClass, sphere } from './engine.js';

describe('surface and volume of a spherical cell', () => {
  it('gives a ratio of 6 divided by the diameter', () => {
    expect(sphere(1).ratio).toBeCloseTo(6);
    expect(sphere(5).ratio).toBeCloseTo(1.2);
    expect(sphere(20).ratio).toBeCloseTo(0.3);
    expect(sphere(2).surface).toBeCloseTo(4 * Math.PI);
    expect(sphere(6).volume).toBeCloseTo(36 * Math.PI);
  });

  it('compares two cells by their diameters', () => {
    expect(ratioAdvantage(1, 5)).toBe(5);
    expect(ratioAdvantage(20, 5)).toBe(4);
    expect(sphere(1).ratio / sphere(5).ratio).toBeCloseTo(ratioAdvantage(1, 5));
  });

  it('counts the volume next to the membrane', () => {
    expect(nearMembraneShare(1)).toBe(1);
    expect(nearMembraneShare(5)).toBeCloseTo(0.488);
    expect(nearMembraneShare(10)).toBeCloseTo(0.271);
    expect(nearMembraneShare(20)).toBeLessThan(nearMembraneShare(10));
  });

  it('names the usual kind of cell for a size', () => {
    expect(sizeClass(1)).toBe('nhan-so');
    expect(sizeClass(5)).toBe('nhan-so');
    expect(sizeClass(7)).toBe('giua');
    expect(sizeClass(10)).toBe('nhan-thuc');
  });
});

describe('bacterium model', () => {
  it('is a valid diagram with every part the book lists', () => {
    expect(validateDiagram(BACTERIUM)).toEqual([]);
    expect(BACTERIUM.parts.map((p) => p.id)).toEqual(
      expect.arrayContaining([
        'long',
        'roi',
        'thanh-te-bao',
        'mang-te-bao',
        'vung-nhan',
        'plasmid',
      ]),
    );
  });
});
