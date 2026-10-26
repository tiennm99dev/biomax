import { describe, expect, it } from 'vitest';
import { validateDiagram } from '#lib/domain/diagrams.js';
import { ENDOCRINE_MAP, GLAND_BINS, GLAND_CARDS } from './engine.js';

describe('endocrine map', () => {
  it('is a valid hotspot diagram', () => {
    expect(validateDiagram(ENDOCRINE_MAP)).toEqual([]);
  });

  it('names the hormones of the pancreas and the thyroid', () => {
    const info = (/** @type {string} */ id) => ENDOCRINE_MAP.parts.find((p) => p.id === id)?.info;
    expect(info('tuyen-tuy')).toContain('insulin');
    expect(info('tuyen-tuy')).toContain('glucagon');
    expect(info('tuyen-giap')).toContain('thyroxine');
  });
});

describe('gland cards', () => {
  it('puts every card in a known bin and fills every bin', () => {
    const bins = new Set(GLAND_BINS.map((b) => b.id));
    for (const c of GLAND_CARDS) expect(bins.has(c.bin)).toBe(true);
    for (const b of bins) expect(GLAND_CARDS.some((c) => c.bin === b)).toBe(true);
  });
});
