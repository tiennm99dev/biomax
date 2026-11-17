import { describe, expect, it } from 'vitest';
import {
  TREES,
  commonAncestor,
  eraOf,
  layoutTree,
  pathTo,
  timeText,
  tipsOf,
  treeNote,
} from './engine.js';

/** @param {string} id */
const treeOf = (id) => {
  const t = TREES.find((x) => x.id === id);
  if (!t) throw new Error(`missing tree ${id}`);
  return t;
};

/** @param {import('./engine.js').TreeNode} node @returns {import('./engine.js').TreeNode[]} */
const all = (node) => [node, ...(node.children ?? []).flatMap(all)];

describe('the trees', () => {
  it('runs every branch forward in time and inside the axis', () => {
    const bad = [];
    for (const tree of TREES) {
      if (tree.root.time > tree.span) bad.push(tree.id);
      for (const n of all(tree.root)) {
        for (const c of n.children ?? []) if (c.time > n.time) bad.push(c.id);
        if (!n.children) {
          if ((n.start ?? 0) > n.time || (n.end ?? 0) > (n.start ?? 0)) bad.push(n.id);
          if (!n.name || !n.info) bad.push(n.id);
        }
      }
    }
    expect(bad).toEqual([]);
  });

  it('gives each tip its own row and centres the splits', () => {
    const tree = treeOf('xuong-song');
    const placed = layoutTree(tree, { left: 10, right: 210, top: 20, row: 20 });
    expect(placed).toHaveLength(all(tree.root).length);
    const tipYs = placed.filter((p) => !p.node.children).map((p) => p.y);
    expect(new Set(tipYs).size).toBe(tipsOf(tree.root).length);
    const root = placed.find((p) => p.node === tree.root);
    expect(root?.x).toBeCloseTo(10 + (20 / 450) * 200, 3);
    const outside = placed.filter((p) => p.x < 10 || p.x > 210 || (p.endX ?? 10) > 210);
    expect(outside).toEqual([]);
  });
});

describe('common ancestors', () => {
  const vert = treeOf('xuong-song').root;

  it('finds the most recent common ancestor', () => {
    expect(commonAncestor(vert, 'nguoi', 'chuot').time).toBe(90);
    expect(commonAncestor(vert, 'chim', 'ca-sau').time).toBe(245);
    expect(commonAncestor(vert, 'nguoi', 'ech').time).toBe(352);
    expect(commonAncestor(vert, 'chim', 'chuot').time).toBe(312);
    expect(() => commonAncestor(vert, 'nguoi', 'khong-co')).toThrow(RangeError);
  });

  it('shows birds closer to crocodiles than to lizards', () => {
    expect(commonAncestor(vert, 'chim', 'ca-sau').time).toBeLessThan(
      commonAncestor(vert, 'chim', 'than-lan').time,
    );
    expect(pathTo(vert, 'chim').map((n) => n.id)).toEqual([
      'r0',
      'r1',
      'r2',
      'r3',
      'r4',
      'r6',
      'r7',
      'chim',
    ]);
  });

  it('puts humans next to chimpanzees', () => {
    const apes = treeOf('linh-truong').root;
    expect(commonAncestor(apes, 'nguoi', 'tinh-tinh').time).toBe(6);
    expect(treeNote(treeOf('linh-truong'), ['nguoi', 'tinh-tinh'])).toContain('họ hàng gần nhất');
  });
});

describe('words', () => {
  it('writes times and eras', () => {
    expect(timeText(90)).toBe('90 triệu năm');
    expect(timeText(4.4)).toBe('4,4 triệu năm');
    expect(timeText(0.65)).toBe('650 nghìn năm');
    expect([430, 245, 90, 6].map(eraOf)).toEqual([
      'đại Cổ sinh',
      'đại Trung sinh',
      'đại Trung sinh',
      'đại Tân sinh',
    ]);
  });

  it('explains one or two chosen tips', () => {
    const humans = treeOf('loai-nguoi');
    expect(treeNote(humans, [])).toContain('Chạm');
    expect(treeNote(humans, ['neanderthal'])).toContain('tuyệt chủng');
    expect(treeNote(humans, ['neanderthal', 'sapiens'])).toContain('650 nghìn năm');
  });
});
