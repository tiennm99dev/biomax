import { describe, expect, it } from 'vitest';
import {
  EXPERIMENTS,
  diaryNote,
  experiment,
  judgeReading,
  organShape,
  record,
  trueAngle,
} from './engine.js';

describe('tropism diary', () => {
  it('starts flat before sprouting and bends more each day', () => {
    const bad = [];
    for (const e of EXPERIMENTS) {
      if (trueAngle(e, e.sprout) !== 0) bad.push(`${e.id} sprout`);
      for (let d = e.sprout + 1; d < e.days; d++) {
        if (trueAngle(e, d + 1) < trueAngle(e, d)) bad.push(`${e.id} day ${d}`);
      }
      if (trueAngle(e, e.days) > e.max + 2) bad.push(`${e.id} max`);
    }
    expect(bad).toEqual([]);
  });

  it('draws the tip in the measured direction', () => {
    const e = experiment('huong-hoa');
    const s = organShape(e, 6);
    expect(s.tipDir).toBe(180 - s.angle);
    const end = s.points[s.points.length - 1];
    // The root ends lower than and to the right of the seed: towards the fertiliser.
    expect(end.x).toBeGreaterThan(e.base.x);
    expect(end.y).toBeGreaterThan(e.base.y);
  });

  it('turns an upside-down maize root to point down', () => {
    const e = experiment('trong-luc');
    expect(trueAngle(e, e.days)).toBeGreaterThan(160);
    expect(organShape(e, e.days).tipDir).toBeGreaterThan(160);
  });

  it('accepts readings within the tolerance', () => {
    expect(judgeReading(40, 43).tone).toBe('ok');
    expect(judgeReading(40, 46).tone).toBe('warn');
    expect(judgeReading(40, 30).text).toContain('nhỏ');
  });

  it('keeps one entry a day and concludes once the last day is in', () => {
    const e = experiment('huong-sang');
    /** @type {import('./engine.js').Entry[]} */
    let log = [];
    for (const d of [3, 5, 4, 5])
      log = record(log, { day: d, reading: trueAngle(e, d), truth: trueAngle(e, d) });
    expect(log.map((x) => x.day)).toEqual([3, 4, 5]);
    expect(diaryNote(e, log).tone).toBe('info');
    log = record(log, { day: 7, reading: trueAngle(e, 7), truth: trueAngle(e, 7) });
    const note = diaryNote(e, log);
    expect(note.tone).toBe('ok');
    expect(note.text).toContain('hướng sáng dương');
  });
});
