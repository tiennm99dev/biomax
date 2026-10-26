import { describe, expect, it } from 'vitest';
import { DAYS, SAMPLE, analyse, leadingHeights, readHeight } from './engine.js';

describe('growth log', () => {
  it('reads heights with a decimal comma', () => {
    expect(readHeight('3,5')).toBe(3.5);
    expect(readHeight('3.5')).toBe(3.5);
    expect(readHeight(' ')).toBeUndefined();
    expect(readHeight('abc')).toBeNull();
    expect(readHeight('-1')).toBeNull();
  });

  it('keeps the first days typed in a row', () => {
    expect(leadingHeights(['1', '2', '', '4'])).toEqual([1, 2]);
    expect(leadingHeights(SAMPLE)).toHaveLength(DAYS);
  });

  it('analyses the sample log', () => {
    const a = analyse(leadingHeights(SAMPLE));
    expect(a.ok).toBe(true);
    expect(a.increases).toEqual([1.3, 1.7, 2.1, 1.8, 1.6, 1.2]);
    expect(a.fastest).toBe(2);
    expect(a.average).toBeCloseTo(9.7 / 6);
    expect(a.text).toContain('khoảng 1,6 cm');
    expect(a.text).toContain('từ ngày 3 sang ngày 4');
  });

  it('asks for more data and flags a shorter day', () => {
    expect(analyse([2]).ok).toBe(false);
    const a = analyse([2, 3, 2.5]);
    expect(a.ok).toBe(false);
    expect(a.text).toContain('Ngày 3 thấp hơn ngày 2');
  });
});
