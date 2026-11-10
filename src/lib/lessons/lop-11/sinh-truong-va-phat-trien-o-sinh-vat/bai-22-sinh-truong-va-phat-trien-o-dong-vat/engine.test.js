import { describe, expect, it } from 'vitest';
import { CYCLES, START, compare, instar, moult, stageIndex, stageProgress } from './engine.js';

describe('two insect life cycles', () => {
  it('orders the stages of both cycles from 0', () => {
    const bad = Object.entries(CYCLES).filter(
      ([, c]) =>
        c.stages[0].from !== 0 || c.stages.some((s, i) => i > 0 && s.from <= c.stages[i - 1].from),
    );
    expect(bad).toEqual([]);
  });

  it('has a pupa only in complete metamorphosis', () => {
    expect(CYCLES.buom.stages.some((s) => s.name === 'Nhộng')).toBe(true);
    expect(CYCLES['chau-chau'].stages.some((s) => s.name === 'Nhộng')).toBe(false);
  });

  it('finds stages and nymph instars', () => {
    expect(stageIndex('buom', 0)).toBe(0);
    expect(stageIndex('buom', 0.7)).toBe(2);
    expect(stageIndex('buom', 1)).toBe(3);
    expect(instar(0.1)).toBe(0);
    expect(instar(0.3)).toBe(1);
    expect(instar(0.89)).toBe(5);
    expect(instar(0.95)).toBe(0);
    expect(stageProgress('buom', 0.12)).toBe(0);
  });

  it('contrasts the young of the two insects', () => {
    expect(compare(0.5)).toContain('khác con trưởng thành');
    expect(compare(0.5)).toContain('giống con trưởng thành');
    expect(compare(0.7)).toContain('nhộng');
  });
});

describe('moulting hormones', () => {
  it('keeps a caterpillar a caterpillar while juvenile hormone is high', () => {
    expect(moult(START, true).next).toEqual({ form: 'sau', instar: 2 });
    expect(moult({ form: 'sau', instar: 5 }, true).next).toEqual({ form: 'sau', instar: 5 });
  });

  it('pupates when juvenile hormone is low, then becomes a butterfly', () => {
    const pupa = moult({ form: 'sau', instar: 5 }, false).next;
    expect(pupa.form).toBe('nhong');
    expect(moult(pupa, true).next.form).toBe('buom');
    expect(moult({ form: 'sau', instar: 2 }, false).text).toContain('sớm');
  });
});
