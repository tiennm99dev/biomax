import { describe, expect, it } from 'vitest';
import {
  REGIONS,
  SAMPLES,
  blankEntry,
  countByGroup,
  countByRegion,
  emptyRegions,
  mapText,
  missing,
  region,
  reportText,
} from './engine.js';

describe('the map', () => {
  it('has six regions whose boxes do not overlap', () => {
    expect(REGIONS).toHaveLength(6);
    const overlaps = [];
    for (const a of REGIONS) {
      for (const b of REGIONS) {
        if (a.id >= b.id) continue;
        const apart = a.x + a.w <= b.x || b.x + b.w <= a.x || a.y + a.h <= b.y || b.y + b.h <= a.y;
        if (!apart) overlaps.push(`${a.id}/${b.id}`);
      }
    }
    expect(overlaps).toEqual([]);
    expect(() => region('khong-co')).toThrow();
  });

  it('counts examples by region and by group', () => {
    const counts = countByRegion(SAMPLES);
    expect(counts.dbscl).toBe(2);
    expect(counts.tn).toBe(1);
    expect(counts.dbsh).toBe(0);
    expect(countByGroup(SAMPLES)).toEqual({ 'thien-dich': 1, 'che-pham': 2, 'di-truyen': 1 });
    expect(emptyRegions(SAMPLES)).toEqual([
      'Trung du và miền núi phía Bắc',
      'Đồng bằng sông Hồng',
      'Đông Nam Bộ',
    ]);
    expect(mapText(SAMPLES)).toContain('nhiều nhất ở Đồng bằng sông Cửu Long (2)');
    expect(mapText([])).toBe('Chưa có ví dụ nào trên bản đồ.');
  });
});

describe('the form', () => {
  it('names every required field left empty', () => {
    expect(missing(blankEntry())).toEqual([
      'Tên ứng dụng',
      'Đối tượng gây hại',
      'Tác nhân sinh học hoặc biện pháp',
      'Nhóm biện pháp',
      'Vùng',
      'Nguồn thông tin',
    ]);
    expect(SAMPLES.every((s) => missing(s).length === 0)).toBe(true);
    expect(missing({ ...SAMPLES[0], source: '  ' })).toEqual(['Nguồn thông tin']);
  });
});

describe('the summary', () => {
  it('lists totals and every entry with its source', () => {
    const own = { ...blankEntry(), ...SAMPLES[0], id: 'vd-1', sample: false, result: '' };
    const text = reportText([...SAMPLES, own]);
    expect(text).toContain('Số ví dụ thu thập: 5');
    expect(text).toContain('Sử dụng thiên địch 2');
    expect(text).toContain('Đồng bằng sông Cửu Long 3');
    expect(text).toContain('4. Thả muỗi mang Wolbachia phòng sốt xuất huyết (ví dụ gợi ý)');
    expect(text).toContain('5. Nuôi kiến vàng trong vườn cây có múi\n');
    expect(text.split('Nguồn:').length - 1).toBe(5);
  });
});
