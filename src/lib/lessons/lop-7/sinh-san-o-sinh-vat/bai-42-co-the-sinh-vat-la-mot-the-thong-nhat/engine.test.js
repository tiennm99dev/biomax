import { describe, expect, it } from 'vitest';
import { LINKS, NODES, STOP, isLit, linksOf, networkText, nodeById } from './engine.js';

describe('life process network', () => {
  it('joins only known nodes, with no link drawn twice', () => {
    const ids = new Set(NODES.map((n) => n.id));
    const seen = new Set();
    for (const l of LINKS) {
      expect(ids.has(l.a) && ids.has(l.b)).toBe(true);
      const key = [l.a, l.b].sort().join('|');
      expect(seen.has(key)).toBe(false);
      seen.add(key);
    }
  });

  it('links every pair of the four life processes', () => {
    expect(linksOf('trao-doi-chat')).toHaveLength(4);
    expect(linksOf('sinh-san')).toHaveLength(3);
    expect(linksOf('moi-truong').map((l) => l.other.id)).toEqual(['trao-doi-chat', 'cam-ung']);
  });

  it('highlights the links of the selected node only', () => {
    expect(isLit(LINKS[0], null)).toBe(false);
    expect(isLit(LINKS[0], 'moi-truong')).toBe(true);
    expect(isLit(LINKS[0], 'sinh-san')).toBe(false);
  });

  it('says what stopping a process does to the others', () => {
    expect(STOP['trao-doi-chat'].affects).toHaveLength(3);
    expect(STOP['sinh-san'].affects).toHaveLength(0);
    expect(networkText(null, false)).toContain('Bấm');
    expect(networkText('sinh-truong', true)).toContain('không sinh sản được');
    expect(networkText('sinh-san', false)).toContain('3 ô khác');
    expect(nodeById('khong-co')).toBeNull();
  });
});
