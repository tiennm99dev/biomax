import { describe, expect, it } from 'vitest';
import { validateDiagram } from '#lib/domain/diagrams.js';
import {
  ATP_DIAGRAM,
  BEST_TEMP,
  CYCLE_STEPS,
  ENZYMES,
  NOTHING_SEEN,
  PROFILE,
  activity,
  activityCurve,
  amountFactor,
  ballOn,
  describeActivity,
  destroys,
  energyAt,
  nextStep,
  phFactor,
  tempFactor,
  updateSeen,
} from './engine.js';

const [AMYLASE, PEPSIN] = ENZYMES;
const BASE = { temp: 37, ph: 7, substrate: 50, enzyme: 50 };

describe('enzyme activity', () => {
  it('peaks at the best temperature and falls to zero when too hot', () => {
    expect(tempFactor(BEST_TEMP)).toBe(1);
    expect(tempFactor(10)).toBeLessThan(tempFactor(25));
    expect(tempFactor(25)).toBeLessThan(1);
    expect(tempFactor(50)).toBeLessThan(1);
    expect(tempFactor(60)).toBe(0);
  });

  it('gives each enzyme its own best pH', () => {
    expect(phFactor(7, AMYLASE.bestPh)).toBe(1);
    expect(phFactor(2, PEPSIN.bestPh)).toBe(1);
    expect(phFactor(2, AMYLASE.bestPh)).toBe(0);
    expect(phFactor(7, PEPSIN.bestPh)).toBe(0);
  });

  it('levels off as substrate grows and as enzyme grows', () => {
    const firstRise = amountFactor(20, 50) - amountFactor(0, 50);
    const lastRise = amountFactor(100, 50) - amountFactor(80, 50);
    expect(lastRise).toBeLessThan(firstRise / 4);
    expect(amountFactor(50, 100)).toBeCloseTo(amountFactor(100, 50));
    expect(amountFactor(100, 100)).toBe(1);
    expect(amountFactor(0, 0)).toBe(0);
  });

  it('marks heat and far-off pH as destroying the enzyme, but not cold', () => {
    expect(destroys({ ...BASE, temp: 60 }, 7)).toBe(true);
    expect(destroys({ ...BASE, ph: 2 }, 7)).toBe(true);
    expect(destroys({ ...BASE, temp: 0 }, 7)).toBe(false);
  });

  it('draws a flat zero curve for a destroyed enzyme and the true peak otherwise', () => {
    expect(activityCurve('temp', BASE, 7, true).every((p) => p.y === 0)).toBe(true);
    const curve = activityCurve('temp', BASE, 7, false);
    const top = curve.reduce((a, b) => (b.y > a.y ? b : a));
    expect(top.x).toBe(BEST_TEMP);
    expect(top.y).toBeCloseTo(activity(BASE, 7));
  });

  it('records the cold enzyme recovering only after it was cold', () => {
    const warm = updateSeen(NOTHING_SEEN, BASE, AMYLASE, false);
    expect(warm.rewarmed).toBe(false);
    const cold = updateSeen(warm, { ...BASE, temp: 2 }, AMYLASE, false);
    expect(cold.cold).toBe(true);
    expect(updateSeen(cold, BASE, AMYLASE, false).rewarmed).toBe(true);
    expect(updateSeen(cold, BASE, AMYLASE, true).rewarmed).toBe(false);
  });

  it('describes a destroyed enzyme as a warning and the best conditions as good', () => {
    expect(describeActivity(BASE, AMYLASE, true).tone).toBe('warn');
    expect(describeActivity(BASE, AMYLASE, false).tone).toBe('ok');
  });
});

describe('energy profile', () => {
  it('starts at the substrate, peaks at the barrier and ends at the product', () => {
    for (const barrier of [PROFILE.plain, PROFILE.withEnzyme]) {
      expect(energyAt(0, barrier)).toBeCloseTo(PROFILE.reactant);
      expect(energyAt(0.5, barrier)).toBeCloseTo(PROFILE.reactant + barrier);
      expect(energyAt(1, barrier)).toBeCloseTo(PROFILE.product);
    }
  });

  it('keeps the highest peak inside the chart', () => {
    expect(PROFILE.reactant + PROFILE.plain).toBeLessThanOrEqual(PROFILE.top);
  });

  it('crosses only with enough energy, and the enzyme lowers that need', () => {
    expect(ballOn(30, PROFILE.plain).crossed).toBe(false);
    expect(ballOn(30, PROFILE.withEnzyme).crossed).toBe(true);
    expect(energyAt(ballOn(30, PROFILE.plain).x, PROFILE.plain)).toBeCloseTo(PROFILE.reactant + 30);
  });
});

describe('catalytic cycle', () => {
  it('walks every step and counts a turn when it starts over', () => {
    let step = 0;
    for (let i = 1; i < CYCLE_STEPS.length; i++) {
      const next = nextStep(step);
      expect(next).toEqual({ step: i, finished: false });
      step = next.step;
    }
    expect(nextStep(step)).toEqual({ step: 0, finished: true });
  });
});

describe('ATP diagram', () => {
  it('is a valid hotspot diagram', () => {
    expect(validateDiagram(ATP_DIAGRAM)).toEqual([]);
  });
});
