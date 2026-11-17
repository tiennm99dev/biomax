import { describe, expect, it } from 'vitest';
import { MEASURES, SUCCESSIONS, overallTrend, stageText } from './engine.js';

describe('succession stages', () => {
  it('starts primary succession on bare ground and ends on a forest', () => {
    const s = SUCCESSIONS['nguyen-sinh'].stages;
    expect(s[0].forms).toEqual([]);
    expect(s[0].soil).toBe(0);
    expect(s[s.length - 1].forms).toContain('bigTree');
  });

  it('starts secondary succession with soil already there', () => {
    expect(SUCCESSIONS['thu-sinh'].stages[0].soil).toBeGreaterThan(0);
  });

  it('moves every measure the right way, stage by stage', () => {
    const bad = [];
    for (const [kind, { stages }] of Object.entries(SUCCESSIONS)) {
      const up = kind !== 'suy-thoai';
      for (const [key] of MEASURES) {
        for (let i = 1; i < stages.length; i++) {
          const d = stages[i][key] - stages[i - 1][key];
          if (up ? d < 0 : d > 0) bad.push(`${kind} ${key} ${i}`);
        }
        if (overallTrend(/** @type {any} */ (kind), key) !== (up ? 'tăng' : 'giảm'))
          bad.push(`${kind} ${key} overall`);
      }
    }
    expect(bad).toEqual([]);
  });

  it('keeps every measure on the 0..10 scale', () => {
    const all = Object.values(SUCCESSIONS).flatMap((s) => s.stages);
    const bad = all.filter((st) => MEASURES.some(([k]) => st[k] < 0 || st[k] > 10));
    expect(bad).toEqual([]);
  });

  it('reads out the stage', () => {
    expect(stageText('nguyen-sinh', 1)).toContain('địa y');
    expect(stageText('suy-thoai', 4)).toContain('đều giảm');
    expect(stageText('thu-sinh', 4)).toContain('đều tăng');
  });
});
