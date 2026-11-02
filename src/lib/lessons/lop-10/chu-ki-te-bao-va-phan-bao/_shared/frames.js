/**
 * Mitosis and meiosis as lists of drawn stages for a cell with 2n = 4: one long
 * and one short pair of homologous chromosomes, one homologue of each pair in
 * blue and the other in red. Every stage places the same eight chromatids, so a
 * player can slide between stages. No DOM here, so all of it is tested in Node.
 */

export const BLUE = '#2563eb';
export const RED = '#dc2626';

/**
 * @typedef {{ x: number, y: number }} Point
 * @typedef {{
 *   id: string; x: number; y: number; rot: number; side: number; off: number;
 *   splay: number; len: number; w: number; colors: [string, string]; pole: Point | null;
 * }} Chromatid
 * @typedef {{ cx: number, cy: number, rx: number, ry: number, pinch: number, wall: boolean }} Cell
 * @typedef {{ cx: number, cy: number, r: number, o: number, nucleolus: boolean }} Nucleus
 * @typedef {{ cells: number, nst: number, state: 'kép' | 'đơn' }} Counts
 * @typedef {{
 *   id: string; name: string; text: string; counts: Counts; cells: Cell[]; nuclei: Nucleus[];
 *   poles: Point[]; star: boolean; plate: number; chiasmata: Point[]; chromatids: Chromatid[];
 * }} Frame
 */

const LEN = { a: 34, b: 22 };
const PAIRS = ['a0', 'b0', 'a1', 'b1'];

/** @param {string} id */
const colorOf = (id) => (id[1] === '0' ? BLUE : RED);

/**
 * One chromatid: the pair letter sets its length, `k` the sister it is.
 * @param {string} chromosome @param {0 | 1} k
 * @param {Partial<Chromatid> & { x: number, y: number }} place
 * @returns {Chromatid}
 */
function chromatid(chromosome, k, place) {
  const len = LEN[/** @type {'a' | 'b'} */ (chromosome[0])];
  const color = colorOf(chromosome);
  return {
    id: `${chromosome}:${k}`,
    rot: 90,
    side: k === 0 ? -1 : 1,
    off: 3.5,
    splay: 1.5,
    len,
    w: 4,
    colors: [color, color],
    pole: null,
    ...place,
  };
}

/**
 * Both sisters of each listed chromosome, placed by `place(chromosome, k, side)`.
 * @param {string[]} chromosomes
 * @param {(chromosome: string, k: 0 | 1, side: number) => Partial<Chromatid> & { x: number, y: number }} place
 */
function allChromatids(chromosomes, place) {
  return chromosomes.flatMap((c) =>
    /** @type {(0 | 1)[]} */ ([0, 1]).map((k) => chromatid(c, k, place(c, k, k === 0 ? -1 : 1))),
  );
}

/** @param {number} cx @param {number} cy @param {number} rx @param {number} ry @param {number} pinch @param {boolean} wall @returns {Cell} */
const cell = (cx, cy, rx, ry, pinch, wall) => ({ cx, cy, rx, ry, pinch, wall });
/** @param {number} cx @param {number} cy @param {number} r @param {number} o @param {boolean} nucleolus @returns {Nucleus} */
const nucleus = (cx, cy, r, o, nucleolus) => ({ cx, cy, r, o, nucleolus });

/** Where each loose chromosome lies inside the interphase nucleus. */
const LOOSE = {
  a0: { dx: -20, dy: -18, rot: 40 },
  b0: { dx: 20, dy: -24, rot: 120 },
  a1: { dx: 22, dy: 18, rot: 60 },
  b1: { dx: -22, dy: 22, rot: 150 },
};

/** @param {string} id @returns {{ dx: number, dy: number, rot: number }} */
const looseOf = (id) => LOOSE[/** @type {'a0' | 'b0' | 'a1' | 'b1'} */ (id)];

/**
 * The stages of mitosis. Plant cells have a wall and build a plate across the
 * middle; animal cells have centrosomes and pinch in two.
 * @param {boolean} plant
 * @returns {Frame[]}
 */
export function mitosisFrames(plant) {
  const CX = 160;
  const CY = 100;
  const SLOT = { a0: 46, b0: 84, a1: 116, b1: 154 };
  /** @param {string} id */
  const slot = (id) => SLOT[/** @type {'a0' | 'b0' | 'a1' | 'b1'} */ (id)];
  const poles = [
    { x: 40, y: CY },
    { x: 280, y: CY },
  ];
  /** @param {number} side */
  const poleOf = (side) => poles[side < 0 ? 0 : 1];
  const whole = cell(CX, CY, plant ? 130 : 125, plant ? 82 : 80, 0, plant);
  const shared = { poles: [], star: !plant, plate: 0, chiasmata: [] };
  return [
    {
      ...shared,
      id: 'trung-gian',
      name: 'Kì trung gian',
      text: 'DNA đã nhân đôi ở pha S: mỗi NST thành NST kép gồm hai nhiễm sắc tử chị em dính nhau ở tâm động, còn ở dạng sợi mảnh trong nhân.',
      counts: { cells: 1, nst: 4, state: 'kép' },
      cells: [whole],
      nuclei: [nucleus(CX, CY, 56, 1, true)],
      chromatids: allChromatids(PAIRS, (c) => ({
        x: CX + looseOf(c).dx,
        y: CY + looseOf(c).dy,
        rot: looseOf(c).rot,
        off: 1.5,
        splay: 0,
        w: 1.3,
        len: c[0] === 'a' ? 42 : 30,
      })),
    },
    {
      ...shared,
      id: 'dau',
      name: 'Kì đầu',
      text: 'NST kép co xoắn dần và hiện rõ. Thoi phân bào bắt đầu hình thành, màng nhân và hạch nhân dần tiêu biến.',
      counts: { cells: 1, nst: 4, state: 'kép' },
      cells: [whole],
      nuclei: [nucleus(CX, CY, 56, 0.3, false)],
      poles,
      chromatids: allChromatids(PAIRS, (c) => ({
        x: CX + looseOf(c).dx * 1.2,
        y: CY + looseOf(c).dy * 1.2,
        rot: looseOf(c).rot,
        off: 3,
        w: 3,
      })),
    },
    {
      ...shared,
      id: 'giua',
      name: 'Kì giữa',
      text: 'NST kép co xoắn cực đại, xếp thành một hàng trên mặt phẳng xích đạo. Sợi thoi phân bào gắn vào tâm động từ hai phía. Đây là lúc dễ quan sát hình dạng NST nhất.',
      counts: { cells: 1, nst: 4, state: 'kép' },
      cells: [whole],
      nuclei: [],
      poles,
      chromatids: allChromatids(PAIRS, (c, _k, side) => ({
        x: CX,
        y: slot(c),
        pole: poleOf(side),
      })),
    },
    {
      ...shared,
      id: 'sau',
      name: 'Kì sau',
      text: 'Hai nhiễm sắc tử chị em tách nhau ở tâm động thành hai NST đơn và đi về hai cực. Trong tế bào lúc này có $8$ NST đơn. Đây là kì ngắn nhất.',
      counts: { cells: 1, nst: 8, state: 'đơn' },
      cells: [plant ? whole : cell(CX, CY, 138, 76, 0, false)],
      nuclei: [],
      poles,
      chromatids: allChromatids(PAIRS, (c, _k, side) => ({
        x: CX + side * 72,
        y: CY + (slot(c) - CY) * 0.72,
        off: 0,
        splay: 0,
        pole: poleOf(side),
      })),
    },
    {
      ...shared,
      id: 'cuoi',
      name: 'Kì cuối',
      text: plant
        ? 'NST dãn xoắn, màng nhân và hạch nhân xuất hiện lại, thoi phân bào tiêu biến. Vách ngăn bắt đầu hình thành ở giữa tế bào. Mỗi nhân mới có $2n = 4$ NST đơn.'
        : 'NST dãn xoắn, màng nhân và hạch nhân xuất hiện lại, thoi phân bào tiêu biến. Tế bào thắt eo ở vùng giữa. Mỗi nhân mới có $2n = 4$ NST đơn.',
      counts: { cells: 2, nst: 4, state: 'đơn' },
      cells: [plant ? whole : cell(CX, CY, 148, 76, 0.55, false)],
      nuclei: [nucleus(CX - 88, CY, 38, 0.8, true), nucleus(CX + 88, CY, 38, 0.8, true)],
      plate: plant ? 0.55 : 0,
      chromatids: allChromatids(PAIRS, (c, _k, side) => ({
        x: CX + side * 88,
        y: CY + (slot(c) - CY) * 0.45,
        off: 0,
        splay: 0,
        w: 1.6,
      })),
    },
    {
      ...shared,
      id: 'te-bao-con',
      name: 'Tế bào con',
      text: plant
        ? 'Vách ngăn hoàn chỉnh chia tế bào chất làm đôi. Hai tế bào con giống nhau và giống hệt tế bào mẹ, mỗi tế bào có $2n = 4$ NST đơn.'
        : 'Eo thắt sâu dần đến khi tách thành hai tế bào. Hai tế bào con giống nhau và giống hệt tế bào mẹ, mỗi tế bào có $2n = 4$ NST đơn.',
      counts: { cells: 2, nst: 4, state: 'đơn' },
      cells: plant
        ? [cell(95, CY, 65, 82, 0, true), cell(225, CY, 65, 82, 0, true)]
        : [cell(78, CY, 72, 68, 0, false), cell(242, CY, 72, 68, 0, false)],
      nuclei: plant
        ? [nucleus(95, CY, 38, 1, true), nucleus(225, CY, 38, 1, true)]
        : [nucleus(78, CY, 38, 1, true), nucleus(242, CY, 38, 1, true)],
      chromatids: allChromatids(PAIRS, (c, _k, side) => ({
        x: (plant ? 160 + side * 65 : 160 + side * 82) + looseOf(c).dx * 0.6,
        y: CY + looseOf(c).dy * 0.75,
        rot: looseOf(c).rot,
        off: 0,
        splay: 0,
        w: 1.3,
        len: c[0] === 'a' ? 30 : 20,
      })),
    },
  ];
}

/**
 * The stages of meiosis in an animal cell.
 * @param {{ crossover: boolean, flip: boolean }} options `crossover`: the long
 *   pair swaps arms between two non-sister chromatids. `flip`: the short pair
 *   lines up the other way round at metaphase I.
 * @returns {Frame[]}
 */
export function meiosisFrames({ crossover, flip }) {
  const { left, right } = sides(flip);
  const CX = 180;
  const CY = 110;
  const Y = { a: 68, b: 152 };
  /** @param {string} c */
  const pairY = (c) => Y[/** @type {'a' | 'b'} */ (c[0])];
  /** @param {string} c */
  const homologSide = (c) => (left.includes(c) ? -1 : 1);
  /** @param {string} c @param {0 | 1} k */
  const colorsAfter = (c, k) =>
    /** @type {[string, string]} */ (crossover ? crossedColors(c, k) : [colorOf(c), colorOf(c)]);
  const all = [...left, ...right];
  const shared = { poles: [], star: true, plate: 0, chiasmata: [] };
  const pole = { l: { x: 40, y: CY }, r: { x: 320, y: CY } };
  const CELL_A = 90;
  const CELL_B = 270;
  /** @param {string} c */
  const home = (c) => (homologSide(c) < 0 ? CELL_A : CELL_B);
  const two = [cell(CELL_A, CY, 84, 92, 0, false), cell(CELL_B, CY, 84, 92, 0, false)];
  const polesII = [
    { x: CELL_A - 68, y: CY },
    { x: CELL_A + 68, y: CY },
    { x: CELL_B - 68, y: CY },
    { x: CELL_B + 68, y: CY },
  ];
  /** @param {string} c @param {number} side */
  const poleII = (c, side) => ({ x: home(c) + side * 68, y: CY });
  const big = cell(CX, CY, 150, 98, 0, false);
  return [
    {
      ...shared,
      id: 'trung-gian',
      name: 'Kì trung gian',
      text: 'Trước khi giảm phân, DNA nhân đôi một lần: mỗi NST thành NST kép. Tế bào có $2n = 4$ NST kép, gồm hai cặp tương đồng: một chiếc xanh, một chiếc đỏ.',
      counts: { cells: 1, nst: 4, state: 'kép' },
      cells: [big],
      nuclei: [nucleus(CX, CY, 60, 1, true)],
      chromatids: allChromatids(all, (c) => ({
        x: CX + looseOf(c).dx,
        y: CY + looseOf(c).dy,
        rot: looseOf(c).rot,
        off: 1.5,
        splay: 0,
        w: 1.3,
        len: c[0] === 'a' ? 42 : 30,
      })),
    },
    {
      ...shared,
      id: 'dau-1-bat-doi',
      name: 'Kì đầu I: bắt đôi',
      text: 'Các NST kép co xoắn dần. Hai NST kép của mỗi cặp tương đồng bắt đôi với nhau theo chiều dọc. Đây là điều nguyên phân không có.',
      counts: { cells: 1, nst: 4, state: 'kép' },
      cells: [big],
      nuclei: [nucleus(CX, CY, 82, 0.3, false)],
      chromatids: allChromatids(all, (c) => ({
        x: CX + homologSide(c) * 11,
        y: pairY(c),
        off: 3,
        w: 3,
      })),
    },
    {
      ...shared,
      id: 'dau-1-trao-doi',
      name: crossover ? 'Kì đầu I: trao đổi chéo' : 'Kì đầu I: không trao đổi chéo',
      text: crossover
        ? 'Hai nhiễm sắc tử không chị em của cặp NST dài trao đổi đoạn tương ứng cho nhau: mỗi NST kép giờ mang một nhiễm sắc tử hai màu, tức tổ hợp gene mới.'
        : 'Trao đổi chéo có thể xảy ra nhưng không bắt buộc. Lần này không có, nên mỗi nhiễm sắc tử giữ nguyên một màu.',
      counts: { cells: 1, nst: 4, state: 'kép' },
      cells: [big],
      nuclei: [nucleus(CX, CY, 82, 0.15, false)],
      chiasmata: crossover ? [{ x: CX, y: Y.a }] : [],
      chromatids: allChromatids(all, (c, k) => ({
        x: CX + homologSide(c) * 7,
        y: pairY(c),
        off: 3,
        w: 3.4,
        colors: colorsAfter(c, k),
      })),
    },
    {
      ...shared,
      id: 'giua-1',
      name: 'Kì giữa I',
      text: 'Các cặp NST kép tương đồng xếp thành hai hàng trên mặt phẳng xích đạo. Mỗi NST kép gắn với sợi thoi từ một cực. Cặp nào xoay về phía nào là ngẫu nhiên, không phụ thuộc cặp kia.',
      counts: { cells: 1, nst: 4, state: 'kép' },
      cells: [big],
      nuclei: [],
      poles: [pole.l, pole.r],
      chromatids: allChromatids(all, (c, k) => ({
        x: CX + homologSide(c) * 11,
        y: pairY(c),
        colors: colorsAfter(c, k),
        pole: homologSide(c) < 0 ? pole.l : pole.r,
      })),
    },
    {
      ...shared,
      id: 'sau-1',
      name: 'Kì sau I',
      text: 'Hai NST kép của mỗi cặp tương đồng tách nhau và đi về hai cực. Tâm động chưa tách, nên về mỗi cực vẫn là NST kép.',
      counts: { cells: 1, nst: 4, state: 'kép' },
      cells: [big],
      nuclei: [],
      poles: [pole.l, pole.r],
      chromatids: allChromatids(all, (c, k) => ({
        x: CX + homologSide(c) * 80,
        y: CY + (pairY(c) - CY) * 0.65,
        colors: colorsAfter(c, k),
        pole: homologSide(c) < 0 ? pole.l : pole.r,
      })),
    },
    {
      ...shared,
      id: 'cuoi-1',
      name: 'Kì cuối I',
      text: 'Hai nhân mới hình thành và tế bào chất phân chia. Từ một tế bào $2n$ tạo ra hai tế bào, mỗi tế bào có $n = 2$ NST kép: số NST đã giảm đi một nửa.',
      counts: { cells: 2, nst: 2, state: 'kép' },
      cells: [cell(CX, CY, 170, 92, 0.6, false)],
      nuclei: [nucleus(CX - 100, CY, 46, 0.8, false), nucleus(CX + 100, CY, 46, 0.8, false)],
      chromatids: allChromatids(all, (c, k) => ({
        x: CX + homologSide(c) * 100,
        y: CY + (pairY(c) - CY) * 0.45,
        colors: colorsAfter(c, k),
        off: 2.5,
        w: 2.4,
      })),
    },
    {
      ...shared,
      id: 'dau-2',
      name: 'Kì đầu II',
      text: 'Không có nhân đôi DNA trước giảm phân II. Trong mỗi tế bào, NST kép co xoắn lại, thoi phân bào hình thành và màng nhân tiêu biến.',
      counts: { cells: 2, nst: 2, state: 'kép' },
      cells: two,
      nuclei: [],
      poles: polesII,
      chromatids: allChromatids(all, (c, k) => ({
        x: home(c) + (c[0] === 'a' ? -14 : 14),
        y: CY + (pairY(c) - CY) * 0.7,
        rot: c[0] === 'a' ? 70 : 110,
        colors: colorsAfter(c, k),
        off: 3,
        w: 3,
      })),
    },
    {
      ...shared,
      id: 'giua-2',
      name: 'Kì giữa II',
      text: 'Trong mỗi tế bào, các NST kép xếp thành một hàng trên mặt phẳng xích đạo, hai nhiễm sắc tử quay về hai cực.',
      counts: { cells: 2, nst: 2, state: 'kép' },
      cells: two,
      nuclei: [],
      poles: polesII,
      chromatids: allChromatids(all, (c, k, side) => ({
        x: home(c),
        y: CY + (pairY(c) - CY) * 0.75,
        colors: colorsAfter(c, k),
        pole: poleII(c, side),
      })),
    },
    {
      ...shared,
      id: 'sau-2',
      name: 'Kì sau II',
      text: 'Tâm động tách, hai nhiễm sắc tử thành hai NST đơn đi về hai cực. Mỗi tế bào đang chia có $4$ NST đơn.',
      counts: { cells: 2, nst: 4, state: 'đơn' },
      cells: two,
      nuclei: [],
      poles: polesII,
      chromatids: allChromatids(all, (c, k, side) => ({
        x: home(c) + side * 42,
        y: CY + (pairY(c) - CY) * 0.65,
        colors: colorsAfter(c, k),
        off: 0,
        splay: 0,
        pole: poleII(c, side),
      })),
    },
    {
      ...shared,
      id: 'cuoi-2',
      name: 'Kì cuối II',
      text: 'Màng nhân hình thành lại và tế bào chất phân chia. Từ hai tế bào $n$ kép tạo ra bốn tế bào, mỗi tế bào có $n = 2$ NST đơn.',
      counts: { cells: 4, nst: 2, state: 'đơn' },
      cells: [cell(CELL_A, CY, 84, 80, 0.55, false), cell(CELL_B, CY, 84, 80, 0.55, false)],
      nuclei: [],
      chromatids: allChromatids(all, (c, k, side) => ({
        x: home(c) + side * 46,
        y: CY + (pairY(c) - CY) * 0.5,
        colors: colorsAfter(c, k),
        off: 0,
        splay: 0,
        w: 3,
      })),
    },
    {
      ...shared,
      id: 'te-bao-con',
      name: 'Bốn tế bào con',
      text: 'Kết quả: bốn tế bào đơn bội, mỗi tế bào một chiếc NST dài và một chiếc NST ngắn. Hãy so sánh màu của chúng: các tế bào con khác nhau về vật chất di truyền.',
      counts: { cells: 4, nst: 2, state: 'đơn' },
      cells: [46, 134, 226, 314].map((cx) => cell(cx, CY, 42, 56, 0, false)),
      nuclei: [],
      chromatids: allChromatids(all, (c, k, side) => ({
        x: home(c) + side * 44,
        y: c[0] === 'a' ? 92 : 134,
        colors: colorsAfter(c, k),
        off: 0,
        splay: 0,
        w: 3.5,
      })),
    },
  ];
}

/**
 * Which chromosomes go to each pole at metaphase I.
 * @param {boolean} flip
 */
function sides(flip) {
  return { left: ['a0', flip ? 'b1' : 'b0'], right: ['a1', flip ? 'b0' : 'b1'] };
}

/**
 * Arm colours of a chromatid after the long pair crossed over between its two
 * inner chromatids: the second sister of `a0` and the first sister of `a1`.
 * @param {string} c @param {0 | 1} k
 * @returns {[string, string]}
 */
function crossedColors(c, k) {
  if (c === 'a0' && k === 1) return [BLUE, RED];
  if (c === 'a1' && k === 0) return [RED, BLUE];
  return [colorOf(c), colorOf(c)];
}

/**
 * The four cells meiosis ends with, each as the arm colours of its long
 * chromosome and the colour of its short one.
 * @param {{ crossover: boolean, flip: boolean }} options
 * @returns {{ long: [string, string], short: string, key: string }[]}
 */
export function gametesOf({ crossover, flip }) {
  const { left, right } = sides(flip);
  return [left, right].flatMap(([long, short]) =>
    /** @type {(0 | 1)[]} */ ([0, 1]).map((k) => {
      const arms = crossover
        ? crossedColors(long, k)
        : /** @type {[string, string]} */ ([colorOf(long), colorOf(long)]);
      const key = `${arms.join('+')}/${colorOf(short)}`;
      return { long: arms, short: colorOf(short), key };
    }),
  );
}

/**
 * How many different cells a list of gametes holds.
 * @param {{ key: string }[]} gametes
 */
export const distinctTypes = (gametes) => new Set(gametes.map((g) => g.key)).size;

/**
 * Chromatids per cell and centromeres per cell for a stage's counts: a double
 * chromosome has two chromatids and one centromere; a single one has no
 * chromatids and one centromere.
 * @param {Counts} counts
 */
export function perCell(counts) {
  return {
    chromatids: counts.state === 'kép' ? counts.nst * 2 : 0,
    centromeres: counts.nst,
  };
}

/**
 * @param {number} a @param {number} b @param {number} t
 */
const lerp = (a, b, t) => a + (b - a) * t;

/**
 * A blend of two like objects: numbers slide, anything else switches halfway.
 * @template {Record<string, any>} T
 * @param {T} a @param {T} b @param {number} t
 * @returns {T}
 */
function blend(a, b, t) {
  /** @type {Record<string, any>} */
  const out = {};
  for (const key of Object.keys(a)) {
    const x = a[key];
    const y = b[key];
    out[key] = typeof x === 'number' && typeof y === 'number' ? lerp(x, y, t) : t < 0.5 ? x : y;
  }
  return /** @type {T} */ (out);
}

/**
 * Two lists blended item by item when as long as each other; otherwise the
 * list switches halfway.
 * @template {Record<string, any>} T
 * @param {T[]} a @param {T[]} b @param {number} t
 * @returns {T[]}
 */
function blendList(a, b, t) {
  if (a.length !== b.length) return t < 0.5 ? a : b;
  return a.map((item, i) => blend(item, b[i], t));
}

/**
 * The drawing at a position between stages: 1.5 is halfway from stage 1 to 2.
 * @param {Frame[]} frames @param {number} pos
 * @returns {Frame}
 */
export function frameAt(frames, pos) {
  const clamped = Math.max(0, Math.min(frames.length - 1, pos));
  const i = Math.floor(clamped);
  const t = clamped - i;
  if (t === 0) return frames[i];
  const a = frames[i];
  const b = frames[i + 1];
  return {
    ...(t < 0.5 ? a : b),
    plate: lerp(a.plate, b.plate, t),
    cells: blendList(a.cells, b.cells, t),
    nuclei: blendList(a.nuclei, b.nuclei, t),
    chromatids: blendList(a.chromatids, b.chromatids, t),
  };
}

/**
 * The two arms of a chromatid as line segments, each in its own colour.
 * @param {Chromatid} c
 */
export function armsOf(c) {
  const t = (c.rot * Math.PI) / 180;
  const dir = { x: Math.cos(t), y: Math.sin(t) };
  const perp = { x: Math.sin(t), y: -Math.cos(t) };
  const mid = { x: c.x + perp.x * c.side * c.off, y: c.y + perp.y * c.side * c.off };
  /** @param {number} s */
  const end = (s) => ({
    x: mid.x + (dir.x * s * c.len) / 2 + perp.x * c.side * c.splay,
    y: mid.y + (dir.y * s * c.len) / 2 + perp.y * c.side * c.splay,
  });
  return { mid, arms: [end(-1), end(1)] };
}

/**
 * The outline of a round cell, with a waist that deepens as `pinch` goes from
 * 0 to 1.
 * @param {Cell} c
 */
export function cellOutline(c) {
  const STEPS = 48;
  const points = [];
  for (let i = 0; i < STEPS; i++) {
    const t = (i / STEPS) * 2 * Math.PI;
    const cos = Math.cos(t);
    const waist = 1 - c.pinch * Math.exp(-((cos / 0.35) ** 2));
    const x = c.cx + c.rx * cos;
    const y = c.cy + c.ry * Math.sin(t) * waist;
    points.push(`${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return `M ${points.join(' L ')} Z`;
}
