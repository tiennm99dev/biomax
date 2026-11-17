import { describe, expect, it } from 'vitest';
import { consistentModes, validate } from '#lib/domain/pedigree.js';
import { FAMILIES, clues, judge, labeller, quarterText, risk } from './engine.js';

/** @param {string} id */
const fam = (id) => {
  const f = FAMILIES.find((x) => x.id === id);
  if (!f) throw new Error(id);
  return f.pedigree;
};

describe('families', () => {
  it('are valid and fit the mode they show', () => {
    const bad = FAMILIES.filter(
      (f) => validate(f.pedigree).length > 0 || !consistentModes(f.pedigree).includes(f.truth),
    ).map((f) => f.id);
    expect(bad).toEqual([]);
  });

  it('pin the mode down where the story says so', () => {
    expect(consistentModes(fam('bach-tang'))).toEqual(['AR']);
    expect(consistentModes(fam('ngon-ngan'))).toEqual(['AD']);
    expect(consistentModes(fam('mau-kho-dong'))).toEqual(['AR', 'XR']);
  });

  it('labels people as the chart does', () => {
    expect(labeller(fam('bach-tang'))('ii2')).toBe('II.2');
  });
});

describe('clues and verdicts', () => {
  it('finds the dominance clues', () => {
    expect(clues(fam('bach-tang')).join(' ')).toContain('allele lặn');
    expect(clues(fam('bach-tang')).join(' ')).toContain('không nằm trên X');
    expect(clues(fam('ngon-ngan')).join(' ')).toContain('allele trội');
  });

  it('rules out a wrong hypothesis with a reason', () => {
    const v = judge(fam('bach-tang'), 'XR');
    expect(v.fits).toBe(false);
    expect(v.reason).toMatch(/II\.2 không thể là con của I\.1 và I\.2/);
    expect(judge(fam('mau-kho-dong'), 'XR')).toEqual({ fits: true, others: ['AR'], reason: '' });
  });
});

describe('risk', () => {
  it('gives the counselling figures in quarters', () => {
    expect(risk('AR', 'Aa', 'Aa')).toEqual({ child: 1, son: 1, daughter: 1 });
    expect(risk('AR', 'Aa', 'aa').child).toBe(2);
    expect(risk('AR', 'AA', 'aa').child).toBe(0);
    expect(risk('XR', 'XAXa', 'XAY')).toEqual({ child: 1, son: 2, daughter: 0 });
    expect(risk('XR', 'XAXa', 'XaY')).toEqual({ child: 2, son: 2, daughter: 2 });
    expect(risk('XR', 'XaXa', 'XAY')).toEqual({ child: 2, son: 4, daughter: 0 });
    expect(risk('XR', 'XAXA', 'XaY').child).toBe(0);
  });

  it('writes quarters as fractions', () => {
    expect([0, 1, 2, 3, 4].map(quarterText)).toEqual([
      '$0$',
      '$\\dfrac{1}{4}$',
      '$\\dfrac{1}{2}$',
      '$\\dfrac{3}{4}$',
      '$1$',
    ]);
  });
});
