import { describe, expect, it } from 'vitest';
import { QUESTIONS, TERMS, isRight, score, termName } from './engine.js';

describe('genetics term cards', () => {
  it('gives every term a definition, an example and a picture', () => {
    const ids = new Set(TERMS.map((t) => t.id));
    expect(ids.size).toBe(TERMS.length);
    for (const t of TERMS) {
      expect(t.definition.length, t.id).toBeGreaterThan(20);
      expect(t.example.length, t.id).toBeGreaterThan(10);
      expect(t.pictures.length, t.id).toBeGreaterThan(0);
    }
  });

  it('covers the key terms of the lesson', () => {
    for (const id of ['di-truyen', 'bien-di', 'gene', 'allele', 'kieu-gene', 'kieu-hinh']) {
      expect(
        TERMS.some((t) => t.id === id),
        id,
      ).toBe(true);
    }
    expect(termName('allele')).toBe('Allele');
    expect(() => termName('nope')).toThrow();
  });

  it('builds each question from four distinct known terms including the answer', () => {
    for (const q of QUESTIONS) {
      expect(new Set(q.options).size, q.id).toBe(4);
      expect(q.options, q.id).toContain(q.answer);
      for (const o of q.options) expect(() => termName(o), `${q.id} ${o}`).not.toThrow();
    }
  });

  it('checks and scores answers', () => {
    const q = QUESTIONS[0];
    expect(isRight(q, q.answer)).toBe(true);
    expect(isRight(q, q.options.find((o) => o !== q.answer) ?? '')).toBe(false);
    const all = Object.fromEntries(QUESTIONS.map((x) => [x.id, x.answer]));
    expect(score(all)).toBe(QUESTIONS.length);
    expect(score({ [q.id]: 'kieu-hinh' })).toBe(0);
  });
});
