import { describe, expect, it } from 'vitest';
import {
  QUESTIONS,
  emptyTally,
  observations,
  riskyShare,
  sampleTally,
  shares,
  totalOf,
} from './engine.js';

describe('the survey tally', () => {
  it('gives the sample twenty households on every question', () => {
    const tally = sampleTally();
    const off = QUESTIONS.filter((q) => totalOf(tally, q.id) !== 20);
    expect(off).toEqual([]);
  });

  it('works out shares and the share of risky answers', () => {
    const tally = sampleTally();
    expect(shares(tally, 'loai').find((a) => a.id === 'hoa-hoc')?.share).toBe(45);
    expect(riskyShare(tally, 'bao-bi')).toBe(70);
    expect(riskyShare(tally, 'luong')).toBe(15);
  });

  it('keeps the sample apart from later edits', () => {
    const a = sampleTally();
    a.loai['huu-co'] += 5;
    expect(sampleTally().loai['huu-co']).toBe(2);
  });
});

describe('the observations', () => {
  it('asks for data when nothing is entered', () => {
    expect(observations(emptyTally())[0].tone).toBe('info');
  });

  it('flags the questions where risky answers pass the limit', () => {
    const notes = observations(sampleTally());
    expect(notes.filter((n) => n.tone === 'warn')).toHaveLength(3);
    expect(notes.find((n) => n.text.startsWith('Lượng bón'))?.tone).toBe('info');
    const better = sampleTally();
    better.luong = { 'huong-dan': 14, 'kinh-nghiem': 5, nhieu: 1 };
    expect(observations(better).find((n) => n.text.startsWith('Lượng bón'))?.tone).toBe('ok');
  });

  it('notices when questions have different numbers of answers', () => {
    const tally = sampleTally();
    tally.loai['huu-co'] += 1;
    expect(observations(tally)[0].text).toContain('chưa bằng nhau');
  });
});
