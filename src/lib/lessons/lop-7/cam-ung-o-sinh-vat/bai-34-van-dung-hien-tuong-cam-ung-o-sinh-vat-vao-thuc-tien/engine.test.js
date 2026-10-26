import { describe, expect, it } from 'vitest';
import { FIELD_NAME, SITUATIONS, judge, situationsOf } from './engine.js';

describe('situation cards', () => {
  it('have unique ids, three options and a valid answer', () => {
    expect(new Set(SITUATIONS.map((s) => s.id)).size).toBe(SITUATIONS.length);
    for (const s of SITUATIONS) {
      expect(s.options).toHaveLength(3);
      expect(s.answer).toBeGreaterThanOrEqual(0);
      expect(s.answer).toBeLessThan(s.options.length);
      expect(FIELD_NAME[s.field]).toBeTruthy();
      expect(s.hint.length).toBeGreaterThan(10);
    }
  });

  it('covers farming, husbandry and study', () => {
    expect(situationsOf('trong-trot').length).toBeGreaterThanOrEqual(4);
    expect(situationsOf('chan-nuoi').length).toBeGreaterThanOrEqual(3);
    expect(situationsOf('hoc-tap').length).toBeGreaterThanOrEqual(3);
    expect(situationsOf('tat-ca')).toBe(SITUATIONS);
  });

  it('explains the right pick and hints after a wrong one', () => {
    const gian = SITUATIONS.find((s) => s.id === 'gian');
    if (!gian) throw new Error('missing card');
    expect(judge(gian, 1)).toEqual({ ok: true, text: `Đúng. ${gian.basis}` });
    const wrong = judge(gian, 0);
    expect(wrong.ok).toBe(false);
    expect(wrong.text).toContain(gian.hint);
    expect(wrong.text).not.toContain(gian.basis);
  });
});
