import { describe, expect, it } from 'vitest';
import {
  DOSE_MAX,
  LIMIT,
  addDose,
  advance,
  fresh,
  harvest,
  note,
  scatter,
  setAir,
} from './engine.js';

/**
 * @param {import('./engine.js').Pond} pond
 * @param {number} days
 */
function after(pond, days) {
  let p = pond;
  for (let i = 0; i < days; i += 1) p = advance(p);
  return p;
}

describe('organic matter in the pond', () => {
  it('falls slowly without added microbes and fast with them and air', () => {
    const untouched = after(fresh('huu-co'), 14);
    const treated = after(setAir(addDose(fresh('huu-co')), true), 14);
    expect(untouched.level).toBeGreaterThan(70);
    expect(treated.level).toBeLessThanOrEqual(LIMIT);
    expect(note(treated).tone).toBe('ok');
    expect(note(untouched).tone).toBe('warn');
  });

  it('stalls for lack of oxygen when many microbes get no air', () => {
    const start = addDose(addDose(addDose(fresh('huu-co'))));
    const still = after(start, 8);
    const aired = after(setAir(start, true), 8);
    expect(still.oxygen).toBeLessThan(2);
    expect(aired.level).toBeLessThan(still.level);
    expect(note(still).text).toContain('Thiếu oxygen');
  });

  it('never goes below zero and keeps one history point per day', () => {
    let p = fresh('huu-co');
    for (let i = 0; i < DOSE_MAX + 2; i += 1) p = addDose(p);
    expect(p.doses).toBe(DOSE_MAX);
    p = after(setAir(p, true), 60);
    expect(p.level).toBeGreaterThanOrEqual(0);
    expect(p.history).toHaveLength(61);
    expect(advance(p).day).toBe(60);
  });
});

describe('a heavy metal in the pond', () => {
  it('moves into the biomass and is never destroyed', () => {
    const p = after(addDose(addDose(fresh('kim-loai'))), 10);
    expect(p.level + p.held).toBeCloseTo(100, 6);
    expect(p.held).toBeGreaterThan(0);
  });

  it('stops when the microbes are full and asks for more', () => {
    const p = after(addDose(fresh('kim-loai')), 20);
    expect(p.level).toBeGreaterThan(LIMIT);
    expect(note(p).tone).toBe('warn');
    expect(note(p).text).toContain('giữ hết sức');
  });

  it('counts as done only once the biomass has been collected', () => {
    let p = after(addDose(addDose(addDose(addDose(fresh('kim-loai'))))), 20);
    expect(p.level).toBeLessThanOrEqual(LIMIT);
    expect(note(p).tone).toBe('info');
    p = harvest(p);
    expect(p.held).toBe(0);
    expect(p.doses).toBe(0);
    expect(p.level + p.removed).toBeCloseTo(100, 6);
    expect(note(p).tone).toBe('ok');
    expect(harvest(p)).toBe(p);
  });
});

describe('the pond picture', () => {
  it('keeps every spot inside its box', () => {
    const box = { x: 10, y: 20, w: 100, h: 50 };
    const outside = scatter(40, box, 0.3).filter(
      (s) => s.x < 10 || s.x > 110 || s.y < 20 || s.y > 70,
    );
    expect(outside).toEqual([]);
  });
});
