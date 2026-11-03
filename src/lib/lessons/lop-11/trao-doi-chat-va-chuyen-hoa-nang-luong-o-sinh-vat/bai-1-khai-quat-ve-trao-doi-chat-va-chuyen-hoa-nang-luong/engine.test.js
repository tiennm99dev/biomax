import { describe, expect, it } from 'vitest';
import {
  FULL_WORLD,
  MODE_BINS,
  MODE_CARDS,
  NOTHING_SEEN,
  ORGANISMS,
  STAGES,
  describeWorld,
  stageStatus,
  updateSeen,
} from './engine.js';

describe('stages in a changed world', () => {
  it('runs every stage of every organism in the full world', () => {
    const stopped = ORGANISMS.flatMap((o) =>
      STAGES.filter((s) => stageStatus(o.id, FULL_WORLD)[s.id] !== 'on').map((s) => o.id + s.id),
    );
    expect(stopped).toEqual([]);
  });

  it('stops synthesis but not respiration of a plant in the dark', () => {
    const dark = stageStatus('cay-xanh', { light: false, plants: true });
    expect(dark['tong-hop']).toBe('off');
    expect(dark['phan-giai']).toBe('store');
  });

  it('leaves a heterotroph on its reserves only when plants are gone', () => {
    const status = stageStatus('tho', { light: true, plants: false });
    expect(status['tong-hop']).toBe('off');
    expect(status['huy-dong']).toBe('store');
  });

  it('keeps chemoautotrophs running without light or plants', () => {
    expect(stageStatus('vi-khuan', { light: false, plants: false })['tong-hop']).toBe('on');
    expect(describeWorld('vi-khuan', { light: false, plants: true }).tone).toBe('ok');
  });
});

describe('learning goals', () => {
  it('marks a goal only for the organism it is about', () => {
    const world = { light: false, plants: true };
    expect(updateSeen(NOTHING_SEEN, 'tho', world, 0).dark).toBe(false);
    expect(updateSeen(NOTHING_SEEN, 'cay-xanh', world, 0).dark).toBe(true);
    expect(updateSeen(NOTHING_SEEN, 'vi-khuan', FULL_WORLD, 0).chemo).toBe(false);
    expect(updateSeen(NOTHING_SEEN, 'tho', FULL_WORLD, 3).allStages).toBe(true);
  });
});

describe('sorting cards', () => {
  it('points every card at an existing bin and fills each bin', () => {
    const bins = MODE_BINS.map((b) => b.id);
    expect(MODE_CARDS.every((c) => bins.includes(c.bin))).toBe(true);
    expect(bins.every((b) => MODE_CARDS.some((c) => c.bin === b))).toBe(true);
    expect(new Set(MODE_CARDS.map((c) => c.id)).size).toBe(MODE_CARDS.length);
  });
});
