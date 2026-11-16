import { describe, expect, it } from 'vitest';
import { AGENT_BINS, DISEASE_CARDS, LEVELS, SITUATIONS, levelVerdict } from './engine.js';

describe('the pathogen cards', () => {
  it('puts every card in a known group and fills every group', () => {
    const bins = AGENT_BINS.map((b) => b.id);
    expect(DISEASE_CARDS.filter((c) => !bins.includes(c.bin))).toEqual([]);
    expect(bins.filter((b) => !DISEASE_CARDS.some((c) => c.bin === b))).toEqual([]);
  });

  it('gives every card its own id', () => {
    const ids = DISEASE_CARDS.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('sorts the diseases of the lesson into the right group', () => {
    const binOf = Object.fromEntries(DISEASE_CARDS.map((c) => [c.id, c.bin]));
    expect(binOf).toMatchObject({
      cum: 'virus',
      covid: 'virus',
      'sot-xuat-huyet': 'virus',
      ta: 'vi-khuan',
      'sot-ret': 'ki-sinh-trung',
    });
  });
});

describe('the levels of spread', () => {
  it('gives every situation a known level and covers every level', () => {
    const levels = LEVELS.map((l) => l.value);
    expect(SITUATIONS.filter((s) => !levels.includes(s.level))).toEqual([]);
    expect(levels.filter((l) => !SITUATIONS.some((s) => s.level === l))).toEqual([]);
  });

  it('accepts the right level and names it after a wrong one', () => {
    expect(levelVerdict('covid', 'dai-dich').tone).toBe('ok');
    const wrong = levelVerdict('covid', 'dich');
    expect(wrong.tone).toBe('warn');
    expect(wrong.text).toContain('đại dịch');
  });
});
