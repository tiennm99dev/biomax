import { describe, expect, it } from 'vitest';
import { ANIMALS, BRANCHES, GROUPS, animalById, groupById, groupsOf } from './animal-groups.js';

describe('animal groups', () => {
  it('splits nine groups into four invertebrate and five vertebrate groups', () => {
    expect(GROUPS).toHaveLength(9);
    expect(groupsOf('khong-xuong-song').map((g) => g.id)).toEqual([
      'ruot-khoang',
      'giun',
      'than-mem',
      'chan-khop',
    ]);
    expect(groupsOf('co-xuong-song').map((g) => g.id)).toEqual([
      'ca',
      'luong-cu',
      'bo-sat',
      'chim',
      'thu',
    ]);
    expect(BRANCHES.map((b) => b.id)).toEqual(['khong-xuong-song', 'co-xuong-song']);
  });

  it('files every animal under a known group with a unique plain id', () => {
    const ids = ANIMALS.map((a) => a.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const a of ANIMALS) {
      expect(a.id).toMatch(/^[a-z-]+$/);
      expect(() => groupById(a.group)).not.toThrow();
    }
    for (const g of GROUPS) expect(ANIMALS.some((a) => a.group === g.id)).toBe(true);
  });

  it('keeps the animals whose names mislead in their true group', () => {
    expect(animalById('ca-voi').group).toBe('thu');
    expect(animalById('doi').group).toBe('thu');
    expect(animalById('chim-canh-cut').group).toBe('chim');
    expect(animalById('muc').group).toBe('than-mem');
  });

  it('throws on unknown ids', () => {
    expect(() => animalById('rong')).toThrow();
    // @ts-expect-error unknown group id
    expect(() => groupById('nam')).toThrow();
  });
});
