import { describe, expect, it } from 'vitest';
import { lowerFirst } from './text.js';

describe('lowerFirst', () => {
  it('lowers only the first letter and keeps abbreviations', () => {
    expect(lowerFirst('Phun chế phẩm Bt')).toBe('phun chế phẩm Bt');
    expect(lowerFirst('Muỗi Aedes')).toBe('muỗi Aedes');
    expect(lowerFirst('NPV trừ sâu')).toBe('NPV trừ sâu');
    expect(lowerFirst('')).toBe('');
  });
});
