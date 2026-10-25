import { describe, expect, it } from 'vitest';
import { STAGES, cellsAfter, divisionsToReach, gridLayout } from './engine.js';

describe('cell division', () => {
  it('doubles the number of cells at each division', () => {
    expect([0, 1, 2, 3, 4].map((n) => cellsAfter(n))).toEqual([1, 2, 4, 8, 16]);
    expect(cellsAfter(10)).toBe(1024);
    expect(cellsAfter(3, 5)).toBe(40);
  });

  it('finds how many divisions reach a number of cells', () => {
    expect(divisionsToReach(1)).toBe(0);
    expect(divisionsToReach(8)).toBe(3);
    expect(divisionsToReach(9)).toBe(4);
    expect(divisionsToReach(1000)).toBe(10);
  });

  it('divides the nucleus before the cytoplasm', () => {
    const ids = STAGES.map((s) => s.id);
    expect(ids.indexOf('lon-len')).toBeLessThan(ids.indexOf('chia-nhan'));
    expect(ids.indexOf('chia-nhan')).toBeLessThan(ids.indexOf('chia-chat'));
    expect(STAGES.find((s) => s.id === 'chia-chat')?.text['thuc-vat']).toContain('vách ngăn');
  });

  it('lays out cells inside the box without overlap', () => {
    for (const count of [1, 2, 4, 8, 16, 32, 64]) {
      const { points, r } = gridLayout(count, 320, 200);
      expect(points).toHaveLength(count);
      for (const p of points) {
        expect(p.x - r).toBeGreaterThanOrEqual(0);
        expect(p.x + r).toBeLessThanOrEqual(320);
        expect(p.y - r).toBeGreaterThanOrEqual(0);
        expect(p.y + r).toBeLessThanOrEqual(200);
      }
      for (let i = 1; i < points.length; i++) {
        const d = Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y);
        expect(d).toBeGreaterThanOrEqual(2 * r);
      }
    }
  });
});
