import { describe, expect, it } from 'vitest';
import {
  BONE_GROUPS,
  C14_HALF_LIFE,
  LIMBS,
  ageFrom,
  fitBones,
  groupsOf,
  limbBones,
  limbNote,
  remaining,
} from './engine.js';

describe('forelimbs as homologous organs', () => {
  it('builds every limb from the same five bone groups', () => {
    const all = BONE_GROUPS.map((g) => g.id);
    const bad = LIMBS.filter((l) => groupsOf(l).join() !== all.join()).map((l) => l.id);
    expect(bad).toEqual([]);
  });

  it('describes every bone group of every limb', () => {
    const bad = LIMBS.flatMap((l) =>
      BONE_GROUPS.filter((g) => !l.changes[g.id]).map((g) => `${l.id}:${g.id}`),
    );
    expect(bad).toEqual([]);
  });

  it('draws two forearm bones and one bone per finger joint', () => {
    const horse = LIMBS.find((l) => l.id === 'ngua');
    if (!horse) throw new Error('missing horse');
    const bones = limbBones(horse);
    expect(bones.filter((b) => b.group === 'cang-tay')).toHaveLength(2);
    expect(bones.filter((b) => b.group === 'ban-tay')).toHaveLength(3);
    expect(bones.filter((b) => b.group === 'ngon')).toHaveLength(3);
  });

  it('fits each drawing inside its box', () => {
    const bad = [];
    for (const l of LIMBS) {
      for (const b of fitBones(limbBones(l), 110, 200)) {
        const xs = [b.x1, b.x2];
        const ys = [b.y1, b.y2];
        if (xs.some((x) => x < 0 || x > 110) || ys.some((y) => y < 0 || y > 200)) bad.push(l.id);
      }
    }
    expect(bad).toEqual([]);
  });

  it('explains the chosen group', () => {
    expect(limbNote('all', LIMBS[0])).toContain('cơ quan tương đồng');
    expect(limbNote('ban-tay', LIMBS[3])).toContain('màng da');
  });
});

describe('radioactive dating', () => {
  it('halves the isotope every half-life', () => {
    expect(remaining(C14_HALF_LIFE, C14_HALF_LIFE)).toBe(0.5);
    expect(remaining(4 * C14_HALF_LIFE, C14_HALF_LIFE)).toBe(0.0625);
  });

  it('dates a sample from the share left', () => {
    expect(ageFrom(0.25, C14_HALF_LIFE)).toBe(11460);
    expect(ageFrom(0.125, C14_HALF_LIFE)).toBe(17190);
    expect(() => ageFrom(0, C14_HALF_LIFE)).toThrow(RangeError);
  });
});
