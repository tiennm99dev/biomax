import { describe, expect, it } from 'vitest';
import {
  DAYS,
  FIRST_CASES,
  POPULATION,
  PREVENTION_BINS,
  PREVENTION_CARDS,
  effectiveR,
  simulate,
  verdict,
} from './engine.js';

const none = { r0: 4, vaccinated: 0, masked: 0 };

describe('effective reproduction number', () => {
  it('is the basic number when nothing is done', () => {
    expect(effectiveR(none)).toBe(4);
  });

  it('falls with vaccination and with masks', () => {
    expect(effectiveR({ ...none, vaccinated: 0.5 })).toBeCloseTo(2.2, 9);
    expect(effectiveR({ ...none, masked: 1 })).toBeCloseTo(2, 9);
    expect(effectiveR({ r0: 4, vaccinated: 0.5, masked: 1 })).toBeCloseTo(1.1, 9);
  });
});

describe('the outbreak', () => {
  it('starts from the first cases and covers every day', () => {
    const { days } = simulate(none);
    expect(days).toHaveLength(DAYS + 1);
    expect(days[0]).toEqual({ day: 0, infectious: FIRST_CASES, total: FIRST_CASES });
  });

  it('never has more cases than people, and totals only grow', () => {
    const bad = [];
    for (const r0 of [2, 4, 8]) {
      const { days } = simulate({ r0, vaccinated: 0, masked: 0 });
      for (let i = 1; i < days.length; i++) {
        if (days[i].total < days[i - 1].total) bad.push(`${r0} ${i}`);
        if (days[i].total > POPULATION || days[i].infectious < 0) bad.push(`${r0} ${i}`);
      }
    }
    expect(bad).toEqual([]);
  });

  it('gets smaller and later with more vaccine or more masks', () => {
    const base = simulate({ r0: 2, vaccinated: 0, masked: 0 });
    const vaccine = simulate({ r0: 2, vaccinated: 0.3, masked: 0 });
    const masks = simulate({ r0: 2, vaccinated: 0, masked: 0.5 });
    expect(vaccine.total).toBeLessThan(base.total);
    expect(vaccine.peak).toBeLessThan(base.peak);
    expect(vaccine.peakDay).toBeGreaterThan(base.peakDay);
    expect(masks.total).toBeLessThan(base.total);
    expect(masks.peak).toBeLessThan(base.peak);
  });

  it('dies out from the first day once a case infects fewer than one person', () => {
    const out = simulate({ r0: 4, vaccinated: 0.9, masked: 0 });
    expect(out.re).toBeLessThan(1);
    expect(out.peakDay).toBe(0);
    expect(out.peak).toBe(FIRST_CASES);
    expect(out.total).toBeLessThan(POPULATION * 0.01);
  });
});

describe('the verdict', () => {
  it('reads each kind of outcome', () => {
    const untouched = simulate(none);
    expect(verdict(untouched, untouched).tone).toBe('warn');
    expect(verdict(simulate({ r0: 4, vaccinated: 0.5, masked: 0 }), untouched).tone).toBe('info');
    const stopped = verdict(simulate({ r0: 4, vaccinated: 0.9, masked: 0 }), untouched);
    expect(stopped.tone).toBe('ok');
    expect(stopped.text).toContain('99%');
  });
});

describe('the verdict at exactly one new case per case', () => {
  it('claims neither that the outbreak spreads nor that it dies out', () => {
    const text = verdict(
      simulate({ r0: 2, vaccinated: 0, masked: 1 }),
      simulate({ r0: 2, vaccinated: 0, masked: 0 }),
    ).text;
    expect(text).toContain('đúng 1 người');
    expect(text).not.toContain('hơn 1 người');
  });
});

describe('the prevention cards', () => {
  it('fills every disease bin with three different cards', () => {
    const sizes = PREVENTION_BINS.map((b) => PREVENTION_CARDS.filter((c) => c.bin === b.id).length);
    expect(sizes).toEqual([3, 3, 3]);
    expect(new Set(PREVENTION_CARDS.map((c) => c.id)).size).toBe(PREVENTION_CARDS.length);
  });
});
