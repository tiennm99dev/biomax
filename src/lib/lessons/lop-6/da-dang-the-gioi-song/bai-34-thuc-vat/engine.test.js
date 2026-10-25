import { describe, expect, it } from 'vitest';
import {
  CHALLENGES,
  GROUPS,
  NO_FILTER,
  challengeFeedback,
  emptyReason,
  filterGroups,
} from './engine.js';

/** @param {Partial<import('./engine.js').Filters>} f */
const ids = (f) => filterGroups({ ...NO_FILTER, ...f }).map((g) => g.id);

describe('plant group filter', () => {
  it('shows all four groups without filters', () => {
    expect(ids({})).toEqual(['reu', 'duong-xi', 'hat-tran', 'hat-kin']);
  });

  it('separates the groups by vascular tissue, seeds and flowers', () => {
    expect(ids({ mach: 'khong' })).toEqual(['reu']);
    expect(ids({ mach: 'co', hat: 'khong' })).toEqual(['duong-xi']);
    expect(ids({ hat: 'co', hoa: 'khong' })).toEqual(['hat-tran']);
    expect(ids({ hoa: 'co' })).toEqual(['hat-kin']);
    expect(ids({ hat: 'khong' })).toEqual(['reu', 'duong-xi']);
  });

  it('explains the combinations no plant has', () => {
    const f1 = {
      ...NO_FILTER,
      hoa: /** @type {const} */ ('co'),
      hat: /** @type {const} */ ('khong'),
    };
    expect(filterGroups(f1)).toEqual([]);
    expect(emptyReason(f1)).toContain('có hoa thì đều có hạt');
    const f2 = {
      ...NO_FILTER,
      hat: /** @type {const} */ ('co'),
      mach: /** @type {const} */ ('khong'),
    };
    expect(filterGroups(f2)).toEqual([]);
    expect(emptyReason(f2)).toContain('mạch dẫn');
  });

  it('keeps every group feature consistent: flowers need seeds, seeds need vessels', () => {
    for (const g of GROUPS) {
      if (g.traits.hoa) expect(g.traits.hat).toBe(true);
      if (g.traits.hat) expect(g.traits.mach).toBe(true);
    }
  });
});

describe('challenges', () => {
  it('solves each challenge with the filters of its group', () => {
    CHALLENGES.forEach((c, i) => {
      const g = GROUPS.find((x) => x.id === c.group);
      if (!g) throw new Error(c.group);
      const f = {
        mach: g.traits.mach ? 'co' : 'khong',
        hat: g.traits.hat ? 'co' : 'khong',
        hoa: g.traits.hoa ? 'co' : 'khong',
      };
      expect(challengeFeedback(i, /** @type {import('./engine.js').Filters} */ (f)).done).toBe(
        true,
      );
    });
  });

  it('asks for more filters, or names the wrong feature', () => {
    expect(challengeFeedback(0, NO_FILTER).text).toContain('Còn 4 nhóm');
    const wrong = challengeFeedback(0, { ...NO_FILTER, hoa: 'co' });
    expect(wrong.done).toBe(false);
    expect(wrong.text).toContain('cây thông không có hoa');
  });
});
