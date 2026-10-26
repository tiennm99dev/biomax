import { describe, expect, it } from 'vitest';
import { ACTION_BINS, ACTION_CARDS, BIOMES, biomeById, predictionFeedback } from './engine.js';

describe('biome comparison', () => {
  it('puts the rainforest far above both harsh environments', () => {
    const [rain, desert, cold] = BIOMES.map((b) => b.species);
    expect(rain).toBeGreaterThan(2 * Math.max(desert, cold));
    expect(biomeById('doi-lanh').species).toBe(cold);
  });

  it('accepts the illustrative counts as a prediction', () => {
    expect(predictionFeedback(BIOMES.map((b) => b.species)).ok).toBe(true);
  });

  it('rejects predictions where the rainforest is not the richest', () => {
    const equal = predictionFeedback([100, 100, 100]);
    expect(equal.ok).toBe(false);
    expect(equal.text).toContain('nóng ẩm');
    expect(predictionFeedback([100, 200, 50]).ok).toBe(false);
  });

  it('asks for a bigger gap when the rainforest leads only slightly', () => {
    const close = predictionFeedback([150, 100, 90]);
    expect(close.ok).toBe(false);
    expect(close.text).toContain('Đúng hướng');
    expect(predictionFeedback([200, 100, 90]).ok).toBe(true);
  });
});

describe('protection cards', () => {
  it('splits the cards evenly between the two bins', () => {
    for (const b of ACTION_BINS)
      expect(ACTION_CARDS.filter((c) => c.bin === b.id)).toHaveLength(ACTION_CARDS.length / 2);
  });
});
