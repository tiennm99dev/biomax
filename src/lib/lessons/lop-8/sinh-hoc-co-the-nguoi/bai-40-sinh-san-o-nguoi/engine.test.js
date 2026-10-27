import { describe, expect, it } from 'vitest';
import { validateDiagram } from '#lib/domain/diagrams.js';
import {
  CYCLE_MAX,
  CYCLE_MIN,
  FEMALE_ORGANS,
  METHOD_BINS,
  METHOD_CARDS,
  TASKS,
  describe as describeDay,
  isFertile,
  levels,
  ovulationDay,
  phaseOf,
} from './engine.js';

describe('menstrual cycle', () => {
  it('releases the egg 14 days before the next period', () => {
    expect(ovulationDay(28)).toBe(14);
    expect(ovulationDay(30)).toBe(16);
    expect(ovulationDay(32)).toBe(18);
  });

  it('walks through the phases in order', () => {
    expect(phaseOf(1, 28)).toBe('kinh-nguyet');
    expect(phaseOf(5, 28)).toBe('kinh-nguyet');
    expect(phaseOf(6, 28)).toBe('nang-trung');
    expect(phaseOf(14, 28)).toBe('rung-trung');
    expect(phaseOf(15, 28)).toBe('the-vang');
    expect(phaseOf(28, 28)).toBe('the-vang');
  });

  it('keeps the lining when the egg is fertilized', () => {
    expect(phaseOf(21, 28, true)).toBe('lam-to');
    expect(phaseOf(28, 28, true)).toBe('lam-to');
    expect(levels(28, 28, true).progesterone).toBe(1);
    expect(levels(28, 28, true).lining).toBe(1);
    expect(levels(28, 28).progesterone).toBeLessThan(0.2);
  });

  it('peaks estrogen before ovulation and progesterone a week after', () => {
    for (let len = CYCLE_MIN; len <= CYCLE_MAX; len++) {
      const ov = ovulationDay(len);
      const days = Array.from({ length: len }, (_, i) => i + 1);
      const top = (/** @type {'estrogen' | 'progesterone'} */ k) =>
        days.reduce((best, d) => (levels(d, len)[k] > levels(best, len)[k] ? d : best), 1);
      expect(top('estrogen')).toBe(ov - 1);
      expect(top('progesterone')).toBe(ov + 7);
      for (const d of days) {
        const l = levels(d, len);
        for (const v of [l.estrogen, l.progesterone, l.lining]) {
          expect(v).toBeGreaterThanOrEqual(0);
          expect(v).toBeLessThanOrEqual(1);
        }
      }
    }
  });

  it('marks the fertile days around ovulation', () => {
    expect(isFertile(14, 28)).toBe(true);
    expect(isFertile(9, 28)).toBe(true);
    expect(isFertile(15, 28)).toBe(true);
    expect(isFertile(8, 28)).toBe(false);
    expect(isFertile(16, 28)).toBe(false);
    expect(isFertile(2, 28)).toBe(false);
  });

  it('describes every day', () => {
    for (let d = 1; d <= 30; d++) {
      for (const f of [false, true]) {
        const t = describeDay(d, 30, f);
        expect(t.ovary && t.uterus && t.hormone).toBeTruthy();
      }
    }
  });

  it('has a reachable answer for every task', () => {
    for (const t of TASKS) {
      const ok = Array.from({ length: t.length }, (_, i) => i + 1).filter((d) =>
        t.check(d, t.length),
      );
      expect(ok.length).toBeGreaterThan(0);
      expect(ok.length).toBeLessThan(t.length);
    }
  });
});

describe('female organs diagram', () => {
  it('is a valid hotspot diagram', () => {
    expect(validateDiagram(FEMALE_ORGANS)).toEqual([]);
  });
});

describe('contraception cards', () => {
  it('puts every card in a known bin and fills every bin', () => {
    const bins = new Set(METHOD_BINS.map((b) => b.id));
    for (const c of METHOD_CARDS) expect(bins.has(c.bin)).toBe(true);
    for (const b of bins) expect(METHOD_CARDS.some((c) => c.bin === b)).toBe(true);
  });
});
