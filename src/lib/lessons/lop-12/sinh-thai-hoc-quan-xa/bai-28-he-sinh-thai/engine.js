/**
 * Building a small aquatic ecosystem (hệ sinh thái bể cá) from its parts.
 * An ecosystem is a community together with its habitat: abiotic parts
 * (light, water, dissolved gases, mineral salts, dead organic matter) and
 * biotic parts in three roles: producers, consumers and decomposers.
 *
 * The check names what is missing for the system to run on its own: light
 * as the energy source, water, CO₂ and minerals for photosynthesis,
 * producers to make organic matter, and decomposers to return the
 * minerals and close the cycle of matter. Consumers are not required for
 * the cycle but make it a full trophic structure.
 */

/** @typedef {'vo-sinh' | 'san-xuat' | 'tieu-thu' | 'phan-giai'} Group */
/** @typedef {{ id: string, name: string, group: Group }} Part */

export const GROUP_NAMES = /** @type {Record<Group, string>} */ ({
  'vo-sinh': 'Thành phần vô sinh',
  'san-xuat': 'Sinh vật sản xuất',
  'tieu-thu': 'Sinh vật tiêu thụ',
  'phan-giai': 'Sinh vật phân giải',
});

/** @type {Part[]} */
export const PARTS = [
  { id: 'anh-sang', name: 'Ánh sáng', group: 'vo-sinh' },
  { id: 'nuoc', name: 'Nước', group: 'vo-sinh' },
  { id: 'khi', name: 'CO₂, O₂ hoà tan', group: 'vo-sinh' },
  { id: 'khoang', name: 'Muối khoáng', group: 'vo-sinh' },
  { id: 'mun', name: 'Mùn bã hữu cơ', group: 'vo-sinh' },
  { id: 'rong', name: 'Rong đuôi chó', group: 'san-xuat' },
  { id: 'tao', name: 'Tảo lục', group: 'san-xuat' },
  { id: 'oc', name: 'Ốc', group: 'tieu-thu' },
  { id: 'ca', name: 'Cá bảy màu', group: 'tieu-thu' },
  { id: 'vi-khuan', name: 'Vi khuẩn phân giải', group: 'phan-giai' },
];

/** Abiotic parts without which the producers cannot photosynthesise. */
const NEEDED = ['anh-sang', 'nuoc', 'khi', 'khoang'];

/**
 * The selected parts sorted into the four groups, in `PARTS` order.
 * @param {string[]} chosen
 */
export function grouped(chosen) {
  /** @type {Record<Group, Part[]>} */
  const out = { 'vo-sinh': [], 'san-xuat': [], 'tieu-thu': [], 'phan-giai': [] };
  for (const p of PARTS) if (chosen.includes(p.id)) out[p.group].push(p);
  return out;
}

/**
 * Whether the selection works as a self-sustaining ecosystem, and why not.
 * `level` is 'ok' when every needed part is there, 'partial' when it runs
 * but lacks consumers, 'broken' otherwise.
 * @param {string[]} chosen
 * @returns {{ level: 'ok' | 'partial' | 'broken', text: string }}
 */
export function judge(chosen) {
  const g = grouped(chosen);
  const name = (/** @type {string} */ id) => PARTS.find((p) => p.id === id)?.name ?? id;
  if (chosen.length === 0) {
    return {
      level: 'broken',
      text: 'Bể đang trống. Hãy thêm thành phần vô sinh (sinh cảnh) và các nhóm sinh vật (quần xã).',
    };
  }
  if (!chosen.includes('nuoc')) {
    return {
      level: 'broken',
      text: 'Chưa có nước: đây là môi trường sống của mọi sinh vật trong bể.',
    };
  }
  if (!chosen.includes('anh-sang')) {
    return {
      level: 'broken',
      text: 'Thiếu ánh sáng: sinh vật sản xuất không quang hợp được, hệ không có nguồn năng lượng đầu vào.',
    };
  }
  if (g['san-xuat'].length === 0) {
    return {
      level: 'broken',
      text:
        g['tieu-thu'].length > 0
          ? 'Chưa có sinh vật sản xuất: không có chất hữu cơ mới được tạo ra, sinh vật tiêu thụ sẽ hết thức ăn.'
          : 'Chưa có sinh vật sản xuất: không có sinh vật nào chuyển năng lượng ánh sáng thành năng lượng hoá học trong chất hữu cơ.',
    };
  }
  const lacking = NEEDED.filter((id) => !chosen.includes(id));
  if (lacking.length) {
    return {
      level: 'broken',
      text: `Thiếu ${lacking.map((id) => name(id).toLowerCase()).join(', ')}: nguyên liệu để sinh vật sản xuất quang hợp, tổng hợp chất hữu cơ.`,
    };
  }
  if (g['phan-giai'].length === 0) {
    return {
      level: 'broken',
      text: 'Chưa có sinh vật phân giải: xác sinh vật và chất thải tích tụ, chất khoáng không được trả lại môi trường, vật chất không tuần hoàn.',
    };
  }
  if (g['tieu-thu'].length === 0) {
    return {
      level: 'partial',
      text: 'Bể đã tự duy trì được: có sinh cảnh, sinh vật sản xuất và sinh vật phân giải, vật chất được tuần hoàn. Thêm sinh vật tiêu thụ để có đủ ba nhóm trong cấu trúc dinh dưỡng.',
    };
  }
  return {
    level: 'ok',
    text: 'Hệ sinh thái hoàn chỉnh: sinh cảnh (thành phần vô sinh) và quần xã gồm sinh vật sản xuất, tiêu thụ, phân giải. Năng lượng ánh sáng đi vào qua quang hợp, vật chất được trao đổi qua lại giữa quần xã và sinh cảnh.',
  };
}
