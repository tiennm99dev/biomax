import { describe, expect, it } from 'vitest';
import {
  ORGANELLES,
  ROUTE,
  STATIONS,
  isOnlyIn,
  partsOf,
  placesIn,
  pressStation,
  quizOrder,
} from './engine.js';

describe('cell model', () => {
  it('keeps every part inside its cell and gives every part a text', () => {
    const outside = ORGANELLES.flatMap((o) =>
      [
        ...o.animal.filter((p) => Math.hypot(p.x, p.y, p.z) > 125),
        ...o.plant.filter((p) => Math.max(Math.abs(p.x), Math.abs(p.y), Math.abs(p.z)) > 105),
      ].map(() => o.id),
    );
    expect(outside).toEqual([]);
    expect(ORGANELLES.filter((o) => !o.info || !o.clue || !o.membrane)).toEqual([]);
    expect(new Set(ORGANELLES.map((o) => o.id)).size).toBe(ORGANELLES.length);
  });

  it('shows the differences the book lists between animal and plant cells', () => {
    const only = (/** @type {'dong-vat' | 'thuc-vat'} */ type) =>
      ORGANELLES.filter((o) => isOnlyIn(o, type)).map((o) => o.id);
    expect(only('dong-vat').sort()).toEqual(['lysosome', 'trung-the']);
    expect(only('thuc-vat').sort()).toEqual(['luc-lap', 'thanh-te-bao']);
    const vacuole = ORGANELLES.find((o) => o.id === 'khong-bao');
    expect(vacuole && placesIn(vacuole, 'thuc-vat').length).toBe(1);
  });

  it('asks about every part of a cell once in a seeded order', () => {
    const ids = partsOf('thuc-vat').map((o) => o.id);
    const order = quizOrder('thuc-vat', 3);
    expect([...order].sort()).toEqual([...ids].sort());
    expect(quizOrder('thuc-vat', 3)).toEqual(order);
  });
});

describe('protein game', () => {
  it('walks the secretory route to the end', () => {
    let step = 0;
    for (const id of ROUTE) {
      const r = pressStation(step, id);
      expect(r.ok, id).toBe(true);
      step = r.step;
    }
    expect(step).toBe(ROUTE.length);
    expect(pressStation(ROUTE.length - 1, 'mang').done).toBe(true);
  });

  it('keeps the place and explains a wrong press', () => {
    const wrong = pressStation(0, 'golgi');
    expect(wrong.ok).toBe(false);
    expect(wrong.step).toBe(0);
    expect(wrong.text.length).toBeGreaterThan(0);
    expect(pressStation(3, 'ti-the').ok).toBe(false);
    expect(pressStation(4, 'golgi').ok).toBe(true);
  });

  it('has a wrong-press text for every station and a story for every step', () => {
    expect(STATIONS.filter((s) => !s.wrong)).toEqual([]);
    expect(ROUTE.filter((id) => !STATIONS.find((s) => s.id === id)?.done)).toEqual([]);
  });
});
