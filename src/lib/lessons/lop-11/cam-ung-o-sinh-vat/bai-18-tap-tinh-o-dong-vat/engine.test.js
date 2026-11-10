import { describe, expect, it } from 'vitest';
import { FIRM, drops, explain, pairingsToFirm, stage, trial } from './engine.js';

describe('Pavlov conditioning model', () => {
  it('needs about 20 pairings to make the reflex firm', () => {
    expect(pairingsToFirm()).toBe(20);
  });

  it('gives no saliva to the bell before any learning', () => {
    const t = trial(0, 'chi-tin-hieu');
    expect(t.saliva).toBe(0);
    expect(stage(0)).toBe('chua');
  });

  it('learns nothing when food comes before the signal', () => {
    expect(trial(0.3, 'nguoc').after).toBe(0.3);
    expect(explain('nguoc', trial(0.3, 'nguoc'), 3, 'chuong').tone).toBe('warn');
  });

  it('fades without reinforcement', () => {
    let s = FIRM;
    const before = drops(s);
    for (let i = 0; i < 10; i++) s = trial(s, 'chi-tin-hieu').after;
    expect(drops(s)).toBeLessThan(before);
    expect(stage(s)).not.toBe('vung');
  });

  it('salivates to the signal alone once firm', () => {
    let s = 0;
    for (let i = 0; i < 20; i++) s = trial(s, 'cap').after;
    expect(stage(s)).toBe('vung');
    const t = trial(s, 'chi-tin-hieu');
    expect(t.saliva).toBe(9);
    expect(explain('chi-tin-hieu', t, 20, 'den').text).toContain('bật đèn');
  });

  it('keeps a firm reflex firm after one test, then marks it fading', () => {
    let s = 0;
    for (let i = 0; i < 20; i++) s = trial(s, 'cap').after;
    s = trial(s, 'chi-tin-hieu').after;
    expect(stage(s)).toBe('dang');
    expect(stage(s, true)).toBe('vung');
    for (let i = 0; i < 5; i++) s = trial(s, 'chi-tin-hieu').after;
    expect(stage(s, true)).toBe('yeu');
  });
});
