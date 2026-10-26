import { describe, expect, it } from 'vitest';
import {
  EXAMPLE_CARDS,
  FORMS,
  FORM_BINS,
  METHOD_BINS,
  METHOD_CARDS,
  formById,
  stageText,
} from './engine.js';

describe('asexual reproduction forms', () => {
  it('has four stages for every form', () => {
    for (const f of FORMS) expect(f.stages).toHaveLength(4);
    expect(new Set(FORMS.map((f) => f.id)).size).toBe(FORMS.length);
  });

  it('falls back to the first form for an unknown id', () => {
    expect(formById('nay-choi').organism).toBe('Thuỷ tức');
    expect(formById('khong-co').id).toBe('phan-doi');
  });

  it('adds the summary only on the last stage and clamps the stage', () => {
    const f = formById('phan-manh');
    expect(stageText(f, 0)).toContain('bước 1');
    expect(stageText(f, 0)).not.toContain(f.summary);
    expect(stageText(f, 3)).toContain(f.summary);
    expect(stageText(f, 9)).toContain('bước 4');
    expect(stageText(f, -2)).toContain('bước 1');
  });
});

describe('sorting decks', () => {
  it('puts every card into a known bin with unique ids', () => {
    for (const [cards, bins] of /** @type {const} */ ([
      [EXAMPLE_CARDS, FORM_BINS],
      [METHOD_CARDS, METHOD_BINS],
    ])) {
      const ids = new Set(bins.map((b) => b.id));
      for (const c of cards) expect(ids.has(c.bin)).toBe(true);
      expect(new Set(cards.map((c) => c.id)).size).toBe(cards.length);
      for (const b of bins) expect(cards.some((c) => c.bin === b.id)).toBe(true);
    }
  });
});
