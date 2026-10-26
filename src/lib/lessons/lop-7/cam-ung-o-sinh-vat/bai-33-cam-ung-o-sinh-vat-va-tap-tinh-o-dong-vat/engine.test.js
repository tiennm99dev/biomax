import { describe, expect, it } from 'vitest';
import {
  BEHAVIOUR_BINS,
  BEHAVIOUR_CARDS,
  MIMOSA,
  MIMOSA_TEXT,
  leafletAngle,
  lightText,
  mimosaStage,
  openness,
} from './engine.js';

describe('phototropism text', () => {
  it('names the stimulus and the response once the shoot has bent', () => {
    expect(lightText('phai', 0)).toContain('mọc thẳng');
    expect(lightText('phai', 2)).toContain('bắt đầu uốn cong về bên phải');
    expect(lightText('trai', 4)).toContain('hướng sáng');
    expect(lightText('tren', 4)).toContain('vẫn mọc thẳng');
  });
});

describe('sensitive plant', () => {
  it('folds quickly after a touch, stays folded, then opens again', () => {
    expect(openness(null)).toBe(1);
    expect(mimosaStage(null)).toBe('mo');
    expect(openness(MIMOSA.close / 2)).toBeCloseTo(0.5);
    expect(mimosaStage(0.1)).toBe('dang-cup');
    expect(openness(2)).toBe(0);
    expect(mimosaStage(2)).toBe('cup');
    expect(openness(6)).toBeCloseTo(0.5);
    expect(mimosaStage(6)).toBe('dang-mo');
    expect(openness(MIMOSA.reopen)).toBe(1);
    expect(mimosaStage(MIMOSA.reopen + 1)).toBe('mo');
  });

  it('lays the leaflets flat when folded', () => {
    expect(leafletAngle(1)).toBe(70);
    expect(leafletAngle(0)).toBe(8);
    for (const t of Object.values(MIMOSA_TEXT)) expect(t.length).toBeGreaterThan(10);
  });
});

describe('behaviour cards', () => {
  it('puts every card into a known bin with unique ids', () => {
    const bins = new Set(BEHAVIOUR_BINS.map((b) => b.id));
    for (const c of BEHAVIOUR_CARDS) expect(bins.has(c.bin)).toBe(true);
    expect(new Set(BEHAVIOUR_CARDS.map((c) => c.id)).size).toBe(BEHAVIOUR_CARDS.length);
    expect(BEHAVIOUR_CARDS.filter((c) => c.bin === 'bam-sinh')).toHaveLength(5);
    expect(BEHAVIOUR_CARDS.filter((c) => c.bin === 'hoc-duoc')).toHaveLength(5);
  });
});
