import { describe, expect, it } from 'vitest';
import { FROG_STAGES, chipOrder, labelFeedback, score } from './engine.js';

describe('frog time-lapse labels', () => {
  it('grows legs before the tail goes, hind legs before front legs', () => {
    const bad = FROG_STAGES.filter(
      (s, i) =>
        i > 0 &&
        ((FROG_STAGES[i - 1].hind && !s.hind) ||
          (FROG_STAGES[i - 1].fore && !s.fore) ||
          (s.fore && !s.hind) ||
          (s.frog && !s.fore)),
    ).map((s) => s.id);
    expect(bad).toEqual([]);
    expect(FROG_STAGES[FROG_STAGES.length - 1].tail).toBe(0);
  });

  it('accepts the right label and explains a wrong one', () => {
    expect(labelFeedback(3, 'chan-sau').ok).toBe(true);
    const wrong = labelFeedback(3, 'bon-chan');
    expect(wrong.ok).toBe(false);
    expect(wrong.text).toContain('chân trước');
  });

  it('counts right labels only', () => {
    expect(score({ 0: 'trung', 1: 'nong-noc', 6: 'ech' })).toBe(2);
  });

  it('mixes the chips the same way every time, keeping every stage', () => {
    expect(chipOrder(23)).toEqual(chipOrder(23));
    expect([...chipOrder(23)].sort()).toEqual(FROG_STAGES.map((s) => s.id).sort());
  });
});
