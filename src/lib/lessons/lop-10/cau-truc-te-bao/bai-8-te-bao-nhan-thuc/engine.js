/**
 * The eukaryotic cell of this lesson: its organelles with their places in a
 * turning 3D model of an animal and a plant cell, the search quiz, and the
 * steps a secreted protein takes through the endomembrane system.
 */

import { shuffled } from '#lib/domain/diagrams.js';

/** @typedef {'dong-vat' | 'thuc-vat'} CellType */
/** @typedef {{ x: number, y: number, z: number }} Spot */
/**
 * @typedef {{
 *   id: string;
 *   name: string;
 *   kind: string;
 *   membrane: string;
 *   info: string;
 *   clue: string;
 *   animal: Spot[];
 *   plant: Spot[];
 *   wraps?: boolean;
 *   within?: string;
 * }} Organelle
 */

const CENTRE = { x: 0, y: 0, z: 0 };

/**
 * Every part in the model. `animal` and `plant` hold its places in that cell,
 * empty when the cell type usually lacks it. A part with `wraps` encloses the
 * whole cell, so the drawing shows it as the cell's outline. `within` keeps a
 * part drawn on top of the one that encloses it.
 * @type {Organelle[]}
 */
export const ORGANELLES = [
  {
    id: 'mang-sinh-chat',
    name: 'Màng sinh chất',
    kind: 'mang',
    membrane: 'Là một lớp màng',
    info: 'Lớp kép phospholipid xen protein, cấu trúc khảm động. Ngăn cách tế bào với môi trường, kiểm soát chất ra vào, tiếp nhận và truyền tín hiệu.',
    clue: 'Kiểm soát có chọn lọc các chất ra vào tế bào.',
    animal: [CENTRE],
    plant: [CENTRE],
    wraps: true,
  },
  {
    id: 'thanh-te-bao',
    name: 'Thành tế bào',
    kind: 'thanh',
    membrane: 'Không phải màng',
    info: 'Nằm ngoài màng sinh chất, ở thực vật cấu tạo chủ yếu từ cellulose. Bảo vệ và định hình tế bào.',
    clue: 'Lớp cellulose cứng bên ngoài màng, giữ hình dạng tế bào thực vật.',
    animal: [],
    plant: [CENTRE],
    wraps: true,
  },
  {
    id: 'nhan',
    name: 'Nhân',
    kind: 'nhan',
    membrane: 'Màng kép, có lỗ nhân',
    info: 'Chứa DNA cùng protein tạo chất nhiễm sắc. Lưu giữ thông tin di truyền và điều khiển mọi hoạt động sống của tế bào.',
    clue: 'Lưu giữ thông tin di truyền, điều khiển hoạt động của tế bào.',
    animal: [{ x: 0, y: 0, z: 5 }],
    plant: [{ x: -72, y: 62, z: 28 }],
  },
  {
    id: 'nhan-con',
    name: 'Nhân con',
    kind: 'nhan-con',
    membrane: 'Không có màng, nằm trong nhân',
    info: 'Vùng đậm đặc trong nhân, còn gọi là hạch nhân; nơi tổng hợp rRNA.',
    clue: 'Vùng đậm trong nhân, nơi tổng hợp rRNA.',
    animal: [{ x: 8, y: -8, z: 12 }],
    plant: [{ x: -66, y: 56, z: 34 }],
    within: 'nhan',
  },
  {
    id: 'ribosome',
    name: 'Ribosome',
    kind: 'ribosome',
    membrane: 'Không có màng',
    info: 'Gồm rRNA và protein, có hai tiểu phần chỉ ghép lại khi hoạt động. Nơi tổng hợp protein.',
    clue: 'Bào quan không có màng, nơi tổng hợp protein.',
    animal: [{ x: 42, y: -38, z: 72 }],
    plant: [{ x: -28, y: -84, z: -58 }],
  },
  {
    id: 'luoi-noi-chat-hat',
    name: 'Lưới nội chất hạt',
    kind: 'luoi-hat',
    membrane: 'Màng đơn',
    info: 'Hệ thống túi dẹp nối với màng nhân, có ribosome bám trên màng. Tổng hợp protein và đưa protein vào túi vận chuyển.',
    clue: 'Có ribosome bám trên màng, tổng hợp protein để chuyển tới Golgi.',
    animal: [{ x: 62, y: 28, z: -8 }],
    plant: [{ x: -72, y: 8, z: -34 }],
  },
  {
    id: 'luoi-noi-chat-tron',
    name: 'Lưới nội chất trơn',
    kind: 'luoi-tron',
    membrane: 'Màng đơn',
    info: 'Hệ thống ống không có ribosome bám. Tổng hợp lipid, chuyển hoá đường, khử độc và dự trữ Ca²⁺.',
    clue: 'Tổng hợp lipid, khử độc và dự trữ Ca²⁺, không có ribosome bám.',
    animal: [{ x: -66, y: 24, z: -26 }],
    plant: [{ x: -84, y: -48, z: 12 }],
  },
  {
    id: 'golgi',
    name: 'Bộ máy Golgi',
    kind: 'golgi',
    membrane: 'Màng đơn',
    info: 'Các túi màng dẹp xếp song song. Chế biến, lắp ráp, đóng gói và phân phối protein, lipid.',
    clue: 'Chế biến, đóng gói và phân phối protein, lipid.',
    animal: [{ x: -8, y: -76, z: -48 }],
    plant: [{ x: -20, y: 84, z: 52 }],
  },
  {
    id: 'lysosome',
    name: 'Lysosome',
    kind: 'lysosome',
    membrane: 'Màng đơn',
    info: 'Túi chứa nhiều enzyme thuỷ phân. Phân giải chất, bào quan già hỏng để tái sử dụng; hỗ trợ tiêu hoá thức ăn theo con đường thực bào.',
    clue: 'Túi chứa enzyme thuỷ phân, phân giải bào quan già, hỏng.',
    animal: [
      { x: -84, y: 40, z: 48 },
      { x: 60, y: -70, z: -42 },
    ],
    plant: [],
  },
  {
    id: 'peroxisome',
    name: 'Peroxisome',
    kind: 'peroxisome',
    membrane: 'Màng đơn',
    info: 'Túi nhỏ chứa enzyme phân giải $\\mathrm{H_2O_2}$ thành nước và oxygen, phân giải acid béo và khử độc, nhiều ở tế bào gan, thận.',
    clue: 'Phân giải $\\mathrm{H_2O_2}$ thành nước và oxygen, bảo vệ tế bào.',
    animal: [{ x: -30, y: 84, z: 46 }],
    plant: [{ x: 80, y: -30, z: 68 }],
  },
  {
    id: 'khong-bao',
    name: 'Không bào',
    kind: 'khong-bao',
    membrane: 'Màng đơn',
    info: 'Túi chứa dịch. Ở thực vật, không bào trung tâm lớn dự trữ chất và điều hoà áp suất thẩm thấu; ở động vật, không bào nhỏ và tồn tại ngắn.',
    clue: 'Túi màng đơn chứa dịch; ở thực vật thường rất lớn.',
    animal: [{ x: 88, y: 40, z: -52 }],
    plant: [{ x: 20, y: -10, z: 0 }],
  },
  {
    id: 'ti-the',
    name: 'Ti thể',
    kind: 'ti-the',
    membrane: 'Màng kép, màng trong gấp nếp',
    info: 'Có DNA và ribosome 70S riêng trong chất nền. Nơi hô hấp tế bào, tạo ATP; tế bào cần nhiều năng lượng thì có nhiều ti thể.',
    clue: 'Màng trong gấp nếp, nơi hô hấp tế bào tạo ATP.',
    animal: [
      { x: 84, y: -28, z: 44 },
      { x: -68, y: -50, z: 50 },
      { x: 30, y: 74, z: -68 },
    ],
    plant: [
      { x: 70, y: 40, z: -70 },
      { x: -80, y: -30, z: -70 },
    ],
  },
  {
    id: 'luc-lap',
    name: 'Lục lạp',
    kind: 'luc-lap',
    membrane: 'Màng kép, có thylakoid bên trong',
    info: 'Thylakoid chứa diệp lục xếp chồng thành granum, chất nền chứa enzyme, DNA và ribosome 70S. Nơi quang hợp, chuyển quang năng thành hoá năng.',
    clue: 'Chứa diệp lục, chuyển năng lượng ánh sáng thành năng lượng hoá học.',
    animal: [],
    plant: [
      { x: 74, y: 70, z: 58 },
      { x: 80, y: -70, z: -40 },
      { x: -68, y: -74, z: 56 },
      { x: -30, y: 80, z: -68 },
    ],
  },
  {
    id: 'trung-the',
    name: 'Trung thể',
    kind: 'trung-the',
    membrane: 'Không có màng',
    info: 'Gồm hai trung tử xếp vuông góc; tham gia hình thành thoi phân bào ở tế bào động vật.',
    clue: 'Hai trung tử vuông góc, tham gia tạo thoi phân bào.',
    animal: [{ x: -58, y: -28, z: -78 }],
    plant: [],
  },
  {
    id: 'khung-xuong',
    name: 'Khung xương tế bào',
    kind: 'khung',
    membrane: 'Không có màng',
    info: 'Mạng lưới vi ống, sợi trung gian và vi sợi. Nâng đỡ, giữ hình dạng tế bào và neo giữ các bào quan.',
    clue: 'Mạng lưới vi ống, sợi trung gian, vi sợi nâng đỡ tế bào.',
    animal: [{ x: 0, y: 94, z: -10 }],
    plant: [{ x: 70, y: 86, z: -6 }],
  },
];

/**
 * The parts a cell type has.
 * @param {CellType} type
 */
export function partsOf(type) {
  return ORGANELLES.filter((o) => placesIn(o, type).length > 0);
}

/**
 * @param {Organelle} o
 * @param {CellType} type
 */
export function placesIn(o, type) {
  return type === 'dong-vat' ? o.animal : o.plant;
}

/**
 * True for a part found in this cell type but not in the other one.
 * @param {Organelle} o
 * @param {CellType} type
 */
export function isOnlyIn(o, type) {
  const other = type === 'dong-vat' ? o.plant : o.animal;
  return placesIn(o, type).length > 0 && other.length === 0;
}

/**
 * The order the search quiz asks about the parts of a cell type.
 * @param {CellType} type
 * @param {number} seed
 */
export function quizOrder(type, seed) {
  return shuffled(partsOf(type), seed).map((o) => o.id);
}

/**
 * @typedef {{
 *   id: string;
 *   name: string;
 *   x: number;
 *   y: number;
 *   done: string;
 *   wrong: string;
 * }} Station
 */

/**
 * Stations on the protein game board. The ones in `ROUTE` are visited in
 * order; the others are distractors with their own explanation. `wrong` is for
 * a press that comes too early, so the first station of the route needs none.
 * @type {Station[]}
 */
export const STATIONS = [
  {
    id: 'nhan',
    name: 'Nhân',
    x: 300,
    y: 135,
    done: 'DNA trong nhân được phiên mã thành mRNA. mRNA đi qua lỗ màng nhân ra tế bào chất.',
    wrong: '',
  },
  {
    id: 'ribosome',
    name: 'Ribosome',
    x: 300,
    y: 45,
    done: 'mRNA gặp ribosome bám trên lưới nội chất hạt. Ribosome đọc mRNA và tổng hợp chuỗi polypeptide.',
    wrong: 'Protein chỉ được tổng hợp ở ribosome sau khi có mRNA từ nhân.',
  },
  {
    id: 'luoi-noi-chat-hat',
    name: 'Lưới nội chất hạt',
    x: 180,
    y: 45,
    done: 'Chuỗi polypeptide đi vào xoang lưới nội chất hạt, được gấp lại và bắt đầu được biến đổi.',
    wrong: 'Chuỗi polypeptide mới vào được xoang lưới nội chất hạt sau khi ribosome tổng hợp nó.',
  },
  {
    id: 'tui-van-chuyen',
    name: 'Túi vận chuyển',
    x: 180,
    y: 135,
    done: 'Lưới nội chất hạt nảy chồi thành túi vận chuyển, mang protein tới bộ máy Golgi.',
    wrong: 'Túi vận chuyển chỉ hình thành khi protein đã nằm trong lưới nội chất hạt.',
  },
  {
    id: 'golgi',
    name: 'Bộ máy Golgi',
    x: 180,
    y: 225,
    done: 'Golgi chế biến, lắp ráp và đóng gói protein rồi phân phối đến đúng nơi.',
    wrong: 'Protein tới Golgi bằng túi vận chuyển từ lưới nội chất hạt, chưa đến lượt bước này.',
  },
  {
    id: 'tui-tiet',
    name: 'Túi tiết',
    x: 60,
    y: 225,
    done: 'Protein hoàn chỉnh được gói trong túi tiết, tách khỏi Golgi và di chuyển tới màng sinh chất.',
    wrong: 'Túi tiết tách ra từ Golgi sau khi protein đã được đóng gói.',
  },
  {
    id: 'mang',
    name: 'Màng sinh chất',
    x: 60,
    y: 135,
    done: 'Túi tiết hoà vào màng sinh chất và giải phóng protein ra ngoài tế bào.',
    wrong: 'Protein chỉ ra ngoài khi được túi tiết chở tới màng sinh chất.',
  },
  {
    id: 'ti-the',
    name: 'Ti thể',
    x: 60,
    y: 45,
    done: '',
    wrong:
      'Ti thể tạo ATP cấp năng lượng cho quá trình này, nhưng protein tiết không đi qua ti thể.',
  },
  {
    id: 'peroxisome',
    name: 'Peroxisome',
    x: 300,
    y: 225,
    done: '',
    wrong:
      'Peroxisome phân giải $\\mathrm{H_2O_2}$ và khử độc, không nằm trên đường đi của protein tiết.',
  },
];

/** Stations of the secreted protein, in order. */
export const ROUTE = [
  'nhan',
  'ribosome',
  'luoi-noi-chat-hat',
  'tui-van-chuyen',
  'golgi',
  'tui-tiet',
  'mang',
];

/**
 * @param {string} id
 * @returns {Station}
 */
export const stationOf = (id) => {
  const s = STATIONS.find((t) => t.id === id);
  if (!s) throw new Error(`unknown station ${id}`);
  return s;
};

/**
 * Follows a press in the protein game. `step` counts the stations passed so
 * far; a wrong press keeps it and explains why.
 * @param {number} step
 * @param {string} id
 * @returns {{ ok: boolean, step: number, done: boolean, text: string }}
 */
export function pressStation(step, id) {
  const station = stationOf(id);
  if (ROUTE[step] === id) {
    const next = step + 1;
    return { ok: true, step: next, done: next === ROUTE.length, text: station.done };
  }
  const passed = ROUTE.indexOf(id) >= 0 && ROUTE.indexOf(id) < step;
  const text = passed ? `Đã qua trạm ${station.name} rồi. Hãy tìm trạm tiếp theo.` : station.wrong;
  return { ok: false, step, done: false, text };
}
