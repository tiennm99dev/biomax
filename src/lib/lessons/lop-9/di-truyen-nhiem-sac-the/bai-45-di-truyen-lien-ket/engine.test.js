import { describe, expect, it } from 'vitest';
import { CROSSES, crossResult, gametesOf, genotypeText, predictionFeedback } from './engine.js';

const [testCross, f1Cross] = CROSSES;

describe('linked and independent genes', () => {
  it('gives F1 four gametes when independent and two when linked', () => {
    expect(gametesOf(['BV', 'bv'], 'doc-lap')).toEqual([
      { gamete: 'BV', share: 0.25 },
      { gamete: 'Bv', share: 0.25 },
      { gamete: 'bV', share: 0.25 },
      { gamete: 'bv', share: 0.25 },
    ]);
    expect(gametesOf(['BV', 'bv'], 'lien-ket')).toEqual([
      { gamete: 'BV', share: 0.5 },
      { gamete: 'bv', share: 0.5 },
    ]);
    expect(gametesOf(['bv', 'bv'], 'lien-ket')).toEqual([{ gamete: 'bv', share: 1 }]);
  });

  it("reproduces Morgan's test cross", () => {
    expect(crossResult(testCross, 'doc-lap').ratio).toBe('1 : 1 : 1 : 1');
    const linked = crossResult(testCross, 'lien-ket');
    expect(linked.ratio).toBe('1 : 1');
    expect(linked.phenotypes.map((p) => p.name)).toEqual([
      'thân xám, cánh dài',
      'thân đen, cánh cụt',
    ]);
  });

  it('crosses F1 with F1', () => {
    expect(crossResult(f1Cross, 'doc-lap').ratio).toBe('9 : 3 : 3 : 1');
    expect(crossResult(f1Cross, 'lien-ket').ratio).toBe('3 : 1');
    expect(crossResult(f1Cross, 'doc-lap').cells.flat()).toHaveLength(16);
  });

  it('writes genotypes', () => {
    expect(genotypeText('bv', 'BV', 'doc-lap')).toBe('BbVv');
    expect(genotypeText('bv', 'BV', 'lien-ket')).toBe('BV/bv');
    expect(genotypeText('Bv', 'bV', 'doc-lap')).toBe('BbVv');
  });

  it('judges predictions', () => {
    expect(predictionFeedback(testCross, '1 : 1').ok).toBe(true);
    expect(predictionFeedback(testCross, '1 : 1 : 1 : 1').text).toContain('phân li độc lập');
    expect(predictionFeedback(f1Cross, '3 : 1').ok).toBe(true);
    expect(predictionFeedback(f1Cross, '9 : 3 : 3 : 1').ok).toBe(false);
  });
});
