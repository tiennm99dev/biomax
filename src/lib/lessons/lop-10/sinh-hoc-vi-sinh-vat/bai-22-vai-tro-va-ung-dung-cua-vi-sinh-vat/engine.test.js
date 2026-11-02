import { describe, expect, it } from 'vitest';
import { FIELDS, PRODUCTS, ROLE_BINS, ROLE_CARDS, buildQuiz } from './engine.js';

describe('the application map', () => {
  it('covers food, farming, medicine and the environment', () => {
    expect(FIELDS.map((f) => f.id)).toEqual(['thuc-pham', 'nong-nghiep', 'y-duoc', 'moi-truong']);
    expect(FIELDS.filter((f) => f.products.length < 2)).toEqual([]);
  });

  it('never repeats a product or a microbe', () => {
    expect(new Set(PRODUCTS.map((p) => p.id)).size).toBe(PRODUCTS.length);
    expect(new Set(PRODUCTS.map((p) => p.microbe)).size).toBe(PRODUCTS.length);
  });
});

describe('the quiz', () => {
  it('asks each product once, with four different options and the right answer among them', () => {
    const bad = [];
    for (const seed of [1, 2, 3]) {
      const quiz = buildQuiz(seed);
      if (quiz.length !== PRODUCTS.length) bad.push(`length ${seed}`);
      for (const q of quiz) {
        if (new Set(q.options).size !== 4) bad.push(q.product.id);
        if (q.options[q.answer] !== q.product.microbe) bad.push(q.product.id);
      }
    }
    expect(bad).toEqual([]);
  });

  it('is the same for a seed and differs across seeds', () => {
    expect(buildQuiz(5)).toEqual(buildQuiz(5));
    expect(buildQuiz(5).map((q) => q.product.id)).not.toEqual(
      buildQuiz(6).map((q) => q.product.id),
    );
  });
});

describe('the roles', () => {
  it('sorts every card into a real bin, with every bin used', () => {
    const ids = ROLE_BINS.map((b) => b.id);
    expect(ROLE_CARDS.filter((c) => !ids.includes(c.bin))).toEqual([]);
    expect(ids.filter((id) => !ROLE_CARDS.some((c) => c.bin === id))).toEqual([]);
  });
});
