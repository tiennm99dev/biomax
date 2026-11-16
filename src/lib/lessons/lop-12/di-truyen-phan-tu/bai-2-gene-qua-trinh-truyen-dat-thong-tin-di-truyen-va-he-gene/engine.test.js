import { describe, expect, it } from 'vitest';
import {
  GENES,
  cut,
  intronIndices,
  matureMrna,
  preMrna,
  proteinText,
  readCodons,
  spliced,
} from './engine.js';

describe('split genes', () => {
  it('keeps GT…AG introns', () => {
    const bad = GENES.flatMap((g) =>
      g.segments.filter(
        (s) => s.kind === 'intron' && !(s.seq.startsWith('GT') && s.seq.endsWith('AG')),
      ),
    );
    expect(bad).toEqual([]);
  });

  it('makes the expected proteins from the mature mRNA', () => {
    expect(matureMrna(GENES[0])).toBe('AUGGCUUUCGGAAAAUGGUAA');
    expect(proteinText(matureMrna(GENES[0]))).toBe('Met – Ala – Phe – Gly – Lys – Trp');
    expect(proteinText(matureMrna(GENES[1]))).toBe('Met – Asn – Pro – Trp – His');
  });

  it('gives another protein when the introns stay in', () => {
    const raw0 = spliced(GENES[0], []);
    expect(proteinText(raw0)).toBe(
      'Met – Ala – Val – Ser – Gln – Phe – Gly – Val – Gln – Lys – Trp',
    );
    const raw1 = spliced(GENES[1], []);
    expect(proteinText(raw1)).toBe('Met – Asn – Val – Leu – Ser – Arg – Gly – Phe – Gln – His');
    for (const g of GENES) {
      expect(
        preMrna(g)
          .map((s) => s.seq)
          .join(''),
      ).toBe(spliced(g, []));
    }
  });

  it('reads anticodons and ends on the stop codon', () => {
    const read = readCodons(matureMrna(GENES[0]));
    expect(read[0]).toEqual({ codon: 'AUG', aa: 'Met', anticodon: 'UAC' });
    expect(read.at(-1)).toEqual({ codon: 'UAA', aa: 'Stop', anticodon: null });
    expect(read).toHaveLength(7);
  });

  it('cuts introns and keeps exons', () => {
    const g = GENES[0];
    expect(intronIndices(g)).toEqual([1, 3]);
    expect(cut(g, 0, []).ok).toBe(false);
    const r = cut(g, 3, []);
    expect(r).toMatchObject({ ok: true, removed: [3] });
    const r2 = cut(g, 1, r.removed);
    expect(r2.removed).toEqual([1, 3]);
    expect(r2.text).toContain('hết intron');
    expect(cut(g, 1, r2.removed).ok).toBe(false);
  });
});
