import { describe, expect, it } from 'vitest';
import { FULL_RUN, LADDER, LANES, MATCH, bandPosition, judge, mobility, runNote } from './gel.js';

describe('the gel', () => {
  it('runs shorter fragments further, inside the gel', () => {
    const d = LADDER.map(mobility);
    expect(d.every((x, i) => i === 0 || d[i - 1] > x)).toBe(true);
    expect(Math.max(...d)).toBeLessThan(1);
    expect(Math.min(...d)).toBeGreaterThan(0);
  });

  it('moves the bands with time and loses them with the poles swapped', () => {
    expect(bandPosition(500, 0, true)).toBe(0);
    expect(bandPosition(500, FULL_RUN, true)).toBeCloseTo(mobility(500));
    expect(bandPosition(500, FULL_RUN * 2, true)).toBeCloseTo(mobility(500));
    expect(bandPosition(500, 10, false)).toBeNull();
    expect(runNote(10, false).tone).toBe('warn');
    expect(runNote(FULL_RUN, true).tone).toBe('ok');
  });

  it('has one suspect matching the scene', () => {
    const scene = LANES.find((l) => l.id === 'hien-truong')?.bands.join();
    const same = LANES.filter((l) => l.id !== 'hien-truong' && l.bands.join() === scene);
    expect(same.map((l) => l.id)).toEqual([MATCH]);
  });

  it('judges a pick only on a well-run gel', () => {
    expect(judge(MATCH, 5, true).ok).toBe(false);
    expect(judge(MATCH, FULL_RUN, false).ok).toBe(false);
    expect(judge(MATCH, FULL_RUN, true).ok).toBe(true);
    const wrong = judge('np1', FULL_RUN, true);
    expect(wrong.ok).toBe(false);
    expect(wrong.text).toContain('800');
    expect(wrong.text).toContain('600');
  });
});
