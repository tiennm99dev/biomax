import { describe, expect, it } from 'vitest';
import {
  AMINO_ACIDS,
  LEVELS,
  MAX_GLUCOSE,
  MISSIONS,
  POLYSACCHARIDES,
  TARGET_CHAIN,
  bondCount,
  chainLayout,
  compareSequence,
  foldedness,
  polymerMass,
  sequenceCount,
  structureBeads,
  structureStatus,
  sugarStage,
} from './engine.js';

describe('joining monomers', () => {
  it('loses one water per bond', () => {
    expect(bondCount(0)).toBe(0);
    expect(bondCount(1)).toBe(0);
    expect(bondCount(100)).toBe(99);
    expect(polymerMass(0)).toBe(0);
    expect(polymerMass(1)).toBe(180);
    expect(polymerMass(2)).toBe(342);
    expect(polymerMass(100)).toBe(16218);
  });

  it('names a sugar by its length', () => {
    expect([1, 2, 3].map(sugarStage)).toEqual([
      'Đường đơn',
      'Đường đôi',
      'Đang dài dần thành đường đa',
    ]);
  });

  it('lays every polysaccharide out as one connected tree', () => {
    const problems = [];
    for (const { id } of POLYSACCHARIDES) {
      for (let n = 1; n <= MAX_GLUCOSE; n += 1) {
        const units = chainLayout(id, n);
        if (units.length !== n) problems.push(`${id} ${n}: length ${units.length}`);
        const places = new Set(units.map((u) => `${u.col},${u.row}`));
        if (places.size !== n) problems.push(`${id} ${n}: overlap`);
        units.forEach((u, i) => {
          if (i === 0) return;
          const p = units[u.parent];
          if (!p || u.parent >= i) problems.push(`${id} ${n}: unit ${i} has no parent`);
          else if (Math.abs(p.col - u.col) + Math.abs(p.row - u.row) !== 1) {
            problems.push(`${id} ${n}: unit ${i} is not next to its parent`);
          }
        });
      }
    }
    expect(problems).toEqual([]);
  });

  it('shows branches on glycogen sooner than on starch and flips only cellulose', () => {
    const firstBranch = (/** @type {'tinh-bot' | 'glycogen'} */ id) =>
      chainLayout(id, MAX_GLUCOSE).findIndex((u) => u.row === 1);
    expect(firstBranch('glycogen')).toBeLessThan(firstBranch('tinh-bot'));
    expect(chainLayout('cellulose', 4).map((u) => u.flip)).toEqual([false, true, false, true]);
    expect(chainLayout('glycogen', 8).some((u) => u.flip)).toBe(false);
  });

  it('gives every situation a real polysaccharide', () => {
    const ids = POLYSACCHARIDES.map((p) => p.id);
    expect(MISSIONS.filter((m) => !ids.includes(m.answer))).toEqual([]);
  });
});

describe('protein sequences', () => {
  it('tells an order change from a change of make-up', () => {
    expect(compareSequence(TARGET_CHAIN)).toBe('same');
    expect(compareSequence(['Ala', 'Gly', 'Lys', 'Val', 'Ser'])).toBe('reordered');
    expect(compareSequence(['Gly', 'Ala', 'Lys', 'Val'])).toBe('different');
    expect(compareSequence(['Gly', 'Ala', 'Lys', 'Val', 'Gly'])).toBe('different');
  });

  it('counts the possible chains', () => {
    expect(sequenceCount(3)).toBe(8000);
    expect(sequenceCount(8)).toBe(25600000000);
    expect(new Set(AMINO_ACIDS.map((a) => a.id)).size).toBe(AMINO_ACIDS.length);
  });
});

describe('structure levels and denaturing', () => {
  it('keeps a protein folded only in mild conditions', () => {
    expect(foldedness(37, 7)).toBe(1);
    expect(foldedness(45, 5)).toBe(1);
    expect(foldedness(60, 7)).toBeCloseTo(0.5);
    expect(foldedness(90, 7)).toBe(0);
    expect(foldedness(37, 2)).toBe(0);
    expect(foldedness(37, 12)).toBe(0);
  });

  it('draws one chain up to level 3 and four at level 4', () => {
    for (const { value } of LEVELS) {
      const beads = structureBeads(value, 1);
      expect(new Set(beads.map((b) => b.chain)).size).toBe(value === 4 ? 4 : 1);
      const outside = beads.filter((b) => b.x < 0 || b.x > 320 || b.y < 0 || b.y > 170);
      expect(outside, `level ${value}`).toEqual([]);
    }
  });

  it('unfolds to a straight chain and leaves level 1 unchanged', () => {
    const flat = structureBeads(3, 0);
    expect(new Set(flat.map((b) => b.y)).size).toBe(1);
    expect(structureBeads(1, 0)).toEqual(structureBeads(1, 1));
  });

  it('reports the state of the protein', () => {
    expect(structureStatus(1, 0).tone).toBe('info');
    expect(structureStatus(3, 1).tone).toBe('ok');
    expect(structureStatus(3, 0).text).toContain('biến tính');
    expect(structureStatus(4, 0.5).tone).toBe('warn');
  });
});
