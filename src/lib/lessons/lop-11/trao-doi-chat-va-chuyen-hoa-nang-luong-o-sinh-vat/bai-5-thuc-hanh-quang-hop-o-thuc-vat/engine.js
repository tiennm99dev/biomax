/**
 * The virtual paper chromatogram and the virtual starch test. Band positions
 * follow the book's order from the start line: chlorophyll b, chlorophyll a,
 * xanthophyll, carotene. The exact distances are teaching values.
 */

/** @typedef {'b' | 'a' | 'x' | 'c'} PigmentId */
/** @typedef {'petroleum' | 'nuoc'} SolventId */
/** @typedef {'xanh' | 'vang'} LeafId */

/** @type {Array<{ id: PigmentId, name: string, color: string, rf: number }>} From the start line up. */
export const PIGMENTS = [
  { id: 'b', name: 'Diệp lục b', color: '#65a30d', rf: 0.3 },
  { id: 'a', name: 'Diệp lục a', color: '#047857', rf: 0.46 },
  { id: 'x', name: 'Xanthophyll', color: '#eab308', rf: 0.68 },
  { id: 'c', name: 'Carotene', color: '#ea580c', rf: 0.92 },
];

/** @type {Record<LeafId, Record<PigmentId, number>>} */
const LEAF_AMOUNT = {
  xanh: { b: 0.6, a: 1, x: 0.55, c: 0.5 },
  vang: { b: 0.08, a: 0.12, x: 0.75, c: 0.6 },
};

/** Greatest climb of the solvent front above the start line, in mm. */
export const FRONT_MAX = 90;
export const RUN_MINUTES = 10;
export const FULL_SPOTS = 10;

/**
 * How far the solvent has climbed, in mm.
 * @param {number} minutes
 */
export function frontAt(minutes) {
  const t = Math.max(0, Math.min(1, minutes / RUN_MINUTES));
  return FRONT_MAX * Math.sqrt(t);
}

/**
 * @typedef {object} RunSetup
 * @property {SolventId} solvent
 * @property {LeafId} leaf
 * @property {number} spots How many times the extract was spotted, 1 to 10.
 * @property {boolean} touching Whether the start line dips into the solvent.
 */

/** @type {RunSetup} */
export const BOOK_SETUP = {
  solvent: 'petroleum',
  leaf: 'xanh',
  spots: FULL_SPOTS,
  touching: false,
};

/**
 * The bands on the paper. `distance` is in mm above the start line and
 * `strength` from 0 (nothing to see) to 1.
 * @param {RunSetup} s
 * @param {number} minutes
 */
export function bands(s, minutes) {
  const front = frontAt(minutes);
  const load = s.spots / FULL_SPOTS;
  return PIGMENTS.map((p) => {
    const amount = LEAF_AMOUNT[s.leaf][p.id] * load;
    if (s.touching) return { ...p, distance: 0, strength: minutes > 0 ? 0 : amount };
    if (s.solvent === 'nuoc') return { ...p, distance: 0, strength: amount };
    return { ...p, distance: p.rf * front, strength: amount };
  });
}

/**
 * Rf of a band: its distance over the solvent's, both from the start line.
 * @param {number} distance
 * @param {number} front
 */
export const rfOf = (distance, front) => (front > 0 ? distance / front : 0);

/**
 * @param {RunSetup} s
 * @param {number} minutes
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function describeRun(s, minutes) {
  if (minutes === 0) {
    return s.touching
      ? {
          tone: 'warn',
          text: 'Vạch xuất phát đang nằm dưới mặt dung môi. Thử chạy xem sắc tố đi đâu.',
        }
      : {
          tone: 'info',
          text: 'Vệt sắc tố đang ở vạch xuất phát. Bấm chạy để dung môi leo lên giấy.',
        };
  }
  if (s.touching) {
    return {
      tone: 'warn',
      text: 'Vệt sắc tố chạm dung môi nên tan hết vào bình, trên giấy không còn dải nào. Vạch xuất phát phải nằm trên mặt dung môi.',
    };
  }
  if (s.solvent === 'nuoc') {
    return {
      tone: 'warn',
      text: 'Nước leo lên giấy nhưng sắc tố đứng yên ở vạch xuất phát: sắc tố quang hợp không tan trong nước, chỉ tan trong dung môi hữu cơ.',
    };
  }
  if (s.spots < 5) {
    return {
      tone: 'warn',
      text: 'Chấm quá ít lần nên các dải rất nhạt, khó đọc. Sách yêu cầu chấm khoảng $10$ lần, đợi khô rồi mới chấm tiếp.',
    };
  }
  if (minutes < RUN_MINUTES) {
    return {
      tone: 'info',
      text: 'Các sắc tố đang tách dần: mỗi sắc tố đi với một tốc độ khác nhau.',
    };
  }
  if (s.leaf === 'vang') {
    return {
      tone: 'ok',
      text: 'Lá vàng: hai dải diệp lục rất nhạt, hai dải carotenoid vẫn rõ. Khi lá già, diệp lục bị phân giải trước nên lộ ra màu của carotenoid.',
    };
  }
  return {
    tone: 'ok',
    text: 'Bốn dải tách rõ. Giấy cellulose phân cực giữ sắc tố phân cực hơn lại, nên sắc tố ít phân cực đi xa hơn. Hãy gọi tên từng dải.',
  };
}

/**
 * @typedef {object} LeafTest
 * @property {boolean} dark Kept in the dark for 2 days first.
 * @property {boolean} cover Part of the leaf covered with black paper.
 * @property {boolean} sun Put in the sun for 4 to 6 hours.
 * @property {boolean} alcohol Boiled in alcohol to bleach the chlorophyll.
 */

/** @type {LeafTest} */
export const BOOK_TEST = { dark: true, cover: true, sun: true, alcohol: true };

/**
 * Whether each part of the leaf holds starch at the end.
 * @param {LeafTest} t
 */
export function starchIn(t) {
  const old = !t.dark;
  const open = old || t.sun;
  return { open, covered: t.cover ? old : open };
}

/**
 * The colour iodine leaves on a part of the leaf.
 * @param {boolean} starch
 * @param {boolean} alcohol
 */
export function leafColor(starch, alcohol) {
  if (!alcohol) return starch ? '#14532d' : '#16a34a';
  return starch ? '#3b0764' : '#d6a75c';
}

/**
 * @param {LeafTest} t
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function describeTest(t) {
  if (!t.alcohol) {
    return {
      tone: 'warn',
      text: 'Chưa tẩy diệp lục: màu xanh của lá che màu của iodine, khó đọc kết quả. Cần đun cách thuỷ lá trong cồn $90^\\circ$ trước.',
    };
  }
  if (!t.dark) {
    return {
      tone: 'warn',
      text: 'Không để tối $2$ ngày: lá còn tinh bột dự trữ từ trước, cả lá đều xanh tím. Không biết phần tinh bột nào mới được tạo ra.',
    };
  }
  if (!t.sun) {
    return {
      tone: 'info',
      text: 'Cây không được chiếu sáng nên không quang hợp: không phần nào của lá có tinh bột, cả lá giữ màu vàng nâu của iodine.',
    };
  }
  if (!t.cover) {
    return {
      tone: 'info',
      text: 'Không che giấy đen: cả lá đều xanh tím, chứng tỏ có tinh bột nhưng không có phần đối chứng để so sánh với phần không nhận ánh sáng.',
    };
  }
  return {
    tone: 'ok',
    text: 'Phần lá được chiếu sáng xanh tím, phần bị che giữ màu vàng nâu: quang hợp tạo tinh bột, và chỉ xảy ra ở nơi có ánh sáng.',
  };
}
