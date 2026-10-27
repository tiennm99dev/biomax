/**
 * DNA replication and transcription, one nucleotide at a time: which free
 * nucleotide pairs with a base of the template, why a wrong pick is wrong,
 * the two daughter molecules (each one old and one new strand) and the
 * counts after k rounds of replication.
 */
import { complement } from '#lib/domain/codons.js';

/** Short genes (coding strand, 5' → 3') used by the widget. */
export const GENES = ['ATGCGTAC', 'TACGGATC', 'GCATTCGA', 'ATGGCATT', 'CTAGGCAT'];

/** @type {Record<string, string>} */
const RNA_PARTNER = { A: 'U', T: 'A', G: 'C', C: 'G' };

/**
 * The free DNA nucleotide that pairs with a template base (A–T, G–C).
 * @param {string} base
 */
export function dnaPartner(base) {
  return complement(base);
}

/**
 * The ribonucleotide that pairs with a template base (A–U, T–A, G–C, C–G).
 * @param {string} base
 */
export function rnaPartner(base) {
  const p = RNA_PARTNER[base];
  if (!p) throw new Error(`not a DNA base: ${base}`);
  return p;
}

/**
 * Checks a pick against a template base, in replication ('dna') or
 * transcription ('rna'), and says why a wrong pick is wrong.
 * @param {'dna' | 'rna'} kind @param {string} templateBase @param {string} picked
 * @returns {{ ok: boolean, want: string, reason: string }}
 */
export function check(kind, templateBase, picked) {
  const want = kind === 'dna' ? dnaPartner(templateBase) : rnaPartner(templateBase);
  if (picked === want) {
    const bonds = templateBase === 'G' || templateBase === 'C' ? 3 : 2;
    return { ok: true, want, reason: `${templateBase} – ${want}: ${bonds} liên kết hydrogen.` };
  }
  if (kind === 'rna' && picked === 'T') {
    return { ok: false, want, reason: 'RNA không có nucleotide loại T; trong RNA, U thay cho T.' };
  }
  if (kind === 'dna' && picked === 'U') {
    return { ok: false, want, reason: 'DNA không có nucleotide loại U.' };
  }
  return {
    ok: false,
    want,
    reason:
      kind === 'dna'
        ? `${templateBase} trên mạch khuôn chỉ liên kết với ${want} (A – T, G – C).`
        : `${templateBase} trên mạch khuôn chỉ liên kết với ${want} (A – U, T – A, G – C, C – G).`,
  };
}

/**
 * The two daughter molecules of a replication: each keeps one old strand and
 * gets one new strand built on it.
 * @param {string} strand1 one strand of the parent molecule, read left to right
 */
export function replicate(strand1) {
  const strand2 = [...strand1].map(dnaPartner).join('');
  return [
    { old: strand1, fresh: strand2 },
    { old: strand2, fresh: strand1 },
  ];
}

/**
 * The mRNA built on the template strand that pairs with `coding`: the same
 * sequence as the coding strand with U for T.
 * @param {string} coding
 */
export function mrnaOf(coding) {
  return [...coding]
    .map(dnaPartner)
    .map((t) => rnaPartner(t))
    .join('');
}

/**
 * Counts after k rounds of replication of one molecule with N nucleotides.
 * @param {number} k @param {number} n
 */
export function afterRounds(k, n) {
  const molecules = 2 ** k;
  return {
    molecules,
    withOldStrand: k === 0 ? 1 : 2,
    allNew: k === 0 ? 0 : molecules - 2,
    freeNucleotides: n * (molecules - 1),
  };
}
