import { describe, expect, it } from 'vitest';
import { airflow, bloodAt, chest, describeBreath, describeExchange, diffusion } from './engine.js';

describe('breathing model', () => {
  it('grows the chest and flattens the diaphragm when breathing in', () => {
    const out = chest(0);
    const full = chest(1);
    expect(full.volume).toBeGreaterThan(out.volume);
    expect(full.dome).toBeLessThan(out.dome);
    expect(full.rim - full.dome).toBeGreaterThan(out.rim - out.dome);
    expect(full.ribLift).toBeGreaterThan(out.ribLift);
    expect(chest(5)).toEqual(full);
  });

  it('moves air in while the chest grows and out while it shrinks', () => {
    expect(airflow(0.2, 0.6)).toBe('vao');
    expect(airflow(0.6, 0.2)).toBe('ra');
    expect(airflow(0.5, 0.5)).toBe('dung');
    expect(describeBreath('vao').muscles).toContain('co');
    expect(describeBreath('ra').muscles).toContain('dãn');
  });
});

describe('gas exchange model', () => {
  it('sends oxygen into the blood and carbon dioxide out at the lungs', () => {
    const f = diffusion('phoi', 0);
    expect(f).toEqual([
      { gas: 'O₂', into: 'mau', amount: 60 },
      { gas: 'CO₂', into: 'ngoai', amount: 6 },
    ]);
  });

  it('sends oxygen into the cells and carbon dioxide into the blood at the tissues', () => {
    const f = diffusion('te-bao', 0);
    expect(f[0]).toMatchObject({ gas: 'O₂', into: 'ngoai' });
    expect(f[1]).toMatchObject({ gas: 'CO₂', into: 'mau' });
  });

  it('brings the blood close to its surroundings along the capillary', () => {
    expect(bloodAt('phoi', 0)).toEqual({ o2: 40, co2: 46 });
    expect(bloodAt('phoi', 1).o2).toBeGreaterThan(99);
    expect(bloodAt('te-bao', 1).o2).toBeLessThan(41);
    expect(describeExchange('phoi', 1)).toContain('gần bằng');
    expect(describeExchange('phoi', 0)).toContain('từ phế nang vào máu');
    expect(describeExchange('te-bao', 0)).toContain('từ máu vào tế bào');
  });
});
