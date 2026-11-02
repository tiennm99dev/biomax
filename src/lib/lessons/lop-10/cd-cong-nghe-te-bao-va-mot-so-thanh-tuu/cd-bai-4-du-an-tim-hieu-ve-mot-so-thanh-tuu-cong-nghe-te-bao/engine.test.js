import { describe, expect, it } from 'vitest';
import {
  CRITERIA,
  MILESTONES,
  TOPICS,
  addMilestone,
  readYear,
  removeMilestone,
  reportText,
  reviewTimeline,
  rubricNote,
  rubricTotal,
  timeline,
} from './engine.js';

const draft = {
  year: '2021',
  name: 'Một mốc thử nghiệm mới',
  topic: 'nhan-ban',
  source: 'Báo Nhân Dân',
};

describe('the milestones', () => {
  it('reads only four digit years in range', () => {
    expect(readYear(' 1996 ')).toBe(1996);
    expect(readYear('96')).toBe(null);
    expect(readYear('1700')).toBe(null);
    expect(readYear('hai nghìn')).toBe(null);
  });

  it('adds a complete milestone with its own id', () => {
    const first = addMilestone([], draft);
    if (!first.ok) throw new Error(first.text);
    expect(first.own[0]).toMatchObject({ year: 2021, own: true, id: 'rieng-1' });
    const second = addMilestone(first.own, { ...draft, name: 'Một mốc khác nữa' });
    if (!second.ok) throw new Error(second.text);
    expect(second.own[1].id).toBe('rieng-2');
  });

  it('keeps ids unique after a removal', () => {
    let own = /** @type {import('./engine.js').Milestone[]} */ ([]);
    for (const name of ['Mốc thứ nhất', 'Mốc thứ hai', 'Mốc thứ ba']) {
      const out = addMilestone(own, { ...draft, name });
      if (!out.ok) throw new Error(out.text);
      own = out.own;
    }
    own = removeMilestone(own, 'rieng-1');
    const out = addMilestone(own, { ...draft, name: 'Mốc thứ tư' });
    if (!out.ok) throw new Error(out.text);
    expect(new Set(out.own.map((m) => m.id)).size).toBe(out.own.length);
  });

  it('refuses a bad year, a thin name, a missing source and a duplicate', () => {
    expect(addMilestone([], { ...draft, year: '21' })).toMatchObject({ ok: false, field: 'year' });
    expect(addMilestone([], { ...draft, name: ' a ' })).toMatchObject({ ok: false, field: 'name' });
    expect(addMilestone([], { ...draft, source: '' })).toMatchObject({
      ok: false,
      field: 'source',
    });
    const first = addMilestone([], draft);
    if (!first.ok) throw new Error(first.text);
    expect(addMilestone(first.own, { ...draft, name: draft.name.toUpperCase() })).toMatchObject({
      ok: false,
      field: 'name',
    });
  });

  it('sorts the timeline by year and filters by topic', () => {
    const years = timeline([], 'all').map((m) => m.year);
    expect(years).toEqual([...years].sort((a, b) => a - b));
    expect(years).toHaveLength(MILESTONES.length);
    expect(timeline([], 'thuc-pham').map((m) => m.id)).toEqual(['burger']);
    const first = addMilestone([], { ...draft, year: '1996' });
    if (!first.ok) throw new Error(first.text);
    const row = timeline(first.own, 'nhan-ban').map((m) => m.id);
    expect(row.indexOf('dolly')).toBeLessThan(row.indexOf('rieng-1'));
  });

  it('has a given milestone for every topic', () => {
    expect(TOPICS.filter((t) => !MILESTONES.some((m) => m.topic === t.id))).toEqual([]);
  });

  it('counts only milestones on the chosen topic', () => {
    let own = /** @type {import('./engine.js').Milestone[]} */ ([]);
    expect(reviewTimeline(own, 'y-hoc').tone).toBe('info');
    for (const name of ['Mốc thứ nhất', 'Mốc thứ hai', 'Mốc thứ ba']) {
      const out = addMilestone(own, { ...draft, name, topic: 'y-hoc' });
      if (!out.ok) throw new Error(out.text);
      own = out.own;
    }
    expect(reviewTimeline(own, 'nhan-ban').tone).toBe('warn');
    expect(reviewTimeline(own, 'y-hoc').tone).toBe('ok');
  });
});

describe('the self assessment', () => {
  it('tops out at ten points', () => {
    const top = Object.fromEntries(CRITERIA.map((c) => [c.id, c.levels[0].points]));
    expect(rubricTotal(top)).toBe(10);
    expect(rubricNote(top).tone).toBe('ok');
  });

  it('adds half points and names the weakest criterion', () => {
    const chosen = { 'noi-dung': 3, 'trinh-bay': 1.5, 'tac-phong': 2, 'thai-do': 2 };
    expect(rubricTotal(chosen)).toBe(8.5);
    expect(rubricNote(chosen).text).toContain('8,5/10');
    expect(rubricNote(chosen).text).toContain('Nội dung');
  });

  it('waits for every criterion', () => {
    expect(rubricNote({ 'noi-dung': 3 }).text).toContain('3 tiêu chí');
  });
});

describe('the report', () => {
  it('lists the topic, tasks, milestones and marks', () => {
    const first = addMilestone([], draft);
    if (!first.ok) throw new Error(first.text);
    const text = reportText({
      topic: 'nhan-ban',
      members: ['An'],
      own: first.own,
      chosen: { 'noi-dung': 3 },
    });
    expect(text).toContain('Chủ đề: Nhân bản động vật');
    expect(text).toContain('Nhóm trưởng, theo dõi tiến độ: An');
    expect(text).toContain('(chưa phân công)');
    expect(text).toContain('2021: Một mốc thử nghiệm mới (nguồn: Báo Nhân Dân)');
    expect(text).toContain('Nội dung: 3 điểm');
    expect(text).not.toContain('Tổng');
  });
});
