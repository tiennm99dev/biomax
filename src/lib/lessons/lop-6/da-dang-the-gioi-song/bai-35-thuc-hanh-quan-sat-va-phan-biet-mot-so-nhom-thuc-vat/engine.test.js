import { describe, expect, it } from 'vitest';
import { GROUPS, SAMPLES, checkGroup, checkSign } from './engine.js';

describe('plant sample tray', () => {
  it('has samples from all four groups, each with a proof and a red herring', () => {
    for (const g of GROUPS) expect(SAMPLES.some((s) => s.group === g.id)).toBe(true);
    for (const s of SAMPLES) {
      expect(s.observations.some((o) => o.decisive)).toBe(true);
      expect(s.observations.some((o) => !o.decisive)).toBe(true);
    }
    const ids = SAMPLES.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('checks the group of a sample', () => {
    const thong = SAMPLES.findIndex((s) => s.id === 'thong');
    expect(checkGroup(thong, 'hat-tran').ok).toBe(true);
    const wrong = checkGroup(thong, 'hat-kin');
    expect(wrong.ok).toBe(false);
    expect(wrong.text).toContain('có hoa');
  });

  it('accepts only a deciding observation as proof', () => {
    const thong = SAMPLES.findIndex((s) => s.id === 'thong');
    const obs = SAMPLES[thong].observations;
    const wood = obs.findIndex((o) => o.text.startsWith('Thân gỗ'));
    const cone = obs.findIndex((o) => o.text.startsWith('Có nón'));
    expect(checkSign(thong, wood).ok).toBe(false);
    expect(checkSign(thong, wood).text).toContain('hạt kín');
    expect(checkSign(thong, cone).ok).toBe(true);
  });

  it('never offers a shared feature of all plants as proof', () => {
    for (const s of SAMPLES)
      for (const o of s.observations)
        if (/lá xanh|Có mạch dẫn$/.test(o.text)) expect(o.decisive).toBe(false);
  });
});
