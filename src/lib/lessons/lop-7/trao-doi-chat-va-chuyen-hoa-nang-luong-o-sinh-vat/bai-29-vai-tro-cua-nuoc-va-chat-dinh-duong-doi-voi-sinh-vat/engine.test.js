import { describe, expect, it } from 'vitest';
import { BOND, atomsOf, explain, pulls, start } from './engine.js';

/** @typedef {import('./engine.js').Molecule} Molecule */

/** @param {number} x @param {number} y @param {number} angle @returns {Molecule} */
const water = (x, y, angle, id = `w${x}-${y}`) => ({ id, kind: 'water', x, y, angle });

describe('polar water model', () => {
  it('builds a bent molecule: one O (δ−) and two H (δ+)', () => {
    const atoms = atomsOf(water(0, 0, 0));
    expect(atoms.map((a) => a.el)).toEqual(['O', 'H', 'H']);
    expect(atoms[0].charge).toBe(-1);
    expect(atoms[1].charge).toBe(1);
    for (const h of atoms.slice(1)) expect(Math.hypot(h.x, h.y)).toBeCloseTo(BOND);
    const angle =
      (Math.acos((atoms[1].x * atoms[2].x + atoms[1].y * atoms[2].y) / BOND ** 2) * 180) / Math.PI;
    expect(angle).toBeCloseTo(104.5, 1);
  });

  it('finds a hydrogen bond when an H end meets another O end', () => {
    const a = water(0, 0, 0, 'a');
    const h = atomsOf(a)[1];
    const b = water(h.x + 28, h.y, 0, 'b');
    const ps = pulls([a, b]);
    expect(ps).toHaveLength(1);
    expect(ps[0].kind).toBe('hydrogen');
  });

  it('finds nothing when the molecules are far apart or show like ends', () => {
    expect(pulls([water(0, 0, 0, 'a'), water(200, 0, 0, 'b')])).toHaveLength(0);
    // two O ends facing each other: both δ−, no attraction
    expect(pulls([water(0, 0, 180, 'a'), water(30, 0, 0, 'b')])).toHaveLength(0);
  });

  it('lets O ends hold Na⁺ and H ends hold Cl⁻, but never oil', () => {
    /** @type {Molecule} */
    const na = { id: 'na', kind: 'na', x: -31, y: 0, angle: 0 };
    expect(pulls([water(0, 0, 0, 'a'), na])).toHaveLength(1);
    expect(pulls([water(0, 0, 180, 'a'), na])).toHaveLength(0);
    const h = atomsOf(water(0, 0, 0))[1];
    /** @type {Molecule} */
    const cl = { id: 'cl', kind: 'cl', x: h.x + 28, y: h.y, angle: 0 };
    expect(pulls([water(0, 0, 0, 'a'), cl])[0].kind).toBe('ion');
    /** @type {Molecule} */
    const oil = { id: 'oil', kind: 'oil', x: 20, y: 0, angle: 0 };
    expect(pulls([water(0, 0, 0, 'a'), oil])).toHaveLength(0);
  });

  it('explains each set-up', () => {
    expect(start('none')).toHaveLength(5);
    expect(start('salt').some((m) => m.kind === 'na')).toBe(true);
    expect(explain(start('none'), 'none')).toContain('Kéo');
    expect(explain(start('oil'), 'oil')).toContain('không tan');
    expect(explain(start('salt'), 'salt')).toContain('Na⁺');
  });
});
