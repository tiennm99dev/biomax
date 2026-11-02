import { describe, expect, it } from 'vitest';
import {
  GROUPS,
  N0,
  N_MAX,
  SPAN_HOURS,
  cellsAfter,
  cellsAt,
  divisionsAt,
  exponentialEnd,
  groupAt,
  phaseAt,
  phaseSpans,
  sciTex,
  sciText,
} from './engine.js';

const CULTURE = { g: 30, lag: 2 };

describe('the formula for cell counts', () => {
  it('doubles once per division', () => {
    expect(cellsAfter(100, 0)).toBe(100);
    expect(cellsAfter(100, 6)).toBe(6400);
    expect(cellsAfter(1000, 10)).toBe(1024000);
  });
});

describe('the four phases of batch culture', () => {
  it('walks through the phases in order', () => {
    const end = exponentialEnd(CULTURE);
    expect(phaseAt(CULTURE, 0)).toBe('tiem-phat');
    expect(phaseAt(CULTURE, 3)).toBe('luy-thua');
    expect(phaseAt(CULTURE, end + 1)).toBe('can-bang');
    expect(phaseAt(CULTURE, end + 9)).toBe('suy-vong');
  });

  it('keeps the count flat in lag, rising in log, flat in stationary, falling in death', () => {
    const end = exponentialEnd(CULTURE);
    expect(cellsAt(CULTURE, 1)).toBe(N0);
    expect(cellsAt(CULTURE, 3)).toBeCloseTo(N0 * 4);
    expect(cellsAt(CULTURE, end + 2)).toBe(N_MAX);
    expect(cellsAt(CULTURE, end + 16)).toBeCloseTo(N_MAX / 10);
  });

  it('reaches the top sooner with a shorter generation time', () => {
    expect(exponentialEnd({ g: 20, lag: 2 })).toBeLessThan(exponentialEnd({ g: 60, lag: 2 }));
  });

  it('shows every phase inside the chart for every slider setting', () => {
    const missing = [];
    for (const g of [20, 40, 60]) {
      for (const lag of [1, 6]) {
        const ids = phaseSpans({ g, lag }).map((s) => s.id);
        if (ids.length !== 4) missing.push(`${g} ${lag}`);
      }
    }
    expect(missing).toEqual([]);
  });

  it('counts divisions only during exponential growth', () => {
    expect(divisionsAt(CULTURE, 1)).toBe(0);
    expect(divisionsAt(CULTURE, 4)).toBe(4);
    expect(divisionsAt(CULTURE, SPAN_HOURS)).toBeCloseTo(Math.log2(N_MAX / N0));
  });
});

describe('continuous culture', () => {
  it('has no death phase', () => {
    const culture = { ...CULTURE, mode: /** @type {const} */ ('lien-tuc') };
    expect(phaseAt(culture, SPAN_HOURS)).toBe('can-bang');
    expect(cellsAt(culture, SPAN_HOURS)).toBe(N_MAX);
    expect(phaseSpans(culture).map((s) => s.id)).toEqual(['tiem-phat', 'luy-thua', 'can-bang']);
  });
});

describe('writing large counts', () => {
  it('writes a scientific form with a decimal comma', () => {
    expect(sciTex(1500000)).toBe('1{,}5 \\cdot 10^{6}');
    expect(sciText(1500000)).toBe('1,5 nhân 10 mũ 6');
    expect(sciTex(1000)).toBe('1 \\cdot 10^{3}');
    expect(sciTex(9990000)).toBe('1 \\cdot 10^{7}');
  });
});

describe('temperature groups', () => {
  it('follows the ranges of the book, with gaps between them', () => {
    expect(groupAt(4)?.id).toBe('ua-lanh');
    expect(groupAt(37)?.id).toBe('ua-am');
    expect(groupAt(60)?.id).toBe('ua-nhiet');
    expect(groupAt(90)?.id).toBe('ua-sieu-nhiet');
    expect(groupAt(15)).toBeNull();
    expect(groupAt(50)).toBeNull();
    expect(GROUPS).toHaveLength(4);
  });
});
