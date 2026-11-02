import { describe, expect, it } from 'vitest';
import { PROCESSES, SOURCES, TARGETS, canBecome, inPlace, mixedOrder } from './engine.js';

describe('putting a process in order', () => {
  it('starts every seed from a wrong order holding every step once', () => {
    const bad = [];
    for (const p of PROCESSES) {
      for (let seed = 0; seed < 50; seed++) {
        const order = mixedOrder(p.steps.length, seed);
        if ([...order].sort((a, b) => a - b).join() !== p.steps.map((_, i) => i).join()) {
          bad.push(`${p.id} ${seed} steps`);
        }
        if (inPlace(order) === p.steps.length) bad.push(`${p.id} ${seed} solved`);
      }
    }
    expect(bad).toEqual([]);
  });

  it('counts the steps in their right places', () => {
    expect(inPlace([0, 1, 2])).toBe(3);
    expect(inPlace([1, 0, 2])).toBe(1);
  });

  it('gives Dolly the white face of the nucleus donor', () => {
    const dolly = PROCESSES.find((p) => p.id === 'nhan-ban');
    expect(dolly?.steps[0].text).toContain('mặt trắng');
    expect(dolly?.done).toContain('mặt trắng');
  });
});

describe('what a cell can become', () => {
  it('narrows from the zygote down to a differentiated cell', () => {
    const reach = SOURCES.map((s) => s.reach.length);
    expect(reach).toEqual([...reach].sort((a, b) => b - a));
    expect(reach.at(-1)).toBe(0);
    expect(reach[0]).toBe(TARGETS.length);
  });

  it('lets only the zygote become a whole body, a blood stem cell only blood', () => {
    expect(SOURCES.filter((s) => canBecome(s.id, 'co-the')).map((s) => s.id)).toEqual(['hop-tu']);
    expect(canBecome('tao-mau', 'hong-cau')).toBe(true);
    expect(canBecome('tao-mau', 'than-kinh')).toBe(false);
  });
});
