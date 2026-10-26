import { describe, expect, it } from 'vitest';
import { countPairs } from '../bai-26-khoa-luong-phan/engine.js';
import { FIELD_SET, FINDS, STATIONS, findsAt, identify, keyTable, readKey } from './engine.js';

describe('field-trip key', () => {
  it('leads every organism of the set to its own name', () => {
    for (const o of FIELD_SET.organisms) expect(identify(FIELD_SET, o.id).leaf).toBe(o.id);
  });

  it('has one pair fewer than organisms', () => {
    expect(countPairs(FIELD_SET.key)).toBe(FIELD_SET.organisms.length - 1);
  });

  it('has a find at a known station for every organism', () => {
    const stations = STATIONS.map((s) => s.id);
    expect(FINDS.map((f) => f.organism).sort()).toEqual(
      FIELD_SET.organisms.map((o) => o.id).sort(),
    );
    for (const f of FINDS) expect(stations).toContain(f.station);
    for (const s of stations) expect(findsAt(s).length).toBeGreaterThan(0);
  });

  it('walks the key one pair at a time and rejects a wrong line', () => {
    const wrong = readKey('nhen', 1, false);
    expect(wrong.ok).toBe(false);
    expect(wrong.next).toBe(1);
    let row = 1;
    /** @type {string | null} */
    let found = null;
    for (let guard = 0; guard < 10 && !found; guard++) {
      const r = keyTable(FIELD_SET)[row - 1];
      const answer = FIELD_SET.has.nhen.includes(r.trait.id);
      const step = readKey('nhen', row, answer);
      expect(step.ok).toBe(true);
      found = step.found;
      if (step.next) row = step.next;
    }
    expect(found).toBe('nhen');
  });
});
