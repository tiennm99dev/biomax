import { describe, expect, it } from 'vitest';
import { CELLS, FUSE_STEP, ORGAN_CARDS, SAC_NUCLEI, STEPS, fuse, judge } from './engine.js';

describe('double fertilisation', () => {
  it('has eight nuclei in seven cells of the embryo sac', () => {
    expect(SAC_NUCLEI).toBe(8);
    const nuclei = Object.values(CELLS).reduce((s, c) => s + c.sets * c.count, 0);
    const cells = Object.values(CELLS).reduce((s, c) => s + c.count, 0);
    expect(nuclei).toBe(8);
    expect(cells).toBe(7);
  });

  it('makes a 2n zygote and a 3n endosperm nucleus', () => {
    expect(fuse('trung')).toBe(2);
    expect(fuse('trung-tam')).toBe(3);
  });

  it('accepts the egg and the central cell in either order', () => {
    expect(judge('trung', 'trung-tam').ok).toBe(true);
    expect(judge('trung-tam', 'trung').ok).toBe(true);
  });

  it('explains each wrong choice', () => {
    expect(judge(null, 'trung').ok).toBe(false);
    expect(judge('trung', 'trung').text).toContain('không cùng');
    expect(judge('trung', 'kem').text).toContain('Tế bào kèm');
    expect(judge('doi-cuc', 'trung-tam').text).toContain('Tế bào đối cực');
    expect(STEPS[FUSE_STEP].title).toBe('Thụ tinh kép');
  });

  it('gives every organ card a reason', () => {
    expect(ORGAN_CARDS.filter((c) => !c.why)).toEqual([]);
  });
});
