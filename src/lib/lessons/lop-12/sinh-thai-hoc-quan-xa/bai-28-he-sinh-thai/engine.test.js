import { describe, expect, it } from 'vitest';
import { PARTS, grouped, judge } from './engine.js';

const ALL = PARTS.map((p) => p.id);
const without = (/** @type {string[]} */ ...ids) => ALL.filter((id) => !ids.includes(id));

describe('aquarium ecosystem', () => {
  it('accepts the full set', () => {
    expect(judge(ALL).level).toBe('ok');
  });

  it('runs without consumers but says they are missing', () => {
    const r = judge(without('oc', 'ca'));
    expect(r.level).toBe('partial');
    expect(r.text).toContain('sinh vật tiêu thụ');
  });

  it('names the missing part', () => {
    const cases = /** @type {Array<[string[], string]>} */ ([
      [[], 'trống'],
      [without('nuoc'), 'nước'],
      [without('anh-sang'), 'ánh sáng'],
      [without('rong', 'tao'), 'sinh vật sản xuất'],
      [without('khoang'), 'muối khoáng'],
      [without('vi-khuan'), 'phân giải'],
    ]);
    const bad = cases.filter(([chosen, word]) => {
      const r = judge(chosen);
      return r.level !== 'broken' || !r.text.toLowerCase().includes(word);
    });
    expect(bad).toEqual([]);
  });

  it('sorts parts into the four groups', () => {
    const g = grouped(['ca', 'nuoc', 'rong', 'vi-khuan']);
    expect(g['vo-sinh'].map((p) => p.id)).toEqual(['nuoc']);
    expect(g['san-xuat'].map((p) => p.id)).toEqual(['rong']);
    expect(g['tieu-thu'].map((p) => p.id)).toEqual(['ca']);
    expect(g['phan-giai'].map((p) => p.id)).toEqual(['vi-khuan']);
  });
});
