import { describe, expect, it } from 'vitest';
import {
  RESULT_TEXT,
  START_ORDER,
  STEPS,
  correctPlaces,
  rateAt,
  startNote,
  yogurtOutcome,
} from './engine.js';

describe('yogurt practical', () => {
  it('starts from a shuffled order of every step', () => {
    expect([...START_ORDER].sort()).toEqual(STEPS.map((_, i) => i));
    expect(correctPlaces(START_ORDER)).toBeLessThan(STEPS.length);
    expect(correctPlaces([0, 1, 2, 3, 4])).toBe(5);
  });

  it('kills the starter when the milk is too hot', () => {
    expect(rateAt(100)).toBe(0);
    expect(yogurtOutcome(100, 12).state).toBe('chet');
    expect(yogurtOutcome(60, 12).state).toBe('chet');
  });

  it('sets in 10 to 14 hours from the book temperature', () => {
    expect(yogurtOutcome(50, 3).state).toBe('long');
    expect(yogurtOutcome(50, 7).state).toBe('sanh');
    expect(yogurtOutcome(50, 10).state).toBe('dat');
    expect(yogurtOutcome(50, 12).state).toBe('dat');
    expect(yogurtOutcome(50, 14).state).toBe('dat');
    expect(yogurtOutcome(50, 16).state).toBe('qua-chua');
  });

  it('ferments slowly from a cool start', () => {
    expect(yogurtOutcome(25, 12).state).toBe('long');
    expect(yogurtOutcome(35, 12).state).toBe('sanh');
  });

  it('loses part of the starter just below the killing temperature', () => {
    expect(rateAt(58)).toBeLessThan(rateAt(50));
    expect(yogurtOutcome(58, 12).state).toBe('sanh');
    expect(yogurtOutcome(55, 12).state).toBe('dat');
    expect(startNote(58)).toContain('chết một phần');
    expect(startNote(50)).toBe('');
    expect(startNote(25)).toContain('nguội');
  });

  it('explains every result', () => {
    for (const s of ['chet', 'long', 'sanh', 'dat', 'qua-chua']) {
      expect(RESULT_TEXT[/** @type {keyof typeof RESULT_TEXT} */ (s)]).toBeTruthy();
    }
  });
});
