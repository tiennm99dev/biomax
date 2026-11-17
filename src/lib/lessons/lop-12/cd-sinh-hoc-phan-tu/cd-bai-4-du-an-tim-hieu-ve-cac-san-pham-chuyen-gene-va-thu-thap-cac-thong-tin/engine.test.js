import { describe, expect, it } from 'vitest';
import {
  PRODUCTS,
  VOTES,
  cardsOf,
  percents,
  product,
  reportText,
  tallyText,
  voteNote,
} from './engine.js';

describe('the products', () => {
  it('each weigh benefits against risks', () => {
    const bad = PRODUCTS.filter((p) => {
      const gains = p.args.filter((a) => a.side === 'loi-ich').length;
      const risks = p.args.filter((a) => a.side === 'rui-ro').length;
      return gains < 2 || risks < 2 || p.conditions.length === 0;
    });
    expect(bad.map((p) => p.id)).toEqual([]);
  });

  it('use unique argument ids across the board', () => {
    const ids = PRODUCTS.flatMap((p) => p.args.map((a) => a.id));
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('turns arguments into mixed sort cards', () => {
    const p = product('bong-bt');
    const cards = cardsOf(p);
    expect(cards.map((c) => c.id).sort()).toEqual(p.args.map((a) => a.id).sort());
    expect(cards.map((c) => c.id)).not.toEqual(p.args.map((a) => a.id));
    expect(cards.every((c) => c.bin === p.args.find((a) => a.id === c.id)?.side)).toBe(true);
  });
});

describe('the vote', () => {
  it('answers each vote with what to weigh', () => {
    const p = product('gao-vang');
    expect(voteNote(p, 'ung-ho')).toContain('gene có thể phát tán');
    expect(voteNote(p, 'phan-doi')).toContain('bổ sung tiền vitamin A');
    expect(voteNote(product('bong-bt'), 'ung-ho')).toContain('Em ủng hộ bông Bt kháng sâu');
    expect(voteNote(p, 'co-dieu-kien')).toContain(p.conditions[0]);
  });

  it('turns a class tally into percentages that add up to 100', () => {
    expect(percents([0, 0, 0])).toBeNull();
    expect(percents([1, 1, 1])).toEqual([34, 33, 33]);
    expect(percents([20, 10, 10])).toEqual([50, 25, 25]);
    expect(tallyText([0, 0, 0])).toContain('Chưa nhập');
    expect(tallyText([12, 20, 8])).toContain('40 bạn');
    expect(tallyText([12, 20, 8])).toContain('Nhiều nhất: ủng hộ có điều kiện');
    expect(tallyText([10, 10, 5])).toContain(
      'Hai ý kiến ngang nhau: ủng hộ và ủng hộ có điều kiện.',
    );
    expect(tallyText([4, 4, 4])).toContain(
      'Ba ý kiến ngang nhau: ủng hộ, ủng hộ có điều kiện và phản đối.',
    );
  });

  it('writes a report of the products that were voted on', () => {
    expect(reportText({}, {})).toContain('Chưa có sản phẩm');
    const text = reportText({ insulin: 'ung-ho' }, { 'bong-bt': [3, 4, 5] });
    expect(text).toContain('Insulin tái tổ hợp');
    expect(text).toContain('Ý kiến của em: Ủng hộ.');
    expect(text).toContain('Bông Bt');
    expect(text).toContain('12 bạn');
    expect(text).not.toContain('Lúa gạo vàng');
    expect(VOTES).toHaveLength(3);
  });
});
