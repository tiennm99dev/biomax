import { describe, expect, it } from 'vitest';
import {
  END_MINUTES,
  START_MASS,
  STEP_MINUTES,
  cobaltColor,
  cobaltShares,
  describeCobalt,
  plantState,
  ratePerHour,
  reading,
  runTable,
  waterLost,
} from './engine.js';

describe('weighing a branch', () => {
  it('starts every setup at the same mass', () => {
    expect(reading('la', 'nang', 0)).toBe(START_MASS);
    expect(reading('doi-chung', 'am', 0)).toBe(START_MASS);
  });

  it('loses water in the order the book reports', () => {
    const lost = (/** @type {import('./engine.js').SetupId} */ id) =>
      waterLost(reading(id, 'nang', END_MINUTES));
    expect(lost('la')).toBeGreaterThan(lost('khong-la'));
    expect(lost('khong-la')).toBeGreaterThan(lost('doi-chung'));
    expect(lost('doi-chung')).toBeLessThan(0.1);
  });

  it('transpires less in the shade and in a closed bag', () => {
    const sun = waterLost(reading('la', 'nang', END_MINUTES));
    const shade = waterLost(reading('la', 'ram', END_MINUTES));
    const bag = waterLost(reading('la', 'am', END_MINUTES));
    expect(sun).toBeGreaterThan(shade);
    expect(shade).toBeGreaterThan(bag);
  });

  it('never shows a reading that goes up, nor a mass above the start', () => {
    const bad = [];
    for (const place of /** @type {const} */ (['nang', 'ram', 'am'])) {
      const rows = runTable(place, END_MINUTES);
      expect(rows).toHaveLength(END_MINUTES / STEP_MINUTES + 1);
      for (let i = 1; i < rows.length; i++) {
        if (rows[i].masses[0] > rows[i - 1].masses[0]) bad.push([place, i]);
        if (rows[i].masses.some((m) => m > START_MASS)) bad.push([place, i, 'above']);
      }
    }
    expect(bad).toEqual([]);
  });

  it('gives an hourly rate and none at the start', () => {
    expect(ratePerHour(START_MASS, 0)).toBe(0);
    expect(ratePerHour(118.5, 30)).toBe(3);
  });
});

describe('cobalt chloride paper', () => {
  it('turns the lower paper pink first under glass', () => {
    const at5 = cobaltShares(5, true);
    expect(at5.lower).toBeGreaterThan(at5.upper);
    expect(cobaltShares(30, true)).toEqual({ upper: 1, lower: 1 });
  });

  it('makes both papers alike without glass and warns about it', () => {
    const open = cobaltShares(3, false);
    expect(open.lower).toBe(open.upper);
    expect(describeCobalt(3, false).tone).toBe('warn');
  });

  it('goes from blue to pink', () => {
    expect(cobaltColor(0)).toBe('rgb(37, 99, 235)');
    expect(cobaltColor(1)).toBe('rgb(244, 114, 182)');
  });
});

describe('care of the pots', () => {
  it('grows best with moderate water and fertiliser', () => {
    const best = plantState('vua', 'vua');
    expect(best.tone).toBe('ok');
    const others = /** @type {const} */ ([
      ['khong', 'vua'],
      ['qua-nhieu', 'vua'],
      ['vua', 'khong'],
      ['vua', 'qua-nhieu'],
    ]).map(([w, f]) => plantState(w, f));
    expect(others.every((p) => p.height < best.height && p.tone === 'warn')).toBe(true);
  });

  it('wilts when dry or waterlogged whatever the fertiliser', () => {
    expect(plantState('khong', 'vua').wilt).toBeGreaterThan(0);
    expect(plantState('qua-nhieu', 'khong').wilt).toBeGreaterThan(0);
    expect(plantState('vua', 'khong').wilt).toBe(0);
  });
});
