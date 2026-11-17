import { describe, expect, it } from 'vitest';
import { SITES, SOLUTIONS, emptyNote, judge, missingFields, reportText } from './engine.js';

describe('conservation survey board', () => {
  it('gives every site a known best solution that differs from its partial ones', () => {
    const ids = new Set(SOLUTIONS.map((s) => s.id));
    const bad = SITES.filter(
      (s) => !ids.has(s.best) || s.also.some((a) => !ids.has(a) || a === s.best),
    );
    expect(bad).toEqual([]);
  });

  it('keeps every site inside the map', () => {
    const bad = SITES.filter((s) => s.left < 5 || s.left > 95 || s.top < 5 || s.top > 95);
    expect(bad).toEqual([]);
  });

  it('grades a choice', () => {
    expect(judge('dam-sen', 'ngoai-lai').grade).toBe('best');
    expect(judge('bai-boi', 'khoanh-vung').grade).toBe('also');
    expect(judge('kiem-lam', 'trong-rung').grade).toBe('no');
    expect(judge('khong-co', 'cai-tao').grade).toBe('no');
  });

  it('lists the empty fields of a note', () => {
    const note = emptyNote('Rừng phòng hộ');
    note.fields['thuc-trang'] = 'Còn khoảng 20 ha';
    expect(missingFields(note)).toEqual([
      'Nguyên nhân, mối đe doạ',
      'Biện pháp đang thực hiện',
      'Giải pháp đề xuất',
    ]);
    expect(missingFields(emptyNote())[0]).toBe('Tên địa điểm');
  });

  it('turns the notes into a report with the proposals together', () => {
    const note = emptyNote('Đầm sen thôn Đông');
    note.fields['de-xuat'] = 'Bắt ốc bươu vàng vào đầu vụ';
    const text = reportText([note, emptyNote()]);
    expect(text).toContain('3.1. Đầm sen thôn Đông');
    expect(text).not.toContain('3.2.');
    expect(text).toContain('- Đầm sen thôn Đông: Bắt ốc bươu vàng vào đầu vụ');
    expect(reportText([emptyNote()])).toContain('Chưa có điểm khảo sát');
  });
});
