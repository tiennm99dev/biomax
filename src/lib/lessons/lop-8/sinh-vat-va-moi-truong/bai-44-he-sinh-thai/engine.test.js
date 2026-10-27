import { describe, expect, it } from 'vitest';
import { cascade, trophicLevels, validate } from '#lib/domain/food-web.js';
import { WEB, chainsText, judgeLink } from './engine.js';

describe('grassland food web', () => {
  it('is a valid web with four chains', () => {
    expect(validate(WEB)).toEqual([]);
    expect(chainsText()).toEqual([
      'Cỏ → Châu chấu → Ếch → Rắn → Đại bàng',
      'Cỏ → Thỏ → Đại bàng',
      'Cỏ → Chuột → Rắn → Đại bàng',
      'Cỏ → Chuột → Đại bàng',
    ]);
    expect(trophicLevels(WEB, 'dai-bang')).toEqual([3, 4, 5]);
    expect(trophicLevels(WEB, 'ran')).toEqual([3, 4]);
  });

  it('judges arrows, including reversed ones', () => {
    expect(judgeLink('co', 'tho').ok).toBe(true);
    const back = judgeLink('tho', 'co');
    expect(back.ok).toBe(false);
    expect(back.text).toContain('Ngược chiều');
    expect(judgeLink('tho', 'ran').text).toContain('chuột');
    expect(judgeLink('ech', 'co').text).toContain('sản xuất');
  });

  it('loses the frog when the grasshoppers go', () => {
    expect(cascade(WEB, ['chau-chau'])).toEqual(['ech']);
    expect(cascade(WEB, ['co'])).toEqual(['chau-chau', 'tho', 'chuot', 'ech', 'ran', 'dai-bang']);
  });
});
