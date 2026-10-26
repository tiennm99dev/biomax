import { describe, expect, it } from 'vitest';
import { MAX_ROOT_BEND, MAX_SHOOT_BEND } from '../_shared/tropism.js';
import {
  MAX_SPRAWL,
  coilPoints,
  contactOutcome,
  fallenStem,
  lightOutcome,
  waterOutcome,
} from './engine.js';

describe('phototropism practical', () => {
  it('bends the stem towards a side hole only', () => {
    expect(lightOutcome('ben', 5).bend).toBe(MAX_SHOOT_BEND);
    expect(lightOutcome('ben', 5).text).toContain('hướng sáng');
    expect(lightOutcome('nap', 5).bend).toBe(0);
    expect(lightOutcome('xoay', 5).bend).toBe(0);
    expect(lightOutcome('ben', 0).bend).toBe(0);
    expect(lightOutcome('ben', 2).text).toContain('bắt đầu cong');
  });
});

describe('hydrotropism practical', () => {
  it('bends only the roots of the test pot towards the water', () => {
    const r = waterOutcome(5);
    expect(r.test).toBe(MAX_ROOT_BEND);
    expect(r.control).toBe(0);
    expect(r.text).toContain('hướng nước');
    expect(waterOutcome(1).text).toContain('ít nhất 3 ngày');
  });
});

describe('thigmotropism practical', () => {
  it('winds the tendril round a stake and lets the stem fall without one', () => {
    const withStake = contactOutcome(true, 5);
    expect(withStake.turns).toBe(3);
    expect(withStake.sprawl).toBe(0);
    expect(withStake.text).toContain('hướng tiếp xúc');
    const without = contactOutcome(false, 5);
    expect(without.turns).toBe(0);
    expect(without.sprawl).toBe(MAX_SPRAWL);
    expect(without.text).toContain('bò lan');
    expect(contactOutcome(false, 0).sprawl).toBe(0);
    expect(contactOutcome(false, 1).sprawl).toBeGreaterThan(0);
    expect(contactOutcome(false, 1).text).toContain('bắt đầu ngả');
  });

  it('lays an unsupported stem down close to the ground', () => {
    const upright = fallenStem(110, 170, 100, 0);
    expect(upright.tip.x).toBeCloseTo(110);
    expect(upright.tip.y).toBeCloseTo(70);
    const lying = fallenStem(110, 170, 100, MAX_SPRAWL);
    expect(170 - lying.tip.y).toBeLessThan(10);
    expect(lying.tip.x).toBeGreaterThan(200);
  });

  it('draws a coil from bottom to top', () => {
    expect(coilPoints(10, 0, 100, 0)).toBe('');
    const pts = coilPoints(10, 0, 100, 2).split(' ');
    expect(pts[0]).toBe('10,100');
    expect(pts.at(-1)?.endsWith(',0')).toBe(true);
  });
});
