import { describe, expect, it } from 'vitest';
import {
  ACHIEVEMENTS,
  BINS,
  FUNNEL,
  STEPS,
  attempt,
  funnelShare,
  judgeFace,
  lambFace,
  otherFace,
} from './engine.js';

/** @param {string[]} ids */
function run(ids) {
  let done = /** @type {string[]} */ ([]);
  for (const id of ids) {
    const next = attempt(done, id);
    if (!next.ok) throw new Error(`${id}: ${next.text}`);
    done = next.done;
  }
  return done;
}

describe('the cloning bench', () => {
  it('lets the two branches run in either order', () => {
    const later = ['dung-hop', 'nuoi-phoi', 'cay-phoi', 'sinh-con'];
    expect(run(['lay-nhan', 'lay-trung', 'loai-nhan', ...later])).toHaveLength(STEPS.length);
    expect(run(['lay-trung', 'loai-nhan', 'lay-nhan', ...later])).toHaveLength(STEPS.length);
  });

  it('refuses a step before its products exist and names them', () => {
    const early = attempt([], 'dung-hop');
    expect(early.ok).toBe(false);
    expect(early.done).toEqual([]);
    expect(early.text).toContain('nhân tế bào tuyến vú');
    expect(early.text).toContain('trứng đã loại nhân');
    const half = attempt(['lay-nhan', 'lay-trung'], 'dung-hop');
    expect(half.text).toContain('trứng đã loại nhân');
    expect(half.text).not.toContain('tuyến vú');
  });

  it('does not repeat a step', () => {
    expect(attempt(['lay-trung'], 'lay-trung').ok).toBe(false);
  });

  it('names only steps that exist as needs', () => {
    const ids = STEPS.map((s) => s.id);
    expect(STEPS.flatMap((s) => s.needs).filter((n) => !ids.includes(n))).toEqual([]);
  });
});

describe('the face of the lamb', () => {
  it('follows the nucleus donor, not the egg donor or surrogate', () => {
    expect(lambFace('trang')).toBe('trang');
    expect(lambFace('den')).toBe('den');
    expect(otherFace('den')).toBe('trang');
  });

  it('judges a prediction', () => {
    expect(judgeFace('trang', 'trang').ok).toBe(true);
    expect(judgeFace('den', 'trang').ok).toBe(false);
    expect(judgeFace('den', 'trang').text).toContain('mặt trắng');
  });
});

describe('the numbers of the experiment', () => {
  it('uses the reported counts', () => {
    expect(FUNNEL.map((f) => f.count)).toEqual([277, 29, 1]);
  });

  it('writes the shares with a decimal comma', () => {
    expect(funnelShare(277)).toBe('100%');
    expect(funnelShare(29)).toBe('10,47%');
    expect(funnelShare(1)).toBe('0,36%');
  });
});

describe('the achievements to sort', () => {
  it('puts every card in a bin, with three in each', () => {
    const ids = BINS.map((b) => b.id);
    expect(ACHIEVEMENTS.filter((c) => !ids.includes(c.bin))).toEqual([]);
    expect(ids.map((id) => ACHIEVEMENTS.filter((c) => c.bin === id).length)).toEqual([3, 3, 3]);
  });
});
