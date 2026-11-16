/**
 * From a split gene (gene phân mảnh) to a protein: transcribe the coding
 * region into pre-mRNA, process it (cut out the introns and join the exons,
 * add the 5' cap and the poly-A tail), then translate the mature mRNA codon
 * by codon with the tRNA anticodons. The genetic code comes from the domain
 * codon module.
 */
import { translate } from '#lib/domain/codons.js';
import { anticodon } from '../_shared/bases.js';

/**
 * @typedef {{ kind: 'exon' | 'intron', seq: string }} Segment
 * @typedef {{ id: string, label: string, segments: Segment[] }} SplitGene
 */

/**
 * Short split genes, coding strand 5' → 3'. Every intron starts with GT and
 * ends with AG, as most introns do.
 * @type {SplitGene[]}
 */
export const GENES = [
  {
    id: 'gene-1',
    label: 'Gene 1 (3 exon)',
    segments: [
      { kind: 'exon', seq: 'ATGGCT' },
      { kind: 'intron', seq: 'GTAAGTCAG' },
      { kind: 'exon', seq: 'TTCGGA' },
      { kind: 'intron', seq: 'GTCCAG' },
      { kind: 'exon', seq: 'AAATGGTAA' },
    ],
  },
  {
    id: 'gene-2',
    label: 'Gene 2 (3 exon)',
    segments: [
      { kind: 'exon', seq: 'ATGAAC' },
      { kind: 'intron', seq: 'GTGCTAAG' },
      { kind: 'exon', seq: 'CCGTGG' },
      { kind: 'intron', seq: 'GTTTCAG' },
      { kind: 'exon', seq: 'CATTGA' },
    ],
  },
];

/** DNA to RNA letters. @param {string} dna */
export function toRna(dna) {
  return dna.replace(/T/g, 'U');
}

/** The pre-mRNA segments: every exon and intron, with U for T. @param {SplitGene} gene */
export function preMrna(gene) {
  return gene.segments.map((s) => ({ kind: s.kind, seq: toRna(s.seq) }));
}

/**
 * The mRNA left after removing the segments whose index is in `removed`.
 * @param {SplitGene} gene @param {number[]} removed
 */
export function spliced(gene, removed) {
  return preMrna(gene)
    .filter((_, i) => !removed.includes(i))
    .map((s) => s.seq)
    .join('');
}

/** Indices of the introns of a gene. @param {SplitGene} gene */
export function intronIndices(gene) {
  return gene.segments.flatMap((s, i) => (s.kind === 'intron' ? [i] : []));
}

/** The mature mRNA (exons only). @param {SplitGene} gene */
export function matureMrna(gene) {
  return spliced(gene, intronIndices(gene));
}

/**
 * The codons the ribosome reads from AUG up to and including the stop codon,
 * each with the anticodon of its tRNA (none for a stop codon) and its amino
 * acid or 'Stop'.
 * @param {string} mrna
 */
export function readCodons(mrna) {
  return translate(mrna).codons.map((c) => ({
    codon: c.codon,
    aa: c.aa,
    anticodon: c.aa === 'Stop' ? null : anticodon(c.codon),
  }));
}

/** The polypeptide as "Met – Ala – …". @param {string} mrna */
export function proteinText(mrna) {
  return translate(mrna).protein.join(' – ');
}

/**
 * Checks a tap on a pre-mRNA segment while processing: introns are cut,
 * exons are kept.
 * @param {SplitGene} gene @param {number} index @param {number[]} removed
 * @returns {{ ok: boolean, removed: number[], text: string }}
 */
export function cut(gene, index, removed) {
  const seg = gene.segments[index];
  if (!seg || removed.includes(index))
    return { ok: false, removed, text: 'Đoạn này đã được cắt bỏ.' };
  if (seg.kind === 'exon') {
    return {
      ok: false,
      removed,
      text: 'Đây là exon: đoạn mang thông tin mã hoá amino acid, được giữ lại và nối với nhau.',
    };
  }
  const next = [...removed, index].sort((a, b) => a - b);
  const left = intronIndices(gene).filter((i) => !next.includes(i)).length;
  return {
    ok: true,
    removed: next,
    text: left
      ? `Đã cắt intron ${toRna(seg.seq)}; còn ${left} intron.`
      : 'Đã cắt hết intron, các exon được nối liền thành vùng mã hoá liên tục.',
  };
}
