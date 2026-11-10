import { describe, expect, it } from 'vitest';
import {
  CRITICAL_NIGHT,
  HORMONE_BINS,
  HORMONE_CARDS,
  flashForm,
  flowers,
  longestDark,
  verdict,
} from './engine.js';

describe('flowering by photoperiod', () => {
  it('lets a short-day plant flower only under long unbroken nights', () => {
    expect(flowers('ngay-ngan', 10, 'khong')).toBe(true);
    expect(flowers('ngay-ngan', 14, 'khong')).toBe(false);
    expect(flowers('ngay-ngan', 12, 'khong')).toBe(false);
  });

  it('lets a long-day plant flower only under short nights', () => {
    expect(flowers('ngay-dai', 16, 'khong')).toBe(true);
    expect(flowers('ngay-dai', 8, 'khong')).toBe(false);
    expect(flowers('ngay-dai', 12, 'khong')).toBe(false);
  });

  it('lets a day-neutral plant flower under every day length', () => {
    const bad = [6, 9, 12, 15, 18].filter((d) => !flowers('trung-tinh', d, 'do'));
    expect(bad).toEqual([]);
  });

  it('splits the night with a red flash and undoes it with far red', () => {
    expect(longestDark(8, 'do')).toBe(8);
    expect(longestDark(8, 'do-do-xa')).toBe(16);
    expect(flowers('ngay-ngan', 8, 'do')).toBe(false);
    expect(flowers('ngay-dai', 8, 'do')).toBe(true);
    expect(flowers('ngay-ngan', 8, 'do-do-xa')).toBe(true);
    expect(flowers('ngay-dai', 8, 'do-do-xa')).toBe(false);
    expect(flashForm('do')).toBe('Pfr');
    expect(flashForm('do-do-xa')).toBe('Pr');
  });

  it('explains the threshold and the flash in the feedback', () => {
    expect(verdict('ngay-ngan', 24 - CRITICAL_NIGHT, 'khong').text).toContain('ngưỡng');
    expect(verdict('ngay-ngan', 8, 'do').tone).toBe('warn');
    expect(verdict('ngay-dai', 8, 'do').text).toContain('chia đêm');
    expect(verdict('ngay-ngan', 9, 'khong').text).toContain('15 giờ');
  });
});

describe('hormone cards', () => {
  it('uses every bin and only known bins', () => {
    const ids = HORMONE_BINS.map((b) => b.id);
    expect(HORMONE_CARDS.filter((c) => !ids.includes(c.bin))).toEqual([]);
    expect(ids.filter((id) => !HORMONE_CARDS.some((c) => c.bin === id))).toEqual([]);
  });
});
