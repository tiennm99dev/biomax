/**
 * Age-pyramid scenarios for the population lesson: each describes a real
 * situation and gives the sizes of the three ecological age groups (trước
 * sinh sản, sinh sản, sau sinh sản). The shape follows `pyramidShape` of the
 * domain population model: more young than breeders is developing, about
 * as many is stable, fewer is declining.
 */
import { pyramidShape } from '#lib/domain/population.js';

/** @typedef {import('#lib/domain/population.js').PyramidShape} PyramidShape */
/**
 * @typedef {{
 *   id: string;
 *   title: string;
 *   text: string;
 *   groups: { pre: number, reproductive: number, post: number };
 *   why: string;
 * }} Scenario
 */

/** @type {Scenario[]} */
export const SCENARIOS = [
  {
    id: 'chuot',
    title: 'Chuột đồng',
    text: 'Sau vụ lúa bội thu, thức ăn dồi dào, chuột đồng sinh sản liên tục; trong quần thể có rất nhiều chuột non.',
    groups: { pre: 55, reproductive: 35, post: 10 },
    why: 'Nhóm trước sinh sản đông hơn hẳn nhóm sinh sản: đáy tháp rộng, quần thể đang tăng số lượng.',
  },
  {
    id: 'huou',
    title: 'Hươu',
    text: 'Quần thể hươu được bảo vệ lâu năm, nguồn sống ổn định; số con sinh ra xấp xỉ số con chết đi.',
    groups: { pre: 38, reproductive: 40, post: 22 },
    why: 'Nhóm trước sinh sản xấp xỉ nhóm sinh sản: tháp ổn định, số lượng ít thay đổi.',
  },
  {
    id: 'ca',
    title: 'Cá trong hồ',
    text: 'Người dân dùng lưới mắt nhỏ, xung điện đánh bắt cả cá con, cá bố mẹ còn lại đẻ ít.',
    groups: { pre: 20, reproductive: 50, post: 30 },
    why: 'Cá con bị bắt nên nhóm trước sinh sản ít hơn nhóm sinh sản: đáy tháp hẹp, quần thể suy thoái.',
  },
];

export const SHAPE_CHOICES = /** @type {const} */ ([
  { value: 'developing', label: 'Phát triển' },
  { value: 'stable', label: 'Ổn định' },
  { value: 'declining', label: 'Suy thoái' },
]);

/**
 * The shape of a scenario's pyramid.
 * @param {Scenario} s
 * @returns {PyramidShape}
 */
export const shapeOf = (s) => pyramidShape(s.groups);

/**
 * What the shape means for the population's future size.
 * @param {PyramidShape} shape
 */
export function forecast(shape) {
  if (shape === 'developing') return 'Số lượng cá thể sẽ tăng lên trong thời gian tới.';
  if (shape === 'stable') return 'Số lượng cá thể sẽ giữ gần như ổn định.';
  return 'Số lượng cá thể sẽ giảm dần; cần có biện pháp bảo vệ quần thể.';
}

/**
 * Density of a population: individuals per unit of area or volume.
 * @param {number} n
 * @param {number} space
 */
export const density = (n, space) => n / space;
