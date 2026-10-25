import { describe, expect, it } from 'vitest';
import {
  amoebaPath,
  ciliaPath,
  debrisPath,
  diatomPath,
  euglenaBody,
  flagellumPath,
  slipperBody,
} from './protist-paths.js';

/** Largest x coordinate in a path. @param {string} d */
const maxX = (d) =>
  Math.max(...[...d.matchAll(/(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/g)].map((m) => Number(m[1])));

describe('protist drawing paths', () => {
  it('draws every shape without NaN', () => {
    for (const d of [
      euglenaBody(40),
      flagellumPath(40, 0.3),
      slipperBody(60),
      ciliaPath(60, 1.2),
      amoebaPath(44, 2.5),
      diatomPath(30),
      debrisPath(20),
    ]) {
      expect(d.startsWith('M ')).toBe(true);
      expect(d).not.toContain('NaN');
    }
  });

  it('closes the body outlines', () => {
    for (const d of [euglenaBody(40), slipperBody(60), amoebaPath(44, 1), debrisPath(20)]) {
      expect(d.trim().endsWith('Z')).toBe(true);
    }
  });

  it('puts 36 cilia round the slipper', () => {
    expect(ciliaPath(60, 0).split('M ').length - 1).toBe(36);
  });

  it('stretches the amoeba forward halfway through its cycle', () => {
    expect(maxX(amoebaPath(44, 2))).toBeGreaterThan(maxX(amoebaPath(44, 0)) + 10);
  });

  it('starts the flagellum at the front end', () => {
    expect(flagellumPath(40, 0).startsWith('M 20 0')).toBe(true);
    expect(maxX(flagellumPath(40, 0))).toBeCloseTo(52);
  });
});
