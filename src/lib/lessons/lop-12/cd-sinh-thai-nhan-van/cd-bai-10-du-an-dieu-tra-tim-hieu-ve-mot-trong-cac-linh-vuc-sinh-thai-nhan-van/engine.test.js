import { describe, expect, it } from 'vitest';
import {
  FIELDS,
  ZONES,
  addMark,
  dotRoom,
  dotSpot,
  emptyMarks,
  emptyTally,
  fieldOf,
  goodShare,
  observations,
  readCount,
  removeMark,
  reportText,
  shares,
  totalMarks,
} from './engine.js';

const waste = fieldOf('do-thi');

describe('the local survey board', () => {
  it('gives every field a survey with sustainable and unsustainable answers', () => {
    for (const f of FIELDS) {
      expect(f.answers.some((a) => a.good)).toBe(true);
      expect(f.answers.some((a) => !a.good)).toBe(true);
      expect(f.marks.map((m) => m.tone).sort()).toEqual(['tot', 'xau']);
    }
    expect(() => fieldOf('khong-co')).toThrow();
  });

  it('turns counts into shares with one decimal', () => {
    const tally = { 'thuong-xuyen': 12, 'thinh-thoang': 18, khong: 10 };
    const rows = shares(waste, tally);
    expect(rows.map((r) => r.share)).toEqual([30, 45, 25]);
    expect(goodShare(waste, tally)).toBe(30);
    expect(shares(waste, emptyTally(waste)).every((r) => r.share === 0)).toBe(true);
    const third = { 'thuong-xuyen': 1, 'thinh-thoang': 1, khong: 1 };
    expect(shares(waste, third)[0].share).toBe(33.3);
  });

  it('adds and removes marks without going below zero', () => {
    let marks = emptyMarks();
    marks = addMark(marks, 'cho', 'bai-rac');
    marks = addMark(marks, 'cho', 'bai-rac');
    marks = addMark(marks, 'song', 'bai-rac');
    marks = addMark(marks, 'dan-cu', 'cay-xanh');
    expect(totalMarks(marks, 'bai-rac')).toBe(3);
    marks = removeMark(marks, 'dan-cu', 'cay-xanh');
    marks = removeMark(marks, 'dan-cu', 'cay-xanh');
    expect(totalMarks(marks, 'cay-xanh')).toBe(0);
    const notes = observations(waste, emptyTally(waste), addMark(marks, 'cho', 'cay-xanh'));
    expect(notes.at(-1)?.text).toContain('chợ có nhiều điểm cần cải thiện nhất (2)');
  });

  it('warns about a small sample and a low sustainable share', () => {
    const notes = observations(
      waste,
      { 'thuong-xuyen': 4, 'thinh-thoang': 6, khong: 10 },
      emptyMarks(),
    );
    expect(notes[0].text).toContain('ít nhất 30 người');
    expect(notes[1].tone).toBe('warn');
    expect(notes[1].text).toContain('20%');
    expect(notes[2].text).toBe('Chưa đánh dấu điểm nào trên bản đồ.');
  });

  it('writes a report with the shares and the map', () => {
    const marks = addMark(emptyMarks(), 'truong', 'cay-xanh');
    const text = reportText(waste, { 'thuong-xuyen': 20, 'thinh-thoang': 15, khong: 5 }, marks);
    expect(text).toContain('Số người trả lời: 40');
    expect(text).toContain('- Thường xuyên: 20 người (50%)');
    expect(text).toContain('- Thỉnh thoảng: 15 người (37,5%)');
    expect(text).toContain('- Trường học: cây xanh, vườn hoa 1');
  });

  it('reads a typed number of people', () => {
    expect(readCount('40')).toBe(40);
    expect(readCount(' 7 ')).toBe(7);
    expect(readCount('0')).toBe(0);
    expect(readCount('999')).toBe(200);
    expect(readCount('')).toBeNull();
    expect(readCount('-3')).toBeNull();
    expect(readCount('2,5')).toBeNull();
  });

  it('keeps every dot inside its zone', () => {
    for (const z of ZONES) {
      const room = dotRoom(z);
      expect(room).toBeGreaterThan(0);
      const last = dotSpot(z, room - 1);
      expect(last.cx + 5).toBeLessThanOrEqual(z.x + z.w);
      expect(last.cy + 5).toBeLessThanOrEqual(z.y + z.h);
    }
  });
});
