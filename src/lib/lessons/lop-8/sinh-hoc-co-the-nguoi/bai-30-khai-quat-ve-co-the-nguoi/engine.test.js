import { describe, expect, it } from 'vitest';
import {
  ACTIVITY,
  ORGAN_CARDS,
  SYSTEMS,
  SYSTEM_BINS,
  coordination,
  organOf,
  systemOf,
} from './engine.js';

describe('organ systems of the body', () => {
  it('lists the eight systems of the book, each with organs', () => {
    expect(SYSTEMS).toHaveLength(8);
    for (const s of SYSTEMS) expect(s.organs.length).toBeGreaterThan(0);
  });

  it('has unique organ ids that lead back to their system', () => {
    const ids = SYSTEMS.flatMap((s) => s.organs.map((o) => o.id));
    expect(new Set(ids).size).toBe(ids.length);
    expect(systemOf('tim')?.id).toBe('tuan-hoan');
    expect(systemOf('phoi')?.id).toBe('ho-hap');
    expect(systemOf('than')?.id).toBe('bai-tiet');
    expect(organOf('nao')?.name).toBe('Não');
    expect(organOf('khong-co')).toBeNull();
  });

  it('keeps every shape inside the body picture', () => {
    for (const s of SYSTEMS)
      for (const o of s.organs)
        for (const sh of o.shapes) {
          if (sh.kind === 'ellipse') {
            expect(sh.cx).toBeGreaterThan(0);
            expect(sh.cx).toBeLessThan(240);
            expect(sh.cy).toBeLessThan(440);
          } else {
            for (const n of sh.d.match(/\d+/g) ?? []) expect(Number(n)).toBeLessThanOrEqual(440);
          }
        }
  });

  it('raises the systems that serve running muscles', () => {
    const up = ACTIVITY.filter((a) => a.up).map((a) => a.id);
    expect(up).toEqual(expect.arrayContaining(['van-dong', 'tuan-hoan', 'ho-hap']));
    expect(coordination('chay')).toContain('thần kinh');
  });

  it('sorts every organ card into a known system and fills every bin', () => {
    const bins = new Set(SYSTEM_BINS.map((b) => b.id));
    for (const c of ORGAN_CARDS) expect(bins.has(c.bin)).toBe(true);
    for (const b of bins) expect(ORGAN_CARDS.some((c) => c.bin === b)).toBe(true);
    expect(new Set(ORGAN_CARDS.map((c) => c.id)).size).toBe(ORGAN_CARDS.length);
    expect(SYSTEM_BINS[0].label).toBe('Vận động');
  });
});
