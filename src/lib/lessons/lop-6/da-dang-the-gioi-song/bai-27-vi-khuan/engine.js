/**
 * Logic for the "Vi khuẩn" lesson: a simplified model of how a food-spoiling
 * bacterium multiplies by binary fission (phân đôi) at different
 * temperatures, starting from a clean or a dirty start, and the labelled
 * diagram of a rod-shaped bacterium for the hotspot widget.
 *
 * The growth model is illustrative, not data for one real species: fastest
 * near body temperature (one division every 20 minutes at 37 °C), slower
 * when cool, stopped in a fridge (below 5 °C) and in the 55-59 °C band, and
 * killed from 60 °C, faster the hotter it is.
 */

import { formatNumber, fmt } from '#lib/core/number-format.js';

/**
 * @typedef {{ kind: 'grow', minutes: number }
 *   | { kind: 'stop' }
 *   | { kind: 'die', halfMinutes: number }} Behaviour
 */

/** Fastest generation time of the model, in minutes, reached at 37 °C. */
export const FASTEST_MINUTES = 20;

/** Illustrative count above which the food is unsafe to eat. */
export const DANGER = 1_000_000;

/** Starting count on the food: hygienic handling or dirty hands and tools. */
export const START = { sach: 10, ban: 1000 };

/**
 * @param {number} x
 * @param {number} x0
 * @param {number} x1
 * @param {number} y0
 * @param {number} y1
 */
const lerp = (x, x0, x1, y0, y1) => y0 + ((x - x0) / (x1 - x0)) * (y1 - y0);

/**
 * What the bacteria do at a temperature (°C).
 * @param {number} temp
 * @returns {Behaviour}
 */
export function behaviourAt(temp) {
  if (temp < 5) return { kind: 'stop' };
  if (temp < 20) return { kind: 'grow', minutes: Math.round(lerp(temp, 5, 20, 240, 60)) };
  if (temp <= 37) return { kind: 'grow', minutes: Math.round(lerp(temp, 20, 37, 60, 20)) };
  if (temp <= 45) return { kind: 'grow', minutes: Math.round(lerp(temp, 37, 45, 20, 40)) };
  if (temp < 55) return { kind: 'grow', minutes: Math.round(lerp(temp, 45, 55, 40, 120)) };
  if (temp < 60) return { kind: 'stop' };
  return { kind: 'die', halfMinutes: Math.max(1, Math.round(lerp(temp, 60, 100, 10, 1))) };
}

/**
 * Number of bacteria after `hours`, starting from `n0`. Growing bacteria
 * double once per generation (whole divisions only); dying ones halve every
 * `halfMinutes`, rounded down, so a population can reach 0.
 * @param {number} n0
 * @param {number} temp
 * @param {number} hours
 */
export function countAfter(n0, temp, hours) {
  const b = behaviourAt(temp);
  const minutes = hours * 60;
  if (b.kind === 'stop') return n0;
  if (b.kind === 'grow') return n0 * 2 ** Math.floor(minutes / b.minutes + 1e-9);
  return Math.floor(n0 / 2 ** (minutes / b.halfMinutes));
}

/**
 * Number of divisions in `hours` at a temperature (0 when not growing).
 * @param {number} temp
 * @param {number} hours
 */
export function divisions(temp, hours) {
  const b = behaviourAt(temp);
  return b.kind === 'grow' ? Math.floor((hours * 60) / b.minutes + 1e-9) : 0;
}

/**
 * First time, in hours, when the count reaches `DANGER`, or null if it
 * never does within `maxHours`.
 * @param {number} n0
 * @param {number} temp
 * @param {number} maxHours
 */
export function dangerTime(n0, temp, maxHours) {
  const b = behaviourAt(temp);
  if (n0 >= DANGER) return 0;
  if (b.kind !== 'grow') return null;
  const gens = Math.ceil(Math.log2(DANGER / n0) - 1e-9);
  const h = (gens * b.minutes) / 60;
  return h <= maxHours ? h : null;
}

/**
 * A count in words: grouped digits below a million, then "triệu" or "tỉ".
 * @param {number} n
 */
export function countWords(n) {
  if (n < 1_000_000) return fmt(n);
  if (n < 1_000_000_000) return `${formatNumber(n / 1_000_000, 1)} triệu`;
  return `${formatNumber(n / 1_000_000_000, 1)} tỉ`;
}

/**
 * A time in hours as words: 2.5 → "2 giờ 30 phút".
 * @param {number} hours
 */
export function timeWords(hours) {
  const total = Math.round(hours * 60);
  const h = Math.floor(total / 60);
  const m = total % 60;
  if (h === 0) return `${m} phút`;
  return m ? `${h} giờ ${m} phút` : `${h} giờ`;
}

/** @type {import('#lib/domain/diagrams.js').Diagram} */
export const BACTERIUM = {
  id: 'vi-khuan-hinh-que',
  title: 'Cấu tạo tế bào vi khuẩn (hình que)',
  width: 420,
  height: 240,
  shapes: [
    ...[110, 160, 210, 260].map(
      (x) =>
        /** @type {import('#lib/domain/diagrams.js').Shape} */ ({
          kind: 'line',
          x1: x,
          y1: 80,
          x2: x - 8,
          y2: 58,
          stroke: '#64748b',
          width: 2,
        }),
    ),
    ...[130, 190, 250].map(
      (x) =>
        /** @type {import('#lib/domain/diagrams.js').Shape} */ ({
          kind: 'line',
          x1: x,
          y1: 160,
          x2: x + 6,
          y2: 182,
          stroke: '#64748b',
          width: 2,
        }),
    ),
    {
      kind: 'path',
      d: 'M 330 120 q 12 -18 24 0 q 12 18 24 0 q 12 -18 24 0 q 6 9 10 6',
      fill: 'none',
      stroke: '#475569',
      width: 3,
    },
    {
      kind: 'rect',
      x: 70,
      y: 80,
      w: 260,
      h: 80,
      rx: 40,
      fill: '#d9f99d',
      stroke: '#4d7c0f',
      width: 6,
    },
    {
      kind: 'rect',
      x: 79,
      y: 89,
      w: 242,
      h: 62,
      rx: 31,
      fill: '#ecfccb',
      stroke: '#a16207',
      width: 2,
      dash: '6 3',
    },
    {
      kind: 'path',
      d: 'M 190 120 q 10 -18 30 -8 q 20 -12 35 4 q 10 14 -10 18 q -20 10 -35 -4 q -22 4 -20 -10 Z',
      fill: 'none',
      stroke: '#7c3aed',
      width: 3,
    },
    ...[
      [120, 108],
      [140, 136],
      [280, 104],
      [292, 134],
      [175, 140],
    ].map(
      ([cx, cy]) =>
        /** @type {import('#lib/domain/diagrams.js').Shape} */ ({
          kind: 'circle',
          cx,
          cy,
          r: 3,
          fill: '#65a30d',
        }),
    ),
  ],
  parts: [
    {
      id: 'thanh-te-bao',
      name: 'Thành tế bào',
      info: 'Lớp vỏ cứng bên ngoài, giữ cho vi khuẩn có hình dạng ổn định và bảo vệ tế bào.',
      x: 70,
      y: 120,
    },
    {
      id: 'mang-te-bao',
      name: 'Màng tế bào',
      accept: ['màng sinh chất'],
      info: 'Nằm ngay dưới thành tế bào, kiểm soát các chất đi vào và đi ra khỏi tế bào.',
      x: 230,
      y: 151,
    },
    {
      id: 'te-bao-chat',
      name: 'Tế bào chất',
      accept: ['chất tế bào'],
      info: 'Nơi diễn ra các hoạt động sống của vi khuẩn.',
      x: 130,
      y: 122,
    },
    {
      id: 'vung-nhan',
      name: 'Vùng nhân',
      info: 'Chứa vật chất di truyền; chưa có màng nhân bao bọc, nên vi khuẩn là tế bào nhân sơ.',
      x: 220,
      y: 114,
    },
    {
      id: 'roi',
      name: 'Roi',
      info: 'Giúp vi khuẩn di chuyển trong môi trường lỏng. Không phải vi khuẩn nào cũng có roi.',
      x: 380,
      y: 120,
    },
    {
      id: 'long',
      name: 'Lông',
      info: 'Giúp vi khuẩn bám vào bề mặt (ví dụ bám vào tế bào vật chủ).',
      x: 152,
      y: 56,
    },
  ],
};
