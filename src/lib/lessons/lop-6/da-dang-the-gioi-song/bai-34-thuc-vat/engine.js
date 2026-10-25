/**
 * Logic for the plant groups lesson: the four groups of the book (Rêu,
 * Dương xỉ, Hạt trần, Hạt kín) with their key features, filtering them by
 * three yes/no features (vascular tissue, seeds, flowers), and challenges
 * where the learner narrows the table down to one plant's group.
 */

/** @typedef {'reu' | 'duong-xi' | 'hat-tran' | 'hat-kin'} GroupId */
/** @typedef {'mach' | 'hat' | 'hoa'} TraitId */
/** @typedef {'tat-ca' | 'co' | 'khong'} FilterValue */
/** @typedef {Record<TraitId, FilterValue>} Filters */
/**
 * @typedef {{
 *   id: GroupId;
 *   name: string;
 *   traits: Record<TraitId, boolean>;
 *   body: string;
 *   reproduce: string;
 *   lives: string;
 *   examples: string;
 * }} Group
 */

/** @type {Array<{ id: TraitId, name: string }>} */
export const TRAITS = [
  { id: 'mach', name: 'Mạch dẫn' },
  { id: 'hat', name: 'Hạt' },
  { id: 'hoa', name: 'Hoa' },
];

/** @type {Group[]} */
export const GROUPS = [
  {
    id: 'reu',
    name: 'Rêu',
    traits: { mach: false, hat: false, hoa: false },
    body: 'Cây nhỏ bé, có thân và lá nhưng chỉ có rễ giả; chưa có mạch dẫn.',
    reproduce: 'Bằng bào tử; túi bào tử nằm ở ngọn cây.',
    lives: 'Nơi ẩm ướt: chân tường, bờ giếng, thân cây, đá ẩm.',
    examples: 'Rêu tường, rêu mọc trên đá, trên thân cây',
  },
  {
    id: 'duong-xi',
    name: 'Dương xỉ',
    traits: { mach: true, hat: false, hoa: false },
    body: 'Có rễ thật, thân, lá; có mạch dẫn; lá non cuộn tròn ở đầu.',
    reproduce: 'Bằng bào tử; các túi bào tử tập trung ở mặt dưới lá.',
    lives: 'Nơi ẩm, râm mát: dưới tán rừng, ven suối, khe đá.',
    examples: 'Cây dương xỉ, rau bợ, cây lông cu li, bèo ong',
  },
  {
    id: 'hat-tran',
    name: 'Hạt trần',
    traits: { mach: true, hat: true, hoa: false },
    body: 'Thường là cây thân gỗ lớn, có rễ, thân, lá thật và mạch dẫn.',
    reproduce: 'Bằng hạt; hạt nằm lộ trên các lá noãn hở (nón), chưa có hoa và quả.',
    lives: 'Chủ yếu trên cạn, nhiều ở vùng đồi núi.',
    examples: 'Cây thông, vạn tuế, kim giao, pơ mu, hoàng đàn',
  },
  {
    id: 'hat-kin',
    name: 'Hạt kín',
    traits: { mach: true, hat: true, hoa: true },
    body: 'Rễ, thân, lá rất đa dạng; mạch dẫn phát triển; có hoa, quả.',
    reproduce: 'Bằng hạt; hạt nằm trong quả nên được bảo vệ tốt.',
    lives: 'Ở khắp nơi: trên cạn, dưới nước; là nhóm đa dạng nhất.',
    examples: 'Lúa, ngô, cam, bưởi, xoài, hoa hồng, cây bàng, sen',
  },
];

/** @param {GroupId} id */
export const groupById = (id) => GROUPS.find((g) => g.id === id) ?? GROUPS[0];

/** @type {Filters} */
export const NO_FILTER = { mach: 'tat-ca', hat: 'tat-ca', hoa: 'tat-ca' };

/**
 * Whether a group passes every filter.
 * @param {Group} g @param {Filters} f
 */
export function matches(g, f) {
  return TRAITS.every(({ id }) => f[id] === 'tat-ca' || (f[id] === 'co') === g.traits[id]);
}

/**
 * Groups left after filtering.
 * @param {Filters} f
 */
export const filterGroups = (f) => GROUPS.filter((g) => matches(g, f));

/**
 * Why no group is left, for the combinations nature rules out.
 * @param {Filters} f
 */
export function emptyReason(f) {
  if (f.hoa === 'co' && f.hat === 'khong')
    return 'Không có nhóm nào: cây có hoa thì đều có hạt (hạt nằm trong quả).';
  if ((f.hat === 'co' || f.hoa === 'co') && f.mach === 'khong')
    return 'Không có nhóm nào: cây có hạt, có hoa đều có mạch dẫn. Chỉ rêu là chưa có mạch dẫn.';
  return 'Không có nhóm nào phù hợp.';
}

/**
 * Plants to place in a group by setting the filters.
 * @type {Array<{ plant: string, group: GroupId, clue: string }>}
 */
export const CHALLENGES = [
  { plant: 'Cây thông', group: 'hat-tran', clue: 'Có nón, hạt nằm lộ trên lá noãn; không có hoa.' },
  { plant: 'Cây rêu tường', group: 'reu', clue: 'Nhỏ, rễ giả, túi bào tử ở ngọn.' },
  { plant: 'Cây lúa', group: 'hat-kin', clue: 'Ra hoa, hạt (hạt thóc) nằm trong quả.' },
  { plant: 'Cây dương xỉ', group: 'duong-xi', clue: 'Lá non cuộn tròn, túi bào tử ở mặt dưới lá.' },
  { plant: 'Cây vạn tuế', group: 'hat-tran', clue: 'Có nón, hạt lộ ra ngoài; không có hoa thật.' },
  { plant: 'Rau bợ', group: 'duong-xi', clue: 'Có rễ, thân, lá thật; sinh sản bằng bào tử.' },
  { plant: 'Cây bưởi', group: 'hat-kin', clue: 'Hoa trắng thơm, hạt nằm trong quả.' },
];

/**
 * Feedback on a challenge for the current filters.
 * @param {number} index into CHALLENGES @param {Filters} f
 * @returns {{ done: boolean, text: string }}
 */
export function challengeFeedback(index, f) {
  const c = CHALLENGES[index];
  const left = filterGroups(f);
  const target = groupById(c.group);
  const wrong = TRAITS.find(
    ({ id }) => f[id] !== 'tat-ca' && (f[id] === 'co') !== target.traits[id],
  );
  if (wrong)
    return {
      done: false,
      text: `Chưa đúng: ${c.plant.toLowerCase()} ${target.traits[wrong.id] ? 'có' : 'không có'} ${wrong.name.toLowerCase()}. Gợi ý: ${c.clue}`,
    };
  if (left.length > 1)
    return {
      done: false,
      text: `Còn ${left.length} nhóm phù hợp. Chọn thêm đặc điểm để chỉ còn một nhóm.`,
    };
  return { done: true, text: `Đúng: ${c.plant} thuộc nhóm ${target.name}. ${c.clue}` };
}
