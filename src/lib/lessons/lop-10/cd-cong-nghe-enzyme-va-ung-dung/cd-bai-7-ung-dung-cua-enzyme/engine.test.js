import { describe, expect, it } from 'vitest';
import { APPLICATIONS, ENZYME_BINS, FIELD_BINS, deck } from './engine.js';

describe('the application cards', () => {
  it('has unique ids and known bins', () => {
    const ids = APPLICATIONS.map((a) => a.id);
    expect(new Set(ids).size).toBe(ids.length);
    const fields = FIELD_BINS.map((b) => b.id);
    const enzymes = ENZYME_BINS.map((b) => b.id);
    const bad = APPLICATIONS.filter(
      (a) => !fields.includes(a.field) || (a.enzyme !== null && !enzymes.includes(a.enzyme)),
    );
    expect(bad).toEqual([]);
  });

  it('fills every bin in both sorts', () => {
    const emptyEnzyme = ENZYME_BINS.filter((b) => !deck('enzyme').some((c) => c.bin === b.id));
    const emptyField = FIELD_BINS.filter((b) => !deck('field').some((c) => c.bin === b.id));
    expect(emptyEnzyme).toEqual([]);
    expect(emptyField).toEqual([]);
  });

  it('keeps the enzyme name off the cards of the sort by enzyme', () => {
    const leaks = deck('enzyme').filter((c) =>
      ENZYME_BINS.some((b) => c.label.toLowerCase().includes(b.label.toLowerCase())),
    );
    expect(leaks).toEqual([]);
  });

  it('puts the matches of the lesson together', () => {
    const byId = Object.fromEntries(deck('enzyme').map((c) => [c.id, c.bin]));
    expect(byId['mach-nha']).toBe('amylase');
    expect(byId['bot-giat-mau']).toBe('protease');
  });

  it('names the enzyme on the cards of the sort by field and uses every card', () => {
    const cards = deck('field');
    expect(cards).toHaveLength(APPLICATIONS.length);
    expect(cards.find((c) => c.id === 'pcr')?.label).toContain('Taq polymerase');
  });
});
