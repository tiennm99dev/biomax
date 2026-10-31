import { describe, expect, it } from 'vitest';
import {
  STAGES,
  assortmentKinds,
  checkPrediction,
  countsText,
  gameteCode,
  gametes,
  homologues,
  layout,
  stageCounts,
} from './engine.js';

/** @param {string} id */
const at = (id) => STAGES['giam-phan'].findIndex((s) => s.id === id);

describe('mitosis and meiosis', () => {
  it('follows the book table for mitosis', () => {
    const rows = STAGES['nguyen-phan'].map((_, i) => {
      const c = stageCounts('nguyen-phan', i, 2);
      return `${c.cells}:${c.perCell}${c.form}`;
    });
    expect(rows).toEqual(['1:4kep', '1:4kep', '1:4kep', '1:8don', '2:4don']);
  });

  it('halves the chromosome number in meiosis', () => {
    const rows = STAGES['giam-phan'].map((_, i) => {
      const c = stageCounts('giam-phan', i, 3);
      return `${c.cells}:${c.perCell}${c.form}`;
    });
    expect(rows).toEqual([
      '1:6kep',
      '1:6kep',
      '1:6kep',
      '1:6kep',
      '2:3kep',
      '2:3kep',
      '2:3kep',
      '2:6don',
      '4:3don',
    ]);
    expect(stageCounts('giam-phan', at('giua-1'), 2).chromatids).toBe(8);
  });

  it('draws as many chromosomes as the counts say', () => {
    /** @type {string[]} */
    const bad = [];
    for (const process of /** @type {const} */ (['nguyen-phan', 'giam-phan'])) {
      for (const n of [2, 3]) {
        STAGES[process].forEach((s, i) => {
          const c = stageCounts(process, i, n);
          const l = layout(process, i, { n, flips: [false, true, false], crossover: true });
          const forms = l.chromosomes.map((d) => (d.chromatids.length === 2 ? 'kep' : 'don'));
          if (
            l.cells.length !== c.cells ||
            l.chromosomes.length !== c.cells * c.perCell ||
            forms.some((f) => f !== c.form)
          ) {
            bad.push(`${process}:${n}:${s.id}`);
          }
        });
      }
    }
    expect(bad).toEqual([]);
  });

  it('keeps every chromosome inside a cell', () => {
    /** @type {string[]} */
    const out = [];
    for (const process of /** @type {const} */ (['nguyen-phan', 'giam-phan'])) {
      STAGES[process].forEach((s, i) => {
        const l = layout(process, i, { n: 3, flips: [false, false, false], crossover: false });
        for (const d of l.chromosomes) {
          const inside = (/** @type {number} */ y) =>
            l.cells.some((c) => ((d.x - c.cx) / c.rx) ** 2 + ((y - c.cy) / c.ry) ** 2 <= 1);
          if (!inside(d.y - d.len / 2) || !inside(d.y + d.len / 2)) out.push(`${process}:${s.id}`);
        }
      });
    }
    expect(out).toEqual([]);
  });

  it('makes gametes of one homologue per pair', () => {
    const gs = gametes(homologues(2, false), [false, false]);
    expect(gs.map(gameteCode)).toEqual(['BB', 'BB', 'MM', 'MM']);
    const flipped = gametes(homologues(2, false), [true, false]);
    expect(flipped.map(gameteCode)).toEqual(['MB', 'MB', 'BM', 'BM']);
    expect(assortmentKinds(3)).toBe(8);
  });

  it('gives four different gametes with a crossing over', () => {
    const gs = gametes(homologues(2, true), [false, false]).map(gameteCode);
    expect(new Set(gs).size).toBe(4);
    expect(gs).toEqual(['BB', 'B*B', 'M*M', 'MM']);
  });

  it('checks predictions and writes the counts', () => {
    expect(checkPrediction('nguyen-phan', 3, 2, 8, 'don').ok).toBe(true);
    expect(checkPrediction('nguyen-phan', 3, 2, 4, 'kep')).toEqual({
      ok: false,
      countOk: false,
      formOk: false,
    });
    expect(countsText('giam-phan', at('cuoi-2'), 2)).toBe(
      '4 tế bào; mỗi tế bào có 2 NST đơn, 2 tâm động.',
    );
    expect(countsText('nguyen-phan', 2, 2)).toContain('8 chromatid');
  });
});
