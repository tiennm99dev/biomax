import { describe, expect, it } from 'vitest';
import { ELEMENTS, THRESHOLD, classify, logPosition, massIn, score, share } from './engine.js';

describe('body elements', () => {
  it('classes every element by the 0,01% threshold', () => {
    for (const e of ELEMENTS) expect(classify(e.percent), e.symbol).toBe(e.kind);
    expect(classify(THRESHOLD)).toBe('vi-luong');
    expect(classify(0.1)).toBe('da-luong');
  });

  it('lists the textbook macro-elements and some micro-elements', () => {
    const macro = ELEMENTS.filter((e) => e.kind === 'da-luong').map((e) => e.symbol);
    expect(macro).toEqual(['O', 'C', 'H', 'N', 'Ca', 'P', 'K', 'S', 'Na', 'Cl', 'Mg']);
    const micro = ELEMENTS.filter((e) => e.kind === 'vi-luong').map((e) => e.symbol);
    expect(micro).toEqual(['Fe', 'Zn', 'Cu', 'I', 'Co']);
  });

  it('gives C, H, O and N about 96% of the body mass', () => {
    expect(share(['C', 'H', 'O', 'N'])).toBeCloseTo(96.2);
    expect(share(ELEMENTS.map((e) => e.symbol))).toBeLessThanOrEqual(100);
    expect(share(ELEMENTS.map((e) => e.symbol))).toBeGreaterThan(99.8);
  });

  it('puts shares on a log axis', () => {
    expect(logPosition(1e-6)).toBe(0);
    expect(logPosition(100)).toBe(1);
    expect(logPosition(0.01)).toBeCloseTo(0.5);
    expect(logPosition(1e-9)).toBe(0);
  });

  it('scores a sorting attempt', () => {
    expect(score({})).toEqual({ right: [], wrong: [], done: false });
    expect(score({ O: 'da-luong', Fe: 'da-luong', I: 'vi-luong' })).toEqual({
      right: ['O', 'I'],
      wrong: ['Fe'],
      done: false,
    });
    const all = Object.fromEntries(ELEMENTS.map((e) => [e.symbol, e.kind]));
    expect(score(all).done).toBe(true);
  });

  it('computes the mass of an element in a body', () => {
    expect(massIn('O', 60)).toBeCloseTo(39);
    expect(massIn('N', 60)).toBeCloseTo(1.92);
    expect(massIn('Xx', 60)).toBe(0);
  });
});
