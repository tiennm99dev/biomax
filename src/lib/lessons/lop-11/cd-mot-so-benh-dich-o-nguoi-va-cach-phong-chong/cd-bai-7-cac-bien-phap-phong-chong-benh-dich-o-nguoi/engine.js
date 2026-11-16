/**
 * The prevention simulator of the lesson: pick a disease, switch prevention
 * measures on and off, set the vaccine coverage, and compare the epidemic
 * curve with the one where nothing is done. A measure lowers how many people
 * a sick person infects per day only on the routes it blocks (a face mask
 * does nothing against mosquitoes); prompt treatment shortens the time a
 * sick person stays infectious; vaccination makes part of the community
 * immune before the outbreak. Teaching values, not data of real outbreaks.
 */
import { formatNumber, tidy } from '#lib/core/number-format.js';
import { herdShare, reproduction, simulate } from '../_shared/epidemic.js';

/**
 * @typedef {'ho-hap' | 'tieu-hoa' | 'muoi' | 'mau'} RouteId
 * @typedef {{
 *   id: string, name: string, route: RouteId, routeName: string,
 *   beta: number, days: number, vaccine: string | null,
 * }} Disease
 * @typedef {{ id: string, name: string, beta: Partial<Record<RouteId, number>>, days?: number, why: string }} Measure
 */

/** @type {Disease[]} */
export const DISEASES = [
  {
    id: 'cum',
    name: 'Cúm',
    route: 'ho-hap',
    routeName: 'đường hô hấp',
    beta: 0.5,
    days: 5,
    vaccine: 'Vắc-xin cúm được tiêm nhắc lại hằng năm vì virus cúm biến chủng nhanh.',
  },
  {
    id: 'ta',
    name: 'Tả',
    route: 'tieu-hoa',
    routeName: 'đường tiêu hoá',
    beta: 0.3,
    days: 7,
    vaccine: 'Vắc-xin tả dạng uống được dùng ở vùng có nguy cơ dịch.',
  },
  {
    id: 'sxh',
    name: 'Sốt xuất huyết',
    route: 'muoi',
    routeName: 'đường máu, qua muỗi vằn đốt',
    beta: 0.36,
    days: 7,
    vaccine: null,
  },
  {
    id: 'vgb',
    name: 'Viêm gan B',
    route: 'mau',
    routeName: 'đường máu, qua kim tiêm, truyền máu, mẹ sang con',
    beta: 0.13,
    days: 14,
    vaccine: 'Vắc-xin viêm gan B có trong chương trình tiêm chủng mở rộng, tiêm ngay sau sinh.',
  },
];

/** @type {Measure[]} */
export const MEASURES = [
  {
    id: 'khau-trang',
    name: 'Đeo khẩu trang, hạn chế tụ tập',
    beta: { 'ho-hap': 0.55 },
    why: 'Khẩu trang và khoảng cách chặn giọt bắn từ người bệnh tới người lành.',
  },
  {
    id: 'rua-tay',
    name: 'Rửa tay bằng xà phòng',
    beta: { 'ho-hap': 0.85, 'tieu-hoa': 0.75 },
    why: 'Rửa tay loại bỏ mầm bệnh dính trên tay trước khi tay chạm vào mũi, miệng hay thức ăn.',
  },
  {
    id: 'an-chin',
    name: 'Ăn chín, uống sôi',
    beta: { 'tieu-hoa': 0.5 },
    why: 'Nhiệt độ cao diệt mầm bệnh trong thức ăn, nước uống.',
  },
  {
    id: 've-sinh',
    name: 'Diệt ruồi, gián, chuột; xử lí rác, phân',
    beta: { 'tieu-hoa': 0.7 },
    why: 'Ruồi, gián, chuột mang mầm bệnh từ phân, rác tới thức ăn; xử lí phân, rác giữ sạch nguồn nước.',
  },
  {
    id: 'diet-muoi',
    name: 'Diệt muỗi, bọ gậy; ngủ màn',
    beta: { muoi: 0.35 },
    why: 'Không có muỗi, hoặc muỗi không đốt được người, thì virus Dengue không truyền được.',
  },
  {
    id: 'an-toan-mau',
    name: 'Truyền máu an toàn, không dùng chung kim tiêm',
    beta: { mau: 0.4 },
    why: 'Máu được kiểm tra và dụng cụ dùng riêng thì mầm bệnh trong máu không sang người lành.',
  },
  {
    id: 'cach-li',
    name: 'Phát hiện sớm, cách li người bệnh',
    beta: { 'ho-hap': 0.6, 'tieu-hoa': 0.75, muoi: 0.8 },
    why: 'Người bệnh được cách li ít tiếp xúc với người lành; chất thải, đồ dùng của họ được khử trùng; người bệnh sốt xuất huyết nằm màn để muỗi không đốt.',
  },
  {
    id: 'dieu-tri',
    name: 'Điều trị kịp thời',
    beta: {},
    days: 0.7,
    why: 'Điều trị sớm giúp người bệnh mau khỏi, rút ngắn thời gian mang và thải mầm bệnh.',
  },
];

/** The vaccine coverage the slider can reach, in percent. */
export const MAX_COVERAGE = 90;

/** @param {string} id */
export const diseaseOf = (id) => DISEASES.find((d) => d.id === id) ?? DISEASES[0];

/**
 * Daily infections per sick person and the infectious period with the chosen
 * measures on.
 * @param {string} diseaseId @param {string[]} on
 */
export function withMeasures(diseaseId, on) {
  const d = diseaseOf(diseaseId);
  let beta = d.beta;
  let days = d.days;
  for (const m of MEASURES) {
    if (!on.includes(m.id)) continue;
    beta *= m.beta[d.route] ?? 1;
    days *= m.days ?? 1;
  }
  return { beta: tidy(beta, 6), days: tidy(days, 6) };
}

/**
 * The outbreak with the chosen measures and vaccine coverage (in percent,
 * ignored when the disease has no vaccine).
 * @param {string} diseaseId @param {string[]} on @param {number} coverage
 */
export function prevented(diseaseId, on, coverage) {
  const d = diseaseOf(diseaseId);
  const vaccinated = d.vaccine ? coverage / 100 : 0;
  return simulate({ ...withMeasures(diseaseId, on), vaccinated });
}

/** @param {string} diseaseId */
export const unchecked = (diseaseId) =>
  simulate({ beta: diseaseOf(diseaseId).beta, days: diseaseOf(diseaseId).days });

/**
 * The chosen measures that do nothing against this disease.
 * @param {string} diseaseId @param {string[]} on
 */
export function idleMeasures(diseaseId, on) {
  const d = diseaseOf(diseaseId);
  return MEASURES.filter((m) => on.includes(m.id) && !m.days && !(d.route in m.beta));
}

/**
 * The vaccine coverage, in whole percent rounded up, above which the
 * outbreak no longer grows with the chosen measures on.
 * @param {string} diseaseId @param {string[]} on
 */
export function coverageNeeded(diseaseId, on) {
  const { beta, days } = withMeasures(diseaseId, on);
  return Math.ceil(tidy(herdShare(reproduction(beta, days)) * 100, 6));
}

/**
 * Each sick person's average number of new cases once vaccination counts:
 * R0 with the measures, times the share not vaccinated.
 * @param {string} diseaseId @param {string[]} on @param {number} coverage
 */
export function effectiveR(diseaseId, on, coverage) {
  const d = diseaseOf(diseaseId);
  const { beta, days } = withMeasures(diseaseId, on);
  const v = d.vaccine ? coverage / 100 : 0;
  return tidy(reproduction(beta, days) * (1 - v), 6);
}

/**
 * The verdict comparing the prevented outbreak with the unchecked one.
 * @param {import('../_shared/epidemic.js').Run} run
 * @param {import('../_shared/epidemic.js').Run} base
 * @param {number} r effective reproduction number
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function preventionVerdict(run, base, r) {
  const rText = formatNumber(r, 1);
  if (r <= 1) {
    return {
      tone: 'ok',
      text: `Mỗi người bệnh chỉ còn lây cho ${rText} người: dịch bị chặn, cả đợt chỉ có ${formatNumber(run.total)} người mắc thay vì ${formatNumber(base.total)} người.`,
    };
  }
  const cut = Math.round((1 - run.peak / base.peak) * 100);
  if (cut < 5) {
    return {
      tone: 'warn',
      text: `Mỗi người bệnh vẫn lây cho ${rText} người và đỉnh dịch gần như không đổi. Hãy chọn biện pháp cắt đúng con đường lây của bệnh này.`,
    };
  }
  return {
    tone: 'info',
    text: `Mỗi người bệnh lây cho ${rText} người: dịch vẫn lan nhưng đỉnh dịch thấp hơn ${cut}% (${formatNumber(run.peak)} thay vì ${formatNumber(base.peak)} người cùng mắc), giảm tải cho bệnh viện. Thêm biện pháp để đưa con số này xuống dưới 1.`,
  };
}
