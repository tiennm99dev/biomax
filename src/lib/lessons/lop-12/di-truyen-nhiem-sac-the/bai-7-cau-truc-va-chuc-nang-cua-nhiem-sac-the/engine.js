/**
 * The packing levels of a eukaryotic chromosome, from the DNA double helix to
 * the metaphase chromosome, and the arithmetic of a nucleosome fibre: base
 * pairs, histone molecules and length.
 */

import { tidy } from '#lib/core/number-format.js';

/** Base pairs of DNA wrapped round one nucleosome core. */
export const CORE_BP = 146;
/** Histone molecules in one nucleosome core. */
export const CORE_HISTONES = 8;
/** Length of one base pair along the double helix, in nm. */
export const BP_NM = 0.34;

/**
 * @typedef {{
 *   id: string;
 *   name: string;
 *   nm: number;
 *   made: string;
 *   when: string;
 * }} Level
 */

/** @type {Level[]} */
export const LEVELS = [
  {
    id: 'dna',
    name: 'Phân tử DNA',
    nm: 2,
    made: 'Chuỗi xoắn kép gồm hai mạch polynucleotide.',
    when: 'Là "sợi chỉ" của mọi mức xoắn bên trên.',
  },
  {
    id: 'co-ban',
    name: 'Sợi cơ bản (chuỗi nucleosome)',
    nm: 10,
    made: 'DNA quấn quanh các khối histone tạo các nucleosome; mỗi nucleosome gồm 8 phân tử histone, đoạn DNA khoảng 146 cặp nucleotide quấn quanh khoảng 1¾ vòng; giữa hai nucleosome là một đoạn DNA nối.',
    when: 'Kì trung gian, ở vùng nguyên nhiễm sắc: các nucleosome xa nhau, gene dễ được phiên mã.',
  },
  {
    id: 'nhiem-sac',
    name: 'Sợi nhiễm sắc',
    nm: 30,
    made: 'Sợi cơ bản xoắn tiếp, các nucleosome xếp sát nhau.',
    when: 'Kì trung gian: phần lớn chất nhiễm sắc ở dạng này; vùng xếp chặt (dị nhiễm sắc) chứa ít gene hoạt động.',
  },
  {
    id: 'xep-cuon',
    name: 'Vùng xếp cuộn',
    nm: 300,
    made: 'Sợi nhiễm sắc tạo các vòng gắn vào khung protein (condensin), làm NST ngắn lại và to ra.',
    when: 'Kì đầu: NST bắt đầu co xoắn.',
  },
  {
    id: 'chromatid',
    name: 'Chromatid',
    nm: 700,
    made: 'Các vòng xếp cuộn tiếp tục xoắn, nén chặt thành một chromatid.',
    when: 'Cuối kì đầu đến kì giữa.',
  },
  {
    id: 'ki-giua',
    name: 'NST kì giữa',
    nm: 1400,
    made: 'Hai chromatid chị em dính nhau ở tâm động; mỗi đầu mang một đầu mút (telomere).',
    when: 'Kì giữa: co xoắn cực đại, dễ quan sát, xếp thành hàng trên thoi phân bào.',
  },
];

/**
 * Base pairs of a stretch of fibre that starts and ends with a nucleosome:
 * n cores and n − 1 linkers.
 * @param {number} nucleosomes
 * @param {number} linkerBp base pairs of each linker
 */
export function fibreBp(nucleosomes, linkerBp) {
  if (nucleosomes < 1) return 0;
  return nucleosomes * CORE_BP + (nucleosomes - 1) * linkerBp;
}

/** @param {number} nucleosomes */
export function histones(nucleosomes) {
  return nucleosomes * CORE_HISTONES;
}

/**
 * Length of a stretch of double helix, in nm.
 * @param {number} bp
 */
export function helixLength(bp) {
  return tidy(bp * BP_NM, 3);
}

/**
 * How many times shorter a chromosome is than its DNA, both lengths in the
 * same unit.
 * @param {number} dnaLength
 * @param {number} chromosomeLength
 */
export function compaction(dnaLength, chromosomeLength) {
  return dnaLength / chromosomeLength;
}

/**
 * Where a cell-cycle stage sits on the packing scale: the level the widget
 * zooms to for that stage.
 * @type {Array<{ id: string, label: string, level: number, text: string }>}
 */
export const STAGES = [
  {
    id: 'trung-gian',
    label: 'Kì trung gian',
    level: 1,
    text: 'NST tháo xoắn: vùng nguyên nhiễm sắc ở dạng sợi cơ bản, DNA lộ ra để tái bản và phiên mã.',
  },
  {
    id: 'ki-dau',
    label: 'Kì đầu',
    level: 3,
    text: 'Condensin tạo khung, sợi nhiễm sắc xếp thành các vòng: NST ngắn lại và to ra.',
  },
  {
    id: 'ki-giua',
    label: 'Kì giữa',
    level: 5,
    text: 'NST co xoắn cực đại, có hai chromatid dính ở tâm động, dễ di chuyển trên thoi phân bào mà không rối.',
  },
];

/**
 * A wave along x, used for the double helix and the coiled fibres.
 * @param {number} x0 start x
 * @param {number} x1 end x
 * @param {number} y centre line
 * @param {number} amp amplitude
 * @param {number} period length of one wave
 * @param {number} [phase] in radians
 */
export function wavePath(x0, x1, y, amp, period, phase = 0) {
  const pts = [];
  const steps = Math.max(2, Math.round((x1 - x0) / 3));
  for (let i = 0; i <= steps; i++) {
    const x = x0 + ((x1 - x0) * i) / steps;
    const yy = y + amp * Math.sin(((x - x0) / period) * 2 * Math.PI + phase);
    pts.push(`${x.toFixed(1)} ${yy.toFixed(1)}`);
  }
  return `M ${pts.join(' L ')}`;
}

/**
 * Loops of fibre hanging off a straight scaffold, alternately above and
 * below it.
 * @param {number} x0 @param {number} x1 @param {number} y
 * @param {number} count @param {number} reach
 */
export function loopPaths(x0, x1, y, count, reach) {
  const w = (x1 - x0) / count;
  return Array.from({ length: count }, (_, i) => {
    const a = x0 + i * w;
    const b = a + w * 0.9;
    const s = i % 2 === 0 ? -1 : 1;
    return `M ${a.toFixed(1)} ${y} C ${(a - w * 0.3).toFixed(1)} ${y + s * reach} ${(b + w * 0.3).toFixed(1)} ${y + s * reach} ${b.toFixed(1)} ${y}`;
  });
}
