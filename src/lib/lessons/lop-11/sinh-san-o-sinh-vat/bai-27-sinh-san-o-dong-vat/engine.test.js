import { describe, expect, it } from 'vitest';
import { CHANGES, explain, levels, word } from './engine.js';

describe('hormone axis with negative feedback', () => {
  it('keeps every level at 1 with no change', () => {
    for (const sex of /** @type {const} */ (['nam', 'nu'])) {
      const l = levels(sex, []);
      expect([l.gnrh, l.fsh, l.lh, l.own, l.product]).toEqual([1, 1, 1, 1, 1]);
    }
  });

  it('suppresses GnRH, FSH and LH with outside sex hormone', () => {
    const m = levels('nam', ['ngoai']);
    expect(m.gnrh).toBe(0);
    expect(word(m.product)).toBe('gần như không có');
    const f = levels('nu', ['ngoai']);
    expect(word(f.lh)).toBe('giảm');
    expect(explain('nu', ['ngoai'])).toContain('không rụng');
  });

  it('raises GnRH, FSH and LH after removing the gonads', () => {
    const l = levels('nam', ['cat-bo']);
    expect(word(l.fsh)).toBe('tăng');
    expect(l.product).toBe(0);
  });

  it('lowers everything under long stress', () => {
    const l = levels('nu', ['cang-thang']);
    expect(word(l.gnrh)).toBe('giảm');
    expect(word(l.product)).toBe('giảm');
  });

  it('never gives a negative level', () => {
    const bad = [];
    for (const sex of /** @type {const} */ (['nam', 'nu'])) {
      for (let mask = 0; mask < 8; mask += 1) {
        const ch = CHANGES.filter((_, i) => mask & (1 << i));
        const l = levels(sex, ch);
        if ([l.gnrh, l.own, l.product].some((v) => v < 0)) bad.push([sex, ch]);
        if (!explain(sex, ch)) bad.push([sex, ch, 'text']);
      }
    }
    expect(bad).toEqual([]);
  });
});
