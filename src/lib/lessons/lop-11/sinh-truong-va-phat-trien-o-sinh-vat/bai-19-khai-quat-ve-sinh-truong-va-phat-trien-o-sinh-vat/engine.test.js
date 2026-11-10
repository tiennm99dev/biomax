import { describe, expect, it } from 'vitest';
import {
  PROCESS_BINS,
  PROCESS_CARDS,
  SPECIES,
  cycleEnd,
  durationText,
  lineNote,
  logPosition,
  species,
  stageAt,
} from './engine.js';

describe('life cycle time line', () => {
  it('lays every cycle out as touching stages from day 0', () => {
    const bad = SPECIES.filter(
      (s) =>
        s.stages[0].from !== 0 ||
        s.stages.some((st, i) => st.to <= st.from || (i > 0 && st.from !== s.stages[i - 1].to)),
    ).map((s) => s.id);
    expect(bad).toEqual([]);
  });

  it('ends no cycle after the lifespan', () => {
    const bad = SPECIES.filter((s) => cycleEnd(s) > s.lifespan).map((s) => s.id);
    expect(bad).toEqual([]);
  });

  it('finds the stage at a given age', () => {
    const muoi = species('muoi');
    expect(stageAt(muoi, 0)).toBe(0);
    expect(stageAt(muoi, 5)).toBe(1);
    expect(stageAt(muoi, 9)).toBe(2);
    expect(stageAt(muoi, 35)).toBe(3);
    expect(stageAt(species('ga'), 21)).toBe(1);
  });

  it('writes durations in days, months or years', () => {
    expect(durationText(21)).toBe('21 ngày');
    expect(durationText(120)).toBe('4 tháng');
    expect(durationText(8 * 365)).toBe('8 năm');
  });

  it('places longer lifespans further along the log ruler', () => {
    const order = SPECIES.map((s) => s.lifespan).sort((a, b) => a - b);
    const pos = order.map(logPosition);
    expect(pos.every((p, i) => i === 0 || p > pos[i - 1])).toBe(true);
    expect(logPosition(1)).toBe(0);
    expect(logPosition(10000 * 365)).toBeCloseTo(1);
  });

  it('names the first offspring only in the last stage', () => {
    const muoi = species('muoi');
    expect(lineNote(muoi, 4)).toContain('bọ gậy');
    expect(lineNote(muoi, 20)).toContain('vòng đời mới');
    expect(lineNote(muoi, 4)).not.toContain('vòng đời mới');
  });
});

describe('growth or development cards', () => {
  it('puts every card in a known bin, each bin used', () => {
    const ids = PROCESS_BINS.map((b) => b.id);
    expect(PROCESS_CARDS.filter((c) => !ids.includes(c.bin))).toEqual([]);
    expect(ids.filter((id) => !PROCESS_CARDS.some((c) => c.bin === id))).toEqual([]);
  });
});
