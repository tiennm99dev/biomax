/**
 * Data for the "Hệ thống phân loại sinh vật" lesson: the seven taxonomic
 * ranks from giới down to loài, a small set of species from all five
 * kingdoms with their full classification, and helpers that walk down a
 * lineage, count which species still share a taxon and find the lowest rank
 * two species share.
 */

/** @typedef {'gioi' | 'nganh' | 'lop' | 'bo' | 'ho' | 'chi' | 'loai'} RankId */

/**
 * The seven ranks, from the highest (giới) to the lowest (loài).
 * @type {Array<{ id: RankId, name: string }>}
 */
export const RANKS = [
  { id: 'gioi', name: 'Giới' },
  { id: 'nganh', name: 'Ngành' },
  { id: 'lop', name: 'Lớp' },
  { id: 'bo', name: 'Bộ' },
  { id: 'ho', name: 'Họ' },
  { id: 'chi', name: 'Chi (giống)' },
  { id: 'loai', name: 'Loài' },
];

/**
 * A taxon: its Latin name and, when Vietnamese has a usual one, its
 * Vietnamese name.
 * @typedef {{ la: string, vi?: string }} Taxon
 */

/**
 * A species with its common name and its taxon at each rank (giới first).
 * @typedef {{ id: string, name: string, lineage: Taxon[] }} Species
 */

/** @type {Record<string, Taxon>} */
const T = {
  animalia: { la: 'Animalia', vi: 'Động vật' },
  plantae: { la: 'Plantae', vi: 'Thực vật' },
  fungi: { la: 'Fungi', vi: 'Nấm' },
  protista: { la: 'Protista', vi: 'Nguyên sinh' },
  monera: { la: 'Monera', vi: 'Khởi sinh' },
  chordata: { la: 'Chordata', vi: 'Dây sống' },
  mammalia: { la: 'Mammalia', vi: 'Thú' },
  carnivora: { la: 'Carnivora', vi: 'Ăn thịt' },
  felidae: { la: 'Felidae', vi: 'Mèo' },
  panthera: { la: 'Panthera', vi: 'Báo' },
  angio: { la: 'Magnoliophyta', vi: 'Hạt kín' },
  mono: { la: 'Liliopsida', vi: 'Một lá mầm' },
  poales: { la: 'Poales', vi: 'Hòa thảo' },
  poaceae: { la: 'Poaceae', vi: 'Lúa' },
};

/** @type {Species[]} */
export const SPECIES = [
  {
    id: 'ho',
    name: 'Hổ',
    lineage: [
      T.animalia,
      T.chordata,
      T.mammalia,
      T.carnivora,
      T.felidae,
      T.panthera,
      { la: 'Panthera tigris', vi: 'Hổ' },
    ],
  },
  {
    id: 'su-tu',
    name: 'Sư tử',
    lineage: [
      T.animalia,
      T.chordata,
      T.mammalia,
      T.carnivora,
      T.felidae,
      T.panthera,
      { la: 'Panthera leo', vi: 'Sư tử' },
    ],
  },
  {
    id: 'meo-nha',
    name: 'Mèo nhà',
    lineage: [
      T.animalia,
      T.chordata,
      T.mammalia,
      T.carnivora,
      T.felidae,
      { la: 'Felis', vi: 'Mèo' },
      { la: 'Felis catus', vi: 'Mèo nhà' },
    ],
  },
  {
    id: 'gau-truc',
    name: 'Gấu trúc lớn',
    lineage: [
      T.animalia,
      T.chordata,
      T.mammalia,
      T.carnivora,
      { la: 'Ursidae', vi: 'Gấu' },
      { la: 'Ailuropoda' },
      { la: 'Ailuropoda melanoleuca', vi: 'Gấu trúc lớn' },
    ],
  },
  {
    id: 'nguoi',
    name: 'Người',
    lineage: [
      T.animalia,
      T.chordata,
      T.mammalia,
      { la: 'Primates', vi: 'Linh trưởng' },
      { la: 'Hominidae', vi: 'Người' },
      { la: 'Homo', vi: 'Người' },
      { la: 'Homo sapiens', vi: 'Người' },
    ],
  },
  {
    id: 'lua',
    name: 'Cây lúa',
    lineage: [
      T.plantae,
      T.angio,
      T.mono,
      T.poales,
      T.poaceae,
      { la: 'Oryza', vi: 'Lúa' },
      { la: 'Oryza sativa', vi: 'Lúa' },
    ],
  },
  {
    id: 'ngo',
    name: 'Cây ngô',
    lineage: [
      T.plantae,
      T.angio,
      T.mono,
      T.poales,
      T.poaceae,
      { la: 'Zea', vi: 'Ngô' },
      { la: 'Zea mays', vi: 'Ngô' },
    ],
  },
  {
    id: 'buoi',
    name: 'Cây bưởi',
    lineage: [
      T.plantae,
      T.angio,
      { la: 'Magnoliopsida', vi: 'Hai lá mầm' },
      { la: 'Sapindales', vi: 'Bồ hòn' },
      { la: 'Rutaceae', vi: 'Cam' },
      { la: 'Citrus', vi: 'Cam chanh' },
      { la: 'Citrus maxima', vi: 'Bưởi' },
    ],
  },
  {
    id: 'nam-men',
    name: 'Nấm men bánh mì',
    lineage: [
      T.fungi,
      { la: 'Ascomycota', vi: 'Nấm túi' },
      { la: 'Saccharomycetes' },
      { la: 'Saccharomycetales' },
      { la: 'Saccharomycetaceae' },
      { la: 'Saccharomyces' },
      { la: 'Saccharomyces cerevisiae', vi: 'Nấm men bánh mì' },
    ],
  },
  {
    id: 'trung-giay',
    name: 'Trùng giày',
    lineage: [
      T.protista,
      { la: 'Ciliophora', vi: 'Trùng lông' },
      { la: 'Oligohymenophorea' },
      { la: 'Peniculida' },
      { la: 'Parameciidae' },
      { la: 'Paramecium' },
      { la: 'Paramecium caudatum', vi: 'Trùng giày' },
    ],
  },
  {
    id: 'e-coli',
    name: 'Vi khuẩn E. coli',
    lineage: [
      T.monera,
      { la: 'Proteobacteria' },
      { la: 'Gammaproteobacteria' },
      { la: 'Enterobacterales' },
      { la: 'Enterobacteriaceae' },
      { la: 'Escherichia' },
      { la: 'Escherichia coli', vi: 'Vi khuẩn E. coli' },
    ],
  },
];

/** @param {string} s */
const lowerFirst = (s) => s.charAt(0).toLowerCase() + s.slice(1);

/** @param {string} id */
export function speciesById(id) {
  const s = SPECIES.find((x) => x.id === id);
  if (!s) throw new Error(`unknown species ${id}`);
  return s;
}

/**
 * The label of a taxon at a rank, as the book writes it: "Lớp Thú
 * (Mammalia)", or the Latin name alone when there is no Vietnamese one.
 * The species rank shows the scientific name.
 * @param {number} depth rank index, 0 = giới
 * @param {Taxon} taxon
 */
export function taxonLabel(depth, taxon) {
  const rank = RANKS[depth].name.replace(' (giống)', '');
  if (depth === RANKS.length - 1) return `${rank} ${taxon.la}`;
  return taxon.vi ? `${rank} ${taxon.vi} (${taxon.la})` : `${rank} ${taxon.la}`;
}

/**
 * The species of the set that belong to the same taxon as `id` at `depth`.
 * The deeper the rank, the fewer species share it.
 * @param {string} id
 * @param {number} depth
 */
export function sameGroup(id, depth) {
  const la = speciesById(id).lineage[depth].la;
  return SPECIES.filter((s) => s.lineage[depth].la === la);
}

/**
 * How many ranks, counted from giới, two species share. 0 means different
 * kingdoms; 7 means the same species.
 * @param {string} a
 * @param {string} b
 */
export function sharedDepth(a, b) {
  const la = speciesById(a).lineage;
  const lb = speciesById(b).lineage;
  let d = 0;
  while (d < RANKS.length && la[d].la === lb[d].la) d++;
  return d;
}

/**
 * A sentence comparing two species by the lowest rank they share.
 * @param {string} a
 * @param {string} b
 */
export function compareSentence(a, b) {
  const sa = speciesById(a);
  const sb = speciesById(b);
  if (a === b) return `Em đang chọn cùng một loài: ${sa.lineage[6].la}.`;
  const d = sharedDepth(a, b);
  if (d === 0)
    return `${sa.name} và ${lowerFirst(sb.name)} thuộc hai giới khác nhau, nên không chung bậc phân loại nào: quan hệ họ hàng rất xa.`;
  const last = d - 1;
  const label = taxonLabel(last, sa.lineage[last]);
  const close =
    d >= 6
      ? 'quan hệ họ hàng rất gần'
      : d >= 4
        ? 'quan hệ họ hàng khá gần'
        : 'quan hệ họ hàng còn xa';
  return `${sa.name} và ${lowerFirst(sb.name)} chung ${d} bậc, bậc thấp nhất chung là ${label}: ${close}. Hai sinh vật chung càng nhiều bậc thì càng gần nhau.`;
}

/**
 * Checks that every species has one taxon per rank, that the species name
 * starts with the genus name (binomial naming) and that equal Latin names
 * at a rank always sit under the same parent.
 * @returns {string[]} problems found (empty when valid)
 */
export function validateSpecies() {
  /** @type {string[]} */
  const problems = [];
  /** @type {Map<string, string>} */
  const parent = new Map();
  for (const s of SPECIES) {
    if (s.lineage.length !== RANKS.length) problems.push(`${s.id}: wrong number of ranks`);
    const [genus, epithet] = s.lineage[6].la.split(' ');
    if (genus !== s.lineage[5].la || !epithet || epithet !== epithet.toLowerCase())
      problems.push(`${s.id}: species name must be "Genus epithet"`);
    for (let d = 1; d < s.lineage.length; d++) {
      const key = `${d}:${s.lineage[d].la}`;
      const up = s.lineage[d - 1].la;
      if (parent.has(key) && parent.get(key) !== up) problems.push(`${key} has two parents`);
      parent.set(key, up);
    }
  }
  return problems;
}
