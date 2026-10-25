import { describe, expect, it } from 'vitest';
import { validateDiagram } from '#lib/domain/diagrams.js';
import { CELL_DIAGRAMS, CELL_TYPES, FEATURES, cellKey, scoreTable } from './engine.js';

describe('grade-6 cell diagrams', () => {
  it('draws valid diagrams with well spaced hotspots', () => {
    for (const d of Object.values(CELL_DIAGRAMS)) expect(validateDiagram(d), d.id).toEqual([]);
  });

  it('gives every cell a membrane, cytoplasm and a nucleus or nucleoid', () => {
    for (const d of Object.values(CELL_DIAGRAMS)) {
      const ids = d.parts.map((p) => p.id);
      expect(ids).toContain('mang-te-bao');
      expect(ids).toContain('te-bao-chat');
      expect(ids.includes('nhan') || ids.includes('vung-nhan'), d.id).toBe(true);
    }
  });

  it('keeps chloroplasts, vacuole and cell wall to the plant cell among eukaryotes', () => {
    const plant = CELL_DIAGRAMS['thuc-vat'].parts.map((p) => p.id);
    const animal = CELL_DIAGRAMS['dong-vat'].parts.map((p) => p.id);
    for (const id of ['luc-lap', 'khong-bao', 'thanh-te-bao']) {
      expect(plant).toContain(id);
      expect(animal).not.toContain(id);
    }
    expect(CELL_DIAGRAMS['nhan-so'].parts.map((p) => p.id)).not.toContain('nhan');
  });
});

describe('structure table', () => {
  const answer = FEATURES.flatMap((f) =>
    CELL_TYPES.filter((t) => f.has[t.value]).map((t) => cellKey(f.id, t.value)),
  );

  it('accepts the right table', () => {
    const r = scoreTable(answer);
    expect(r.done).toBe(true);
    expect(r.total).toBe(FEATURES.length * 3);
  });

  it('marks a missing tick and an extra tick as wrong', () => {
    const ticked = answer.filter((k) => k !== cellKey('thanh', 'nhan-so'));
    ticked.push(cellKey('luc-lap', 'dong-vat'));
    const r = scoreTable(ticked);
    expect(r.wrong.sort()).toEqual([cellKey('luc-lap', 'dong-vat'), cellKey('thanh', 'nhan-so')]);
    expect(r.right).toBe(r.total - 2);
  });

  it('separates prokaryotes and eukaryotes by the nuclear envelope', () => {
    const nhan = FEATURES.find((f) => f.id === 'nhan');
    expect(nhan?.has).toEqual({ 'nhan-so': false, 'dong-vat': true, 'thuc-vat': true });
  });
});
