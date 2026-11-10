/**
 * A seeded cross-section of a tree trunk for counting growth rings. Each
 * year the vascular cambium lays down a light band of early wood (rainy
 * season, large cells) and a dark band of late wood (dry season, small
 * cells); one dark band closes each year, so the dark bands counted from
 * the pith out to the bark give the tree's age. One year is a drought year
 * with a narrow ring.
 */

import { int, rng } from '#lib/core/drill.js';

/**
 * @typedef {object} Band
 * @property {number} year 1 for the ring next to the pith.
 * @property {'som' | 'muon'} kind Early (light) or late (dark) wood.
 * @property {number} r0 Inner radius.
 * @property {number} r1 Outer radius.
 */

/**
 * @typedef {object} Trunk
 * @property {number} age
 * @property {number} pith Pith radius.
 * @property {Band[]} bands From the pith outward.
 * @property {number} bark Outer radius of the bark.
 * @property {number} droughtYear The year with the narrowest ring.
 */

/** Outer radius of the wood, in drawing units. */
export const WOOD_RADIUS = 92;
const PITH = 5;
const BARK = 8;

/**
 * A trunk of 6 to 12 years, the same for the same seed.
 * @param {number} seed
 * @returns {Trunk}
 */
export function makeTrunk(seed) {
  const rand = rng(seed);
  const age = int(rand, 6, 12);
  const droughtYear = int(rand, 2, age - 1);
  /** @type {Array<[number, number]>} */
  const widths = [];
  for (let y = 1; y <= age; y += 1) {
    const early = y === droughtYear ? 1 : 2.5 + rand() * 2;
    const late = y === droughtYear ? 0.9 : 1.5 + rand();
    widths.push([early, late]);
  }
  const total = widths.reduce((s, [a, b]) => s + a + b, 0);
  const k = (WOOD_RADIUS - PITH) / total;
  /** @type {Band[]} */
  const bands = [];
  let r = PITH;
  widths.forEach(([a, b], i) => {
    bands.push({ year: i + 1, kind: 'som', r0: r, r1: r + a * k });
    r += a * k;
    bands.push({ year: i + 1, kind: 'muon', r0: r, r1: r + b * k });
    r += b * k;
  });
  return { age, pith: PITH, bands, bark: WOOD_RADIUS + BARK, droughtYear };
}

/**
 * Width of one year's ring (early plus late wood).
 * @param {Trunk} t @param {number} year
 */
export function ringWidth(t, year) {
  return t.bands.filter((b) => b.year === year).reduce((s, b) => s + b.r1 - b.r0, 0);
}

/**
 * The band index under a distance from the centre, or -1 for the pith and
 * `bands.length` for the bark.
 * @param {Trunk} t @param {number} r
 */
export function bandAtRadius(t, r) {
  if (r < t.pith) return -1;
  const i = t.bands.findIndex((b) => r < b.r1);
  return i < 0 ? t.bands.length : i;
}

/**
 * Feedback on one tap: what the learner is pointing at.
 * @param {Trunk} t @param {number} i band index, -1 pith, bands.length bark
 */
export function describeBand(t, i) {
  if (i < 0) return 'Đây là lõi (tuỷ) ở tâm thân: điểm bắt đầu đếm, không phải một vòng gỗ.';
  if (i >= t.bands.length) return 'Đây là vỏ (bần và mạch rây): dừng đếm ở đây.';
  const b = t.bands[i];
  return b.kind === 'som'
    ? 'Dải gỗ màu sáng: gỗ tạo ra trong mùa mưa, tế bào to. Không đếm dải này.'
    : 'Dải gỗ màu sẫm: gỗ tạo ra trong mùa khô, tế bào nhỏ. Mỗi dải sẫm khép lại một năm.';
}

/**
 * Checks the marks once the learner says they are done.
 * @param {Trunk} t @param {number[]} marked band indices
 * @returns {{ tone: 'ok' | 'warn', text: string }}
 */
export function checkMarks(t, marked) {
  const light = marked.filter((i) => t.bands[i]?.kind === 'som').length;
  const dark = marked.filter((i) => t.bands[i]?.kind === 'muon').length;
  if (light > 0) {
    return {
      tone: 'warn',
      text: `Có ${light} dấu đặt trên dải gỗ màu sáng. Mỗi năm gồm một dải sáng và một dải sẫm; chỉ đánh dấu các dải sẫm.`,
    };
  }
  if (dark < t.age) {
    return {
      tone: 'warn',
      text: `Bạn mới đánh dấu ${dark} dải sẫm. Dò lại từ lõi ra vỏ, đánh dấu từng dải sẫm, kể cả những dải rất hẹp.`,
    };
  }
  return {
    tone: 'ok',
    text: `Đúng: ${t.age} vòng gỗ, cây khoảng ${t.age} tuổi. Vòng của năm thứ ${t.droughtYear} hẹp nhất: năm đó cây sinh trưởng chậm, có thể do hạn hán hoặc thiếu dinh dưỡng.`,
  };
}

/**
 * Toggles a mark on a wood band; the pith and the bark take no mark.
 * @param {Trunk} t @param {number[]} marked @param {number} i
 */
export function toggleMark(t, marked, i) {
  if (i < 0 || i >= t.bands.length) return marked;
  return marked.includes(i) ? marked.filter((x) => x !== i) : [...marked, i].sort((a, b) => a - b);
}
