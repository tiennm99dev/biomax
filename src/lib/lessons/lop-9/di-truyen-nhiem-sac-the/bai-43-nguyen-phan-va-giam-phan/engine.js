/**
 * Mitosis and meiosis, stage by stage, for a cell with 2n = 4 or 2n = 6: the
 * number and state (single or double) of the chromosomes in each cell, the
 * book's description of each stage, and an SVG layout of the cells and
 * chromosomes. Homologues are coloured by origin (from the father or the
 * mother); in meiosis the learner can flip how each pair lines up at
 * metaphase I and switch on a crossing over in pair 1, and the four gametes
 * follow from those choices.
 */

/** @typedef {'nguyen-phan' | 'giam-phan'} Process */
/** @typedef {'bo' | 'me'} Origin */
/** @typedef {{ base: Origin, tip: Origin }} Chromatid */
/** @typedef {{ pair: number, origin: Origin, chromatids: Chromatid[] }} Homologue */

/**
 * @typedef {{
 *   id: string;
 *   name: string;
 *   text: string;
 * }} Stage
 */

/** @type {Record<Process, Stage[]>} */
export const STAGES = {
  'nguyen-phan': [
    {
      id: 'trung-gian',
      name: 'Kì trung gian',
      text: 'Trước khi phân bào, NST ở dạng sợi mảnh dãn xoắn và nhân đôi: mỗi NST đơn thành một NST kép gồm hai chromatid gắn ở tâm động.',
    },
    {
      id: 'dau',
      name: 'Kì đầu',
      text: 'Các NST kép tiếp tục co xoắn; màng nhân dần biến mất, thoi phân bào hình thành.',
    },
    {
      id: 'giua',
      name: 'Kì giữa',
      text: 'Các NST kép co xoắn cực đại và xếp thành một hàng trên mặt phẳng xích đạo của thoi phân bào.',
    },
    {
      id: 'sau',
      name: 'Kì sau',
      text: 'Mỗi NST kép tách nhau ở tâm động thành hai NST đơn, mỗi NST đơn đi về một cực của tế bào.',
    },
    {
      id: 'cuoi',
      name: 'Kì cuối',
      text: 'NST dãn xoắn, màng nhân xuất hiện; tế bào chất phân chia tạo thành hai tế bào con giống nhau và giống tế bào mẹ.',
    },
  ],
  'giam-phan': [
    {
      id: 'trung-gian',
      name: 'Kì trung gian',
      text: 'NST nhân đôi một lần duy nhất, trước giảm phân I: mỗi NST đơn thành một NST kép.',
    },
    {
      id: 'dau-1',
      name: 'Kì đầu I',
      text: 'Các NST kép co xoắn; hai NST kép của mỗi cặp tương đồng tiếp hợp với nhau và có thể trao đổi chéo các đoạn chromatid.',
    },
    {
      id: 'giua-1',
      name: 'Kì giữa I',
      text: 'Các cặp NST kép tương đồng xếp thành hai hàng trên mặt phẳng xích đạo. Mỗi cặp có thể quay chiếc từ bố hoặc chiếc từ mẹ về một phía.',
    },
    {
      id: 'sau-1',
      name: 'Kì sau I',
      text: 'Hai NST kép của mỗi cặp tương đồng phân li độc lập, mỗi chiếc đi về một cực của tế bào.',
    },
    {
      id: 'cuoi-1',
      name: 'Kì cuối I',
      text: 'Tế bào chất phân chia, tạo hai tế bào con, mỗi tế bào có $n$ NST kép (số NST đã giảm một nửa).',
    },
    {
      id: 'dau-2',
      name: 'Kì đầu II',
      text: 'Không có nhân đôi NST. Các NST kép trong mỗi tế bào con lại co xoắn.',
    },
    {
      id: 'giua-2',
      name: 'Kì giữa II',
      text: 'Trong mỗi tế bào, các NST kép xếp thành một hàng trên mặt phẳng xích đạo.',
    },
    {
      id: 'sau-2',
      name: 'Kì sau II',
      text: 'Mỗi NST kép tách nhau ở tâm động thành hai NST đơn đi về hai cực của tế bào.',
    },
    {
      id: 'cuoi-2',
      name: 'Kì cuối II',
      text: 'Tế bào chất phân chia: từ một tế bào mẹ $2n$ tạo ra bốn tế bào con, mỗi tế bào có $n$ NST đơn với tổ hợp NST khác nhau.',
    },
  ],
};

/** @typedef {'don' | 'kep'} Form */
/** @type {Record<Form, string>} */
export const FORM_LABEL = { don: 'đơn', kep: 'kép' };

/**
 * Numbers at one stage for a cell of 2n chromosomes.
 * @param {Process} process
 * @param {number} stageIndex
 * @param {number} n the haploid number
 * @returns {{ cells: number, perCell: number, form: Form, chromatids: number, centromeres: number }}
 */
export function stageCounts(process, stageIndex, n) {
  const id = STAGES[process][stageIndex].id;
  /** @type {[number, number, Form]} */
  const row = /** @type {Record<string, [number, number, Form]>} */ ({
    'trung-gian': [1, 2 * n, 'kep'],
    dau: [1, 2 * n, 'kep'],
    giua: [1, 2 * n, 'kep'],
    sau: [1, 4 * n, 'don'],
    cuoi: [2, 2 * n, 'don'],
    'dau-1': [1, 2 * n, 'kep'],
    'giua-1': [1, 2 * n, 'kep'],
    'sau-1': [1, 2 * n, 'kep'],
    'cuoi-1': [2, n, 'kep'],
    'dau-2': [2, n, 'kep'],
    'giua-2': [2, n, 'kep'],
    'sau-2': [2, 2 * n, 'don'],
    'cuoi-2': [4, n, 'don'],
  })[id];
  const [cells, perCell, form] = row;
  return {
    cells,
    perCell,
    form,
    chromatids: form === 'kep' ? perCell * 2 : 0,
    centromeres: perCell,
  };
}

/**
 * The cell's homologues after replication, with an optional crossing over
 * between non-sister chromatids of pair 1 (index 0).
 * @param {number} n
 * @param {boolean} crossover
 * @returns {Homologue[]}
 */
export function homologues(n, crossover) {
  /** @type {Homologue[]} */
  const out = [];
  for (let pair = 0; pair < n; pair++) {
    for (const origin of /** @type {Origin[]} */ (['bo', 'me'])) {
      out.push({
        pair,
        origin,
        chromatids: [
          { base: origin, tip: origin },
          { base: origin, tip: origin },
        ],
      });
    }
  }
  if (crossover) {
    const bo = out[0];
    const me = out[1];
    bo.chromatids[1] = { base: 'bo', tip: 'me' };
    me.chromatids[0] = { base: 'me', tip: 'bo' };
  }
  return out;
}

/**
 * The two cells after meiosis I: `flips[p]` sends the mother's homologue of
 * pair p to the first cell.
 * @param {Homologue[]} hs
 * @param {boolean[]} flips
 */
export function meiosisOne(hs, flips) {
  const first = hs.filter((h) => (h.origin === 'me') === Boolean(flips[h.pair]));
  const second = hs.filter((h) => !first.includes(h));
  return [first, second];
}

/**
 * The four gametes: chromatid 0 of each chromosome goes to the first
 * daughter of its cell, chromatid 1 to the second.
 * @param {Homologue[]} hs
 * @param {boolean[]} flips
 * @returns {Chromatid[][]}
 */
export function gametes(hs, flips) {
  return meiosisOne(hs, flips).flatMap((cell) =>
    [0, 1].map((k) => cell.map((h) => h.chromatids[k])),
  );
}

/** How many gamete kinds independent assortment alone gives: 2 to the n. @param {number} n */
export function assortmentKinds(n) {
  return 2 ** n;
}

/**
 * A short code of a gamete, for comparing: one letter per chromosome, upper
 * case for the father's base, with a mark when the tip came from the other
 * parent.
 * @param {Chromatid[]} g
 */
export function gameteCode(g) {
  return g.map((c) => (c.base === 'bo' ? 'B' : 'M') + (c.tip === c.base ? '' : '*')).join('');
}

/** Lengths of the pairs in SVG units. */
export const PAIR_LENGTHS = [36, 26, 16];

/**
 * @typedef {{ x: number, y: number, len: number, chromatids: Chromatid[], pair: number, loose?: boolean }} Drawn
 * @typedef {{ cx: number, cy: number, rx: number, ry: number }} Cell
 * @typedef {{ cells: Cell[], chromosomes: Drawn[], spindles: Array<{ x1: number, x2: number, y: number }> }} Layout
 */

export const VIEW = { w: 320, h: 220 };

/**
 * Stack chromosomes in a column on a vertical line, centred on cy.
 * @param {Array<{ len: number }>} items
 * @param {number} cy
 * @param {number} gap
 */
function columnYs(items, cy, gap = 4) {
  const total = items.reduce((s, it) => s + it.len, 0) + gap * (items.length - 1);
  let y = cy - total / 2;
  return items.map((it) => {
    const mid = y + it.len / 2;
    y += it.len + gap;
    return mid;
  });
}

/** Spots for scattered chromosomes, as shares of the cell's half-width and half-height. */
const SCATTER = [
  [-0.5, -0.35],
  [0.35, -0.45],
  [-0.15, 0.3],
  [0.5, 0.25],
  [-0.6, 0.4],
  [0.1, -0.05],
];

/**
 * @param {Homologue} h
 * @param {Chromatid[]} chromatids
 * @param {number} x
 * @param {number} y
 * @param {boolean} [loose]
 * @returns {Drawn}
 */
function drawn(h, chromatids, x, y, loose = false) {
  return { x, y, len: PAIR_LENGTHS[h.pair], chromatids, pair: h.pair, loose };
}

/**
 * Chromosomes scattered in a cell.
 * @param {Homologue[]} hs
 * @param {Cell} cell
 * @param {(h: Homologue) => Chromatid[]} part
 * @param {boolean} [loose]
 */
function scatter(hs, cell, part, loose = false) {
  return hs.map((h, i) => {
    const [fx, fy] = SCATTER[i % SCATTER.length];
    return drawn(h, part(h), cell.cx + fx * cell.rx, cell.cy + fy * (cell.ry - 18), loose);
  });
}

/**
 * Chromosomes lined up in one column (on the equator) of a cell.
 * @param {Homologue[]} hs
 * @param {number} x
 * @param {number} cy
 * @param {(h: Homologue) => Chromatid[]} part
 */
function column(hs, x, cy, part) {
  const ys = columnYs(
    hs.map((h) => ({ len: PAIR_LENGTHS[h.pair] })),
    cy,
  );
  return hs.map((h, i) => drawn(h, part(h), x, ys[i]));
}

const both = (/** @type {Homologue} */ h) => h.chromatids;

/**
 * Where the cells and chromosomes are drawn at one stage.
 * @param {Process} process
 * @param {number} stageIndex
 * @param {{ n: number, flips: boolean[], crossover: boolean }} opts
 * @returns {Layout}
 */
export function layout(process, stageIndex, { n, flips, crossover }) {
  const id = STAGES[process][stageIndex].id;
  const crossed = process === 'giam-phan' && crossover && stageIndex >= 1;
  const hs = homologues(n, crossed);
  const big = { cx: 160, cy: 110, rx: 112, ry: 102 };
  const long = { cx: 160, cy: 110, rx: 150, ry: 94 };
  const halves = [
    { cx: 80, cy: 110, rx: 76, ry: 86 },
    { cx: 240, cy: 110, rx: 76, ry: 86 },
  ];
  const halvesLong = [
    { cx: 80, cy: 110, rx: 78, ry: 72 },
    { cx: 240, cy: 110, rx: 78, ry: 72 },
  ];
  const quarters = [40, 120, 200, 280].map((cx) => ({ cx, cy: 110, rx: 38, ry: 60 }));
  const spindle = (/** @type {Cell} */ c) => ({
    x1: c.cx - c.rx + 8,
    x2: c.cx + c.rx - 8,
    y: c.cy,
  });
  const [first, second] = meiosisOne(hs, flips);
  const order = (/** @type {Homologue[]} */ list) => [...list].sort((a, b) => a.pair - b.pair);

  switch (id) {
    case 'trung-gian':
      return { cells: [big], chromosomes: scatter(hs, big, both, true), spindles: [] };
    case 'dau':
      return { cells: [big], chromosomes: scatter(hs, big, both), spindles: [] };
    case 'dau-1': {
      // Homologues side by side (synapsis), pairs scattered.
      const out = [];
      for (let p = 0; p < n; p++) {
        const [fx, fy] = SCATTER[p * 2];
        const x = big.cx + fx * big.rx;
        const y = big.cy + fy * (big.ry - 18);
        const pair = hs.filter((h) => h.pair === p);
        out.push(
          drawn(pair[0], pair[0].chromatids, x - 6, y),
          drawn(pair[1], pair[1].chromatids, x + 6, y),
        );
      }
      return { cells: [big], chromosomes: out, spindles: [] };
    }
    case 'giua':
      return {
        cells: [big],
        chromosomes: column(hs, big.cx, big.cy, both),
        spindles: [spindle(big)],
      };
    case 'giua-1': {
      return {
        cells: [big],
        chromosomes: [
          ...column(order(first), big.cx - 7, big.cy, both),
          ...column(order(second), big.cx + 7, big.cy, both),
        ],
        spindles: [spindle(big)],
      };
    }
    case 'sau':
      return {
        cells: [long],
        chromosomes: [
          ...column(hs, long.cx - 48, long.cy, (h) => [h.chromatids[0]]),
          ...column(hs, long.cx + 48, long.cy, (h) => [h.chromatids[1]]),
        ],
        spindles: [spindle(long)],
      };
    case 'sau-1':
      return {
        cells: [long],
        chromosomes: [
          ...column(order(first), long.cx - 48, long.cy, both),
          ...column(order(second), long.cx + 48, long.cy, both),
        ],
        spindles: [spindle(long)],
      };
    case 'cuoi':
      return {
        cells: halves,
        chromosomes: [
          ...scatter(hs, halves[0], (h) => [h.chromatids[0]], true),
          ...scatter(hs, halves[1], (h) => [h.chromatids[1]], true),
        ],
        spindles: [],
      };
    case 'cuoi-1':
    case 'dau-2':
      return {
        cells: halves,
        chromosomes: [
          ...scatter(order(first), halves[0], both, id === 'cuoi-1'),
          ...scatter(order(second), halves[1], both, id === 'cuoi-1'),
        ],
        spindles: [],
      };
    case 'giua-2':
      return {
        cells: halves,
        chromosomes: [
          ...column(order(first), halves[0].cx, 110, both),
          ...column(order(second), halves[1].cx, 110, both),
        ],
        spindles: halves.map(spindle),
      };
    case 'sau-2':
      return {
        cells: halvesLong,
        chromosomes: [first, second].flatMap((cell, i) => [
          ...column(order(cell), halvesLong[i].cx - 36, 110, (h) => [h.chromatids[0]]),
          ...column(order(cell), halvesLong[i].cx + 36, 110, (h) => [h.chromatids[1]]),
        ]),
        spindles: halvesLong.map(spindle),
      };
    default: {
      // cuoi-2: four gametes in a row.
      const cells = [first, first, second, second];
      return {
        cells: quarters,
        chromosomes: cells.flatMap((cell, i) =>
          column(order(cell), quarters[i].cx, 110, (h) => [h.chromatids[i % 2]]).map((d) => ({
            ...d,
            loose: true,
          })),
        ),
        spindles: [],
      };
    }
  }
}

/**
 * Checks a prediction of the next stage: chromosomes per cell and their state.
 * @param {Process} process
 * @param {number} stageIndex
 * @param {number} n
 * @param {number} perCell
 * @param {Form} form
 */
export function checkPrediction(process, stageIndex, n, perCell, form) {
  const c = stageCounts(process, stageIndex, n);
  return {
    ok: c.perCell === perCell && c.form === form,
    countOk: c.perCell === perCell,
    formOk: c.form === form,
  };
}

/**
 * The live summary of one stage.
 * @param {Process} process
 * @param {number} stageIndex
 * @param {number} n
 */
export function countsText(process, stageIndex, n) {
  const c = stageCounts(process, stageIndex, n);
  const cells = c.cells === 1 ? '1 tế bào' : `${c.cells} tế bào`;
  const extra = c.form === 'kep' ? `, ${c.chromatids} chromatid` : '';
  return `${cells}; mỗi tế bào có ${c.perCell} NST ${FORM_LABEL[c.form]}${extra}, ${c.centromeres} tâm động.`;
}
