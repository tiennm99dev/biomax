import { describe, expect, it } from 'vitest';
import {
  AUTOTROPH_BINS,
  AUTOTROPH_CARDS,
  FERMENTATION,
  PHOTOSYNTHESIS,
  RESPIRATION,
  atpText,
  atpUpTo,
  breakdownPath,
  chainAtp,
  describeBreakdown,
  describePhotosynthesis,
} from './engine.js';

describe('counting ATP for one glucose', () => {
  it('turns 10 NADH and 2 FADH2 into 32 to 34 ATP at the electron transport chain', () => {
    expect(chainAtp()).toEqual([32, 34]);
  });

  it('adds up to about 36 to 38 ATP through respiration', () => {
    expect(atpUpTo(RESPIRATION, 0)).toEqual([2, 2]);
    expect(atpUpTo(RESPIRATION, 2)).toEqual([4, 4]);
    expect(atpText(atpUpTo(RESPIRATION, 3))).toBe('36–38');
  });

  it('stops at 2 ATP in both kinds of fermentation', () => {
    for (const path of Object.values(FERMENTATION)) {
      expect(atpText(atpUpTo(path, path.length - 1))).toBe('2');
    }
  });

  it('uses in the dark phase all the ATP the light phase makes', () => {
    const [light, dark] = PHOTOSYNTHESIS;
    expect(dark.usesAtp).toBe(light.atp[0]);
  });
});

describe('choosing the path', () => {
  it('follows respiration with oxygen and fermentation without it', () => {
    expect(breakdownPath(true, 'ruou')).toBe(RESPIRATION);
    expect(breakdownPath(false, 'lactic')).toBe(FERMENTATION.lactic);
  });

  it('warns when oxygen or light is off', () => {
    expect(describeBreakdown(false, 0, FERMENTATION.ruou).tone).toBe('warn');
    expect(describeBreakdown(true, 3, RESPIRATION).tone).toBe('ok');
    expect(describePhotosynthesis(false, 0).tone).toBe('warn');
    expect(describePhotosynthesis(true, 1).tone).toBe('ok');
  });
});

describe('sorting the ways of making organic matter', () => {
  it('has every card in a bin that exists, and at least two in each', () => {
    for (const bin of AUTOTROPH_BINS) {
      expect(AUTOTROPH_CARDS.filter((c) => c.bin === bin.id).length).toBeGreaterThanOrEqual(2);
    }
    const ids = new Set(AUTOTROPH_BINS.map((b) => b.id));
    expect(AUTOTROPH_CARDS.every((c) => ids.has(c.bin))).toBe(true);
  });
});
