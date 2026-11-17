import { describe, expect, it } from 'vitest';
import { ACTIONS, PROTOCOL, START, apply, tubeText, verdict } from './engine.js';

/** @param {string[]} ids */
function run(ids) {
  let tube = START;
  /** @type {ReturnType<typeof apply>[]} */
  const steps = [];
  for (const id of ids) {
    const step = apply(tube, id);
    steps.push(step);
    tube = step.tube;
  }
  return { tube, steps };
}

describe('the right protocol', () => {
  it('gives pure, unbroken DNA with every step marked right', () => {
    const { tube, steps } = run(PROTOCOL);
    expect(tube.done).toBe(true);
    expect(verdict(tube).ok).toBe(true);
    expect(steps.map((s) => s.tone)).toEqual(PROTOCOL.map(() => 'ok'));
  });

  it('lets the enzymes come before the spin', () => {
    const { tube } = run([
      'dem-edta',
      'pha-vo',
      'rnase',
      'protease',
      'ly-tam-can',
      'ethanol',
      'thu-tua',
    ]);
    expect(verdict(tube).ok).toBe(true);
  });

  it('never changes the tube it is given', () => {
    const before = { ...START };
    apply(START, 'pha-vo');
    expect(START).toEqual(before);
  });

  it('describes every action', () => {
    expect(ACTIONS.filter((a) => a.role.length < 10)).toEqual([]);
  });
});

describe('the mistakes', () => {
  it('cuts the DNA when the cells break without EDTA', () => {
    const { tube, steps } = run([
      'pha-vo',
      'dem-edta',
      'ly-tam-can',
      'protease',
      'rnase',
      'ethanol',
      'thu-tua',
    ]);
    expect(steps[0].tone).toBe('warn');
    expect(steps[1].text).toContain('muộn');
    expect(verdict(tube).text).toContain('đứt gãy');
  });

  it('names what is left in the pellet when a step is skipped', () => {
    const { tube, steps } = run(['dem-edta', 'pha-vo', 'protease', 'ethanol', 'thu-tua']);
    expect(steps[3].text).toContain('RNA');
    const v = verdict(tube);
    expect(v.ok).toBe(false);
    expect(v.text).toContain('lẫn RNA');
    expect(v.text).toContain('lẫn mảnh vụn tế bào');
    expect(v.text).not.toContain('lẫn protein');
  });

  it('loses the DNA when unbroken cells are spun down or DNase is added', () => {
    const spun = run(['dem-edta', 'ly-tam-can']);
    expect(spun.tube.dna).toBe('mat');
    expect(tubeText(spun.tube)).toContain('bỏ đi cùng cặn');
    expect(apply(spun.tube, 'pha-vo').text).toContain('Làm lại');
    const cut = run(['dem-edta', 'pha-vo', 'dnase']);
    expect(cut.tube.dna).toBe('mat');
    expect(verdict(cut.tube).ok).toBe(false);
  });

  it('refuses enzymes and alcohol before the cells are broken', () => {
    const fails = ['protease', 'rnase', 'ethanol'].filter((id) => {
      const step = apply(START, id);
      return step.tone !== 'warn' || step.tube.protein !== true || step.tube.precipitated;
    });
    expect(fails).toEqual([]);
    expect(apply(START, 'thu-tua').tone).toBe('warn');
  });

  it('breaks the DNA by boiling or hard shaking', () => {
    expect(run(['dem-edta', 'dun-soi']).tube.dna).toBe('dut');
    expect(run(['dem-edta', 'pha-vo', 'lac-manh']).tube.dna).toBe('dut');
    expect(run(['dem-edta', 'lac-manh']).tube.dna).toBe('nguyen');
  });

  it('stops enzyme work once the DNA is in alcohol', () => {
    const { tube } = run(['dem-edta', 'pha-vo', 'ethanol']);
    const late = apply(tube, 'protease');
    expect(late.tube.protein).toBe(true);
    expect(late.text).toContain('cồn');
    expect(tubeText(tube)).toContain('tủa gồm');
  });
});
