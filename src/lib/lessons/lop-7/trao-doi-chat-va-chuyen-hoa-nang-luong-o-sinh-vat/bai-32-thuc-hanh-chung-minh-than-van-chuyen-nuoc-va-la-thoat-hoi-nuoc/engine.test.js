import { describe, expect, it } from 'vitest';
import { leafResult, looks, mist, rise, stemResult } from './engine.js';

describe('coloured water in the stem', () => {
  it('climbs faster in an airy, bright place than in a dark, humid one', () => {
    expect(rise('thoang', 3)).toBeGreaterThan(rise('am-toi', 3));
    expect(rise('thoang', 6)).toBe(1);
    expect(rise('thoang', 0)).toBe(0);
  });

  it('stains the leaves and shows coloured xylem dots after some hours', () => {
    const r = stemResult('mau', 'thoang', 7);
    expect(r.leaf).toContain('nhuộm màu');
    expect(r.section).toContain('mạch gỗ');
    expect(r.text).toContain('Kết luận');
  });

  it('shows nothing with plain water', () => {
    const r = stemResult('trong', 'thoang', 12);
    expect(r.leaf).toContain('tự nhiên');
    expect(r.text).toContain('nước pha màu');
  });
});

describe('plastic bags over the shoots', () => {
  it('mists over the leafy plant in the sun, not the bare one', () => {
    const r = leafResult('nang', 'than-la', 60);
    expect(looks(r.b)).toContain('giọt');
    expect(looks(r.a)).toContain('không thay đổi');
    expect(r.text).toContain('Kết luận');
  });

  it('mists more slowly in the shade', () => {
    const o = { leaves: true, cover: /** @type {const} */ ('than-la'), minutes: 30 };
    expect(mist({ ...o, light: 'ram' })).toBeLessThan(mist({ ...o, light: 'nang' }));
  });

  it('warns that bagging the whole pot spoils the test', () => {
    const r = leafResult('nang', 'ca-chau', 60);
    expect(r.a).toBeGreaterThan(0.5);
    expect(r.text).toContain('sai');
  });
});
