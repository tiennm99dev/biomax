import { describe, expect, it } from 'vitest';
import {
  MAX_SALT,
  NOTHING_SEEN,
  SAP,
  describeCell,
  isSettled,
  settledVolume,
  stepVolume,
  stomaOpening,
  tonicity,
  updateSeen,
} from './engine.js';

/** @param {number} start @param {number} salt @param {number} seconds */
function soak(start, salt, seconds) {
  let v = start;
  for (let t = 0; t < seconds; t += 0.05) v = stepVolume(v, salt, 0.05, true);
  return v;
}

describe('osmosis in a plant cell', () => {
  it('names the three media relative to the cell sap', () => {
    expect([tonicity(0), tonicity(SAP), tonicity(3)]).toEqual([
      'nhuoc-truong',
      'dang-truong',
      'uu-truong',
    ]);
  });

  it('shrinks in a hypertonic medium until the sap matches it', () => {
    expect(settledVolume(2)).toBe(0.5);
    expect(soak(1, 2, 120)).toBeCloseTo(0.5, 2);
  });

  it('shrinks faster in a stronger solution', () => {
    expect(soak(1, 4, 3)).toBeLessThan(soak(1, 1.5, 3));
  });

  it('refills in water and stops at the cell wall', () => {
    const end = soak(0.3, 0, 60);
    expect(end).toBe(1);
    expect(soak(1, 0, 10)).toBe(1);
  });

  it('never drops to nothing at the strongest solution', () => {
    expect(soak(1, MAX_SALT, 300)).toBeGreaterThanOrEqual(1 / MAX_SALT);
  });

  it('does nothing in a dead cell', () => {
    expect(stepVolume(1, 5, 10, false)).toBe(1);
    expect(isSettled(1, 5, false)).toBe(true);
  });
});

describe('what the learner sees', () => {
  it('closes the stoma as the cell loses water', () => {
    expect(stomaOpening(1)).toBe(1);
    expect(stomaOpening(0.5)).toBe(0);
  });

  it('counts a refill only after a shrink', () => {
    expect(updateSeen(NOTHING_SEEN, 1).refilled).toBe(false);
    const shrunk = updateSeen(NOTHING_SEEN, 0.5);
    expect(shrunk).toEqual({ shrunk: true, shut: true, refilled: false });
    expect(updateSeen(shrunk, 1).refilled).toBe(true);
  });

  it('describes each stage of the experiment', () => {
    expect(describeCell(1, 3, true).text).toContain('ưu trương');
    expect(describeCell(1 / 3, 3, true).text).toContain('ổn định');
    expect(describeCell(0.4, 0, true).text).toContain('Phản co');
    expect(describeCell(1, 0, true).text).toContain('nhược trương');
    expect(describeCell(1, SAP, true).text).toContain('đẳng trương');
    expect(describeCell(1, 3, false).tone).toBe('warn');
  });
});
