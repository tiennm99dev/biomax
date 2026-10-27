import { describe, expect, it } from 'vitest';
import {
  MAX_BASES,
  PRESETS,
  anticodon,
  chainText,
  checkLookup,
  readingFrame,
  sanitize,
} from './engine.js';

describe('translation by hand', () => {
  it('cleans typed mRNA and reads T as U', () => {
    expect(sanitize("5'-aug ttt-3'")).toBe('AUGUUU');
    expect(sanitize('A'.repeat(40))).toHaveLength(MAX_BASES);
  });

  it('starts at the first AUG and stops at the first stop codon', () => {
    const f = readingFrame('GCAUGUUUGGCAAAUGGUAAGC');
    expect(f.start).toBe(2);
    expect(f.codons.map((c) => c.codon)).toEqual(['AUG', 'UUU', 'GGC', 'AAA', 'UGG', 'UAA']);
    expect(f.codons.map((c) => c.aa)).toEqual(['Met', 'Phe', 'Gly', 'Lys', 'Trp', 'Stop']);
    expect(f.stopped).toBe(true);
  });

  it('translates every preset to a chain ending at a stop codon', () => {
    const chains = PRESETS.map((p) =>
      readingFrame(p)
        .codons.map((c) => c.aa)
        .join(' '),
    );
    expect(chains).toEqual([
      'Met Phe Gly Lys Trp Stop',
      'Met Ala Ser Glu Stop',
      'Met His Arg Gly Stop',
      'Met Lys Gly Pro Phe Stop',
    ]);
  });

  it('reports a missing start codon', () => {
    expect(readingFrame('UUUCCC').start).toBe(-1);
  });

  it('gives tRNA anticodons', () => {
    expect(anticodon('AUG')).toBe('UAC');
    expect(anticodon('GGC')).toBe('CCG');
  });

  it('explains a wrong look-up by the first differing base', () => {
    expect(checkLookup('UUU', 'UUU').ok).toBe(true);
    const wrong = checkLookup('GGC', 'GCC');
    expect(wrong.ok).toBe(false);
    expect(wrong.text).toContain('thứ hai');
  });

  it('writes the chain', () => {
    expect(chainText(['Met', 'Phe'])).toBe('Met – Phe');
  });
});
