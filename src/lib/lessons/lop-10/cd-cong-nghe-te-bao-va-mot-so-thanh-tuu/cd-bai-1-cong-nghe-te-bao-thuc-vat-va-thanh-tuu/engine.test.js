import { describe, expect, it } from 'vitest';
import {
  MAX_LEVEL,
  PICTURE_TEXT,
  STAGES,
  compareText,
  cuttingsIn,
  growthOf,
  isHormoneStage,
  readHormones,
  shootChain,
} from './engine.js';

describe('the hormone balance', () => {
  it('gives roots with auxin ahead and shoots with cytokinin ahead', () => {
    expect(growthOf(2, 1)).toBe('re');
    expect(growthOf(4, 0)).toBe('re');
    expect(growthOf(1, 2)).toBe('choi');
    expect(growthOf(0, 3)).toBe('choi');
  });

  it('gives callus at balanced levels and nothing without hormones', () => {
    expect(growthOf(2, 2)).toBe('mo-seo');
    expect(growthOf(3, 2)).toBe('mo-seo');
    expect(growthOf(2, 3)).toBe('mo-seo');
    expect(growthOf(0, 0)).toBe('khong');
  });

  it('can reach the target of every hormone stage on the stepper', () => {
    const missing = STAGES.filter(isHormoneStage).filter((stage) => {
      for (let a = 0; a <= MAX_LEVEL; a++) {
        for (let c = 0; c <= MAX_LEVEL; c++) if (readHormones(stage, a, c).ok) return false;
      }
      return true;
    });
    expect(missing).toEqual([]);
  });

  it('names what grew when the levels miss the target', () => {
    const stage = STAGES.filter(isHormoneStage).find((s) => s.target === 'choi');
    if (!stage) throw new Error('no shoot stage');
    const read = readHormones(stage, 3, 1);
    expect(read.ok).toBe(false);
    expect(read.picture).toBe('re');
    expect(read.text).toContain('rễ');
    expect(readHormones(stage, 1, 3).ok).toBe(true);
  });
});

describe('the stages', () => {
  it('runs the steps of the process in order', () => {
    expect(STAGES.map((s) => s.id)).toEqual([
      'chon-mau',
      'khu-trung',
      'mo-seo',
      'nhan-choi',
      'tao-re',
      'ra-cay',
    ]);
  });

  it('has one right option in each choice stage, not listed first', () => {
    const bad = STAGES.filter((s) => !isHormoneStage(s)).filter((s) => {
      if (isHormoneStage(s)) return true;
      return s.options.filter((o) => o.ok).length !== 1 || s.options[0].ok;
    });
    expect(bad).toEqual([]);
  });

  it('describes every picture it can show', () => {
    const pictures = STAGES.flatMap((s) =>
      isHormoneStage(s) ? [s.picture] : [s.picture, ...s.options.map((o) => o.picture)],
    );
    expect(pictures.filter((p) => !PICTURE_TEXT[p])).toEqual([]);
  });
});

describe('the multiplication chain', () => {
  it('multiplies by the factor each cycle', () => {
    expect(shootChain(3, 4)).toEqual([1, 3, 9, 27, 81]);
    expect(shootChain(4, 5)[5]).toBe(1024);
    expect(shootChain(5, 0)).toEqual([1]);
  });

  it('compares it with cuttings over the same weeks', () => {
    expect(cuttingsIn(52)).toBe(20);
    expect(cuttingsIn(24)).toBe(9);
    expect(compareText(3, 6)).toContain('729');
    expect(compareText(3, 6)).toContain('24 tuần');
    expect(compareText(3, 6)).toContain('khoảng 9 cành');
  });
});
