/**
 * Cell growth and division for the division widget: the stages of one
 * division, the doubling count 2^n and a grid layout for drawing the cells.
 */

/** @typedef {'dong-vat' | 'thuc-vat'} CellKind */

/** Most divisions the widget draws as separate cells (2^6 = 64 cells). */
export const MAX_DRAWN = 6;

/** Most divisions the counter goes to. */
export const MAX_DIVISIONS = 10;

/**
 * Stages of one cell division, with the text for animal and plant cells.
 * @type {Array<{ id: string, title: string, text: Record<CellKind, string> }>}
 */
export const STAGES = [
  {
    id: 'te-bao-non',
    title: 'Tế bào non',
    text: {
      'dong-vat': 'Tế bào mới hình thành có kích thước nhỏ.',
      'thuc-vat': 'Tế bào mới hình thành có kích thước nhỏ, không bào còn nhỏ.',
    },
  },
  {
    id: 'lon-len',
    title: 'Lớn lên',
    text: {
      'dong-vat': 'Tế bào lấy chất dinh dưỡng, lớn dần lên đến một kích thước nhất định.',
      'thuc-vat':
        'Tế bào lấy chất dinh dưỡng, lớn dần lên đến một kích thước nhất định; không bào to ra.',
    },
  },
  {
    id: 'chia-nhan',
    title: 'Phân chia nhân',
    text: {
      'dong-vat': 'Đầu tiên, nhân phân chia thành hai nhân.',
      'thuc-vat': 'Đầu tiên, nhân phân chia thành hai nhân.',
    },
  },
  {
    id: 'chia-chat',
    title: 'Phân chia tế bào chất',
    text: {
      'dong-vat': 'Sau đó tế bào chất phân chia: màng tế bào thắt lại ở giữa.',
      'thuc-vat': 'Sau đó tế bào chất phân chia: một vách ngăn hình thành ở giữa tế bào.',
    },
  },
  {
    id: 'hai-te-bao',
    title: 'Hai tế bào con',
    text: {
      'dong-vat': 'Từ một tế bào mẹ tạo thành hai tế bào con. Mỗi tế bào con lại tiếp tục lớn lên.',
      'thuc-vat': 'Từ một tế bào mẹ tạo thành hai tế bào con. Mỗi tế bào con lại tiếp tục lớn lên.',
    },
  },
];

/**
 * Number of cells after `n` divisions, starting from `start` cells that all
 * divide each time.
 * @param {number} n
 * @param {number} [start]
 */
export function cellsAfter(n, start = 1) {
  return start * 2 ** n;
}

/**
 * Fewest divisions for one cell to give at least `target` cells.
 * @param {number} target
 */
export function divisionsToReach(target) {
  let n = 0;
  while (cellsAfter(n) < target) n++;
  return n;
}

/**
 * Centres and radius that lay out `count` equal circles in a `w` by `h` box.
 * @param {number} count
 * @param {number} w
 * @param {number} h
 */
export function gridLayout(count, w, h) {
  let cols = 1;
  let size = 0;
  for (let c = 1; c <= count; c++) {
    const s = Math.min(w / c, h / Math.ceil(count / c));
    if (s > size) {
      size = s;
      cols = c;
    }
  }
  const rows = Math.ceil(count / cols);
  const x0 = (w - cols * size) / 2 + size / 2;
  const y0 = (h - rows * size) / 2 + size / 2;
  /** @type {Array<{ x: number, y: number }>} */
  const points = [];
  for (let i = 0; i < count; i++) {
    points.push({ x: x0 + (i % cols) * size, y: y0 + Math.floor(i / cols) * size });
  }
  return { points, r: size * 0.42 };
}
