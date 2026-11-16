import { describe, expect, it } from 'vitest';
import {
  CRITERIA,
  PLACES,
  REQUIRED,
  compareWithNotes,
  placeOf,
  rate,
  sampleForms,
  summary,
} from './engine.js';

describe('the survey map', () => {
  it('keeps every point on the map and its notes on known criteria', () => {
    const ids = CRITERIA.map((c) => c.id);
    const bad = PLACES.filter(
      (p) => p.x < 5 || p.x > 95 || p.y < 5 || p.y > 95 || p.meets.some((m) => !ids.includes(m)),
    );
    expect(bad).toEqual([]);
    expect(CRITERIA.filter((c) => !c.fix)).toEqual([]);
  });

  it('rates by the share of criteria met', () => {
    const all = CRITERIA.map((c) => c.id);
    expect(rate(all)).toMatchObject({ met: 7, percent: 100, rating: { id: 'dat' } });
    expect(rate(all.slice(0, 4))).toMatchObject({ percent: 57, rating: { id: 'can-cai-thien' } });
    expect(rate(all.slice(0, 3))).toMatchObject({ percent: 43, rating: { id: 'khong-dat' } });
    expect(rate([])).toMatchObject({ percent: 0, rating: { id: 'khong-dat' } });
  });

  it('never rates "Đạt" a point that fails the required criterion', () => {
    const rest = CRITERIA.map((c) => c.id).filter((id) => id !== REQUIRED);
    expect(rate(rest)).toMatchObject({ percent: 86, rating: { id: 'can-cai-thien' } });
  });

  it('gives the sample points a spread of ratings', () => {
    const got = Object.fromEntries(PLACES.map((p) => [p.id, rate(p.meets).rating.id]));
    expect(got).toEqual({
      cho: 'khong-dat',
      pho: 'can-cai-thien',
      'can-tin': 'dat',
      'sieu-thi': 'dat',
      'banh-mi': 'khong-dat',
      'hoa-qua': 'can-cai-thien',
    });
  });

  it('compares a form with the field notes', () => {
    const pho = /** @type {import('./engine.js').Place} */ (placeOf('pho'));
    expect(compareWithNotes('pho', pho.meets).tone).toBe('ok');
    const off = compareWithNotes('pho', [...pho.meets.slice(1), 'nuoc-sach']);
    expect(off.extra.map((c) => c.id)).toEqual(['nuoc-sach']);
    expect(off.missed.map((c) => c.id)).toEqual([pho.meets[0]]);
  });

  it('finds the criterion met least across the evaluated points', () => {
    expect(summary({}).evaluated).toBe(0);
    const s = summary(sampleForms());
    expect(s.evaluated).toBe(6);
    expect(s.weakest?.id).toBe('nuoc-sach');
    expect(s.weakest?.percent).toBe(33);
    expect(s.byRating.map((r) => r.count)).toEqual([2, 2, 2]);
  });
});
