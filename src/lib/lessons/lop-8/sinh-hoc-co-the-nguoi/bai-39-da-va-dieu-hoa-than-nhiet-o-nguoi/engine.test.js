import { describe, expect, it } from 'vitest';
import { validateDiagram } from '#lib/domain/diagrams.js';
import { EXERCISE_HEAT, SKIN_SECTION, skinResponse } from './engine.js';

describe('skin temperature response', () => {
  it('narrows vessels, raises hair and shivers in the cold', () => {
    const r = skinResponse(5);
    expect(r).toMatchObject({ vessel: 'co', sweat: 0, hairErect: true, shiver: true });
    expect(skinResponse(15)).toMatchObject({ vessel: 'co', hairErect: true, shiver: false });
  });

  it('keeps the skin at rest in mild weather', () => {
    expect(skinResponse(25)).toMatchObject({ vessel: 'binh-thuong', sweat: 0, hairErect: false });
  });

  it('widens vessels and sweats in the heat', () => {
    expect(skinResponse(30)).toMatchObject({ vessel: 'dan', sweat: 1 });
    expect(skinResponse(38)).toMatchObject({ vessel: 'dan', sweat: 2 });
    expect(skinResponse(38).vesselWidth).toBeGreaterThan(skinResponse(30).vesselWidth);
  });

  it('adds the heat of exercise', () => {
    expect(EXERCISE_HEAT).toBeGreaterThan(0);
    expect(skinResponse(25, true).band).toBe('am');
    expect(skinResponse(5, true).band).toBe('lanh');
  });
});

describe('skin section', () => {
  it('is a valid hotspot diagram', () => {
    expect(validateDiagram(SKIN_SECTION)).toEqual([]);
  });
});
