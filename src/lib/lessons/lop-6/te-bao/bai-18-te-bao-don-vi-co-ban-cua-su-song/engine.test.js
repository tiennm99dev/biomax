import { describe, expect, it } from 'vitest';
import {
  CELLS,
  STOPS,
  countAlong,
  firstClearStop,
  firstVisibleStop,
  formatLength,
  isVisible,
  logPosition,
  smallestVisible,
  toolFor,
  viewState,
} from './engine.js';

describe('cell sizes and magnification', () => {
  it('lists cells from the smallest to the largest', () => {
    const sizes = CELLS.map((c) => c.size);
    expect(sizes).toEqual([...sizes].sort((a, b) => a - b));
  });

  it('sees 0,1 mm with the naked eye and finer detail when magnified', () => {
    expect(smallestVisible(1)).toBe(100);
    expect(smallestVisible(100)).toBe(1);
    expect(isVisible(1000, 1)).toBe(true);
    expect(isVisible(60, 1)).toBe(false);
    expect(isVisible(60, 2)).toBe(true);
  });

  it('names the instrument for each magnification', () => {
    expect(toolFor(1)).toBe('Mắt thường');
    expect(toolFor(10)).toBe('Kính lúp');
    expect(toolFor(20)).toBe('Kính lúp');
    expect(toolFor(40)).toBe('Kính hiển vi quang học');
    expect(STOPS.map(toolFor)).toContain('Kính hiển vi quang học');
  });

  it('finds the first stop that shows each cell', () => {
    const first = Object.fromEntries(CELLS.map((c) => [c.id, firstVisibleStop(c.size)]));
    expect(first).toEqual({
      'vi-khuan': 100,
      'nam-men': 20,
      'hong-cau': 20,
      'niem-mac': 2,
      'vay-hanh': 1,
      'trung-ca': 1,
    });
    expect(firstVisibleStop(0.01)).toBeNull();
  });

  it('needs an image of about 1 mm to see a cell clearly', () => {
    expect(viewState(1000, 1)).toBe('clear');
    expect(viewState(300, 1)).toBe('dot');
    expect(viewState(2, 10)).toBe('hidden');
    const clear = Object.fromEntries(CELLS.map((c) => [c.id, firstClearStop(c.size)]));
    expect(clear).toEqual({
      'vi-khuan': 1000,
      'nam-men': 400,
      'hong-cau': 400,
      'niem-mac': 20,
      'vay-hanh': 5,
      'trung-ca': 1,
    });
    expect(firstClearStop(0.5)).toBeNull();
  });

  it('writes lengths with a readable unit and a decimal comma', () => {
    expect(formatLength(7.5)).toBe('7,5 µm');
    expect(formatLength(1000)).toBe('1 mm');
    expect(formatLength(2500)).toBe('2,5 mm');
    expect(formatLength(30000)).toBe('3 cm');
  });

  it('counts cells side by side', () => {
    expect(countAlong(1000, 2)).toBe(500);
    expect(countAlong(1000, 7.5)).toBe(133);
    expect(countAlong(10000, 1000)).toBe(10);
  });

  it('places sizes on a log axis', () => {
    expect(logPosition(1)).toBe(0);
    expect(logPosition(10000)).toBe(1);
    expect(logPosition(100)).toBeCloseTo(0.5);
  });
});
