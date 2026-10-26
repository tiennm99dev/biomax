import { describe, expect, it } from 'vitest';
import { GROUPS } from '../_shared/animal-groups.js';
import { SIGHTINGS, SITES, branchTally, fileFeedback, sightingsAt, tally } from './engine.js';

describe('field sightings', () => {
  it('places every sighting at a known site and covers all nine groups', () => {
    const sites = SITES.map((s) => s.id);
    for (const s of SIGHTINGS) expect(sites).toContain(s.site);
    for (const site of sites) expect(sightingsAt(site).length).toBeGreaterThan(0);
    for (const g of GROUPS) expect(SIGHTINGS.some((s) => s.group === g.id)).toBe(true);
    const ids = SIGHTINGS.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('explains a wrong filing by branch or by group', () => {
    expect(fileFeedback('soc', 'thu').ok).toBe(true);
    const crossBranch = fileFeedback('cua', 'ca');
    expect(crossBranch.ok).toBe(false);
    expect(crossBranch.text).toContain('không có xương sống');
    const sameBranch = fileFeedback('so', 'chan-khop');
    expect(sameBranch.text).toContain('Nhánh đã đúng');
  });

  it('counts only correct entries, by group and by branch', () => {
    /** @type {import('./engine.js').Journal} */
    const journal = { ech: 'luong-cu', cua: 'chan-khop', nhen: 'chan-khop', soc: 'ca' };
    const counts = Object.fromEntries(tally(journal).map((c) => [c.id, c.count]));
    expect(counts['chan-khop']).toBe(2);
    expect(counts['luong-cu']).toBe(1);
    expect(counts.ca).toBe(0);
    expect(counts.thu).toBe(0);
    expect(branchTally(journal)).toEqual({ invertebrates: 2, vertebrates: 1 });
  });
});
