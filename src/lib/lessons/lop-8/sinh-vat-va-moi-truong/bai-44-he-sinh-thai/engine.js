/**
 * A grassland-forest food web for the ecosystem lesson and the rules for
 * building it link by link: the learner taps the food, then the species
 * that eats it, and each arrow is checked against the web.
 */
import { foodChains, foodOf } from '#lib/domain/food-web.js';

/** @type {import('#lib/domain/food-web.js').FoodWeb} */
export const WEB = {
  species: [
    { id: 'co', name: 'Cỏ', role: 'producer' },
    { id: 'chau-chau', name: 'Châu chấu', role: 'consumer' },
    { id: 'tho', name: 'Thỏ', role: 'consumer' },
    { id: 'chuot', name: 'Chuột', role: 'consumer' },
    { id: 'ech', name: 'Ếch', role: 'consumer' },
    { id: 'ran', name: 'Rắn', role: 'consumer' },
    { id: 'dai-bang', name: 'Đại bàng', role: 'consumer' },
    { id: 'vi-khuan', name: 'Vi khuẩn, nấm', role: 'decomposer' },
  ],
  links: [
    ['co', 'chau-chau'],
    ['co', 'tho'],
    ['co', 'chuot'],
    ['chau-chau', 'ech'],
    ['ech', 'ran'],
    ['chuot', 'ran'],
    ['chuot', 'dai-bang'],
    ['tho', 'dai-bang'],
    ['ran', 'dai-bang'],
  ],
};

/** @param {string} id */
export const nameOf = (id) => WEB.species.find((s) => s.id === id)?.name ?? id;

/** @param {string} a @param {string} b */
export const linkKey = (a, b) => `${a}>${b}`;

/** @param {string} a @param {string} b */
const isLink = (a, b) => WEB.links.some(([f, e]) => f === a && e === b);

/**
 * Checks an arrow drawn from `food` to `eater`.
 * @param {string} food
 * @param {string} eater
 * @returns {{ ok: boolean, text: string }}
 */
export function judgeLink(food, eater) {
  const f = nameOf(food);
  const e = nameOf(eater);
  if (isLink(food, eater))
    return { ok: true, text: `Đúng: ${e} ăn ${f.toLowerCase()}, ${f} → ${e}.` };
  if (isLink(eater, food))
    return {
      ok: false,
      text: `Ngược chiều: ${f} ăn ${e.toLowerCase()}. Mũi tên chỉ từ thức ăn sang sinh vật ăn nó: hãy chọn ${e} trước.`,
    };
  if (WEB.species.find((s) => s.id === eater)?.role === 'producer')
    return {
      ok: false,
      text: `${e} là sinh vật sản xuất, tự tổng hợp chất hữu cơ, không ăn sinh vật khác.`,
    };
  const foods = foodOf(WEB, eater).map(nameOf);
  return {
    ok: false,
    text: `Trong lưới này ${e.toLowerCase()} không ăn ${f.toLowerCase()}. Thức ăn của ${e.toLowerCase()}: ${foods
      .join(', ')
      .toLowerCase()}.`,
  };
}

/** Food chains of the web, written with arrows. */
export function chainsText() {
  return foodChains(WEB).map((c) => c.map(nameOf).join(' → '));
}
