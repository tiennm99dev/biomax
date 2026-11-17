import { describe, expect, it } from 'vitest';
import { lowerFirst } from './text.js';

describe('lowerFirst', () => {
  it('lowers only the first letter, keeping abbreviations', () => {
    expect(lowerFirst('Phát minh kĩ thuật PCR')).toBe('phát minh kĩ thuật PCR');
    expect(lowerFirst('Bông Bt kháng sâu')).toBe('bông Bt kháng sâu');
    expect(lowerFirst('Đúng chiều')).toBe('đúng chiều');
  });

  it('leaves a name that starts with an abbreviation', () => {
    expect(lowerFirst('DNA tái tổ hợp')).toBe('DNA tái tổ hợp');
  });
});
