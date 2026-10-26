/**
 * Logic for the plant-groups practical: a tray of plant samples, each with
 * the observations a learner makes by eye and with a hand lens. The learner
 * files a sample into one of the four groups (Rêu, Dương xỉ, Hạt trần,
 * Hạt kín), then picks the observation that proves it; features every
 * group shares (green leaves, a woody stem) do not count as proof.
 */

/** @typedef {'reu' | 'duong-xi' | 'hat-tran' | 'hat-kin'} GroupId */
/** @typedef {{ text: string, decisive: boolean, why: string }} Observation */
/** @typedef {{ id: string, name: string, place: string, group: GroupId, observations: Observation[] }} Sample */

/** @type {Array<{ id: GroupId, name: string, sign: string }>} */
export const GROUPS = [
  { id: 'reu', name: 'Rêu', sign: 'chưa có mạch dẫn, chỉ có rễ giả, túi bào tử ở ngọn' },
  { id: 'duong-xi', name: 'Dương xỉ', sign: 'có rễ thật, mạch dẫn, sinh sản bằng bào tử' },
  { id: 'hat-tran', name: 'Hạt trần', sign: 'có nón, hạt nằm lộ trên lá noãn, chưa có hoa' },
  { id: 'hat-kin', name: 'Hạt kín', sign: 'có hoa, quả, hạt nằm trong quả' },
];

/** @param {GroupId} id */
export function groupById(id) {
  const g = GROUPS.find((x) => x.id === id);
  if (!g) throw new Error(`unknown group ${id}`);
  return g;
}

/** @type {Sample[]} */
export const SAMPLES = [
  {
    id: 'reu',
    name: 'Cây rêu tường',
    place: 'chân tường ẩm',
    group: 'reu',
    observations: [
      {
        text: 'Cây rất nhỏ, cao khoảng 1 cm, mọc thành đám dày',
        decisive: false,
        why: 'Kích thước nhỏ không đủ để xếp nhóm: nhiều cây hạt kín (bèo tấm, cỏ) cũng rất nhỏ.',
      },
      {
        text: 'Dưới thân chỉ có những sợi mảnh là rễ giả',
        decisive: true,
        why: 'Chỉ có rễ giả, chưa có mạch dẫn là dấu hiệu của rêu.',
      },
      {
        text: 'Trên ngọn có túi bào tử nằm trên một cuống dài',
        decisive: true,
        why: 'Túi bào tử ở ngọn cây là cơ quan sinh sản của rêu.',
      },
      {
        text: 'Lá nhỏ, màu xanh lục',
        decisive: false,
        why: 'Mọi nhóm thực vật đều có lá xanh chứa diệp lục.',
      },
    ],
  },
  {
    id: 'duong-xi',
    name: 'Cây dương xỉ',
    place: 'bờ giếng, nơi râm mát',
    group: 'duong-xi',
    observations: [
      {
        text: 'Có rễ, thân, lá thật',
        decisive: false,
        why: 'Hạt trần và hạt kín cũng có rễ, thân, lá thật.',
      },
      {
        text: 'Mặt dưới lá già có nhiều đốm nâu: các ổ túi bào tử',
        decisive: true,
        why: 'Túi bào tử ở mặt dưới lá cho thấy cây sinh sản bằng bào tử và có lá thật: dương xỉ.',
      },
      {
        text: 'Lá non cuộn tròn ở đầu',
        decisive: true,
        why: 'Lá non cuộn tròn là dấu hiệu dễ nhận ra của dương xỉ.',
      },
      {
        text: 'Mọc ở nơi ẩm, râm mát',
        decisive: false,
        why: 'Nơi sống không phải tiêu chí phân nhóm: rêu và nhiều cây hạt kín cũng ưa ẩm.',
      },
    ],
  },
  {
    id: 'thong',
    name: 'Cành thông',
    place: 'đồi thông',
    group: 'hat-tran',
    observations: [
      {
        text: 'Thân gỗ, cành có vỏ xù xì',
        decisive: false,
        why: 'Thân gỗ có cả ở hạt trần (thông) và hạt kín (bưởi, lim).',
      },
      {
        text: 'Lá hình kim, mọc thành cụm hai hoặc ba lá',
        decisive: false,
        why: 'Hình dạng lá không dùng để xếp nhóm; dấu hiệu quyết định là hạt và hoa.',
      },
      {
        text: 'Có nón cái; tách vảy nón thấy hạt nằm lộ trên vảy (lá noãn)',
        decisive: true,
        why: 'Hạt nằm lộ trên lá noãn của nón, không có quả bao bọc: hạt trần.',
      },
      {
        text: 'Có mạch dẫn',
        decisive: false,
        why: 'Dương xỉ, hạt trần, hạt kín đều có mạch dẫn.',
      },
    ],
  },
  {
    id: 'van-tue',
    name: 'Cây vạn tuế',
    place: 'vườn cây cảnh',
    group: 'hat-tran',
    observations: [
      {
        text: 'Lá to, xẻ như lông chim, mọc thành chùm ở ngọn thân',
        decisive: false,
        why: 'Hình dạng lá không dùng để xếp nhóm.',
      },
      {
        text: 'Ở ngọn có nón; hạt to nằm lộ trên các lá noãn, không có quả',
        decisive: true,
        why: 'Hạt lộ trên lá noãn, không nằm trong quả: hạt trần.',
      },
      {
        text: 'Thân hình cột, không phân cành',
        decisive: false,
        why: 'Kiểu thân không quyết định nhóm: cây cau (hạt kín) cũng có thân cột.',
      },
    ],
  },
  {
    id: 'lua',
    name: 'Cây lúa',
    place: 'ruộng lúa',
    group: 'hat-kin',
    observations: [
      {
        text: 'Ra hoa nhỏ, mọc thành bông',
        decisive: true,
        why: 'Có hoa là dấu hiệu của hạt kín.',
      },
      {
        text: 'Hạt thóc là quả; bóc vỏ trấu thấy hạt gạo bên trong',
        decisive: true,
        why: 'Hạt nằm trong quả: hạt kín.',
      },
      {
        text: 'Rễ chùm',
        decisive: false,
        why: 'Kiểu rễ chỉ phân biệt các cây hạt kín với nhau, không phân biệt các nhóm thực vật.',
      },
      {
        text: 'Lá dài, gân song song',
        decisive: false,
        why: 'Gân lá không dùng để xếp nhóm thực vật.',
      },
    ],
  },
  {
    id: 'cai',
    name: 'Cây cải',
    place: 'luống rau',
    group: 'hat-kin',
    observations: [
      {
        text: 'Thân cỏ, mềm, chứa nhiều nước',
        decisive: false,
        why: 'Thân cỏ có ở nhiều nhóm; không dùng để xếp nhóm.',
      },
      {
        text: 'Có hoa màu vàng, bốn cánh',
        decisive: true,
        why: 'Có hoa là dấu hiệu của hạt kín.',
      },
      {
        text: 'Quả dài, bóc ra thấy nhiều hạt nhỏ bên trong',
        decisive: true,
        why: 'Hạt nằm trong quả: hạt kín.',
      },
      {
        text: 'Lá xanh, quang hợp được',
        decisive: false,
        why: 'Mọi thực vật đều có lá xanh, quang hợp được.',
      },
    ],
  },
  {
    id: 'rau-bo',
    name: 'Rau bợ',
    place: 'bờ ruộng nước',
    group: 'duong-xi',
    observations: [
      {
        text: 'Lá có cuống dài, phiến gồm bốn lá chét',
        decisive: false,
        why: 'Hình dạng lá không dùng để xếp nhóm.',
      },
      {
        text: 'Có rễ thật, có mạch dẫn; ở gốc cuống lá có túi chứa bào tử, không có hoa, hạt',
        decisive: true,
        why: 'Có mạch dẫn nhưng sinh sản bằng bào tử: dương xỉ.',
      },
      {
        text: 'Sống ở nơi nhiều nước',
        decisive: false,
        why: 'Nơi sống không phải tiêu chí phân nhóm.',
      },
    ],
  },
  {
    id: 'buoi',
    name: 'Cành bưởi',
    place: 'vườn nhà',
    group: 'hat-kin',
    observations: [
      {
        text: 'Thân gỗ, có gai',
        decisive: false,
        why: 'Thân gỗ có cả ở hạt trần và hạt kín.',
      },
      {
        text: 'Hoa màu trắng, rất thơm',
        decisive: true,
        why: 'Có hoa: hạt kín.',
      },
      {
        text: 'Bổ quả thấy hạt nằm trong các múi',
        decisive: true,
        why: 'Hạt nằm trong quả: hạt kín.',
      },
      {
        text: 'Lá có mùi thơm khi vò',
        decisive: false,
        why: 'Mùi lá không dùng để xếp nhóm thực vật.',
      },
    ],
  },
];

/**
 * Feedback on filing a sample into a group.
 * @param {number} index into SAMPLES @param {GroupId} group
 * @returns {{ ok: boolean, text: string }}
 */
export function checkGroup(index, group) {
  const s = SAMPLES[index];
  const picked = groupById(group);
  if (group === s.group)
    return {
      ok: true,
      text: `Đúng: ${s.name.toLowerCase()} thuộc nhóm ${picked.name}. Bây giờ chọn dấu hiệu chứng minh.`,
    };
  return {
    ok: false,
    text: `Chưa đúng: nhóm ${picked.name} có đặc điểm ${picked.sign}. Đọc lại các quan sát về ${s.name.toLowerCase()}.`,
  };
}

/**
 * Feedback on the observation picked as proof of the group.
 * @param {number} index into SAMPLES @param {number} obs index into its observations
 * @returns {{ ok: boolean, text: string }}
 */
export function checkSign(index, obs) {
  const o = SAMPLES[index].observations[obs];
  return o.decisive
    ? { ok: true, text: `Đúng dấu hiệu: ${o.why}` }
    : { ok: false, text: `Chưa phải dấu hiệu phân nhóm. ${o.why}` };
}
