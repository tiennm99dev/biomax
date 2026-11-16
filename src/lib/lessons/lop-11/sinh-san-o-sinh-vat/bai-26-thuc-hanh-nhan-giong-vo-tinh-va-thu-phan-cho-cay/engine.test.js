import { describe, expect, it } from 'vitest';
import { PROCEDURES, PROC_IDS, deck, tryStep } from './engine.js';

describe('practical procedures', () => {
  it('gives every step a reason', () => {
    const bad = PROC_IDS.flatMap((id) => PROCEDURES[id].steps.filter((s) => !s.text || !s.why));
    expect(bad).toEqual([]);
  });

  it('deals every step once, never already in order', () => {
    const bad = [];
    for (const id of PROC_IDS) {
      for (let seed = 1; seed <= 20; seed += 1) {
        const d = deck(id, seed);
        const sorted = [...d].sort((a, b) => a - b);
        if (sorted.join() !== PROCEDURES[id].steps.map((_, i) => i).join()) bad.push([id, seed]);
        if (d.every((v, i) => v === i)) bad.push([id, seed, 'in order']);
      }
    }
    expect(bad).toEqual([]);
  });

  it('accepts only the next step', () => {
    expect(tryStep('chiet', 0, 0).ok).toBe(true);
    expect(tryStep('chiet', 1, 3).ok).toBe(false);
    expect(tryStep('chiet', 1, 3).text).toContain('Chưa đến lúc');
    expect(tryStep('chiet', 5, 5).text).toContain('bước cuối');
    expect(tryStep('chiet', 1, 1).text).toContain('mạch rây');
  });
});
