import { describe, expect, it } from 'vitest';
import { BODIES, LEVELS, chainText, flatten, nodesAlong, quizItems } from './engine.js';

describe('levels of organisation', () => {
  it('puts every cell exactly four levels below the body', () => {
    for (const root of Object.values(BODIES)) {
      for (const { node, level } of flatten(root)) {
        if (!node.children?.length) expect(level).toBe(LEVELS.length - 1);
        else expect(level).toBeLessThan(LEVELS.length - 1);
      }
    }
  });

  it('uses unique ids within each body', () => {
    for (const root of Object.values(BODIES)) {
      const ids = flatten(root).map((x) => x.node.id);
      expect(new Set(ids).size).toBe(ids.length);
    }
  });

  it('gives the plant a shoot system and a root system', () => {
    expect(BODIES['thuc-vat'].children?.map((c) => c.name)).toEqual(['Hệ chồi', 'Hệ rễ']);
  });

  it('follows a path and writes the chain from cell to body', () => {
    const chain = nodesAlong(BODIES.nguoi, ['he-tuan-hoan', 'tim', 'mo-co-tim', 'tb-co-tim']);
    expect(chain).toHaveLength(5);
    expect(chainText(chain)).toBe('Tế bào cơ tim → Mô cơ tim → Tim → Hệ tuần hoàn → Cơ thể người');
    expect(nodesAlong(BODIES.nguoi, ['khong-co'])).toHaveLength(1);
  });

  it('builds a stable quiz without the body itself', () => {
    const a = quizItems(BODIES.nguoi, 5).map((x) => x.node.id);
    const b = quizItems(BODIES.nguoi, 5).map((x) => x.node.id);
    expect(a).toEqual(b);
    expect(a).not.toContain('nguoi');
    expect(a.length).toBe(flatten(BODIES.nguoi).length - 1);
  });
});
