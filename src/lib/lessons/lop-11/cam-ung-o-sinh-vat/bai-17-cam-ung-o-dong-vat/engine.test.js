import { describe, expect, it } from 'vitest';
import { PEAK, REST, THRESHOLD, fires, potential, stateAt, synapseAt, verdict } from './engine.js';

/** @param {number} strength @param {boolean} blocked */
function peakOf(strength, blocked) {
  let top = -Infinity;
  for (let i = 0; i <= 500; i++) top = Math.max(top, potential(i / 100, strength, blocked));
  return top;
}

describe('action potential model', () => {
  it('rests at −70 mV before the stimulus', () => {
    expect(potential(0.5, 30, false)).toBe(REST);
    expect(stateAt(0.5, 30, false).phase).toBe('nghi');
  });

  it('fires all or none at the threshold', () => {
    expect(fires(THRESHOLD - REST - 1, false)).toBe(false);
    expect(fires(THRESHOLD - REST, false)).toBe(true);
    expect(peakOf(16, false)).toBeCloseTo(PEAK, 5);
    expect(peakOf(40, false)).toBeCloseTo(PEAK, 5);
    expect(peakOf(10, false)).toBeLessThan(THRESHOLD);
  });

  it('gives no action potential with Na⁺ channels blocked', () => {
    expect(peakOf(40, true)).toBeLessThan(0);
    expect(verdict(40, true).tone).toBe('warn');
  });

  it('runs through the three phases with the right channels open', () => {
    /** @type {string[]} */
    const phases = [];
    for (let i = 100; i <= 300; i += 5) {
      const s = stateAt(i / 100, 25, false);
      if (phases[phases.length - 1] !== s.phase) phases.push(s.phase);
    }
    expect(phases).toEqual(['mat-phan-cuc', 'dao-cuc', 'tai-phan-cuc']);
    expect(stateAt(1.5, 25, false).na).toBe(true);
    expect(stateAt(2.4, 25, false).k).toBe(true);
    expect(potential(4, 25, false)).toBeCloseTo(REST, 5);
  });
});

describe('chemical synapse', () => {
  const normal = { noCalcium: false, noEnzyme: false };

  it('passes the signal on at step 3 and resets at step 4', () => {
    expect(synapseAt(3, normal).post).toBe(true);
    const end = synapseAt(4, normal);
    expect(end.post).toBe(false);
    expect(end.recycled).toBe(true);
  });

  it('releases nothing without calcium', () => {
    const v = synapseAt(4, { noCalcium: true, noEnzyme: false });
    expect(v.cleft).toBe(0);
    expect(v.post).toBe(false);
    expect(v.tone).toBe('warn');
  });

  it('keeps the postsynaptic membrane excited without the enzyme', () => {
    const v = synapseAt(4, { noCalcium: false, noEnzyme: true });
    expect(v.bound).toBe(true);
    expect(v.post).toBe(true);
  });
});
