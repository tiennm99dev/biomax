import { describe, expect, it } from 'vitest';
import { BIOMES, P_MAX, P_MIN, T_MAX, T_MIN, biomeAt } from './engine.js';

describe('biome climate diagram', () => {
  it('covers every point of the diagram', () => {
    for (let t = T_MIN; t <= T_MAX; t++)
      for (let p = P_MIN; p <= P_MAX; p += 5) expect(() => biomeAt(t, p)).not.toThrow();
  });

  it('places each sample climate in its own biome', () => {
    for (const b of BIOMES) expect(biomeAt(b.sample.t, b.sample.p).id).toBe(b.id);
  });

  it('classifies typical places', () => {
    // Hanoi: about 24 °C and 170 cm of rain a year.
    expect(biomeAt(24, 170).id).toBe('rung-mua');
    expect(biomeAt(22, 3).id).toBe('hoang-mac');
    expect(biomeAt(-12, 20).id).toBe('dong-reu');
    expect(biomeAt(30, 400).id).toBe('rung-mua');
    expect(biomeAt(25, 60).id).toBe('savan');
  });
});
