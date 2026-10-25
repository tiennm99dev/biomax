/**
 * Data and logic for the "Khóa lưỡng phân" lesson: two groups of organisms
 * described by yes/no traits, a ready-made dichotomous key for each group
 * (to identify a mystery organism step by step) and a key builder that
 * splits the first unfinished group by a chosen trait until every group
 * holds one organism.
 */

/**
 * A trait read as a pair of opposite features.
 * @typedef {{ id: string, yes: string, no: string }} Trait
 */

/**
 * A node of a dichotomous key: a trait, and what follows each answer (another
 * node or an organism id).
 * @typedef {{ trait: string, yes: KeyNode | string, no: KeyNode | string }} KeyNode
 */

/**
 * @typedef {{
 *   id: string;
 *   label: string;
 *   organisms: Array<{ id: string, name: string }>;
 *   traits: Trait[];
 *   has: Record<string, string[]>;
 *   key: KeyNode;
 * }} OrganismSet
 */

/** @type {OrganismSet[]} */
export const SETS = [
  {
    id: 'dong-vat',
    label: 'Một số động vật',
    organisms: [
      { id: 'meo', name: 'Con mèo' },
      { id: 'chim', name: 'Chim bồ câu' },
      { id: 'ca', name: 'Cá chép' },
      { id: 'giun', name: 'Giun đất' },
      { id: 'chau-chau', name: 'Châu chấu' },
    ],
    traits: [
      { id: 'xuong-song', yes: 'Có xương sống', no: 'Không có xương sống' },
      { id: 'chan', yes: 'Có chân', no: 'Không có chân' },
      { id: 'canh', yes: 'Có cánh', no: 'Không có cánh' },
      { id: 'long-vu', yes: 'Cơ thể phủ lông vũ', no: 'Cơ thể không phủ lông vũ' },
      { id: 'long-mao', yes: 'Cơ thể phủ lông mao', no: 'Cơ thể không phủ lông mao' },
      { id: 'vay', yes: 'Có vây, sống dưới nước', no: 'Không có vây' },
    ],
    has: {
      meo: ['xuong-song', 'chan', 'long-mao'],
      chim: ['xuong-song', 'chan', 'canh', 'long-vu'],
      ca: ['xuong-song', 'vay'],
      giun: [],
      'chau-chau': ['chan', 'canh'],
    },
    key: {
      trait: 'xuong-song',
      yes: { trait: 'vay', yes: 'ca', no: { trait: 'long-vu', yes: 'chim', no: 'meo' } },
      no: { trait: 'chan', yes: 'chau-chau', no: 'giun' },
    },
  },
  {
    id: 'thuc-vat',
    label: 'Một số thực vật',
    organisms: [
      { id: 'reu', name: 'Cây rêu' },
      { id: 'duong-xi', name: 'Cây dương xỉ' },
      { id: 'thong', name: 'Cây thông' },
      { id: 'lua', name: 'Cây lúa' },
      { id: 'buoi', name: 'Cây bưởi' },
    ],
    traits: [
      { id: 'hoa', yes: 'Có hoa', no: 'Không có hoa' },
      { id: 'hat', yes: 'Có hạt', no: 'Không có hạt' },
      { id: 're-that', yes: 'Có rễ thật', no: 'Chưa có rễ thật (rễ giả)' },
      { id: 'than-go', yes: 'Thân gỗ', no: 'Không phải thân gỗ' },
    ],
    has: {
      reu: [],
      'duong-xi': ['re-that'],
      thong: ['re-that', 'hat', 'than-go'],
      lua: ['re-that', 'hat', 'hoa'],
      buoi: ['re-that', 'hat', 'hoa', 'than-go'],
    },
    key: {
      trait: 'hoa',
      yes: { trait: 'than-go', yes: 'buoi', no: 'lua' },
      no: { trait: 'hat', yes: 'thong', no: { trait: 're-that', yes: 'duong-xi', no: 'reu' } },
    },
  },
];

/** @param {string} id */
export function setById(id) {
  const s = SETS.find((x) => x.id === id);
  if (!s) throw new Error(`unknown set ${id}`);
  return s;
}

/**
 * @param {OrganismSet} set
 * @param {string} id
 */
export function nameOf(set, id) {
  return set.organisms.find((o) => o.id === id)?.name ?? id;
}

/**
 * @param {OrganismSet} set
 * @param {string} id
 */
export function traitById(set, id) {
  const t = set.traits.find((x) => x.id === id);
  if (!t) throw new Error(`unknown trait ${id}`);
  return t;
}

/**
 * Whether an organism has a trait.
 * @param {OrganismSet} set
 * @param {string} organism
 * @param {string} trait
 */
export function hasTrait(set, organism, trait) {
  return set.has[organism].includes(trait);
}

/**
 * The organism described as the list of its features, one per trait.
 * @param {OrganismSet} set
 * @param {string} organism
 */
export function describe(set, organism) {
  return set.traits.map((t) => (hasTrait(set, organism, t.id) ? t.yes : t.no));
}

/**
 * Splits a group by a trait into the members that have it and the rest.
 * @param {OrganismSet} set
 * @param {string[]} members
 * @param {string} trait
 */
export function split(set, members, trait) {
  const yes = members.filter((m) => hasTrait(set, m, trait));
  const no = members.filter((m) => !hasTrait(set, m, trait));
  return { yes, no, valid: yes.length > 0 && no.length > 0 };
}

/**
 * @typedef {{ members: string[], step: number | null }} Group
 * @typedef {{ n: number, trait: Trait, yes: Group, no: Group }} KeyStep
 */

/**
 * Builds a key from the traits chosen so far. Each trait splits the first
 * group that still holds more than one organism; a trait that would not
 * split it into two non-empty groups is skipped (the widget never stores
 * one). Groups are numbered by the step that splits them.
 * @param {OrganismSet} set
 * @param {string[]} chosen trait ids in the order chosen
 */
export function buildKey(set, chosen) {
  /** @type {Group} */
  const root = { members: set.organisms.map((o) => o.id), step: null };
  /** @type {Group[]} */
  const queue = [root];
  /** @type {KeyStep[]} */
  const steps = [];
  for (const id of chosen) {
    const group = queue[0];
    if (!group) break;
    const s = split(set, group.members, id);
    if (!s.valid) continue;
    queue.shift();
    group.step = steps.length + 1;
    /** @type {Group} */
    const yes = { members: s.yes, step: null };
    /** @type {Group} */
    const no = { members: s.no, step: null };
    steps.push({ n: group.step, trait: traitById(set, id), yes, no });
    for (const g of [yes, no]) if (g.members.length > 1) queue.push(g);
  }
  return { steps, open: queue[0]?.members ?? null, done: queue.length === 0 };
}

/**
 * Follows a key for an organism and returns the leaf it reaches and the
 * number of pairs read on the way.
 * @param {OrganismSet} set
 * @param {string} organism
 */
export function identify(set, organism) {
  /** @type {KeyNode | string} */
  let node = set.key;
  let pairs = 0;
  while (typeof node !== 'string') {
    node = hasTrait(set, organism, node.trait) ? node.yes : node.no;
    pairs++;
  }
  return { leaf: node, pairs };
}

/**
 * Number of pairs of opposite features (branch points) in a complete key.
 * @param {KeyNode | string} node
 * @returns {number}
 */
export function countPairs(node) {
  return typeof node === 'string' ? 0 : 1 + countPairs(node.yes) + countPairs(node.no);
}

/**
 * The ready-made key as numbered pairs, numbered in reading order (breadth
 * first), each answer pointing at the next pair or naming an organism.
 * @param {OrganismSet} set
 */
export function keyTable(set) {
  /** @type {KeyNode[]} */
  const order = [];
  /** @type {KeyNode[]} */
  const queue = [set.key];
  while (queue.length) {
    const node = /** @type {KeyNode} */ (queue.shift());
    order.push(node);
    for (const next of [node.yes, node.no]) if (typeof next !== 'string') queue.push(next);
  }
  /** @param {KeyNode | string} next */
  const target = (next) =>
    typeof next === 'string'
      ? { organism: next, step: null }
      : { organism: null, step: order.indexOf(next) + 1 };
  return order.map((node, i) => ({
    n: i + 1,
    node,
    trait: traitById(set, node.trait),
    yes: target(node.yes),
    no: target(node.no),
  }));
}
