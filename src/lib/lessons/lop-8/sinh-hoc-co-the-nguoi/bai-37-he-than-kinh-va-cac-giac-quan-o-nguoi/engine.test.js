import { describe, expect, it } from 'vitest';
import { NERVE_BINS, NERVE_CARDS, clearRange, describeLook, look } from './engine.js';

describe('eye model', () => {
  it('lets a normal eye see from 25 cm to very far', () => {
    expect(clearRange('binh-thuong')).toEqual({ near: 25, far: null });
    expect(look('binh-thuong', 500).image).toBe('ro');
    expect(look('binh-thuong', 25).image).toBe('ro');
    expect(look('binh-thuong', 500).bulge).toBeLessThan(0.1);
    expect(look('binh-thuong', 25).bulge).toBe(1);
    expect(look('binh-thuong', 15).image).toBe('sau');
  });

  it('focuses far objects in front of the retina of a short-sighted eye', () => {
    expect(clearRange('can-thi')).toEqual({ near: 17, far: 50 });
    const r = look('can-thi', 300);
    expect(r.image).toBe('truoc');
    expect(r.shiftMm).toBeLessThan(0);
    expect(look('can-thi', 40).image).toBe('ro');
    expect(look('can-thi', 300, true).image).toBe('ro');
    expect(describeLook('can-thi', 300)).toContain('kính phân kì');
  });

  it('focuses near objects behind the retina of a long-sighted eye', () => {
    expect(clearRange('vien-thi')).toEqual({ near: 50, far: null });
    const r = look('vien-thi', 30);
    expect(r.image).toBe('sau');
    expect(r.shiftMm).toBeGreaterThan(0);
    expect(look('vien-thi', 300).image).toBe('ro');
    expect(look('vien-thi', 30, true).image).toBe('ro');
    expect(describeLook('vien-thi', 30)).toContain('kính hội tụ');
  });

  it('corrects both defects with glasses', () => {
    expect(clearRange('can-thi', true)).toEqual({ near: 25, far: null });
    expect(clearRange('vien-thi', true)).toEqual({ near: 25, far: null });
  });
});

describe('nervous system cards', () => {
  it('puts every card in a known bin', () => {
    const bins = NERVE_BINS.map((b) => b.id);
    for (const c of NERVE_CARDS) expect(bins).toContain(c.bin);
  });
});
