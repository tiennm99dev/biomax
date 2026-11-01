/**
 * Monomers joining into polymers, and the structure levels of a protein:
 * pure logic and drawing coordinates for the two widgets of this lesson.
 */

export const GLUCOSE_MASS = 180;
export const WATER_MASS = 18;
/** Longest polysaccharide the board draws. */
export const MAX_GLUCOSE = 16;
/** Longest polypeptide the board draws. */
export const MAX_AMINO = 8;
/** Kinds of amino acid that build proteins. */
export const AMINO_KINDS = 20;

/**
 * @typedef {{
 *   id: 'tinh-bot' | 'glycogen' | 'cellulose';
 *   name: string;
 *   shape: string;
 *   where: string;
 *   role: string;
 * }} Polysaccharide
 */

/** @type {Polysaccharide[]} */
export const POLYSACCHARIDES = [
  {
    id: 'tinh-bot',
    name: 'Tinh bột',
    shape: 'Mạch thẳng hoặc có ít nhánh, cuộn xoắn lại',
    where: 'Hạt, củ, quả của thực vật',
    role: 'Dự trữ năng lượng ở thực vật',
  },
  {
    id: 'glycogen',
    name: 'Glycogen',
    shape: 'Phân nhánh nhiều, các nhánh ngắn',
    where: 'Gan và cơ của động vật, tế bào nấm',
    role: 'Dự trữ năng lượng ở động vật và nấm',
  },
  {
    id: 'cellulose',
    name: 'Cellulose',
    shape: 'Mạch thẳng dài, các glucose đảo chiều xen kẽ',
    where: 'Thành tế bào thực vật',
    role: 'Cấu trúc: giữ cho tế bào thực vật có hình dạng ổn định',
  },
];

/** Situations the learner answers by choosing a polysaccharide. */
export const MISSIONS = /** @type {const} */ ([
  { id: 'cu-khoai', text: 'Củ khoai tây cất năng lượng cho cây mọc mầm.', answer: 'tinh-bot' },
  { id: 'gan', text: 'Gan người giữ năng lượng để dùng giữa hai bữa ăn.', answer: 'glycogen' },
  { id: 'thanh', text: 'Thân cây cần thành tế bào thật bền chắc.', answer: 'cellulose' },
]);

/**
 * Bonds, and so water molecules released, when n monomers join in one tree.
 * @param {number} n
 */
export function bondCount(n) {
  return Math.max(0, n - 1);
}

/**
 * Mass in amu of a polymer of n identical monomers, after losing water.
 * @param {number} n
 * @param {number} [unit] mass of one monomer
 */
export function polymerMass(n, unit = GLUCOSE_MASS) {
  return n <= 0 ? 0 : n * unit - bondCount(n) * WATER_MASS;
}

/**
 * The name for a chain of n sugar units.
 * @param {number} n
 */
export function sugarStage(n) {
  if (n <= 0) return 'Chưa có đơn phân';
  if (n === 1) return 'Đường đơn';
  if (n === 2) return 'Đường đôi';
  return 'Đang dài dần thành đường đa';
}

/** @type {Record<'tinh-bot' | 'glycogen', Array<[number, number]>>} */
const ROWS = {
  'tinh-bot': [
    [0, 8],
    [3, 5],
    [5, 3],
  ],
  glycogen: [
    [0, 3],
    [1, 3],
    [2, 3],
    [3, 3],
    [4, 3],
    [5, 3],
  ],
};

/**
 * Grid places of n glucose units of a polysaccharide. `parent` is the unit it
 * bonds to; `flip` marks a unit turned upside down.
 * @param {Polysaccharide['id']} id
 * @param {number} n
 * @returns {Array<{ col: number, row: number, parent: number, flip: boolean }>}
 */
export function chainLayout(id, n) {
  const count = Math.min(n, MAX_GLUCOSE);
  /** @type {Array<{ col: number, row: number, parent: number, flip: boolean }>} */
  const units = [];
  if (id === 'cellulose') {
    for (let i = 0; i < count; i += 1) {
      const row = Math.floor(i / 8);
      const col = row % 2 === 0 ? i % 8 : 7 - (i % 8);
      units.push({ col, row, parent: i - 1, flip: i % 2 === 1 });
    }
    return units;
  }
  ROWS[id].forEach(([start, length], row) => {
    for (let k = 0; k < length && units.length < count; k += 1) {
      const col = start + k;
      const parent =
        k > 0 ? units.length - 1 : units.findIndex((u) => u.col === col && u.row === row - 1);
      units.push({ col, row, parent, flip: false });
    }
  });
  return units;
}

/** Six amino acids to build with, out of the twenty that make proteins. */
export const AMINO_ACIDS = [
  { id: 'Gly', name: 'Glycine', color: '#0369a1' },
  { id: 'Ala', name: 'Alanine', color: '#047857' },
  { id: 'Val', name: 'Valine', color: '#b45309' },
  { id: 'Lys', name: 'Lysine', color: '#b91c1c' },
  { id: 'Asp', name: 'Aspartic acid', color: '#6d28d9' },
  { id: 'Ser', name: 'Serine', color: '#be185d' },
];

/** The chain the learner compares with. */
export const TARGET_CHAIN = ['Gly', 'Ala', 'Lys', 'Val', 'Ser'];

/**
 * How a chain compares with the target: identical, the same amino acids in
 * another order, or a different make-up.
 * @param {string[]} chain
 * @param {string[]} [target]
 * @returns {'same' | 'reordered' | 'different'}
 */
export function compareSequence(chain, target = TARGET_CHAIN) {
  if (chain.length === target.length && chain.every((a, i) => a === target[i])) return 'same';
  const sorted = (/** @type {string[]} */ list) => [...list].sort().join();
  return sorted(chain) === sorted(target) ? 'reordered' : 'different';
}

/**
 * Different chains of n amino acids that the twenty kinds allow.
 * @param {number} n
 */
export function sequenceCount(n) {
  return AMINO_KINDS ** n;
}

/** The four structure levels of a protein. */
export const LEVELS = [
  {
    value: 1,
    label: 'Bậc 1',
    text: 'Trình tự các amino acid trong chuỗi polypeptide, nối với nhau bằng liên kết peptide.',
  },
  {
    value: 2,
    label: 'Bậc 2',
    text: 'Chuỗi polypeptide cuộn xoắn (xoắn α) hoặc gấp nếp (gấp β), giữ bởi liên kết hydrogen.',
  },
  {
    value: 3,
    label: 'Bậc 3',
    text: 'Chuỗi xoắn, gấp tiếp thành khối ba chiều, giữ bởi liên kết yếu và liên kết disulfide.',
  },
  {
    value: 4,
    label: 'Bậc 4',
    text: 'Nhiều chuỗi polypeptide bậc 3 liên kết với nhau, như bốn chuỗi của hemoglobin.',
  },
];

const clamp01 = (/** @type {number} */ v) => Math.min(1, Math.max(0, v));

/**
 * How much of the folded shape a typical protein keeps, from 1 (intact) to 0
 * (fully denatured), at a temperature in °C and a pH.
 * @param {number} temperature
 * @param {number} ph
 */
export function foldedness(temperature, ph) {
  const heat = clamp01((75 - temperature) / 30);
  const acid = clamp01((ph - 2) / 3);
  const base = clamp01((12 - ph) / 3);
  return Math.min(heat, acid, base);
}

/** @typedef {{ x: number, y: number, chain: number }} Bead */

/**
 * @param {number} i
 * @param {number} cx
 * @param {number} cy
 * @param {number} chain
 * @param {number} reach radius of the outermost bead
 * @param {number} last index of the outermost bead
 * @returns {Bead}
 */
function globuleBead(i, cx, cy, chain, reach, last) {
  const r = reach * (0.2 + 0.8 * Math.sqrt(i / last));
  const a = i * 2.4 + chain;
  return { x: cx + 1.2 * r * Math.cos(a), y: cy + r * Math.sin(a), chain };
}

/**
 * Beads of the unfolded chain or chains, on a 320 by 170 board.
 * @param {number} level
 * @returns {Bead[]}
 */
function extended(level) {
  if (level === 4) {
    return Array.from({ length: 48 }, (_, i) => {
      const chain = Math.floor(i / 12);
      return { x: 16 + (i % 12) * 26, y: 25 + chain * 40, chain };
    });
  }
  return Array.from({ length: 24 }, (_, i) => ({ x: 14 + i * 12.7, y: 85, chain: 0 }));
}

/**
 * Beads of the fully folded shape of a level.
 * @param {number} level
 * @returns {Bead[]}
 */
function folded(level) {
  if (level === 1) return extended(1);
  if (level === 2) {
    return Array.from({ length: 24 }, (_, i) => {
      if (i < 12) {
        return { x: 16 + i * 10, y: 85 + 30 * Math.sin((i * 2 * Math.PI) / 3.6), chain: 0 };
      }
      const strand = Math.floor((i - 12) / 4);
      const pos = (i - 12) % 4;
      const col = strand % 2 === 0 ? pos : 3 - pos;
      return { x: 180 + col * 38, y: 40 + strand * 34 + (pos % 2) * 6, chain: 0 };
    });
  }
  if (level === 3) {
    return Array.from({ length: 24 }, (_, i) => globuleBead(i, 160, 85, 0, 66, 23));
  }
  const centers = [
    [105, 48],
    [215, 48],
    [105, 122],
    [215, 122],
  ];
  return Array.from({ length: 48 }, (_, i) => {
    const chain = Math.floor(i / 12);
    const [cx, cy] = centers[chain];
    return globuleBead(i % 12, cx, cy, chain, 30, 11);
  });
}

/**
 * Bead positions of a level at a given foldedness.
 * @param {number} level 1 to 4
 * @param {number} fold 0 (unfolded) to 1 (folded)
 * @returns {Bead[]}
 */
export function structureBeads(level, fold) {
  const from = extended(level);
  const to = folded(level);
  return from.map((p, i) => ({
    x: p.x + (to[i].x - p.x) * fold,
    y: p.y + (to[i].y - p.y) * fold,
    chain: p.chain,
  }));
}

/**
 * What the protein's state means for the learner.
 * @param {number} level
 * @param {number} fold
 * @returns {{ tone: 'ok' | 'warn' | 'info', text: string }}
 */
export function structureStatus(level, fold) {
  if (level === 1) {
    return {
      tone: 'info',
      text: 'Nhiệt độ và pH ở mức này không cắt liên kết peptide, nên trình tự amino acid của bậc 1 vẫn giữ nguyên.',
    };
  }
  if (fold >= 1) {
    return {
      tone: 'ok',
      text:
        level === 2
          ? 'Cấu trúc nguyên vẹn. Protein còn phải gấp tiếp thành bậc 3 mới có chức năng sinh học.'
          : 'Cấu trúc không gian nguyên vẹn: protein thực hiện được chức năng sinh học.',
    };
  }
  if (fold <= 0) {
    return {
      tone: 'warn',
      text: 'Protein bị biến tính: các liên kết yếu đứt, cấu trúc không gian bị phá vỡ, protein mất chức năng. Chỉ còn lại bậc 1.',
    };
  }
  return {
    tone: 'warn',
    text: 'Protein đang biến tính: một phần liên kết yếu đã đứt, cấu trúc không gian bung dần ra và chức năng giảm.',
  };
}
