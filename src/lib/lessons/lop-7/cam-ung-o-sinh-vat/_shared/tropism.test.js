import { describe, expect, it } from 'vitest';
import {
  FULL_DAYS,
  MAX_ROOT_BEND,
  MAX_SHOOT_BEND,
  bentOrgan,
  rootBend,
  shootBend,
  shootLength,
  tendrilTurns,
} from './tropism.js';

describe('tropism model', () => {
  it('bends the shoot towards a side light only', () => {
    expect(shootBend('phai', FULL_DAYS)).toBe(MAX_SHOOT_BEND);
    expect(shootBend('trai', FULL_DAYS)).toBe(-MAX_SHOOT_BEND);
    expect(shootBend('phai', 2)).toBeCloseTo(MAX_SHOOT_BEND / 2);
    expect(shootBend('phai', 0)).toBe(0);
    expect(shootBend('tren', 5)).toBe(0);
    expect(shootBend('xoay', 5)).toBe(0);
    expect(shootBend('phai', 9)).toBe(MAX_SHOOT_BEND);
  });

  it('grows the shoot up to its full length', () => {
    expect(shootLength(0)).toBe(0.4);
    expect(shootLength(10)).toBe(1);
    expect(shootLength(2)).toBeCloseTo(0.7);
  });

  it('bends the root towards water and winds tendrils only round a support', () => {
    expect(rootBend('phai', 5)).toBe(MAX_ROOT_BEND);
    expect(rootBend('trai', 2)).toBeCloseTo(-MAX_ROOT_BEND / 2);
    expect(rootBend('khong', 5)).toBe(0);
    expect(tendrilTurns(true, FULL_DAYS)).toBe(3);
    expect(tendrilTurns(false, FULL_DAYS)).toBe(0);
  });

  it('draws a straight or arc-shaped organ of the right length', () => {
    const straight = bentOrgan(50, 100, 60, 0, -1);
    expect(straight.tip.x).toBeCloseTo(50);
    expect(straight.tip.y).toBeCloseTo(40);
    // A quarter circle of length 60 has radius 120/π; its tip lies one radius
    // across and one radius up.
    const quarter = bentOrgan(0, 0, 60, 90, -1);
    const radius = 120 / Math.PI;
    expect(quarter.tip.x).toBeCloseTo(radius);
    expect(quarter.tip.y).toBeCloseTo(-radius);
    expect(quarter.control.x).toBe(0);
    expect(quarter.control.y).toBeCloseTo(-radius);
    const root = bentOrgan(0, 0, 40, -30, 1);
    expect(root.tip.x).toBeLessThan(0);
    expect(root.tip.y).toBeGreaterThan(0);
    expect(root.path.startsWith('M 0 0 Q')).toBe(true);
  });
});
