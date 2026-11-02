/**
 * The cloning of Dolly as a bench: each step needs the products of earlier
 * steps, so a step tried too early says what is missing. The two branches (the
 * nucleus and the empty egg) may go in either order. Also the numbers of the
 * experiment, the lamb's face and the achievements to sort. No DOM here, so all
 * of it is tested in Node.
 */
import { formatNumber } from '#lib/core/number-format.js';

/**
 * @typedef {{ id: string, text: string, product: string, needs: string[], result: string }} Step
 * @typedef {'trang' | 'den'} Face
 */

/** @type {Step[]} */
export const STEPS = [
  {
    id: 'lay-nhan',
    text: 'Lấy tế bào tuyến vú của cừu cho nhân, nuôi cấy, tách lấy nhân',
    product: 'nhân tế bào tuyến vú',
    needs: [],
    result:
      'Có nhân tế bào tuyến vú. Nuôi cấy giúp nhân trở về trạng thái giải biệt hoá, giống như nhân hợp tử.',
  },
  {
    id: 'lay-trung',
    text: 'Lấy trứng của cừu cho trứng',
    product: 'trứng',
    needs: [],
    result: 'Có trứng, nhưng trứng vẫn còn nhân của chính nó.',
  },
  {
    id: 'loai-nhan',
    text: 'Loại bỏ nhân của trứng',
    product: 'trứng đã loại nhân',
    needs: ['lay-trung'],
    result: 'Có trứng đã loại nhân: chỉ còn tế bào chất, chưa có hệ gene trong nhân.',
  },
  {
    id: 'dung-hop',
    text: 'Dung hợp để đưa nhân tuyến vú vào trứng đã loại nhân',
    product: 'tế bào chuyển nhân',
    needs: ['lay-nhan', 'loai-nhan'],
    result: 'Có tế bào chuyển nhân, mang hệ gene trong nhân của cừu cho nhân.',
  },
  {
    id: 'nuoi-phoi',
    text: 'Nuôi tế bào trong môi trường nhân tạo thành phôi sớm',
    product: 'phôi sớm',
    needs: ['dung-hop'],
    result: 'Có phôi sớm: tế bào chuyển nhân đã phân chia nhiều lần.',
  },
  {
    id: 'cay-phoi',
    text: 'Cấy phôi vào tử cung cừu mang thai hộ',
    product: 'phôi trong tử cung',
    needs: ['nuoi-phoi'],
    result: 'Phôi phát triển trong tử cung cừu mang thai hộ.',
  },
  {
    id: 'sinh-con',
    text: 'Cừu mang thai hộ sinh ra cừu con',
    product: 'cừu con',
    needs: ['cay-phoi'],
    result: 'Cừu con ra đời. Hãy dự đoán mặt của nó có màu gì.',
  },
];

/**
 * @param {string} id
 * @returns {Step}
 */
function stepOf(id) {
  const step = STEPS.find((s) => s.id === id);
  if (!step) throw new Error(`unknown step ${id}`);
  return step;
}

/**
 * Tries to do a step on the bench.
 * @param {string[]} done the ids of finished steps
 * @param {string} id
 * @returns {{ ok: boolean, text: string, done: string[] }}
 */
export function attempt(done, id) {
  if (done.includes(id)) return { ok: false, text: 'Bước này đã làm rồi.', done };
  const step = stepOf(id);
  const missing = step.needs.filter((n) => !done.includes(n)).map((n) => stepOf(n).product);
  if (missing.length > 0) {
    return { ok: false, text: `Chưa làm được: bước này cần có ${missing.join(' và ')}.`, done };
  }
  return { ok: true, text: step.result, done: [...done, id] };
}

/**
 * The face of the lamb: it follows the cell that gave the nucleus, whatever
 * the egg donor or the surrogate look like.
 * @param {Face} nucleusFace
 * @returns {Face}
 */
export function lambFace(nucleusFace) {
  return nucleusFace;
}

/**
 * The face of the other two sheep, opposite to the nucleus donor's so a lamb's
 * face tells them apart.
 * @param {Face} face
 * @returns {Face}
 */
export function otherFace(face) {
  return face === 'trang' ? 'den' : 'trang';
}

/** @type {Record<Face, string>} */
export const FACE_NAMES = { trang: 'mặt trắng', den: 'mặt đen' };

/**
 * The reply to a prediction of the lamb's face.
 * @param {Face} predicted @param {Face} nucleusFace
 * @returns {{ ok: boolean, text: string }}
 */
export function judgeFace(predicted, nucleusFace) {
  const lamb = lambFace(nucleusFace);
  const reason = `Cừu con có ${FACE_NAMES[lamb]} như cừu cho nhân, vì nhân chứa phần lớn hệ gene. Trứng chỉ góp tế bào chất (với một ít DNA ti thể), còn cừu mang thai hộ chỉ nuôi phôi.`;
  return {
    ok: predicted === lamb,
    text: `${predicted === lamb ? 'Đúng.' : 'Chưa đúng.'} ${reason}`,
  };
}

/** How the experiment narrowed down, as reported by the team that cloned Dolly. */
export const FUNNEL = [
  { label: 'Trứng chuyển nhân tạo được', count: 277 },
  { label: 'Phôi đem cấy vào cừu mang thai hộ', count: 29 },
  { label: 'Cừu con sống', count: 1 },
];

/**
 * The share of the eggs that reached a step, as text in percent.
 * @param {number} count
 */
export function funnelShare(count) {
  return `${formatNumber((count / FUNNEL[0].count) * 100, 2)}%`;
}

/** @type {import('#lib/core/card-sorter.js').SortBin[]} */
export const BINS = [
  { id: 'nhan-ban', label: 'Nhân bản vô tính' },
  { id: 'te-bao-goc', label: 'Liệu pháp tế bào gốc' },
  { id: 'gene', label: 'Liệu pháp gene' },
];

/** @type {import('#lib/core/card-sorter.js').SortCard[]} */
export const ACHIEVEMENTS = [
  {
    id: 'dolly',
    label: 'Cừu Dolly ra đời từ nhân tế bào tuyến vú',
    bin: 'nhan-ban',
    why: 'Con vật mang hệ gene trong nhân của một cá thể khác, không qua thụ tinh.',
  },
  {
    id: 'lon-i',
    label: 'Việt Nam tạo được những con lợn Ỉ từ tế bào sinh dưỡng',
    bin: 'nhan-ban',
    why: 'Đây là chuyển nhân tế bào sinh dưỡng, giúp giữ nguồn gene của giống lợn quý.',
  },
  {
    id: 'bao-ton',
    label: 'Tăng số cá thể của loài có nguy cơ tuyệt chủng từ tế bào lưu giữ',
    bin: 'nhan-ban',
    why: 'Nhân bản có thể tạo cá thể mới mà không cần ghép đôi.',
  },
  {
    id: 'hoa-tri',
    label: 'Phục hồi tế bào máu sau hoá trị, xạ trị bằng ghép tuỷ',
    bin: 'te-bao-goc',
    why: 'Tế bào gốc tạo máu được truyền vào để tạo lại các tế bào máu đã bị phá huỷ.',
  },
  {
    id: 'cuong-ron',
    label: 'Lưu giữ máu cuống rốn để dùng khi cần ghép',
    bin: 'te-bao-goc',
    why: 'Máu cuống rốn chứa tế bào gốc tạo máu.',
  },
  {
    id: 'tieu-duong',
    label: 'Thử nghiệm tạo tế bào tiết insulin cho người bệnh tiểu đường type 1',
    bin: 'te-bao-goc',
    why: 'Tế bào gốc được cho biệt hoá thành tế bào cần thay thế.',
  },
  {
    id: 'mien-dich',
    label: 'Sửa gene hỏng trong tế bào tuỷ của người bệnh suy giảm miễn dịch',
    bin: 'gene',
    why: 'Mục tiêu là thay gene bệnh bằng gene lành, rồi đưa tế bào trở lại cơ thể.',
  },
  {
    id: 'xo-nang',
    label: 'Đưa gene CFTR bình thường vào tế bào phổi bằng vector virus',
    bin: 'gene',
    why: 'Bệnh xơ nang do gene CFTR hỏng, nên người ta đưa gene lành vào.',
  },
  {
    id: 'car-t',
    label: 'Chỉnh gene tế bào T của người bệnh để diệt tế bào ung thư máu (CAR-T)',
    bin: 'gene',
    why: 'Tế bào T được thêm gene mới để nhận ra tế bào ung thư.',
  },
];
