import { describe, expect, it } from 'vitest';
import {
  ERAS,
  EVENTS,
  VIEWS,
  agoText,
  clockOf,
  clockText,
  eraAt,
  eventsIn,
  groupsBy,
} from './engine.js';

describe('the geological time line', () => {
  it('has eras that follow each other without gaps', () => {
    const gaps = ERAS.slice(1).filter((e, i) => e.from !== ERAS[i].to);
    expect(gaps).toEqual([]);
    expect(ERAS[0].from).toBe(4600);
    expect(ERAS.at(-1)?.to).toBe(0);
  });

  it('finds the era of a time', () => {
    expect(eraAt(3500).name).toBe('Đại Thái cổ');
    expect(eraAt(1000).name).toBe('Đại Nguyên sinh');
    expect(eraAt(400).name).toBe('Đại Cổ sinh');
    expect(eraAt(150).name).toBe('Đại Trung sinh');
    expect(eraAt(0.15).name).toBe('Đại Tân sinh');
    expect(eraAt(0).name).toBe('Đại Tân sinh');
    expect(eraAt(66).name).toBe('Đại Trung sinh');
    expect(eraAt(250).name).toBe('Đại Cổ sinh');
    expect(eraAt(4600).id).toBe('hinh-thanh');
  });

  it('lists events oldest first and puts each group in its era', () => {
    const order = EVENTS.slice(1).filter((e, i) => e.t >= EVENTS[i].t);
    expect(order).toEqual([]);
    expect(eraAt(EVENTS.find((e) => e.group === 'khủng long')?.t ?? 0).id).toBe('trung-sinh');
    expect(eraAt(EVENTS.find((e) => e.group === 'lưỡng cư')?.t ?? 0).id).toBe('co-sinh');
    expect(eraAt(EVENTS.find((e) => e.group === 'người tinh khôn')?.t ?? 0).id).toBe('tan-sinh');
  });

  it('knows which groups exist at a time', () => {
    expect(groupsBy(4000)).toEqual([]);
    expect(groupsBy(400)).toContain('cá');
    expect(groupsBy(400)).not.toContain('bò sát');
    expect(groupsBy(0)).toContain('người tinh khôn');
  });

  it('keeps each view to its own events', () => {
    expect(eventsIn(VIEWS[2]).every((e) => e.t <= 5)).toBe(true);
    expect(eventsIn(VIEWS[0])).toHaveLength(EVENTS.length);
  });

  it('writes times and the one-day clock', () => {
    expect(agoText(3500)).toBe('3 500 triệu năm trước');
    expect(agoText(0.15)).toBe('150 000 năm trước');
    expect(agoText(0)).toBe('ngày nay');
    expect(agoText(2.5)).toBe('2,5 triệu năm trước');
    expect(clockOf(4600)).toEqual({ h: 0, m: 0, s: 0 });
    expect(clockOf(2300)).toEqual({ h: 12, m: 0, s: 0 });
    expect(clockText(66)).toBe('23 giờ 39 phút 20 giây');
    expect(clockText(0.15)).toBe('23 giờ 59 phút 57 giây');
  });
});
