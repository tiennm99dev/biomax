import { describe, expect, it } from 'vitest';
import {
  ACTIONS,
  CASES,
  QUESTIONS,
  START,
  actionOf,
  checkAnswer,
  next,
  questionOf,
  walk,
} from './engine.js';

describe('the first-aid decision tree', () => {
  it('leads every branch to a question or an action', () => {
    const ends = QUESTIONS.flatMap((q) => [q.yes, q.no]);
    expect(ends.filter((id) => !questionOf(id) && !actionOf(id))).toEqual([]);
    expect(ACTIONS.filter((a) => !ends.includes(a.id)).map((a) => a.id)).toEqual([]);
    expect(questionOf(START)).not.toBeNull();
  });

  it('asks about consciousness first and never induces vomiting in an unconscious person', () => {
    expect(next(START, false)).toBe('hon-me');
    expect(actionOf('hon-me')?.steps.join(' ')).toContain('Không gây nôn');
  });

  it('sends each case to its own action', () => {
    const got = Object.fromEntries(CASES.map((c) => [c.id, walk(c).action.id]));
    expect(got).toEqual({
      lan: 'bu-nuoc',
      hung: 'gay-non',
      'ba-tu': 'den-y-te',
      minh: 'cap-cuu',
      'be-na': 'khong-gay-non',
      'chu-ba': 'hon-me',
    });
  });

  it('accepts answers that match the case and explains a wrong turn', () => {
    const lan = CASES[0];
    expect(checkAnswer(lan, 'tinh', true).ok).toBe(true);
    const wrong = checkAnswer(lan, 'moi-an', true);
    expect(wrong.ok).toBe(false);
    expect(wrong.text).toContain(lan.name);
    expect(checkAnswer(null, 'moi-an', true).ok).toBe(true);
  });
});
