import { describe, expect, it } from 'vitest';
import {
  GROUPS,
  SAMPLES,
  TESTS,
  benedictStage,
  isComplete,
  judgeMystery,
  outcome,
  readResult,
  tubeState,
} from './engine.js';

const allTests = TESTS.map((t) => t.id);

describe('food test results', () => {
  it('makes every test positive exactly on samples holding its group', () => {
    const wrong = [];
    for (const s of SAMPLES) {
      for (const g of GROUPS) {
        if (outcome(g.test, s.id).positive !== s.groups.includes(g.id)) {
          wrong.push(`${s.id} ${g.test}`);
        }
      }
    }
    expect(wrong).toEqual([]);
  });

  it('gives the expected colours', () => {
    expect(outcome('benedict', 'glucose')).toMatchObject({ label: 'đỏ gạch', precipitate: true });
    expect(outcome('benedict', 'sua')).toMatchObject({ label: 'cam', precipitate: true });
    expect(outcome('benedict', 'sucrose')).toMatchObject({ label: 'xanh lam', positive: false });
    expect(outcome('lugol', 'ho').label).toBe('xanh tím');
    expect(outcome('lugol', 'nuoc').label).toBe('vàng nâu');
    expect(outcome('nhu-tuong', 'dau').label).toBe('trắng sữa');
    expect(outcome('nhu-tuong', 'albumin').label).toBe('trong suốt');
    expect(outcome('biuret', 'albumin').label).toBe('xanh tím');
    expect(outcome('biuret', 'glucose').label).toBe('xanh lam');
  });

  it('runs Benedict through its colours only with heat', () => {
    expect(tubeState('benedict', 'glucose', 0).label).toBe('mẫu thử');
    expect(tubeState('benedict', 'glucose', 1).label).toBe('xanh lam');
    expect(benedictStage(1, 0)).toBe(0);
    expect(tubeState('benedict', 'glucose', 2, 0.5).label).toBe('vàng');
    expect(tubeState('benedict', 'glucose', 2, 1).label).toBe('đỏ gạch');
    expect(tubeState('benedict', 'nuoc', 2, 1).label).toBe('xanh lam');
  });

  it('turns milky only once the alcohol meets the water', () => {
    expect(tubeState('nhu-tuong', 'dau', 1).label).toBe('mẫu trong cồn');
    expect(tubeState('nhu-tuong', 'dau', 2).label).toBe('trắng sữa');
    expect(tubeState('nhu-tuong', 'glucose', 2).label).toBe('trong suốt');
  });

  it('turns violet only after the wait in Biuret', () => {
    expect(tubeState('biuret', 'albumin', 1).label).toBe('mẫu và NaOH');
    expect(tubeState('biuret', 'albumin', 2).label).toBe('xanh lam');
    expect(tubeState('biuret', 'albumin', 3, 0.2).label).toBe('xanh lam');
    expect(tubeState('biuret', 'albumin', 3, 1).label).toBe('xanh tím');
  });

  it('knows when a test has finished', () => {
    expect(isComplete('lugol', 0, 1)).toBe(false);
    expect(isComplete('lugol', 1, 0)).toBe(true);
    expect(isComplete('benedict', 2, 0.5)).toBe(false);
    expect(isComplete('benedict', 2, 1)).toBe(true);
  });

  it('reads a result without giving a mystery sample away', () => {
    expect(readResult('benedict', 'glucose')).toBe('Màu đỏ gạch, có kết tủa: mẫu có đường khử.');
    expect(readResult('benedict', 'sucrose')).toContain('không phải đường khử');
    expect(readResult('benedict', 'bi-an-a')).toContain('ghi kết quả');
    expect(readResult('benedict', 'bi-an-a')).not.toContain('có đường khử');
  });
});

describe('mystery samples', () => {
  it('asks for every test first', () => {
    const verdict = judgeMystery('bi-an-a', ['duong-khu'], ['benedict']);
    expect(verdict.ok).toBe(false);
    expect(verdict.text).toContain('Lugol');
  });

  it('accepts only the exact set of groups', () => {
    expect(judgeMystery('bi-an-a', ['duong-khu', 'tinh-bot'], allTests).ok).toBe(true);
    expect(judgeMystery('bi-an-b', ['lipid', 'protein'], allTests).text).toContain(
      'lipid và protein',
    );
    expect(judgeMystery('bi-an-c', ['protein'], allTests).ok).toBe(true);
    const wrong = judgeMystery('bi-an-a', ['duong-khu'], allTests);
    expect(wrong.ok).toBe(false);
    expect(wrong.text).toContain('Lugol');
  });
});
