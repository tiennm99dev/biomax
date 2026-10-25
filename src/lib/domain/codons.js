/**
 * The standard genetic code: DNA and RNA strands, transcription, translation
 * with the standard codon table, and point mutations with their effect on the
 * protein (đồng nghĩa, sai nghĩa, vô nghĩa, dịch khung).
 *
 * Strands are written 5' → 3'. The coding strand (mạch mã hoá) has the same
 * sequence as the mRNA with T in place of U; the template strand (mạch khuôn)
 * is its reverse complement.
 */

/** @typedef {'A' | 'T' | 'G' | 'C'} DnaBase */
/** @typedef {'A' | 'U' | 'G' | 'C'} RnaBase */

/**
 * The 20 amino acids: three-letter code, one-letter code and name.
 * @type {Record<string, { short: string, letter: string, name: string }>}
 */
export const AMINO_ACIDS = {
  Ala: { short: 'Ala', letter: 'A', name: 'Alanine' },
  Arg: { short: 'Arg', letter: 'R', name: 'Arginine' },
  Asn: { short: 'Asn', letter: 'N', name: 'Asparagine' },
  Asp: { short: 'Asp', letter: 'D', name: 'Aspartic acid' },
  Cys: { short: 'Cys', letter: 'C', name: 'Cysteine' },
  Gln: { short: 'Gln', letter: 'Q', name: 'Glutamine' },
  Glu: { short: 'Glu', letter: 'E', name: 'Glutamic acid' },
  Gly: { short: 'Gly', letter: 'G', name: 'Glycine' },
  His: { short: 'His', letter: 'H', name: 'Histidine' },
  Ile: { short: 'Ile', letter: 'I', name: 'Isoleucine' },
  Leu: { short: 'Leu', letter: 'L', name: 'Leucine' },
  Lys: { short: 'Lys', letter: 'K', name: 'Lysine' },
  Met: { short: 'Met', letter: 'M', name: 'Methionine' },
  Phe: { short: 'Phe', letter: 'F', name: 'Phenylalanine' },
  Pro: { short: 'Pro', letter: 'P', name: 'Proline' },
  Ser: { short: 'Ser', letter: 'S', name: 'Serine' },
  Thr: { short: 'Thr', letter: 'T', name: 'Threonine' },
  Trp: { short: 'Trp', letter: 'W', name: 'Tryptophan' },
  Tyr: { short: 'Tyr', letter: 'Y', name: 'Tyrosine' },
  Val: { short: 'Val', letter: 'V', name: 'Valine' },
};

/** Marks a stop codon in the table and in translations. */
export const STOP = 'Stop';

/** RNA bases in the order the codon table is laid out: U, C, A, G. */
export const RNA_BASES = /** @type {const} */ (['U', 'C', 'A', 'G']);

// Rows of the standard table: first base U, C, A, G; within a row the second
// base runs U, C, A, G and the third base U, C, A, G.
const TABLE_ROWS = [
  'Phe Phe Leu Leu Ser Ser Ser Ser Tyr Tyr Stop Stop Cys Cys Stop Trp',
  'Leu Leu Leu Leu Pro Pro Pro Pro His His Gln Gln Arg Arg Arg Arg',
  'Ile Ile Ile Met Thr Thr Thr Thr Asn Asn Lys Lys Ser Ser Arg Arg',
  'Val Val Val Val Ala Ala Ala Ala Asp Asp Glu Glu Gly Gly Gly Gly',
];

/**
 * The standard codon table: mRNA codon → three-letter amino acid or `STOP`.
 * @type {Record<string, string>}
 */
export const CODON_TABLE = Object.fromEntries(
  TABLE_ROWS.flatMap((row, i) =>
    row.split(' ').map((aa, k) => {
      const second = RNA_BASES[Math.floor(k / 4)];
      const third = RNA_BASES[k % 4];
      return [`${RNA_BASES[i]}${second}${third}`, aa];
    }),
  ),
);

export const START_CODON = 'AUG';

/** @type {Record<string, string>} */
const DNA_PAIR = { A: 'T', T: 'A', G: 'C', C: 'G' };

/**
 * Upper-cases a sequence and drops spaces, dashes and the 5'/3' marks, so
 * "5'-ATG ccc-3'" reads as "ATGCCC".
 * @param {string} seq
 */
export function clean(seq) {
  return seq
    .toUpperCase()
    .replace(/5'|3'|[\s\-–—]/g, '')
    .trim();
}

/**
 * Whether a cleaned sequence is DNA (A, T, G, C) or RNA (A, U, G, C), or
 * neither. An empty sequence counts as DNA.
 * @param {string} seq
 * @returns {'dna' | 'rna' | null}
 */
export function kindOf(seq) {
  const s = clean(seq);
  if (/^[ATGC]*$/.test(s)) return 'dna';
  if (/^[AUGC]*$/.test(s)) return 'rna';
  return null;
}

/**
 * Base-by-base complement of a DNA strand, read in the same direction:
 * 5'-ATG-3' pairs with 3'-TAC-5'.
 * @param {string} dna
 */
export function complement(dna) {
  return [...clean(dna)].map((b) => DNA_PAIR[b] ?? '?').join('');
}

/**
 * The other strand written 5' → 3' (reverse complement).
 * @param {string} dna
 */
export function reverseComplement(dna) {
  return [...complement(dna)].reverse().join('');
}

/**
 * mRNA transcribed from a gene, written 5' → 3'. Given the coding strand,
 * the mRNA is the same sequence with U for T; given the template strand
 * (`from: 'template'`, also written 5' → 3'), it is its reverse complement.
 * @param {string} dna
 * @param {{ from?: 'coding' | 'template' }} [opts]
 */
export function transcribe(dna, opts = {}) {
  const coding = opts.from === 'template' ? reverseComplement(dna) : clean(dna);
  return coding.replace(/T/g, 'U');
}

/**
 * Splits a sequence into codons from `offset`; a trailing partial codon is dropped.
 * @param {string} seq
 * @param {number} [offset]
 */
export function codons(seq, offset = 0) {
  const s = clean(seq);
  /** @type {string[]} */
  const out = [];
  for (let i = offset; i + 3 <= s.length; i += 3) out.push(s.slice(i, i + 3));
  return out;
}

/**
 * Amino acid (three-letter code) or `STOP` for one mRNA codon; DNA codons
 * of the coding strand are accepted too. Unknown codons give null.
 * @param {string} codon
 */
export function aminoAcid(codon) {
  return CODON_TABLE[clean(codon).replace(/T/g, 'U')] ?? null;
}

/**
 * All codons for an amino acid (or `STOP`), in table order.
 * @param {string} aa
 */
export function codonsFor(aa) {
  return Object.keys(CODON_TABLE).filter((c) => CODON_TABLE[c] === aa);
}

/**
 * @typedef {{
 *   codon: string;
 *   aa: string;
 *   index: number;
 * }} TranslatedCodon
 * @typedef {{
 *   start: number;
 *   codons: TranslatedCodon[];
 *   protein: string[];
 *   stopped: boolean;
 * }} Translation
 */

/**
 * Translates an mRNA (or coding strand). By default the ribosome starts at
 * the first AUG and stops at the first stop codon, which is not part of the
 * protein; `fromStart: false` reads from the first base instead. `start` is
 * the base index where reading began, -1 when no AUG was found.
 * @param {string} mrna
 * @param {{ fromStart?: boolean }} [opts]
 * @returns {Translation}
 */
export function translate(mrna, opts = {}) {
  const s = clean(mrna).replace(/T/g, 'U');
  const start = opts.fromStart === false ? 0 : s.indexOf(START_CODON);
  if (start < 0) return { start: -1, codons: [], protein: [], stopped: false };
  /** @type {TranslatedCodon[]} */
  const read = [];
  /** @type {string[]} */
  const protein = [];
  let stopped = false;
  for (let i = start; i + 3 <= s.length; i += 3) {
    const codon = s.slice(i, i + 3);
    const aa = CODON_TABLE[codon] ?? '?';
    read.push({ codon, aa, index: i });
    if (aa === STOP) {
      stopped = true;
      break;
    }
    protein.push(aa);
  }
  return { start, codons: read, protein, stopped };
}

/**
 * @typedef {{ type: 'substitution', at: number, base: string }
 *   | { type: 'insertion', at: number, base: string }
 *   | { type: 'deletion', at: number }} Mutation
 */

/**
 * Applies a point mutation (one base pair) to a sequence: substitute the
 * base at `at`, insert `base` before position `at`, or delete the base at `at`.
 * @param {string} seq
 * @param {Mutation} m
 */
export function mutate(seq, m) {
  const s = clean(seq);
  if (m.at < 0 || m.at > s.length || (m.type !== 'insertion' && m.at === s.length)) {
    throw new RangeError(`position ${m.at} is outside the sequence`);
  }
  if (m.type === 'substitution') return s.slice(0, m.at) + m.base + s.slice(m.at + 1);
  if (m.type === 'insertion') return s.slice(0, m.at) + m.base + s.slice(m.at);
  return s.slice(0, m.at) + s.slice(m.at + 1);
}

/** @typedef {'none' | 'silent' | 'missense' | 'nonsense' | 'frameshift' | 'stop-loss' | 'start-loss'} MutationEffect */

export const EFFECT_LABELS = /** @type {Record<MutationEffect, string>} */ ({
  none: 'Không đổi trình tự',
  silent: 'Đột biến đồng nghĩa: chuỗi amino acid không đổi',
  missense: 'Đột biến sai nghĩa: một amino acid bị thay bằng amino acid khác',
  nonsense: 'Đột biến vô nghĩa: xuất hiện mã kết thúc sớm, chuỗi polypeptide ngắn lại',
  frameshift: 'Đột biến dịch khung: từ vị trí đột biến, mọi bộ ba phía sau bị đọc lệch',
  'stop-loss': 'Mất mã kết thúc: chuỗi polypeptide bị kéo dài',
  'start-loss': 'Mất mã mở đầu: không bắt đầu dịch mã được ở vị trí cũ',
});

/**
 * Compares the protein of an mRNA before and after a change and classifies
 * the effect. A change that leaves the protein as it was is silent; otherwise
 * inserting or deleting a number of bases that is not a multiple of three is
 * a frameshift.
 * @param {string} before mRNA or coding strand
 * @param {string} after mRNA or coding strand
 * @returns {{ effect: MutationEffect, changedAt: number | null }}
 *   `changedAt`: index of the first amino acid that differs (null when none).
 */
export function compareProteins(before, after) {
  const a = translate(before);
  const b = translate(after);
  if (clean(before) === clean(after)) return { effect: 'none', changedAt: null };
  const lengthDiff = clean(after).length - clean(before).length;
  const rna = clean(after).replace(/T/g, 'U');
  const startGone =
    lengthDiff === 0 ? rna.slice(a.start, a.start + 3) !== START_CODON : b.start < 0;
  if (a.start >= 0 && startGone) return { effect: 'start-loss', changedAt: 0 };
  let changedAt = null;
  const n = Math.max(a.protein.length, b.protein.length);
  for (let i = 0; i < n; i++) {
    if (a.protein[i] !== b.protein[i]) {
      changedAt = i;
      break;
    }
  }
  if (changedAt === null) return { effect: 'silent', changedAt };
  if (lengthDiff % 3 !== 0) return { effect: 'frameshift', changedAt };
  if (b.protein.length < a.protein.length && b.stopped && changedAt === b.protein.length) {
    return { effect: 'nonsense', changedAt };
  }
  if (a.stopped && b.protein.length > a.protein.length) return { effect: 'stop-loss', changedAt };
  return { effect: 'missense', changedAt };
}

/**
 * Number of hydrogen bonds between the two strands: A–T pairs form 2, G–C pairs 3.
 * @param {string} dna one strand
 */
export function hydrogenBonds(dna) {
  return [...clean(dna)].reduce((n, b) => n + (b === 'G' || b === 'C' ? 3 : 2), 0);
}

/**
 * Share of G + C in a DNA or RNA sequence, 0-1 (0 for an empty sequence).
 * @param {string} seq
 */
export function gcContent(seq) {
  const s = clean(seq);
  if (!s.length) return 0;
  return [...s].filter((b) => b === 'G' || b === 'C').length / s.length;
}
