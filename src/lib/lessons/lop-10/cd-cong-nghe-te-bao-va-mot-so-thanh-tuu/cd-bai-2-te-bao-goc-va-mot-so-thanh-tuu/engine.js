/**
 * The differentiation tree of stem cells: each cell names the cells it can give
 * directly, so what a stem cell can still become is everything under it. An
 * induced stem cell is not on the tree, it reaches what a pluripotent cell
 * reaches. No DOM here, so all of it is tested in Node.
 */

/**
 * @typedef {'toan-nang' | 'van-nang' | 'da-tiem-nang' | 'don-nang' | 'chuyen-hoa'} Level
 * @typedef {{ id: string, name: string, level: Level, children?: string[], reachAs?: string, info: string }} Cell
 * @typedef {{ from: string, to: string }} Question
 */

/** @type {Record<Level, string>} */
export const LEVEL_NAMES = {
  'toan-nang': 'Toàn năng',
  'van-nang': 'Vạn năng',
  'da-tiem-nang': 'Đa tiềm năng',
  'don-nang': 'Đơn năng',
  'chuyen-hoa': 'Tế bào chuyên hoá',
};

/** The root of the tree. */
export const ROOT = 'hop-tu';
/** The cell an induced stem cell is made from in the widget. */
export const SKIN_CELL = 'te-bao-da';
/** The induced stem cell, which sits outside the tree. */
export const INDUCED = 'cam-ung';

/** @type {Cell[]} */
export const CELLS = [
  {
    id: 'hop-tu',
    name: 'Hợp tử, tế bào phôi rất sớm',
    level: 'toan-nang',
    children: ['nhau-thai', 'khoi-trong'],
    info: 'Có thể tạo ra mọi loại tế bào của cơ thể và cả các tế bào của nhau thai, nên một mình nó có thể phát triển thành cơ thể hoàn chỉnh.',
  },
  {
    id: 'nhau-thai',
    name: 'Tế bào nhau thai',
    level: 'chuyen-hoa',
    info: 'Thuộc phần nuôi phôi. Tế bào vạn năng không tạo được nhóm này.',
  },
  {
    id: 'khoi-trong',
    name: 'Khối tế bào bên trong phôi nang',
    level: 'van-nang',
    children: ['goc-mau', 'goc-than-kinh', 'goc-trung-mo', 'goc-co', 'goc-bieu-bi'],
    info: 'Tạo được mọi loại tế bào của cơ thể, trừ nhau thai. Tế bào gốc phôi được lấy từ khối này.',
  },
  {
    id: 'goc-mau',
    name: 'Tế bào gốc tạo máu (tuỷ xương)',
    level: 'da-tiem-nang',
    children: ['hong-cau', 'bach-cau', 'tieu-cau'],
    info: 'Tạo được một số loại tế bào cùng một nhóm: các tế bào máu.',
  },
  {
    id: 'hong-cau',
    name: 'Hồng cầu',
    level: 'chuyen-hoa',
    info: 'Hồng cầu trưởng thành ở người không có nhân, nên không có tính toàn năng và không phân chia.',
  },
  { id: 'bach-cau', name: 'Bạch cầu', level: 'chuyen-hoa', info: 'Tế bào miễn dịch trong máu.' },
  { id: 'tieu-cau', name: 'Tiểu cầu', level: 'chuyen-hoa', info: 'Tham gia làm đông máu.' },
  {
    id: 'goc-than-kinh',
    name: 'Tế bào gốc thần kinh',
    level: 'da-tiem-nang',
    children: ['neuron', 'than-kinh-dem'],
    info: 'Tạo được các loại tế bào của mô thần kinh.',
  },
  { id: 'neuron', name: 'Neuron', level: 'chuyen-hoa', info: 'Tế bào dẫn truyền xung thần kinh.' },
  {
    id: 'than-kinh-dem',
    name: 'Tế bào thần kinh đệm',
    level: 'chuyen-hoa',
    info: 'Nâng đỡ và nuôi dưỡng neuron.',
  },
  {
    id: 'goc-trung-mo',
    name: 'Tế bào gốc trung mô',
    level: 'da-tiem-nang',
    children: ['te-bao-xuong', 'te-bao-sun', 'te-bao-mo'],
    info: 'Tạo được một số loại tế bào của mô liên kết.',
  },
  { id: 'te-bao-xuong', name: 'Tế bào xương', level: 'chuyen-hoa', info: 'Tạo nên mô xương.' },
  { id: 'te-bao-sun', name: 'Tế bào sụn', level: 'chuyen-hoa', info: 'Tạo nên mô sụn.' },
  { id: 'te-bao-mo', name: 'Tế bào mỡ', level: 'chuyen-hoa', info: 'Tích trữ lipid.' },
  {
    id: 'goc-co',
    name: 'Tế bào gốc cơ',
    level: 'don-nang',
    children: ['te-bao-co'],
    info: 'Chỉ tạo được một hoặc rất ít loại tế bào: ở đây là tế bào cơ.',
  },
  { id: 'te-bao-co', name: 'Tế bào cơ', level: 'chuyen-hoa', info: 'Co rút để tạo ra cử động.' },
  {
    id: 'goc-bieu-bi',
    name: 'Tế bào gốc biểu bì',
    level: 'don-nang',
    children: ['te-bao-da'],
    info: 'Chỉ tạo được tế bào biểu bì, thay thế lớp da bị bong đi.',
  },
  {
    id: 'te-bao-da',
    name: 'Tế bào da',
    level: 'chuyen-hoa',
    info: 'Đã chuyên hoá, bình thường không tạo được loại tế bào khác. Nhờ giải biệt hoá trong phòng thí nghiệm, nó có thể thành tế bào gốc cảm ứng.',
  },
  {
    id: 'cam-ung',
    name: 'Tế bào gốc cảm ứng',
    level: 'van-nang',
    reachAs: 'khoi-trong',
    info: 'Tạo được bằng cách giải biệt hoá tế bào chuyên hoá của cơ thể trưởng thành. Nó có khả năng biệt hoá gần như tế bào vạn năng, không cần lấy từ phôi.',
  },
];

const BY_ID = new Map(CELLS.map((c) => [c.id, c]));

/**
 * A cell by its id.
 * @param {string} id
 * @returns {Cell}
 */
export function cellOf(id) {
  const c = BY_ID.get(id);
  if (!c) throw new Error(`unknown cell ${id}`);
  return c;
}

/**
 * The cells under a cell on the tree, for an induced cell those under the
 * cell it behaves like.
 * @param {string} id
 * @returns {string[]}
 */
export function reachOf(id) {
  const cell = cellOf(id);
  if (cell.reachAs) return reachOf(cell.reachAs);
  return (cell.children ?? []).flatMap((c) => [c, ...reachOf(c)]);
}

/**
 * Whether a cell can differentiate into another.
 * @param {string} from @param {string} to
 */
export function canBecome(from, to) {
  return reachOf(from).includes(to);
}

/**
 * The cells that are specialised, counted out of all those under a cell.
 * @param {string} id
 */
export function specialisedUnder(id) {
  return reachOf(id).filter((c) => cellOf(c).level === 'chuyen-hoa').length;
}

/**
 * What the info line says about a selected cell.
 * @param {string} id
 */
export function describe(id) {
  const cell = cellOf(id);
  const count = specialisedUnder(id);
  const reach =
    count === 0
      ? 'Trên sơ đồ, tế bào này không tạo thêm loại tế bào nào.'
      : `Trên sơ đồ, nó tạo được ${count} loại tế bào chuyên hoá.`;
  return `${LEVEL_NAMES[cell.level]}. ${cell.info} ${reach}`;
}

/** @type {Question[]} */
export const QUESTIONS = [
  { from: 'goc-mau', to: 'hong-cau' },
  { from: 'goc-mau', to: 'neuron' },
  { from: 'khoi-trong', to: 'te-bao-xuong' },
  { from: 'khoi-trong', to: 'nhau-thai' },
  { from: 'hop-tu', to: 'nhau-thai' },
  { from: 'goc-co', to: 'te-bao-mo' },
  { from: 'cam-ung', to: 'neuron' },
  { from: 'goc-trung-mo', to: 'te-bao-sun' },
  { from: 'hong-cau', to: 'bach-cau' },
];

/**
 * The feedback after answering whether `from` becomes `to`.
 * @param {Question} q @param {boolean} said
 * @returns {{ ok: boolean, text: string }}
 */
export function judge(q, said) {
  const yes = canBecome(q.from, q.to);
  const from = cellOf(q.from);
  const to = cellOf(q.to).name.toLowerCase();
  const fact = yes ? `${from.name} tạo được ${to}.` : `${from.name} không tạo được ${to}.`;
  const lead = said === yes ? 'Đúng.' : 'Chưa đúng.';
  return { ok: said === yes, text: `${lead} ${fact} ${from.info}` };
}
