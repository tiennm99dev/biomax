import { describe, expect, it } from 'vitest';
import {
  ENZYMES,
  NEAR_BEST,
  SOURCE_BINS,
  SOURCE_CARDS,
  activity,
  curve,
  percentText,
  phFactor,
  ruins,
  tempFactor,
  verdict,
} from './engine.js';

/** @param {string} id */
function enzyme(id) {
  const found = ENZYMES.find((e) => e.id === id);
  if (!found) throw new Error(id);
  return found;
}

describe('the activity model', () => {
  it('peaks at each enzyme optimum', () => {
    const off = ENZYMES.filter((e) => activity(e, e.bestTemp, e.bestPh) !== 1);
    expect(off).toEqual([]);
  });

  it('rises up to the best temperature and falls after it', () => {
    const bad = ENZYMES.filter((e) => {
      const low = tempFactor(e, e.bestTemp - 10);
      const high = tempFactor(e, e.bestTemp + 5);
      return !(low < 1 && high < 1 && tempFactor(e, e.bestTemp - 20) < low);
    });
    expect(bad).toEqual([]);
  });

  it('doubles every ten degrees below the optimum', () => {
    const e = enzyme('amylase');
    expect(tempFactor(e, 27)).toBeCloseTo(0.5, 9);
    expect(tempFactor(e, 17)).toBeCloseTo(0.25, 9);
  });

  it('keeps pepsin working in acid and amylase near neutral', () => {
    const pepsin = enzyme('pepsin');
    const amylase = enzyme('amylase');
    expect(phFactor(pepsin, 2)).toBe(1);
    expect(phFactor(pepsin, 6.8)).toBeLessThan(0.01);
    expect(phFactor(amylase, 6.8)).toBe(1);
    expect(phFactor(amylase, 2)).toBe(0);
  });

  it('lets Taq polymerase survive what ruins amylase', () => {
    expect(ruins(enzyme('amylase'), 72, 7)).toBe(true);
    expect(ruins(enzyme('taq'), 95, 8.5)).toBe(false);
    expect(activity(enzyme('taq'), 72, 8.5)).toBe(1);
  });

  it('stays dead once denatured, even at the optimum', () => {
    const e = enzyme('amylase');
    expect(activity(e, 37, 6.8, true)).toBe(0);
  });

  it('draws a curve across the full range', () => {
    const points = curve(enzyme('pepsin'), 'ph', 37);
    expect(points).toHaveLength(101);
    expect(points[0].x).toBe(0);
    expect(points[100].x).toBe(14);
    expect(Math.max(...points.map((p) => p.y))).toBeCloseTo(1, 2);
  });
});

describe('the live explanation', () => {
  it('praises the optimum', () => {
    const e = enzyme('amylase');
    const out = verdict(e, 37, 6.8, false);
    expect(out.tone).toBe('ok');
    expect(activity(e, 37, 6.8)).toBeGreaterThanOrEqual(NEAR_BEST);
  });

  it('warns about denaturing and tells cold apart', () => {
    const e = enzyme('amylase');
    expect(verdict(e, 37, 6.8, true).tone).toBe('warn');
    expect(verdict(e, 5, 6.8, false).text).toContain('chưa hỏng');
    expect(verdict(e, 37, 3.5, false).text).toContain('pH lệch');
    expect(verdict(e, 55, 6.8, false).text).toContain('bị phá vỡ');
  });

  it('blames pH, not the heat, when the temperature is at its best', () => {
    const text = verdict(enzyme('amylase'), 37, 6, false).text;
    expect(text).toContain('pH lệch');
    expect(text).not.toContain('bị phá vỡ');
  });

  it('writes a share as a whole percentage', () => {
    expect(percentText(0.5)).toBe('50%');
  });
});

describe('the enzyme sources', () => {
  it('has three cards for each source', () => {
    const counts = SOURCE_BINS.map((b) => SOURCE_CARDS.filter((c) => c.bin === b.id).length);
    expect(counts).toEqual([3, 3, 3]);
  });
});
