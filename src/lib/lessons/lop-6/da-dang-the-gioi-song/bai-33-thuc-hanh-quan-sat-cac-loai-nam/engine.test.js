import { describe, expect, it } from 'vitest';
import { validateDiagram } from '#lib/domain/diagrams.js';
import { BREAD_MOULD, LAG_DAYS, MUSHROOM, VISIBLE, mouldCover, mouldStage } from './engine.js';

describe('fungi diagrams', () => {
  it('are valid hotspot diagrams', () => {
    expect(validateDiagram(MUSHROOM)).toEqual([]);
    expect(validateDiagram(BREAD_MOULD)).toEqual([]);
  });

  it('name the parts the practical asks for', () => {
    expect(MUSHROOM.parts.map((p) => p.name)).toEqual(
      expect.arrayContaining(['Mũ nấm', 'Phiến nấm', 'Cuống nấm', 'Sợi nấm']),
    );
    expect(BREAD_MOULD.parts.map((p) => p.name)).toEqual(
      expect.arrayContaining(['Sợi nấm', 'Túi bào tử', 'Bào tử']),
    );
  });
});

describe('mould growth model', () => {
  it('shows nothing during the lag, then grows on moist bread at room temperature', () => {
    expect(mouldCover('phong', 'am', LAG_DAYS)).toBe(0);
    expect(mouldCover('phong', 'am', 3)).toBe(30);
    expect(mouldCover('phong', 'am', 5)).toBe(65);
    expect(mouldCover('phong', 'am', 10)).toBeLessThanOrEqual(100);
  });

  it('keeps cold or dry bread clean for the whole ten days', () => {
    expect(mouldCover('tu-lanh', 'am', 10)).toBe(0);
    expect(mouldCover('phong', 'kho', 10)).toBe(0);
    expect(mouldCover('tu-lanh', 'kho', 10)).toBe(0);
  });

  it('describes each stage', () => {
    expect(mouldStage('tu-lanh', 'am', 5).text).toContain('lạnh hoặc khô');
    expect(mouldStage('phong', 'am', 1).cover).toBeLessThan(VISIBLE);
    expect(mouldStage('phong', 'am', 3).text).toContain('sợi nấm');
    expect(mouldStage('phong', 'am', 4).text).toContain('túi bào tử');
    expect(mouldStage('phong', 'am', 5).text).toContain('túi bào tử');
  });
});
