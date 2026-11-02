/**
 * The steps of plant tissue culture and animal cloning to put in order, and
 * what each kind of cell can still become. No DOM here, so all of it is tested
 * in Node.
 */
import { rng, shuffle } from '#lib/core/drill.js';

/**
 * @typedef {{ text: string, tag: string }} ProcessStep
 * @typedef {{ id: string, name: string, steps: ProcessStep[], done: string }} Process
 */

/** @type {Process[]} */
export const PROCESSES = [
  {
    id: 'nuoi-cay-mo',
    name: 'Nuôi cấy mô thực vật',
    steps: [
      { text: 'Lấy mảnh mô từ cây mẹ mang đặc tính tốt, khử trùng', tag: 'Mô cây mẹ' },
      { text: 'Nuôi mô trong ống nghiệm có môi trường dinh dưỡng và hormone', tag: 'Ống nghiệm' },
      { text: 'Tế bào phản biệt hoá, phân chia tạo mô sẹo', tag: 'Mô sẹo' },
      { text: 'Chuyển mô sẹo sang môi trường có hormone kích thích tạo chồi, rễ', tag: 'Chồi, rễ' },
      { text: 'Đưa cây con ra vườn ươm, trồng thành cây hoàn chỉnh', tag: 'Cây con' },
    ],
    done: 'Đúng thứ tự. Mọi cây con đều có kiểu gene giống cây mẹ, vì chúng tạo thành qua nguyên phân. Nguyên lí của quy trình là tính toàn năng của tế bào thực vật.',
  },
  {
    id: 'nhan-ban',
    name: 'Nhân bản vô tính cừu Dolly',
    steps: [
      { text: 'Lấy nhân từ tế bào tuyến vú của cừu cho nhân (cừu mặt trắng)', tag: 'Nhân tế bào' },
      {
        text: 'Lấy trứng của cừu cho trứng (cừu mặt đen) và loại bỏ nhân',
        tag: 'Trứng không nhân',
      },
      { text: 'Chuyển nhân tế bào tuyến vú vào trứng đã mất nhân', tag: 'Tế bào chuyển nhân' },
      { text: 'Nuôi tế bào trong ống nghiệm cho phát triển thành phôi', tag: 'Phôi' },
      { text: 'Cấy phôi vào tử cung cừu mang thai hộ (cừu mặt đen)', tag: 'Mang thai hộ' },
      { text: 'Cừu con ra đời, mang đặc điểm của cừu cho nhân', tag: 'Cừu Dolly' },
    ],
    done: 'Đúng thứ tự. Cừu Dolly ra đời năm 1996 và có mặt trắng như cừu cho nhân, vì nhân tế bào quyết định phần lớn các tính trạng.',
  },
];

/**
 * The steps in a mixed order that is never already the right one.
 * @param {number} count @param {number} seed
 * @returns {number[]}
 */
export function mixedOrder(count, seed) {
  const rand = rng(seed);
  const right = Array.from({ length: count }, (_, i) => i);
  let order = shuffle(rand, right);
  while (order.every((v, i) => v === i)) order = shuffle(rand, right);
  return order;
}

/**
 * How many steps sit in their right place.
 * @param {number[]} order
 */
export const inPlace = (order) => order.filter((v, i) => v === i).length;

/**
 * @typedef {{ id: string, name: string, kind: string, reach: string[], text: string }} CellSource
 */

/** @type {{ id: string, name: string }[]} */
export const TARGETS = [
  { id: 'hong-cau', name: 'Hồng cầu' },
  { id: 'bach-cau', name: 'Bạch cầu' },
  { id: 'than-kinh', name: 'Tế bào thần kinh' },
  { id: 'co-tim', name: 'Tế bào cơ tim' },
  { id: 'co-the', name: 'Một cơ thể hoàn chỉnh' },
];

/** @type {CellSource[]} */
export const SOURCES = [
  {
    id: 'hop-tu',
    name: 'Hợp tử',
    kind: 'Tế bào toàn năng',
    reach: ['hong-cau', 'bach-cau', 'than-kinh', 'co-tim', 'co-the'],
    text: 'Hợp tử có tính toàn năng: từ một tế bào có thể phát triển thành cả cơ thể với mọi loại tế bào.',
  },
  {
    id: 'phoi',
    name: 'Tế bào gốc phôi',
    kind: 'Tế bào gốc vạn năng',
    reach: ['hong-cau', 'bach-cau', 'than-kinh', 'co-tim'],
    text: 'Tế bào gốc phôi lấy từ phôi sớm, biệt hoá được thành mọi loại tế bào của cơ thể trưởng thành, nhưng một mình nó không tạo được cơ thể hoàn chỉnh.',
  },
  {
    id: 'tao-mau',
    name: 'Tế bào gốc tạo máu',
    kind: 'Tế bào gốc trưởng thành (đa tiềm năng)',
    reach: ['hong-cau', 'bach-cau'],
    text: 'Tế bào gốc tạo máu trong tuỷ xương là tế bào gốc trưởng thành, chỉ biệt hoá được thành một số loại tế bào nhất định: các tế bào máu.',
  },
  {
    id: 'da-biet-hoa',
    name: 'Tế bào da đã sừng hoá',
    kind: 'Tế bào đã biệt hoá',
    reach: [],
    text: 'Tế bào động vật đã biệt hoá hoàn toàn không còn khả năng phân chia để tạo thành các loại tế bào khác.',
  },
];

/**
 * Whether a cell can become a target.
 * @param {string} sourceId @param {string} targetId
 */
export function canBecome(sourceId, targetId) {
  return SOURCES.find((s) => s.id === sourceId)?.reach.includes(targetId) ?? false;
}
