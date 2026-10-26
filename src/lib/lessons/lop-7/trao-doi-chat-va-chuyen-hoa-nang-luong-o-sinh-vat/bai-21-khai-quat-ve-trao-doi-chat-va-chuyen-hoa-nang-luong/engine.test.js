import { describe, expect, it } from 'vitest';
import { ORGANISMS, QUESTIONS, answerFeedback, flowsOf } from './engine.js';

describe('metabolism flow diagram', () => {
  it('has unique arrows with both directions for each organism', () => {
    for (const o of /** @type {const} */ (['nguoi', 'cay'])) {
      const ids = ORGANISMS[o].flows.map((f) => f.id);
      expect(new Set(ids).size).toBe(ids.length);
      expect(flowsOf(o, 'vao').length).toBeGreaterThan(1);
      expect(flowsOf(o, 'ra').length).toBeGreaterThan(1);
      expect(ORGANISMS[o].flows.some((f) => f.kind === 'nang-luong')).toBe(true);
    }
  });

  it('takes oxygen into the body and gives carbon dioxide out', () => {
    const human = ORGANISMS.nguoi.flows;
    expect(human.find((f) => f.id === 'oxygen')?.dir).toBe('vao');
    expect(human.find((f) => f.id === 'carbon-dioxide')?.dir).toBe('ra');
    const plant = ORGANISMS.cay.flows;
    expect(plant.find((f) => f.id === 'carbon-dioxide-vao')?.dir).toBe('vao');
    expect(plant.find((f) => f.id === 'oxygen-ra')?.dir).toBe('ra');
    expect(plant.find((f) => f.id === 'anh-sang')?.kind).toBe('nang-luong');
  });

  it('points every question at an arrow of its organism', () => {
    for (const q of QUESTIONS) {
      expect(ORGANISMS[q.organism].flows.some((f) => f.id === q.answer)).toBe(true);
      expect(answerFeedback(q, q.answer).ok).toBe(true);
    }
  });

  it('explains a wrong arrow by its direction', () => {
    const q = QUESTIONS[0];
    const wrongDir = answerFeedback(q, 'carbon-dioxide');
    expect(wrongDir.ok).toBe(false);
    expect(wrongDir.text).toContain('đi ra');
    const sameDir = answerFeedback(q, 'thuc-an');
    expect(sameDir.ok).toBe(false);
    expect(sameDir.text).toContain('miệng');
    expect(answerFeedback(q, 'khong-co').ok).toBe(false);
  });
});
