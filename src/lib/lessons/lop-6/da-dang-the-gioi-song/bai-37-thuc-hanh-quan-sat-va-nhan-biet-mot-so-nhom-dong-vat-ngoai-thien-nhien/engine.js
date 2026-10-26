/**
 * Logic for the field-observation practical on animals: observation sites,
 * the animals seen at each (with how they were observed and what was
 * noticed), a field journal where the learner files each sighting under an
 * animal group, and the tally of the journal by group and by branch.
 */
import { GROUPS, groupById } from '../_shared/animal-groups.js';

/** @typedef {import('../_shared/animal-groups.js').GroupId} GroupId */
/**
 * @typedef {{
 *   id: string;
 *   site: string;
 *   name: string;
 *   group: GroupId;
 *   tool: 'mắt thường' | 'kính lúp' | 'ống nhòm';
 *   note: string;
 * }} Sighting
 */
/** @typedef {Record<string, GroupId>} Journal sighting id → group the learner chose */

/** @type {Array<{ id: string, name: string, habitat: string }>} */
export const SITES = [
  { id: 'ao', name: 'Ao làng', habitat: 'Dưới nước và ven bờ ao' },
  { id: 'vuon', name: 'Vườn hoa', habitat: 'Trên hoa, lá, tường rào' },
  { id: 'bai-co', name: 'Bãi cỏ sau mưa', habitat: 'Trên mặt đất, trong đất ẩm' },
  { id: 'cay-cao', name: 'Hàng cây cổ thụ', habitat: 'Trên cành và thân cây' },
  { id: 'bien', name: 'Bãi biển', habitat: 'Vũng nước, bãi cát, ghềnh đá ven biển' },
];

/** @type {Sighting[]} */
export const SIGHTINGS = [
  {
    id: 'ca-ro',
    site: 'ao',
    name: 'Cá rô phi',
    group: 'ca',
    tool: 'mắt thường',
    note: 'Bơi dưới nước bằng vây, thân phủ vảy, hai bên đầu có nắp mang.',
  },
  {
    id: 'ech',
    site: 'ao',
    name: 'Ếch đồng',
    group: 'luong-cu',
    tool: 'mắt thường',
    note: 'Da trần, ẩm ướt; chân sau dài có màng bơi; nhảy từ bờ xuống nước.',
  },
  {
    id: 'chuon-chuon',
    site: 'ao',
    name: 'Chuồn chuồn',
    group: 'chan-khop',
    tool: 'mắt thường',
    note: 'Hai đôi cánh mỏng, ba đôi chân phân đốt, bay sát mặt nước.',
  },
  {
    id: 'oc-buou',
    site: 'ao',
    name: 'Ốc bươu',
    group: 'than-mem',
    tool: 'mắt thường',
    note: 'Cơ thể mềm, thò ra khỏi vỏ đá vôi xoắn, bám vào cọng rau.',
  },
  {
    id: 'dia',
    site: 'ao',
    name: 'Con đỉa',
    group: 'giun',
    tool: 'kính lúp',
    note: 'Cơ thể dài, dẹp, phân nhiều đốt, hai đầu có giác bám.',
  },
  {
    id: 'buom',
    site: 'vuon',
    name: 'Con bướm',
    group: 'chan-khop',
    tool: 'mắt thường',
    note: 'Hai đôi cánh phủ vảy màu, ba đôi chân phân đốt, hút mật hoa.',
  },
  {
    id: 'ong',
    site: 'vuon',
    name: 'Ong mật',
    group: 'chan-khop',
    tool: 'kính lúp',
    note: 'Cơ thể chia ba phần, ba đôi chân phân đốt dính đầy phấn hoa.',
  },
  {
    id: 'oc-sen',
    site: 'vuon',
    name: 'Ốc sên',
    group: 'than-mem',
    tool: 'kính lúp',
    note: 'Cơ thể mềm, không phân đốt, mang vỏ đá vôi xoắn, bò để lại vệt nhớt.',
  },
  {
    id: 'than-lan',
    site: 'vuon',
    name: 'Thằn lằn',
    group: 'bo-sat',
    tool: 'mắt thường',
    note: 'Da khô phủ vảy sừng, bốn chân ngắn, phơi nắng trên tường rào.',
  },
  {
    id: 'giun-dat',
    site: 'bai-co',
    name: 'Giun đất',
    group: 'giun',
    tool: 'kính lúp',
    note: 'Cơ thể dài, mềm, phân nhiều đốt; chui lên khỏi đất ẩm sau mưa.',
  },
  {
    id: 'kien',
    site: 'bai-co',
    name: 'Con kiến',
    group: 'chan-khop',
    tool: 'kính lúp',
    note: 'Cơ thể chia ba phần, ba đôi chân phân đốt, tha mồi theo hàng.',
  },
  {
    id: 'chim-se',
    site: 'bai-co',
    name: 'Chim sẻ',
    group: 'chim',
    tool: 'ống nhòm',
    note: 'Cơ thể phủ lông vũ, có cánh, mỏ sừng ngắn, nhảy nhặt hạt.',
  },
  {
    id: 'chao-mao',
    site: 'cay-cao',
    name: 'Chim chào mào',
    group: 'chim',
    tool: 'ống nhòm',
    note: 'Lông vũ, trên đầu có mào nhọn, mỏ sừng, hót trên cành cao.',
  },
  {
    id: 'soc',
    site: 'cay-cao',
    name: 'Con sóc',
    group: 'thu',
    tool: 'ống nhòm',
    note: 'Cơ thể phủ lông mao, đuôi xù, gặm quả bằng răng cửa.',
  },
  {
    id: 'nhen',
    site: 'cay-cao',
    name: 'Con nhện',
    group: 'chan-khop',
    tool: 'kính lúp',
    note: 'Bốn đôi chân phân đốt, nằm giữa mạng tơ giăng giữa hai cành.',
  },
  {
    id: 'sua',
    site: 'bien',
    name: 'Con sứa',
    group: 'ruot-khoang',
    tool: 'mắt thường',
    note: 'Cơ thể hình dù trong suốt, đối xứng tỏa tròn, có nhiều tua (không chạm tay).',
  },
  {
    id: 'hai-quy',
    site: 'bien',
    name: 'Hải quỳ',
    group: 'ruot-khoang',
    tool: 'mắt thường',
    note: 'Bám trên đá trong vũng nước, có vòng tua tỏa tròn quanh miệng.',
  },
  {
    id: 'cua',
    site: 'bien',
    name: 'Con cua',
    group: 'chan-khop',
    tool: 'mắt thường',
    note: 'Vỏ cứng, năm đôi chân phân đốt, đôi chân đầu là càng, bò ngang.',
  },
  {
    id: 'so',
    site: 'bien',
    name: 'Con sò',
    group: 'than-mem',
    tool: 'mắt thường',
    note: 'Cơ thể mềm nằm giữa hai mảnh vỏ đá vôi có gờ.',
  },
];

/** @param {string} id */
export function sightingById(id) {
  const s = SIGHTINGS.find((x) => x.id === id);
  if (!s) throw new Error(`unknown sighting ${id}`);
  return s;
}

/** @param {string} site */
export const sightingsAt = (site) => SIGHTINGS.filter((s) => s.site === site);

/**
 * Feedback on filing a sighting under a group.
 * @param {string} id @param {GroupId} group
 * @returns {{ ok: boolean, text: string }}
 */
export function fileFeedback(id, group) {
  const s = sightingById(id);
  const right = groupById(s.group);
  if (group === s.group)
    return { ok: true, text: `Đã ghi: ${s.name} thuộc nhóm ${right.name}. ${s.note}` };
  const picked = groupById(group);
  const sameBranch = picked.branch === right.branch;
  return {
    ok: false,
    text: `Chưa đúng nhóm: ${picked.name} có đặc điểm "${picked.features}" ${sameBranch ? 'Nhánh đã đúng, hãy so lại với các nhóm khác cùng nhánh.' : `${s.name} ${right.branch === 'co-xuong-song' ? 'có' : 'không có'} xương sống.`} Đọc lại ghi chép: ${s.note}`,
  };
}

/**
 * The correctly filed sightings counted by group, in book order.
 * @param {Journal} journal
 */
export function tally(journal) {
  return GROUPS.map((g) => ({
    id: g.id,
    name: g.name,
    count: SIGHTINGS.filter((s) => journal[s.id] === s.group && s.group === g.id).length,
  }));
}

/**
 * Correct entries split into invertebrates and vertebrates.
 * @param {Journal} journal
 */
export function branchTally(journal) {
  let invertebrates = 0;
  let vertebrates = 0;
  for (const s of SIGHTINGS) {
    if (journal[s.id] !== s.group) continue;
    if (groupById(s.group).branch === 'co-xuong-song') vertebrates++;
    else invertebrates++;
  }
  return { invertebrates, vertebrates };
}
