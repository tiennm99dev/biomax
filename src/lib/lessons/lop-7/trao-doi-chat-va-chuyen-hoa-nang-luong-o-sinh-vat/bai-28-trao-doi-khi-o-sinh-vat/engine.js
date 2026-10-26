/**
 * A simplified stoma: how light and water open or close it, and which gases
 * pass through it, following the book:
 *
 * - a stoma is two bean-shaped guard cells with a pore between them; it opens
 *   when there is light and the plant has enough water, and closes when the
 *   guard cells lack water;
 * - photosynthesis (only in light): carbon dioxide diffuses into the leaf,
 *   oxygen diffuses out;
 * - respiration (day and night): oxygen diffuses in, carbon dioxide out;
 * - water vapour leaves through the open pore (transpiration).
 *
 * Numbers are for teaching only.
 */

/** @typedef {{ light: number, water: boolean }} Leaf */
/** @typedef {{ gas: 'CO₂' | 'O₂' | 'Hơi nước', dir: 'vao' | 'ra', amount: number }} Flow */

/** Respiration of the leaf cells, in the same units as photosynthesis. */
export const RESPIRATION = 0.15;

/**
 * How wide the pore is, from 0 (closed) to 1 (wide open).
 * @param {Leaf} leaf
 */
export function aperture({ light, water }) {
  if (!water) return 0.05;
  return Math.round(100 * (0.1 + 0.9 * Math.min(1, Math.max(0, light) / 60))) / 100;
}

/**
 * Photosynthesis of the leaf (0-1): needs light, and carbon dioxide that only
 * enters through open stomata.
 * @param {Leaf} leaf
 */
export function photosynthesis(leaf) {
  if (leaf.light <= 0) return 0;
  const byLight = Math.min(1, leaf.light / 70);
  const byPore = Math.min(1, aperture(leaf) / 0.6);
  return Math.round(100 * byLight * byPore) / 100;
}

/**
 * The gases going in and out through the stoma. Photosynthesis and
 * respiration both run in light; what the leaf exchanges is their difference.
 * @param {Leaf} leaf
 * @returns {Flow[]}
 */
export function flows(leaf) {
  const net = Math.round(100 * (photosynthesis(leaf) - RESPIRATION)) / 100;
  /** @type {Flow[]} */
  const out = [];
  if (net > 0) {
    out.push({ gas: 'CO₂', dir: 'vao', amount: net });
    out.push({ gas: 'O₂', dir: 'ra', amount: net });
  } else if (net < 0) {
    out.push({ gas: 'O₂', dir: 'vao', amount: -net });
    out.push({ gas: 'CO₂', dir: 'ra', amount: -net });
  }
  out.push({ gas: 'Hơi nước', dir: 'ra', amount: aperture(leaf) });
  return out;
}

/**
 * A sentence describing the stoma and the main process.
 * @param {Leaf} leaf
 */
export function describe(leaf) {
  const a = aperture(leaf);
  if (!leaf.water)
    return 'Cây thiếu nước: hai tế bào hạt đậu mất nước, xẹp lại nên khí khổng khép. Cây giữ được nước nhưng khí CO₂ khó vào lá, quang hợp giảm mạnh.';
  if (leaf.light <= 0)
    return 'Trong tối, khí khổng gần như khép. Lá không quang hợp, chỉ hô hấp: lấy O₂ vào và thải CO₂ ra.';
  const p = photosynthesis(leaf);
  if (p < RESPIRATION)
    return 'Ánh sáng còn yếu, khí khổng mới hé mở. Quang hợp yếu hơn hô hấp nên lá vẫn lấy O₂ vào và thải CO₂ ra.';
  if (p === RESPIRATION)
    return 'Quang hợp vừa bằng hô hấp: O₂ quang hợp tạo ra được dùng hết cho hô hấp, lá không trao đổi thêm O₂, CO₂ với không khí.';
  if (a >= 1)
    return 'Đủ ánh sáng và đủ nước: hai tế bào hạt đậu trương nước, khí khổng mở rộng. Quang hợp mạnh hơn hô hấp nên CO₂ khuếch tán vào lá, O₂ khuếch tán ra ngoài; hơi nước thoát ra nhiều.';
  return 'Có ánh sáng và đủ nước, khí khổng đang mở dần. Quang hợp mạnh hơn hô hấp: CO₂ vào lá, O₂ ra ngoài.';
}
