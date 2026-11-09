import { describe, expect, it } from 'vitest';
import {
  PATHS,
  ROUTE_BINS,
  ROUTE_CARDS,
  atpPerGlucose,
  glucoseFor,
  pathAtOxygen,
  stageNote,
  totals,
} from './engine.js';

describe('respiration pathways', () => {
  it('gives the book counts for aerobic respiration', () => {
    expect(totals('aerobic', 1)).toEqual({ atp: 2, nadh: 2, fadh2: 0, co2: 0 });
    expect(totals('aerobic', 2)).toEqual({ atp: 4, nadh: 10, fadh2: 2, co2: 6 });
    expect(totals('aerobic', 3)).toEqual({ atp: 32, nadh: 0, fadh2: 0, co2: 6 });
  });

  it('gives only the 2 ATP of glycolysis to fermentation and uses up its NADH', () => {
    expect(atpPerGlucose('ethanol')).toBe(2);
    expect(atpPerGlucose('lactate')).toBe(2);
    expect(totals('ethanol', 2).co2).toBe(2);
    expect(totals('lactate', 2)).toEqual({ atp: 2, nadh: 0, fadh2: 0, co2: 0 });
  });

  it('starts every path with glycolysis in the cytoplasm', () => {
    const bad = Object.values(PATHS).filter((p) => p[0].id !== 'duong-phan');
    expect(bad).toEqual([]);
  });

  it('counts the glucose a path needs', () => {
    expect(glucoseFor('aerobic', 64)).toBe(2);
    expect(glucoseFor('ethanol', 64)).toBe(32);
  });

  it('switches to fermentation below 5 % oxygen', () => {
    expect(pathAtOxygen(21)).toBe('hieu-khi');
    expect(pathAtOxygen(5)).toBe('hieu-khi');
    expect(pathAtOxygen(4)).toBe('len-men');
  });

  it('ends with a success note for aerobic and a warning for fermentation', () => {
    expect(stageNote('aerobic', 0).tone).toBe('info');
    expect(stageNote('aerobic', 3).tone).toBe('ok');
    expect(stageNote('lactate', 2).tone).toBe('warn');
  });

  it('puts every card in an existing bin', () => {
    const ids = ROUTE_BINS.map((b) => b.id);
    expect(ROUTE_CARDS.filter((c) => !ids.includes(c.bin))).toEqual([]);
  });
});
