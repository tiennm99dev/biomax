/**
 * The history of life on a geological time line. Times are in millions of
 * years ago (triệu năm trước), rounded the way school books give them.
 */

import { fmt, formatNumber } from '#lib/core/number-format.js';

/** The age of the Earth, in millions of years. */
export const EARTH_AGE = 4600;

/**
 * @typedef {{ id: string, name: string, from: number, to: number, color: string, life: string }} Era
 */

/** The eras, oldest first; the first band is the Earth before the Archean. @type {Era[]} */
export const ERAS = [
  {
    id: 'hinh-thanh',
    name: 'Trái Đất mới hình thành',
    from: 4600,
    to: 4000,
    color: '#7f1d1d',
    life: 'Chưa có sự sống. Khí quyển nguyên thủy có hơi nước, CO₂, NH₃, CH₄, ... nhưng hầu như chưa có O₂; tiến hóa hóa học bắt đầu tạo ra các chất hữu cơ.',
  },
  {
    id: 'thai-co',
    name: 'Đại Thái cổ',
    from: 4000,
    to: 2500,
    color: '#b45309',
    life: 'Sự sống phát sinh: tế bào sơ khai rồi sinh vật nhân sơ (vi khuẩn, vi khuẩn lam) sống trong nước.',
  },
  {
    id: 'nguyen-sinh',
    name: 'Đại Nguyên sinh',
    from: 2500,
    to: 540,
    color: '#ca8a04',
    life: 'Oxygen tích lũy trong khí quyển; xuất hiện sinh vật nhân thực đơn bào, tảo đa bào, động vật không xương sống đơn giản ở biển.',
  },
  {
    id: 'co-sinh',
    name: 'Đại Cổ sinh',
    from: 540,
    to: 250,
    color: '#15803d',
    life: 'Hầu hết các ngành động vật xuất hiện; cá; thực vật và động vật chiếm lĩnh đất liền; dương xỉ, lưỡng cư, bò sát. Cuối đại có đợt tuyệt chủng hàng loạt lớn nhất.',
  },
  {
    id: 'trung-sinh',
    name: 'Đại Trung sinh',
    from: 250,
    to: 66,
    color: '#0e7490',
    life: 'Bò sát (khủng long) và cây hạt trần chiếm ưu thế; xuất hiện thú, chim và thực vật hạt kín. Cuối đại khủng long tuyệt chủng.',
  },
  {
    id: 'tan-sinh',
    name: 'Đại Tân sinh',
    from: 66,
    to: 0,
    color: '#6d28d9',
    life: 'Thú, chim, côn trùng và thực vật hạt kín phát triển mạnh; xuất hiện loài người.',
  },
];

/**
 * @typedef {{ t: number, text: string, group?: string, short: string }} LifeEvent
 * `group` names a group of organisms that appears at that time.
 */

/** @type {LifeEvent[]} */
export const EVENTS = [
  { t: 4600, short: 'Trái Đất', text: 'Trái Đất hình thành.' },
  {
    t: 3500,
    short: 'Nhân sơ',
    group: 'sinh vật nhân sơ',
    text: 'Hóa thạch cổ nhất của sinh vật nhân sơ (vi khuẩn).',
  },
  {
    t: 2400,
    short: 'O₂',
    text: 'Vi khuẩn lam quang hợp thải oxygen, khí quyển bắt đầu có nhiều O₂.',
  },
  {
    t: 2000,
    short: 'Nhân thực',
    group: 'sinh vật nhân thực đơn bào',
    text: 'Sinh vật nhân thực đơn bào xuất hiện (nhờ cộng sinh nội bào).',
  },
  { t: 1000, short: 'Tảo đa bào', group: 'tảo đa bào', text: 'Sinh vật đa bào đầu tiên: tảo nhỏ.' },
  {
    t: 600,
    short: 'ĐV đa bào',
    group: 'động vật không xương sống',
    text: 'Động vật đa bào không xương sống ở biển.',
  },
  { t: 520, short: 'Cá', group: 'cá', text: 'Động vật có xương sống đầu tiên: cá cổ.' },
  {
    t: 470,
    short: 'TV lên cạn',
    group: 'thực vật trên cạn',
    text: 'Thực vật lên cạn; sau đó là dương xỉ, rừng cây gỗ.',
  },
  {
    t: 370,
    short: 'Lưỡng cư',
    group: 'lưỡng cư',
    text: 'Lưỡng cư: động vật có xương sống lên cạn.',
  },
  {
    t: 310,
    short: 'Bò sát',
    group: 'bò sát',
    text: 'Bò sát xuất hiện; rừng dương xỉ khổng lồ tạo nên than đá.',
  },
  {
    t: 250,
    short: 'Tuyệt chủng',
    text: 'Tuyệt chủng hàng loạt lớn nhất: khoảng 90% loài sinh vật biển biến mất.',
  },
  { t: 230, short: 'Khủng long', group: 'khủng long', text: 'Khủng long xuất hiện.' },
  { t: 200, short: 'Thú', group: 'thú', text: 'Thú đầu tiên (thú nhỏ) xuất hiện.' },
  { t: 150, short: 'Chim', group: 'chim', text: 'Chim xuất hiện (hóa thạch chim cổ).' },
  {
    t: 130,
    short: 'Hạt kín',
    group: 'thực vật hạt kín',
    text: 'Thực vật hạt kín (cây có hoa) xuất hiện.',
  },
  { t: 66, short: 'Hết khủng long', text: 'Khủng long tuyệt chủng; thú và chim phát triển mạnh.' },
  {
    t: 4,
    short: 'Người vượn',
    group: 'người vượn phương Nam',
    text: 'Người vượn phương Nam (Australopithecus) đi bằng hai chân.',
  },
  {
    t: 2.5,
    short: 'H. habilis',
    group: 'người khéo léo',
    text: 'Người khéo léo (Homo habilis) chế tạo công cụ bằng đá.',
  },
  {
    t: 1.8,
    short: 'H. erectus',
    group: 'người đứng thẳng',
    text: 'Người đứng thẳng (Homo erectus) đi thẳng, nhanh nhẹn, sống thành bầy có tổ chức, tỏa ra khỏi châu Phi.',
  },
  {
    t: 0.4,
    short: 'Neanderthal',
    text: 'Người Neanderthal (Homo neanderthalensis) ở châu Âu, Tây Á, dùng lửa thành thạo; về sau tuyệt chủng.',
  },
  {
    t: 0.15,
    short: 'H. sapiens',
    group: 'người tinh khôn',
    text: 'Người tinh khôn (Homo sapiens) xuất hiện ở châu Phi, rồi tỏa đi khắp các châu lục.',
  },
];

/** @typedef {{ id: string, label: string, from: number, step: number }} View */

/** The zoom levels of the time line. @type {View[]} */
export const VIEWS = [
  { id: 'all', label: 'Toàn bộ 4,6 tỉ năm', from: 4600, step: 10 },
  { id: 'co-sinh', label: '600 triệu năm gần đây', from: 600, step: 2 },
  { id: 'nguoi', label: '5 triệu năm gần đây', from: 5, step: 0.05 },
];

/**
 * The era at a time; a boundary belongs to the younger era.
 * @param {number} t millions of years ago
 */
export function eraAt(t) {
  return ERAS.find((e) => t <= e.from && t > e.to) ?? ERAS[ERAS.length - 1];
}

/**
 * The groups of organisms that had appeared by time t.
 * @param {number} t
 */
export function groupsBy(t) {
  return EVENTS.filter((e) => e.group && e.t >= t).map((e) => /** @type {string} */ (e.group));
}

/**
 * The events in a time view, oldest first.
 * @param {View} view
 */
export function eventsIn(view) {
  return EVENTS.filter((e) => e.t <= view.from);
}

/**
 * A time ago in words: '3 500 triệu năm trước', '150 000 năm trước'.
 * @param {number} t millions of years
 */
export function agoText(t) {
  if (t <= 0) return 'ngày nay';
  if (t < 1) return `${fmt(Math.round(t * 1000) * 1000)} năm trước`;
  return `${Number.isInteger(t) ? fmt(t) : formatNumber(t, 2)} triệu năm trước`;
}

/**
 * The same moment if the whole history of the Earth were one day: the
 * Earth forms at 0 giờ and today is 24 giờ.
 * @param {number} t millions of years ago
 */
export function clockOf(t) {
  const total = Math.round(86400 * (1 - t / EARTH_AGE));
  return { h: Math.floor(total / 3600), m: Math.floor((total % 3600) / 60), s: total % 60 };
}

/**
 * The 24-hour clock as text: '23 giờ 59 phút 57 giây'.
 * @param {number} t
 */
export function clockText(t) {
  const { h, m, s } = clockOf(t);
  return `${h} giờ ${m} phút ${s} giây`;
}
