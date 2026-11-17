/**
 * A green city planning model. A city of 50 km² with 500 000 people sets the
 * share of its land kept as trees and water, the share of trips made by
 * public transport and the share of household waste sorted and recycled.
 * Four scores from 0 to 100 (green space, air, waste, land for housing and
 * jobs) average into a quality-of-life index. The coefficients are made up
 * for teaching: they show the direction of each effect and that too much
 * green land squeezes housing, so a good plan balances nature and people.
 * No DOM here, so all of it is tested in Node.
 */
import { formatNumber } from '#lib/core/number-format.js';

/** Area of the city, m². */
export const AREA_M2 = 50_000_000;
/** People living in the city. */
export const PEOPLE = 500_000;
/** Green share at which the green score is full, %. */
export const GREEN_FULL = 25;
/** Green share above which land for housing and jobs runs short, %. */
export const GREEN_LIMIT = 30;
/** Recycled share at which the waste score is full, %. */
export const RECYCLE_FULL = 80;

/**
 * @typedef {{ green: number, transit: number, recycle: number }} Plan
 * @typedef {{ id: 'xanh' | 'khong-khi' | 'rac' | 'nha-o', label: string, value: number }} Score
 */

/** The city as it is before planning. */
export const NOW = { green: 10, transit: 10, recycle: 20 };

/** @param {number} v */
const clamp100 = (v) => Math.max(0, Math.min(100, v));

/**
 * Green space per person, m²/người.
 * @param {number} green share of land, %
 */
export function greenPerPerson(green) {
  return ((green / 100) * AREA_M2) / PEOPLE;
}

/**
 * How much hotter the city centre is than the countryside in summer, °C:
 * trees and water cool the city (urban heat island).
 * @param {number} green share of land, %
 */
export function heatIsland(green) {
  return Math.max(0, 4 - 0.05 * green);
}

/**
 * The four scores of a plan.
 * @param {Plan} plan
 * @returns {Score[]}
 */
export function scores(plan) {
  const { green, transit, recycle } = plan;
  return [
    {
      id: 'xanh',
      label: 'Cây xanh, mặt nước',
      value: clamp100(Math.round((green * 100) / GREEN_FULL)),
    },
    {
      id: 'khong-khi',
      label: 'Không khí sạch',
      value: clamp100(Math.round(20 + transit + 0.5 * green)),
    },
    {
      id: 'rac',
      label: 'Xử lí rác thải',
      value: clamp100(Math.round((recycle * 100) / RECYCLE_FULL)),
    },
    {
      id: 'nha-o',
      label: 'Đất ở, việc làm',
      value: green <= GREEN_LIMIT ? 100 : clamp100(100 - 5 * (green - GREEN_LIMIT)),
    },
  ];
}

/**
 * The quality-of-life index: the mean of the four scores, rounded.
 * @param {Plan} plan
 */
export function lifeIndex(plan) {
  const s = scores(plan);
  return Math.round(s.reduce((sum, x) => sum + x.value, 0) / s.length);
}

/**
 * The verdict on a plan: what to improve next.
 * @param {Plan} plan
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function advice(plan) {
  const index = lifeIndex(plan);
  const s = scores(plan);
  const weakest = s.reduce((a, b) => (b.value < a.value ? b : a));
  if (plan.green > GREEN_LIMIT) {
    return {
      tone: 'warn',
      text: `Cây xanh chiếm ${formatNumber(plan.green)}% diện tích: không khí mát, sạch nhưng thiếu đất ở, trường học, nơi làm việc. Đô thị sinh thái phải cân bằng giữa tự nhiên và nhu cầu của con người.`,
    };
  }
  if (index >= 90) {
    return {
      tone: 'ok',
      text: `Chỉ số chất lượng sống ${index}/100: một đô thị xanh, hài hoà giữa con người và tự nhiên.`,
    };
  }
  const tip = {
    xanh: 'tăng diện tích công viên, hồ nước, cây xanh đường phố',
    'khong-khi': 'phát triển xe buýt, tàu điện, làn xe đạp để giảm khí thải',
    rac: 'phân loại rác tại nguồn, tái chế và ủ phân hữu cơ',
    'nha-o': 'giảm bớt đất cây xanh để có chỗ cho nhà ở',
  }[weakest.id];
  return {
    tone: 'info',
    text: `Chỉ số chất lượng sống ${index}/100. Điểm yếu nhất: ${weakest.label.toLowerCase()} (${weakest.value}/100); hãy ${tip}.`,
  };
}

/**
 * A plan in one sentence for screen readers and the summary line.
 * @param {Plan} plan
 */
export function planText(plan) {
  return `Cây xanh, mặt nước ${formatNumber(plan.green)}% diện tích, tức ${formatNumber(greenPerPerson(plan.green), 1)} m²/người; trung tâm nóng hơn ngoại ô khoảng ${formatNumber(heatIsland(plan.green), 1)} °C.`;
}
