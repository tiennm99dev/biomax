/**
 * Offspring of one parent plant with genotype AaBb under the two forms of
 * reproduction. Asexual reproduction (mitosis) copies the parent: every
 * offspring is AaBb. Sexual reproduction (meiosis, then fertilisation)
 * between two AaBb parents gives the 16 equally likely gamete pairings of
 * the Punnett square: 9 genotypes and 4 phenotypes. An event then tests the
 * offspring: a stable environment keeps everyone, a new disease spares only
 * the aa plants, and a lone parent with no partner can reproduce only
 * asexually.
 */

/** @typedef {'vo-tinh' | 'huu-tinh'} Mode */
/** @typedef {'on-dinh' | 'dich-benh' | 'mot-ca-the'} Event */

export const PARENT = 'AaBb';

/** @type {Record<Mode, string>} */
export const MODE_NAMES = { 'vo-tinh': 'Sinh sản vô tính', 'huu-tinh': 'Sinh sản hữu tính' };

/** @type {Record<Event, string>} */
export const EVENT_NAMES = {
  'on-dinh': 'Môi trường ổn định',
  'dich-benh': 'Dịch bệnh mới (chỉ cây aa kháng bệnh)',
  'mot-ca-the': 'Chỉ còn một cá thể (không tự thụ phấn được)',
};

/**
 * The four gametes of an AaBb parent, from independent assortment.
 * @param {string} parent Genotype such as 'AaBb'.
 */
export function gametes(parent) {
  const [a1, a2, b1, b2] = parent.split('');
  return [a1 + b1, a1 + b2, a2 + b1, a2 + b2];
}

/**
 * The genotype of a zygote from two gametes, each gene written with its
 * dominant allele first ('aA' becomes 'Aa').
 * @param {string} g1 @param {string} g2
 */
export function zygote(g1, g2) {
  const pair = (/** @type {string} */ x, /** @type {string} */ y) => (x <= y ? x + y : y + x);
  return pair(g1[0], g2[0]) + pair(g1[1], g2[1]);
}

/**
 * Sixteen offspring of the parent: clones, or the Punnett square of two
 * AaBb parents read row by row.
 * @param {Mode} mode
 */
export function offspring(mode) {
  if (mode === 'vo-tinh') return Array.from({ length: 16 }, () => PARENT);
  const gs = gametes(PARENT);
  return gs.flatMap((egg) => gs.map((sperm) => zygote(egg, sperm)));
}

/**
 * The phenotype of a genotype: A_ is dark green, aa yellow; B_ tall, bb short.
 * @param {string} g
 */
export function phenotype(g) {
  return {
    green: g.includes('A'),
    tall: g.includes('B'),
  };
}

/**
 * Words for a phenotype.
 * @param {string} g
 */
export function phenotypeText(g) {
  const p = phenotype(g);
  return `${p.green ? 'lá xanh đậm' : 'lá vàng'}, ${p.tall ? 'thân cao' : 'thân thấp'}`;
}

/**
 * Whether one offspring survives the event.
 * @param {string} g @param {Event} event
 */
export function survives(g, event) {
  return event === 'dich-benh' ? !g.includes('A') : true;
}

/**
 * Everything the comparison table shows for one form under one event.
 * @param {Mode} mode @param {Event} event
 */
export function outcome(mode, event) {
  const born = event === 'mot-ca-the' && mode === 'huu-tinh' ? [] : offspring(mode);
  const alive = born.map((g) => survives(g, event));
  return {
    born,
    alive,
    genotypes: new Set(born).size,
    phenotypes: new Set(born.map(phenotypeText)).size,
    survivors: alive.filter(Boolean).length,
  };
}

/**
 * The verdict line comparing the two forms under one event.
 * @param {Event} event
 */
export function verdict(event) {
  const a = outcome('vo-tinh', event);
  const s = outcome('huu-tinh', event);
  if (event === 'on-dinh') {
    return `Môi trường ổn định: cả ${a.survivors} cây con vô tính và ${s.survivors} cây con hữu tính đều sống. Sinh sản vô tính giữ nguyên kiểu gene thích nghi của mẹ (${a.genotypes} kiểu gene), sinh sản hữu tính tạo ${s.genotypes} kiểu gene, ${s.phenotypes} kiểu hình.`;
  }
  if (event === 'dich-benh') {
    return `Dịch bệnh mới: ${a.survivors}/${a.born.length} cây con vô tính sống sót vì tất cả cùng kiểu gene ${PARENT}, cùng không kháng bệnh; ${s.survivors}/${s.born.length} cây con hữu tính sống sót nhờ có kiểu gene aa. Đa dạng di truyền giúp loài tồn tại khi môi trường thay đổi.`;
  }
  return `Chỉ còn một cá thể: sinh sản vô tính vẫn tạo ${a.born.length} cây con; sinh sản hữu tính không xảy ra vì cây không tự thụ phấn được và không có giao tử của cá thể khác. Sinh sản vô tính có lợi khi mật độ cá thể thấp.`;
}
