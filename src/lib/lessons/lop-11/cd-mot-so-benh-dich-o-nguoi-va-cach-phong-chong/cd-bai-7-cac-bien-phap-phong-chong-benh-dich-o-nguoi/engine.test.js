import { describe, expect, it } from 'vitest';
import {
  DISEASES,
  MEASURES,
  coverageNeeded,
  effectiveR,
  idleMeasures,
  prevented,
  preventionVerdict,
  unchecked,
  withMeasures,
} from './engine.js';

describe('the prevention simulator', () => {
  it('lets every disease grow into an outbreak when nothing is done', () => {
    expect(DISEASES.filter((d) => unchecked(d.id).r0 <= 1).map((d) => d.id)).toEqual([]);
  });

  it('stops each disease with the measures that cut its own route', () => {
    const plans = {
      cum: ['khau-trang', 'cach-li'],
      ta: ['an-chin', 've-sinh'],
      sxh: ['diet-muoi'],
      vgb: ['an-toan-mau'],
    };
    const still = Object.entries(plans).filter(([id, on]) => effectiveR(id, on, 0) > 1);
    expect(still).toEqual([]);
  });

  it('does nothing with a measure aimed at another route', () => {
    expect(withMeasures('sxh', ['khau-trang', 'an-chin'])).toEqual(withMeasures('sxh', []));
    expect(idleMeasures('sxh', ['khau-trang', 'diet-muoi', 'dieu-tri']).map((m) => m.id)).toEqual([
      'khau-trang',
    ]);
  });

  it('shortens the infectious period with treatment on every route', () => {
    const bad = DISEASES.filter((d) => withMeasures(d.id, ['dieu-tri']).days >= d.days);
    expect(bad).toEqual([]);
  });

  it('needs 1 − 1/R0 of the community vaccinated', () => {
    expect(coverageNeeded('cum', [])).toBe(60);
    expect(effectiveR('cum', [], 60)).toBeCloseTo(1, 6);
    expect(prevented('cum', [], 70).total).toBeLessThan(unchecked('cum').total / 10);
  });

  it('ignores the vaccine slider for a disease without a vaccine in the lesson', () => {
    expect(prevented('sxh', [], 80).total).toBe(unchecked('sxh').total);
  });

  it('judges the result against the unchecked outbreak', () => {
    const base = unchecked('cum');
    const stopped = prevented('cum', ['khau-trang', 'cach-li'], 0);
    expect(
      preventionVerdict(stopped, base, effectiveR('cum', ['khau-trang', 'cach-li'], 0)).tone,
    ).toBe('ok');
    const wrong = prevented('cum', ['diet-muoi'], 0);
    expect(preventionVerdict(wrong, base, effectiveR('cum', ['diet-muoi'], 0)).tone).toBe('warn');
    const part = prevented('cum', ['khau-trang'], 0);
    expect(preventionVerdict(part, base, effectiveR('cum', ['khau-trang'], 0)).tone).toBe('info');
  });

  it('gives every measure a reason', () => {
    expect(MEASURES.filter((m) => !m.why)).toEqual([]);
  });
});
