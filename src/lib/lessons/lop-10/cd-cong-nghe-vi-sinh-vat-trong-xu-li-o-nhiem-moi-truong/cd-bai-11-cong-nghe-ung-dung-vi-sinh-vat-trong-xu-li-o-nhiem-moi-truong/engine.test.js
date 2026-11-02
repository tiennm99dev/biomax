import { describe, expect, it } from 'vitest';
import {
  AMBIENT,
  BOD_LIMIT,
  COMPOST_DAY_MAX,
  HOT,
  TANKS,
  dayInPile,
  freshPile,
  lineNote,
  pileNote,
  pileStage,
  runLine,
  turnPile,
} from './engine.js';

/** @typedef {import('./engine.js').TankId} TankId */

/**
 * @param {number} bod
 * @param {{ off?: TankId[], air?: number, flow?: 'cham' | 'nhanh' }} [opts]
 */
function line(bod, { off = [], air = 2, flow = 'cham' } = {}) {
  const on = /** @type {Record<TankId, boolean>} */ (
    Object.fromEntries(TANKS.map((t) => [t.id, !off.includes(t.id)]))
  );
  return { bod, on, air, flow };
}

describe('the wastewater station', () => {
  it('cleans household wastewater with settling and an aerobic tank', () => {
    const run = runLine(line(250, { off: ['ki-khi'], air: 2 }));
    expect(run.out).toBeCloseTo(35, 3);
    expect(run.pass).toBe(true);
    expect(run.biogas).toBe(0);
  });

  it('cannot clean a strong wastewater without the anaerobic tank', () => {
    const l = line(1500, { off: ['ki-khi'], air: 3 });
    const run = runLine(l);
    expect(run.overloaded).toBe(true);
    expect(run.pass).toBe(false);
    expect(lineNote(l, run).text).toContain('bể kị khí');
  });

  it('cleans it with both biological tanks, and gives biogas', () => {
    const run = runLine(line(1500, { air: 3 }));
    expect(run.pass).toBe(true);
    expect(run.out).toBeLessThanOrEqual(BOD_LIMIT);
    expect(run.biogas).toBeCloseTo(787.5, 3);
  });

  it('loses quality when the water runs too fast', () => {
    const l = line(250, { off: ['ki-khi'], air: 2, flow: 'nhanh' });
    const run = runLine(l);
    expect(run.pass).toBe(false);
    expect(lineNote(l, run).text).toContain('chảy nhanh');
  });

  it('removes nothing aerobically with the air off', () => {
    const l = line(250, { off: ['ki-khi'], air: 0 });
    const run = runLine(l);
    expect(run.out).toBeCloseTo(175, 3);
    expect(lineNote(l, run).text).toContain('sục khí');
  });

  it('lets the sludge escape without the last settling tank', () => {
    const l = line(250, { off: ['ki-khi', 'lang-cuoi'], air: 3 });
    const run = runLine(l);
    expect(run.washedOut).toBe(true);
    expect(run.out).toBeCloseTo(54, 3);
    expect(lineNote(l, run).text).toContain('bể lắng cuối');
  });

  it('never makes the water dirtier inside a biological tank', () => {
    const run = runLine(line(1500, { air: 1, flow: 'nhanh' }));
    const rising = run.stages.filter((s) => s.out > s.in);
    expect(rising).toEqual([]);
  });
});

/**
 * @param {import('./engine.js').Pile} pile
 * @param {number} days
 */
function wait(pile, days) {
  let p = pile;
  for (let i = 0; i < days; i += 1) p = dayInPile(p);
  return p;
}

/** A pile kept well: moist, and turned every five days. */
function wellKept() {
  let p = freshPile('vua');
  while (p.day < COMPOST_DAY_MAX) {
    p = turnPile(wait(p, 5));
  }
  return p;
}

describe('the compost pile', () => {
  it('passes 60 °C on its own heat when moist and turned', () => {
    expect(Math.max(...wellKept().history)).toBeGreaterThan(HOT);
    expect(wellKept().history[0]).toBe(AMBIENT);
  });

  it('runs through warm, hot, cooling and ripe stages in order', () => {
    let p = freshPile('vua');
    /** @type {string[]} */
    const seen = [pileStage(p)];
    while (p.day < COMPOST_DAY_MAX) {
      p = dayInPile(p.day % 5 === 0 ? turnPile(p) : p);
      const stage = pileStage(p);
      if (stage !== seen[seen.length - 1]) seen.push(stage);
    }
    expect(seen).toEqual(['Ưa ấm', 'Ưa nhiệt', 'Làm nguội', 'Ủ chín']);
    expect(pileNote(p).tone).toBe('ok');
    expect(p.ripeDay).toBeGreaterThan(20);
    expect(p.ripeDay).toBeLessThan(COMPOST_DAY_MAX);
  });

  it('stays cool when too dry', () => {
    const p = wait(freshPile('kho'), 20);
    expect(Math.max(...p.history)).toBeLessThan(45);
    expect(pileNote(p).text).toContain('quá khô');
  });

  it('cools down and warns when never turned', () => {
    const p = wait(freshPile('vua'), 20);
    expect(p.temp).toBeLessThan(Math.max(...p.history));
    expect(pileNote(p).text).toContain('đảo đống ủ');
  });

  it('warms up again after a turn', () => {
    const stale = wait(freshPile('vua'), 15);
    const turned = wait(turnPile(stale), 4);
    expect(turned.temp).toBeGreaterThan(stale.temp);
  });

  it('goes short of oxygen sooner when too wet', () => {
    expect(wait(freshPile('uot'), 6).oxygen).toBeLessThan(wait(freshPile('vua'), 6).oxygen);
  });
});
