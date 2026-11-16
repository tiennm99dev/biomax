import { describe, expect, it } from 'vitest';
import { MAX_ENZYMES, addLactose, explain, start, status, tick } from './engine.js';

/** @param {import('./engine.js').OperonState} s @param {number} n */
function run(s, n) {
  for (let i = 0; i < n; i++) s = tick(s);
  return s;
}

describe('lac operon', () => {
  it('stays off without lactose', () => {
    const s = run(start(), 5);
    expect(status(s)).toMatchObject({ onOperator: true, transcribing: false });
    expect(s.enzymes).toBe(0);
  });

  it('switches on with lactose and off again once it is used up', () => {
    let s = addLactose(start());
    expect(status(s).transcribing).toBe(true);
    s = tick(s);
    expect(s).toMatchObject({ enzymes: 1, lactose: 3 });
    s = run(s, 2);
    expect(s.lactose).toBe(0);
    expect(status(s).onOperator).toBe(true);
    s = run(s, MAX_ENZYMES);
    expect(s.enzymes).toBe(0);
  });

  it('is always on when lacI or O is mutated', () => {
    for (const m of /** @type {const} */ (['lacI', 'O'])) {
      const s = run(start(m), 4);
      expect(status(s).transcribing).toBe(true);
      expect(s.enzymes).toBe(MAX_ENZYMES);
      expect(explain(s).join(' ')).toContain('lãng phí');
    }
  });

  it('is always off when P is mutated', () => {
    const s = run(addLactose(start('P')), 3);
    expect(status(s).transcribing).toBe(false);
    expect(s).toMatchObject({ enzymes: 0, lactose: 4 });
    expect(explain(s).join(' ')).toContain('Vùng P');
  });
});
