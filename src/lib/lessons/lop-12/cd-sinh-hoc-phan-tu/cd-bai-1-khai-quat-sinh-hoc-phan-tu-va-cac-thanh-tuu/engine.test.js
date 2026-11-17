import { describe, expect, it } from 'vitest';
import {
  MILESTONES,
  ROUNDS,
  deck,
  milestone,
  pick,
  rootsOf,
  rootsText,
  sortCards,
  timeline,
} from './engine.js';

describe('the milestones', () => {
  it('have unique ids and only link to earlier milestones', () => {
    expect(new Set(MILESTONES.map((m) => m.id)).size).toBe(MILESTONES.length);
    const bad = MILESTONES.filter((m) =>
      m.needs.some((n) => !MILESTONES.some((x) => x.id === n) || milestone(n).year >= m.year),
    );
    expect(bad.map((m) => m.id)).toEqual([]);
  });

  it('lists a field oldest first', () => {
    const all = timeline('all');
    expect(all).toHaveLength(MILESTONES.length);
    expect(all.every((m, i) => i === 0 || all[i - 1].year <= m.year)).toBe(true);
    expect(timeline('li-thuyet').every((m) => m.field === 'li-thuyet')).toBe(true);
    expect(timeline('ung-dung')[0].id).toBe('berg');
  });

  it('follows the links back to the double helix', () => {
    expect(rootsOf('insulin')).toEqual(['cohen-boyer', 'berg', 'enzyme-cat', 'xoan-kep']);
    expect(rootsOf('xoan-kep')).toEqual([]);
    expect(rootsText('pcr')).toContain('1953');
    expect(rootsText('xoan-kep')).toContain('điểm khởi đầu');
  });
});

describe('the time-order challenge', () => {
  it('uses distinct years in each round and mixes each deck', () => {
    const bad = ROUNDS.filter((r) => {
      const years = r.ids.map((id) => milestone(id).year);
      const d = deck(r);
      const sorted = d.every((m, i) => i === 0 || d[i - 1].year <= m.year);
      return new Set(years).size !== years.length || sorted || d.length !== r.ids.length;
    });
    expect(bad.map((r) => r.id)).toEqual([]);
  });

  it('accepts the earliest card and walks a round to the end', () => {
    const fails = [];
    for (const r of ROUNDS) {
      /** @type {string[]} */
      const placed = [];
      const order = [...r.ids].sort((a, b) => milestone(a).year - milestone(b).year);
      for (const id of order) {
        if (!pick(r, placed, id).ok) fails.push(`${r.id}:${id}`);
        placed.push(id);
      }
    }
    expect(fails).toEqual([]);
  });

  it('explains a wrong pick by the milestone it builds on', () => {
    const r = ROUNDS[1];
    const wrong = pick(r, [], 'insulin');
    expect(wrong.ok).toBe(false);
    expect(wrong.text).toContain('Chuyển gene của ếch');
    const plain = pick(r, ['berg', 'cohen-boyer'], 'pcr');
    expect(plain.ok).toBe(false);
    expect(plain.text).toContain('chưa phải mốc sớm nhất');
  });
});

describe('the theory-or-application sort', () => {
  it('has five cards in each bin, each with its reason', () => {
    const cards = sortCards();
    expect(cards).toHaveLength(10);
    expect(cards.filter((c) => c.bin === 'li-thuyet')).toHaveLength(5);
    expect(
      cards.every((c) => c.why.startsWith(c.bin === 'li-thuyet' ? 'Lí thuyết' : 'Ứng dụng')),
    ).toBe(true);
  });
});
