import { describe, expect, it } from 'vitest';
import { validateDiagram } from '#lib/domain/diagrams.js';
import {
  ANIMALS,
  ANIMAL_STAGE_COUNT,
  FLOWER,
  PLANT_STAGES,
  animalById,
  animalText,
  asPollinator,
  plantText,
} from './engine.js';

describe('flower diagram', () => {
  it('passes the diagram checks: unique parts, inside, no overlapping hotspots', () => {
    expect(validateDiagram(FLOWER)).toEqual([]);
    expect(FLOWER.parts).toHaveLength(10);
  });
});

describe('plant stages', () => {
  it('names the pollinator only on the pollination step', () => {
    expect(PLANT_STAGES).toHaveLength(5);
    expect(plantText(1, 'gio')).toContain('nhờ gió');
    expect(plantText(1, 'con-trung')).toContain('nhờ côn trùng');
    expect(plantText(0, 'gio')).not.toContain('nhờ gió');
    expect(plantText(4, 'gio')).toContain('bầu nhụy phát triển thành quả');
    expect(plantText(12, 'gio')).toContain('Bước 5');
    expect(asPollinator('gio')).toBe('gio');
    expect(asPollinator('khac')).toBe('con-trung');
  });
});

describe('animal stages', () => {
  it('tells external from internal fertilization and egg laying from live birth', () => {
    expect(ANIMAL_STAGE_COUNT).toBe(4);
    expect(animalText(animalById('ca-chep'), 1)).toContain('thụ tinh ngoài');
    expect(animalText(animalById('ga'), 1)).toContain('thụ tinh trong');
    expect(animalText(animalById('ga'), 3)).toContain('đẻ trứng');
    expect(animalText(animalById('tho'), 3)).toContain('đẻ con');
    expect(animalById('khong-co').id).toBe(ANIMALS[0].id);
  });
});
