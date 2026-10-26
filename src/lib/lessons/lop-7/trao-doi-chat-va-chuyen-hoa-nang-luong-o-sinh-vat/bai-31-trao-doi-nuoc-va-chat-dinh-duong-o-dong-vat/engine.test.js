import { describe, expect, it } from 'vitest';
import { MEAL, STAGES, TASKS, checkTask, egested, total, waterNeed } from './engine.js';

describe('digestive tract model', () => {
  it('conserves every part of the meal at each stage', () => {
    STAGES.forEach((s, i) => {
      expect(total(s.tract) + total(s.blood) + egested(i)).toBe(total(MEAL));
    });
  });

  it('absorbs nutrients only from the small intestine on', () => {
    const i = STAGES.findIndex((s) => s.id === 'ruot-non');
    STAGES.slice(0, i).forEach((s) => expect(s.blood).toEqual([]));
    expect(STAGES[i].blood.map((x) => x.id)).toEqual(
      expect.arrayContaining(['glucose', 'amino-acid', 'glycerol']),
    );
    expect(STAGES[i].tract.every((x) => x.id === 'chat-xo' || x.id === 'nuoc')).toBe(true);
  });

  it('takes back water in the large intestine and empties at the anus', () => {
    const water = (/** @type {number} */ i) =>
      STAGES[i].blood.find((x) => x.id === 'nuoc')?.amount ?? 0;
    const gia = STAGES.findIndex((s) => s.id === 'ruot-gia');
    expect(water(gia)).toBeGreaterThan(water(gia - 1));
    expect(STAGES.at(-1)?.tract).toEqual([]);
    expect(egested(STAGES.length - 1)).toBe(3);
  });

  it('checks the organ picked for each task', () => {
    TASKS.forEach((t, i) => {
      expect(checkTask(i, t.a).ok).toBe(true);
      const wrong = STAGES.find((s) => s.id !== t.a);
      expect(checkTask(i, wrong?.id ?? '').ok).toBe(false);
    });
  });
});

describe('waterNeed', () => {
  it('is 40 mL per kg of body mass', () => {
    expect(waterNeed(45)).toBe(1800);
    expect(waterNeed(0)).toBe(0);
  });
});
