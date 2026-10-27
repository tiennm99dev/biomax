import { describe, expect, it } from 'vitest';
import { YEARS, equilibrium, huntRate, outcome, peakYear, simulate } from './engine.js';

describe('rabbit and fox model', () => {
  it('turns a yearly hunting share into a removal rate', () => {
    expect(huntRate(0)).toBe(0);
    expect(huntRate(1)).toBe(Infinity);
    expect(1 - Math.exp(-huntRate(0.4))).toBeCloseTo(0.4, 10);
  });

  it('settles round the equilibrium without hunting', () => {
    const run = simulate({ rabbits: 500, foxes: 20 });
    expect(run).toHaveLength(YEARS * 4 + 1);
    const eq = equilibrium();
    expect(eq).not.toBeNull();
    const last = run[run.length - 1];
    expect(Math.abs(last.rabbits - (eq?.rabbits ?? 0))).toBeLessThan(15);
    expect(Math.abs(last.foxes - (eq?.foxes ?? 0))).toBeLessThan(5);
    expect(outcome(run)).toBe('balanced');
  });

  it('reaches the same balance from other starting sizes', () => {
    for (const start of [
      { rabbits: 100, foxes: 100 },
      { rabbits: 1500, foxes: 10 },
    ]) {
      expect(outcome(simulate(start))).toBe('balanced');
    }
  });

  it('has the foxes peak after the rabbits', () => {
    const run = simulate({ rabbits: 500, foxes: 20 });
    expect(peakYear(run, 'foxes', 0, 10)).toBeGreaterThan(peakYear(run, 'rabbits', 0, 10));
  });

  it('loses the foxes when they are hunted too hard', () => {
    expect(equilibrium(0.9, 0)).toBeNull();
    const run = simulate({ rabbits: 500, foxes: 20, huntFox: 0.9 });
    expect(outcome(run)).toBe('no-fox');
    expect(run[run.length - 1].rabbits).toBeGreaterThan(1900);
  });

  it('loses both species when the rabbits are hunted too hard', () => {
    expect(outcome(simulate({ rabbits: 500, foxes: 20, huntRabbit: 0.8 }))).toBe('no-rabbit');
  });

  it('keeps both species under moderate hunting', () => {
    expect(outcome(simulate({ rabbits: 500, foxes: 20, huntFox: 0.3, huntRabbit: 0.2 }))).toBe(
      'balanced',
    );
  });
});

describe('total hunting', () => {
  it('wipes a species out without breaking the numbers', () => {
    const run = simulate({ rabbits: 500, foxes: 20, huntFox: 1 });
    expect(run.every((p) => Number.isFinite(p.rabbits) && Number.isFinite(p.foxes))).toBe(true);
    expect(outcome(run)).toBe('no-fox');
    expect(outcome(simulate({ rabbits: 500, foxes: 20, huntRabbit: 1 }))).toBe('no-rabbit');
  });
});
