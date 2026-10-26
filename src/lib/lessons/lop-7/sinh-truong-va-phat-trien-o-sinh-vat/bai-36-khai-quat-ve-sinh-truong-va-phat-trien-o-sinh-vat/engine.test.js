import { describe, expect, it } from 'vitest';
import {
  CHANGE_BINS,
  CHANGE_CARDS,
  ORGANISMS,
  ORGANISM_IDS,
  describe as describeAge,
  sizeAt,
  stageIndexAt,
  stemAt,
  stemText,
  trendAt,
} from './engine.js';

describe('life cycles', () => {
  it('have increasing ages and stages starting at age 0', () => {
    for (const id of ORGANISM_IDS) {
      const org = ORGANISMS[id];
      expect(org.stages[0].from).toBe(0);
      for (let i = 1; i < org.stages.length; i++) {
        expect(org.stages[i].from).toBeGreaterThan(org.stages[i - 1].from);
      }
      for (let i = 1; i < org.points.length; i++) {
        expect(org.points[i][0]).toBeGreaterThan(org.points[i - 1][0]);
      }
      expect(org.points[org.points.length - 1][0]).toBe(org.maxAge);
    }
  });

  it('reads sizes off the curve', () => {
    const ech = ORGANISMS.ech;
    expect(sizeAt(ech, 0)).toBe(1.5);
    expect(sizeAt(ech, 20)).toBeCloseTo(12.5);
    expect(sizeAt(ech, 999)).toBe(75);
  });

  it('finds the stage of an age', () => {
    expect(ORGANISMS.ech.stages[stageIndexAt(ORGANISMS.ech, 1)].name).toBe('Trứng đã thụ tinh');
    expect(ORGANISMS.ech.stages[stageIndexAt(ORGANISMS.ech, 15)].name).toBe(
      'Nòng nọc mọc chân sau',
    );
    expect(ORGANISMS.buom.stages[stageIndexAt(ORGANISMS.buom, 40)].name).toBe('Bướm trưởng thành');
  });

  it('shows development without growth in the pupa', () => {
    const buom = ORGANISMS.buom;
    expect(trendAt(buom, 10)).toBe('tang');
    expect(trendAt(buom, 25)).toBe('dung');
    expect(trendAt(buom, 19)).toBe('giam');
    const pupa = describeAge(buom, 25);
    expect(pupa.stage.name).toBe('Nhộng');
    expect(pupa.growth).toContain('Không lớn thêm');
  });
});

describe('growth or development cards', () => {
  it('use unique ids and a known bin, with both bins used', () => {
    expect(new Set(CHANGE_CARDS.map((c) => c.id)).size).toBe(CHANGE_CARDS.length);
    const bins = new Set(CHANGE_BINS.map((b) => b.id));
    for (const c of CHANGE_CARDS) expect(bins.has(c.bin)).toBe(true);
    for (const b of bins) expect(CHANGE_CARDS.filter((c) => c.bin === b).length).toBeGreaterThan(3);
  });
});

describe('stem model', () => {
  it('lengthens with the apical meristem and thickens with the lateral one', () => {
    expect(stemAt('hai', 5, true, true)).toEqual({ height: 3.5, diameter: 17, rings: 5 });
    expect(stemAt('hai', 5, false, true).height).toBe(0.5);
    expect(stemAt('hai', 5, true, false)).toEqual({ height: 3.5, diameter: 2, rings: 0 });
  });

  it('keeps a Một lá mầm stem as thick as it was', () => {
    expect(stemAt('mot', 0, true, true).diameter).toBe(stemAt('mot', 6, true, true).diameter);
    expect(stemAt('mot', 6, true, true).rings).toBe(0);
    expect(stemText('mot', 3, true, true)).toContain('không có mô phân sinh bên');
  });

  it('counts the rings in its feedback', () => {
    expect(stemText('hai', 4, true, true)).toContain('sau 4 năm có 4 vòng');
    expect(stemText('hai', 4, false, true)).toContain('không dài thêm');
  });
});
