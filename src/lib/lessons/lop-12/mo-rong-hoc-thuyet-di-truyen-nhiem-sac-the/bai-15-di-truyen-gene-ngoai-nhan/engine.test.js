import { describe, expect, it } from 'vitest';
import { eggPlastids, offspring, tally, verdictOf } from './engine.js';

describe('extranuclear inheritance', () => {
  it('copies the mother when she is green or white, whatever the father', () => {
    expect(new Set(offspring('ngoai-nhan', 'xanh', 'trang', 1))).toEqual(new Set(['xanh']));
    expect(new Set(offspring('ngoai-nhan', 'trang', 'xanh', 1))).toEqual(new Set(['trang']));
    expect(new Set(offspring('ngoai-nhan', 'trang', 'kham', 1))).toEqual(new Set(['trang']));
  });

  it('gives green, white and mosaic seedlings from a mosaic mother', () => {
    const missing = [15, 16, 18].flatMap((seed) => {
      const kinds = new Set(offspring('ngoai-nhan', 'kham', 'xanh', seed));
      return kinds.size === 3 ? [] : [seed];
    });
    expect(missing).toEqual([]);
  });

  it('ignores the father under a mosaic mother', () => {
    expect(offspring('ngoai-nhan', 'kham', 'xanh', 5)).toEqual(
      offspring('ngoai-nhan', 'kham', 'trang', 5),
    );
  });

  it('draws the egg plastids of each branch', () => {
    expect(eggPlastids('xanh').every((p) => p === 'g')).toBe(true);
    expect(eggPlastids('trang').every((p) => p === 'w')).toBe(true);
    expect(new Set(eggPlastids('kham'))).toEqual(new Set(['g', 'w']));
  });
});

describe('nuclear gene for comparison', () => {
  it('gives the same green F1 both ways', () => {
    expect(new Set(offspring('trong-nhan', 'xanh', 'trang', 1))).toEqual(new Set(['xanh']));
    expect(new Set(offspring('trong-nhan', 'trang', 'xanh', 1))).toEqual(new Set(['xanh']));
  });
});

describe('verdicts and tallies', () => {
  it('names what the reciprocal pair shows', () => {
    expect(verdictOf('ngoai-nhan', 'xanh', 'trang')).toBe('me');
    expect(verdictOf('trong-nhan', 'xanh', 'trang')).toBe('giong-nhau');
    expect(verdictOf('ngoai-nhan', 'xanh', 'xanh')).toBeNull();
  });

  it('counts each colour and drops empty ones', () => {
    expect(tally(['xanh', 'kham', 'xanh'])).toEqual([
      { id: 'xanh', short: 'xanh', n: 2 },
      { id: 'kham', short: 'khảm', n: 1 },
    ]);
  });
});
