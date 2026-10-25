import { describe, expect, it } from 'vitest';
import {
  SETS,
  buildKey,
  countPairs,
  describe as describeOrganism,
  identify,
  keyTable,
  split,
} from './engine.js';

describe('dichotomous keys', () => {
  it('leads every organism to itself through the ready-made key', () => {
    for (const set of SETS) {
      for (const o of set.organisms) expect(identify(set, o.id).leaf).toBe(o.id);
    }
  });

  it('has n - 1 pairs of features for n organisms', () => {
    for (const set of SETS) expect(countPairs(set.key)).toBe(set.organisms.length - 1);
  });

  it('gives every organism a distinct description', () => {
    for (const set of SETS) {
      const seen = new Set(set.organisms.map((o) => describeOrganism(set, o.id).join('|')));
      expect(seen.size).toBe(set.organisms.length);
    }
  });

  it('rejects a trait that does not split a group in two', () => {
    const animals = SETS[0];
    expect(split(animals, ['meo', 'chim'], 'xuong-song').valid).toBe(false);
    expect(split(animals, ['meo', 'chim'], 'long-vu')).toEqual({
      yes: ['chim'],
      no: ['meo'],
      valid: true,
    });
  });

  it('builds a full key from the learner choices', () => {
    const animals = SETS[0];
    const partial = buildKey(animals, ['xuong-song']);
    expect(partial.done).toBe(false);
    expect(partial.open).toEqual(['meo', 'chim', 'ca']);

    const full = buildKey(animals, ['xuong-song', 'vay', 'chan', 'long-vu']);
    expect(full.done).toBe(true);
    expect(full.steps).toHaveLength(4);
    expect(full.steps[0].yes.step).toBe(2);
    expect(full.steps[0].no.step).toBe(3);
    expect(full.steps[1].no.step).toBe(4);
  });

  it('skips a stored trait that would not split the current group', () => {
    const plants = SETS[1];
    const key = buildKey(plants, ['hoa', 'hoa', 'than-go']);
    expect(key.steps.map((s) => s.trait.id)).toEqual(['hoa', 'than-go']);
  });
});

describe('key table', () => {
  it('numbers the pairs in reading order', () => {
    const rows = keyTable(SETS[0]);
    expect(rows.map((r) => r.trait.id)).toEqual(['xuong-song', 'vay', 'chan', 'long-vu']);
    expect(rows[0].yes).toEqual({ organism: null, step: 2 });
    expect(rows[0].no).toEqual({ organism: null, step: 3 });
    expect(rows[1].yes).toEqual({ organism: 'ca', step: null });
    expect(rows[1].no).toEqual({ organism: null, step: 4 });
  });
});
