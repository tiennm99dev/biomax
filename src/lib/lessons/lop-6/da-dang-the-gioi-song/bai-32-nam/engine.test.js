import { describe, expect, it } from 'vitest';
import { PARTS, SPECIMENS, decide, observe, warningSigns } from './engine.js';

/** @param {string} id */
const byId = (id) => {
  const s = SPECIMENS.find((x) => x.id === id);
  if (!s) throw new Error(id);
  return s;
};

describe('mushroom inspector', () => {
  it('only lets cultivated mushrooms be eaten', () => {
    for (const s of SPECIMENS) expect(s.edible).toBe(!s.wild);
    expect(SPECIMENS.filter((s) => s.edible).length).toBeGreaterThan(1);
    expect(SPECIMENS.filter((s) => !s.edible).length).toBeGreaterThan(1);
  });

  it('includes counterexamples to every single-feature rule', () => {
    expect(byId('nam-rom').volva && byId('nam-rom').edible).toBe(true);
    expect(byId('nam-mo').ring && byId('nam-mo').edible).toBe(true);
    expect(!byId('nam-tan-trang').bright && !byId('nam-tan-trang').edible).toBe(true);
    expect(!byId('nam-phien-xanh').volva && !byId('nam-phien-xanh').edible).toBe(true);
  });

  it('describes every part of every specimen', () => {
    for (const s of SPECIMENS) {
      for (const p of PARTS) expect(observe(s, p.id).length).toBeGreaterThan(5);
    }
    expect(observe(byId('nam-do'), 'vong')).toContain('có vòng');
    expect(observe(byId('nam-so'), 'bao-goc')).toContain('không có bao gốc');
  });

  it('lists warning signs, with none on a cultivated plain mushroom', () => {
    expect(warningSigns(byId('nam-so'))).toEqual([]);
    expect(warningSigns(byId('nam-do'))).toEqual([
      'mọc hoang, không rõ loài',
      'màu sắc sặc sỡ',
      'có vòng cuống nấm',
      'có bao gốc',
    ]);
    expect(warningSigns(byId('nam-phien-xanh'))).toContain('phiến nấm màu xanh');
  });

  it('judges the choice', () => {
    expect(decide(byId('nam-huong'), 'an-duoc').ok).toBe(true);
    expect(decide(byId('nam-tan-trang'), 'an-duoc').ok).toBe(false);
    expect(decide(byId('nam-tan-trang'), 'khong-an').text).toContain('tử vong');
  });
});
