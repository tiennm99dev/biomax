/**
 * A virtual recombinant-DNA lab: cut a plasmid vector and the donor DNA with
 * restriction enzymes, join them with DNA ligase, transform E. coli and
 * screen the cells by PCR. Each restriction enzyme cuts a palindromic site
 * one base in from each end, leaving four-base sticky ends; only identical
 * sticky ends pair, so vector and gene must be cut with the same enzyme.
 */

/** @typedef {'EcoRI' | 'BamHI' | 'HindIII'} Enzyme */

/** Recognition sites (5' → 3'); every enzyme here cuts between bases 1 and 2. */
export const ENZYMES = /** @type {Record<Enzyme, { site: string }>} */ ({
  EcoRI: { site: 'GAATTC' },
  BamHI: { site: 'GGATCC' },
  HindIII: { site: 'AAGCTT' },
});

export const ENZYME_IDS = /** @type {Enzyme[]} */ (Object.keys(ENZYMES));

/**
 * The single-stranded overhang left by an enzyme, 5' → 3' (AATT for EcoRI).
 * @param {Enzyme} e
 */
export function stickyEnd(e) {
  const s = ENZYMES[e].site;
  return s.slice(1, s.length - 1);
}

/**
 * Where each enzyme's site lies on the two DNAs: `safe` means cutting there
 * spoils nothing; `ori` cuts the plasmid's origin of replication; `gene`
 * cuts inside the gene to transfer. An enzyme missing from a map has no site.
 * @type {{ plasmid: Partial<Record<Enzyme, 'safe' | 'ori'>>, donor: Partial<Record<Enzyme, 'safe' | 'gene'>> }}
 */
export const SITES = {
  plasmid: { EcoRI: 'safe', BamHI: 'safe', HindIII: 'ori' },
  donor: { EcoRI: 'safe', HindIII: 'gene' },
};

/**
 * @typedef {{ ok: boolean, text: string }} Verdict
 */

/**
 * The result of cutting the plasmid with an enzyme.
 * @param {Enzyme} e @returns {Verdict}
 */
export function cutPlasmid(e) {
  const where = SITES.plasmid[e];
  if (!where)
    return { ok: false, text: `Plasmid không có trình tự nhận biết của ${e} nên không bị cắt mở.` };
  if (where === 'ori') {
    return {
      ok: false,
      text: `${e} cắt vào vùng khởi đầu tái bản của plasmid: thể truyền không còn tự tái bản được trong tế bào nhận.`,
    };
  }
  return {
    ok: true,
    text: `${e} cắt mở vòng plasmid ở một vị trí, để lại hai đầu dính ${stickyEnd(e)}.`,
  };
}

/**
 * The result of cutting the donor DNA with an enzyme.
 * @param {Enzyme} e @returns {Verdict}
 */
export function cutDonor(e) {
  const where = SITES.donor[e];
  if (!where)
    return {
      ok: false,
      text: `DNA người không có trình tự nhận biết của ${e} ở hai đầu gene nên gene không được tách ra.`,
    };
  if (where === 'gene') {
    return {
      ok: false,
      text: `${e} cắt vào giữa gene insulin: gene bị hỏng, không còn mã hoá được protein hoàn chỉnh.`,
    };
  }
  return {
    ok: true,
    text: `${e} cắt ở hai đầu gene insulin, tách gene ra với hai đầu dính ${stickyEnd(e)}.`,
  };
}

/**
 * Whether DNA ligase can join the cut gene into the cut plasmid.
 * @param {Enzyme} vectorEnzyme @param {Enzyme} geneEnzyme @returns {Verdict}
 */
export function ligate(vectorEnzyme, geneEnzyme) {
  const a = cutPlasmid(vectorEnzyme);
  const b = cutDonor(geneEnzyme);
  if (!a.ok || !b.ok) return { ok: false, text: 'Chưa có plasmid mở và gene nguyên vẹn để nối.' };
  if (stickyEnd(vectorEnzyme) !== stickyEnd(geneEnzyme)) {
    return {
      ok: false,
      text: `Đầu dính ${stickyEnd(vectorEnzyme)} của plasmid và ${stickyEnd(geneEnzyme)} của gene không bổ sung với nhau, ligase không nối được. Phải cắt cả hai bằng cùng một enzyme.`,
    };
  }
  return {
    ok: true,
    text: `Các đầu dính ${stickyEnd(vectorEnzyme)} bắt cặp bổ sung; DNA ligase nối liên kết phosphodiester, tạo DNA tái tổ hợp.`,
  };
}

/**
 * What each of the cells on the dish took up during transformation, the
 * same for every visitor: most take up nothing, some take up a plasmid that
 * closed again without the gene, some the recombinant plasmid.
 * @type {Array<'none' | 'empty' | 'recombinant'>}
 */
export const CELLS = [
  'none',
  'recombinant',
  'none',
  'empty',
  'none',
  'none',
  'recombinant',
  'none',
  'empty',
  'none',
  'recombinant',
  'none',
];

/**
 * PCR with primers specific to the insulin gene gives a product only from
 * cells that carry the recombinant plasmid.
 * @param {'none' | 'empty' | 'recombinant'} cell
 */
export function pcrPositive(cell) {
  return cell === 'recombinant';
}
