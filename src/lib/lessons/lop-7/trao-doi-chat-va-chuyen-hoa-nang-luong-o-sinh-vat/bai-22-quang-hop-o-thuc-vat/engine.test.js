import { describe, expect, it } from 'vitest';
import { INPUTS, TOKENS, equationParts, offer, ready } from './engine.js';

describe('leaf model', () => {
  it('needs exactly water, carbon dioxide and light', () => {
    expect(
      TOKENS.filter((t) => t.needed)
        .map((t) => t.id)
        .sort(),
    ).toEqual([...INPUTS].sort());
  });

  it('turns products and darkness away', () => {
    for (const id of ['oxygen', 'glucose', 'bong-toi']) {
      const r = offer([], id);
      expect(r.ok).toBe(false);
      expect(r.inLeaf).toEqual([]);
    }
  });

  it('fills the equation one input at a time', () => {
    let leaf = /** @type {string[]} */ ([]);
    leaf = offer(leaf, 'nuoc').inLeaf;
    expect(equationParts(leaf, false)).toEqual({
      nuoc: true,
      carbonDioxide: false,
      anhSang: false,
      products: false,
    });
    expect(ready(leaf)).toBe(false);
    expect(offer(leaf, 'nuoc').inLeaf).toEqual(leaf);
    leaf = offer(leaf, 'carbon-dioxide').inLeaf;
    const last = offer(leaf, 'anh-sang');
    expect(last.text).toContain('Quang hợp');
    expect(ready(last.inLeaf)).toBe(true);
    expect(offer([], 'khong-co').ok).toBe(false);
  });
});

describe('leaf diagram', () => {
  it('is a valid hotspot diagram', async () => {
    const { validateDiagram } = await import('#lib/domain/diagrams.js');
    const { LEAF_DIAGRAM } = await import('./engine.js');
    expect(validateDiagram(LEAF_DIAGRAM)).toEqual([]);
  });
});
