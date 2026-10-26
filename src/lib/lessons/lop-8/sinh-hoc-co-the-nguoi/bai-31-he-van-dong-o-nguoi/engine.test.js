import { describe, expect, it } from 'vitest';
import { validateDiagram } from '#lib/domain/diagrams.js';
import {
  JOINT_BINS,
  JOINT_CARDS,
  MAX_BEND,
  SKELETON,
  armAt,
  bendFromPoint,
  bulge,
  describeAction,
  muscleAction,
  muscleLengths,
} from './engine.js';

describe('elbow model', () => {
  it('shortens the biceps and lengthens the triceps as the arm bends', () => {
    for (let b = 0; b < MAX_BEND; b += 5) {
      const a = muscleLengths(b);
      const n = muscleLengths(b + 5);
      expect(n.biceps).toBeLessThan(a.biceps);
      expect(n.triceps).toBeGreaterThan(a.triceps);
    }
  });

  it('names which muscle contracts when bending and straightening', () => {
    expect(muscleAction(20, 90)).toEqual({ move: 'gap', biceps: 'co', triceps: 'dan' });
    expect(muscleAction(90, 20)).toEqual({ move: 'duoi', biceps: 'dan', triceps: 'co' });
    expect(muscleAction(40, 40).move).toBe('dung');
    expect(describeAction(muscleAction(20, 90))).toContain('cơ hai đầu co');
    expect(describeAction(muscleAction(90, 20))).toContain('cơ ba đầu co');
  });

  it('finds the elbow angle back from the hand position', () => {
    for (const b of [0, 30, 75, 120, MAX_BEND]) expect(bendFromPoint(armAt(b).hand)).toBe(b);
    expect(armAt(500).bend).toBe(MAX_BEND);
    expect(armAt(-10).bend).toBe(0);
  });

  it('draws a contracting muscle thicker', () => {
    const rest = muscleLengths(70).biceps;
    expect(bulge(muscleLengths(130).biceps, rest)).toBeGreaterThan(
      bulge(muscleLengths(0).biceps, rest),
    );
  });
});

describe('skeleton and joints', () => {
  it('has a valid hotspot diagram', () => {
    expect(validateDiagram(SKELETON)).toEqual([]);
  });

  it('sorts every joint into a known type', () => {
    const bins = new Set(JOINT_BINS.map((b) => b.id));
    for (const c of JOINT_CARDS) expect(bins.has(c.bin)).toBe(true);
    for (const b of bins) expect(JOINT_CARDS.some((c) => c.bin === b)).toBe(true);
  });
});
