import { describe, expect, it } from 'vitest';
import {
  CELLS,
  ENZYMES,
  ENZYME_IDS,
  cutDonor,
  cutPlasmid,
  ligate,
  pcrPositive,
  stickyEnd,
} from './engine.js';

/** Reverse complement of a DNA strand. @param {string} s */
const revComp = (s) =>
  [...s]
    .reverse()
    .map((b) => /** @type {Record<string, string>} */ ({ A: 'T', T: 'A', G: 'C', C: 'G' })[b])
    .join('');

describe('restriction enzymes', () => {
  it('recognise palindromic sites and leave the book sticky ends', () => {
    for (const e of ENZYME_IDS) expect(revComp(ENZYMES[e].site)).toBe(ENZYMES[e].site);
    expect(stickyEnd('EcoRI')).toBe('AATT');
    expect(stickyEnd('BamHI')).toBe('GATC');
    expect(stickyEnd('HindIII')).toBe('AGCT');
  });

  it('only opens a plasmid at a site that spares the origin', () => {
    expect(cutPlasmid('EcoRI').ok).toBe(true);
    expect(cutPlasmid('BamHI').ok).toBe(true);
    expect(cutPlasmid('HindIII').text).toContain('khởi đầu tái bản');
  });

  it('only frees the gene intact with EcoRI', () => {
    expect(ENZYME_IDS.filter((e) => cutDonor(e).ok)).toEqual(['EcoRI']);
    expect(cutDonor('HindIII').text).toContain('hỏng');
  });

  it('joins only matching sticky ends', () => {
    expect(ligate('EcoRI', 'EcoRI').ok).toBe(true);
    expect(ligate('BamHI', 'EcoRI').ok).toBe(false);
    expect(ligate('BamHI', 'EcoRI').text).toContain('không bổ sung');
    expect(ligate('HindIII', 'HindIII').ok).toBe(false);
  });

  it('finds the recombinant cells by PCR', () => {
    expect(CELLS.filter(pcrPositive)).toHaveLength(3);
    expect(CELLS.filter((c) => c === 'empty')).toHaveLength(2);
  });
});
