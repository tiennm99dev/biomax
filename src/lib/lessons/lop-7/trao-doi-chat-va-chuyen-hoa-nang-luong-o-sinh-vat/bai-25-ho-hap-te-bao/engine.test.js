import { describe, expect, it } from 'vitest';
import { ACTIVITIES, COMPARE_BINS, COMPARE_CARDS, MEAL, eat, emptyCell, minute } from './engine.js';

describe('mitochondrion model', () => {
  it('breaks glucose down with oxygen into carbon dioxide, water and energy', () => {
    const fed = eat(emptyCell());
    expect(fed.glucose).toBe(MEAL);
    const r = minute(fed, 'di-bo', true);
    expect(r.broken).toBe(2);
    expect(r.state).toEqual({ glucose: MEAL - 2, oxygen: 2, co2: 2, water: 2, atp: 2, heat: 2 });
  });

  it('does nothing without oxygen or without glucose', () => {
    const fed = eat(emptyCell());
    const noO2 = minute(fed, 'chay', false);
    expect(noO2.broken).toBe(0);
    expect(noO2.state).toBe(fed);
    expect(noO2.text).toContain('oxygen');
    const empty = minute(emptyCell(), 'nghi', true);
    expect(empty.broken).toBe(0);
    expect(empty.text).toContain('Hết glucose');
  });

  it('uses more glucose and oxygen for harder activities', () => {
    expect(ACTIVITIES.chay.demand).toBeGreaterThan(ACTIVITIES['di-bo'].demand);
    expect(ACTIVITIES['di-bo'].demand).toBeGreaterThan(ACTIVITIES.nghi.demand);
    let s = eat(emptyCell());
    s = minute(s, 'chay', true).state;
    const last = minute(s, 'chay', true);
    expect(last.broken).toBe(MEAL - ACTIVITIES.chay.demand);
    expect(last.text).toContain('mệt');
  });
});

describe('comparison cards', () => {
  it('puts every card in a known bin, with every bin used', () => {
    const bins = COMPARE_BINS.map((b) => b.id);
    for (const c of COMPARE_CARDS) expect(bins).toContain(c.bin);
    for (const b of bins) expect(COMPARE_CARDS.some((c) => c.bin === b)).toBe(true);
    expect(new Set(COMPARE_CARDS.map((c) => c.id)).size).toBe(COMPARE_CARDS.length);
  });
});
