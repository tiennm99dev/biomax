/**
 * Base pairing with RNA, shared by the lessons of the chapter: the RNA base
 * that pairs with a base (template DNA with mRNA, codon with anticodon).
 */

/** @type {Record<string, string>} */
const RNA_PAIR = { A: 'U', U: 'A', T: 'A', G: 'C', C: 'G' };

/**
 * The ribonucleotide that pairs with a base of DNA or RNA: A – U, T – A,
 * U – A, G – C, C – G.
 * @param {string} base
 */
export function rnaPartner(base) {
  const p = RNA_PAIR[base];
  if (!p) throw new Error(`not a nucleotide: ${base}`);
  return p;
}

/**
 * The anticodon of the tRNA that reads an mRNA codon, base by base in the
 * same left-to-right order (so 5'-AUG-3' gives the anticodon read 3' → 5' as UAC).
 * @param {string} codon
 */
export function anticodon(codon) {
  return [...codon].map(rnaPartner).join('');
}
