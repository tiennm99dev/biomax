/**
 * Food chains and food webs (chuỗi và lưới thức ăn): species linked by
 * "is eaten by" arrows, from producers (sinh vật sản xuất) through consumers
 * (sinh vật tiêu thụ) to decomposers (sinh vật phân giải). Functions list the
 * chains, give trophic levels (bậc dinh dưỡng), follow what happens when a
 * species disappears and estimate the energy passed along a chain.
 */

/** @typedef {'producer' | 'consumer' | 'decomposer'} Role */
/** @typedef {{ id: string, name: string, role: Role }} Species */
/**
 * `links` are [food, eater] pairs: the arrow points from what is eaten to
 * what eats it, which is the direction energy flows.
 * @typedef {{ species: Species[], links: Array<[string, string]> }} FoodWeb
 */

export const ROLE_LABELS = /** @type {Record<Role, string>} */ ({
  producer: 'Sinh vật sản xuất',
  consumer: 'Sinh vật tiêu thụ',
  decomposer: 'Sinh vật phân giải',
});

/**
 * Checks ids, link ends and roles: producers eat nothing, consumers eat something.
 * @param {FoodWeb} web
 * @returns {string[]} problems found (empty when valid)
 */
export function validate(web) {
  /** @type {string[]} */
  const problems = [];
  const ids = new Set(web.species.map((s) => s.id));
  if (ids.size !== web.species.length) problems.push('duplicate species id');
  for (const [a, b] of web.links) {
    if (!ids.has(a) || !ids.has(b)) problems.push(`link ${a} → ${b} names an unknown species`);
    if (a === b) problems.push(`${a} eats itself`);
  }
  for (const s of web.species) {
    const eats = foodOf(web, s.id).length;
    if (s.role === 'producer' && eats) problems.push(`producer ${s.id} eats something`);
    if (s.role === 'consumer' && !eats) problems.push(`consumer ${s.id} eats nothing`);
  }
  return problems;
}

/**
 * What a species eats.
 * @param {FoodWeb} web
 * @param {string} id
 */
export function foodOf(web, id) {
  return web.links.filter(([, eater]) => eater === id).map(([food]) => food);
}

/**
 * What eats a species.
 * @param {FoodWeb} web
 * @param {string} id
 */
export function eatersOf(web, id) {
  return web.links.filter(([food]) => food === id).map(([, eater]) => eater);
}

/** @param {FoodWeb} web @param {string} id */
function roleOf(web, id) {
  return web.species.find((s) => s.id === id)?.role;
}

/**
 * Every food chain of the web: paths that start at a producer and follow
 * the arrows until a species that nothing (but decomposers) eats.
 * Decomposers are left out of chains, as in textbook counting.
 * @param {FoodWeb} web
 * @returns {string[][]}
 */
export function foodChains(web) {
  /** @type {string[][]} */
  const chains = [];
  /** @param {string[]} path */
  const walk = (path) => {
    const last = path[path.length - 1];
    const next = eatersOf(web, last).filter(
      (e) => roleOf(web, e) !== 'decomposer' && !path.includes(e),
    );
    if (!next.length) {
      if (path.length > 1) chains.push(path);
      return;
    }
    for (const e of next) walk([...path, e]);
  };
  for (const s of web.species) if (s.role === 'producer') walk([s.id]);
  return chains;
}

/**
 * Trophic levels a species occupies across all chains: 1 for producers,
 * 2 for primary consumers, and so on. A species can sit at several levels.
 * @param {FoodWeb} web
 * @param {string} id
 * @returns {number[]}
 */
export function trophicLevels(web, id) {
  const levels = new Set();
  if (roleOf(web, id) === 'producer') levels.add(1);
  for (const chain of foodChains(web)) {
    const i = chain.indexOf(id);
    if (i >= 0) levels.add(i + 1);
  }
  return [...levels].sort((a, b) => a - b);
}

/**
 * Species grouped into rows for drawing, bottom row first: a species sits
 * in the row of its highest trophic level, so every arrow points up a row
 * or more. Species in no chain follow, and decomposers get the last row.
 * @param {FoodWeb} web
 * @returns {string[][]}
 */
export function levelRows(web) {
  /** @type {string[][]} */
  const rows = [];
  /** @type {string[]} */
  const decomposers = [];
  /** @type {string[]} */
  const unplaced = [];
  for (const s of web.species) {
    if (s.role === 'decomposer') {
      decomposers.push(s.id);
      continue;
    }
    const lv = trophicLevels(web, s.id);
    if (!lv.length) {
      unplaced.push(s.id);
      continue;
    }
    const k = lv[lv.length - 1] - 1;
    (rows[k] ??= []).push(s.id);
  }
  const filled = rows.filter(Boolean);
  if (unplaced.length) filled.push(unplaced);
  if (decomposers.length) filled.push(decomposers);
  return filled;
}

/**
 * Species that lose every food source when `removed` disappear, following
 * the cascade: if all of a consumer's food is gone, it goes too. Producers
 * and decomposers never starve here.
 * @param {FoodWeb} web
 * @param {string[]} removed
 * @returns {string[]} species lost because of the removal, in web order
 */
export function cascade(web, removed) {
  const gone = new Set(removed);
  let changed = true;
  while (changed) {
    changed = false;
    for (const s of web.species) {
      if (gone.has(s.id) || s.role !== 'consumer') continue;
      const food = foodOf(web, s.id);
      if (food.length && food.every((f) => gone.has(f))) {
        gone.add(s.id);
        changed = true;
      }
    }
  }
  return web.species.map((s) => s.id).filter((id) => gone.has(id) && !removed.includes(id));
}

/**
 * Energy reaching each link of a chain when each step passes `efficiency`
 * of the energy (about 10% in nature): [E, E·h, E·h², ...].
 * @param {number} length number of species in the chain
 * @param {number} start energy of the producers
 * @param {number} [efficiency]
 */
export function energyAlong(length, start, efficiency = 0.1) {
  return Array.from({ length }, (_, i) => start * efficiency ** i);
}

/**
 * Ecological efficiency (hiệu suất sinh thái) between two levels, in percent.
 * @param {number} lower energy at the lower level
 * @param {number} higher energy at the next level up
 */
export function efficiencyPercent(lower, higher) {
  return (higher / lower) * 100;
}

/**
 * A food chain written with arrows: "Cỏ → Châu chấu → Ếch".
 * @param {FoodWeb} web
 * @param {string[]} chain
 */
export function chainText(web, chain) {
  const name = (/** @type {string} */ id) => web.species.find((s) => s.id === id)?.name ?? id;
  return chain.map(name).join(' → ');
}

/**
 * A rice-field food web used by demos and lessons.
 * @type {FoodWeb}
 */
export const RICE_FIELD = {
  species: [
    { id: 'lua', name: 'Lúa', role: 'producer' },
    { id: 'co', name: 'Cỏ', role: 'producer' },
    { id: 'chau-chau', name: 'Châu chấu', role: 'consumer' },
    { id: 'sau', name: 'Sâu', role: 'consumer' },
    { id: 'chuot', name: 'Chuột', role: 'consumer' },
    { id: 'ech', name: 'Ếch', role: 'consumer' },
    { id: 'chim-sau', name: 'Chim sâu', role: 'consumer' },
    { id: 'ran', name: 'Rắn', role: 'consumer' },
    { id: 'dai-bang', name: 'Đại bàng', role: 'consumer' },
    { id: 'vi-khuan', name: 'Vi khuẩn, nấm', role: 'decomposer' },
  ],
  links: [
    ['co', 'chau-chau'],
    ['lua', 'chau-chau'],
    ['lua', 'sau'],
    ['lua', 'chuot'],
    ['chau-chau', 'ech'],
    ['sau', 'ech'],
    ['sau', 'chim-sau'],
    ['ech', 'ran'],
    ['chuot', 'ran'],
    ['chuot', 'dai-bang'],
    ['ran', 'dai-bang'],
    ['chim-sau', 'dai-bang'],
  ],
};
