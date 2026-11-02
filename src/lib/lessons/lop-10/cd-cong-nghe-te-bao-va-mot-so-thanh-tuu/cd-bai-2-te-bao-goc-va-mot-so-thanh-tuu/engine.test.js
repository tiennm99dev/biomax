import { describe as group, expect, it } from 'vitest';
import {
  CELLS,
  INDUCED,
  QUESTIONS,
  ROOT,
  SKIN_CELL,
  canBecome,
  cellOf,
  describe,
  judge,
  reachOf,
  specialisedUnder,
} from './engine.js';

group('the differentiation tree', () => {
  it('reaches every cell from the root except the induced one', () => {
    const missing = CELLS.filter((c) => c.id !== ROOT && c.id !== INDUCED).filter(
      (c) => !reachOf(ROOT).includes(c.id),
    );
    expect(missing).toEqual([]);
    expect(reachOf(ROOT)).not.toContain(INDUCED);
  });

  it('narrows the reach level by level', () => {
    expect(specialisedUnder('hop-tu')).toBeGreaterThan(specialisedUnder('khoi-trong'));
    expect(specialisedUnder('khoi-trong')).toBeGreaterThan(specialisedUnder('goc-mau'));
    expect(specialisedUnder('goc-mau')).toBeGreaterThan(specialisedUnder('goc-co'));
    expect(specialisedUnder('goc-co')).toBe(1);
    expect(specialisedUnder('hong-cau')).toBe(0);
  });

  it('keeps the placenta out of a pluripotent cell', () => {
    expect(canBecome('hop-tu', 'nhau-thai')).toBe(true);
    expect(canBecome('khoi-trong', 'nhau-thai')).toBe(false);
    expect(canBecome(INDUCED, 'nhau-thai')).toBe(false);
  });

  it('gives an induced cell the reach of a pluripotent cell', () => {
    expect(reachOf(INDUCED)).toEqual(reachOf('khoi-trong'));
    expect(canBecome(INDUCED, SKIN_CELL)).toBe(true);
    expect(cellOf(INDUCED).level).toBe('van-nang');
  });

  it('keeps blood stem cells to blood cells', () => {
    expect(canBecome('goc-mau', 'bach-cau')).toBe(true);
    expect(canBecome('goc-mau', 'neuron')).toBe(false);
  });

  it('describes a cell with its level and reach', () => {
    expect(describe('goc-mau')).toContain('Đa tiềm năng');
    expect(describe('goc-mau')).toContain('3 loại');
    expect(describe('neuron')).toContain('không tạo thêm');
  });
});

group('the quiz', () => {
  it('asks about both possible and impossible changes', () => {
    const yes = QUESTIONS.filter((q) => canBecome(q.from, q.to)).length;
    expect(yes).toBeGreaterThan(2);
    expect(QUESTIONS.length - yes).toBeGreaterThan(2);
  });

  it('judges an answer against the tree', () => {
    const blood = { from: 'goc-mau', to: 'neuron' };
    expect(judge(blood, false).ok).toBe(true);
    expect(judge(blood, true).ok).toBe(false);
    expect(judge(blood, true).text).toContain('không tạo được neuron');
  });
});
