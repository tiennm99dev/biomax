import { describe, expect, it } from 'vitest';
import { mutate, translate } from '#lib/domain/codons.js';
import { GENES, MISSIONS, changeText, geneStats, missionMet, pointChange } from './engine.js';

const [gene, globin] = GENES.map((g) => g.seq);
const BASES = ['A', 'T', 'G', 'C'];

/** Every single point mutation of a sequence. @param {string} s */
function allPointMutations(s) {
  /** @type {string[]} */
  const out = [];
  for (let at = 0; at < s.length; at++) {
    out.push(mutate(s, { type: 'deletion', at }));
    for (const base of BASES) {
      out.push(mutate(s, { type: 'insertion', at, base }));
      if (base !== s[at]) out.push(mutate(s, { type: 'substitution', at, base }));
    }
  }
  return out;
}

describe('point mutations in a gene', () => {
  it('translates the preset genes', () => {
    expect(translate(gene).protein.join(' ')).toBe('Met His Glu Trp Lys Tyr');
    expect(translate(globin).protein.join(' ')).toBe('Met Val His Leu Thr Pro Glu Glu Lys');
  });

  it('finds the single base pair that was replaced, lost or added', () => {
    expect(pointChange('ATGCAT', 'ATGCAT')).toEqual({ kind: 'none' });
    expect(pointChange('ATGCAT', 'ATGGAT')).toEqual({
      kind: 'substitution',
      at: 3,
      from: 'C',
      to: 'G',
    });
    expect(pointChange('ATGCAT', 'ATGAT')).toEqual({ kind: 'deletion', at: 3, base: 'C' });
    expect(pointChange('ATGCAT', 'ATGTCAT')).toEqual({ kind: 'insertion', at: 3, base: 'T' });
    expect(pointChange('AAAT', 'AAT')).toEqual({ kind: 'deletion', at: 2, base: 'A' });
    expect(pointChange('ATGCAT', 'TTGCAA').kind).toBe('many');
    expect(pointChange('ATGCAT', 'ATGA').kind).toBe('many');
    expect(pointChange('ATGCAT', 'ATCGAT').kind).toBe('many');
  });

  it('counts base pairs and hydrogen bonds', () => {
    expect(geneStats('ATGC')).toEqual({ pairs: 4, bonds: 10 });
  });

  it('turns the sickle-cell substitution into a Glu to Val change', () => {
    const hbs = mutate(globin, { type: 'substitution', at: 19, base: 'T' });
    expect(translate(hbs).protein[6]).toBe('Val');
    expect(missionMet(MISSIONS[1], globin, hbs)).toBe(true);
    expect(changeText(globin, hbs)).toContain('liên kết hydrogen không đổi');
  });

  it('can reach every mission on every preset gene', () => {
    const missing = GENES.flatMap((g) => {
      const variants = allPointMutations(g.seq);
      return MISSIONS.filter((m) => !variants.some((v) => missionMet(m, g.seq, v))).map(
        (m) => `${g.id}:${m.id}`,
      );
    });
    expect(missing).toEqual([]);
  });

  it('rejects a mission done with two mutations or the wrong kind', () => {
    const nonsense = MISSIONS.find((m) => m.id === 'nonsense');
    if (!nonsense) throw new Error('missing mission');
    const tga = mutate(gene, { type: 'substitution', at: 11, base: 'A' });
    expect(missionMet(nonsense, gene, tga)).toBe(true);
    const twice = mutate(tga, { type: 'substitution', at: 5, base: 'C' });
    expect(missionMet(nonsense, gene, twice)).toBe(false);
    const lost = mutate(gene, { type: 'deletion', at: 10 });
    expect(missionMet(nonsense, gene, lost)).toBe(false);
  });

  it('describes the change in hydrogen bonds', () => {
    expect(changeText(gene, mutate(gene, { type: 'substitution', at: 4, base: 'G' }))).toContain(
      'tăng 1',
    );
    expect(changeText(gene, mutate(gene, { type: 'deletion', at: 2 }))).toContain('giảm 3');
  });
});
