import { describe, expect, it } from 'vitest';
import {
  RIVALS,
  competition,
  competitionOutcome,
  explainPredation,
  peaks,
  predatorPrey,
  predatorPreyBalance,
} from './engine.js';

describe('predator and prey', () => {
  it('swings with the predator peak after the prey peak', () => {
    const s = predatorPrey(200, 30, 60);
    const prey = peaks(s.a);
    const pred = peaks(s.b);
    expect(prey.length).toBeGreaterThan(2);
    const late = prey.filter((p, i) => !(pred[i] > p && pred[i] - p < 8));
    expect(late).toEqual([]);
  });

  it('settles near the balance and keeps the prey far below K', () => {
    const s = predatorPrey(200, 30, 400);
    const b = predatorPreyBalance();
    expect(Math.abs(s.a[400] - b.prey)).toBeLessThan(5);
    expect(Math.abs(s.b[400] - b.predators)).toBeLessThan(5);
    expect(b.prey).toBe(100);
  });

  it('lets the prey grow to K without predators', () => {
    const s = predatorPrey(200, 0, 60);
    expect(Math.round(s.a[60])).toBe(1000);
    expect(explainPredation(s, 10)).toContain('sức chứa');
  });
});

describe('competition', () => {
  it('matches the analytic outcome for every overlap on the slider', () => {
    const bad = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1].filter((alpha) => {
      const s = competition(alpha, 400);
      const o = competitionOutcome(alpha);
      return Math.abs(s.a[400] - o.a) > 2 || Math.abs(s.b[400] - o.b) > 2;
    });
    expect(bad).toEqual([]);
  });

  it('coexists below K2/K1 and excludes above', () => {
    expect(competitionOutcome(0.7).kind).toBe('coexist');
    expect(competitionOutcome(0.8).kind).toBe('exclude');
    expect(competitionOutcome(0).a).toBe(RIVALS.k1);
  });
});
