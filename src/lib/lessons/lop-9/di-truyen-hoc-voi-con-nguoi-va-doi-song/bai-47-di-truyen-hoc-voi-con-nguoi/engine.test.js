import { describe, expect, it } from 'vitest';
import { consistentModes, possibleGenotypes, validate } from '#lib/domain/pedigree.js';
import {
  SCENARIOS,
  check,
  choicesFor,
  dominance,
  genotypeSpeech,
  genotypeTex,
  keyFamily,
  labels,
  readingOrder,
  reasonFor,
  scenarioById,
} from './engine.js';

const albinism = scenarioById('bach-tang');
const haemophilia = scenarioById('mau-kho-dong');
const huntington = scenarioById('huntington');

describe('pedigree scenarios', () => {
  it('are valid pedigrees that their stated mode explains', () => {
    const problems = SCENARIOS.flatMap((s) => [
      ...validate(s.pedigree).map((m) => `${s.id}: ${m}`),
      ...(consistentModes(s.pedigree).includes(s.mode) ? [] : [`${s.id}: mode does not fit`]),
    ]);
    expect(problems).toEqual([]);
  });

  it('tells dominant from recessive from the pedigree alone', () => {
    expect(dominance(albinism.pedigree)).toBe('lặn');
    expect(dominance(haemophilia.pedigree)).toBe('lặn');
    expect(dominance(huntington.pedigree)).toBe('trội');
    expect(consistentModes(albinism.pedigree)).toEqual(['AR']);
    expect(consistentModes(huntington.pedigree)).toEqual(['AD']);
  });

  it('finds the family that settles dominance', () => {
    expect(keyFamily(albinism.pedigree)).toEqual({
      father: 'i1',
      mother: 'i2',
      child: 'ii1',
      kind: 'lặn',
    });
    expect(keyFamily(huntington.pedigree)?.kind).toBe('trội');
  });

  it('labels people the textbook way in reading order', () => {
    const name = labels(albinism.pedigree);
    expect(name.ii2).toBe('II.1');
    expect(name.ii1).toBe('II.2');
    expect(readingOrder(albinism.pedigree).map((x) => name[x.id])).toEqual([
      'I.1',
      'I.2',
      'II.1',
      'II.2',
      'II.3',
      'III.1',
      'III.2',
    ]);
  });

  it('works out the genotypes the textbook way', () => {
    expect(possibleGenotypes(albinism.pedigree, 'AR')).toEqual({
      i1: ['Aa'],
      i2: ['Aa'],
      ii2: ['AA', 'Aa'],
      ii1: ['aa'],
      ii3: ['Aa'],
      iii1: ['Aa'],
      iii2: ['aa'],
    });
    const x = possibleGenotypes(haemophilia.pedigree, 'XR');
    expect(x.i2).toEqual(['XAXa']);
    expect(x.ii2).toEqual(['XAXa']);
    expect(x.iii2).toEqual(['XAXA', 'XAXa']);
    expect(possibleGenotypes(huntington.pedigree, 'AD').ii2).toEqual(['Aa']);
  });

  it('checks a learner’s picks person by person', () => {
    const picks = { i1: ['Aa'], i2: ['AA'], ii2: ['AA', 'Aa'], ii1: ['aa'], iii2: ['aa'] };
    const r = check(albinism.pedigree, 'AR', picks);
    expect(r.right).toEqual(['i1', 'ii2', 'ii1', 'iii2']);
    expect(r.wrong).toEqual(['i2']);
    expect(r.missing).toEqual(['ii3', 'iii1']);
    expect(choicesFor('XR', { id: 'm', sex: 'M', affected: false })).toEqual(['XAY', 'XaY']);
  });

  it('explains why each genotype is forced', () => {
    expect(reasonFor(albinism.pedigree, 'AR', 'ii3')).toContain(
      'truyền một allele a cho con III.2',
    );
    expect(reasonFor(albinism.pedigree, 'AR', 'iii1')).toContain('từ II.2');
    expect(reasonFor(albinism.pedigree, 'AR', 'ii2')).toContain('chưa đủ dữ kiện');
    expect(reasonFor(haemophilia.pedigree, 'XR', 'ii3')).toContain('kiểu hình');
    expect(reasonFor(huntington.pedigree, 'AD', 'iii1')).toContain('từ II.3');
  });

  it('writes genotypes as TeX and as speech', () => {
    expect(genotypeTex('XAXa')).toBe('$X^AX^a$');
    expect(genotypeTex('Aa')).toBe('$Aa$');
    expect(genotypeSpeech('XaY')).toBe('X mang a, Y');
  });
});
