import { describe, expect, it } from 'vitest';
import {
  DAYS,
  START_HEIGHT,
  burnt,
  checkDesign,
  conclusion,
  doseEffect,
  heights,
  plainPot,
} from './engine.js';

/** @param {Partial<import('./engine.js').Pot>} over @returns {import('./engine.js').Pot} */
const pot = (over) => ({ ...plainPot(), ...over });
const last = (/** @type {import('./engine.js').Pot} */ p) => heights(p)[DAYS];

describe('the growth model', () => {
  it('grows the control plant slowly and the NPK plant most', () => {
    const control = last(pot({}));
    expect(control).toBeCloseTo(START_HEIGHT + DAYS * 0.6, 6);
    const singles = ['N', 'P', 'K'].map((k) =>
      last(pot({ kind: /** @type {'N'} */ (k), dose: 3 })),
    );
    const npk = last(pot({ kind: 'NPK', dose: 3 }));
    expect(singles.filter((h) => h <= control || h >= npk)).toEqual([]);
  });

  it('peaks at the optimum dose and burns at a heavy dose', () => {
    expect(doseEffect(3)).toBe(1);
    expect(doseEffect(1.5)).toBe(0.5);
    const heavy = pot({ kind: 'NPK', dose: 8 });
    expect(burnt(heavy)).toBe(true);
    expect(last(heavy)).toBeLessThan(last(pot({})));
    expect(last(pot({ kind: 'NPK', dose: 1 }))).toBeLessThan(last(pot({ kind: 'NPK', dose: 3 })));
  });

  it('lets dissolved fertilizer act sooner than fertilizer mixed into the soil', () => {
    const fast = heights(pot({ kind: 'NPK', dose: 3, method: 'hoa-tan' }));
    const slow = heights(pot({ kind: 'NPK', dose: 3, method: 'tron-dat' }));
    expect(fast[5] - START_HEIGHT).toBeGreaterThan(slow[5] - START_HEIGHT);
  });
});

describe('the design check', () => {
  it('accepts a fair test of the kind with a control pot', () => {
    const pots = [pot({}), pot({ kind: 'N' }), pot({ kind: 'P' }), pot({ kind: 'NPK' })];
    expect(checkDesign('loai', pots).ok).toBe(true);
  });

  it('refuses a second factor that changes, or a missing control', () => {
    const mixed = [pot({}), pot({ kind: 'N', dose: 4 }), pot({ kind: 'NPK' }), pot({ kind: 'P' })];
    expect(checkDesign('loai', mixed).text).toContain('hàm lượng');
    const noControl = [pot({ kind: 'NPK', dose: 1 }), pot({ kind: 'NPK', dose: 3 })];
    expect(checkDesign('ham-luong', noControl).ok).toBe(false);
    expect(checkDesign('loai', [pot({}), pot({}), pot({}), pot({})]).ok).toBe(false);
  });

  it('checks the method test without a control pot', () => {
    const pots = [pot({ kind: 'NPK' }), pot({ kind: 'NPK', method: 'tron-dat' })];
    expect(checkDesign('cach-bon', pots).ok).toBe(true);
    expect(checkDesign('cach-bon', [pot({ kind: 'NPK' }), pot({ kind: 'NPK' })]).ok).toBe(false);
  });

  it('accepts a dose test whose control is an unfertilized pot', () => {
    const pots = [
      pot({}),
      pot({ kind: 'NPK', dose: 1 }),
      pot({ kind: 'NPK', dose: 3 }),
      pot({ kind: 'NPK', dose: 8 }),
    ];
    expect(checkDesign('ham-luong', pots).ok).toBe(true);
    expect(conclusion('ham-luong', pots).tone).toBe('warn');
  });

  it('draws the kind and method conclusions only from what the pots show', () => {
    const fair = [pot({}), pot({ kind: 'N', dose: 3 }), pot({ kind: 'P', dose: 3 })];
    expect(conclusion('loai', [...fair, pot({ kind: 'NPK', dose: 3 })]).text).toContain(
      'cân đối N, P, K cho kết quả tốt hơn',
    );
    expect(conclusion('loai', fair).text).toContain('Hãy thêm một chậu bón NPK');
    expect(conclusion('loai', [pot({}), pot({ kind: 'NPK', dose: 3 })]).text).toContain(
      'chỉ bón một loại phân',
    );
    const burnt8 = [pot({}), pot({ kind: 'N', dose: 8 }), pot({ kind: 'NPK', dose: 8 })];
    expect(conclusion('loai', burnt8).text).toContain('giảm lượng phân');
    const heavyMethod = [
      pot({ kind: 'NPK', dose: 8 }),
      pot({ kind: 'NPK', dose: 8, method: 'tron-dat' }),
    ];
    expect(conclusion('cach-bon', heavyMethod).text).toContain('giảm lượng phân');
  });
});
