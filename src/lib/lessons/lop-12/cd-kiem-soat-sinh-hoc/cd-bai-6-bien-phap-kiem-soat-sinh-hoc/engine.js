/**
 * The biological control measures of the lesson, each with the group it
 * belongs to, how it works and the pest it suits, and the pests of the
 * matching game. A wrong match is explained by what the chosen measure is
 * really for. No DOM here, so all of it is tested in Node.
 */
import { shuffled } from '#lib/core/card-sorter.js';
import { GROUPS, groupLabel } from '../_shared/groups.js';
import { lowerFirst } from '#lib/core/sentence-case.js';

export { GROUPS };

/**
 * @typedef {import('../_shared/groups.js').Group} Group
 * @typedef {{ id: string, name: string, group: Group, how: string, suits: string }} Method
 * @typedef {{ id: string, name: string, harm: string, method: string }} Pest
 */

/** @type {Method[]} */
export const METHODS = [
  {
    id: 'ong-mat-do',
    name: 'Thả ong mắt đỏ',
    group: 'thien-dich',
    how: 'Ong mắt đỏ (Trichogramma) đẻ trứng vào trứng sâu; ấu trùng ong ăn chất bên trong nên trứng sâu không nở.',
    suits: 'trứng của sâu bộ cánh vảy như sâu đục thân, sâu cuốn lá',
  },
  {
    id: 'bo-rua',
    name: 'Thả bọ rùa',
    group: 'thien-dich',
    how: 'Cả ấu trùng và con trưởng thành của bọ rùa ăn rệp, mỗi ngày một con ăn được hàng chục con rệp.',
    suits: 'các loài rệp hút nhựa cây',
  },
  {
    id: 'kien-vang',
    name: 'Nuôi kiến vàng trong vườn',
    group: 'thien-dich',
    how: 'Kiến vàng làm tổ trên tán cây, tuần tra và bắt sâu, bọ xít; bắc cầu tre nối các cây để kiến đi lại.',
    suits: 'sâu, bọ xít hại cây ăn quả có múi',
  },
  {
    id: 'bt',
    name: 'Phun chế phẩm Bt',
    group: 'che-pham',
    how: 'Vi khuẩn Bacillus thuringiensis tạo tinh thể protein độc; sâu non ăn phải thì ruột bị phá huỷ và chết.',
    suits: 'sâu non bộ cánh vảy ăn lá như sâu tơ, sâu xanh',
  },
  {
    id: 'nam-xanh',
    name: 'Phun chế phẩm nấm xanh',
    group: 'che-pham',
    how: 'Bào tử nấm Metarhizium bám lên vỏ cơ thể côn trùng, nảy mầm, mọc sợi nấm xuyên vào trong làm côn trùng chết.',
    suits: 'rầy, bọ cánh cứng',
  },
  {
    id: 'trichoderma',
    name: 'Bón nấm Trichoderma trộn phân hữu cơ',
    group: 'che-pham',
    how: 'Nấm Trichoderma sống ở vùng rễ, cạnh tranh và tiết chất ức chế, kí sinh trên sợi nấm gây bệnh.',
    suits: 'nấm gây bệnh trong đất, gây thối rễ',
  },
  {
    id: 'bat-duc',
    name: 'Thả con đực bất dục',
    group: 'di-truyen',
    how: 'Con đực được chiếu xạ cho bất dục rồi thả ra; con cái giao phối với chúng đẻ trứng không nở.',
    suits: 'côn trùng mà con cái chỉ giao phối một hoặc ít lần, như ruồi đục quả',
  },
  {
    id: 'wolbachia',
    name: 'Thả muỗi mang vi khuẩn Wolbachia',
    group: 'di-truyen',
    how: 'Vi khuẩn Wolbachia sống trong tế bào muỗi, được truyền từ mẹ sang con và làm virus khó nhân lên trong muỗi.',
    suits: 'muỗi truyền virus gây bệnh',
  },
];

/** @type {Pest[]} */
export const PESTS = [
  {
    id: 'sau-duc-than',
    name: 'Sâu đục thân hại lúa',
    harm: 'Sâu non đục vào thân làm chết nõn, bông lúa bạc trắng.',
    method: 'ong-mat-do',
  },
  {
    id: 'rep-muoi',
    name: 'Rệp muội hại rau, đậu',
    harm: 'Rệp hút nhựa làm lá xoăn, cây còi cọc.',
    method: 'bo-rua',
  },
  {
    id: 'bo-xit-cam',
    name: 'Bọ xít, sâu hại cam, quýt, bưởi',
    harm: 'Chích hút quả non, ăn lá làm rụng quả, giảm năng suất.',
    method: 'kien-vang',
  },
  {
    id: 'sau-to',
    name: 'Sâu tơ hại bắp cải',
    harm: 'Sâu non ăn thủng lá, rất nhanh kháng thuốc hoá học.',
    method: 'bt',
  },
  {
    id: 'ray-nau',
    name: 'Rầy nâu hại lúa',
    harm: 'Rầy chích hút gốc lúa, mật độ cao làm lúa cháy rầy.',
    method: 'nam-xanh',
  },
  {
    id: 'thoi-re',
    name: 'Nấm gây thối rễ hồ tiêu',
    harm: 'Nấm trong đất xâm nhập rễ, cây vàng lá rồi chết nhanh.',
    method: 'trichoderma',
  },
  {
    id: 'ruoi-duc-qua',
    name: 'Ruồi đục quả hại xoài, ổi',
    harm: 'Ruồi cái đẻ trứng vào quả, giòi ăn thịt quả làm quả thối, rụng.',
    method: 'bat-duc',
  },
  {
    id: 'muoi-aedes',
    name: 'Muỗi Aedes truyền bệnh sốt xuất huyết',
    harm: 'Muỗi đốt người bệnh rồi truyền virus Dengue sang người khác.',
    method: 'wolbachia',
  },
];

/**
 * @param {string} id
 * @returns {Method}
 */
export function method(id) {
  const m = METHODS.find((x) => x.id === id);
  if (!m) throw new Error(`no method ${id}`);
  return m;
}

/**
 * @param {string} id
 * @returns {Pest}
 */
export function pest(id) {
  const p = PESTS.find((x) => x.id === id);
  if (!p) throw new Error(`no pest ${id}`);
  return p;
}

/**
 * Checks a match of a pest with a measure.
 * @param {string} pestId @param {string} methodId
 * @returns {{ ok: boolean, text: string }}
 */
export function check(pestId, methodId) {
  const p = pest(pestId);
  const m = method(methodId);
  if (p.method === m.id) {
    return {
      ok: true,
      text: `Đúng. ${p.name}: ${lowerFirst(m.name)} (${lowerFirst(groupLabel(m.group))}). ${m.how}`,
    };
  }
  return {
    ok: false,
    text: `Chưa hợp. ${m.name} dùng cho ${m.suits}. Đối tượng cần trừ ở đây là ${lowerFirst(p.name)}; hãy chọn lại.`,
  };
}

/**
 * The pests in a fixed mixed order, the same for every visitor.
 * @returns {Pest[]}
 */
export function pestDeck() {
  return shuffled(PESTS, 2024);
}

/** Measures for the sorting activity: the game's measures and a few more. */
const EXTRA_CARDS = [
  {
    id: 'giu-bo-co',
    label: 'Không đốt rơm rạ, giữ bờ cỏ làm nơi trú cho nhện, bọ xít mù xanh',
    bin: 'thien-dich',
    why: 'Bảo vệ, phục hồi nơi ở của thiên địch có sẵn ngoài tự nhiên.',
  },
  {
    id: 'nhap-bo-rua',
    label: 'Nhập nội bọ rùa từ vùng gốc của loài rệp sáp xâm lấn',
    bin: 'thien-dich',
    why: 'Nhập nội thiên địch từ nơi sinh vật gây hại có nguồn gốc.',
  },
  {
    id: 'npv',
    label: 'Phun chế phẩm virus NPV trừ sâu khoang, sâu xanh',
    bin: 'che-pham',
    why: 'Virus gây bệnh cho sâu được sản xuất thành chế phẩm sinh học.',
  },
  {
    id: 'nam-trang',
    label: 'Phun chế phẩm nấm trắng Beauveria trừ rầy, sâu',
    bin: 'che-pham',
    why: 'Nấm gây bệnh cho côn trùng được sản xuất thành chế phẩm sinh học.',
  },
  {
    id: 'lua-khang',
    label: 'Trồng giống lúa mang gene kháng rầy nâu',
    bin: 'di-truyen',
    why: 'Tạo giống mang gene chống chịu, tăng sức đề kháng của vật chủ.',
  },
  {
    id: 'ngo-bt',
    label: 'Trồng ngô chuyển gene Bt tự tạo protein diệt sâu đục thân',
    bin: 'di-truyen',
    why: 'Gene Bt được chuyển vào cây bằng kĩ thuật di truyền.',
  },
];

/**
 * Every measure as a card for the three-group sort, mixed the same way for
 * every visitor.
 * @returns {import('#lib/core/card-sorter.js').SortCard[]}
 */
export function sortCards() {
  const cards = [
    ...METHODS.map((m) => ({ id: m.id, label: m.name, bin: m.group, why: m.how })),
    ...EXTRA_CARDS,
  ];
  return shuffled(cards, 1888);
}
