import { describe, expect, it } from 'vitest';
import {
  BOOK_SETUP,
  BOOK_TEST,
  FRONT_MAX,
  PIGMENTS,
  RUN_MINUTES,
  bands,
  describeRun,
  describeTest,
  frontAt,
  leafColor,
  rfOf,
  starchIn,
} from './engine.js';

describe('paper chromatogram', () => {
  it('reaches the full height only at the end of the run', () => {
    expect(frontAt(0)).toBe(0);
    expect(frontAt(RUN_MINUTES)).toBe(FRONT_MAX);
    expect(frontAt(RUN_MINUTES + 5)).toBe(FRONT_MAX);
  });

  it('orders the bands as the book does', () => {
    const run = bands(BOOK_SETUP, RUN_MINUTES);
    expect(run.map((b) => b.id)).toEqual(['b', 'a', 'x', 'c']);
    const distances = run.map((b) => b.distance);
    expect(distances).toEqual([...distances].sort((x, y) => x - y));
    expect(distances[3]).toBeLessThan(FRONT_MAX);
  });

  it('gives each band its Rf at any time of the run', () => {
    const half = bands(BOOK_SETUP, RUN_MINUTES / 2);
    const bad = half.filter(
      (b, i) => Math.abs(rfOf(b.distance, frontAt(RUN_MINUTES / 2)) - PIGMENTS[i].rf) > 1e-9,
    );
    expect(bad).toEqual([]);
    expect(rfOf(10, 0)).toBe(0);
  });

  it('leaves pigments at the start line in water', () => {
    const run = bands({ ...BOOK_SETUP, solvent: 'nuoc' }, RUN_MINUTES);
    expect(run.every((b) => b.distance === 0 && b.strength > 0)).toBe(true);
    expect(describeRun({ ...BOOK_SETUP, solvent: 'nuoc' }, RUN_MINUTES).tone).toBe('warn');
  });

  it('washes the pigments away when the start line dips in', () => {
    const run = bands({ ...BOOK_SETUP, touching: true }, 1);
    expect(run.every((b) => b.strength === 0)).toBe(true);
  });

  it('fades the bands with fewer spots and the chlorophyll in a yellow leaf', () => {
    const full = bands(BOOK_SETUP, RUN_MINUTES);
    const thin = bands({ ...BOOK_SETUP, spots: 2 }, RUN_MINUTES);
    expect(thin[1].strength).toBeLessThan(full[1].strength);
    const yellow = bands({ ...BOOK_SETUP, leaf: 'vang' }, RUN_MINUTES);
    expect(yellow[1].strength).toBeLessThan(yellow[2].strength);
    expect(describeRun(BOOK_SETUP, RUN_MINUTES).tone).toBe('ok');
  });
});

describe('starch test', () => {
  it('gives the book result when every step is done', () => {
    expect(starchIn(BOOK_TEST)).toEqual({ open: true, covered: false });
    expect(describeTest(BOOK_TEST).tone).toBe('ok');
  });

  it('shows starch everywhere without the dark treatment', () => {
    expect(starchIn({ ...BOOK_TEST, dark: false })).toEqual({ open: true, covered: true });
    expect(describeTest({ ...BOOK_TEST, dark: false }).tone).toBe('warn');
  });

  it('shows no starch without sun', () => {
    expect(starchIn({ ...BOOK_TEST, sun: false })).toEqual({ open: false, covered: false });
  });

  it('shows starch on the whole leaf when nothing is covered', () => {
    expect(starchIn({ ...BOOK_TEST, cover: false })).toEqual({ open: true, covered: true });
  });

  it('hides the iodine colour until the chlorophyll is bleached', () => {
    expect(leafColor(true, true)).not.toBe(leafColor(false, true));
    expect(describeTest({ ...BOOK_TEST, alcohol: false }).tone).toBe('warn');
  });
});
