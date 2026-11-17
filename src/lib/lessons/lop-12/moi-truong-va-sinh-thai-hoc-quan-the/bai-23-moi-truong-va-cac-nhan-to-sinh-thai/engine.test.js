import { describe as group, expect, it } from 'vitest';
import { SPECIES, assess, describe, nicheBox, overlap, zoneOf } from './engine.js';

const [A, B] = SPECIES;

group('ecological limits for two factors', () => {
  it('treats the limits as death points and the favourable range as inclusive', () => {
    const r = A.temp;
    expect([9, 10, 15, 20, 25, 30, 33, 38, 40].map((t) => zoneOf(r, t))).toEqual([
      'ngoai',
      'ngoai',
      'chong-chiu',
      'thuan-loi',
      'thuan-loi',
      'thuan-loi',
      'chong-chiu',
      'ngoai',
      'ngoai',
    ]);
  });

  it('keeps every range ordered inside the drawn axes', () => {
    const bad = SPECIES.flatMap((sp) =>
      [sp.temp, sp.humid].filter(
        (r) => !(r.lower < r.favLow && r.favLow < r.favHigh && r.favHigh < r.upper),
      ),
    );
    expect(bad).toEqual([]);
  });

  it('lets the worst factor decide and names it', () => {
    expect(assess(A, 25, 70)).toEqual({
      temp: 'thuan-loi',
      humid: 'thuan-loi',
      overall: 'thuan-loi',
      limiting: [],
    });
    expect(assess(A, 35, 70).limiting).toEqual(['nhiệt độ']);
    expect(assess(A, 25, 30)).toMatchObject({ overall: 'ngoai', limiting: ['độ ẩm'] });
    expect(assess(A, 12, 90)).toMatchObject({
      overall: 'chong-chiu',
      limiting: ['nhiệt độ', 'độ ẩm'],
    });
    expect(assess(A, 40, 90).limiting).toEqual(['nhiệt độ']);
  });

  it('finds where the niches of the two species overlap', () => {
    expect(overlap(nicheBox(A), nicheBox(B))).toEqual({ x0: 10, x1: 30, y0: 40, y1: 80 });
    expect(overlap(nicheBox(A, true), nicheBox(B, true))).toBeNull();
  });

  it('writes a sentence for each overall zone', () => {
    expect(describe(A, 25, 70)).toContain('sinh trưởng, phát triển tốt');
    expect(describe(A, 35, 70)).toContain('bị ức chế, do nhiệt độ');
    expect(describe(A, 25, 30)).toContain('dù nhân tố còn lại vẫn trong giới hạn');
    expect(describe(A, 5, 10)).toContain('nhiệt độ và độ ẩm vượt giới hạn');
  });
});
