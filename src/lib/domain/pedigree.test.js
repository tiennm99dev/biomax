import { describe, expect, it } from 'vitest';
import {
  canInherit,
  conflict,
  consistentModes,
  findAssignment,
  generations,
  layoutPedigree,
  possibleGenotypes,
  showsTrait,
  validate,
} from './pedigree.js';

/** @typedef {import('./pedigree.js').Pedigree} Pedigree */

/** Two healthy parents with an affected daughter and a healthy son. */
/** @type {Pedigree} */
const recessiveDaughter = {
  people: [
    { id: 'f', sex: 'M', affected: false },
    { id: 'm', sex: 'F', affected: false },
    { id: 'd', sex: 'F', affected: true, father: 'f', mother: 'm' },
    { id: 's', sex: 'M', affected: false, father: 'f', mother: 'm' },
  ],
};

/** Two healthy parents with an affected son. */
/** @type {Pedigree} */
const affectedSon = {
  people: [
    { id: 'f', sex: 'M', affected: false },
    { id: 'm', sex: 'F', affected: false },
    { id: 's', sex: 'M', affected: true, father: 'f', mother: 'm' },
  ],
};

describe('genotypes and transmission', () => {
  it('shows the trait as each mode says', () => {
    expect(showsTrait('AD', 'Aa')).toBe(true);
    expect(showsTrait('AR', 'Aa')).toBe(false);
    expect(showsTrait('AR', 'aa')).toBe(true);
    expect(showsTrait('XD', 'XAXa')).toBe(true);
    expect(showsTrait('XR', 'XAXa')).toBe(false);
    expect(showsTrait('XR', 'XaY')).toBe(true);
  });

  it('passes one allele from each parent', () => {
    expect(canInherit('Aa', 'Aa', 'aa')).toBe(true);
    expect(canInherit('AA', 'Aa', 'aa')).toBe(false);
    expect(canInherit('XAY', 'XAXa', 'XaY')).toBe(true);
    expect(canInherit('XAY', 'XaXa', 'XaXa')).toBe(false);
    expect(canInherit('XaY', 'XAXA', 'XAXa')).toBe(true);
  });
});

describe('inheritance modes', () => {
  it('needs a recessive autosomal gene for an affected daughter of healthy parents', () => {
    expect(consistentModes(recessiveDaughter)).toEqual(['AR']);
  });

  it('allows autosomal or X-linked recessive for an affected son of healthy parents', () => {
    expect(consistentModes(affectedSon)).toEqual(['AR', 'XR']);
  });

  it('rules out X-linked dominant when an affected father has a healthy daughter', () => {
    /** @type {Pedigree} */
    const p = {
      people: [
        { id: 'f', sex: 'M', affected: true },
        { id: 'm', sex: 'F', affected: false },
        { id: 's', sex: 'M', affected: true, father: 'f', mother: 'm' },
        { id: 'd', sex: 'F', affected: false, father: 'f', mother: 'm' },
      ],
    };
    expect(consistentModes(p)).toEqual(['AD', 'AR', 'XR']);
    // The son is the first conflict: he takes his X from his healthy mother.
    expect(conflict(p, 'XD')).toEqual({ father: 'f', mother: 'm', child: 's' });
  });

  it('fits every mode for an affected father whose daughters are all affected', () => {
    /** @type {Pedigree} */
    const p = {
      people: [
        { id: 'f', sex: 'M', affected: true },
        { id: 'm', sex: 'F', affected: false },
        { id: 'd1', sex: 'F', affected: true, father: 'f', mother: 'm' },
        { id: 'd2', sex: 'F', affected: true, father: 'f', mother: 'm' },
      ],
    };
    expect(consistentModes(p)).toEqual(['AD', 'AR', 'XD', 'XR']);
  });

  it('follows a trait across three generations', () => {
    /** @type {Pedigree} */
    const p = {
      people: [
        { id: 'g1', sex: 'M', affected: true },
        { id: 'g2', sex: 'F', affected: false },
        { id: 'p1', sex: 'F', affected: false, father: 'g1', mother: 'g2' },
        { id: 'p2', sex: 'M', affected: false },
        { id: 'c1', sex: 'M', affected: true, father: 'p2', mother: 'p1' },
        { id: 'c2', sex: 'F', affected: false, father: 'p2', mother: 'p1' },
      ],
    };
    expect(consistentModes(p)).toEqual(['AR', 'XR']);
    // Under XR the daughter of an affected man must carry the allele.
    expect(possibleGenotypes(p, 'XR').p1).toEqual(['XAXa']);
  });

  it('lists the genotypes each person can have', () => {
    const g = possibleGenotypes(recessiveDaughter, 'AR');
    expect(g.f).toEqual(['Aa']);
    expect(g.m).toEqual(['Aa']);
    expect(g.d).toEqual(['aa']);
    expect(g.s).toEqual(['AA', 'Aa']);
    expect(possibleGenotypes(recessiveDaughter, 'AD').f).toEqual([]);
  });

  it('finds a full assignment and respects pinned genotypes', () => {
    expect(findAssignment(affectedSon, 'XR')).toEqual({ f: 'XAY', m: 'XAXa', s: 'XaY' });
    expect(findAssignment(affectedSon, 'AR', { f: 'AA' })).toBeNull();
  });

  it('names the family that breaks a mode', () => {
    expect(conflict(recessiveDaughter, 'AD')).toEqual({ father: 'f', mother: 'm', child: 'd' });
    expect(conflict(recessiveDaughter, 'AR')).toBeNull();
  });
});

describe('structure and layout', () => {
  it('validates parents', () => {
    expect(validate(recessiveDaughter)).toEqual([]);
    expect(
      validate({
        people: [
          { id: 'a', sex: 'F', affected: false },
          { id: 'b', sex: 'F', affected: false },
          { id: 'c', sex: 'M', affected: false, father: 'a', mother: 'b' },
          { id: 'c', sex: 'M', affected: false, mother: 'b' },
        ],
      }),
    ).toEqual(['duplicate person id', 'c: father is not a man', 'c needs both parents or none']);
  });

  it('puts married-in partners in the generation of their spouse', () => {
    const p = /** @type {Pedigree} */ ({
      people: [
        { id: 'a', sex: 'M', affected: false },
        { id: 'b', sex: 'F', affected: false },
        { id: 'c', sex: 'F', affected: false, father: 'a', mother: 'b' },
        { id: 'd', sex: 'M', affected: false },
        { id: 'e', sex: 'M', affected: true, father: 'd', mother: 'c' },
      ],
    });
    expect(generations(p)).toEqual({ a: 0, b: 0, c: 1, d: 1, e: 2 });
    const l = layoutPedigree(p);
    expect(l.depth).toBe(3);
    expect(l.width).toBe(2);
    expect(l.nodes.map((n) => [n.id, n.label])).toEqual([
      ['a', 'I.1'],
      ['b', 'I.2'],
      ['c', 'II.1'],
      ['d', 'II.2'],
      ['e', 'III.1'],
    ]);
    expect(l.couples).toHaveLength(2);
    expect(l.sibships).toEqual([
      { gen: 0, from: 1, children: [0.5] },
      { gen: 1, from: 1, children: [1] },
    ]);
  });

  it('keeps childless declared couples side by side', () => {
    const l = layoutPedigree({
      people: [
        { id: 'x', sex: 'M', affected: false },
        { id: 'z', sex: 'M', affected: false },
        { id: 'y', sex: 'F', affected: false },
      ],
      couples: [['x', 'y']],
    });
    expect(l.nodes.map((n) => n.id)).toEqual(['x', 'y', 'z']);
  });
});
