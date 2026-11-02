/**
 * A virtual enzyme production line: each stage needs the product of the one
 * before, so a step tried too early says what is missing, and some tempting
 * steps ruin the batch. The share of activity kept against the extraction
 * temperature is a teaching value that follows the book's rule of working cold,
 * at 3-5 °C. No DOM here, so all of it is tested in Node.
 */
import { formatNumber } from '#lib/core/number-format.js';

/**
 * @typedef {'nguon' | 'tach' | 'che-pham'} Stage
 * @typedef {{ id: string, text: string, product: string, stage: Stage, result: string }} Step
 * @typedef {{ id: string, text: string, why: string }} Trap
 * @typedef {{ id: string, name: string, enzyme: string, steps: Step[], traps: Trap[] }} Route
 */

/** @type {Record<Stage, string>} */
export const STAGE_NAMES = {
  nguon: 'Tạo nguồn nguyên liệu',
  tach: 'Tách chiết enzyme',
  'che-pham': 'Tạo chế phẩm',
};

/** Stage names short enough for the line's legend. @type {Record<Stage, string>} */
export const STAGE_SHORT = { nguon: 'Tạo nguồn', tach: 'Tách chiết', 'che-pham': 'Tạo chế phẩm' };

/** @type {Stage[]} */
export const STAGES = ['nguon', 'tach', 'che-pham'];

const BOIL = {
  id: 'dun-soi',
  text: 'Đun sôi dịch chiết cho sạch khuẩn',
  why: 'Không được đun sôi: nhiệt độ cao làm enzyme biến tính và mất hoạt tính.',
};
const SUN = {
  id: 'phoi-nang',
  text: 'Phơi dịch chiết ngoài nắng cho khô',
  why: 'Không nên phơi nắng: enzyme dễ mất hoạt tính và dễ nhiễm khuẩn. Hãy làm khô ở điều kiện được kiểm soát.',
};

/** @type {Route[]} */
export const ROUTES = [
  {
    id: 'vi-sinh-vat',
    name: 'Vi sinh vật',
    enzyme: 'Amylase từ nấm mốc Aspergillus',
    steps: [
      {
        id: 'chon-giong',
        text: 'Chọn chủng nấm mốc tạo nhiều amylase',
        product: 'chủng giống',
        stage: 'nguon',
        result: 'Có chủng giống thuần, cho nhiều enzyme mong muốn.',
      },
      {
        id: 'nuoi-cay',
        text: 'Nuôi cấy trong môi trường lỏng có tinh bột, giữ nhiệt độ, pH phù hợp',
        product: 'môi trường đã nuôi cấy',
        stage: 'nguon',
        result: 'Tinh bột là chất cảm ứng, kích thích nấm mốc tạo amylase.',
      },
      {
        id: 'thu-dich',
        text: 'Thu dịch nuôi cấy, lọc bỏ sinh khối',
        product: 'dịch enzyme thô',
        stage: 'tach',
        result: 'Amylase được tiết ra môi trường, nên không cần phá vỡ tế bào.',
      },
      {
        id: 'ket-tua',
        text: 'Kết tủa enzyme bằng cồn lạnh, thu tủa',
        product: 'tủa enzyme',
        stage: 'tach',
        result:
          'Enzyme kết tủa và tách khỏi phần lớn dịch. Việc này cần làm nhanh, ở nhiệt độ thấp.',
      },
      {
        id: 'tham-tich',
        text: 'Hoà tan tủa, thẩm tích để loại tạp chất',
        product: 'enzyme đã tinh sạch',
        stage: 'tach',
        result: 'Các phân tử nhỏ qua màng thẩm tích, enzyme ở lại.',
      },
      {
        id: 'bao-quan',
        text: 'Cô đặc, sấy thành bột, đóng gói và bảo quản',
        product: 'chế phẩm enzyme',
        stage: 'che-pham',
        result: 'Chế phẩm bột dễ vận chuyển, bảo quản được lâu.',
      },
    ],
    traps: [BOIL, SUN],
  },
  {
    id: 'thuc-vat',
    name: 'Thực vật',
    enzyme: 'Bromelain từ dứa',
    steps: [
      {
        id: 'chon-dua',
        text: 'Chọn thân, lá, quả dứa',
        product: 'nguyên liệu dứa',
        stage: 'nguon',
        result: 'Dứa có nhiều bromelain, cả ở phần phụ phẩm như thân và lá.',
      },
      {
        id: 'rua-cat',
        text: 'Rửa sạch, cắt nhỏ',
        product: 'nguyên liệu đã cắt nhỏ',
        stage: 'nguon',
        result: 'Nguyên liệu sạch và nhỏ giúp bước sau hiệu quả hơn.',
      },
      {
        id: 'nghien',
        text: 'Nghiền để phá vỡ tế bào',
        product: 'dịch nghiền',
        stage: 'tach',
        result: 'Enzyme nằm trong tế bào thực vật, nên cần phá vỡ tế bào để giải phóng enzyme.',
      },
      {
        id: 'ly-tam',
        text: 'Ly tâm, bỏ cặn, lấy dịch chiết',
        product: 'dịch chiết enzyme',
        stage: 'tach',
        result: 'Cặn và mảnh tế bào lắng xuống, enzyme ở trong phần dịch.',
      },
      {
        id: 'dong-kho',
        text: 'Đông khô dịch chiết',
        product: 'bột enzyme',
        stage: 'che-pham',
        result: 'Đông khô loại nước ở nhiệt độ thấp nên giữ được cấu trúc của enzyme.',
      },
      {
        id: 'dong-goi',
        text: 'Đóng gói trong túi nylon, bảo quản',
        product: 'chế phẩm enzyme',
        stage: 'che-pham',
        result: 'Chế phẩm kín, khô, giữ ở nơi không có nhiệt độ cao.',
      },
    ],
    traps: [BOIL, SUN],
  },
  {
    id: 'dong-vat',
    name: 'Động vật',
    enzyme: 'Pepsin từ dạ dày lợn',
    steps: [
      {
        id: 'lay-mo',
        text: 'Lấy niêm mạc dạ dày tươi, giữ lạnh',
        product: 'mô tươi',
        stage: 'nguon',
        result: 'Giữ lạnh ngay giúp enzyme không bị mất hoạt tính và mô không bị hỏng.',
      },
      {
        id: 'loai-lien-ket',
        text: 'Loại bỏ mô liên kết',
        product: 'mô đã làm sạch',
        stage: 'nguon',
        result: 'Mô liên kết không chứa enzyme cần lấy và cản trở việc tách chiết.',
      },
      {
        id: 'pha-te-bao',
        text: 'Nghiền mô, phá vỡ tế bào trong dung dịch chiết lạnh',
        product: 'dịch nghiền',
        stage: 'tach',
        result: 'Enzyme trong tế bào được giải phóng vào dung dịch chiết.',
      },
      {
        id: 'ly-tam',
        text: 'Ly tâm, lấy dịch chiết',
        product: 'dịch chiết enzyme',
        stage: 'tach',
        result: 'Mảnh tế bào lắng xuống, enzyme ở trong phần dịch.',
      },
      {
        id: 'ket-tua',
        text: 'Kết tủa enzyme ở nhiệt độ thấp, thu tủa',
        product: 'tủa enzyme',
        stage: 'tach',
        result: 'Kết tủa nhanh và lạnh giúp enzyme ít bị biến tính.',
      },
      {
        id: 'tham-tich',
        text: 'Thẩm tích để loại tạp chất',
        product: 'enzyme đã tinh sạch',
        stage: 'tach',
        result: 'Tạp chất phân tử nhỏ đi qua màng, enzyme ở lại.',
      },
      {
        id: 'bao-quan',
        text: 'Sấy khô, đóng gói và bảo quản',
        product: 'chế phẩm enzyme',
        stage: 'che-pham',
        result: 'Chế phẩm khô giữ hoạt tính lâu hơn dạng dung dịch.',
      },
    ],
    traps: [BOIL, SUN],
  },
  {
    id: 'tai-to-hop',
    name: 'Tái tổ hợp',
    enzyme: 'Protease tái tổ hợp',
    steps: [
      {
        id: 'tach-gene',
        text: 'Tách gene mã hoá protease',
        product: 'gene protease',
        stage: 'nguon',
        result: 'Có gene quy định protease cần sản xuất.',
      },
      {
        id: 'tao-dna',
        text: 'Gắn gene vào vector, tạo DNA tái tổ hợp',
        product: 'DNA tái tổ hợp',
        stage: 'nguon',
        result: 'Enzyme cắt giới hạn và ligase giúp gắn gene vào vector.',
      },
      {
        id: 'chuyen-gene',
        text: 'Chuyển DNA tái tổ hợp vào tế bào chủ',
        product: 'tế bào chủ mang gene',
        stage: 'nguon',
        result: 'Tế bào chủ, thường là vi sinh vật, nay có thể tạo nhiều protease.',
      },
      {
        id: 'nuoi-chim',
        text: 'Nuôi cấy chìm trong nồi lên men có sục khí, khuấy trộn',
        product: 'dịch nuôi cấy',
        stage: 'nguon',
        result: 'Tế bào mang gene sinh trưởng nhanh và tạo enzyme ở quy mô lớn.',
      },
      {
        id: 'thu-dich',
        text: 'Thu dịch nuôi cấy, loại bỏ tế bào',
        product: 'dịch enzyme thô',
        stage: 'tach',
        result: 'Tách được protease khỏi sinh khối.',
      },
      {
        id: 'ket-tua',
        text: 'Kết tủa ở nhiệt độ thấp, thu tủa',
        product: 'tủa enzyme',
        stage: 'tach',
        result: 'Enzyme kết tủa và tách khỏi phần lớn dịch.',
      },
      {
        id: 'tham-tich',
        text: 'Thẩm tích để loại tạp chất',
        product: 'enzyme đã tinh sạch',
        stage: 'tach',
        result: 'Enzyme được tinh sạch. Sản phẩm tái tổ hợp cần kiểm soát chất lượng chặt chẽ.',
      },
      {
        id: 'bao-quan',
        text: 'Cô đặc, sấy khô, đóng gói và bảo quản',
        product: 'chế phẩm enzyme',
        stage: 'che-pham',
        result: 'Chế phẩm sẵn sàng để sử dụng hoặc đóng gói phân phối.',
      },
    ],
    traps: [BOIL, SUN],
  },
];

/** Work at this temperature or colder keeps all the activity. */
export const COLD_LIMIT = 5;
export const MIN_WORK_TEMP = 0;
export const MAX_WORK_TEMP = 45;
const FLOOR_SHARE = 20;
const LOSS_PER_DEGREE = 2;

/**
 * Tries to run one step of the line; `done` lists the finished step ids, in order.
 * @param {Route} route @param {string[]} done @param {string} id
 * @returns {{ ok: boolean, text: string, done: string[] }}
 */
export function attempt(route, done, id) {
  const trap = route.traps.find((t) => t.id === id);
  if (trap) return { ok: false, text: trap.why, done };
  if (done.includes(id)) return { ok: false, text: 'Công đoạn này đã xong rồi.', done };
  const at = route.steps.findIndex((s) => s.id === id);
  if (at === -1) throw new Error(`unknown step ${id}`);
  if (at !== done.length) {
    const missing = route.steps[at - 1].product;
    return { ok: false, text: `Chưa làm được: công đoạn này cần có ${missing}.`, done };
  }
  return { ok: true, text: route.steps[at].result, done: [...done, id] };
}

/**
 * The share of activity kept in the batch, in percent, by how warm the
 * extraction ran.
 * @param {number} temp in °C
 */
export function keptShare(temp) {
  if (temp <= COLD_LIMIT) return 100;
  return Math.max(FLOOR_SHARE, 100 - (temp - COLD_LIMIT) * LOSS_PER_DEGREE);
}

/**
 * The share of the line completed, from 0 to 1.
 * @param {Route} route @param {string[]} done
 */
export const lineShare = (route, done) => done.length / route.steps.length;

/**
 * The end report of a batch.
 * @param {number} temp @param {number} slips
 * @returns {{ tone: 'ok' | 'warn', text: string }}
 */
export function batchReport(temp, slips) {
  const kept = keptShare(temp);
  const slipText =
    slips === 0 ? 'Không có lần chọn sai.' : `Có ${formatNumber(slips)} lần chọn sai.`;
  if (kept === 100) {
    return {
      tone: 'ok',
      text: `Mẻ enzyme giữ được ${formatNumber(kept)}% hoạt tính, vì tách chiết ở ${formatNumber(temp)} °C. ${slipText}`,
    };
  }
  return {
    tone: 'warn',
    text: `Mẻ enzyme chỉ giữ được ${formatNumber(kept)}% hoạt tính, vì tách chiết ở ${formatNumber(temp)} °C. Hãy làm lạnh ở 3-5 °C và làm nhanh. ${slipText}`,
  };
}
