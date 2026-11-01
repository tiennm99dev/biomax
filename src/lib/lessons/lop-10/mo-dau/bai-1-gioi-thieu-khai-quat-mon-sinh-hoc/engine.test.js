import { describe, expect, it } from 'vitest';
import { CASES, FIELDS, SUSTAIN_BINS, SUSTAIN_CARDS, judgeCase } from './engine.js';

describe('career map', () => {
  it('gives every field a use, an achievement and at least two jobs', () => {
    const bad = FIELDS.filter((f) => !f.use || !f.achievement || f.jobs.length < 2);
    expect(bad).toEqual([]);
  });

  it('points every situation at a field that exists and covers every field', () => {
    const ids = new Set(FIELDS.map((f) => f.id));
    expect(CASES.filter((c) => !ids.has(c.field))).toEqual([]);
    expect(new Set(CASES.map((c) => c.field))).toEqual(ids);
  });

  it('keeps situation ids unique', () => {
    expect(new Set(CASES.map((c) => c.id)).size).toBe(CASES.length);
  });

  it('accepts only the field of the situation', () => {
    for (const item of CASES) {
      const verdicts = FIELDS.map((f) => judgeCase(item, f.id).ok);
      expect(verdicts.filter(Boolean)).toHaveLength(1);
      expect(judgeCase(item, item.field).text).toContain(item.why);
    }
  });

  it('explains a wrong field by naming what that field is for', () => {
    const verdict = judgeCase(CASES[0], 'y-duoc');
    expect(verdict.ok).toBe(false);
    expect(verdict.text).toContain('Y dược');
  });
});

describe('sustainable development cards', () => {
  it('splits the cards evenly between the two bins', () => {
    for (const bin of SUSTAIN_BINS) {
      expect(SUSTAIN_CARDS.filter((c) => c.bin === bin.id)).toHaveLength(4);
    }
  });
});
