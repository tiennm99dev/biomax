import { describe, expect, it } from 'vitest';
import { GROUPS, METHODS, PESTS, check, method, pestDeck, sortCards } from './engine.js';

describe('the measures and pests', () => {
  it('pair every pest with its own measure, one to one', () => {
    const used = PESTS.map((p) => p.method);
    expect(new Set(used).size).toBe(PESTS.length);
    expect(used.every((id) => METHODS.some((m) => m.id === id))).toBe(true);
    expect(METHODS.every((m) => GROUPS.some((g) => g.id === m.group))).toBe(true);
  });

  it('covers each of the three groups', () => {
    const missing = GROUPS.filter((g) => !METHODS.some((m) => m.group === g.id));
    expect(missing).toEqual([]);
  });
});

describe('the matching game', () => {
  it('accepts every right pair and rejects every other', () => {
    const fails = [];
    for (const p of PESTS) {
      for (const m of METHODS) {
        const r = check(p.id, m.id);
        if (r.ok !== (p.method === m.id)) fails.push(`${p.id}:${m.id}`);
      }
    }
    expect(fails).toEqual([]);
  });

  it('explains a wrong pick by what the measure is for and keeps abbreviations', () => {
    const wrong = check('ray-nau', 'bt');
    expect(wrong.text).toContain('sâu non bộ cánh vảy');
    expect(wrong.text).toContain('rầy nâu hại lúa');
    const right = check('muoi-aedes', 'wolbachia');
    expect(right.text).toContain('thả muỗi mang vi khuẩn Wolbachia');
    expect(check('sau-to', 'bt').text).toContain('phun chế phẩm Bt');
    expect(() => method('khong-co')).toThrow();
  });

  it('mixes the pests the same way every time', () => {
    const a = pestDeck().map((p) => p.id);
    expect(a).toEqual(pestDeck().map((p) => p.id));
    expect(a).toHaveLength(PESTS.length);
    expect(a).not.toEqual(PESTS.map((p) => p.id));
  });
});

describe('the group sort', () => {
  it('has cards in every group, each with a reason', () => {
    const cards = sortCards();
    expect(new Set(cards.map((c) => c.id)).size).toBe(cards.length);
    const bad = GROUPS.filter((g) => cards.filter((c) => c.bin === g.id).length < 3);
    expect(bad).toEqual([]);
    expect(cards.every((c) => c.why.length > 0)).toBe(true);
  });
});
