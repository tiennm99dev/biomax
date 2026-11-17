import { describe, expect, it } from 'vitest';
import { START_A, START_B, applyOp, classifyCounts, makeChromosome } from '../_shared/mutations.js';
import { COUNT_PRESETS, countMeaning, explain } from './engine.js';

const before = { a: makeChromosome('A', START_A), b: makeChromosome('B', START_B) };

/** @param {import('../_shared/mutations.js').StructuralOp} op @param {number} lo @param {number} hi */
function run(op, lo, hi) {
  const out = applyOp(op, before.a, before.b, lo, hi);
  if ('error' in out) throw new Error(out.error);
  return explain(op, before, out, lo, hi);
}

describe('explain', () => {
  it('counts genes before and after', () => {
    expect(run('mat', 5, 6)).toContain('còn 6 gene (trước đó 8)');
    expect(run('lap', 5, 5)).toContain('từ 8 lên 9');
    expect(run('dao', 2, 4)).toContain('có chứa tâm động');
    expect(run('dao', 5, 7)).toContain('không chứa tâm động');
    expect(run('chuyen', 7, 8)).toContain('đổi lại đoạn QR');
  });
});

describe('count presets', () => {
  it('match their labels', () => {
    const bad = COUNT_PRESETS.filter((p) => classifyCounts(p.counts).notation !== p.label);
    expect(bad).toEqual([]);
  });

  it('explains every verdict kind', () => {
    for (const c of [
      [2, 2, 2, 2],
      [1, 1, 1, 1],
      [3, 3, 3, 3],
      [4, 4, 4, 4],
      [2, 3, 2, 2],
    ]) {
      expect(countMeaning(classifyCounts(c)).length).toBeGreaterThan(20);
    }
  });
});
