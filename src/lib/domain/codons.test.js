import { describe, expect, it } from 'vitest';
import {
  AMINO_ACIDS,
  CODON_TABLE,
  STOP,
  aminoAcid,
  clean,
  codons,
  codonsFor,
  compareProteins,
  complement,
  gcContent,
  hydrogenBonds,
  kindOf,
  mutate,
  reverseComplement,
  transcribe,
  translate,
} from './codons.js';

describe('standard codon table', () => {
  it('has 64 codons: 61 sense codons and 3 stop codons', () => {
    expect(Object.keys(CODON_TABLE)).toHaveLength(64);
    expect(codonsFor(STOP).sort()).toEqual(['UAA', 'UAG', 'UGA']);
  });

  it('codes for exactly the 20 amino acids', () => {
    const coded = new Set(Object.values(CODON_TABLE).filter((aa) => aa !== STOP));
    expect([...coded].sort()).toEqual(Object.keys(AMINO_ACIDS).sort());
  });

  it('gives each amino acid its textbook number of codons', () => {
    /** @type {Record<string, number>} */
    const expected = {
      Ala: 4,
      Arg: 6,
      Asn: 2,
      Asp: 2,
      Cys: 2,
      Gln: 2,
      Glu: 2,
      Gly: 4,
      His: 2,
      Ile: 3,
      Leu: 6,
      Lys: 2,
      Met: 1,
      Phe: 2,
      Pro: 4,
      Ser: 6,
      Thr: 4,
      Trp: 1,
      Tyr: 2,
      Val: 4,
    };
    for (const [aa, n] of Object.entries(expected)) expect(codonsFor(aa), aa).toHaveLength(n);
  });

  it('reads well-known codons', () => {
    expect(aminoAcid('AUG')).toBe('Met');
    expect(aminoAcid('UGG')).toBe('Trp');
    expect(aminoAcid('UUU')).toBe('Phe');
    expect(aminoAcid('GGC')).toBe('Gly');
    expect(aminoAcid('CAU')).toBe('His');
    expect(aminoAcid('AGA')).toBe('Arg');
    expect(aminoAcid('AGU')).toBe('Ser');
    expect(aminoAcid('GAG')).toBe('Glu');
    expect(aminoAcid('GUG')).toBe('Val');
    expect(aminoAcid('UGA')).toBe(STOP);
    expect(aminoAcid('atg')).toBe('Met');
    expect(aminoAcid('XYZ')).toBeNull();
  });
});

describe('strands', () => {
  it('cleans spaces, dashes and strand ends', () => {
    expect(clean("5'-atg ccc-3'")).toBe('ATGCCC');
  });

  it('tells DNA from RNA', () => {
    expect(kindOf('ATGC')).toBe('dna');
    expect(kindOf('AUGC')).toBe('rna');
    expect(kindOf('ATUG')).toBeNull();
    expect(kindOf('ATGX')).toBeNull();
  });

  it('pairs A with T and G with C', () => {
    expect(complement('ATGC')).toBe('TACG');
    expect(reverseComplement('ATGC')).toBe('GCAT');
    expect(reverseComplement(reverseComplement('GATTACA'))).toBe('GATTACA');
  });

  it('transcribes the coding strand and the template strand to the same mRNA', () => {
    const coding = 'ATGGCTTAA';
    expect(transcribe(coding)).toBe('AUGGCUUAA');
    expect(transcribe(reverseComplement(coding), { from: 'template' })).toBe('AUGGCUUAA');
  });

  it('counts hydrogen bonds and the G + C share', () => {
    expect(hydrogenBonds('ATGC')).toBe(2 + 2 + 3 + 3);
    expect(gcContent('ATGC')).toBe(0.5);
    expect(gcContent('')).toBe(0);
  });

  it('splits into whole codons', () => {
    expect(codons('AUGGCUU')).toEqual(['AUG', 'GCU']);
    expect(codons('AUGGCUU', 1)).toEqual(['UGG', 'CUU']);
  });
});

describe('translation', () => {
  it('starts at the first AUG and stops at a stop codon', () => {
    const t = translate('GCAUGUUUAAAUAAGG');
    expect(t.start).toBe(2);
    expect(t.protein).toEqual(['Met', 'Phe', 'Lys']);
    expect(t.stopped).toBe(true);
    expect(t.codons.map((c) => c.codon)).toEqual(['AUG', 'UUU', 'AAA', 'UAA']);
  });

  it('reads from the first base when asked', () => {
    expect(translate('UUUAUG', { fromStart: false }).protein).toEqual(['Phe', 'Met']);
  });

  it('reports no start codon', () => {
    expect(translate('UUUCCC')).toEqual({ start: -1, codons: [], protein: [], stopped: false });
  });

  it('accepts the coding strand directly', () => {
    expect(translate('ATGTGGTGA').protein).toEqual(['Met', 'Trp']);
  });
});

describe('mutations', () => {
  const gene = 'AUGGAGAAAUGGUAA'; // Met-Glu-Lys-Trp-stop

  it('applies substitutions, insertions and deletions', () => {
    expect(mutate('ATGC', { type: 'substitution', at: 1, base: 'C' })).toBe('ACGC');
    expect(mutate('ATGC', { type: 'insertion', at: 4, base: 'A' })).toBe('ATGCA');
    expect(mutate('ATGC', { type: 'deletion', at: 0 })).toBe('TGC');
    expect(() => mutate('ATGC', { type: 'deletion', at: 4 })).toThrow(RangeError);
  });

  it('classifies a silent substitution', () => {
    const after = mutate(gene, { type: 'substitution', at: 5, base: 'A' }); // GAG → GAA, Glu
    expect(compareProteins(gene, after)).toEqual({ effect: 'silent', changedAt: null });
  });

  it('classifies a missense substitution, as in sickle-cell haemoglobin', () => {
    const after = mutate(gene, { type: 'substitution', at: 4, base: 'U' }); // GAG → GUG, Val
    expect(compareProteins(gene, after)).toEqual({ effect: 'missense', changedAt: 1 });
    expect(translate(after).protein).toEqual(['Met', 'Val', 'Lys', 'Trp']);
  });

  it('classifies a nonsense substitution', () => {
    const after = mutate(gene, { type: 'substitution', at: 11, base: 'A' }); // UGG → UGA
    expect(compareProteins(gene, after)).toEqual({ effect: 'nonsense', changedAt: 3 });
  });

  it('classifies a frameshift', () => {
    const after = mutate(gene, { type: 'deletion', at: 4 });
    expect(compareProteins(gene, after).effect).toBe('frameshift');
  });

  it('classifies a lost stop codon and a lost start codon', () => {
    const noStop = mutate('AUGUUUUAAGGG', { type: 'substitution', at: 6, base: 'C' }); // UAA → CAA
    expect(compareProteins('AUGUUUUAAGGG', noStop).effect).toBe('stop-loss');
    const noStart = mutate(gene, { type: 'substitution', at: 2, base: 'A' });
    expect(compareProteins(gene, noStart).effect).toBe('start-loss');
  });

  it('reports no change for an identical sequence', () => {
    expect(compareProteins(gene, gene)).toEqual({ effect: 'none', changedAt: null });
  });
});
