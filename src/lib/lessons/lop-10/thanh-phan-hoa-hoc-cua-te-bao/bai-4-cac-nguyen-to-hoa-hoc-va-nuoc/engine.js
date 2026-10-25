/**
 * Chemical elements of the human body: share of body mass, macro- or
 * micro-element class and role, for the element-sorting widget.
 */

/** @typedef {'da-luong' | 'vi-luong'} ElementClass */
/**
 * @typedef {{
 *   symbol: string;
 *   name: string;
 *   percent: number;
 *   kind: ElementClass;
 *   role: string;
 * }} BodyElement
 */

/**
 * Macro-elements (nguyên tố đa lượng) make up more than 0,01% of the mass;
 * micro-elements (nguyên tố vi lượng) less.
 */
export const THRESHOLD = 0.01;

export const CLASS_LABELS = /** @type {Record<ElementClass, string>} */ ({
  'da-luong': 'Đa lượng',
  'vi-luong': 'Vi lượng',
});

/**
 * Approximate share of each element in the mass of an adult human body (%).
 * @type {BodyElement[]}
 */
export const ELEMENTS = [
  {
    symbol: 'O',
    name: 'Oxygen',
    percent: 65,
    kind: 'da-luong',
    role: 'Có trong nước và hầu hết các chất hữu cơ.',
  },
  {
    symbol: 'C',
    name: 'Carbon',
    percent: 18.5,
    kind: 'da-luong',
    role: 'Tạo bộ khung carbon của mọi phân tử hữu cơ.',
  },
  {
    symbol: 'H',
    name: 'Hydrogen',
    percent: 9.5,
    kind: 'da-luong',
    role: 'Có trong nước và mọi chất hữu cơ.',
  },
  {
    symbol: 'N',
    name: 'Nitrogen',
    percent: 3.2,
    kind: 'da-luong',
    role: 'Thành phần của protein và nucleic acid.',
  },
  {
    symbol: 'Ca',
    name: 'Calcium',
    percent: 1.5,
    kind: 'da-luong',
    role: 'Thành phần của xương, răng; tham gia co cơ và đông máu.',
  },
  {
    symbol: 'P',
    name: 'Phosphorus',
    percent: 1,
    kind: 'da-luong',
    role: 'Thành phần của nucleic acid, ATP, phospholipid màng tế bào và xương.',
  },
  {
    symbol: 'K',
    name: 'Potassium',
    percent: 0.4,
    kind: 'da-luong',
    role: 'Giữ cân bằng ion, tham gia dẫn truyền xung thần kinh.',
  },
  {
    symbol: 'S',
    name: 'Sulfur',
    percent: 0.3,
    kind: 'da-luong',
    role: 'Có trong một số amino acid như cysteine, methionine.',
  },
  {
    symbol: 'Na',
    name: 'Sodium',
    percent: 0.2,
    kind: 'da-luong',
    role: 'Giữ cân bằng nước – muối, tham gia dẫn truyền xung thần kinh.',
  },
  {
    symbol: 'Cl',
    name: 'Chlorine',
    percent: 0.2,
    kind: 'da-luong',
    role: 'Giữ cân bằng ion; có trong HCl của dịch vị.',
  },
  {
    symbol: 'Mg',
    name: 'Magnesium',
    percent: 0.1,
    kind: 'da-luong',
    role: 'Hoạt hoá nhiều enzyme; ở thực vật là thành phần của diệp lục.',
  },
  {
    symbol: 'Fe',
    name: 'Iron',
    percent: 0.006,
    kind: 'vi-luong',
    role: 'Thành phần của hemoglobin vận chuyển oxygen; thiếu gây thiếu máu.',
  },
  {
    symbol: 'Zn',
    name: 'Zinc',
    percent: 0.003,
    kind: 'vi-luong',
    role: 'Thành phần của nhiều enzyme, cần cho sinh trưởng.',
  },
  {
    symbol: 'Cu',
    name: 'Copper',
    percent: 0.0001,
    kind: 'vi-luong',
    role: 'Thành phần của một số enzyme hô hấp.',
  },
  {
    symbol: 'I',
    name: 'Iodine',
    percent: 0.00002,
    kind: 'vi-luong',
    role: 'Thành phần của hormone tuyến giáp; thiếu iodine gây bướu cổ.',
  },
  {
    symbol: 'Co',
    name: 'Cobalt',
    percent: 0.000002,
    kind: 'vi-luong',
    role: 'Thành phần của vitamin B12.',
  },
];

/**
 * Class of an element from its share of the mass.
 * @param {number} percent
 * @returns {ElementClass}
 */
export function classify(percent) {
  return percent > THRESHOLD ? 'da-luong' : 'vi-luong';
}

/**
 * Total share of the given elements (%).
 * @param {string[]} symbols
 */
export function share(symbols) {
  return ELEMENTS.filter((e) => symbols.includes(e.symbol)).reduce((s, e) => s + e.percent, 0);
}

/**
 * Position 0-1 of a share on a logarithmic axis from `min` to `max` percent.
 * @param {number} percent
 * @param {number} [min]
 * @param {number} [max]
 */
export function logPosition(percent, min = 1e-6, max = 100) {
  const p = Math.min(max, Math.max(min, percent));
  return (Math.log10(p) - Math.log10(min)) / (Math.log10(max) - Math.log10(min));
}

/**
 * Scores a sorting attempt: which placed elements are right and which wrong.
 * @param {Record<string, ElementClass>} placed symbol → chosen class
 */
export function score(placed) {
  /** @type {string[]} */
  const right = [];
  /** @type {string[]} */
  const wrong = [];
  for (const e of ELEMENTS) {
    const choice = placed[e.symbol];
    if (!choice) continue;
    (choice === e.kind ? right : wrong).push(e.symbol);
  }
  return { right, wrong, done: right.length === ELEMENTS.length };
}

/**
 * Mass (kg) of an element in a body of `bodyMass` kg.
 * @param {string} symbol
 * @param {number} bodyMass
 */
export function massIn(symbol, bodyMass) {
  const e = ELEMENTS.find((x) => x.symbol === symbol);
  return e ? (bodyMass * e.percent) / 100 : 0;
}
