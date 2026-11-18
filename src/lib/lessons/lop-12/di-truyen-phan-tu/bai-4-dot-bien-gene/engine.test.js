import { describe, expect, it } from 'vitest';
import { mutate, translate } from '#lib/domain/codons.js';
import { GENES, PATHWAYS, TASKS, changeOf, geneStats, oneChange, pairBonds } from './engine.js';

/** Every single-base change of a sequence. @param {string} seq */
function singleChanges(seq) {
  /** @type {string[]} */
  const out = [];
  for (let at = 0; at < seq.length; at++) {
    for (const base of 'ATGC') {
      if (base !== seq[at]) out.push(mutate(seq, { type: 'substitution', at, base }));
      out.push(mutate(seq, { type: 'insertion', at, base }));
    }
    out.push(mutate(seq, { type: 'deletion', at }));
  }
  return out;
}

describe('gene editor', () => {
  it('starts from the documented proteins', () => {
    expect(translate(GENES[0].seq).protein.join(' – ')).toBe('Met – Phe – Gln – Gly – Trp – Ser');
    expect(translate(GENES[1].seq).protein.join(' – ')).toBe(
      'Met – Val – His – Leu – Thr – Pro – Glu – Glu – Lys',
    );
  });

  it('lets every task be met by one change on every gene', () => {
    const missing = GENES.flatMap((g) => {
      const all = singleChanges(g.seq);
      return TASKS.filter((t) => !all.some((s) => t.met(g.seq, s))).map((t) => `${g.id}:${t.id}`);
    });
    expect(missing).toEqual([]);
  });

  it('ticks a task only for a single change from the starting gene', () => {
    const seq = GENES[0].seq;
    const missense = mutate(seq, { type: 'substitution', at: 3, base: 'C' });
    const two = mutate(missense, { type: 'substitution', at: 11, base: 'C' });
    const shifted = mutate(seq, { type: 'insertion', at: 4, base: 'A' });
    const task = (/** @type {string} */ id) => TASKS.find((t) => t.id === id);
    expect(task('missense')?.met(seq, missense)).toBe(true);
    expect(changeOf(seq, two).effect).toBe('missense');
    expect(task('missense')?.met(seq, two)).toBe(false);
    expect(task('frameshift')?.met(seq, shifted)).toBe(true);
    expect(
      task('frameshift')?.met(seq, mutate(shifted, { type: 'insertion', at: 8, base: 'C' })),
    ).toBe(false);
  });

  it('counts one substitution, insertion or deletion as one change', () => {
    expect(oneChange('ATGC', 'ATGC')).toBe(false);
    expect(oneChange('ATGC', 'ACGC')).toBe(true);
    expect(oneChange('ATGC', 'ACGA')).toBe(false);
    expect(oneChange('ATGC', 'ATTGC')).toBe(true);
    expect(oneChange('ATGC', 'AGC')).toBe(true);
    expect(oneChange('ATGC', 'AC')).toBe(false);
    expect(oneChange('ATGC', 'TAGC')).toBe(false);
  });

  it('measures the sickle-cell substitution', () => {
    const hbs = mutate(GENES[1].seq, { type: 'substitution', at: 19, base: 'T' });
    expect(translate(hbs).protein[6]).toBe('Val');
    expect(changeOf(GENES[1].seq, hbs)).toMatchObject({
      pairs: 0,
      hydrogen: 0,
      effect: 'missense',
      changedAt: 6,
    });
  });

  it('counts pairs and hydrogen bonds', () => {
    expect(geneStats('ATGC')).toEqual({ pairs: 4, hydrogen: 10 });
    expect(changeOf('ATGC', 'ATG')).toMatchObject({ pairs: -1, hydrogen: -3 });
  });
});

describe('substitution pathways', () => {
  it('ends on a normal pair that differs from the start', () => {
    for (const p of PATHWAYS) {
      const first = p.steps[0].pair;
      const last = p.steps.at(-1)?.pair ?? first;
      expect(last.join('')).not.toBe(first.join(''));
      expect(Math.abs(pairBonds(last) - pairBonds(first))).toBe(1);
    }
  });
});
