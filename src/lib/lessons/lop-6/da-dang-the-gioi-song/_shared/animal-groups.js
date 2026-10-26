/**
 * The animal groups of the book for this chapter: invertebrates (Ruột
 * khoang, Giun, Thân mềm, Chân khớp) and vertebrates (Cá, Lưỡng cư, Bò sát,
 * Chim, Thú), each with its identifying features, where it lives and
 * representatives, plus a list of familiar animals filed under their group.
 */

/** @typedef {'khong-xuong-song' | 'co-xuong-song'} BranchId */
/**
 * @typedef {'ruot-khoang' | 'giun' | 'than-mem' | 'chan-khop'
 *   | 'ca' | 'luong-cu' | 'bo-sat' | 'chim' | 'thu'} GroupId
 */
/**
 * @typedef {{
 *   id: GroupId;
 *   branch: BranchId;
 *   name: string;
 *   features: string;
 *   lives: string;
 *   examples: string[];
 * }} AnimalGroup
 */
/** @typedef {{ id: string, name: string, group: GroupId, clue: string }} Animal */

/** @type {Array<{ id: BranchId, name: string, feature: string }>} */
export const BRANCHES = [
  {
    id: 'khong-xuong-song',
    name: 'Động vật không xương sống',
    feature: 'Cơ thể không có xương sống (không có bộ xương trong bằng xương).',
  },
  {
    id: 'co-xuong-song',
    name: 'Động vật có xương sống',
    feature: 'Cơ thể có bộ xương trong, trong đó có xương sống (cột sống).',
  },
];

/** @type {AnimalGroup[]} */
export const GROUPS = [
  {
    id: 'ruot-khoang',
    branch: 'khong-xuong-song',
    name: 'Ruột khoang',
    features: 'Cơ thể đối xứng tỏa tròn, ruột hình túi; có tế bào gai để tự vệ và bắt mồi.',
    lives: 'Sống ở nước, phần lớn ở biển.',
    examples: ['Thủy tức', 'Sứa', 'Hải quỳ', 'San hô'],
  },
  {
    id: 'giun',
    branch: 'khong-xuong-song',
    name: 'Giun',
    features:
      'Cơ thể mềm, dài, đối xứng hai bên, phân biệt đầu và đuôi, lưng và bụng. Gồm giun dẹp (cơ thể dẹp), giun tròn (hình ống, thuôn hai đầu) và giun đốt (cơ thể phân đốt).',
    lives: 'Trong đất ẩm, trong nước, hoặc kí sinh trong cơ thể người và động vật.',
    examples: ['Giun đất', 'Giun đũa', 'Sán lá gan', 'Đỉa', 'Rươi'],
  },
  {
    id: 'than-mem',
    branch: 'khong-xuong-song',
    name: 'Thân mềm',
    features: 'Cơ thể mềm, không phân đốt, thường có vỏ đá vôi bao bọc.',
    lives: 'Ở nước ngọt, nước mặn và ở cạn nơi ẩm.',
    examples: ['Trai', 'Ốc sên', 'Ốc bươu', 'Mực', 'Bạch tuộc'],
  },
  {
    id: 'chan-khop',
    branch: 'khong-xuong-song',
    name: 'Chân khớp',
    features:
      'Có bộ xương ngoài bằng chitin; các đôi chân (phần phụ) phân đốt, nối với nhau bằng khớp động.',
    lives: 'Ở khắp nơi: dưới nước, trên cạn, trên không; là nhóm có nhiều loài nhất.',
    examples: ['Tôm', 'Cua', 'Nhện', 'Châu chấu', 'Bướm', 'Ong', 'Kiến'],
  },
  {
    id: 'ca',
    branch: 'co-xuong-song',
    name: 'Cá',
    features: 'Sống hoàn toàn dưới nước, thở bằng mang, bơi bằng vây; thân thường phủ vảy.',
    lives: 'Ao, hồ, sông, suối, biển.',
    examples: ['Cá chép', 'Cá rô', 'Cá mập', 'Cá đuối'],
  },
  {
    id: 'luong-cu',
    branch: 'co-xuong-song',
    name: 'Lưỡng cư',
    features: 'Da trần, luôn ẩm ướt; chân có màng bơi; vừa sống được ở nước vừa sống được ở cạn.',
    lives: 'Nơi ẩm ướt, gần nước: ao, ruộng, khe suối.',
    examples: ['Ếch đồng', 'Cóc nhà', 'Ếch giun', 'Cá cóc'],
  },
  {
    id: 'bo-sat',
    branch: 'co-xuong-song',
    name: 'Bò sát',
    features: 'Da khô, phủ vảy sừng; thở bằng phổi; đẻ trứng có vỏ; sống chủ yếu ở cạn.',
    lives: 'Chủ yếu trên cạn; một số sống ở nước (rùa, cá sấu).',
    examples: ['Thằn lằn', 'Rắn', 'Rùa', 'Cá sấu', 'Tắc kè'],
  },
  {
    id: 'chim',
    branch: 'co-xuong-song',
    name: 'Chim',
    features: 'Cơ thể phủ lông vũ, chi trước biến đổi thành cánh, có mỏ sừng; đẻ trứng.',
    lives: 'Trên cây, trên cạn, trên mặt nước; phần lớn bay được.',
    examples: ['Chim bồ câu', 'Chim sẻ', 'Gà', 'Vịt', 'Đà điểu', 'Chim cánh cụt'],
  },
  {
    id: 'thu',
    branch: 'co-xuong-song',
    name: 'Thú (Động vật có vú)',
    features:
      'Cơ thể phủ lông mao; có răng (răng cửa, răng nanh, răng hàm); đẻ con và nuôi con bằng sữa mẹ.',
    lives: 'Trên cạn, dưới nước (cá voi, cá heo), trên không (dơi).',
    examples: ['Chó', 'Mèo', 'Trâu', 'Khỉ', 'Dơi', 'Cá voi'],
  },
];

/** @param {GroupId} id */
export function groupById(id) {
  const g = GROUPS.find((x) => x.id === id);
  if (!g) throw new Error(`unknown group ${id}`);
  return g;
}

/** @param {BranchId} id */
export function branchById(id) {
  const b = BRANCHES.find((x) => x.id === id);
  if (!b) throw new Error(`unknown branch ${id}`);
  return b;
}

/** @param {BranchId} branch */
export const groupsOf = (branch) => GROUPS.filter((g) => g.branch === branch);

/**
 * Familiar animals with the feature that files each one under its group.
 * @type {Animal[]}
 */
export const ANIMALS = [
  {
    id: 'sua',
    name: 'Con sứa',
    group: 'ruot-khoang',
    clue: 'Cơ thể hình dù, đối xứng tỏa tròn, có tua với tế bào gai.',
  },
  {
    id: 'hai-quy',
    name: 'Hải quỳ',
    group: 'ruot-khoang',
    clue: 'Bám vào đá dưới biển, miệng có vòng tua tỏa tròn.',
  },
  {
    id: 'san-ho',
    name: 'San hô',
    group: 'ruot-khoang',
    clue: 'Sống thành tập đoàn ở biển, đối xứng tỏa tròn, có khung xương đá vôi.',
  },
  {
    id: 'giun-dat',
    name: 'Giun đất',
    group: 'giun',
    clue: 'Cơ thể dài, mềm, phân thành nhiều đốt; sống trong đất ẩm.',
  },
  {
    id: 'dia',
    name: 'Con đỉa',
    group: 'giun',
    clue: 'Cơ thể dài, dẹp, phân đốt, có giác bám hút máu.',
  },
  {
    id: 'giun-dua',
    name: 'Giun đũa',
    group: 'giun',
    clue: 'Cơ thể hình ống, thuôn hai đầu, kí sinh trong ruột người.',
  },
  {
    id: 'oc-sen',
    name: 'Ốc sên',
    group: 'than-mem',
    clue: 'Cơ thể mềm, không phân đốt, có vỏ đá vôi xoắn.',
  },
  {
    id: 'trai',
    name: 'Con trai',
    group: 'than-mem',
    clue: 'Cơ thể mềm nằm trong hai mảnh vỏ đá vôi.',
  },
  {
    id: 'muc',
    name: 'Con mực',
    group: 'than-mem',
    clue: 'Cơ thể mềm, có tua, mai đá vôi nằm bên trong.',
  },
  {
    id: 'tom',
    name: 'Con tôm',
    group: 'chan-khop',
    clue: 'Có vỏ cứng bằng chitin, nhiều đôi chân phân đốt.',
  },
  {
    id: 'nhen',
    name: 'Con nhện',
    group: 'chan-khop',
    clue: 'Bốn đôi chân phân đốt, giăng tơ bắt mồi.',
  },
  {
    id: 'chau-chau',
    name: 'Châu chấu',
    group: 'chan-khop',
    clue: 'Ba đôi chân phân đốt, hai đôi cánh, có bộ xương ngoài.',
  },
  {
    id: 'buom',
    name: 'Con bướm',
    group: 'chan-khop',
    clue: 'Ba đôi chân phân đốt, hai đôi cánh phủ vảy màu.',
  },
  {
    id: 'ca-chep',
    name: 'Cá chép',
    group: 'ca',
    clue: 'Sống dưới nước, thở bằng mang, bơi bằng vây, thân phủ vảy.',
  },
  {
    id: 'ca-map',
    name: 'Cá mập',
    group: 'ca',
    clue: 'Sống ở biển, thở bằng mang, bơi bằng vây, bộ xương bằng sụn.',
  },
  {
    id: 'ech',
    name: 'Ếch đồng',
    group: 'luong-cu',
    clue: 'Da trần, ẩm ướt; chân sau có màng bơi; sống ở ruộng, ao.',
  },
  {
    id: 'coc',
    name: 'Cóc nhà',
    group: 'luong-cu',
    clue: 'Da trần, sần sùi, có tuyến độc; sống nơi ẩm, đẻ trứng trong nước.',
  },
  {
    id: 'than-lan',
    name: 'Thằn lằn',
    group: 'bo-sat',
    clue: 'Da khô, phủ vảy sừng; bốn chân ngắn; đẻ trứng có vỏ trên cạn.',
  },
  {
    id: 'ran',
    name: 'Con rắn',
    group: 'bo-sat',
    clue: 'Không có chân, da khô phủ vảy sừng, thở bằng phổi.',
  },
  {
    id: 'rua',
    name: 'Con rùa',
    group: 'bo-sat',
    clue: 'Có mai và yếm, da phủ vảy sừng, đẻ trứng trên cạn.',
  },
  {
    id: 'chim-se',
    name: 'Chim sẻ',
    group: 'chim',
    clue: 'Lông vũ, chi trước là cánh, mỏ sừng ngắn.',
  },
  {
    id: 'chim-canh-cut',
    name: 'Chim cánh cụt',
    group: 'chim',
    clue: 'Không bay được nhưng cơ thể phủ lông vũ, có mỏ sừng, đẻ trứng.',
  },
  {
    id: 'meo',
    name: 'Con mèo',
    group: 'thu',
    clue: 'Lông mao, có răng nanh, đẻ con và nuôi con bằng sữa.',
  },
  {
    id: 'doi',
    name: 'Con dơi',
    group: 'thu',
    clue: 'Bay được nhưng cơ thể phủ lông mao, đẻ con và nuôi con bằng sữa.',
  },
  {
    id: 'ca-voi',
    name: 'Cá voi',
    group: 'thu',
    clue: 'Sống ở biển nhưng thở bằng phổi, đẻ con và nuôi con bằng sữa.',
  },
];

/** @param {string} id */
export function animalById(id) {
  const a = ANIMALS.find((x) => x.id === id);
  if (!a) throw new Error(`unknown animal ${id}`);
  return a;
}
