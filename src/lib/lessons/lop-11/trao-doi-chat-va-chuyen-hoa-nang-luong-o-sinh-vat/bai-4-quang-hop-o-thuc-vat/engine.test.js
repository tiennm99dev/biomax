import { describe, expect, it } from 'vitest';
import {
  AIR_CO2,
  GROUP_BINS,
  GROUP_CARDS,
  PLANTS,
  START_CHLOROPLAST,
  advance,
  co2Factor,
  compensationPoint,
  describeLeaf,
  describePhases,
  gross,
  net,
  respiration,
  saturationPoint,
} from './engine.js';

const [C3, SHADE, C4] = PLANTS;
const AIR = { co2: AIR_CO2, temp: 28 };

describe('light curve', () => {
  it('breaks even at the compensation point', () => {
    const bad = PLANTS.filter((p) => {
      const lc = compensationPoint(p, AIR);
      return lc === null || Math.abs(net(p, AIR, lc)) > 1e-9;
    });
    expect(bad).toEqual([]);
  });

  it('gives only respiration in the dark and rises with light', () => {
    expect(net(C3, AIR, 0)).toBeCloseTo(-respiration(C3, 28));
    expect(gross(C3, AIR, 30)).toBeGreaterThan(gross(C3, AIR, 10));
  });

  it('barely rises past the saturation point', () => {
    const ls = saturationPoint(C3, AIR) ?? 0;
    expect(gross(C3, AIR, 100) - gross(C3, AIR, ls)).toBeLessThan(0.06 * gross(C3, AIR, 100));
  });

  it('saturates later in C4 and earlier in shade plants', () => {
    const at = (/** @type {typeof C3} */ p) => saturationPoint(p, AIR) ?? 0;
    expect(at(C4)).toBeGreaterThan(at(C3));
    expect(at(SHADE)).toBeLessThan(at(C3));
    expect(compensationPoint(SHADE, AIR) ?? 9).toBeLessThan(compensationPoint(C3, AIR) ?? 0);
  });

  it('follows the book on CO2: rises to a limit, harmful around 0,2 %', () => {
    expect(co2Factor(C3, 0.06)).toBeGreaterThan(co2Factor(C3, AIR_CO2));
    expect(co2Factor(C3, 0.1)).toBeGreaterThan(0.95);
    expect(co2Factor(C3, 0.2)).toBeLessThan(co2Factor(C3, 0.1));
    expect(co2Factor(C3, 0.005)).toBe(0);
  });

  it('keeps C4 working at a low CO2 where C3 is nearly stopped', () => {
    expect(co2Factor(C4, 0.01)).toBeGreaterThan(co2Factor(C3, 0.01));
  });

  it('cannot break even when it is far too hot', () => {
    const hot = { co2: AIR_CO2, temp: 50 };
    expect(compensationPoint(C3, hot)).toBeNull();
    expect(describeLeaf(C3, hot, 50).zone).toBe('never');
  });

  it('names each zone along the light axis', () => {
    expect(describeLeaf(C3, AIR, 0).zone).toBe('below');
    expect(describeLeaf(C3, AIR, Math.round(compensationPoint(C3, AIR) ?? 0)).zone).toBe('at');
    expect(describeLeaf(C3, AIR, 20).zone).toBe('rising');
    expect(describeLeaf(C3, AIR, 100).zone).toBe('flat');
  });
});

describe('the two phases', () => {
  const steady = advance(START_CHLOROPLAST, 120);

  it('keeps making sugar and oxygen with light and CO2', () => {
    const later = advance(steady, 30);
    expect(later.sugar).toBeGreaterThan(steady.sugar);
    expect(later.oxygen).toBeGreaterThan(steady.oxygen);
  });

  it('raises 3-PGA and lowers RuBP when the light goes out', () => {
    const dark = advance({ ...steady, light: false }, 60);
    expect(dark.power).toBeLessThan(steady.power);
    expect(dark.pga).toBeGreaterThan(steady.pga);
    expect(dark.rubp).toBeLessThan(steady.rubp);
    expect(dark.oxygen).toBe(steady.oxygen);
  });

  it('raises RuBP and lowers 3-PGA when CO2 runs out', () => {
    const noCo2 = advance({ ...steady, co2: false }, 60);
    expect(noCo2.pga).toBeLessThan(steady.pga);
    expect(noCo2.rubp).toBeGreaterThan(steady.rubp);
    expect(noCo2.power).toBeGreaterThan(steady.power);
  });

  it('stops sugar once the light has been off for long', () => {
    const dark = advance({ ...steady, light: false }, 300);
    const later = advance(dark, 30);
    expect(later.sugar - dark.sugar).toBeLessThan(0.05);
  });

  it('keeps the carbon count exact in the cycle without new CO2', () => {
    const carbon = (/** @type {typeof steady} */ c) => 5 * c.rubp + 3 * c.pga + 3 * c.sugar;
    const closed = { ...steady, co2: false };
    expect(carbon(advance(closed, 60))).toBeCloseTo(carbon(closed), 6);
  });

  it('never lets a pool go negative', () => {
    const states = [
      advance({ ...steady, light: false }, 500),
      advance({ ...steady, co2: false }, 500),
      advance({ ...steady, co2: false, light: false }, 500),
    ];
    expect(states.every((c) => c.power >= 0 && c.rubp >= 0 && c.pga >= 0)).toBe(true);
  });

  it('describes all four conditions differently', () => {
    const texts = [
      [true, true],
      [true, false],
      [false, true],
      [false, false],
    ].map(([light, co2]) => describePhases({ ...START_CHLOROPLAST, light, co2 }).text);
    expect(new Set(texts).size).toBe(4);
  });
});

describe('plant groups', () => {
  it('points every card at an existing bin', () => {
    const ids = GROUP_BINS.map((b) => b.id);
    expect(GROUP_CARDS.every((c) => ids.includes(c.bin))).toBe(true);
  });

  it('writes the sorter hints as plain text, since the sorter prints them as is', () => {
    expect(GROUP_CARDS.filter((c) => c.why.includes('$'))).toEqual([]);
  });
});
