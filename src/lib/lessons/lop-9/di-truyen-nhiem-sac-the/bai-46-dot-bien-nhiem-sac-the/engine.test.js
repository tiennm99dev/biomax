import { describe, expect, it } from 'vitest';
import {
  START,
  applyStruct,
  blockReason,
  changeCopies,
  chromText,
  classifyNumber,
  euploid,
  structEffect,
} from './engine.js';

/** @param {import('./engine.js').Pair} p */
const show = (p) => `${chromText(p.a)} ${chromText(p.m)}`;

describe('structural chromosome mutations', () => {
  it('writes the starting chromosomes the book way', () => {
    expect(show(START)).toBe('ABC•DEFGH MN•OPQR');
  });

  it('deletes, duplicates, inverts and translocates a run of segments', () => {
    expect(show(applyStruct('mat', START, 5, 6))).toBe('ABC•DGH MN•OPQR');
    expect(show(applyStruct('lap', START, 1, 2))).toBe('ABCBC•DEFGH MN•OPQR');
    expect(show(applyStruct('dao', START, 6, 4))).toBe('ABC•FEDGH MN•OPQR');
    expect(show(applyStruct('chuyen', START, 7, 8))).toBe('ABC•DEF MN•OPQRGH');
    expect(show(START)).toBe('ABC•DEFGH MN•OPQR');
  });

  it('refuses to lose or move the centromere but lets it be inverted', () => {
    expect(blockReason('mat', START.a, 2, 4)).toContain('tâm động');
    expect(blockReason('chuyen', START.a, 3, 3)).toContain('tâm động');
    expect(blockReason('dao', START.a, 1, 4)).toBeNull();
    expect(blockReason('dao', START.a, 2, 2)).toContain('hai đoạn');
    expect(blockReason('lap', START.a, 0, 1)).toBeNull();
  });

  it('explains what each mutation changed', () => {
    expect(structEffect('mat', START, applyStruct('mat', START, 5, 6))).toContain('mất 2');
    expect(structEffect('lap', START, applyStruct('lap', START, 1, 2))).toContain('thêm 2');
    expect(structEffect('dao', START, applyStruct('dao', START, 4, 6))).toContain('trật tự');
    expect(structEffect('dao', START, applyStruct('dao', START, 1, 3))).toContain('hình dạng');
    expect(structEffect('dao', START, applyStruct('dao', START, 4, 6))).not.toContain('hình dạng');
    expect(structEffect('chuyen', START, applyStruct('chuyen', START, 7, 8))).toContain('Đoạn GH');
  });
});

describe('numerical chromosome mutations', () => {
  it('names euploid sets', () => {
    expect(classifyNumber(euploid(2))).toEqual({
      kind: 'binh-thuong',
      name: 'Bộ NST lưỡng bội bình thường',
      formula: '2n = 8',
    });
    expect(classifyNumber(euploid(3)).formula).toBe('3n = 12');
    expect(classifyNumber(euploid(4)).name).toContain('tứ bội');
    expect(classifyNumber(euploid(1)).kind).toBe('don-boi');
  });

  it('names aneuploids', () => {
    expect(classifyNumber([2, 3, 2, 2])).toEqual({
      kind: 'lech-boi',
      name: 'Thể ba (lệch bội ở cặp số 2)',
      formula: '2n + 1 = 9',
    });
    expect(classifyNumber([2, 2, 2, 1]).formula).toBe('2n − 1 = 7');
    expect(classifyNumber([0, 2, 2, 2]).name).toContain('Thể không');
    expect(classifyNumber([4, 2, 2, 2]).name).toContain('Thể bốn');
    expect(classifyNumber([3, 1, 2, 2])).toEqual({
      kind: 'lech-boi',
      name: 'Thể lệch bội (lệch bội ở 2 cặp NST)',
      formula: '2n + 1 − 1 = 8',
    });
    expect(classifyNumber([3, 3, 2, 2])).toEqual({
      kind: 'lech-boi',
      name: 'Thể ba kép (lệch bội ở 2 cặp NST)',
      formula: '2n + 1 + 1 = 10',
    });
    expect(classifyNumber([1, 2, 1, 2]).formula).toBe('2n − 1 − 1 = 6');
    expect(classifyNumber([1, 2, 1, 2]).name).toContain('Thể một kép');
    expect(classifyNumber([4, 2, 2, 2]).formula).toBe('2n + 2 = 10');
  });

  it('keeps copies between 0 and 4', () => {
    expect(changeCopies([2, 2, 2, 2], 0, -3)).toEqual([0, 2, 2, 2]);
    expect(changeCopies([4, 2, 2, 2], 0, 1)).toEqual([4, 2, 2, 2]);
    expect(changeCopies([2, 2, 2, 2], 3, 1)).toEqual([2, 2, 2, 3]);
  });
});
