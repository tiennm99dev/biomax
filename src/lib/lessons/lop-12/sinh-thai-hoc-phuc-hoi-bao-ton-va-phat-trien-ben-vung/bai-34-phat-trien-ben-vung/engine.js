/**
 * A personal ecological footprint (dấu chân sinh thái), in global hectares
 * (gha) per year: the area of productive land and sea needed to supply what
 * one person uses and to absorb the CO2 they emit. The coefficients are
 * rounded estimates for teaching, not a certified calculator:
 *
 * - shared services (housing, roads, schools...) count a fixed share;
 * - transport and electricity count their CO2 at about 0,27 gha per tonne
 *   (a motorbike emits about 0,05 kg CO2 per km, a car about 0,17 kg, a bus
 *   about 0,03 kg per passenger; the grid about 0,68 kg per kWh);
 * - food and goods count by habit.
 *
 * The Earth's biocapacity is about 1,5 gha per person, so a footprint above
 * it means humanity uses more than one Earth can renew.
 */
import { tidy } from '#lib/core/number-format.js';

/** Biocapacity of the Earth per person, gha. */
export const BIOCAPACITY = 1.5;
/** Shared services, gha. */
export const SHARED = 0.6;

/** @typedef {'nhieu-thit' | 'vua' | 'it-thit'} Diet */
/** @typedef {'o-to' | 'xe-may' | 'xe-buyt' | 'xe-dap'} Ride */
/** @typedef {'nhieu' | 'vua' | 'it'} Goods */

/** @type {Record<Diet, { name: string, gha: number }>} */
export const DIETS = {
  'nhieu-thit': { name: 'Nhiều thịt đỏ', gha: 1.2 },
  vua: { name: 'Thịt, cá vừa phải', gha: 0.8 },
  'it-thit': { name: 'Chủ yếu rau, đậu', gha: 0.5 },
};
/** Extra for throwing food away, gha. */
export const FOOD_WASTE = 0.2;

/**
 * Means of transport; `perKm` is gha for each km travelled every day for a year.
 * @type {Record<Ride, { name: string, perKm: number }>}
 */
export const RIDES = {
  'o-to': { name: 'Ô tô riêng', perKm: 0.017 },
  'xe-may': { name: 'Xe máy', perKm: 0.005 },
  'xe-buyt': { name: 'Xe buýt', perKm: 0.003 },
  'xe-dap': { name: 'Xe đạp, đi bộ', perKm: 0 },
};

/** gha per kWh used each month, over a year. */
export const PER_KWH = 0.0022;

/** @type {Record<Goods, { name: string, gha: number }>} */
export const GOODS = {
  nhieu: { name: 'Mua sắm nhiều, dùng đồ nhựa một lần', gha: 0.6 },
  vua: { name: 'Vừa phải', gha: 0.4 },
  it: { name: 'Mua ít, tái sử dụng, phân loại rác', gha: 0.2 },
};

/**
 * @typedef {{
 *   diet: Diet,
 *   waste: boolean,
 *   ride: Ride,
 *   km: number,
 *   kwh: number,
 *   goods: Goods,
 * }} Habits
 */

/** @type {Habits} */
export const DEFAULT_HABITS = {
  diet: 'vua',
  waste: true,
  ride: 'xe-may',
  km: 10,
  kwh: 150,
  goods: 'vua',
};

/**
 * The footprint by part, gha.
 * @param {Habits} h
 */
export function parts(h) {
  return {
    food: tidy(DIETS[h.diet].gha + (h.waste ? FOOD_WASTE : 0)),
    transport: tidy(RIDES[h.ride].perKm * h.km),
    energy: tidy(PER_KWH * h.kwh),
    goods: GOODS[h.goods].gha,
    shared: SHARED,
  };
}

/**
 * Total footprint, gha, to two decimals.
 * @param {Habits} h
 */
export function footprint(h) {
  const p = parts(h);
  return tidy(p.food + p.transport + p.energy + p.goods + p.shared, 2);
}

/**
 * How many Earths everyone would need living like this, to one decimal.
 * @param {number} gha
 */
export function earths(gha) {
  return tidy(Math.round((gha / BIOCAPACITY) * 10) / 10, 1);
}

/**
 * Concrete changes that would lower the footprint, the biggest saving first,
 * each with the change of habit and the saving in gha.
 * @param {Habits} h
 * @returns {{ text: string, change: Partial<Habits>, saving: number }[]}
 */
export function suggestions(h) {
  const now = footprint(h);
  /** @type {{ text: string, change: Partial<Habits> }[]} */
  const ideas = [];
  if (h.diet !== 'it-thit') {
    ideas.push({
      text: 'Ăn ít thịt đỏ, thêm rau, đậu: chăn nuôi cần nhiều đất trồng thức ăn và thải nhiều khí nhà kính.',
      change: { diet: 'it-thit' },
    });
  }
  if (h.waste) {
    ideas.push({
      text: 'Nấu và lấy vừa đủ ăn, không bỏ phí thức ăn.',
      change: { waste: false },
    });
  }
  if (h.km > 0 && h.ride !== 'xe-dap') {
    ideas.push({
      text:
        h.km <= 5
          ? 'Quãng đường ngắn: đi xe đạp hoặc đi bộ.'
          : 'Đi xe buýt thay cho phương tiện cá nhân.',
      change: { ride: h.km <= 5 ? 'xe-dap' : 'xe-buyt' },
    });
  }
  if (h.kwh > 60) {
    ideas.push({
      text: 'Tắt thiết bị khi không dùng, dùng đèn LED, đặt điều hoà ở $26$ – $28\\,^\\circ\\mathrm{C}$: giảm khoảng một phần ba lượng điện.',
      change: { kwh: Math.round((h.kwh * 2) / 3) },
    });
  }
  if (h.goods !== 'it') {
    ideas.push({
      text: 'Mua ít hơn, dùng lại đồ cũ, mang túi vải, phân loại rác để tái chế.',
      change: { goods: 'it' },
    });
  }
  return ideas
    .map(({ text, change }) => ({
      text,
      change,
      saving: tidy(now - footprint({ ...h, ...change }), 2),
    }))
    .filter((s) => s.saving > 0)
    .sort((a, b) => b.saving - a.saving);
}
