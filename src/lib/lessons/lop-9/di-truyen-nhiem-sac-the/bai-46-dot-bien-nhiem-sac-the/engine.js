/**
 * Chromosome mutations. Structural ones act on a chromosome written as its
 * gene segments with the centromere 'o' (ABCoDEFGH): deletion, duplication,
 * inversion and translocation of a chosen run of segments onto a second,
 * non-homologous chromosome (MNoOPQR). Numerical ones change how many copies
 * of each pair a 2n = 8 cell holds and name the result (thể ba, thể một,
 * tam bội, …).
 */

export const CENTROMERE = 'o';
export const START = { a: [...'ABCoDEFGH'], m: [...'MNoOPQR'] };

/** @typedef {'mat' | 'lap' | 'dao' | 'chuyen'} StructKind */
/** @typedef {{ a: string[], m: string[] }} Pair */

/** @type {Record<StructKind, string>} */
export const STRUCT_LABEL = {
  mat: 'Mất đoạn',
  lap: 'Lặp đoạn',
  dao: 'Đảo đoạn',
  chuyen: 'Chuyển đoạn',
};

/** Segment text, as the book writes a chromosome: ABC•DEFGH. @param {string[]} c */
export function chromText(c) {
  return c.map((g) => (g === CENTROMERE ? '•' : g)).join('');
}

/**
 * Why an operation cannot be done on the run from i to j (inclusive) of
 * chromosome a, or null when it can.
 * @param {StructKind} kind
 * @param {string[]} a
 * @param {number} i
 * @param {number} j
 */
export function blockReason(kind, a, i, j) {
  const lo = Math.min(i, j);
  const hi = Math.max(i, j);
  if (lo < 0 || hi >= a.length) return 'Hãy chọn một đoạn trên NST.';
  const hasCentromere = a.slice(lo, hi + 1).includes(CENTROMERE);
  if (kind === 'dao') {
    return hi === lo ? 'Đoạn đảo cần có ít nhất hai đoạn gene.' : null;
  }
  if (hasCentromere) {
    return kind === 'mat'
      ? 'Không thể mất đoạn chứa tâm động: NST không còn tâm động sẽ không đính được vào thoi phân bào và bị tiêu biến.'
      : 'Hãy chọn đoạn không chứa tâm động.';
  }
  return null;
}

/**
 * Applies one structural mutation to the run from i to j of chromosome a.
 * @param {StructKind} kind
 * @param {Pair} pair
 * @param {number} i
 * @param {number} j
 * @returns {Pair}
 */
export function applyStruct(kind, pair, i, j) {
  const lo = Math.min(i, j);
  const hi = Math.max(i, j);
  const a = [...pair.a];
  const seg = a.slice(lo, hi + 1);
  if (kind === 'mat') a.splice(lo, seg.length);
  if (kind === 'lap') a.splice(hi + 1, 0, ...seg);
  if (kind === 'dao') a.splice(lo, seg.length, ...[...seg].reverse());
  if (kind === 'chuyen') {
    a.splice(lo, seg.length);
    return { a, m: [...pair.m, ...seg] };
  }
  return { a, m: [...pair.m] };
}

/** Genes (segments other than the centromere) on a chromosome. @param {string[]} c */
export function genes(c) {
  return c.filter((g) => g !== CENTROMERE);
}

/** Short-arm share of a chromosome: segments before the centromere over all segments. @param {string[]} c */
export function armShare(c) {
  return c.indexOf(CENTROMERE) / (c.length - 1);
}

/**
 * What a structural mutation changed: gene number, gene order and the
 * linkage groups.
 * @param {StructKind} kind
 * @param {Pair} before
 * @param {Pair} after
 */
export function structEffect(kind, before, after) {
  const n0 = genes(before.a).length;
  const n1 = genes(after.a).length;
  const shape =
    Math.abs(armShare(before.a) - armShare(after.a)) > 1e-9
      ? ' Vị trí tâm động trên NST thay đổi nên hình dạng NST thay đổi.'
      : '';
  switch (kind) {
    case 'mat':
      return `NST còn ${n1} gene (mất ${n0 - n1}): số lượng gene trên NST giảm. Mất đoạn thường làm giảm sức sống hoặc gây chết.${shape}`;
    case 'lap':
      return `NST có ${n1} gene (thêm ${n1 - n0} gene lặp lại): số lượng gene tăng, có thể làm tăng hoặc giảm mức biểu hiện của tính trạng.${shape}`;
    case 'dao':
      return `Số lượng gene không đổi (${n1} gene) nhưng trật tự các gene trên NST thay đổi.${shape}`;
    default:
      return `Đoạn ${genes(after.m).slice(genes(before.m).length).join('')} đã chuyển sang NST khác: NST thứ nhất còn ${n1} gene, NST thứ hai có ${genes(after.m).length} gene. Nhóm gene liên kết thay đổi.${shape}`;
  }
}

// Numerical mutations.

/** Copies of each of the 4 pairs in a normal 2n = 8 cell. */
export const NORMAL = [2, 2, 2, 2];
export const MAX_COPIES = 4;

/**
 * @typedef {{ kind: 'binh-thuong' | 'lech-boi' | 'da-boi' | 'don-boi', name: string, formula: string }} NumberType
 */

/**
 * Names a chromosome set from the copies of each pair.
 * @param {number[]} counts
 * @returns {NumberType}
 */
export function classifyNumber(counts) {
  const total = counts.reduce((s, c) => s + c, 0);
  const all = (/** @type {number} */ k) => counts.every((c) => c === k);
  if (all(2))
    return { kind: 'binh-thuong', name: 'Bộ NST lưỡng bội bình thường', formula: `2n = ${total}` };
  if (all(1))
    return { kind: 'don-boi', name: 'Bộ NST đơn bội (như ở giao tử)', formula: `n = ${total}` };
  if (all(3)) return { kind: 'da-boi', name: 'Thể tam bội (đa bội)', formula: `3n = ${total}` };
  if (all(4)) return { kind: 'da-boi', name: 'Thể tứ bội (đa bội)', formula: `4n = ${total}` };
  const diffs = counts.map((c) => c - 2);
  const changed = diffs.filter((d) => d !== 0);
  const sign = (/** @type {number} */ d) => (d > 0 ? ` + ${d}` : ` − ${-d}`);
  if (changed.length === 1) {
    /** @type {Record<string, string>} */
    const names = { 1: 'Thể ba', '-1': 'Thể một', '-2': 'Thể không', 2: 'Thể bốn' };
    const d = changed[0];
    const pairNo = diffs.findIndex((x) => x !== 0) + 1;
    return {
      kind: 'lech-boi',
      name: `${names[String(d)]} (lệch bội ở cặp số ${pairNo})`,
      formula: `2n${sign(d)} = ${total}`,
    };
  }
  // Several pairs changed: the book writes one term per pair, so two trisomic
  // pairs are 2n + 1 + 1 (thể ba kép), never 2n + 2, which is one pair of four.
  const twin =
    changed.length === 2 && changed[0] === changed[1] && Math.abs(changed[0]) === 1
      ? changed[0] > 0
        ? 'Thể ba kép'
        : 'Thể một kép'
      : 'Thể lệch bội';
  return {
    kind: 'lech-boi',
    name: `${twin} (lệch bội ở ${changed.length} cặp NST)`,
    formula: `2n${changed.map(sign).join('')} = ${total}`,
  };
}

/**
 * Changes the copies of one pair, kept between 0 and MAX_COPIES.
 * @param {number[]} counts
 * @param {number} pair
 * @param {number} delta
 */
export function changeCopies(counts, pair, delta) {
  return counts.map((c, i) => (i === pair ? Math.min(MAX_COPIES, Math.max(0, c + delta)) : c));
}

/** Every pair with k copies: n, 2n, 3n, 4n. @param {number} k */
export function euploid(k) {
  return NORMAL.map(() => k);
}
