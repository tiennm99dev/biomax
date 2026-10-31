import { describe, expect, it } from 'vitest';
import { rng } from '#lib/core/drill.js';
import {
  fertilize,
  gameteKinds,
  maleShare,
  ratioText,
  run,
  sexOf,
  systemById,
  tallyText,
} from './engine.js';

const human = systemById('nguoi');
const chicken = systemById('ga');

describe('sex determination', () => {
  it('gives the mother one kind of egg and the father two kinds of sperm in humans', () => {
    expect(gameteKinds(human.female)).toEqual([{ chromosome: 'X', share: 1 }]);
    expect(gameteKinds(human.male)).toEqual([
      { chromosome: 'X', share: 0.5 },
      { chromosome: 'Y', share: 0.5 },
    ]);
    expect(gameteKinds(chicken.female)).toHaveLength(2);
  });

  it('reads the sex of a zygote', () => {
    expect(sexOf(human, 'X', 'X')).toBe('cai');
    expect(sexOf(human, 'X', 'Y')).toBe('duc');
    expect(sexOf(chicken, 'Y', 'X')).toBe('cai');
    expect(sexOf(chicken, 'X', 'X')).toBe('duc');
  });

  it('always takes the egg X in humans and the sperm X in chickens', () => {
    const rand = rng(3);
    const eggs = new Set();
    const sperms = new Set();
    for (let i = 0; i < 200; i++) {
      eggs.add(fertilize(human, rand).egg);
      sperms.add(fertilize(chicken, rand).sperm);
    }
    expect([...eggs]).toEqual(['X']);
    expect([...sperms]).toEqual(['X']);
  });

  it('tends to 1 : 1 over many fertilizations', () => {
    const { tally } = run(human, { cai: 0, duc: 0 }, 20000, rng(11));
    expect(tally.cai + tally.duc).toBe(20000);
    expect(Math.abs(maleShare(tally) - 0.5)).toBeLessThan(0.02);
  });

  it('writes the ratio and the tally', () => {
    expect(ratioText({ cai: 50, duc: 52 })).toBe('1,04 : 1');
    expect(ratioText({ cai: 0, duc: 0 })).toBe('—');
    expect(tallyText(human, { cai: 3, duc: 1 })).toContain('lệch xa');
    expect(tallyText(human, { cai: 1000, duc: 1010 })).toContain('rất gần 1 : 1');
    expect(tallyText(human, { cai: 1000, duc: 1010 })).toContain('2 010 lần');
  });
});
