/**
 * Logic for the mushroom inspector: specimens drawn from their features
 * (cap, gills, ring, volva), where each was found, the warning signs a
 * learner can spot, and the verdict. The point it teaches: warning signs only
 * raise suspicion; no single feature proves a mushroom safe, so only
 * mushrooms of a known, cultivated kind are eaten.
 */

/** @typedef {'mu' | 'phien' | 'vong' | 'bao-goc'} PartId */
/** @typedef {'an-duoc' | 'khong-an'} Choice */
/**
 * @typedef {{
 *   id: string;
 *   name: string;
 *   place: string;
 *   wild: boolean;
 *   edible: boolean;
 *   cap: { color: string, shape: 'vom' | 'det' | 'so' | 'trung', marks: 'none' | 'dom-trang' | 'vay' };
 *   capText: string;
 *   gills: string;
 *   gillsText: string;
 *   ring: boolean;
 *   volva: boolean;
 *   bright: boolean;
 *   greenGills: boolean;
 *   lesson: string;
 * }} Specimen
 */

/** @type {Specimen[]} */
export const SPECIMENS = [
  {
    id: 'nam-rom',
    name: 'Nấm rơm',
    place: 'Hái trên luống rơm ở trại trồng nấm.',
    wild: false,
    edible: true,
    cap: { color: '#78716c', shape: 'trung', marks: 'none' },
    capText: 'Mũ màu xám nâu, khi non hình trứng.',
    gills: '#f9a8d4',
    gillsText: 'Phiến nấm màu trắng rồi chuyển hồng.',
    ring: false,
    volva: true,
    bright: false,
    greenGills: false,
    lesson:
      'Nấm rơm có bao gốc nhưng là nấm trồng, ăn được. Vậy bao gốc không đủ để kết luận nấm độc; điều quan trọng là biết rõ loài và nguồn gốc.',
  },
  {
    id: 'nam-do',
    name: 'Nấm độc đỏ',
    place: 'Mọc hoang dưới tán rừng thông.',
    wild: true,
    edible: false,
    cap: { color: '#dc2626', shape: 'vom', marks: 'dom-trang' },
    capText: 'Mũ màu đỏ tươi, có nhiều đốm trắng.',
    gills: '#f8fafc',
    gillsText: 'Phiến nấm màu trắng.',
    ring: true,
    volva: true,
    bright: true,
    greenGills: false,
    lesson:
      'Màu sặc sỡ, có vòng và bao gốc: nhiều dấu hiệu cảnh báo. Đây là nấm độc, ăn phải gây ngộ độc nặng.',
  },
  {
    id: 'nam-so',
    name: 'Nấm sò',
    place: 'Mọc thành chùm trên bịch mùn cưa ở cơ sở trồng nấm.',
    wild: false,
    edible: true,
    cap: { color: '#cbd5e1', shape: 'so', marks: 'none' },
    capText: 'Mũ xám trắng, hình vỏ sò, cuống mọc lệch.',
    gills: '#f8fafc',
    gillsText: 'Phiến nấm màu trắng, chạy dọc xuống cuống.',
    ring: false,
    volva: false,
    bright: false,
    greenGills: false,
    lesson: 'Nấm sò là nấm trồng quen thuộc, ăn được.',
  },
  {
    id: 'nam-tan-trang',
    name: 'Nấm độc tán trắng',
    place: 'Mọc hoang ở bìa rừng sau mưa.',
    wild: true,
    edible: false,
    cap: { color: '#f8fafc', shape: 'vom', marks: 'none' },
    capText: 'Mũ trắng tinh, trông rất "sạch", không sặc sỡ.',
    gills: '#f8fafc',
    gillsText: 'Phiến nấm màu trắng.',
    ring: true,
    volva: true,
    bright: false,
    greenGills: false,
    lesson:
      'Không sặc sỡ nhưng là một trong những loài nấm độc nhất, ăn phải có thể tử vong. Màu trắng không có nghĩa là ăn được.',
  },
  {
    id: 'nam-huong',
    name: 'Nấm hương',
    place: 'Trồng trên khúc gỗ, mua ở cửa hàng.',
    wild: false,
    edible: true,
    cap: { color: '#92400e', shape: 'det', marks: 'vay' },
    capText: 'Mũ nâu, có vảy nhỏ màu trắng ở mép.',
    gills: '#f8fafc',
    gillsText: 'Phiến nấm màu trắng.',
    ring: false,
    volva: false,
    bright: false,
    greenGills: false,
    lesson: 'Nấm hương (nấm đông cô) là nấm trồng, ăn được, có mùi thơm đặc trưng.',
  },
  {
    id: 'nam-phien-xanh',
    name: 'Nấm ô tán trắng phiến xanh',
    place: 'Mọc hoang trên bãi cỏ trong vườn sau mưa.',
    wild: true,
    edible: false,
    cap: { color: '#f5f5f4', shape: 'det', marks: 'vay' },
    capText: 'Mũ trắng, to, có vảy nâu.',
    gills: '#86efac',
    gillsText: 'Phiến nấm màu xanh lục nhạt khi già.',
    ring: true,
    volva: false,
    bright: false,
    greenGills: true,
    lesson:
      'Loài nấm độc hay gây ngộ độc ở nước ta vì trông giống nấm ăn được. Nó không có bao gốc, nên "không có bao gốc" cũng không chứng minh nấm an toàn.',
  },
  {
    id: 'nam-mo',
    name: 'Nấm mỡ',
    place: 'Trồng trong trại nấm, bán ở siêu thị.',
    wild: false,
    edible: true,
    cap: { color: '#fafaf9', shape: 'vom', marks: 'none' },
    capText: 'Mũ trắng, tròn.',
    gills: '#a8a29e',
    gillsText: 'Phiến nấm màu hồng rồi nâu sẫm.',
    ring: true,
    volva: false,
    bright: false,
    greenGills: false,
    lesson:
      'Nấm mỡ có vòng nhưng là nấm trồng, ăn được. Có vòng chưa chắc là nấm độc, cũng như không có vòng chưa chắc ăn được.',
  },
];

/** Names of the parts a learner inspects. @type {Array<{ id: PartId, name: string }>} */
export const PARTS = [
  { id: 'mu', name: 'Mũ nấm' },
  { id: 'phien', name: 'Phiến nấm (mặt dưới mũ)' },
  { id: 'vong', name: 'Cuống nấm và vòng' },
  { id: 'bao-goc', name: 'Gốc nấm' },
];

/**
 * What the learner sees when inspecting one part.
 * @param {Specimen} s @param {PartId} part
 */
export function observe(s, part) {
  if (part === 'mu') return s.capText;
  if (part === 'phien') return s.gillsText;
  if (part === 'vong')
    return s.ring ? 'Cuống nấm có vòng (vòng cuống nấm).' : 'Cuống nấm không có vòng.';
  return s.volva ? 'Gốc nấm có bao gốc hình chén bọc lấy.' : 'Gốc nấm không có bao gốc.';
}

/**
 * Warning signs the learner can spot on a specimen.
 * @param {Specimen} s
 */
export function warningSigns(s) {
  /** @type {string[]} */
  const out = [];
  if (s.wild) out.push('mọc hoang, không rõ loài');
  if (s.bright) out.push('màu sắc sặc sỡ');
  if (s.ring) out.push('có vòng cuống nấm');
  if (s.volva) out.push('có bao gốc');
  if (s.greenGills) out.push('phiến nấm màu xanh');
  return out;
}

/**
 * Whether the learner's choice is right: only a known cultivated mushroom
 * may be eaten, and with the reason.
 * @param {Specimen} s @param {Choice} choice
 * @returns {{ ok: boolean, text: string }}
 */
export function decide(s, choice) {
  const ok = (choice === 'an-duoc') === s.edible;
  const head = ok
    ? `Đúng. Đây là ${s.name.toLowerCase()}.`
    : `Chưa đúng. Đây là ${s.name.toLowerCase()}.`;
  return { ok, text: `${head} ${s.lesson}` };
}
