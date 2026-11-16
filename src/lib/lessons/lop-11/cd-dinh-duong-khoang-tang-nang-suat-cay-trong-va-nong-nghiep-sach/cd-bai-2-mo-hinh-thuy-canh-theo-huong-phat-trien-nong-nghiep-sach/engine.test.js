import { describe, expect, it } from 'vitest';
import {
  HARVEST,
  PH_HIGH,
  PH_LOW,
  PPM_HIGH,
  PPM_LOW,
  act,
  diagnose,
  freshBed,
  growthFactor,
  nextDay,
} from './engine.js';

/** @param {import('./engine.js').Bed} bed */
function tend(bed) {
  let b = bed;
  for (let i = 0; i < 10; i += 1) {
    if (b.level < 10) b = act(b, 'nuoc');
    else if (b.ph > PH_HIGH - 0.3) b = act(b, 'ha-ph');
    else if (b.ph < PH_LOW + 0.2) b = act(b, 'tang-ph');
    else if (b.ppm > PPM_HIGH - 100) b = act(b, 'nuoc');
    else if (b.ppm < PPM_LOW + 50) b = act(b, 'dinh-duong');
    else break;
  }
  return b;
}

describe('the hydroponic bed', () => {
  it('starts out of range, so the grower has to adjust it', () => {
    const bed = freshBed();
    expect(growthFactor(bed)).toBeLessThan(1);
    expect(diagnose(bed).tone).toBe('warn');
  });

  it('reaches harvest in about four weeks when tended every day', () => {
    let bed = freshBed();
    while (bed.height < HARVEST && bed.day < 60) bed = nextDay(tend(bed));
    expect(bed.day).toBeGreaterThanOrEqual(20);
    expect(bed.day).toBeLessThanOrEqual(30);
    expect(diagnose(bed).tone).toBe('ok');
  });

  it('grows much less when left alone', () => {
    let bed = freshBed();
    for (let d = 0; d < 25; d += 1) bed = nextDay(bed);
    expect(bed.height).toBeLessThan(HARVEST - 5);
  });

  it('concentrates the solution as water is used and dilutes it with water', () => {
    const bed = { ...freshBed(), ppm: 800 };
    expect(nextDay(bed).ppm).toBeGreaterThan(800);
    const low = { ...bed, level: 10 };
    expect(act(low, 'nuoc').ppm).toBeCloseTo((800 * 10) / 12, 1);
  });

  it('acidifies the still solution and names the missing air first', () => {
    const still = act({ ...freshBed(), ph: 6, ppm: 800 }, 'suc-khi');
    expect(nextDay(still).ph).toBeLessThan(6);
    expect(diagnose(still).text).toContain('sục khí');
  });
});
