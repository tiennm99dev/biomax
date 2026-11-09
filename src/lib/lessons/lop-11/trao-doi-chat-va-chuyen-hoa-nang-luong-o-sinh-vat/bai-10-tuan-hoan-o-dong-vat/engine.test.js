import { describe, expect, it } from 'vitest';
import {
  PHASES,
  REST_RATE,
  VESSELS,
  cardiacOutput,
  cycleOf,
  describeVessel,
  durations,
  phaseAt,
  rateOf,
  velocity,
} from './engine.js';

describe('cardiac cycle', () => {
  it('gives the book timings at 75 beats a minute', () => {
    const d = durations(REST_RATE);
    expect(cycleOf(REST_RATE)).toBeCloseTo(0.8);
    expect(d['nhi-co']).toBeCloseTo(0.1);
    expect(d['that-co']).toBeCloseTo(0.3);
    expect(d['dan-chung']).toBeCloseTo(0.4);
    expect(rateOf(0.6)).toBeCloseTo(100);
  });

  it('keeps all phases positive and shortens diastole most on a fast heart', () => {
    const bad = [50, 75, 100, 150].filter((r) => Object.values(durations(r)).some((v) => v <= 0));
    expect(bad).toEqual([]);
    const slow = durations(75);
    const fast = durations(150);
    expect(slow['dan-chung'] - fast['dan-chung']).toBeGreaterThan(
      slow['that-co'] - fast['that-co'],
    );
  });

  it('finds the phase at a moment of the cycle', () => {
    expect(phaseAt(0.05, 75).id).toBe('nhi-co');
    expect(phaseAt(0.2, 75).id).toBe('that-co');
    expect(phaseAt(0.6, 75).id).toBe('dan-chung');
    expect(phaseAt(0.85, 75).id).toBe('nhi-co');
  });

  it('opens the valves the right way round', () => {
    const bad = PHASES.filter((p) => p.avOpen === p.slOpen);
    expect(bad).toEqual([]);
  });
});

describe('blood vessels', () => {
  it('drops pressure all the way from the aorta to the venae cavae', () => {
    const bad = VESSELS.filter((v, i) => i > 0 && v.pressure >= VESSELS[i - 1].pressure);
    expect(bad).toEqual([]);
  });

  it('is slowest in the capillaries, which have the largest total cross-section', () => {
    const speeds = VESSELS.map((v) => velocity(5, v.area));
    const slowest = VESSELS[speeds.indexOf(Math.min(...speeds))];
    expect(slowest.id).toBe('mao-mach');
    expect(velocity(5, 2.5)).toBeCloseTo(333.33, 1);
    expect(velocity(10, 2.5)).toBeCloseTo(2 * velocity(5, 2.5));
    expect(describeVessel('mao-mach').tone).toBe('ok');
  });

  it('works out cardiac output', () => {
    expect(cardiacOutput(75, 70)).toBeCloseTo(5.25);
  });
});
