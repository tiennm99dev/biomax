import { describe, expect, it } from 'vitest';
import {
  DEFENDERS,
  INVADERS,
  PRIMARY,
  SECONDARY,
  antibody,
  daysToProtect,
  defend,
  response,
  tally,
} from './engine.js';

describe('defence game', () => {
  it('has a known defender for every accepted answer', () => {
    const ids = new Set(DEFENDERS.map((d) => d.id));
    const bad = INVADERS.filter((v) => v.accept.length === 0 || v.accept.some((a) => !ids.has(a)));
    expect(bad).toEqual([]);
  });

  it('stops each invader only with the right defenders', () => {
    const skin = INVADERS.find((v) => v.id === 'bui-vi-khuan');
    const toxin = INVADERS.find((v) => v.id === 'doc-to');
    const flu = INVADERS.find((v) => v.id === 'te-bao-nhiem');
    if (!skin || !toxin || !flu) throw new Error('missing invader');
    expect(defend(skin, 'hang-rao').ok).toBe(true);
    expect(defend(toxin, 'khang-the').ok).toBe(true);
    expect(defend(toxin, 't-doc').ok).toBe(false);
    expect(defend(flu, 'khang-the').ok).toBe(false);
    expect(defend(flu, 't-doc').ok).toBe(true);
    expect(defend(flu, 'nk').ok).toBe(true);
  });

  it('counts which line won', () => {
    expect(tally(['hang-rao', 'khang-the', null, 't-doc', 'thuc-bao'])).toEqual({
      khong: 2,
      dac: 2,
    });
  });
});

describe('antibody responses', () => {
  it('peaks at the set day and height', () => {
    expect(response(PRIMARY.peak, PRIMARY)).toBeCloseTo(PRIMARY.height);
    expect(response(PRIMARY.lag, PRIMARY)).toBe(0);
    expect(response(SECONDARY.peak, SECONDARY)).toBeCloseTo(SECONDARY.height);
  });

  it('protects after about 7 to 10 days the first time and 2 to 3 days later', () => {
    const first = daysToProtect(PRIMARY);
    const second = daysToProtect(SECONDARY);
    expect(first).toBeGreaterThanOrEqual(7);
    expect(first).toBeLessThanOrEqual(10);
    expect(second).toBeGreaterThanOrEqual(2);
    expect(second).toBeLessThanOrEqual(3);
  });

  it('makes the second response much larger than the first', () => {
    const contacts = [0, 35];
    expect(antibody(35 + SECONDARY.peak, contacts)).toBeGreaterThan(
      5 * antibody(PRIMARY.peak, contacts),
    );
  });
});
