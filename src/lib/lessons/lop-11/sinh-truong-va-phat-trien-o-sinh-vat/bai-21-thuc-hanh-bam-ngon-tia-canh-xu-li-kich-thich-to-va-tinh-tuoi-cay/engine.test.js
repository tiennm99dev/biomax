import { describe, expect, it } from 'vitest';
import {
  WOOD_RADIUS,
  bandAtRadius,
  checkMarks,
  describeBand,
  makeTrunk,
  ringWidth,
  toggleMark,
} from './engine.js';

const SEEDS = [1, 2, 3, 7, 19, 42, 99, 123];

describe('tree trunk cross-section', () => {
  it('builds one light and one dark band per year, touching, up to the wood edge', () => {
    const bad = SEEDS.filter((seed) => {
      const t = makeTrunk(seed);
      const touching = t.bands.every((b, i) => i === 0 || b.r0 === t.bands[i - 1].r1);
      const last = t.bands[t.bands.length - 1].r1;
      return (
        t.bands.length !== 2 * t.age ||
        t.age < 6 ||
        t.age > 12 ||
        !touching ||
        Math.abs(last - WOOD_RADIUS) > 1e-9 ||
        t.bands.some((b, i) => b.kind !== (i % 2 === 0 ? 'som' : 'muon'))
      );
    });
    expect(bad).toEqual([]);
  });

  it('makes the drought ring the narrowest', () => {
    const bad = SEEDS.filter((seed) => {
      const t = makeTrunk(seed);
      const widths = Array.from({ length: t.age }, (_, i) => ringWidth(t, i + 1));
      const min = Math.min(...widths);
      return widths.indexOf(min) + 1 !== t.droughtYear;
    });
    expect(bad).toEqual([]);
  });

  it('is the same for the same seed', () => {
    expect(makeTrunk(5)).toEqual(makeTrunk(5));
  });

  it('finds the band under a radius', () => {
    const t = makeTrunk(3);
    expect(bandAtRadius(t, 1)).toBe(-1);
    expect(bandAtRadius(t, t.bands[0].r0 + 0.1)).toBe(0);
    expect(bandAtRadius(t, t.bands[3].r1 - 0.1)).toBe(3);
    expect(bandAtRadius(t, t.bark - 1)).toBe(t.bands.length);
    expect(describeBand(t, 1)).toContain('sẫm');
    expect(describeBand(t, -1)).toContain('lõi');
  });
});

describe('checking the count', () => {
  it('accepts exactly the dark bands', () => {
    const t = makeTrunk(7);
    const dark = t.bands.map((b, i) => (b.kind === 'muon' ? i : -1)).filter((i) => i >= 0);
    expect(checkMarks(t, dark).tone).toBe('ok');
    expect(checkMarks(t, dark).text).toContain(`${t.age} tuổi`);
    expect(checkMarks(t, dark.slice(1)).tone).toBe('warn');
    expect(checkMarks(t, [...dark, 0]).text).toContain('màu sáng');
  });

  it('toggles marks on wood only', () => {
    const t = makeTrunk(7);
    expect(toggleMark(t, [], 3)).toEqual([3]);
    expect(toggleMark(t, [1, 3], 3)).toEqual([1]);
    expect(toggleMark(t, [1], -1)).toEqual([1]);
    expect(toggleMark(t, [1], t.bands.length)).toEqual([1]);
  });
});
