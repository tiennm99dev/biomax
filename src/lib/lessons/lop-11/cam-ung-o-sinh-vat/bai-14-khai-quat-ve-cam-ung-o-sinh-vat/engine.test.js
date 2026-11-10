import { describe, expect, it } from 'vitest';
import { SCENARIOS, STAGES, outcome, signalReach } from './engine.js';

describe('stages of a response', () => {
  it('describes every stage for every scenario', () => {
    const bad = SCENARIOS.filter((s) => s.parts.length !== STAGES.length);
    expect(bad).toEqual([]);
  });

  it('responds only when no part is damaged', () => {
    expect(signalReach(null)).toEqual({ reached: 4, responds: true });
    expect(signalReach('tiep-nhan')).toEqual({ reached: 0, responds: false });
    expect(signalReach('xu-li')).toEqual({ reached: 2, responds: false });
    expect(signalReach('tra-loi')).toEqual({ reached: 3, responds: false });
  });

  it('names the damaged stage in the feedback', () => {
    expect(outcome('rut-tay', null).tone).toBe('ok');
    const note = outcome('trinh-nu', 'dan-truyen');
    expect(note.tone).toBe('warn');
    expect(note.text).toContain('dẫn truyền thông tin');
  });
});
