import { describe, expect, it } from 'vitest';
import { auxinSide, explain, organPoints, seedling, turnNeeded, wrapAngle } from './engine.js';

describe('seedling model', () => {
  it('wraps angles into (−180, 180]', () => {
    expect([wrapAngle(-180), wrapAngle(270), wrapAngle(-240), wrapAngle(0)]).toEqual([
      180, -90, 120, 0,
    ]);
    expect(turnNeeded(180, 0)).toBe(180);
  });

  it('keeps an upright seedling lit from above straight', () => {
    const p = seedling({ light: 'tren', turn: 0, day: 6 });
    expect(p.stem.bend).toBe(0);
    expect(p.root.bend).toBe(0);
    expect(auxinSide(p.stem, 'stem')).toBe('even');
  });

  it('bends the stem towards side light with auxin on the shaded side', () => {
    const p = seedling({ light: 'phai', turn: 0, day: 6 });
    expect(p.stem.tip).toBeGreaterThan(50);
    expect(p.stem.tip).toBeLessThan(60);
    // Turning right (clockwise): auxin on the stem's left, the shaded side.
    const early = seedling({ light: 'phai', turn: 0, day: 1 });
    expect(auxinSide(early.stem, 'stem')).toBe('left');
    // The root leans away from the light, to the left of straight down.
    expect(p.root.tip).toBeGreaterThan(180);
  });

  it('turns a sideways seedling: stem up, root down, auxin on the lower side', () => {
    const p = seedling({ light: 'toi', turn: 90, day: 6 });
    expect(Math.abs(p.stem.tip)).toBeLessThan(10);
    expect(Math.abs(p.root.tip - 180)).toBeLessThan(10);
    const early = seedling({ light: 'toi', turn: 90, day: 1 });
    // Stem points right and turns up (counter-clockwise): its lower side is its right.
    expect(auxinSide(early.stem, 'stem')).toBe('right');
    // Root points left and turns down (counter-clockwise): its lower side is its left.
    expect(auxinSide(early.root, 'root')).toBe('left');
  });

  it('draws an organ as long as its length', () => {
    const p = seedling({ light: 'toi', turn: 0, day: 2 });
    const pts = organPoints(p.stem, 0, 0);
    expect(pts[pts.length - 1].y).toBeCloseTo(-p.stem.length, 6);
  });

  it('explains what happens', () => {
    expect(explain({ light: 'toi', turn: 0, day: 0 }).tone).toBe('info');
    expect(explain({ light: 'trai', turn: 0, day: 4 }).text).toContain('hướng sáng dương');
    expect(explain({ light: 'toi', turn: 90, day: 4 }).text).toContain('hướng trọng lực âm');
  });
});
