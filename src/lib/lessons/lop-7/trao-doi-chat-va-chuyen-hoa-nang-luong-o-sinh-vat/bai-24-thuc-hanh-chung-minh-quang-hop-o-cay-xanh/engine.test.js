import { describe, expect, it } from 'vitest';
import {
  STARCH_TEXT,
  gasFraction,
  iodineColour,
  splint,
  starchLevel,
  starchResult,
} from './engine.js';

describe('starch practical', () => {
  it('shows starch only in the lit part when done as in the book', () => {
    const r = starchResult({ darkFirst: true, hours: 5, alcohol: true });
    expect(r).toEqual({ covered: 'vang-nau', open: 'xanh-tim', verdict: 'ok' });
  });

  it('turns the whole leaf blue-violet without the two dark days', () => {
    const r = starchResult({ darkFirst: false, hours: 5, alcohol: true });
    expect(r.covered).toBe('xanh-tim');
    expect(r.open).toBe('xanh-tim');
    expect(r.verdict).toBe('chua-de-toi');
  });

  it('needs the chlorophyll removed and enough hours of light', () => {
    expect(starchResult({ darkFirst: true, hours: 5, alcohol: false }).verdict).toBe('chua-tay');
    const short = starchResult({ darkFirst: true, hours: 2, alcohol: true });
    expect(short.verdict).toBe('it-sang');
    expect(short.open).toBe('xanh-tim-nhat');
    expect(starchResult({ darkFirst: true, hours: 3, alcohol: true }).open).toBe('xanh-tim-nhat');
    expect(starchResult({ darkFirst: true, hours: 0, alcohol: true }).open).toBe('vang-nau');
  });

  it('maps starch levels to iodine colours', () => {
    expect(starchLevel({ darkFirst: true, covered: true, hours: 6 })).toBe(0);
    expect(iodineColour(1)).toBe('xanh-tim');
    expect(iodineColour(0.3)).toBe('xanh-tim-nhat');
    expect(iodineColour(0)).toBe('vang-nau');
    for (const t of Object.values(STARCH_TEXT)) expect(t).not.toContain('$');
  });
});

describe('oxygen practical', () => {
  it('collects gas only in the light', () => {
    expect(gasFraction(false, 6)).toBe(0);
    expect(gasFraction(true, 6)).toBeCloseTo(0.75);
    expect(gasFraction(true, 20)).toBe(0.9);
  });

  it('relights the splint in the lit tube after about 6 hours', () => {
    expect(splint(gasFraction(true, 6))).toBe('bung-chay');
    expect(splint(gasFraction(false, 6))).toBe('tat');
    expect(splint(gasFraction(true, 2))).toBe('tat');
  });
});
