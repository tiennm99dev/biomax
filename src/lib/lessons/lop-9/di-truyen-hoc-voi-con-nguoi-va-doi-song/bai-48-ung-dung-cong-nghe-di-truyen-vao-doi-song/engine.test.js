import { describe, expect, it } from 'vitest';
import { rng } from '#lib/core/drill.js';
import {
  ENZYMES,
  GENE_SPAN,
  HUMAN_DNA,
  PLASMID,
  canJoin,
  complement,
  cutHuman,
  cutLinear,
  cutPlasmid,
  enzymeById,
  findCircularSites,
  findSites,
  humanCutText,
  plasmidCutText,
  stickyEnd,
  transform,
} from './engine.js';

const ecori = enzymeById('ecori');
const bamhi = enzymeById('bamhi');
const hindiii = enzymeById('hindiii');

describe('restriction enzymes', () => {
  it('leave the textbook sticky ends', () => {
    expect(ENZYMES.map(stickyEnd)).toEqual(['AATT', 'GATC', 'AGCT']);
    // Recognition sites read the same on both strands (palindromes).
    const bad = ENZYMES.filter((e) => [...complement(e.site)].reverse().join('') !== e.site);
    expect(bad).toEqual([]);
  });

  it('finds sites in linear and circular DNA', () => {
    expect(findSites('AGAATTCTTGAATTCCGGAATTCA', 'GAATTC')).toEqual([1, 9, 17]);
    expect(cutLinear('AGAATTCTTGAATTCCGGAATTCA', ecori)).toHaveLength(4);
    expect(findCircularSites('ATTCAAGA', 'GAATTC')).toEqual([6]);
    expect(complement('GAATTC')).toBe('CTTAAG');
  });
});

describe('the insulin lab', () => {
  it('has the gene between two EcoRI sites with one BamHI site inside it', () => {
    const gene = HUMAN_DNA.slice(...GENE_SPAN);
    expect(gene.startsWith('ATG')).toBe(true);
    expect(findSites(gene, 'GGATCC')).toHaveLength(1);
    expect(findSites(HUMAN_DNA, 'GAATTC')).toHaveLength(2);
  });

  it('frees the gene only with EcoRI', () => {
    expect(cutHuman(ecori).outcome).toBe('excised');
    expect(cutHuman(ecori).pieces[1]).toBe(`AATTC${HUMAN_DNA.slice(...GENE_SPAN)}G`);
    expect(cutHuman(bamhi).outcome).toBe('inside');
    expect(cutHuman(hindiii).outcome).toBe('one-side');
  });

  it('opens the plasmid once with EcoRI or BamHI, never with HindIII', () => {
    expect(cutPlasmid(ecori)).toEqual({ outcome: 'opened', sites: [0] });
    expect(cutPlasmid(bamhi).outcome).toBe('opened');
    expect(cutPlasmid(hindiii).outcome).toBe('none');
    expect(findCircularSites(PLASMID, 'GAATTC')).toHaveLength(1);
  });

  it('joins only matching sticky ends', () => {
    expect(canJoin(ecori, ecori)).toBe(true);
    expect(canJoin(ecori, bamhi)).toBe(false);
    expect(canJoin(bamhi, bamhi)).toBe(false);
  });

  it('explains each cut', () => {
    expect(humanCutText(ecori)).toContain('nguyên vẹn');
    expect(humanCutText(bamhi)).toContain('đứt đôi');
    expect(humanCutText(hindiii)).toContain('một phía');
    expect(plasmidCutText(ecori, ecori)).toContain('khớp');
    expect(plasmidCutText(bamhi, ecori)).toContain('không bổ sung');
    expect(plasmidCutText(hindiii, ecori)).toContain('không mở được');
  });

  it('lets only some cells take up the plasmid', () => {
    const cells = transform(400, 0.3, rng(5));
    const share = cells.filter(Boolean).length / cells.length;
    expect(share).toBeGreaterThan(0.2);
    expect(share).toBeLessThan(0.4);
  });
});
