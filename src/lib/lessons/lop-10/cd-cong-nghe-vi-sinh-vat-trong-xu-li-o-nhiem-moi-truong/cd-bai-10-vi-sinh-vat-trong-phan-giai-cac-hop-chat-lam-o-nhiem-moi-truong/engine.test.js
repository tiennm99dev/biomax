import { describe, expect, it } from 'vitest';
import {
  CASES,
  FOREIGN,
  GROUPS,
  ROUTES,
  STRAINS,
  checkCase,
  checkStrain,
  groupsOf,
  grows,
} from './engine.js';

describe('the breakdown map', () => {
  it('gives every route its hydrolysers and its own microbes', () => {
    expect(groupsOf('ki-khi').map((g) => g.id)).toEqual(['tiet-enzyme', 'ki-khi', 'archaea']);
    expect(groupsOf('hieu-khi').map((g) => g.id)).toEqual(['tiet-enzyme', 'hieu-khi']);
    expect(groupsOf('len-men').map((g) => g.id)).toEqual(['tiet-enzyme', 'len-men']);
    expect(GROUPS.every((g) => g.does && g.products && g.uses)).toBe(true);
  });

  it('names methane only on the anaerobic route', () => {
    const withMethane = ROUTES.filter((r) => r.products.includes('CH₄')).map((r) => r.id);
    expect(withMethane).toEqual(['ki-khi']);
  });
});

describe('placing a situation on the map', () => {
  it('accepts the one right route for every case', () => {
    const wrong = CASES.flatMap((c, i) =>
      ROUTES.filter((r) => checkCase(i, r.id).ok !== (r.id === c.route)).map((r) => [i, r.id]),
    );
    expect(wrong).toEqual([]);
  });

  it('uses every route in the set of cases', () => {
    expect(new Set(CASES.map((c) => c.route)).size).toBe(ROUTES.length);
  });

  it('gives a clue on a wrong route without naming the case answer', () => {
    const out = checkCase(0, 'len-men');
    expect(out.ok).toBe(false);
    expect(out.text).toContain('ethanol');
  });
});

describe('searching for a strain', () => {
  it('has exactly one surviving strain for every foreign compound', () => {
    const counts = FOREIGN.map((f) => STRAINS.filter((s) => grows(f.id, s)).length);
    expect(counts).toEqual(FOREIGN.map(() => 1));
  });

  it('turns down a strain that does not grow', () => {
    expect(checkStrain('pah', 'A').ok).toBe(true);
    expect(checkStrain('pah', 'B').ok).toBe(false);
    expect(checkStrain('pah', 'B').text).toContain('không mọc');
  });
});
