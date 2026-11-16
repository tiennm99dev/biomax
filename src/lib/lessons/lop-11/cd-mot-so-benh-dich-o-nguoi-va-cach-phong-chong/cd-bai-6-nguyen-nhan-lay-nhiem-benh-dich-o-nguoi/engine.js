/**
 * The outbreak simulator of the lesson: pick a route of transmission, switch
 * on the conditions that favour an outbreak and watch the SIR curves. Each
 * condition multiplies how many people a sick person infects per day, but
 * only on the routes it acts on (stagnant water breeds mosquitoes, it does not
 * spread HIV); poor access to health care keeps the sick infectious longer on
 * every route. The figures are teaching values chosen so that, with no
 * favourable condition, only the respiratory disease grows into an outbreak.
 */
import { formatNumber, tidy } from '#lib/core/number-format.js';
import { POPULATION, simulate } from '../_shared/epidemic.js';

/**
 * @typedef {'ho-hap' | 'tieu-hoa' | 'muoi' | 'mau'} RouteId
 * @typedef {{ id: RouteId, name: string, example: string, beta: number, days: number, how: string }} Route
 * @typedef {{ id: string, name: string, beta: Partial<Record<RouteId, number>>, days?: number, why: string }} Factor
 */

/** @type {Route[]} */
export const ROUTES = [
  {
    id: 'ho-hap',
    name: 'Hô hấp',
    example: 'cúm',
    beta: 0.32,
    days: 5,
    how: 'Người bệnh ho, hắt hơi, nói chuyện làm bắn ra giọt bắn chứa virus; người lành hít phải, hoặc chạm tay vào đồ vật dính mầm bệnh rồi đưa lên mắt, mũi, miệng.',
  },
  {
    id: 'tieu-hoa',
    name: 'Tiêu hoá',
    example: 'tả',
    beta: 0.13,
    days: 7,
    how: 'Vi khuẩn tả trong phân người bệnh làm nhiễm bẩn nước, thức ăn; ruồi, gián, dụng cụ chế biến mang mầm bệnh vào thức ăn; người lành ăn, uống phải.',
  },
  {
    id: 'muoi',
    name: 'Máu: qua muỗi',
    example: 'sốt xuất huyết',
    beta: 0.13,
    days: 7,
    how: 'Muỗi vằn cái hút máu người bệnh, virus Dengue nhân lên trong muỗi; muỗi đốt người lành và truyền virus vào máu.',
  },
  {
    id: 'mau',
    name: 'Máu: kim tiêm, truyền máu',
    example: 'viêm gan B',
    beta: 0.06,
    days: 14,
    how: 'Mầm bệnh trong máu người bệnh đi vào máu người lành khi truyền máu chưa kiểm tra, dùng chung kim tiêm, dụng cụ xăm, hoặc từ mẹ sang con.',
  },
];

/** @type {Factor[]} */
export const FACTORS = [
  {
    id: 'giao-mua',
    name: 'Thời tiết nóng ẩm, giao mùa',
    beta: { 'ho-hap': 1.25, 'tieu-hoa': 1.4, muoi: 1.6 },
    why: 'Nóng ẩm giúp vi sinh vật sinh sản mạnh và muỗi phát triển; lúc giao mùa sức đề kháng của nhiều người giảm.',
  },
  {
    id: 've-sinh',
    name: 'Vệ sinh môi trường kém, nước đọng',
    beta: { 'tieu-hoa': 1.6, muoi: 1.5 },
    why: 'Rác thải, phân, nước bẩn làm mầm bệnh phát tán; vật chứa nước đọng là nơi muỗi đẻ trứng.',
  },
  {
    id: 'dong-nguoi',
    name: 'Dân cư đông đúc, tụ tập đông người',
    beta: { 'ho-hap': 1.6, 'tieu-hoa': 1.2, muoi: 1.2 },
    why: 'Người sống, làm việc sát nhau thì giọt bắn dễ tới người khác, một con muỗi đốt được nhiều người.',
  },
  {
    id: 'an-song',
    name: 'Ăn sống, uống nước chưa đun sôi',
    beta: { 'tieu-hoa': 1.8 },
    why: 'Mầm bệnh trong thức ăn, nước uống không được diệt bằng nhiệt nên vào thẳng đường tiêu hoá.',
  },
  {
    id: 'kim-tiem',
    name: 'Dùng chung kim tiêm, truyền máu chưa kiểm tra',
    beta: { mau: 2.4 },
    why: 'Máu có mầm bệnh đi thẳng vào máu người lành.',
  },
  {
    id: 'y-te',
    name: 'Kinh tế kém phát triển, khó tiếp cận y tế',
    beta: {},
    days: 1.4,
    why: 'Người bệnh được phát hiện, cách li và điều trị muộn nên lây bệnh trong thời gian dài hơn, trên mọi đường lây.',
  },
];

/** @param {string} id */
export const routeOf = (id) => ROUTES.find((r) => r.id === id) ?? ROUTES[0];

/**
 * The daily infections per sick person and the infectious period on a route
 * once the chosen conditions are on.
 * @param {string} routeId @param {string[]} on ids of the chosen factors
 */
export function conditions(routeId, on) {
  const route = routeOf(routeId);
  let beta = route.beta;
  let days = route.days;
  for (const f of FACTORS) {
    if (!on.includes(f.id)) continue;
    beta *= f.beta[route.id] ?? 1;
    days *= f.days ?? 1;
  }
  return { beta: tidy(beta, 6), days: tidy(days, 6) };
}

/**
 * The outbreak on a route with the chosen conditions.
 * @param {string} routeId @param {string[]} on
 */
export function outbreak(routeId, on) {
  return simulate(conditions(routeId, on));
}

/**
 * The chosen factors that do not change this route at all.
 * @param {string} routeId @param {string[]} on
 */
export function idleFactors(routeId, on) {
  const route = routeOf(routeId);
  return FACTORS.filter((f) => on.includes(f.id) && !f.days && !(route.id in f.beta));
}

/**
 * What the run means, in one sentence.
 * @param {import('../_shared/epidemic.js').Run} run
 * @returns {{ tone: 'ok' | 'warn', text: string }}
 */
export function runVerdict(run) {
  const r0 = formatNumber(run.r0, 1);
  if (run.r0 <= 1) {
    return {
      tone: 'ok',
      text: `Mỗi người bệnh lây cho trung bình ${r0} người, chưa đến 1 người: bệnh chỉ xuất hiện lẻ tẻ rồi tắt dần, không thành dịch.`,
    };
  }
  const share = formatNumber((run.total / POPULATION) * 100, 0);
  return {
    tone: 'warn',
    text: `Mỗi người bệnh lây cho trung bình ${r0} người: dịch bùng phát. Đỉnh dịch vào ngày ${run.peakDay} với ${formatNumber(run.peak)} người cùng mắc; cả đợt có ${formatNumber(run.total)} người mắc (khoảng ${share}% cộng đồng).`,
  };
}
