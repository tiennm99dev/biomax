/**
 * A drawn microscope field of stained dividing cells, as in onion root tips and
 * grasshopper sperm tubes, and the game of naming each cell's stage. No DOM
 * here, so all of it is tested in Node.
 */
import { rng, shuffle } from '#lib/core/drill.js';

/**
 * @typedef {'nguyen-phan' | 'giam-phan'} SpecimenId
 * @typedef {{ d: string, w: number, o?: number }} Stroke
 * @typedef {{ id: string, name: string, count: number, clue: string }} Stage
 */

/** @type {Record<SpecimenId, { name: string, cellName: string, stages: Stage[] }>} */
export const SPECIMENS = {
  'nguyen-phan': {
    name: 'Nguyên phân ở rễ hành',
    cellName: 'tế bào đầu rễ hành',
    stages: [
      {
        id: 'trung-gian',
        name: 'Kì trung gian',
        count: 5,
        clue: 'Nhân còn nguyên, bắt màu đều, thấy hạch nhân; chưa thấy NST rõ.',
      },
      {
        id: 'dau',
        name: 'Kì đầu',
        count: 3,
        clue: 'NST là những sợi mảnh rối vào nhau, tụ ở vùng nhân; chưa xếp hàng.',
      },
      {
        id: 'giua',
        name: 'Kì giữa',
        count: 2,
        clue: 'NST đậm, xếp thành một băng ở giữa tế bào.',
      },
      {
        id: 'sau',
        name: 'Kì sau',
        count: 1,
        clue: 'Hai nhóm NST hình chữ V đang đi về hai đầu tế bào.',
      },
      {
        id: 'cuoi',
        name: 'Kì cuối',
        count: 1,
        clue: 'Hai khối NST sát hai đầu tế bào, giữa đã có vách ngăn.',
      },
    ],
  },
  'giam-phan': {
    name: 'Giảm phân ở châu chấu',
    cellName: 'tế bào ống sinh tinh của châu chấu đực',
    stages: [
      {
        id: 'dau-1',
        name: 'Kì đầu I',
        count: 3,
        clue: 'Tế bào lớn, các NST kép bắt đôi thành từng cặp nằm rải rác.',
      },
      {
        id: 'giua-1',
        name: 'Kì giữa I',
        count: 2,
        clue: 'Tế bào lớn, NST xếp thành hai hàng song song ở giữa.',
      },
      {
        id: 'sau-1',
        name: 'Kì sau I',
        count: 1,
        clue: 'Tế bào lớn, hai nhóm NST kép to, dày đi về hai cực.',
      },
      {
        id: 'cuoi-1',
        name: 'Kì cuối I',
        count: 1,
        clue: 'Tế bào lớn đang thắt eo, hai khối NST ở hai đầu.',
      },
      {
        id: 'giua-2',
        name: 'Kì giữa II',
        count: 2,
        clue: 'Tế bào nhỏ hơn hẳn, NST xếp thành một hàng ở giữa.',
      },
      {
        id: 'sau-2',
        name: 'Kì sau II',
        count: 1,
        clue: 'Tế bào nhỏ, hai nhóm NST mảnh đi về hai cực.',
      },
      {
        id: 'cuoi-2',
        name: 'Kì cuối II',
        count: 2,
        clue: 'Tế bào nhỏ đang thắt eo, hai khối NST ở hai đầu.',
      },
    ],
  },
};

/** Cells of the meiosis field smaller after the first division, as in real slides. */
const SMALL_II = new Set(['giua-2', 'sau-2', 'cuoi-2']);
const PINCHED = new Set(['cuoi-1', 'cuoi-2']);

/**
 * The cells of one microscope field, in the mix of stages a field really shows:
 * long stages are common, short ones rare. The stages stay the same across
 * seeds, only their places change.
 * @param {SpecimenId} specimen @param {number} seed
 * @returns {{ stage: string, seed: number, tilt: number }[]}
 */
export function fieldOf(specimen, seed) {
  const rand = rng(seed);
  const stages = SPECIMENS[specimen].stages.flatMap((s) =>
    Array.from({ length: s.count }, () => s.id),
  );
  return shuffle(rand, stages).map((stage, i) => ({
    stage,
    seed: seed * 100 + i,
    tilt: Math.round((rand() - 0.5) * 30),
  }));
}

/**
 * The shape of a cell: its wall or membrane, drawn around (0, 0).
 * @param {SpecimenId} specimen @param {string} stage
 * @returns {{ kind: 'brick' | 'round', rx: number, ry: number, pinch: boolean }}
 */
export function shapeOf(specimen, stage) {
  if (specimen === 'nguyen-phan') return { kind: 'brick', rx: 42, ry: 30, pinch: false };
  const r = SMALL_II.has(stage) ? 24 : 38;
  return { kind: 'round', rx: r, ry: r, pinch: PINCHED.has(stage) };
}

/**
 * A short rod.
 * @param {number} x @param {number} y @param {number} angle degrees
 * @param {number} len @param {number} w
 * @returns {Stroke}
 */
function rod(x, y, angle, len, w) {
  const t = (angle * Math.PI) / 180;
  const dx = (Math.cos(t) * len) / 2;
  const dy = (Math.sin(t) * len) / 2;
  return {
    d: `M ${(x - dx).toFixed(1)} ${(y - dy).toFixed(1)} L ${(x + dx).toFixed(1)} ${(y + dy).toFixed(1)}`,
    w,
  };
}

/**
 * A V with its point toward a pole.
 * @param {number} x @param {number} y @param {number} side @param {number} w
 * @returns {Stroke}
 */
function vee(x, y, side, w) {
  const tail = x - side * 7;
  return {
    d: `M ${tail.toFixed(1)} ${(y - 4).toFixed(1)} L ${x.toFixed(1)} ${y.toFixed(1)} L ${tail.toFixed(1)} ${(y + 4).toFixed(1)}`,
    w,
  };
}

/**
 * Stained chromosomes of a cell, in cell coordinates with the poles left and
 * right. Interphase has none: its nucleus is drawn as a whole.
 * @param {string} stage @param {number} seed
 * @returns {Stroke[]}
 */
export function strokesOf(stage, seed) {
  const rand = rng(seed);
  /** @param {number} a @param {number} b */
  const between = (a, b) => a + rand() * (b - a);
  /**
   * @template T
   * @param {number} n @param {(i: number) => T} make
   * @returns {T[]}
   */
  const many = (n, make) => Array.from({ length: n }, (_, i) => make(i));
  /** @param {number} n @param {number} span @param {number} i */
  const spread = (n, span, i) => (n === 1 ? 0 : -span + (2 * span * i) / (n - 1));

  switch (stage) {
    case 'dau':
      return many(14, () => {
        const a = between(0, 360);
        const r = between(0, 13);
        const t = (a * Math.PI) / 180;
        const x = Math.cos(t) * r;
        const y = Math.sin(t) * r;
        const bend = between(-7, 7);
        const turn = between(0, Math.PI);
        const dx = Math.cos(turn) * 8;
        const dy = Math.sin(turn) * 8;
        return {
          d: `M ${(x - dx).toFixed(1)} ${(y - dy).toFixed(1)} Q ${(x + bend).toFixed(1)} ${(y - bend).toFixed(1)} ${(x + dx).toFixed(1)} ${(y + dy).toFixed(1)}`,
          w: 1.6,
        };
      });
    case 'giua':
      return many(11, (i) => rod(between(-2.5, 2.5), spread(11, 22, i), between(70, 110), 9, 3));
    case 'sau':
      return [-1, 1].flatMap((side) =>
        many(4, (i) => vee(side * between(17, 20), spread(4, 21, i), side, 2.4)),
      );
    case 'cuoi':
      return [-1, 1].flatMap((side) =>
        many(9, (i) => rod(side * between(28, 32), spread(9, 17, i), between(70, 110), 8, 3)),
      );
    case 'dau-1':
      return many(7, () => {
        const x = between(-20, 20);
        const y = between(-20, 20);
        const a = between(0, 180);
        const t = (a * Math.PI) / 180;
        const nx = -Math.sin(t) * 1.7;
        const ny = Math.cos(t) * 1.7;
        return [rod(x + nx, y + ny, a, 13, 2), rod(x - nx, y - ny, a, 13, 2)];
      }).flat();
    case 'giua-1':
      return [-1, 1].flatMap((side) =>
        many(8, (i) => rod(side * 7, spread(8, 24, i), between(-12, 12), 7, 4)),
      );
    case 'sau-1':
      return [-1, 1].flatMap((side) =>
        many(6, (i) => rod(side * between(21, 24), spread(6, 20, i), between(-15, 15), 9, 5)),
      );
    case 'cuoi-1':
      return [-1, 1].flatMap((side) =>
        many(7, (i) => rod(side * between(27, 30), spread(7, 15, i), between(70, 110), 8, 4)),
      );
    case 'giua-2':
      return many(6, (i) => rod(between(-1.5, 1.5), spread(6, 13, i), between(-12, 12), 7, 3.4));
    case 'sau-2':
      return [-1, 1].flatMap((side) =>
        many(5, (i) => rod(side * between(11, 13), spread(5, 11, i), between(-15, 15), 5, 2)),
      );
    case 'cuoi-2':
      return [-1, 1].flatMap((side) =>
        many(5, (i) => rod(side * between(15, 17), spread(5, 8, i), between(70, 110), 5, 2.6)),
      );
    default:
      return [];
  }
}

/**
 * The feedback for one attempt at naming a cell.
 * @param {SpecimenId} specimen @param {string} actual @param {string} guess
 * @returns {{ ok: boolean, text: string }}
 */
export function judge(specimen, actual, guess) {
  const { stages } = SPECIMENS[specimen];
  const right = stages.find((s) => s.id === actual);
  const picked = stages.find((s) => s.id === guess);
  if (actual === guess) return { ok: true, text: `Đúng, ${right?.name}: ${right?.clue}` };
  return {
    ok: false,
    text: `Chưa phải ${picked?.name}. Dấu hiệu của ${picked?.name}: ${picked?.clue} Hãy nhìn lại tế bào này.`,
  };
}

/**
 * How many cells of each stage a field holds, largest first.
 * @param {SpecimenId} specimen
 */
export function tallyOf(specimen) {
  return [...SPECIMENS[specimen].stages].sort((a, b) => b.count - a.count);
}
