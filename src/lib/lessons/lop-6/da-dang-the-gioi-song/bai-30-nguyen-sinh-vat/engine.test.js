import { describe, expect, it } from 'vitest';
import {
  CLUES,
  DISEASES,
  PROTISTS,
  brokenSteps,
  chainVerdict,
  checkClue,
  travel,
} from './engine.js';

describe('protist comparison', () => {
  it('keeps the real speed order: trùng giày fastest, trùng biến hình slowest', () => {
    const speed = Object.fromEntries(PROTISTS.map((p) => [p.id, p.speed]));
    expect(speed['trung-giay']).toBeGreaterThan(speed['trung-roi']);
    expect(speed['trung-roi']).toBeGreaterThan(speed['trung-bien-hinh']);
  });

  it('travels along a wrapped track', () => {
    expect(travel('trung-giay', 0, 7)).toBe(0);
    expect(travel('trung-giay', 5, 7)).toBeCloseTo(6);
    expect(travel('trung-giay', 10, 7)).toBeCloseTo(5);
  });

  it('checks clues and explains a wrong guess', () => {
    CLUES.forEach((c, i) => expect(checkClue(i, c.answer).ok).toBe(true));
    const wrong = checkClue(0, 'trung-giay');
    expect(wrong.ok).toBe(false);
    expect(wrong.text).toContain('lông bơi');
    for (const p of PROTISTS) expect(CLUES.some((c) => c.answer === p.id)).toBe(true);
  });
});

describe('disease chains', () => {
  it('cuts the malaria chain with a bed net but not by boiling water', () => {
    expect(brokenSteps('sot-ret', ['man'])).toEqual([1]);
    expect(brokenSteps('sot-ret', ['an-chin'])).toEqual([]);
    expect(chainVerdict('sot-ret', ['an-chin'])).toContain('không phòng được');
    expect(chainVerdict('sot-ret', ['man', 'chua-benh'])).toContain('2 chỗ');
  });

  it('cuts the dysentery chain through hygiene, not a bed net', () => {
    expect(brokenSteps('kiet-li', ['an-chin', 'nha-ve-sinh'])).toEqual([0, 2]);
    expect(brokenSteps('kiet-li', ['man'])).toEqual([]);
    expect(chainVerdict('kiet-li', [])).toContain('Chưa chọn');
  });

  it('has one more link than steps that measures can cut', () => {
    for (const d of DISEASES) {
      for (const m of d.measures) {
        if (m.breaks !== null) expect(m.breaks).toBeLessThan(d.links.length - 1);
      }
      expect(d.measures.some((m) => m.breaks === null)).toBe(true);
    }
  });
});
