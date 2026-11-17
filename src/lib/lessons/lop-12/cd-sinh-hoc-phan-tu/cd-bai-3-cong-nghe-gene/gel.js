/**
 * Agarose gel electrophoresis: DNA is negative, so it runs from the wells
 * towards the positive pole, and a shorter fragment runs further, by an
 * amount close to linear in the logarithm of its length. The lanes hold a
 * size ladder, a crime-scene sample and three suspects; the learner runs the
 * gel and says which suspect matches. No DOM here, so it is tested in Node.
 */
import { fmt } from '#lib/core/number-format.js';

/**
 * @typedef {{ id: string, name: string, short: string, bands: number[] }} Lane
 */

/** Fragment lengths of the size ladder, in base pairs (bp). */
export const LADDER = [100, 200, 300, 500, 700, 1000, 1500, 2000];

/** @type {Lane[]} */
export const LANES = [
  { id: 'thang', name: 'Thang chuẩn', short: 'Thang', bands: LADDER },
  { id: 'hien-truong', name: 'Hiện trường', short: 'HT', bands: [250, 600, 1200] },
  { id: 'np1', name: 'Nghi phạm 1', short: 'NP 1', bands: [250, 800, 1200] },
  { id: 'np2', name: 'Nghi phạm 2', short: 'NP 2', bands: [250, 600, 1200] },
  { id: 'np3', name: 'Nghi phạm 3', short: 'NP 3', bands: [400, 600, 1500] },
];

/** The suspect whose bands match the crime scene. */
export const MATCH = 'np2';

/** The longest run, in minutes, on the time slider. */
export const FULL_RUN = 40;

/**
 * How far a fragment travels in a full run, as a share of the gel length:
 * 100 bp goes 92% of the way, 2000 bp 30%, linear in log length between.
 * @param {number} bp
 */
export function mobility(bp) {
  return 0.92 - (0.62 * Math.log10(bp / 100)) / Math.log10(20);
}

/**
 * Distance from the well as a share of the gel, after `minutes` of running.
 * With the wells at the positive pole the DNA runs the other way, out of
 * the gel, and nothing is left to see (null).
 * @param {number} bp @param {number} minutes @param {boolean} wellsAtMinus
 * @returns {number | null}
 */
export function bandPosition(bp, minutes, wellsAtMinus) {
  if (!wellsAtMinus) return minutes === 0 ? 0 : null;
  return (mobility(bp) * Math.min(minutes, FULL_RUN)) / FULL_RUN;
}

/**
 * The live note on the gel.
 * @param {number} minutes @param {boolean} wellsAtMinus
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function runNote(minutes, wellsAtMinus) {
  if (minutes === 0) {
    return { tone: 'info', text: 'Mẫu đã nạp vào giếng. Kéo thanh thời gian để chạy điện di.' };
  }
  if (!wellsAtMinus) {
    return {
      tone: 'warn',
      text: 'Các băng biến mất: DNA mang điện tích âm nên chạy về cực dương, tức là ra khỏi gel qua phía giếng. Giếng phải đặt ở phía cực âm.',
    };
  }
  if (minutes < FULL_RUN / 2) {
    return {
      tone: 'info',
      text: `Đã chạy ${minutes} phút: các đoạn ngắn đi trước, nhưng băng còn sát nhau. Chạy thêm để tách rõ.`,
    };
  }
  return {
    tone: 'ok',
    text: `Đã chạy ${minutes} phút: đoạn càng ngắn càng chạy xa giếng. So sánh các băng với thang chuẩn và với mẫu hiện trường.`,
  };
}

/**
 * Checks the suspect the learner picked.
 * @param {string} id @param {number} minutes @param {boolean} wellsAtMinus
 * @returns {{ ok: boolean, text: string }}
 */
export function judge(id, minutes, wellsAtMinus) {
  if (!wellsAtMinus || minutes < FULL_RUN / 2) {
    return {
      ok: false,
      text: 'Các băng chưa tách rõ để so sánh. Hãy chạy điện di đúng chiều và đủ lâu.',
    };
  }
  const scene = laneOf('hien-truong').bands;
  const lane = laneOf(id);
  if (id === MATCH) {
    return {
      ok: true,
      text: `Đúng: ${lane.name} có cả ba băng ${scene.map(fmt).join(', ')} bp trùng vị trí với mẫu hiện trường.`,
    };
  }
  const extra = lane.bands.filter((b) => !scene.includes(b));
  const missing = scene.filter((b) => !lane.bands.includes(b));
  return {
    ok: false,
    text: `Chưa đúng: ${lane.name} có băng ${extra.map(fmt).join(', ')} bp mà mẫu hiện trường không có, và thiếu băng ${missing.map(fmt).join(', ')} bp.`,
  };
}

/**
 * The lane with this id.
 * @param {string} id
 * @returns {Lane}
 */
export function laneOf(id) {
  const lane = LANES.find((l) => l.id === id);
  if (!lane) throw new Error(`no lane ${id}`);
  return lane;
}
