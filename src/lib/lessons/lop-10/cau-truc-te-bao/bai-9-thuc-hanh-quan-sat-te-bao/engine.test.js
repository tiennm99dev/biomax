import { describe, expect, it } from 'vitest';
import {
  OBJECTIVES,
  SPECIMENS,
  THIN_FROM,
  blurOf,
  fieldOfView,
  focusTarget,
  isSharp,
  isThin,
  judgePhoto,
  magnification,
  scaleBar,
  visibleItems,
} from './engine.js';

/** @returns {import('./engine.js').Scope} */
const goodScope = () => ({
  specimen: 'vay-hanh',
  objective: 40,
  located: true,
  stained: true,
  x: 300,
  focus: focusTarget('vay-hanh', 40),
  oil: false,
});

describe('microscope optics', () => {
  it('narrows the field as the objective grows', () => {
    expect(OBJECTIVES.map(fieldOfView)).toEqual([1800, 450, 180]);
    expect(OBJECTIVES.map(magnification)).toEqual([100, 400, 1000]);
    expect(OBJECTIVES.filter((o) => scaleBar(o) >= fieldOfView(o))).toEqual([]);
  });

  it('is sharp only near the focus target of the slide and objective', () => {
    for (const s of SPECIMENS) {
      for (const o of OBJECTIVES) {
        expect(isSharp(s.id, o, focusTarget(s.id, o))).toBe(true);
        expect(isSharp(s.id, o, focusTarget(s.id, o) + 3)).toBe(false);
      }
    }
    expect(blurOf('vay-hanh', 40, focusTarget('vay-hanh', 40), false)).toBe(0);
    expect(blurOf('vay-hanh', 40, 0, false)).toBeGreaterThan(2);
  });

  it('blurs the oil objective until it has its oil', () => {
    const f = focusTarget('vi-khuan', 100);
    expect(blurOf('vi-khuan', 100, f, false)).toBeGreaterThan(0);
    expect(blurOf('vi-khuan', 100, f, true)).toBe(0);
  });
});

describe('slides', () => {
  it('draws a sensible number of shapes at every power', () => {
    const counts = SPECIMENS.flatMap((s) =>
      OBJECTIVES.map((o) => visibleItems(s.id, 300, o).length),
    );
    expect(Math.max(...counts)).toBeLessThan(800);
    expect(counts.filter((c) => c === 0)).toEqual([]);
  });

  it('shows onion cells as large at high power', () => {
    expect(visibleItems('vay-hanh', 300, 10).length).toBeGreaterThan(
      visibleItems('vay-hanh', 300, 40).length,
    );
  });

  it('marks where the layer is thin', () => {
    expect(isThin(THIN_FROM)).toBe(true);
    expect(isThin(THIN_FROM - 1)).toBe(false);
  });
});

describe('judging a photo', () => {
  it('accepts a good photo', () => {
    expect(judgePhoto(goodScope()).ok).toBe(true);
    const oil = { ...goodScope(), objective: 100, oil: true, focus: focusTarget('vay-hanh', 100) };
    expect(judgePhoto(oil).ok).toBe(true);
  });

  it('names what is wrong', () => {
    const cases = /** @type {Array<[Partial<import('./engine.js').Scope>, string]>} */ ([
      [{ stained: false }, 'nhuộm'],
      [{ x: -500 }, 'vùng mỏng'],
      [{ objective: 10 }, '10×'],
      [{ located: false }, 'chưa tìm'],
      [{ objective: 100 }, 'dầu soi'],
      [{ focus: 0 }, 'lấy nét'],
    ]);
    const wrong = cases.filter(([change, word]) => {
      const r = judgePhoto({ ...goodScope(), ...change });
      return r.ok || !r.text.includes(word);
    });
    expect(wrong).toEqual([]);
  });
});
