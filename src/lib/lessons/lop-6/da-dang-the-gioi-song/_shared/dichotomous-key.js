/**
 * Dichotomous keys (khóa lưỡng phân) for the lessons of this chapter: a set
 * of organisms described by yes/no traits, reading a ready-made key to
 * identify an organism, listing a key as numbered pairs, and building a key
 * by splitting groups with chosen traits.
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
