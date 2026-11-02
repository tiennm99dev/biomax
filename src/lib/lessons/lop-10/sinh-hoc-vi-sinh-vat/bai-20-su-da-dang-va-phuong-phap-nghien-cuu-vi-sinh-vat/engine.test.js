import { describe, expect, it } from 'vitest';
import {
  CARBON,
  ENERGY,
  MICROBES,
  REAGENTS,
  TYPES,
  colourAfter,
  isNextReagent,
  nextReagent,
  typeAt,
} from './engine.js';

describe('the nutrition matrix', () => {
  it('has one type in every cell', () => {
    const names = ENERGY.flatMap((e) => CARBON.map((c) => typeAt(e.id, c.id).id));
    expect(new Set(names).size).toBe(4);
  });

  it('names a type from its sources: quang for light, tự for inorganic carbon', () => {
    expect(typeAt('anh-sang', 'vo-co').name).toBe('Quang tự dưỡng');
    expect(typeAt('anh-sang', 'huu-co').name).toBe('Quang dị dưỡng');
    expect(typeAt('hoa-hoc', 'vo-co').name).toBe('Hoá tự dưỡng');
    expect(typeAt('hoa-hoc', 'huu-co').name).toBe('Hoá dị dưỡng');
  });

  it('gives every type at least one microbe and every microbe a real type', () => {
    const ids = TYPES.map((t) => t.id);
    expect(MICROBES.filter((m) => !ids.includes(m.bin))).toEqual([]);
    expect(ids.filter((id) => !MICROBES.some((m) => m.bin === id))).toEqual([]);
    expect(new Set(MICROBES.map((m) => m.id)).size).toBe(MICROBES.length);
  });
});

describe('the Gram stain', () => {
  it('uses the four reagents in the book order', () => {
    expect(REAGENTS.map((r) => r.id)).toEqual(['tim-ket-tinh', 'iodine', 'con', 'fuchsin']);
    expect(nextReagent(4)).toBeNull();
    expect(isNextReagent(0, 'tim-ket-tinh')).toBe(true);
    expect(isNextReagent(0, 'con')).toBe(false);
  });

  it('keeps Gram positive cells violet to the end', () => {
    expect([0, 1, 2, 3, 4].map((d) => colourAfter('positive', d))).toEqual([
      'khong-mau',
      'tim',
      'tim',
      'tim',
      'tim',
    ]);
  });

  it('bleaches Gram negative cells with alcohol, then stains them red', () => {
    expect([0, 1, 2, 3, 4].map((d) => colourAfter('negative', d))).toEqual([
      'khong-mau',
      'tim',
      'tim',
      'khong-mau',
      'do',
    ]);
  });
});
