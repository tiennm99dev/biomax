import { describe as group, expect, it } from 'vitest';
import { validateDiagram } from '#lib/domain/diagrams.js';
import {
  ATP_FULL,
  BULK_MODES,
  BULK_STEPS,
  MEMBRANE,
  bulkShape,
  counts,
  createSim,
  describe,
  hasWayAt,
  stepSim,
  substanceOf,
} from './engine.js';

/**
 * @param {import('./engine.js').Sim} start
 * @param {number} seconds
 * @param {boolean} [pump]
 */
function run(start, seconds, pump = false) {
  let sim = start;
  for (let t = 0; t < seconds; t += 0.05) sim = stepSim(sim, 0.05, pump);
  return sim;
}

/** @param {import('./engine.js').SubstanceId} substance @param {number} channels */
const uneven = (substance, channels) =>
  createSim({ substance, outside: 32, inside: 4, channels, seed: 5 });

group('passive transport', () => {
  it('evens out a gradient of O₂ without any protein or ATP', () => {
    const end = run(uneven('o2', 0), 30);
    const { outside, inside } = counts(end);
    expect(Math.abs(outside - inside)).toBeLessThan(16);
    expect(end.atp).toBe(ATP_FULL);
  });

  it('keeps an ion on its side when the membrane has no protein', () => {
    expect(counts(run(uneven('k', 0), 30))).toEqual({ outside: 32, inside: 4 });
    expect(hasWayAt(substanceOf('k'), 0, 65)).toBe(false);
    expect(hasWayAt(substanceOf('o2'), 0, 65)).toBe(true);
  });

  it('goes faster with more transport proteins', () => {
    const after = (/** @type {number} */ channels) => counts(run(uneven('glucose', channels), 8));
    expect(after(4).inside).toBeGreaterThan(after(1).inside);
  });

  it('never loses or adds particles', () => {
    const end = run(uneven('glucose', 2), 10);
    const { outside, inside } = counts(end);
    expect(outside + inside).toBe(36);
  });

  it('asks for particles when both sides are empty', () => {
    const empty = createSim({ substance: 'o2', outside: 0, inside: 0, channels: 0 });
    expect(describe(empty, false).text).toContain('Chưa có');
  });

  it('says the sides are balanced once they are', () => {
    const end = run(createSim({ substance: 'o2', outside: 18, inside: 18, channels: 0 }), 5);
    expect(describe(end, false).tone).toBe('ok');
  });
});

group('active transport', () => {
  it('piles K⁺ up inside against the gradient and spends ATP', () => {
    const start = createSim({ substance: 'k', outside: 18, inside: 18, channels: 2, seed: 3 });
    const end = run(start, 20, true);
    const { outside, inside } = counts(end);
    expect(inside).toBeGreaterThan(outside + 10);
    expect(end.atp).toBeLessThan(ATP_FULL);
    expect(describe(end, true).text).toContain('chủ động');
  });

  it('stops without ATP, so the gradient runs down through the channels', () => {
    const start = createSim({ substance: 'k', outside: 2, inside: 34, channels: 4, atp: 0 });
    const end = run(start, 30, true);
    expect(counts(end).outside).toBeGreaterThan(8);
    expect(end.atp).toBe(0);
    expect(describe(end, true).tone).toBe('warn');
  });

  it('does not pump a substance the pump does not carry', () => {
    const end = run(uneven('o2', 0), 5, true);
    expect(end.atp).toBe(ATP_FULL);
  });
});

group('membrane shapes of endocytosis and exocytosis', () => {
  it('runs from flat to a vesicle going in, and the reverse coming out', () => {
    for (const m of BULK_MODES) {
      expect(m.steps).toHaveLength(BULK_STEPS);
      const first = bulkShape(m.id, 0);
      const last = bulkShape(m.id, BULK_STEPS - 1);
      expect(first.vesicle === null).toBe(m.inward);
      expect(last.vesicle === null).toBe(!m.inward);
    }
    expect(bulkShape('thuc-bao', 0).cargoY).toBeLessThan(bulkShape('thuc-bao', 3).cargoY);
    expect(bulkShape('xuat-bao', 0).cargoY).toBeGreaterThan(bulkShape('xuat-bao', 3).cargoY);
  });
});

group('membrane diagram', () => {
  it('passes the diagram checks', () => {
    expect(validateDiagram(MEMBRANE)).toEqual([]);
  });
});
