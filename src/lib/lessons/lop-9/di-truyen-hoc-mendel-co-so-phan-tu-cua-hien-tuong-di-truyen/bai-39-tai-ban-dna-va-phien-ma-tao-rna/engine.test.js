import { describe, expect, it } from 'vitest';
import { GENES, afterRounds, check, dnaPartner, mrnaOf, replicate, rnaPartner } from './engine.js';

describe('replication and transcription', () => {
  it('pairs free nucleotides with the template', () => {
    expect(['A', 'T', 'G', 'C'].map(dnaPartner).join('')).toBe('TACG');
    expect(['A', 'T', 'G', 'C'].map(rnaPartner).join('')).toBe('UACG');
    expect(() => rnaPartner('U')).toThrow();
  });

  it('explains wrong picks', () => {
    expect(check('dna', 'A', 'T').ok).toBe(true);
    expect(check('dna', 'G', 'C').reason).toContain('3 liên kết');
    expect(check('dna', 'A', 'G')).toMatchObject({ ok: false, want: 'T' });
    expect(check('dna', 'A', 'U').reason).toContain('không có');
    expect(check('rna', 'A', 'U').ok).toBe(true);
    expect(check('rna', 'A', 'T')).toMatchObject({ ok: false, want: 'U' });
    expect(check('rna', 'A', 'T').reason).toContain('U thay cho T');
    expect(check('rna', 'G', 'G').ok).toBe(false);
  });

  it('keeps one old strand in each daughter molecule', () => {
    const [d1, d2] = replicate('ATGC');
    expect(d1).toEqual({ old: 'ATGC', fresh: 'TACG' });
    expect(d2).toEqual({ old: 'TACG', fresh: 'ATGC' });
  });

  it('transcribes the coding sequence with U for T', () => {
    expect(mrnaOf('ATGCGTAC')).toBe('AUGCGUAC');
    for (const g of GENES) expect(mrnaOf(g)).toBe(g.replace(/T/g, 'U'));
  });

  it('counts molecules after k rounds', () => {
    expect(afterRounds(0, 16)).toEqual({
      molecules: 1,
      withOldStrand: 1,
      allNew: 0,
      freeNucleotides: 0,
    });
    expect(afterRounds(1, 16)).toEqual({
      molecules: 2,
      withOldStrand: 2,
      allNew: 0,
      freeNucleotides: 16,
    });
    expect(afterRounds(3, 3000)).toEqual({
      molecules: 8,
      withOldStrand: 2,
      allNew: 6,
      freeNucleotides: 21000,
    });
  });
});
