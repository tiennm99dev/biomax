import { describe, expect, it } from 'vitest';
import {
  PRESETS,
  TRAITS,
  genotypeTex,
  genotypesFor,
  isCrisscross,
  sexLinkedCross,
  shareText,
  traitOf,
} from './engine.js';

const fly = traitOf('mat-ruoi');
const chick = traitOf('long-ga');
const [XWXW, XWXw, XwXw] = genotypesFor(fly, 'F');
const [XWY, XwY] = genotypesFor(fly, 'M');

describe('genotypes', () => {
  it('gives each sex its chromosomes', () => {
    expect(genotypesFor(fly, 'F').map(genotypeTex)).toEqual(['X^WX^W', 'X^WX^w', 'X^wX^w']);
    expect(genotypesFor(fly, 'M').map(genotypeTex)).toEqual(['X^WY', 'X^wY']);
    expect(genotypesFor(chick, 'M').map(genotypeTex)).toEqual(['Z^BZ^B', 'Z^BZ^b', 'Z^bZ^b']);
    expect(genotypesFor(chick, 'F').map(genotypeTex)).toEqual(['Z^BW', 'Z^bW']);
  });

  it('has presets that point at real genotypes', () => {
    const bad = TRAITS.flatMap((t) =>
      (PRESETS[t.id] ?? [])
        .filter((p) => !genotypesFor(t, 'F')[p.mother] || !genotypesFor(t, 'M')[p.father])
        .map((p) => `${t.id}:${p.label}`),
    );
    expect(bad).toEqual([]);
  });
});

describe('Morgan crosses', () => {
  it('reciprocal crosses differ', () => {
    const thuan = sexLinkedCross(fly, XWXW, XwY);
    expect(thuan.daughters).toEqual({ total: 2, dom: 2, rec: 0 });
    expect(thuan.sons).toEqual({ total: 2, dom: 2, rec: 0 });
    const nghich = sexLinkedCross(fly, XwXw, XWY);
    expect(nghich.daughters.rec).toBe(0);
    expect(nghich.sons.dom).toBe(0);
    expect(isCrisscross(fly, XwXw, XWY)).toBe(true);
    expect(isCrisscross(fly, XWXW, XwY)).toBe(false);
  });

  it('gives 3 : 1 in F2 with white eyes only in males', () => {
    const f2 = sexLinkedCross(fly, XWXw, XWY);
    expect(f2.daughters).toEqual({ total: 2, dom: 2, rec: 0 });
    expect(f2.sons).toEqual({ total: 2, dom: 1, rec: 1 });
    expect(shareText(fly, f2.sons)).toBe('50% mắt đỏ, 50% mắt trắng');
  });
});

describe('ZW system', () => {
  it('sexes chicks by plumage', () => {
    const [ZBW] = genotypesFor(chick, 'F');
    const ZbZb = genotypesFor(chick, 'M')[2];
    const c = sexLinkedCross(chick, ZBW, ZbZb);
    expect(c.sons).toEqual({ total: 2, dom: 2, rec: 0 });
    expect(c.daughters).toEqual({ total: 2, dom: 0, rec: 2 });
    expect(isCrisscross(chick, ZBW, ZbZb)).toBe(true);
  });
});
