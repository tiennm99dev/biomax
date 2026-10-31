/**
 * A virtual recombinant DNA lab: restriction enzymes find their recognition
 * site and cut it into sticky ends; cutting the human DNA must free the
 * insulin gene whole, cutting the plasmid must open it once, and the two
 * pieces join (with ligase) only when their sticky ends pair. The
 * recombinant plasmid then enters some E. coli cells, and an antibiotic
 * medium keeps only the cells that took it up.
 *
 * Sequences are short, made-up teaching sequences, not the real insulin gene.
 */

/**
 * @typedef {{ id: string, name: string, site: string, cut: number }} Enzyme
 * `cut` is where the enzyme cuts the top strand, counted from the start of
 * the site: EcoRI cuts G^AATTC, so `cut` is 1.
 */

/** @type {Enzyme[]} */
export const ENZYMES = [
  { id: 'ecori', name: 'EcoRI', site: 'GAATTC', cut: 1 },
  { id: 'bamhi', name: 'BamHI', site: 'GGATCC', cut: 1 },
  { id: 'hindiii', name: 'HindIII', site: 'AAGCTT', cut: 1 },
];

/** @param {string} id */
export function enzymeById(id) {
  return ENZYMES.find((e) => e.id === id) ?? ENZYMES[0];
}

const PAIR = /** @type {Record<string, string>} */ ({ A: 'T', T: 'A', G: 'C', C: 'G' });

/**
 * The complementary strand, base by base (read in the same direction).
 * @param {string} seq
 */
export function complement(seq) {
  return [...seq].map((b) => PAIR[b] ?? b).join('');
}

/**
 * The single-stranded tail an enzyme leaves: the bases between its cuts on
 * the two strands. EcoRI leaves AATT.
 * @param {Enzyme} enzyme
 */
export function stickyEnd(enzyme) {
  return enzyme.site.slice(enzyme.cut, enzyme.site.length - enzyme.cut);
}

/**
 * Start indices of every occurrence of a site in a linear sequence.
 * @param {string} seq
 * @param {string} site
 */
export function findSites(seq, site) {
  /** @type {number[]} */
  const out = [];
  for (let i = seq.indexOf(site); i !== -1; i = seq.indexOf(site, i + 1)) out.push(i);
  return out;
}

/**
 * Start indices of a site in a circular sequence (a plasmid), including
 * sites that run across the join.
 * @param {string} seq
 * @param {string} site
 */
export function findCircularSites(seq, site) {
  return findSites(seq + seq.slice(0, site.length - 1), site).filter((i) => i < seq.length);
}

/**
 * Cuts a linear sequence at every site of an enzyme (top strand).
 * @param {string} seq
 * @param {Enzyme} enzyme
 */
export function cutLinear(seq, enzyme) {
  const cuts = findSites(seq, enzyme.site).map((i) => i + enzyme.cut);
  /** @type {string[]} */
  const pieces = [];
  let from = 0;
  for (const c of cuts) {
    pieces.push(seq.slice(from, c));
    from = c;
  }
  pieces.push(seq.slice(from));
  return pieces;
}

// The human DNA: left flank, EcoRI, insulin gene, EcoRI, right flank.
const LEFT = 'TTAAGCTTCA';
const GENE = 'ATGGCCCTGTGGATCCGCCTCCTGCCCTGCTGGCGTAA';
const RIGHT = 'CGTAGG';
export const HUMAN_DNA = `${LEFT}GAATTC${GENE}GAATTC${RIGHT}`;
/** Where the gene sits in HUMAN_DNA, as [start, end). */
export const GENE_SPAN = /** @type {const} */ ([LEFT.length + 6, LEFT.length + 6 + GENE.length]);

/** The plasmid of E. coli, read from its EcoRI site; circular. */
export const PLASMID = 'GAATTCAGTCCAGGATCCTTGACAGCTAGCTCAGTCCTAGGTATAATGCTAGC';

/**
 * @typedef {'excised' | 'inside' | 'one-side' | 'none'} GeneCut
 * 'excised': cut on both sides of the gene and never inside it.
 */

/**
 * What an enzyme does to the human DNA around the insulin gene.
 * @param {Enzyme} enzyme
 * @returns {{ outcome: GeneCut, sites: number[], pieces: string[] }}
 */
export function cutHuman(enzyme) {
  const sites = findSites(HUMAN_DNA, enzyme.site);
  const [start, end] = GENE_SPAN;
  const len = enzyme.site.length;
  const inside = sites.some((i) => i + len > start && i < end);
  const before = sites.some((i) => i + len <= start);
  const after = sites.some((i) => i >= end);
  /** @type {GeneCut} */
  const outcome = inside
    ? 'inside'
    : before && after
      ? 'excised'
      : sites.length
        ? 'one-side'
        : 'none';
  return { outcome, sites, pieces: cutLinear(HUMAN_DNA, enzyme) };
}

/**
 * What an enzyme does to the plasmid: open it once (good), not at all, or
 * break it into several pieces.
 * @param {Enzyme} enzyme
 * @returns {{ outcome: 'opened' | 'none' | 'broken', sites: number[] }}
 */
export function cutPlasmid(enzyme) {
  const sites = findCircularSites(PLASMID, enzyme.site);
  return { outcome: sites.length === 1 ? 'opened' : sites.length ? 'broken' : 'none', sites };
}

/**
 * Whether the gene and the opened plasmid can be joined: both cut properly
 * and their sticky ends pair.
 * @param {Enzyme} geneEnzyme
 * @param {Enzyme} plasmidEnzyme
 */
export function canJoin(geneEnzyme, plasmidEnzyme) {
  return (
    cutHuman(geneEnzyme).outcome === 'excised' &&
    cutPlasmid(plasmidEnzyme).outcome === 'opened' &&
    stickyEnd(geneEnzyme) === stickyEnd(plasmidEnzyme)
  );
}

/**
 * Feedback on cutting the human DNA.
 * @param {Enzyme} enzyme
 */
export function humanCutText(enzyme) {
  const { outcome, sites } = cutHuman(enzyme);
  switch (outcome) {
    case 'excised':
      return `${enzyme.name} nhận ra ${sites.length} vị trí ${enzyme.site}, nằm hai bên gene insulin: gene được cắt rời nguyên vẹn, hai đầu là đầu dính ${stickyEnd(enzyme)}.`;
    case 'inside':
      return `${enzyme.name} cắt ngay trong gene insulin (vị trí ${enzyme.site}), làm gene bị đứt đôi. Hãy chọn enzyme khác.`;
    case 'one-side':
      return `${enzyme.name} chỉ cắt ở một phía của gene, nên gene chưa được tách ra. Cần enzyme cắt ở cả hai phía.`;
    default:
      return `Đoạn DNA này không có vị trí ${enzyme.site} nên ${enzyme.name} không cắt được.`;
  }
}

/**
 * Feedback on opening the plasmid.
 * @param {Enzyme} plasmidEnzyme
 * @param {Enzyme} geneEnzyme
 */
export function plasmidCutText(plasmidEnzyme, geneEnzyme) {
  const { outcome } = cutPlasmid(plasmidEnzyme);
  if (outcome === 'none')
    return `Plasmid không có vị trí ${plasmidEnzyme.site} nên ${plasmidEnzyme.name} không mở được vòng.`;
  if (outcome === 'broken')
    return `${plasmidEnzyme.name} cắt plasmid ở nhiều chỗ, làm vỡ plasmid thành nhiều đoạn.`;
  const a = stickyEnd(plasmidEnzyme);
  const b = stickyEnd(geneEnzyme);
  return a === b
    ? `${plasmidEnzyme.name} mở vòng plasmid ở một chỗ, để lại đầu dính ${a} khớp với đầu dính của gene insulin.`
    : `${plasmidEnzyme.name} mở được plasmid nhưng để lại đầu dính ${a}, không bổ sung với đầu dính ${b} của gene. Hãy cắt plasmid bằng cùng enzyme đã cắt gene.`;
}

/**
 * The E. coli cells after transformation: each takes up the recombinant
 * plasmid with probability `rate`.
 * @param {number} n
 * @param {number} rate
 * @param {() => number} rand
 */
export function transform(n, rate, rand) {
  return Array.from({ length: n }, () => rand() < rate);
}

/** The lab steps, in order. */
export const STEPS = [
  'Cắt DNA người',
  'Mở vòng plasmid',
  'Nối bằng enzyme nối',
  'Chuyển vào vi khuẩn',
  'Chọn lọc và nuôi cấy',
];
