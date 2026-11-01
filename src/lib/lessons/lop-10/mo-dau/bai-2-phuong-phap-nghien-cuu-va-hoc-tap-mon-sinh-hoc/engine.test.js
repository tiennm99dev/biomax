import { describe, expect, it } from 'vitest';
import {
  FACTORS,
  LOOP_BACK,
  SAMPLE_CONTROL,
  SAMPLE_TREATED,
  SCENARIOS,
  STEPS,
  STUDIED,
  compareLots,
  judgeDesign,
  orderResult,
  stepOfAction,
} from './engine.js';

describe('research steps', () => {
  it('runs the six steps in the book order', () => {
    expect(STEPS.map((s) => s.id)).toEqual([
      'quan-sat',
      'cau-hoi',
      'gia-thuyet',
      'thi-nghiem',
      'phan-tich',
      'ket-luan',
    ]);
  });

  it('accepts only the book order', () => {
    expect(orderResult([0, 1, 2, 3, 4, 5])).toEqual({ ok: true, right: 6, firstWrong: -1 });
    expect(orderResult([1, 0, 2, 3, 4, 5])).toEqual({ ok: false, right: 4, firstWrong: 0 });
    expect(orderResult([0, 1, 3, 2, 4, 5]).firstWrong).toBe(2);
  });

  it('loops back to a step that exists', () => {
    expect(STEPS.map((s) => s.id)).toContain(LOOP_BACK);
  });
});

describe('scenarios', () => {
  it('gives every scenario exactly one distinct action per step', () => {
    const bad = SCENARIOS.filter((sc) => {
      const texts = STEPS.map((s) => sc.actions[s.id]);
      return texts.some((t) => !t) || new Set(texts).size !== STEPS.length;
    }).map((sc) => sc.id);
    expect(bad).toEqual([]);
  });

  it('finds the step of an action', () => {
    const sc = SCENARIOS[0];
    expect(stepOfAction(sc, sc.actions['phan-tich'])?.id).toBe('phan-tich');
    expect(stepOfAction(sc, 'không có')).toBeUndefined();
  });
});

describe('experiment design', () => {
  it('is fair only when the studied factor alone differs', () => {
    expect(judgeDesign([STUDIED]).fair).toBe(true);
    const others = FACTORS.map((f) => f.id).filter((id) => id !== STUDIED);
    const unfair = [[], ...others.map((id) => [id]), ...others.map((id) => [STUDIED, id])];
    expect(unfair.filter((d) => judgeDesign(d).fair)).toEqual([]);
  });

  it('names the extra factors that spoil the comparison', () => {
    expect(judgeDesign([STUDIED, 'anh-sang']).text).toContain('ánh sáng');
    expect(judgeDesign(['tuoi']).text).toContain('tuổi của cây');
  });
});

describe('comparing lots', () => {
  it('reproduces the worked example of the lesson', () => {
    expect(compareLots(SAMPLE_CONTROL, SAMPLE_TREATED)).toEqual({
      control: 20,
      treated: 14,
      dropPercent: 30,
    });
  });
});
