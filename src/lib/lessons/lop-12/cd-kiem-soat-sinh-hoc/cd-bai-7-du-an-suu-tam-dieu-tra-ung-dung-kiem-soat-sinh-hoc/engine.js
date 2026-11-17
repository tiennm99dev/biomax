/**
 * The project board: a form that collects examples of biological control,
 * a schematic map of Vietnam's six socio-economic regions that counts the
 * examples in each, and a plain-text summary for the report. Nothing is
 * stored, so the summary is how the work is kept. No DOM here, so all of it
 * is tested in Node.
 */
import { GROUPS, groupLabel } from '../_shared/groups.js';

export { GROUPS };

/**
 * @typedef {import('../_shared/groups.js').Group} Group
 * @typedef {{ id: string, name: string, lines: string[], x: number, y: number, w: number, h: number }} Region
 * @typedef {{ id: string, name: string, pest: string, agent: string, group: Group | '', region: string, place: string, result: string, source: string, sample?: boolean }} Entry
 */

/**
 * The six socio-economic regions, as boxes laid out roughly where they lie
 * on a 200 × 360 map, north at the top.
 * @type {Region[]}
 */
export const REGIONS = [
  {
    id: 'tdmn',
    name: 'Trung du và miền núi phía Bắc',
    lines: ['Trung du và', 'miền núi phía Bắc'],
    x: 10,
    y: 8,
    w: 120,
    h: 62,
  },
  {
    id: 'dbsh',
    name: 'Đồng bằng sông Hồng',
    lines: ['Đồng bằng', 'sông Hồng'],
    x: 96,
    y: 74,
    w: 66,
    h: 44,
  },
  {
    id: 'btb',
    name: 'Bắc Trung Bộ và duyên hải miền Trung',
    lines: ['Bắc Trung Bộ', 'và duyên hải', 'miền Trung'],
    x: 108,
    y: 122,
    w: 66,
    h: 144,
  },
  {
    id: 'tn',
    name: 'Tây Nguyên',
    lines: ['Tây', 'Nguyên'],
    x: 46,
    y: 176,
    w: 58,
    h: 90,
  },
  {
    id: 'dnb',
    name: 'Đông Nam Bộ',
    lines: ['Đông Nam Bộ'],
    x: 70,
    y: 270,
    w: 90,
    h: 42,
  },
  {
    id: 'dbscl',
    name: 'Đồng bằng sông Cửu Long',
    lines: ['Đồng bằng', 'sông Cửu Long'],
    x: 14,
    y: 312,
    w: 104,
    h: 46,
  },
];

/** The form's fields, in order, with whether each is required. */
export const FIELDS = /** @type {const} */ ([
  { key: 'name', label: 'Tên ứng dụng', required: true },
  { key: 'pest', label: 'Đối tượng gây hại', required: true },
  { key: 'agent', label: 'Tác nhân sinh học hoặc biện pháp', required: true },
  { key: 'group', label: 'Nhóm biện pháp', required: true },
  { key: 'region', label: 'Vùng', required: true },
  { key: 'place', label: 'Địa phương cụ thể', required: false },
  { key: 'result', label: 'Hiệu quả, nhận xét', required: false },
  { key: 'source', label: 'Nguồn thông tin', required: true },
]);

/**
 * Examples to start from. Each names where it is known to be used; the
 * groups check them against their own sources.
 * @type {Entry[]}
 */
export const SAMPLES = [
  {
    id: 'mau-kien-vang',
    name: 'Nuôi kiến vàng trong vườn cây có múi',
    pest: 'Sâu, bọ xít hại cam, quýt, bưởi',
    agent: 'Kiến vàng',
    group: 'thien-dich',
    region: 'dbscl',
    place: 'Các vườn cam, quýt, bưởi ở Đồng bằng sông Cửu Long',
    result: 'Giảm sâu hại và lượng thuốc phải phun; quả sạch hơn',
    source: 'Ví dụ gợi ý, cần kiểm chứng',
    sample: true,
  },
  {
    id: 'mau-nam-xanh',
    name: 'Phun chế phẩm nấm xanh trừ rầy nâu',
    pest: 'Rầy nâu hại lúa',
    agent: 'Nấm xanh Metarhizium',
    group: 'che-pham',
    region: 'dbscl',
    place: 'Ruộng lúa Đồng bằng sông Cửu Long',
    result: 'Rầy chết sau vài ngày, ít hại thiên địch',
    source: 'Ví dụ gợi ý, cần kiểm chứng',
    sample: true,
  },
  {
    id: 'mau-trichoderma',
    name: 'Bón Trichoderma phòng bệnh chết nhanh hồ tiêu',
    pest: 'Nấm gây thối rễ hồ tiêu',
    agent: 'Nấm Trichoderma trộn phân hữu cơ',
    group: 'che-pham',
    region: 'tn',
    place: 'Vườn hồ tiêu ở Tây Nguyên',
    result: 'Giảm tỉ lệ cây chết do thối rễ',
    source: 'Ví dụ gợi ý, cần kiểm chứng',
    sample: true,
  },
  {
    id: 'mau-wolbachia',
    name: 'Thả muỗi mang Wolbachia phòng sốt xuất huyết',
    pest: 'Muỗi Aedes truyền virus Dengue',
    agent: 'Muỗi Aedes mang vi khuẩn Wolbachia',
    group: 'di-truyen',
    region: 'btb',
    place: 'Nha Trang (Khánh Hoà)',
    result: 'Muỗi mang Wolbachia khó truyền virus Dengue',
    source: 'Ví dụ gợi ý, cần kiểm chứng',
    sample: true,
  },
];

/** @returns {Entry} an empty form. */
export function blankEntry() {
  return {
    id: '',
    name: '',
    pest: '',
    agent: '',
    group: '',
    region: '',
    place: '',
    result: '',
    source: '',
  };
}

/**
 * The labels of required fields left empty.
 * @param {Entry} e
 * @returns {string[]}
 */
export function missing(e) {
  return FIELDS.filter((f) => f.required && e[f.key].trim() === '').map((f) => f.label);
}

/**
 * The region with this id.
 * @param {string} id
 * @returns {Region}
 */
export function region(id) {
  const r = REGIONS.find((x) => x.id === id);
  if (!r) throw new Error(`no region ${id}`);
  return r;
}

/**
 * How many entries each region has.
 * @param {Entry[]} entries
 * @returns {Record<string, number>}
 */
export function countByRegion(entries) {
  /** @type {Record<string, number>} */
  const counts = Object.fromEntries(REGIONS.map((r) => [r.id, 0]));
  for (const e of entries) if (e.region in counts) counts[e.region] += 1;
  return counts;
}

/**
 * How many entries each group has.
 * @param {Entry[]} entries
 * @returns {Record<Group, number>}
 */
export function countByGroup(entries) {
  /** @type {Record<Group, number>} */
  const counts = { 'thien-dich': 0, 'che-pham': 0, 'di-truyen': 0 };
  for (const e of entries) if (e.group) counts[e.group] += 1;
  return counts;
}

/**
 * The regions that have no example yet, by name.
 * @param {Entry[]} entries
 */
export function emptyRegions(entries) {
  const counts = countByRegion(entries);
  return REGIONS.filter((r) => counts[r.id] === 0).map((r) => r.name);
}

/**
 * One sentence on what the map shows.
 * @param {Entry[]} entries
 */
export function mapText(entries) {
  if (entries.length === 0) return 'Chưa có ví dụ nào trên bản đồ.';
  const counts = countByRegion(entries);
  const top = REGIONS.reduce((a, b) => (counts[b.id] > counts[a.id] ? b : a));
  const empty = emptyRegions(entries);
  const gap = empty.length
    ? ` Chưa có ví dụ ở: ${empty.join(', ')}.`
    : ' Vùng nào cũng đã có ví dụ.';
  return `Có ${entries.length} ví dụ; nhiều nhất ở ${top.name} (${counts[top.id]}).${gap}`;
}

/**
 * The plain-text summary of the collected entries for the report.
 * @param {Entry[]} entries
 */
export function reportText(entries) {
  const lines = ['DỰ ÁN: ỨNG DỤNG KIỂM SOÁT SINH HỌC', `Số ví dụ thu thập: ${entries.length}`];
  const groups = countByGroup(entries);
  lines.push(
    `Theo nhóm biện pháp: ${GROUPS.map((g) => `${groupLabel(g.id)} ${groups[g.id]}`).join('; ')}`,
  );
  const counts = countByRegion(entries);
  lines.push(`Theo vùng: ${REGIONS.map((r) => `${r.name} ${counts[r.id]}`).join('; ')}`);
  entries.forEach((e, i) => {
    lines.push('');
    lines.push(`${i + 1}. ${e.name}${e.sample ? ' (ví dụ gợi ý)' : ''}`);
    lines.push(`   Đối tượng gây hại: ${e.pest}`);
    lines.push(
      `   Tác nhân, biện pháp: ${e.agent} (${e.group ? groupLabel(e.group) : 'chưa rõ nhóm'})`,
    );
    const where = e.region ? region(e.region).name : 'chưa rõ vùng';
    lines.push(`   Nơi áp dụng: ${e.place ? `${e.place}, ` : ''}${where}`);
    if (e.result) lines.push(`   Hiệu quả: ${e.result}`);
    lines.push(`   Nguồn: ${e.source}`);
  });
  return lines.join('\n');
}
