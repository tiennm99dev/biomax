/**
 * The growth log of the practical lesson: the learner types the height of a
 * bean seedling for each day, and the log checks the entries, finds the daily
 * increase, the day the plant grew fastest and the average growth per day.
 */
import { readNumber } from '#lib/core/decimal.js';
import { formatNumber } from '#lib/core/number-format.js';

export const DAYS = 7;

/** A sample log from a mung bean seedling, heights in cm, typed the Vietnamese way. */
export const SAMPLE = ['0,5', '1,8', '3,5', '5,6', '7,4', '9,0', '10,2'];

/**
 * A typed height in cm: a number from 0 to 200, `undefined` when the cell is
 * empty, `null` when it cannot be read.
 * @param {string} text
 * @returns {number | null | undefined}
 */
export function readHeight(text) {
  if (text.trim() === '') return undefined;
  const v = readNumber(text);
  if (v === null || v < 0 || v > 200) return null;
  return v;
}

/**
 * The heights of the first days typed in a row, stopping at the first empty
 * or unreadable cell.
 * @param {string[]} texts
 * @returns {number[]}
 */
export function leadingHeights(texts) {
  /** @type {number[]} */
  const out = [];
  for (const t of texts) {
    const v = readHeight(t);
    if (v === undefined || v === null) break;
    out.push(v);
  }
  return out;
}

/**
 * The analysis shown under the chart.
 * @param {number[]} heights day 1, day 2, ... in cm
 */
export function analyse(heights) {
  const n = heights.length;
  if (n < 2) {
    return {
      ok: false,
      increases: [],
      average: 0,
      fastest: -1,
      text: 'Nhập chiều cao của ít nhất 2 ngày liền nhau, bắt đầu từ ngày 1, để vẽ đồ thị.',
    };
  }
  /** Rounded to tenths so typed decimals compare exactly. */
  const increases = heights.slice(1).map((h, i) => Math.round((h - heights[i]) * 10) / 10);
  const average = (heights[n - 1] - heights[0]) / (n - 1);
  let fastest = 0;
  increases.forEach((d, i) => {
    if (d > increases[fastest]) fastest = i;
  });
  const drop = increases.findIndex((d) => d < 0);
  if (drop >= 0) {
    return {
      ok: false,
      increases,
      average,
      fastest,
      text: `Ngày ${drop + 2} thấp hơn ngày ${drop + 1}: cây không thể thấp đi. Hãy kiểm tra lại cách đo (đo từ mặt đất đến đỉnh ngọn) hoặc xem ngọn cây có bị gãy không.`,
    };
  }
  if (increases.every((d) => d === 0)) {
    return {
      ok: false,
      increases,
      average,
      fastest,
      text: 'Chiều cao cây chưa thay đổi qua các ngày: chưa thấy cây sinh trưởng. Hãy tiếp tục chăm sóc, đo thêm vài ngày và kiểm tra xem hạt đã nảy mầm chưa.',
    };
  }
  const lead = increases.every((d) => d > 0)
    ? 'Cây cao thêm mỗi ngày: cây có sinh trưởng.'
    : 'Chiều cao cây tăng dần qua các ngày (có ngày không đổi): cây có sinh trưởng.';
  return {
    ok: true,
    increases,
    average,
    fastest,
    text: `${lead} Từ ngày 1 đến ngày ${n}, trung bình mỗi ngày cây cao thêm khoảng ${formatNumber(average, 1)} cm; tăng nhiều nhất từ ngày ${fastest + 1} sang ngày ${fastest + 2} (${formatNumber(increases[fastest], 1)} cm).`,
  };
}
