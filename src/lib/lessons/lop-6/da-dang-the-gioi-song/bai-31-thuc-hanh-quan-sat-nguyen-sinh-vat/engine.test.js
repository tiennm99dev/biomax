import { describe, expect, it } from 'vitest';
import {
  DROP_HALF,
  SHARP_AT,
  SOURCES,
  blurAt,
  canName,
  makeDrop,
  nameFeedback,
  protistCount,
  stepDrop,
  tally,
} from './engine.js';

describe('pond drops', () => {
  it('builds the same drop every time, with the counts of its source', () => {
    for (const s of SOURCES) {
      const a = makeDrop(s.id);
      expect(makeDrop(s.id)).toEqual(a);
      const total = Object.values(s.counts).reduce((x, y) => x + (y ?? 0), 0);
      expect(a).toHaveLength(total);
      expect(new Set(a.map((d) => d.id)).size).toBe(total);
      for (const d of a) expect(Math.hypot(d.x, d.y)).toBeLessThanOrEqual(DROP_HALF);
    }
  });

  it('has no protists in boiled water and many trùng giày in the hay infusion', () => {
    expect(protistCount(makeDrop('nuoc-soi'))).toBe(0);
    const hay = tally(makeDrop('binh-rom'), []);
    expect(hay).toEqual([expect.objectContaining({ found: 0, total: 5 })]);
    expect(hay[0].kind.id).toBe('trung-giay');
  });

  it('moves swimmers ten times slower with cotton and keeps them in the drop', () => {
    const drop = makeDrop('binh-rom');
    const fast = stepDrop(drop, 1, false);
    const slow = stepDrop(drop, 1, true);
    const i = drop.findIndex((d) => d.kind === 'trung-giay');
    const moved = (/** @type {typeof drop} */ b) =>
      Math.hypot(b[i].x - drop[i].x, b[i].y - drop[i].y);
    expect(moved(slow)).toBeCloseTo(30, 0);
    expect(moved(fast)).toBeGreaterThan(moved(slow));
    let far = drop;
    for (let k = 0; k < 50; k++) far = stepDrop(far, 1, false);
    for (const d of far) {
      expect(Math.abs(d.x)).toBeLessThanOrEqual(DROP_HALF);
      expect(Math.abs(d.y)).toBeLessThanOrEqual(DROP_HALF);
    }
  });
});

describe('naming rules', () => {
  const sharp = { lens: /** @type {const} */ ('vat-kinh-40'), focus: SHARP_AT, cotton: true };

  it('needs the 40× objective and a sharp image', () => {
    expect(canName({ ...sharp, kind: 'tao-luc', lens: 'vat-kinh-10' }).ok).toBe(false);
    expect(canName({ ...sharp, kind: 'tao-luc', focus: 2 }).reason).toContain('mờ');
    expect(canName({ ...sharp, kind: 'tao-luc' }).ok).toBe(true);
    expect(blurAt(SHARP_AT)).toBe(0);
    expect(blurAt(0)).toBeGreaterThan(blurAt(4));
  });

  it('needs cotton for the fast swimmers only', () => {
    expect(canName({ ...sharp, kind: 'trung-giay', cotton: false }).reason).toContain('sợi bông');
    expect(canName({ ...sharp, kind: 'trung-roi', cotton: false }).ok).toBe(false);
    expect(canName({ ...sharp, kind: 'trung-bien-hinh', cotton: false }).ok).toBe(true);
    expect(canName({ ...sharp, kind: 'trung-giay' }).ok).toBe(true);
  });

  it('keeps bubbles and debris out of the protist count', () => {
    expect(nameFeedback('bot-khi', 'bot-khi')).toContain('không phải sinh vật');
    expect(nameFeedback('trung-giay', 'trung-giay')).toContain('bảng đếm');
    expect(nameFeedback('trung-giay', 'trung-roi')).toContain('Chưa đúng');
    const drop = makeDrop('vang-ao');
    const bubble = drop.find((d) => d.kind === 'bot-khi');
    const rows = tally(
      drop,
      drop.map((d) => d.id),
    );
    expect(rows.reduce((s, r) => s + r.found, 0)).toBe(protistCount(drop));
    expect(rows.some((r) => r.kind.id === 'bot-khi')).toBe(false);
    expect(bubble).toBeDefined();
  });
});
