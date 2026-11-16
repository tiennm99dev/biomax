import { describe, expect, it } from 'vitest';
import {
  APPLICATION_CARDS,
  FIELD_ORDER,
  QUESTIONS,
  adviceText,
  scores,
  topFields,
} from './engine.js';

describe('the interest quiz', () => {
  it('offers one choice per field in every question', () => {
    const bad = QUESTIONS.filter(
      (q) => [...q.choices.map((c) => c.field)].sort().join() !== [...FIELD_ORDER].sort().join(),
    ).map((q) => q.id);
    expect(bad).toEqual([]);
  });

  it('scores answers and finds the top field', () => {
    /** @type {Record<string, import('./engine.js').Field>} */
    const answers = {
      ranh: 'thuy-san',
      'chu-de': 'thuy-san',
      'noi-lam': 'y-duoc',
      'van-de': 'thuy-san',
      viec: 'lam-nghiep',
    };
    expect(scores(answers)).toEqual({
      'y-duoc': 1,
      'thuy-san': 3,
      'nong-nghiep': 0,
      'lam-nghiep': 1,
    });
    expect(topFields(answers)).toEqual(['thuy-san']);
    expect(adviceText(answers)).toContain('nuôi trồng thuỷ sản (3/5 câu)');
  });

  it('reports ties and unfinished quizzes', () => {
    expect(topFields({})).toEqual([]);
    expect(adviceText({ ranh: 'y-duoc' })).toContain('1/5');
    /** @type {Record<string, import('./engine.js').Field>} */
    const tie = {
      ranh: 'y-duoc',
      'chu-de': 'y-duoc',
      'noi-lam': 'lam-nghiep',
      'van-de': 'lam-nghiep',
      viec: 'thuy-san',
    };
    expect(topFields(tie)).toEqual(['y-duoc', 'lam-nghiep']);
  });

  it('puts every application card in a known field', () => {
    expect(
      APPLICATION_CARDS.filter((c) => !FIELD_ORDER.includes(/** @type {any} */ (c.bin))),
    ).toEqual([]);
  });
});
