import { describe, expect, it } from 'vitest';
import {
  DISEASES,
  MEASURES,
  SAMPLE,
  emptyTally,
  observations,
  posterCheck,
  shares,
} from './engine.js';

describe('the survey tally', () => {
  it('turns the sample counts into shares of the households asked', () => {
    const rows = shares(SAMPLE.tally, SAMPLE.households);
    expect(rows.find((r) => r.id === 'cum')?.share).toBe(55);
    expect(rows.find((r) => r.id === 'sxh')?.share).toBe(22.5);
    expect(rows.find((r) => r.id === 'thuy-dau')?.share).toBe(7.5);
  });

  it('names the most common disease and its route in the observations', () => {
    const notes = observations(SAMPLE.tally, SAMPLE.households);
    expect(notes.at(-1)?.text).toContain('cúm');
    expect(notes.at(-1)?.text).toContain('đường hô hấp');
  });

  it('warns about a small sample and counts above the households asked', () => {
    const notes = observations({ ...emptyTally(), cum: 12 }, 10);
    expect(notes.map((n) => n.tone)).toEqual(['warn', 'warn', 'info']);
  });

  it('asks for data while nothing is entered', () => {
    expect(observations(emptyTally(), 0)[0].tone).toBe('info');
  });
});

describe('the poster check', () => {
  it('refers only to known measures', () => {
    const ids = MEASURES.map((m) => m.id);
    const bad = DISEASES.flatMap((d) => [...d.measures, ...d.extra]).filter(
      (m) => !ids.includes(m),
    );
    expect(bad).toEqual([]);
  });

  it('accepts exactly the needed measures, with or without the extra ones', () => {
    const bad = DISEASES.filter(
      (d) =>
        posterCheck(d.id, d.measures).tone !== 'ok' ||
        posterCheck(d.id, [...d.measures, ...d.extra]).tone !== 'ok',
    );
    expect(bad).toEqual([]);
  });

  it('flags a measure that does not fit the route', () => {
    const check = posterCheck('sxh', ['diet-muoi', 'ngu-man', 'khau-trang']);
    expect(check.tone).toBe('warn');
    expect(check.wrong.map((m) => m.id)).toEqual(['khau-trang']);
  });

  it('lists what a correct but short poster still misses', () => {
    const check = posterCheck('cum', ['khau-trang']);
    expect(check.tone).toBe('info');
    expect(check.missing.map((m) => m.id)).toEqual(['rua-tay', 'vac-xin', 'cach-li']);
  });
});
