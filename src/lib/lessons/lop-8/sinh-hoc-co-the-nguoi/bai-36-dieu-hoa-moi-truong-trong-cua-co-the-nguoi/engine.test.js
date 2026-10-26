import { describe, expect, it } from 'vitest';
import { INDICES, levelOf, regulate, response, trace } from './engine.js';

describe('homeostasis model', () => {
  it('classifies values against the normal range', () => {
    expect(levelOf('duong-huyet', 3.8)).toBe('thap');
    expect(levelOf('duong-huyet', 3.9)).toBe('binh-thuong');
    expect(levelOf('duong-huyet', 6.4)).toBe('binh-thuong');
    expect(levelOf('duong-huyet', 6.5)).toBe('cao');
    expect(levelOf('than-nhiet', 38.4)).toBe('cao');
    expect(levelOf('than-nhiet', 35.6)).toBe('thap');
  });

  it('brings every event back into range within a few steps', () => {
    for (const x of Object.values(INDICES)) {
      for (const e of x.events) {
        expect(levelOf(x.id, e.value)).not.toBe('binh-thuong');
        const t = trace(x.id, e.value, 4);
        expect(levelOf(x.id, t[4])).toBe('binh-thuong');
        for (let k = 1; k < t.length; k++)
          expect(Math.abs(t[k] - x.setPoint)).toBeLessThan(Math.abs(t[k - 1] - x.setPoint));
      }
    }
  });

  it('keeps a high value high when regulation is impaired', () => {
    expect(regulate('duong-huyet', 9.5, true)).toBe(9.5);
    expect(regulate('duong-huyet', 3.1, true)).toBeGreaterThan(3.1);
    expect(response('duong-huyet', 9.5, true)).toContain('tiểu đường');
    expect(response('duong-huyet', 9.5)).toContain('insulin');
    expect(response('duong-huyet', 3.1)).toContain('glucagon');
    expect(response('than-nhiet', 38.4)).toContain('mồ hôi');
    expect(response('than-nhiet', 35.6)).toContain('run');
    expect(response('than-nhiet', 37)).toContain('cân bằng');
  });
});
