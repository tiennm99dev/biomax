import { describe, expect, it } from 'vitest';
import {
  GTC_PER_PPM,
  PROCESSES,
  START_PPM,
  YEARS,
  fluxes,
  simulate,
  sinkOf,
  verdict,
} from './engine.js';

describe('carbon cycle model', () => {
  it('takes up a share of the excess carbon', () => {
    expect(sinkOf(280)).toBe(0);
    expect(sinkOf(420)).toBeCloseTo(0.018 * 140 * GTC_PER_PPM, 9);
  });

  it('raises CO2 at today’s burning and lowers it when burning stops', () => {
    const today = simulate(10, 'giu-nguyen');
    expect(today).toHaveLength(YEARS + 1);
    expect(today[0]).toBe(START_PPM);
    expect(today[1] - today[0]).toBeCloseTo((10 - sinkOf(START_PPM)) / GTC_PER_PPM, 9);
    expect(today[YEARS]).toBeGreaterThan(500);
    expect(today[YEARS]).toBeLessThan(541);
    const stopped = simulate(0, 'giu-nguyen');
    expect(stopped[YEARS]).toBeLessThan(START_PPM);
    expect(stopped[YEARS]).toBeGreaterThan(280);
  });

  it('orders the forest choices', () => {
    const cut = simulate(10, 'pha-rung')[YEARS];
    const keep = simulate(10, 'giu-nguyen')[YEARS];
    const plant = simulate(10, 'trong-rung')[YEARS];
    expect(cut).toBeGreaterThan(keep);
    expect(keep).toBeGreaterThan(plant);
  });

  it('reports the yearly net change and the trend', () => {
    expect(fluxes(10, 'giu-nguyen', START_PPM).net).toBeCloseTo(10 - sinkOf(START_PPM), 9);
    expect(verdict(10, 'giu-nguyen', simulate(10, 'giu-nguyen')).tone).toBe('warn');
    expect(verdict(0, 'trong-rung', simulate(0, 'trong-rung')).tone).toBe('ok');
  });

  it('names every process once', () => {
    expect(new Set(PROCESSES.map((p) => p.id)).size).toBe(PROCESSES.length);
  });
});
