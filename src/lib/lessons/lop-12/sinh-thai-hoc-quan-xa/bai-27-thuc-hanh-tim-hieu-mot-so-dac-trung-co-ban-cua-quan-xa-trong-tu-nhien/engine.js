/**
 * Processing the counts of a community survey (khảo sát quần xã): number of
 * species, total individuals, the relative abundance of each species
 * (độ phong phú, nᵢ / N · 100%), the dominant species (most individuals)
 * and, for reference, the Shannon diversity index H′ = −Σ pᵢ · ln pᵢ, which
 * grows both with the number of species and with how evenly the
 * individuals are spread among them.
 */

/** @typedef {'san-xuat' | 'tieu-thu' | 'phan-giai'} Role */
/** @typedef {{ id: string, name: string, role: Role, layer: string, count: number }} Row */

export const ROLE_NAMES = /** @type {Record<Role, string>} */ ({
  'san-xuat': 'Sinh vật sản xuất',
  'tieu-thu': 'Sinh vật tiêu thụ',
  'phan-giai': 'Sinh vật phân giải',
});

/**
 * Relative abundance of each count in percent (0 for every row when the total is 0).
 * @param {number[]} counts
 */
export function abundances(counts) {
  const total = counts.reduce((s, c) => s + c, 0);
  return counts.map((c) => (total ? (c / total) * 100 : 0));
}

/**
 * Shannon index H′ = −Σ pᵢ ln pᵢ over the species present (0 for one species or none).
 * @param {number[]} counts
 */
export function shannon(counts) {
  const total = counts.reduce((s, c) => s + c, 0);
  if (!total) return 0;
  return counts.reduce((h, c) => (c > 0 ? h - (c / total) * Math.log(c / total) : h), 0);
}

/**
 * Indices of the species with the most individuals (several on a tie, none when all are 0).
 * @param {number[]} counts
 */
export function dominant(counts) {
  const top = Math.max(0, ...counts);
  if (top === 0) return [];
  return counts.flatMap((c, i) => (c === top ? [i] : []));
}

/**
 * Everything the survey table reports.
 * @param {Row[]} rows
 */
export function summarize(rows) {
  const counts = rows.map((r) => r.count);
  const present = rows.filter((r) => r.count > 0);
  return {
    total: counts.reduce((s, c) => s + c, 0),
    species: present.length,
    abundance: abundances(counts),
    dominant: dominant(counts).map((i) => rows[i].name),
    shannon: shannon(counts),
    layers: [...new Set(present.map((r) => r.layer))],
    roles: /** @type {Role[]} */ (
      ['san-xuat', 'tieu-thu', 'phan-giai'].filter((role) => present.some((r) => r.role === role))
    ),
  };
}

/**
 * Two surveyed communities to start from: a school lawn and a fruit garden,
 * counted in the same total area of quadrats.
 * @type {Record<'bai-co' | 'vuon-cay', { title: string, rows: Row[] }>}
 */
export const SURVEYS = {
  'bai-co': {
    title: 'Bãi cỏ sân trường',
    rows: [
      { id: 'co-ga', name: 'Cỏ gà', role: 'san-xuat', layer: 'Tầng cỏ', count: 48 },
      { id: 'co-may', name: 'Cỏ may', role: 'san-xuat', layer: 'Tầng cỏ', count: 12 },
      { id: 'rau-ma', name: 'Rau má', role: 'san-xuat', layer: 'Tầng cỏ', count: 6 },
      { id: 'chau-chau', name: 'Châu chấu', role: 'tieu-thu', layer: 'Tầng cỏ', count: 5 },
      { id: 'kien', name: 'Kiến', role: 'tieu-thu', layer: 'Mặt đất', count: 20 },
      { id: 'giun-dat', name: 'Giun đất', role: 'phan-giai', layer: 'Trong đất', count: 4 },
      { id: 'nam', name: 'Nấm mũ', role: 'phan-giai', layer: 'Mặt đất', count: 0 },
    ],
  },
  'vuon-cay': {
    title: 'Vườn cây ăn quả',
    rows: [
      { id: 'cay-cam', name: 'Cây cam', role: 'san-xuat', layer: 'Tầng cây gỗ', count: 8 },
      { id: 'cay-chuoi', name: 'Cây chuối', role: 'san-xuat', layer: 'Tầng cây bụi', count: 10 },
      { id: 'rau-ngot', name: 'Rau ngót', role: 'san-xuat', layer: 'Tầng cây bụi', count: 12 },
      { id: 'co-dai', name: 'Cỏ dại', role: 'san-xuat', layer: 'Tầng cỏ', count: 15 },
      { id: 'sau-an-la', name: 'Sâu ăn lá', role: 'tieu-thu', layer: 'Tầng cây gỗ', count: 9 },
      { id: 'kien-vang', name: 'Kiến vàng', role: 'tieu-thu', layer: 'Tầng cây gỗ', count: 14 },
      { id: 'nam', name: 'Nấm', role: 'phan-giai', layer: 'Mặt đất', count: 7 },
    ],
  },
};
