import { describe, expect, it } from 'vitest';
import {
  ABO,
  BLOOD_GROUPS,
  STEPS,
  along,
  canGive,
  clumpingAntibodies,
  explainTransfusion,
  recipientsOf,
  richAt,
} from './engine.js';

describe('ABO transfusion', () => {
  it('stores the antigens and antibodies of each group', () => {
    expect(ABO.A).toEqual({ antigens: ['A'], antibodies: ['β'] });
    expect(ABO.O.antigens).toEqual([]);
    expect(ABO.AB.antibodies).toEqual([]);
  });

  it('follows the transfusion diagram of the book', () => {
    expect(recipientsOf('O')).toEqual(['A', 'B', 'AB', 'O']);
    expect(recipientsOf('A')).toEqual(['A', 'AB']);
    expect(recipientsOf('B')).toEqual(['B', 'AB']);
    expect(recipientsOf('AB')).toEqual(['AB']);
    /** @param {import('./engine.js').BloodGroup} r */
    const into = (r) => BLOOD_GROUPS.filter((d) => canGive(d, r));
    expect(into('AB')).toEqual(['A', 'B', 'AB', 'O']);
    expect(into('O')).toEqual(['O']);
  });

  it('names the antibody that clumps the cells', () => {
    expect(clumpingAntibodies('A', 'B')).toEqual(['α']);
    expect(clumpingAntibodies('AB', 'O')).toEqual(['α', 'β']);
    expect(explainTransfusion('A', 'B')).toContain('không truyền được');
    expect(explainTransfusion('O', 'AB')).toContain('truyền được');
  });
});

describe('circulation path', () => {
  it('runs the pulmonary circuit from the right ventricle to the left atrium', () => {
    const small = STEPS.filter((s) => s.loop === 'nho');
    expect(small[0].points[0]).toEqual([100, 215]);
    expect(small.at(-1)?.points.at(-1)).toEqual([220, 150]);
  });

  it('runs the systemic circuit from the left ventricle to the right atrium', () => {
    const big = STEPS.filter((s) => s.loop === 'lon');
    expect(big[0].points[0]).toEqual([220, 215]);
    expect(big.at(-1)?.points.at(-1)).toEqual([100, 150]);
  });

  it('joins the steps end to start in a closed loop', () => {
    for (let i = 0; i < STEPS.length; i++) {
      const next = STEPS[(i + 1) % STEPS.length];
      expect(next.points[0]).toEqual(STEPS[i].points.at(-1));
    }
  });

  it('turns blood bright in lung capillaries and dark in body capillaries', () => {
    const lung = STEPS.findIndex((s) => s.id === 'mao-mach-phoi');
    const body = STEPS.findIndex((s) => s.id === 'mao-mach-co-quan');
    expect(richAt(lung, 0.2)).toBe(false);
    expect(richAt(lung, 0.8)).toBe(true);
    expect(richAt(body, 0.2)).toBe(true);
    expect(richAt(body, 0.8)).toBe(false);
  });

  it('walks along a polyline', () => {
    const pts = /** @type {Array<[number, number]>} */ ([
      [0, 0],
      [10, 0],
      [10, 10],
    ]);
    expect(along(pts, 0)).toEqual([0, 0]);
    expect(along(pts, 0.5)).toEqual([10, 0]);
    expect(along(pts, 0.75)).toEqual([10, 5]);
    expect(along(pts, 1)).toEqual([10, 10]);
  });
});
