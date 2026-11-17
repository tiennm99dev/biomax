import { describe, expect, it } from 'vitest';
import {
  START_A,
  START_B,
  applyOp,
  classifyCounts,
  geneText,
  humanKaryotype,
  karyotypeWords,
  makeChromosome,
  plantKaryotype,
  tally,
} from './mutations.js';

const A = makeChromosome('A', START_A);
const B = makeChromosome('B', START_B);

/** @param {ReturnType<typeof applyOp>} out */
function texts(out) {
  if ('error' in out) throw new Error(out.error);
  return [geneText(out.a), geneText(out.b)];
}

describe('structural changes', () => {
  it('deletes, duplicates and inverts a segment', () => {
    expect(texts(applyOp('mat', A, B, 5, 5))[0]).toBe('ABC•DFGH');
    expect(texts(applyOp('lap', A, B, 5, 6))[0]).toBe('ABC•DEFEFGH');
    expect(texts(applyOp('dao', A, B, 7, 5))[0]).toBe('ABC•DGFEH');
    expect(texts(applyOp('dao', A, B, 2, 3))[0]).toBe('AB•CDEFGH');
  });

  it('swaps end segments in a reciprocal translocation', () => {
    expect(texts(applyOp('chuyen', A, B, 7, 8))).toEqual(['ABC•DEFQR', 'MN•OPGH']);
    expect(texts(applyOp('chuyen', A, B, 0, 1))).toEqual(['MC•DEFGH', 'ABN•OPQR']);
    const out = applyOp('chuyen', A, B, 7, 8);
    if ('error' in out) throw new Error(out.error);
    expect(tally(out.a)).toEqual({ genes: 8, foreign: 2 });
  });

  it('refuses segments the model cannot change', () => {
    expect(applyOp('mat', A, B, 2, 4)).toHaveProperty('error');
    expect(applyOp('lap', A, B, 3, 3)).toHaveProperty('error');
    expect(applyOp('dao', A, B, 5, 5)).toHaveProperty('error');
    expect(applyOp('chuyen', A, B, 5, 6)).toHaveProperty('error');
  });

  it('gives duplicated genes keys of their own', () => {
    let a = A;
    for (let k = 0; k < 2; k++) {
      const out = applyOp('lap', a, B, 4, 5);
      if ('error' in out) throw new Error(out.error);
      a = out.a;
    }
    expect(new Set(a.map((g) => g.id)).size).toBe(a.length);
  });
});

describe('numerical changes', () => {
  it('names the book forms', () => {
    const cases = [
      [[2, 2, 2, 2], 'Lưỡng bội bình thường', '2n', 8],
      [[2, 2, 3, 2], 'Thể ba', '2n + 1', 9],
      [[2, 1, 2, 2], 'Thể một', '2n − 1', 7],
      [[2, 0, 2, 2], 'Thể không', '2n − 2', 6],
      [[4, 2, 2, 2], 'Thể bốn', '2n + 2', 10],
      [[1, 1, 2, 2], 'Thể một kép', '2n − 1 − 1', 6],
      [[3, 3, 2, 2], 'Thể ba kép', '2n + 1 + 1', 10],
      [[3, 3, 3, 3], 'Thể tam bội (đa bội lẻ)', '3n', 12],
      [[4, 4, 4, 4], 'Thể tứ bội (đa bội chẵn)', '4n', 16],
      [[1, 1, 1, 1], 'Thể đơn bội', 'n', 4],
      [[3, 3, 3, 2], 'Thể lệch bội', '3n − 1', 11],
      [[0, 0, 0, 2], 'Thể lệch bội ở nhiều cặp', '2n − 2 − 2 − 2', 2],
    ];
    const bad = cases.filter(([c, name, notation, total]) => {
      const v = classifyCounts(/** @type {number[]} */ (c));
      return v.name !== name || v.notation !== notation || v.total !== total;
    });
    expect(bad).toEqual([]);
  });
});

describe('karyotypes', () => {
  it('builds human karyotypes with the right totals', () => {
    const total = (/** @type {import('./mutations.js').Group[]} */ g) =>
      g.reduce((s, x) => s + x.items.length, 0);
    expect(total(humanKaryotype())).toBe(46);
    expect(total(humanKaryotype({ extra: [21] }))).toBe(47);
    expect(total(humanKaryotype({ sex: 'X' }))).toBe(45);
    expect(total(humanKaryotype({ sex: 'XXY' }))).toBe(47);
    expect(humanKaryotype({ extra: [21] })[20].items).toHaveLength(3);
    expect(total(plantKaryotype([3, 3, 3, 3]))).toBe(12);
  });

  it('says the odd groups in words', () => {
    expect(karyotypeWords(humanKaryotype({ extra: [21], sex: 'XY' }))).toBe(
      'Tổng 47 nhiễm sắc thể. 21 nhóm có 2 chiếc; cặp 21: 3 chiếc; nhóm giới tính: X, Y.',
    );
  });
});
