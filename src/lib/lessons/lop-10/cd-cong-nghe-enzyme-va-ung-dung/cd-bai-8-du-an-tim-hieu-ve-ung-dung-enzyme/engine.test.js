import { describe, expect, it } from 'vitest';
import {
  FACTORS,
  STAINS,
  checkPlan,
  emptyScores,
  meanScore,
  proposalNote,
  readScore,
  reportText,
  resultNote,
  resultRows,
  rowConclusion,
  sampleScores,
  scoreKey,
  scoreText,
} from './engine.js';

describe('the fair-test plan', () => {
  /** @returns {Record<string, string>} */
  const right = () => Object.fromEntries(FACTORS.map((f) => [f.id, f.change ? 'doi' : 'giu']));

  it('accepts only the washing liquid as what changes', () => {
    expect(checkPlan(right()).tone).toBe('ok');
    expect(checkPlan({}).tone).toBe('info');
    expect(checkPlan({ ...right(), 'nhiet-do': 'doi' }).tone).toBe('warn');
    expect(checkPlan({ ...right(), 'dung-dich': 'giu' }).text).toContain('cần so sánh');
  });
});

describe('the scores', () => {
  it('reads a decimal comma and refuses what is out of range', () => {
    expect(readScore('3,5')).toBe(3.5);
    expect(readScore('5')).toBe(5);
    expect(readScore('')).toBeNull();
    expect(readScore('6')).toBeNull();
    expect(readScore('a')).toBeNull();
  });

  it('gives a mean only for a full set of repeats', () => {
    expect(meanScore(['4', '5', '4'])).toBeCloseTo(13 / 3, 9);
    expect(meanScore(['4', '', '4'])).toBeNull();
  });

  it('computes the gaps of the sample set', () => {
    const rows = resultRows(sampleScores());
    expect(rows.map((r) => r.gap)).toEqual([2, 5 / 3, 2 / 3].map((v) => expect.closeTo(v, 8)));
    expect(scoreText(rows[0].withEnzyme)).toBe('4,33');
  });

  it('concludes each row by the size of the gap', () => {
    const rows = resultRows(sampleScores());
    expect(rowConclusion(rows[0])).toContain('protease');
    expect(rowConclusion(rows[2])).toContain('không rõ');
    const reversed = emptyScores();
    reversed[scoreKey(STAINS[0].id, 'co')] = ['1', '1', '1'];
    reversed[scoreKey(STAINS[0].id, 'khong')] = ['4', '4', '4'];
    expect(rowConclusion(resultRows(reversed)[0])).toContain('kiểm tra lại');
  });

  it('notes an empty, a bad and a complete table', () => {
    expect(resultNote(emptyScores()).tone).toBe('info');
    const bad = emptyScores();
    bad[scoreKey('trung', 'co')][0] = '9';
    expect(resultNote(bad).tone).toBe('warn');
    expect(resultNote(sampleScores()).tone).toBe('ok');
  });
});

describe('the proposal and the report', () => {
  it('asks a proposal to name the enzyme', () => {
    expect(proposalNote('').tone).toBe('info');
    expect(proposalNote('Làm xà phòng').tone).toBe('warn');
    expect(proposalNote('Dùng protease để giặt').tone).toBe('ok');
  });

  it('writes every part into the report', () => {
    const text = reportText({
      members: ['An'],
      scores: sampleScores(),
      proposal: 'Dùng protease để giặt',
    });
    expect(text).toContain('Chuẩn bị vải và vết bẩn: An');
    expect(text).toContain('Làm thí nghiệm, ghi số liệu: chưa phân công');
    expect(text).toContain('Lòng trắng trứng: có enzyme 4,33, không có enzyme 2,33');
    expect(text).toContain('Đề xuất ứng dụng: Dùng protease để giặt');
  });
});
