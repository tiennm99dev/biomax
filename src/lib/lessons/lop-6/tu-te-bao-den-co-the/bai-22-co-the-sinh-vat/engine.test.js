import { describe, expect, it } from 'vitest';
import { PROCESSES, ROUNDS, THINGS, isLiving, thingById, validateRounds } from './engine.js';

describe('living things sorter', () => {
  it('has consistent sorting rounds with cards in every bin', () => {
    expect(validateRounds()).toEqual([]);
    for (const round of Object.values(ROUNDS)) {
      for (const bin of round.bins) {
        expect(round.cards.some((c) => c.bin === bin.id)).toBe(true);
      }
    }
  });

  it('lists the six basic life processes', () => {
    expect(PROCESSES.map((p) => p.id)).toEqual([
      'cam-ung',
      'sinh-truong',
      'sinh-san',
      'ho-hap',
      'bai-tiet',
      'dinh-duong',
    ]);
  });

  it('calls a thing living only when it shows every process', () => {
    expect(isLiving(thingById('cay-dau'))).toBe(true);
    expect(isLiving(thingById('trung-roi'))).toBe(true);
    expect(isLiving(thingById('robot'))).toBe(false);
    expect(isLiving({ shows: ['cam-ung', 'sinh-truong'] })).toBe(false);
  });

  it('explains every non-living thing that resembles a living one', () => {
    for (const t of THINGS) {
      if (!isLiving(t) && t.id !== 'hon-da') expect(t.looksLike).toBeTruthy();
    }
  });

  it('agrees with the sorting round on shared things', () => {
    const song = ROUNDS.song.cards;
    expect(song.find((c) => c.id === 'robot')?.bin).toBe('khong-song');
    expect(isLiving(thingById('robot'))).toBe(false);
  });
});
