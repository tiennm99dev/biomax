import { describe, expect, it } from 'vitest';
import {
  NOTE_FIELDS,
  SITES,
  TECHS,
  efficiency,
  efficiencyNote,
  emptyNote,
  missingFields,
  placeTech,
  readValue,
  reportText,
} from './engine.js';

describe('placing a technology on the map', () => {
  it('has one best technology on every site, chosen from the list', () => {
    const techIds = TECHS.map((t) => t.id);
    const bad = SITES.filter(
      (s) => !techIds.includes(s.best) || s.also.some((t) => !techIds.includes(t)),
    );
    expect(bad).toEqual([]);
    const grades = SITES.map((s) => placeTech(s.id, s.best).grade);
    expect(new Set(grades)).toEqual(new Set(['best']));
  });

  it('grades a workable second choice apart from a wrong one', () => {
    expect(placeTech('trang-trai', 'u-phan').grade).toBe('also');
    expect(placeTech('trang-trai', 'dat').grade).toBe('no');
    expect(placeTech('khong-co', 'dat').grade).toBe('no');
  });

  it('keeps every site on the map', () => {
    const outside = SITES.filter((s) => s.left < 5 || s.left > 95 || s.top < 5 || s.top > 95);
    expect(outside).toEqual([]);
  });
});

describe('survey notes', () => {
  it('lists what is still missing', () => {
    const note = emptyNote();
    expect(missingFields(note)).toHaveLength(NOTE_FIELDS.length + 1);
    note.place = 'Trại lợn xóm 3';
    note.fields.nguon = 'Phân lợn';
    expect(missingFields(note)).toHaveLength(NOTE_FIELDS.length - 1);
    expect(missingFields(note)).not.toContain('Tên địa điểm');
  });

  it('writes a report only from the notes that hold something', () => {
    expect(reportText([emptyNote()])).toContain('Chưa có ghi chú');
    const note = emptyNote();
    note.place = 'Trại lợn xóm 3';
    note.fields['cong-nghe'] = 'Hầm biogas';
    const text = reportText([emptyNote(), note]);
    expect(text).toContain('Điểm 1: Trại lợn xóm 3');
    expect(text).toContain('Công nghệ, vi sinh vật: Hầm biogas');
    expect(text).toContain('(chưa ghi)');
  });
});

describe('the efficiency calculator', () => {
  it('computes the removal share', () => {
    expect(efficiency(320, 40)).toBe(87.5);
    expect(efficiency(240, 36)).toBe(85);
    expect(efficiency(0, 0)).toBeNull();
    expect(efficiency(10, 20)).toBeNull();
  });

  it('reads a decimal comma and turns down words', () => {
    expect(readValue('12,5')).toBe(12.5);
    expect(readValue('abc')).toBeNull();
    expect(efficiencyNote('', '').tone).toBe('info');
    expect(efficiencyNote('abc', '3').tone).toBe('warn');
    expect(efficiencyNote('10', '20').tone).toBe('warn');
    expect(efficiencyNote('320', '40').text).toContain('87,5%');
  });
});
