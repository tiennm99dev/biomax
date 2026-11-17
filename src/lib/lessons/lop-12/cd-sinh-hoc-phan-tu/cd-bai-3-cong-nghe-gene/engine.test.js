import { describe, expect, it } from 'vitest';
import {
  START,
  TARGET,
  copies,
  copiesText,
  hold,
  molecules,
  spanOf,
  strandsAfter,
  targetCopies,
} from './engine.js';

/** @param {number[]} temps @param {'taq' | 'thuong'} enzyme */
function run(temps, enzyme = 'taq') {
  let c = START;
  const tones = [];
  for (const t of temps) {
    const step = hold(c, t, enzyme);
    tones.push(step.tone);
    c = step.cycler;
  }
  return { c, tones };
}

describe('the thermal cycler', () => {
  it('completes a cycle only in the order 95, 55, 72 °C', () => {
    const { c, tones } = run([95, 55, 72, 95, 55, 72]);
    expect(c.cycle).toBe(2);
    expect(tones).toEqual(['ok', 'ok', 'ok', 'ok', 'ok', 'ok']);
  });

  it('refuses primers on double strands and extension without primers', () => {
    expect(hold(START, 55, 'taq').tone).toBe('warn');
    expect(hold(START, 55, 'taq').cycler.stage).toBe('kep');
    const single = run([95]).c;
    const ext = hold(single, 72, 'taq');
    expect(ext.tone).toBe('warn');
    expect(ext.cycler.cycle).toBe(0);
  });

  it('loses an ordinary polymerase at the first denaturation', () => {
    const { c, tones } = run([95, 55, 72], 'thuong');
    expect(c.cycle).toBe(0);
    expect(c.enzymeAlive).toBe(false);
    expect(tones[0]).toBe('warn');
    expect(hold(c, 72, 'thuong').text).toContain('Taq');
  });

  it('knocks bound primers off when heated again', () => {
    const { c } = run([95, 55, 95]);
    expect(c.stage).toBe('don');
    expect(c.cycle).toBe(0);
  });
});

describe('the copies', () => {
  it('doubles every cycle', () => {
    expect([0, 1, 2, 3, 10, 30].map(copies)).toEqual([1, 2, 4, 8, 1024, 1073741824]);
  });

  it('gives exact-length copies from the third cycle, matching the strand model', () => {
    expect([0, 1, 2, 3, 4, 5].map(targetCopies)).toEqual([0, 0, 0, 2, 8, 22]);
    const bad = [];
    for (let n = 0; n <= 10; n++) {
      const list = molecules(n);
      const exact = list.filter(([a, b]) => a === 'ngan' && b === 'ngan').length;
      if (list.length !== copies(n) || exact !== targetCopies(n)) bad.push(n);
    }
    expect(bad).toEqual([]);
  });

  it('keeps the two original strands in every cycle', () => {
    const originals = molecules(4)
      .flat()
      .filter((s) => s === 'goc');
    expect(originals).toHaveLength(2);
  });

  it('writes the count the book way', () => {
    expect(copiesText(0)).toContain('$1$');
    expect(copiesText(2)).not.toContain('đúng chiều dài');
    expect(copiesText(20)).toContain('1\u202f048\u202f576');
  });
});

describe('the drawn strands', () => {
  it('pairs a T strand with a B strand and bounds products by the primers', () => {
    const pairs = strandsAfter(3);
    expect(pairs.every(([a, b]) => a.sense === 'T' && b.sense === 'B')).toBe(true);
    expect(spanOf({ kind: 'dai', sense: 'T' })).toEqual([TARGET.from, 1]);
    expect(spanOf({ kind: 'dai', sense: 'B' })).toEqual([0, TARGET.to]);
    expect(spanOf({ kind: 'ngan', sense: 'B' })).toEqual([TARGET.from, TARGET.to]);
  });
});
