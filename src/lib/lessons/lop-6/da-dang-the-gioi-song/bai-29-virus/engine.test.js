import { describe, expect, it } from 'vitest';
import {
  CYCLE,
  ICOSA_EDGES,
  ICOSA_VERTICES,
  RELEASED,
  SHAPES,
  cycleMessage,
  helixUnits,
  icosaEdges,
  rotate,
  virusCount,
} from './engine.js';

describe('virus models', () => {
  it('builds a regular icosahedron', () => {
    expect(ICOSA_VERTICES).toHaveLength(12);
    expect(ICOSA_EDGES).toHaveLength(30);
    const degree = ICOSA_VERTICES.map((_, i) => ICOSA_EDGES.filter((e) => e.includes(i)).length);
    expect(new Set(degree)).toEqual(new Set([5]));
  });

  it('keeps lengths when rotating', () => {
    const p = /** @type {[number, number, number]} */ ([1, 2, 3]);
    const q = rotate(p, 0.7, -0.4);
    expect(Math.hypot(...q)).toBeCloseTo(Math.hypot(...p), 9);
    expect(rotate(p, 0, 0)).toEqual(p);
  });

  it('marks some edges at the front and some at the back', () => {
    const edges = icosaEdges(0.3, 0.2, { cx: 100, cy: 100, scale: 40 });
    expect(edges).toHaveLength(30);
    expect(edges.some((e) => e.front)).toBe(true);
    expect(edges.some((e) => !e.front)).toBe(true);
  });

  it('places helix units along the rod and turns them with the spin', () => {
    const rod = { x0: 0, x1: 120, cy: 50, radius: 20, perTurn: 8, pitch: 40 };
    const a = helixUnits(0, rod);
    const b = helixUnits(Math.PI, rod);
    expect(a).toHaveLength(25);
    expect(a[0].y).toBeCloseTo(30);
    expect(b[0].y).toBeCloseTo(70);
  });

  it('names the three shapes of the book', () => {
    expect(SHAPES.map((s) => s.name)).toEqual(['Dạng xoắn', 'Dạng khối', 'Dạng hỗn hợp']);
  });

  it('multiplies only inside a living host cell', () => {
    expect(virusCount('te-bao', CYCLE.length)).toBe(RELEASED);
    expect(virusCount('te-bao', 1)).toBe(1);
    expect(virusCount('mat-ban', CYCLE.length)).toBe(1);
    expect(virusCount('coc-nuoc', CYCLE.length)).toBe(1);
    expect(cycleMessage('coc-nuoc', 3)).toContain('không nhân lên');
    expect(cycleMessage('te-bao', 5)).toContain('Giải phóng');
  });
});
