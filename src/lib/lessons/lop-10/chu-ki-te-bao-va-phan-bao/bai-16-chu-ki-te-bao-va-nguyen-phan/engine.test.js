import { describe, expect, it } from 'vitest';
import {
  ALL_MET,
  CHECKPOINTS,
  MAX_CYCLES,
  PHASES,
  advance,
  clusterSpots,
  phaseAt,
  startState,
  statusOf,
} from './engine.js';

/**
 * Runs a cell in small steps until it stops or the step budget runs out.
 * @param {import('./engine.js').CycleState} state
 * @param {import('./engine.js').Conditions} conditions
 * @param {boolean} control
 */
function run(state, conditions, control, steps = 400) {
  let s = state;
  for (let i = 0; i < steps && !s.done && !s.stopped; i++)
    s = advance(s, 0.01, conditions, control);
  return s;
}

describe('the ring', () => {
  it('covers one whole turn without gaps', () => {
    expect(PHASES[0].from).toBe(0);
    expect(PHASES.at(-1)?.to).toBe(1);
    PHASES.slice(1).forEach((ph, i) => expect(ph.from).toBe(PHASES[i].to));
  });

  it('puts G1/S before S, G2/M before M and the spindle check inside M', () => {
    const at = Object.fromEntries(CHECKPOINTS.map((c) => [c.id, c.at]));
    expect(phaseAt(at.g1s - 0.001).id).toBe('G1');
    expect(phaseAt(at.g2m - 0.001).id).toBe('G2');
    expect(phaseAt(at.thoi).id).toBe('M');
  });
});

describe('a cell under control', () => {
  it('finishes one cycle with two cells when every condition is met', () => {
    const end = run(startState(), ALL_MET, true);
    expect(end).toMatchObject({ cells: 2, cycles: 1, errors: 0, done: true });
    expect(statusOf(end, true, false).tone).toBe('ok');
  });

  it('stops at the first checkpoint whose condition is not met, and stays there', () => {
    for (const c of CHECKPOINTS) {
      const end = run(startState(), { ...ALL_MET, [c.id]: false }, true);
      expect(end).toMatchObject({ stopped: c.id, p: c.at, cells: 1 });
      expect(advance(end, 0.01, { ...ALL_MET, [c.id]: false }, true)).toMatchObject({
        stopped: c.id,
        p: c.at,
      });
      expect(statusOf(end, true, false).text).toContain(c.stop);
    }
  });

  it('goes on from a checkpoint once its condition is met', () => {
    const held = run(startState(), { ...ALL_MET, g2m: false }, true);
    const end = run({ ...held, stopped: null }, ALL_MET, true);
    expect(end).toMatchObject({ cells: 2, done: true });
  });
});

describe('a cell out of control', () => {
  it('doubles every cycle up to the limit', () => {
    const end = run(startState(), ALL_MET, false, 2000);
    expect(end.cycles).toBe(MAX_CYCLES);
    expect(end.cells).toBe(2 ** MAX_CYCLES);
    expect(statusOf(end, false, false).tone).toBe('warn');
  });

  it('counts every unmet condition it runs through', () => {
    const end = run(startState(), { g1s: false, g2m: true, thoi: false }, false, 2000);
    expect(end.errors).toBe(2 * MAX_CYCLES);
    expect(statusOf(end, false, false).text).toContain(`${2 * MAX_CYCLES} lần`);
  });
});

describe('the cluster', () => {
  it('gives each cell its own spot', () => {
    const spots = clusterSpots(64, 260, 110);
    expect(spots).toHaveLength(64);
    expect(new Set(spots.map((s) => `${s.x},${s.y}`)).size).toBe(64);
  });
});
