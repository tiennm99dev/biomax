/**
 * Translation by hand: the ribosome starts at the first AUG and reads the
 * mRNA codon by codon; the learner finds each codon in the genetic code
 * table. This module plans the reading frame, checks a looked-up codon and
 * explains a wrong look-up base by base, and gives each codon's tRNA
 * anticodon. The genetic code itself comes from the domain codon table.
 */
import { clean, translate } from '#lib/domain/codons.js';

/** mRNA strands (5' → 3') offered as examples. */
export const PRESETS = [
  'GCAUGUUUGGCAAAUGGUAAGC',
  'AUGGCUUCAGAAUAG',
  'CCAUGCAUCGUGGAUGAUGA',
  'UUAUGAAAGGGCCCUUUUAAA',
];

export const MAX_BASES = 30;

/** @type {Record<string, string>} */
const RNA_PAIR = { A: 'U', U: 'A', G: 'C', C: 'G' };

/**
 * Keeps only A, U, G, C (upper-cased; T is read as U) and at most
 * `MAX_BASES` bases.
 * @param {string} text
 */
export function sanitize(text) {
  return clean(text)
    .replace(/T/g, 'U')
    .replace(/[^AUGC]/g, '')
    .slice(0, MAX_BASES);
}

/**
 * The reading frame of an mRNA: where the ribosome starts and every codon it
 * reads up to and including the first stop codon.
 * @param {string} mrna
 */
export function readingFrame(mrna) {
  const t = translate(sanitize(mrna));
  return { start: t.start, codons: t.codons, stopped: t.stopped };
}

/**
 * The anticodon of the tRNA that pairs with a codon, written 3' → 5' under it.
 * @param {string} codon
 */
export function anticodon(codon) {
  return [...codon].map((b) => RNA_PAIR[b] ?? '?').join('');
}

const POSITION = ['thứ nhất', 'thứ hai', 'thứ ba'];

/**
 * Checks a codon the learner picked in the table against the codon being
 * read; a wrong pick names the first base that differs.
 * @param {string} target @param {string} picked
 * @returns {{ ok: boolean, text: string }}
 */
export function checkLookup(target, picked) {
  if (target === picked) return { ok: true, text: '' };
  const i = [...target].findIndex((b, k) => picked[k] !== b);
  const where = [
    'khối hàng có chữ cái thứ nhất',
    'cột có chữ cái thứ hai',
    'dòng trong khối có chữ cái thứ ba',
  ];
  return {
    ok: false,
    text: `Em chọn ${picked}, nhưng ribosome đang đọc ${target}: nucleotide ${POSITION[i]} phải là ${target[i]}. Tìm ${where[i]} ${target[i]}.`,
  };
}

/**
 * The polypeptide as text: "Met – Phe – Gly".
 * @param {string[]} chain
 */
export function chainText(chain) {
  return chain.join(' – ');
}
