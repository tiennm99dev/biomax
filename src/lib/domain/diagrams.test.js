import { describe, expect, it } from 'vitest';
import {
  DIAGRAMS,
  isName,
  nameChoices,
  normalizeName,
  partAt,
  seeded,
  shuffled,
  validateDiagram,
} from './diagrams.js';

describe('built-in diagrams', () => {
  for (const d of Object.values(DIAGRAMS)) {
    it(`${d.id} has separate hotspots inside its view box`, () => {
      expect(d.parts.length).toBeGreaterThanOrEqual(4);
      expect(validateDiagram(d)).toEqual([]);
    });

    it(`${d.id} names and explains every part`, () => {
      for (const p of d.parts) {
        expect(p.name.trim(), p.id).not.toBe('');
        expect(p.info.trim(), p.id).not.toBe('');
        expect(p.id).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      }
      const names = d.parts.map((p) => normalizeName(p.name));
      expect(new Set(names).size).toBe(names.length);
    });
  }

  it('reports overlapping and outside hotspots', () => {
    const d = {
      id: 'x',
      title: 'x',
      width: 100,
      height: 100,
      shapes: [],
      parts: [
        { id: 'a', name: 'A', info: 'a', x: 10, y: 10 },
        { id: 'b', name: 'B', info: 'b', x: 20, y: 10 },
        { id: 'c', name: 'C', info: 'c', x: 120, y: 50 },
      ],
    };
    expect(validateDiagram(d)).toEqual(['c is outside', 'a and b overlap']);
  });

  it('draws the water molecule with its textbook bond angle', () => {
    const w = DIAGRAMS['phan-tu-nuoc'];
    const circles = w.shapes.filter((s) => s.kind === 'circle');
    const [o, h1, h2] = [circles[0], circles[2], circles[3]];
    if (o.kind !== 'circle' || h1.kind !== 'circle' || h2.kind !== 'circle') throw new Error();
    const angle = (/** @type {{ cx: number, cy: number }} */ h) =>
      Math.atan2(h.cy - o.cy, h.cx - o.cx);
    const deg = (Math.abs(angle(h1) - angle(h2)) * 180) / Math.PI;
    expect(deg).toBeGreaterThan(102);
    expect(deg).toBeLessThan(107);
  });
});

describe('hit testing', () => {
  const cell = DIAGRAMS['te-bao-dong-vat'];

  it('finds the nearest hotspot within the radius', () => {
    const mito = cell.parts.find((p) => p.id === 'ti-the');
    if (!mito) throw new Error('no ti-the');
    expect(partAt(cell, mito.x + 5, mito.y - 5)?.id).toBe('ti-the');
    expect(partAt(cell, 5, 295)).toBeNull();
  });
});

describe('names', () => {
  const cell = DIAGRAMS['te-bao-dong-vat'];
  const golgi = cell.parts.find((p) => p.id === 'bo-may-golgi');
  if (!golgi) throw new Error('no golgi');

  it('ignores case, diacritics, dashes and extra spaces', () => {
    expect(normalizeName('  Bộ  máy Golgi. ')).toBe('bo may golgi');
    expect(normalizeName('Van nhĩ – thất')).toBe('van nhi that');
    expect(normalizeName('Đầu')).toBe('dau');
  });

  it('accepts the name and its other spellings', () => {
    expect(isName(golgi, 'bo may golgi')).toBe(true);
    expect(isName(golgi, 'Golgi')).toBe(true);
    expect(isName(golgi, 'ti thể')).toBe(false);
  });

  it('offers the right name among distinct choices', () => {
    const choices = nameChoices(cell, 'bo-may-golgi', 4, 7);
    expect(choices).toHaveLength(4);
    expect(choices).toContain('Bộ máy Golgi');
    expect(new Set(choices).size).toBe(4);
    expect(nameChoices(cell, 'bo-may-golgi', 4, 7)).toEqual(choices);
    expect(nameChoices(cell, 'missing')).toEqual([]);
  });
});

describe('seeded order', () => {
  it('repeats for a seed and keeps every item', () => {
    const items = [1, 2, 3, 4, 5, 6];
    expect(shuffled(items, 3)).toEqual(shuffled(items, 3));
    expect([...shuffled(items, 3)].sort()).toEqual(items);
    const r = seeded(1);
    for (let i = 0; i < 100; i++) {
      const v = r();
      expect(v).toBeGreaterThanOrEqual(0);
      expect(v).toBeLessThan(1);
    }
  });
});
