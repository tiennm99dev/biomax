import { describe, expect, it } from 'vitest';
import { SCENARIOS, canJudge, judge, progressText, scenarioOf } from './engine.js';

describe('the two-way human ecosystem diagram', () => {
  it('has both harmonious and unsustainable situations with unique ids', () => {
    const ids = SCENARIOS.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(SCENARIOS.some((s) => s.harmonious)).toBe(true);
    expect(SCENARIOS.some((s) => !s.harmonious)).toBe(true);
    expect(() => scenarioOf('khong-co')).toThrow();
  });

  it('asks for both directions before a verdict', () => {
    expect(canJudge({ toNature: true, toSociety: false })).toBe(false);
    expect(canJudge({ toNature: false, toSociety: true })).toBe(false);
    expect(canJudge({ toNature: true, toSociety: true })).toBe(true);
  });

  it('judges a verdict against the situation', () => {
    const vac = scenarioOf('vac');
    expect(judge(vac, 'ben-vung').right).toBe(true);
    expect(judge(vac, 'khong-ben-vung').tone).toBe('warn');
    const forest = scenarioOf('pha-rung');
    expect(judge(forest, 'khong-ben-vung').text).toContain('không bền vững');
    expect(judge(forest, 'ben-vung').right).toBe(false);
  });

  it('counts first tries', () => {
    expect(progressText({})).toContain('0/6');
    expect(progressText({ vac: true, 'pha-rung': false })).toBe(
      'Đã nhận định 2/6 tình huống, đúng ngay lần đầu 1.',
    );
    const all = Object.fromEntries(SCENARIOS.map((s) => [s.id, true]));
    expect(progressText(all)).toContain('phân biệt đúng mọi quan hệ');
  });
});
