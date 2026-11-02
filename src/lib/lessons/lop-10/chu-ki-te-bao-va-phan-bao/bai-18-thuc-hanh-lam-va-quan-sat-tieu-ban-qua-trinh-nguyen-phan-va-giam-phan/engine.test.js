import { describe, expect, it } from 'vitest';
import { SPECIMENS, fieldOf, judge, shapeOf, strokesOf, tallyOf } from './engine.js';

const SPECIMEN_IDS = /** @type {const} */ (['nguyen-phan', 'giam-phan']);

describe('a microscope field', () => {
  it('holds twelve cells with every stage present', () => {
    for (const id of SPECIMEN_IDS) {
      const field = fieldOf(id, 3);
      expect(field).toHaveLength(12);
      expect(new Set(field.map((c) => c.stage))).toEqual(
        new Set(SPECIMENS[id].stages.map((s) => s.id)),
      );
    }
  });

  it('keeps the mix of stages but moves the cells with another seed', () => {
    /** @param {{ stage: string }[]} f */
    const count = (f) =>
      f
        .map((c) => c.stage)
        .sort()
        .join();
    expect(count(fieldOf('nguyen-phan', 1))).toBe(count(fieldOf('nguyen-phan', 2)));
    expect(fieldOf('nguyen-phan', 1).map((c) => c.stage)).not.toEqual(
      fieldOf('nguyen-phan', 2).map((c) => c.stage),
    );
    expect(fieldOf('nguyen-phan', 4)).toEqual(fieldOf('nguyen-phan', 4));
  });

  it('shows interphase most often and anaphase no more often than any other stage', () => {
    const [first] = tallyOf('nguyen-phan');
    expect(first.id).toBe('trung-gian');
    const sau = SPECIMENS['nguyen-phan'].stages.find((s) => s.id === 'sau');
    const counts = SPECIMENS['nguyen-phan'].stages.map((s) => s.count);
    expect(sau?.count).toBe(Math.min(...counts));
  });
});

describe('drawing a cell', () => {
  it('draws chromosomes for every stage but interphase', () => {
    for (const id of SPECIMEN_IDS) {
      for (const s of SPECIMENS[id].stages) {
        const strokes = strokesOf(s.id, 5);
        if (s.id === 'trung-gian') expect(strokes).toEqual([]);
        else expect(strokes.length, s.id).toBeGreaterThan(0);
      }
    }
  });

  it('keeps the chromosomes inside the cell', () => {
    const bad = [];
    for (const id of SPECIMEN_IDS) {
      for (const s of SPECIMENS[id].stages) {
        const { rx, ry } = shapeOf(id, s.id);
        for (let seed = 0; seed < 40; seed++) {
          for (const { d } of strokesOf(s.id, seed)) {
            const nums = d.match(/-?\d+\.\d/g)?.map(Number) ?? [];
            for (let i = 0; i < nums.length; i += 2) {
              if (Math.abs(nums[i]) > rx || Math.abs(nums[i + 1]) > ry) bad.push(`${s.id} ${d}`);
            }
          }
        }
      }
    }
    expect(bad).toEqual([]);
  });

  it('draws the second meiotic division in smaller cells', () => {
    expect(shapeOf('giam-phan', 'giua-2').rx).toBeLessThan(shapeOf('giam-phan', 'giua-1').rx);
    expect(shapeOf('giam-phan', 'cuoi-2').pinch).toBe(true);
    expect(shapeOf('giam-phan', 'giua-1').pinch).toBe(false);
  });

  it('tells metaphase I from metaphase II by rows', () => {
    /** @param {string} stage */
    const xs = (stage) =>
      strokesOf(stage, 9).map((s) => {
        const [x1, , x2] = s.d.match(/-?\d+\.\d/g)?.map(Number) ?? [];
        return (x1 + x2) / 2;
      });
    expect(xs('giua-1').some((x) => x < -3) && xs('giua-1').some((x) => x > 3)).toBe(true);
    expect(xs('giua-2').every((x) => Math.abs(x) < 3)).toBe(true);
  });
});

describe('naming a stage', () => {
  it('accepts the right stage and explains a wrong one by its own signs', () => {
    expect(judge('nguyen-phan', 'giua', 'giua').ok).toBe(true);
    const wrong = judge('nguyen-phan', 'giua', 'sau');
    expect(wrong.ok).toBe(false);
    expect(wrong.text).toContain('Kì sau');
  });
});
