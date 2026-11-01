import { describe, expect, it } from 'vitest';
import { CHALLENGES, LEVELS, NORMAL_BODY, bodyState, judgeLevel } from './engine.js';

describe('organisation levels', () => {
  it('climbs from molecule to biosphere in order', () => {
    expect(LEVELS.map((l) => l.id)).toEqual([
      'phan-tu',
      'bao-quan',
      'te-bao',
      'mo',
      'co-quan',
      'he-co-quan',
      'co-the',
      'quan-the',
      'quan-xa',
      'he-sinh-thai',
      'sinh-quyen',
    ]);
  });

  it('marks the five basic levels of the book', () => {
    expect(LEVELS.filter((l) => l.kind === 'co-ban').map((l) => l.id)).toEqual([
      'te-bao',
      'co-the',
      'quan-the',
      'quan-xa',
      'he-sinh-thai',
    ]);
  });

  it('keeps everything below the cell out of the living levels', () => {
    const cell = LEVELS.findIndex((l) => l.id === 'te-bao');
    const below = LEVELS.slice(0, cell).map((l) => l.kind);
    expect(below).toEqual(['chua-song', 'chua-song']);
    expect(LEVELS.slice(cell).filter((l) => l.kind === 'chua-song')).toEqual([]);
  });

  it('points every challenge at a level of the ladder', () => {
    const ids = LEVELS.map((l) => l.id);
    expect(CHALLENGES.filter((c) => !ids.includes(c.level))).toEqual([]);
  });

  it('accepts only the named level and tells which way to move', () => {
    const mo = LEVELS.findIndex((l) => l.id === 'mo');
    expect(judgeLevel('mo', mo).ok).toBe(true);
    expect(judgeLevel('mo', mo - 1).text).toContain('cao hơn');
    expect(judgeLevel('mo', mo + 1).text).toContain('thấp hơn');
  });
});

describe('body temperature model', () => {
  it('stays near normal across the whole range when regulated', () => {
    const off = [];
    for (let t = 0; t <= 45; t += 5) {
      const s = bodyState(t, true);
      if (Math.abs(s.body - NORMAL_BODY) > 0.3 || s.danger) off.push(t);
    }
    expect(off).toEqual([]);
  });

  it('names the response to heat and to cold', () => {
    expect(bodyState(40, true).response).toContain('đổ mồ hôi');
    expect(bodyState(5, true).response).toContain('run');
  });

  it('follows the outside air and turns dangerous without regulation', () => {
    expect(bodyState(25, false).body).toBe(NORMAL_BODY);
    expect(bodyState(45, false).body).toBeCloseTo(40);
    expect(bodyState(45, false).danger).toBe(true);
    expect(bodyState(0, false).danger).toBe(true);
    expect(bodyState(25, false).danger).toBe(false);
  });
});
