import { describe, expect, it } from 'vitest';
import { validateDiagram } from '#lib/domain/diagrams.js';
import {
  BACTERIUM,
  DANGER,
  behaviourAt,
  countAfter,
  countWords,
  dangerTime,
  divisions,
  timeWords,
} from './engine.js';

describe('bacterial growth model', () => {
  it('divides every 20 minutes at body temperature', () => {
    expect(behaviourAt(37)).toEqual({ kind: 'grow', minutes: 20 });
    expect(countAfter(1, 37, 1)).toBe(8);
    expect(countAfter(1, 37, 2)).toBe(64);
    expect(divisions(37, 3)).toBe(9);
  });

  it('grows slower when cool and stops in a fridge', () => {
    expect(behaviourAt(20)).toEqual({ kind: 'grow', minutes: 60 });
    expect(behaviourAt(4)).toEqual({ kind: 'stop' });
    expect(countAfter(10, 4, 8)).toBe(10);
    expect(countAfter(10, 30, 4)).toBeLessThan(countAfter(10, 37, 4));
  });

  it('kills bacteria from 60 °C, faster when boiling', () => {
    expect(behaviourAt(60).kind).toBe('die');
    expect(countAfter(1000, 100, 1)).toBe(0);
    expect(countAfter(1000, 60, 1 / 6)).toBe(500);
  });

  it('reaches the danger level sooner from a dirty start', () => {
    const clean = dangerTime(10, 37, 8);
    const dirty = dangerTime(1000, 37, 8);
    expect(dirty).toBe((10 * 20) / 60);
    expect(clean).toBe((17 * 20) / 60);
    expect(dangerTime(10, 4, 8)).toBeNull();
    expect(countAfter(1000, 37, /** @type {number} */ (dirty))).toBeGreaterThanOrEqual(DANGER);
  });

  it('writes counts and times in Vietnamese', () => {
    expect(countWords(4096)).toBe('4 096');
    expect(countWords(2_500_000)).toBe('2,5 triệu');
    expect(countWords(16_800_000_000)).toBe('16,8 tỉ');
    expect(timeWords(2.5)).toBe('2 giờ 30 phút');
    expect(timeWords(1 / 3)).toBe('20 phút');
  });

  it('has a valid bacterium diagram', () => {
    expect(validateDiagram(BACTERIUM)).toEqual([]);
  });
});
