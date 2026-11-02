import { describe, expect, it } from 'vitest';
import {
  BLUE,
  RED,
  armsOf,
  cellOutline,
  distinctTypes,
  frameAt,
  gametesOf,
  meiosisFrames,
  mitosisFrames,
  perCell,
} from './frames.js';

const OPTIONS = [
  { crossover: false, flip: false },
  { crossover: true, flip: false },
  { crossover: false, flip: true },
  { crossover: true, flip: true },
];

describe('the stages of mitosis', () => {
  it('moves through the phases in book order, in plant and animal cells', () => {
    for (const plant of [false, true]) {
      expect(mitosisFrames(plant).map((f) => f.id)).toEqual([
        'trung-gian',
        'dau',
        'giua',
        'sau',
        'cuoi',
        'te-bao-con',
      ]);
    }
  });

  it('keeps the chromosome count of the mother cell in each daughter cell', () => {
    const frames = mitosisFrames(false);
    expect(frames[0].counts).toEqual({ cells: 1, nst: 4, state: 'kép' });
    expect(frames[3].counts).toEqual({ cells: 1, nst: 8, state: 'đơn' });
    expect(frames[5].counts).toEqual({ cells: 2, nst: 4, state: 'đơn' });
  });

  it('gives only plant cells a wall and a plate, only animal cells centrosomes', () => {
    const plant = mitosisFrames(true);
    const animal = mitosisFrames(false);
    expect(plant.every((f) => f.cells.every((c) => c.wall))).toBe(true);
    expect(plant.some((f) => f.plate > 0)).toBe(true);
    expect(animal.every((f) => f.plate === 0 && f.star)).toBe(true);
    expect(plant.some((f) => f.star)).toBe(false);
  });
});

describe('the stages of meiosis', () => {
  it('halves the number of chromosomes per cell by the end of meiosis I', () => {
    const frames = meiosisFrames(OPTIONS[0]);
    const end = frames.find((f) => f.id === 'cuoi-1');
    expect(end?.counts).toEqual({ cells: 2, nst: 2, state: 'kép' });
    expect(frames.at(-1)?.counts).toEqual({ cells: 4, nst: 2, state: 'đơn' });
  });

  it('only recolours chromatids once crossing over has happened', () => {
    const frames = meiosisFrames({ crossover: true, flip: false });
    /** @param {import('./frames.js').Frame} f */
    const mixed = (f) => f.chromatids.filter((c) => c.colors[0] !== c.colors[1]).length;
    expect(frames.map(mixed)).toEqual([0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2]);
    expect(meiosisFrames(OPTIONS[0]).every((f) => mixed(f) === 0)).toBe(true);
  });

  it('sends the homologues to opposite poles at metaphase I, the flip swaps the short pair', () => {
    /** @param {boolean} flip */
    const giua = (flip) =>
      meiosisFrames({ crossover: false, flip }).find((f) => f.id === 'giua-1')?.chromatids ?? [];
    /** @param {boolean} flip */
    const onLeft = (flip) =>
      giua(flip)
        .filter((c) => c.x < 180)
        .map((c) => c.id[0] + c.id[1]);
    expect(new Set(onLeft(false))).toEqual(new Set(['a0', 'b0']));
    expect(new Set(onLeft(true))).toEqual(new Set(['a0', 'b1']));
  });
});

describe('every stage', () => {
  it('draws the same eight chromatids in the same order, so stages can slide', () => {
    const lists = [mitosisFrames(false), mitosisFrames(true), ...OPTIONS.map(meiosisFrames)];
    const bad = [];
    for (const frames of lists) {
      const ids = frames[0].chromatids.map((c) => c.id);
      if (ids.length !== 8) bad.push('count');
      for (const f of frames) {
        if (f.chromatids.map((c) => c.id).join() !== ids.join()) bad.push(f.id);
      }
    }
    expect(bad).toEqual([]);
  });

  it('counts two chromatids per double chromosome and none for single ones', () => {
    expect(perCell({ cells: 1, nst: 4, state: 'kép' })).toEqual({ chromatids: 8, centromeres: 4 });
    expect(perCell({ cells: 1, nst: 8, state: 'đơn' })).toEqual({ chromatids: 0, centromeres: 8 });
  });
});

describe('gametes', () => {
  it('gives two types from one cell without crossing over, four with it', () => {
    for (const flip of [false, true]) {
      expect(distinctTypes(gametesOf({ crossover: false, flip }))).toBe(2);
      expect(distinctTypes(gametesOf({ crossover: true, flip }))).toBe(4);
    }
  });

  it('pairs the blue long chromosome with the blue or the red short one by the flip', () => {
    expect(gametesOf({ crossover: false, flip: false })[0]).toMatchObject({
      long: [BLUE, BLUE],
      short: BLUE,
    });
    expect(gametesOf({ crossover: false, flip: true })[0]).toMatchObject({
      long: [BLUE, BLUE],
      short: RED,
    });
  });
});

describe('drawing helpers', () => {
  it('returns a stage itself at a whole position and clamps outside the range', () => {
    const frames = mitosisFrames(false);
    expect(frameAt(frames, 2)).toBe(frames[2]);
    expect(frameAt(frames, -1)).toBe(frames[0]);
    expect(frameAt(frames, 99)).toBe(frames[5]);
  });

  it('slides a chromatid halfway between two stages', () => {
    const frames = mitosisFrames(false);
    const mid = frameAt(frames, 2.5).chromatids[0];
    const a = frames[2].chromatids[0];
    const b = frames[3].chromatids[0];
    expect(mid.x).toBeCloseTo((a.x + b.x) / 2);
    expect(frameAt(frames, 2.6).id).toBe('sau');
  });

  it('places sister chromatids on opposite sides of a vertical chromosome', () => {
    const c = mitosisFrames(false)[2].chromatids;
    expect(armsOf(c[0]).mid.x).toBeLessThan(160);
    expect(armsOf(c[1]).mid.x).toBeGreaterThan(160);
  });

  it('narrows the outline at the middle as the waist deepens', () => {
    /** @param {number} pinch */
    const ys = (pinch) =>
      cellOutline({ cx: 0, cy: 0, rx: 100, ry: 50, pinch, wall: false })
        .replace(/[MZ]/g, '')
        .split('L')
        .map((p) => Number(p.trim().split(' ')[1]));
    expect(Math.max(...ys(0))).toBeCloseTo(50, 0);
    // Index 12 of 48 lies a quarter of the way round: the top of the middle.
    expect(ys(0.6)[12]).toBeCloseTo(20, 0);
  });
});
